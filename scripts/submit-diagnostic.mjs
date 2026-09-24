import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Load .env like preflight.mjs (only for local runs)
const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dotenvPath = path.join(ROOT, ".env");
if (fs.existsSync(dotenvPath)) {
  const raw = fs.readFileSync(dotenvPath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error(
    "SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in environment or .env",
  );
  process.exit(2);
}

async function postContact() {
  const url = "http://127.0.0.1:4173/api/contact";
  const body = {
    name: "Diag Tester",
    email: "diag+bot@example.com",
    message: "Diagnostic test submission from automation",
    subject: "Diag",
  };
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Idempotency-Key": "diag-automation-1",
    },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  console.log("POST /api/contact ->", res.status);
  console.log(text);
}

async function querySupabase() {
  const url =
    SUPABASE_URL.replace(/\/+$/, "") +
    "/rest/v1/institutional_enquiries?select=id,created_at,request_id,message&order=created_at.desc&limit=5";
  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    },
  });
  console.log("\nSupabase query ->", res.status);
  const json = await res.json().catch(() => null);
  console.log(JSON.stringify(json, null, 2));
}

(async function main() {
  try {
    await postContact();
    // wait briefly to let server persist
    await new Promise((r) => setTimeout(r, 500));
    await querySupabase();
  } catch (e) {
    console.error("Error:", e.message);
    process.exit(3);
  }
})();
