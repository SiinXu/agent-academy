// Design notes page: the three site styles + module -> UI Hub component tables (home + every inner page).
import fs from 'node:fs';
import path from 'node:path';
export function indexPage({ esc, MAP, DIRS, MODULES, SITE_MAP, OUT }) {
  const HUB = 'https://siinxu.github.io/ui-resource-hub';
  const has = (p) => fs.existsSync(path.join(OUT, p));
  const shot = (d, k) => { const p = `shots/${d}/mod-${k}.webp`; return has(p) ? `<a href="${p}">ours</a>` : '—'; };
  const cell = (m) => !m ? '<span class="miss">missing</span>' : `${m.url ? `<a href="${esc(m.url)}">${esc(m.comp)}</a>` : esc(m.comp)}<br><small>${esc(m.lib)}</small>${m.hub ? `<br><a href="${HUB}/#/r/${esc(m.hub)}"><code>${esc(m.hub)}</code></a>` : ''}${m.preview ? ` · <a href="${HUB}/${esc(m.preview)}">preview</a>` : ''}${m.note ? `<br><small class="${/GAP/.test(m.note) ? 'miss' : 'n'}">${esc(m.note)}</small>` : ''}`;
  const css = `:root{--bg:#FAFAFA;--ink:#0A0A0A;--muted:#737373;--line:#E5E5E5;--card:#fff;color-scheme:light dark}
@media (prefers-color-scheme:dark){:root{--bg:#0A0A0A;--ink:#FAFAFA;--muted:#A3A3A3;--line:#262626;--card:#111}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:14px/1.5 ui-sans-serif,system-ui,sans-serif}a{color:inherit}
.wrap{max-width:1280px;margin:0 auto;padding:40px 24px 80px}h1{font-size:34px;letter-spacing:-.03em;margin:0}h2{font-size:22px;letter-spacing:-.02em;margin:48px 0 12px}
p.l{color:var(--muted);max-width:780px}.dirs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:24px}
.dir{border:1px solid var(--line);border-radius:14px;background:var(--card);padding:16px}.dir b{font-size:16px}.dir small{display:block;color:var(--muted);margin-top:4px}
.sw{display:flex;gap:4px;margin-top:10px}.sw i{width:22px;height:22px;border-radius:6px;border:1px solid var(--line)}.dir a.go{display:inline-block;margin-top:10px;font-weight:600}
.tw{overflow-x:auto;border:1px solid var(--line);border-radius:12px;background:var(--card)}table{width:100%;border-collapse:collapse;font-size:12.5px}
th,td{padding:8px 10px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top;min-width:120px}th{font-weight:600;background:color-mix(in srgb,var(--line) 40%,transparent)}
td a{text-decoration:underline;text-underline-offset:2px}small{color:var(--muted)}.miss{color:#DC2626}code{font:11.5px ui-monospace,monospace;overflow-wrap:anywhere}
@media (max-width:760px){.dirs{grid-template-columns:1fr}}`;
  const dirCard = (d) => { const D = DIRS[d]; const t = D.tokens.light; return `<article class="dir"><b>${d.toUpperCase()} · ${esc(D.name)}</b><small>vs: ${esc(D.vs)} · ${esc(D.libs)}</small><small>${esc(D.type)}</small><div class="sw">${['bg', 'line', 'muted', 'ink', 'accent'].map((k) => `<i title="${k} ${t[k]}" style="background:${t[k]}"></i>`).join('')}<i title="dark accent ${D.tokens.dark.accent}" style="background:${D.tokens.dark.accent}"></i></div><a class="go" href="../?skin=${d}">Open the site in style ${d.toUpperCase()} →</a></article>`; };
  const homeRows = MODULES.map(([k, label]) => `<tr><td>${esc(label)}<br><code>${k}</code></td>${['a', 'b', 'c'].map((d) => `<td>${cell(MAP[d][k])}<br><small>${shot(d, k)}</small></td>`).join('')}</tr>`).join('');
  const sshot = (d, k) => { const p = `shots/site/${d}/mod-${k}.webp`; return has(p) ? `<a href="${p}">ours ${d.toUpperCase()}</a>` : ''; };
  const sshots = (k, ds) => { const l = ds.map((d) => sshot(d, k)).filter(Boolean); return l.length ? `<br><small>${l.join(' · ')}</small>` : ''; };
  const siteRows = SITE_MAP.map(([pg, k, label, m]) => { const same = m.a === m.b && m.b === m.c; return `<tr><td>${esc(pg)}</td><td>${esc(label)}<br><code>${k}</code></td>${same ? `<td colspan="3">${cell(m.a)} <small>(shared; re-skinned by tokens)</small>${sshots(k, ['a', 'b', 'c'])}</td>` : ['a', 'b', 'c'].map((d) => `<td>${cell(m[d])}${sshots(k, [d])}</td>`).join('')}</tr>`; }).join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Design notes · Agent Academy</title><meta name="description" content="Every module of Agent Academy mapped to the UI Hub component it was built from, per site style A, B and C."><style>${css}</style></head><body>
<main class="wrap"><p><a href="../">← Agent Academy</a></p><h1>Design notes: three site styles</h1><p class="l">Agent Academy ships three switchable styles (top-right A / B / C switcher, saved in your browser; or add <code>?skin=a|b|c</code> to any URL). Light and dark are a separate toggle. Each style is neutral + one accent with its own fonts and signature modules, built only from UI Hub components ported from their original code. The tables map every module to its Hub component, library, Hub id and Hub preview.</p>
<div class="dirs">${['a', 'b', 'c'].map(dirCard).join('')}</div>
<h2>Every page (inner pages)</h2><div class="tw"><table><thead><tr><th>Page</th><th>Module</th><th>A · ${esc(DIRS.a.name)}</th><th>B · ${esc(DIRS.b.name)}</th><th>C · ${esc(DIRS.c.name)}</th></tr></thead><tbody>${siteRows}</tbody></table></div>
<h2>Home page</h2><div class="tw"><table><thead><tr><th>Module</th><th>A</th><th>B</th><th>C</th></tr></thead><tbody>${homeRows}</tbody></table></div>
</main></body></html>`;
}
