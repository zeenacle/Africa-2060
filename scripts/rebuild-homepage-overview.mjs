import fs from 'node:fs';

const css = fs.readFileSync('styles.css', 'utf8');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Africa 2060 is a founder creation and company formation system designed to create 10 million founders and economic opportunities across Africa by 2060.">
<meta name="robots" content="index,follow">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta name="color-scheme" content="dark light">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Africa 2060">
<meta property="og:title" content="Africa 2060 — Founder Creation and Company Formation System">
<meta property="og:description" content="A founder creation and company formation system designed to create 10 million founders and economic opportunities across Africa by 2060.">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Africa 2060 — Founder Creation and Company Formation System">
<meta name="twitter:description" content="A founder creation and company formation system designed to create 10 million founders and economic opportunities across Africa by 2060.">
<meta name="theme-color" content="#040d16">
<title>Africa 2060 — Founder Creation and Company Formation System</title>
<link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJBZnJpY2EgMjA2MCI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iIzA3MTMxZiIvPgogIDxwYXRoIGQ9Ik04IDEyaDQ4djRIOHoiIGZpbGw9IiNjNTlhNDgiLz4KICA8dGV4dCB4PSIzMiIgeT0iNDIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMSIgZm9udC13ZWlnaHQ9IjgwMCIgZmlsbD0iI2VlZThkYyI+MjA2MDwvdGV4dD4KPC9zdmc+Cg==" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="./styles.css">
<style id="a2060-inline-css">
${css}
</style>
<link rel="preload" as="image" href="./images/lagos-dawn.webp">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","name":"Africa 2060","description":"A founder creation and company formation system designed to create 10 million founders and economic opportunities across Africa by 2060."}</script>
</head>
<body data-route="home">
<a class="skip" href="#main">Skip to content</a>
<header class="nav" id="top">
  <a class="wordmark" href="./" aria-label="Africa 2060 home"><img src="./images/mark.webp" alt="" width="34" height="34" decoding="async"><span>AFRICA</span><b>2060</b></a>
  <nav aria-label="Primary navigation">
    <a class="nav-link" href="./vision/">Vision</a>
    <a class="nav-link" href="./system/">System</a>
    <a class="nav-link" href="./founders/">Founders</a>
    <a class="nav-link" href="./sectors/">Sectors</a>
    <a class="nav-link" href="./innovation-lab/">Innovation Lab</a>
    <a class="nav-link" href="./impact/">Impact</a>
    <a class="nav-link" href="./insights/">Insights</a>
  </nav>
  <button class="menu-toggle" id="menuToggle" type="button" aria-expanded="false" aria-controls="mobileMenu" aria-label="Open navigation menu"><span></span><span></span><span></span></button>
  <div class="nav-actions"><a class="nav-secondary" href="./contact/">Contact</a><a class="nav-cta" href="./partners/">Partner <span>↗</span></a></div>
  <div class="mobile-menu" id="mobileMenu" hidden>
    <a href="./vision/">Vision</a>
    <a href="./system/">System</a>
    <a href="./founders/">Founders</a>
    <a href="./sectors/">Sectors</a>
    <a href="./innovation-lab/">Innovation Lab</a>
    <a href="./impact/">Impact</a>
    <a href="./insights/">Insights</a>
    <a class="mobile-partner" href="./partners/">Partner <span>↗</span></a>
    <a href="./contact/">Contact</a>
  </div>
</header>

<main id="main">
<div class="home-v2">

<!-- 01: MONUMENTAL HERO -->
<section class="hero-v2" aria-labelledby="hero-title">
  <div class="hero-backdrop">
    <img class="hero-v2-image" src="./images/lagos-dawn.webp" alt="Lagos industrial and maritime infrastructure at dawn" width="1376" height="784" fetchpriority="high" decoding="async">
  </div>
  <div class="hero-overlay" aria-hidden="true"></div>
  <div class="hero-grid-lines" aria-hidden="true"></div>
  <div class="hero-v2-main-grid">
    <div class="hero-v2-copy">
      <div class="eyebrow-row"><span>01 / THE AMBITION</span><span>AFRICA 2060 · CONTINENTAL HORIZON</span></div>
      <h1 id="hero-title" class="display">Build the <span>companies that</span><span class="serif">build Africa.</span></h1>
      <div class="hero-v2-sub">
        <p>10,000,000+ founders by 2060. A long-horizon system for turning human capability into companies, ownership and sovereign economic opportunity.</p>
        <p>We are not building another training programme. We are building the institutional machinery through which founders meet verified problems, form companies and create lasting ownership.</p>
      </div>
      <div class="hero-v2-actions">
        <a class="solid-button" href="./system/">Explore the Operating Machine <span>↗</span></a>
        <a class="line-link" href="./partners/">Partner with Africa 2060 <span>↗</span></a>
      </div>
    </div>
    <div class="hero-v2-number" aria-hidden="true">2060<span>CONTINENTAL HORIZON</span></div>
  </div>
  <div class="hero-meta-strip">
    <span>LAT: 6.5244° N, 3.3792° E</span>
    <span>OPERATING HORIZON: 2026—2060</span>
    <span>NORTH STAR: 10M+ FOUNDERS</span>
    <span>PAN-AFRICAN ARCHITECTURE</span>
  </div>
</section>

<!-- 02: THE STRATEGIC SHIFT (VISION OVERVIEW) -->
<section class="act act-cream" id="vision-overview">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>02 / THE STRATEGIC SHIFT</span><span>VISION OVERVIEW</span></div>
      <h2 style="margin-top:34px">Move from workforce development to <span class="serif">founder creation.</span></h2>
    </div>
    <p>Employment remains a valued outcome; ownership is the target. The system measures impact primarily in founders created: people trained, matched into teams, and seeded into real, equity-holding companies.</p>
  </div>
  <div class="split-editorial">
    <div class="split-photo-pane">
      <img src="./images/ownership.webp" alt="African founders and executives convening in an ownership boardroom" width="1200" height="800" loading="lazy" decoding="async">
      <div class="split-photo-caption">
        <span>ECONOMIC OWNERSHIP</span>
        <span>EQUITY HELD BY FOUNDERS</span>
      </div>
    </div>
    <div class="split-text-pane">
      <div class="reframe-grid">
        <div class="reframe-row"><span>Workforce development</span><i>→</i><span>Founder creation</span></div>
        <div class="reframe-row"><span>Employability</span><i>→</i><span>Ownership</span></div>
        <div class="reframe-row"><span>Job seekers</span><i>→</i><span>Company builders</span></div>
        <div class="reframe-row"><span>Isolated skills</span><i>→</i><span>Complementary co-founding teams</span></div>
      </div>
      <div style="margin-top:36px">
        <a class="solid-button" href="./vision/">Read the Vision Doctrine <span>↗</span></a>
      </div>
    </div>
  </div>
</section>

<!-- 03: THE SYSTEM — OVERVIEW -->
<section class="act act-dark" id="system-overview">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>03 / THE OPERATING SYSTEM</span><span>SYSTEM OVERVIEW</span></div>
      <h2 style="margin-top:34px">Nine stages. One <span class="serif">production machine.</span></h2>
    </div>
    <p>Africa 2060 works backwards from company opportunities: Strategic Industry → Company Opportunities → Founder Roles Required → Skills Required → Training → Matching → Company Formation → Funding → Scale → Reinvestment → More Founders.</p>
  </div>

  <div class="pipeline-flow" style="margin-top:36px">
    <div class="pipeline-node"><small>01</small><strong>SCAN &amp; PROBLEM</strong></div>
    <div class="pipeline-node"><small>02</small><strong>RECRUIT &amp; SCREEN</strong></div>
    <div class="pipeline-node"><small>03</small><strong>TRAIN &amp; FOUNDATION</strong></div>
    <div class="pipeline-node"><small>04</small><strong>APPLY &amp; CHALLENGE</strong></div>
    <div class="pipeline-node"><small>05</small><strong>MATCH &amp; TEAMS</strong></div>
    <div class="pipeline-node"><small>06</small><strong>FORM &amp; LEGAL</strong></div>
  </div>
  <div class="pipeline-flow" style="margin-top:12px">
    <div class="pipeline-node"><small>07</small><strong>FUND &amp; RESOURCE</strong></div>
    <div class="pipeline-node"><small>08</small><strong>SCALE &amp; VOS</strong></div>
    <div class="pipeline-node"><small>09</small><strong>REINVEST &amp; COMPOUND</strong></div>
  </div>

  <div style="margin-top:44px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;padding:28px 0;border-top:1px solid var(--navy-border)">
    <p style="margin:0;max-width:620px;font-size:15px;color:#aebbc1;line-height:1.6">The complete operating architecture connects the 3-Tier Academy, Innovation Lab challenge pipeline, 50/20/30 cap table governance, and the Venture Operating System across 54 African economies.</p>
    <a class="solid-button" href="./system/">Explore the Full Operating Architecture <span>↗</span></a>
  </div>
</section>

<!-- 04: FOUNDERS — OVERVIEW -->
<section class="act act-cream" id="founders-overview">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>04 / FOUNDER FORMATION</span><span>THREE TRACKS</span></div>
      <h2 style="margin-top:34px">Three complementary pathways. <span class="serif">One co-founding unit.</span></h2>
    </div>
    <p>Africa 2060 develops three distinct founder archetypes and systematically unites them into balanced co-founding triads to eliminate the single-discipline vulnerability that causes 90% of early venture failures.</p>
  </div>

  <div class="hierarchy-cards" style="margin-top:40px">
    <div class="hierarchy-card" style="background:#fff;border:1px solid var(--darkline);padding:clamp(24px,3vw,38px)">
      <div class="track-code" style="color:var(--rust)">TRACK 01 / VOCATIONAL</div>
      <h3 style="font-family:var(--display);font-size:clamp(22px,2.2vw,30px);margin:14px 0 10px;color:var(--ink)">Make &amp; Build</h3>
      <p style="font-size:14.5px;color:var(--ink-soft);line-height:1.6">Founders who physically produce, construct, repair, manufacture, install, grow, process and deliver tangible physical products and infrastructure.</p>
      <small style="display:block;margin-top:18px;font-size:11px;font-weight:700;letter-spacing:0.14em;color:var(--gold)">7 PHYSICAL SECTORS</small>
    </div>

    <div class="hierarchy-card" style="background:#fff;border:1px solid var(--darkline);padding:clamp(24px,3vw,38px)">
      <div class="track-code" style="color:#2a6f97">TRACK 02 / TECHNICAL</div>
      <h3 style="font-family:var(--display);font-size:clamp(22px,2.2vw,30px);margin:14px 0 10px;color:var(--ink)">Engineer &amp; Innovate</h3>
      <p style="font-size:14.5px;color:var(--ink-soft);line-height:1.6">Founders who design software, build hardware, architect systems, create proprietary intellectual property and solve complex technical challenges.</p>
      <small style="display:block;margin-top:18px;font-size:11px;font-weight:700;letter-spacing:0.14em;color:var(--gold)">8 TECHNICAL SECTORS</small>
    </div>

    <div class="hierarchy-card" style="background:#fff;border:1px solid var(--darkline);padding:clamp(24px,3vw,38px)">
      <div class="track-code" style="color:var(--green)">TRACK 03 / OPERATIONAL</div>
      <h3 style="font-family:var(--display);font-size:clamp(22px,2.2vw,30px);margin:14px 0 10px;color:var(--ink)">Organise &amp; Scale</h3>
      <p style="font-size:14.5px;color:var(--ink-soft);line-height:1.6">Founders who organize capital, people, physical assets, supply chains, compliance, distribution channels, and commercial enterprise scale.</p>
      <small style="display:block;margin-top:18px;font-size:11px;font-weight:700;letter-spacing:0.14em;color:var(--gold)">7 OPERATIONAL SECTORS</small>
    </div>
  </div>

  <div style="margin-top:40px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;padding:24px 0;border-top:1px solid var(--darkline)">
    <strong style="font-family:var(--display);font-size:16px;color:var(--ink)">THE CONVERGENCE PRINCIPLE: 1 Maker + 1 Engineer + 1 Operator = 1 Resilient African Company</strong>
    <a class="solid-button" href="./founders/">Explore Founder Pathways <span>↗</span></a>
  </div>
</section>

<!-- 05: THE OPPORTUNITY UNIVERSE (SECTORS OVERVIEW) -->
<section class="act act-dark" id="sectors-overview">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>05 / SECTOR UNIVERSE</span><span>INDUSTRIAL OPPORTUNITY</span></div>
      <h2 style="margin-top:34px">Track → Sector → Sub-sector → <span class="serif">Company Opportunity.</span></h2>
    </div>
    <p>A strategic universe, not a commitment to launch every sector immediately. Africa 2060 identifies the economic systems and value chains within which enduring companies can be built.</p>
  </div>

  <div class="hierarchy-strip">
    <div class="hierarchy-row"><span>Track</span><i>→</i><span>Foundational capability profile (Vocational, Technical, Operational)</span></div>
    <div class="hierarchy-row"><span>Sector</span><i>→</i><span>Major economic domain (e.g. Agriculture, Energy, Construction, Healthtech)</span></div>
    <div class="hierarchy-row"><span>Sub-sector</span><i>→</i><span>Focused value chain segment (e.g. Cold Chain, Solar Irrigation, Generic APIs)</span></div>
    <div class="hierarchy-row"><span>Company Opportunity</span><i>→</i><span>Specific, validated commercial enterprise ready for a founding team</span></div>
  </div>

  <div style="margin-top:40px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;padding:28px 0;border-top:1px solid var(--navy-border)">
    <p style="margin:0;max-width:620px;font-size:15px;color:#aebbc1;line-height:1.6">Explore the full 22-sector industrial atlas, sub-sector value chains, dynamic branch architecture, and commercial company opportunities.</p>
    <a class="solid-button" href="./sectors/">Explore the African Industrial Atlas <span>↗</span></a>
  </div>
</section>

<!-- 06: INNOVATION LAB — OVERVIEW -->
<section class="act act-cream" id="lab-overview">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>06 / PROBLEM INTELLIGENCE</span><span>INNOVATION LAB OVERVIEW</span></div>
      <h2 style="margin-top:34px">The problem-intelligence layer of <span class="serif">the system.</span></h2>
    </div>
    <p>The Innovation Lab scans African markets and institutions, validates real problems, and converts them into structured founder challenge briefs that feed the Academy and company formation pipeline.</p>
  </div>

  <div class="split-editorial">
    <div class="split-photo-pane">
      <img src="./images/ai-team.webp" alt="African researchers and engineers analyzing data and market intelligence in the Innovation Lab" width="1200" height="800" loading="lazy" decoding="async">
      <div class="split-photo-caption">
        <span>THE INNOVATION LAB</span>
        <span>PROBLEM INTELLIGENCE &amp; VALIDATION</span>
      </div>
    </div>
    <div class="split-text-pane">
      <div class="reframe-grid">
        <div class="reframe-row"><span>01 / IDENTIFY</span><i>→</i><span>Scan real African unmet needs across sectors and institutions</span></div>
        <div class="reframe-row"><span>02 / VALIDATE</span><i>→</i><span>Verify market depth, customer pain and commercial willingness to pay</span></div>
        <div class="reframe-row"><span>03 / STRUCTURE</span><i>→</i><span>Convert data into challenge briefs with constraints and evaluation criteria</span></div>
        <div class="reframe-row"><span>04 / FEED SYSTEM</span><i>→</i><span>Deploy challenges into Academy cohorts and channel insights back to curriculum</span></div>
      </div>
      <div style="margin-top:36px">
        <a class="solid-button" href="./innovation-lab/">Enter the Innovation Lab <span>↗</span></a>
      </div>
    </div>
  </div>
</section>

<!-- 07: OWNERSHIP / COMPOUNDING (IMPACT OVERVIEW) -->
<section class="act act-dark" id="impact-overview">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>07 / ECONOMIC COMPOUNDING</span><span>IMPACT FLYWHEEL</span></div>
      <h2 style="margin-top:34px">A self-sustaining economic <span class="serif">compounding model.</span></h2>
    </div>
    <p>System targets and ambitions — not current figures. The intended outcome chain is founders created → teams formed → companies created → capital and revenue generated → ownership retained → reinvestment recycled.</p>
  </div>

  <div class="flywheel-v2">
    <div class="wheel-system">
      <div class="wheel">
        <div class="wheel-core">2060</div>
        <div class="wheel-node" style="top:2%;left:50%">FOUNDERS</div>
        <div class="wheel-node" style="top:25%;right:2%">COMPANIES</div>
        <div class="wheel-node" style="bottom:25%;right:2%">OWNERSHIP</div>
        <div class="wheel-node" style="bottom:2%;left:50%">REINVESTMENT</div>
        <div class="wheel-node" style="bottom:25%;left:2%">CAPITAL</div>
        <div class="wheel-node" style="top:25%;left:2%">EXPANSION</div>
      </div>
      <div class="flywheel-legend">
        <span>THE COMPOUNDING LOOP</span>
        <span>OWNERSHIP IS FUEL FOR THE NEXT CYCLE</span>
      </div>
    </div>
    <div>
      <div class="scorecard-v2">
        <div class="score-row"><b>01</b><strong>Founders created</strong><span>Capability becomes ownership potential across strategic industries.</span></div>
        <div class="score-row"><b>02</b><strong>Teams formed</strong><span>Complementary capabilities converge around verified problems.</span></div>
        <div class="score-row"><b>03</b><strong>Companies created</strong><span>Solutions structured into equity-holding enterprise organisations.</span></div>
        <div class="score-row"><b>04</b><strong>Reinvestment</strong><span>20% system dividends recycle into future founder generations.</span></div>
      </div>
      <div style="margin-top:36px">
        <a class="solid-button" href="./impact/">Explore the Impact Model <span>↗</span></a>
      </div>
    </div>
  </div>
</section>

<!-- 08: 2060 MONUMENTAL AMBITION -->
<section class="hero-v2 act-monument" id="horizon" style="min-height:85vh;border-top:1px solid var(--navy-border)">
  <div class="hero-backdrop">
    <img class="hero-v2-image" src="./images/city-wide-2.webp" alt="African citywide infrastructure and industrial landscape at twilight" width="1376" height="784" loading="lazy" decoding="async">
  </div>
  <div class="hero-overlay" aria-hidden="true"></div>
  <div class="hero-grid-lines" aria-hidden="true"></div>
  <div class="hero-v2-main-grid">
    <div class="hero-v2-copy">
      <div class="eyebrow-row"><span>08 / THE CONTINENTAL HORIZON</span><span>AFRICA 2060</span></div>
      <h2 class="display" style="font-size:clamp(44px,6vw,92px)">10,000,000+ Founders. <span class="serif">By 2060.</span></h2>
      <div class="hero-v2-sub">
        <p>A 34-year institutional project across 54 African economies. Economic sovereignty is not proclaimed. It is built company by company, founder by founder, balance sheet by balance sheet.</p>
      </div>
      <div class="hero-v2-actions" style="margin-top:36px">
        <a class="solid-button" href="./system/">Explore Operating System <span>↗</span></a>
        <a class="line-link" href="./insights/">Read Foresight &amp; Insights <span>↗</span></a>
      </div>
    </div>
    <div class="hero-v2-number" aria-hidden="true">10M+<span>FOUNDERS BY 2060</span></div>
  </div>
  <div class="hero-meta-strip">
    <span>OPERATING HORIZON: 2026—2060</span>
    <span>54 AFRICAN ECONOMIES</span>
    <span>NORTH STAR: 10,000,000 FOUNDERS</span>
    <span>STATUS: ACTIVE ARCHITECTURE</span>
  </div>
</section>

<!-- 09: FINAL INSTITUTIONAL NAVIGATION / BUILD WITH AFRICA 2060 -->
<section class="act act-cream" id="participate">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>09 / PARTICIPATE</span><span>BUILD WITH AFRICA 2060</span></div>
      <h2 style="margin-top:34px">Step into the <span class="serif">institution.</span></h2>
    </div>
    <p>Whether you are an aspiring founder ready to build, an institutional partner deploying capital and procurement, or a researcher aligning on problem discovery, Africa 2060 provides structured pathways to participate.</p>
  </div>

  <div class="academy-tiers-grid" style="margin-top:40px">
    <div class="academy-tier-card" style="background:#fff;border:1px solid var(--darkline)">
      <span class="academy-tier-num">FOR FOUNDERS</span>
      <h3 style="color:var(--ink)">Become a Builder</h3>
      <p style="color:var(--ink-soft)">Enter one of the three capability tracks, master applied AI tools, solve real African problems, and form an equity-holding operating company.</p>
      <div style="margin-top:24px"><a class="solid-button" href="./founders/">Explore Founder Tracks <span>↗</span></a></div>
    </div>

    <div class="academy-tier-card" style="background:#fff;border:1px solid var(--darkline)">
      <span class="academy-tier-num">FOR INSTITUTIONS</span>
      <h3 style="color:var(--ink)">Partner with Us</h3>
      <p style="color:var(--ink-soft)">Back the next generation of African builders through capital, procurement markets, technical expertise, and pan-African infrastructure.</p>
      <div style="margin-top:24px"><a class="solid-button" href="./partners/">Institutional Gateway <span>↗</span></a></div>
    </div>

    <div class="academy-tier-card" style="background:#fff;border:1px solid var(--darkline)">
      <span class="academy-tier-num">DIRECT CONTACT</span>
      <h3 style="color:var(--ink)">Secretariat Desk</h3>
      <p style="color:var(--ink-soft)">Connect with the Africa 2060 Secretariat for general inquiries, media communications, governance alignment, and academic partnerships.</p>
      <div style="margin-top:24px"><a class="solid-button" href="./contact/">Contact Secretariat <span>↗</span></a></div>
    </div>
  </div>
</section>

</div>
</main>

<footer class="footer">
  <div class="footer-top">
    <div>
      <div class="wordmark"><img src="./images/mark.webp" alt="" width="34" height="34" decoding="async"><span>AFRICA</span><b>2060</b></div>
      <p style="margin-top:14px;max-width:320px;font-size:13.5px;color:#8d9da8;line-height:1.6">The founder creation and company formation system designed to create 10,000,000 founders across Africa by 2060.</p>
    </div>
    <div class="footer-links">
      <a href="./vision/">Vision</a>
      <a href="./system/">System</a>
      <a href="./founders/">Founders</a>
      <a href="./sectors/">Sectors</a>
      <a href="./innovation-lab/">Innovation Lab</a>
      <a href="./impact/">Impact</a>
      <a href="./insights/">Insights</a>
      <a href="./partners/">Partners</a>
      <a href="./contact/">Contact</a>
    </div>
  </div>
  <div class="footer-meta">
    <span>© 2026—2060 AFRICA 2060 INITIATIVE</span>
    <span>ZEENACLE NETWORK GROUP</span>
    <span>WORKING FRAMEWORK · SOURCE GROUNDED</span>
  </div>
</footer>

<script>
"use strict";

function setupMenu() {
  const menuToggle = document.querySelector('#menuToggle');
  const mobileMenu = document.querySelector('#mobileMenu');
  if (!menuToggle || !mobileMenu) return;
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    mobileMenu.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });
}

try {
  setupMenu();
} catch (err) {
  console.error('Home init error:', err);
}
</script>
</body>
</html>
`;

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully wrote streamlined overview index.html! Size:', html.length);

