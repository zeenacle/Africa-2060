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

function safeFile(urlPath) {
  let decoded;
  try {
    decoded = decodeURIComponent(urlPath);
  } catch {
    return null;
  }

  const normalized = path.normalize(decoded);
  const rootPath = normalized.startsWith("/") ? normalized : "/" + normalized;
  const target = path.resolve(ROOT, "." + rootPath);

  if (target !== ROOT && !target.startsWith(ROOT + path.sep)) return null;
  return target;
}

function servePreview(req, res) {
  const pathname = new URL(req.url || "/", "http://localhost").pathname;
  const target = safeFile(pathname);

  if (!target) {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Bad request.");
  }

  let file = target;
  if (fs.existsSync(file) && fs.statSync(file).isDirectory())
    file = path.join(file, "index.html");

  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
    if (!path.extname(pathname)) file = path.join(ROOT, "index.html");
    else {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Not found.");
    }
  }

  const ext = path.extname(file).toLowerCase();
  const type = MIME[ext] || "application/octet-stream";
  const stat = fs.statSync(file);

  res.writeHead(200, {
    "Content-Type": type,
    "Content-Length": stat.size,
    "Cache-Control": ext === ".html" ? "no-cache" : "public,max-age=3600",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Frame-Options": "DENY",
  });
  fs.createReadStream(file).pipe(res);
}

try {
  await import("./server.mjs");
} catch (error) {
  if (process.env.VERCEL_ENV !== "preview") throw error;

  console.error(
    JSON.stringify({
      level: "warn",
      event: "preview_backend_bootstrap_failed",
      error: error instanceof Error ? error.message : String(error),
    }),
  );

  http.createServer(servePreview).listen(process.env.PORT || 3000);
}
