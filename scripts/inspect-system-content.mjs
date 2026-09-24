import fs from 'node:fs';

const content = fs.readFileSync('system/index.html', 'utf8');
const pos = content.indexOf('system');
console.log('Search for system occurrences in renderRoute:');

const renderRouteIdx = content.indexOf('function renderRoute');
if (renderRouteIdx !== -1) {
  const funcSlice = content.slice(renderRouteIdx, renderRouteIdx + 8000);
  console.log(funcSlice.slice(0, 3000));
}

