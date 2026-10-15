// Index of the three directions + the module → UI Hub component mapping table.
import fs from 'node:fs';
import path from 'node:path';
export function indexPage(X) {
  const { esc, MAP, DIRS, MODULES, OUT } = X;
  const HUB = 'https://siinxu.github.io/ui-resource-hub';
  const has = (p) => fs.existsSync(path.join(OUT, p));
  const shot = (d, k) => { const p = `shots/${d}/mod-${k}.webp`; return has(p) ? `<a href="${p}">ours</a>` : '<span class="miss">missing</span>'; };
  const css = `:root{--bg:#FAFAFA;--ink:#0A0A0A;--muted:#737373;--line:#E5E5E5;--card:#fff}.dark{--bg:#0A0A0A;--ink:#FAFAFA;--muted:#A3A3A3;--line:#262626;--card:#111}
${X.MOCKBAR_CSS}
body{background:var(--bg);color:var(--ink);font:14px/1.5 "Geist",system-ui,sans-serif}
.wrap{max-width:1280px;margin:0 auto;padding:40px 24px 80px}
h1{font-size:36px;letter-spacing:-.03em;margin:0}h2{font-size:22px;letter-spacing:-.02em;margin:48px 0 12px}
p.l{color:var(--muted);max-width:760px}
.dirs{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px}
.dir{border:1px solid var(--line);border-radius:14px;background:var(--card);overflow:hidden;display:flex;flex-direction:column}
.dir img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;object-position:top;border-bottom:1px solid var(--line)}
.dir div{padding:14px 16px}.dir b{font-size:16px}.dir small{display:block;color:var(--muted);margin-top:4px}
.sw{display:flex;gap:4px;margin-top:10px}.sw i{width:22px;height:22px;border-radius:6px;border:1px solid var(--line)}
.dir a.go{display:inline-block;margin-top:10px;font-weight:500;text-decoration:underline}
table{width:100%;border-collapse:collapse;font-size:12.5px;background:var(--card);border:1px solid var(--line);border-radius:12px;overflow:hidden}
th,td{padding:7px 9px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}th{font-weight:600;background:color-mix(in srgb,var(--line) 40%,transparent)}
td a{text-decoration:underline;text-underline-offset:2px}.miss{color:#B91C1C}
.tw{overflow-x:auto}code{font:12px "Geist Mono",monospace}`;
  const card = (d) => { const D = DIRS[d]; const t = D.tokens.light; return `<article class="dir"><img src="shots/${d}-desktop-light.webp" alt="Direction ${d.toUpperCase()} desktop, light" loading="lazy"><div><b>${d.toUpperCase()} · ${esc(D.name)}</b><small>vs: ${esc(D.vs)} · ${esc(D.libs)}</small><div class="sw">${['bg', 'line', 'muted', 'ink', 'accent'].map((k) => `<i title="${k} ${t[k]}" style="background:${t[k]}"></i>`).join('')}<i title="dark accent ${D.tokens.dark.accent}" style="background:${D.tokens.dark.accent}"></i></div><a class="go" href="${d}.html">Open ${d}.html</a> · <a href="${d}.html?theme=dark">dark</a></div></article>`; };
  const rows = (d) => MODULES.map(([k, label]) => { const m = MAP[d][k]; return `<tr><td>${esc(label)}<br><code>${k}</code></td><td><a href="${esc(m.url)}">${esc(m.comp)}</a></td><td>${esc(m.lib)}</td><td><a href="${HUB}/#/r/${esc(m.hub)}"><code>${esc(m.hub)}</code></a></td><td><a href="${HUB}/${esc(m.preview)}">${esc(m.preview.split('/').pop())}</a></td><td>${shot(d, k)}</td><td><code>${esc(m.orig)}</code>${m.note ? `<br>${esc(m.note)}` : ''}</td></tr>`; }).join('');
  return `${X.head('index', 'Directions', css)}<body>${X.mockBar('a').replace('Direction A · Zinc + Indigo · mock with real data', 'Agent Academy · home-page directions').replace(' aria-current="page"', '')}
<main class="wrap"><h1>Three home-page directions</h1><p class="l">Each direction is neutral + one accent, built only from UI Hub components ported from their original code. Every module below maps to one Hub component, with its library, Hub id, the Hub preview and a screenshot of our implementation. Pick one; the full site gets built only after that.</p>
<div class="dirs">${['a', 'b', 'c'].map(card).join('')}</div>
${['a', 'b', 'c'].map((d) => `<h2>${d.toUpperCase()} · ${esc(DIRS[d].name)} <small style="font-weight:400;color:var(--muted)">vs ${esc(DIRS[d].vs)}</small></h2><div class="tw"><table><thead><tr><th>Module</th><th>Hub component</th><th>Library</th><th>Hub id</th><th>Hub preview</th><th>Our shot</th><th>Ported from</th></tr></thead><tbody>${rows(d)}</tbody></table></div>`).join('')}
</main>${X.tail()}`;
}
