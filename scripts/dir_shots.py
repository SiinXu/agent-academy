"""Screenshots for the direction mocks: python scripts/dir_shots.py <base_url> [a b c] [--mods]
Writes .shots/directions/<d>-*.png and (with --mods) .shots/directions/<d>/mod-<module>.png"""
import sys, os, json, asyncio
from playwright.async_api import async_playwright

BASE = sys.argv[1].rstrip('/')
DIRS = [a for a in sys.argv[2:] if not a.startswith('--')] or ['a', 'b', 'c']
MODS = '--mods' in sys.argv
OUT = os.path.join(os.path.dirname(__file__), '..', '.shots', 'directions')
os.makedirs(OUT, exist_ok=True)
report = {}

async def settle(page):
    # scroll through so in-view effects (tickers, animated list, reveal) run, then back to top
    h = await page.evaluate('document.body.scrollHeight')
    for y in range(0, h, 600):
        await page.evaluate(f'window.scrollTo(0,{y})'); await page.wait_for_timeout(120)
    await page.evaluate('window.scrollTo(0,0)'); await page.wait_for_timeout(4200)

async def pick(page, opt, val):
    await page.click(f'[data-opt="{opt}"][data-val="{val}"]')
    await page.wait_for_timeout(150)

async def to_step3(page, prof='design', role='ui-designer', style='motion', plat='cursor', lang='en'):
    await pick(page, 'prof', prof); await page.click('[data-wz-next]'); await page.wait_for_timeout(700)
    await pick(page, 'role', role); await page.click('[data-wz-next]'); await page.wait_for_timeout(800)
    if style is not None: await pick(page, 'style', style)
    await pick(page, 'plat', plat); await pick(page, 'lang', lang)
    await page.mouse.move(5, 5); await page.wait_for_timeout(400)

async def reveal(page):
    await page.click('[data-wz-generate]')
    await page.wait_for_selector('[data-wz-actions].in', timeout=40000)
    await page.wait_for_timeout(900)

async def shot_el(page, sel, path):
    await page.add_style_tag(content='header.top{position:relative!important}[data-mod="nav"]:not(.keep-fixed){position:relative!important;top:auto!important}.mockbar{display:none}') if sel != '[data-mod="nav"]' else None
    el = page.locator(sel).first
    await el.scroll_into_view_if_needed(); await page.wait_for_timeout(250)
    await el.screenshot(path=path, animations='allow')

async def run_dir(b, d):
    rep = report.setdefault(d, {'errors': [], 'overflow': {}})
    for theme in ['light', 'dark']:
        ctx = await b.new_context(viewport={'width': 1440, 'height': 900}, device_scale_factor=1)
        page = await ctx.new_page()
        page.on('console', lambda m: m.type == 'error' and rep['errors'].append(m.text))
        page.on('pageerror', lambda e: rep['errors'].append(str(e)))
        await page.goto(f'{BASE}/{d}.html?theme={theme}', wait_until='networkidle')
        await settle(page)
        await page.screenshot(path=f'{OUT}/{d}-desktop-{theme}.png', full_page=True)
        rep['overflow'][f'desktop-{theme}'] = await page.evaluate('document.documentElement.scrollWidth - innerWidth')
        # mid-step (step 2 + step 3) and revealed result
        await pick(page, 'prof', 'design'); await page.wait_for_timeout(300)
        await page.click('[data-wz-next]'); await page.wait_for_timeout(800)
        await pick(page, 'role', 'ui-designer'); await page.mouse.move(5, 5); await page.wait_for_timeout(300)
        await shot_el(page, '[data-wz]', f'{OUT}/{d}-wizard-step2-{theme}.png')
        await page.click('[data-wz-next]'); await page.wait_for_timeout(800)
        await pick(page, 'style', 'motion'); await pick(page, 'plat', 'cursor'); await pick(page, 'lang', 'en'); await page.mouse.move(5, 5); await page.wait_for_timeout(400)
        await shot_el(page, '[data-wz]', f'{OUT}/{d}-wizard-step3-{theme}.png')
        await reveal(page)
        await shot_el(page, '[data-wz]', f'{OUT}/{d}-wizard-result-{theme}.png')
        await ctx.close()
    # mobile 390
    for theme in ['light', 'dark']:
        ctx = await b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True)
        page = await ctx.new_page()
        page.on('pageerror', lambda e: rep['errors'].append('mobile: ' + str(e)))
        await page.goto(f'{BASE}/{d}.html?theme={theme}', wait_until='networkidle')
        await settle(page)
        rep['overflow'][f'mobile-{theme}'] = await page.evaluate('document.documentElement.scrollWidth - innerWidth')
        if theme == 'light': await page.screenshot(path=f'{OUT}/{d}-mobile-{theme}.png', full_page=True)
        await page.locator('[data-wz]').scroll_into_view_if_needed()
        await pick(page, 'prof', 'customer-service'); await page.click('[data-wz-next]'); await page.wait_for_timeout(800)
        await pick(page, 'role', 'ecommerce-support'); await page.wait_for_timeout(300)
        await page.evaluate("document.querySelector('[data-wz]').scrollIntoView({block:'start'})"); await page.wait_for_timeout(400)
        await page.screenshot(path=f'{OUT}/{d}-mobile-wizard-{theme}.png')
        await page.click('[data-wz-next]'); await page.wait_for_timeout(800)
        await pick(page, 'plat', 'grok-bot'); await pick(page, 'lang', 'zh-CN')
        await reveal(page)
        await shot_el(page, '[data-wz-result]', f'{OUT}/{d}-mobile-result-{theme}.png')
        await ctx.close()
    if MODS:
        md = f'{OUT}/{d}'; os.makedirs(md, exist_ok=True)
        ctx = await b.new_context(viewport={'width': 1440, 'height': 900})
        page = await ctx.new_page()
        await page.goto(f'{BASE}/{d}.html?theme=light', wait_until='networkidle'); await settle(page)
        async def mod(key, sel=None):
            try: await shot_el(page, sel or f'[data-mod="{key}"]', f'{md}/mod-{key}.png')
            except Exception as e: rep['errors'].append(f'mod {key}: {e}')
        for k in ['nav', 'hero', 'hero-visual', 'stats', 'buttons', 'showcase', 'showcase-cs', 'showcase-mk', 'feed', 'before-after', 'footer']: await mod(k)
        await mod('hero-bg', '[data-mod="hero-bg"]' if d != 'c' else '[data-mod="hero-bg"]')
        await pick(page, 'prof', 'design'); await page.fill('[data-wz-goal]', 'A landing page for my design studio'); await page.mouse.move(5, 5); await page.wait_for_timeout(300)
        for k in ['wizard', 'steps', 'step1', 'custom']: await mod(k)
        await mod('wizard-accent', '[data-wz]')
        await page.click('[data-wz-next]'); await page.wait_for_timeout(800); await pick(page, 'role', 'ui-designer'); await page.mouse.move(5, 5); await page.wait_for_timeout(300)
        await mod('step2')
        await page.click('[data-wz-next]'); await page.wait_for_timeout(800)
        await pick(page, 'style', 'editorial'); await pick(page, 'plat', 'cursor'); await pick(page, 'lang', 'en'); await page.mouse.move(5, 5); await page.wait_for_timeout(300)
        for k in ['style', 'platform', 'lang', 'summary', 'generate']: await mod(k)
        await reveal(page)
        for k in ['terminal', 'files', 'copy', 'restart']: await mod(k)
        await page.click('[data-copy]'); await page.wait_for_timeout(500)
        await mod('copy-done', '[data-copy]')
        await ctx.close()

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(channel='chrome', args=['--font-render-hinting=none'])
        for d in DIRS: await run_dir(b, d)
        await b.close()
    print(json.dumps(report, indent=1))
asyncio.run(main())
