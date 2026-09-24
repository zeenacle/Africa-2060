import fs from 'node:fs';

const extraCss = `
/* ==========================================================================
   PARTNER & CONTACT EDITORIAL COMPOSITIONS
   ========================================================================== */
.giving-grid,
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: clamp(40px, 6vw, 90px);
  align-items: start;
  margin-top: clamp(40px, 5vw, 70px);
}

.giving-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 28px;
}

.giving-list-item {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 18px;
  padding: 16px 0;
  border-top: 1px solid var(--darkline);
}

.giving-list-item b {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--ink);
}

.giving-list-item span {
  font-size: 14px;
  color: var(--ink-soft);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .giving-grid,
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .giving-list-item {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}
`;

let current = fs.readFileSync('styles.css', 'utf8');
if (!current.includes('.giving-grid')) {
  current += extraCss;
  fs.writeFileSync('styles.css', current, 'utf8');
  console.log('Appended giving-grid and contact-grid to styles.css');
} else {
  console.log('Styles already include .giving-grid');
}

