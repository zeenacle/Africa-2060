import fs from 'node:fs';

const original = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');

// 1. Rebuild Head
const fontLinks = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Manrope:wght@200..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="./styles.css">
<style id="a2060-inline-css">
${css}
</style>
<link rel="preload" as="image" href="./images/lagos-dawn.webp">`;

const styleStart = original.indexOf('<style id="a2060-inline-css">');
const styleEnd = original.indexOf('</style>') + 8;
const beforeStyle = original.slice(0, styleStart);

// find where preload ends
const afterStyle = original.slice(styleEnd);
const preloadEnd = afterStyle.indexOf('>') + 1;
const afterPreload = afterStyle.slice(preloadEnd);

let updated = beforeStyle + fontLinks + afterPreload;

// 2. Replace wordmark base64
const wmImgRegex = /<a class="wordmark" [^>]*><img src="data:image\/[^;]+;base64,[^"]+" alt="" width="34" height="34" decoding="async">/;
if (!wmImgRegex.test(updated)) {
  throw new Error('Wordmark regex failed to match');
}
updated = updated.replace(
  wmImgRegex,
  '<a class="wordmark" href="./index.html" aria-label="Africa 2060 home" data-nav-link><img src="./images/mark.webp" alt="" width="34" height="34" decoding="async">'
);

// 3. Replace hero-v2-image base64
const heroImgRegex = /<img class="hero-v2-image" src="data:image\/[^;]+;base64,[^"]+" alt="[^"]*" width="1376" height="784" fetchpriority="high" decoding="async">/;
if (!heroImgRegex.test(updated)) {
  throw new Error('Hero image regex failed to match');
}
updated = updated.replace(
  heroImgRegex,
  '<img class="hero-v2-image" src="./images/lagos-dawn.webp" alt="Lagos city skyline at dawn" width="1376" height="784" fetchpriority="high" decoding="async">'
);

// 4. Add hero-v2-actions inside hero-v2-copy if not already present
if (!updated.includes('hero-v2-actions')) {
  const targetSubEnd = 'last-child lasting ownership.</p></div>';
  // Let's check exact text of hero-v2-sub
  const subRegex = /(<div class="hero-v2-sub">[\s\S]*?<\/div>)/;
  const match = updated.match(subRegex);
  if (!match) throw new Error('hero-v2-sub not found');
  const heroActions = `\n    <div class="hero-v2-actions">\n      <a class="solid-button" href="#system">Explore the System <span>↗</span></a>\n      <a class="line-link" href="#partners">Partner with Africa 2060 <span>↗</span></a>\n    </div>`;
  updated = updated.replace(match[0], match[0] + heroActions);
}

// 5. Add convergence strip inside #founders
if (!updated.includes('tracks-convergence')) {
  const tracksRegex = /(<div class="tracks-v2">[\s\S]*?<\/div>)/;
  const match = updated.match(tracksRegex);
  if (!match) throw new Error('tracks-v2 not found');
  const convergenceStrip = `\n  <div class="tracks-convergence">\n    <div class="convergence-badge">CONVERGENCE PRINCIPLE</div>\n    <div class="convergence-formula">\n      <span>Make &amp; Build</span>\n      <i>+</i>\n      <span>Engineer &amp; Innovate</span>\n      <i>+</i>\n      <span>Organise &amp; Scale</span>\n      <i>=</i>\n      <b>Company Formation</b>\n    </div>\n  </div>`;
  updated = updated.replace(match[0], match[0] + convergenceStrip);
}

fs.writeFileSync('index.html', updated, 'utf8');
console.log('Successfully updated index.html! New length:', updated.length);

