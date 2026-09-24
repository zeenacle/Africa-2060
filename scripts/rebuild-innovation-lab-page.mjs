import fs from 'node:fs';

const css = fs.readFileSync('styles.css', 'utf8');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="The Africa 2060 Innovation Lab: Continental problem intelligence, challenge structuring, and the problem-to-company pipeline.">
<meta name="robots" content="index,follow">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta name="color-scheme" content="dark light">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Africa 2060">
<meta property="og:title" content="Innovation Lab &amp; Problem Intelligence — Africa 2060">
<meta property="og:description" content="Turn real African problems into structured founder challenges. Problem intelligence and venture opportunity discovery.">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Innovation Lab — Africa 2060">
<meta name="twitter:description" content="Where real African problems become structured company opportunities.">
<meta name="theme-color" content="#040d16">
<title>Innovation Lab &amp; Intelligence — Africa 2060</title>
<link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJBZnJpY2EgMjA2MCI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iIzA3MTMxZiIvPgogIDxwYXRoIGQ9Ik04IDEyaDQ4djRIOHoiIGZpbGw9IiNjNTlhNDgiLz4KICA8dGV4dCB4PSIzMiIgeT0iNDIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMSIgZm9udC13ZWlnaHQ9IjgwMCIgZmlsbD0iI2VlZThkYyI+MjA2MDwvdGV4dD4KPC9zdmc+Cg==" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
<style id="a2060-inline-css">
${css}
</style>
<link rel="preload" as="image" href="../images/ai-team.webp">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Innovation Lab & Problem Intelligence — Africa 2060","description":"The Africa 2060 Innovation Lab: Continental problem intelligence, challenge structuring, and the problem-to-company pipeline."}</script>
</head>
<body data-route="innovation-lab">
<a class="skip" href="#main">Skip to content</a>
<header class="nav" id="top">
  <a class="wordmark" href="../" aria-label="Africa 2060 home"><img src="../images/mark.webp" alt="" width="34" height="34" decoding="async"><span>AFRICA</span><b>2060</b></a>
  <nav aria-label="Primary navigation">
    <a class="nav-link" href="../vision/">Vision</a>
    <a class="nav-link" href="../system/">System</a>
    <a class="nav-link" href="../founders/">Founders</a>
    <a class="nav-link" href="../sectors/">Sectors</a>
    <a class="nav-link active" href="./" aria-current="page">Innovation Lab</a>
    <a class="nav-link" href="../impact/">Impact</a>
    <a class="nav-link" href="../insights/">Insights</a>
  </nav>
  <button class="menu-toggle" id="menuToggle" type="button" aria-expanded="false" aria-controls="mobileMenu" aria-label="Open navigation menu"><span></span><span></span><span></span></button>
  <div class="nav-actions"><a class="nav-secondary" href="../contact/">Contact</a><a class="nav-cta" href="../partners/">Partner <span>↗</span></a></div>
  <div class="mobile-menu" id="mobileMenu" hidden>
    <a href="../vision/">Vision</a>
    <a href="../system/">System</a>
    <a href="../founders/">Founders</a>
    <a href="../sectors/">Sectors</a>
    <a class="active" href="./">Innovation Lab</a>
    <a href="../impact/">Impact</a>
    <a href="../insights/">Insights</a>
    <a class="mobile-partner" href="../partners/">Partner <span>↗</span></a>
    <a href="../contact/">Contact</a>
  </div>
</header>

<main id="main">

<!-- HERO: MONUMENTAL INTELLIGENCE CENTRE -->
<section class="hero-v2" aria-labelledby="lab-hero-title">
  <div class="hero-backdrop">
    <img class="hero-v2-image" src="../images/ai-team.webp" alt="African researchers and engineers collaborating in the Innovation Lab on problem data" width="1200" height="800" fetchpriority="high" decoding="async">
  </div>
  <div class="hero-overlay" aria-hidden="true"></div>
  <div class="hero-grid-lines" aria-hidden="true"></div>
  <div class="hero-v2-main-grid">
    <div class="hero-v2-copy">
      <div class="eyebrow-row"><span>05 / PROBLEM INTELLIGENCE</span><span>INNOVATION CONTROL CENTRE</span></div>
      <h1 id="lab-hero-title" class="display">Turn real African problems into <span class="serif">structured founder challenges.</span></h1>
      <div class="hero-v2-sub">
        <p>The Innovation Lab is the problem-discovery and intelligence layer of Africa 2060. We scan African markets and institutions, validate real problems, and convert them into structured briefs for our founder cohorts.</p>
        <p>We work backwards from market friction, unmet institutional demand, and supply chain bottlenecks rather than speculative startup ideas.</p>
      </div>
      <div class="hero-v2-actions">
        <a class="solid-button" href="#pipeline">Inspect the 6-Stage Pipeline <span>↓</span></a>
        <a class="line-link" href="#corridor">The Problem-to-Company Corridor <span>↓</span></a>
      </div>
    </div>
    <div class="hero-v2-number" aria-hidden="true">RADAR<span>PROBLEM LAB</span></div>
  </div>
  <div class="hero-meta-strip">
    <span>PIPELINE: 6 OPERATING PHASES</span>
    <span>SCOPE: 54 AFRICAN ECONOMIES</span>
    <span>METHODOLOGY: DEMAND-BACKED</span>
    <span>HORIZON: 2026—2060</span>
  </div>
</section>

<!-- SECTION 02: THE 6-STAGE PROBLEM-TO-CHALLENGE PIPELINE -->
<section class="act act-cream" id="pipeline">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>THE INTELLIGENCE ENGINE</span><span>6-STAGE PIPELINE</span></div>
      <h2 style="margin-top:34px">How problems enter and move <span class="serif">through the system.</span></h2>
    </div>
    <p>Every problem entering Africa 2060 undergoes rigorous filtering to ensure founder cohorts invest their agency in building commercially viable, high-impact enterprises.</p>
  </div>

  <div class="stage-ledger-grid" style="margin-top:48px">
    <article class="stage-card-deep" style="background:#fff;border:1px solid var(--darkline);color:var(--ink)">
      <div>
        <div class="stage-card-deep-top"><span style="color:var(--gold)">STAGE 01</span><span style="color:var(--ink-muted)">DISCOVERY</span></div>
        <h3 style="color:var(--ink)">Identify</h3>
        <p style="color:var(--ink-soft)">Continuous scanning of real African unmet needs across agricultural value chains, energy access, logistics bottlenecks, healthcare infrastructure, and urban utilities.</p>
      </div>
      <div class="stage-card-deep-foot" style="border-top-color:var(--darkline);color:var(--ink-muted)"><b style="color:var(--ink)">SOURCE:</b> Field data, partner briefs &amp; supply chain deficits</div>
    </article>

    <article class="stage-card-deep" style="background:#fff;border:1px solid var(--darkline);color:var(--ink)">
      <div>
        <div class="stage-card-deep-top"><span style="color:var(--gold)">STAGE 02</span><span style="color:var(--ink-muted)">RIGOR</span></div>
        <h3 style="color:var(--ink)">Validate</h3>
        <p style="color:var(--ink-soft)">Testing whether a problem is real, specific, and actionable. Verifying market depth, customer willingness to pay, unit cost boundaries, and regulatory viability.</p>
      </div>
      <div class="stage-card-deep-foot" style="border-top-color:var(--darkline);color:var(--ink-muted)"><b style="color:var(--ink)">CRITERIA:</b> Solvable, cash-generating &amp; structurally frictioned</div>
    </article>

    <article class="stage-card-deep" style="background:#fff;border:1px solid var(--darkline);color:var(--ink)">
      <div>
        <div class="stage-card-deep-top"><span style="color:var(--gold)">STAGE 03</span><span style="color:var(--ink-muted)">SYNTHESIS</span></div>
        <h3 style="color:var(--ink)">Structure</h3>
        <p style="color:var(--ink-soft)">Converting validated problems into formal, actionable challenge briefs with context, operational constraints, target metrics, unit economics, and evaluation scorecards.</p>
      </div>
      <div class="stage-card-deep-foot" style="border-top-color:var(--darkline);color:var(--ink-muted)"><b style="color:var(--ink)">ARTIFACT:</b> Validated Challenge Brief Ledger</div>
    </article>

    <article class="stage-card-deep" style="background:#fff;border:1px solid var(--darkline);color:var(--ink)">
      <div>
        <div class="stage-card-deep-top"><span style="color:var(--gold)">STAGE 04</span><span style="color:var(--ink-muted)">DEPLOYMENT</span></div>
        <h3 style="color:var(--ink)">Assign</h3>
        <p style="color:var(--ink-soft)">Deploying structured challenge briefs to the appropriate Academy tier, track vertical, or multidisciplinary co-founding triad during Stage 04 of the operating system.</p>
      </div>
      <div class="stage-card-deep-foot" style="border-top-color:var(--darkline);color:var(--ink-muted)"><b style="color:var(--ink)">RECIPIENT:</b> Academy Fellow Triads (Maker + Eng + Op)</div>
    </article>

    <article class="stage-card-deep" style="background:#fff;border:1px solid var(--darkline);color:var(--ink)">
      <div>
        <div class="stage-card-deep-top"><span style="color:var(--gold)">STAGE 05</span><span style="color:var(--ink-muted)">EVALUATION</span></div>
        <h3 style="color:var(--ink)">Review</h3>
        <p style="color:var(--ink-soft)">Rigorous assessment of working prototypes, field test pilot results, and commercial models alongside corporate partners and industrial operators.</p>
      </div>
      <div class="stage-card-deep-foot" style="border-top-color:var(--darkline);color:var(--ink-muted)"><b style="color:var(--ink)">OUTCOME:</b> Vetted Company Formation Opportunities</div>
    </article>

    <article class="stage-card-deep" style="background:#fff;border:1px solid var(--darkline);color:var(--ink)">
      <div>
        <div class="stage-card-deep-top"><span style="color:var(--gold)">STAGE 06</span><span style="color:var(--ink-muted)">FEEDBACK</span></div>
        <h3 style="color:var(--ink)">Feed the System</h3>
        <p style="color:var(--ink-soft)">Returning operational performance intelligence and market data back to the Academy curriculum and vertical sector branch decisions, ensuring perpetual institutional renewal.</p>
      </div>
      <div class="stage-card-deep-foot" style="border-top-color:var(--darkline);color:var(--ink-muted)"><b style="color:var(--ink)">RENEWAL:</b> Living Curriculum &amp; Sector Upgrades</div>
    </article>
  </div>
</section>

<!-- SECTION 03: THE PROBLEM-TO-COMPANY CORRIDOR -->
<section class="act act-dark" id="corridor">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>END-TO-END CONVERSION</span><span>THE OPPORTUNITY CORRIDOR</span></div>
      <h2 style="margin-top:34px">From African problem to <span class="serif">sovereign enterprise.</span></h2>
    </div>
    <p>The Innovation Lab does not publish whitepapers to gather dust. It is the upstream feeder for the Africa 2060 company formation pipeline.</p>
  </div>

  <div class="hierarchy-strip" style="margin-top:40px">
    <div class="hierarchy-row">
      <span>01 / REAL PROBLEM</span><i>→</i><span>Market friction, post-harvest crop loss, unpaved transit corridors, expensive clinical diagnostics</span>
    </div>
    <div class="hierarchy-row">
      <span>02 / STRUCTURED CHALLENGE</span><i>→</i><span>Formal Innovation Lab brief with technical parameters, customer price ceiling, and delivery window</span>
    </div>
    <div class="hierarchy-row">
      <span>03 / ACADEMY &amp; FOUNDERS</span><i>→</i><span>Deployed to matched triads uniting Vocational makers, Technical engineers, and Operational leaders</span>
    </div>
    <div class="hierarchy-row">
      <span>04 / WORKING SOLUTION</span><i>→</i><span>Functional prototype tested under African field conditions with live customer commitments</span>
    </div>
    <div class="hierarchy-row">
      <span>05 / INCORPORATED COMPANY</span><i>→</i><span>Transition to Stage 06: Form &amp; Legal Formation with 50/20/30 cap table and seed resourcing</span>
    </div>
  </div>
</section>

<!-- SECTION 04: CLOSING TRANSITION -->
<section class="hero-v2 act-monument" id="closing" style="min-height:85vh;border-top:1px solid var(--navy-border)">
  <div class="hero-backdrop">
    <img class="hero-v2-image" src="../images/city-wide-2.webp" alt="African citywide infrastructure at twilight" width="1376" height="784" loading="lazy" decoding="async">
  </div>
  <div class="hero-overlay" aria-hidden="true"></div>
  <div class="hero-grid-lines" aria-hidden="true"></div>
  <div class="hero-v2-main-grid">
    <div class="hero-v2-copy">
      <div class="eyebrow-row"><span>SUBMIT AN INSTITUTIONAL CHALLENGE</span><span>AFRICA 2060</span></div>
      <h2 class="display" style="font-size:clamp(44px,6vw,92px)">Bring your challenge <span class="serif">to our founders.</span></h2>
      <div class="hero-v2-sub">
        <p>Are you an enterprise, municipal agency, or development institution facing a structural supply chain bottleneck? Partner with the Innovation Lab to sponsor challenge briefs for our cohorts.</p>
      </div>
      <div class="hero-v2-actions" style="margin-top:36px">
        <a class="solid-button" href="../partners/">Submit Institutional Challenge <span>↗</span></a>
        <a class="line-link" href="../system/">Inspect the Operating System <span>↗</span></a>
        <a class="solid-button" href="../contact/" style="background:var(--gold);color:var(--navy)">Contact the Lab <span>↗</span></a>
      </div>
    </div>
    <div class="hero-v2-number" aria-hidden="true">2060<span>LAB</span></div>
  </div>
  <div class="hero-meta-strip">
    <span>HORIZON: 2026—2060</span>
    <span>STATUS: OPERATIONAL RADAR</span>
    <span>COHORTS: 54 MARKETS</span>
    <span>ENDOWMENT BACKED</span>
  </div>
</section>

</main>

<footer class="footer">
  <div class="footer-top">
    <div>
      <div class="wordmark"><img src="../images/mark.webp" alt="" width="34" height="34" decoding="async"><span>AFRICA</span><b>2060</b></div>
      <p style="margin-top:14px;max-width:320px;font-size:13.5px;color:#8d9da8;line-height:1.6">The founder creation and company formation system designed to create 10,000,000 founders across Africa by 2060.</p>
    </div>
    <div class="footer-links">
      <a href="../">Home</a>
      <a href="../vision/">Vision</a>
      <a href="../system/">System</a>
      <a href="../founders/">Founders</a>
      <a href="../sectors/">Sectors</a>
      <a href="./">Innovation Lab</a>
      <a href="../impact/">Impact</a>
      <a href="../insights/">Insights</a>
      <a href="../partners/">Partners</a>
      <a href="../contact/">Contact</a>
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
  console.error('Innovation Lab page init error:', err);
}
</script>
</body>
</html>
`;

fs.writeFileSync('innovation-lab/index.html', html, 'utf8');
console.log('Successfully wrote re-architected innovation-lab/index.html! Length:', html.length);

