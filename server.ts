// Vercel Node server entrypoint.
// Vercel's zero-config Node server deployment detects root-level server.ts.
// The existing implementation remains in server.mjs so local npm start/dev
// continue to use the established runtime without changing application logic.
import "./server.mjs";
