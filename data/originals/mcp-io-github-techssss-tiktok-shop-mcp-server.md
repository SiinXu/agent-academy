# TikTok & TikTok Shop MCP Server + Cloud Scraper API (22+ Countries)

[![Run on Apify Store](https://img.shields.io/badge/Apify%20Store-Run%20TikTok%20Shop%20Scraper-00C853?style=for-the-badge&logo=apify)](https://apify.com/jistudio/tiktok-shop-scraper)
[![Apify Hosted MCP](https://img.shields.io/badge/Hosted%20MCP-mcp.apify.com-7C3AED?style=for-the-badge)](https://mcp.apify.com/?actors=jistudio/tiktok-shop-scraper)
[![TikTok Transcripts](https://img.shields.io/badge/Apify%20Store-Transcript%20Scraper-06B6D4?style=for-the-badge&logo=apify)](https://apify.com/jistudio/tiktok-transcript-scraper)
[![TikTok Trends](https://img.shields.io/badge/Apify%20Store-Trends%20Scraper-F59E0B?style=for-the-badge&logo=apify)](https://apify.com/jistudio/tiktok-trends-scraper)
[![Glama MCP Score](https://glama.ai/mcp/connectors/io.github.Techssss/tiktok-shop-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Techssss/tiktok-shop-mcp-server)

An **open-source Model Context Protocol (MCP) Server v2.1** (`stdio` + Apify Hosted Remote MCP) and **Python / Node.js SDK** powered by **[JiStudio on Apify Store](https://apify.com/jistudio/tiktok-shop-scraper)** for **Claude Desktop, Cursor, Google Antigravity, OpenAI Codex, Windsurf, n8n, Make, and custom data pipelines**.

Extract public **TikTok Shop products, SKUs, seller ratings, KOL affiliate catalogs, no-watermark HD MP4 videos, voiceover WebVTT transcripts, comments, creator analytics, live shopping rooms, and regional trends** across **22+ countries** (`US`, `GB`, `VN`, `ID`, `TH`, `BR`, `MY`, `PH`, `SG`, `JP`, `KR`, `DE`, `FR`, `ES`, `IT`, `MX`, `CA`, `AU`, `SA`, `AE`, `TW`) — **zero cookies, zero browser overhead**.

- **[Run Live on Apify Store (Free Tier Included)](https://apify.com/jistudio/tiktok-shop-scraper)**
- **[Connect Hosted Remote MCP in 1 Click](https://mcp.apify.com/?actors=jistudio/tiktok-shop-scraper)**
- **[Get Your Free Apify API Token](https://console.apify.com/account/integrations)**
- **[Interactive Web Playground](https://techssss.github.io/tiktok-scraper-api-tiktok-shop-no-watermark/)**

---

## Key Capabilities (16 Extraction Modes on Apify Cloud)

| Mode (`action`) | What You Extract |
| :--- | :--- |
| `auto_start_urls` | Paste any mix of TikTok video URLs, `@handles`, or TikTok Shop product shortlinks |
| `video_no_watermark` | HD no-watermark MP4 URLs, views, likes, comments, shares, music & exact creation timestamps |
| `whisper_transcript` | Voiceover `.vtt` subtitles & clean plaintext transcripts (also standalone via [TikTok Transcript Scraper](https://apify.com/jistudio/tiktok-transcript-scraper)) |
| `shop_product_detail` | TikTok Shop product detail: SKUs, prices, stock, image gallery, descriptions & seller ratings |
| `kol_shop_harvester` | Scan any creator `@username` to harvest promoted TikTok Shop affiliate products & sales scripts |
| `shop_video_factory_pack` | Product images, structured copy blocks, music & cart anchors ready for review video pipelines |
| `shop_search` / `search_videos` | Keyword search across TikTok Shop products & TikTok videos in 22+ regions |
| `user_profile` / `creator_feed` | Creator profile metrics, follower counts & latest published videos |
| `video_comments` | Top comments, likes, commenter handles & timestamps |
| `trending_feed` / `music_chart` | Regional viral feeds & Top 30 trending music charts (also via [TikTok Trends Scraper](https://apify.com/jistudio/tiktok-trends-scraper)) |
| `live_shopping_spy` | Live shopping room status, pinned products & viewer metrics |
| `viral_algorithm_audit` | Video quality score (`VQScore`), loudness metrics & export audit |
| `national_keywords` / `caption_genz_translator` | Regional hot search keywords & fast caption translation |

---

## Complete List of 15 MCP Tools (`readOnlyHint: true`)

| # | MCP Tool Name | Execution | Description |
| :-: | :--- | :---: | :--- |
| 1 | `decode_tiktok_snowflake` | **FREE Offline** | Decode 64-bit TikTok IDs (`id >> 32`) into UTC creation timestamp & shard info |
| 2 | `build_tiktok_shop_deeplink` | **FREE Offline** | Build TikTok Shop web PDP, SKU picker, storefront pin & cart anchor payloads |
| 3 | `analyze_short_video_hook_and_beats` | **FREE Offline** | Score opening hooks (`0-100`) & generate BPM-synced scene cut timestamps |
| 4 | `get_tiktok_video_intelligence` | **Apify Cloud** | HD no-watermark MP4, engagement stats & pinned Shop products |
| 5 | `get_tiktok_creator_profile_and_analytics` | **Apify Cloud** | Creator profile stats, bio & recent video feed |
| 6 | `get_tiktok_video_comments_and_replies` | **Apify Cloud** | Video comments, likes & commenter metadata |
| 7 | `get_tiktok_trending_and_search` | **Apify Cloud** | Regional trending feeds & national trending keywords |
| 8 | `get_tiktok_shop_product_and_seller` | **Apify Cloud** | TikTok Shop product SKUs, pricing, images & seller metrics |
| 9 | `get_tiktok_transcript_and_translate` | **Apify Cloud** | Voiceover WebVTT transcripts & caption translation |
| 10 | `get_tiktok_commercial_music_chart` | **Apify Cloud** | Regional TikTok Top 30 trending music chart |
| 11 | `get_tiktok_live_room_intelligence` | **Apify Cloud** | Live shopping room stream metadata & pinned products |
| 12 | `search_tiktok_videos_by_keyword` | **Apify Cloud** | Keyword video & TikTok Shop product discovery |
| 13 | `get_tiktok_shop_video_factory_pack` | **Apify Cloud** | Complete review video asset pack for any Shop product |
| 14 | `harvest_kol_shop_affiliate_products` | **Apify Cloud** | Harvest KOL promoted Shop products & scripts |
| 15 | `audit_tiktok_video_algorithm_vqscore` | **Apify Cloud** | Audit video quality score, loudness & viral velocity |

---

## Quick Setup (MCP + REST API + Python / Node.js)

### Option A: Zero-Install Hosted Remote MCP via Apify
Connect any Remote MCP client (**Claude, Cursor, Windsurf, Antigravity, OpenAI Agents SDK**) directly to Apify's managed MCP endpoint:
```text
https://mcp.apify.com/?actors=jistudio/tiktok-shop-scraper,jistudio/tiktok-transcript-scraper,jistudio/tiktok-trends-scraper
```
Header:
```text
Authorization: Bearer YOUR_APIFY_TOKEN
```

### Option B: Local Stdio MCP Server (Zero Dependencies — Node.js `>=18`)
```bash
git clone https://github.com/Techssss/tiktok-scraper-api-tiktok-shop-no-watermark.git
cd tiktok-scraper-api-tiktok-shop-no-watermark
node test_mcp.js
```

Add to **Claude Desktop** (`claude_desktop_config.json`), **Cursor** (`.cursor/mcp.json`), or **Google Antigravity** (`mcp_config.json`):
```json
{
  "mcpServers": {
    "tiktok-shop": {
      "command": "node",
      "args": ["/absolute/path/to/tiktok-scraper-api-tiktok-shop-no-watermark/index.js"],
      "env": {
        "APIFY_TOKEN": "YOUR_APIFY_TOKEN"
      }
    }
  }
}
```

### Option C: Direct REST API / Python / Node.js
```python
import requests

APIFY_TOKEN = "YOUR_APIFY_TOKEN"
resp = requests.post(
    f"https://api.apify.com/v2/acts/jistudio~tiktok-shop-scraper/run-sync-get-dataset-items?token={APIFY_TOKEN}",
    json={
        "action": "search_videos",
        "keyword": "skincare",
        "country": "US",
        "maxItems": 20,
    },
    timeout=90,
)
print(resp.json()[:3])
```
See full working clients in [tiktok_shop_client.py](./tiktok_shop_client.py) and [example_node.js](./example_node.js).

---

## Full Zero-Browser Cloud Scraper Ecosystem by JiStudio on Apify Store

| Platform | Apify Store Actor | Key Capabilities |
| :--- | :--- | :--- |
| **TikTok & TikTok Shop** | [**TikTok Shop Scraper**](https://apify.com/jistudio/tiktok-shop-scraper) | Products, SKUs, seller ratings, KOL affiliates, HD no-watermark MP4 & VTT transcripts |
| **TikTok Transcripts** | [**TikTok Transcript Scraper**](https://apify.com/jistudio/tiktok-transcript-scraper) | Fast bulk voiceover `.vtt` subtitles & plaintext script extraction |
| **TikTok Trends** | [**TikTok Trends Scraper**](https://apify.com/jistudio/tiktok-trends-scraper) | Regional For-You viral feeds, trending hashtags & Top 30 music charts |
| **Shopee (8 Countries)** | [**Shopee Scraper**](https://apify.com/jistudio/shopee-scraper) | VN/ID/TH/PH/MY/SG/TW/BR product search, exact sold counts, shop data & live |
| **1688 China Wholesale** | [**1688 Wholesale Scraper**](https://apify.com/jistudio/1688-wholesale-scraper) | Factory supplier pricing tiers, SKUs, MOQ & wholesale catalog extraction |
| **AliExpress Global** | [**AliExpress Scraper**](https://apify.com/jistudio/aliexpress-scraper) | Global keyword search, SKU variants, verified reviews & shipping estimates |
| **Lazada (6 SEA Markets)** | [**Lazada Scraper**](https://apify.com/jistudio/lazada-scraper) | SEA marketplace product search, prices, ratings & seller catalogs |
| **Goofish / Xianyu** | [**Goofish Xianyu Scraper**](https://apify.com/jistudio/goofish-xianyu-scraper) | Secondhand search, item details & seller listings |
| **Twitter (X) & Crypto** | [**Twitter Scraper**](https://apify.com/jistudio/twitter-scraper) | Zero-cookie tweets, timelines, HD videos, threads & Solana / DexScreener X-Intel |
| **Full Store Portfolio** | [**Browse All Actors (`JiStudio`)**](https://apify.com/jistudio) | Complete suite of lightweight pay-per-event cloud scrapers |

---

## Custom Scrapers & High-Volume Licensing

Need dedicated raw REST endpoints, custom anti-bot scrapers, or private commercial licensing?
- **Telegram**: [@WinJ_sui](https://t.me/WinJ_sui)
- **Apify Store Profile**: [https://apify.com/jistudio](https://apify.com/jistudio)
