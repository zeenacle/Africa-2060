import http from 'node:http';
import fs from 'node:fs';

console.log('Testing static file contents on disk:');
const indexHtml = fs.readFileSync('index.html', 'utf8');
console.log('index.html has id="partners":', indexHtml.includes('id="partners"'));
console.log('index.html has id="contact":', indexHtml.includes('id="contact"'));
console.log('index.html has /api/partner-enquiries:', indexHtml.includes('data-api="/api/partner-enquiries"'));
console.log('index.html has /api/contact:', indexHtml.includes('data-api="/api/contact"'));

const partnersHtml = fs.readFileSync('partners/index.html', 'utf8');
console.log('\npartners/index.html length:', partnersHtml.length);
console.log('partners/index.html has form:', partnersHtml.includes('data-api="/api/partner-enquiries"'));
console.log('partners/index.html has empty main:', partnersHtml.includes('<main id="main"></main>'));
console.log('partners/index.html has h1:', partnersHtml.includes('Help build the infrastructure for'));

const contactHtml = fs.readFileSync('contact/index.html', 'utf8');
console.log('\ncontact/index.html length:', contactHtml.length);
console.log('contact/index.html has form:', contactHtml.includes('data-api="/api/contact"'));
console.log('contact/index.html has empty main:', contactHtml.includes('<main id="main"></main>'));
console.log('contact/index.html has h1:', contactHtml.includes('Start a direct conversation with'));

// Now test server HTTP responses
import { spawn } from 'node:child_process';

const server = spawn(process.execPath, ['server.mjs'], {
  env: {
    ...process.env,
    PORT: '4188',
    STORAGE_MODE: 'local',
    ALLOW_LOCAL_STORAGE: 'true',
    ALLOWED_ORIGINS: ''
  },
  stdio: ['ignore', 'pipe', 'pipe']
});

await new Promise((resolve, reject) => {
  const t = setTimeout(() => reject(new Error('Server start timed out')), 5000);
  server.stdout.on('data', d => {
    if (String(d).includes('server_started')) {
      clearTimeout(t);
      resolve();
    }
  });
  server.stderr.on('data', d => console.error(String(d)));
  server.on('exit', code => reject(new Error(`Server exited early with code ${code}`)));
});

try {
  const urls = [
    { url: 'http://127.0.0.1:4188/', expectStatus: 200, expectText: 'companies that' },
    { url: 'http://127.0.0.1:4188/system/', expectStatus: 200, expectText: 'A founder-generation and' },
    { url: 'http://127.0.0.1:4188/contact', expectStatus: 200, expectText: 'Start a direct conversation' },
    { url: 'http://127.0.0.1:4188/contact/', expectStatus: 200, expectText: 'Start a direct conversation' },
    { url: 'http://127.0.0.1:4188/partners', expectStatus: 200, expectText: 'Help build the infrastructure' },
    { url: 'http://127.0.0.1:4188/partners/', expectStatus: 200, expectText: 'Help build the infrastructure' },
    { url: 'http://127.0.0.1:4188/partner', expectStatus: 301, expectHeader: { name: 'location', val: '/partners/' } },
    { url: 'http://127.0.0.1:4188/partner/', expectStatus: 301, expectHeader: { name: 'location', val: '/partners/' } },
  ];

  console.log('\nTesting HTTP Endpoints:');
  for (const item of urls) {
    const res = await fetch(item.url, { redirect: 'manual' });
    console.log(`Checking ${item.url} -> Status: ${res.status}`);
    if (res.status !== item.expectStatus) {
      throw new Error(`Expected ${item.expectStatus} for ${item.url}, got ${res.status}`);
    }
    if (item.expectText) {
      const text = await res.text();
      if (!text.includes(item.expectText)) {
        throw new Error(`Expected text '${item.expectText}' not found in ${item.url}`);
      }
      console.log(`  -> Verified expected text present.`);
    }
    if (item.expectHeader) {
      const h = res.headers.get(item.expectHeader.name);
      if (h !== item.expectHeader.val) {
        throw new Error(`Expected header ${item.expectHeader.name} to be ${item.expectHeader.val}, got ${h}`);
      }
      console.log(`  -> Verified redirect location: ${h}`);
    }
  }

  console.log('\nALL HTTP ENDPOINT AND PAGE TESTS PASSED!');
} finally {
  server.kill('SIGTERM');
  await new Promise(r => server.on('exit', r));
}
