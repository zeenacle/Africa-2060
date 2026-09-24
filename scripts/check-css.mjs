import fs from 'node:fs';

const css = fs.readFileSync('styles.css', 'utf8');

let stack = [];
let inComment = false;
let inString = false;
let stringChar = '';

for (let i = 0; i < css.length; i++) {
  const ch = css[i];
  const next = css[i + 1];

  if (!inComment && !inString && ch === '/' && next === '*') {
    inComment = true;
    i++;
    continue;
  }
  if (inComment && ch === '*' && next === '/') {
    inComment = false;
    i++;
    continue;
  }
  if (inComment) continue;

  if (!inString && (ch === '"' || ch === "'")) {
    inString = true;
    stringChar = ch;
    continue;
  }
  if (inString && ch === stringChar && css[i - 1] !== '\\') {
    inString = false;
    continue;
  }
  if (inString) continue;

  if (ch === '{') stack.push({ char: '{', index: i });
  else if (ch === '}') {
    if (stack.length === 0) {
      const line = css.slice(0, i).split('\n').length;
      console.log('Unmatched } at line', line);
    } else {
      stack.pop();
    }
  }
}

if (stack.length > 0) {
  stack.forEach(s => {
    const line = css.slice(0, s.index).split('\n').length;
    console.log('Unclosed { opened at line', line);
  });
} else {
  console.log('All braces perfectly matched!');
}

