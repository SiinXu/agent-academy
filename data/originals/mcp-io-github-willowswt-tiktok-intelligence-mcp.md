[![Glama MCP Server](https://glama.ai/mcp/servers/willowswt/tiktok-intelligence-mcp/badges/score.svg)](https://glama.ai/mcp/servers/willowswt/tiktok-intelligence-mcp) [![Apify Store Actor](https://img.shields.io/badge/Apify_Store-tiktok_intelligence_mcp-00C853?logo=apify&logoColor=white)](https://apify.com/church_of_loujess/tiktok-intelligence-mcp) [![MCP Protocol](https://img.shields.io/badge/MCP-2025--06--18_Streamable_HTTP_%26_stdio-blue)](https://modelcontextprotocol.io) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **⚡ Instant Remote Streamable-HTTP Endpoint (Zero Local Install):** `https://church-of-loujess--tiktok-intelligence-mcp.apify.actor/mcp`  
> **🔑 Get Your Free API Token (`$5.00/mo` Free Credit Included):** [Apify Console -> Settings -> Integrations](https://console.apify.com/settings/integrations)  
> **🌐 Hosted Apify Store Page & Interactive Runner:** [https://apify.com/church_of_loujess/tiktok-intelligence-mcp](https://apify.com/church_of_loujess/tiktok-intelligence-mcp)

## What can TikTok Intelligence MCP Server do?

**TikTok Intelligence MCP Server** is a live, **zero-cookie Streamable-HTTP Model Context Protocol (`MCP`) server** running in **256 MB Standby Mode** (`https://church-of-loujess--tiktok-intelligence-mcp.apify.actor/mcp`). Give **Claude Desktop, Cursor, ChatGPT, Windsurf, Codex, or creative/growth AI agents** real-time access to **6 specialized TikTok tools**: **video search, 3.5-second viral spoken hooks & scripts, creator/UGC email & Linktree discovery, buyer-intent comment mining, `#ad` brand sponsor spying, and breakout sound velocity**:

<table>
<tr>
<th>📦 What you can extract</th>
<th>⚙️ Features & integrations</th>
</tr>
<tr>
<td valign="top">

🔎 **TikTok video search** (`search_tiktok_videos` — views, likes, shares, bookmarks & outlier ratios) <br>
🎣 **3.5s viral hooks & full scripts** (`extract_viral_hooks_and_scripts` — Hook, Body, CTA, WPM & archetype) <br>
📧 **Creator & UGC emails** (`find_tiktok_creator_emails` — bio + Linktree/Beacons emails, Calendly & Shop flags) <br>
💬 **Buyer-intent comment leads** (`mine_buyer_intent_comments` — scored 0–100 `'where to buy'` & `'what app'` leads) <br>
🕵️ **Active `#ad` brand sponsors** (`spy_tiktok_brand_sponsors` — paying brands, promo codes & brand emails) <br>
🎵 **Breakout sound trends** (`scan_breakout_tiktok_sounds` — rising audio IDs, MP3 previews & velocity)

</td>
<td valign="top">

⚡ **Warm TikTok session in Standby** maintains a pre-warmed client in 256 MB RAM for fast `/mcp` responses <br>
💸 **`$0.00` free MCP discovery** `initialize`, `tools/list` & `ping` are `$0.00`; `$0.035`->`$0.016` per `tools/call` <br>
🔓 **Zero login & zero proxies** no TikTok OAuth approval, no cookies, no mobile proxy surcharges <br>
🧮 **64-bit stat accuracy** automatic 32-bit signed-integer overflow fix on mega-viral view counts <br>
🔀 **Dual-Mode execution** works as a live `/mcp` server AND as a Console/API Batch Actor <br>
🤖 **Built for Claude, Cursor & GPT** MCP `2025-06-18`, `2025-03-26`, and `2024-11-05` compliant

</td>
</tr>
</table>

Connect one URL to Claude or Cursor and turn your AI assistant into a **live TikTok creative strategist, influencer scout, and social-selling researcher** — capable of pulling real 10x outlier hooks, finding UGC creators' verified emails, and spying on competitor `#ad` sponsors mid-conversation.

## What data can I extract with TikTok Intelligence MCP Server?

Instead of forcing an LLM to guess 'what makes a good TikTok hook', this MCP server grounds every response in **live spoken transcripts, real bookmark/view ratios, and verified creator/brand contacts**:

- **Creative strategy (`extract_viral_hooks_and_scripts` + `scan_breakout_tiktok_sounds`):** _real spoken hooks + rising audio_. Returns exact `opening3sHook`, `hookArchetype` (`question_hook`, `contrarian_stop`, `number_listicle`, `direct_statement`), `bodyScript`, `closingCta`, `wordsPerMinute`, `outlierMultiplier`, and niche audio tracks.

- **Creator & brand-sponsor CRM intelligence (`find_tiktok_creator_emails` + `spy_tiktok_brand_sponsors`):** _both sides of the creator marketplace_. Finds creators with verified emails/Linktrees on one side, and brands actively paying for `#ad` posts (`brandEmails`, `promoCodes`) on the other.

- **Search & warm-comment social selling (`search_tiktok_videos` + `mine_buyer_intent_comments`):** _demand & buyer questions in real time_. Surfaces top videos plus scored viewer questions (`Purchase / Link Request`, `Pricing Inquiry`, `Product Discovery`, `Competitor Comparison`).

### 🛠️ Live MCP Tools Included on This Server

| MCP Tool Name | Arguments (`params.arguments`) | What It Returns |
| :--- | :--- | :--- |
| `search_tiktok_videos` | `keyword` (required), `maxResults` (`1`–`20`, default `8`) | Search TikTok videos by keyword/hashtag with views, likes, comments, shares, bookmarks, `outlierMultiplier`, creator stats & music info. |
| `extract_viral_hooks_and_scripts` | `keyword`, `videoUrl`, `hookWindowSeconds` (`3.5`), `maxResults` (`1`–`15`, default `5`) | Decode WebVTT ASR captions and split each video into `opening3sHook`, `hookArchetype`, `bodyScript`, `closingCta`, `wordsPerMinute` & `outlierMultiplier`. |
| `find_tiktok_creator_emails` | `keyword`, `handle`, `maxCreators` (`1`–`12`, default `5`) | Discover micro-influencers/UGC creators (or enrich `@handle`) and crawl external Linktree/Beacons/bio links for verified emails, Calendly & socials. |
| `mine_buyer_intent_comments` | `keyword`, `videoUrl`, `maxLeads` (`1`–`20`, default `8`) | Scan TikTok video comments for purchase, link, pricing & tool-discovery intent (`0–100` score) with commenter handles. |
| `spy_tiktok_brand_sponsors` | `keyword` (required), `maxSponsors` (`1`–`15`, default `6`) | Detect active `#ad`, `#sponsored`, `#partner`, promo codes & `@brand` partnerships in any vertical and resolve brand domains/emails. |
| `scan_breakout_tiktok_sounds` | `keyword` (required), `maxSounds` (`1`–`15`, default `6`) | Find rising niche TikTok audio tracks with `musicId`, `original` flag, MP3 preview URL, velocity score & viral sample videos. |

> Need more specialized workflows? Combine this Actor with these dedicated tools from our suite:
>
> - 🎣 [TikTok Viral Hook & Script Scraper](https://apify.com/church_of_loujess/tiktok-viral-hook-script-scraper): bulk-export hundreds of viral hooks into CSV/Notion via our dedicated Batch Actor
> - 📧 [TikTok Influencer & Shop Affiliate Email Finder](https://apify.com/church_of_loujess/tiktok-influencer-email-finder): bulk-recruit 100+ TikTok Shop affiliates & UGC creators with follower range filters
> - 🕵️ [TikTok Brand Sponsor & Partnership Spy](https://apify.com/church_of_loujess/tiktok-brand-sponsor-spy): bulk-export active DTC & SaaS advertisers across dozens of verticals
> - 🔌 [Substack, B2B Churn & Lead MCP Server](https://apify.com/church_of_loujess/b2b-lead-churn-substack-mcp): pair TikTok intelligence with Substack, Linktree & Shopify churn MCP tools

## How much will TikTok Intelligence MCP Server cost?

TikTok Intelligence MCP Server uses transparent **Pay-Per-Event (PPE)** pricing where one event (`mcp-tool-call`) equals one successful **MCP Tool Call**. Connecting your AI client (`initialize`), inspecting tool schemas (`tools/list`), and health/keepalive checks (`ping`) are **`$0.00` FREE** — there is **$0.00 Actor start fee** on MCP calls.

Paid Apify plans automatically unlock volume discounts up to **54% off** ($0.024 on Starter/Bronze, $0.019 on Scale/Silver, and **$0.016** on Business/Gold, Platinum & Diamond) with zero residential proxy surcharges:

| Apify Plan / Tier | Price per MCP `tools/call` execution | Price per 1,000 MCP tool calls | Batch Depth & Unmasking | Approx. Monthly Capacity |
| :--- | :--- | :--- | :--- | :--- |
| **Free (`FREE` Trial Preview)** | `$0.035` | `$35.00` | **3 records/call trial** (first 2 unmasked, 3rd preview-masked) | **~142** trial calls |
| **Starter (`BRONZE` — `$29/mo`)** | `$0.024` | `$24.00` | **Unlimited depth & 100% unmasked** | **~1,208** MCP tool calls |
| **Scale (`SILVER` — `$199/mo`)** | `$0.019` | `$19.00` | **Unlimited depth & 100% unmasked** | **~10,473** MCP tool calls |
| **Business (`GOLD` — `$999/mo`)** | `$0.016` | `$16.00` | **Unlimited depth & 100% unmasked** | **~62,437** MCP tool calls |
| **Enterprise (`PLATINUM` / `DIAMOND`)** | `$0.016` / `$0.016` | `$16.00` | **Unlimited depth & 100% unmasked** | Custom high-volume SLA |

> **Free Trial vs. Paid Plan Unlock:** On the Apify Free tier, each `mcp-tool-call` returns up to **3 trial records** (first `2` records `100%` unmasked, `3rd` record preview-masked). Upgrading to **[Apify Starter (`$29/mo`)](https://console.apify.com/billing/subscription)** or higher unlocks full multi-record batch depth, `100%` unmasked records, and up to **54% lower per-call rates**. Check the [pricing tab](https://apify.com/church_of_loujess/tiktok-intelligence-mcp/pricing) for full details.

## How do I use TikTok Intelligence MCP Server?

TikTok Intelligence MCP Server is engineered for **zero-friction setup** whether you are connecting an AI coding/chat client over **Streamable HTTP (`/mcp`)** or running batch extractions in **Apify Console**:

### Option A: Connect to Claude Desktop, Cursor, Windsurf, or ChatGPT in 60 seconds
1. [Create](https://console.apify.com/sign-up) a free Apify account and copy your **Personal API Token** from [Console -> Settings -> Integrations](https://console.apify.com/settings/integrations).
2. Add the live Streamable-HTTP endpoint **`https://church-of-loujess--tiktok-intelligence-mcp.apify.actor/mcp`** to your AI client's `mcpServers` config:

```json
{
  "mcpServers": {
    "tiktok-intelligence-mcp": {
      "url": "https://church-of-loujess--tiktok-intelligence-mcp.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_APIFY_API_TOKEN>"
      }
    }
  }
}
```

3. Restart or reload your MCP client — it will automatically run `initialize` and `tools/list` (`$0.00` free) and expose all live tools to your AI assistant.
4. Ask your question in plain English; your AI agent will select the right tool, pass structured arguments, and cite live primary sources.

### Option B: Run directly in Apify Console (No-Code Batch Mode)
1. Open **[TikTok Intelligence MCP Server](https://console.apify.com/actors/aCS6cTd5Xhxcxfkdn)** in Apify Console.
2. Choose which tool to execute under **MCP Tool to Execute (Batch Mode)** (`tool`).
3. Fill in the matching input parameters (`keyword`, `videoUrl`) in the Console input form.
4. Click **Save & Start** and wait a few seconds for live extraction to finish.
5. Preview your results in the **Storage -> Dataset** tab and export in **JSON, CSV, Excel, or XML**, or fetch via the Apify REST API.

## ⬇️ Input

Connect any MCP client to **`https://church-of-loujess--tiktok-intelligence-mcp.apify.actor/mcp`**, or run any of the 6 tools directly from **Apify Console**.

### Mode 1: Live Streamable-HTTP MCP Connection (`/mcp`)

Add once to Claude Desktop, Cursor, Windsurf, or ChatGPT Developer Mode — all 6 TikTok tools become native conversational capabilities.

| Input / Configuration | What it returns |
| :--- | :--- |
| `extract_viral_hooks_and_scripts` (`{"keyword": "saas founder"}`) | 5 real outlier spoken hooks + body scripts + CTAs + WPM |
| `find_tiktok_creator_emails` (`{"keyword": "ugc creator skincare"}`) | Enriched UGC creators + crawled Linktree/bio emails |
| `spy_tiktok_brand_sponsors` (`{"keyword": "protein powder"}`) | Brands running `#ad` posts right now + promo codes + emails |

**Input JSON example:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
        "name": "extract_viral_hooks_and_scripts",
        "arguments": {
            "keyword": "marketing tips",
            "hookWindowSeconds": 3.5,
            "maxResults": 5
        }
    }
}
```

### Mode 2: Apify Console & REST API Batch Mode

Pick any of the 6 tools in the `tool` dropdown (`extract_viral_hooks_and_scripts`, `search_tiktok_videos`, `find_tiktok_creator_emails`, `mine_buyer_intent_comments`, `spy_tiktok_brand_sponsors`, `scan_breakout_tiktok_sounds`) and click **Save & Start**.

| Input / Configuration | What it returns |
| :--- | :--- |
| `tool: "extract_viral_hooks_and_scripts"` + `keyword: "marketing tips"` | Writes structured hook & script items to your Apify Dataset |

**Input JSON example:**

```json
{
    "tool": "extract_viral_hooks_and_scripts",
    "keyword": "marketing tips",
    "maxResults": 5
}
```

### Complete Input Parameter Reference

| Parameter | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `tool` | `string` (`search_tiktok_videos`, `extract_viral_hooks_and_scripts`, `find_tiktok_creator_emails`, `mine_buyer_intent_comments`, `spy_tiktok_brand_sponsors`, `scan_breakout_tiktok_sounds`) | `"extract_viral_hooks_and_scripts"` | No | Select which TikTok tool to execute when running directly from Apify Console or API. |
| `keyword` | `string` | `"marketing tips"` | No | Search keyword or hashtag (e.g. 'saas founder', 'skincare', 'shopify tips'). |
| `videoUrl` | `string` | `—` | No | Optional direct TikTok video URL for hook/script extraction or comment mining. |
| `maxResults` | `integer` | `5` | No | Maximum results to return (1-20). |

## ⬆️ Output and setup

All extracted records stream incrementally into your run's **Dataset** under the **Storage** tab in Apify Console. Preview results as a clean interactive table, download in **JSON, JSONL, CSV, Excel (`.xlsx`), XML, or RSS**, or consume items directly via the Apify REST API, Python/Node.js SDKs, or MCP.

### 📦 Verified dataset output sample #1

```json
{
    "tool": "extract_viral_hooks_and_scripts",
    "recordType": "extract_viral_hooks_and_scripts",
    "identifier": "7627252596218088734",
    "title": "if I were to tell you that after you consume this piece of paper in the next two minutes you'd have more wisdom",
    "organization": "dantebrunelli_2",
    "statusOrPhase": "594300 views",
    "url": "https://www.tiktok.com/@dantebrunelli_2/video/7627252596218088734",
    "details": {
        "videoId": "7627252596218088734",
        "url": "https://www.tiktok.com/@dantebrunelli_2/video/7627252596218088734",
        "caption": "Use this info wisely pls 📈🙏🏼",
        "createTime": 1775858152,
        "durationSec": 392,
        "views": 594300,
        "likes": 61800,
        "comments": 509,
        "shares": 6650,
        "bookmarks": 53500,
        "outlierMultiplier": 13.24,
        "author": {
            "username": "dantebrunelli_2",
            "nickname": "Dante Brunelli",
            "followers": 44900,
            "verified": false
        },
        "music": {
            "id": "7627252677113547550",
            "title": "original sound",
            "authorName": "Dante Brunelli",
            "original": true
        },
        "opening3sHook": "if I were to tell you that after you consume this piece of paper in the next two minutes you'd have more wisdom",
        "hookArchetype": "direct_statement",
        "bodyScript": "than someone that took a four year marketing degree would you believe me the answer is probably no and I don't blame you because it sounds like a very bold audacious claim and that's because it is however I now have 10 issues of experience of marketing doing it for real and generating our clients multiple eight figures per year these are practices we use ...",
        "closingCta": "I talk about marketing how to scale your business with marketing enjoy your day and I will see you guys soon peace",
        "fullTranscript": "if I were to tell you that after you consume this piece of paper in the next two minutes you'd have more wisdom than someone that took a four year marketing degree would you believe me the answer is probably no and I don't blame you because it sounds like a very bold audacious claim and that's because it is however I now have 10 issues of experience of ma...",
        "wordsPerMinute": 262,
        "hasSpokenSubtitles": true
    }
}
```

### 📦 Verified dataset output sample #2

```json
{
    "tool": "extract_viral_hooks_and_scripts",
    "recordType": "extract_viral_hooks_and_scripts",
    "identifier": "7665516255574625566",
    "title": "The three marketing tools that I use at least once a week that don't cost anything. So",
    "organization": "sabelpop",
    "statusOrPhase": "24500 views",
    "url": "https://www.tiktok.com/@sabelpop/video/7665516255574625566",
    "details": {
        "videoId": "7665516255574625566",
        "url": "https://www.tiktok.com/@sabelpop/video/7665516255574625566",
        "caption": "14 years in marketing, still using these 3 free tools every week #marketing101 #marketingtips #marketingtiktok #marketingtools #careeradvice ",
        "createTime": 1784767105,
        "durationSec": 98,
        "views": 24500,
        "likes": 2039,
        "comments": 29,
        "shares": 199,
        "bookmarks": 2048,
        "outlierMultiplier": 1.7,
        "author": {
            "username": "sabelpop",
            "nickname": "Sabel",
            "followers": 14400,
            "verified": false
        },
        "music": {
            "id": "7398417325009766416",
            "title": "Summer and Brunch",
            "authorName": "ruuka",
            "original": false
        },
        "opening3sHook": "The three marketing tools that I use at least once a week that don't cost anything. So",
        "hookArchetype": "contrarian_stop",
        "bodyScript": "I've been a marketer for 14 years and I've used the enterprise grade platforms that also come with a big price tag. However, these three will always be staples in my tool belt. First one is send. Check it. So I actually used this one three times today. I am not exaggerating. It grades your subject line, which I really like. Always try to get a pluses for ...",
        "closingCta": "like I said, I use at least once a week. You can easily utilise for any marketing that you're doing.",
        "fullTranscript": "The three marketing tools that I use at least once a week that don't cost anything. So I've been a marketer for 14 years and I've used the enterprise grade platforms that also come with a big price tag. However, these three will always be staples in my tool belt. First one is send. Check it. So I actually used this one three times today. I am not exaggera...",
        "wordsPerMinute": 182,
        "hasSpokenSubtitles": true
    }
}
```

### Output Field Dictionary

| Output Field | Type | Description |
| :--- | :--- | :--- |
| `tool / recordType` | `string` | Executed TikTok MCP tool name. |
| `identifier / title / organization` | `string` | Video/creator/sound ID, hook/caption headline, and `@username` or brand. |
| `statusOrPhase / url` | `string` | Quick view/intent/email summary and canonical `https://www.tiktok.com/...` URL. |
| `details` | `object` | Full tool-specific payload (`opening3sHook`, `bodyScript`, `outlierMultiplier`, `emails`, `intentScore`, `promoCodes`, `velocityScore`, etc.). |

## Notes, tips, and exceptions

- **1 tool call = multiple results (`$0.035` Free -> `$0.016` Gold–Diamond):** A single `extract_viral_hooks_and_scripts` or `search_tiktok_videos` call returns up to `5`–`20` videos for **one single MCP tool-call event**!
- **`$0.00` handshake:** `initialize`, `tools/list`, and `ping` are always `$0.00` free.
- **Warm Standby session:** Keeping the TikTok web session warm inside Standby memory cuts cold-start cookie negotiation on sequential tool calls.

## What can you do with data from TikTok Intelligence MCP Server?

TikTok Intelligence MCP Server powers high-ROI automation, lead generation, and AI agent pipelines. Here are four proven step-by-step recipes:

### 🎬 Interactive viral scriptwriting studio inside Claude Desktop

Write high-retention TikToks, Reels, and YouTube Shorts backed by real outlier transcripts.

**Recipe:**

1. **Connect `tiktok-intelligence-mcp` to Claude Desktop.** Paste the `/mcp` config JSON.

2. **Pull live hooks + sounds.** Ask Claude: *'Use TikTok Intelligence MCP to pull 5 outlier hooks for "B2B sales tips" and 5 rising sounds, then write 3 scripts for our AI CRM matching the winning WPM pace.'*

Claude sees the exact spoken 3.5-second hooks and outlier multipliers live.

### 🤝 One-prompt UGC & TikTok Shop outreach campaign

Find creators, grab their Linktree emails, and write tailored outreach in seconds.

**Recipe:**

1. **Invoke `find_tiktok_creator_emails`.** Ask your agent to find 8 UGC creators in your niche and draft outreach referencing their bio & recent videos.

Cost: `$0.035` (`$0.016` on Gold+) for the entire batch call.

### 🕵️ Competitor paid-partnership & comment pain audit

Combine `spy_tiktok_brand_sponsors` and `mine_buyer_intent_comments` in one prompt.

**Recipe:**

1. **Spy on rival sponsorships.** See who is sponsoring creators in your vertical.

2. **Mine comments on those exact videos.** Pass any sponsored `videoUrl` into `mine_buyer_intent_comments` to read buyer questions!

Multi-step competitive intelligence without writing a single script.

### 🔌 Embed inside custom OpenAI / LangGraph / CrewAI marketing agents

Give SaaS marketing copilots native real-time TikTok access via Streamable HTTP MCP.

**Recipe:**

1. **Point your agent's MCP client at `/mcp`.** Pass `Authorization: Bearer <APIFY_API_TOKEN>`.

2. **Let the LLM select from all 6 tools dynamically.** Zero custom scraping maintenance in your app codebase.

Scales automatically on Apify Standby infrastructure.

## Want to get other B2B, Social, Financial, or MCP Agent data?

Chain this tool with our other **128 MB / 256 MB zero-proxy Apify Scrapers and Live Streamable-HTTP MCP Servers**:

<table>
<tr>
<td>🎣 <a href="https://apify.com/church_of_loujess/tiktok-viral-hook-script-scraper">TikTok Viral Hook & Script Scraper (Bulk Batch)</a></td>
<td>📧 <a href="https://apify.com/church_of_loujess/tiktok-influencer-email-finder">TikTok Influencer & Shop Affiliate Email Finder</a></td>
</tr>
<tr>
<td>💬 <a href="https://apify.com/church_of_loujess/tiktok-comment-lead-miner">TikTok Comment Buyer-Intent Lead Miner</a></td>
<td>🕵️ <a href="https://apify.com/church_of_loujess/tiktok-brand-sponsor-spy">TikTok Brand Sponsor & Paid Partnership Spy</a></td>
</tr>
<tr>
<td>🎵 <a href="https://apify.com/church_of_loujess/tiktok-sound-trend-radar">TikTok Breakout Sound & Velocity Radar</a></td>
<td>🔎 <a href="https://apify.com/church_of_loujess/tiktok-search-scraper">TikTok Search Scraper (Keywords & Expansion Pools)</a></td>
</tr>
<tr>
<td>👤 <a href="https://apify.com/church_of_loujess/tiktok-profile-scraper">TikTok Profile Scraper (Bulk Handles & Posts)</a></td>
<td>🔌 <a href="https://apify.com/church_of_loujess/b2b-lead-churn-substack-mcp">Substack, B2B Churn & Lead MCP Server</a></td>
</tr>
</table>

## 🔌 Using TikTok Intelligence MCP Server with the Apify API, SDKs & MCP

Automate **TikTok Intelligence MCP Server** programmatically from Python, Node.js/TypeScript, cURL, workflow builders (**n8n, Make, Zapier, Clay, Pipedream**), or **Model Context Protocol (`MCP`)** AI clients.

### Python (`apify-client`)

```python
from apify_client import ApifyClient

client = ApifyClient("<YOUR_APIFY_API_TOKEN>")
run = client.actor("church_of_loujess/tiktok-intelligence-mcp").call(
    run_input={
    "tool": "extract_viral_hooks_and_scripts",
    "keyword": "marketing tips",
    "maxResults": 5
}
)

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

### Node.js / TypeScript (`apify-client`)

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: '<YOUR_APIFY_API_TOKEN>' });
const run = await client.actor('church_of_loujess/tiktok-intelligence-mcp').call({
    "tool": "extract_viral_hooks_and_scripts",
    "keyword": "marketing tips",
    "maxResults": 5
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(`Extracted ${items.length} items:`, items);
```

### One-Line Synchronous REST API (`cURL` — ideal for n8n, Make & Clay HTTP Columns)

```bash
curl -X POST "https://api.apify.com/v2/acts/church_of_loujess~tiktok-intelligence-mcp/run-sync-get-dataset-items?token=<YOUR_APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tool": "extract_viral_hooks_and_scripts", "keyword": "marketing tips", "maxResults": 5}'
```

### Claude Desktop, Cursor, Windsurf & OpenAI MCP Configuration

```json
{
  "mcpServers": {
    "tiktok-intelligence-mcp": {
      "url": "https://church-of-loujess--tiktok-intelligence-mcp.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_APIFY_API_TOKEN>"
      }
    }
  }
}
```

#### Claude Code CLI one-liner:
```bash
claude mcp add --transport http tiktok-intelligence-mcp "https://church-of-loujess--tiktok-intelligence-mcp.apify.actor/mcp" --header "Authorization: Bearer <YOUR_APIFY_API_TOKEN>"
```

## ❓ Frequently Asked Questions

### How is billing structured on `tiktok-intelligence-mcp`?

`initialize`, `tools/list`, and `ping` are **`$0.00` FREE**. Each successful `tools/call` execution charges 1 `mcp-tool-call` event (`$0.035` on Free, `$0.024` Bronze, `$0.019` Silver, `$0.016` Gold–Diamond) — even when that call returns 5–15 videos or leads!

### Can I dissect a specific TikTok URL I paste into Claude?

Yes! Just paste any `https://www.tiktok.com/@user/video/...` link into Claude and ask it to analyze the hook or mine buyer comments — Claude will pass `videoUrl` to `extract_viral_hooks_and_scripts` or `mine_buyer_intent_comments` automatically.

### Do I need TikTok cookies, API keys, or proxies?

No — zero TikTok credentials and zero proxies required.

### Does it also work from the Apify Console 'Start' button?

Yes — select any of the 6 tools in `tool`, enter `keyword` (or `videoUrl`), and run it as a standard Dataset job.

### Which MCP clients are supported?

Claude Desktop, Claude Code (`claude mcp add`), Cursor, Windsurf, VS Code Copilot, ChatGPT Developer Mode, OpenAI Responses API, LibreChat, LangChain/LangGraph, and CrewAI.

### When should I use the dedicated Batch TikTok Actors instead of this MCP server?

Use this MCP server for interactive AI agent queries (`5–20` items in seconds); use our 7 dedicated Batch TikTok Actors when scraping `100`–`10,000+` rows into CSV/Parquet or scheduled ETL pipelines.

### Is it legal to extract public data with TikTok Intelligence MCP Server?

TikTok Intelligence MCP Server only accesses **publicly available web pages, feeds, and registries** that require no private account login or authentication bypass. Keep in mind that extracted contact fields (such as public business emails, names, or usernames) can still qualify as personal data under frameworks like the [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) or CCPA depending on jurisdiction. Always ensure you have a lawful basis (such as legitimate B2B interest) and consult Apify's guide on [the legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).

### Can I integrate TikTok Intelligence MCP Server with Clay, n8n, Make, Zapier, or Google Sheets?

Yes. Every run outputs clean, flat-friendly fields alongside nested detail objects and integrates natively with **Clay, n8n, Make, Zapier, Slack, HubSpot, Airtable, Google Sheets, Airbyte, LangChain, and CrewAI** via [Apify Integrations](https://apify.com/integrations). You can also attach [webhooks](https://docs.apify.com/integrations/webhooks) to trigger downstream workflows automatically the instant a run succeeds.

### Can I call TikTok Intelligence MCP Server programmatically via the Apify API?

Yes. Use the official `apify-client` [Python package](https://apify.com/church_of_loujess/tiktok-intelligence-mcp/api/python) or [Node.js NPM package](https://apify.com/church_of_loujess/tiktok-intelligence-mcp/api/javascript), or call the synchronous `/run-sync-get-dataset-items` REST endpoint directly. Full specifications are in the [Apify API v2 reference](https://docs.apify.com/api/v2).

### TikTok Intelligence MCP Server not working or need a custom feature?

We actively maintain and monitor all 26 Actors and MCP Servers in our portfolio. If you encounter an edge case, unexpected output, or want to request a new field, please open a ticket on the Actor's [Issues tab](https://apify.com/church_of_loujess/tiktok-intelligence-mcp/issues/open) with your Run ID so we can resolve it rapidly.
