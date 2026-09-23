import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// load .env like preflight
const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dotenvPath = path.join(ROOT, '.env');
if (fs.existsSync(dotenvPath)){
  const raw = fs.readFileSync(dotenvPath,'utf8');
  for(const line of raw.split(/\r?\n/)){
    const t=line.trim(); if(!t||t.startsWith('#')) continue; const eq=t.indexOf('='); if(eq===-1) continue; const k=t.slice(0,eq).trim(); let v=t.slice(eq+1).trim(); if((v.startsWith('"')&&v.endsWith('"'))||(v.startsWith("'")&&v.endsWith("'"))) v=v.slice(1,-1); if(process.env[k]===undefined) process.env[k]=v;
  }
}
const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/+$/,'');
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if(!SUPABASE_URL||!SUPABASE_SERVICE_ROLE_KEY){
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY'); process.exit(2);
}
const table = 'institutional_enquiries';
const payload = {
  id: crypto.randomUUID(),
  type: 'contact',
  name: 'Diag SQL Test',
  organisation: null,
  email: 'diag+sql@example.com',
  country: null,
  area_of_interest: null,
  investment_interest: null,
  partner_type: null,
  contribution_areas: [],
  subject: 'Diag SQL',
  message: 'Supabase direct insert test',
  status: 'received',
  request_id: 'diag-sql-1',
  idempotency_key: null,
  created_at: new Date().toISOString()
};

(async()=>{
  const url = `${SUPABASE_URL}/rest/v1/${table}`;
  const res = await fetch(url,{
    method: 'POST',
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: JSON.stringify(payload)
  });
  console.log('STATUS', res.status);
  const text = await res.text().catch(()=>'<no body>');
  console.log('BODY:\n', text);
})();
