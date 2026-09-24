import fs from 'node:fs';
import path from 'node:path';

function checkPage(filePath, isRoot = true) {
  console.log(`\n========================================`);
  console.log(`VERIFYING: ${filePath}`);
  console.log(`========================================`);
  
  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: File does not exist: ${filePath}`);
    return false;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  let pass = true;

  // 1. Check size
  console.log(`File size: ${content.length} bytes (${Math.round(content.length / 1024)} KB)`);
  if (content.length < 30000) {
    console.error(`FAIL: File is too small (${content.length} bytes), expected deep content`);
    pass = false;
  }

  // 2. Base64 check
  if (content.includes('data:image/webp') || content.includes('data:image/jpeg') || content.includes('data:image/png')) {
    console.error(`FAIL: Contains embedded base64 image data`);
    pass = false;
  } else {
    console.log(`PASS: Zero base64 image payloads`);
  }

  // 3. Navigation check
  const navStart = content.indexOf('<header class="nav"');
  const navEnd = content.indexOf('</header>');
  if (navStart === -1 || navEnd === -1) {
    console.error(`FAIL: <header class="nav"> not found`);
    pass = false;
  } else {
    const navText = content.slice(navStart, navEnd);
    if (navText.toLowerCase().includes('invest')) {
      console.error(`FAIL: Nav contains 'invest'`);
      pass = false;
    } else {
      console.log(`PASS: Zero 'invest' in navigation`);
    }
    if (navText.toLowerCase().includes('donate')) {
      console.error(`FAIL: Nav contains 'donate'`);
      pass = false;
    } else {
      console.log(`PASS: Zero 'donate' in navigation`);
    }
    
    // Check 9 routes in nav
    const reqLinks = isRoot
      ? ['#vision', '#system', '#founders', '#sectors', '#innovation-lab', '#impact', '#insights', '#partners', '#contact']
      : ['../index.html#vision', './', '../index.html#founders', '../index.html#sectors', '../index.html#innovation-lab', '../index.html#impact', '../index.html#insights', '../index.html#partners', '../index.html#contact'];
    
    for (const lk of reqLinks) {
      if (!navText.includes(lk)) {
        console.error(`FAIL: Missing nav link target: ${lk}`);
        pass = false;
      }
    }
    console.log(`PASS: All required navigation targets present`);
  }

  // 4. Image links check
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let match;
  let imgCount = 0;
  while ((match = imgRegex.exec(content)) !== null) {
    imgCount++;
    const src = match[1];
    if (src.startsWith('data:')) continue;
    const resolvedPath = isRoot ? src : path.join('system', src);
    if (!fs.existsSync(resolvedPath)) {
      console.error(`FAIL: Image src does not exist on disk: ${src} (resolved: ${resolvedPath})`);
      pass = false;
    } else {
      console.log(`PASS: Verified image asset on disk: ${src}`);
    }
  }
  console.log(`Total image tags verified: ${imgCount}`);

  // 5. Machine stages check
  for (let i = 0; i < 9; i++) {
    if (!content.includes(`data-machine="${i}"`)) {
      console.error(`FAIL: Missing machine stage data-machine="${i}"`);
      pass = false;
    }
  }
  console.log(`PASS: All 9 machine stages present in sequencer`);

  return pass;
}

const homePass = checkPage('index.html', true);
const sysPass = checkPage('system/index.html', false);

// Check system 13 substantive layers
console.log(`\n========================================`);
console.log(`CHECKING SYSTEM PAGE 13 INSTITUTIONAL LAYERS`);
console.log(`========================================`);
const sysHtml = fs.readFileSync('system/index.html', 'utf8');
const layers = [
  { num: '01', name: 'Opening Doctrine & Operating Thesis', anchor: 'doctrine', key: 'company-creation' },
  { num: '02', name: 'Institutional Blueprint (Zeenacle Group)', anchor: 'blueprint', key: 'Zeenacle Network Group' },
  { num: '03', name: '9-Stage Operating Sequencer', anchor: 'machine', key: 'machine-control-deck' },
  { num: '04', name: 'Stage-by-Stage Operational Ledger', anchor: 'ledger', key: 'stage-ledger-grid' },
  { num: '05', name: 'Academy Capability Architecture', anchor: 'academy', key: 'academy-tiers-grid' },
  { num: '06', name: 'Innovation Lab Relationship', anchor: 'lab', key: 'pipeline-flow' },
  { num: '07', name: 'Founder Convergence Model (The Triad)', anchor: 'convergence', key: 'tracks-v2' },
  { num: '08', name: 'Company Formation & Cap Table (50/20/30)', anchor: 'formation', key: 'cap-table-grid' },
  { num: '09', name: 'Seed Resourcing & Capital Allocation', anchor: 'funding', key: 'FACILITY 01' },
  { num: '10', name: 'Venture Operating System (VOS)', anchor: 'scale', key: 'vos-grid' },
  { num: '11', name: 'Compounding Reinvestment Engine', anchor: 'reinvestment', key: 'flywheel-v2' },
  { num: '12', name: 'Institutional Architecture & Governance Senate', anchor: 'governance', key: 'governance-pillars-grid' },
  { num: '13', name: 'Closing Monument & Action Gateway', anchor: 'horizon', key: 'act-monument' },
];

let layerPass = true;
layers.forEach(l => {
  const hasAnchor = sysHtml.includes(`id="${l.anchor}"`);
  const hasKey = sysHtml.includes(l.key);
  if (!hasAnchor || !hasKey) {
    console.error(`FAIL: Layer ${l.num} (${l.name}) missing (anchor: ${hasAnchor}, key: ${hasKey})`);
    layerPass = false;
  } else {
    console.log(`PASS: Layer ${l.num} - ${l.name} present`);
  }
});

if (homePass && sysPass && layerPass) {
  console.log(`\n>>> ALL REFERENCE STANDARD CHECKS PASSED FOR HOMEPAGE AND SYSTEM PAGE! <<<`);
} else {
  console.error(`\n>>> VERIFICATION FAILED <<<`);
  process.exit(1);
}

