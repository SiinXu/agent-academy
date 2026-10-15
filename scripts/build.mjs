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

// ---------------------------------------------------------------- page shell
const FONT_PRELOAD = `<link rel="preload" href="${u('assets/fonts/archivo-latin.woff2')}" as="font" type="font/woff2" crossorigin><link rel="preload" href="${u('assets/fonts/geist-latin.woff2')}" as="font" type="font/woff2" crossorigin>`;
const HEAD_SCRIPT = `<script>(function(){var L=${JSON.stringify(LOCALES)},q=new URLSearchParams(location.search).get('lang'),s=null;try{s=localStorage.getItem('aa-lang')}catch(e){}var l=(q&&L.indexOf(q)>-1)?q:(s&&L.indexOf(s)>-1?s:null);if(!l){var n=(navigator.languages||[navigator.language||'']);for(var i=0;i<n.length&&!l;i++){var x=(n[i]||'').toLowerCase();if(/^zh-(tw|hk|mo|hant)/.test(x))l='zh-TW';else if(x.indexOf('zh')===0)l='zh-CN';else{var b=x.split('-')[0];var m={en:'en',ja:'ja',ko:'ko',ms:'ms',vi:'vi',fr:'fr',es:'es',de:'de'};if(m[b])l=m[b]}}}if(!l){var z='';try{z=Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch(e){}var T={'Asia/Shanghai':'zh-CN','Asia/Chongqing':'zh-CN','Asia/Urumqi':'zh-CN','Asia/Taipei':'zh-TW','Asia/Hong_Kong':'zh-TW','Asia/Macau':'zh-TW','Asia/Tokyo':'ja','Asia/Seoul':'ko','Asia/Kuala_Lumpur':'ms','Asia/Kuching':'ms','Asia/Ho_Chi_Minh':'vi','Asia/Saigon':'vi','Europe/Paris':'fr','Europe/Madrid':'es','America/Mexico_City':'es','America/Bogota':'es','America/Argentina/Buenos_Aires':'es','Europe/Berlin':'de','Europe/Vienna':'de','Europe/Zurich':'de'};l=T[z]||'en'}if(q&&L.indexOf(q)>-1){try{localStorage.setItem('aa-lang',q)}catch(e){}}var d=document.documentElement;d.lang=l;d.dataset.lang=l;if(l!=='en')d.classList.add('i18n-wait');var th=null;try{th=localStorage.getItem('aa-theme')}catch(e){}if(!th)th=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';d.dataset.theme=th;setTimeout(function(){d.classList.remove('i18n-wait')},1200)})()</script>`;
const ICON = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#3A47F5"/><circle cx="16" cy="16" r="7" fill="#fff"/></svg>')}`;

function nav(active) {
  const items = [['', 'nav.home'], ['library/', 'nav.library'], ['courses/', 'nav.courses'], ['latest/', 'nav.latest'], ['sources/', 'nav.sources'], ['agents/', 'nav.agents']];
  return `<a class="skip" href="#main" data-i="nav.skip">${t('nav.skip')}</a>
<header class="top"><div class="wrap top-in">
<a class="mark" href="${u()}" aria-label="Agent Academy"><span class="mark-dot" aria-hidden="true"></span><span class="mark-t">Agent Academy</span></a>
<nav class="nav" aria-label="Main">${items.map(([h, k]) => `<a href="${u(h)}"${active === k ? ' aria-current="page"' : ''} data-i="${k}">${t(k)}</a>`).join('')}</nav>
<div class="tools"><label class="sr" for="lang" data-i="nav.lang">${t('nav.lang')}</label><select id="lang" class="lang">${LOCALES.map((l) => `<option value="${l}">${esc(UI[l].lang_name)}</option>`).join('')}</select>
<button class="theme" type="button" aria-label="${t('nav.theme')}" data-i-aria="nav.theme"><span class="sun" aria-hidden="true"></span></button></div>
</div></header>`;
}
function footer() {
  return `<footer class="foot"><div class="wrap foot-in">
<p><span data-i="footer.updated">${t('footer.updated')}</span> <time class="ts" datetime="${UPDATED}">${UPDATED.slice(0, 16).replace('T', ' ')} UTC</time></p>
<p class="foot-links"><a href="${u('feed.xml')}" data-i="footer.feed">${t('footer.feed')}</a><a href="${u('llms.txt')}">llms.txt</a><a href="${u('agent.md')}">agent.md</a><a href="https://github.com/${REPO}" data-i="footer.repo">${t('footer.repo')}</a></p>
<p class="foot-note" data-i="footer.note">${t('footer.note')}</p></div></footer>`;
}
function page({ title, desc, body, active, rel, extraHead = '', pageData = null }) {
  const canonical = `${SITE}/${rel}`;
  return `<!doctype html><html lang="en" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${canonical}">
<meta name="color-scheme" content="light dark"><meta name="theme-color" content="#ECECEF" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#0D0D11" media="(prefers-color-scheme: dark)">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:type" content="website"><meta property="og:url" content="${canonical}">
<link rel="icon" href="${ICON}"><link rel="alternate" type="application/atom+xml" title="Agent Academy changes" href="${u('feed.xml')}"><link rel="alternate" type="text/plain" title="llms.txt" href="${u('llms.txt')}">
${FONT_PRELOAD}<link rel="stylesheet" href="${u('assets/site.css')}">${HEAD_SCRIPT}${extraHead}</head>
<body>${nav(active)}<main id="main">${body}</main>${footer()}
<script>window.AA=${JSON.stringify({ base: BASE, site: SITE, raw: RAW, updated: UPDATED, page: pageData })}</script><script src="${u('assets/app.js')}" defer></script></body></html>`;
}

// ---------------------------------------------------------------- shared fragments
const typeName = (k) => name('types', k);
const tagsHTML = (i) => {
  const s = safety(i);
  return `<span class="tags"><span class="tg ${s.cred ? 'warn' : 'ok'}" data-i="${s.cred ? 'tag.cred_yes' : 'tag.cred_no'}">${t(s.cred ? 'tag.cred_yes' : 'tag.cred_no')}</span><span class="tg ${s.send ? 'warn' : 'ok'}" data-i="${s.send ? 'tag.send_yes' : 'tag.send_no'}">${t(s.send ? 'tag.send_yes' : 'tag.send_no')}</span></span>`;
};
const card = (i) => `<article class="card fac-${OPEN.includes(i.industry) ? i.industry : 'other'}">
<div class="card-top"><span class="pill" data-tx="types.${i.type}">${esc(typeName(i.type))}</span><span class="card-ind" data-tx="industries.${i.industry}">${esc(name('industries', i.industry))}</span></div>
<h3 class="card-h"><a href="${u('r/' + i.id + '/')}">${esc(i.title)}</a></h3>
<p class="card-s" data-sid="${esc(i.id)}">${esc(sumOf(i))}</p>
<p class="card-src"><span class="sr" data-i="card.source">${t('card.source')}</span>${esc(shortSrc(i.source_url))}</p>
<div class="card-foot">${tagsHTML(i)}<span class="lic" title="${esc(i.license)}">${esc(licLabel(i))}</span></div></article>`;

// ---------------------------------------------------------------- HOME
const latest = [...LIVE].sort((a, b) => (b.first_seen || '').localeCompare(a.first_seen || '') || sortQ(a, b));
const showcase = (() => { // varied, high quality, mix types + professions for the marquee
  const out = []; const seen = new Set();
  const pick = (f, n) => { for (const i of latest.filter(f).sort(sortQ)) { if (out.length >= 80 || n <= 0) break; if (!seen.has(i.id)) { seen.add(i.id); out.push(i); n--; } } };
  for (const ind of OPEN) for (const ty of ['skill', 'mcp', 'system-prompt', 'template', 'style-library', 'case']) pick((i) => i.industry === ind && i.type === ty, 4);
  return out;
})();
const ORBIT = Object.entries(count(LIVE, (i) => (i.repo ? i.repo.split('/')[0] : i.source))).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([k, n]) => ({ k: k === 'ui-hub' ? 'UI Hub' : k === 'mcp-registry' ? 'MCP Registry' : k === 'botsdots' ? 'BotsDots' : k, n }));
const matrixTypes = ['skill', 'system-prompt', 'template', 'mcp', 'style-library', 'tutorial', 'case', 'workflow'];

function homeBody() {
  const f = (ind) => {
    const items = byInd[ind] || []; const rs = rolesOf(ind);
    const top = count(items, (i) => i.type);
    return `<a class="fac fac-${ind}" href="${u('i/' + ind + '/')}">
<span class="fac-shape" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
<span class="fac-badge" data-i="fac.open">${t('fac.open')}</span>
<span class="fac-n" data-count="${items.length}">${items.length}</span><span class="fac-nl" data-i="fac.items">${t('fac.items')}</span>
<span class="fac-t" data-tx="industries.${ind}">${esc(name('industries', ind))}</span>
<span class="fac-roles">${rs.map((r) => `<span data-tx="roles.${r}">${esc(name('roles', r))}</span>`).join('')}</span>
<span class="fac-bars" aria-hidden="true">${Object.entries(top).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([k, n]) => `<span style="--w:${Math.max(6, Math.round(100 * n / items.length))}%"><b data-tx="types.${k}">${esc(typeName(k))}</b><em>${n}</em></span>`).join('')}</span>
<span class="fac-go" data-i="fac.enter">${t('fac.enter')}</span></a>`;
  };
  const soon = Object.keys(TAX.industries).filter((k) => !OPEN.includes(k));
  const designCourse = COURSE_LIST.find((c) => c.id === 'design/ui-designer');
  const pathSteps = STEP_KEYS.map((s, n) => `<li><button type="button" class="chip-step${n === 0 ? ' on' : ''}" data-step="${s}" aria-pressed="${n === 0}"><span class="num">${n + 1}</span><span data-i="step.${s}">${t('step.' + s)}</span></button></li>`).join('');
  const stepPanels = STEP_KEYS.map((s, n) => `<div class="step-panel" data-panel="${s}"${n ? ' hidden' : ''}><p data-i="step.${s}.d">${t('step.' + s + '.d')}</p><ul>${[...designCourse.steps[s].filter((i) => !/[\u3040-\u9fff]/.test(i.title)), ...designCourse.steps[s].filter((i) => /[\u3040-\u9fff]/.test(i.title))].slice(0, 4).map((i) => `<li><a href="${u('r/' + i.id + '/')}"><span class="pill sm" data-tx="types.${i.type}">${esc(typeName(i.type))}</span>${esc(i.title)}</a></li>`).join('')}</ul></div>`).join('');
  const mx = `<table class="mx"><thead><tr><th></th>${matrixTypes.map((k) => `<th scope="col" data-tx="types.${k}">${esc(typeName(k))}</th>`).join('')}</tr></thead><tbody>${OPEN.map((ind) => `<tr><th scope="row" data-tx="industries.${ind}">${esc(name('industries', ind))}</th>${matrixTypes.map((k) => { const n = (byInd[ind] || []).filter((i) => i.type === k).length; const max = 120; return `<td><a class="cell fac-${ind}" style="--a:${Math.min(1, n / max).toFixed(2)}" href="${u('library/?ind=' + ind + '&type=' + k)}" aria-label="${n}">${n}</a></td>`; }).join('')}</tr>`).join('')}</tbody></table>`;
  const marquee = (arr) => `<div class="mq-track">${[...arr, ...arr].map((i, n) => `<a class="mq-item fac-${i.industry}" href="${u('r/' + i.id + '/')}"${n >= arr.length ? ' aria-hidden="true" tabindex="-1"' : ''}><span class="pill sm" data-tx="types.${i.type}">${esc(typeName(i.type))}</span><span class="mq-t">${esc(i.title)}</span><span class="mq-s">${esc(host(i.source_url))}</span>${tagsHTML(i)}</a>`).join('')}</div>`;
  const half = Math.ceil(showcase.length / 2);
  const endpoints = [['llms.txt', 'llms.txt'], ['agent.md', 'agent.md'], ['api/index.json', 'api/index.json'], ['api/search-index.json', 'api/search-index.json'], ['api/changes.json', 'api/changes.json'], ['feed.xml', 'feed.xml (Atom)'], ['feed.json', 'feed.json'], [`academy/courses/design/ui-designer.md`, 'course.md (raw)']];
  return `
<section class="hero"><div class="hero-bg" aria-hidden="true">${[0, 1].map((w) => `<svg class="waves w${w + 1}" viewBox="0 0 1440 640" preserveAspectRatio="none">${Array.from({ length: 17 }, (_, j) => { const k = j * 2 + w; return `<path d="M-40 ${470 - k * 6} C 300 ${120 + k * 9}, 760 ${640 - k * 4}, 1480 ${110 + k * 7}"/>`; }).join('')}</svg>`).join('')}</div>
<div class="wrap hero-in">
<div class="hero-copy">
<h1 class="h1" data-i="hero.title">${t('hero.title')}</h1>
<p class="lede" data-i="hero.sub">${t('hero.sub')}</p>
<div class="ctas"><a class="btn pri" href="#quick" data-i="hero.cta">${t('hero.cta')}</a><a class="btn ghost" href="${u('library/')}" data-i="hero.cta2">${t('hero.cta2')}</a></div>
<dl class="stats">
<div><dt data-i="stat.resources">${t('stat.resources')}</dt><dd data-count="${stats.total}">${stats.total}</dd></div>
<div><dt data-i="stat.skills">${t('stat.skills')}</dt><dd data-count="${stats.skills}">${stats.skills}</dd></div>
<div><dt data-i="stat.mcp">${t('stat.mcp')}</dt><dd data-count="${stats.mcp}">${stats.mcp}</dd></div>
<div><dt data-i="stat.prompts">${t('stat.prompts')}</dt><dd data-count="${stats.prompts}">${stats.prompts}</dd></div>
</dl>
<p class="upd"><span class="live" aria-hidden="true"></span><span data-i="stat.updated">${t('stat.updated')}</span> <time class="ts" datetime="${UPDATED}">${UPDATED.slice(0, 10)}</time></p>
</div>
<figure class="orbit" aria-labelledby="orbit-cap">
<div class="seal" aria-hidden="true"><svg viewBox="0 0 200 200"><defs><path id="ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"/></defs><text><textPath href="#ring" textLength="486" lengthAdjust="spacing">AGENT ACADEMY · SKILLS · PROMPTS · MCP · WORKFLOWS · COURSES · </textPath></text></svg><span class="orb"></span></div>
<ul class="ring r1">${ORBIT.slice(0, 4).map((o, n) => `<li style="--i:${n};--n:4;--off:45deg"><span>${esc(o.k)} <b>${o.n}</b></span></li>`).join('')}</ul>
<ul class="ring r2">${ORBIT.slice(4, 12).map((o, n) => `<li style="--i:${n};--n:8;--off:22.5deg"><span>${esc(o.k)} <b>${o.n}</b></span></li>`).join('')}</ul>
<figcaption id="orbit-cap" data-i="orbit.label">${t('orbit.label')}</figcaption>
</figure>
</div></section>

<section class="quick wrap" id="quick" aria-labelledby="qs-h"><div class="shine">
<div class="qs-head"><h2 id="qs-h" class="h2" data-i="qs.title">${t('qs.title')}</h2><p data-i="qs.sub">${t('qs.sub')}</p></div>
<div class="qs-grid">
<form class="qs-form" id="gen" autocomplete="off">
<div class="presets"><span data-i="qs.presets">${t('qs.presets')}</span><button type="button" data-preset="cs">Shopify refunds</button><button type="button" data-preset="mk">SEO blog</button><button type="button" data-preset="ds">Landing page</button></div>
<label class="fld wide"><span data-i="qs.bot">${t('qs.bot')}</span><input id="g-goal" type="text" maxlength="200" placeholder="${esc(t('qs.bot_ph'))}" data-i-ph="qs.bot_ph"></label>
<label class="fld"><span data-i="qs.prof">${t('qs.prof')}</span><select id="g-prof">${Object.keys(TAX.industries).map((k) => `<option value="${k}"${OPEN.includes(k) ? '' : ' disabled'} data-tx="industries.${k}" data-soon="${OPEN.includes(k) ? '' : '1'}">${esc(name('industries', k))}${OPEN.includes(k) ? '' : ' · ' + t('fac.soon')}</option>`).join('')}</select></label>
<label class="fld"><span data-i="qs.role">${t('qs.role')}</span><select id="g-role"></select></label>
<label class="fld" id="g-style-wrap"><span data-i="qs.style">${t('qs.style')}</span><select id="g-style"><option value="" data-i="qs.style_any">${t('qs.style_any')}</option>${STYLES.filter((s) => s.n >= 3).map((s) => `<option value="${s.k}">${s.k} (${s.n})</option>`).join('')}</select></label>
<label class="fld"><span data-i="qs.lang">${t('qs.lang')}</span><select id="g-lang">${LOCALES.map((l) => `<option value="${l}">${esc(UI[l].lang_name)}</option>`).join('')}</select></label>
<label class="fld"><span data-i="qs.platform">${t('qs.platform')}</span><select id="g-plat"><option value="claude-code">Claude Code</option><option value="codex">Codex CLI</option><option value="cursor">Cursor</option><option value="grok-bot">Grok Bot</option><option value="chatgpt">ChatGPT / GPTs</option><option value="shell">Other agent with a shell</option><option value="readonly">Other agent, read only</option></select></label>
<label class="chk wide"><input id="g-safe" type="checkbox" checked><span data-i="qs.safe">${t('qs.safe')}</span></label>
</form>
<div class="qs-out"><div class="qs-out-h"><h3 data-i="qs.out">${t('qs.out')}</h3><button class="btn pri sm" id="g-copy" type="button" data-i="qs.copy">${t('qs.copy')}</button></div>
<pre id="g-prompt" class="prompt" tabindex="0" aria-live="polite"></pre>
<h4 data-i="qs.files">${t('qs.files')}</h4><ul id="g-files" class="files"></ul></div>
</div></div></section>

<section class="wrap bento" aria-labelledby="fac-h">
<div class="sec-head"><h2 id="fac-h" class="h2" data-i="fac.title">${t('fac.title')}</h2><p data-i="fac.sub">${t('fac.sub')}</p></div>
<div class="bento-grid">
${OPEN.map(f).join('')}
<div class="tile path"><h3 class="h3" data-i="path.title">${t('path.title')}</h3><p class="muted" data-i="path.sub">${t('path.sub')}</p><ol class="chain">${pathSteps}</ol><div class="panels">${stepPanels}</div></div>
<div class="tile matrix"><h3 class="h3" data-i="matrix.title">${t('matrix.title')}</h3><p class="muted" data-i="matrix.sub">${t('matrix.sub')}</p><div class="mx-wrap">${mx}</div></div>
<div class="tile soon"><ul>${soon.map((k) => `<li><a href="${u('i/' + k + '/')}"><span data-tx="industries.${k}">${esc(name('industries', k))}</span><em>${(byInd[k] || []).length}</em><span class="soon-b" data-i="fac.soon">${t('fac.soon')}</span></a></li>`).join('')}</ul></div>
</div></section>

<section class="latest" aria-labelledby="lt-h"><div class="wrap sec-head row"><div><h2 id="lt-h" class="h2" data-i="latest.title">${t('latest.title')}</h2><p data-i="latest.sub">${t('latest.sub')}</p></div><a class="btn ghost sm" href="${u('latest/')}" data-i="nav.latest">${t('nav.latest')}</a></div>
<div class="mq" style="--d:110s">${marquee(showcase.slice(0, half))}</div><div class="mq rev" style="--d:130s">${marquee(showcase.slice(half))}</div></section>

<section class="wrap case" aria-labelledby="case-h"><div class="case-grid">
<div class="case-copy"><p class="kicker" data-i="case.title">${t('case.title')}</p><h2 id="case-h" class="h2" data-i="case.h">${t('case.h')}</h2><p data-i="case.sub">${t('case.sub')}</p>
<ol class="case-steps">${[1, 2, 3, 4].map((k) => `<li data-i="case.s${k}">${t(`case.s${k}`)}</li>`).join('')}</ol>
<a class="btn pri" href="${u('cases/' + CASE_ID + '/')}" data-i="case.read">${t('case.read')}</a></div>
<div class="ba" style="--x:52%"><img src="${u('assets/case/before.webp')}" alt="Before: the same page with no design applied" width="1440" height="900" loading="lazy" decoding="async"><div class="ba-after"><img src="${u('assets/case/after.webp')}" alt="After: the shipped campus bento design" width="1440" height="900" loading="lazy" decoding="async"></div>
<span class="ba-l" data-i="case.before">${t('case.before')}</span><span class="ba-r" data-i="case.after">${t('case.after')}</span>
<input class="ba-range" type="range" min="0" max="100" value="52" aria-label="${t('case.drag')}" data-i-aria="case.drag"></div>
</div></section>

<section class="wrap agents" aria-labelledby="ag-h"><div class="sec-head"><h2 id="ag-h" class="h2" data-i="agents.title">${t('agents.title')}</h2><p data-i="agents.sub">${t('agents.sub')}</p></div>
<ul class="ep">${endpoints.map(([p, l]) => { const url = p.startsWith('academy/') ? `${RAW}/${p}` : `${SITE}/${p}`; return `<li><span class="ep-l">${esc(l)}</span><code>${esc(url)}</code><button type="button" class="copy" data-copy="${esc(url)}" data-i="r.copy">${t('r.copy')}</button></li>`; }).join('')}</ul></section>`;
}
write(DIST, 'index.html', page({ title: 'Agent Academy: a school your agents can read', desc: t('hero.sub'), body: homeBody(), active: 'nav.home', rel: '',
  pageData: { kind: 'home', courses: Object.fromEntries(COURSE_LIST.map((c) => [c.id, { course: courseRaw(c), json: courseJsonRaw(c), pack: `${SITE}/packs/${c.industry}/${c.role}.zip` }])), roles: Object.fromEntries(OPEN.map((k) => [k, rolesOf(k)])), uihub: UIHUB_API, prompt: PROMPT, tax: { industries: TAX.industries, roles: TAX.roles }, changes: `${SITE}/api/changes.json`, caseRaw: `${RAW}/content/cases/${CASE_ID}.en.md` } }));

// ---------------------------------------------------------------- LIBRARY (client-side filter over search index)
const libBody = `<section class="wrap page-head"><h1 class="h1 sm" data-i="lib.title">${t('lib.title')}</h1><p class="lede" data-i="lib.sub">${t('lib.sub')}</p></section>
<section class="wrap lib"><form class="filters" id="lf" role="search">
<label class="fld grow"><span class="sr" data-i="lib.search">${t('lib.search')}</span><input type="search" id="lf-q" placeholder="${esc(t('lib.search'))}" data-i-ph="lib.search"></label>
<div class="segs" role="group" aria-label="${t('lib.prof')}"><button type="button" class="seg on" data-ind="" data-i="lib.all">${t('lib.all')}</button>${Object.keys(TAX.industries).filter((k) => (byInd[k] || []).length).map((k) => `<button type="button" class="seg" data-ind="${k}"><span data-tx="industries.${k}">${esc(name('industries', k))}</span> <em>${byInd[k].length}</em></button>`).join('')}</div>
<label class="fld"><span class="sr" data-i="lib.type">${t('lib.type')}</span><select id="lf-type"><option value="" data-i="lib.all">${t('lib.all')}</option>${TYPES.filter((k) => stats.byType[k]).map((k) => `<option value="${k}" data-tx="types.${k}">${esc(typeName(k))}</option>`).join('')}</select></label>
<label class="chk"><input type="checkbox" id="lf-safe"><span data-i="lib.safe_only">${t('lib.safe_only')}</span></label>
</form>
<p class="lib-count" aria-live="polite"><b id="lf-n">${LIVE.length}</b> <span data-i="lib.results">${t('lib.results')}</span></p>
<div class="grid" id="lf-grid">${LIVE.slice().sort(sortQ).slice(0, 48).map(card).join('')}</div>
<p class="empty" id="lf-empty" hidden><span data-i="lib.empty">${t('lib.empty')}</span> <button type="button" class="btn ghost sm" id="lf-clear" data-i="lib.clear">${t('lib.clear')}</button></p>
<nav class="pager" id="lf-pager" aria-label="Pages"></nav></section>`;
write(DIST, 'library/index.html', page({ title: 'Library · Agent Academy', desc: t('lib.sub'), body: libBody, active: 'nav.library', rel: 'library/', pageData: { kind: 'library' } }));

// ---------------------------------------------------------------- INDUSTRY pages + course pages
for (const ind of Object.keys(TAX.industries)) {
  const items = (byInd[ind] || []).slice().sort(sortQ); const open = OPEN.includes(ind);
  const rs = open ? rolesOf(ind) : [];
  const types = count(items, (i) => i.type);
  const body = `<section class="wrap page-head fac-head fac-${open ? ind : 'other'}"><p class="kicker"><span class="badge ${open ? '' : 'soon'}" data-i="${open ? 'fac.open' : 'fac.soon'}">${t(open ? 'fac.open' : 'fac.soon')}</span></p>
<h1 class="h1 sm" data-tx="industries.${ind}">${esc(name('industries', ind))}</h1>
${open ? `<p class="lede" data-x="goal.${ind}">${esc(COURSES.goals[ind])}</p>` : `<p class="lede" data-i="course.soon">${t('course.soon')}</p>`}
<p class="type-strip">${Object.entries(types).sort((a, b) => b[1] - a[1]).map(([k, n]) => `<a class="pill" href="${u('library/?ind=' + ind + '&type=' + k)}"><span data-tx="types.${k}">${esc(typeName(k))}</span> ${n}</a>`).join('')}</p></section>
${open ? `<section class="wrap"><h2 class="h2" data-i="course.roles">${t('course.roles')}</h2><div class="roles">${rs.map((r) => { const c = COURSE_LIST.find((x) => x.id === `${ind}/${r}`); const n = STEP_KEYS.reduce((a, s) => a + c.steps[s].length, 0); return `<a class="role fac-${ind}" href="${u(`courses/${ind}/${r}/`)}"><span class="role-t" data-tx="roles.${r}">${esc(name('roles', r))}</span><span class="role-n">${n} · 5</span></a>`; }).join('')}</div></section>` : ''}
<section class="wrap"><div class="grid">${items.slice(0, 48).map(card).join('')}</div>${items.length > 48 ? `<p class="more"><a class="btn ghost" href="${u('library/?ind=' + ind)}"><span data-i="nav.library">${t('nav.library')}</span> (${items.length})</a></p>` : ''}</section>`;
  write(DIST, `i/${ind}/index.html`, page({ title: `${name('industries', ind)} · Agent Academy`, desc: open ? COURSES.goals[ind] : t('course.soon'), body, active: 'nav.courses', rel: `i/${ind}/` }));
}
for (const c of COURSE_LIST) {
  const body = `<section class="wrap page-head fac-head fac-${c.industry}"><p class="kicker"><a href="${u('i/' + c.industry + '/')}" data-tx="industries.${c.industry}">${esc(name('industries', c.industry))}</a></p>
<h1 class="h1 sm" data-tx="roles.${c.role}">${esc(name('roles', c.role))}</h1><p class="lede" data-x="goal.${c.industry}">${esc(COURSES.goals[c.industry])}</p>
<p class="perm" data-x="perm.${c.industry}">${esc(COURSES.permissions[c.industry])}</p>
<p class="ctas"><a class="btn pri" href="${courseRaw(c)}" data-i="course.raw">${t('course.raw')}</a><a class="btn ghost" href="${u(`packs/${c.industry}/${c.role}.zip`)}" data-i="course.pack">${t('course.pack')}</a><a class="btn ghost" href="${courseJsonRaw(c)}">JSON</a></p></section>
<section class="wrap course">${STEP_KEYS.map((s, n) => `<div class="cstep"><div class="cstep-h"><span class="num">${n + 1}</span><div><h2 class="h3" data-i="step.${s}">${t('step.' + s)}</h2><p class="muted" data-i="step.${s}.d">${t('step.' + s + '.d')}</p></div></div>
${s === '2-pick-direction' && c.industry === 'design' ? `<div class="styles"><h3 class="h4" data-i="course.styles">${t('course.styles')}</h3><p>${STYLES.map((x) => `<a class="pill" href="https://siinxu.github.io/ui-resource-hub/">${esc(x.k)} <em>${x.n}</em></a>`).join('')}</p></div>` : ''}
${s === '4-do-it' && c.industry === 'design' ? `<a class="case-link" href="${u('cases/' + CASE_ID + '/')}"><span class="pill" data-tx="types.case">${esc(typeName('case'))}</span><span data-i="case.h">${t('case.h')}</span></a>` : ''}
<div class="grid">${c.steps[s].map(card).join('')}</div>
${s === '5-self-check' ? `<h3 class="h4" data-i="course.checklist">${t('course.checklist')}</h3><ul class="checklist">${COURSES.checklists[c.industry].map((x, k) => `<li data-x="check.${c.industry}.${k}">${esc(x)}</li>`).join('')}</ul>` : ''}</div>`).join('')}</section>`;
  write(DIST, `courses/${c.industry}/${c.role}/index.html`, page({ title: `${name('roles', c.role)} · ${name('industries', c.industry)} · Agent Academy`, desc: COURSES.goals[c.industry], body, active: 'nav.courses', rel: `courses/${c.industry}/${c.role}/` }));
}
const coursesBody = `<section class="wrap page-head"><h1 class="h1 sm" data-i="nav.courses">${t('nav.courses')}</h1><p class="lede" data-i="path.sub">${t('path.sub')}</p></section>
<section class="wrap">${OPEN.map((ind) => `<h2 class="h2"><a href="${u('i/' + ind + '/')}" data-tx="industries.${ind}">${esc(name('industries', ind))}</a></h2><div class="roles">${rolesOf(ind).map((r) => `<a class="role fac-${ind}" href="${u(`courses/${ind}/${r}/`)}"><span class="role-t" data-tx="roles.${r}">${esc(name('roles', r))}</span></a>`).join('')}</div>`).join('')}
<h2 class="h2" data-i="fac.soon">${t('fac.soon')}</h2><div class="roles">${Object.keys(TAX.industries).filter((k) => !OPEN.includes(k)).map((k) => `<a class="role soon" href="${u('i/' + k + '/')}"><span class="role-t" data-tx="industries.${k}">${esc(name('industries', k))}</span><span class="role-n">${(byInd[k] || []).length}</span></a>`).join('')}</div></section>`;
write(DIST, 'courses/index.html', page({ title: 'Courses · Agent Academy', desc: t('path.sub'), body: coursesBody, active: 'nav.courses', rel: 'courses/' }));

// ---------------------------------------------------------------- RESOURCE detail pages + md + json
const related = (i) => (byInd[i.industry] || []).filter((x) => x.id !== i.id && x.roles.some((r) => i.roles.includes(r))).sort(sortQ).slice(0, 6);
for (const i of ALL) {
  const mirrorP = path.join(ROOT, 'data/mirror', i.id + '.md');
  const mirror = i.redistributable && fs.existsSync(mirrorP) ? fs.readFileSync(mirrorP, 'utf8') : null;
  const rows = [['card.license', i.license], ['r.policy', t(i.redistributable ? 'r.policy_mirror' : 'r.policy_link')], ['r.author', i.author], ['r.roles', i.roles.map((r) => name('roles', r)).join(', ')], ['r.step', i.course_step ? t('step.' + i.course_step) : null], ['r.stars', i.metrics?.repo_stars], ['r.first', i.first_seen?.slice(0, 10)], ['r.updated', i.updated_at?.slice(0, 10)], ['r.checked', i.checked_at ? `${i.checked_at.slice(0, 10)} (HTTP ${i.http_status?.source})` : null]].filter(([, v]) => v !== null && v !== undefined && v !== '');
  const sf = i.security || {};
  const body = `<section class="wrap detail fac-${OPEN.includes(i.industry) ? i.industry : 'other'}"><div class="d-main">
<p class="kicker"><a href="${u('i/' + i.industry + '/')}" data-tx="industries.${i.industry}">${esc(name('industries', i.industry))}</a> <span class="pill" data-tx="types.${i.type}">${esc(typeName(i.type))}</span>${i.status !== 'active' ? ` <span class="tg warn">${esc(i.status)}</span>` : ''}</p>
<h1 class="h1 sm d-title">${esc(i.title)}</h1>
<p class="lede" data-sid="${esc(i.id)}">${esc(sumOf(i))}</p>
<p class="d-src"><a class="btn pri" href="${esc(i.source_url)}" rel="noopener" data-i="r.open">${t('r.open')}</a><span class="url">${esc(i.source_url)}</span></p>
${tagsHTML(i)}${sf.credential_names?.length ? `<p class="muted small">${esc(sf.credential_names.join(', '))}</p>` : ''}
${i.install ? `<div class="inst"><span data-i="card.install">${t('card.install')}</span><code>${esc(i.install)}</code><button type="button" class="copy" data-copy="${esc(i.install)}" data-i="r.copy">${t('r.copy')}</button></div>` : ''}
${mirror ? `<details class="mirror"><summary><span data-i="r.mirror">${t('r.mirror')}</span> · ${esc(i.license)}</summary><p class="muted small" data-i="r.mirror_note">${t('r.mirror_note')}</p><pre>${esc(mirror.slice(0, 60000))}</pre></details>` : `<p class="muted small" data-i="r.link_only">${t('r.link_only')}</p>`}
</div><aside class="d-side"><dl class="meta">${rows.map(([k, v]) => `<div><dt data-i="${k}">${t(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
<p class="d-agent"><a href="${u('api/resources/' + i.id + '.json')}" data-i="r.json">${t('r.json')}</a><a href="${u('r/' + i.id + '.md')}" data-i="r.md">${t('r.md')}</a>${resRaw(i) ? `<a href="${resRaw(i)}" data-i="r.raw">${t('r.raw')}</a>` : ''}</p></aside></section>
<section class="wrap"><h2 class="h3" data-i="r.related">${t('r.related')}</h2><div class="grid">${related(i).map(card).join('')}</div></section>`;
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
  const flushT = () => { if (!tbl.length) return; const rows = tbl.filter((r) => !/^\|\s*-/.test(r)).map((r) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim())); out += `<div class="tbl"><table><thead><tr>${rows[0].map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`; tbl = []; };
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
  const body = `<article class="wrap prose-wrap"><p class="kicker"><a href="${u('courses/design/ui-designer/')}" data-i="case.title">${t('case.title')}</a></p>
${Object.entries(versions).map(([l, md]) => `<div class="prose" data-only="${l}"${l === 'en' ? '' : ' hidden'}>${md2html(md)}</div>`).join('')}
<p class="muted small">Raw: <a href="${RAW}/content/cases/${CASE_ID}.en.md">${RAW}/content/cases/${CASE_ID}.en.md</a></p></article>`;
  write(DIST, `cases/${CASE_ID}/index.html`, page({ title: 'How this site was designed by an agent · Agent Academy', desc: t('case.sub'), body, active: 'nav.courses', rel: `cases/${CASE_ID}/`, pageData: { kind: 'case', langs: Object.keys(versions) } }));
}

// ---------------------------------------------------------------- changes, latest, sources, agents pages
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
const latestBody = `<section class="wrap page-head"><h1 class="h1 sm" data-i="new.title">${t('new.title')}</h1><p class="lede" data-i="new.sub">${t('new.sub')}</p><p><a class="pill" href="${u('feed.xml')}">feed.xml</a> <a class="pill" href="${u('feed.json')}">feed.json</a> <a class="pill" href="${u('api/changes.json')}">api/changes.json</a></p></section>
<section class="wrap">${days.slice(0, 14).map((d) => `<h2 class="h3">${d.date} <em class="muted">${d.items.length}</em></h2><div class="grid">${d.items.filter((x) => byId[x.id] && !['dead', 'duplicate'].includes(byId[x.id].status)).slice(0, 48).map((x) => card(byId[x.id])).join('')}</div>${d.items.length > 48 ? `<p class="more"><a class="btn ghost" href="${u('api/changes/' + d.date + '.json')}">+${d.items.length - 48} · JSON</a></p>` : ''}`).join('')}</section>`;
write(DIST, 'latest/index.html', page({ title: 'Latest · Agent Academy', desc: t('new.sub'), body: latestBody, active: 'nav.latest', rel: 'latest/' }));
const SOURCES = [
  ['github', 'GitHub (anthropics/knowledge-work-plugins, anthropics/skills, wshobson/agents, coreyhaines31/marketingskills, Leonxlnx/taste-skill, emilkowalski/skills, nextlevelbuilder/ui-ux-pro-max-skill, pbakaus/impeccable, VoltAgent/awesome-claude-code-subagents, google/adk-recipes, sierra-research/tau2-bench, Shubhamsaboo/awesome-llm-apps)', 'MIT / Apache-2.0 / CC0 / CC-BY: text mirrored with attribution; anything else link-only (per-skill LICENSE checked for anthropics/skills and partner folders).', 'GitHub REST git trees + raw files; blob SHA decides whether a file is re-read.'],
  ['mcp-registry', 'Official MCP Registry (registry.modelcontextprotocol.io)', 'Registry metadata with attribution; server code license from its own repository; never mirrored.', 'REST search with version=latest, one query per profession keyword.'],
  ['prompts.chat', 'prompts.chat (f/prompts.chat)', 'Prompt data is CC0-1.0: mirrored with author credit.', 'Public JSON API, full pass, filtered by profession keywords.'],
  ['ui-hub', 'UI Resource Hub (siinxu.github.io/ui-resource-hub)', 'Aggregator: links and short notes only; each item keeps its own source URL.', 'api/resources.json, non-component items (skills, systems, specs, libraries, tutorials, tools).'],
  ['botsdots', 'BotsDots catalog (botsdots.site)', 'Catalog compilation CC0; templates belong to their creators: link-only.', 'catalog.json, filtered by profession keywords.'],
  ['seed', 'Hand-verified seed list (site-plan)', 'Per item, as listed.', 'Checked by hand on 2026-10-15.'],
];
const srcBody = `<section class="wrap page-head"><h1 class="h1 sm" data-i="src.title">${t('src.title')}</h1><p class="lede" data-i="src.sub">${t('src.sub')}</p></section>
<section class="wrap"><div class="src-list">${SOURCES.map(([k, n, rule, how]) => `<article class="card src"><h2 class="h3">${esc(n)}</h2><p class="src-n"><b>${stats.bySource[k] || 0}</b> <span data-i="src.items">${t('src.items')}</span></p><p><strong data-i="src.rule">${t('src.rule')}</strong>: ${esc(rule)}</p><p><strong data-i="src.how">${t('src.how')}</strong>: ${esc(how)}</p></article>`).join('')}</div>
<p class="muted small">Collector: <a href="https://github.com/${REPO}/blob/main/scripts/collect.py">scripts/collect.py</a> · Last run ${esc(STATE.last_collect || UPDATED)}</p></section>`;
write(DIST, 'sources/index.html', page({ title: 'Sources · Agent Academy', desc: t('src.sub'), body: srcBody, active: 'nav.sources', rel: 'sources/' }));

// ---------------------------------------------------------------- AGENT ENDPOINTS
const searchIndex = LIVE.map((i) => ({ id: i.id, t: i.title, ty: i.type, in: i.industry, ro: i.roles, s: sumOf(i).slice(0, 220), h: shortSrc(i.source_url), li: licLabel(i), c: safety(i).cred ? 1 : 0, w: safety(i).send ? 1 : 0, q: stars(i) }));
write(DIST, 'api/search-index.json', JSON.stringify({ updated_at: UPDATED, fields: { id: 'id', t: 'title', ty: 'type', in: 'industry', ro: 'roles', s: 'summary (en/source)', h: 'source host+path', li: 'license', c: 'needs_credentials', w: 'writes_external', q: 'quality signal (stars/votes/score)' }, items: searchIndex }));
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
write(DIST, 'sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['', 'library/', 'courses/', 'latest/', 'sources/', 'agents/', `cases/${CASE_ID}/`, ...Object.keys(TAX.industries).map((k) => `i/${k}/`), ...COURSE_LIST.map((c) => `courses/${c.id}/`), ...LIVE.map((i) => `r/${i.id}/`)].map((p) => `<url><loc>${SITE}/${p}</loc></url>`).join('')}</urlset>\n`);
write(DIST, '.nojekyll', '');
const agentsBody = `<section class="wrap page-head"><h1 class="h1 sm" data-i="agents.title">${t('agents.title')}</h1><p class="lede" data-i="agents.sub">${t('agents.sub')}</p></section><section class="wrap"><ul class="ep">${[['llms.txt', 'llms.txt'], ['llms-full.txt', 'llms-full.txt'], ['agent.md', 'agent.md'], ['api/index.json', 'api/index.json'], ['api/taxonomy.json', 'api/taxonomy.json'], ['api/search-index.json', 'api/search-index.json'], ['api/resources.json', 'api/resources.json'], ['api/changes.json', 'api/changes.json'], ['feed.xml', 'feed.xml'], ['feed.json', 'feed.json']].map(([p, l]) => `<li><span class="ep-l">${l}</span><code>${SITE}/${p}</code><button type="button" class="copy" data-copy="${SITE}/${p}" data-i="r.copy">${t('r.copy')}</button></li>`).join('')}${COURSE_LIST.map((c) => `<li><span class="ep-l">${c.id}</span><code>${courseRaw(c)}</code><button type="button" class="copy" data-copy="${courseRaw(c)}" data-i="r.copy">${t('r.copy')}</button></li>`).join('')}</ul>
<h2 class="h3">MCP (stdio, read-only)</h2><p>Optional local server in the repo: <a href="https://github.com/${REPO}/tree/main/mcp">mcp/</a>. Tools: list_courses, get_course, search_resources, get_resource, get_changes.</p><pre class="prompt">{ "mcpServers": { "agent-academy": { "command": "node", "args": ["mcp/server.mjs"] } } }</pre></section>`;
write(DIST, 'agents/index.html', page({ title: 'For agents · Agent Academy', desc: t('agents.sub'), body: agentsBody, active: 'nav.agents', rel: 'agents/' }));
write(DIST, '404.html', page({ title: 'Not found · Agent Academy', desc: 'Not found', body: `<section class="wrap page-head"><h1 class="h1 sm">404</h1><p class="lede"><a href="${u()}" data-i="nav.home">${t('nav.home')}</a> · <a href="${u('library/')}" data-i="nav.library">${t('nav.library')}</a></p></section>`, active: '', rel: '404.html' }));

// ---------------------------------------------------------------- packs (zip) + assets
const packList = COURSE_LIST.map((c) => ({ out: path.join(DIST, `packs/${c.industry}/${c.role}.zip`), files: [[path.join(ROOT, `academy/courses/${c.industry}/${c.role}.md`), 'SKILL.md'], [path.join(ROOT, `academy/courses/${c.industry}/${c.role}.json`), 'course.json'], ...STEP_KEYS.flatMap((s) => c.steps[s]).filter((i) => resRaw(i)).map((i) => [path.join(ROOT, 'data/mirror', i.id + '.md'), `references/${i.id}.md`])] }));
fs.writeFileSync('/tmp/aa-packs.json', JSON.stringify(packList));
execFileSync('python3', ['-c', `import json,zipfile,os\nfor p in json.load(open('/tmp/aa-packs.json')):\n  os.makedirs(os.path.dirname(p['out']),exist_ok=True)\n  z=zipfile.ZipFile(p['out'],'w',zipfile.ZIP_DEFLATED)\n  seen=set()\n  for a,b in p['files']:\n    if b in seen: continue\n    seen.add(b); z.write(a,b)\n  z.close()`]);
const A = path.join(DIST, 'assets'); fs.mkdirSync(path.join(A, 'fonts'), { recursive: true });
const fsrc = (pkg, f) => path.join(ROOT, 'node_modules/@fontsource-variable', pkg, 'files', f);
fs.copyFileSync(fsrc('archivo', 'archivo-latin-standard-normal.woff2'), path.join(A, 'fonts/archivo-latin.woff2'));
fs.copyFileSync(fsrc('archivo', 'archivo-latin-ext-standard-normal.woff2'), path.join(A, 'fonts/archivo-latin-ext.woff2'));
fs.copyFileSync(fsrc('geist', 'geist-latin-wght-normal.woff2'), path.join(A, 'fonts/geist-latin.woff2'));
fs.copyFileSync(fsrc('geist', 'geist-latin-ext-wght-normal.woff2'), path.join(A, 'fonts/geist-latin-ext.woff2'));
fs.copyFileSync(fsrc('geist', 'geist-vietnamese-wght-normal.woff2'), path.join(A, 'fonts/geist-vi.woff2'));
fs.copyFileSync(fsrc('geist-mono', 'geist-mono-latin-wght-normal.woff2'), path.join(A, 'fonts/geist-mono-latin.woff2'));
fs.writeFileSync(path.join(A, 'site.css'), fs.readFileSync(path.join(ROOT, 'src/site.css'), 'utf8').replaceAll('__BASE__', BASE));
fs.writeFileSync(path.join(A, 'app.js'), fs.readFileSync(path.join(ROOT, 'src/app.js'), 'utf8'));
fs.mkdirSync(path.join(A, 'i18n'), { recursive: true });
for (const l of LOCALES) fs.writeFileSync(path.join(A, `i18n/${l}.json`), JSON.stringify({ ui: UI[l], tax: Object.fromEntries(['industries', 'roles', 'types'].map((g) => [g, Object.fromEntries(Object.entries(TAX[g]).map(([k, v]) => [k, v[l] || v.en]))])) }));
if (fs.existsSync(path.join(ROOT, 'content/case-assets'))) fs.cpSync(path.join(ROOT, 'content/case-assets'), path.join(A, 'case'), { recursive: true });
console.log(JSON.stringify({ items: ALL.length, live: LIVE.length, courses: COURSE_LIST.length, stats }, null, 0));
