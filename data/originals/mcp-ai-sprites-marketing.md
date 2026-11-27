# Ads MCP Servers

[![Sprites MCP connector](https://glama.ai/mcp/connectors/ai.sprites/ads/badges/score.svg)](https://glama.ai/mcp/connectors/ai.sprites/ads)

One hosted MCP server for Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, Reddit Ads, Microsoft Advertising,
Apple Ads, GA4, Search Console and Shopify. Use it from Claude, ChatGPT, Cursor, Codex, Gemini and any MCP
client, with every change approved by you first.

![License: MIT](https://img.shields.io/badge/license-MIT-blue) ![MCP: remote](https://img.shields.io/badge/MCP-remote-6E56CF) ![Transport: streamable HTTP](https://img.shields.io/badge/transport-streamable%20HTTP-informational) ![Auth: OAuth](https://img.shields.io/badge/auth-OAuth-success) ![Hosted by Sprites](https://img.shields.io/badge/hosted%20by-Sprites-111111)

**Server URL:** `https://mcp.sprites.ai/mcp` · streamable HTTP · OAuth sign-in · 6 read tools · 14 write tools

> This repository compares the per-platform MCP servers run by [Sprites](https://www.sprites.ai) and documents the one
> connector behind them. The server is hosted by Sprites; its source is not in this repository.

## What's new

| Date | Change |
|---|---|
| 2026-11-25 | Added SEO, AI visibility, competitor research, WordPress, Webflow, Framer, Google Business Profile and PostHog servers |
| 2026-11-23 | Initial public release of connector docs and configs |

## The servers

Every row is the same endpoint. Each repository documents what that platform's connection reads, changes and
needs, with setup for every client.

| Platform | What it can change (with approval) | Connects with | Platform's own MCP server |
|---|---|---|---|
| [Google Ads](https://github.com/sprites-ai/google-ads-mcp-server) | Campaigns, ad groups, RSAs, keywords, budgets, bids, negatives | Google sign-in | Google's, open source, read-only, self-hosted |
| [Meta Ads](https://github.com/sprites-ai/meta-ads-mcp-server) | Campaigns, ad sets, audiences, ads, budgets, targeting | Facebook Login for Business | Meta's, hosted, Meta only |
| [LinkedIn Ads](https://github.com/sprites-ai/linkedin-ads-mcp-server) | Campaigns, audiences, company lists, creatives, budgets, bids | LinkedIn sign-in | None for MCP clients (read-only app inside ChatGPT) |
| [TikTok Ads](https://github.com/sprites-ai/tiktok-ads-mcp-server) | Campaigns, ad groups, ads, budgets, targeting | TikTok for Business sign-in | TikTok for Business, hosted, TikTok only |
| [Reddit Ads](https://github.com/sprites-ai/reddit-ads-mcp-server) | Campaigns, ad groups, ads, community targeting, budgets | Reddit sign-in | None |
| [Microsoft Advertising](https://github.com/sprites-ai/microsoft-ads-mcp-server) | Campaigns, ad groups, ads, keywords, negative lists, budgets | Microsoft or Google sign-in | Not compared here |
| [Apple Ads](https://github.com/sprites-ai/apple-ads-mcp-server) | Budgets, bids, keywords, negatives, campaigns, ad groups | Apple Ads API key | Not compared here |
| [Google Analytics 4](https://github.com/sprites-ai/google-analytics-mcp-server) | GA4 audiences and ads personalization only | Google sign-in | Google's, open source, read-only, self-hosted |
| [Google Search Console](https://github.com/sprites-ai/google-search-console-mcp-server) | Nothing in GSC; posts and pages as CMS drafts | Google sign-in | None |
| [Shopify](https://github.com/sprites-ai/shopify-mcp-server) | Pages, posts, product copy, SEO fields, tags; never prices or stock | Shopify App Store install | Shopify's connector for Claude, plus Storefront MCP |

Every platform also reads its own reporting: spend, results and the entities behind them.

## Beyond ads: SEO, AI visibility, competitor research, your site and your CRM

The same endpoint also covers the rest of the marketing stack. Each repository documents what that part reads,
what it can change and what it needs.

| Area | What it does |
|---|---|
| [SEO](https://github.com/sprites-ai/seo-mcp-server) | Keyword research, Search Console, posts drafted in your CMS, page edits as a diff |
| [AI visibility (AEO / GEO)](https://github.com/sprites-ai/ai-visibility-mcp-server) | Who ChatGPT, Perplexity, Gemini and AI Overviews cite for your prompts, then answer pages, comparison pages and llms.txt |
| [Competitor research](https://github.com/sprites-ai/competitor-research-mcp-server) | Rivals' live ads from the Meta Ad Library and Google's Ads Transparency Center, their keywords, backlinks and AI citations |
| [WordPress](https://github.com/sprites-ai/wordpress-mcp-server) | Researched posts, page edits, Yoast and Rank Math fields, as drafts you approve |
| [Webflow](https://github.com/sprites-ai/webflow-mcp-server) | Researched CMS posts, page metadata and copy edits |
| [Framer](https://github.com/sprites-ai/framer-mcp-server) | Researched posts and SEO fields in your Framer CMS |
| [Google Business Profile](https://github.com/sprites-ai/google-business-profile-mcp-server) | Per-location performance, missing listing fields and posts |
| [PostHog](https://github.com/sprites-ai/posthog-mcp-server) | Funnels, retention and trends by campaign, read-only, beside the ad spend |
| [HubSpot](https://github.com/sprites-ai/hubspot-mcp-server) | Pipeline and lead-source reports beside Google, Meta and LinkedIn Ads, read-only |
| [Salesforce](https://github.com/sprites-ai/salesforce-mcp-server) | Leads, pipeline and won-deal goals tracked beside ad spend, read-only |
| [Pipedrive](https://github.com/sprites-ai/pipedrive-mcp-server) | Deals and lead sources beside ad spend; deal, record, note and activity writes approved first |
| [GoHighLevel](https://github.com/sprites-ai/gohighlevel-mcp-server) | Goals on booked appointments and won value beside Meta and Google Ads, read-only |
| [Attio](https://github.com/sprites-ai/attio-mcp-server) | People, companies and deals read beside your ad accounts |

## One connector, not ten

- **One URL, one sign-in.** Add `https://mcp.sprites.ai/mcp` once. Each platform is connected inside Sprites once, and the tools
  work on whatever is connected.
- **Cross-channel answers.** Ask "compare Google and Meta CPA last month" and it is answered as one comparison,
  not two tool calls stitched together by the model.
- **Task tools, not raw API wrappers.** The tools are jobs (`analyze`, `optimize`, `launch`, `change`,
  `research`, `create_creative`, `schedule_task` and more). A specialist for the channel reads the account,
  does the analysis and returns the answer or the proposed change.
- **Approval on every write.** Changes come back as approvals with the before and after. Claude and ChatGPT
  render an editable card; other clients get the change in text with a gate id and apply it through
  `approve_change` only after you confirm.
- **No credentials on your machine.** No Google Cloud project or API access application, and no Meta or LinkedIn developer apps. Your client holds only a Sprites OAuth token bound to `https://mcp.sprites.ai/mcp`.
- **Recurring work.** `schedule_task` runs a weekly brief or a daily check inside Sprites, without the chat open.

## Quick start

1. Sign up at [sprites.ai](https://www.sprites.ai) and connect the channels you use. Start a trial from the Sprites site.
2. Add `https://mcp.sprites.ai/mcp` to your client (below) and sign in.
3. Ask: "With Sprites, how did my ads do last 30 days across every channel?"

## Setup by client

### Claude (claude.ai and Claude Desktop)

Works on Free (one custom connector), Pro, Max, Team and Enterprise.

1. Settings, then Customize, then Connectors. On Team and Enterprise an Owner adds it once under Organization settings, Connectors.
2. Click **+**, then **Add custom connector**. Name it `Sprites` and paste `https://mcp.sprites.ai/mcp`. Leave Advanced settings empty.
3. Click **Connect**, sign in to Sprites and approve.

Claude draws the Sprites approval card in the chat, so you can edit a budget or a headline in place and approve it.

### Claude Code

```bash
claude mcp add --transport http sprites https://mcp.sprites.ai/mcp
```

Then type `/mcp` inside Claude Code to finish the browser sign-in.

### ChatGPT

Plus, Pro, Business, Enterprise and Edu, on the web app. Not available on Free.

1. Settings, Security and login: turn on **Developer mode**. On Business and Enterprise an admin has to allow it first.
2. Settings, **Plugins** (formerly Connectors), then **+** to create an app.
3. Name `Sprites`, MCP server URL `https://mcp.sprites.ai/mcp`, Authentication **OAuth**. Tick the trust box and click Create.
4. Connect the app and sign in to Sprites.

### Cursor

`~/.cursor/mcp.json` (every project) or `.cursor/mcp.json` (one repo):

```json
{
  "mcpServers": {
    "sprites": {
      "url": "https://mcp.sprites.ai/mcp"
    }
  }
}
```

Cursor discovers the Sprites authorization server from the endpoint and opens a browser to sign in.

### Codex

```bash
codex mcp add sprites --url https://mcp.sprites.ai/mcp
codex mcp login sprites
```

Or by hand in `~/.codex/config.toml`:

```toml
[mcp_servers.sprites]
url = "https://mcp.sprites.ai/mcp"
auth = "oauth"
```

### VS Code and GitHub Copilot

`.vscode/mcp.json`. The top-level key is `servers`, not `mcpServers`, and a remote server needs `"type": "http"`:

```json
{
  "servers": {
    "sprites": {
      "type": "http",
      "url": "https://mcp.sprites.ai/mcp"
    }
  }
}
```

Run **Auth** above the entry, sign in, then switch Copilot Chat to **Agent** mode. Ask mode does not call MCP tools.

### Gemini CLI

`~/.gemini/settings.json`. Use `httpUrl`; a `url` entry is treated as SSE:

```json
{
  "mcpServers": {
    "sprites": {
      "httpUrl": "https://mcp.sprites.ai/mcp"
    }
  }
}
```

Restart the CLI; the first call opens the sign-in. Check with `gemini mcp list`.

### Other clients

| Client | How |
|---|---|
| Windsurf | `~/.codeium/windsurf/mcp_config.json` with `"serverUrl": "https://mcp.sprites.ai/mcp"` |
| Google Antigravity | `~/.gemini/config/mcp_config.json` with `"serverUrl": "https://mcp.sprites.ai/mcp"` (`url` and `httpUrl` are skipped) |
| Cline | Remote Servers tab, transport Streamable HTTP; in the file, `"type": "streamableHttp"` |
| Lovable | Connectors, Custom MCP, paste the URL |
| Grok | grok.com/connectors, New Connector, Custom (paid tiers) |
| Devin | Customize, MCPs, Add custom MCP, transport HTTP, authentication OAuth |
| Replit Agent | Integrations, MCP Servers, Add MCP server, Test & Save |

Copy-ready files for each are in [`configs/`](configs/).

## Tools

| Tool | Type | What it does |
|---|---|---|
| `analyze` | read | Performance, reports, spend, revenue and Shopify sales questions, period comparisons, diagnosing a drop. Reads only. |
| `research` | read | Competitors and their ads, keyword research (paid or SEO), market and audience research, AI visibility. |
| `optimize` | write | Audits, wasted spend, scaling winners, moving budget. Reads, reports, and queues the recommended changes as approval cards. |
| `create_creative` | write | Ad copy, headlines and descriptions, and written concepts for image or video ads. Writes creative; does not generate images, video or audio. |
| `launch` | write | New campaigns, ad sets or ad groups, audiences, retargeting, duplicating a campaign, A/B tests, proposed as approval cards. |
| `change` | write | One named edit: budget, pause or enable, keywords or negatives, targeting, rename. Opens one approval card. |
| `schedule_task` | write | Recurring work that runs inside Sprites: weekly briefs, monitors, alerts, recurring content. |
| `write_seo_blog_post` | write | A researched blog post for your site, drafted in your CMS and published once approved. |
| `create_seo_page` | write | Create or edit a landing or service page, meta titles and descriptions, schema; a diff card before publishing. |
| `create_aeo_content` | write | Content meant to be cited by ChatGPT, Perplexity, Gemini or AI Overviews: answer, FAQ and comparison pages, llms.txt. |
| `run_task` | write | Anything else: setup, capability questions, cross-channel and multi-step jobs. |
| `linkedin_ads_report` | read | LinkedIn Ads performance: spend, leads, CPL, CTR, reach, period comparisons. |
| `linkedin_forecast` | read | LinkedIn's own forecast for up to 5 audiences: members, cost per lead, CPC and CTR over 30 days. Creates nothing. |
| `linkedin_ads_campaign` | write | Create a LinkedIn campaign: Sponsored Content, lead gen forms, message ads, retargeting. |
| `linkedin_abm_campaign` | write | LinkedIn account-based marketing: target account lists, company matched audiences. |
| `linkedin_ads` | write | Any other LinkedIn Ads task, routed by intent (audit, budget, pause, targeting, creative). |
| `account_status` | read | Which channels are connected in Sprites and how many credits are left. |
| `choose_business` | write | Select which Sprites business the tools work on, by name, or list your businesses. |
| `task_status` | read | Status and result of a Sprites task by its run id. |
| `cancel_task` | write | Stop a running task. |
| `approve_change` | write | Only on clients that do not render the approval card (Codex, Cursor, Claude Code and others): apply or decline a pending change by its gate id, after you confirm it. |

Task tools take `goal`, `title`, `channel` and `today`. `channel` is one of `google_ads`, `meta_ads`,
`linkedin_ads`, `reddit_ads`, `microsoft_ads`, `tiktok_ads`, `seo_web` (website, Search Console, GA4, AI
visibility), `social`, `shopify`, `gbp`, `all` (two or more together) or `unknown` (Sprites resolves it; Apple
Ads requests use this).

## FAQ

**Which agents does it work with?**
Claude, Claude Code, ChatGPT, Codex, Cursor, Gemini CLI, GitHub Copilot, Google Antigravity, Windsurf, Lovable,
Grok, Cline, Devin and Replit Agent, plus any client that speaks remote MCP over streamable HTTP with OAuth.

**Do I need one connector per platform?**
No. One connector covers every platform connected in Sprites. The per-platform repositories exist so each
platform's permissions and capabilities are documented in one place.

**Which ad platforms are not supported?**
Pinterest, Snapchat, X and Amazon Ads have no connection in Sprites. Sprites can research Pinterest, Snapchat and
Amazon ads in its ads library, but cannot run them.

**How much does it cost?**
It is included in every Sprites plan, and every plan starts with a short trial. See sprites.ai for current plans.

## Maintained by Sprites

Built and run by [Sprites](https://www.sprites.ai). Setup guides for every client: [sprites.ai/mcp](https://www.sprites.ai/mcp).
Every account Sprites connects to: [sprites.ai/integrations](https://www.sprites.ai/integrations).

Licensed under the [MIT License](LICENSE). The license covers the documentation and configuration files in this repository.
