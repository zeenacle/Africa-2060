import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const migrationDir = path.join(ROOT, 'supabase', 'migrations');
const migrations = fs.readdirSync(migrationDir).filter(x => x.endsWith('.sql')).sort();
const sql = migrations.map(x => fs.readFileSync(path.join(migrationDir, x), 'utf8')).join('\n');
const openapi = fs.readFileSync(path.join(ROOT, 'openapi.yaml'), 'utf8');
const env = fs.readFileSync(path.join(ROOT, '.env.example'), 'utf8');
const server = fs.readFileSync(path.join(ROOT, 'server.mjs'), 'utf8');

const required = [
  'institutional_enquiries', 'email_deliveries', 'audit_events',
  'idempotency_key', 'attempt_count', 'updated_at',
  'submission_id', 'created_at'
];
for (const token of required) {
  if (!sql.includes(token)) throw new Error(`Database contract missing: ${token}`);
}
for (const endpoint of ['/api/investment-enquiries','/api/partner-enquiries','/api/contact','/api/admin/metrics','/api/admin/retention']) {
  if (!openapi.includes(endpoint)) throw new Error(`OpenAPI contract missing: ${endpoint}`);
  if (!server.includes(endpoint)) throw new Error(`Server route missing: ${endpoint}`);
}
for (const key of ['STORAGE_MODE','SUPABASE_URL','SUPABASE_SERVICE_ROLE_KEY','SUPABASE_ENQUIRIES_TABLE','SUPABASE_EMAIL_TABLE','SUPABASE_AUDIT_TABLE','ADMIN_API_TOKEN','PUBLIC_ORIGIN']) {
  if (!env.includes(`${key}=`)) throw new Error(`Environment handoff missing: ${key}`);
}
if (/donation|donate|paymenttransaction/i.test(server + openapi + sql)) {
  throw new Error('Disallowed donation/payment infrastructure detected in backend contract.');
}
console.log(JSON.stringify({ok:true,migrations,publicEndpoints:3,adminEndpoints:5,message:'Africa 2060 backend contract checks passed.'}));
