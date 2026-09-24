import fs from 'node:fs';

const css = fs.readFileSync('styles.css', 'utf8');

// 1. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
const styleStart = indexHtml.indexOf('<style id="a2060-inline-css">');
const styleEnd = indexHtml.indexOf('</style>', styleStart);
if (styleStart !== -1 && styleEnd !== -1) {
  indexHtml = indexHtml.slice(0, styleStart) +
    `<style id="a2060-inline-css">\n${css}\n</style>` +
    indexHtml.slice(styleEnd + 8);
  fs.writeFileSync('index.html', indexHtml, 'utf8');
  console.log('Synchronized styles to index.html');
}

// 2. Update subroutes
const routes = ['contact', 'founders', 'impact', 'insights', 'partners', 'sectors', 'system', 'vision', 'invest'];
for (const r of routes) {
  const filePath = `${r}/index.html`;
  if (!fs.existsSync(filePath)) continue;
  let html = fs.readFileSync(filePath, 'utf8');
  const sStart = html.indexOf('<style id="a2060-inline-css">');
  const sEnd = html.indexOf('</style>', sStart);
  if (sStart !== -1 && sEnd !== -1) {
    html = html.slice(0, sStart) +
      `<style id="a2060-inline-css">\n${css}\n</style>` +
      html.slice(sEnd + 8);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Synchronized styles to ${filePath}`);
  }
}

console.log('All HTML files synchronized with fixed CSS!');

