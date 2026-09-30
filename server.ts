import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

const cleanPath = (pathname) => {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  const normalized = path.normalize(decoded);
  const relative = normalized.startsWith("/") ? "." + normalized : "./" + normalized;
  const target = path.resolve(ROOT, relative);
  return target === ROOT || target.startsWith(ROOT + path.sep) ? target : null;
};

function serveStatic(req, res) {
  const pathname = new URL(req.url || "/", "http://localhost").pathname;
  const target = cleanPath(pathname);

  if (!target) {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Bad request.");
  }

  let file = target;
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    file = path.join(file, "index.html");
  }

  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
    if (!path.extname(pathname)) {
      file = path.join(ROOT, "index.html");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Not found.");
    }
  }

  const ext = path.extname(file).toLowerCase();
  const stat = fs.statSync(file);
  res.writeHead(200, {
    "Content-Type": MIME[ext] || "application/octet-stream",
    "Content-Length": stat.size,
    "Cache-Control": ext === ".html" ? "no-cache" : "public,max-age=3600",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Frame-Options": "DENY",
  });
  fs.createReadStream(file).pipe(res);
}

let backendReady = false;
let backendLoadError = null;

try {
  await import("./server.mjs");
  backendReady = true;
} catch (error) {
  backendLoadError = error instanceof Error ? error : new Error(String(error));
  console.error(
    JSON.stringify({
      level: "error",
      event: "backend_bootstrap_failed",
      error: backendLoadError.message,
      vercelEnv: process.env.VERCEL_ENV || null,
    }),
  );

  // The public site must remain available when backend environment
  // configuration is incomplete. API routes are served by server.mjs only
  // when backend initialization succeeds.
  http.createServer((req, res) => {
    if (req.method === "GET" || req.method === "HEAD") return serveStatic(req, res);

    res.writeHead(503, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    });
    res.end(
      JSON.stringify({
        ok: false,
        message: "Backend services are not configured for this deployment.",
      }),
    );
  }).listen(process.env.PORT || 3000);
}

if (backendReady) {
  // server.mjs owns the actual listener.
}
