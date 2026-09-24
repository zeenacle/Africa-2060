import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dotenvPath = path.join(ROOT, ".env");
if (process.env.NODE_ENV !== "test" && fs.existsSync(dotenvPath)) {
    try {
      process.loadEnvFile(dotenvPath);
    } catch {
      // ignore
    }
  try {
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
  } catch {}
}

const bool = (value, fallback = false) =>
  value == null || value === "" ? fallback : value === "true";
const int = (value, fallback, min, max) => {
  const n = Number(value ?? fallback);
  return Number.isInteger(n) && n >= min && n <= max ? n : fallback;
};

export function loadConfig(env = process.env) {
  const nodeEnv = env.NODE_ENV || "development";
  const storageMode = (env.STORAGE_MODE || "local").toLowerCase();
  if (!["local", "supabase"].includes(storageMode))
    throw new Error("STORAGE_MODE must be local or supabase.");
  if (
    nodeEnv === "production" &&
    storageMode === "local" &&
    !bool(env.ALLOW_LOCAL_STORAGE, false)
  ) {
    throw new Error(
      "Local storage is disabled in production. Configure STORAGE_MODE=supabase.",
    );
  }
  if (storageMode === "supabase") {
    if (!env.SUPABASE_URL)
      throw new Error("SUPABASE_URL is required when STORAGE_MODE=supabase.");
    if (!env.SUPABASE_SERVICE_ROLE_KEY)
      throw new Error(
        "SUPABASE_SERVICE_ROLE_KEY is required when STORAGE_MODE=supabase.",
      );
  }
  const requireEmail = bool(env.REQUIRE_EMAIL, false);
  if (
    requireEmail &&
    (!env.RESEND_API_KEY || !env.RESEND_FROM || !env.AFRICA2060_INTERNAL_EMAIL)
  ) {
    throw new Error(
      "Email is required but RESEND_API_KEY, RESEND_FROM and AFRICA2060_INTERNAL_EMAIL are not fully configured.",
    );
  }
  const adminToken = env.ADMIN_API_TOKEN || "";
  if (nodeEnv === "production" && adminToken.length < 32) {
    throw new Error(
      "ADMIN_API_TOKEN must be at least 32 characters in production.",
    );
  }
  if (nodeEnv === "production" && !env.PUBLIC_ORIGIN) {
    throw new Error("PUBLIC_ORIGIN is required in production.");
  }
  return {
    nodeEnv,
    port: int(env.PORT, 4173, 1, 65535),
    publicOrigin: (env.PUBLIC_ORIGIN || "").replace(/\/$/, ""),
    allowedOrigins: new Set(
      (env.ALLOWED_ORIGINS || env.PUBLIC_ORIGIN || "")
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean),
    ),
    internalEmail: env.AFRICA2060_INTERNAL_EMAIL || "",
    resendApiKey: env.RESEND_API_KEY || "",
    resendFrom: env.RESEND_FROM || "",
    requireEmail: bool(env.REQUIRE_EMAIL, false),
    adminToken,
    maxBody: int(env.MAX_BODY_BYTES, 32768, 1024, 1048576),
    rateWindowMs: int(env.RATE_WINDOW_MS, 60000, 1000, 3600000),
    rateLimit: int(env.RATE_LIMIT_PER_MINUTE, 12, 1, 1000),
    storageMode,
    supabaseUrl: env.SUPABASE_URL || "",
    supabaseServiceKey: env.SUPABASE_SERVICE_ROLE_KEY || "",
    enquiriesTable: env.SUPABASE_ENQUIRIES_TABLE || "institutional_enquiries",
    emailTable: env.SUPABASE_EMAIL_TABLE || "email_deliveries",
    auditTable: env.SUPABASE_AUDIT_TABLE || "audit_events",
    retentionDays: int(env.RETENTION_DAYS, 365, 30, 3650),
    auditRetentionDays: int(env.AUDIT_RETENTION_DAYS, 730, 30, 3650),
    emailMaxAttempts: int(env.EMAIL_MAX_ATTEMPTS, 3, 1, 6),
    emailRetryBaseMs: int(env.EMAIL_RETRY_BASE_MS, 500, 100, 10000),
    trustProxy: bool(env.TRUST_PROXY, false),
  };
}
