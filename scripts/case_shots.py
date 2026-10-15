"""Capture the design case images: before = the same home page with the stylesheet blocked, after = shipped page. 1440x900, webp."""
import sys, io
from playwright.sync_api import sync_playwright
from PIL import Image
base = sys.argv[1]; out = sys.argv[2]
with sync_playwright() as p:
    b = p.chromium.launch(channel="chrome")
    for name, block in (("before", True), ("after", False)):
        ctx = b.new_context(viewport={"width": 1440, "height": 900}, color_scheme="light", locale="en-US")
        pg = ctx.new_page()
        if block: pg.route("**/*.css", lambda r: r.abort())
        pg.goto(base, wait_until="networkidle"); pg.wait_for_timeout(3500)
        png = pg.screenshot()
        Image.open(io.BytesIO(png)).convert("RGB").save(f"{out}/{name}.webp", quality=80)
        ctx.close()
    b.close()
