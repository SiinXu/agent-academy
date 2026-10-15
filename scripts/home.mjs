// Home page for the three site skins (A default, B, C) + the shared Quick-start wizard.
// Called by build.mjs after dist/api is written. Real data only (dist/api, academy courses, i18n).
// Components are vanilla ports of registry originals (directions/orig/src); see directions/mapping.mjs.
import fs from 'node:fs';
import path from 'node:path';
import { I, ic } from '../directions/src/icons.mjs';

export async function buildHome({ ROOT, DIST, BASE, SITE, RAW, UIHUB_API, UPDATED, LOCALES, UI }) {
  const rj = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const nf = (n) => Intl.NumberFormat('en-US').format(n);
  const t = (k) => { if (UI.en[k] === undefined) throw new Error('missing i18n key ' + k); return UI.en[k]; };
  const i = (k) => `<span data-i="${k}">${esc(t(k))}</span>`; // translatable text node
  const n = (k, v) => `<span data-i-n="${k}" data-n="${v}">${esc(t(k).replace('{n}', nf(v)))}</span>`; // text with a number
  const tx = (g, k) => `<span data-tx="${g}.${k}">${esc(TAX[g][k].en)}</span>`;

  // ---------------------------------------------------------------- data
  const IDX = rj('dist/api/index.json');
  const SI = rj('dist/api/search-index.json').items;
  const CHG = rj('dist/api/changes.json');
  const TAX = rj('i18n/taxonomy.json');
  const PROMPT = rj('i18n/prompt.json');
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
  const txAll = Object.fromEntries(LOCALES.map((l) => [l, { industries: Object.fromEntries(Object.entries(TAX.industries).map(([k, v]) => [k, v[l] || v.en])), roles: Object.fromEntries(Object.entries(TAX.roles).map(([k, v]) => [k, v[l] || v.en])) }]));
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
    { k: 'cursor', n: 'Cursor', m: 'Cu', note: 'wz.p_cursor' },
    { k: 'claude-code', n: 'Claude Code', m: 'CC', note: 'wz.p_shell' },
    { k: 'codex', n: 'Codex', m: 'Cx', note: 'wz.p_shell' },
    { k: 'grok-bot', n: 'Grok Bot', m: 'G', note: 'wz.p_grok' },
    { k: 'other', n: null, m: '··', note: 'wz.p_other' },
  ];
  const IND_IC = { 'customer-service': 'headset', marketing: 'megaphone', design: 'palette', 'software-engineering': 'code', sales: 'briefcase', ecommerce: 'cart', 'data-research': 'chart', finance: 'wallet', legal: 'scale', product: 'box' };
  const pick = (f, k) => SI.filter((x) => latin(x.t) && latin(x.s) && f(x)).sort((a, b) => (b.q || 0) - (a.q || 0)).slice(0, k);
  const TYPE = Object.fromEntries(Object.entries(TAX.types).map(([k, v]) => [k, v.en]));
  const csItems = pick((x) => x.in === 'customer-service' && x.ty !== 'awesome-list', 7);
  const mkItems = pick((x) => x.in === 'marketing' && ['skill', 'mcp', 'system-prompt', 'workflow', 'template'].includes(x.ty), 12);
  const mcpItems = pick((x) => x.ty === 'mcp' && OPEN.includes(x.in), 9);
  const feedTypes = ['skill', 'mcp', 'system-prompt', 'template', 'workflow', 'case', 'tutorial', 'design-system'];
  const feed = []; const seen = new Set();
  for (let round = 0; feed.length < 18 && round < 6; round++) for (const ind of OPEN) for (const ty of feedTypes) {
    const x = SI.filter((it) => it.in === ind && it.ty === ty && latin(it.t) && latin(it.s) && !seen.has(it.id)).sort((a, b) => (b.q || 0) - (a.q || 0))[0];
    if (x && feed.length < 18 && round === Math.floor(feed.length / 9)) { seen.add(x.id); feed.push(x); }
  }
  while (feed.length < 18) { const x = pick((it) => OPEN.includes(it.in) && !seen.has(it.id), 1)[0]; if (!x) break; seen.add(x.id); feed.push(x); }
  const host = (h) => (h || '').replace(/^www\./, '').split('/')[0];
  const owner = (h) => { const p = (h || '').split('/'); return p[0] === 'github.com' && p[1] ? p[1] : host(h); };
  const mono = (s) => (s || '?').replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase() || '··';
  const stars = (q) => q >= 1000 ? (q / 1000).toFixed(q >= 10000 ? 0 : 1) + 'k' : String(q || 0);
  const rUrl = (id) => `${BASE}r/${id}/`;
  const safety = (x) => [x.c ? ['key', 'tag.cred_yes'] : null, x.w ? ['send', 'tag.send_yes'] : null].filter(Boolean);
  const safeTags = (x, cls = 'tag') => safety(x).map(([ico, k]) => `<span class="${cls} warn">${ic(ico)}${i(k)}</span>`).join('') || `<span class="${cls}">${ic('shield')}${i('tag.read_only')}</span>`;
  const licTag = (x) => x.li && x.li !== 'see source' && x.li !== 'not stated' ? esc(x.li) : i('card.lic_src');
  const CN = IDX.counts;
  const COUNTS = { total: CN.total, skills: CN.skills, mcp: CN.mcp, prompts: CN.prompts, ind: CN.byIndustry, src: CN.bySource, types: CN.byType, changes: CHG.count, since: CHG.since };
  const IMG = `${BASE}assets/img/`;

  const DATA = {
    site: SITE, uihub: UIHUB_API, changes: `${SITE}/api/changes.json`, caseRaw: `${RAW}/content/cases/agent-academy-build.en.md`,
    prompt: PROMPT, tx: txAll, goals, langName, roles, courses, platName: Object.fromEntries(PLATS.map((p) => [p.k, p.n])),
    fileIcons: { doc: ic('doc'), json: ic('json'), zip: ic('zip'), rss: ic('rss') },
  };

  // ---------------------------------------------------------------- shared fragments
  const copyBtn = (cls) => `<button class="copy-btn ${cls}" type="button" data-mod="copy" data-copy-prompt data-copied="false"><span class="sr-only sr-live" aria-live="polite"></span><span class="cb-ic" aria-hidden="true">${ic('copy', 'cb-copy')}${ic('check', 'cb-check')}</span><span class="cb-label" data-i="wz.copy">${esc(t('wz.copy'))}</span></button>`;
  const profOpts = (render) => OPEN.map((k) => render({ k, name: tx('industries', k), icon: ic(IND_IC[k], 'ic'), n: COUNTS.ind[k] || 0, roles: roles[k].length, blurb: i(`wz.b_${k}`), meta: `${nf(COUNTS.ind[k] || 0)} ${i('fac.items')} · ${roles[k].length} ${i('fac.roles')}` })).join('');
  const soonRow = (cls) => `<div class="${cls}" data-item><span class="soon-l">${i('fac.soon')}</span>${SOON.map((k) => `<span class="soon-i" aria-disabled="true">${ic(IND_IC[k] || 'box', 'ic')}${tx('industries', k)}</span>`).join('')}</div>`;
  const styleOpts = (render) => [{ k: '', n: 0, src: '', any: true }, ...STYLE_CARDS].map((s) => render(Object.assign(s, { label: s.any ? i('wz.any') : esc(s.k), sub: s.any ? i('wz.any_s') : `${nf(s.n)} ${i('wz.refs')} · ${esc(s.src)}`, img: s.any ? '' : `<img src="${IMG}style-${s.k}.webp" alt="${esc(s.src)} preview from UI Hub" loading="lazy" width="480" height="300">` }))).join('');
  const platOpts = (render) => PLATS.map((p) => render(Object.assign({}, p, { name: p.n ? esc(p.n) : i('wz.other'), noteH: i(p.note) }))).join('');
  const langOpts = (render) => LOCALES.map((l) => render({ k: l, n: UI[l].lang_name })).join('');
  const radio = (opt, val, extra = '') => `role="radio" tabindex="0" aria-checked="false" data-opt="${opt}" data-val="${esc(val)}" ${extra}`;

  function wizard(k) {
    // k supplies skin-specific renderers; the data-* contract is read by engine.js
    return `<div class="wz ${k.cls}" data-wz data-wz-anim="${k.anim}" data-type-ms="${k.typeMs || 4}">
${k.head}
<div class="wz-steps" data-wz-steps>
 <div class="wz-panel" data-wz-panel="1" role="group" aria-labelledby="wz-h1">
  <h3 class="wz-h" id="wz-h1" tabindex="-1" data-wz-focus data-item>${i('wz.h1')}</h3>
  <div class="opt-prof" data-mod="step1" role="radiogroup" aria-labelledby="wz-h1">${profOpts(k.prof)}</div>
  ${k.custom}
  ${soonRow('soon')}
 </div>
 <div class="wz-panel" data-wz-panel="2" role="group" aria-labelledby="wz-h2" hidden>
  <h3 class="wz-h" id="wz-h2" tabindex="-1" data-wz-focus data-item>${i('wz.h2')}</h3>
  <div data-mod="step2" class="opt-role ${k.roleCls || ''}" role="radiogroup" aria-labelledby="wz-h2" data-wz-roles ${k.roleAttr || ''}></div>
 </div>
 <div class="wz-panel" data-wz-panel="3" role="group" aria-labelledby="wz-h3" hidden>
  <h3 class="wz-h" id="wz-h3" tabindex="-1" data-wz-focus data-item>${i('wz.h3')}</h3>
  <div class="pref" data-design-only data-item data-mod="style"><p class="pref-l" id="pl-style">${i('wz.style')} <span data-i="wz.style_s">${esc(t('wz.style_s'))}</span></p><div class="opt-style ${k.styleCls || ''}" role="radiogroup" aria-labelledby="pl-style" ${k.styleAttr || ''}>${styleOpts(k.style)}</div></div>
  <div class="pref" data-item data-mod="platform"><p class="pref-l" id="pl-plat">${i('wz.plat')}</p><div class="opt-plat ${k.platCls || ''}" role="radiogroup" aria-labelledby="pl-plat" ${k.platAttr || ''}>${platOpts(k.plat)}</div></div>
  <div class="pref" data-item data-mod="lang"><p class="pref-l" id="pl-lang">${i('wz.lang')}</p><div class="opt-lang" role="radiogroup" aria-labelledby="pl-lang">${langOpts(k.lang)}</div></div>
 </div>
 <div class="wz-foot">
  <div class="wz-sum" data-mod="summary"><span class="wz-sum-l">${i('wz.sel')}</span><div class="wz-chips" data-wz-summary></div></div>
  <div class="wz-nav">${k.back}${k.next}${k.gen}</div>
 </div>
</div>
<div class="wz-result" data-wz-result hidden>
 <div class="res-term" data-reveal="term">${k.terminal}</div>
 <div class="res-files" data-reveal="files" data-mod="files">
  <p class="res-l">${k.filesLabel || i('wz.reads')}</p>
  <div class="stage" data-beam-stage data-beams="[]">
   <div class="stage-col" data-files-l></div>
   <div class="agent" id="agent-node">${k.agent}</div>
   <div class="stage-col" data-files-r></div>
  </div>
  <div hidden data-files></div>
 </div>
 <div class="res-actions" data-wz-actions>${k.copy}<a class="${k.cursorCls}" data-cursor-link href="#start" hidden target="_blank" rel="noopener">${ic('ext', 'ic')}${i('wz.cursor')}</a>${k.restart}</div>
</div>
<template data-tpl="role">${k.roleTpl}</template>
<template data-tpl="chip">${k.chipTpl}</template>
<template data-tpl="file">${k.fileTpl}</template>
</div>`;
  }
  const BB = rj('directions/orig/bg-beams.json');
  const bgBeams = (sfx = '') => `<svg data-bg-beams viewBox="0 0 696 316" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="${BB.big}" stroke="url(#bbr${sfx})" stroke-opacity="0.05" stroke-width="0.5"/>${BB.paths.map((p, k) => `<path d="${p}" stroke="url(#lg${sfx}-${k})" stroke-opacity="0.4" stroke-width="0.5"/>`).join('')}<defs>${BB.paths.map((p, k) => `<linearGradient id="lg${sfx}-${k}" x1="0%" x2="0%" y1="0%" y2="0%"><stop style="stop-color:var(--acc-b3)" stop-opacity="0"/><stop style="stop-color:var(--acc-b3)"/><stop offset="32.5%" style="stop-color:var(--acc-b1)"/><stop offset="100%" style="stop-color:var(--acc-b2)" stop-opacity="0"/></linearGradient>`).join('')}<radialGradient id="bbr${sfx}" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"><stop offset="0.0666667" style="stop-color:var(--beam-base)"/><stop offset="0.243243" style="stop-color:var(--beam-base)"/><stop offset="0.43594" stop-color="white" stop-opacity="0"/></radialGradient></defs></svg>`;
  const SAFARI = fs.readFileSync(path.join(ROOT, 'directions/orig/safari.svg'), 'utf8').replace('fontSize=', 'font-size=').replace('fontFamily=', 'font-family=').replace('{url}', 'siinxu.github.io/agent-academy/academy/courses/design/ui-designer.md').replace(/\s+\n/g, '\n');
  const updated = `<time class="ts" datetime="${UPDATED}">${UPDATED.slice(0, 10)}</time>`;

  const X = { DATA, COUNTS, OPEN, SOON, TAX, roles, csItems, mkItems, mcpItems, feed, STYLE_CARDS, PLATS, IND_IC, LOCALES, UI, CHG, ic, I, esc, nf, host, owner, mono, stars, rUrl, safety, safeTags, licTag, TYPE, wizard, copyBtn, radio, SAFARI, BASE, SITE, RAW, ROOT, IMG, t, i, n, tx, bgBeams, updated };
  const out = { css: {}, main: {}, DATA, bgBeams };
  for (const s of ['a', 'b', 'c']) {
    const { page } = await import(`./skins/${s}.mjs`);
    const r = page(X); out.css[s] = r.css; out.main[s] = r.main;
  }
  return out;
}
