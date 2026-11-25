# Webflow MCP Server

The Sprites MCP server connects your Webflow site to any MCP client. Ask for a post and Sprites researches the keyword, writes it, and creates it as a draft CMS item; ask for better metadata and the new title and description arrive as a before-and-after you approve. Nothing changes on the site until you say yes.

![License: MIT](https://img.shields.io/badge/license-MIT-blue) ![MCP: remote](https://img.shields.io/badge/MCP-remote-6E56CF) ![Transport: streamable HTTP](https://img.shields.io/badge/transport-streamable%20HTTP-informational) ![Auth: OAuth](https://img.shields.io/badge/auth-OAuth-success) ![Hosted by Sprites](https://img.shields.io/badge/hosted%20by-Sprites-111111)

**Server URL:** `https://mcp.sprites.ai/mcp` · streamable HTTP · OAuth sign-in · 6 read tools · 14 write tools · every write approved by you

> This repository holds the documentation, client configs and MCP Registry metadata for the hosted
> Webflow MCP server run by [Sprites](https://www.sprites.ai). The server itself is hosted by Sprites and its source is not
> in this repository. There is nothing to install or run.

## What's new

| Date | Change |
|---|---|
| 2026-11-23 | Initial public release of connector docs and configs |

## Works with

- **Claude**: claude.ai and Claude Desktop, custom connector (renders approval cards)
- **Claude Code**: `claude mcp add`
- **ChatGPT**: developer mode app (Plus, Pro, Business, Enterprise, Edu) (renders approval cards)
- **Codex**: `codex mcp add` or `config.toml`
- **Cursor**: `mcp.json`
- **Gemini CLI**: `settings.json`
- **GitHub Copilot (VS Code)**: `.vscode/mcp.json`, agent mode
- **Google Antigravity**: `mcp_config.json`
- **Windsurf**: `mcp_config.json`
- **Lovable**: Connectors, Custom MCP
- **Grok**: grok.com/connectors, Custom
- **Cline**: Remote Servers, Streamable HTTP
- **Devin**: Customize, MCPs
- **Replit Agent**: Integrations, MCP Servers

Any other client that speaks remote MCP over streamable HTTP with OAuth should work with the same URL.

## Quick start

1. **Connect Webflow in Sprites.** Sign up at [sprites.ai](https://www.sprites.ai) and connect Webflow once in the Sprites integrations menu. Start a trial from the Sprites site.
2. **Add the server to your client** with the URL `https://mcp.sprites.ai/mcp` (one endpoint for every client and every channel).
3. **Sign in.** Your client opens the Sprites consent screen. Sign in with the account your channels are connected to and approve.
4. **Ask.** Try: "With Sprites, write a post on "webflow vs framer for seo" and add it to our Webflow blog collection as a draft."

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

## What it can read

- Your Webflow pages, CMS collections, their field schemas and items
- Page content, read fresh before any copy edit
- Your asset library
- Search Console queries, impressions, clicks and average position
- Keyword volume, difficulty and what currently ranks

## What it can change (with your approval)

- CMS items, created as drafts and published only on a separate approval
- Page titles, slugs, SEO titles, meta descriptions and Open Graph fields
- Text on existing pages, replaced node by node from a same-conversation read
- Assets uploaded from a URL or renamed, and new CMS collections
- Every one of these is an approval card first, and read back from Webflow after

Every change arrives as an approval with the before and after. In Claude and ChatGPT it is a card you can edit
in place. In clients without cards, Sprites returns the change written out with a gate id, and applies it only
after you confirm (`approve_change`). Nothing is applied by the model on its own.

## Permissions

- **Site API token.** Generated in a site’s settings and valid for that site.
- **CMS, Pages and Assets scopes.** The read and write access posts, page settings and images each need.
- **What Sprites asks for.** A site API token with read and write access to CMS, Pages and Assets.
- **What you skip.** The token never sits in your AI client’s config. Sprites holds it, and your agent signs in to Sprites with OAuth.
- **Your AI client never holds a platform credential.** It holds a Sprites OAuth token bound to `https://mcp.sprites.ai/mcp`.

## Tools

The server exposes 20 tools to the model: 6 read tools and 14 write tools. Write tools that touch an ad account or a site only propose; nothing reaches either until you approve it. The tools that do the Webflow work:

| Tool | What it does on Webflow |
|---|---|
| `write_seo_blog_post` | A researched post created as a draft item in your Webflow CMS collection. |
| `create_seo_page` | Page titles, slugs, SEO and Open Graph fields, or page copy, changed as a diff. |
| `create_aeo_content` | FAQ and comparison content written to be quoted by ChatGPT and AI Overviews. |
| `research` | Keyword volume, difficulty and what already ranks for the target. |
| `analyze` | Search Console impressions, clicks and the pages that moved. |
| `schedule_task` | A recurring content brief or refresh that runs on its own. |

Webflow requests use `channel: seo_web`. Name another channel, or `all`, to compare.

Every task tool takes the same input: `goal` (the request written to stand on its own: Sprites sees only this
string, not the chat), `title` (a short label), `channel`, and `today` (the user's local date, so "last 30 days"
resolves correctly). Long tasks return a run id; `task_status` collects the result and `cancel_task` stops it.

<details>
<summary>Full tool list (20 tools, plus <code>approve_change</code> on clients without cards)</summary>

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

</details>

## Example prompts

1. With Sprites, write a post on "webflow vs framer for seo" and add it to our Webflow blog collection as a draft.
2. Ask Sprites which Webflow pages have missing or duplicate meta descriptions, and propose new ones.
3. Use Sprites to rewrite the SEO title and meta description on our /pricing page.
4. Have Sprites find the Webflow blog posts that lost position in the last 28 days and refresh the weakest one.
5. With Sprites, update the hero headline on our /features page to lead with the outcome, not the feature.

More in [`examples/prompts.md`](examples/prompts.md). Saying "with Sprites" or "use Sprites" helps clients that
rank their own built-in tools first (Cursor, Grok).

## FAQ

**Is this a server I have to host?**
No. It is a hosted remote MCP server. Paste `https://mcp.sprites.ai/mcp` into your client and sign in.

**How does it compare with other Webflow MCP servers?**
Webflow hosts its own MCP server at mcp.webflow.com/mcp with OAuth sign-in. Its design tools work on layouts, elements, styles, components and interactions; its content tools reach CMS collections, pages, SEO fields, assets and forms. Webflow’s server is itself open source, as webflow/mcp-server on GitHub, so the self-hosted route runs Webflow’s own code against a site token you manage. Sprites leaves design alone. It decides what to write from keyword research, Search Console and a read of your pages, then writes CMS items, SEO fields and copy edits as approval cards, each read back from Webflow after it applies.

**Is there an official Webflow MCP server?**
Yes. Webflow runs its own MCP server at mcp.webflow.com/mcp, signed in with OAuth, one workspace per authorization. It reaches site design — elements, styles, components, interactions and custom code — and content: CMS collections and items, pages, SEO, assets, forms and the sitemap. A few canvas actions need the Webflow Designer open. Sprites is a separate server that decides what to write before it writes it.

**What is the difference between Webflow’s server and Sprites?**
Webflow’s server gives an agent Webflow’s controls, including the canvas, which Sprites does not touch. Sprites brings the SEO side: keyword research, Search Console and a read of your existing pages before it writes, then every change as an approval card that is checked against Webflow after it applies.

**How do I connect Webflow to Sprites?**
In Webflow’s site settings, generate a site API token with read and write access to CMS, Pages and Assets, and copy the Site ID from the same settings page. Paste both into Sprites once. Your AI agent then reaches Webflow through the Sprites MCP URL and never holds the token.

**Will it publish to my live site without asking?**
No. CMS items are created as drafts, and publishing one is a separate approval. Page metadata and copy changes are shown as a before and after and apply only when you approve them.

**Can it change the design of my Webflow pages?**
No. Sprites changes text on existing page elements, page metadata, assets and CMS content. Layout, styles and components stay in the Designer — Webflow’s own MCP server is the tool for those.

**Which Sprites plan includes Webflow?**
Publishing to Webflow is on every paid plan from Build. The SEO article writer that researches and drafts full posts is on Launch and above.

**Which agents can I use it from?**
Claude, ChatGPT, Codex, Cursor, Gemini, Grok and every other client that speaks remote MCP. One endpoint, one sign-in, no per-client configuration.

**Does it cover other channels?**
Yes. The same URL reaches Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, Reddit Ads, Microsoft Advertising,
Apple Ads, GA4, Search Console, Shopify, SEO and AI visibility, and Google Business Profile, for whatever is
connected in Sprites. See [ads-mcp-servers](https://github.com/sprites-ai/ads-mcp-servers).

**How much does it cost?**
The connector is included in every Sprites plan, and every plan starts with a short trial. See sprites.ai for current plans. Webflow is billed by its own vendor as usual.

**The client says it has no tools, or every call is unauthorized.**
Remove the server, re-add it with exactly `https://mcp.sprites.ai/mcp`, and sign in again. Grants are bound to that one URL.

**How do I revoke access?**
Disconnect the connector in your client, or remove the connection in Sprites. The next tool call fails closed.

## Maintained by Sprites

This server is built and run by [Sprites](https://www.sprites.ai), an AI marketing agent for paid ads, SEO and AI visibility.

- Product page: [sprites.ai/mcp/webflow](https://www.sprites.ai/mcp/webflow)
- All Sprites MCP servers: [github.com/sprites-ai](https://github.com/sprites-ai)
- Issues with these docs or configs: open an issue here. Security reports: see [SECURITY.md](SECURITY.md).

Licensed under the [MIT License](LICENSE). The license covers the documentation and configuration files in this repository.
