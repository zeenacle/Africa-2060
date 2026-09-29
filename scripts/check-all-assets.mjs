import fs from 'node:fs';
import path from 'node:path';

const pages = [
  'index.html',
  'vision/index.html',
  'system/index.html',
  'founders/index.html',
  'sectors/index.html',
  'innovation-lab/index.html',
  'impact/index.html',
  'insights/index.html',
  'partners/index.html',
  'contact/index.html'
];

let errors = 0;
let checked = 0;
const pageImages = new Map();

for (const page of pages) {
  const content = fs.readFileSync(page, 'utf8');
  const dir = path.dirname(page);
  const imgs = [...content.matchAll(/<img[^>]+src=["']([^"']+)["']/g)].map(m => m[1]);
  const preloads = [...content.matchAll(/<link[^>]+as=["']image["'][^>]+href=["']([^"']+)["']/g)].map(m => m[1]);
  
  const allRefs = [...imgs, ...preloads];
  pageImages.set(page, imgs);

  for (const ref of allRefs) {
    if (ref.startsWith('data:')) continue;
    checked++;
    const resolved = path.resolve(dir, ref);
    if (!fs.existsSync(resolved)) {
      console.error(`MISSING ASSET in ${page}: ${ref} -> ${resolved}`);
      errors++;
    }
  }
}

console.log(`\n=== ASSET INTEGRITY CHECK ===`);
console.log(`Checked ${checked} asset references across 10 pages.`);
console.log(`Errors: ${errors}`);

console.log(`\n=== HERO & KEY IMAGE USAGE PER PAGE ===`);
for (const [page, imgs] of pageImages.entries()) {
  console.log(`\n${page}:`);
  const unique = [...new Set(imgs)];
  for (const img of unique) {
    console.log(`  - ${img}`);
  }
}

if (errors > 0) {
  process.exit(1);
} else {
  console.log(`\n✓ All image and preload references exist on disk!`);
}

