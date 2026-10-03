import crypto from "node:crypto";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadConfig } from "./backend/config.mjs";
import { logger } from "./backend/logger.mjs";
import { createRepository } from "./backend/repository.mjs";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const CONFIG = loadConfig();
const PORT = CONFIG.port;
const PUBLIC_ORIGIN = CONFIG.publicOrigin;
const ALLOWED_ORIGINS = CONFIG.allowedOrigins;
const INTERNAL_EMAIL = CONFIG.internalEmail;
const RESEND_API_KEY = CONFIG.resendApiKey;
const RESEND_FROM = CONFIG.resendFrom;
const REQUIRE_EMAIL = CONFIG.requireEmail;
const ADMIN_TOKEN = CONFIG.adminToken;
const MAX_BODY = CONFIG.maxBody;
const RATE_WINDOW_MS = CONFIG.rateWindowMs;
const RATE_LIMIT = CONFIG.rateLimit;
const EMAIL_MAX_ATTEMPTS = CONFIG.emailMaxAttempts;
const EMAIL_RETRY_BASE_MS = CONFIG.emailRetryBaseMs;
const TRUST_PROXY = CONFIG.trustProxy;
const STARTED_AT = Date.now();
const rateBuckets = new Map();
const metrics = {
  requests: 0,
  errors: 0,
  submissions: 0,
  emailSent: 0,
  emailFailed: 0,
  emailNotConfigured: 0,
};

const PARTNER_TYPES = new Set([
  "Investors",
  "Corporate Partners",
  "Sponsors & Foundations",
  "Institutions",
]);
const CONTRIBUTIONS = new Set([
  "Capital",
  "Markets",
  "Expertise",
  "Infrastructure",
  "Credibility / Network",
  "Knowledge",
]);
const TYPES = new Set(["investment", "partner", "contact"]);
const STATUSES = new Set(["received", "reviewing", "closed", "spam"]);
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};
const repository = createRepository();

function requestId() {
  return crypto.randomUUID();
}
function json(res, status, body, id) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Content-Length": Buffer.byteLength(payload),
    ...(id ? { "X-Request-ID": id } : {}),
  });
  res.end(payload);
}
function text(res, status, body, contentType = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
}
function clientKey(req) {
  if (TRUST_PROXY) {
    const forwarded = String(req.headers["x-forwarded-for"] || "")
      .split(",")[0]
      .trim();
    if (forwarded) return forwarded;
  }
  return req.socket.remoteAddress || "unknown";
}
function allowedOrigin(req) {
  if (!ALLOWED_ORIGINS.size) return true;
  const origin = String(req.headers.origin || "");
  return !origin || ALLOWED_ORIGINS.has(origin);
}
function rateLimited(key) {
  const now = Date.now();
  let b = rateBuckets.get(key);
  if (!b || now - b.start >= RATE_WINDOW_MS) b = { start: now, count: 0 };
  b.count++;
  rateBuckets.set(key, b);
  if (rateBuckets.size > 10000)
    for (const [k, v] of rateBuckets)
      if (now - v.start >= RATE_WINDOW_MS) rateBuckets.delete(k);
  return b.count > RATE_LIMIT;
}
function clean(value, max = 1000) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim()
    .slice(0, max);
}
function validEmail(value) {
  const v = clean(value, 254).toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? v : "";
}
async function readJson(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY)
      throw Object.assign(new Error("Request too large."), { status: 413 });
    chunks.push(chunk);
  }
  if (!chunks.length)
    throw Object.assign(new Error("Request body is required."), {
      status: 400,
    });
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    throw Object.assign(new Error("Invalid JSON."), { status: 400 });
  }
}
function validate(type, body) {
  const errors = [];
  const name = clean(body.name, 120);
  if (!name) errors.push("Name is required.");
  const organisation = clean(body.organisation, 160);
  if (type !== "contact" && !organisation)
    errors.push("Organisation is required.");
  const email = validEmail(body.email);
  if (!email) errors.push("A valid email is required.");
  const country = clean(body.country, 100);
  if (clean(body.website, 200)) errors.push("Spam validation failed.");
  const data = { name, organisation, email, country };
  if (type === "investment") {
    data.interest = clean(body.interest, 200);
    data.investment_interest = clean(body.investment_interest, 300);
    data.message = clean(body.message, 5000);
    if (!data.message) errors.push("Message is required.");
  } else if (type === "partner") {
    data.partner_type = clean(body.partner_type, 80);
    data.interest = clean(body.interest, 200);
    data.contribution = Array.isArray(body.contribution)
      ? body.contribution
          .map((v) => clean(v, 80))
          .filter((v) => CONTRIBUTIONS.has(v))
          .slice(0, 6)
      : [];
    data.message = clean(body.message, 5000);
    if (!PARTNER_TYPES.has(data.partner_type))
      errors.push("Partner Type is required.");
    if (!data.message) errors.push("Message is required.");
  } else {
    data.subject = clean(body.subject, 200);
    data.message = clean(body.message, 5000);
    if (!data.message) errors.push("Message is required.");
  }
  return { errors, data };
}
function escapeHtml(v) {
  return String(v ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function emailShell({ preheader, eyebrow, title, intro, body, footerNote = "" }) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Africa 2060</title></head><body style="margin:0;background:#eef0ec;color:#172018;font-family:Arial,Helvetica,sans-serif;"><div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef0ec;"><tr><td align="center" style="padding:32px 16px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:680px;background:#fbfaf6;"><tr><td style="padding:0;"><div style="height:6px;background:#c59a48;"></div><div style="padding:28px 34px 22px;background:#07131f;"><div style="font-size:12px;letter-spacing:3px;font-weight:700;color:#eee8dc;">AFRICA <span style="color:#c59a48;">2060</span></div><div style="margin-top:8px;font-size:10px;letter-spacing:2px;color:#aeb9bf;">FOUNDER CREATION · COMPANY FORMATION · ECONOMIC OWNERSHIP</div></div><div style="padding:34px;"><div style="font-size:10px;letter-spacing:2.2px;font-weight:700;color:#a06f2b;">${escapeHtml(eyebrow)}</div><h1 style="margin:12px 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.18;font-weight:600;color:#172018;">${escapeHtml(title)}</h1><div style="height:1px;background:#d8d0c0;margin:0 0 24px;"></div><p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:#39443d;">${intro}</p>${body}<div style="height:1px;background:#d8d0c0;margin:30px 0 20px;"></div><p style="margin:0;font-size:12px;line-height:1.6;color:#6d766f;">${footerNote || "Africa 2060 Initiative · A Zeenacle Network Group operating framework"}</p></div><div style="padding:20px 34px;background:#07131f;"><div style="font-size:10px;letter-spacing:1.8px;color:#aeb9bf;">BUILD THE COMPANIES THAT BUILD AFRICA.</div><div style="margin-top:8px;font-size:11px;color:#7f8d95;">Africa 2060 · 2026—2060</div></div></td></tr></table></td></tr></table></body></html>`;
}
function fieldRow(label, value) {
  return `<tr><td style="padding:9px 0;font-size:10px;letter-spacing:1.2px;font-weight:700;color:#8a7350;text-transform:uppercase;vertical-align:top;width:34%;">${escapeHtml(label)}</td><td style="padding:9px 0;font-size:14px;line-height:1.5;color:#27332c;">${escapeHtml(value || "—")}</td></tr>`;
}
function acknowledgement(type, s) {
  const label =
    type === "investment"
      ? "Investment enquiry"
      : type === "partner"
        ? "Partnership enquiry"
        : "General enquiry";
  const action =
    type === "investment"
      ? "Our team will review the information provided and determine the appropriate next step for the investment conversation."
      : type === "partner"
        ? "Our team will review your organisation, proposed contribution and area of interest and determine the appropriate next step."
        : "Our team will review your message and route it to the appropriate desk where necessary.";
  const body = `<p style="margin:0 0 18px;font-size:15px;line-height:1.7;color:#39443d;">Thank you for contacting Africa 2060. Your ${escapeHtml(label.toLowerCase())} has been received and securely recorded by the Secretariat.</p><p style="margin:0 0 18px;font-size:15px;line-height:1.7;color:#39443d;">${escapeHtml(action)}</p><div style="margin:24px 0;padding:18px 20px;background:#f2eee5;border-left:3px solid #c59a48;"><div style="font-size:10px;letter-spacing:1.6px;font-weight:700;color:#8a7350;">SUBMISSION REFERENCE</div><div style="margin-top:7px;font-family:monospace;font-size:13px;color:#172018;">${escapeHtml(s.id)}</div></div><p style="margin:0;font-size:13px;line-height:1.65;color:#6d766f;">This email confirms receipt only. It does not constitute an investment commitment, partnership acceptance, allocation, return, meeting commitment or response deadline.</p>`;
  return {
    subject: `Africa 2060 — ${label} received | ${s.id}`,
    html: emailShell({
      preheader: `Your ${label.toLowerCase()} has been received by Africa 2060.`,
      eyebrow: "SUBMISSION CONFIRMED",
      title: "Thank you. Your enquiry is with us.",
      intro: `Dear ${escapeHtml(s.data.name)},`,
      body,
    }),
  };
}
function internalHtml(type, s) {
  const d = s.data;
  const title =
    type === "investment"
      ? "New investment enquiry"
      : type === "partner"
        ? "New partnership enquiry"
        : "New general enquiry";
  const eyebrow =
    type === "investment"
      ? "INVESTMENT DESK · NEW INTAKE"
      : type === "partner"
        ? "PARTNERSHIP DESK · NEW INTAKE"
        : "SECRETARIAT · NEW INTAKE";
  const extra =
    type === "investment"
      ? fieldRow("Area / Sector", d.interest) + fieldRow("Investment Interest", d.investment_interest)
      : type === "partner"
        ? fieldRow("Partner Type", d.partner_type) + fieldRow("Area of Interest", d.interest) + fieldRow("Contribution Areas", d.contribution.join(", "))
        : fieldRow("Subject", d.subject);
  const body = `<div style="margin:0 0 24px;padding:18px 20px;background:#f2eee5;border-left:3px solid #c59a48;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${fieldRow("Submission ID", s.id)}${fieldRow("Received", s.createdAt)}${fieldRow("Name", d.name)}${fieldRow("Organisation", d.organisation)}${fieldRow("Email", d.email)}${fieldRow("Country", d.country)}${extra}</table></div><div style="font-size:10px;letter-spacing:1.6px;font-weight:700;color:#8a7350;margin-bottom:8px;">MESSAGE</div><div style="padding:18px 20px;background:#ffffff;border:1px solid #ddd7ca;font-size:15px;line-height:1.7;color:#27332c;white-space:normal;">${escapeHtml(d.message).replaceAll("\n", "<br>")}</div>`;
  return emailShell({
    preheader: `${title} — submission ${s.id}`,
    eyebrow,
    title,
    intro: "A new institutional enquiry has been received through the Africa 2060 website. The details below are the submitted intake record.",
    body,
    footerNote: "Reply directly to this email to respond to the enquirer. Submission records remain subject to the Initiative’s internal handling and retention controls.",
  });
}
async function sendEmail(to, subject, html, replyTo) {
  if (!RESEND_API_KEY || !RESEND_FROM) return { status: "not_configured" };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [to],
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
      signal: controller.signal,
    });
    const result = await r.json().catch(() => ({}));
    if (!r.ok) {
      const e = new Error(
        result?.message || `Email provider returned ${r.status}.`,
      );
      e.retryable = r.status === 429 || r.status >= 500;
      throw e;
    }
    return { status: "sent", providerId: result?.id || null };
  } catch (e) {
    if (e.name === "AbortError") {
      const timeoutError = new Error("Email provider request timed out.");
      timeoutError.retryable = true;
      throw timeoutError;
    }
    if (typeof e.retryable !== "boolean") e.retryable = true;
    throw e;
  } finally {
    clearTimeout(timeout);
  }
}
async function audit(submissionId, type, event, meta = {}) {
  try {
    await repository.createAuditEvent({
      id: crypto.randomUUID(),
      submissionId,
      type,
      event,
      metadata: meta,
      createdAt: new Date().toISOString(),
    });
  } catch (e) {
    logger.error("audit_event_failure", {
      submissionId,
      type,
      event,
      error: e.message,
    });
  }
}
async function processEmails(type, s) {
  const out = { acknowledgement: "not_configured", internal: "not_configured" };
  const log = async (
    kind,
    status,
    providerId = null,
    error = null,
    attempt = 1,
  ) => {
    try {
      await repository.createEmailDelivery({
        id: crypto.randomUUID(),
        submissionId: s.id,
        type,
        kind,
        status,
        providerId,
        error,
        attemptCount: attempt,
        createdAt: new Date().toISOString(),
      });
    } catch (err) {
      logger.error("email_delivery_log_failure", {
        submissionId: s.id,
        type,
        kind,
        error: err.message,
      });
    }
  };
  if (!INTERNAL_EMAIL || !RESEND_API_KEY || !RESEND_FROM) {
    metrics.emailNotConfigured += 2;
    await log("acknowledgement", "not_configured");
    await log("internal", "not_configured");
    return out;
  }
  async function deliver(kind, to, subject, html, replyTo) {
    for (let attempt = 1; attempt <= EMAIL_MAX_ATTEMPTS; attempt++) {
      try {
        const r = await sendEmail(to, subject, html, replyTo);
        await log(kind, "sent", r.providerId, null, attempt);
        metrics.emailSent++;
        return "sent";
      } catch (e) {
        const message = e.message.slice(0, 300);
        const retry = e.retryable !== false;
        const finalAttempt = !retry || attempt === EMAIL_MAX_ATTEMPTS;
        await log(
          kind,
          finalAttempt ? "failed" : "retrying",
          null,
          message,
          attempt,
        );
        if (!finalAttempt)
          await new Promise((resolve) =>
            setTimeout(resolve, EMAIL_RETRY_BASE_MS * 2 ** (attempt - 1)),
          );
        else metrics.emailFailed++;
      }
    }
    return "failed";
  }
  const a = acknowledgement(type, s);
  out.acknowledgement = await deliver(
    "acknowledgement",
    s.data.email,
    a.subject,
    a.html,
  );
  out.internal = await deliver(
    "internal",
    INTERNAL_EMAIL,
    `Africa 2060 — ${type === "investment" ? "Investment" : type === "partner" ? "Partner" : "Contact"} enquiry ${s.id}`,
    internalHtml(type, s),
    s.data.email,
  );
  return out;
}
async function handleSubmission(req, res, type, id) {
  metrics.requests++;
  if (!allowedOrigin(req))
    return json(res, 403, { message: "Origin not allowed." }, id);
  if (rateLimited(clientKey(req)))
    return json(
      res,
      429,
      { message: "Too many submissions. Please try again later." },
      id,
    );
  if (
    !String(req.headers["content-type"] || "")
      .toLowerCase()
      .includes("application/json")
  )
    return json(res, 415, { message: "JSON is required." }, id);
  const idem = clean(req.headers["idempotency-key"], 100);
  let body;
  try {
    body = await readJson(req);
  } catch (e) {
    return json(res, e.status || 400, { message: e.message }, id);
  }
  const { errors, data } = validate(type, body || {});
  if (errors.length) return json(res, 422, { message: errors[0], errors }, id);
  const submission = {
    id: crypto.randomUUID(),
    requestId: id,
    idempotencyKey: idem || null,
    type,
    data,
    status: "received",
    createdAt: new Date().toISOString(),
  };
  try {
    const existing = idem
      ? await repository.findByIdempotencyKey(type, idem)
      : null;
    if (existing)
      return json(
        res,
        200,
        {
          ok: true,
          message: "This enquiry was already received.",
          submissionId: existing.id,
        },
        id,
      );
    await repository.createSubmission(submission);
    metrics.submissions++;
    await audit(submission.id, type, "submission.received", { requestId: id });
  } catch (e) {
    logger.error("persistence_failure", { requestId: id, error: e.message });
    return json(
      res,
      503,
      { message: "The enquiry could not be securely stored." },
      id,
    );
  }
  let emailStatus = {
    acknowledgement: "not_configured",
    internal: "not_configured",
  };
  try {
    emailStatus = await processEmails(type, submission);
    await audit(submission.id, type, "email.processing_completed", emailStatus);
  } catch (err) {
    logger.error("email_processing_failure", {
      submissionId: submission.id,
      type,
      error: err.message,
    });
  }
  if (
    REQUIRE_EMAIL &&
    (emailStatus.acknowledgement !== "sent" || emailStatus.internal !== "sent")
  )
    return json(
      res,
      503,
      {
        message:
          "The enquiry was stored, but notification email is temporarily unavailable.",
        submissionId: submission.id,
      },
      id,
    );
  return json(
    res,
    201,
    {
      ok: true,
      message: "Your enquiry has been received.",
      submissionId: submission.id,
    },
    id,
  );
}
function adminAuthorized(req) {
  if (!ADMIN_TOKEN) return false;
  const h = String(req.headers.authorization || "");
  if (!h.startsWith("Bearer ")) return false;
  const provided = Buffer.from(h.slice(7));
  const expected = Buffer.from(ADMIN_TOKEN);
  if (provided.length !== expected.length) return false;
  return crypto.timingSafeEqual(provided, expected);
}
async function handleAdminMetrics(req, res, id) {
  if (!adminAuthorized(req))
    return json(res, 401, { message: "Unauthorized." }, id);
  const storage = await repository.health();
  return json(
    res,
    200,
    {
      ok: true,
      metrics: {
        ...metrics,
        uptimeSeconds: Math.floor((Date.now() - STARTED_AT) / 1000),
      },
      storage,
      time: new Date().toISOString(),
    },
    id,
  );
}
async function handleAdminRetention(req, res, id) {
  if (!adminAuthorized(req))
    return json(res, 401, { message: "Unauthorized." }, id);
  const dryRun =
    String(req.headers["x-retention-dry-run"] || "true") !== "false";
  if (dryRun)
    return json(
      res,
      200,
      {
        ok: true,
        dryRun: true,
        submissionDays: CONFIG.retentionDays,
        auditRetentionDays: CONFIG.auditRetentionDays,
        message: "Set X-Retention-Dry-Run: false to apply retention.",
      },
      id,
    );
  const result = await repository.purgeOlderThan({
    submissionDays: CONFIG.retentionDays,
    auditDays: CONFIG.auditRetentionDays,
  });
  return json(res, 200, { ok: true, dryRun: false, result }, id);
}
async function handleAdminEvents(req, res, url, id, submissionId) {
  if (!adminAuthorized(req))
    return json(res, 401, { message: "Unauthorized." }, id);
  const limit = Math.min(
    Math.max(Number(url.searchParams.get("limit") || 100), 1),
    200,
  );
  const items = await repository.listAuditEvents({ submissionId, limit });
  return json(res, 200, { ok: true, items }, id);
}
async function handleAdminList(req, res, url, id) {
  if (!adminAuthorized(req))
    return json(res, 401, { message: "Unauthorized." }, id);
  const limit = Math.min(
    Math.max(Number(url.searchParams.get("limit") || 50), 1),
    100,
  );
  const type = url.searchParams.get("type");
  const status = url.searchParams.get("status");
  if (type && !TYPES.has(type))
    return json(res, 422, { message: "Invalid type." }, id);
  if (status && !STATUSES.has(status))
    return json(res, 422, { message: "Invalid status." }, id);
  const rows = await repository.listSubmissions({ limit, type, status });
  return json(res, 200, { ok: true, items: rows }, id);
}
async function handleAdminStatus(req, res, id, submissionId) {
  if (!adminAuthorized(req))
    return json(res, 401, { message: "Unauthorized." }, id);
  const body = await readJson(req).catch((e) => {
    throw e;
  });
  const status = clean(body.status, 30);
  if (!STATUSES.has(status))
    return json(res, 422, { message: "Invalid status." }, id);
  const updated = await repository.updateSubmissionStatus(
    submissionId,
    status,
    new Date().toISOString(),
  );
  if (!updated) return json(res, 404, { message: "Submission not found." }, id);
  await audit(submissionId, updated.type, "submission.status_changed", {
    status,
  });
  return json(res, 200, { ok: true, item: updated }, id);
}
function safePath(urlPath) {
  let decoded;
  try {
    decoded = decodeURIComponent(urlPath);
  } catch {
    return null;
  }
  const normalized = path.normalize(decoded);
  const absolute = path.resolve(
    ROOT,
    `.${normalized.startsWith("/") ? normalized : `/${normalized}`}`,
  );
  if (absolute !== ROOT && !absolute.startsWith(ROOT + path.sep)) return null;
  return absolute;
}
function serveStatic(req, res, pathname) {
  if (
    /^\/(?:data(?:\/|$)|\.env(?:$|\.)|server\.mjs$|package\.json$|tsconfig\.json$|backend(?:\/|$)|supabase(?:\/|$))/i.test(
      pathname,
    )
  )
    return text(res, 404, "Not found.");
  const target = safePath(pathname);
  if (!target) return text(res, 400, "Bad request.");
  let file = target;
  if (fs.existsSync(file) && fs.statSync(file).isDirectory())
    file = path.join(file, "index.html");
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
    if (!path.extname(pathname)) file = path.join(ROOT, "index.html");
    else return text(res, 404, "Not found.");
  }
  const ext = path.extname(file).toLowerCase(),
    type = MIME[ext] || "application/octet-stream",
    stat = fs.statSync(file);
  res.writeHead(200, {
    "Content-Type": type,
    "Content-Length": stat.size,
    "Cache-Control": ext === ".html" ? "no-cache" : "public,max-age=3600",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Frame-Options": "DENY",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  });
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer(async (req, res) => {
  const id = requestId();
  try {
    const url = new URL(
      req.url || "/",
      `http://${req.headers.host || "localhost"}`,
    );
    if (req.method === "GET" && url.pathname === "/api/health") {
      const storage = await repository.health();
      const emailConfigured = Boolean(
        INTERNAL_EMAIL && RESEND_API_KEY && RESEND_FROM,
      );
      const ready = storage.ok && (!REQUIRE_EMAIL || emailConfigured);
      return json(
        res,
        ready ? 200 : 503,
        {
          ok: ready,
          service: "africa2060-web",
          storage: storage.mode,
          emailConfigured,
          time: new Date().toISOString(),
        },
        id,
      );
    }
    if (req.method === "GET" && url.pathname === "/api/admin/metrics")
      return handleAdminMetrics(req, res, id);
    if (req.method === "POST" && url.pathname === "/api/admin/retention")
      return handleAdminRetention(req, res, id);
    if (req.method === "GET" && url.pathname === "/api/admin/enquiries")
      return handleAdminList(req, res, url, id);
    if (
      req.method === "GET" &&
      url.pathname.startsWith("/api/admin/enquiries/") &&
      url.pathname.endsWith("/events")
    )
      return handleAdminEvents(req, res, url, id, url.pathname.split("/")[4]);
    if (
      req.method === "PATCH" &&
      url.pathname.startsWith("/api/admin/enquiries/")
    )
      return handleAdminStatus(req, res, id, url.pathname.split("/").pop());
    if (req.method === "POST" && url.pathname === "/api/investment-enquiries")
      return handleSubmission(req, res, "investment", id);
    if (req.method === "POST" && url.pathname === "/api/partner-enquiries")
      return handleSubmission(req, res, "partner", id);
    if (req.method === "POST" && url.pathname === "/api/contact")
      return handleSubmission(req, res, "contact", id);
    if (req.method !== "GET" && req.method !== "HEAD")
      return json(res, 405, { message: "Method not allowed." }, id);
    if (url.pathname === "/partner" || url.pathname === "/partner/") {
      res.writeHead(301, {
        Location: "/partners/",
        "Cache-Control": "no-cache",
      });
      return res.end();
    }
    if (url.pathname === "/invest" || url.pathname === "/invest/") {
      res.writeHead(301, {
        Location: "/partners/",
        "Cache-Control": "no-cache",
      });
      return res.end();
    }
    const targetDir = safePath(url.pathname);
    if (targetDir && fs.existsSync(targetDir) && fs.statSync(targetDir).isDirectory() && !url.pathname.endsWith("/")) {
      res.writeHead(301, {
        Location: url.pathname + "/" + (url.search || ""),
        "Cache-Control": "no-cache",
      });
      return res.end();
    }
    return serveStatic(req, res, url.pathname);
  } catch (e) {
    metrics.errors++;
    logger.error("request_error", { requestId: id, error: e.message });
    return json(
      res,
      500,
      { message: "Internal server error.", requestId: id },
      id,
    );
  }
});

const shutdown = () => server.close(() => process.exit(0));
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
server.listen(PORT, () =>
  logger.info("server_started", {
    port: PORT,
    storage: repository.mode,
    nodeEnv: CONFIG.nodeEnv,
  }),
);
