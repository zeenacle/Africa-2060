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
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="nav" id="top">
  <a class="wordmark" href="./index.html" aria-label="Africa 2060 home" data-nav-link><img src="./images/mark.webp" alt="" width="34" height="34" decoding="async"><span>AFRICA</span><b>2060</b></a>
  <nav aria-label="Primary navigation">
    <a class="nav-link" href="#vision">Vision</a><a class="nav-link" href="#system">System</a><a class="nav-link" href="#founders">Founders</a><a class="nav-link" href="#sectors">Sectors</a><a class="nav-link" href="#innovation-lab">Innovation Lab</a><a class="nav-link" href="#impact">Impact</a><a class="nav-link" href="#insights">Insights</a>
  </nav>
  <button class="menu-toggle" id="menuToggle" type="button" aria-expanded="false" aria-controls="mobileMenu" aria-label="Open navigation menu"><span></span><span></span><span></span></button>
  <div class="nav-actions"><a class="nav-secondary" href="#contact">Contact</a><a class="nav-cta" href="#partners">Partner <span>↗</span></a></div>
  <div class="mobile-menu" id="mobileMenu" hidden>
    <a href="#vision">Vision</a><a href="#system">System</a><a href="#founders">Founders</a><a href="#sectors">Sectors</a><a href="#innovation-lab">Innovation Lab</a><a href="#impact">Impact</a><a href="#insights">Insights</a><a class="mobile-partner" href="#partners">Partner <span>↗</span></a><a href="#contact">Contact</a>
  </div>
</header>

<main id="main">
<div class="home-v2" id="top">

<!-- ACT 01: MONUMENTAL HERO -->
<section class="hero-v2" aria-labelledby="hero-v2-title">
  <div class="hero-backdrop">
    <img class="hero-v2-image" src="./images/lagos-dawn.webp" alt="Lagos urban skyline and port infrastructure at dawn" width="1376" height="784" fetchpriority="high" decoding="async">
  </div>
  <div class="hero-overlay" aria-hidden="true"></div>
  <div class="hero-grid-lines" aria-hidden="true"></div>
  <div class="hero-v2-main-grid">
    <div class="hero-v2-copy">
      <div class="eyebrow-row"><span>01 / THE AMBITION</span><span>AFRICA 2060 · CONTINENTAL HORIZON</span></div>
      <h1 id="hero-v2-title" class="display">Build the <span>companies that</span><span class="serif">build Africa.</span></h1>
      <div class="hero-v2-sub">
        <p>10,000,000+ founders by 2060. A long-horizon system for turning capability into companies, ownership and economic opportunity.</p>
        <p>We are not building another training programme. We are building the machinery through which founders meet real problems, form companies and create lasting ownership.</p>
      </div>
      <div class="hero-v2-actions">
        <a class="solid-button" href="./system/">Explore the Operating Machine <span>↗</span></a>
        <a class="line-link" href="#partners">Partner with Africa 2060 <span>↗</span></a>
      </div>
    </div>
    <div class="hero-v2-number" aria-hidden="true">2060<span>CONTINENTAL HORIZON</span></div>
  </div>
  <div class="hero-meta-strip">
    <span>LAT: 6.5244° N, 3.3792° E</span>
    <span>OPERATING HORIZON: 2026—2060</span>
    <span>NORTH STAR: 10M+ FOUNDERS</span>
  </div>
</section>

<!-- ACT 02: THE STRATEGIC REFRAME (VISION) -->
<section class="act act-cream" id="vision">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>02 / THE STRATEGIC REFRAME</span><span>MANIFESTO</span></div>
      <h2 style="margin-top:34px">Move from workforce development to <span class="serif">company creation.</span></h2>
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
        <div class="reframe-row"><span>Training individuals</span><i>→</i><span>Assembling companies</span></div>
        <div class="reframe-row"><span>Employability</span><i>→</i><span>Ownership</span></div>
        <div class="reframe-row"><span>Isolated skills</span><i>→</i><span>Complementary founder teams</span></div>
        <div class="reframe-row"><span>Job seekers</span><i>→</i><span>Company builders</span></div>
      </div>
      <div style="margin-top:34px">
        <div class="institution-line"><b>CAPABILITY</b><strong>Skills become founder capability only when applied to real-time problems.</strong><p>Vocational, technical, and operational pathways developed through real market application.</p></div>
        <div class="institution-line"><b>OWNERSHIP</b><strong>Capability becomes company formation through equity ownership.</strong><p>Founders hold real equity, building lasting intergenerational wealth and sovereign capability.</p></div>
        <div class="institution-line"><b>HORIZON</b><strong>2060 is the operating horizon for continental transformation.</strong><p>A multi-decade commitment to establish institutions that learn, renew, and compound.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- ACT 03: THE OPERATING MACHINE (SYSTEM) -->
<section class="act act-dark" id="system">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>03 / THE MACHINE</span><span>OPERATING ARCHITECTURE</span></div>
      <h2 style="margin-top:34px">A production system, not a sequence of <span class="serif">courses.</span></h2>
    </div>
    <p>The operating logic starts with a real problem and moves through capability, application, team formation, company formation, capital, scale and reinvestment. Each stage produces the condition for the next.</p>
  </div>
  
  <div class="machine-control-deck">
    <div class="machine-deck-header">
      <b>THE 9-STAGE OPERATING MACHINE</b>
      <span>INTERACTIVE SYSTEM SEQUENCER · CLICK ANY STAGE TO INSPECT</span>
    </div>
    <div class="system-v2" role="tablist" aria-label="Africa 2060 operating logic">
      <div class="is-active" role="tab" tabindex="0" aria-selected="true" data-machine="0"><b>01 · PROBLEM</b><span>Real African problem</span></div>
      <div role="tab" tabindex="-1" aria-selected="false" data-machine="1"><b>02 · TRAIN</b><span>Build capability</span></div>
      <div role="tab" tabindex="-1" aria-selected="false" data-machine="2"><b>03 · APPLY</b><span>Work on reality</span></div>
      <div role="tab" tabindex="-1" aria-selected="false" data-machine="3"><b>04 · MATCH</b><span>Combine founders</span></div>
      <div role="tab" tabindex="-1" aria-selected="false" data-machine="4"><b>05 · FORM</b><span>Create organisation</span></div>
      <div role="tab" tabindex="-1" aria-selected="false" data-machine="5"><b>06 · FUND</b><span>Mobilise capital</span></div>
      <div role="tab" tabindex="-1" aria-selected="false" data-machine="6"><b>07 · SCALE</b><span>Build company</span></div>
      <div role="tab" tabindex="-1" aria-selected="false" data-machine="7"><b>08 · REINVEST</b><span>Recycle value</span></div>
      <div class="more" role="tab" tabindex="-1" aria-selected="false" data-machine="8"><b>09 · MORE FOUNDERS</b><span>Flywheel continues</span></div>
    </div>
    <div class="machine-detail" id="machineDetail" role="tabpanel">
      <span class="machine-index">01 / INPUT</span>
      <div>
        <h3>Start with reality, not a syllabus.</h3>
        <p>Africa 2060 begins with a real African problem identified and structured through the Innovation Lab.</p>
      </div>
      <span class="machine-output">NEXT CONDITION<strong>01 → 02 / TRAIN</strong></span>
    </div>
    <div class="machine-flow-rail">
      <span>OPERATING STATUS: <strong>ACTIVE SYSTEM SEQUENCER</strong></span>
      <a class="line-link" href="./system/">Inspect Complete 13-Layer System Blueprint <span>↗</span></a>
    </div>
  </div>
</section>

<!-- ACT 04: THE INSTITUTION (ARCHITECTURE & FLOW) -->
<section class="act act-cream" id="institution">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>04 / THE INSTITUTION</span><span>ARCHITECTURE &amp; GOVERNANCE</span></div>
      <h2 style="margin-top:34px">One mission.<br><span class="serif">Distinct engines.</span></h2>
    </div>
    <p>The institution is designed as a connected system: stewardship above, founder development and problem intelligence in the middle, and company formation at the point of output.</p>
  </div>
  <div class="split-editorial">
    <div class="split-photo-pane">
      <img src="./images/partners-table.webp" alt="Africa 2060 Senate and Institutional Governance convening" width="1200" height="800" loading="lazy" decoding="async">
      <div class="split-photo-caption">
        <span>INSTITUTIONAL STEWARDSHIP</span>
        <span>AFRICA 2060 SENATE &amp; ZEENACLE</span>
      </div>
    </div>
    <div class="institution-v2-main">
      <div class="architecture-flow" aria-label="Institutional operating architecture">
        <div class="architecture-node node-parent"><span>01 / PARENT</span><strong>Zeenacle Network Group</strong><em>Holding company and institutional sponsor</em></div>
        <div class="architecture-connector" aria-hidden="true">↓</div>
        <div class="architecture-node node-mission"><span>02 / MISSION</span><strong>Africa 2060</strong><em>Founder-creation and company formation system</em></div>
        <div class="architecture-connector" aria-hidden="true">↓</div>
        <div class="architecture-branches">
          <div class="architecture-node"><span>03 / GOVERNANCE</span><strong>Africa 2060 Senate</strong><em>Strategic oversight</em></div>
          <div class="architecture-node"><span>04 / DEVELOPMENT</span><strong>Zeenacle Academy</strong><em>Founder development + application</em></div>
          <div class="architecture-node"><span>05 / INTELLIGENCE</span><strong>Innovation Lab</strong><em>Problems → structured challenges</em></div>
        </div>
        <div class="architecture-connector" aria-hidden="true">↓</div>
        <div class="architecture-node node-output"><span>06 / OUTPUT</span><strong>Founder Teams &amp; Companies</strong><em>Formation · scale · economic ownership</em></div>
      </div>
    </div>
  </div>
</section>

<!-- ACT 05: FOUNDERS (THREE CAPABILITY PATHWAYS) -->
<section class="act act-dark" id="founders">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>05 / THE FOUNDER</span><span>THREE CAPABILITY PATHWAYS</span></div>
      <h2 style="margin-top:34px">Three paths.<br><span class="serif">One convergence.</span></h2>
    </div>
    <p>Vocational, Technical and Operational are not isolated schools. They are complementary founder capabilities that converge around real opportunities and real-time problems.</p>
  </div>
  <div class="tracks-v2">
    <!-- VOCATIONAL -->
    <article class="track-v2 track-vocational">
      <div class="track-photo-header">
        <img src="./images/builders.webp" alt="Vocational builders constructing African infrastructure" width="600" height="400" loading="lazy" decoding="async">
      </div>
      <div class="track-body">
        <span class="track-no">VOCATIONAL / 01</span>
        <div class="track-mark">01</div>
        <div>
          <h3>Make &amp;<br><span class="serif">Build.</span></h3>
          <p>Physical capability. The people who make, construct, fabricate, grow and produce tangible products and infrastructure.</p>
        </div>
        <div class="track-foot">
          <b>MAKE</b>
          <span>Construction · Manufacturing · Agriculture · Energy · Mobility</span>
        </div>
      </div>
    </article>

    <!-- TECHNICAL -->
    <article class="track-v2 track-technical">
      <div class="track-photo-header">
        <img src="./images/engineer.webp" alt="African engineer developing industrial software and technology" width="600" height="400" loading="lazy" decoding="async">
      </div>
      <div class="track-body">
        <span class="track-no">TECHNICAL / 02</span>
        <div class="track-mark">02</div>
        <div>
          <h3>Engineer &amp;<br><span class="serif">Innovate.</span></h3>
          <p>Technical capability. The people who engineer systems, technology, infrastructure, intellectual property and new solutions.</p>
        </div>
        <div class="track-foot">
          <b>ENGINEER</b>
          <span>Software · Fintech · Health · Industrial · Climate · Telecoms</span>
        </div>
      </div>
    </article>

    <!-- OPERATIONAL -->
    <article class="track-v2 track-operational">
      <div class="track-photo-header">
        <img src="./images/operator.webp" alt="Operational leader managing logistics and market scale" width="600" height="400" loading="lazy" decoding="async">
      </div>
      <div class="track-body">
        <span class="track-no">OPERATIONAL / 03</span>
        <div class="track-mark">03</div>
        <div>
          <h3>Organise &amp;<br><span class="serif">Scale.</span></h3>
          <p>Execution capability. The people who organise markets, operations, distribution, supply chains, services and sustainable growth.</p>
        </div>
        <div class="track-foot">
          <b>ORGANISE</b>
          <span>Logistics · Hospitality · Commerce · Education · Media · Property</span>
        </div>
      </div>
    </article>
  </div>

  <div class="tracks-convergence">
    <div class="convergence-badge">CONVERGENCE PRINCIPLE</div>
    <div class="convergence-formula">
      <span>Make &amp; Build</span>
      <i>+</i>
      <span>Engineer &amp; Innovate</span>
      <i>+</i>
      <span>Organise &amp; Scale</span>
      <i>=</i>
      <b>Company Formation</b>
    </div>
  </div>
</section>

<!-- ACT 06: THE ECONOMY & SECTOR UNIVERSE (SECTORS) -->
<section class="act act-cream" id="sectors">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>06 / THE ECONOMY</span><span>AFRICAN INDUSTRIAL ATLAS</span></div>
      <h2 style="margin-top:34px">Track → sector → <span class="serif">company.</span></h2>
    </div>
    <p>The sector architecture is a strategic universe, not a promise that every sector launches simultaneously. Stable tracks provide the frame; evidence determines which sectors activate, expand, merge or retire.</p>
  </div>
  <div class="economy-v2">
    <div class="hierarchy">
      <div class="hierarchy-row"><b>01 / TRACK</b><strong>Stable capability pathway.</strong></div>
      <div class="hierarchy-row"><b>02 / SECTOR</b><strong>Strategic economic field.</strong></div>
      <div class="hierarchy-row"><b>03 / SUB-SECTOR</b><strong>Specific market territory.</strong></div>
      <div class="hierarchy-row"><b>04 / OPPORTUNITY</b><strong>Company that can be built.</strong></div>
      <div class="opportunity-note">
        <span>THE QUESTION</span>
        <strong>What company can be built here?</strong>
        <p>A sector becomes useful to the system when it can be translated into a specific problem, founder combination and company opportunity.</p>
      </div>
    </div>
    <div class="opportunity-map" aria-label="Strategic sector opportunity map">
      <div class="map-header"><span>SECTOR UNIVERSE</span><span>STRATEGIC INDUSTRIAL FIELDS</span></div>
      <div class="sector-cloud">
        <span>Agriculture</span><span>Energy</span><span>Construction</span><span>Software</span>
        <span>Fintech</span><span>Health</span><span>Logistics</span><span>Hospitality</span>
        <span>Manufacturing</span><span>Minerals</span><span>Climate</span><span>Commerce</span>
        <span>Telecoms</span><span>Education</span><span>Real Estate</span><span>Media</span>
      </div>
      <div class="map-footer">
        <b>TRACK → SECTOR → SUB-SECTOR → COMPANY OPPORTUNITY</b>
        <span>Dynamic sectors · Stable architecture</span>
      </div>
    </div>
  </div>
</section>

<!-- ACT 07: INNOVATION LAB (PROBLEM INTELLIGENCE) -->
<section class="act act-dark" id="innovation-lab">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>07 / INNOVATION LAB</span><span>PROBLEM INTELLIGENCE COMMAND DECK</span></div>
      <h2 style="margin-top:34px">Find the problem.<br><span class="serif">Structure the challenge.</span></h2>
    </div>
    <p>The Innovation Lab identifies, validates and converts real-time African problems into structured challenges for Academy participants and potential venture opportunities.</p>
  </div>
  <div class="split-editorial" style="margin-top:0">
    <div class="split-photo-pane">
      <img src="./images/ai-team.webp" alt="Innovation Lab research and intelligence team evaluating market problems" width="1200" height="800" loading="lazy" decoding="async">
      <div class="split-photo-caption">
        <span>PROBLEM INTELLIGENCE</span>
        <span>CONTINENTAL SCANNING &amp; VALIDATION</span>
      </div>
    </div>
    <div class="lab-v2" style="background:transparent;border:0;gap:14px">
      <div class="lab-stage" style="border:1px solid var(--lightline)">
        <span>01 / INTELLIGENCE</span>
        <b>IDENTIFY → VALIDATE → STRUCTURE</b>
        <p>Build an evidence-backed understanding of an African problem and turn it into a structured challenge that can be worked on.</p>
      </div>
      <div class="lab-stage" style="border:1px solid var(--lightline)">
        <span>02 / CONVERGENCE</span>
        <b>ASSIGN → REVIEW → FORM</b>
        <p>Connect the challenge to complementary founder capabilities, assess the solutions and identify viable company opportunities.</p>
      </div>
      <div class="lab-bridge" style="border:1px solid var(--lightline)">
        <i>PROBLEM</i><strong>→</strong><i>CHALLENGE</i><strong>→</strong><i>FOUNDERS</i><strong>→</strong><i>COMPANY</i>
      </div>
    </div>
  </div>
</section>

<!-- ACT 08: THE IMPACT & FLYWHEEL (ECONOMIC COMPOUNDING) -->
<section class="act act-rust" id="impact">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>08 / THE FLYWHEEL</span><span>ECONOMIC COMPOUNDING</span></div>
      <h2 style="margin-top:34px">Create founders.<br><span class="serif">Create companies.</span></h2>
    </div>
    <p>System targets and ambitions — not current figures. The intended outcome chain is founders created → teams formed → companies created → capital and revenue generated → ownership retained → reinvestment recycled.</p>
  </div>
  <div class="flywheel-v2">
    <div class="wheel-system">
      <div class="wheel">
        <span class="wheel-label wl1">FOUNDERS</span>
        <span class="wheel-label wl2">COMPANIES</span>
        <span class="wheel-label wl3">REINVEST</span>
        <span class="wheel-label wl4">OWNERSHIP</span>
        <div class="wheel-core">
          <b>2060</b>
          <span>MORE FOUNDERS</span>
        </div>
      </div>
      <div class="wheel-caption">
        <span>THE COMPOUNDING LOOP</span>
        <strong>Ownership is not the endpoint.<br>It is fuel for the next cycle.</strong>
      </div>
    </div>
    <div class="scorecard-v2">
      <div class="score-row"><b>01</b><strong>Founders created</strong><span>Capability becomes ownership potential across strategic industries.</span></div>
      <div class="score-row"><b>02</b><strong>Teams formed</strong><span>Complementary capabilities converge around verified problems.</span></div>
      <div class="score-row"><b>03</b><strong>Companies created</strong><span>Solutions structured into equity-holding enterprise organisations.</span></div>
      <div class="score-row"><b>04</b><strong>Economic value</strong><span>Capital, markets and revenue create the basis for long-term compounding.</span></div>
      <div class="score-row"><b>05</b><strong>Reinvestment</strong><span>Institutional value is intended to support subsequent founder generations.</span></div>
    </div>
  </div>
</section>

<!-- ACT 09: CONTINENTAL HORIZON CLOSING MONUMENT -->
<section class="act act-dark close-v2" id="insights">
  <div class="close-backdrop">
    <img src="./images/city-wide-2.webp" alt="African citywide infrastructure and industrial landscape at twilight" width="1376" height="784" loading="lazy" decoding="async">
  </div>
  <div class="close-overlay" aria-hidden="true"></div>
  <div>
    <div class="eyebrow-row"><span>09 / THE HORIZON</span><span>CONTINUOUS RENEWAL</span></div>
    <h2>Stable architecture.<br><span class="serif">Dynamic sectors.</span><br>Continuous renewal.</h2>
    <div class="close-foot">
      <strong>10M+</strong>
      <span>FOUNDERS BY 2060<br>AFRICA 2060 DIGITAL HEADQUARTERS</span>
    </div>
  </div>
</section>

<!-- ACT 10: INSTITUTIONAL GATEWAY (PARTNERS) -->
<section class="act act-cream" id="partners">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>10 / INSTITUTIONAL GATEWAY</span><span>PARTNERSHIP INTAKE</span></div>
      <h2 style="margin-top:34px">Help build the infrastructure for <span class="serif">ownership.</span></h2>
    </div>
    <p>Africa 2060 brings together Investors, Corporate Partners, Sponsors &amp; Foundations and Institutions around founder creation and company building across 54 African economies.</p>
  </div>
  <div class="giving-grid">
    <div>
      <h3 style="font-family:var(--display);font-size:clamp(22px,2.2vw,32px);margin-bottom:12px;color:var(--ink)">Approved Contribution Pathways</h3>
      <p style="font-size:14.5px;color:var(--ink-soft);line-height:1.6">Institutional partners participate directly in enterprise formation, capital allocation, and supply chain readiness.</p>
      <div class="giving-list">
        <div class="giving-list-item">
          <b>CAPITAL</b>
          <span>Pre-seed milestone funding, equipment leasing facilities, working capital, and coinvestment lines.</span>
        </div>
        <div class="giving-list-item">
          <b>MARKETS</b>
          <span>Enterprise procurement contracts, commercial off-take agreements, and B2B vendor distribution.</span>
        </div>
        <div class="giving-list-item">
          <b>EXPERTISE</b>
          <span>Technical engineering mentorship, industrial standard compliance, and executive board governance.</span>
        </div>
        <div class="giving-list-item">
          <b>INFRASTRUCTURE</b>
          <span>Fabrication workshops, testing laboratories, clean energy grids, and regional freight corridors.</span>
        </div>
        <div class="giving-list-item">
          <b>CREDIBILITY / NETWORK</b>
          <span>State partnerships, AfCFTA trade facilitation, regulatory clearance, and continental networks.</span>
        </div>
        <div class="giving-list-item">
          <b>KNOWLEDGE</b>
          <span>Live market challenge briefs, sector opportunity maps, and industrial research datasets.</span>
        </div>
      </div>
      <div style="margin-top:28px">
        <a class="line-link" href="./partners/">Open Dedicated Partner Portal <span>↗</span></a>
      </div>
    </div>
    <div>
      <form class="institution-form" data-api="/api/partner-enquiries">
        <label>Name <sup>*</sup><input name="name" autocomplete="name" required></label>
        <label>Organisation <sup>*</sup><input name="organisation" autocomplete="organization" required></label>
        <label>Email <sup>*</sup><input type="email" name="email" autocomplete="email" required></label>
        <label>Country<input name="country" autocomplete="country-name"></label>
        <label>Partner Type <sup>*</sup>
          <select name="partner_type" required>
            <option value="">Select Partner Classification</option>
            <option>Investors</option>
            <option>Corporate Partners</option>
            <option>Sponsors &amp; Foundations</option>
            <option>Institutions</option>
          </select>
        </label>
        <label>Area of Interest<input name="interest" placeholder="e.g. Agritech, Manufacturing, Energy, Logistics"></label>
        <fieldset>
          <legend>Approved Contribution Areas</legend>
          <label class="check"><input type="checkbox" name="contribution" value="Capital"> Capital</label>
          <label class="check"><input type="checkbox" name="contribution" value="Markets"> Markets</label>
          <label class="check"><input type="checkbox" name="contribution" value="Expertise"> Expertise</label>
          <label class="check"><input type="checkbox" name="contribution" value="Infrastructure"> Infrastructure</label>
          <label class="check"><input type="checkbox" name="contribution" value="Credibility / Network"> Credibility / Network</label>
          <label class="check"><input type="checkbox" name="contribution" value="Knowledge"> Knowledge</label>
        </fieldset>
        <label>Message <sup>*</sup><textarea name="message" rows="5" required placeholder="Describe your institutional capacity, mandate, and proposed collaboration area."></textarea></label>
        <input type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot">
        <button class="solid-button" type="submit">Submit Partnership Enquiry <span>↗</span></button>
      </form>
    </div>
  </div>
</section>

<!-- ACT 11: INSTITUTIONAL SECRETARIAT (CONTACT) -->
<section class="act act-dark" id="contact">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>11 / INSTITUTIONAL SECRETARIAT</span><span>COMMUNICATIONS</span></div>
      <h2 style="margin-top:34px">Start a direct conversation with <span class="serif">Africa 2060.</span></h2>
    </div>
    <p>For general institutional inquiries, secretariat communications, and academic collaborations. Investment and partnership pathways have dedicated channels above.</p>
  </div>
  <div class="contact-grid">
    <div>
      <h3 style="font-family:var(--display);font-size:clamp(22px,2.2vw,32px);margin-bottom:12px;color:#fff">Institutional Secretariat</h3>
      <p style="font-size:14.5px;color:#aebbc1;line-height:1.6">The Africa 2060 Secretariat coordinates continental ecosystem relationships, academic partnerships, and operational inquiries.</p>
      <div class="giving-list" style="margin-top:32px">
        <div class="giving-list-item" style="border-top-color:var(--navy-border)">
          <b style="color:var(--gold)">COORDINATES</b>
          <span style="color:#aebbc1">LAT: 6.5244° N, 3.3792° E · Lagos / Continental Secretariat</span>
        </div>
        <div class="giving-list-item" style="border-top-color:var(--navy-border)">
          <b style="color:var(--gold)">PARENT HOLDING</b>
          <span style="color:#aebbc1">Zeenacle Network Group · Continental Enterprise Formation</span>
        </div>
        <div class="giving-list-item" style="border-top-color:var(--navy-border)">
          <b style="color:var(--gold)">OPERATING MANDATE</b>
          <span style="color:#aebbc1">10 Million Founders · 54 African Economies · 2026—2060</span>
        </div>
        <div class="giving-list-item" style="border-top-color:var(--navy-border)">
          <b style="color:var(--gold)">AUDIT PROTOCOL</b>
          <span style="color:#aebbc1">All institutional communications are logged to the cryptographic audit trail.</span>
        </div>
      </div>
      <div style="margin-top:28px">
        <a class="line-link" href="./contact/">Open Dedicated Contact Desk <span>↗</span></a>
      </div>
    </div>
    <div>
      <form class="institution-form" data-api="/api/contact">
        <label>Name <sup>*</sup><input name="name" autocomplete="name" required></label>
        <label>Email <sup>*</sup><input type="email" name="email" autocomplete="email" required></label>
        <label>Organisation<input name="organisation" autocomplete="organization"></label>
        <label>Country<input name="country" autocomplete="country-name"></label>
        <label>Subject<input name="subject" placeholder="General Enquiry / Academic / Media / Secretariat"></label>
        <label>Message <sup>*</sup><textarea name="message" rows="5" required placeholder="State your institutional inquiry or message."></textarea></label>
        <input type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot">
        <button class="solid-button" type="submit">Send Institutional Message <span>↗</span></button>
      </form>
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
      <a href="#vision">Vision</a>
      <a href="./system/">System</a>
      <a href="#founders">Founders</a>
      <a href="#sectors">Sectors</a>
      <a href="#innovation-lab">Innovation Lab</a>
      <a href="#impact">Impact</a>
      <a href="#insights">Insights</a>
      <a href="#partners">Partners</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
  <div class="footer-meta">
    <span>© 2026—2060 AFRICA 2060 INITIATIVE</span>
    <span>ZEENACLE NETWORK GROUP</span>
    <span>WORKING FRAMEWORK · SOURCE GROUNDED</span>
  </div>
</footer>

<noscript>
  <div class="noscript-message">JavaScript is not required to read the Africa 2060 framework, but the interactive operating sequencer is unavailable without it.</div>
</noscript>

<script>
"use strict";
const sectorData = {
    v: { label: 'VOCATIONAL / SECTOR UNIVERSE', title: 'Make & Build', body: 'Construction & Built Environment · Manufacturing & Fabrication · Automotive & Mobility · Agriculture & Agro-Processing · Renewable Energy & Utilities · Beauty, Personal Care & Lifestyle Manufacturing · Creative Production.' },
    t: { label: 'TECHNICAL / SECTOR UNIVERSE', title: 'Engineer & Innovate', body: 'Software & Digital Technology · Fintech & Financial Infrastructure · Health Technology & Medical Industry · Engineering & Industrial Technology · Mining & Minerals Technology · Climate & Environmental Technology · Telecommunications & Digital Infrastructure · Aerospace, Drones & Advanced Mobility.' },
    o: { label: 'OPERATIONAL / SECTOR UNIVERSE', title: 'Organise & Scale', body: 'Logistics & Supply Chain · Hospitality & Tourism · Business Services · Commerce & Distribution · Education & Human Capital · Media, Communications & Information · Real Estate & Property Operations · Professional & Financial Operations.' }
};
const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
const mobileMenu = document.querySelector('#mobileMenu');
const menuToggle = document.querySelector('#menuToggle');
const validRoutes = ['vision', 'system', 'founders', 'sectors', 'innovation-lab', 'impact', 'insights', 'partners', 'contact'];

function setMenu(open) { 
  if (!mobileMenu || !menuToggle) return; 
  mobileMenu.hidden = !open; 
  menuToggle.setAttribute('aria-expanded', String(open)); 
  menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu'); 
  document.body.classList.toggle('menu-open', open); 
  if (open) mobileMenu.querySelector(focusableSelector)?.focus();
  else menuToggle.focus(); 
}

function setupMenu() { 
  menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true')); 
  mobileMenu?.querySelectorAll('a[href]').forEach(a => a.addEventListener('click', () => { 
    if (!mobileMenu.hidden) setMenu(false); 
  })); 
  document.addEventListener('keydown', e => { 
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.hidden) setMenu(false); 
  }); 
}

const machineData = [
  { index: '01 / INPUT', title: 'Start with reality, not a syllabus.', body: 'Africa 2060 begins with a real African problem identified and structured through the Innovation Lab.', next: '01 → 02 / TRAIN' },
  { index: '02 / CAPABILITY', title: 'Build the capability to act.', body: 'The Academy develops sector-specific capability through Vocational, Technical and Operational pathways.', next: '02 → 03 / APPLY' },
  { index: '03 / APPLICATION', title: 'Apply learning to a real problem.', body: 'Participants move beyond instruction by applying what they learn to a real-time challenge.', next: '03 → 04 / MATCH' },
  { index: '04 / CONVERGENCE', title: 'Bring complementary founders together.', body: 'Different capabilities are matched around an opportunity so the work can move as a team.', next: '04 → 05 / FORM' },
  { index: '05 / FORMATION', title: 'Turn a solution into an organisation.', body: 'Promising solutions are structured toward company formation, with founders taking ownership roles.', next: '05 → 06 / FUND' },
  { index: '06 / CAPITAL', title: 'Mobilise the resources to build.', body: 'Approved company opportunities move into the relevant funding and ownership structure.', next: '06 → 07 / SCALE' },
  { index: '07 / EXECUTION', title: 'Build, test and scale the company.', body: 'Companies move from formation into execution, markets and growth.', next: '07 → 08 / REINVEST' },
  { index: '08 / COMPOUNDING', title: 'Recycle institutional value.', body: 'Institutional value is intended to support additional founder creation and company-building capacity.', next: '08 → 09 / MORE FOUNDERS' },
  { index: '09 / FLYWHEEL', title: 'The next founder enters the system.', body: 'New founders, companies and capability expand the system and create the conditions for the cycle to continue.', next: '09 → 01 / PROBLEM' }
];

function setupMachine() {
  const tabs = Array.from(document.querySelectorAll('[data-machine]'));
  const detail = document.querySelector('#machineDetail');
  if (!tabs.length || !detail) return;
  const update = (index) => {
    const item = machineData[index];
    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.setAttribute('tabindex', active ? '0' : '-1');
    });
    const idxEl = detail.querySelector('.machine-index');
    const titleEl = detail.querySelector('h3');
    const bodyEl = detail.querySelector('p');
    const outEl = detail.querySelector('.machine-output strong');
    if (idxEl) idxEl.textContent = item.index;
    if (titleEl) titleEl.textContent = item.title;
    if (bodyEl) bodyEl.textContent = item.body;
    if (outEl) outEl.textContent = item.next;
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => update(i));
    tab.addEventListener('keydown', e => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
      e.preventDefault();
      const target = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      tabs[target].focus();
      update(target);
    });
  });
}

function setupForms() {
  document.querySelectorAll('form[data-api]').forEach(form => form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const button = form.querySelector('button[type=submit]');
    const original = button?.innerHTML || '';
    const data = new FormData(form);
    const payload = {};
    data.forEach((v, k) => {
      if (k === 'contribution') {
        const existing = payload[k];
        payload[k] = existing ? [...existing, String(v)] : [String(v)];
      } else {
        payload[k] = String(v);
      }
    });
    button?.setAttribute('disabled', 'true');
    if (button) button.textContent = 'Sending…';
    let status = form.querySelector('.form-status');
    if (!status) {
      status = document.createElement('p');
      status.className = 'form-status';
      form.append(status);
    }
    try {
      const res = await fetch(form.dataset.api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Idempotency-Key': ((globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function') ? globalThis.crypto.randomUUID() : \`\${Date.now()}-\${Math.random().toString(16).slice(2)}\`)
        },
        body: JSON.stringify(payload)
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(out.message || 'Submission could not be completed.');
      form.innerHTML = \`<div class="form-success"><span>RECEIVED</span><h3>Your message has been received.</h3><p>Thank you for reaching out to Africa 2060. We’ve received your enquiry.</p></div>\`;
    } catch (err) {
      status.textContent = err instanceof Error ? err.message : 'Submission could not be completed. Please try again.';
      status.dataset.state = 'error';
      if (button) {
        button.removeAttribute('disabled');
        button.innerHTML = original;
      }
    }
  }));
}

try {
  setupMenu();
  setupMachine();
  setupForms();
} catch (error) {
  console.error('Africa 2060 interface initialisation failed.', error);
}
</script>
</body>
</html>
`;

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully wrote re-architected index.html! Size:', html.length);
