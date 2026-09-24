import fs from 'node:fs';

const css = `/* ==========================================================================
   AFRICA 2060 — INSTITUTIONAL DIGITAL HEADQUARTERS DESIGN SYSTEM
   Editorial · Architectural · African Future · Industrial Scale · 2060 Horizon
   ========================================================================== */

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap");

:root {
  /* Palette: Continental Scale & Longevity */
  --navy: #040d16;
  --navy-surface: #071522;
  --navy-elevated: #0d1e2e;
  --navy-deep: #02070c;
  --navy-border: rgba(255, 255, 255, 0.12);
  --navy-muted: #8d9da8;

  --cream: #eee8dc;
  --cream-surface: #f6f2ea;
  --paper: #fbf9f4;
  --ink: #06111b;
  --ink-soft: #384249;
  --ink-muted: #6e7a82;

  --gold: #c59a48;
  --gold-bright: #dfb25e;
  --gold-dim: rgba(197, 154, 72, 0.28);
  --ochre: #b98a37;
  --rust: #a94735;
  --rust-dim: rgba(169, 71, 53, 0.2);
  --green: #253d32;
  --green-slate: #334a3e;

  /* Architectural Linework */
  --darkline: rgba(6, 17, 27, 0.14);
  --lightline: rgba(255, 255, 255, 0.12);
  --line-gold: rgba(197, 154, 72, 0.38);

  /* Typography */
  --serif: "Playfair Display", Georgia, "Times New Roman", serif;
  --sans: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --display: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Layout geometry */
  --nav-height: 74px;
  --container-pad: clamp(24px, 5vw, 80px);
  --max-width: 1440px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--nav-height);
  background-color: var(--navy);
  color: var(--cream);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease, opacity 0.2s ease;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  font-family: inherit;
  cursor: pointer;
}

:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 3px;
}

.skip {
  position: fixed;
  z-index: 200;
  left: 20px;
  top: -80px;
  background: var(--gold);
  color: var(--navy);
  padding: 12px 20px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: top 0.25s ease;
}

.skip:focus {
  top: 20px;
}

/* ==========================================================================
   NAVIGATION
   ========================================================================== */
.nav {
  height: var(--nav-height);
  position: fixed;
  z-index: 100;
  inset: 0 0 auto 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 0 var(--container-pad);
  border-bottom: 1px solid var(--navy-border);
  background: rgba(4, 13, 22, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: background 0.3s ease, border-color 0.3s ease;
}

.wordmark {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--display);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: #ffffff;
}

.wordmark img {
  width: 34px;
  height: 34px;
  object-fit: contain;
  flex: none;
  filter: drop-shadow(0 2px 8px rgba(197, 154, 72, 0.25));
}

.wordmark b {
  color: var(--gold);
  font-size: 16px;
  margin-left: 4px;
}

.nav nav {
  display: flex;
  justify-content: center;
  gap: clamp(14px, 2vw, 28px);
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #adb9c0;
}

.nav nav a,
.nav-link {
  position: relative;
  padding: 8px 0;
  white-space: nowrap;
}

.nav nav a::after,
.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--gold);
  transition: width 0.25s ease;
}

.nav nav a:hover,
.nav-link:hover {
  color: #ffffff;
}

.nav nav a:hover::after,
.nav-link:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  justify-self: end;
}

.nav-secondary {
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #c5d0d6;
  padding: 8px 0;
  transition: color 0.2s ease;
}

.nav-secondary:hover {
  color: #ffffff;
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(197, 154, 72, 0.5);
  background: rgba(197, 154, 72, 0.12);
  color: var(--cream);
  padding: 10px 18px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition: all 0.25s ease;
}

.nav-cta span {
  color: var(--gold);
  margin-left: 8px;
  font-size: 12px;
  transition: transform 0.2s ease;
}

.nav-cta:hover {
  background: var(--gold);
  color: var(--navy);
  border-color: var(--gold);
  transform: translateY(-1px);
}

.nav-cta:hover span {
  color: var(--navy);
  transform: translate(2px, -2px);
}

.menu-toggle {
  display: none;
  background: transparent;
  border: 1px solid var(--navy-border);
  color: var(--cream);
  width: 44px;
  height: 44px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 1.5px;
  background: currentColor;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.mobile-menu {
  display: none;
}

/* ==========================================================================
   BUTTONS & LINKS
   ========================================================================== */
.solid-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--gold);
  color: var(--navy);
  padding: 16px 26px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  border: 1px solid var(--gold);
  transition: all 0.25s ease;
}

.solid-button span {
  font-size: 13px;
  transition: transform 0.2s ease;
}

.solid-button:hover {
  background: var(--gold-bright);
  border-color: var(--gold-bright);
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(197, 154, 72, 0.25);
}

.solid-button:hover span {
  transform: translate(2px, -2px);
}

.line-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--cream);
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  padding-bottom: 4px;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.line-link span {
  color: var(--gold);
  transition: transform 0.2s ease;
}

.line-link:hover {
  color: #ffffff;
  border-color: var(--gold);
}

.line-link:hover span {
  transform: translate(2px, -2px);
}

/* ==========================================================================
   THEMES & SHARED ACT LAYOUTS
   ========================================================================== */
.act {
  position: relative;
  overflow: hidden;
  padding: clamp(90px, 10vw, 160px) var(--container-pad);
  border-top: 1px solid var(--lightline);
}

.act-dark,
.dark {
  background-color: var(--navy);
  color: var(--cream);
}

.act-cream,
.cream {
  background-color: var(--cream);
  color: var(--ink);
  border-top: 1px solid var(--darkline);
}

.home-v2 {
  position: relative;
  width: 100%;
}

.act-rust {
  background-color: #120907;
  color: var(--cream);
  background-image: radial-gradient(
    circle at 80% 20%,
    rgba(169, 71, 53, 0.18),
    transparent 45%
  );
}

.eyebrow-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #8c98a0;
  border-bottom: 1px solid currentColor;
  padding-bottom: 16px;
  opacity: 0.85;
}

.act-cream .eyebrow-row {
  color: #636b6f;
  border-bottom-color: var(--darkline);
}

.act-head {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: clamp(30px, 6vw, 90px);
  align-items: end;
  margin-bottom: clamp(60px, 7vw, 100px);
}

.act-head h2 {
  font-family: var(--display);
  font-size: clamp(44px, 6vw, 96px);
  line-height: 0.9;
  letter-spacing: -0.055em;
  margin: 0;
  text-wrap: balance;
}

.act-head h2 .serif,
.act-head h2 em {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 500;
  letter-spacing: -0.03em;
}

.act-head p {
  font-size: clamp(15px, 1.3vw, 19px);
  line-height: 1.65;
  color: #a6b2b8;
  margin: 0;
  max-width: 540px;
}

.act-cream .act-head p {
  color: #555e63;
}

/* ==========================================================================
   ACT 01: MONUMENTAL HERO (THE AMBITION)
   Full-Bleed Photographic Environment · Architectural Scale
   ========================================================================== */
.hero-v2 {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 180px var(--container-pad) clamp(45px, 6vw, 85px);
  overflow: hidden;
  background: var(--navy-deep);
}

.hero-backdrop {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.hero-backdrop img,
.hero-v2-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  filter: saturate(0.85) contrast(1.1) brightness(0.68);
  display: block;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(2, 7, 12, 0.95) 0%, rgba(2, 7, 12, 0.72) 48%, rgba(2, 7, 12, 0.25) 100%),
    linear-gradient(0deg, rgba(2, 7, 12, 0.98) 0%, rgba(2, 7, 12, 0.45) 45%, transparent 85%);
  pointer-events: none;
}

.hero-grid-lines {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: clamp(80px, 8vw, 140px) clamp(80px, 8vw, 140px);
  mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
  pointer-events: none;
}

.hero-v2-main-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(220px, 0.4fr);
  gap: clamp(30px, 5vw, 80px);
  align-items: flex-end;
}

.hero-v2-copy {
  max-width: 960px;
}

.hero-v2-copy .eyebrow-row {
  margin-bottom: 28px;
  color: var(--gold);
}

.hero-v2 h1.display {
  font-family: var(--display);
  font-size: clamp(56px, 7.8vw, 130px);
  font-weight: 800;
  line-height: 0.86;
  letter-spacing: -0.07em;
  margin: 0 0 32px 0;
  color: #ffffff;
  text-transform: uppercase;
}

.hero-v2 h1.display span {
  display: block;
}

.hero-v2 h1.display .serif {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 500;
  text-transform: none;
  letter-spacing: -0.04em;
  color: var(--cream);
}

.hero-v2-sub {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(24px, 4vw, 50px);
  border-top: 1px solid var(--navy-border);
  padding-top: 26px;
  margin-bottom: 34px;
}

.hero-v2-sub p {
  font-size: clamp(14px, 1.15vw, 17px);
  line-height: 1.6;
  color: #c5d0d6;
  margin: 0;
}

.hero-v2-sub p:first-child {
  color: #ffffff;
  font-weight: 500;
}

.hero-v2-actions {
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
}

.hero-v2-number {
  align-self: center;
  justify-self: end;
  font-family: var(--display);
  font-size: clamp(110px, 16vw, 260px);
  font-weight: 800;
  line-height: 0.72;
  letter-spacing: -0.1em;
  color: rgba(255, 255, 255, 0.08);
  user-select: none;
  pointer-events: none;
  text-align: right;
}

.hero-v2-number span {
  display: block;
  font-family: var(--sans);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: var(--gold);
  margin-top: 14px;
}

.hero-meta-strip {
  position: relative;
  z-index: 2;
  margin-top: 48px;
  border-top: 1px solid var(--navy-border);
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8c9da6;
}

/* ==========================================================================
   SPLIT ARCHITECTURAL SPREADS (VISION, INSTITUTION, LAB, MONUMENT)
   ========================================================================== */
.split-editorial {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 90px);
  align-items: stretch;
  margin-top: clamp(40px, 5vw, 70px);
}

.split-photo-pane {
  position: relative;
  min-height: clamp(420px, 48vw, 680px);
  border: 1px solid var(--navy-border);
  overflow: hidden;
  background: #0d1e2e;
}

.split-photo-pane img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.88) contrast(1.08);
  transition: transform 0.6s ease;
}

.split-photo-pane:hover img {
  transform: scale(1.02);
}

.split-photo-caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, rgba(2, 7, 12, 0.95), transparent);
  padding: 30px 24px 20px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  display: flex;
  justify-content: space-between;
}

.split-text-pane {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Institutional lines / Pillars */
.institution-line {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 28px;
  padding: 28px 0;
  border-top: 1px solid var(--darkline);
  align-items: baseline;
}

.institution-line:last-child {
  border-bottom: 1px solid var(--darkline);
}

.institution-line b {
  font-family: var(--display);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: var(--ochre);
}

.institution-line strong {
  display: block;
  font-size: clamp(17px, 1.4vw, 22px);
  font-weight: 700;
  line-height: 1.35;
  color: var(--ink);
  letter-spacing: -0.02em;
}

.institution-line p {
  grid-column: 2;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--ink-soft);
  margin: 8px 0 0 0;
}

.reframe-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-top: 1px solid var(--darkline);
  margin-top: 24px;
}

.reframe-row {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px solid var(--darkline);
  font-size: clamp(14px, 1.2vw, 18px);
  font-weight: 600;
}

.reframe-row span:first-child {
  color: var(--ink-muted);
}

.reframe-row i {
  font-style: normal;
  color: var(--rust);
  font-weight: 700;
}

.reframe-row span:last-child {
  color: var(--ink);
  font-weight: 700;
}

/* ==========================================================================
   ACT 03: THE 9-STAGE OPERATING MACHINE (SYSTEM)
   Industrial Operating Control Deck · Sequencer · Vector Routing
   ========================================================================== */
.machine-control-deck {
  background: var(--navy-deep);
  border: 1px solid var(--navy-border);
  padding: clamp(24px, 3.5vw, 45px);
  position: relative;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
}

.machine-deck-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid var(--navy-border);
  padding-bottom: 18px;
  margin-bottom: 24px;
}

.machine-deck-header b {
  font-family: var(--display);
  font-size: 12px;
  letter-spacing: 0.18em;
  color: var(--gold);
  text-transform: uppercase;
}

.machine-deck-header span {
  font-size: 10px;
  letter-spacing: 0.16em;
  color: #7b8b94;
  text-transform: uppercase;
}

.system-v2 {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  border-top: 1px solid var(--lightline);
  border-bottom: 1px solid var(--lightline);
  position: relative;
}

.system-v2 div,
.system-v2 [role="tab"] {
  padding: 22px 14px;
  border-right: 1px solid var(--lightline);
  background: transparent;
  transition: all 0.25s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 135px;
  text-align: left;
}

.system-v2 div:last-child,
.system-v2 [role="tab"]:last-child {
  border-right: 0;
}

.system-v2 div b {
  font-family: var(--sans);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #8c9da6;
  transition: color 0.2s ease;
}

.system-v2 div span {
  font-family: var(--display);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #d1d8dc;
  margin-top: 12px;
  line-height: 1.35;
}

.system-v2 div:hover {
  background: rgba(255, 255, 255, 0.04);
}

.system-v2 div:hover b {
  color: #ffffff;
}

.system-v2 div.is-active,
.system-v2 [role="tab"][aria-selected="true"] {
  background: rgba(197, 154, 72, 0.14);
  border-bottom: 3px solid var(--gold);
}

.system-v2 div.is-active b,
.system-v2 [role="tab"][aria-selected="true"] b {
  color: var(--gold);
}

.system-v2 div.is-active span,
.system-v2 [role="tab"][aria-selected="true"] span {
  color: #ffffff;
}

/* Machine Detail Expansion */
.machine-detail {
  display: grid;
  grid-template-columns: 180px 1.4fr 1.1fr;
  gap: clamp(24px, 4vw, 50px);
  align-items: start;
  padding: 38px 0 10px;
  border-bottom: 1px solid var(--lightline);
}

.machine-detail .machine-index {
  font-family: var(--sans);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: var(--gold);
  text-transform: uppercase;
  border-left: 2px solid var(--gold);
  padding-left: 14px;
}

.machine-detail h3 {
  font-family: var(--display);
  font-size: clamp(26px, 2.6vw, 42px);
  line-height: 1.05;
  letter-spacing: -0.035em;
  margin: 0 0 16px 0;
  color: #ffffff;
}

.machine-detail p {
  font-size: 16px;
  line-height: 1.65;
  color: #c5d0d6;
  margin: 0;
  max-width: 580px;
}

.machine-detail .machine-output {
  border-left: 1px solid var(--lightline);
  padding-left: 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #8c9da6;
  text-transform: uppercase;
}

.machine-detail .machine-output strong {
  font-family: var(--display);
  font-size: clamp(16px, 1.4vw, 22px);
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--gold);
}

.machine-flow-rail {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: #70818b;
  text-transform: uppercase;
  flex-wrap: wrap;
  gap: 12px;
}

.machine-flow-rail strong {
  color: var(--gold);
}

/* ==========================================================================
   ACT 04: THE INSTITUTION (ARCHITECTURE & FLOW)
   ========================================================================== */
.institution-v2 {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(30px, 6vw, 80px);
  align-items: start;
}

.institution-v2-side h3 {
  font-family: var(--display);
  font-size: clamp(34px, 4vw, 64px);
  line-height: 0.95;
  letter-spacing: -0.045em;
  margin: 18px 0 24px 0;
}

.institution-v2-side h3 .serif {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 500;
}

.architecture-kicker {
  display: block;
  font-family: var(--sans);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ochre);
  margin-bottom: 12px;
}

.architecture-flow {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.architecture-node {
  border: 1px solid var(--darkline);
  padding: 24px 28px;
  background: rgba(255, 255, 255, 0.5);
  transition: all 0.25s ease;
  position: relative;
}

.architecture-node span {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--ochre);
  text-transform: uppercase;
  margin-bottom: 8px;
}

.architecture-node strong {
  display: block;
  font-family: var(--display);
  font-size: clamp(20px, 2vw, 28px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--ink);
}

.architecture-node em {
  display: block;
  font-style: normal;
  font-size: 13px;
  color: var(--ink-soft);
  margin-top: 6px;
}

.architecture-node.node-parent {
  background: var(--paper);
}

.architecture-node.node-mission {
  border-color: rgba(197, 154, 72, 0.6);
  background: rgba(197, 154, 72, 0.08);
}

.architecture-node.node-output {
  border-color: rgba(169, 71, 53, 0.5);
  background: rgba(169, 71, 53, 0.06);
}

.architecture-connector {
  text-align: center;
  font-size: 20px;
  line-height: 32px;
  color: var(--ochre);
  opacity: 0.6;
}

.architecture-branches {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  position: relative;
}

.architecture-branches::before {
  content: "";
  position: absolute;
  left: 16.66%;
  right: 16.66%;
  top: -12px;
  border-top: 1px solid rgba(6, 17, 27, 0.2);
}

/* ==========================================================================
   ACT 05: FOUNDERS (THREE WORLDS & CONVERGENCE)
   Documentary Photography · Materiality · Synthesis
   ========================================================================== */
.tracks-v2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--lightline);
}

.track-v2 {
  position: relative;
  min-height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: transform 0.3s ease, background 0.3s ease;
}

.track-photo-header {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.track-photo-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.85) contrast(1.1);
  transition: transform 0.5s ease;
}

.track-v2:hover .track-photo-header img {
  transform: scale(1.04);
}

.track-photo-header::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(4, 13, 22, 0.95) 0%, rgba(4, 13, 22, 0.2) 60%, transparent);
}

.track-body {
  padding: 30px clamp(20px, 2.5vw, 36px) 34px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}

.track-v2 .track-no {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--gold);
  text-transform: uppercase;
}

.track-v2 .track-mark {
  position: absolute;
  right: -8px;
  top: 36%;
  font-family: var(--display);
  font-size: clamp(120px, 14vw, 200px);
  font-weight: 800;
  line-height: 0.7;
  letter-spacing: -0.1em;
  opacity: 0.05;
  pointer-events: none;
}

.track-v2 h3 {
  font-family: var(--display);
  font-size: clamp(34px, 3.8vw, 56px);
  line-height: 0.9;
  letter-spacing: -0.05em;
  margin: 14px 0 16px 0;
  color: #ffffff;
}

.track-v2 h3 .serif {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 500;
}

.track-v2 p {
  font-size: 15px;
  line-height: 1.6;
  color: #c5d0d6;
  max-width: 320px;
  margin: 0;
}

.track-v2 .track-foot {
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  display: grid;
  grid-template-columns: 85px 1fr;
  gap: 16px;
  align-items: baseline;
  font-size: 12px;
  line-height: 1.5;
}

.track-v2 .track-foot b {
  font-family: var(--sans);
  font-size: 9.5px;
  letter-spacing: 0.16em;
  color: var(--gold);
}

.track-v2 .track-foot span {
  color: #9da8af;
}

.track-vocational,
.track-v2.track-vocational {
  background: linear-gradient(175deg, #1c100e 0%, #081018 100%);
  border-top: 3px solid var(--rust);
}

.track-v2.track-technical {
  background: linear-gradient(175deg, #0d1e2e 0%, #060e17 100%);
  border-top: 3px solid var(--gold);
}

.track-v2.track-operational {
  background: linear-gradient(175deg, #122119 0%, #060e17 100%);
  border-top: 3px solid #3c614d;
}

.track-v2:hover {
  transform: translateY(-4px);
}

/* Founder Convergence Strip */
.tracks-convergence {
  margin-top: 28px;
  padding: 24px 32px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--lightline);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.convergence-badge {
  font-family: var(--sans);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: var(--gold);
  text-transform: uppercase;
  white-space: nowrap;
}

.convergence-formula {
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: var(--display);
  font-size: clamp(12px, 1.3vw, 16px);
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #c5d0d6;
  flex-wrap: wrap;
}

.convergence-formula span {
  color: #ffffff;
}

.convergence-formula i {
  font-style: normal;
  color: var(--gold);
  font-size: 18px;
}

.convergence-formula b {
  color: var(--gold);
  letter-spacing: 0.06em;
}

/* ==========================================================================
   ACT 06: THE ECONOMY & SECTOR UNIVERSE (SECTORS)
   ========================================================================== */
.economy-v2 {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(30px, 6vw, 80px);
  align-items: start;
}

.hierarchy-row {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 20px;
  padding: 22px 0;
  border-bottom: 1px solid var(--darkline);
  align-items: baseline;
}

.hierarchy-row:first-child {
  border-top: 1px solid var(--darkline);
}

.hierarchy-row b {
  font-size: 10.5px;
  letter-spacing: 0.16em;
  color: var(--ochre);
}

.hierarchy-row strong {
  font-family: var(--display);
  font-size: 18px;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.02em;
}

.opportunity-note {
  margin-top: 36px;
  padding: 26px;
  background: var(--paper);
  border: 1px solid var(--darkline);
  border-left: 3px solid var(--rust);
}

.opportunity-note span {
  display: block;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--rust);
  margin-bottom: 8px;
}

.opportunity-note strong {
  display: block;
  font-family: var(--display);
  font-size: 19px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 8px;
}

.opportunity-note p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--ink-soft);
  margin: 0;
}

.opportunity-map {
  background: var(--navy);
  color: var(--cream);
  padding: clamp(24px, 4vw, 45px);
  border: 1px solid var(--navy-border);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 520px;
}

.map-header,
.map-footer {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--gold);
}

.sector-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;
  margin: 40px 0;
}

.sector-cloud span {
  font-family: var(--display);
  font-size: clamp(22px, 2.7vw, 38px);
  font-weight: 600;
  letter-spacing: -0.035em;
  color: #637785;
  transition: color 0.25s ease, transform 0.25s ease;
  cursor: default;
}

.sector-cloud span:hover {
  color: #ffffff;
  transform: translateY(-2px);
}

/* ==========================================================================
   ACT 07: INNOVATION LAB (PROBLEM INTELLIGENCE)
   ========================================================================== */
.lab-v2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--lightline);
}

.lab-stage {
  padding: clamp(30px, 4vw, 55px);
  background: #081420;
}

.lab-stage span {
  display: block;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--gold);
  margin-bottom: 18px;
}

.lab-stage b {
  display: block;
  font-family: var(--display);
  font-size: clamp(22px, 2.2vw, 32px);
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 16px;
  line-height: 1.25;
}

.lab-stage p {
  font-size: 15px;
  line-height: 1.65;
  color: #aebbc1;
  margin: 0;
  max-width: 440px;
}

.lab-bridge {
  grid-column: 1 / -1;
  padding: 24px;
  background: #050d15;
  border-top: 1px solid var(--lightline);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  font-family: var(--display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: #c5d0d6;
}

.lab-bridge i {
  font-style: normal;
  color: #ffffff;
}

.lab-bridge strong {
  color: var(--gold);
  font-size: 16px;
}

/* ==========================================================================
   ACT 08: THE IMPACT & FLYWHEEL (ECONOMIC COMPOUNDING)
   ========================================================================== */
.flywheel-v2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 90px);
  align-items: center;
}

.wheel-system {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
}

.wheel {
  position: relative;
  width: min(85vw, 480px);
  aspect-ratio: 1;
  border: 1px dashed rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: grid;
  place-items: center;
  animation: rotateSlow 60s linear infinite;
}

@keyframes rotateSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.wheel-label {
  position: absolute;
  font-family: var(--display);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.22em;
  color: var(--gold);
  background: var(--navy);
  padding: 6px 12px;
  border: 1px solid rgba(197, 154, 72, 0.4);
}

.wl1 { top: -14px; }
.wl2 { right: -24px; }
.wl3 { bottom: -14px; }
.wl4 { left: -24px; }

.wheel-core {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #180c09;
  border: 2px solid var(--rust);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: rotateReverse 60s linear infinite;
}

@keyframes rotateReverse {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

.wheel-core b {
  font-family: var(--display);
  font-size: 42px;
  font-weight: 800;
  line-height: 0.8;
  letter-spacing: -0.05em;
  color: #ffffff;
}

.wheel-core span {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--gold);
  margin-top: 8px;
}

.wheel-caption {
  text-align: center;
}

.wheel-caption span {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--gold);
  margin-bottom: 8px;
}

.wheel-caption strong {
  display: block;
  font-family: var(--serif);
  font-size: clamp(20px, 2vw, 28px);
  font-weight: 600;
  line-height: 1.35;
  color: #ffffff;
}

.scorecard-v2 {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
}

.score-row {
  display: grid;
  grid-template-columns: 50px 1.1fr 1fr;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  align-items: baseline;
}

.score-row b {
  font-family: var(--sans);
  font-size: 11px;
  font-weight: 700;
  color: var(--gold);
}

.score-row strong {
  font-family: var(--display);
  font-size: clamp(18px, 1.8vw, 24px);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.score-row span {
  font-size: 13.5px;
  line-height: 1.55;
  color: #aebbc1;
}

/* ==========================================================================
   ACT 09: CONTINENTAL HORIZON CLOSING MONUMENT
   ========================================================================== */
.close-v2 {
  min-height: 90svh;
  display: flex;
  align-items: flex-end;
  position: relative;
  background: #02070c;
}

.close-backdrop {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.close-backdrop img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: saturate(0.85) contrast(1.1) brightness(0.65);
  display: block;
}

.close-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(2, 7, 12, 0.96) 0%, rgba(2, 7, 12, 0.7) 50%, rgba(2, 7, 12, 0.3) 100%),
    linear-gradient(0deg, rgba(2, 7, 12, 0.98) 0%, rgba(2, 7, 12, 0.4) 60%, transparent);
}

.close-v2 > div {
  position: relative;
  z-index: 2;
  max-width: 1100px;
}

.close-v2 h2 {
  font-family: var(--display);
  font-size: clamp(48px, 6.8vw, 110px);
  line-height: 0.88;
  letter-spacing: -0.06em;
  margin: 24px 0 45px 0;
  color: #ffffff;
}

.close-v2 h2 .serif {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 500;
}

.close-foot {
  display: flex;
  gap: 32px;
  align-items: baseline;
  border-top: 1px solid var(--navy-border);
  padding-top: 24px;
}

.close-foot strong {
  font-family: var(--display);
  font-size: clamp(54px, 7vw, 110px);
  font-weight: 800;
  line-height: 0.8;
  letter-spacing: -0.06em;
  color: var(--gold);
}

.close-foot span {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #b5c2c7;
  line-height: 1.6;
}

/* ==========================================================================
   DEEP SYSTEM DESTINATION ARCHITECTURE (/system)
   13 Substantive Layers · Economic Machine · Operating Blueprint
   ========================================================================== */
.system-page-container {
  width: 100%;
}

.system-hero {
  position: relative;
  min-height: 80svh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 180px var(--container-pad) clamp(50px, 6vw, 90px);
  background: var(--navy-deep);
  border-bottom: 1px solid var(--navy-border);
  overflow: hidden;
}

.system-hero-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.system-hero-backdrop img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
  filter: saturate(0.85) contrast(1.1) brightness(0.65);
}

.system-hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(2, 7, 12, 0.96) 0%, rgba(2, 7, 12, 0.75) 50%, rgba(2, 7, 12, 0.3) 100%),
    linear-gradient(0deg, rgba(2, 7, 12, 0.98) 0%, rgba(2, 7, 12, 0.5) 45%, transparent);
}

.system-hero-content {
  position: relative;
  z-index: 2;
  max-width: 1080px;
}

.system-hero h1 {
  font-family: var(--display);
  font-size: clamp(48px, 6.8vw, 110px);
  font-weight: 800;
  line-height: 0.88;
  letter-spacing: -0.065em;
  margin: 20px 0 28px 0;
  color: #ffffff;
}

.system-hero h1 .serif {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 500;
}

.system-hero p.system-lede {
  font-size: clamp(16px, 1.4vw, 22px);
  line-height: 1.6;
  color: #d1d8dc;
  max-width: 780px;
  margin: 0;
}

/* System Doctrine Section */
.system-doctrine {
  padding: clamp(80px, 8vw, 130px) var(--container-pad);
  background: var(--paper);
  color: var(--ink);
  border-bottom: 1px solid var(--darkline);
}

.doctrine-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(40px, 6vw, 90px);
  align-items: start;
}

.doctrine-grid h2 {
  font-family: var(--display);
  font-size: clamp(38px, 4.5vw, 72px);
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin: 0;
}

.doctrine-grid h2 .serif {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 500;
}

.doctrine-flow-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--darkline);
}

.doctrine-step {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 20px;
  padding: 22px 0;
  border-bottom: 1px solid var(--darkline);
  align-items: baseline;
}

.doctrine-step b {
  font-family: var(--display);
  font-size: 14px;
  color: var(--ochre);
}

.doctrine-step strong {
  font-family: var(--display);
  font-size: 19px;
  color: var(--ink);
  display: block;
  margin-bottom: 6px;
}

.doctrine-step p {
  font-size: 14px;
  line-height: 1.55;
  color: var(--ink-soft);
  margin: 0;
}

/* Deep Stage-by-Stage Ledger */
.system-stages-ledger {
  padding: clamp(80px, 9vw, 140px) var(--container-pad);
  background: var(--navy);
  color: var(--cream);
  border-bottom: 1px solid var(--navy-border);
}

.stage-ledger-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--lightline);
  margin-top: 50px;
}

.stage-card-deep {
  background: var(--navy-surface);
  padding: clamp(26px, 3vw, 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 380px;
  position: relative;
  transition: background 0.3s ease;
}

.stage-card-deep:hover {
  background: var(--navy-elevated);
}

.stage-card-deep-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--gold);
}

.stage-card-deep h3 {
  font-family: var(--display);
  font-size: clamp(24px, 2.4vw, 36px);
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin: 20px 0 14px 0;
  color: #ffffff;
}

.stage-card-deep p {
  font-size: 14.5px;
  line-height: 1.6;
  color: #aebbc1;
  margin: 0;
}

.stage-card-deep-foot {
  margin-top: 32px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  justify-content: space-between;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: #8c9da6;
  text-transform: uppercase;
}

.stage-card-deep-foot b {
  color: var(--gold);
}

/* Institutional Integration Sections (Academy, Lab, Equity, Scale) */
.system-subsystems {
  padding: clamp(80px, 9vw, 140px) var(--container-pad);
  background: var(--navy-deep);
  color: var(--cream);
  border-bottom: 1px solid var(--navy-border);
}

.subsystem-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(30px, 5vw, 60px);
  margin-top: 50px;
}

.subsystem-box {
  border: 1px solid var(--navy-border);
  background: var(--navy-surface);
  padding: clamp(30px, 4vw, 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.subsystem-box span.badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 16px;
}

.subsystem-box h3 {
  font-family: var(--display);
  font-size: clamp(26px, 2.5vw, 38px);
  line-height: 1.1;
  letter-spacing: -0.035em;
  margin: 0 0 16px 0;
  color: #ffffff;
}

.subsystem-box p {
  font-size: 15px;
  line-height: 1.65;
  color: #b5c2c7;
  margin: 0 0 28px 0;
}

.subsystem-features {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.subsystem-features li {
  padding: 14px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 13.5px;
  color: #c5d0d6;
  display: flex;
  align-items: center;
  gap: 12px;
}

.subsystem-features li::before {
  content: "→";
  color: var(--gold);
  font-weight: 700;
}

/* ==========================================================================
   FOOTER & FORMS
   ========================================================================== */
.footer {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 24px;
  padding: 34px var(--container-pad);
  background: #02070c;
  color: #7b8b94;
  font-size: 9.5px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-top: 1px solid var(--navy-border);
  align-items: center;
}

.footer span:nth-child(2) {
  text-align: center;
  color: #9da8af;
}

.footer span:last-child {
  text-align: right;
}

.footer small {
  grid-column: 1 / -1;
  color: #556269;
  font-size: 8.5px;
  letter-spacing: 0.16em;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
}

.action-form-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(40px, 6vw, 90px);
  align-items: start;
}

.institution-form {
  display: grid;
  gap: 20px;
  padding: clamp(28px, 4vw, 45px);
  border: 1px solid var(--darkline);
  background: #ffffff;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
}

.institution-form label,
.institution-form legend {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink);
}

.institution-form sup {
  color: var(--rust);
}

.institution-form input,
.institution-form select,
.institution-form textarea {
  display: block;
  width: 100%;
  margin-top: 8px;
  border: 0;
  border-bottom: 1px solid rgba(6, 17, 27, 0.25);
  background: transparent;
  padding: 12px 0;
  color: var(--ink);
  font: 500 15px var(--sans);
  border-radius: 0;
  transition: border-color 0.2s ease;
}

.institution-form input:focus,
.institution-form select:focus,
.institution-form textarea:focus {
  outline: 0;
  border-bottom-color: var(--gold);
}

.institution-form fieldset {
  border: 0;
  border-top: 1px solid var(--darkline);
  padding: 20px 0 0;
  margin: 10px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 16px;
}

.check {
  display: flex !important;
  align-items: center;
  gap: 10px;
  text-transform: none !important;
  letter-spacing: 0 !important;
  font-weight: 500 !important;
  font-size: 13.5px !important;
  cursor: pointer;
}

.check input {
  width: auto !important;
  margin: 0 !important;
}

.honeypot {
  position: absolute !important;
  left: -10000px !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

.form-status {
  font-size: 12px;
  line-height: 1.5;
  color: var(--ink-soft);
  margin: 10px 0 0 0;
}

.form-status[data-state="error"] {
  color: var(--rust);
}

.form-success {
  padding: 40px 10px;
}

.form-success span {
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--rust);
}

.form-success h3 {
  font-family: var(--display);
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin: 16px 0;
  color: var(--ink);
}

.form-success p {
  color: var(--ink-soft);
  line-height: 1.6;
}

.noscript-message {
  position: fixed;
  z-index: 120;
  inset: auto 20px 20px;
  background: var(--gold);
  color: var(--navy);
  padding: 14px 18px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
}

/* ==========================================================================
   RESPONSIVE DESIGN (1024px, 900px, 600px)
   ========================================================================== */
@media (max-width: 1024px) {
  .system-v2 {
    grid-template-columns: repeat(5, 1fr);
  }
  .system-v2 div:nth-child(5) {
    border-right: 0;
  }
  .stage-ledger-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 900px) {
  .nav {
    grid-template-columns: 1fr auto;
    padding: 0 20px;
  }
  .nav nav,
  .nav-actions {
    display: none;
  }
  .menu-toggle {
    display: flex;
    justify-self: end;
  }
  .mobile-menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: var(--nav-height);
    left: 0;
    right: 0;
    padding: 24px 20px 32px;
    background: rgba(4, 13, 22, 0.98);
    border-bottom: 1px solid var(--navy-border);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    max-height: calc(100svh - var(--nav-height));
    overflow-y: auto;
  }
  .mobile-menu[hidden] {
    display: none;
  }
  .mobile-menu a {
    padding: 16px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .mobile-menu .mobile-partner {
    color: var(--gold);
    border-bottom: 0;
    padding-top: 20px;
  }

  .hero-v2-main-grid,
  .split-editorial,
  .institution-v2,
  .economy-v2,
  .lab-v2,
  .flywheel-v2,
  .doctrine-grid,
  .subsystem-grid,
  .action-form-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .tracks-v2 {
    grid-template-columns: 1fr;
  }
  .stage-ledger-grid {
    grid-template-columns: 1fr;
  }

  .system-v2 {
    grid-template-columns: repeat(3, 1fr);
  }
  .system-v2 div:nth-child(3n) {
    border-right: 0;
  }

  .machine-detail {
    grid-template-columns: 1fr;
  }
  .machine-detail .machine-output {
    border-left: 0;
    padding-left: 0;
    border-top: 1px solid var(--lightline);
    padding-top: 18px;
  }

  .footer {
    grid-template-columns: 1fr;
    gap: 14px;
    text-align: left;
  }
  .footer span:nth-child(2),
  .footer span:last-child {
    text-align: left;
  }
}

@media (max-width: 600px) {
  :root {
    --nav-height: 66px;
  }
  .hero-v2 {
    padding: 130px 20px 45px;
  }
  .hero-v2-sub {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .hero-v2-number {
    display: none;
  }
  .hero-v2-actions {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
  }
  .hero-v2-actions .solid-button {
    width: 100%;
    justify-content: center;
  }

  .system-v2 {
    grid-template-columns: 1fr 1fr;
  }
  .system-v2 div:nth-child(2n) {
    border-right: 0;
  }

  .tracks-convergence {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }

  .institution-line {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .institution-line p {
    grid-column: 1;
  }

  .reframe-row {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .hierarchy-row {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .score-row {
    grid-template-columns: 36px 1fr;
    gap: 12px;
  }
  .score-row span {
    grid-column: 1 / -1;
  }

  .institution-form fieldset {
    grid-template-columns: 1fr;
  }
}

/* Accessibility: Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .wheel,
  .wheel-core {
    animation: none;
  }
}
`;

fs.writeFileSync('styles.css', css, 'utf8');
console.log('Successfully wrote expanded styles.css, size:', css.length);

