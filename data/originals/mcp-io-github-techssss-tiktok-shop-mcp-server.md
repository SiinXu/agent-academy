# TikTok & TikTok Shop MCP Server v2.0 for Google Antigravity, OpenAI Codex, Claude & Cursor (43-Endpoint Global API)

[![RapidAPI](https://img.shields.io/badge/RapidAPI-43%20TikTok%20%26%20TikTok%20Shop%20Endpoints-0055FF?style=for-the-badge&logo=rapidapi)](https://rapidapi.com/Techssss/api/tiktok-data-tiktok-shop-no-watermark-video)
[![Apify Store](https://img.shields.io/badge/Apify%20Store-Run%20Cloud%20Actor%20(No%20Limits)-FF4F00?style=for-the-badge&logo=apify)](https://apify.com/nghianguyen2/tiktok-shop-scraper)
[![MCP Server v2.0](https://img.shields.io/badge/MCP%20v2.0-15%20Annotated%20Tools%20%7C%204%20Prompts-7C3AED?style=for-the-badge)](https://tiktok-scraper-api.minhnghiathcstp.workers.dev/mcp)
[![Service Level](https://img.shields.io/badge/Service%20Level-100%25%20%7C%209.4%20Popularity-00C853?style=for-the-badge)](https://rapidapi.com/Techssss/api/tiktok-data-tiktok-shop-no-watermark-video)
[![TikTok & TikTok Shop Data MCP connector](https://glama.ai/mcp/connectors/io.github.Techssss/tiktok-shop-mcp-server/badges/score.svg)](https://glama.ai/mcp/connectors/io.github.Techssss/tiktok-shop-mcp-server)

An **open-source Model Context Protocol (MCP) Server v2.0** (`stdio` + Remote Streamable HTTP `/mcp` indexed on the **Official MCP Registry** as `io.github.Techssss/tiktok-shop-mcp-server`), **[Apify Store Cloud Actor (v2.1)](https://apify.com/nghianguyen2/tiktok-shop-scraper)**, and **43-Endpoint REST API** built for **Google Antigravity IDE (`agy`), OpenAI Codex CLI (`codex`), Claude Desktop, Cursor, Windsurf, VS Code Copilot, Arcade.dev, Smithery.ai, and Glama.ai**, powered by our **Multi-Region TikTok & TikTok Shop (OEC) Edge Engine** (`22+ Regions`: `US`, `UK`, `VN`, `ID`, `TH`, `BR`, `MY`, `PH`, `SG`, `JP`, `KR`, `DE`, `FR`, `ES`, `IT`, `MX`, `CA`, `AU`, `SA`, `AE`, `TW`).

👉 **[Get Your FREE RapidAPI Key in 10 Seconds (43 REST Endpoints)](https://rapidapi.com/Techssss/api/tiktok-data-tiktok-shop-no-watermark-video)** | ☁️ **[Run Cloud Actor on Apify Store](https://apify.com/nghianguyen2/tiktok-shop-scraper)** | 🎮 **[Live Web Playground](https://techssss.github.io/tiktok-scraper-api-tiktok-shop-no-watermark/)**

---

## 🚀 What's New in v2.0 (MCP Server) & v4.0 (43-Endpoint Cloud API)?

1. **8 Brand-New Pure TikTok & TikTok Shop Intelligence Endpoints (`#36` to `#43`)**:
   - **#36 `GET /api/v1/tiktok/search-videos`**: Keyword video search across 22+ regions with 64-bit Snowflake **`views_per_hour` viral velocity ranking**.
   - **#37 `GET /api/v1/tiktok/music-videos`**: Official **TikTok Trending Music Chart Billboard (Top 30)** (`/tiktok/music/chart/v1/`) + sound trend intelligence.
   - **#38 `GET /api/v1/tiktok/shop-video-factory-pack`**: **1-Click AI Video Factory Pack (`Tool 1` on Cloud)** — 20+ uncompressed studio `origin-jpeg` images, 5-part voiceover script synthesized from 34 copywriting `desc_blocks`, commercial music with `StrongBeat` scene cut timeline, `type: 35` cart anchor JSON & Storefront #1 product pin deeplink (`decorate_insert_items`).
   - **#39 `GET /api/v1/tiktok/kol-shop-harvester`**: **Kalodata / FastMoss Clone** — scan any KOL/Competitor `@username`'s latest videos in parallel to harvest all pinned TikTok Shop products (`type: 35`), rank Hero Products by promotion frequency, and collect all Whisper ASR `.vtt` sales scripts + `VQScore`s.
   - **#40 `GET /api/v1/tiktok/viral-algorithm-audit`**: **TikTok Internal Algorithm `VQScore` Auditor & Anti-C2PA FFmpeg Blueprint** — audit any video's hidden `VQScore` (`>= 65.0` 10M+ View FYP threshold), audio loudness `LUFS` & `Peak`, hourly viral velocity, Duet/Stitch permissions (`/aweme/v1/permission/check/`), and get the anti-recode (`< 12 Mbps`) / anti-C2PA FFmpeg recipe.
   - **#41 `GET /api/v1/tiktok/live-shopping-spy`**: **E-Commerce Live Shopping Spy** — low-bandwidth `Audio-Only FLV` stream for Whisper STT eavesdropping, post-live `totalEnters` customer count, pinned pop product (`/aweme/v1/oec/live/product/pop`), and E-Commerce Top Buyer Ranking (`/aweme/v1/oec/live/rank/refresh/`).
   - **#42 `GET /api/v1/tiktok/national-keywords-taxonomy`**: **730KB National Hot Search Dictionary (`922 Keywords` + `153 ByteDance TextNet AI Taxonomy Codes`)** from `/aweme/v1/search/sug_cached_words/`.
   - **#43 `GET /api/v1/tiktok/caption-genz-translator`**: **0.06s Gen-Z Caption & Slang Neural Translator (`glide_v3_2` LLM)** via `/aweme/v1/translation/description/`.
2. **MCP 2025/2026 Tool Behavioral Annotations (`annotations`) on All 15 Tools**:
   - Every tool declares `title`, `readOnlyHint: true`, `destructiveHint: false`, `idempotentHint: true`, and `openWorldHint`, enabling **zero-popup auto-execution** in Claude Desktop, Cursor, Google Antigravity, and OpenAI Codex, plus **100% A+ compliance** on Glama.ai & the Official MCP Registry ([server.json](./server.json)).
3. **4 Built-in AI Agent Workflow Prompts (`prompts/list` & `prompts/get`) + 3 Knowledge Base Resources (`resources/list` & `resources/read`)**.

---

## 🛠️ Complete List of 15 MCP Tools (All with `readOnlyHint: true` Annotations)

| # | MCP Tool Name | Mode | Key Capabilities |
| :-: | :--- | :---: | :--- |
| 1 | `decode_tiktok_snowflake` | **FREE (No Key)** | Decode any 64-bit TikTok ID (`id >> 32`) into exact UTC timestamp, age in days & datacenter shard |
| 2 | `build_tiktok_shop_deeplink` | **FREE (No Key)** | Generate 16 native `aweme://ec/` & `snssdk1180://ec/` links, Storefront #1 Product Pin (`decorate_insert_items`) & `type: 35` cart anchor |
| 3 | `analyze_short_video_hook_and_beats` | **FREE (No Key)** | Score short-video scripts (`0–100`) for 3-second retention triggers & generate BPM beat-synced cut timelines |
| 4 | `get_tiktok_video_intelligence` | **Global Cloud** | No-watermark HD MP4, Whisper ASR `.vtt` subtitles, `VQScore`, `LUFS`, pinned TikTok Shop products & CapCut anchors |
| 5 | `get_tiktok_creator_profile_and_analytics` | **Global Cloud** | Creator profile, followers/hearts, engagement rate %, sponsorship USD valuation, bio email lead & recent posts |
| 6 | `get_tiktok_video_comments_and_replies` | **Global Cloud** | Viewer comments, commenter region & nested comment reply threads |
| 7 | `get_tiktok_trending_and_search` | **Global Cloud** | Regional trending feeds, 922 national hot keywords with ByteDance TextNet IDs, search sug & short-drama ad spy |
| 8 | `get_tiktok_shop_product_and_seller` | **Global Cloud** | TikTok Shop PDP (SKUs, stock, 16+ studio `origin-jpeg` images, 34 copywriting `desc_blocks`), seller rating & `vt.tiktok.com` forensics |
| 9 | `get_tiktok_transcript_and_translate` | **Global Cloud** | Instant 0.2s Whisper ASR WebVTT subtitle extraction & 0.11s ByteDance `glide_v3_2` LLM subtitle/e-commerce translation |
| 10 | `get_tiktok_commercial_music_and_capcut_templates` | **Global Cloud** | Commercial-cleared music tracks with millisecond **`StrongBeat` drum onset arrays**, unlimited music playlists & effect trends |
| 11 | `get_tiktok_live_room_intelligence` | **Global Cloud** | Live room status (`check_alive`), `totalEnters`, direct FLV/HLS/Audio-Only streams, live categories & 1.4MB gift catalog |
| 12 | `search_tiktok_videos_by_keyword` | **Global Cloud** | Search TikTok videos by keyword across 22+ regions with Snowflake `views_per_hour` viral velocity ranking |
| 13 | `get_tiktok_shop_video_factory_pack` | **AI Video Factory** | 1-click TikTok Shop review video pack: studio `origin-jpeg` images, 5-part script, `StrongBeat` scene timeline & `type: 35` cart anchor |
| 14 | `harvest_kol_shop_affiliate_products` | **Kalodata Clone** | Scan any KOL/Competitor `@username` to rank Hero Products (`type: 35`), `chain_key`s & collect all Whisper `.vtt` sales scripts |
| 15 | `audit_tiktok_video_algorithm_vqscore` | **Algorithm Audit** | Audit internal `VQScore` (`>= 65.0` FYP threshold), `LUFS`, hourly viral velocity, Duet/Stitch permissions & anti-C2PA FFmpeg recipe |

---

## ⚡ Quick Setup for Google Antigravity, OpenAI Codex, Claude, Cursor & Arcade.dev

### Option A: Zero-Install Remote Streamable HTTP MCP Server (Instant Cloud URL)
No local clone required! Connect any Remote MCP client (**Arcade.dev, Smithery, Claude Web, OpenAI Agents SDK, Cursor Remote MCP**) directly to our Cloudflare Edge MCP endpoint:
- **Server ID:** `tiktok-shop-mcp`
- **Remote MCP URI (Streamable HTTP JSON-RPC 2.0):**
  ```text
  https://tiktok-scraper-api.minhnghiathcstp.workers.dev/mcp
  ```
- **Optional Header (for the Global Cloud Tools):**
  ```text
  X-RapidAPI-Key: YOUR_FREE_RAPIDAPI_KEY
  ```

### Option B: Local Stdio MCP Server (Zero External Dependencies — Pure Node.js `>=18`)
```bash
git clone https://github.com/Techssss/tiktok-scraper-api-tiktok-shop-no-watermark.git
cd tiktok-scraper-api-tiktok-shop-no-watermark
node test_mcp.js
```

### 1. Google Antigravity IDE (`mcp_config.json`)
Add to your Antigravity MCP configuration (`~/.gemini/antigravity/mcp_config.json`):
```json
{
  "mcpServers": {
    "tiktok-shop": {
      "command": "node",
      "args": ["/absolute/path/to/tiktok-scraper-api-tiktok-shop-no-watermark/index.js"],
      "env": {
        "RAPIDAPI_KEY": "YOUR_FREE_RAPIDAPI_KEY"
      }
    }
  }
}
```

### 2. OpenAI Codex CLI (`~/.codex/config.toml`)
Add to your OpenAI Codex CLI config (`~/.codex/config.toml`):
```toml
[mcp_servers.tiktok_shop]
command = "node"
args = ["/absolute/path/to/tiktok-scraper-api-tiktok-shop-no-watermark/index.js"]
env = { RAPIDAPI_KEY = "YOUR_FREE_RAPIDAPI_KEY" }
```

### 3. Claude Desktop (`claude_desktop_config.json`), Cursor (`.cursor/mcp.json`) & Windsurf
```json
{
  "mcpServers": {
    "tiktok-shop": {
      "command": "node",
      "args": ["/absolute/path/to/tiktok-scraper-api-tiktok-shop-no-watermark/index.js"],
      "env": {
        "RAPIDAPI_KEY": "YOUR_FREE_RAPIDAPI_KEY"
      }
    }
  }
}
```
*(Get your free `RAPIDAPI_KEY` at: https://rapidapi.com/Techssss/api/tiktok-data-tiktok-shop-no-watermark-video)*

---

## 🔗 Sister E-Commerce & Crypto APIs by Techssss on RapidAPI
- 🛍️ [**Shopee E-Commerce, Live & Affiliate Intelligence API (8 Countries: VN, ID, TH, PH, MY, SG, TW, BR)**](https://rapidapi.com/Techssss/api/shopee-e-commerce-live-affiliate-intelligence)
- 🎵 [**TikTok Data, TikTok Shop & No Watermark Video API (43 Endpoints, 22+ Countries)**](https://rapidapi.com/Techssss/api/tiktok-data-tiktok-shop-no-watermark-video)
- 🐦 [**Twitter (X) Real-Time Data & Crypto X-Intel API (Solana / Pump.fun / RugCheck / KOL Velocity)**](https://rapidapi.com/Techssss/api/twitter-x-real-time-data-crypto-x-intel)
---

## Full Zero-Cookie Cloud Scraper Ecosystem on Apify Store (From $0.10 / 1,000)

All Actors below run on **native Mobile / MTOP protocols** (**No Login, No Cookies, MCP-Ready** for Claude Desktop, Cursor, ChatGPT & n8n):

| Platform | Apify Store Actor | Key Capabilities |
| :--- | :--- | :--- |
| **TikTok & TikTok Shop** | [**TikTok Shop Scraper**](https://apify.com/nghianguyen2/tiktok-shop-scraper) | Products, SKUs, GMV sales, KOL affiliates, No-Watermark 1080p MP4 & Whisper VTT transcripts |
| **Twitter (X) & Crypto** | [**Twitter Scraper**](https://apify.com/nghianguyen2/twitter-scraper) | Tweets, timelines, replies, HD MP4 videos, Solana / Pump.fun & DexScreener X-Intel |
| **Shopee (8 Countries)** | [**Shopee Scraper**](https://apify.com/nghianguyen2/shopee-scraper) | VN/ID/TH/PH/MY/SG/TW/BR exact unrounded sold counts, stock, Shopee Live bag & affiliate links |
| **Goofish / Xianyu (闲鱼)** | [**Goofish Xianyu Scraper**](https://apify.com/nghianguyen2/goofish-xianyu-scraper) | Working H5 keyword search (bypasses PC search block), 28-field item detail, seller credit & comps |
| **AliExpress Global** | [**AliExpress Scraper**](https://apify.com/nghianguyen2/aliexpress-scraper) | Keyword search, full SKU variant matrix, verified photo reviews, Choice deals & shipping ETA |
| **Full Store Portfolio** | [**Browse all Actors (`nghianguyen2`)**](https://apify.com/nghianguyen2) | Includes **Lazada (6 SEA)**, **Temu**, **Pump.fun**, **DexScreener** & **Shopee Live** specialized Actors |

## Enterprise High-Volume API & Custom Scrapers

Need **unlimited throughput**, dedicated raw REST endpoints, custom anti-bot scrapers, or private integrations?
- **Direct Telegram (Fastest — Same-Day Response)**: [**@WinJ_sui**](https://t.me/WinJ_sui)
