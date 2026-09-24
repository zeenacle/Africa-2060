import fs from 'node:fs';

const extraCss = `
/* ==========================================================================
   SYSTEM PAGE DEEP ARCHITECTURAL COMPONENTS
   ========================================================================== */

/* Layer 05: Academy Tiers */
.academy-tiers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: var(--lightline);
  border: 1px solid var(--lightline);
  margin-top: 48px;
}
.academy-tier-card {
  background: var(--navy-surface);
  padding: clamp(28px, 3.5vw, 44px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.academy-tier-card:hover {
  background: var(--navy-elevated);
}
.academy-tier-num {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--gold);
}
.academy-tier-card h3 {
  font-family: var(--display);
  font-size: clamp(22px, 2.2vw, 32px);
  margin: 18px 0 12px;
  color: #ffffff;
}
.academy-tier-card p {
  font-size: 14.5px;
  line-height: 1.6;
  color: #aebbc1;
}
.academy-tier-list {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--navy-border);
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 13px;
  color: #8d9da8;
}

/* Layer 08: Cap Table & Equity Architecture */
.cap-table-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: var(--lightline);
  border: 1px solid var(--lightline);
  margin-top: 48px;
}
.cap-table-card {
  background: var(--navy-surface);
  padding: clamp(28px, 3.5vw, 44px);
  position: relative;
}
.cap-table-card.founder-card {
  border-top: 3px solid var(--gold);
}
.cap-table-card.system-card {
  border-top: 3px solid #dfb25e;
}
.cap-table-card.growth-card {
  border-top: 3px solid #8d9da8;
}
.cap-table-pct {
  font-family: var(--display);
  font-size: clamp(48px, 5vw, 76px);
  font-weight: 800;
  line-height: 1;
  color: var(--gold);
  margin-bottom: 12px;
}
.cap-table-card h3 {
  font-family: var(--display);
  font-size: clamp(18px, 1.8vw, 24px);
  margin-bottom: 12px;
  color: #ffffff;
}
.cap-table-card p {
  font-size: 14.5px;
  line-height: 1.6;
  color: #aebbc1;
}
.cap-table-card ul {
  margin: 18px 0 0 0;
  padding-left: 18px;
  font-size: 13.5px;
  line-height: 1.6;
  color: #8d9da8;
}

/* Layer 10: Venture OS Pillars */
.vos-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: var(--lightline);
  border: 1px solid var(--lightline);
  margin-top: 48px;
}
.vos-card {
  background: var(--navy-surface);
  padding: clamp(24px, 2.5vw, 36px);
}
.vos-card:hover {
  background: var(--navy-elevated);
}
.vos-card small {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--gold);
}
.vos-card h3 {
  font-family: var(--display);
  font-size: clamp(18px, 1.8vw, 24px);
  margin: 14px 0 10px;
  color: #ffffff;
}
.vos-card p {
  font-size: 14px;
  line-height: 1.55;
  color: #aebbc1;
}

/* Layer 12: Governance Pillars */
.governance-pillars-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: var(--darkline);
  border: 1px solid var(--darkline);
  margin-top: 48px;
}
.governance-pillar-card {
  background: #ffffff;
  padding: clamp(24px, 2.5vw, 36px);
  border: 1px solid rgba(6, 17, 27, 0.06);
}
.governance-pillar-card small {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--gold);
}
.governance-pillar-card h3 {
  font-family: var(--display);
  font-size: clamp(18px, 1.8vw, 24px);
  margin: 14px 0 10px;
  color: var(--ink);
}
.governance-pillar-card p {
  font-size: 14px;
  line-height: 1.55;
  color: var(--ink-soft);
}

/* Pipeline Flow visual */
.pipeline-flow {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  margin-top: 40px;
}
.pipeline-node {
  background: var(--navy-surface);
  border: 1px solid var(--navy-border);
  padding: 22px 18px;
  text-align: center;
  position: relative;
}
.pipeline-node small {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--gold);
  margin-bottom: 8px;
}
.pipeline-node strong {
  font-family: var(--display);
  font-size: 15px;
  color: #ffffff;
}

@media (max-width: 1024px) {
  .pipeline-flow {
    grid-template-columns: repeat(3, 1fr);
  }
  .vos-grid,
  .governance-pillars-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .academy-tiers-grid,
  .cap-table-grid,
  .vos-grid,
  .governance-pillars-grid {
    grid-template-columns: 1fr;
  }
  .pipeline-flow {
    grid-template-columns: 1fr;
  }
}
`;

let current = fs.readFileSync('styles.css', 'utf8');
if (!current.includes('.academy-tiers-grid')) {
  current += extraCss;
  fs.writeFileSync('styles.css', current, 'utf8');
  console.log('Appended system architectural styles to styles.css');
} else {
  console.log('Styles already include .academy-tiers-grid');
}

