import fs from 'node:fs';

const idx = fs.readFileSync('index.html', 'utf8');
console.log('index.html:');
console.log('id="contact":', idx.includes('id="contact"'));
console.log('id="partners":', idx.includes('id="partners"'));
console.log('id="partner":', idx.includes('id="partner"'));

const sys = fs.readFileSync('system/index.html', 'utf8');
console.log('\nsystem/index.html:');
console.log('contact links:', [...sys.matchAll(/href="[^"]*contact[^"]*"/g)].map(m => m[0]));
console.log('partner links:', [...sys.matchAll(/href="[^"]*partner[^"]*"/g)].map(m => m[0]));

console.log('\nindex.html links:');
console.log('contact links:', [...idx.matchAll(/href="[^"]*contact[^"]*"/g)].map(m => m[0]));
console.log('partner links:', [...idx.matchAll(/href="[^"]*partner[^"]*"/g)].map(m => m[0]));

