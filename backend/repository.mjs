import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(new URL('..', import.meta.url)));
const DATA_DIR = process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(ROOT, 'data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.ndjson');
const EMAIL_FILE = path.join(DATA_DIR, 'email-delivery.ndjson');
const EVENTS_FILE = path.join(DATA_DIR, 'audit-events.ndjson');
function cutoffIso(days){return new Date(Date.now()-days*86400000).toISOString();}
function rewrite(file, rows){fs.writeFileSync(file, rows.map(x=>JSON.stringify(x)).join('\n')+(rows.length?'\n':''),{encoding:'utf8',mode:0o600});}

export function createRepository() {
  const mode = (process.env.STORAGE_MODE || 'local').toLowerCase();
  if (mode === 'supabase') return createSupabaseRepository();
  if (mode === 'local') return createLocalRepository();
  throw new Error(`Unsupported STORAGE_MODE: ${mode}`);
}

function createLocalRepository() {
  fs.mkdirSync(DATA_DIR, { recursive: true, mode: 0o700 });
  const read = file => fs.existsSync(file) ? fs.readFileSync(file, 'utf8').split('\n').filter(Boolean).map(line => JSON.parse(line)) : [];
  return {
    mode: 'local',
    async createSubmission(record) { fs.appendFileSync(SUBMISSIONS_FILE, JSON.stringify(record) + '\n', { encoding: 'utf8', mode: 0o600 }); },
    async findByIdempotencyKey(type,key) { return read(SUBMISSIONS_FILE).find(x => x.type === type && x.idempotencyKey === key) || null; },
    async createEmailDelivery(record) { fs.appendFileSync(EMAIL_FILE, JSON.stringify(record) + '\n', { encoding: 'utf8', mode: 0o600 }); },
    async createAuditEvent(record) { fs.appendFileSync(EVENTS_FILE, JSON.stringify(record) + '\n', { encoding: 'utf8', mode: 0o600 }); },
    async findSubmissionById(id) { return read(SUBMISSIONS_FILE).find(x=>x.id===id)||null; },
    async listAuditEvents({submissionId, limit=100}) { return read(EVENTS_FILE).filter(x => !submissionId || x.submissionId === submissionId).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).slice(0,limit); },
    async listSubmissions({limit,type,status}) { return read(SUBMISSIONS_FILE).filter(x => (!type||x.type===type)&&(!status||x.status===status)).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).slice(0,limit); },
    async updateSubmissionStatus(id,status,updatedAt) { const rows=read(SUBMISSIONS_FILE); const index=rows.findIndex(x=>x.id===id); if(index<0)return null; rows[index].status=status; rows[index].updatedAt=updatedAt; fs.writeFileSync(SUBMISSIONS_FILE, rows.map(x=>JSON.stringify(x)).join('\n')+'\n',{encoding:'utf8',mode:0o600}); return rows[index]; },
    async purgeOlderThan({submissionDays=365,auditDays=730}) { const sc=cutoffIso(submissionDays), ac=cutoffIso(auditDays); const submissions=read(SUBMISSIONS_FILE), keepS=submissions.filter(x=>x.createdAt>=sc); const removed= submissions.length-keepS.length; rewrite(SUBMISSIONS_FILE,keepS); const events=read(EVENTS_FILE), keepE=events.filter(x=>x.createdAt>=ac && keepS.some(s=>s.id===x.submissionId)); rewrite(EVENTS_FILE,keepE); return {submissionsRemoved:removed,auditEventsRemoved:events.length-keepE.length}; },
    async health() { return { ok: true, mode: 'local' }; },
  };
}

function requireEnv(name) { const value=process.env[name]; if(!value) throw new Error(`${name} is required when STORAGE_MODE=supabase.`); return value; }
function createSupabaseRepository() {
  const url=requireEnv('SUPABASE_URL').replace(/\/$/,''); const serviceKey=requireEnv('SUPABASE_SERVICE_ROLE_KEY');
  const table=process.env.SUPABASE_ENQUIRIES_TABLE||'institutional_enquiries'; const emailTable=process.env.SUPABASE_EMAIL_TABLE||'email_deliveries'; const auditTable=process.env.SUPABASE_AUDIT_TABLE||'audit_events';
  async function request(pathname,options={}) { const response=await fetch(`${url}/rest/v1/${pathname}`,{...options,headers:{apikey:serviceKey,Authorization:`Bearer ${serviceKey}`,'Content-Type':'application/json',Prefer:'return=minimal',...(options.headers||{})}}); if(!response.ok){const detail=await response.text().catch(()=> '');throw new Error(`Supabase request failed (${response.status})${detail?`: ${detail.slice(0,300)}`:''}`);}return response; }
  async function select(pathname){const response=await fetch(`${url}/rest/v1/${pathname}`,{headers:{apikey:serviceKey,Authorization:`Bearer ${serviceKey}`,'Content-Type':'application/json'}});if(!response.ok)throw new Error(`Supabase request failed (${response.status}).`);return response.json();}
  return {
    mode:'supabase',
    async createSubmission(record){const d=record.data;await request(table,{method:'POST',body:JSON.stringify({id:record.id,type:record.type,name:d.name,organisation:d.organisation||null,email:d.email,country:d.country||null,area_of_interest:d.interest||null,investment_interest:d.investment_interest||null,partner_type:d.partner_type||null,contribution_areas:d.contribution||[],subject:d.subject||null,message:d.message,status:record.status,request_id:record.requestId,idempotency_key:record.idempotencyKey||null,created_at:record.createdAt})});},
    async findByIdempotencyKey(type,key){const rows=await select(`${table}?select=*&type=eq.${encodeURIComponent(type)}&idempotency_key=eq.${encodeURIComponent(key)}&limit=1`);return rows[0]||null;},
    async createEmailDelivery(record){await request(emailTable,{method:'POST',body:JSON.stringify(record)});},
    async createAuditEvent(record){await request(auditTable,{method:'POST',body:JSON.stringify(record)});},
    async listAuditEvents({submissionId,limit=100}){return select(`${auditTable}?select=*&submission_id=eq.${encodeURIComponent(submissionId)}&order=created_at.desc&limit=${limit}`);},
    async listSubmissions({limit,type,status}){let q=`${table}?select=*&order=created_at.desc&limit=${limit}`;if(type)q+=`&type=eq.${encodeURIComponent(type)}`;if(status)q+=`&status=eq.${encodeURIComponent(status)}`;return select(q);},
    async updateSubmissionStatus(id,status,updatedAt){const response=await fetch(`${url}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`,{method:'PATCH',headers:{apikey:serviceKey,Authorization:`Bearer ${serviceKey}`,'Content-Type':'application/json',Prefer:'return=representation'},body:JSON.stringify({status,updated_at:updatedAt})});if(!response.ok)throw new Error(`Supabase update failed (${response.status}).`);const rows=await response.json();return rows[0]||null;},
    async purgeOlderThan({submissionDays=365,auditDays=730}){const sCut=cutoffIso(submissionDays),aCut=cutoffIso(auditDays);const s=await fetch(`${url}/rest/v1/${table}?created_at=lt.${encodeURIComponent(sCut)}`,{method:'DELETE',headers:{apikey:serviceKey,Authorization:`Bearer ${serviceKey}`,Prefer:'return=representation'}});if(!s.ok)throw new Error(`Supabase submission retention purge failed (${s.status}).`);const removedSubmissions=await s.json().catch(()=>[]);const a=await fetch(`${url}/rest/v1/${auditTable}?created_at=lt.${encodeURIComponent(aCut)}`,{method:'DELETE',headers:{apikey:serviceKey,Authorization:`Bearer ${serviceKey}`,Prefer:'return=representation'}});if(!a.ok)throw new Error(`Supabase audit retention purge failed (${a.status}).`);const removedAuditEvents=await a.json().catch(()=>[]);return {submissionsRemoved:Array.isArray(removedSubmissions)?removedSubmissions.length:null,auditEventsRemoved:Array.isArray(removedAuditEvents)?removedAuditEvents.length:null};},
    async health(){try{const response=await fetch(`${url}/rest/v1/${table}?select=id&limit=1`,{headers:{apikey:serviceKey,Authorization:`Bearer ${serviceKey}`}});return{ok:response.ok,mode:'supabase'};}catch{return{ok:false,mode:'supabase'};}}
  };
}
