"""Per-skin element screenshots for every SITE_MAP module -> directions/shots/site/{a,b,c}/mod-{key}.webp (linked from the mapping table)."""
import sys, os, io
from playwright.sync_api import sync_playwright
from PIL import Image
B = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8765/agent-academy').rstrip('/') + '/'
OUT = os.path.join(os.path.dirname(__file__), '..', 'directions', 'shots', 'site')
RID = 'google-adk-recipes-core-python-ambient-quality-agent-src-ambient-quality-agent-skills-cust'
# key: (page, selector, viewport width, action)
M = {
 'nav': ('library/', '.dock:visible, [data-mod=nav]:visible', 1440, None),
 'skin-switch': ('library/', '.skin-sw:visible', 1440, None),
 'lang': ('library/', '.lang-sel:visible', 1440, None),
 'theme': ('library/', '[data-theme-toggle]:visible', 1440, None),
 'menu': ('library/', '.m-list:visible, .dock-m:visible', 390, 'menu'),
 'page-head': ('library/', '[data-mod=page-head]', 1440, None),
 'crumbs': ('course', '[data-mod=crumbs]', 1440, None),
 'footer': ('library/', '[data-mod=footer]:visible', 1440, None),
 'search': ('library/', '#lf-q', 1440, None),
 'filter-select': ('library/', '.fl-sel', 1440, None),
 'safe-only': ('library/', 'label:has(#lf-safe)', 1440, None),
 'segments': ('library/', '.seg-group', 1440, None),
 'cards': ('library/', '[data-mod=cards] .rc', 1440, None),
 'pagination': ('library/', '.pager', 1440, None),
 'empty': ('library/', '.empty', 1440, 'empty'),
 'stats': ('course', '[data-mod=stats]', 1440, None),
 'badges': ('res', '.p-badges', 1440, None),
 'roles': ('i/design/', '[data-mod=roles]', 1440, None),
 'alert': ('course', '[data-mod=alert]', 1440, None),
 'buttons': ('course', '.p-actions', 1440, None),
 'timeline': ('course', '[data-mod=timeline] .tml-item', 1440, None),
 'checklist': ('course', '[data-mod=checklist]', 1440, None),
 'more': ('course', '[data-mod=more]', 1440, None),
 'bento': ('courses/', '[data-mod=bento]', 1440, None),
 'steps5': ('courses/', '[data-mod=steps5]', 1440, None),
 'code-block': ('r/prompts-chat-ai-customer-support-specialist/', '#original [data-mod=code-block]', 1440, None),
 'table': ('res', '[data-mod=table]', 1440, None),
 'tabs': ('latest/', '[data-mod=tabs]', 1440, None),
 'trend': ('latest/', '[data-mod=trend]', 1440, 'trend'),
 'source-cards': ('sources/', '.src-grid', 1440, None),
 'before-after': ('cases/agent-academy-build/', '[data-mod=before-after]', 1440, None),
 'styles': ('cases/agent-academy-build/', '[data-mod=styles]', 1440, None),
 'prose': ('cases/agent-academy-build/', '[data-mod=prose] .prose:visible', 1440, None),
 'not-found': ('404.html', '.nf', 1440, None),
}
PG = {'course': 'courses/design/ui-designer/', 'res': f'r/{RID}/'}
miss = []
ONLY = sys.argv[2].split(',') if len(sys.argv) > 2 else None
with sync_playwright() as p:
    br = p.chromium.launch(channel='chrome')
    for d in 'abc':
        os.makedirs(f'{OUT}/{d}', exist_ok=True)
        for k, (pg, sel, w, act) in M.items():
            if ONLY and k not in ONLY: continue
            page = br.new_page(viewport={'width': w, 'height': 900})
            url = B + PG.get(pg, pg) + ('&' if '?' in pg else '?') + f'skin={d}&theme=light&lang=en'
            page.goto(url); page.wait_for_timeout(700)
            try:
                if act == 'menu':
                    t = page.locator('.m-menu:visible summary, .dock-m:visible').first
                    if t.count(): t.click(); page.wait_for_timeout(400)
                if act == 'trend':
                    page.click('[role=tab]:not(#tab-new)'); page.wait_for_timeout(500)
                if act == 'empty':
                    page.fill('#lf-q', 'zzzzqqqxx'); page.wait_for_timeout(500)
                el = page.locator(sel).first
                try: el.scroll_into_view_if_needed(timeout=3000)
                except Exception: pass  # fixed headers (B dock) need no scroll
                page.wait_for_timeout(900)
                png = el.screenshot(timeout=5000)
                im = Image.open(io.BytesIO(png)).convert('RGB')
                if im.height > 1100: im = im.crop((0, 0, im.width, 1100))
                im.thumbnail((1200, 1100)); im.save(f'{OUT}/{d}/mod-{k}.webp', quality=80, method=6)
            except Exception as e:
                miss.append(f'{d}:{k}:{str(e).splitlines()[0][:90]}')
            page.close()
    br.close()
print('missing', len(miss)); print('\n'.join(miss))
