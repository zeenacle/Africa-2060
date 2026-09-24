import fs from 'node:fs';

const routes = ['contact', 'founders', 'impact', 'insights', 'partners', 'sectors', 'system', 'vision', 'invest'];
routes.forEach(r => {
  const p = `${r}/index.html`;
  if (!fs.existsSync(p)) return;
  const content = fs.readFileSync(p, 'utf8');
  const navStart = content.indexOf('<header class="nav"');
  const navEnd = content.indexOf('</header>');
  const nav = navStart !== -1 ? content.slice(navStart, navEnd) : '';
  console.log(r, {
    size: content.length,
    hasInlineStyle: content.includes('id="a2060-inline-css"'),
    hasBase64: content.includes('data:image/webp'),
    investInNav: nav.toLowerCase().includes('invest'),
    bodyTag: (content.match(/<body[^>]*>/) || [])[0]
  });
});

