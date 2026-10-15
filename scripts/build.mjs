// Agent Academy static build: data/*.json -> dist/ (pages, /api, llms.txt, agent.md, feeds, packs) + academy/ (raw course files committed to the repo)
import fs from 'node:fs'; import path from 'node:path'; import { execFileSync } from 'node:child_process';
import { ROOT, LOCALES, OPEN, readJSON, esc, write, host, shortSrc } from './lib.mjs';

const BASE = (process.env.BASE || '/agent-academy/').replace(/\/?$/, '/');
const SITE = (process.env.SITE || 'https://siinxu.github.io/agent-academy').replace(/\/$/, '');
const REPO = process.env.REPO || 'SiinXu/agent-academy';
const RAW = `https://raw.githubusercontent.com/${REPO}/main`;
const DIST = path.join(ROOT, 'dist');
const UIHUB_API = 'https://siinxu.github.io/ui-resource-hub/api/resources.json';

const db = readJSON('data/resources.json', { items: [] });
const ALL = db.items;
// hidden: dead (2 failed checks), duplicates, and anything whose source answered 404/410/451 on the last check (kept in data, re-checked daily)
const GONE = (i) => [404, 410, 451].includes(i.http_status && i.http_status.source);
const LIVE = ALL.filter((i) => !['dead', 'duplicate'].includes(i.status) && !GONE(i));
const TAX = readJSON('i18n/taxonomy.json');
const COURSES = readJSON('data/courses.json');
const UI = Object.fromEntries(LOCALES.map((l) => [l, readJSON(`i18n/${l}.json`)]));
const PROMPT = readJSON('i18n/prompt.json');
const L10N_EN = readJSON('data/l10n/en.json', {});
// English display text: the original, or the machine translation for non-English sources (UI Hub notes are Chinese)
const sumOf = (i) => (i.summary_lang && i.summary_lang !== 'en' && L10N_EN[i.id] ? L10N_EN[i.id].s : i.summary_source) || '';
const licLabel = (i) => { const l = String(i.license).split(' (')[0]; return /^(see-skill-folder|NOASSERTION|NONE|unknown)$/.test(l) ? 'not stated' : l; };
const L10N = Object.fromEntries(LOCALES.filter((l) => l !== 'en').map((l) => [l, readJSON(`data/l10n/${l}.json`, {})]));
const STATE = readJSON('data/state.json', {});
const UPDATED = db.generated_at || new Date().toISOString();
const t = (k, l = 'en') => UI[l]?.[k] ?? UI.en[k] ?? k;
const name = (group, k, l = 'en') => TAX[group]?.[k]?.[l] || TAX[group]?.[k]?.en || k;
const u = (p = '') => BASE + p.replace(/^\//, '');

fs.rmSync(DIST, { recursive: true, force: true }); fs.mkdirSync(DIST, { recursive: true });

// ---------------------------------------------------------------- derived data
const byInd = {}; for (const i of LIVE) (byInd[i.industry] ||= []).push(i);
const count = (arr, f) => arr.reduce((m, x) => { const k = f(x); m[k] = (m[k] || 0) + 1; return m; }, {});
const TYPES = Object.keys(TAX.types);
const stats = {
  total: LIVE.length,
  skills: LIVE.filter((i) => i.type === 'skill').length,
  mcp: LIVE.filter((i) => i.type === 'mcp').length,
  prompts: LIVE.filter((i) => i.type === 'system-prompt' || i.type === 'template').length,
  byIndustry: Object.fromEntries(Object.keys(TAX.industries).map((k) => [k, (byInd[k] || []).length])),
  byType: count(LIVE, (i) => i.type),
  bySource: count(LIVE, (i) => i.source),
};
const rolesOf = (ind) => Object.entries(TAX.roles).filter(([, r]) => r.ind === ind).map(([k]) => k);
const stars = (i) => i.metrics?.repo_stars || i.metrics?.votes || i.metrics?.score || 0;
const sortQ = (a, b) => (b.source === 'seed') - (a.source === 'seed') || stars(b) - stars(a) || a.title.localeCompare(b.title);
const safety = (i) => ({ cred: !!i.security?.needs_credentials, send: !!i.security?.writes_external });

// ---------------------------------------------------------------- courses (per open profession x role)
const STEP_KEYS = ['1-enrol', '2-pick-direction', '3-learn-rules', '4-do-it', '5-self-check'];
const STEP_TYPES = {
  '1-enrol': ['tutorial', 'vendor-doc', 'awesome-list'],
  '2-pick-direction': ['style-library', 'template', 'design-system', 'plugin'],
  '3-learn-rules': ['skill', 'system-prompt', 'standard'],
  '4-do-it': ['workflow', 'case', 'mcp', 'tool'],
  '5-self-check': ['benchmark'],
};
const LIMIT = { '1-enrol': 8, '2-pick-direction': 14, '3-learn-rules': 24, '4-do-it': 16, '5-self-check': 8 };
function buildCourse(ind, role) {
  const pool = (byInd[ind] || []).filter((i) => i.status !== 'duplicate');
  const mine = pool.filter((i) => i.roles.includes(role));
  const steps = {};
  for (const s of STEP_KEYS) {
    const types = STEP_TYPES[s];
    let list = mine.filter((i) => types.includes(i.type)).sort(sortQ);
    if (list.length < 4) list = list.concat(pool.filter((i) => types.includes(i.type) && !list.includes(i)).sort(sortQ)).slice(0, Math.max(4, list.length));
    if (s === '5-self-check') {
      const rev = pool.filter((i) => i.roles.includes(ind === 'design' ? 'design-reviewer' : ind === 'marketing' ? 'marketing-analyst' : 'support-lead') && ['skill', 'system-prompt', 'standard'].includes(i.type)).sort(sortQ);
      list = list.concat(rev.filter((x) => !list.includes(x)));
    }
    steps[s] = list.slice(0, LIMIT[s] + (ind === 'design' ? 8 : 0));
  }
  return { id: `${ind}/${role}`, industry: ind, role, steps };
}
const COURSE_LIST = OPEN.flatMap((ind) => rolesOf(ind).map((r) => buildCourse(ind, r)));
// UI Hub style clusters (live API is read in the collector; here we count from design items with facets)
const styleCount = {};
for (const i of LIVE) for (const v of i.facets?.visual_style || []) styleCount[v] = (styleCount[v] || 0) + 1;
const STYLES = Object.entries(styleCount).sort((a, b) => b[1] - a[1]).map(([k, n]) => ({ k, n }));

const CASE_ID = 'agent-academy-build';
const caseURL = `${SITE}/cases/${CASE_ID}/`;
const courseRaw = (c) => `${RAW}/academy/courses/${c.industry}/${c.role}.md`;
const courseJsonRaw = (c) => `${RAW}/academy/courses/${c.industry}/${c.role}.json`;
const resRaw = (i) => (i.redistributable && fs.existsSync(path.join(ROOT, 'data/mirror', i.id + '.md')) ? `${RAW}/data/mirror/${i.id}.md` : null);

function courseMd(c) {
  const L = [];
  L.push(`---\nname: ${c.industry}-${c.role}\ndescription: Agent Academy course for ${name('roles', c.role)} (${name('industries', c.industry)}). Five ordered steps of real, source-linked resources.\nversion: ${UPDATED.slice(0, 10)}\nupdated_at: ${UPDATED}\nsource: ${SITE}/courses/${c.industry}/${c.role}/\n---\n`);
  L.push(`# ${name('roles', c.role)} · ${name('industries', c.industry)}\n`);
  L.push(`Goal: ${COURSES.goals[c.industry]}\n\nPermissions: ${COURSES.permissions[c.industry]}\n`);
  L.push(`Machine-readable version: ${courseJsonRaw(c)}\nSkill pack: ${SITE}/packs/${c.industry}/${c.role}.zip\nChanges feed: ${SITE}/api/changes.json\n`);
  L.push(`Rules for the agent: read the steps in order. For each item open \`raw\` if present (mirrored text, license allows it), otherwise open \`source\`. Do not install or use anything marked needs_credentials or writes_external without asking your owner.\n`);
  STEP_KEYS.forEach((s, idx) => {
    L.push(`\n## Step ${idx + 1}: ${t('step.' + s)}\n\n${t('step.' + s + '.d')}\n`);
    if (s === '2-pick-direction' && c.industry === 'design') {
      L.push(`Pick ONE visual direction from UI Hub (${UIHUB_API}, field \`vs\`). Write down 2-4 reference previews and the clusters you rejected. Clusters and item counts in this course:\n`);
      L.push(STYLES.map((x) => `- ${x.k}: ${x.n} items`).join('\n') + '\n');
      L.push(`First case to read: how this site was designed by an agent: ${caseURL} (raw: ${RAW}/content/cases/${CASE_ID}.en.md)\n`);
    }
    if (s === '4-do-it' && c.industry === 'design') L.push(`- [case] How this site was designed (Agent Academy design record). source: ${caseURL}. raw: ${RAW}/content/cases/${CASE_ID}.en.md\n`);
    for (const i of c.steps[s]) {
      const sf = safety(i);
      L.push(`- [${i.type}] ${i.title}. ${i.summary_source ? i.summary_source.replace(/\s+/g, ' ').slice(0, 220) : ''}\n  source: ${i.source_url}${resRaw(i) ? `\n  raw: ${resRaw(i)}` : ''}\n  license: ${i.license}${i.install ? `\n  install: ${i.install}` : ''}\n  needs_credentials: ${sf.cred}, writes_external: ${sf.send}`);
    }
    if (s === '5-self-check') L.push(`\n### Checklist\n\n` + COURSES.checklists[c.industry].map((x) => `- [ ] ${x}`).join('\n'));
  });
  L.push(`\n\nReport back to your owner: what you learned (5 bullets), which items you installed (none without approval), and the checklist results.\n`);
  return L.join('\n');
}
const resJSON = (i) => ({ id: i.id, title: i.title, type: i.type, industry: i.industry, roles: i.roles, summary: i.summary_source, summary_lang: i.summary_lang,
  source_url: i.source_url, raw_url: resRaw(i), upstream_raw_url: i.raw_url, repo: i.repo, author: i.author, license: i.license, redistributable: i.redistributable,
  content_policy: i.content_policy, install: i.install, security: i.security, metrics: i.metrics, course_step: i.course_step, status: i.status,
  first_seen: i.first_seen, updated_at: i.updated_at, checked_at: i.checked_at, http_status: i.http_status, page: `${SITE}/r/${i.id}/`, source: i.source });

// ---------------------------------------------------------------- academy/ (committed raw files for agents)
fs.rmSync(path.join(ROOT, 'academy'), { recursive: true, force: true });
for (const c of COURSE_LIST) {
  write(ROOT, `academy/courses/${c.industry}/${c.role}.md`, courseMd(c));
  write(ROOT, `academy/courses/${c.industry}/${c.role}.json`, JSON.stringify({ id: c.id, industry: c.industry, role: c.role, updated_at: UPDATED, goal: COURSES.goals[c.industry], permissions: COURSES.permissions[c.industry], checklist: COURSES.checklists[c.industry], case: c.industry === 'design' ? { url: caseURL, raw: `${RAW}/content/cases/${CASE_ID}.en.md` } : null, steps: STEP_KEYS.map((s) => ({ step: s, read: c.steps[s].map(resJSON) })) }, null, 1));
}
write(ROOT, 'academy/README.md', `# academy/\n\nGenerated by scripts/build.mjs on every update. Raw course files for agents.\n\n${COURSE_LIST.map((c) => `- ${c.id}: ${courseRaw(c)}`).join('\n')}\n`);

// ---------------------------------------------------------------- page shell (three skins: A default, B, C; see DESIGN_NOTES §12)
const { makeChrome } = await import('./chrome.mjs');
const { ic } = await import('../directions/src/icons.mjs');
const chrome = makeChrome({ BASE, REPO, UPDATED, LOCALES, UI, t, esc });
const ti = (k) => `<span data-i="${k}">${esc(t(k))}</span>`;
const tn = (k, v) => `<span data-i-n="${k}" data-n="${v}">${esc(t(k).replace('{n}', Intl.NumberFormat('en-US').format(v)))}</span>`;
const txs = (g, k) => `<span data-tx="${g}.${k}">${esc(name(g, k))}</span>`;
const nf = (x) => Intl.NumberFormat('en-US').format(x);
const SKIN_KEYS = ['a', 'b', 'c'];
const HEAD_SCRIPT = `<script>(function(){var d=document.documentElement,P=new URLSearchParams(location.search),ls=function(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}};var L=${JSON.stringify(LOCALES)},q=P.get('lang'),s=ls('aa-lang'),l=(q&&L.indexOf(q)>-1)?q:(s&&L.indexOf(s)>-1?s:null);if(!l){var n=(navigator.languages||[navigator.language||'']);for(var i=0;i<n.length&&!l;i++){var x=(n[i]||'').toLowerCase();if(/^zh-(tw|hk|mo|hant)/.test(x))l='zh-TW';else if(x.indexOf('zh')===0)l='zh-CN';else{var b=x.split('-')[0];var m={en:'en',ja:'ja',ko:'ko',ms:'ms',vi:'vi',fr:'fr',es:'es',de:'de'};if(m[b])l=m[b]}}}if(!l){var z='';try{z=Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch(e){}var T={'Asia/Shanghai':'zh-CN','Asia/Chongqing':'zh-CN','Asia/Urumqi':'zh-CN','Asia/Taipei':'zh-TW','Asia/Hong_Kong':'zh-TW','Asia/Macau':'zh-TW','Asia/Tokyo':'ja','Asia/Seoul':'ko','Asia/Kuala_Lumpur':'ms','Asia/Kuching':'ms','Asia/Ho_Chi_Minh':'vi','Asia/Saigon':'vi','Europe/Paris':'fr','Europe/Madrid':'es','America/Mexico_City':'es','America/Bogota':'es','America/Argentina/Buenos_Aires':'es','Europe/Berlin':'de','Europe/Vienna':'de','Europe/Zurich':'de'};l=T[z]||'en'}if(q&&L.indexOf(q)>-1)ls('aa-lang',q);d.lang=l;d.dataset.lang=l;if(l!=='en'){d.classList.add('i18n-wait');setTimeout(function(){d.classList.remove('i18n-wait')},1500)}var K=['a','b','c'],sq=P.get('skin'),sk=ls('aa-skin');if(sq&&K.indexOf(sq)>-1){sk=sq;ls('aa-skin',sq)}if(K.indexOf(sk)<0)sk='a';d.dataset.skin=sk;var tq=P.get('theme'),th=(tq==='dark'||tq==='light')?tq:ls('aa-theme');if(th!=='dark'&&th!=='light')th=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';d.dataset.theme=th;if(th==='dark')d.classList.add('dark');})()</script>`;
const ICON = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#18181B"/><path d="M16 7l2.2 6.8L25 16l-6.8 2.2L16 25l-2.2-6.8L7 16l6.8-2.2z" fill="#fff"/></svg>')}`;
const ASSET_V = String(Date.parse(UPDATED) || Date.now()).slice(-8);
function page({ title, desc, body, main, active, rel, pageData = null, home = null }) {
  const canonical = `${SITE}/${rel}`;
  return `<!doctype html><html lang="en" data-skin="a"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${canonical}">
<meta name="color-scheme" content="light dark"><meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#09090B" media="(prefers-color-scheme: dark)">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:type" content="website"><meta property="og:url" content="${canonical}">
<link rel="icon" href="${ICON}"><link rel="alternate" type="application/atom+xml" title="Agent Academy changes" href="${u('feed.xml')}"><link rel="alternate" type="text/plain" title="llms.txt" href="${u('llms.txt')}">
${HEAD_SCRIPT}<link rel="preload" href="${u('assets/fonts/geist-latin.woff2')}" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="${u('assets/site.css?v=' + ASSET_V)}"></head>
<body><a class="skip" href="#main" data-i="nav.skip">${t('nav.skip')}</a>${chrome.header(active)}
${main || `<main id="main" class="pg">${body}</main>`}
${chrome.footer()}
<script>window.AA=${JSON.stringify({ base: BASE, site: SITE, raw: RAW, updated: UPDATED, page: pageData })}</script>${home ? `<script>window.DIR=${JSON.stringify(home)}</script>` : ''}<script src="${u('assets/app.js?v=' + ASSET_V)}" defer></script><script src="${u('assets/engine.js?v=' + ASSET_V)}" defer></script></body></html>`;
}

// ---------------------------------------------------------------- shared fragments (Hub components: see DESIGN_NOTES §12 table)
const typeName = (k) => name('types', k);
const crumbs = (list) => `<nav class="crumbs" aria-label="Breadcrumb" data-mod="crumbs"><ol>${list.map(([h, label], n) => (n === list.length - 1 ? `<li><span aria-current="page">${label}</span></li>` : `<li><a href="${h}">${label}</a></li><li class="sep" role="presentation" aria-hidden="true">${ic('chev')}</li>`)).join('')}</ol></nav>`;
const pageHead = ({ trail, kicker = '', title, lede = '', extra = '', cls = '' }) => `<section class="p-head ${cls}" data-hero-highlight data-mod="page-head"><div class="p-bg" aria-hidden="true"><canvas class="p-flicker" data-flicker='{"squareSize":4,"gridGap":6,"flickerChance":0.2,"maxOpacity":0.16}'></canvas><div class="p-beams" data-bb-slot></div></div>
<div class="wrap p-head-in">${trail ? crumbs(trail) : ''}${kicker ? `<p class="p-kick">${kicker}</p>` : ''}<h1 class="p-title">${title}</h1>${lede ? `<p class="p-lede">${lede}</p>` : ''}${extra}</div></section>`;
const HOME = [u(), ti('nav.home')];
const sfTag = (on, y, n2, icn) => `<span class="sf ${on ? 'warn' : 'ok'}">${ic(on ? icn : 'shield')}${ti(on ? y : n2)}</span>`;
const tagsHTML = (i) => { const s = safety(i); return `<span class="rc-tags">${sfTag(s.cred, 'tag.cred_yes', 'tag.cred_no', 'key')}${sfTag(s.send, 'tag.send_yes', 'tag.send_no', 'send')}</span>`; };
const srcChip = (i) => i.type === 'skill' ? 'SKILL.md' : i.source === 'prompts.chat' ? 'prompts.chat · CC0' : i.source === 'botsdots' ? 'BotsDots' : i.source === 'mcp-registry' ? 'MCP Registry' : i.source === 'ui-hub' ? 'UI Hub' : '';
const card = (i, o = {}) => `<article class="rc" data-spotlight-card>
<div class="rc-top"><span class="rc-type">${txs('types', i.type)}</span>${o.chip && srcChip(i) ? `<span class="rc-chip">${esc(srcChip(i))}</span>` : `<span class="rc-ind">${txs('industries', i.industry)}</span>`}</div>
<h3 class="rc-t"><a href="${u('r/' + i.id + '/')}">${esc(i.title)}</a></h3>
<p class="rc-s" data-sid="${esc(i.id)}">${esc(sumOf(i))}</p>
<p class="rc-src"><span class="sr-only" data-i="card.source">${t('card.source')}</span>${esc(shortSrc(i.source_url))}</p>
<div class="rc-f">${tagsHTML(i)}<span class="rc-lic" title="${esc(i.license)}">${esc(licLabel(i))}</span></div></article>`;
const grid = (items, o = {}) => `<div class="rgrid${o.cls ? ' ' + o.cls : ''}" data-mod="${o.mod || 'cards'}">${items.map((i) => card(i, o)).join('')}</div>`;
const btn = (href, label, cls = 'btn btn-o', icn = '') => `<a class="${cls}" href="${href}">${icn ? ic(icn) : ''}${label}</a>`;
const roleCard = (ind, r) => { const c = COURSE_LIST.find((x) => x.id === `${ind}/${r}`); const n = STEP_KEYS.reduce((a, s) => a + c.steps[s].length, 0); const top = STEP_KEYS.flatMap((s) => c.steps[s]).find((x) => !/[\u3040-\u9fff\uac00-\ud7af]/.test(x.title)); return `<a class="rl" href="${u(`courses/${ind}/${r}/`)}" data-magic-card data-3d data-gsize="220"><span class="rl-in"><span class="rl-ic" data-z style="--z:40">${ic(IND_IC[ind] || 'book')}</span><b class="rl-t" data-z style="--z:30">${txs('roles', r)}</b><small class="rl-n" data-z style="--z:20">${nf(n)} ${ti('fac.items')} · 5 ${ti('course.steps')}</small>${top ? `<small class="rl-eg">${esc(top.title)}</small>` : ''}<span class="rl-go">${ti('course.open')}${ic('right')}</span></span></a>`; };
const IND_IC = { 'customer-service': 'headset', marketing: 'megaphone', design: 'palette', 'software-engineering': 'code', sales: 'briefcase', ecommerce: 'cart', 'data-research': 'chart', finance: 'wallet', legal: 'scale', product: 'box' };

// ---------------------------------------------------------------- LIBRARY + TEMPLATES (client-side filter over the search index)
const libLike = ({ kind, segKey, segs, selKey, selOpts, total, firstItems, chip }) => `<section class="wrap p-sec lib" data-lib="${kind}">
<form class="filters" id="lf" role="search" data-mod="filters">
<div class="fl-row"><label class="fl-q"><span class="sr-only" data-i="lib.search">${t('lib.search')}</span>${ic('search')}<input class="input" type="search" id="lf-q" placeholder="${esc(t('lib.search'))}" data-i-ph="lib.search" autocomplete="off"></label>
<label class="fl-sel"><span class="sr-only" data-i="${selKey === 'type' ? 'lib.type' : 'lib.prof'}">${t(selKey === 'type' ? 'lib.type' : 'lib.prof')}</span><select class="select" id="lf-sel" data-key="${selKey}"><option value="" data-i="${selKey === 'type' ? 'lib.all_types' : 'lib.all_prof'}">${t(selKey === 'type' ? 'lib.all_types' : 'lib.all_prof')}</option>${selOpts}</select></label>
<label class="chk"><input type="checkbox" id="lf-safe"><span class="chk-box" aria-hidden="true">${ic('check')}</span><span data-i="lib.safe_only">${t('lib.safe_only')}</span></label></div>
<div class="seg-group" role="group" aria-label="${esc(t(segKey === 'ind' ? 'lib.prof' : 'lib.type'))}" data-key="${segKey}">${segs}</div>
</form>
<h2 class="lib-count" aria-live="polite"><b id="lf-n">${nf(total)}</b> <span data-i="lib.results">${t('lib.results')}</span></h2>
<div class="rgrid" id="lf-grid" data-chip="${chip ? 1 : 0}" data-mod="cards">${firstItems.map((i) => card(i, { chip })).join('')}</div>
<div class="empty" id="lf-empty" hidden><p data-i="lib.empty">${t('lib.empty')}</p><button type="button" class="btn btn-o" id="lf-clear" data-i="lib.clear">${t('lib.clear')}</button></div>
<nav class="pager" id="lf-pager" aria-label="Pages" data-mod="pagination"></nav><div id="lf-icons" hidden>${['key', 'send', 'shield'].map((k) => `<span data-ic="${k}">${ic(k)}</span>`).join('')}</div></section>`;
const seg = (v, label, n2, on) => `<button type="button" class="seg" data-v="${v}" aria-pressed="${on ? 'true' : 'false'}">${label}${n2 !== null ? ` <em>${nf(n2)}</em>` : ''}</button>`;
{
  const segs = seg('', ti('lib.all'), LIVE.length, true) + Object.keys(TAX.industries).filter((k) => (byInd[k] || []).length).map((k) => seg(k, txs('industries', k), byInd[k].length, false)).join('');
  const selOpts = TYPES.filter((k) => stats.byType[k]).map((k) => `<option value="${k}" data-tx="types.${k}">${esc(typeName(k))}</option>`).join('');
  const body = pageHead({ trail: [HOME, [u('library/'), ti('nav.library')]], title: ti('lib.title'), lede: ti('lib.sub'), cls: 'p-head-sm' }) + libLike({ kind: 'library', segKey: 'ind', segs, selKey: 'type', selOpts, total: LIVE.length, firstItems: LIVE.slice().sort(sortQ).slice(0, 24) });
  write(DIST, 'library/index.html', page({ title: 'Library · Agent Academy', desc: t('lib.sub'), body, active: 'nav.library', rel: 'library/', pageData: { kind: 'library' } }));
}
const TPL_TYPES = ['skill', 'system-prompt', 'template'];
const TPL = LIVE.filter((i) => TPL_TYPES.includes(i.type));
{
  const segs = seg('', ti('lib.all'), TPL.length, true) + TPL_TYPES.map((k) => seg(k, `${txs('types', k)}<small class="seg-src">${k === 'skill' ? 'SKILL.md' : k === 'system-prompt' ? 'prompts.chat CC0' : 'BotsDots'}</small>`, TPL.filter((i) => i.type === k).length, false)).join('');
  const selOpts = Object.keys(TAX.industries).filter((k) => TPL.some((i) => i.industry === k)).map((k) => `<option value="${k}" data-tx="industries.${k}">${esc(name('industries', k))}</option>`).join('');
  const srcN = (f) => TPL.filter(f).length;
  const extra = `<div class="p-stats" data-mod="stats"><div><b data-ticker="${srcN((i) => i.type === 'skill')}">${nf(srcN((i) => i.type === 'skill'))}</b><span>SKILL.md</span></div><div><b data-ticker="${srcN((i) => i.source === 'prompts.chat')}">${nf(srcN((i) => i.source === 'prompts.chat'))}</b><span>prompts.chat · CC0</span></div><div><b data-ticker="${srcN((i) => i.source === 'botsdots')}">${nf(srcN((i) => i.source === 'botsdots'))}</b><span>BotsDots</span></div><div><b data-ticker="${srcN((i) => i.type === 'system-prompt' && i.source !== 'prompts.chat')}">${nf(srcN((i) => i.type === 'system-prompt' && i.source !== 'prompts.chat'))}</b><span>GitHub prompts</span></div></div>`;
  const body = pageHead({ trail: [HOME, [u('templates/'), ti('nav.templates')]], title: ti('tpl.title'), lede: ti('tpl.sub'), extra }) + libLike({ kind: 'templates', segKey: 'type', segs, selKey: 'ind', selOpts, total: TPL.length, firstItems: TPL.slice().sort(sortQ).slice(0, 24), chip: true });
  write(DIST, 'templates/index.html', page({ title: 'Template library · Agent Academy', desc: t('tpl.sub'), body, active: 'nav.templates', rel: 'templates/', pageData: { kind: 'templates', types: TPL_TYPES } }));
}

// ---------------------------------------------------------------- INDUSTRY pages + course (= role) pages
for (const ind of Object.keys(TAX.industries)) {
  const items = (byInd[ind] || []).slice().sort(sortQ); const open = OPEN.includes(ind);
  const rs = open ? rolesOf(ind) : [];
  const types = Object.entries(count(items, (i) => i.type)).sort((a, b) => b[1] - a[1]);
  const extra = `<p class="p-badges">${types.map(([k, n2]) => `<a class="badge-l" href="${u('library/?ind=' + ind + '&type=' + k)}">${txs('types', k)} <em>${n2}</em></a>`).join('')}</p>
<div class="p-stats" data-mod="stats"><div><b data-ticker="${items.length}">${nf(items.length)}</b>${ti('fac.items')}</div><div><b data-ticker="${rs.length}">${rs.length}</b>${ti('fac.roles')}</div><div><b data-ticker="${items.filter((i) => i.type === 'skill').length}">${items.filter((i) => i.type === 'skill').length}</b>${ti('h.skills')}</div><div><b data-ticker="${items.filter((i) => i.type === 'mcp').length}">${items.filter((i) => i.type === 'mcp').length}</b>${ti('stat.mcp')}</div></div>`;
  const body = pageHead({ trail: [HOME, [u('courses/'), ti('nav.courses')], [u('i/' + ind + '/'), txs('industries', ind)]], kicker: `<span class="badge-s ${open ? 'on' : ''}" data-i="${open ? 'fac.open' : 'fac.soon'}">${t(open ? 'fac.open' : 'fac.soon')}</span>`, title: txs('industries', ind), lede: open ? `<span data-x="goal.${ind}">${esc(COURSES.goals[ind])}</span>` : ti('course.soon'), extra })
  + (open ? `<section class="wrap p-sec"><div class="p-sh"><h2 class="p-h2">${ti('course.roles')}</h2><p>${ti('ind.roles_s')}</p></div><div class="roles" data-hover-effect data-mod="roles">${rs.map((r) => roleCard(ind, r)).join('')}</div></section>` : '')
  + `<section class="wrap p-sec"><div class="p-sh row"><h2 class="p-h2">${ti('ind.top')}</h2>${btn(u('library/?ind=' + ind), `${ti('nav.library')} · ${nf(items.length)}`, 'btn btn-o', '')}</div>${grid(items.slice(0, 24))}</section>`;
  write(DIST, `i/${ind}/index.html`, page({ title: `${name('industries', ind)} · Agent Academy`, desc: open ? COURSES.goals[ind] : t('course.soon'), body, active: 'nav.courses', rel: `i/${ind}/` }));
}
const stepGrid = (items) => (items.length <= 6 ? grid(items) : grid(items.slice(0, 6)) + `<details class="more-d"><summary class="btn btn-o">${tn('course.more', items.length - 6)}${ic('chev')}</summary>${grid(items.slice(6))}</details>`);
for (const c of COURSE_LIST) {
  const n = STEP_KEYS.reduce((a, s) => a + c.steps[s].length, 0);
  const extra = `<div class="alert" role="note" data-mod="alert">${ic('shield')}<div><b data-i="course.perm">${t('course.perm')}</b><p data-x="perm.${c.industry}">${esc(COURSES.permissions[c.industry])}</p></div></div>
<div class="p-actions" data-mod="buttons">${btn(courseRaw(c), ti('course.raw'), 'btn btn-p', 'doc')}${btn(u(`packs/${c.industry}/${c.role}.zip`), ti('course.pack'), 'btn btn-o', 'zip')}${btn(courseJsonRaw(c), 'JSON', 'btn btn-o', 'json')}<button type="button" class="btn btn-g" data-copy="${esc(courseRaw(c))}">${ic('copy')}${ti('course.copy_url')}</button></div>
<div class="p-stats" data-mod="stats"><div><b data-ticker="${n}">${n}</b>${ti('fac.items')}</div><div><b>5</b>${ti('course.steps')}</div><div><b data-ticker="${COURSES.checklists[c.industry].length}">${COURSES.checklists[c.industry].length}</b>${ti('course.checks')}</div></div>`;
  const step = (s, k) => `<div class="tml-item" data-mod="timeline-item"><div class="tml-l"><span class="tml-dot">${k + 1}</span><h2 class="tml-t">${ti('step.' + s)}</h2></div><div class="tml-r"><h2 class="tml-t-m">${ti('step.' + s)}</h2><p class="tml-d">${ti('step.' + s + '.d')}</p>
${s === '2-pick-direction' && c.industry === 'design' ? `<div class="styles"><h3 class="p-h3">${ti('course.styles')}</h3><p class="p-badges">${STYLES.map((x) => `<a class="badge-l" href="https://siinxu.github.io/ui-resource-hub/">${esc(x.k)} <em>${x.n}</em></a>`).join('')}</p></div>` : ''}
${s === '4-do-it' && c.industry === 'design' ? `<a class="case-link" href="${u('cases/' + CASE_ID + '/')}">${ic('doc')}<span data-i="case.h">${t('case.h')}</span>${ic('right')}</a>` : ''}
${stepGrid(c.steps[s])}
${s === '5-self-check' ? `<h3 class="p-h3">${ti('course.checklist')}</h3><ul class="checklist" data-mod="checklist">${COURSES.checklists[c.industry].map((x, k2) => `<li><label class="chk"><input type="checkbox"><span class="chk-box" aria-hidden="true">${ic('check')}</span><span data-x="check.${c.industry}.${k2}">${esc(x)}</span></label></li>`).join('')}</ul>` : ''}</div></div>`;
  const body = pageHead({ trail: [HOME, [u('courses/'), ti('nav.courses')], [u('i/' + c.industry + '/'), txs('industries', c.industry)], [u(`courses/${c.id}/`), txs('roles', c.role)]], kicker: `${ti('course.title')} · ${txs('industries', c.industry)}`, title: txs('roles', c.role), lede: `<span data-x="goal.${c.industry}">${esc(COURSES.goals[c.industry])}</span>`, extra })
  + `<section class="wrap p-sec"><div class="tml" data-timeline data-mod="timeline"><div class="tml-line" aria-hidden="true"><i></i></div>${STEP_KEYS.map(step).join('')}</div></section>`;
  write(DIST, `courses/${c.industry}/${c.role}/index.html`, page({ title: `${name('roles', c.role)} · ${name('industries', c.industry)} · Agent Academy`, desc: COURSES.goals[c.industry], body, active: 'nav.courses', rel: `courses/${c.industry}/${c.role}/` }));
}
{
  const body = pageHead({ trail: [HOME, [u('courses/'), ti('nav.courses')]], title: ti('nav.courses'), lede: ti('path.sub') })
  + `<section class="wrap p-sec"><div class="pbento" data-mod="bento">${OPEN.map((ind) => `<article class="pb-card"><div class="pb-h"><span class="pb-ic">${ic(IND_IC[ind])}</span><div><h2 class="p-h2"><a href="${u('i/' + ind + '/')}">${txs('industries', ind)}</a></h2><small>${nf((byInd[ind] || []).length)} ${ti('fac.items')} · ${rolesOf(ind).length} ${ti('fac.roles')}</small></div></div><p class="pb-goal" data-x="goal.${ind}">${esc(COURSES.goals[ind])}</p><ul class="pb-roles">${rolesOf(ind).map((r) => `<li><a href="${u(`courses/${ind}/${r}/`)}">${txs('roles', r)}${ic('right')}</a></li>`).join('')}</ul></article>`).join('')}
<article class="pb-card pb-soon"><div class="pb-h"><span class="pb-ic">${ic('layers')}</span><div><h2 class="p-h2">${ti('fac.soon')}</h2><small>${ti('h.soon_d')}</small></div></div><ul class="pb-roles">${Object.keys(TAX.industries).filter((k) => !OPEN.includes(k)).map((k) => `<li><a href="${u('i/' + k + '/')}">${txs('industries', k)}<em>${(byInd[k] || []).length}</em></a></li>`).join('')}</ul></article></div>
<div class="p-sh"><h2 class="p-h2">${ti('path.title')}</h2></div><ol class="steps5">${STEP_KEYS.map((s, k) => `<li><span class="tml-dot">${k + 1}</span><b>${ti('step.' + s)}</b><p>${ti('step.' + s + '.d')}</p></li>`).join('')}</ol></section>`;
  write(DIST, 'courses/index.html', page({ title: 'Courses · Agent Academy', desc: t('path.sub'), body, active: 'nav.courses', rel: 'courses/' }));
}

// ---------------------------------------------------------------- RESOURCE detail pages + md + json
const related = (i) => (byInd[i.industry] || []).filter((x) => x.id !== i.id && x.roles.some((r) => i.roles.includes(r))).sort(sortQ).slice(0, 6);
for (const i of ALL) {
  const mirrorP = path.join(ROOT, 'data/mirror', i.id + '.md');
  const mirror = i.redistributable && fs.existsSync(mirrorP) ? fs.readFileSync(mirrorP, 'utf8') : null;
  const rows = [['card.license', esc(i.license)], ['r.policy', ti(i.redistributable ? 'r.policy_mirror' : 'r.policy_link')], ['r.author', esc(i.author)], ['r.roles', i.roles.map((r) => txs('roles', r)).join(', ')], ['r.step', i.course_step ? ti('step.' + i.course_step) : null], ['r.stars', i.metrics?.repo_stars ? nf(i.metrics.repo_stars) : null], ['r.first', i.first_seen?.slice(0, 10)], ['r.updated', i.updated_at?.slice(0, 10)], ['r.checked', i.checked_at ? `${i.checked_at.slice(0, 10)} (HTTP ${i.http_status?.source})` : null]].filter(([, v]) => v !== null && v !== undefined && v !== '');
  const sf = i.security || {};
  const extra = `<div class="p-badges">${tagsHTML(i)}${i.status !== 'active' ? `<span class="sf warn">${esc(i.status)}</span>` : ''}</div>
<div class="p-actions" data-mod="buttons">${btn(esc(i.source_url), ti('r.open'), 'btn btn-p', 'ext')}<button type="button" class="btn btn-o" data-copy="${esc(i.source_url)}">${ic('copy')}${ti('r.copy_link')}</button></div>
<p class="url-l"><code class="url">${esc(i.source_url)}</code></p>`;
  const body = pageHead({ trail: [HOME, [u('library/'), ti('nav.library')], [u('i/' + i.industry + '/'), txs('industries', i.industry)], [u('r/' + i.id + '/'), esc(i.title)]], kicker: txs('types', i.type), title: esc(i.title), lede: `<span data-sid="${esc(i.id)}">${esc(sumOf(i))}</span>`, extra, cls: 'p-head-d' })
  + `<section class="wrap p-sec d-grid"><div class="d-main">
${sf.credential_names?.length ? `<div class="alert warn" role="note">${ic('key')}<div><b data-i="r.creds">${t('r.creds')}</b><p><code>${esc(sf.credential_names.join(', '))}</code></p></div></div>` : ''}
${i.install ? `<div class="cbk" data-mod="code-block"><div class="cbk-h"><span>${ti('card.install')}</span><button type="button" class="btn btn-g btn-sm" data-copy="${esc(i.install)}">${ic('copy')}${ti('r.copy')}</button></div><pre><code>${esc(i.install)}</code></pre></div>` : ''}
${mirror ? `<details class="acc" data-mod="accordion"><summary><span>${ti('r.mirror')} · ${esc(i.license)}</span>${ic('chev')}</summary><div class="acc-b"><p class="muted" data-i="r.mirror_note">${t('r.mirror_note')}</p><pre>${esc(mirror.slice(0, 60000))}</pre></div></details>` : `<div class="alert" role="note">${ic('ext')}<div><b data-i="r.policy_link">${t('r.policy_link')}</b><p data-i="r.link_only">${t('r.link_only')}</p></div></div>`}
</div><aside class="d-side"><div class="tbl-card" data-mod="table"><table class="meta"><tbody>${rows.map(([k, v]) => `<tr><th scope="row" data-i="${k}">${t(k)}</th><td>${v}</td></tr>`).join('')}</tbody></table></div>
<div class="d-agent"><h2 class="p-h3">${ti('nav.agents')}</h2>${btn(u('api/resources/' + i.id + '.json'), ti('r.json'), 'btn btn-o btn-sm', 'json')}${btn(u('r/' + i.id + '.md'), ti('r.md'), 'btn btn-o btn-sm', 'doc')}${resRaw(i) ? btn(resRaw(i), ti('r.raw'), 'btn btn-o btn-sm', 'doc') : ''}</div></aside></section>
${related(i).length ? `<section class="wrap p-sec"><div class="p-sh"><h2 class="p-h2">${ti('r.related')}</h2></div>${grid(related(i))}</section>` : ''}`;
  const tr = Object.fromEntries(LOCALES.filter((l) => l !== 'en' && L10N[l][i.id]).map((l) => [l, L10N[l][i.id].s]));
  write(DIST, `r/${i.id}/index.html`, page({ title: `${i.title} · Agent Academy`, desc: (i.summary_source || i.title).slice(0, 160), body, active: 'nav.library', rel: `r/${i.id}/`, pageData: { kind: 'resource', sum: { [i.id]: tr }, lang: i.summary_lang } }));
  write(DIST, `r/${i.id}.md`, `# ${i.title}\n\n- type: ${i.type}\n- industry: ${i.industry}\n- roles: ${i.roles.join(', ')}\n- source: ${i.source_url}\n- license: ${i.license} (${i.content_policy})\n${i.install ? `- install: ${i.install}\n` : ''}- needs_credentials: ${!!sf.needs_credentials}\n- writes_external: ${!!sf.writes_external}\n- updated_at: ${i.updated_at}\n\n${i.summary_source || ''}\n${mirror ? `\n---\n\nMirrored from ${i.source_url} under ${i.license}. The original is authoritative.\n\n${mirror}` : ''}`);
  write(DIST, `api/resources/${i.id}.json`, JSON.stringify(resJSON(i)));
}

// ---------------------------------------------------------------- CASE page
const caseMd = (l) => { const p = path.join(ROOT, `content/cases/${CASE_ID}.${l}.md`); return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null; };
function md2html(md) {
  const lines = md.replace(/\r/g, '').split('\n'); let out = ''; let inList = null; let inCode = false; let tbl = [];
  const inline = (s) => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\[([^\]]+)\]\((https?:[^)\s]+|\/[^)\s]*)\)/g, (m, a, h) => `<a href="${h.startsWith('/') ? u(h) : h}">${a}</a>`);
  const flushT = () => { if (!tbl.length) return; const rows = tbl.filter((r) => !/^\|\s*-/.test(r)).map((r) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim())); out += `<div class="tbl-card"><table><thead><tr>${rows[0].map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`; tbl = []; };
  const closeL = () => { if (inList) { out += `</${inList}>`; inList = null; } };
  for (const ln of lines) {
    if (ln.startsWith('```')) { closeL(); flushT(); out += inCode ? '</code></pre>' : '<pre><code>'; inCode = !inCode; continue; }
    if (inCode) { out += esc(ln) + '\n'; continue; }
    if (ln.startsWith('|')) { closeL(); tbl.push(ln); continue; } else flushT();
    let m;
    if ((m = ln.match(/^(#{1,4})\s+(.*)/))) { closeL(); const h = Math.min(4, m[1].length + 1); out += `<h${h}>${inline(m[2])}</h${h}>`; }
    else if ((m = ln.match(/^\s*[-*]\s+(.*)/))) { if (inList !== 'ul') { closeL(); out += '<ul>'; inList = 'ul'; } out += `<li>${inline(m[1])}</li>`; }
    else if ((m = ln.match(/^\s*\d+\.\s+(.*)/))) { if (inList !== 'ol') { closeL(); out += '<ol>'; inList = 'ol'; } out += `<li>${inline(m[1])}</li>`; }
    else if ((m = ln.match(/^!\[([^\]]*)\]\(([^)]+)\)/))) { closeL(); out += `<figure><img src="${m[2].startsWith('/') ? u(m[2]) : m[2]}" alt="${esc(m[1])}" loading="lazy" decoding="async" width="1440" height="900"><figcaption>${esc(m[1])}</figcaption></figure>`; }
    else if (ln.trim() === '') closeL();
    else { closeL(); out += `<p>${inline(ln)}</p>`; }
  }
  closeL(); flushT(); return out;
}
{
  const versions = Object.fromEntries(LOCALES.map((l) => [l, caseMd(l)]).filter(([, v]) => v));
  const body = pageHead({ trail: [HOME, [u('courses/design/ui-designer/'), txs('roles', 'ui-designer')], [u(`cases/${CASE_ID}/`), ti('case.title')]], kicker: ti('case.title'), title: ti('case.h'), lede: ti('case.sub') })
  + `<article class="wrap p-sec prose-wrap" data-mod="prose">${Object.entries(versions).map(([l, md]) => `<div class="prose" data-only="${l}"${l === 'en' ? '' : ' hidden'}>${md2html(md)}</div>`).join('')}
<p class="muted">Raw: <a class="url" href="${RAW}/content/cases/${CASE_ID}.en.md">${RAW}/content/cases/${CASE_ID}.en.md</a></p></article>`;
  write(DIST, `cases/${CASE_ID}/index.html`, page({ title: 'How this site was designed by an agent · Agent Academy', desc: t('case.sub'), body, active: 'nav.courses', rel: `cases/${CASE_ID}/`, pageData: { kind: 'case', langs: Object.keys(versions) } }));
}
// ---------------------------------------------------------------- changes, latest (+ trending), changelog, sources
const changeFiles = fs.existsSync(path.join(ROOT, 'data/changes')) ? fs.readdirSync(path.join(ROOT, 'data/changes')).filter((f) => f.endsWith('.json')).sort().reverse() : [];
const days = changeFiles.map((f) => readJSON('data/changes/' + f));
const since = new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10);
const recent = days.filter((d) => d.date >= since).flatMap((d) => d.items.map((x) => ({ ...x, url: `${SITE}/r/${x.id}/` })));
write(DIST, 'api/changes.json', JSON.stringify({ generated_at: UPDATED, since, count: recent.length, items: recent }));
for (const d of days) write(DIST, `api/changes/${d.date}.json`, JSON.stringify({ ...d, items: d.items.map((x) => ({ ...x, url: `${SITE}/r/${x.id}/` })) }));
const byId = Object.fromEntries(ALL.map((i) => [i.id, i]));
const feedItems = recent.slice(0, 200);
write(DIST, 'feed.xml', `<?xml version="1.0" encoding="utf-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom"><title>Agent Academy changes</title><id>${SITE}/</id><link href="${SITE}/"/><link rel="self" href="${SITE}/feed.xml"/><updated>${UPDATED}</updated>\n${feedItems.map((x) => { const i = byId[x.id]; return `<entry><id>${SITE}/r/${x.id}/#${x.at}-${x.op}</id><title>${esc(`${x.op}: ${i ? i.title : x.id}`)}</title><link href="${SITE}/r/${x.id}/"/><updated>${x.at}</updated><summary>${esc(`${x.type} · ${x.industry}${x.fields_changed?.length ? ' · ' + x.fields_changed.join(', ') : ''}${i ? ' · ' + i.source_url : ''}`)}</summary></entry>`; }).join('\n')}\n</feed>\n`);
write(DIST, 'feed.json', JSON.stringify({ version: 'https://jsonfeed.org/version/1.1', title: 'Agent Academy changes', home_page_url: `${SITE}/`, feed_url: `${SITE}/feed.json`, items: feedItems.map((x) => { const i = byId[x.id]; return { id: `${x.id}#${x.at}-${x.op}`, url: `${SITE}/r/${x.id}/`, title: `${x.op}: ${i ? i.title : x.id}`, content_text: i ? `${i.summary_source || ''}\nSource: ${i.source_url}` : x.op, date_published: x.at, tags: [x.op, x.type, x.industry] }; }) }));
const isLive = (x) => byId[x.id] && LIVE.includes(byId[x.id]);
const feedLinks = `<p class="p-badges">${[['feed.xml', 'Atom'], ['feed.json', 'JSON Feed'], ['api/changes.json', 'api/changes.json']].map(([h, l]) => `<a class="badge-l" href="${u(h)}">${ic('rss')}${l}</a>`).join('')}</p>`;
{
  const newest = days.slice(0, 7).map((d) => { const its = d.items.filter(isLive).map((x) => byId[x.id]).sort(sortQ); return `<div class="day"><h3 class="p-h3"><time class="ts" datetime="${d.date}T12:00:00Z">${d.date}</time> <em>${tn('lt.n_items', d.items.length)}</em></h3>${grid(its.slice(0, 24))}${its.length > 24 ? `<p class="more">${btn(u('changelog/#d-' + d.date), `${ti('nav.changelog')} · +${nf(its.length - 24)}`)}</p>` : ''}</div>`; }).join('');
  const recentIds = new Set(recent.map((x) => x.id));
  const trending = LIVE.filter((i) => recentIds.has(i.id) && stars(i) > 0).sort((a, b) => stars(b) - stars(a)).slice(0, 24);
  const body = pageHead({ trail: [HOME, [u('latest/'), ti('nav.latest')]], title: ti('new.title'), lede: ti('new.sub'), extra: feedLinks })
  + `<section class="wrap p-sec"><div class="tabs" data-tabs data-mod="tabs"><div class="tabs-l" role="tablist" aria-label="${esc(t('nav.latest'))}"><button type="button" role="tab" id="tab-new" aria-controls="tp-new" aria-selected="true">${ic('rss')}${ti('lt.newest')}</button><button type="button" role="tab" id="tab-trend" aria-controls="tp-trend" aria-selected="false" tabindex="-1">${ic('star')}${ti('lt.trending')}</button></div>
<div role="tabpanel" id="tp-new" aria-labelledby="tab-new">${newest || `<p class="muted">${ti('lib.empty')}</p>`}</div>
<div role="tabpanel" id="tp-trend" aria-labelledby="tab-trend" hidden><p class="muted">${ti('lt.trending_s')}</p><ol class="trend" data-mod="trend">${trending.map((i, k) => `<li><span class="tr-n">${k + 1}</span>${card(i)}<span class="tr-s">${ic('star')}${nf(stars(i))}</span></li>`).join('')}</ol></div></div></section>`;
  write(DIST, 'latest/index.html', page({ title: 'Latest · Agent Academy', desc: t('new.sub'), body, active: 'nav.latest', rel: 'latest/' }));
}
{
  const opCls = { added: 'add', updated: 'upd', removed: 'rem', dead: 'rem' };
  const dayBlock = (d) => {
    const byOp = count(d.items, (x) => x.op); const rows = d.items.slice(0, 80);
    return `<div class="tml-item" id="d-${d.date}"><div class="tml-l"><span class="tml-dot">${ic('layers')}</span><h2 class="tml-t"><time class="ts" datetime="${d.date}T12:00:00Z">${d.date}</time></h2></div><div class="tml-r"><h2 class="tml-t-m"><time class="ts" datetime="${d.date}T12:00:00Z">${d.date}</time></h2>
<p class="p-badges">${Object.entries(byOp).map(([op, n2]) => `<span class="op op-${opCls[op] || 'upd'}">${ti('op.' + op)} <em>${nf(n2)}</em></span>`).join('')}<a class="badge-l" href="${u('api/changes/' + d.date + '.json')}">${ic('json')}JSON</a></p>
<div class="tbl-card" data-mod="table"><table class="chg"><thead><tr><th>${ti('chg.op')}</th><th>${ti('lib.type')}</th><th>${ti('chg.item')}</th><th>${ti('lib.prof')}</th></tr></thead><tbody>${rows.map((x) => { const i = byId[x.id]; return `<tr><td><span class="op op-${opCls[x.op] || 'upd'}">${ti('op.' + x.op)}</span></td><td>${txs('types', x.type)}</td><td>${i ? `<a href="${u('r/' + x.id + '/')}">${esc(i.title)}</a>` : esc(x.id)}${x.fields_changed?.length ? `<small>${esc(x.fields_changed.join(', '))}</small>` : ''}</td><td>${txs('industries', x.industry)}</td></tr>`; }).join('')}</tbody></table></div>
${d.items.length > rows.length ? `<p class="more">${btn(u('api/changes/' + d.date + '.json'), `+${nf(d.items.length - rows.length)} · JSON`)}</p>` : ''}</div></div>`;
  };
  const body = pageHead({ trail: [HOME, [u('changelog/'), ti('nav.changelog')]], title: ti('chg.title'), lede: ti('chg.sub'), extra: feedLinks })
  + `<section class="wrap p-sec"><div class="tml" data-timeline data-mod="timeline"><div class="tml-line" aria-hidden="true"><i></i></div>${days.slice(0, 30).map(dayBlock).join('') || `<p class="muted">—</p>`}</div></section>`;
  write(DIST, 'changelog/index.html', page({ title: 'Changelog · Agent Academy', desc: t('chg.sub'), body, active: 'nav.changelog', rel: 'changelog/' }));
}
const SOURCES = [
  ['github', 'GitHub', 'anthropics/knowledge-work-plugins, anthropics/skills, wshobson/agents, coreyhaines31/marketingskills, Leonxlnx/taste-skill, emilkowalski/skills, nextlevelbuilder/ui-ux-pro-max-skill, pbakaus/impeccable, VoltAgent/awesome-claude-code-subagents, google/adk-recipes, sierra-research/tau2-bench, Shubhamsaboo/awesome-llm-apps', 'MIT / Apache-2.0 / CC0 / CC-BY: text mirrored with attribution; anything else link-only (per-skill LICENSE checked for anthropics/skills and partner folders).', 'GitHub REST git trees + raw files; blob SHA decides whether a file is re-read.'],
  ['mcp-registry', 'MCP Registry', 'registry.modelcontextprotocol.io', 'Registry metadata with attribution; server code license from its own repository; never mirrored.', 'REST search with version=latest, one query per profession keyword.'],
  ['prompts.chat', 'prompts.chat', 'f/prompts.chat', 'Prompt data is CC0-1.0: mirrored with author credit.', 'Public JSON API, full pass, filtered by profession keywords.'],
  ['ui-hub', 'UI Resource Hub', 'siinxu.github.io/ui-resource-hub', 'Aggregator: links and short notes only; each item keeps its own source URL.', 'api/resources.json, non-component items (skills, systems, specs, libraries, tutorials, tools).'],
  ['botsdots', 'BotsDots', 'botsdots.site', 'Catalog compilation CC0; templates belong to their creators: link-only.', 'catalog.json, filtered by profession keywords.'],
  ['seed', 'Seed list', 'site-plan', 'Per item, as listed.', 'Checked by hand on 2026-10-15.'],
];
{
  const body = pageHead({ trail: [HOME, [u('sources/'), ti('nav.sources')]], title: ti('src.title'), lede: ti('src.sub') })
  + `<section class="wrap p-sec"><div class="src-grid" data-mod="bento">${SOURCES.map(([k, n2, where, rule, how]) => `<article class="src-c" data-spotlight-card><div class="src-h"><h2 class="p-h3">${esc(n2)}</h2><b class="src-n" data-ticker="${stats.bySource[k] || 0}">${nf(stats.bySource[k] || 0)}</b></div><p class="src-w">${esc(where)}</p><dl><div><dt>${ti('src.rule')}</dt><dd>${esc(rule)}</dd></div><div><dt>${ti('src.how')}</dt><dd>${esc(how)}</dd></div></dl><a class="src-l" href="${u('library/?q=')}" hidden></a></article>`).join('')}</div>
<p class="muted">Collector: <a href="https://github.com/${REPO}/blob/main/scripts/collect.py">scripts/collect.py</a> · <span data-i="src.last">${t('src.last')}</span> <time class="ts" datetime="${esc(STATE.last_collect || UPDATED)}">${esc((STATE.last_collect || UPDATED).slice(0, 10))}</time></p></section>`;
  write(DIST, 'sources/index.html', page({ title: 'Sources · Agent Academy', desc: t('src.sub'), body, active: 'nav.sources', rel: 'sources/' }));
}

// ---------------------------------------------------------------- AGENT ENDPOINTS
const searchIndex = LIVE.map((i) => ({ id: i.id, t: i.title, ty: i.type, in: i.industry, ro: i.roles, s: sumOf(i).slice(0, 220), h: shortSrc(i.source_url), li: licLabel(i), c: safety(i).cred ? 1 : 0, w: safety(i).send ? 1 : 0, q: stars(i), sr: i.source }));
write(DIST, 'api/search-index.json', JSON.stringify({ updated_at: UPDATED, fields: { id: 'id', t: 'title', ty: 'type', in: 'industry', ro: 'roles', s: 'summary (en/source)', h: 'source host+path', li: 'license', c: 'needs_credentials', w: 'writes_external', q: 'quality signal (stars/votes/score)', sr: 'collector source' }, items: searchIndex }));
for (const l of LOCALES.filter((x) => x !== 'en')) write(DIST, `api/l10n/${l}.json`, JSON.stringify(Object.fromEntries(Object.entries(L10N[l]).filter(([k]) => !k.startsWith('_')).map(([k, v]) => [k, v.s]))));
write(DIST, 'api/l10n/texts.json', JSON.stringify(Object.fromEntries(LOCALES.filter((x) => x !== 'en').map((l) => [l, Object.fromEntries(Object.entries(L10N[l]._texts || {}).map(([k, v]) => [k, v.s]))]))));
write(DIST, 'api/resources.json', JSON.stringify({ updated_at: UPDATED, count: ALL.length, items: ALL.map(resJSON) }));
for (const ind of Object.keys(TAX.industries)) write(DIST, `api/resources/by-industry/${ind}.json`, JSON.stringify({ industry: ind, updated_at: UPDATED, items: (byInd[ind] || []).map(resJSON) }));
write(DIST, 'api/taxonomy.json', JSON.stringify({ industries: Object.fromEntries(Object.entries(TAX.industries).map(([k, v]) => [k, { names: Object.fromEntries(LOCALES.map((l) => [l, v[l]])), open: !!v.open, count: stats.byIndustry[k] || 0, roles: rolesOf(k) }])), roles: TAX.roles, types: TAX.types }, null, 1));
for (const c of COURSE_LIST) write(DIST, `api/courses/${c.industry}/${c.role}.json`, fs.readFileSync(path.join(ROOT, `academy/courses/${c.industry}/${c.role}.json`)));
write(DIST, 'api/index.json', JSON.stringify({ name: 'Agent Academy', version: UPDATED.slice(0, 10), updated_at: UPDATED, etag: String(ALL.length) + '-' + UPDATED, counts: stats, locales: LOCALES,
  endpoints: { llms: `${SITE}/llms.txt`, llms_full: `${SITE}/llms-full.txt`, agent: `${SITE}/agent.md`, taxonomy: `${SITE}/api/taxonomy.json`, resources: `${SITE}/api/resources.json`, resource: `${SITE}/api/resources/{id}.json`, by_industry: `${SITE}/api/resources/by-industry/{industry}.json`, search_index: `${SITE}/api/search-index.json`, courses: COURSE_LIST.map((c) => ({ id: c.id, json: `${SITE}/api/courses/${c.id}.json`, raw_md: courseRaw(c), pack: `${SITE}/packs/${c.id}.zip` })), changes: `${SITE}/api/changes.json`, changes_by_day: `${SITE}/api/changes/{YYYY-MM-DD}.json`, atom: `${SITE}/feed.xml`, json_feed: `${SITE}/feed.json`, l10n: `${SITE}/api/l10n/{locale}.json` } }, null, 1));
const llms = `# Agent Academy\n\n> A school your agents can read: real skills, prompts, MCP servers, bot templates and workflows sorted by profession, each with its original source link, license and safety tags. Data updated ${UPDATED}.\n\nStart here: ${SITE}/agent.md\n\n## Endpoints\n- [Index](${SITE}/api/index.json): counts, version, every endpoint\n- [Taxonomy](${SITE}/api/taxonomy.json): industries -> roles\n- [Search index](${SITE}/api/search-index.json): compact list for local search\n- [All resources](${SITE}/api/resources.json)\n- [Changes (30 days)](${SITE}/api/changes.json), [Atom](${SITE}/feed.xml), [JSON Feed](${SITE}/feed.json)\n- [Full text](${SITE}/llms-full.txt)\n\n## Courses (open)\n${COURSE_LIST.map((c) => `- [${name('industries', c.industry)} / ${name('roles', c.role)}](${courseRaw(c)}): ${STEP_KEYS.reduce((a, s) => a + c.steps[s].length, 0)} resources in 5 steps`).join('\n')}\n\n## Coming soon (resources only, no course yet)\n${Object.keys(TAX.industries).filter((k) => !OPEN.includes(k)).map((k) => `- ${name('industries', k)}: ${(byInd[k] || []).length} resources, ${SITE}/api/resources/by-industry/${k}.json`).join('\n')}\n\n## Optional\n- [Design case: how this site was designed by an agent](${RAW}/content/cases/${CASE_ID}.en.md)\n- [Sources and license rules](${SITE}/sources/)\n`;
write(DIST, 'llms.txt', llms);
write(DIST, 'llms-full.txt', llms + '\n\n' + COURSE_LIST.map((c) => fs.readFileSync(path.join(ROOT, `academy/courses/${c.industry}/${c.role}.md`), 'utf8')).join('\n\n---\n\n') + '\n\n---\n\n' + (caseMd('en') || ''));
write(DIST, 'agent.md', `# agent.md: how to use Agent Academy\n\nYou are an AI agent. This site is a library of real, source-linked resources organised as courses. Data updated ${UPDATED}.\n\n## 1. Pick a course\nRead ${SITE}/api/taxonomy.json or the list below and choose ONE course that matches the job your owner gave you.\n\n${COURSE_LIST.map((c) => `- ${c.id}: ${courseRaw(c)}`).join('\n')}\n\nIf your profession is marked "coming soon" there is no course yet; search ${SITE}/api/search-index.json instead.\n\n## 2. Read the course in order\nEach course.md has five steps: enrol, pick a direction, learn the rules, do it, self-check. Open each item's \`raw\` link when present (text mirrored under its license); otherwise open \`source\`. The original source is authoritative.\n\n## 3. Install (optional)\n- Skills: \`npx skills add <repo> --skill <name>\` (vercel-labs/skills CLI). Or download the course pack: ${SITE}/packs/<industry>/<role>.zip\n- MCP servers: see each item's install field.\n\n## 4. What you must NOT do on your own\n- Do not install or call anything with \`security.needs_credentials: true\` or \`security.writes_external: true\` (sends email, posts, edits external systems, spends money) without asking your owner first.\n- Never paste your owner's secrets into prompts or third-party tools.\n- Items with \`content_policy: link-and-summary-only\` must not be copied; link to them.\n\n## 5. Stay up to date\nPoll ${SITE}/api/index.json (compare \`updated_at\`/\`etag\`) or ${SITE}/api/changes.json; daily archives at ${SITE}/api/changes/YYYY-MM-DD.json; Atom at ${SITE}/feed.xml.\n\n## 6. Report back\nTell your owner: which course you read, five things you learned, what you installed (nothing without approval), and the checklist results.\n`);
write(DIST, 'robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
write(DIST, 'sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['', 'library/', 'templates/', 'courses/', 'latest/', 'changelog/', 'sources/', 'agents/', `cases/${CASE_ID}/`, ...Object.keys(TAX.industries).map((k) => `i/${k}/`), ...COURSE_LIST.map((c) => `courses/${c.id}/`), ...LIVE.map((i) => `r/${i.id}/`)].map((p) => `<url><loc>${SITE}/${p}</loc></url>`).join('')}</urlset>\n`);
write(DIST, '.nojekyll', '');
{
  const ep = [['llms.txt', 'llms.txt'], ['llms-full.txt', 'llms-full.txt'], ['agent.md', 'agent.md'], ['api/index.json', 'api/index.json'], ['api/taxonomy.json', 'api/taxonomy.json'], ['api/search-index.json', 'api/search-index.json'], ['api/resources.json', 'api/resources.json'], ['api/changes.json', 'api/changes.json'], ['feed.xml', 'feed.xml'], ['feed.json', 'feed.json']].map(([p, l]) => [l, `${SITE}/${p}`]).concat(COURSE_LIST.map((c) => [c.id, courseRaw(c)]));
  const body = pageHead({ trail: [HOME, [u('agents/'), ti('nav.agents')]], title: ti('agents.title'), lede: ti('agents.sub') })
  + `<section class="wrap p-sec"><div class="tbl-card" data-mod="table"><table class="ep"><tbody>${ep.map(([l, url]) => `<tr><th scope="row">${esc(l)}</th><td><a class="url" href="${url}">${esc(url)}</a></td><td><button type="button" class="btn btn-g btn-sm" data-copy="${esc(url)}">${ic('copy')}${ti('r.copy')}</button></td></tr>`).join('')}</tbody></table></div>
<div class="p-sh"><h2 class="p-h2">MCP (stdio, read-only)</h2><p>${ti('agents.mcp')} <a href="https://github.com/${REPO}/tree/main/mcp">mcp/</a> · list_courses, get_course, search_resources, get_resource, get_changes</p></div>
<div class="cbk" data-mod="code-block"><div class="cbk-h"><span>mcp.json</span><button type="button" class="btn btn-g btn-sm" data-copy='{ "mcpServers": { "agent-academy": { "command": "node", "args": ["mcp/server.mjs"] } } }'>${ic('copy')}${ti('r.copy')}</button></div><pre><code>{ "mcpServers": { "agent-academy": { "command": "node", "args": ["mcp/server.mjs"] } } }</code></pre></div></section>`;
  write(DIST, 'agents/index.html', page({ title: 'For agents · Agent Academy', desc: t('agents.sub'), body, active: 'nav.agents', rel: 'agents/' }));
}
write(DIST, '404.html', page({ title: 'Not found · Agent Academy', desc: 'Not found', active: '', rel: '404.html', body: `<section class="wrap p-sec nf"><div class="nf-c" data-mod="empty"><span class="nf-n">404</span><h1 class="p-title" data-i="nf.title">${t('nf.title')}</h1><p data-i="nf.sub">${t('nf.sub')}</p><div class="p-actions">${btn(u(), ti('nav.home'), 'btn btn-p', 'home')}${btn(u('library/'), ti('nav.library'), 'btn btn-o', 'library')}</div></div></section>` }));

// ---------------------------------------------------------------- packs (zip) + assets
const packList = COURSE_LIST.map((c) => ({ out: path.join(DIST, `packs/${c.industry}/${c.role}.zip`), files: [[path.join(ROOT, `academy/courses/${c.industry}/${c.role}.md`), 'SKILL.md'], [path.join(ROOT, `academy/courses/${c.industry}/${c.role}.json`), 'course.json'], ...STEP_KEYS.flatMap((s) => c.steps[s]).filter((i) => resRaw(i)).map((i) => [path.join(ROOT, 'data/mirror', i.id + '.md'), `references/${i.id}.md`])] }));
fs.writeFileSync('/tmp/aa-packs.json', JSON.stringify(packList));
execFileSync('python3', ['-c', `import json,zipfile,os\nfor p in json.load(open('/tmp/aa-packs.json')):\n  os.makedirs(os.path.dirname(p['out']),exist_ok=True)\n  z=zipfile.ZipFile(p['out'],'w',zipfile.ZIP_DEFLATED)\n  seen=set()\n  for a,b in p['files']:\n    if b in seen: continue\n    seen.add(b); z.write(a,b)\n  z.close()`]);
const A = path.join(DIST, 'assets'); fs.mkdirSync(path.join(A, 'fonts'), { recursive: true }); fs.mkdirSync(path.join(A, 'img'), { recursive: true });
const fsrc = (pkg, f) => path.join(ROOT, 'node_modules/@fontsource-variable', pkg, 'files', f);
fs.copyFileSync(fsrc('geist', 'geist-latin-wght-normal.woff2'), path.join(A, 'fonts/geist-latin.woff2'));
fs.copyFileSync(fsrc('geist', 'geist-latin-ext-wght-normal.woff2'), path.join(A, 'fonts/geist-latin-ext.woff2'));
fs.copyFileSync(fsrc('geist', 'geist-vietnamese-wght-normal.woff2'), path.join(A, 'fonts/geist-vi.woff2'));
fs.copyFileSync(fsrc('geist-mono', 'geist-mono-latin-wght-normal.woff2'), path.join(A, 'fonts/geist-mono-latin.woff2'));
for (const f of fs.readdirSync(path.join(ROOT, 'directions/fonts'))) fs.copyFileSync(path.join(ROOT, 'directions/fonts', f), path.join(A, 'fonts', f));
for (const f of fs.readdirSync(path.join(ROOT, 'directions/img'))) fs.copyFileSync(path.join(ROOT, 'directions/img', f), path.join(A, 'img', f));
fs.mkdirSync(path.join(A, 'i18n'), { recursive: true });
for (const l of LOCALES) fs.writeFileSync(path.join(A, `i18n/${l}.json`), JSON.stringify({ ui: UI[l], tax: Object.fromEntries(['industries', 'roles', 'types'].map((g) => [g, Object.fromEntries(Object.entries(TAX[g]).map(([k, v]) => [k, v[l] || v.en]))])) }));
if (fs.existsSync(path.join(ROOT, 'content/case-assets'))) fs.cpSync(path.join(ROOT, 'content/case-assets'), path.join(A, 'case'), { recursive: true });

// ---------------------------------------------------------------- HOME (needs dist/api) + site.css (skins scoped) + scripts
const { buildHome } = await import('./home.mjs');
const H = await buildHome({ ROOT, DIST, BASE, SITE, RAW, UIHUB_API, UPDATED, LOCALES, UI });
{
  const swap = `<script>(function(){var s=document.documentElement.dataset.skin;if(s!=='a'){var t=document.querySelector('template[data-sk-tpl="'+s+'"]'),m=document.querySelector('main[data-sk-home="a"]');if(t&&m)m.replaceWith(t.content.cloneNode(true))}})()</script>`;
  const main = `${H.main.a}<template data-sk-tpl="b">${H.main.b}</template><template data-sk-tpl="c">${H.main.c}</template>${swap}`;
  write(DIST, 'index.html', page({ title: 'Agent Academy: a school your agents can read', desc: t('hero.sub'), main, active: 'nav.home', rel: '', pageData: { kind: 'home' }, home: H.DATA }));
}
const { scopeSkins } = await import('./scope-css.mjs');
const FONTS = `@font-face{font-family:"Geist";src:url(${u('assets/fonts/geist-latin.woff2')}) format("woff2");font-weight:100 900;font-display:swap}
@font-face{font-family:"Geist";src:url(${u('assets/fonts/geist-latin-ext.woff2')}) format("woff2");font-weight:100 900;font-display:swap;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:"Geist";src:url(${u('assets/fonts/geist-vi.woff2')}) format("woff2");font-weight:100 900;font-display:swap;unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}
@font-face{font-family:"Geist Mono";src:url(${u('assets/fonts/geist-mono-latin.woff2')}) format("woff2");font-weight:100 900;font-display:swap}
@font-face{font-family:"Instrument Serif";src:url(${u('assets/fonts/instrument-serif-latin.woff2')}) format("woff2");font-weight:400;font-display:swap}
@font-face{font-family:"Instrument Serif";src:url(${u('assets/fonts/instrument-serif-italic-latin.woff2')}) format("woff2");font-weight:400;font-style:italic;font-display:swap}`;
const css = [FONTS, fs.readFileSync(path.join(ROOT, 'src/base.css'), 'utf8'), await scopeSkins(H.css), fs.readFileSync(path.join(ROOT, 'src/pages.css'), 'utf8')].join('\n');
const minCss = (x) => x.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{};])\s*/g, '$1').replace(/;}/g, '}').trim();
fs.writeFileSync(path.join(A, 'site.css'), minCss(css.replaceAll('__BASE__', BASE)));
fs.writeFileSync(path.join(A, 'app.js'), fs.readFileSync(path.join(ROOT, 'src/app.js'), 'utf8'));
fs.writeFileSync(path.join(A, 'engine.js'), fs.readFileSync(path.join(ROOT, 'src/engine.js'), 'utf8').replace('"__BB_SVG__"', JSON.stringify(H.bgBeams('p'))));
console.log(JSON.stringify({ items: ALL.length, live: LIVE.length, courses: COURSE_LIST.length, css_kb: Math.round(css.length / 1024), stats }, null, 0));
