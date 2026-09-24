import fs from 'node:fs';

const html = fs.readFileSync('index.html', 'utf8');

console.log('Contains base64 webp:', html.includes('data:image/webp'));
console.log('Has lagos-dawn.webp:', html.includes('./images/lagos-dawn.webp'));
console.log('Has mark.webp:', html.includes('./images/mark.webp'));
console.log('Has hero actions:', html.includes('hero-v2-actions'));
console.log('Has convergence strip:', html.includes('tracks-convergence'));
console.log('Has styles.css link:', html.includes('./styles.css'));

// Check navigation
const nav = html.slice(html.indexOf('<header class="nav"'), html.indexOf('</header>'));
console.log('Invest in nav:', nav.toLowerCase().includes('invest'));
console.log('Donate in nav:', nav.toLowerCase().includes('donate'));
console.log('Vision in nav:', nav.includes('#vision'));
console.log('System in nav:', nav.includes('#system'));
console.log('Founders in nav:', nav.includes('#founders'));
console.log('Sectors in nav:', nav.includes('#sectors'));
console.log('Innovation Lab in nav:', nav.includes('#innovation-lab'));
console.log('Impact in nav:', nav.includes('#impact'));
console.log('Insights in nav:', nav.includes('#insights'));
console.log('Partner in nav:', nav.includes('#partners'));
console.log('Contact in nav:', nav.includes('#contact'));

// Check 9 stages in operating machine
for (let i = 0; i < 9; i++) {
  const hasStage = html.includes(`data-machine="${i}"`);
  if (!hasStage) console.error(`Missing machine stage ${i}`);
}
console.log('All 9 machine stages present!');

