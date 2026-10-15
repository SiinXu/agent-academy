/* Agent Academy client: i18n (10 locales), copy, tabs, library + template filters. No dependencies.
   Theme, skin switching and all component motion live in engine.js. */
(() => {
  const AA = window.AA || {}; const B = AA.base || '/'; const d = document.documentElement;
  const $ = (s, r = document) => r.querySelector(s); const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  let lang = d.dataset.lang || 'en'; let I = null; const cache = {};
  const getJSON = (p) => (cache[p] ||= fetch(B + p).then((r) => (r.ok ? r.json() : null)).catch(() => null));
  const T = (k) => (I && I.ui[k]) || k;
  const TX = (g, k) => (I && I.tax[g] && I.tax[g][k]) || k;
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  window.__T = T; window.__TX = TX;

  // ---------- i18n
  async function applyLang(l) {
    lang = l; d.lang = l; d.dataset.lang = l;
    I = await getJSON(`assets/i18n/${l}.json`);
    if (!I) { d.classList.remove('i18n-wait'); return; }
    const nf = new Intl.NumberFormat(l);
    $$('[data-i]').forEach((e) => { e.textContent = T(e.dataset.i); });
    $$('[data-i-n]').forEach((e) => { e.textContent = T(e.dataset.iN).replace('{n}', nf.format(+e.dataset.n)); });
    $$('[data-i-ph]').forEach((e) => { e.placeholder = T(e.dataset.iPh); });
    $$('[data-i-aria]').forEach((e) => { e.setAttribute('aria-label', T(e.dataset.iAria)); });
    $$('[data-i-title]').forEach((e) => { const s = e.dataset.skinSet ? e.dataset.skinSet.toUpperCase() + ' · ' : ''; e.title = s + T(e.dataset.iTitle); e.setAttribute('aria-label', e.title); });
    $$('[data-tx]').forEach((e) => { const [g, k] = e.dataset.tx.split('.'); e.textContent = TX(g, k); });
    $$('[data-rotate-tx]').forEach((e) => { const [g, ks] = e.dataset.rotateTx.split(':'); const w = ks.split(',').map((k) => TX(g, k)); e.dataset.wordRotate = JSON.stringify(w); const sp = e.firstElementChild; if (sp && !w.includes(sp.textContent)) sp.textContent = w[0]; });
    $$('[data-only]').forEach((e) => { e.hidden = true; });
    const only = $$(`[data-only="${l}"]`); (only.length ? only : $$('[data-only="en"]')).forEach((e) => (e.hidden = false));
    $$('.lang-sel').forEach((s) => { s.value = l; });
    localTimes();
    await translateContent();
    d.classList.remove('i18n-wait');
    dispatchEvent(new Event('aa-i18n'));
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
  function swap(e, s) { if (!e.dataset.orig) e.dataset.orig = e.textContent; e.textContent = s; e.title = T('card.mt') + ' · ' + T('card.orig') + ': ' + e.dataset.orig.slice(0, 300); e.classList.add('is-mt'); }
  function restore(e) { if (e.dataset.orig) { e.textContent = e.dataset.orig; e.removeAttribute('title'); e.classList.remove('is-mt'); } }
  function localTimes() {
    $$('time.ts').forEach((e) => { try { const dt = new Date(e.dateTime); const full = e.dateTime.length > 10 && !/T12:00:00Z$/.test(e.dateTime); e.textContent = new Intl.DateTimeFormat(lang, full && e.closest('.foot') ? { dateStyle: 'medium', timeStyle: 'short' } : { dateStyle: 'medium' }).format(dt); } catch (_) {} });
  }
  $$('.lang-sel').forEach((sel) => sel.addEventListener('change', (ev) => { try { localStorage.setItem('aa-lang', ev.target.value); } catch (_) {} const u = new URL(location.href); u.searchParams.delete('lang'); history.replaceState(null, '', u); applyLang(ev.target.value); }));

  // ---------- copy (any [data-copy="value"])
  async function copy(text, btn) {
    try { await navigator.clipboard.writeText(text); } catch (_) { const ta = document.createElement('textarea'); ta.value = text; document.body.append(ta); ta.select(); document.execCommand('copy'); ta.remove(); }
    if (btn) { const lab = btn.querySelector('[data-i]') || btn; const k = lab.dataset.i; lab.textContent = T('qs.copied'); btn.dataset.copied = 'true'; setTimeout(() => { lab.textContent = k ? T(k) : lab.textContent; btn.dataset.copied = 'false'; }, 1400); }
  }
  document.addEventListener('click', (e) => { const b = e.target.closest('[data-copy]'); if (b && b.dataset.copy) copy(b.dataset.copy, b); });

  // ---------- shadcn Tabs (latest / trending), arrow-key roving focus
  $$('[data-tabs]').forEach((box) => {
    const tabs = $$('[role="tab"]', box);
    const sel = (t) => { tabs.forEach((x) => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; $('#' + x.getAttribute('aria-controls')).hidden = !on; }); };
    tabs.forEach((t, i) => { t.addEventListener('click', () => sel(t)); t.addEventListener('keydown', (e) => { const j = e.key === 'ArrowRight' ? (i + 1) % tabs.length : e.key === 'ArrowLeft' ? (i - 1 + tabs.length) % tabs.length : -1; if (j > -1) { e.preventDefault(); tabs[j].focus(); sel(tabs[j]); } }); });
    if (location.hash === '#trending') sel(tabs[1]);
  });

  // ---------- library + template library (client-side filter, 24 per page)
  const grid = $('#lf-grid');
  if (grid && AA.page && (AA.page.kind === 'library' || AA.page.kind === 'templates')) {
    const segBox = $('.seg-group'); const SEGK = segBox.dataset.key; const sel = $('#lf-sel'); const SELK = sel.dataset.key; const chip = grid.dataset.chip === '1';
    const st = { q: '', ind: '', type: '', safe: false, page: 1 }; const PER = 24; let idx = null; let tr = null;
    const qp = new URLSearchParams(location.search); st.ind = qp.get('ind') || ''; st.type = qp.get('type') || ''; st.q = qp.get('q') || ''; st.page = +qp.get('page') || 1; st.safe = qp.get('safe') === '1';
    const segs = $$('.seg', segBox);
    const syncUI = () => { $('#lf-q').value = st.q; sel.value = st[SELK]; $('#lf-safe').checked = st.safe; segs.forEach((s) => s.setAttribute('aria-pressed', s.dataset.v === st[SEGK] ? 'true' : 'false')); };
    syncUI();
    const OPENI = ['customer-service', 'marketing', 'design'];
    const sfTag = (on, y, n, ico) => `<span class="sf ${on ? 'warn' : 'ok'}">${ICONS[on ? ico : 'shield']}<span>${esc(T(on ? y : n))}</span></span>`;
    const ICONS = { key: $('#lf-icons [data-ic=key]')?.innerHTML || '', send: $('#lf-icons [data-ic=send]')?.innerHTML || '', shield: $('#lf-icons [data-ic=shield]')?.innerHTML || '' };
    const SRC = (i) => (i.ty === 'skill' ? 'SKILL.md' : i.sr === 'prompts.chat' ? 'prompts.chat · CC0' : i.sr === 'botsdots' ? 'BotsDots' : '');
    const cardH = (i) => { const s = (tr && tr[i.id]) || i.s; return `<article class="rc" data-spotlight-card><div class="rc-top"><span class="rc-type">${esc(TX('types', i.ty))}</span>${chip && SRC(i) ? `<span class="rc-chip">${esc(SRC(i))}</span>` : `<span class="rc-ind">${esc(TX('industries', i.in))}</span>`}</div><h3 class="rc-t"><a href="${B}r/${i.id}/">${esc(i.t)}</a></h3><p class="rc-s${tr && tr[i.id] ? ' is-mt' : ''}"${tr && tr[i.id] ? ` title="${esc(T('card.mt'))}"` : ''}>${esc(s)}</p><p class="rc-src">${esc(i.h)}</p><div class="rc-f"><span class="rc-tags">${sfTag(i.c, 'tag.cred_yes', 'tag.cred_no', 'key')}${sfTag(i.w, 'tag.send_yes', 'tag.send_no', 'send')}</span><span class="rc-lic">${esc(i.li)}</span></div></article>`; };
    const types = AA.page.types || null;
    async function run(push) {
      if (!idx) idx = (await getJSON('api/search-index.json')).items.filter((i) => !types || types.includes(i.ty)).sort((a, b) => b.q - a.q);
      tr = lang === 'en' ? null : await getJSON(`api/l10n/${lang}.json`);
      const q = st.q.toLowerCase().trim();
      const res = idx.filter((i) => (!st.ind || i.in === st.ind) && (!st.type || i.ty === st.type) && (!st.safe || (!i.c && !i.w)) && (!q || (i.t + ' ' + i.s + ' ' + i.h + ' ' + ((tr && tr[i.id]) || '')).toLowerCase().includes(q)));
      const pages = Math.max(1, Math.ceil(res.length / PER)); st.page = Math.min(st.page, pages);
      grid.innerHTML = res.slice((st.page - 1) * PER, st.page * PER).map(cardH).join('');
      window.__bindPointer && window.__bindPointer(grid);
      $('#lf-n').textContent = res.length.toLocaleString(lang); $('#lf-empty').hidden = res.length > 0;
      const pg = $('#lf-pager'); const nums = []; for (let p = 1; p <= pages; p++) if (p === 1 || p === pages || Math.abs(p - st.page) <= 1) nums.push(p); else if (nums[nums.length - 1] !== '…') nums.push('…');
      pg.innerHTML = pages < 2 ? '' : `<ul><li><button type="button" class="pg-nav" data-p="${st.page - 1}" ${st.page === 1 ? 'disabled' : ''} aria-label="${esc(T('lib.prev'))}"><span aria-hidden="true">‹</span><span class="pg-l">${esc(T('lib.prev'))}</span></button></li>` + nums.map((p) => (p === '…' ? '<li><span class="pg-el" aria-hidden="true">…</span></li>' : `<li><button type="button" data-p="${p}" ${p === st.page ? 'aria-current="page"' : ''} aria-label="${esc(T('lib.page'))} ${p}">${p}</button></li>`)).join('') + `<li><button type="button" class="pg-nav" data-p="${st.page + 1}" ${st.page === pages ? 'disabled' : ''} aria-label="${esc(T('lib.next'))}"><span class="pg-l">${esc(T('lib.next'))}</span><span aria-hidden="true">›</span></button></li></ul>`;
      if (push) { const u = new URL(location.href); ['ind', 'type', 'q', 'page', 'safe'].forEach((k) => u.searchParams.delete(k)); if (st.ind) u.searchParams.set('ind', st.ind); if (st.type) u.searchParams.set('type', st.type); if (st.q) u.searchParams.set('q', st.q); if (st.safe) u.searchParams.set('safe', '1'); if (st.page > 1) u.searchParams.set('page', st.page); history.replaceState(null, '', u); }
    }
    $('#lf-pager').addEventListener('click', (e) => { const b = e.target.closest('[data-p]'); if (!b || b.disabled) return; st.page = +b.dataset.p; run(true); $('.filters').scrollIntoView({ block: 'start', behavior: 'smooth' }); });
    segs.forEach((s) => s.addEventListener('click', () => { st[SEGK] = s.dataset.v; st.page = 1; syncUI(); run(true); }));
    sel.addEventListener('change', (e) => { st[SELK] = e.target.value; st.page = 1; run(true); });
    $('#lf-safe').addEventListener('change', (e) => { st.safe = e.target.checked; st.page = 1; run(true); });
    let to; $('#lf-q').addEventListener('input', (e) => { clearTimeout(to); to = setTimeout(() => { st.q = e.target.value; st.page = 1; run(true); }, 200); });
    $('#lf-clear').addEventListener('click', () => { Object.assign(st, { q: '', ind: '', type: '', safe: false, page: 1 }); syncUI(); run(true); });
    $('#lf').addEventListener('submit', (e) => e.preventDefault());
    window.__libRun = () => run(false);
    if (st.q || st.ind || st.type || st.safe || st.page > 1 || lang !== 'en') run(false); else run(false);
  }
  addEventListener('aa-i18n', () => { if (window.__libRun) window.__libRun(); });
  applyLang(lang);
})();
