/* Agent Academy site engine (all three skins).
   Every behaviour below is a vanilla port of a specific registry component; the original
   React/motion source lives in directions/orig/src/<lib>-<name>__*.tsx. Values (durations,
   springs, sizes, keyframes) are copied from those files. Text comes from app.js i18n (window.__T). */
(() => {
  const D = window.DIR || {};
  const T = (k, f) => (window.__T && window.__T(k) !== k ? window.__T(k) : f !== undefined ? f : k);
  const LANG = () => document.documentElement.dataset.lang || 'en';
  const BB_SVG = "__BB_SVG__";
  const root = document.documentElement;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const EASE_OUT_EXPO = 'cubic-bezier(0.16, 1, 0.3, 1)';

  // ---------------------------------------------------------------- theme (shadcn next-themes behaviour: class="dark"); set before paint by the head script
  const store = (k, v) => { try { localStorage.setItem(k, v); } catch (_) {} };
  const setTheme = (t) => { root.dataset.theme = t; root.classList.toggle('dark', t === 'dark'); };
  $$('[data-theme-toggle]').forEach((b) => b.addEventListener('click', () => {
    const t = root.dataset.theme === 'dark' ? 'light' : 'dark'; setTheme(t); store('aa-theme', t);
    dispatchEvent(new Event('aa-theme'));
  }));
  // ---------------------------------------------------------------- skin switcher (shadcn Toggle Group): A / B / C, independent of light/dark
  const syncSkinBtns = () => $$('[data-skin-set]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.skinSet === root.dataset.skin ? 'true' : 'false'));
  syncSkinBtns();
  $$('[data-skin-set]').forEach((b) => b.addEventListener('click', () => {
    const s = b.dataset.skinSet; if (s === root.dataset.skin) return; store('aa-skin', s);
    const u = new URL(location.href); if (u.searchParams.has('skin')) { u.searchParams.delete('skin'); history.replaceState(null, '', u); }
    if ($('main[data-sk-home]')) { location.reload(); return; } // home modules differ per skin: re-render from the template
    root.dataset.skin = s; syncSkinBtns(); injectBeams(); dispatchEvent(new Event('aa-theme')); dispatchEvent(new Event('resize'));
  }));
  // Aceternity Floating Dock (mobile): toggle
  $$('[data-dock-m]').forEach((b) => b.addEventListener('click', () => { const m = b.parentNode; m.classList.toggle('open'); b.setAttribute('aria-expanded', m.classList.contains('open')); }));
  const cssVar = (el, n) => getComputedStyle(el).getPropertyValue(n).trim();

  // ---------------------------------------------------------------- springs (motion's default spring integrator, simplified)
  function spring({ from, to, stiffness = 100, damping = 10, mass = 1, onUpdate, onDone }) {
    let x = from, v = 0, last = performance.now(), raf;
    const step = (now) => {
      const dt = Math.min(0.064, (now - last) / 1000); last = now;
      const a = (-stiffness * (x - to) - damping * v) / mass; v += a * dt; x += v * dt;
      onUpdate(x);
      if (Math.abs(v) < 0.01 && Math.abs(x - to) < 0.01) { onUpdate(to); onDone && onDone(); return; }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }
  const inView = (el, cb, opts = { threshold: 0.3 }) => { const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { io.disconnect(); cb(); } }), opts); io.observe(el); };

  // ---------------------------------------------------------------- Magic UI · Flickering Grid (mu-flickering-grid)
  $$('canvas[data-flicker]').forEach((canvas) => {
    const o = Object.assign({ squareSize: 4, gridGap: 6, flickerChance: 0.3, maxOpacity: 0.3 }, JSON.parse(canvas.dataset.flicker || '{}'));
    const ctx = canvas.getContext('2d'); let cols, rows, squares, dpr, color, visible = true, last = performance.now();
    const toRGBA = () => { const c = cssVar(canvas, '--flicker-color') || '#6B7280'; const m = c.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i); color = m ? `rgba(${parseInt(m[1], 16)}, ${parseInt(m[2], 16)}, ${parseInt(m[3], 16)},` : 'rgba(107,114,128,'; };
    const setup = () => {
      dpr = window.devicePixelRatio || 1; const w = canvas.clientWidth, h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      cols = Math.ceil(w / (o.squareSize + o.gridGap)); rows = Math.ceil(h / (o.squareSize + o.gridGap));
      squares = new Float32Array(cols * rows); for (let i = 0; i < squares.length; i++) squares[i] = Math.random() * o.maxOpacity;
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.fillStyle = color + '1)';
      const step = (o.squareSize + o.gridGap) * dpr, sz = o.squareSize * dpr;
      for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) { const a = squares[i * rows + j]; if (a < 0.01) continue; ctx.globalAlpha = a; ctx.fillRect(i * step, j * step, sz, sz); }
      ctx.globalAlpha = 1;
    };
    // same flicker maths as the original; frames are throttled to ~16 fps and only run while the canvas is on screen
    let raf = 0, acc = 0;
    const loop = (now) => {
      raf = 0; const dt = (now - last) / 1000; last = now; acc += dt;
      if (!visible || !cols) return;
      if (acc >= 0.06) { for (let i = 0; i < squares.length; i++) if (Math.random() < o.flickerChance * acc) squares[i] = Math.random() * o.maxOpacity; acc = 0; draw(); }
      if (!RM) raf = requestAnimationFrame(loop);
    };
    const start = () => { if (!raf && !RM && visible) { last = performance.now(); raf = requestAnimationFrame(loop); } };
    toRGBA(); setup(); draw(); visible = false;
    new ResizeObserver(() => { setup(); draw(); start(); }).observe(canvas);
    const go = () => new IntersectionObserver(([e]) => { visible = e.isIntersecting; start(); }).observe(canvas);
    if (document.readyState === 'complete') setTimeout(go, 800); else addEventListener('load', () => setTimeout(go, 800), { once: true });
    addEventListener('aa-theme', () => { toRGBA(); draw(); });
  });

  // ---------------------------------------------------------------- Magic UI · Word Rotate (mu-word-rotate): 2500ms, y -50 -> 0 -> 50, 0.25s easeOut
  $$('[data-word-rotate]').forEach((el) => {
    let i = 0; const span = el.firstElementChild;
    if (RM) return;
    setInterval(async () => {
      await span.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(50px)' }], { duration: 250, easing: 'ease-out', fill: 'forwards' }).finished;
      const words = JSON.parse(el.dataset.wordRotate); i = (i + 1) % words.length; span.textContent = words[i];
      span.animate([{ opacity: 0, transform: 'translateY(-50px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 250, easing: 'ease-out', fill: 'forwards' });
    }, 2500);
  });

  // ---------------------------------------------------------------- Aceternity · Text Generate Effect (ac-text-generate-effect): blur(10px)->0, duration .5s, stagger .2s
  const textGen = (el) => {
    const txt = el.textContent.trim(); const words = /\s/.test(txt) ? txt.split(/\s+/) : [...txt]; const sp = /\s/.test(txt) ? ' ' : '';
    el.innerHTML = words.map((w) => `<span class="tg-w">${esc(w)}${sp}</span>`).join('');
    $$('.tg-w', el).forEach((s, i) => { if (RM) { s.style.opacity = 1; return; } s.animate([{ opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)' }], { duration: 500, delay: Math.min(i, 12) * 200 / (sp ? 1 : 3), fill: 'both', easing: 'ease-out' }); });
  };
  $$('[data-text-generate]').forEach(textGen);
  addEventListener('aa-i18n', () => $$('[data-text-generate]').forEach(textGen));

  // ---------------------------------------------------------------- Magic UI · Number Ticker (mu-number-ticker): useSpring damping 60 stiffness 100
  $$('[data-ticker]').forEach((el) => {
    const to = +el.dataset.ticker; const fmt = (n) => Intl.NumberFormat(LANG()).format(Math.round(n));
    if (RM) { el.textContent = fmt(to); return; }
    el.textContent = '0';
    inView(el, () => setTimeout(() => spring({ from: 0, to, stiffness: 100, damping: 60, onUpdate: (x) => { el.textContent = fmt(Math.max(0, x)); } }), (+el.dataset.delay || 0) * 1000), { threshold: 0 });
  });

  // ---------------------------------------------------------------- Magic UI · Marquee (mu-marquee): repeat children `repeat` times (default 4)
  $$('[data-marquee]').forEach((el) => {
    const n = +(el.dataset.repeat || 4); const first = el.firstElementChild;
    for (let i = 1; i < n; i++) { const c = first.cloneNode(true); c.setAttribute('aria-hidden', 'true'); $$('a,button', c).forEach((a) => a.tabIndex = -1); el.appendChild(c); }
  });

  // ---------------------------------------------------------------- pointer-tracked surfaces
  // Magic UI · Magic Card (gradient mode), Aceternity · Card Spotlight, Aceternity · Hero Highlight: all set --mx/--my
  const track = (el, offOnLeave) => {
    const off = () => { if (!offOnLeave) return; const g = -(+el.dataset.gsize || 200); el.style.setProperty('--mx', g + 'px'); el.style.setProperty('--my', g + 'px'); };
    off();
    el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
    el.addEventListener('pointerleave', off);
  };
  const bindPointer = (scope = document) => {
    $$('[data-magic-card]:not([data-bound]),[data-spotlight-card]:not([data-bound]),[data-hero-highlight]:not([data-bound])', scope).forEach((el) => { el.dataset.bound = 1; track(el, el.hasAttribute('data-magic-card')); });
    // Aceternity · 3D Card Effect (ac-3d-card): rotate = (pointer - centre) / 25, perspective 1000px, transition 200ms linear
    $$('[data-3d]:not([data-bound])', scope).forEach((el) => {
      el.dataset.bound = 1; const body = el.firstElementChild;
      el.addEventListener('pointermove', (e) => { if (RM || root.dataset.skin !== 'c') return; const r = el.getBoundingClientRect(); const x = (e.clientX - r.left - r.width / 2) / 25, y = (e.clientY - r.top - r.height / 2) / 25; body.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`; el.classList.add('is-3d'); });
      el.addEventListener('pointerleave', () => { body.style.transform = 'rotateY(0deg) rotateX(0deg)'; el.classList.remove('is-3d'); });
    });
    // Aceternity · Focus Cards (ac-focus-cards): siblings blur-sm scale .98, 300ms ease-out
    $$('[data-focus-cards]:not([data-bound])', scope).forEach((g) => {
      g.dataset.bound = 1;
      [...g.children].forEach((c) => { c.addEventListener('pointerenter', () => { g.dataset.h = 1; $$('.is-h', g).forEach((x) => x.classList.remove('is-h')); c.classList.add('is-h'); }); c.addEventListener('pointerleave', () => { delete g.dataset.h; c.classList.remove('is-h'); }); });
    });
    // Aceternity · Card Hover Effect (ac-card-hover-effect): one shared background (layoutId="hoverBackground") slides to the hovered item
    $$('[data-hover-effect]:not([data-bound])', scope).forEach((g) => {
      g.dataset.bound = 1; const bg = document.createElement('span'); bg.className = 'he-bg'; bg.setAttribute('aria-hidden', 'true'); g.prepend(bg);
      let hideT;
      [...g.children].filter((c) => c !== bg).forEach((c) => {
        c.addEventListener('pointerenter', () => { clearTimeout(hideT); if (root.dataset.skin !== 'b' && !g.closest('[data-sk-home]')) return; const gr = g.getBoundingClientRect(), r = c.getBoundingClientRect(); const first = !bg.classList.contains('on'); bg.style.transition = first ? 'opacity .15s' : ''; bg.style.transform = `translate(${r.left - gr.left}px, ${r.top - gr.top}px)`; bg.style.width = r.width + 'px'; bg.style.height = r.height + 'px'; bg.classList.add('on'); });
        c.addEventListener('pointerleave', () => { hideT = setTimeout(() => bg.classList.remove('on'), 200); });
      });
    });
  };
  bindPointer(); window.__bindPointer = (sc) => { bindPointer(sc); window.__rbSpot && window.__rbSpot(sc); };

  // ---------------------------------------------------------------- Aceternity · Compare (ac-compare): slideMode hover + drag, initial 50%
  $$('[data-compare]').forEach((el) => {
    const set = (p) => { p = Math.max(0, Math.min(100, p)); el.style.setProperty('--x', p + '%'); el.setAttribute('aria-valuenow', Math.round(p)); };
    set(50);
    const mv = (cx) => { const r = el.getBoundingClientRect(); set(((cx - r.left) / r.width) * 100); };
    el.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse' || el.dataset.drag) mv(e.clientX); });
    el.addEventListener('pointerdown', (e) => { el.dataset.drag = 1; el.setPointerCapture(e.pointerId); mv(e.clientX); });
    el.addEventListener('pointerup', () => delete el.dataset.drag);
    el.addEventListener('pointerleave', () => { if (!el.dataset.drag) set(50); });
    el.addEventListener('keydown', (e) => { const cur = parseFloat(el.style.getPropertyValue('--x')); if (e.key === 'ArrowLeft') set(cur - 5); if (e.key === 'ArrowRight') set(cur + 5); });
  });

  // ---------------------------------------------------------------- Magic UI · Animated List (mu-animated-list): one new item every `delay` ms (1000), newest first,
  // spring stiffness 350 damping 40 scale 0->1, layout animation for the rest (FLIP)
  $$('[data-animated-list]').forEach((list) => {
    const items = [...list.querySelectorAll(':scope > template')].map((t) => t.content.firstElementChild);
    const delay = +(list.dataset.delay || 1000); let i = 0;
    const add = () => {
      const before = new Map([...list.children].filter((c) => c.tagName !== 'TEMPLATE').map((c) => [c, c.getBoundingClientRect().top]));
      const node = items[i].cloneNode(true); list.insertBefore(node, list.firstChild);
      if (!RM) {
        before.forEach((top, c) => { const d = top - c.getBoundingClientRect().top; if (d) c.animate([{ transform: `translateY(${d}px)` }, { transform: 'translateY(0)' }], { duration: 450, easing: EASE_OUT_EXPO }); });
        node.animate([{ transform: 'scale(0)', opacity: 0 }, { transform: 'scale(1)', opacity: 1 }], { duration: 450, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', transformOrigin: 'top' });
      }
      i++; if (i < items.length) setTimeout(add, RM ? 0 : delay);
    };
    inView(list, add, { threshold: 0.1 });
  });

  // ---------------------------------------------------------------- Aceternity · Background Beams (ac-background-beams): per-path gradient x1/x2/y1/y2 0%->100%, duration 10-20s, easeInOut (delay 0-2.5s instead of 0-10s so beams show on short page visits)
  const initBeams = (svg) => {
    if (svg.dataset.bound) return; svg.dataset.bound = 1;
    $$('linearGradient', svg).forEach((g) => {
      if (RM) return;
      const dur = Math.random() * 10 + 10, delay = Math.random() * 2.5, y2 = 93 + Math.random() * 8;
      [['x1', '0%;100%'], ['x2', '0%;95%'], ['y1', '0%;100%'], ['y2', `0%;${y2}%`]].forEach(([a, v]) => {
        const an = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        an.setAttribute('attributeName', a); an.setAttribute('values', v); an.setAttribute('dur', dur + 's'); an.setAttribute('begin', delay + 's'); an.setAttribute('repeatCount', 'indefinite');
        an.setAttribute('calcMode', 'spline'); an.setAttribute('keyTimes', '0;1'); an.setAttribute('keySplines', '0.42 0 0.58 1'); g.appendChild(an);
      });
    });
  };
  $$('svg[data-bg-beams]').forEach(initBeams);
  // inner pages: skin B page headers get the same Background Beams, injected only when B is active
  function injectBeams() { if (root.dataset.skin !== 'b') return; $$('[data-bb-slot]:empty').forEach((s) => { s.innerHTML = BB_SVG; initBeams($('svg', s)); }); }
  injectBeams();
  // ---------------------------------------------------------------- Mantine · Timeline (cs2-lib-mantine-dev--timeline--core-timeline--v0): `active` = index of the
  // last item whose top passed 60% of the viewport; items <= active get bullet [data-active], items < active get [data-line-active]
  $$('[data-timeline]').forEach((tl) => {
    const items = [...tl.children].filter((x) => x.classList.contains('tml-item')); let raf = 0, cur = -2;
    const upd = () => {
      raf = 0; const lim = innerHeight * 0.6; let act = -1;
      items.forEach((it, k) => { if (it.getBoundingClientRect().top < lim) act = k; });
      if (act === cur) return; cur = act;
      items.forEach((it, k) => { const bl = it.querySelector('.tml-bullet'); bl && bl.toggleAttribute('data-active', k <= act); it.toggleAttribute('data-line-active', k < act); });
    };
    addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(upd); }, { passive: true }); upd();
  });

  // ---------------------------------------------------------------- shadcn · Collapsible (collapsible-settings): trigger toggles the panel that continues the grid
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-collapsible]'); if (!b) return;
    const panel = document.getElementById(b.getAttribute('aria-controls')); const open = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', open); panel.hidden = !open;
    $('.when-closed', b).hidden = open; $('.when-open', b).hidden = !open;
    if (!open) b.closest('.coll-t').previousElementSibling.scrollIntoView({ block: 'nearest' });
    window.__bindPointer && window.__bindPointer(panel);
  });

  // same Collapsible trigger, clamped variant: long original texts on resource pages open to full height
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-clamp]'); if (!b) return;
    const panel = document.getElementById(b.getAttribute('aria-controls')); const open = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', open); panel.classList.toggle('is-clamped', !open);
    $('.when-closed', b).hidden = open; $('.when-open', b).hidden = !open;
    if (!open) panel.scrollIntoView({ block: 'nearest' });
  });

  // ---------------------------------------------------------------- React Bits · Spotlight Card (rb-spotlight-card, ts-default; cs2-reactbits-dev--card--components-spotlight-card--v0)
  // Same maths as the original: falloff() colour stops, circle shape, size 240, intensity .15, softness .7, borderGlow .6, proximity 80,
  // smoothing .3, press flare, palette fill/edge (dark 1/1, light .28/.7). spotlightColor = the B accent. One shared pointer listener; only
  // cards on screen are woken. Active only while skin B is on.
  (() => {
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
    const falloff = (color, softness) => {
      const soft = clamp(softness, 0, 1); const core = (1 - soft) ** 1.5 * 0.85;
      const stop = (alpha, at) => `color-mix(in srgb, ${color} ${(alpha * 100).toFixed(2)}%, transparent) ${(at * 100).toFixed(2)}%`;
      const list = [stop(1, 0)];
      for (let i = 0; i <= 14; i++) { const t = core + ((1 - core) * i) / 14; const g = (t - core) / (1 - core); const smooth = 1 - g * g * (3 - 2 * g); const glow = Math.exp(-4.6 * g * g) * (1 - g ** 6); list.push(stop(smooth + (glow - smooth) * soft, t)); }
      return list.join(', ');
    };
    const S = { size: 240, intensity: 0.15, borderGlow: 0.6, proximity: 80, smoothing: 0.3, flare: true, fill: falloff('var(--acc)', 0.7), edge: falloff('var(--acc)', 1) };
    const pointer = { x: 0, y: 0, active: false }; const vis = new Set(); const all = new WeakMap();
    const io = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach((en) => { const c = all.get(en.target); if (!c) return; if (en.isIntersecting) vis.add(c); else vis.delete(c); })) : null;
    const make = (root) => {
      const st = { x: 0, y: 0, presence: 0, flare: 0, pressed: false, focus: null }; let light, edge, raf = 0, last = 0;
      const ensure = () => { if (light) return; light = document.createElement('span'); light.className = 'spc-light'; edge = document.createElement('span'); edge.className = 'spc-edge'; light.setAttribute('aria-hidden', 'true'); edge.setAttribute('aria-hidden', 'true'); root.prepend(light); root.append(edge); };
      const grad = (size, x, y, stops) => `radial-gradient(circle ${size.toFixed(1)}px at ${x.toFixed(1)}px ${y.toFixed(1)}px, ${stops})`;
      const tick = (now) => {
        raf = 0; if (root.ownerDocument.documentElement.dataset.skin !== 'b') return; ensure();
        const dark = root.ownerDocument.documentElement.classList.contains('dark'); const pal = dark ? { fill: 1, edge: 1 } : { fill: 0.28, edge: 0.7 };
        const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000)); last = now;
        const r = root.getBoundingClientRect(); let tx = st.x, ty = st.y, target = 0;
        if (st.focus && root.contains(st.focus)) { const bx = st.focus.getBoundingClientRect(); tx = bx.left + bx.width / 2 - r.left; ty = bx.top + bx.height / 2 - r.top; target = 1; }
        else if (pointer.active) { tx = pointer.x - r.left; ty = pointer.y - r.top; const gap = Math.hypot(Math.max(0, -tx, tx - r.width), Math.max(0, -ty, ty - r.height)); if (gap === 0) target = 1; else if (S.proximity > 0) target = Math.max(0, 1 - gap / S.proximity) ** 2; }
        if (st.presence < 0.02 && target > 0) { st.x = tx; st.y = ty; }
        const follow = RM ? 1 : 1 - Math.exp(-dt / (0.015 + S.smoothing * 0.22)); st.x += (tx - st.x) * follow; st.y += (ty - st.y) * follow;
        const fade = RM ? 1 : 1 - Math.exp(-dt / (target > st.presence ? 0.1 : 0.32)); st.presence += (target - st.presence) * fade; if (Math.abs(target - st.presence) < 0.002) st.presence = target;
        const press = st.pressed && S.flare && !RM ? 1 : 0; st.flare += (press - st.flare) * (1 - Math.exp(-dt / (press ? 0.05 : 0.28))); if (Math.abs(press - st.flare) < 0.002) st.flare = press;
        const size = S.size * (1 + 0.2 * st.flare), boost = 1 + 0.7 * st.flare;
        light.style.background = grad(size, st.x, st.y, S.fill); edge.style.background = grad(size * 0.6, st.x, st.y, S.edge);
        light.style.opacity = String(Math.min(1, st.presence * S.intensity * pal.fill * boost)); edge.style.opacity = String(Math.min(1, st.presence * S.borderGlow * pal.edge * boost));
        const moving = Math.abs(tx - st.x) > 0.1 || Math.abs(ty - st.y) > 0.1;
        if (moving || st.presence !== target || st.flare !== press) raf = requestAnimationFrame(tick);
      };
      const wake = () => { if (raf) return; last = performance.now(); raf = requestAnimationFrame(tick); };
      root.addEventListener('pointerdown', (e) => { pointer.x = e.clientX; pointer.y = e.clientY; pointer.active = true; st.pressed = true; wake(); });
      root.addEventListener('focusin', (e) => { if (e.target.matches(':focus-visible')) { st.focus = e.target; wake(); } });
      root.addEventListener('focusout', (e) => { if (!root.contains(e.relatedTarget)) { st.focus = null; wake(); } });
      return { wake, st };
    };
    addEventListener('pointermove', (e) => { pointer.x = e.clientX; pointer.y = e.clientY; pointer.active = true; if (root.dataset.skin === 'b') vis.forEach((c) => c.wake()); }, { passive: true });
    addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') pointer.active = false; vis.forEach((c) => { if (c.st.pressed) { c.st.pressed = false; c.wake(); } }); });
    document.addEventListener('pointerout', (e) => { if (e.relatedTarget) return; pointer.active = false; vis.forEach((c) => c.wake()); });
    addEventListener('scroll', () => { if (pointer.active && root.dataset.skin === 'b') vis.forEach((c) => c.wake()); }, { passive: true, capture: true });
    const bind = (scope = document) => $$('[data-rb-spot]:not([data-spc])', scope).forEach((el) => { el.dataset.spc = 1; const c = make(el); all.set(el, c); if (io) io.observe(el); else vis.add(c); });
    bind(); window.__rbSpot = bind;
  })();

  // ---------------------------------------------------------------- Aceternity · Moving Border (ac-moving-border): a radial dot follows <rect rx=30%> at length/duration px per ms (3000ms)
  $$('[data-moving-border]').forEach((btn) => {
    const rect = $('rect', btn), dot = $('.mb-dot', btn); const dur = +(btn.dataset.duration || 3000);
    const tick = (t) => { const len = rect.getTotalLength(); if (len) { const p = rect.getPointAtLength((t * (len / dur)) % len); dot.style.transform = `translateX(${p.x}px) translateY(${p.y}px) translateX(-50%) translateY(-50%)`; } if (!RM) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  });

  // ---------------------------------------------------------------- Aceternity · Floating Dock (ac-floating-dock): size by pointer distance [-150,0,150] -> [40,80,40], icon [20,40,20], spring mass .1 stiffness 150 damping 12
  $$('[data-dock]').forEach((dock) => {
    const items = $$('.dock-item', dock); let mx = Infinity;
    const st = items.map((it) => ({ it, ic: $('.dock-ic', it), s: 40, v: 0 }));
    const lerp = (d) => { const a = Math.abs(d); return a >= 150 ? 40 : 80 - (a / 150) * 40; };
    let running = false;
    const loop = () => {
      let moving = false;
      st.forEach((o) => {
        const r = o.it.getBoundingClientRect(); const target = mx === Infinity ? 40 : lerp(mx - (r.left + r.width / 2));
        const a = (-150 * (o.s - target) - 12 * o.v) / 0.1; o.v += a * 0.008; o.s += o.v * 0.008;
        if (Math.abs(o.v) > 0.05 || Math.abs(o.s - target) > 0.05) moving = true; else o.s = target;
        o.it.style.width = o.it.style.height = o.s + 'px'; o.ic.style.width = o.ic.style.height = o.s / 2 + 'px';
      });
      if (moving) requestAnimationFrame(loop); else running = false;
    };
    const kick = () => { if (!running && !RM) { running = true; requestAnimationFrame(loop); } };
    dock.addEventListener('pointermove', (e) => { if (e.pointerType !== 'mouse') return; mx = e.clientX; kick(); });
    dock.addEventListener('pointerleave', () => { mx = Infinity; kick(); });
  });

  // ---------------------------------------------------------------- Cult UI · Direction Aware Tabs (cult-direction-aware-tabs) as nav: bubble with spring bounce .19 duration .4
  $$('[data-da-tabs]').forEach((bar) => {
    const bubble = $('.da-bubble', bar); const btns = $$('a,button', bar).filter((b) => !b.hasAttribute('data-theme-toggle'));
    const moveTo = (b) => { const br = bar.getBoundingClientRect(), r = b.getBoundingClientRect(); bubble.style.transform = `translateX(${r.left - br.left}px)`; bubble.style.width = r.width + 'px'; btns.forEach((x) => x.classList.toggle('on', x === b)); };
    const start = () => btns.find((b) => b.getAttribute('aria-current') === 'page') || btns[0];
    btns.forEach((b) => b.addEventListener('click', () => moveTo(b)));
    requestAnimationFrame(() => moveTo(start())); addEventListener('resize', () => moveTo($('.on', bar) || start()));
    if (document.fonts) document.fonts.ready.then(() => moveTo($('.on', bar) || start()));
  });

  // ---------------------------------------------------------------- Magic UI · Animated Beam (mu-animated-beam)
  // Quadratic path between element centres, grey base path (opacity .2) + gradient path whose x1/x2 animate 10%->110% / 0%->100%
  // with ease [0.16,1,0.3,1], duration 5s, infinite. Gradient stops: start 0 -> start -> stop 32.5% -> stop 0.
  let beamSeq = 0;
  function drawBeams(stage) {
    let svg = $(':scope > svg.beams', stage);
    if (!svg) { svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('class', 'beams'); svg.setAttribute('aria-hidden', 'true'); stage.prepend(svg); }
    const cr = stage.getBoundingClientRect(); svg.setAttribute('width', cr.width); svg.setAttribute('height', cr.height); svg.setAttribute('viewBox', `0 0 ${cr.width} ${cr.height}`);
    const defs = JSON.parse(stage.dataset.beams || '[]');
    const from = cssVar(stage, '--beam-from') || '#ffaa40', to = cssVar(stage, '--beam-to') || '#9c40ff', base = cssVar(stage, '--beam-path') || 'gray';
    let html = '';
    defs.forEach((b) => {
      const A = document.getElementById(b.from), B = document.getElementById(b.to); if (!A || !B || !A.offsetParent || !B.offsetParent) return;
      const ra = A.getBoundingClientRect(), rb = B.getBoundingClientRect();
      const sx = ra.left - cr.left + ra.width / 2 + (b.sx || 0), sy = ra.top - cr.top + ra.height / 2 + (b.sy || 0);
      const ex = rb.left - cr.left + rb.width / 2 + (b.ex || 0), ey = rb.top - cr.top + rb.height / 2 + (b.ey || 0);
      const d = `M ${sx},${sy} Q ${(sx + ex) / 2},${sy - (b.curvature || 0)} ${ex},${ey}`;
      const id = 'beam' + (++beamSeq); const rev = !!b.reverse;
      const x1 = rev ? '90%;-10%' : '10%;110%', x2 = rev ? '100%;0%' : '0%;100%';
      const dur = (b.duration || 5) + 's', delay = (b.delay || 0) + 's';
      const anim = (a, v) => RM ? '' : `<animate attributeName="${a}" values="${v}" dur="${dur}" begin="${delay}" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.16 1 0.3 1"/>`;
      html += `<path d="${d}" stroke="${base}" stroke-width="2" stroke-opacity="0.2" stroke-linecap="round" fill="none"/>`
        + `<path d="${d}" stroke="url(#${id})" stroke-width="2" stroke-linecap="round" fill="none"/>`
        + `<defs><linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="0%" x2="0%" y1="0%" y2="0%">${anim('x1', x1)}${anim('x2', x2)}`
        + `<stop stop-color="${from}" stop-opacity="0"/><stop stop-color="${from}"/><stop offset="32.5%" stop-color="${to}"/><stop offset="100%" stop-color="${to}" stop-opacity="0"/></linearGradient></defs>`;
    });
    svg.innerHTML = html;
  }
  $$('[data-beams]').forEach((stage) => { new ResizeObserver(() => drawBeams(stage)).observe(stage); drawBeams(stage); });
  addEventListener('aa-theme', () => $$('[data-beams]').forEach(drawBeams));

  // ---------------------------------------------------------------- Cult UI · Copy Button (cult-copy-button): icon swap opacity/scale .25/blur 4px, spring .3s bounce 0, resets after 2000ms
  async function copyText(v) {
    try { await navigator.clipboard.writeText(v); return true; } catch (_) {
      const t = document.createElement('textarea'); t.value = v; t.setAttribute('readonly', ''); t.style.cssText = 'position:fixed;opacity:0;pointer-events:none'; document.body.appendChild(t); t.select(); let ok = false; try { ok = document.execCommand('copy'); } catch (_) {} t.remove(); return ok;
    }
  }
  function bindCopy(btn, get) {
    let timer;
    btn.addEventListener('click', async () => {
      if (!(await copyText(get()))) return;
      btn.dataset.copied = 'true'; $('.sr-live', btn).textContent = T('wz.copied', 'Copied'); const lab = $('.cb-label', btn); if (lab) lab.textContent = T('wz.copied', 'Copied');
      clearTimeout(timer); timer = setTimeout(() => { btn.dataset.copied = 'false'; $('.sr-live', btn).textContent = ''; if (lab) lab.textContent = T('wz.copy', 'Copy prompt'); }, 2000);
    });
  }

  // ---------------------------------------------------------------- prompt (same template + data as the live generator, i18n/prompt.json)
  const fmt = (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? '');
  const PLAT = { cursor: 'cursor', 'claude-code': 'shell', codex: 'shell', 'grok-bot': 'shell', other: 'read' };
  function buildPrompt(S) {
    const L = S.lang; const t = D.prompt[L] || D.prompt.en; const c = D.courses[`${S.prof}/${S.role}`]; const tx = D.tx[L] || D.tx.en;
    const v = { site: D.site + '/', goal: S.goal || (D.goals[L] || D.goals.en)[S.prof], prof: tx.industries[S.prof], role: tx.roles[S.role], lang: D.langName[L], course: c.course, json: c.json, pack: c.pack, changes: D.changes, uihub: D.uihub, style: S.style, vs: S.style };
    const lines = [fmt(t.intro, v), '', fmt(t.goal, v), fmt(t.job, v), fmt(t.lang, v), '', fmt(t.s1, v), fmt(t.s2, v)];
    if (S.prof === 'design') lines.push(fmt(S.style ? t.style : t.style_any, v));
    lines.push(t.s3, fmt(t[PLAT[S.plat]], v), t.safe_on, t.s6, '', fmt(t.updates, v));
    return lines;
  }
  function filesFor(S) {
    const c = D.courses[`${S.prof}/${S.role}`];
    const f = [
      { id: 'f-md', name: `${S.role}.md`, kind: T('wz.f_course'), note: T('wz.f_steps'), href: c.course, ic: 'doc' },
      { id: 'f-json', name: `${S.role}.json`, kind: T('wz.f_res'), note: `${c.n} ${T('wz.f_items')}`, href: c.json, ic: 'json' },
      { id: 'f-zip', name: `${S.role}.zip`, kind: T('wz.f_pack'), note: 'SKILL.md', href: c.pack, ic: 'zip' },
    ];
    if (S.prof === 'design') f.push({ id: 'f-hub', name: 'resources.json', kind: 'UI Hub', note: S.style ? `vs = ${S.style}` : T('wz.f_styles'), href: D.uihub, ic: 'json' }, { id: 'f-case', name: 'agent-academy-build.md', kind: T('wz.f_case'), note: T('wz.f_ba'), href: D.caseRaw, ic: 'doc' });
    f.push({ id: 'f-chg', name: 'changes.json', kind: T('wz.f_upd'), note: T('wz.f_log'), href: D.changes, ic: 'rss' });
    return f;
  }
  // light syntax colouring for the terminal: step numbers, labels before ':', `code`, "quoted", links, {placeholders}
  function hl(s) {
    let h = esc(s);
    h = h.replace(/(https?:\/\/[^\s)]+)/g, '<span class="tk-url">$1</span>');
    h = h.replace(/`([^`]+)`/g, '<span class="tk-code">`$1`</span>');
    h = h.replace(/(&quot;[^&]+&quot;)/g, '<span class="tk-str">$1</span>');
    h = h.replace(/^(\d+\.)/, '<span class="tk-num">$1</span>');
    h = h.replace(/^((?:<span class="tk-num">\d+\.<\/span>)?\s*)([^:<]{2,28}:)(\s)/, '$1<span class="tk-key">$2</span>$3');
    h = h.replace(/\b(needs_credentials|writes_external|SKILL\.md|AGENTS\.md|\.cursor\/rules)\b/g, '<span class="tk-kw">$1</span>');
    return h;
  }

  // ---------------------------------------------------------------- Wizard
  const W = $('[data-wz]');
  if (!W) return;
  const anim = W.dataset.wzAnim; // blurfade | stagger | direction
  const S = { step: 1, prof: '', goal: '', role: '', style: '', plat: '', lang: LANG() }; let langTouched = false;
  const UTX = () => D.tx[LANG()] || D.tx.en;
  const panels = $$('[data-wz-panel]', W), tabs = $$('[data-wz-tab]', W);
  const progress = $$('[data-wz-progress]', W);
  const next = $('[data-wz-next]', W), back = $('[data-wz-back]', W), gen = $('[data-wz-generate]', W);
  const stepsBox = $('[data-wz-steps]', W), result = $('[data-wz-result]', W);
  const summary = $('[data-wz-summary]', W);
  const tpl = (name) => $(`template[data-tpl="${name}"]`, W).innerHTML;
  const fill = (t, o) => t.replace(/\{(\w+)\}/g, (_, k) => o[k] ?? '');

  function roleOptions() {
    const box = $('[data-wz-roles]', W); const rs = D.roles[S.prof] || [];
    box.innerHTML = rs.map((r) => fill(tpl('role'), { val: r.k, title: esc(UTX().roles[r.k]), n: r.n, res: esc(T('fac.items')), eg: esc(T('wz.eg')), top: esc(r.top), sel: S.role === r.k ? 'true' : 'false' })).join('');
    bindPointer(box);
  }
  function ok(step) { return step === 1 ? !!S.prof : step === 2 ? !!S.role : !!S.plat && !!S.lang; }
  function progressValue() { return Math.round(((S.prof ? 1 : 0) + (S.role ? 1 : 0) + (S.plat ? 1 : 0)) / 3 * 100); }
  function renderSummary() {
    const tx = UTX(); const chips = [];
    if (S.prof) chips.push([1, tx.industries[S.prof]]); if (S.goal) chips.push([1, '“' + (S.goal.length > 28 ? S.goal.slice(0, 27) + '…' : S.goal) + '”']);
    if (S.role) chips.push([2, tx.roles[S.role]]); if (S.prof === 'design' && S.style) chips.push([3, S.style]);
    if (S.plat) chips.push([3, D.platName[S.plat] || T("wz.other")]); if (S.lang) chips.push([3, D.langName[S.lang]]);
    summary.innerHTML = chips.length ? chips.map(([st, l]) => fill(tpl('chip'), { step: st, label: esc(l) })).join('') : `<span class="sum-empty">${esc(T('wz.empty'))}</span>`;
  }
  function sync() {
    $$('[data-opt]', W).forEach((o) => { const k = o.dataset.opt; const sel = S[k] === o.dataset.val; o.setAttribute('aria-checked', sel ? 'true' : 'false'); o.dataset.sel = sel; });
    tabs.forEach((t) => { const n = +t.dataset.wzTab; t.setAttribute('aria-selected', n === S.step ? 'true' : 'false'); t.dataset.done = n < S.step || (n !== S.step && ok(n)); t.disabled = n > 1 && !ok(n - 1) && n > S.step; });
    const p = progressValue(); progress.forEach((el) => { el.style.setProperty('--p', p); el.setAttribute('aria-valuenow', p); }); $$('[data-wz-progress-label]', W).forEach((l) => { l.textContent = p + '%'; });
    next.hidden = S.step === 3; gen.hidden = S.step !== 3; back.disabled = S.step === 1;
    next.disabled = !ok(S.step); gen.disabled = !(ok(1) && ok(2) && ok(3));
    $$('[data-design-only]', W).forEach((e) => { e.hidden = S.prof !== 'design'; });
    renderSummary();
  }
  async function show(n) {
    const from = S.step; if (n === from) return; const dir = n > from ? 1 : -1;
    const cur = panels.find((p) => +p.dataset.wzPanel === from), nxt = panels.find((p) => +p.dataset.wzPanel === n);
    S.step = n; if (n === 2) roleOptions(); sync();
    if (!RM) {
      if (anim === 'direction') await cur.animate([{ transform: 'translateX(0)', opacity: 1, filter: 'blur(0)' }, { transform: `translateX(${-300 * dir}px)`, opacity: 0, filter: 'blur(4px)' }], { duration: 260, easing: 'cubic-bezier(.4,0,1,1)' }).finished;
      else if (anim === 'stagger') { const its = $$('[data-item]', cur).reverse(); its.forEach((e, i) => e.animate([{ opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }, { opacity: 0, transform: 'translateY(-10px)', filter: 'blur(4px)' }], { duration: 160, delay: i * 30, easing: 'cubic-bezier(0.4,0,1,1)', fill: 'forwards' })); await wait(160 + Math.min(its.length, 8) * 30); its.forEach((e) => e.getAnimations().forEach((a) => a.cancel())); }
      else await cur.animate([{ opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' }, { opacity: 0, filter: 'blur(6px)', transform: 'translateY(-6px)' }], { duration: 200, easing: 'ease-out' }).finished;
    }
    cur.hidden = true; nxt.hidden = false;
    if (!RM) {
      if (anim === 'direction') nxt.animate([{ transform: `translateX(${300 * dir}px)`, opacity: 0, filter: 'blur(4px)' }, { transform: 'translateX(0)', opacity: 1, filter: 'blur(0)' }], { duration: 400, easing: 'cubic-bezier(.34,1.3,.64,1)' });
      else if (anim === 'stagger') $$('[data-item]', nxt).forEach((e, i) => e.animate([{ opacity: 0, transform: 'translateY(8px)', filter: 'blur(4px)' }, { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }], { duration: 220, delay: 20 + i * 60, easing: 'cubic-bezier(0.23,1,0.32,1)', fill: 'backwards' }));
      else $$('[data-item]', nxt).forEach((e, i) => e.animate([{ opacity: 0, filter: 'blur(6px)', transform: 'translateY(-6px)' }, { opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' }], { duration: 400, delay: 40 + i * 40, easing: 'ease-out', fill: 'backwards' }));
    }
    const h = $('[data-wz-focus]', nxt); if (h) h.focus({ preventScroll: true });
  }
  W.addEventListener('click', (e) => {
    const o = e.target.closest('[data-opt]');
    if (o && !o.disabled && o.getAttribute('aria-disabled') !== 'true') {
      const k = o.dataset.opt; S[k] = o.dataset.val; if (k === 'lang') langTouched = true;
      if (k === 'prof') { if (S.role && !(D.roles[S.prof] || []).some((r) => r.k === S.role)) S.role = ''; }
      sync(); return;
    }
    const t = e.target.closest('[data-wz-tab]'); if (t && !t.disabled) { show(+t.dataset.wzTab); return; }
    const c = e.target.closest('[data-chip-step]'); if (c) { show(+c.dataset.chipStep); return; }
  });
  W.addEventListener('keydown', (e) => {
    const o = e.target.closest('[role="radio"][data-opt]'); if (!o) return;
    const grp = $$(`[data-opt="${o.dataset.opt}"]:not([aria-disabled="true"])`, W); const i = grp.indexOf(o);
    let j = -1; if (['ArrowRight', 'ArrowDown'].includes(e.key)) j = (i + 1) % grp.length; if (['ArrowLeft', 'ArrowUp'].includes(e.key)) j = (i - 1 + grp.length) % grp.length;
    if (j >= 0) { e.preventDefault(); grp[j].focus(); grp[j].click(); }
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); o.click(); }
  });
  const goalIn = $('[data-wz-goal]', W);
  const guess = (s) => /design|ui\b|ux|landing|figma|brand|logo|style|interface/i.test(s) ? 'design' : /support|refund|ticket|customer|order|help ?desk|faq|reply/i.test(s) ? 'customer-service' : /seo|ads?\b|email|content|social|campaign|marketing|growth|blog/i.test(s) ? 'marketing' : '';
  goalIn.addEventListener('input', () => { S.goal = goalIn.value.trim(); const g = guess(S.goal); const hint = $('[data-wz-guess]', W); if (g && !S.prof) { S.prof = g; } hint.textContent = S.goal ? (g ? `${T('wz.closest')} ${UTX().industries[g]}` : T('wz.pick_closest')) : ''; sync(); });
  addEventListener('aa-i18n', () => { if (!langTouched) S.lang = LANG(); if (S.step === 2) roleOptions(); sync(); });
  next.addEventListener('click', () => ok(S.step) && show(S.step + 1));
  back.addEventListener('click', () => S.step > 1 && show(S.step - 1));

  // ------------- Generate -> reveal: 1) terminal types the prompt  2) file cards + Animated Beam  3) copy button
  const term = $('[data-term-body]', W), files = $('[data-files]', W), stage = $('[data-beam-stage]', W), actions = $('[data-wz-actions]', W);
  const copyBtn = $('[data-copy-prompt]', W), cursorA = $('[data-cursor-link]', W); let PROMPT = '', runTok = 0;
  bindCopy(copyBtn, () => PROMPT);
  async function reveal() {
    const tok = ++runTok; const lines = buildPrompt(S); PROMPT = lines.join('\n'); try { window.ievt && window.ievt('prompt_generate', { prof: S.prof, goal: S.goal, role: S.role, style: S.style, platform: S.plat, lang: S.lang }); } catch (_) {}
    // stage 0: swap the steps for the result
    if (!RM) await stepsBox.animate([{ opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }, { opacity: 0, transform: 'translateY(-8px)', filter: 'blur(4px)' }], { duration: 220, easing: 'cubic-bezier(.4,0,1,1)' }).finished;
    stepsBox.hidden = true; result.hidden = false; W.dataset.state = 'result';
    $$('[data-reveal]', result).forEach((e) => e.classList.remove('in'));
    term.innerHTML = ''; files.innerHTML = ''; actions.classList.remove('in');
    const fl = filesFor(S);
    const plat = D.platName[S.plat] || T('wz.other');
    $('[data-term-title]', W).textContent = `prompt · ${UTX().roles[S.role]} · ${plat}`; $('[data-term-status]', W).textContent = T('wz.typing');
    const tw = $('[data-reveal="term"]', result); tw.classList.add('in');
    // scroll the result's top (terminal window bar + line 1) below the sticky header; scroll-margin-top is set in CSS
    result.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'start' });
    await wait(RM ? 0 : 450);
    // 1) Magic UI Terminal sequence: AnimatedSpan (opacity 0,y -5 -> 1, .3s) for blank lines, TypingAnimation for text lines
    const speed = +(W.dataset.typeMs || 4);
    for (let i = 0; i < lines.length; i++) {
      if (tok !== runTok) return;
      const row = document.createElement('div'); row.className = 'tl'; row.innerHTML = `<span class="ln">${i + 1}</span><span class="tx"></span>`; term.appendChild(row);
      const tx = $('.tx', row); const s = lines[i];
      if (RM || W.dataset.skip) { tx.innerHTML = hl(s) || '&nbsp;'; continue; }
      if (!s) { tx.innerHTML = '&nbsp;'; row.animate([{ opacity: 0, transform: 'translateY(-5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 300 }); await wait(60); continue; }
      tx.classList.add('typing');
      await new Promise((res) => { const t0 = performance.now(); const f = (now) => { if (tok !== runTok) return res(); const n = W.dataset.skip ? s.length : Math.min(s.length, Math.floor((now - t0) / speed) + 1); tx.innerHTML = hl(s.slice(0, n)); if (n < s.length) requestAnimationFrame(f); else res(); }; requestAnimationFrame(f); });
      tx.classList.remove('typing');
    }
    if (tok !== runTok) return;
    $('[data-term-status]', W).textContent = `${lines.length} ${T('wz.lines')} · ${PROMPT.length.toLocaleString(LANG())} ${T('wz.chars')}`;
    // 2) file mini-cards + Animated Beam (agent node -> each file)
    const L = Math.ceil(fl.length / 2);
    files.innerHTML = fl.map((f, i) => fill(tpl('file'), Object.assign({}, f, { side: i < L ? 'l' : 'r', name: esc(f.name), note: esc(f.note), ico: D.fileIcons[f.ic] }))).join('');
    $('[data-files-l]', W).append(...$$('[data-side="l"]', files)); $('[data-files-r]', W).append(...$$('[data-side="r"]', files));
    $('[data-agent-name]', W).textContent = plat;
    const fr = $('[data-reveal="files"]', result); fr.classList.add('in');
    stage.dataset.beams = JSON.stringify(fl.map((f, i) => ({ from: 'agent-node', to: f.id, curvature: (i % L - (L - 1) / 2) * -40, reverse: i < L, duration: 3 + (i % 3) * 0.6, delay: i * 0.15 })));
    const cards = $$('.file', stage);
    cards.forEach((c, i) => { if (!RM) c.animate([{ opacity: 0, transform: 'translateY(6px)', filter: 'blur(6px)' }, { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }], { duration: 400, delay: 80 * i, easing: 'ease-out', fill: 'backwards' }); });
    await wait(RM ? 0 : 120); drawBeams(stage);
    await wait(RM ? 0 : 80 * cards.length + 300);
    // 3) actions: copy (Cult UI Copy Button), Open in Cursor (documented deeplink, Cursor only), Start over
    const deep = 'https://cursor.com/link/prompt?text=' + encodeURIComponent(PROMPT);
    cursorA.hidden = !(S.plat === 'cursor' && PROMPT.length <= 8000); cursorA.href = deep;
    actions.classList.add('in');
  }
  gen.addEventListener('click', () => { if (!gen.disabled) { delete W.dataset.skip; reveal(); } });
  term.addEventListener('click', () => { W.dataset.skip = 1; });
  $('[data-wz-restart]', W).addEventListener('click', async () => {
    runTok++;
    if (!RM) await result.animate([{ opacity: 1 }, { opacity: 0, filter: 'blur(4px)' }], { duration: 200 }).finished;
    result.hidden = true; stepsBox.hidden = false; delete W.dataset.state;
    panels.forEach((p) => { p.hidden = +p.dataset.wzPanel !== 1; }); S.step = 1; sync();
    if (!RM) stepsBox.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 300, easing: 'ease-out' });
    W.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'start' });
  });
  panels.forEach((p) => { p.hidden = +p.dataset.wzPanel !== 1; }); result.hidden = true; sync();
  // test hooks for screenshots
  window.__wz = { S, show, reveal, sync, skip: () => { W.dataset.skip = 1; } };
})();
