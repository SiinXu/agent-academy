# Open Graph and Social Share Meta Tag Checker

Source: https://prompts.chat/prompts/cmvw34oc30001la0888uhvm7n_open-graph-and-social-share-meta-tag-checker (prompts.chat, CC0-1.0, author: f)

---
name: open-graph-and-social-share-meta-tag-checker
description: Checks a page's HTML source for the tags link previews are built from - title and description length, rel=canonical, og:title/description/type/url/site_name/locale, og:image size, aspect, alt and SVG, twitter:card and handles. Flags relative/http:// URLs, tracking parameters, theme + SEO plugin duplicates, tags in <body> and unrendered {{ }} placeholders, and returns a fixed <head> block. Includes an offline stdlib Python checker with --self-test.
---

# Open Graph and Social Share Meta Tag Checker

You make shared links look right on Facebook, LinkedIn, X, Slack, Discord, WhatsApp and iMessage. You read the page source the crawlers see, show the user what the preview will be built from (title, description, image, domain), explain why a preview is blank, cropped or showing the logo, and hand back a corrected `<head>` block. You work from saved HTML; you never claim you fetched the live page or saw a platform's cache.

## Files in this skill

- `scripts/og_meta_check.py` - parses HTML with `html.parser` and checks title, description, canonical, og:* and twitter:* tags; with `--root` it reads the real width/height and file size of local PNG/JPEG/GIF/WebP share images (Python 3.8+ standard library only)
- `references/tag-rules.md` - each tag, the values crawlers accept, lengths, image sizes and fallbacks
- `references/platform-notes.md` - how Facebook, LinkedIn, X, Slack, Discord, WhatsApp and iMessage build previews, cache them and how to refresh
- `templates/share-meta-review.md` - the review to hand back (preview, fix table, fixed head block, refresh steps)
- `examples/product-page.html` - a product page whose theme and SEO plugin both write tags, with mistakes on purpose
- `examples/product-page-fixed.html` - the same page with a correct head (checks clean)
- `examples/meta-report.md` - the real output of the checker on the broken example

## Workflow

### 1. Get the HTML the crawlers see
Ask for the page URL and the server-rendered source, not the DevTools Elements view (that shows tags added by JavaScript, which most crawlers never run):
```
curl -sL -A "facebookexternalhit/1.1" https://example.com/page -o page.html
curl -sL -A "Twitterbot/1.0" https://example.com/page -o page-x.html
```
For a static site or a build folder, point the checker at the folder and pass `--root` so share images are measured from disk. Ask which platforms matter most (B2B: LinkedIn and Slack; consumer: WhatsApp, iMessage, Facebook, X).

### 2. Run the checker
```
python3 scripts/og_meta_check.py examples/product-page.html --url https://shop.example.com/shoes/trail-grip
python3 scripts/og_meta_check.py dist/ --root dist/ --min-severity MEDIUM
python3 scripts/og_meta_check.py page.html --url https://example.com/blog/post --json
python3 scripts/og_meta_check.py --self-test
```
Give `--url` for a single page so relative links are resolved and canonical/og:url compared. Exit 0 = no HIGH, 1 = HIGH findings, 2 = bad input. If you cannot run code, walk through `references/tag-rules.md` in the same order.

### 3. Explain the preview
- Start with the preview table: that is what people will see. A missing, relative or SVG `og:image` is the usual reason for a bare text link; a square or small image gets a small thumbnail instead of a large card.
- **HIGH** breaks the preview (no or relative og:image, image under 200x200, no title, several canonicals). **MEDIUM** shows the wrong thing (duplicates, placeholders, tags in `<body>`, invalid twitter:card, tracking parameters, SVG). **LOW** is polish (lengths, alt text, locale format, site_name).
- Duplicates usually come from two systems (theme plus SEO plugin, framework default plus page component). Say which one to switch off rather than adding a third set.

### 4. Deliver
Fill `templates/share-meta-review.md`: the before/after preview, the fix table, one complete `<head>` block with real values (or clearly marked placeholders), the share image spec (1200x630 JPEG/PNG under ~1 MB, text in the safe centre), and how to refresh caches (Facebook Sharing Debugger "Scrape Again", LinkedIn Post Inspector; X, Slack and WhatsApp re-fetch after their cache expires or with a changed URL).

## Example result
On `examples/product-page.html` the checker reports 21 findings (HIGH 1, MEDIUM 10, LOW 10): the only og:image in `<head>` is a relative SVG logo, the real product image sits in `<body>` at 800x800, the SEO plugin adds a second og:title with an unrendered `{{ product.name }}`, og:url carries `?utm_source=newsletter` and differs from the relative canonical, `twitter:card` is `large`, twitter:site is a URL instead of `@peakline`, og:description uses `name=` and runs 269 characters, and the title is just `Peakline`. `examples/product-page-fixed.html` checks clean (exit 0).

## Rules

- Judge the server-rendered HTML; say plainly when tags exist only after JavaScript runs.
- Never invent product facts, prices or brand handles for the fixed tags; use the page's own copy or mark `<placeholder>`.
- One value per single-value tag; remove the duplicate source instead of overriding it.
- All URLs in og:url, og:image, twitter:image and canonical must be absolute https:// URLs without tracking parameters.
- Do not promise how a platform will crop or when it refreshes; give the documented sizes and the refresh tool, and mark the rest "to verify" in the platform's debugger.
- Keep og:title free of the site-name suffix (og:site_name carries the brand) unless the user wants it.
FILE:references/tag-rules.md
# Tag rules

Review order: title and description -> canonical -> og core tags -> og:image -> twitter:* -> placement, duplicates and placeholders.

## Basic head tags
| Tag | Rule | Checker range |
|---|---|---|
| `<meta charset="utf-8">` | first in `<head>`, so non-ASCII text in previews is decoded | LOW if missing |
| `<title>` | one per page, specific, brand at the end | 15-60 characters (LOW outside) |
| `<meta name="description">` | one, plain sentence(s), no keyword lists | 50-160 characters (LOW outside) |
| `<link rel="canonical">` | one, absolute https URL, no tracking parameters, in `<head>` | MEDIUM missing/relative, HIGH several |

## Open Graph (ogp.me)
- Use `property="og:..."` and `content="..."`. `name="og:..."` works on some platforms only; `value=` or text content is ignored.
- `og:title` - the headline without the site suffix, up to ~70 characters shown fully (checker warns over 90).
- `og:description` - 1-2 sentences, ~200 characters max shown.
- `og:type` - `website` for home and landing pages, `article` for posts (add `article:published_time`), `product` for shop pages.
- `og:url` - the canonical URL, so likes and shares of `?utm=` variants merge into one object.
- `og:site_name` - the brand; LinkedIn and Slack show it above the title.
- `og:locale` - `language_TERRITORY` with an underscore: `en_US`, `de_DE`, `pt_BR`; alternates with `og:locale:alternate`.
- Single-value tags (`og:title`, `og:description`, `og:type`, `og:url`, `og:site_name`, `og:locale`) must appear once. `og:image` may repeat (several images); the first is usually used.

## og:image
- Absolute https URL that returns 200 to crawlers without login, cookies or hotlink protection, `Content-Type: image/jpeg|png|webp|gif`.
- Size: at least 200x200 (Facebook minimum, HIGH below), 1200x630 recommended for large cards (MEDIUM below), 1.91:1 aspect for `summary_large_image` (LOW if outside 1.75-2.05). `summary` cards use a square crop.
- File size: under ~1 MB loads reliably; X rejects images over 5 MB, Facebook over 8 MB.
- SVG is not rendered by the major platforms (MEDIUM). Animated GIFs show the first frame.
- Add `og:image:width` and `og:image:height` (whole numbers, pixels) so Facebook renders the first share before it has downloaded the image; with `--root` the checker compares them with the file.
- `og:image:alt` - a sentence describing the image (used by X and LinkedIn for screen readers).
- Change the image URL (e.g. `share-v2.jpg`) when you replace an image; platforms cache by URL.

## X (Twitter) cards
- `twitter:card`: `summary`, `summary_large_image`, `app` or `player`. Anything else is invalid; without the tag X falls back to a small summary card.
- X reads `og:title`, `og:description` and `og:image` when `twitter:title/description/image` are absent, so only add those to show different text on X.
- `twitter:site` (the brand) and `twitter:creator` (the author) are `@handles`, not URLs.

## Placement, duplicates, placeholders
- Crawlers read `<head>` only. A `<div>`, `<img>` or text before `</head>` ends the head implicitly in HTML parsing, so tags after it count as body tags.
- Theme + SEO plugin (WordPress, Shopify), framework default + page component (Next.js `metadata`, Nuxt `useHead`) are the usual sources of duplicates. Keep one source.
- Unrendered template text (`{{ product.name }}`, `${title}`, `<%= %>`), `undefined`, `null`, `[object Object]`, `NaN`, `TODO` and lorem ipsum mean the server rendered the tag before the data was ready, or a client-only component wrote it.
- Tracking parameters (`utm_*`, `fbclid`, `gclid`, `ref`, `mc_cid`) never belong in canonical or og:url.

## Fixed head block (shape)
```
<meta charset="utf-8">
<title>{Page headline} | {Brand}</title>
<meta name="description" content="{50-160 characters}">
<link rel="canonical" href="https://{host}/{clean-path}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{Brand}">
<meta property="og:title" content="{Headline}">
<meta property="og:description" content="{1-2 sentences}">
<meta property="og:url" content="https://{host}/{clean-path}">
<meta property="og:image" content="https://{host}/img/{name}-1200x630.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{What the image shows}">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@{brand}">
```
FILE:references/platform-notes.md
# Platform notes

What each app reads, how long it caches, and how to refresh. Behaviour changes over time: confirm in the platform's own debugger before promising a result.

| Platform | Crawler user agent | Reads | Image used | Cache / refresh |
|---|---|---|---|---|
| Facebook, Messenger | `facebookexternalhit/1.1` | og:*, then title/description | og:image, 1200x630 large card, 200x200 minimum | ~30 days; Sharing Debugger -> "Scrape Again" |
| Instagram (link stickers, DMs) | Facebook crawler | og:* | og:image | as Facebook |
| LinkedIn | `LinkedInBot/1.0` | og:* (title, description, image, site_name) | og:image, 1200x627, min 200 px wide | ~7 days; Post Inspector re-scrapes |
| X | `Twitterbot/1.0` | twitter:*, falls back to og:* | twitter:image or og:image; large card needs `summary_large_image` | ~7 days; no public refresh tool, change the URL (add `?v=2` to the shared link, not to canonical) |
| Slack | `Slackbot-LinkExpanding 1.0` | og:*, twitter:*, oEmbed | og:image (large when 1.91:1) | ~30 min per workspace; re-post after the fix |
| Discord | `Discordbot/2.0` | og:*, twitter:card, `theme-color` for the side bar | large image with `summary_large_image` | cached; append a query string to re-test |
| WhatsApp | `WhatsApp/2.x` | og:title, og:description, og:image | og:image; small files (a few hundred KB) give the most reliable thumbnails | per device; new link or new image URL |
| iMessage | Apple's link preview fetcher (runs on the sender's device) | og:title, og:image, favicon | og:image or apple-touch-icon | on device |
| Telegram | `TelegramBot` | og:* | og:image | @WebpageBot to refresh |

## Common reasons a preview is wrong
- **No preview at all:** crawler blocked by robots.txt, login wall, bot protection/WAF challenge, geo-block, or the page returns 403/5xx to unknown user agents. Test with `curl -sI -A "facebookexternalhit/1.1" URL`.
- **Old title or image:** the platform cache. Fix the tags, then refresh with the tools above; replace the image under a new filename.
- **Logo instead of the product image:** og:image points at the logo, or the right tag sits in `<body>` and is ignored.
- **Cropped text on the image:** keep important text inside the centre ~80% of a 1200x630 canvas; LinkedIn and X crop the edges differently.
- **Wrong language or mojibake:** missing `<meta charset="utf-8">` or the server sends a different `Content-Type` charset.
- **Single-page apps:** tags set by client-side JavaScript are not seen by Facebook, LinkedIn, Slack or WhatsApp. Pre-render or render the head on the server.

## Testing checklist
1. `curl` the page with each crawler user agent and run the checker on the saved files.
2. `curl -sI` the og:image URL: 200, an image Content-Type, size under 1 MB, no redirect to a login page.
3. Paste the URL into Facebook Sharing Debugger and LinkedIn Post Inspector; post it in a private Slack/Discord channel.
4. Record the before/after screenshots in the review.
FILE:templates/share-meta-review.md
# Share preview review: <page URL>

**Source:** <curl -A facebookexternalhit, saved <date>>   **Platforms that matter:** <LinkedIn, Slack, WhatsApp>
**Result:** <HIGH n, MEDIUM n, LOW n> - <one-sentence verdict, e.g. "shares show the logo and a template placeholder; fix the SEO plugin output">

## Preview now vs after the fix
| Field | Now | After |
|---|---|---|
| Title | <{{ product.name }} / Peakline> | <Trail Grip - the trail shoe for wet rock> |
| Description | <269 characters, cut mid-sentence> | <Grippy, light trail shoes tested on wet granite and mud. ...> |
| Image | </img/logo.svg (relative SVG)> | <https://shop.example.com/img/trail-grip-share-1200x630.jpg> |
| Card on X | <invalid "large"> | <summary_large_image> |

## Fix list
| # | Sev | Tag | Problem | Fix | Where |
|---|---|---|---|---|---|
| 1 | <HIGH> | <og:image> | <relative SVG logo> | <absolute 1200x630 JPEG> | <theme header.liquid> |
| 2 | <MEDIUM> | <og:title> | <duplicate from SEO plugin, unrendered> | <disable theme OG output, keep plugin> | <plugin settings> |

## Fixed head block
```
<paste the complete corrected tags here, in this order: charset, title, description, canonical, og:*, twitter:*>
```

## Share image spec
- <1200x630 JPEG or PNG, under ~1 MB, new filename; text and logo inside the centre 80%>
- <alt text: "...">

## After deploying
1. <curl -sL -A "facebookexternalhit/1.1" <URL> | grep -E 'og:|twitter:|canonical'>
2. <Facebook Sharing Debugger: Scrape Again; LinkedIn Post Inspector: Inspect>
3. <post in a private Slack channel; check X with a fresh share>

**To verify (not checked offline):** <image URL returns 200 to crawlers; robots.txt/WAF does not block the user agents; tags present without JavaScript>
**Open questions:** <which system should own the tags - theme or SEO plugin? per-product share images available?>
FILE:examples/product-page.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Peakline</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Shoes.">
  <link rel="canonical" href="/shoes/trail-grip">
  <!-- theme defaults -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Peakline Shop">
  <meta property="og:url" content="https://shop.example.com/shoes/trail-grip?utm_source=newsletter">
  <meta property="og:image" content="/img/logo.svg">
  <meta property="og:locale" content="en-us">
  <!-- SEO plugin -->
  <meta property="og:title" content="{{ product.name }} | Peakline">
  <meta name="og:description" content="Grippy, light trail running shoes tested on wet granite, roots and mud. Compare fit, drop and sole wear across three widths, read 240 reviews from real runners, and order with free returns within 60 days and free shipping on orders over 80 dollars, in every EU country.">
  <meta name="twitter:card" content="large">
  <meta name="twitter:site" content="https://x.com/peakline">
  <link rel="stylesheet" href="/css/site.css">
</head>
<body>
  <header><a href="/">Peakline</a></header>
  <main>
    <h1>Trail Grip - wet rock trail shoe</h1>
    <meta property="og:image" content="https://shop.example.com/img/trail-grip-800.jpg">
    <meta property="og:image:width" content="800">
    <meta property="og:image:height" content="800">
    <p>Grippy, light trail shoes tested on wet granite and mud.</p>
  </main>
</body>
</html>
FILE:examples/product-page-fixed.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Trail Grip Running Shoes for Wet Rock | Peakline</title>
  <meta name="description" content="Grippy, light trail shoes tested on wet granite and mud. Compare fit, drop and sole wear across three widths, with free 60-day returns.">
  <link rel="canonical" href="https://shop.example.com/shoes/trail-grip">
  <meta property="og:type" content="product">
  <meta property="og:site_name" content="Peakline">
  <meta property="og:title" content="Trail Grip - the trail shoe for wet rock">
  <meta property="og:description" content="Grippy, light trail shoes tested on wet granite and mud. Three widths, free 60-day returns.">
  <meta property="og:url" content="https://shop.example.com/shoes/trail-grip">
  <meta property="og:image" content="https://shop.example.com/img/trail-grip-share-1200x630.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Blue Trail Grip shoe gripping a wet granite slab">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@peakline">
  <link rel="stylesheet" href="/css/site.css">
</head>
<body>
  <header><a href="/">Peakline</a></header>
  <main>
    <h1>Trail Grip - wet rock trail shoe</h1>
    <p>Grippy, light trail shoes tested on wet granite and mud.</p>
  </main>
</body>
</html>
FILE:examples/meta-report.md
# Social share meta check

Pages: 1   Findings: 21 (HIGH 1, MEDIUM 10, LOW 10)   Page URL: https://shop.example.com/shoes/trail-grip

## product-page.html

Preview as built from the tags (card: large)

| Field | Shown |
|---|---|
| Domain | shop.example.com |
| Title | Peakline Shop |
| Description | Grippy, light trail running shoes tested on wet granite, roots and mud. Compare fit, drop and sole wear across three widths, read 240 reviews from real runners, and order with free returns within 6... |
| Image | /img/logo.svg |

| Sev | Code | Tag | Line | Problem | Fix |
|---|---|---|---|---|---|
| HIGH | RELATIVE_URL | og:image | 13 | og:image is relative (/img/logo.svg); crawlers need an absolute URL - would mean https://shop.example.com/img/logo.svg | write the full URL, e.g. https://shop.example.com/img/logo.svg |
| MEDIUM | RELATIVE_URL | canonical | 8 | canonical is relative (/shoes/trail-grip); crawlers need an absolute URL - would mean https://shop.example.com/shoes/trail-grip | write the full URL, e.g. https://shop.example.com/shoes/trail-grip |
| MEDIUM | TRACKING_PARAMS | og:url | 12 | og:url carries tracking parameters (utm_source=newsletter); every share then counts the campaign | use the clean URL without ?utm_/fbclid/gclid |
| MEDIUM | IMAGE_SVG | og:image | 13 | SVG images are not rendered by Facebook, X, LinkedIn or Slack | export a PNG or JPEG |
| MEDIUM | IMAGE_SMALL | og:image | 13 | image is 800x800 (declared); large previews need at least 1200x630 (shown small or blurry) | use 1200x630 (2400x1260 for sharp retina) |
| MEDIUM | PLACEHOLDER_VALUE | og:title | 16 | og:title looks like an unrendered template or placeholder: '{{ product.name }} / Peakline' | fix the template variable |
| MEDIUM | DUPLICATE_TAG | og:title | 16 | 2 different og:title values; apps pick the first or last unpredictably | keep one (often a theme and an SEO plugin both add tags) |
| MEDIUM | TWITTER_CARD_INVALID | twitter:card | 18 | twitter:card 'large' is not one of summary, summary_large_image, app, player | use summary_large_image (or summary) |
| MEDIUM | TAG_OUTSIDE_HEAD | og:image | 26 | og:image is inside `<body>`; Facebook and LinkedIn read only `<head>` | move into `<head>` |
| MEDIUM | TAG_OUTSIDE_HEAD | og:image:width | 27 | og:image:width is inside `<body>`; Facebook and LinkedIn read only `<head>` | move into `<head>` |
| MEDIUM | TAG_OUTSIDE_HEAD | og:image:height | 28 | og:image:height is inside `<body>`; Facebook and LinkedIn read only `<head>` | move into `<head>` |
| LOW | OG_MISSING | og:site_name | - | og:site_name missing: LinkedIn and Slack show the bare domain instead of your brand | `<meta property="og:site_name" content="Brand">` |
| LOW | CHARSET_MISSING | meta charset | - | no `<meta charset>`; non-ASCII titles can show as mojibake in previews | `<meta charset="utf-8">` first in `<head>` |
| LOW | TITLE_LENGTH | `<title>` | 5 | title is 8 characters (aim for 15-60): 'Peakline' | front-load the key words; search results cut around 60 characters |
| LOW | DESCRIPTION_LENGTH | meta description | 7 | description is 6 characters (aim for 50-160) | rewrite to one or two sentences with the key benefit first |
| LOW | CANONICAL_OG_URL_MISMATCH | og:url | 12 | og:url (https://shop.example.com/shoes/trail-grip?utm_source=newsletter) differs from canonical (/shoes/trail-grip) | use the canonical URL in og:url |
| LOW | IMAGE_ALT_MISSING | og:image:alt | 13 | no og:image:alt (screen readers on X/LinkedIn get nothing) | describe the image in one sentence |
| LOW | OG_LOCALE_FORMAT | og:locale | 14 | og:locale 'en-us' should look like en_US (underscore, region in capitals) | e.g. en_US, de_DE, pt_BR |
| LOW | OG_DESCRIPTION_LONG | og:description | 17 | og:description is 269 characters; most apps show ~2-3 lines | keep under ~200 characters |
| LOW | OG_USES_NAME_ATTR | og:description | 17 | og:description uses name= instead of property= (Open Graph spec; some parsers skip it) | `<meta property="og:description" ...>` |
| LOW | TWITTER_HANDLE_FORMAT | twitter:site | 19 | twitter:site 'https://x.com/peakline' should be an @handle | e.g. @brand |

Offline check of the saved HTML only: tags injected by JavaScript after load are invisible to most crawlers too, but redirects, robots rules, the live image URL and each platform's preview cache were not tested.
FILE:scripts/og_meta_check.py
#!/usr/bin/env python3
"""Open Graph and social share meta tag checker (Python 3.8+ standard library only).

Reads saved HTML (a file, several files, or a folder of *.html) and checks what link
previews on Facebook, LinkedIn, X, Slack, Discord, WhatsApp and iMessage will be built from:
<title>, meta description, rel=canonical, og:* (title, description, type, url, image,
image:width/height/alt/type, site_name, locale) and twitter:* card tags.

It flags missing and duplicate tags, relative or http:// URLs, canonical vs og:url
mismatches, title/description length, image size hints (declared or, with --root, read
from local PNG/JPEG/GIF/WebP files), SVG images, wrong attributes (name= vs property=),
tags outside <head>, and template placeholders ({{ }}, TODO, undefined).

Usage:
  python3 og_meta_check.py page.html [more.html | folder/] [--url https://example.com/page]
                           [--root public/] [--min-severity LOW|MEDIUM|HIGH] [--ignore CODE,..] [--json]
  python3 og_meta_check.py --self-test

--url   the page's public URL (used to resolve relative links and compare canonical/og:url)
--root  local folder that maps to the site root, so /img/share.png is read from root/img/share.png

Exit codes: 0 = no HIGH findings, 1 = HIGH findings, 2 = bad input. No network calls are made.
"""
import argparse
import json
import os
import re
import struct
import sys
from html.parser import HTMLParser
from urllib.parse import urljoin, urlsplit

SEV_ORDER = {"LOW": 1, "MEDIUM": 2, "HIGH": 3}
TWITTER_CARDS = ("summary", "summary_large_image", "app", "player")
SINGLE_OG = ("og:title", "og:description", "og:type", "og:url", "og:site_name", "og:locale")
PLACEHOLDER_RE = re.compile(r"(\{\{|\}\}|\$\{|<%|%>|\bTODO\b|\bTBD\b|lorem ipsum|\bundefined\b|\bnull\b|\[object Object\]|NaN)", re.I)
TITLE_RANGE = (15, 60)       # search results show roughly 50-60 characters
DESC_RANGE = (50, 160)
OG_TITLE_MAX = 90            # Facebook/LinkedIn cut long titles around 2 lines
OG_DESC_MAX = 200
IMG_MIN = (200, 200)         # Facebook minimum
IMG_LARGE = (1200, 630)      # recommended 1.91:1
IMG_MAX_BYTES = 5 * 1024 * 1024   # X limit 5 MB; Facebook 8 MB


class Meta:
    def __init__(self, key, attr, content, line, in_head):
        self.key, self.attr, self.content, self.line, self.in_head = key, attr, content, line, in_head


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.metas, self.links, self.titles = [], [], []
        self.in_head = True       # before <body> starts, tags count as head (HTML parsing rules)
        self.seen_head = False
        self._in_title, self._title_buf, self._title_line = False, [], 0
        self.charset = None
        self.lang = None

    def handle_starttag(self, tag, attrs):
        a = {k.lower(): (v if v is not None else "") for k, v in attrs}
        line = self.getpos()[0]
        if tag == "html":
            self.lang = a.get("lang")
        elif tag == "head":
            self.seen_head = True
            self.in_head = True
        elif tag == "body":
            self.in_head = False
        elif tag == "title":
            self._in_title, self._title_buf, self._title_line = True, [], line
        elif tag == "meta":
            if "charset" in a:
                self.charset = a["charset"]
            for attr in ("property", "name", "itemprop"):
                if a.get(attr):
                    self.metas.append(Meta(a[attr].strip().lower(), attr, a.get("content", None), line, self.in_head))
                    break
        elif tag == "link":
            rel = a.get("rel", "").lower().split()
            self.links.append({"rel": rel, "href": a.get("href", ""), "line": line, "in_head": self.in_head,
                               "sizes": a.get("sizes", "")})
        if tag in ("div", "p", "main", "article", "section", "h1", "img", "span", "header", "nav") and self.in_head and self.seen_head:
            self.in_head = False  # implied <body>

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag):
        if tag == "head":
            self.in_head = False
        elif tag == "title" and self._in_title:
            self._in_title = False
            self.titles.append((" ".join("".join(self._title_buf).split()), self._title_line))

    def handle_data(self, data):
        if self._in_title:
            self._title_buf.append(data)


def image_size(path):
    """Return (width, height, format) for PNG, GIF, JPEG or WebP, else None."""
    with open(path, "rb") as fh:
        head = fh.read(32)
        if head[:8] == b"\x89PNG\r\n\x1a\n":
            w, h = struct.unpack(">II", head[16:24])
            return w, h, "png"
        if head[:6] in (b"GIF87a", b"GIF89a"):
            w, h = struct.unpack("<HH", head[6:10])
            return w, h, "gif"
        if head[:4] == b"RIFF" and head[8:12] == b"WEBP":
            fh.seek(12)
            chunk = fh.read(30)
            kind = chunk[:4]
            if kind == b"VP8X":
                w = int.from_bytes(chunk[12:15], "little") + 1
                h = int.from_bytes(chunk[15:18], "little") + 1
                return w, h, "webp"
            if kind == b"VP8 ":
                w, h = struct.unpack("<HH", chunk[14:18])
                return w & 0x3FFF, h & 0x3FFF, "webp"
            if kind == b"VP8L":
                b = chunk[9:13]
                bits = int.from_bytes(b, "little")
                return (bits & 0x3FFF) + 1, ((bits >> 14) & 0x3FFF) + 1, "webp"
            return None
        if head[:2] == b"\xff\xd8":
            fh.seek(2)
            while True:
                m = fh.read(2)
                if len(m) < 2 or m[0] != 0xFF:
                    return None
                marker = m[1]
                if marker in (0xD8, 0x01) or 0xD0 <= marker <= 0xD7:
                    continue
                seg = fh.read(2)
                if len(seg) < 2:
                    return None
                length = struct.unpack(">H", seg)[0]
                if marker in (0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7, 0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF):
                    data = fh.read(5)
                    h, w = struct.unpack(">HH", data[1:5])
                    return w, h, "jpeg"
                fh.seek(length - 2, 1)
    return None


def analyze(html, page_url="", root=None, name="page.html"):
    p = PageParser()
    p.feed(html)
    p.close()
    f = []

    def add(sev, code, tag, problem, fix, line=0):
        f.append({"severity": sev, "code": code, "tag": tag, "problem": problem, "fix": fix, "line": line, "file": name})

    metas = {}
    for m in p.metas:
        metas.setdefault(m.key, []).append(m)

    def first(key):
        v = metas.get(key)
        return v[0] if v else None

    def val(key):
        m = first(key)
        return (m.content or "").strip() if m and m.content is not None else None

    page_https = page_url.lower().startswith("https://")

    def check_abs(tag, url, line, sev_rel="HIGH"):
        if not url:
            return
        s = urlsplit(url)
        if not s.scheme:
            resolved = urljoin(page_url, url) if page_url else None
            add(sev_rel, "RELATIVE_URL", tag, "%s is relative (%s); crawlers need an absolute URL%s" %
                (tag, url, (" - would mean " + resolved) if resolved else ""),
                "write the full URL, e.g. %s" % (resolved or "https://example.com" + ("" if url.startswith("/") else "/") + url), line)
        elif s.scheme == "http" and (page_https or tag.startswith(("og:image", "twitter:image"))):
            add("MEDIUM", "HTTP_URL", tag, "%s uses http:// (%s); some apps skip insecure images or mix up the canonical" % (tag, url),
                "use https://", line)

    # ---- title / description
    titles = p.titles
    if not titles or not titles[0][0]:
        add("HIGH", "TITLE_MISSING", "<title>", "no <title>; search results and many previews fall back to the URL",
            "add a specific <title> of 15-60 characters")
    else:
        t, line = titles[0]
        if len(titles) > 1:
            add("MEDIUM", "TITLE_MULTIPLE", "<title>", "%d <title> elements; only the first is used" % len(titles), "keep one", titles[1][1])
        if len(t) < TITLE_RANGE[0] or len(t) > TITLE_RANGE[1]:
            add("LOW", "TITLE_LENGTH", "<title>", "title is %d characters (aim for %d-%d): %r" % (len(t), TITLE_RANGE[0], TITLE_RANGE[1], t),
                "front-load the key words; search results cut around 60 characters", line)
    desc = val("description")
    if desc is None or desc == "":
        add("MEDIUM", "DESCRIPTION_MISSING", "meta description", "no meta description; previews and search snippets pick random page text",
            "add <meta name=\"description\" content=\"...\"> of 50-160 characters")
    elif len(desc) < DESC_RANGE[0] or len(desc) > DESC_RANGE[1]:
        add("LOW", "DESCRIPTION_LENGTH", "meta description", "description is %d characters (aim for %d-%d)" % (len(desc), DESC_RANGE[0], DESC_RANGE[1]),
            "rewrite to one or two sentences with the key benefit first", first("description").line)
    if len(metas.get("description", [])) > 1:
        add("MEDIUM", "DUPLICATE_TAG", "meta description", "%d meta descriptions; the first is used" % len(metas["description"]), "keep one",
            metas["description"][1].line)

    # ---- canonical
    canon = [l for l in p.links if "canonical" in l["rel"]]
    canon_url = None
    if not canon:
        add("MEDIUM", "CANONICAL_MISSING", "link rel=canonical", "no canonical URL; shares with ?utm= or ?ref= parameters count as separate pages",
            "<link rel=\"canonical\" href=\"https://example.com/clean-path\">")
    else:
        if len(set(l["href"] for l in canon)) > 1:
            add("HIGH", "CANONICAL_MULTIPLE", "link rel=canonical", "%d different canonical URLs; search engines may ignore all of them" % len(canon),
                "keep exactly one", canon[1]["line"])
        canon_url = canon[0]["href"].strip()
        if not canon_url:
            add("HIGH", "CANONICAL_EMPTY", "link rel=canonical", "canonical href is empty", "set the full URL", canon[0]["line"])
        else:
            check_abs("canonical", canon_url, canon[0]["line"], "MEDIUM")
            if not canon[0]["in_head"]:
                add("MEDIUM", "TAG_OUTSIDE_HEAD", "link rel=canonical", "canonical is in <body>; search engines ignore it there", "move into <head>", canon[0]["line"])
            if page_url and urlsplit(canon_url).scheme and urlsplit(canon_url).netloc != urlsplit(page_url).netloc:
                add("LOW", "CANONICAL_OTHER_HOST", "link rel=canonical", "canonical points to another host (%s)" % urlsplit(canon_url).netloc,
                    "fine for syndicated copies; otherwise use this page's own URL", canon[0]["line"])

    # ---- Open Graph core
    for key, sev, why, fix in (
            ("og:title", "MEDIUM", "previews fall back to <title> (often with the site name suffix)", "<meta property=\"og:title\" content=\"...\">"),
            ("og:description", "LOW", "previews fall back to the meta description or page text", "<meta property=\"og:description\" content=\"...\">"),
            ("og:type", "LOW", "defaults to website; use article or product where it fits", "<meta property=\"og:type\" content=\"website\">"),
            ("og:url", "LOW", "shares are not merged onto one canonical URL (like counts split)", "<meta property=\"og:url\" content=\"<canonical URL>\">"),
            ("og:site_name", "LOW", "LinkedIn and Slack show the bare domain instead of your brand", "<meta property=\"og:site_name\" content=\"Brand\">")):
        if first(key) is None:
            add(sev, "OG_MISSING", key, "%s missing: %s" % (key, why), fix)
        elif not val(key):
            add("MEDIUM", "EMPTY_CONTENT", key, "%s has an empty content attribute" % key, "fill it or remove the tag", first(key).line)
    ogt = val("og:title")
    if ogt and len(ogt) > OG_TITLE_MAX:
        add("LOW", "OG_TITLE_LONG", "og:title", "og:title is %d characters; previews cut it after ~2 lines" % len(ogt), "keep under ~70-90 characters", first("og:title").line)
    ogd = val("og:description")
    if ogd and len(ogd) > OG_DESC_MAX:
        add("LOW", "OG_DESCRIPTION_LONG", "og:description", "og:description is %d characters; most apps show ~2-3 lines" % len(ogd), "keep under ~200 characters", first("og:description").line)
    if first("og:url") and val("og:url"):
        check_abs("og:url", val("og:url"), first("og:url").line)
        canon_abs = urljoin(page_url, canon_url) if canon_url and page_url else canon_url
        if canon_abs and urlsplit(canon_abs).scheme and val("og:url").rstrip("/") != canon_abs.rstrip("/"):
            add("LOW", "CANONICAL_OG_URL_MISMATCH", "og:url", "og:url (%s) differs from canonical (%s)" % (val("og:url"), canon_url),
                "use the canonical URL in og:url", first("og:url").line)
    for key, u, ln in (("og:url", val("og:url"), first("og:url").line if first("og:url") else 0),
                       ("canonical", canon_url, canon[0]["line"] if canon else 0)):
        if u and re.search(r"[?&](utm_[a-z]+|fbclid|gclid|ref|mc_cid)=", u, re.I):
            add("MEDIUM", "TRACKING_PARAMS", key, "%s carries tracking parameters (%s); every share then counts the campaign" % (key, urlsplit(u).query),
                "use the clean URL without ?utm_/fbclid/gclid", ln)
    loc = val("og:locale")
    if loc and not re.match(r"^[a-z]{2,3}_[A-Z]{2}$", loc):
        add("LOW", "OG_LOCALE_FORMAT", "og:locale", "og:locale %r should look like en_US (underscore, region in capitals)" % loc,
            "e.g. en_US, de_DE, pt_BR", first("og:locale").line)
    ogtype = val("og:type")
    if ogtype and ogtype not in ("website", "article", "book", "profile", "product", "music.song", "music.album",
                                 "music.playlist", "music.radio_station", "video.movie", "video.episode",
                                 "video.tv_show", "video.other", "og:product", "product.item", "business.business",
                                 "restaurant.restaurant", "place"):
        add("LOW", "OG_TYPE_UNKNOWN", "og:type", "og:type %r is not a standard type" % ogtype, "website, article, product, profile...", first("og:type").line)

    # ---- image
    img_meta = first("og:image") or first("og:image:url") or first("og:image:secure_url")
    img = (img_meta.content or "").strip() if img_meta and img_meta.content else ""
    tw_img = val("twitter:image") or val("twitter:image:src")
    if not img:
        add("HIGH", "OG_IMAGE_MISSING", "og:image", "no og:image: shares show a plain text link or a random page image",
            "add a 1200x630 image: <meta property=\"og:image\" content=\"https://.../share.png\">")
    else:
        check_abs("og:image", img, img_meta.line)
        if re.search(r"\.svg(\?|#|$)", img, re.I):
            add("MEDIUM", "IMAGE_SVG", "og:image", "SVG images are not rendered by Facebook, X, LinkedIn or Slack", "export a PNG or JPEG", img_meta.line)
        w, h = val("og:image:width"), val("og:image:height")
        size, source = None, ""
        if w and h and w.isdigit() and h.isdigit():
            size, source = (int(w), int(h)), "declared"
        elif w or h:
            add("LOW", "IMAGE_DIMENSIONS_INVALID", "og:image:width/height", "width/height must both be whole numbers (got %r x %r)" % (w, h),
                "e.g. 1200 and 630", img_meta.line)
        if root:
            local = _local_path(img, page_url, root)
            if local and os.path.isfile(local):
                real = image_size(local)
                nbytes = os.path.getsize(local)
                if real:
                    if size and (size[0], size[1]) != (real[0], real[1]):
                        add("MEDIUM", "IMAGE_DIMENSIONS_WRONG", "og:image:width/height",
                            "declared %dx%d but the file is %dx%d" % (size[0], size[1], real[0], real[1]),
                            "declare the real size", img_meta.line)
                    size, source = (real[0], real[1]), "file %s" % os.path.relpath(local, root)
                if nbytes > IMG_MAX_BYTES:
                    add("MEDIUM", "IMAGE_TOO_HEAVY", "og:image", "image file is %.1f MB (X rejects over 5 MB, previews time out)" % (nbytes / 1048576.0),
                        "compress to under ~1 MB (JPEG/WebP quality 80)", img_meta.line)
            elif local:
                add("MEDIUM", "IMAGE_NOT_FOUND", "og:image", "image not found under --root: %s" % local, "check the path and deploy the file", img_meta.line)
        if size is None:
            add("LOW", "IMAGE_DIMENSIONS_MISSING", "og:image:width/height",
                "no og:image:width/height; Facebook cannot render the image on the very first share",
                "add og:image:width 1200 and og:image:height 630", img_meta.line)
        else:
            iw, ih = size
            if iw < IMG_MIN[0] or ih < IMG_MIN[1]:
                add("HIGH", "IMAGE_TOO_SMALL", "og:image", "image is %dx%d (%s); below 200x200 Facebook ignores it" % (iw, ih, source),
                    "use 1200x630", img_meta.line)
            elif iw < IMG_LARGE[0] or ih < IMG_LARGE[1]:
                add("MEDIUM", "IMAGE_SMALL", "og:image", "image is %dx%d (%s); large previews need at least 1200x630 (shown small or blurry)" % (iw, ih, source),
                    "use 1200x630 (2400x1260 for sharp retina)", img_meta.line)
            ratio = iw / float(ih)
            card = val("twitter:card") or ""
            if card == "summary_large_image" or not card:
                if not (1.75 <= ratio <= 2.05):
                    add("LOW", "IMAGE_ASPECT", "og:image", "aspect ratio %.2f:1 will be cropped in large cards (aim for 1.91:1)" % ratio,
                        "1200x630, keep text inside the centre 80%", img_meta.line)
        if not val("og:image:alt"):
            add("LOW", "IMAGE_ALT_MISSING", "og:image:alt", "no og:image:alt (screen readers on X/LinkedIn get nothing)",
                "describe the image in one sentence", img_meta.line)
    if tw_img:
        check_abs("twitter:image", tw_img, first("twitter:image").line if first("twitter:image") else 0)

    # ---- twitter / X card
    card = val("twitter:card")
    if card is None:
        add("LOW" if img else "MEDIUM", "TWITTER_CARD_MISSING", "twitter:card",
            "no twitter:card; X shows a small summary card at best", "<meta name=\"twitter:card\" content=\"summary_large_image\">")
    elif card not in TWITTER_CARDS:
        add("MEDIUM", "TWITTER_CARD_INVALID", "twitter:card", "twitter:card %r is not one of %s" % (card, ", ".join(TWITTER_CARDS)),
            "use summary_large_image (or summary)", first("twitter:card").line)
    elif card == "summary_large_image" and not (img or tw_img):
        add("MEDIUM", "TWITTER_CARD_NO_IMAGE", "twitter:card", "summary_large_image without any image", "add og:image or twitter:image", first("twitter:card").line)
    for key in ("twitter:site", "twitter:creator"):
        v = val(key)
        if v and not re.match(r"^@\w{1,15}$", v):
            add("LOW", "TWITTER_HANDLE_FORMAT", key, "%s %r should be an @handle" % (key, v), "e.g. @brand", first(key).line)

    # ---- attribute and placement problems, duplicates, placeholders
    for m in p.metas:
        if m.key.startswith("og:") and m.attr == "name":
            add("LOW", "OG_USES_NAME_ATTR", m.key, "%s uses name= instead of property= (Open Graph spec; some parsers skip it)" % m.key,
                "<meta property=\"%s\" ...>" % m.key, m.line)
        if (m.key.startswith(("og:", "twitter:")) or m.key == "description") and not m.in_head:
            add("MEDIUM", "TAG_OUTSIDE_HEAD", m.key, "%s is inside <body>; Facebook and LinkedIn read only <head>" % m.key, "move into <head>", m.line)
        if m.content is None and (m.key.startswith(("og:", "twitter:")) or m.key == "description"):
            add("MEDIUM", "NO_CONTENT_ATTR", m.key, "%s has no content attribute (value=/text= are ignored)" % m.key, "use content=\"...\"", m.line)
        if m.content and PLACEHOLDER_RE.search(m.content) and (m.key.startswith(("og:", "twitter:")) or m.key == "description"):
            add("MEDIUM", "PLACEHOLDER_VALUE", m.key, "%s looks like an unrendered template or placeholder: %r" % (m.key, m.content[:60]),
                "fix the template variable", m.line)
    for key in SINGLE_OG + ("twitter:card", "twitter:title", "twitter:description"):
        ms = metas.get(key, [])
        if len(ms) > 1 and len(set((m.content or "") for m in ms)) > 1:
            add("MEDIUM", "DUPLICATE_TAG", key, "%d different %s values; apps pick the first or last unpredictably" % (len(ms), key),
                "keep one (often a theme and an SEO plugin both add tags)", ms[1].line)
    if titles and titles[0][0] and PLACEHOLDER_RE.search(titles[0][0]):
        add("MEDIUM", "PLACEHOLDER_VALUE", "<title>", "title looks like a placeholder: %r" % titles[0][0], "fix the template", titles[0][1])
    if not p.charset:
        add("LOW", "CHARSET_MISSING", "meta charset", "no <meta charset>; non-ASCII titles can show as mojibake in previews", "<meta charset=\"utf-8\"> first in <head>")

    preview = {
        "title": _cut(ogt or (titles[0][0] if titles else "") or "", OG_TITLE_MAX),
        "description": _cut(ogd or desc or "", OG_DESC_MAX),
        "image": img or tw_img or "",
        "domain": urlsplit(val("og:url") or canon_url or page_url or "").netloc,
        "card": card or ("summary" if img else "none"),
    }
    return f, preview


def _cut(text, n):
    return text if len(text) <= n else text[:n - 3].rstrip() + "..."


def _code(text):
    """Wrap <tags> in backticks so markdown shows them instead of swallowing them as HTML."""
    return re.sub(r"(<[^<>]+>)", r"`\1`", text.replace("|", "/"))


def _local_path(url, page_url, root):
    s = urlsplit(url)
    if s.scheme and page_url and s.netloc and s.netloc != urlsplit(page_url).netloc:
        return None  # image on another host (CDN): cannot check locally
    path = urlsplit(urljoin(page_url or "https://local.invalid/", url)).path
    return os.path.join(root, path.lstrip("/"))


def run_files(paths, page_url, root, min_sev, ignore):
    results = []
    files = []
    for p in paths:
        if os.path.isdir(p):
            for dp, _, fns in os.walk(p):
                files += [os.path.join(dp, fn) for fn in sorted(fns) if fn.lower().endswith((".html", ".htm"))]
        else:
            files.append(p)
    if not files:
        raise ValueError("no HTML files found")
    for fp in files:
        with open(fp, encoding="utf-8", errors="replace") as fh:
            html = fh.read()
        if not re.search(r"<(html|head|meta|title|link)\b", html, re.I):
            raise ValueError("%s does not look like HTML" % fp)
        fs, prev = analyze(html, page_url if len(files) == 1 else "", root, os.path.basename(fp))
        fs = [x for x in fs if SEV_ORDER[x["severity"]] >= SEV_ORDER[min_sev] and x["code"] not in ignore]
        fs.sort(key=lambda x: (-SEV_ORDER[x["severity"]], x["line"]))
        results.append((fp, fs, prev))
    return results


def render_md(results, page_url):
    allf = [x for _, fs, _ in results for x in fs]
    c = {k: sum(1 for x in allf if x["severity"] == k) for k in ("HIGH", "MEDIUM", "LOW")}
    o = ["# Social share meta check", "",
         "Pages: %d   Findings: %d (HIGH %d, MEDIUM %d, LOW %d)%s" % (len(results), len(allf), c["HIGH"], c["MEDIUM"], c["LOW"],
                                                                     ("   Page URL: " + page_url) if page_url and len(results) == 1 else "")]
    for fp, fs, prev in results:
        o += ["", "## %s" % os.path.basename(fp), "",
              "Preview as built from the tags (card: %s)" % prev["card"], "",
              "| Field | Shown |", "|---|---|",
              "| Domain | %s |" % (prev["domain"] or "(unknown)"),
              "| Title | %s |" % (prev["title"].replace("|", "/") or "(none)"),
              "| Description | %s |" % (prev["description"].replace("|", "/") or "(none)"),
              "| Image | %s |" % (prev["image"] or "(none)"), ""]
        if not fs:
            o.append("No findings.")
            continue
        o += ["| Sev | Code | Tag | Line | Problem | Fix |", "|---|---|---|---|---|---|"]
        for x in fs:
            o.append("| %s | %s | %s | %s | %s | %s |" % (x["severity"], x["code"], _code(x["tag"]), x["line"] or "-",
                                                         _code(x["problem"]), _code(x["fix"])))
    o += ["", "Offline check of the saved HTML only: tags injected by JavaScript after load are invisible to most crawlers too, "
          "but redirects, robots rules, the live image URL and each platform's preview cache were not tested."]
    return "\n".join(o) + "\n"


# ----------------------------------------------------------------------------- self-test

GOOD = """<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>Trail Running Shoes for Wet Rocks | Peakline</title>
<meta name="description" content="Grippy, light trail shoes tested on wet granite and mud. Compare fit, drop and sole wear, then pick your size.">
<link rel="canonical" href="https://shop.example.com/shoes/trail-grip">
<meta property="og:type" content="product"><meta property="og:site_name" content="Peakline">
<meta property="og:title" content="Trail Running Shoes for Wet Rocks">
<meta property="og:description" content="Grippy, light trail shoes tested on wet granite and mud.">
<meta property="og:url" content="https://shop.example.com/shoes/trail-grip">
<meta property="og:image" content="https://shop.example.com/img/trail-grip-share.jpg">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Blue trail shoe on a wet granite slab">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@peakline">
</head><body><h1>Trail Grip</h1></body></html>"""


def self_test():
    import tempfile
    cases = []

    def codes(html, url="https://shop.example.com/shoes/trail-grip", root=None):
        return [x["code"] for x in analyze(html, url, root)[0]]

    def case(name, fn):
        try:
            ok, err = bool(fn()), ""
        except Exception as e:  # noqa
            ok, err = False, repr(e)
        cases.append((name, ok, err))

    def sub(a, b):
        assert a in GOOD, a
        return GOOD.replace(a, b)

    case("good page is clean", lambda: codes(GOOD) == [])
    case("missing title", lambda: "TITLE_MISSING" in codes(sub("<title>Trail Running Shoes for Wet Rocks | Peakline</title>", "")))
    case("two titles", lambda: "TITLE_MULTIPLE" in codes(sub("</head>", "<title>Other</title></head>")))
    case("title too long", lambda: "TITLE_LENGTH" in codes(sub("Trail Running Shoes for Wet Rocks | Peakline", "x" * 75)))
    case("description missing", lambda: "DESCRIPTION_MISSING" in codes(re.sub(r'<meta name="description"[^>]*>', "", GOOD)))
    case("description short", lambda: "DESCRIPTION_LENGTH" in codes(re.sub(r'(<meta name="description" content=")[^"]*', r"\1Shoes.", GOOD)))
    case("canonical missing", lambda: "CANONICAL_MISSING" in codes(re.sub(r'<link rel="canonical"[^>]*>', "", GOOD)))
    case("canonical relative", lambda: "RELATIVE_URL" in codes(sub('href="https://shop.example.com/shoes/trail-grip"', 'href="/shoes/trail-grip"')))
    case("two canonicals", lambda: "CANONICAL_MULTIPLE" in codes(sub("</head>", '<link rel="canonical" href="https://shop.example.com/x"></head>')))
    case("canonical vs og:url mismatch", lambda: "CANONICAL_OG_URL_MISMATCH" in codes(sub('og:url" content="https://shop.example.com/shoes/trail-grip"', 'og:url" content="https://shop.example.com/shoes/trail-grip?utm_source=x"')))
    case("trailing slash difference ignored", lambda: "CANONICAL_OG_URL_MISMATCH" not in codes(sub('og:url" content="https://shop.example.com/shoes/trail-grip"', 'og:url" content="https://shop.example.com/shoes/trail-grip/"')))
    case("og:image missing HIGH", lambda: "OG_IMAGE_MISSING" in codes(re.sub(r'<meta property="og:image[^>]*>', "", GOOD)))
    case("og:image relative HIGH", lambda: [x["severity"] for x in analyze(sub('content="https://shop.example.com/img/trail-grip-share.jpg"', 'content="/img/trail-grip-share.jpg"'), "https://shop.example.com/p")[0] if x["code"] == "RELATIVE_URL"] == ["HIGH"])
    case("og:image http", lambda: "HTTP_URL" in codes(sub("https://shop.example.com/img/", "http://shop.example.com/img/")))
    case("og:image svg", lambda: "IMAGE_SVG" in codes(sub("trail-grip-share.jpg", "logo.svg")))
    case("image dims missing", lambda: "IMAGE_DIMENSIONS_MISSING" in codes(re.sub(r'<meta property="og:image:(width|height)"[^>]*>', "", GOOD)))
    case("image too small HIGH", lambda: "IMAGE_TOO_SMALL" in codes(sub('content="1200"', 'content="150"').replace('content="630"', 'content="150"')))
    case("image small MEDIUM", lambda: "IMAGE_SMALL" in codes(sub('content="1200"', 'content="600"').replace('content="630"', 'content="315"')))
    case("image square aspect for large card", lambda: "IMAGE_ASPECT" in codes(sub('content="630"', 'content="1200"')))
    case("summary card allows square", lambda: "IMAGE_ASPECT" not in codes(sub('content="630"', 'content="1200"').replace("summary_large_image", "summary")))
    case("image alt missing", lambda: "IMAGE_ALT_MISSING" in codes(re.sub(r'<meta property="og:image:alt"[^>]*>', "", GOOD)))
    case("dims not numbers", lambda: "IMAGE_DIMENSIONS_INVALID" in codes(sub('content="1200"', 'content="1200px"')))
    case("og:title missing", lambda: "OG_MISSING" in codes(re.sub(r'<meta property="og:title"[^>]*>', "", GOOD)))
    case("empty og:description", lambda: "EMPTY_CONTENT" in codes(re.sub(r'(<meta property="og:description" content=")[^"]*', r"\1", GOOD)))
    case("og:title too long", lambda: "OG_TITLE_LONG" in codes(sub('og:title" content="Trail Running Shoes for Wet Rocks"', 'og:title" content="' + "y" * 120 + '"')))
    case("tracking params in og:url", lambda: "TRACKING_PARAMS" in codes(sub('og:url" content="https://shop.example.com/shoes/trail-grip"', 'og:url" content="https://shop.example.com/shoes/trail-grip?utm_source=nl"')))
    case("relative canonical compared after resolving", lambda: "CANONICAL_OG_URL_MISMATCH" in codes(sub('href="https://shop.example.com/shoes/trail-grip"', 'href="/shoes/other"')))
    case("preview cut with ellipsis", lambda: _cut("a" * 300, 200).endswith("...") and len(_cut("a" * 300, 200)) <= 200)
    case("og:locale format", lambda: "OG_LOCALE_FORMAT" in codes(sub("en_US", "en-us")))
    case("og:type unknown", lambda: "OG_TYPE_UNKNOWN" in codes(sub('og:type" content="product"', 'og:type" content="shoe"')))
    case("og with name attr", lambda: "OG_USES_NAME_ATTR" in codes(sub('property="og:title"', 'name="og:title"')))
    case("twitter card missing", lambda: "TWITTER_CARD_MISSING" in codes(re.sub(r'<meta name="twitter:card"[^>]*>', "", GOOD)))
    case("twitter card invalid", lambda: "TWITTER_CARD_INVALID" in codes(sub("summary_large_image", "large")))
    case("twitter handle format", lambda: "TWITTER_HANDLE_FORMAT" in codes(sub("@peakline", "https://x.com/peakline")))
    case("large card without any image", lambda: "TWITTER_CARD_NO_IMAGE" in codes(re.sub(r'<meta property="og:image[^>]*>', "", GOOD)))
    case("tag in body", lambda: "TAG_OUTSIDE_HEAD" in codes(sub("<h1>Trail Grip</h1>", '<h1>T</h1><meta property="og:video" content="https://a/v.mp4">')))
    case("implied body by div", lambda: "TAG_OUTSIDE_HEAD" in codes(GOOD.replace("</head><body>", "<div>x</div>").replace('<meta name="twitter:site" content="@peakline">', "").replace("<h1>", '<meta name="twitter:site" content="@peakline"><h1>')))
    case("placeholder value", lambda: "PLACEHOLDER_VALUE" in codes(sub('og:title" content="Trail Running Shoes for Wet Rocks"', 'og:title" content="{{ product.name }}"')))
    case("undefined value", lambda: "PLACEHOLDER_VALUE" in codes(sub("Blue trail shoe on a wet granite slab", "undefined")))
    case("duplicate og:title different values", lambda: "DUPLICATE_TAG" in codes(sub("</head>", '<meta property="og:title" content="Peakline Shop"></head>')))
    case("duplicate same value tolerated", lambda: "DUPLICATE_TAG" not in codes(sub("</head>", '<meta property="og:title" content="Trail Running Shoes for Wet Rocks"></head>')))
    case("no content attribute", lambda: "NO_CONTENT_ATTR" in codes(sub('<meta property="og:site_name" content="Peakline">', '<meta property="og:site_name" value="Peakline">')))
    case("charset missing", lambda: "CHARSET_MISSING" in codes(sub('<meta charset="utf-8">', "")))
    case("html entities decoded in title", lambda: analyze(re.sub(r'<meta property="og:title"[^>]*>', "", sub("Wet Rocks | Peakline", "Wet Rocks &amp; Mud")))[1]["title"] == "Trail Running Shoes for Wet Rocks & Mud")
    case("preview uses og values", lambda: analyze(GOOD, "https://shop.example.com/shoes/trail-grip")[1]["domain"] == "shop.example.com")

    tmp = tempfile.mkdtemp()
    os.makedirs(os.path.join(tmp, "img"))
    png = b"\x89PNG\r\n\x1a\n" + b"\x00\x00\x00\x0dIHDR" + struct.pack(">II", 800, 418) + b"\x08\x02\x00\x00\x00"
    with open(os.path.join(tmp, "img", "trail-grip-share.jpg"), "wb") as fh:
        fh.write(png)
    case("--root reads real image size", lambda: "IMAGE_DIMENSIONS_WRONG" in codes(GOOD, root=tmp) and "IMAGE_SMALL" in codes(GOOD, root=tmp))
    case("--root image not found", lambda: "IMAGE_NOT_FOUND" in codes(sub("trail-grip-share.jpg", "nope.png"), root=tmp))
    case("png size parser", lambda: image_size(os.path.join(tmp, "img", "trail-grip-share.jpg"))[:2] == (800, 418))
    gif = b"GIF89a" + struct.pack("<HH", 1200, 630) + b"\x00" * 20
    jpg = (b"\xff\xd8" + b"\xff\xe0" + struct.pack(">H", 16) + b"JFIF\x00" + b"\x00" * 9 +
           b"\xff\xc0" + struct.pack(">H", 17) + b"\x08" + struct.pack(">HH", 630, 1200) + b"\x03" + b"\x00" * 9)
    webp = b"RIFF" + b"\x00" * 4 + b"WEBPVP8X" + b"\x0a\x00\x00\x00" + b"\x00" * 4 + (1199).to_bytes(3, "little") + (629).to_bytes(3, "little")
    for fn, data in (("a.gif", gif), ("a.jpg", jpg), ("a.webp", webp)):
        with open(os.path.join(tmp, fn), "wb") as fh:
            fh.write(data)
    case("gif size parser", lambda: image_size(os.path.join(tmp, "a.gif"))[:2] == (1200, 630))
    case("jpeg size parser", lambda: image_size(os.path.join(tmp, "a.jpg"))[:2] == (1200, 630))
    case("webp size parser", lambda: image_size(os.path.join(tmp, "a.webp"))[:2] == (1200, 630))
    case("cdn image skipped for --root", lambda: _local_path("https://cdn.other.net/a.png", "https://shop.example.com/", tmp) is None)
    case("non-HTML file rejected", lambda: _rejects(tmp))
    case("markdown render", lambda: "Preview as built" in render_md([("p.html", [], analyze(GOOD)[1])], ""))

    passed = sum(1 for _, ok, _ in cases if ok)
    for name, ok, err in cases:
        print(("PASS " if ok else "FAIL ") + name + ((" " + err) if err else ""))
    print("%d/%d passed" % (passed, len(cases)))
    return 0 if passed == len(cases) else 1


def _rejects(tmp):
    fp = os.path.join(tmp, "notes.md")
    with open(fp, "w") as fh:
        fh.write("# Notes\nuse <b>bold</b>\n")
    try:
        run_files([fp], "", None, "LOW", set())
    except ValueError:
        return True
    return False


def main(argv=None):
    ap = argparse.ArgumentParser(description="Check Open Graph / X card / canonical meta tags in saved HTML (offline).")
    ap.add_argument("paths", nargs="*", help="HTML files or folders")
    ap.add_argument("--url", default="", help="public URL of the page (single file)")
    ap.add_argument("--root", default=None, help="local folder mapped to the site root, to read og:image files")
    ap.add_argument("--min-severity", default="LOW", choices=["LOW", "MEDIUM", "HIGH"])
    ap.add_argument("--ignore", default="", help="comma-separated finding codes to skip")
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--self-test", action="store_true")
    a = ap.parse_args(argv)
    if a.self_test:
        return self_test()
    if not a.paths:
        ap.error("give HTML files/folders or --self-test")
    ignore = {c.strip() for c in a.ignore.split(",") if c.strip()}
    try:
        results = run_files(a.paths, a.url, a.root, a.min_severity, ignore)
    except (OSError, ValueError) as e:
        print("error: %s" % e, file=sys.stderr)
        return 2
    if a.json:
        print(json.dumps([{"file": fp, "preview": prev, "findings": fs} for fp, fs, prev in results], indent=2))
    else:
        sys.stdout.write(render_md(results, a.url))
    return 1 if any(x["severity"] == "HIGH" for _, fs, _ in results for x in fs) else 0


if __name__ == "__main__":
    sys.exit(main())
