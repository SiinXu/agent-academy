/* Agent Academy client: i18n, theme, generator, library, motion. No dependencies. */
(() => {
  const AA = window.AA || {}; const B = AA.base || '/'; const d = document.documentElement;
  const $ = (s, r = document) => r.querySelector(s); const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lang = d.dataset.lang || 'en'; let I = null; const cache = {};
  const getJSON = (p) => (cache[p] ||= fetch(B + p).then((r) => (r.ok ? r.json() : null)).catch(() => null));
  const T = (k) => (I && I.ui[k]) || k;
  const TX = (g, k) => (I && I.tax[g] && I.tax[g][k]) || k;

  // ---------- i18n
  async function applyLang(l) {
    lang = l; d.lang = l; d.dataset.lang = l;
    I = await getJSON(`assets/i18n/${l}.json`);
    if (!I) { d.classList.remove('i18n-wait'); return; }
    $$('[data-i]').forEach((e) => { e.textContent = T(e.dataset.i); });
    $$('[data-i-ph]').forEach((e) => { e.placeholder = T(e.dataset.iPh); });
    $$('[data-i-aria]').forEach((e) => { e.setAttribute('aria-label', T(e.dataset.iAria)); });
    $$('[data-tx]').forEach((e) => { const [g, k] = e.dataset.tx.split('.'); let s = TX(g, k); if (e.dataset.soon) s += ' · ' + T('fac.soon'); e.textContent = s; });
    $$('[data-only]').forEach((e) => { e.hidden = true; });
    const only = $$(`[data-only="${l}"]`); (only.length ? only : $$('[data-only="en"]')).forEach((e) => (e.hidden = false));
    const sel = $('#lang'); if (sel) sel.value = l;
    const gl = $('#g-lang'); if (gl && !gl.dataset.touched) gl.value = l;
    localTimes();
    await translateContent();
    d.classList.remove('i18n-wait');
    if (window.__gen) window.__gen();
  }
  async function translateContent() {
    const els = $$('[data-sid]'); const xs = $$('[data-x]');
    if (lang === 'en') { els.forEach(restore); xs.forEach(restore); return; }
    let map = null;
    if (AA.page && AA.page.sum) { map = {}; for (const [id, v] of Object.entries(AA.page.sum)) map[id] = v[lang]; }
    else if (els.length) map = await getJSON(`api/l10n/${lang}.json`);
    els.forEach((e) => { const s = map && map[e.dataset.sid]; if (s) swap(e, s); else restore(e); });
    if (xs.length) { const tx = await getJSON('api/l10n/texts.json'); xs.forEach((e) => { const s = tx && tx[lang] && tx[lang][e.dataset.x]; if (s) swap(e, s); else restore(e); }); }
  }
  function swap(e, s) { if (!e.dataset.orig) e.dataset.orig = e.textContent; e.textContent = s; e.title = (I ? T('card.mt') : 'Machine translated') + ' · ' + T('card.orig') + ': ' + e.dataset.orig.slice(0, 300); e.classList.add('is-mt'); }
  function restore(e) { if (e.dataset.orig) { e.textContent = e.dataset.orig; e.removeAttribute('title'); e.classList.remove('is-mt'); } }
  function localTimes() {
    $$('time.ts').forEach((e) => { try { e.textContent = new Intl.DateTimeFormat(lang, { dateStyle: 'medium', timeStyle: e.closest('.foot') ? 'short' : undefined }).format(new Date(e.dateTime)); } catch (_) {} });
  }
  $('#lang')?.addEventListener('change', (ev) => { try { localStorage.setItem('aa-lang', ev.target.value); } catch (_) {} const u = new URL(location.href); u.searchParams.delete('lang'); history.replaceState(null, '', u); applyLang(ev.target.value); });

  // ---------- theme
  $('.theme')?.addEventListener('click', () => { const n = d.dataset.theme === 'dark' ? 'light' : 'dark'; d.dataset.theme = n; try { localStorage.setItem('aa-theme', n); } catch (_) {} });

  // ---------- copy
  async function copy(text, btn) {
    try { await navigator.clipboard.writeText(text); } catch (_) { const ta = document.createElement('textarea'); ta.value = text; document.body.append(ta); ta.select(); document.execCommand('copy'); ta.remove(); }
    if (btn) { const o = btn.textContent; btn.textContent = T('qs.copied'); setTimeout(() => (btn.textContent = o), 1400); }
  }
  document.addEventListener('click', (e) => { const b = e.target.closest('[data-copy]'); if (b) copy(b.dataset.copy, b); });

  // ---------- count-up (once, when visible)
  const io = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach((en) => { if (!en.isIntersecting) return; io.unobserve(en.target); tick(en.target); }), { threshold: .4 }) : null;
  function tick(el) { const n = +el.dataset.count; if (RM || !n || window.__noTick) return; const t0 = performance.now(); const f = (t) => { const p = Math.min(1, (t - t0) / 900); el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))).toLocaleString(lang); if (p < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); }
  $$('[data-count]').forEach((e) => { e.textContent = (+e.dataset.count).toLocaleString(); io ? io.observe(e) : 0; });

  // ---------- course chain (Rive-style traveler: steps through once when scrolled in, then waits for clicks)
  const chips = $$('.chip-step');
  function selectStep(s) { chips.forEach((c) => { const on = c.dataset.step === s; c.classList.toggle('on', on); c.setAttribute('aria-pressed', on); }); $$('.step-panel').forEach((p) => (p.hidden = p.dataset.panel !== s)); }
  chips.forEach((c) => c.addEventListener('click', () => { travelling = false; selectStep(c.dataset.step); }));
  let travelling = false;
  if (chips.length && io && !RM) { const o2 = new IntersectionObserver((es) => { if (es[0].isIntersecting) { o2.disconnect(); travelling = true; let k = 0; const step = () => { if (!travelling) return; k++; if (k >= chips.length) { selectStep(chips[0].dataset.step); travelling = false; return; } selectStep(chips[k].dataset.step); setTimeout(step, 1600); }; setTimeout(step, 1600); } }, { threshold: .6 }); o2.observe($('.chain')); }

  // ---------- pause offscreen animations
  if (io) { const po = new IntersectionObserver((es) => es.forEach((en) => en.target.style.setProperty('--play', en.isIntersecting ? 'running' : 'paused'))); $$('.orbit,.mq,.hero-bg,.shine').forEach((e) => po.observe(e)); }

  // ---------- before/after + tilt
  const ba = $('.ba');
  if (ba) {
    const r = $('.ba-range', ba); r.addEventListener('input', () => ba.style.setProperty('--x', r.value + '%'));
    if (!RM && matchMedia('(hover: hover)').matches) { ba.addEventListener('pointermove', (e) => { const b = ba.getBoundingClientRect(); ba.style.setProperty('--ry', ((e.clientX - b.left) / b.width - .5) * 6 + 'deg'); ba.style.setProperty('--rx', -((e.clientY - b.top) / b.height - .5) * 6 + 'deg'); }); ba.addEventListener('pointerleave', () => { ba.style.setProperty('--rx', '0deg'); ba.style.setProperty('--ry', '0deg'); }); }
  }

  // ---------- prompt generator (Quick start)
  const gen = $('#gen');
  if (gen && AA.page && AA.page.kind === 'home') {
    const P = AA.page; const prof = $('#g-prof'), role = $('#g-role'), style = $('#g-style'), sw = $('#g-style-wrap'), gl = $('#g-lang'), plat = $('#g-plat'), safe = $('#g-safe'), goal = $('#g-goal'), out = $('#g-prompt'), files = $('#g-files');
    const fill = () => { const cur = role.value; role.innerHTML = (P.roles[prof.value] || []).map((r) => `<option value="${r}">${TX('roles', r)}</option>`).join(''); if ([...role.options].some((o) => o.value === cur)) role.value = cur; sw.hidden = prof.value !== 'design'; };
    const PLAT = { 'claude-code': 'shell', codex: 'shell', shell: 'shell', cursor: 'cursor', 'grok-bot': 'read', chatgpt: 'read', readonly: 'read' };
    const fmt = (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? '');
    function render() {
      fill();
      const L = gl.value; const t = P.prompt[L] || P.prompt.en; const cid = `${prof.value}/${role.value}`; const c = P.courses[cid]; if (!c) return;
      const names = I && I.tax ? I.tax : null; // UI language names; the prompt uses the chosen reply language for names when available
      const tok = (render.tok = (render.tok || 0) + 1);
      getJSON(`assets/i18n/${L}.json`).then((J) => {
        if (tok !== render.tok) return;
        const nm = (g, k) => (J && J.tax[g][k]) || (names && names[g][k]) || k;
        const v = { site: AA.site + '/', goal: goal.value.trim() || (J ? J.ui['qs.bot_ph'] : ''), prof: nm('industries', prof.value), role: nm('roles', role.value), lang: J ? J.ui.lang_name : L, course: c.course, json: c.json, pack: c.pack, changes: P.changes, uihub: P.uihub, style: style.value, vs: style.value };
        const lines = [fmt(t.intro, v), '', fmt(t.goal, v), fmt(t.job, v), fmt(t.lang, v), '', fmt(t.s1, v), fmt(t.s2, v)];
        if (prof.value === 'design') lines.push(fmt(style.value ? t.style : t.style_any, v));
        lines.push(t.s3, fmt(t[PLAT[plat.value]], v), safe.checked ? t.safe_on : t.safe_off, t.s6, '', fmt(t.updates, v));
        out.textContent = lines.join('\n'); if (!RM) { out.classList.remove('flash'); void out.offsetWidth; out.classList.add('flash'); }
        const fl = [['course.md', c.course], ['course.json', c.json], ['skill pack', c.pack]]; if (prof.value === 'design') fl.push(['UI Hub API', P.uihub], ['design case', P.caseRaw]); fl.push(['changes', P.changes]);
        files.innerHTML = fl.map(([k, h]) => `<li><span>${k}</span><a href="${h}">${h.replace(/^https:\/\//, '')}</a></li>`).join('');
      });
    }
    window.__gen = render;
    [prof, role, style, plat, safe].forEach((e) => e.addEventListener('change', render)); gl.addEventListener('change', () => { gl.dataset.touched = 1; render(); });
    let to; goal.addEventListener('input', () => { clearTimeout(to); to = setTimeout(render, 250); });
    const PRE = { cs: ['customer-service', 'ecommerce-support', '', 'grok-bot', 'Answer refund and order-status emails for my Shopify store'], mk: ['marketing', 'seo-specialist', '', 'claude-code', 'Plan and write SEO blog posts for a B2B SaaS'], ds: ['design', 'ui-designer', 'motion', 'cursor', 'Design a landing page that does not look like a template'] };
    $$('[data-preset]').forEach((b) => b.addEventListener('click', () => { const [p, r, s, pl, g] = PRE[b.dataset.preset]; prof.value = p; fill(); role.value = r; style.value = s; plat.value = pl; goal.value = g; render(); }));
    $('#g-copy').addEventListener('click', (e) => copy(out.textContent, e.currentTarget));
    $('[data-preset="ds"]').click(); gl.value = lang; render();
  }

  // ---------- library (client-side filter, 48 per page)
  const grid = $('#lf-grid');
  if (grid && AA.page && AA.page.kind === 'library') {
    const st = { q: '', ind: '', type: '', safe: false, page: 1 }; const PER = 48; let idx = null; let tr = null;
    const qp = new URLSearchParams(location.search); st.ind = qp.get('ind') || ''; st.type = qp.get('type') || ''; st.q = qp.get('q') || ''; st.page = +qp.get('page') || 1;
    $('#lf-q').value = st.q; $('#lf-type').value = st.type; $$('.seg').forEach((s) => s.classList.toggle('on', s.dataset.ind === st.ind));
    const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const OPEN = ['customer-service', 'marketing', 'design'];
    const tag = (on, y, n) => `<span class="tg ${on ? 'warn' : 'ok'}">${esc(T(on ? y : n))}</span>`;
    const cardH = (i) => { const s = (tr && tr[i.id]) || i.s; return `<article class="card fac-${OPEN.includes(i.in) ? i.in : 'other'}"><div class="card-top"><span class="pill">${esc(TX('types', i.ty))}</span><span class="card-ind">${esc(TX('industries', i.in))}</span></div><h3 class="card-h"><a href="${B}r/${i.id}/">${esc(i.t)}</a></h3><p class="card-s"${tr && tr[i.id] ? ` title="${esc(T('card.mt'))}"` : ''}>${esc(s)}</p><p class="card-src">${esc(i.h)}</p><div class="card-foot"><span class="tags">${tag(i.c, 'tag.cred_yes', 'tag.cred_no')}${tag(i.w, 'tag.send_yes', 'tag.send_no')}</span><span class="lic">${esc(i.li)}</span></div></article>`; };
    async function run(push) {
      if (!idx) idx = (await getJSON('api/search-index.json')).items.sort((a, b) => b.q - a.q);
      tr = lang === 'en' ? null : await getJSON(`api/l10n/${lang}.json`);
      const q = st.q.toLowerCase().trim();
      const res = idx.filter((i) => (!st.ind || i.in === st.ind) && (!st.type || i.ty === st.type) && (!st.safe || (!i.c && !i.w)) && (!q || (i.t + ' ' + i.s + ' ' + i.h + ' ' + ((tr && tr[i.id]) || '')).toLowerCase().includes(q)));
      const pages = Math.max(1, Math.ceil(res.length / PER)); st.page = Math.min(st.page, pages);
      grid.innerHTML = res.slice((st.page - 1) * PER, st.page * PER).map(cardH).join('');
      $('#lf-n').textContent = res.length.toLocaleString(lang); $('#lf-empty').hidden = res.length > 0;
      const pg = $('#lf-pager'); const nums = []; for (let p = 1; p <= pages; p++) if (p === 1 || p === pages || Math.abs(p - st.page) <= 2) nums.push(p); else if (nums[nums.length - 1] !== '…') nums.push('…');
      pg.innerHTML = pages < 2 ? '' : `<button type="button" data-p="${st.page - 1}" ${st.page === 1 ? 'disabled' : ''}>${esc(T('lib.prev'))}</button>` + nums.map((p) => (p === '…' ? '<span aria-hidden="true">…</span>' : `<button type="button" data-p="${p}" ${p === st.page ? 'aria-current="page"' : ''} aria-label="${esc(T('lib.page'))} ${p}">${p}</button>`)).join('') + `<button type="button" data-p="${st.page + 1}" ${st.page === pages ? 'disabled' : ''}>${esc(T('lib.next'))}</button>`;
      if (push) { const u = new URL(location.href); ['ind', 'type', 'q', 'page'].forEach((k) => u.searchParams.delete(k)); if (st.ind) u.searchParams.set('ind', st.ind); if (st.type) u.searchParams.set('type', st.type); if (st.q) u.searchParams.set('q', st.q); if (st.page > 1) u.searchParams.set('page', st.page); history.replaceState(null, '', u); }
    }
    $('#lf-pager').addEventListener('click', (e) => { const b = e.target.closest('[data-p]'); if (!b || b.disabled) return; st.page = +b.dataset.p; run(true); $('.filters').scrollIntoView({ block: 'start', behavior: RM ? 'auto' : 'smooth' }); });
    $$('.seg').forEach((s) => s.addEventListener('click', () => { $$('.seg').forEach((x) => x.classList.toggle('on', x === s)); st.ind = s.dataset.ind; st.page = 1; run(true); }));
    $('#lf-type').addEventListener('change', (e) => { st.type = e.target.value; st.page = 1; run(true); });
    $('#lf-safe').addEventListener('change', (e) => { st.safe = e.target.checked; st.page = 1; run(true); });
    let to; $('#lf-q').addEventListener('input', (e) => { clearTimeout(to); to = setTimeout(() => { st.q = e.target.value; st.page = 1; run(true); }, 200); });
    $('#lf-clear').addEventListener('click', () => { Object.assign(st, { q: '', ind: '', type: '', safe: false, page: 1 }); $('#lf-q').value = ''; $('#lf-type').value = ''; $('#lf-safe').checked = false; $$('.seg').forEach((x) => x.classList.toggle('on', !x.dataset.ind)); run(true); });
    $('#lf').addEventListener('submit', (e) => e.preventDefault());
    const prev = window.__libLang; window.__libRun = () => run(false);
    run(false);
  }
  const _apply = applyLang; applyLang = async (l) => { await _apply(l); if (window.__libRun) window.__libRun(); };
  applyLang(lang);
})();
