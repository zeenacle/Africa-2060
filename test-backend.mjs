import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp, writeFile, rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';

const dir=await mkdtemp(path.join(tmpdir(),'a2060-test-'));
const server=spawn(process.execPath,['server.mjs'],{cwd:process.cwd(),env:{...process.env,NODE_ENV:'test',PORT:'4199',ADMIN_API_TOKEN:'test-admin-token',STORAGE_MODE:'local',DATA_DIR:dir,ALLOW_LOCAL_STORAGE:'true',RATE_LIMIT_PER_MINUTE:'50',ALLOWED_ORIGINS:''},stdio:['ignore','pipe','pipe']});
await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(new Error('server start timeout')),5000);server.stdout.on('data',d=>{if(String(d).includes('server_started')){clearTimeout(timer);resolve();}});server.stderr.on('data',d=>process.stderr.write(d));server.on('exit',c=>reject(new Error(`server exited ${c}`)));});
try {
  let r=await fetch('http://127.0.0.1:4199/api/health'); assert.equal(r.status,200); assert.equal((await r.json()).ok,true);
  r=await fetch('http://127.0.0.1:4199/api/contact',{method:'POST',headers:{'content-type':'application/json','idempotency-key':'test-key-1'},body:JSON.stringify({name:'Test User',email:'test@example.com',message:'Testing API'})}); assert.equal(r.status,201); const first=await r.json(); assert.ok(first.submissionId);
  r=await fetch('http://127.0.0.1:4199/api/contact',{method:'POST',headers:{'content-type':'application/json','idempotency-key':'test-key-1'},body:JSON.stringify({name:'Test User',email:'test@example.com',message:'Testing API'})}); assert.equal(r.status,200); assert.equal((await r.json()).submissionId,first.submissionId);
  r=await fetch('http://127.0.0.1:4199/api/contact',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({name:'Bad',email:'not-an-email',message:''})}); assert.equal(r.status,422);
  r=await fetch('http://127.0.0.1:4199/api/admin/enquiries'); assert.equal(r.status,401);
  r=await fetch('http://127.0.0.1:4199/api/admin/metrics'); assert.equal(r.status,401);
  r=await fetch('http://127.0.0.1:4199/api/admin/retention',{method:'POST'}); assert.equal(r.status,401);
  r=await fetch('http://127.0.0.1:4199/api/admin/enquiries',{headers:{authorization:'Bearer test-admin-token'}}); assert.equal(r.status,200);
  r=await fetch(`http://127.0.0.1:4199/api/admin/enquiries/${first.submissionId}`,{method:'PATCH',headers:{authorization:'Bearer test-admin-token','content-type':'application/json'},body:JSON.stringify({status:'reviewing'})}); assert.equal(r.status,200);
  r=await fetch(`http://127.0.0.1:4199/api/admin/enquiries/${first.submissionId}/events`,{headers:{authorization:'Bearer test-admin-token'}}); assert.equal(r.status,200); const events=(await r.json()).items; assert.ok(events.some(e=>e.event==='submission.received')); assert.ok(events.some(e=>e.event==='submission.status_changed'));
  r=await fetch('http://127.0.0.1:4199/api/admin/metrics',{headers:{authorization:'Bearer test-admin-token'}}); assert.equal(r.status,200); const metrics=(await r.json()).metrics; assert.ok(metrics.submissions>=1); assert.ok(metrics.uptimeSeconds>=0);
  r=await fetch('http://127.0.0.1:4199/api/admin/retention',{method:'POST',headers:{authorization:'Bearer test-admin-token'}}); assert.equal(r.status,200); assert.equal((await r.json()).dryRun,true);
  r=await fetch('http://127.0.0.1:4199/api/admin/retention',{method:'POST',headers:{authorization:'Bearer test-admin-token','x-retention-dry-run':'false'}}); assert.equal(r.status,200); assert.equal((await r.json()).dryRun,false);
  console.log('backend smoke tests passed');
} finally {server.kill('SIGTERM'); await new Promise(r=>server.on('exit',r)); await rm(dir,{recursive:true,force:true});}
