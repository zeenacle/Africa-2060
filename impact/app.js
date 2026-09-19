"use strict";
const sectorData = {
    v: { label: 'VOCATIONAL / SECTOR UNIVERSE', title: 'Make & Build', body: 'Construction & Built Environment · Manufacturing & Fabrication · Automotive & Mobility · Agriculture & Agro-Processing · Renewable Energy & Utilities · Beauty, Personal Care & Lifestyle Manufacturing · Creative Production.' },
    t: { label: 'TECHNICAL / SECTOR UNIVERSE', title: 'Engineer & Innovate', body: 'Software & Digital Technology · Fintech & Financial Infrastructure · Health Technology & Medical Industry · Engineering & Industrial Technology · Mining & Minerals Technology · Climate & Environmental Technology · Telecommunications & Digital Infrastructure · Aerospace, Drones & Advanced Mobility.' },
    o: { label: 'OPERATIONAL / SECTOR UNIVERSE', title: 'Organise & Scale', body: 'Logistics & Supply Chain · Hospitality & Tourism · Business Services · Commerce & Distribution · Education & Human Capital · Media, Communications & Information · Real Estate & Property Operations · Professional & Financial Operations.' }
};
const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
const mobileMenu = document.querySelector('#mobileMenu');
const menuToggle = document.querySelector('#menuToggle');
const pathRoute = window.location.pathname.replace(/\/+$/, '').split('/').filter(Boolean).pop() || '';
const validRoutes = ['vision', 'system', 'founders', 'sectors', 'impact', 'insights', 'invest', 'partners', 'contact'];
const route = document.body.dataset.route && validRoutes.includes(document.body.dataset.route) ? document.body.dataset.route : (validRoutes.includes(pathRoute.replace(/\.html$/, '')) ? pathRoute.replace(/\.html$/, '') : '');
function routeHref(key) { return `../index.html#${key}`; }
function setMenu(open) { if (!mobileMenu || !menuToggle)
    return; mobileMenu.hidden = !open; menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu'); document.body.classList.toggle('menu-open', open); if (open)
    mobileMenu.querySelector(focusableSelector)?.focus();
else
    menuToggle.focus(); }
function setupMenu() { menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true')); mobileMenu?.querySelectorAll('a[href]').forEach(a => a.addEventListener('click', () => { if (!mobileMenu.hidden)
    setMenu(false); })); document.addEventListener('keydown', e => { if (e.key === 'Escape' && mobileMenu && !mobileMenu.hidden)
    setMenu(false); }); }
function renderSector(key) { const detail = document.querySelector('#sectorDetail'); if (!detail)
    return; const sector = sectorData[key]; detail.innerHTML = sector ? `<small>${sector.label}</small><h3>${sector.title}</h3><p>${sector.body}</p>` : '<small>SECTOR UNIVERSE</small><h3>Sector detail unavailable.</h3><p>Please select another founder track.</p>'; detail.dataset.state = sector ? 'ready' : 'error'; }
function setupSectorTabs() { const detail = document.querySelector('#sectorDetail'); const tabs = Array.from(document.querySelectorAll('.sector-tab')); tabs.forEach(tab => { tab.setAttribute('tabindex', tab.getAttribute('aria-selected') === 'true' ? '0' : '-1'); tab.addEventListener('click', () => { const key = tab.dataset.track; if (!key || !sectorData[key])
    return; tabs.forEach(t => { const active = t === tab; t.classList.toggle('active', active); t.setAttribute('aria-selected', String(active)); t.setAttribute('tabindex', active ? '0' : '-1'); }); detail?.setAttribute('aria-labelledby', tab.id); renderSector(key); }); tab.addEventListener('keydown', e => { if (!['Home', 'End', 'ArrowRight', 'ArrowLeft'].includes(e.key))
    return; e.preventDefault(); const i = tabs.indexOf(tab); const target = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length; tabs[target]?.focus(); tabs[target]?.click(); }); }); if (tabs.length)
    renderSector(tabs.find(t => t.getAttribute('aria-selected') === 'true')?.dataset.track || 'v'); }
const pages = {
    vision: { eyebrow: '01 / THE VISION', title: 'Build the companies that build Africa.', intro: '10,000,000 founders by 2060.', body: 'Africa 2060 exists to create 10 million founders and economic opportunities across Africa by 2060 — beginning with real estate and expanding into the strategic industries that drive growth and human development. The Initiative measures impact primarily in founders created: people trained, matched into teams, and seeded into real, equity-holding companies. Employment remains a valued outcome; ownership is the target.' },
    system: { eyebrow: '02 / THE FOUNDER CREATION SYSTEM', title: 'Train. Match. Form. Fund. Scale. Reinvest.', intro: 'A founder-generation and company-creation system.', body: 'Africa 2060 works backwards from company opportunities: Strategic Industry → Company Opportunities → Founder Roles Required → Skills Required → Training → Matching → Company Formation → Funding → Scale → Reinvestment → More Founders. The latest pitch deck presents six operating stages; the earlier framework presented the five-stage sequence without Scale.' },
    founders: { eyebrow: '03 / FOUNDERS', title: 'Three tracks. One company-creation system.', intro: 'Complementary capability pathways, not rigid silos.', body: 'Vocational — Make & Build develops founders who can physically produce, construct, repair, manufacture, install, grow, process and deliver tangible products and services. Technical — Engineer & Innovate develops founders who can design systems, build technology, create IP and solve complex technical problems. Operational — Organise & Scale develops founders who can organise people, capital, assets, supply chains, markets, customers, businesses and institutions.' },
    sectors: { eyebrow: '04 / SECTOR UNIVERSE', title: 'Track → Sector → Sub-sector → Company Opportunity.', intro: 'A strategic universe, not a commitment to launch every sector immediately.', body: 'Sectors can be added, merged, expanded, paused or retired as evidence changes. A sector becomes a Branch only when approved and supported by sufficient opportunity, capability and operating evidence. Initial Branches in the current framework are Real Estate & Hospitality (Active), Agritech (Launching), Healthtech (Planned), Edtech (Planned) and Fintech (Planned).' },
    impact: { eyebrow: '05 / MEASURING THE SYSTEM', title: 'What the system is designed to measure.', intro: 'System Scorecard — Targets & Ambitions (Not Current Figures).', body: 'Founders Created · Teams Formed · Companies Created · Capital Mobilised & Revenue Generated. Supporting measures in the broader scorecard include Ownership Retained, Jobs Created and Reinvestment Recycled. Primary north star: founders created and the companies they build.' },
    insights: { eyebrow: '06 / INSIGHTS', title: 'The work is designed to learn, renew and compound.', intro: 'Living curriculum. Trends & foresight. Outcome tracking.', body: 'The current framework identifies systems for long-term relevance, including AI Fluency as a Cross-Cutting Layer, a Living Curriculum, Trends & Foresight, a Forced-Renewal Rule, an Alumni-as-Faculty Flywheel, a Formal Global Fellows Network, a Venture Operating System and Outcome Tracking. No additional editorial claims are presented here until approved institutional insight material is published.' }
};
function pageShell(key, content) { const main = document.querySelector('#main'); if (!main)
    return; const p = pages[key]; document.title = `${p.title} — Africa 2060`; main.innerHTML = `<section class="route-hero dark"><div class="route-meta"><span>${p.eyebrow}</span><span>AFRICA 2060 · 2060 HORIZON</span></div><div class="route-number">${key === 'vision' ? '10,000,000' : key === 'impact' ? 'TARGETS' : '2060'}</div><div class="route-copy"><p class="kicker">${p.intro}</p><h1>${p.title}</h1><div class="route-rule"></div><p>${p.body}</p></div></section>${content}`; }
function ctaRail() { return `<section class="route-cta cream"><p class="kicker dark-kicker">THE WORK AHEAD</p><h2>Choose a way to participate.</h2><div class="route-cta-links"><a href="${routeHref('founders')}">Explore founders <span>↗</span></a><a href="${routeHref('founders')}">Become a founder <span>↗</span></a><a href="${routeHref('invest')}">Invest <span>↗</span></a><a href="${routeHref('partners')}">Partner <span>↗</span></a><a href="${routeHref('contact')}">Contact <span>↗</span></a></div></section>`; }
function renderRoute(key) {
    if (key === 'vision')
        pageShell(key, `<section class="route-section cream"><div class="route-grid"><div><p class="kicker dark-kicker">THE STRATEGIC REFRAME</p><h2>From workforce development<br><em>to founder creation.</em></h2></div><div><p>Training individuals → Assembling companies</p><p>Employability → Ownership</p><p>Isolated skills → Complementary founder teams</p><p>Job seekers → Company builders</p></div></div></section>${ctaRail()}`);
    else if (key === 'system')
        pageShell(key, `<section class="route-section dark"><div class="stage-grid">${[['01', 'TRAIN', 'Build sector-specific capability.'], ['02', 'MATCH', 'Combine complementary founder capabilities.'], ['03', 'FORM', 'Create companies around real opportunities.'], ['04', 'FUND', 'Allocate equity and seed resources.'], ['05', 'SCALE', 'Support execution, markets and growth.'], ['06', 'REINVEST', 'Recycle value into future cohorts.']].map(x => `<article><span>${x[0]}</span><h2>${x[1]}</h2><p>${x[2]}</p></article>`).join('')}</div></section>${ctaRail()}`);
    else if (key === 'founders')
        pageShell(key, `<section class="track-page dark"><div class="track-page-grid">${Object.values(sectorData).map((s, i) => `<article><small>0${i + 1}</small><h2>${s.title}</h2><p>${i === 0 ? 'People who produce, construct, repair, manufacture, install, grow, process and deliver tangible value.' : i === 1 ? 'People who engineer systems, build technology, create IP and solve complex technical problems.' : 'People who organise capital, people, assets, supply chains, markets and businesses.'}</p></article>`).join('')}</div></section>${ctaRail()}`);
    else if (key === 'sectors')
        pageShell(key, `<section class="route-section dark"><div class="sector-map-page"><div class="sector-tabs-static"><b>VOCATIONAL</b><b>TECHNICAL</b><b>OPERATIONAL</b></div><div class="sector-columns">${Object.values(sectorData).map(s => `<article><span>${s.label}</span><h2>${s.title}</h2><p>${s.body}</p></article>`).join('')}</div></div></section>${ctaRail()}`);
    else if (key === 'impact')
        pageShell(key, `<section class="route-section dark"><div class="impact-grid route-impact"><div><b>01</b><strong>FOUNDERS<br>CREATED</strong></div><div><b>02</b><strong>TEAMS<br>FORMED</strong></div><div><b>03</b><strong>COMPANIES<br>CREATED</strong></div><div><b>04</b><strong>CAPITAL MOBILISED<br>&amp; REVENUE GENERATED</strong></div></div><p class="scorecard-note">Targets &amp; ambitions, not current figures.</p></section>${ctaRail()}`);
    else if (key === 'insights')
        pageShell(key, `<section class="route-section cream"><div class="insight-ledger"><article><span>01</span><h2>Living Curriculum</h2><p>Version-controlled curriculum that changes as evidence and technology change.</p></article><article><span>02</span><h2>Trends &amp; Foresight</h2><p>A system function for keeping the Initiative relevant through 2060.</p></article><article><span>03</span><h2>Outcome Tracking</h2><p>Outcome data feeds back into curriculum and vertical decisions.</p></article><article><span>04</span><h2>Venture Operating System</h2><p>A long-term relevance system identified in the current framework.</p></article></div></section>${ctaRail()}`);
    else {
        const _unreachable = key;
        void _unreachable;
    }
}
function formMarkup(kind) {
    const common = `<label>Name <sup>*</sup><input name="name" autocomplete="name" required></label><label>Organisation <sup>*</sup><input name="organisation" autocomplete="organization" required></label><label>Email <sup>*</sup><input type="email" name="email" autocomplete="email" required></label><label>Country<input name="country" autocomplete="country-name"></label><input type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot">`;
    if (kind === 'invest')
        return `<form class="institution-form" data-api="/api/investment-enquiries">${common}<label>Area / Sector of Interest<input name="interest"></label><label>Investment Interest<input name="investment_interest"></label><label>Message <sup>*</sup><textarea name="message" rows="6" required></textarea></label><button class="solid-button" type="submit">Start an investment conversation <span>↗</span></button></form>`;
    if (kind === 'partners')
        return `<form class="institution-form" data-api="/api/partner-enquiries">${common}<label>Partner Type <sup>*</sup><select name="partner_type" required><option value="">Select</option><option>Investors</option><option>Corporate Partners</option><option>Sponsors & Foundations</option><option>Institutions</option></select></label><label>Area of Interest<input name="interest"></label><fieldset><legend>Contribution Area</legend>${['Capital', 'Markets', 'Expertise', 'Infrastructure', 'Credibility / Network', 'Knowledge'].map(x => `<label class="check"><input type="checkbox" name="contribution" value="${x}">${x}</label>`).join('')}</fieldset><label>Message <sup>*</sup><textarea name="message" rows="6" required></textarea></label><button class="solid-button" type="submit">Talk to Africa 2060 <span>↗</span></button></form>`;
    return `<form class="institution-form" data-api="/api/contact"><label>Name <sup>*</sup><input name="name" autocomplete="name" required></label><label>Email <sup>*</sup><input type="email" name="email" autocomplete="email" required></label><label>Organisation<input name="organisation" autocomplete="organization"></label><label>Country<input name="country" autocomplete="country-name"></label><label>Subject<input name="subject"></label><label>Message <sup>*</sup><textarea name="message" rows="6" required></textarea></label><input type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot"><button class="solid-button" type="submit">Send enquiry <span>↗</span></button></form>`;
}
function renderActionPage(key) {
    const copyMap = {
        invest: { eyebrow: '07 / INVEST', title: 'Invest in the companies that build Africa.', intro: 'A long-term founder creation and company formation system.', body: 'Africa 2060 connects founder capability to company formation, ownership, strategic industries and the long-term reinvestment cycle. The opportunity is grounded in the scale of Africa, the ambition to create 10,000,000 founders by 2060 and a system designed to build companies across strategic industries. This page is for serious investment conversations; it does not constitute an offer of securities or an online investment transaction.' },
        partners: { eyebrow: '08 / PARTNER', title: 'Help build the infrastructure for ownership.', intro: 'Long-term institutional partnership.', body: 'Africa 2060 brings together Investors, Corporate Partners, Sponsors & Foundations and Institutions around founder creation and company building. Partners can contribute Capital, Markets, Expertise, Infrastructure, Credibility / Network and Knowledge.' },
        contact: { eyebrow: '09 / CONTACT', title: 'Contact Africa 2060.', intro: 'General institutional enquiries.', body: 'Use this route for general enquiries. Investment and partnership conversations have dedicated pathways.' }
    };
    const copy = copyMap[key];
    const main = document.querySelector('#main');
    if (!main)
        return;
    document.title = `${copy.title} — Africa 2060`;
    let extra = '';
    if (key === 'invest')
        extra = `<section class="route-section cream"><div class="giving-grid"><div><p class="kicker dark-kicker">THE INVESTMENT OPPORTUNITY</p><h2>Capital meets<br><em>company creation.</em></h2><div class="giving-list"><div><b>10,000,000 FOUNDERS</b><span>The 2060 ambition is to create founders and economic opportunities across Africa.</span></div><div><b>FOUNDER TEAMS</b><span>Complementary Vocational, Technical and Operational capabilities are matched around real company opportunities.</span></div><div><b>OWNERSHIP</b><span>The system is designed around founder ownership, company formation, scale and reinvestment.</span></div><div><b>STRATEGIC INDUSTRIES</b><span>Track → Sector → Sub-sector → Company Opportunity creates a structured path from capability to enterprise.</span></div></div></div><div><p class="kicker dark-kicker">INVESTMENT ENQUIRY</p>${formMarkup('invest')}</div></div></section>`;
    else if (key === 'partners')
        extra = `<section class="route-section cream"><div class="giving-grid"><div><p class="kicker dark-kicker">PARTNERSHIP PATHWAYS</p><h2>Participation through<br><em>capability.</em></h2><div class="giving-list">${['Capital', 'Markets', 'Expertise', 'Infrastructure', 'Credibility / Network', 'Knowledge'].map(x => `<div><b>${x.toUpperCase()}</b><span>Approved partnership contribution area.</span></div>`).join('')}</div></div><div><p class="kicker dark-kicker">PARTNER ENQUIRY</p>${formMarkup('partners')}</div></div></section>`;
    else
        extra = `<section class="route-section cream"><div class="contact-grid"><div><p class="kicker dark-kicker">GENERAL ENQUIRY</p><h2>Start a conversation.</h2><p>For general enquiries, contact Africa 2060 directly. Investment and partnership enquiries have dedicated pathways.</p></div><div>${formMarkup('contact')}</div></div></section>`;
    main.innerHTML = `<section class="route-hero dark"><div class="route-meta"><span>${copy.eyebrow}</span><span>AFRICA 2060 · 2060 HORIZON</span></div><div class="route-number">${key === 'invest' ? '2060' : key === 'partners' ? 'TABLE' : 'OPEN'}</div><div class="route-copy"><p class="kicker">${copy.intro}</p><h1>${copy.title}</h1><div class="route-rule"></div><p>${copy.body}</p></div></section>${extra}`;
}
function setupForms() { document.querySelectorAll('form[data-api]').forEach(form => form.addEventListener('submit', async (e) => { e.preventDefault(); const button = form.querySelector('button[type=submit]'); const original = button?.innerHTML || ''; const data = new FormData(form); const payload = {}; data.forEach((v, k) => { if (k === 'contribution') {
    const existing = payload[k];
    payload[k] = existing ? [...existing, String(v)] : [String(v)];
}
else
    payload[k] = String(v); }); button?.setAttribute('disabled', 'true'); if (button)
    button.textContent = 'Sending…'; let status = form.querySelector('.form-status'); if (!status) {
    status = document.createElement('p');
    status.className = 'form-status';
    form.append(status);
} try {
    const res = await fetch(form.dataset.api, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Idempotency-Key': ((globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function') ? globalThis.crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`) }, body: JSON.stringify(payload) });
    const out = await res.json().catch(() => ({}));
    if (!res.ok)
        throw new Error(out.message || 'Submission could not be completed.');
    form.innerHTML = `<div class="form-success"><span>RECEIVED</span><h3>Your message has been received.</h3><p>Thank you for reaching out to Africa 2060. We’ve received your enquiry.</p></div>`;
}
catch (err) {
    status.textContent = err instanceof Error ? err.message : 'Submission could not be completed. Please try again.';
    status.dataset.state = 'error';
    if (button) {
        button.removeAttribute('disabled');
        button.innerHTML = original;
    }
} })); }
function init() { setupMenu(); if (!route) {
    setupSectorTabs();
    return;
} if (pages[route]) {
    renderRoute(route);
    setupForms();
}
else if (['invest', 'partners', 'contact'].includes(route)) {
    renderActionPage(route);
    setupForms();
}
else if (route) {
    document.title = 'Page not found — Africa 2060';
    const main = document.querySelector('#main');
    if (main)
        main.innerHTML = '<section class="route-hero dark"><div class="route-copy"><p class="kicker">AFRICA 2060</p><h1>Page not found.</h1><p>Return to the Africa 2060 home page.</p><a class="solid-button" href="../index.html">Return home <span>↗</span></a></div></section>';
} }
try {
    init();
}
catch (error) {
    console.error('Africa 2060 interface initialisation failed.', error);
    const main = document.querySelector('#main');
    if (main)
        main.innerHTML = '<section class="route-hero dark"><div class="route-copy"><p class="kicker">AFRICA 2060</p><h1>The page could not be initialised.</h1><p>Please reload and try again.</p></div></section>';
}
