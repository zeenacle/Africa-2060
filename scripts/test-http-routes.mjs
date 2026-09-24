import http from 'node:http';
import { spawn } from 'node:child_process';

const TEST_PORT = 3099;
process.env.PORT = String(TEST_PORT);
process.env.STORAGE_MODE = 'local';
process.env.ALLOW_LOCAL_STORAGE = 'true';

// Start server with local storage and test mode
const serverProcess = spawn('node', ['server.mjs'], {
  env: {
    ...process.env,
    PORT: String(TEST_PORT),
    STORAGE_MODE: 'local',
    ALLOW_LOCAL_STORAGE: 'true',
    REQUIRE_EMAIL: 'false'
  },
  stdio: ['ignore', 'pipe', 'pipe']
});

let serverOut = '';
serverProcess.stdout.on('data', d => serverOut += d.toString());
serverProcess.stderr.on('data', d => serverOut += d.toString());

function request(path, options = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: 'localhost',
      port: TEST_PORT,
      path,
      method: options.method || 'GET',
      headers: options.headers || {},
    }, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body }));
    });
    req.on('error', reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

async function runTests() {
  console.log('Waiting for test server on port', TEST_PORT);
  let ready = false;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await request('/api/health');
      if (res.status === 200) {
        ready = true;
        break;
      }
    } catch {}
    await new Promise(r => setTimeout(r, 200));
  }

  if (!ready) {
    console.error('Server failed to start:\n', serverOut);
    serverProcess.kill();
    process.exit(1);
  }

  console.log('Server is ready. Running HTTP route checks...\n');
  const checks = [];

  // Check 1: Home
  const home = await request('/');
  checks.push({ name: 'GET /', ok: home.status === 200 && home.body.includes('Africa 2060') && !home.body.includes('data-api="/api/contact"') });

  // Check 2: Vision
  const vision = await request('/vision/');
  checks.push({ name: 'GET /vision/', ok: vision.status === 200 && vision.body.includes('Vision — Africa 2060') });

  // Check 3: System
  const system = await request('/system/');
  checks.push({ name: 'GET /system/', ok: system.status === 200 && (system.body.includes('The Operating Machine — Africa 2060') || system.body.includes('System — Africa 2060')) });

  // Check 4: Founders
  const founders = await request('/founders/');
  checks.push({ name: 'GET /founders/', ok: founders.status === 200 && (founders.body.includes('Founders &amp; Capability Pathways') || founders.body.includes('Founders — Africa 2060')) });

  // Check 5: Sectors
  const sectors = await request('/sectors/');
  checks.push({ name: 'GET /sectors/', ok: sectors.status === 200 && sectors.body.includes('Sectors — Africa 2060') });

  // Check 6: Innovation Lab
  const lab = await request('/innovation-lab/');
  checks.push({ name: 'GET /innovation-lab/', ok: lab.status === 200 && lab.body.includes('Innovation Lab — Africa 2060') });

  // Check 7: Impact
  const impact = await request('/impact/');
  checks.push({ name: 'GET /impact/', ok: impact.status === 200 && impact.body.includes('Impact — Africa 2060') });

  // Check 8: Insights
  const insights = await request('/insights/');
  checks.push({ name: 'GET /insights/', ok: insights.status === 200 && insights.body.includes('Insights — Africa 2060') });

  // Check 9: Partners
  const partners = await request('/partners/');
  checks.push({ name: 'GET /partners/', ok: partners.status === 200 && partners.body.includes('/api/partner-enquiries') });

  // Check 10: Contact
  const contact = await request('/contact/');
  checks.push({ name: 'GET /contact/', ok: contact.status === 200 && contact.body.includes('/api/contact') });

  // Check 11: Redirects
  const redirPartner = await request('/partner');
  checks.push({ name: 'GET /partner -> 301 /partners/', ok: redirPartner.status === 301 && redirPartner.headers.location === '/partners/' });

  const redirInvest = await request('/invest');
  checks.push({ name: 'GET /invest -> 301 /partners/', ok: redirInvest.status === 301 && redirInvest.headers.location === '/partners/' });

  const redirVision = await request('/vision');
  checks.push({ name: 'GET /vision -> 301 /vision/', ok: redirVision.status === 301 && redirVision.headers.location === '/vision/' });

  // Check 12: API Contact submission
  const contactPayload = JSON.stringify({ name: 'Test QA', email: 'test@example.com', message: 'Verifying end-to-end multi-page contact route.' });
  const contactRes = await request('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(contactPayload),
      'Accept': 'application/json',
      'Idempotency-Key': 'test-key-' + Date.now()
    },
    body: contactPayload
  });
  if (contactRes.status !== 201) {
    console.error('Contact failed:', contactRes.status, contactRes.body);
  }
  checks.push({ name: 'POST /api/contact -> 201', ok: contactRes.status === 201 });

  // Check 13: API Partner submission
  const partnerPayload = JSON.stringify({ partner_type: 'Institutions', contribution: ['Knowledge'], name: 'Partner QA', email: 'partner@example.com', organisation: 'Test Org', message: 'Verifying partner route.' });
  const partnerRes = await request('/api/partner-enquiries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(partnerPayload),
      'Accept': 'application/json',
      'Idempotency-Key': 'test-partner-' + Date.now()
    },
    body: partnerPayload
  });
  if (partnerRes.status !== 201) {
    console.error('Partner failed:', partnerRes.status, partnerRes.body);
  }
  checks.push({ name: 'POST /api/partner-enquiries -> 201', ok: partnerRes.status === 201 });

  // Cleanup
  serverProcess.kill();

  let failed = 0;
  for (const c of checks) {
    if (c.ok) {
      console.log(`  ✓ ${c.name}`);
    } else {
      console.error(`  ✖ ${c.name} FAILED!`);
      failed++;
    }
  }

  console.log(`\nHTTP Route Testing Complete: ${checks.length - failed}/${checks.length} passed.`);
  if (failed > 0) process.exit(1);
}

runTests().catch(err => {
  console.error('Test script error:', err);
  serverProcess.kill();
  process.exit(1);
});
