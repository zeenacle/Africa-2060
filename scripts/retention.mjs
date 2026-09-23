import { loadConfig } from "../backend/config.mjs";
import { createRepository } from "../backend/repository.mjs";

const config = loadConfig();
const apply = process.argv.includes("--apply");
if (!apply) {
  console.log(
    JSON.stringify({
      ok: true,
      dryRun: true,
      submissionDays: config.retentionDays,
      auditRetentionDays: config.auditRetentionDays,
      message: "Run npm run retention:apply to execute the configured purge.",
    }),
  );
  process.exit(0);
}
const repo = createRepository();
if (config.nodeEnv === "production" && config.storageMode !== "supabase")
  throw new Error(
    "Retention apply is disabled for local storage in production.",
  );
const result = await repo.purgeOlderThan({
  submissionDays: config.retentionDays,
  auditDays: config.auditRetentionDays,
});
console.log(JSON.stringify({ ok: true, dryRun: false, result }, null, 2));
