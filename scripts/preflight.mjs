import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
// If a .env file exists in the project root, load it into process.env for local runs
const dotenvPath = path.join(ROOT, '.env');
if (fs.existsSync(dotenvPath)) {
  const raw = fs.readFileSync(dotenvPath, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
}
const env = process.env;
const failures = [];
const warnings = [];
const production = (env.NODE_ENV || 'development') === 'production';
const storage = (env.STORAGE_MODE || 'local').toLowerCase();

const required = ['STORAGE_MODE'];
for (const key of required) if (!env[key]) failures.push(`${key} is required.`);
if (storage === 'supabase') {
  for (const key of ['SUPABASE_URL','SUPABASE_SERVICE_ROLE_KEY']) if (!env[key]) failures.push(`${key} is required for Supabase storage.`);
  if (env.SUPABASE_URL && !/^https:\/\/[^/]+\.supabase\.co$/i.test(env.SUPABASE_URL.replace(/\/$/,''))) warnings.push('SUPABASE_URL does not match the usual *.supabase.co format; verify it is intentional.');
}
if (production) {
  if (!env.PUBLIC_ORIGIN) failures.push('PUBLIC_ORIGIN is required in production.');
  if ((env.ADMIN_API_TOKEN || '').length < 32) failures.push('ADMIN_API_TOKEN must be at least 32 characters in production.');
  if (storage !== 'supabase') failures.push('Production storage must be STORAGE_MODE=supabase.');
  if (String(env.ALLOW_LOCAL_STORAGE).toLowerCase() === 'true') failures.push('ALLOW_LOCAL_STORAGE must not be true in production.');
}
if (String(env.REQUIRE_EMAIL).toLowerCase() === 'true') {
  for (const key of ['RESEND_API_KEY','RESEND_FROM','AFRICA2060_INTERNAL_EMAIL']) if (!env[key]) failures.push(`${key} is required when REQUIRE_EMAIL=true.`);
}
const migrationsDir = path.join(ROOT, 'supabase', 'migrations');
const migrations = fs.readdirSync(migrationsDir).filter(f => /^\d{3}_.+\.sql$/.test(f)).sort();
if (!migrations.length) failures.push('No numbered Supabase migrations were found.');
const numbers = migrations.map(f => Number(f.slice(0,3)));
if (new Set(numbers).size !== numbers.length) failures.push('Duplicate Supabase migration numbers detected.');
const requiredFiles = ['supabase/migrations/001_institutional_enquiries.sql','supabase/migrations/002_backend_hardening.sql','supabase/migrations/003_audit_events.sql','supabase/migrations/004_contract_hardening.sql'];
for (const f of requiredFiles) if (!fs.existsSync(path.join(ROOT,f))) failures.push(`Missing required migration: ${f}`);

if (failures.length) {
  console.error(JSON.stringify({ok:false, failures, warnings, storage, production, migrations}));
  process.exit(1);
}
console.log(JSON.stringify({ok:true, storage, production, migrations, warnings, message:'Africa 2060 deployment preflight passed without exposing secret values.'}));
