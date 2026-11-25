# Framer MCP Server

Framer ships no MCP server of its own. The Sprites MCP server connects your Framer CMS to Claude, ChatGPT and any other MCP client: ask for a post and Sprites researches the keyword, writes it in your site’s voice, sets the SEO fields, and adds it to your CMS collection once you approve it.

![License: MIT](https://img.shields.io/badge/license-MIT-blue) ![MCP: remote](https://img.shields.io/badge/MCP-remote-6E56CF) ![Transport: streamable HTTP](https://img.shields.io/badge/transport-streamable%20HTTP-informational) ![Auth: OAuth](https://img.shields.io/badge/auth-OAuth-success) ![Hosted by Sprites](https://img.shields.io/badge/hosted%20by-Sprites-111111)

**Server URL:** `https://mcp.sprites.ai/mcp` · streamable HTTP · OAuth sign-in · 6 read tools · 14 write tools · every write approved by you

> This repository holds the documentation, client configs and MCP Registry metadata for the hosted
> Framer MCP server run by [Sprites](https://www.sprites.ai). The server itself is hosted by Sprites and its source is not
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

1. **Connect Framer in Sprites.** Sign up at [sprites.ai](https://www.sprites.ai) and connect Framer once in the Sprites integrations menu. Start a trial from the Sprites site.
2. **Add the server to your client** with the URL `https://mcp.sprites.ai/mcp` (one endpoint for every client and every channel).
3. **Sign in.** Your client opens the Sprites consent screen. Sign in with the account your channels are connected to and approve.
4. **Ask.** Try: "With Sprites, write a post on "framer vs webflow for startups" and add it to our Framer blog."

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

- Your Framer CMS collections and the items in them
- Each item’s fields, slug and draft state
- Your site’s published URLs
- Search Console queries, impressions, clicks and position, and keyword data for what you target

## What it can change (with your approval)

- New CMS items in the collection you name, with title, slug, body and SEO fields
- Updates to the fields of an existing CMS item
- Posts and refreshes Sprites wrote, only after you approve them
- Single field edits you ask for directly, such as one meta description, applied when you ask
- Not your layouts, components or site settings, and not the publish of your site

Every change arrives as an approval with the before and after. In Claude and ChatGPT it is a card you can edit
in place. In clients without cards, Sprites returns the change written out with a gate id, and applies it only
after you confirm (`approve_change`). Nothing is applied by the model on its own.

## Permissions

- **Project API key.** Generated in a project’s Site Settings and valid for that one project.
- **CMS collection.** Posts land in the collection you choose.
- **What Sprites asks for.** An API key from your project’s Site Settings.
- **What you skip.** The key never sits in your AI client’s config. Sprites holds it, and your agent signs in to Sprites with OAuth.
- **Your AI client never holds a platform credential.** It holds a Sprites OAuth token bound to `https://mcp.sprites.ai/mcp`.

## Tools

The server exposes 20 tools to the model: 6 read tools and 14 write tools. Write tools that touch an ad account or a site only propose; nothing reaches either until you approve it. The tools that do the Framer work:

| Tool | What it does on Framer |
|---|---|
| `write_seo_blog_post` | A researched post written into a Framer CMS collection once you approve it. |
| `create_seo_page` | The SEO title, description and body of an existing CMS item rewritten. |
| `create_aeo_content` | FAQ and comparison content written to be quoted by ChatGPT and AI Overviews. |
| `research` | Keyword volume, difficulty and what already ranks for the target. |
| `analyze` | Search Console impressions, clicks and the pages that moved. |
| `schedule_task` | A recurring content brief or refresh that runs on its own. |

Framer requests use `channel: seo_web`. Name another channel, or `all`, to compare.

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

1. With Sprites, write a post on "framer vs webflow for startups" and add it to our Framer blog.
2. Ask Sprites which of our Framer blog posts lost position in the last 28 days and why.
3. Use Sprites to rewrite the SEO title and description on our three weakest case studies.
4. Have Sprites list our Framer CMS collections and tell me which one the changelog lives in.
5. With Sprites, plan four posts for next month from the queries we nearly rank for.

More in [`examples/prompts.md`](examples/prompts.md). Saying "with Sprites" or "use Sprites" helps clients that
rank their own built-in tools first (Cursor, Grok).

## FAQ

**Is this a server I have to host?**
No. It is a hosted remote MCP server. Paste `https://mcp.sprites.ai/mcp` into your client and sign in.

**How does it compare with other Framer MCP servers?**
Framer ships no MCP server. Its own route for AI is the External Agent connection, npx @framer/agent, which works with coding agents in a terminal and is not MCP. The MCP plugin in the Framer Marketplace is third-party, and it only works while your Framer project is open. It connects a client to the project; the research and the writing are left to you. Sprites connects through Framer’s own Server API instead, so Framer can stay closed, and adds the work on top: keyword research, posts written in your site’s voice, and SEO fields set on each CMS item. Posts and refreshes Sprites writes wait for your approval; a single field edit you ask for directly applies when you ask.

**Is there an official Framer MCP server?**
No. Framer’s own position is that it “doesn’t require a separate MCP server”: it offers an External Agent connection instead, set up with npx @framer/agent, which lets coding agents such as Claude Code, Codex, Cursor, Gemini CLI and Windsurf work on your canvas and CMS. The “MCP” plugin in the Framer Marketplace is made by a third party and says it is not official.

**How does Sprites connect to Framer?**
Through Framer’s own Server API. In your project’s Site Settings, create an API key under API Keys, then paste it and the project URL into the Framer integration in Sprites. Framer does not need to stay open. Your agent then reaches Framer through the single Sprites URL, alongside every other channel.

**Will it publish to my live site?**
Not on its own. Every post or refresh Sprites writes is a draft until you approve it, and Sprites will not write an unapproved draft into Framer. A single field edit you ask for directly is applied when you ask. Sprites has no step that publishes the site itself — that stays in Framer.

**Can it change my page layouts or components?**
No. Sprites works on CMS collections — blog posts, case studies, changelogs and any collection-backed page — and their SEO fields. Layout, components, styles and site settings stay yours to change in Framer.

**What is the difference between Framer’s External Agent and Sprites?**
The External Agent gives a coding agent in your terminal access to the project and leaves the deciding to you. Sprites does the deciding: it reads Search Console and keyword data, picks the gap, writes the post in your voice and holds it for your approval — from Claude or ChatGPT, not only a terminal.

**Which plan includes Framer?**
Publishing to Framer is included from the Build plan. The SEO article writer that researches and writes the posts is on Launch and above.

**Which agents can I use it from?**
Claude, ChatGPT, Codex, Cursor, Gemini, Grok and every other client that speaks remote MCP. One endpoint, one sign-in, no per-client configuration.

**Does it cover other channels?**
Yes. The same URL reaches Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, Reddit Ads, Microsoft Advertising,
Apple Ads, GA4, Search Console, Shopify, SEO and AI visibility, and Google Business Profile, for whatever is
connected in Sprites. See [ads-mcp-servers](https://github.com/sprites-ai/ads-mcp-servers).

**How much does it cost?**
The connector is included in every Sprites plan, and every plan starts with a short trial. See sprites.ai for current plans. Framer is billed by its own vendor as usual.

**The client says it has no tools, or every call is unauthorized.**
Remove the server, re-add it with exactly `https://mcp.sprites.ai/mcp`, and sign in again. Grants are bound to that one URL.

**How do I revoke access?**
Disconnect the connector in your client, or remove the connection in Sprites. The next tool call fails closed.

## Maintained by Sprites

This server is built and run by [Sprites](https://www.sprites.ai), an AI marketing agent for paid ads, SEO and AI visibility.

- Product page: [sprites.ai/mcp/framer](https://www.sprites.ai/mcp/framer)
- All Sprites MCP servers: [github.com/sprites-ai](https://github.com/sprites-ai)
- Issues with these docs or configs: open an issue here. Security reports: see [SECURITY.md](SECURITY.md).

Licensed under the [MIT License](LICENSE). The license covers the documentation and configuration files in this repository.
