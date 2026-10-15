"""Playwright screenshots: desktop 1440 + mobile 390, light + dark. Also reports horizontal overflow and console errors.
Usage: python scripts/shots.py <base_url> <out_dir> [page ...]"""
import sys, os, json
from playwright.sync_api import sync_playwright
base = sys.argv[1].rstrip("/") + "/"; out = sys.argv[2]; pages = sys.argv[3:] or ["", "library/", "courses/design/ui-designer/", "cases/agent-academy-build/"]
os.makedirs(out, exist_ok=True)
with sync_playwright() as p:
    b = p.chromium.launch(channel="chrome")
    for w, h, tag in ((1440, 900, "desktop"), (390, 844, "mobile")):
        for theme in ("light", "dark"):
            ctx = b.new_context(viewport={"width": w, "height": h}, color_scheme=theme, device_scale_factor=1 if w > 500 else 2, locale="en-US")
            pg = ctx.new_page(); errs = []
            pg.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
            pg.on("pageerror", lambda e: errs.append(str(e)))
            for path in pages:
                lang = None
                if "?lang=" in path: path, lang = path.split("?lang=")
                pg.goto(base + path + (f"?lang={lang}" if lang else ""), wait_until="networkidle")
                pg.evaluate(f"localStorage.setItem('aa-theme','{theme}'); document.documentElement.dataset.theme='{theme}'")
                pg.wait_for_timeout(1200)
                over = pg.evaluate("""() => { const W = document.documentElement.clientWidth; const bad = [];
                  document.querySelectorAll('body *').forEach(e => { const r = e.getBoundingClientRect(); if (r.width && r.right > W + 1 && getComputedStyle(e).position !== 'fixed' && !e.closest('.mq,.orbit,.hero-bg,.nav,.tbl,pre,.snap')) bad.push((e.className||e.tagName)+':'+Math.round(r.right)); });
                  return {sw: document.documentElement.scrollWidth, W, bad: bad.slice(0,8)}; }""")
                name = (path.strip("/").replace("/", "_") or "home") + (f"-{lang}" if lang else "")
                f = os.path.join(out, f"{name}-{tag}-{theme}.png")
                pg.screenshot(path=f, full_page=True)
                print(json.dumps({"shot": f, "overflow": over["sw"] > over["W"], **over, "errors": errs[:5]}))
                errs.clear()
            ctx.close()
    b.close()
