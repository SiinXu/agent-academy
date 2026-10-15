// Site chrome for the three skins: header (A shadcn Tabs · B Aceternity Floating Dock · C Cult Direction Aware Tabs),
// the A/B/C style switcher (shadcn Toggle Group), language Select, light/dark toggle, and the per-skin footers.
// All three headers/footers are in every page; CSS shows the one matching <html data-skin>.
import { ic } from '../directions/src/icons.mjs';

export function makeChrome({ BASE, REPO, UPDATED, LOCALES, UI, t, esc }) {
  const u = (p = '') => BASE + p.replace(/^\//, '');
  const i = (k) => `<span data-i="${k}">${esc(t(k))}</span>`;
  const MAIN = [['', 'nav.home', 'home'], ['library/', 'nav.library', 'library'], ['courses/', 'nav.courses', 'book'], ['templates/', 'nav.templates', 'doc'], ['latest/', 'nav.latest', 'rss'], ['changelog/', 'nav.changelog', 'layers']];
  const MORE = [['sources/', 'nav.sources', 'globe'], ['agents/', 'nav.agents', 'bot']];
  const cur = (active, k) => (active === k ? ' aria-current="page"' : '');
  const skinSw = (cls = '') => `<div class="skin-sw ${cls}" role="group" aria-label="${esc(t('nav.skin'))}" data-i-aria="nav.skin">${['a', 'b', 'c'].map((s) => `<button type="button" data-skin-set="${s}" title="${s.toUpperCase()} · ${esc(t('skin.' + s))}" data-i-title="skin.${s}" aria-label="${s.toUpperCase()} · ${esc(t('skin.' + s))}"><i class="sw-dot sw-${s}" aria-hidden="true"></i>${s.toUpperCase()}</button>`).join('')}</div>`;
  const langSel = () => `<select class="lang-sel" aria-label="${esc(t('nav.lang'))}" data-i-aria="nav.lang">${LOCALES.map((l) => `<option value="${l}">${esc(UI[l].lang_name)}</option>`).join('')}</select>`;
  const themeBtn = (cls) => `<button class="${cls}" type="button" data-theme-toggle aria-label="${esc(t('nav.theme'))}" data-i-aria="nav.theme">${ic('sun', 'ic i-sun')}${ic('moon', 'ic i-moon')}</button>`;
  const tools = (btnCls) => `<div class="tools">${skinSw()}${langSel()}${themeBtn(btnCls)}</div>`;
  const menu = (active, btnCls) => `<details class="m-menu"><summary class="${btnCls}" aria-label="${esc(t('nav.menu'))}" data-i-aria="nav.menu">${ic('bars')}</summary><nav class="m-list" aria-label="Mobile">${[...MAIN, ...MORE].map(([h, k, icn]) => `<a href="${u(h)}"${cur(active, k)}>${ic(icn)}${i(k)}</a>`).join('')}<div class="m-lang">${ic('globe')}${langSel()}</div></nav></details>`;

  function header(active) {
    const a = `<header class="nav sk-hdr" data-sk-only="a" data-mod="nav"><div class="wrap"><a class="logo" href="${u()}"><span class="logo-m">${ic('sparkles')}</span>Agent Academy</a>
<nav class="tabs-list" aria-label="Main">${MAIN.map(([h, k]) => `<a href="${u(h)}"${cur(active, k)}>${i(k)}</a>`).join('')}</nav>
<div class="nav-r">${tools('btn btn-g btn-ic')}${menu(active, 'btn btn-o btn-ic')}</div></div></header>`;
    const dock = [...MAIN, ...MORE];
    const b = `<header class="top sk-hdr" data-sk-only="b" data-mod="nav"><div class="wrap"><a class="brand" aria-label="Agent Academy" href="${u()}"><i>${ic('sparkles')}</i><span>Agent Academy</span></a>
<nav class="dock" data-dock aria-label="Main">${dock.map(([h, k, icn]) => `<a class="dock-item" href="${u(h)}" aria-label="${esc(t(k))}" data-i-aria="${k}"${cur(active, k)}><span class="dock-tip">${i(k)}</span><span class="dock-ic">${ic(icn)}</span></a>`).join('')}<span class="dock-sep"></span><button class="dock-item" type="button" data-theme-toggle aria-label="${esc(t('nav.theme'))}" data-i-aria="nav.theme"><span class="dock-tip">${i('nav.theme')}</span><span class="dock-ic">${ic('sun', 'ic i-sun')}${ic('moon', 'ic i-moon')}</span></button></nav>
<div class="tools tools-b">${skinSw()}${langSel()}</div>
<div class="dock-m"><button type="button" aria-expanded="false" aria-label="${esc(t('nav.menu'))}" data-i-aria="nav.menu" data-dock-m>${ic('menu')}</button><ul>${dock.map(([h, k, icn], n) => `<li style="--i:${n}"><a href="${u(h)}" aria-label="${esc(t(k))}" data-i-aria="${k}"${cur(active, k)}>${ic(icn)}</a></li>`).join('')}<li style="--i:${dock.length}"><button type="button" data-theme-toggle aria-label="${esc(t('nav.theme'))}" data-i-aria="nav.theme">${ic('sun', 'ic i-sun')}${ic('moon', 'ic i-moon')}</button></li></ul></div></div></header>`;
    const c = `<header class="nav sk-hdr" data-sk-only="c" data-mod="nav"><div class="wrap"><a class="logo" href="${u()}">Agent <i>Academy</i></a>
<nav class="da" data-da-tabs aria-label="Main"><span class="da-bubble" aria-hidden="true"></span>${MAIN.map(([h, k, icn]) => `<a href="${u(h)}"${cur(active, k)}>${ic(icn)}${i(k)}</a>`).join('')}</nav>
<div class="nav-r">${tools('btn btn-g btn-ic')}${menu(active, 'btn btn-o btn-ic')}</div></div></header>`;
    return a + b + c;
  }
  const cols = () => `<div><h3 class="fh">${i('footer.learn')}</h3><ul>${[['courses/', 'nav.courses'], ['library/', 'nav.library'], ['templates/', 'nav.templates'], ['latest/', 'nav.latest'], ['changelog/', 'nav.changelog']].map(([h, k]) => `<li><a href="${u(h)}">${i(k)}</a></li>`).join('')}</ul></div>
<div><h3 class="fh">${i('nav.agents')}</h3><ul><li><a href="${u('agents/')}">${i('footer.endpoints')}</a></li><li><a href="${u('llms.txt')}">llms.txt</a></li><li><a href="${u('agent.md')}">agent.md</a></li><li><a href="${u('api/index.json')}">JSON API</a></li><li><a href="${u('feed.xml')}">${i('footer.feed')}</a></li></ul></div>
<div><h3 class="fh">${i('footer.project')}</h3><ul><li><a href="https://github.com/${REPO}">GitHub</a></li><li><a href="${u('sources/')}">${i('nav.sources')}</a></li><li><a href="https://siinxu.github.io/ui-resource-hub/">UI Hub</a></li><li><a href="${u('directions/')}">${i('footer.design')}</a></li></ul></div>`;
  const upd = `${i('footer.updated')} <time class="ts" datetime="${UPDATED}">${UPDATED.slice(0, 16).replace('T', ' ')} UTC</time>`;
  function footer() {
    const a = `<footer class="foot sk-ftr" data-sk-only="a" data-mod="footer"><div class="wrap"><div><a class="logo" href="${u()}"><span class="logo-m">${ic('sparkles')}</span>Agent Academy</a><p>${i('footer.note')}</p></div>${cols()}</div>
<div class="foot-b"><div class="wrap"><span>${upd}</span><span>${i('skin.a_full')}</span></div></div></footer>`;
    const b = `<footer class="foot sk-ftr" data-sk-only="b" data-mod="footer"><div class="wrap"><div><a class="brand" aria-label="Agent Academy" style="position:static" href="${u()}"><i>${ic('sparkles')}</i>Agent Academy</a><p>${i('footer.note')}</p></div>${cols().replaceAll('<h3 class="fh">', '<h3 class="fh lbl">')}</div>
<div class="foot-b"><div class="wrap"><span class="lbl">${upd}</span><span class="lbl">${i('skin.b_full')}</span></div></div></footer>`;
    const c = `<footer class="foot sk-ftr" data-sk-only="c" data-mod="footer"><div class="wrap"><div><a class="logo" href="${u()}">Agent <i>Academy</i></a><p>${i('footer.note')}</p></div>${cols()}</div>
<p class="foot-big" aria-hidden="true" data-t="Agent "><i data-t="Academy"></i></p>
<div class="foot-b"><div class="wrap"><span>${upd}</span><span>${i('skin.c_full')}</span></div></div></footer>`;
    return a + b + c;
  }
  return { header, footer, skinSw, langSel, themeBtn };
}
