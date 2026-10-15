"""Full-site screenshots: python scripts/site_shots.py <base_url> [--quick] [--only=page1,page2] [--skins=a,b,c]
Gate pages (home, resource, course, templates) x 3 skins x light/dark x 1440/390; other pages desktop-light + mobile-dark.
Writes .shots/site/<skin>/<page>-<desktop|mobile>-<light|dark>.png and .shots/site/report.json
(console errors, horizontal overflow, elements sticking out of the viewport, terminal first-line check)."""
import sys, os, json, asyncio
from playwright.async_api import async_playwright

BASE = sys.argv[1].rstrip('/')
ARGS = {a.split('=')[0]: (a.split('=')[1] if '=' in a else True) for a in sys.argv[2:]}
RID = 'google-adk-recipes-core-python-ambient-quality-agent-src-ambient-quality-agent-skills-cust'
GATE = {'home': '', 'resource': f'r/{RID}/', 'course': 'courses/design/ui-designer/', 'templates': 'templates/'}
OTHER = {'library': 'library/', 'industry': 'i/design/', 'courses': 'courses/', 'latest': 'latest/', 'changelog': 'changelog/', 'sources': 'sources/', 'agents': 'agents/', 'case': 'cases/agent-academy-build/', 'notfound': '404.html'}
ONLY = ARGS.get('--only', '').split(',') if ARGS.get('--only') else None
SKINS = ARGS.get('--skins', 'a,b,c').split(',')
OUT = os.path.join(os.path.dirname(__file__), '..', '.shots', 'site')
VP = {'desktop': {'width': 1440, 'height': 900}, 'mobile': {'width': 390, 'height': 844}}
report = {}

OVERFLOW_JS = '''() => { const W = document.documentElement.clientWidth; const out = [];
  for (const el of document.querySelectorAll('body *')) { const r = el.getBoundingClientRect(); if (!r.width || (r.right <= W + 1 && r.left >= -1) || el.matches('.skip,.sr-only')) continue; const cs = getComputedStyle(el); if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    let p = el.parentElement, clip = false; while (p) { const s = getComputedStyle(p); if (s.overflowX !== 'visible') { const pr = p.getBoundingClientRect(); if (pr.right <= W + 1 && pr.left >= -1) { clip = true; break; } } p = p.parentElement; }
    if (!clip) out.push(el.tagName + '.' + String(el.className).slice(0, 40) + ' ' + Math.round(r.left) + '..' + Math.round(r.right)); }
  return [...new Set(out)].slice(0, 12); }'''

async def settle(page):
    h = await page.evaluate('document.body.scrollHeight')
    for y in range(0, min(h, 12000), 700):
        await page.evaluate(f'window.scrollTo(0,{y})'); await page.wait_for_timeout(60)
    await page.evaluate('window.scrollTo(0,0)'); await page.wait_for_timeout(2600)

async def wizard_result(page, path, rep):
    try:
        await page.click('[data-sk-home]:not([hidden]) [data-opt="prof"][data-val="design"], [data-opt="prof"][data-val="design"]'); await page.wait_for_timeout(250)
        await page.click('[data-wz-next]'); await page.wait_for_timeout(700)
        await page.click('[data-opt="role"][data-val="ui-designer"]'); await page.wait_for_timeout(200)
        await page.click('[data-wz-next]'); await page.wait_for_timeout(700)
        await page.click('[data-opt="plat"][data-val="cursor"]'); await page.wait_for_timeout(200)
        await page.click('[data-wz-generate]')
        await page.wait_for_selector('[data-wz-actions].in', timeout=45000); await page.wait_for_timeout(800)
        # first terminal line must sit fully below the window top bar
        chk = await page.evaluate('''() => { const t = document.querySelector('[data-term-body]'); if (!t) return 'no terminal'; const first = t.querySelector('.tl'); if (!first) return 'no lines';
          const bar = t.parentElement.querySelector('.term-h,.tw-head,.cb-tabs,.term-top,.mc-top') || t.previousElementSibling; const fr = first.getBoundingClientRect(), tr = t.getBoundingClientRect();
          const br = bar ? bar.getBoundingClientRect() : {bottom: tr.top}; return {firstTop: Math.round(fr.top), barBottom: Math.round(br.bottom), termTop: Math.round(tr.top), scrollTop: t.scrollTop, ok: fr.top >= br.bottom - 1 && fr.top >= tr.top - 1}; }''')
        rep['terminal'] = chk
        el = page.locator('.wz-result').first
        await el.scroll_into_view_if_needed(); await page.wait_for_timeout(300)
        await page.screenshot(path=path, full_page=False)
    except Exception as e:
        rep['terminal'] = 'error: ' + str(e)[:200]

async def one(b, skin, name, rel, vp, theme):
    key = f'{skin}/{name}-{vp}-{theme}'
    rep = report.setdefault(key, {'errors': []})
    ctx = await b.new_context(viewport=VP[vp], device_scale_factor=1, has_touch=(vp == 'mobile'), is_mobile=(vp == 'mobile'))
    page = await ctx.new_page()
    page.on('console', lambda m: m.type == 'error' and rep['errors'].append(m.text[:200]))
    page.on('pageerror', lambda e: rep['errors'].append(str(e)[:200]))
    sep = '&' if '?' in rel else '?'
    await page.goto(f'{BASE}/{rel}{sep}skin={skin}&theme={theme}&lang=en', wait_until='networkidle')
    await settle(page)
    os.makedirs(f'{OUT}/{skin}', exist_ok=True)
    await page.screenshot(path=f'{OUT}/{key}.png', full_page=True)
    rep['hscroll'] = await page.evaluate('document.documentElement.scrollWidth - document.documentElement.clientWidth')
    rep['outside'] = await page.evaluate(OVERFLOW_JS)
    rep['skin'] = await page.evaluate('document.documentElement.dataset.skin')
    if name == 'home' and theme == 'light':
        await wizard_result(page, f'{OUT}/{skin}/home-result-{vp}-{theme}.png', rep)
    await ctx.close()

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(channel='chrome', args=['--font-render-hinting=none'])
        jobs = []
        for skin in SKINS:
            for name, rel in GATE.items():
                if ONLY and name not in ONLY: continue
                for vp in ['desktop', 'mobile']:
                    for theme in ['light', 'dark']:
                        jobs.append((skin, name, rel, vp, theme))
            if ARGS.get('--quick'): continue
            for name, rel in OTHER.items():
                if ONLY and name not in ONLY: continue
                jobs += [(skin, name, rel, 'desktop', 'light'), (skin, name, rel, 'mobile', 'dark')]
        sem = asyncio.Semaphore(4)
        async def run(j):
            async with sem:
                try: await one(b, *j)
                except Exception as e: report.setdefault(f'{j[0]}/{j[1]}-{j[3]}-{j[4]}', {})['fatal'] = str(e)[:300]
        await asyncio.gather(*[run(j) for j in jobs])
        await b.close()
    with open(f'{OUT}/report.json', 'w') as f: json.dump(report, f, indent=1, sort_keys=True)
    bad = {k: v for k, v in report.items() if v.get('errors') or v.get('hscroll') or v.get('outside') or v.get('fatal') or (isinstance(v.get('terminal'), dict) and not v['terminal'].get('ok')) or isinstance(v.get('terminal'), str)}
    print(len(report), 'shots;', len(bad), 'with issues')
    for k, v in sorted(bad.items()): print(k, json.dumps(v)[:400])
asyncio.run(main())
