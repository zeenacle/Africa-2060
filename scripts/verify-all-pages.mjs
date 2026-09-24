import fs from 'node:fs';
import path from 'node:path';

const PAGES = [
  { route: '/', file: 'index.html', isSubpage: false, expectedForms: 0 },
  { route: '/vision/', file: 'vision/index.html', isSubpage: true, expectedForms: 0 },
  { route: '/system/', file: 'system/index.html', isSubpage: true, expectedForms: 0 },
  { route: '/founders/', file: 'founders/index.html', isSubpage: true, expectedForms: 0 },
  { route: '/sectors/', file: 'sectors/index.html', isSubpage: true, expectedForms: 0 },
  { route: '/innovation-lab/', file: 'innovation-lab/index.html', isSubpage: true, expectedForms: 0 },
  { route: '/impact/', file: 'impact/index.html', isSubpage: true, expectedForms: 0 },
  { route: '/insights/', file: 'insights/index.html', isSubpage: true, expectedForms: 0 },
  { route: '/partners/', file: 'partners/index.html', isSubpage: true, expectedForms: 1 },
  { route: '/contact/', file: 'contact/index.html', isSubpage: true, expectedForms: 1 },
];

let errors = [];
let passedChecks = 0;

console.log('=== MULTI-PAGE ARCHITECTURE VERIFICATION ===\n');

for (const p of PAGES) {
  if (!fs.existsSync(p.file)) {
    errors.push(`Missing file: ${p.file}`);
    continue;
  }
  const content = fs.readFileSync(p.file, 'utf8');
  const size = Buffer.byteLength(content, 'utf8');

  // 1. File size check (> 50KB)
  if (size < 50000) {
    errors.push(`${p.file} is too small: ${size} bytes (expected > 50,000 bytes)`);
  } else {
    passedChecks++;
  }

  // 2. Main element check (not empty, substantial content)
  const mainMatch = content.match(/<main id="main">([\s\S]*?)<\/main>/);
  if (!mainMatch || mainMatch[1].trim().length < 5000) {
    errors.push(`${p.file} has empty or insufficient <main id="main"> (length: ${mainMatch ? mainMatch[1].trim().length : 0})`);
  } else {
    passedChecks++;
  }

  // 3. Form count check
  const forms = content.match(/<form[\s>]/g) || [];
  if (forms.length !== p.expectedForms) {
    errors.push(`${p.file} form count mismatch: found ${forms.length}, expected ${p.expectedForms}`);
  } else {
    passedChecks++;
  }

  // 4. Base64 payload check (excluding svg favicon data uri)
  const base64Matches = content.match(/data:image\/(?!svg\+xml)[^"'\s]+/g) || [];
  if (base64Matches.length > 0) {
    errors.push(`${p.file} contains ${base64Matches.length} base64 image payload(s)!`);
  } else {
    passedChecks++;
  }

  // 5. Image references check
  const imgMatches = [...content.matchAll(/src=["']([^"']+\.(?:webp|png|jpg|jpeg|svg))["']/g)];
  for (const m of imgMatches) {
    const rawSrc = m[1];
    if (rawSrc.startsWith('http') || rawSrc.startsWith('data:')) continue;
    const resolvedPath = path.resolve(path.dirname(p.file), rawSrc);
    if (!fs.existsSync(resolvedPath)) {
      errors.push(`${p.file}: referenced image not found: ${rawSrc} -> ${resolvedPath}`);
    } else {
      passedChecks++;
    }
  }

  // 6. Preload image check
  const preloadMatches = [...content.matchAll(/<link rel="preload" as="image" href=["']([^"']+)["']/g)];
  for (const m of preloadMatches) {
    const rawHref = m[1];
    if (rawHref.startsWith('http') || rawHref.startsWith('data:')) continue;
    const resolvedPath = path.resolve(path.dirname(p.file), rawHref);
    if (!fs.existsSync(resolvedPath)) {
      errors.push(`${p.file}: preloaded image not found: ${rawHref} -> ${resolvedPath}`);
    } else {
      passedChecks++;
    }
  }

  console.log(`✓ ${p.route.padEnd(18)} (${p.file}) - Size: ${(size / 1024).toFixed(1)} KB - Main: ${(mainMatch[1].trim().length / 1024).toFixed(1)} KB - Forms: ${forms.length}`);
}

console.log('\n--- Navigation Consistency Audit ---');

const ALL_DESTS = ['vision', 'system', 'founders', 'sectors', 'innovation-lab', 'impact', 'insights', 'partners', 'contact'];

for (const p of PAGES) {
  const content = fs.readFileSync(p.file, 'utf8');

  // Extract header navigation and mobile menu
  const headerMatch = content.match(/<header class="nav"[\s\S]*?<\/header>/);
  if (!headerMatch) {
    errors.push(`${p.file} is missing <header class="nav">`);
    continue;
  }
  const headerHtml = headerMatch[0];

  for (const dest of ALL_DESTS) {
    const isCurrentPage = p.route.includes(dest);
    if (isCurrentPage) {
      // Must link to ./ as active page
      if (!headerHtml.includes('href="./"') && !headerHtml.includes('href="./"')) {
        errors.push(`${p.file} active link for ${dest} should link to "./"`);
      } else {
        passedChecks++;
      }
    } else {
      const expectedHref = p.isSubpage ? `../${dest}/` : `./${dest}/`;
      if (!headerHtml.includes(expectedHref)) {
        errors.push(`${p.file} header nav missing link to ${expectedHref}`);
      } else {
        passedChecks++;
      }
    }
  }
}

console.log(`\nVerification complete. Passed checks: ${passedChecks}. Errors: ${errors.length}`);
if (errors.length > 0) {
  console.error('\nERRORS FOUND:');
  errors.forEach(e => console.error('  ✖ ' + e));
  process.exit(1);
} else {
  console.log('\nALL 10 MULTI-PAGE DESTINATIONS FULLY VERIFIED AND SOUND!');
}
