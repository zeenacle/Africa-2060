import fs from 'node:fs';

const css = fs.readFileSync('styles.css', 'utf8');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="The Africa 2060 African Industrial Atlas: A 22-sector opportunity universe mapping Track → Sector → Sub-sector → Company Opportunity across 54 economies.">
<meta name="robots" content="index,follow">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta name="color-scheme" content="dark light">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Africa 2060">
<meta property="og:title" content="African Industrial Atlas &amp; Sector Universe — Africa 2060">
<meta property="og:description" content="Track → Sector → Sub-sector → Company Opportunity. A strategic opportunity universe for company formation across strategic African industries.">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="African Industrial Atlas — Africa 2060">
<meta name="twitter:description" content="Where companies can be built across 54 African economies.">
<meta name="theme-color" content="#040d16">
<title>African Industrial Atlas &amp; Sectors — Africa 2060</title>
<link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJBZnJpY2EgMjA2MCI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iIzA3MTMxZiIvPgogIDxwYXRoIGQ9Ik04IDEyaDQ4djRIOHoiIGZpbGw9IiNjNTlhNDgiLz4KICA8dGV4dCB4PSIzMiIgeT0iNDIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMSIgZm9udC13ZWlnaHQ9IjgwMCIgZmlsbD0iI2VlZThkYyI+MjA2MDwvdGV4dD4KPC9zdmc+Cg==" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
<style id="a2060-inline-css">
${css}
</style>
<link rel="preload" as="image" href="../images/city-wide-2.webp">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"African Industrial Atlas & Sector Universe — Africa 2060","description":"Track → Sector → Sub-sector → Company Opportunity. A strategic opportunity universe for company formation across strategic African industries."}</script>
</head>
<body data-route="sectors">
<a class="skip" href="#main">Skip to content</a>
<header class="nav" id="top">
  <a class="wordmark" href="../" aria-label="Africa 2060 home"><img src="../images/mark.webp" alt="" width="34" height="34" decoding="async"><span>AFRICA</span><b>2060</b></a>
  <nav aria-label="Primary navigation">
    <a class="nav-link" href="../vision/">Vision</a>
    <a class="nav-link" href="../system/">System</a>
    <a class="nav-link" href="../founders/">Founders</a>
    <a class="nav-link active" href="./" aria-current="page">Sectors</a>
    <a class="nav-link" href="../innovation-lab/">Innovation Lab</a>
    <a class="nav-link" href="../impact/">Impact</a>
    <a class="nav-link" href="../insights/">Insights</a>
  </nav>
  <button class="menu-toggle" id="menuToggle" type="button" aria-expanded="false" aria-controls="mobileMenu" aria-label="Open navigation menu"><span></span><span></span><span></span></button>
  <div class="nav-actions"><a class="nav-secondary" href="../contact/">Contact</a><a class="nav-cta" href="../partners/">Partner <span>↗</span></a></div>
  <div class="mobile-menu" id="mobileMenu" hidden>
    <a href="../vision/">Vision</a>
    <a href="../system/">System</a>
    <a href="../founders/">Founders</a>
    <a class="active" href="./">Sectors</a>
    <a href="../innovation-lab/">Innovation Lab</a>
    <a href="../impact/">Impact</a>
    <a href="../insights/">Insights</a>
    <a class="mobile-partner" href="../partners/">Partner <span>↗</span></a>
    <a href="../contact/">Contact</a>
  </div>
</header>

<main id="main">

<!-- HERO: MONUMENTAL INDUSTRIAL ATLAS -->
<section class="hero-v2" aria-labelledby="sectors-hero-title">
  <div class="hero-backdrop">
    <img class="hero-v2-image" src="../images/city-wide-2.webp" alt="African citywide industrial infrastructure, energy corridors and modern industrial landscape" width="1376" height="784" fetchpriority="high" decoding="async">
  </div>
  <div class="hero-overlay" aria-hidden="true"></div>
  <div class="hero-grid-lines" aria-hidden="true"></div>
  <div class="hero-v2-main-grid">
    <div class="hero-v2-copy">
      <div class="eyebrow-row"><span>04 / THE SECTOR UNIVERSE</span><span>AFRICAN INDUSTRIAL ATLAS</span></div>
      <h1 id="sectors-hero-title" class="display">Track → Sector → Sub-sector → <span class="serif">Company Opportunity.</span></h1>
      <div class="hero-v2-sub">
        <p>A strategic universe, not a commitment to launch every sector immediately. Africa 2060 identifies the economic systems and value chains within which enduring companies can be built.</p>
        <p>Sectors can be added, merged, expanded, paused or retired as market evidence changes. A sector becomes an active Branch only when supported by sufficient opportunity, founder capability and operating evidence.</p>
      </div>
      <div class="hero-v2-actions">
        <a class="solid-button" href="#atlas">Explore the Industrial Atlas <span>↓</span></a>
        <a class="line-link" href="#hierarchy">The 4-Level Opportunity Hierarchy <span>↓</span></a>
      </div>
    </div>
    <div class="hero-v2-number" aria-hidden="true">ATLAS<span>22 SECTORS</span></div>
  </div>
  <div class="hero-meta-strip">
    <span>SECTORS CATALOGED: 22</span>
    <span>CAPABILITY TRACKS: 3</span>
    <span>HIERARCHY: 4 TIERS</span>
    <span>HORIZON: 2026—2060</span>
  </div>
</section>

<!-- SECTION 02: THE 4-LEVEL HIERARCHY MATRIX -->
<section class="act act-cream" id="hierarchy">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>THE OPPORTUNITY HIERARCHY</span><span>STRUCTURAL ARCHITECTURE</span></div>
      <h2 style="margin-top:34px">From broad capability to <span class="serif">specific enterprise.</span></h2>
    </div>
    <p>Africa 2060 does not teach isolated technical skills. It works systematically through a 4-level taxonomy that connects individual talent to concrete enterprise formation.</p>
  </div>

  <div class="hierarchy-strip" style="margin-top:40px">
    <div class="hierarchy-row">
      <span>01 / TRACK</span><i>→</i><span>Foundational human capability pathway: Vocational (Make &amp; Build), Technical (Engineer &amp; Innovate), Operational (Organise &amp; Scale)</span>
    </div>
    <div class="hierarchy-row">
      <span>02 / SECTOR</span><i>→</i><span>Broad economic industry domain (e.g. Agriculture &amp; Agro-Processing, Renewable Energy, Health Technology, Logistics)</span>
    </div>
    <div class="hierarchy-row">
      <span>03 / SUB-SECTOR</span><i>→</i><span>Specific value chain segment (e.g. Solar Irrigation, Cold-Chain Logistics, Diagnostic Consumables, Cross-Border Freight)</span>
    </div>
    <div class="hierarchy-row">
      <span>04 / COMPANY OPPORTUNITY</span><i>→</i><span>A concrete, validated, equity-holding operating enterprise matched with an incorporated founding triad</span>
    </div>
  </div>
</section>

<!-- SECTION 03: THE 22-SECTOR INDUSTRIAL ATLAS -->
<section class="act act-dark" id="atlas">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>THE 22 STRATEGIC SECTORS</span><span>PAN-AFRICAN UNIVERSE</span></div>
      <h2 style="margin-top:34px">The complete sector catalog, <span class="serif">mapped by track.</span></h2>
    </div>
    <p>Explore all 22 industrial domains across the three capability pathways. Each vertical represents a substantive frontier for African company building.</p>
  </div>

  <div class="tracks-v2" style="margin-top:48px">
    <!-- TRACK 01 UNIVERSE -->
    <div class="track-world-v2 track-vocational" style="background:var(--navy-surface)">
      <div class="track-body">
        <div class="track-code" style="color:var(--rust)">TRACK 01 / VOCATIONAL</div>
        <h3 style="color:#fff">Make &amp; Build Universe</h3>
        <p style="color:#aebbc1">Physical production, fabrication, construction, agriculture, energy, and mobility infrastructure.</p>
        
        <div class="reframe-grid" style="margin-top:24px;border-top:1px solid var(--navy-border);padding-top:16px">
          <div class="reframe-row" style="font-size:13.5px"><span>01</span><i>·</i><span>Construction &amp; Built Environment</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>02</span><i>·</i><span>Manufacturing &amp; Fabrication</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>03</span><i>·</i><span>Automotive &amp; Mobility</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>04</span><i>·</i><span>Agriculture &amp; Agro-Processing</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>05</span><i>·</i><span>Renewable Energy &amp; Utilities</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>06</span><i>·</i><span>Beauty, Personal Care &amp; Lifestyle Manufacturing</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>07</span><i>·</i><span>Creative Production</span></div>
        </div>
      </div>
    </div>

    <!-- TRACK 02 UNIVERSE -->
    <div class="track-world-v2 track-technical" style="background:var(--navy-surface)">
      <div class="track-body">
        <div class="track-code" style="color:#2a6f97">TRACK 02 / TECHNICAL</div>
        <h3 style="color:#fff">Engineer &amp; Innovate Universe</h3>
        <p style="color:#aebbc1">Digital systems, software IP, financial rails, medical tech, industrial robotics, and climate solutions.</p>
        
        <div class="reframe-grid" style="margin-top:24px;border-top:1px solid var(--navy-border);padding-top:16px">
          <div class="reframe-row" style="font-size:13.5px"><span>01</span><i>·</i><span>Software &amp; Digital Technology</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>02</span><i>·</i><span>Fintech &amp; Financial Infrastructure</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>03</span><i>·</i><span>Health Technology &amp; Medical Industry</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>04</span><i>·</i><span>Engineering &amp; Industrial Technology</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>05</span><i>·</i><span>Mining &amp; Minerals Technology</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>06</span><i>·</i><span>Climate &amp; Environmental Technology</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>07</span><i>·</i><span>Telecommunications &amp; Digital Infrastructure</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>08</span><i>·</i><span>Aerospace, Drones &amp; Advanced Mobility</span></div>
        </div>
      </div>
    </div>

    <!-- TRACK 03 UNIVERSE -->
    <div class="track-world-v2 track-operational" style="background:var(--navy-surface)">
      <div class="track-body">
        <div class="track-code" style="color:var(--green)">TRACK 03 / OPERATIONAL</div>
        <h3 style="color:#fff">Organise &amp; Scale Universe</h3>
        <p style="color:#aebbc1">Cross-border logistics, commercial distribution, real estate asset operations, and enterprise platforms.</p>
        
        <div class="reframe-grid" style="margin-top:24px;border-top:1px solid var(--navy-border);padding-top:16px">
          <div class="reframe-row" style="font-size:13.5px"><span>01</span><i>·</i><span>Logistics &amp; Supply Chain</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>02</span><i>·</i><span>Hospitality &amp; Tourism</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>03</span><i>·</i><span>Business Services</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>04</span><i>·</i><span>Commerce &amp; Distribution</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>05</span><i>·</i><span>Education &amp; Human Capital</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>06</span><i>·</i><span>Media, Communications &amp; Information</span></div>
          <div class="reframe-row" style="font-size:13.5px"><span>07</span><i>·</i><span>Real Estate &amp; Property Operations</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 04: DYNAMIC BRANCH ARCHITECTURE -->
<section class="act act-cream" id="branches">
  <div class="act-head">
    <div>
      <div class="eyebrow-row"><span>OPERATING EVIDENCE</span><span>DYNAMIC BRANCH ARCHITECTURE</span></div>
      <h2 style="margin-top:34px">How sectors activate <span class="serif">into branches.</span></h2>
    </div>
    <p>A sector is not launched because it is trendy. A sector becomes an operational Branch only when verified by sufficient customer demand, founder talent, and institutional partners.</p>
  </div>

  <div class="academy-tiers-grid" style="margin-top:40px">
    <div class="academy-tier-card" style="background:#fff;border:1px solid var(--darkline)">
      <span class="academy-tier-num">BRANCH STATUS: ACTIVE</span>
      <h3 style="color:var(--ink)">Real Estate &amp; Built Environment</h3>
      <p style="color:var(--ink-soft)">Active pioneer branch. Focus on modular building components, real estate operations, property management tech, and localized construction materials.</p>
      <div class="academy-tier-list">
        <span>· Construction manufacturing &amp; pre-cast masonry</span>
        <span>· Commercial &amp; residential property management platforms</span>
        <span>· Hospitality facilities &amp; shared workspace operations</span>
      </div>
    </div>

    <div class="academy-tier-card" style="background:#fff;border:1px solid var(--darkline)">
      <span class="academy-tier-num" style="color:var(--rust)">BRANCH STATUS: LAUNCHING</span>
      <h3 style="color:var(--ink)">Agritech &amp; Agro-Processing</h3>
      <p style="color:var(--ink-soft)">Imminent deployment vertical. Addressing agricultural post-harvest loss, cold chain storage, localized food processing, and grain distribution corridors.</p>
      <div class="academy-tier-list">
        <span>· Solar-powered decentralized cold storage</span>
        <span>· Value-added food processing &amp; grain milling equipment</span>
        <span>· Agricultural inputs logistics &amp; direct farm-to-market off-take</span>
      </div>
    </div>

    <div class="academy-tier-card" style="background:#fff;border:1px solid var(--darkline)">
      <span class="academy-tier-num" style="color:var(--ink-muted)">BRANCH STATUS: PLANNED</span>
      <h3 style="color:var(--ink)">Healthtech, Edtech &amp; Fintech</h3>
      <p style="color:var(--ink-soft)">Structured planning and challenge intelligence phase. Formal launch scheduled upon completion of Innovation Lab challenge structuring and partner syndication.</p>
      <div class="academy-tier-list">
        <span>· Diagnostic clinic infrastructure &amp; generic consumables</span>
        <span>· Vocational apprenticeship software &amp; credentials</span>
        <span>· Cross-border trade finance &amp; AfCFTA payment settlement</span>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 05: CLOSING MONUMENT -->
<section class="hero-v2 act-monument" id="closing" style="min-height:85vh;border-top:1px solid var(--navy-border)">
  <div class="hero-backdrop">
    <img class="hero-v2-image" src="../images/lagos-dawn.webp" alt="Lagos industrial port at dawn" width="1376" height="784" loading="lazy" decoding="async">
  </div>
  <div class="hero-overlay" aria-hidden="true"></div>
  <div class="hero-grid-lines" aria-hidden="true"></div>
  <div class="hero-v2-main-grid">
    <div class="hero-v2-copy">
      <div class="eyebrow-row"><span>FROM SECTOR TO VENTURE</span><span>AFRICA 2060</span></div>
      <h2 class="display" style="font-size:clamp(44px,6vw,92px)">Build within <span class="serif">these sectors.</span></h2>
      <div class="hero-v2-sub">
        <p>Africa 2060 connects ambitious founders to verified industrial problems across these 22 verticals. Explore how the Innovation Lab structures challenges or partner with us to back a sector branch.</p>
      </div>
      <div class="hero-v2-actions" style="margin-top:36px">
        <a class="solid-button" href="../innovation-lab/">Enter Innovation Lab <span>↗</span></a>
        <a class="line-link" href="../founders/">Explore Founder Pathways <span>↗</span></a>
        <a class="solid-button" href="../partners/" style="background:var(--gold);color:var(--navy)">Sponsor a Sector Branch <span>↗</span></a>
      </div>
    </div>
    <div class="hero-v2-number" aria-hidden="true">2060<span>SECTORS</span></div>
  </div>
  <div class="hero-meta-strip">
    <span>HORIZON: 2026—2060</span>
    <span>CATALOGED: 22 SECTORS</span>
    <span>STATUS: ACTIVE ARCHITECTURE</span>
    <span>PAN-AFRICAN TERRAIN</span>
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
      <a href="./">Sectors</a>
      <a href="../innovation-lab/">Innovation Lab</a>
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
  console.error('Sectors page init error:', err);
}
</script>
</body>
</html>
`;

fs.writeFileSync('sectors/index.html', html, 'utf8');
console.log('Successfully wrote re-architected sectors/index.html! Length:', html.length);

