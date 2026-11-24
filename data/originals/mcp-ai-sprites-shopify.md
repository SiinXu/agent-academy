# Shopify MCP Server

Connect Shopify to Claude, ChatGPT, Cursor and any MCP client. SEO titles across the whole catalogue, collection pages, blog posts and product copy, each change approved by you first. Prices and inventory are never touched.

![License: MIT](https://img.shields.io/badge/license-MIT-blue) ![MCP: remote](https://img.shields.io/badge/MCP-remote-6E56CF) ![Transport: streamable HTTP](https://img.shields.io/badge/transport-streamable%20HTTP-informational) ![Auth: OAuth](https://img.shields.io/badge/auth-OAuth-success) ![Hosted by Sprites](https://img.shields.io/badge/hosted%20by-Sprites-111111)

**Server URL:** `https://mcp.sprites.ai/mcp` · streamable HTTP · OAuth sign-in · 6 read tools · 14 write tools · every write approved by you

> This repository holds the documentation, client configs and MCP Registry metadata for the hosted
> Shopify MCP server run by [Sprites](https://www.sprites.ai). The server itself is hosted by Sprites and its source is not
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

1. **Connect Shopify in Sprites.** Sign up at [sprites.ai](https://www.sprites.ai) and connect Shopify once in the Sprites integrations menu. Start a trial from the Sprites site.
2. **Add the server to your client** with the URL `https://mcp.sprites.ai/mcp` (one endpoint for every client and every channel).
3. **Sign in.** Your client opens the Sprites consent screen. Sign in with the account your channels are connected to and approve.
4. **Ask.** Try: "With Sprites, which of our products are missing SEO titles or meta descriptions?"

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

- Products, variants, collections, inventory and pricing
- The sales channels each product is published on
- Store pages, blog posts and their SEO metadata
- Store-level orders and revenue for the last 60 days
- Online store sessions and conversion rate, where your plan includes Shopify analytics

## What it can change (with your approval)

- Collection and landing pages, and store blog posts
- Product descriptions, SEO titles, meta descriptions, tags and status
- Never prices or inventory
- Pages and posts arrive as drafts; publishing is a separate approval

Every change arrives as an approval with the before and after. In Claude and ChatGPT it is a card you can edit
in place. In clients without cards, Sprites returns the change written out with a gate id, and applies it only
after you confirm (`approve_change`). Nothing is applied by the model on its own.

## Permissions

- **Install.** Install Sprites AI from the Shopify App Store and the store connects with nothing to set up. Or create your own app in Shopify's Dev Dashboard and enter its Client ID and secret in Sprites.
- **Admin API scopes.** `read_products`, `write_products`, `read_content`, `write_content`, `read_orders`, `read_reports` and `read_publications`. No customer scope is requested.
- **Orders.** With `read_orders`, order reads cover Shopify's default trailing 60 days.
- **Prices and inventory.** `write_products` is needed for descriptions, SEO fields and tags. Sprites does not change prices or stock.
- **Your AI client never holds a Shopify credential.** It holds a Sprites OAuth token bound to `https://mcp.sprites.ai/mcp`.

## Tools

The server exposes 20 tools to the model: 6 read tools and 14 write tools. Write tools that touch an ad account or a site only propose; nothing reaches either until you approve it. The tools that do the Shopify work:

| Tool | What it does on Shopify |
|---|---|
| `analyze` | The catalogue: products, prices, inventory, tags and SEO gaps, plus store revenue. |
| `run_task` | Catalogue-wide jobs, like SEO titles and descriptions for every product. |
| `create_seo_page` | Collection and landing pages published into the store. |
| `write_seo_blog_post` | Store blog posts, drafted in Shopify. |
| `create_creative` | Product-led ad copy and concepts built from real catalogue data. |

Shopify requests use `channel: shopify`. Name another channel, or `all`, to compare.

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

1. With Sprites, which of our products are missing SEO titles or meta descriptions?
2. Ask Sprites to list every product in the summer collection with price and inventory.
3. Use Sprites to create a collection page for "gifts under $50" and draft it in Shopify.
4. Have Sprites rewrite the product descriptions in the summer collection.
5. With Sprites, build Meta ad creative from our three best-selling SKUs.
6. Use Sprites to write SEO titles and meta descriptions for every product that lacks them.
7. Ask Sprites to draft a store blog post on how to choose the right size.
8. With Sprites, find products published to Point of Sale only and list them.
9. Have Sprites compare last month's store revenue with Meta and Google ad spend.
10. Use Sprites to draft one store blog post every month on a ranking opportunity.

More in [`examples/prompts.md`](examples/prompts.md). Saying "with Sprites" or "use Sprites" helps clients that
rank their own built-in tools first (Cursor, Grok).

## Official server vs this one

**Shopify connector for Claude, and Storefront MCP.** Shopify publishes its own connector in Claude's directory, approved from your Shopify admin. It creates and updates products, collections, inventory and percentage discounts, and reads orders, customers and analytics. Separately, every store answers a public Storefront MCP endpoint for shoppers' agents.

| | Official / self-hosted | Sprites (this server) |
|---|---|---|
| Products and inventory | Creates and updates products, prices, SKUs and stock | Reads them; writes descriptions and SEO fields, never prices or stock |
| Catalogue-wide SEO | One product at a time; batch status changes stop at 50 | SEO titles and descriptions across the catalogue in one approved run |
| Content | Product titles and descriptions | Pages, blog posts, product copy and metadata, written for search |
| Before a change applies | Applied when the tool is called | Drafts and diffs you approve; publishing is a separate click |

If you want to update products, stock and discount codes from a chat, Shopify's own connector does that. Use Sprites when the job is search and content, with nothing touching prices or inventory.

## FAQ

**Is this a server I have to host?**
No. It is a hosted remote MCP server. Paste `https://mcp.sprites.ai/mcp` into your client and sign in.

**Do I need a Shopify Partner account?**
No. Install Sprites AI from the Shopify App Store. To use your own app instead, create it in the Dev Dashboard and enter its Client ID and secret in Sprites.

**Can it change prices or inventory?**
No. It reads them, and writes content and catalogue metadata: pages, posts, descriptions, SEO fields, tags and product status.

**Will it publish to the live storefront?**
Only on your approval. Pages and posts arrive as drafts; publishing is a separate click.

**Does it read customers?**
No. Sprites does not request a customer scope.

**Does it cover other channels?**
Yes. The same URL reaches Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, Reddit Ads, Microsoft Advertising,
Apple Ads, GA4, Search Console, Shopify, SEO and AI visibility, and Google Business Profile, for whatever is
connected in Sprites. See [ads-mcp-servers](https://github.com/sprites-ai/ads-mcp-servers).

**How much does it cost?**
The connector is included in every Sprites plan, and every plan starts with a short trial. See sprites.ai for current plans. Shopify charges its own media
cost as usual.

**The client says it has no tools, or every call is unauthorized.**
Remove the server, re-add it with exactly `https://mcp.sprites.ai/mcp`, and sign in again. Grants are bound to that one URL.

**How do I revoke access?**
Disconnect the connector in your client, or remove the connection in Sprites. The next tool call fails closed.

## Maintained by Sprites

This server is built and run by [Sprites](https://www.sprites.ai), an AI marketing agent for paid ads, SEO and AI visibility.

- Product page: [sprites.ai/mcp/shopify](https://www.sprites.ai/mcp/shopify)
- Setup guide: [sprites.ai/shopify-mcp](https://www.sprites.ai/shopify-mcp)
- All Sprites MCP servers: [github.com/sprites-ai](https://github.com/sprites-ai)
- Issues with these docs or configs: open an issue here. Security reports: see [SECURITY.md](SECURITY.md).

Licensed under the [MIT License](LICENSE). The license covers the documentation and configuration files in this repository.
