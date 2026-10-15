// Builds the three home-page direction mocks: dist/directions/{a,b,c}.html (+ index.html).
// Real data only (dist/api, academy courses, i18n). Components are vanilla ports of registry
// originals (directions/orig/src); see directions/mapping.mjs for module -> Hub component mapping.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { I, ic } from '../directions/src/icons.mjs';
import { MAP, DIRS, MODULES } from '../directions/mapping.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(DIST, 'directions');
const BASE = (process.env.BASE || '/agent-academy/').replace(/\/?$/, '/');
const SITE = (process.env.SITE || 'https://siinxu.github.io/agent-academy').replace(/\/$/, '');
const RAW = 'https://raw.githubusercontent.com/SiinXu/agent-academy/main';
const UIHUB_API = 'https://siinxu.github.io/ui-resource-hub/api/resources.json';
const rj = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const nf = (n) => Intl.NumberFormat('en-US').format(n);

// ---------------------------------------------------------------- data
const IDX = rj('dist/api/index.json');
const SI = rj('dist/api/search-index.json').items;
const CHG = rj('dist/api/changes.json');
const TAX = rj('i18n/taxonomy.json');
const PROMPT = rj('i18n/prompt.json');
const LOCALES = ['en', 'zh-CN', 'zh-TW', 'ja', 'ko', 'ms', 'vi', 'fr', 'es', 'de'];
const UI = Object.fromEntries(LOCALES.map((l) => [l, rj(`i18n/${l}.json`)]));
const OPEN = ['customer-service', 'marketing', 'design'];
const SOON = Object.keys(TAX.industries).filter((k) => !OPEN.includes(k));
const latin = (s) => s && !/[\u3000-\u9fff\uac00-\ud7af]/.test(s);
const roles = {}; const courses = {};
for (const ind of OPEN) {
  roles[ind] = [];
  for (const f of fs.readdirSync(path.join(DIST, 'api/courses', ind)).sort()) {
    const c = rj(`dist/api/courses/${ind}/${f}`); const r = c.role;
    const all = c.steps.flatMap((s) => s.read);
    const top = all.filter((x) => latin(x.title)).sort((a, b) => (b.metrics?.repo_stars || 0) - (a.metrics?.repo_stars || 0))[0];
    roles[ind].push({ k: r, n: all.length, top: top ? top.title : '' });
    courses[`${ind}/${r}`] = { course: `${RAW}/academy/courses/${ind}/${r}.md`, json: `${RAW}/academy/courses/${ind}/${r}.json`, pack: `${SITE}/packs/${ind}/${r}.zip`, n: all.length };
  }
  roles[ind].sort((a, b) => b.n - a.n);
}
const tx = Object.fromEntries(LOCALES.map((l) => [l, { industries: Object.fromEntries(Object.entries(TAX.industries).map(([k, v]) => [k, v[l] || v.en])), roles: Object.fromEntries(Object.entries(TAX.roles).map(([k, v]) => [k, v[l] || v.en])) }]));
const goals = Object.fromEntries(LOCALES.map((l) => [l, { 'customer-service': UI[l]['qs.g_cs'], marketing: UI[l]['qs.g_mk'], design: UI[l]['qs.g_ds'] }]));
const langName = Object.fromEntries(LOCALES.map((l) => [l, UI[l].lang_name]));
const STYLE_CARDS = [ // real UI Hub previews; counts = items tagged with that vs in UI Hub data.json
  { k: 'minimal', n: 1031, src: 'Transitions.dev', hub: 'transitions-dev' },
  { k: 'editorial', n: 25, src: 'Refero', hub: 'refero-design' },
  { k: 'dark-tech', n: 102, src: 'Skiper UI', hub: 'skiper-ui-com' },
  { k: 'motion', n: 152, src: 'BeUI', hub: 'beui-dev' },
  { k: 'soft', n: 259, src: 'HeroUI', hub: 'www-heroui-com' },
  { k: 'swiss', n: 19, src: 'Carbon', hub: 'lib-carbondesignsystem-com' },
];
const PLATS = [
  { k: 'cursor', n: 'Cursor', m: 'Cu', note: 'Saves rules to .cursor/rules' },
  { k: 'claude-code', n: 'Claude Code', m: 'CC', note: 'Can run shell + install skills' },
  { k: 'codex', n: 'Codex', m: 'Cx', note: 'Can run shell + install skills' },
  { k: 'grok-bot', n: 'Grok Bot', m: 'G', note: 'Has a shell on its box' },
  { k: 'other', n: 'Other agent', m: '··', note: 'Read-only, keeps rules in memory' },
];
const IND_IC = { 'customer-service': 'headset', marketing: 'megaphone', design: 'palette', 'software-engineering': 'code', sales: 'briefcase', ecommerce: 'cart', 'data-research': 'chart', finance: 'wallet', legal: 'scale', product: 'box' };
const IND_BLURB = { 'customer-service': 'Refunds, order status, escalations, help-centre articles.', marketing: 'SEO, email, ads, social, launches and analytics.', design: 'Interfaces that do not look templated, wired to UI Hub.' };

// items for showcase / feed (real, English summaries, best-starred first)
const pick = (f, n) => SI.filter((x) => latin(x.t) && latin(x.s) && f(x)).sort((a, b) => (b.q || 0) - (a.q || 0)).slice(0, n);
const TYPE = Object.fromEntries(Object.entries(TAX.types).map(([k, v]) => [k, v.en]));
const csItems = pick((x) => x.in === 'customer-service' && x.ty !== 'awesome-list', 7);
const mkItems = pick((x) => x.in === 'marketing' && ['skill', 'mcp', 'system-prompt', 'workflow', 'template'].includes(x.ty), 12);
const mcpItems = pick((x) => x.ty === 'mcp' && OPEN.includes(x.in), 9);
const feedTypes = ['skill', 'mcp', 'system-prompt', 'template', 'workflow', 'case', 'tutorial', 'design-system'];
const feed = []; const seen = new Set();
for (let round = 0; feed.length < 18 && round < 6; round++) for (const ind of OPEN) for (const ty of feedTypes) {
  const x = SI.filter((i) => i.in === ind && i.ty === ty && latin(i.t) && latin(i.s) && !seen.has(i.id)).sort((a, b) => (b.q || 0) - (a.q || 0))[0];
  if (x && feed.length < 18 && round === Math.floor(feed.length / 9)) { seen.add(x.id); feed.push(x); }
}
while (feed.length < 18) { const x = pick((i) => OPEN.includes(i.in) && !seen.has(i.id), 1)[0]; if (!x) break; seen.add(x.id); feed.push(x); }
const host = (h) => (h || '').replace(/^www\./, '').split('/')[0];
const owner = (h) => { const p = (h || '').split('/'); return p[0] === 'github.com' && p[1] ? p[1] : host(h); };
const mono = (s) => (s || '?').replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase() || '··';
const stars = (q) => q >= 1000 ? (q / 1000).toFixed(q >= 10000 ? 0 : 1) + 'k' : String(q || 0);
const rUrl = (id) => `${SITE}/r/${id}/`;
const safety = (x) => [x.c ? ['key', 'needs credentials'] : null, x.w ? ['send', 'writes external'] : null].filter(Boolean);

const CN = IDX.counts;
const COUNTS = { total: CN.total, skills: CN.skills, mcp: CN.mcp, prompts: CN.prompts, ind: CN.byIndustry, src: CN.bySource, types: CN.byType, changes: CHG.count, since: CHG.since };

const DATA = {
  site: SITE, uihub: UIHUB_API, changes: `${SITE}/api/changes.json`, caseRaw: `${RAW}/content/cases/agent-academy-build.en.md`,
  prompt: PROMPT, tx, goals, langName, roles, courses, platName: Object.fromEntries(PLATS.map((p) => [p.k, p.n])),
  fileIcons: { doc: ic('doc'), json: ic('json'), zip: ic('zip'), rss: ic('rss') },
};

// ---------------------------------------------------------------- assets
fs.mkdirSync(path.join(OUT, 'img'), { recursive: true }); fs.mkdirSync(path.join(OUT, 'fonts'), { recursive: true });
for (const f of fs.readdirSync(path.join(ROOT, 'directions/img'))) fs.copyFileSync(path.join(ROOT, 'directions/img', f), path.join(OUT, 'img', f));
for (const f of fs.readdirSync(path.join(ROOT, 'directions/fonts'))) fs.copyFileSync(path.join(ROOT, 'directions/fonts', f), path.join(OUT, 'fonts', f));
for (const f of fs.readdirSync(path.join(DIST, 'assets/fonts'))) fs.copyFileSync(path.join(DIST, 'assets/fonts', f), path.join(OUT, 'fonts', f));
fs.copyFileSync(path.join(ROOT, 'directions/src/engine.js'), path.join(OUT, 'engine.js'));
fs.copyFileSync(path.join(ROOT, 'directions/src/base.css'), path.join(OUT, 'base.css'));
const SAFARI = fs.readFileSync(path.join(ROOT, 'directions/orig/safari.svg'), 'utf8').replace('fontSize=', 'font-size=').replace('fontFamily=', 'font-family=').replace('{url}', 'siinxu.github.io/agent-academy/academy/courses/design/ui-designer.md').replace(/\s+\n/g, '\n');

const FONTS = `@font-face{font-family:"Geist";src:url(fonts/geist-latin.woff2) format("woff2");font-weight:100 900;font-display:swap}
@font-face{font-family:"Geist";src:url(fonts/geist-latin-ext.woff2) format("woff2");font-weight:100 900;font-display:swap;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:"Geist Mono";src:url(fonts/geist-mono-latin.woff2) format("woff2");font-weight:100 900;font-display:swap}
@font-face{font-family:"Instrument Serif";src:url(fonts/instrument-serif-latin.woff2) format("woff2");font-weight:400;font-display:swap}
@font-face{font-family:"Instrument Serif";src:url(fonts/instrument-serif-italic-latin.woff2) format("woff2");font-weight:400;font-style:italic;font-display:swap}`;

// ---------------------------------------------------------------- shared fragments
const themeBtn = (cls) => `<button class="${cls}" type="button" data-theme-toggle aria-label="Toggle light / dark">${ic('sun', 'ic i-sun')}${ic('moon', 'ic i-moon')}</button>`;
const copyBtn = (cls) => `<button class="copy-btn ${cls}" type="button" data-mod="copy" data-copy data-copied="false" aria-label="Copy prompt"><span class="sr-only sr-live" aria-live="polite"></span><span class="cb-ic" aria-hidden="true">${ic('copy', 'cb-copy')}${ic('check', 'cb-check')}</span><span class="cb-label" data-idle="Copy prompt" data-done="Copied">Copy prompt</span></button>`;
const profOpts = (render) => OPEN.map((k) => render({ k, name: TAX.industries[k].en, icon: ic(IND_IC[k], 'ic'), n: COUNTS.ind[k] || 0, roles: roles[k].length, blurb: IND_BLURB[k] })).join('');
const soonRow = (cls) => `<div class="${cls}" data-item><span class="soon-l">Coming soon</span>${SOON.map((k) => `<span class="soon-i" aria-disabled="true">${ic(IND_IC[k] || 'box', 'ic')}${esc(TAX.industries[k].en)}</span>`).join('')}</div>`;
const styleOpts = (render) => [{ k: '', n: 0, src: 'Agent picks one of 20', any: true }, ...STYLE_CARDS].map((s) => render(s)).join('');
const platOpts = (render) => PLATS.map(render).join('');
const langOpts = (render) => LOCALES.map((l) => render({ k: l, n: UI[l].lang_name })).join('');
const radio = (opt, val, extra = '') => `role="radio" tabindex="0" aria-checked="false" data-opt="${opt}" data-val="${esc(val)}" ${extra}`;

function wizard(k) {
  // k supplies direction-specific renderers; the data-* contract is read by engine.js
  return `<div class="wz ${k.cls}" data-wz data-wz-anim="${k.anim}" data-type-ms="${k.typeMs || 4}">
${k.head}
<div class="wz-steps" data-wz-steps>
 <div class="wz-panel" data-wz-panel="1" role="group" aria-labelledby="wz-h1">
  <h3 class="wz-h" id="wz-h1" tabindex="-1" data-wz-focus data-item>${k.h1 || 'Which bot are you building?'}</h3>
  <div class="opt-prof" data-mod="step1" role="radiogroup" aria-labelledby="wz-h1">${profOpts(k.prof)}</div>
  ${k.custom}
  ${soonRow('soon')}
 </div>
 <div class="wz-panel" data-wz-panel="2" role="group" aria-labelledby="wz-h2" hidden>
  <h3 class="wz-h" id="wz-h2" tabindex="-1" data-wz-focus data-item>${k.h2 || 'Which role should it learn?'}</h3>
  <div data-mod="step2" class="opt-role ${k.roleCls || ''}" role="radiogroup" aria-labelledby="wz-h2" data-wz-roles ${k.roleAttr || ''}></div>
 </div>
 <div class="wz-panel" data-wz-panel="3" role="group" aria-labelledby="wz-h3" hidden>
  <h3 class="wz-h" id="wz-h3" tabindex="-1" data-wz-focus data-item>${k.h3 || 'Preferences'}</h3>
  <div class="pref" data-design-only data-item data-mod="style"><p class="pref-l" id="pl-style">Design style <span>from UI Hub · real previews</span></p><div class="opt-style ${k.styleCls || ''}" role="radiogroup" aria-labelledby="pl-style" ${k.styleAttr || ''}>${styleOpts(k.style)}</div></div>
  <div class="pref" data-item data-mod="platform"><p class="pref-l" id="pl-plat">Your agent runs in</p><div class="opt-plat ${k.platCls || ''}" role="radiogroup" aria-labelledby="pl-plat" ${k.platAttr || ''}>${platOpts(k.plat)}</div></div>
  <div class="pref" data-item data-mod="lang"><p class="pref-l" id="pl-lang">Reply language</p><div class="opt-lang" role="radiogroup" aria-labelledby="pl-lang">${langOpts(k.lang)}</div></div>
 </div>
 <div class="wz-foot">
  <div class="wz-sum" data-mod="summary"><span class="wz-sum-l">Selected · 已选</span><div class="wz-chips" data-wz-summary data-empty="Nothing yet: pick a bot to start"></div></div>
  <div class="wz-nav">${k.back}${k.next}${k.gen}</div>
 </div>
</div>
<div class="wz-result" data-wz-result hidden>
 <div class="res-term" data-reveal="term">${k.terminal}</div>
 <div class="res-files" data-reveal="files" data-mod="files">
  <p class="res-l">${k.filesLabel || 'Your agent will read'}</p>
  <div class="stage" data-beam-stage data-beams="[]">
   <div class="stage-col" data-files-l></div>
   <div class="agent" id="agent-node">${k.agent}</div>
   <div class="stage-col" data-files-r></div>
  </div>
  <div hidden data-files></div>
 </div>
 <div class="res-actions" data-wz-actions>${k.copy}<a class="${k.cursorCls}" data-cursor-link hidden target="_blank" rel="noopener">${ic('ext', 'ic')}Open in Cursor</a>${k.restart}</div>
</div>
<template data-tpl="role">${k.roleTpl}</template>
<template data-tpl="chip">${k.chipTpl}</template>
<template data-tpl="file">${k.fileTpl}</template>
</div>`;
}

const head = (id, title, css) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title} · Agent Academy direction ${id.toUpperCase()}</title><meta name="robots" content="noindex"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22%3E%3Crect width=%2216%22 height=%2216%22 rx=%224%22 fill=%22%2318181B%22/%3E%3C/svg%3E">
<meta name="description" content="Design direction ${id.toUpperCase()} for the Agent Academy home page (mock with real data).">
<script>(function(){var q=new URLSearchParams(location.search).get('theme');var t=q||localStorage.getItem('aa-dir-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;if(t==='dark')document.documentElement.classList.add('dark');})()</script>
<link rel="preload" href="fonts/geist-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="base.css"><style>${FONTS}\n${css}</style></head>`;
const tail = () => `<script>window.DIR=${JSON.stringify(DATA)}</script><script src="engine.js" defer></script></body></html>`;
const mockBar = (id) => `<div class="mockbar" role="note"><span>Direction ${id.toUpperCase()} · ${esc(DIRS[id].name)} · mock with real data</span><span class="mb-links">${['a', 'b', 'c'].map((x) => `<a href="${x}.html"${x === id ? ' aria-current="page"' : ''}>${x.toUpperCase()}</a>`).join('')}<a href="index.html">Mapping</a><a href="${BASE}">Live site</a></span></div>`;
const MOCKBAR_CSS = `.mockbar{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:6px 16px;font:500 12px/1.4 var(--f-mono);background:var(--ink);color:var(--bg)}.mockbar a{opacity:.7;margin-left:12px}.mockbar a[aria-current]{opacity:1;text-decoration:underline}`;

const ctx = { DATA, COUNTS, OPEN, SOON, TAX, roles, csItems, mkItems, mcpItems, feed, STYLE_CARDS, PLATS, IND_IC, IND_BLURB, LOCALES, UI, CHG, ic, I, esc, nf, host, owner, mono, stars, rUrl, safety, TYPE, wizard, head, tail, mockBar, MOCKBAR_CSS, themeBtn, copyBtn, radio, SAFARI, BASE, SITE, RAW, OUT, ROOT, MAP, DIRS, MODULES, COUNTS_IND: COUNTS.ind };

// publish screenshots (webp copies committed under directions/shots) so the mapping table links resolve
const SHOTS = path.join(ROOT, 'directions/shots');
if (fs.existsSync(SHOTS)) fs.cpSync(SHOTS, path.join(OUT, 'shots'), { recursive: true });
// build pages
const { pageA } = await import('../directions/src/page-a.mjs');
const { pageB } = await import('../directions/src/page-b.mjs');
const { pageC } = await import('../directions/src/page-c.mjs');
const { indexPage } = await import('../directions/src/page-index.mjs');
fs.writeFileSync(path.join(OUT, 'a.html'), pageA(ctx));
fs.writeFileSync(path.join(OUT, 'b.html'), pageB(ctx));
fs.writeFileSync(path.join(OUT, 'c.html'), pageC(ctx));
fs.writeFileSync(path.join(OUT, 'index.html'), indexPage(ctx));
console.log('directions: wrote', ['a', 'b', 'c', 'index'].map((x) => `dist/directions/${x}.html`).join(', '), '| feed', feed.length, '| cs', csItems.length, '| mk', mkItems.length);
