import fs from "fs";
import path from "path";

function requireEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`${name} is required`);
  return v;
}

(async function main() {
  try {
    const SUPABASE_URL = requireEnv("SUPABASE_URL").replace(/\/+$/, "");
    const SUPABASE_SERVICE_ROLE_KEY = requireEnv("SUPABASE_SERVICE_ROLE_KEY");
    const table = process.env.SUPABASE_TABLE || "institutional_enquiries";

    console.log("Testing Supabase REST on", SUPABASE_URL, "table", table);

    const url = `${SUPABASE_URL}/rest/v1/${table}?select=id&limit=1`;
    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      },
    });

    console.log("HTTP", res.status);
    const text = await res.text();
    console.log("Body:", text.slice(0, 200));
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(2);
  }
})();
