# HubSpot MCP Server

The Sprites MCP server connects HubSpot to Claude, ChatGPT and any MCP client, beside your ad accounts. Ask which Google, Meta or LinkedIn campaigns produced qualified leads and deals, or build an audience from a CRM segment. Sprites only reads HubSpot: it never creates, changes or deletes a record.

![License: MIT](https://img.shields.io/badge/license-MIT-blue) ![MCP: remote](https://img.shields.io/badge/MCP-remote-6E56CF) ![Transport: streamable HTTP](https://img.shields.io/badge/transport-streamable%20HTTP-informational) ![Auth: OAuth](https://img.shields.io/badge/auth-OAuth-success) ![Hosted by Sprites](https://img.shields.io/badge/hosted%20by-Sprites-111111)

**Server URL:** `https://mcp.sprites.ai/mcp` · streamable HTTP · OAuth sign-in · 6 read tools · 14 write tools · every write approved by you

> This repository holds the documentation, client configs and MCP Registry metadata for the hosted
> HubSpot MCP server run by [Sprites](https://www.sprites.ai). The server itself is hosted by Sprites and its source is not
> in this repository. There is nothing to install or run.

## What's new

| Date | Change |
|---|---|
| 2026-11-27 | Initial public release of connector docs and configs |

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

1. **Connect HubSpot in Sprites.** Sign up at [sprites.ai](https://www.sprites.ai) and connect HubSpot and your ad accounts once in the Sprites integrations menu. Start a trial from the Sprites site.
2. **Add the server to your client** with the URL `https://mcp.sprites.ai/mcp` (one endpoint for every client and every channel).
3. **Sign in.** Your client opens the Sprites consent screen. Sign in with the account your channels are connected to and approve.
4. **Ask.** Try: "With Sprites, which Google and LinkedIn campaigns produced qualified leads in HubSpot last month?"

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

- Contacts, companies and deals, with your own properties and custom fields
- Lead source, lifecycle stage, form conversions and meetings on each contact
- Deal pipelines, stages and amounts, and owners resolved to names
- Lists and their members, and your forms
- Counts, funnels and sums by source, stage, owner or any property

## What it can change (with your approval)

- Nothing in HubSpot: no records created, updated or deleted
- No write scope is requested, so a write is impossible rather than merely discouraged
- An audience CSV can be built from a CRM segment, held for your review before any ad-platform upload
- Ad-account changes that follow from the pipeline are approval cards on that platform

Every change arrives as an approval with the before and after. In Claude and ChatGPT it is a card you can edit
in place. In clients without cards, Sprites returns the change written out with a gate id, and applies it only
after you confirm (`approve_change`). Nothing is applied by the model on its own.

## Permissions

- **crm.objects.*.read scopes.** Read-only access to contacts, companies and deals; HubSpot grants no write from a .read scope.
- **crm.export.** Lets a filtered list be exported, which is how an ad audience file is built.
- **Private app or MCP auth app.** The do-it-yourself routes: a private app token, or registering an app for HubSpot’s own MCP server.
- **What Sprites asks for.** HubSpot sign-in for read scopes on contacts, companies, deals and their related records, plus export for audience files. No create, update or delete scope.
- **What you skip.** You create no private app and paste no HubSpot token into your AI client.
- **Your AI client never holds a platform credential.** It holds a Sprites OAuth token bound to `https://mcp.sprites.ai/mcp`.

## Tools

The server exposes 20 tools to the model: 6 read tools and 14 write tools. Write tools that touch an ad account or a site only propose; nothing reaches either until you approve it. The tools that do the HubSpot work:

| Tool | What it does on HubSpot |
|---|---|
| `analyze` | Lead, pipeline and revenue reports from HubSpot, read beside ad spend by campaign. |
| `optimize` | Budget and campaign changes proposed from the deals and qualified leads each one produced. |
| `launch` | A LinkedIn or Meta audience built from a HubSpot segment, held for your approval. |
| `schedule_task` | A recurring pipeline or lead-quality report that runs on its own. |

CRM numbers are read inside Sprites beside your ad accounts; name the ad channel, or `all`, when you ask.

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

1. With Sprites, which Google and LinkedIn campaigns produced qualified leads in HubSpot last month?
2. Ask Sprites for open HubSpot deals by stage and owner, with the amount in each.
3. Use Sprites to compare HubSpot lead-to-customer rate by lead source next to our ad spend.
4. Have Sprites build a LinkedIn audience from HubSpot contacts at the opportunity stage.
5. Every Monday, have Sprites summarize new HubSpot leads by source and campaign.

More in [`examples/prompts.md`](examples/prompts.md). Saying "with Sprites" or "use Sprites" helps clients that
rank their own built-in tools first (Cursor, Grok).

## FAQ

**Is this a server I have to host?**
No. It is a hosted remote MCP server. Paste `https://mcp.sprites.ai/mcp` into your client and sign in.

**How does it compare with other HubSpot MCP servers?**
HubSpot runs its own remote MCP server at mcp.hubspot.com, now generally available. It reads CRM records, marketing content and activities, and creates and updates CRM records and activities. A separate developer MCP server, set up with the HubSpot CLI, is for building apps and CMS content. Community HubSpot MCP servers on GitHub wrap the HubSpot API with a private app token you create and hold yourself, so what they can read or write depends on the scopes you grant it. Sprites reads contacts, companies and deals beside the ad accounts, so qualified leads and pipeline are matched to the spend that produced them. It never writes to HubSpot: no write scope is requested. Audience files built from a CRM segment and every ad change wait for your approval.

**Is there an official HubSpot MCP server?**
Yes. HubSpot’s remote MCP server at mcp.hubspot.com is generally available. It reads CRM records, marketing content and activities, and it can create and update contacts, companies, deals, tickets, line items, products and activities. Agents sign in with OAuth 2.1 and inherit your HubSpot permissions. Sprites is a separate MCP server that reads HubSpot beside your ad accounts and writes nothing to it.

**Can Sprites change anything in HubSpot?**
No. Every permission Sprites asks HubSpot for is read-only, so it cannot create, update or delete a contact, company or deal. Audiences built from HubSpot go to your ad platforms only after you approve them.

**Which Sprites plan includes HubSpot?**
The pricing page lists CRM integration, covering HubSpot, Salesforce, Zoho CRM and Pipedrive, as a Scale plan feature. The MCP server itself comes with every paid plan.

**Does it work with the HubSpot Google Ads and LinkedIn Ads integrations?**
It is separate from them and needs neither. Sprites connects to the ad accounts directly and reads them beside HubSpot, so one question covers cost per qualified lead and the budget move it implies.

**What does Sprites read from HubSpot?**
Contacts, companies, deals, owners, lists, forms and your property definitions, pipelines and lifecycle stages. The permissions page at /integrations/hubspot lists each scope and what it is used for.

**Which agents can I use it from?**
Claude, ChatGPT, Codex, Cursor and Grok, plus any other client that speaks remote MCP. HubSpot is connected once inside Sprites; the agent never holds a HubSpot token.

**Does it cover other channels?**
Yes. The same URL reaches Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, Reddit Ads, Microsoft Advertising,
Apple Ads, GA4, Search Console, Shopify, SEO and AI visibility, and Google Business Profile, for whatever is
connected in Sprites. See [ads-mcp-servers](https://github.com/sprites-ai/ads-mcp-servers).

**How much does it cost?**
The connector is included in every Sprites plan, and every plan starts with a short trial. See sprites.ai for current plans. HubSpot is billed by its own vendor as usual.

**The client says it has no tools, or every call is unauthorized.**
Remove the server, re-add it with exactly `https://mcp.sprites.ai/mcp`, and sign in again. Grants are bound to that one URL.

**How do I revoke access?**
Disconnect the connector in your client, or remove the connection in Sprites. The next tool call fails closed.

## Maintained by Sprites

This server is built and run by [Sprites](https://www.sprites.ai), an AI marketing agent for paid ads, SEO and AI visibility.

- Product page: [sprites.ai/mcp/hubspot](https://www.sprites.ai/mcp/hubspot)
- All Sprites MCP servers: [github.com/sprites-ai](https://github.com/sprites-ai)
- Issues with these docs or configs: open an issue here. Security reports: see [SECURITY.md](SECURITY.md).

Licensed under the [MIT License](LICENSE). The license covers the documentation and configuration files in this repository.
