# Shoomaii Real-Time Data MCP Servers

Eight hosted **Streamable HTTP** [Model Context Protocol (MCP)](https://modelcontextprotocol.io) servers running on Apify Standby infrastructure. Connect Claude, Cursor, Windsurf, VS Code, or any MCP-compatible AI agent to live structured data with **zero third-party API keys, zero cookies, and zero proxies** — only your Apify API token.

> This repository hosts the official documentation, client setup snippets, and [Official MCP Registry](https://registry.modelcontextprotocol.io) manifests (`server.json`) for Shoomaii's live remote MCP servers on Apify.

## Live Remote MCP Servers

| Server | MCP Endpoint (Streamable HTTP) | MCP Tool(s) | Apify Store | Registry Manifest |
|---|---|---|---|---|
| **Company Jobs & Salaries (6 ATS Platforms)** | `https://shoomaii--ats-jobs-actor.apify.actor/mcp` | `search_company_jobs` | [Apify Store](https://apify.com/shoomaii/ats-jobs-actor) | [`servers/ats-jobs`](./servers/ats-jobs/) |
| **Prediction Markets: Polymarket & Kalshi Odds** | `https://shoomaii--prediction-markets-odds.apify.actor/mcp` | `get_prediction_market_odds` | [Apify Store](https://apify.com/shoomaii/prediction-markets-odds) | [`servers/prediction-markets-odds`](./servers/prediction-markets-odds/) |
| **Prediction Markets Arbitrage & L2 Slippage** | `https://shoomaii--prediction-markets-arb.apify.actor/mcp` | `find_prediction_market_arbitrage`, `get_orderbook_depth_slippage` | [Apify Store](https://apify.com/shoomaii/prediction-markets-arb) | [`servers/prediction-markets-arb`](./servers/prediction-markets-arb/) |
| **Company Hiring Intelligence & Tech Stack** | `https://shoomaii--company-hiring-intelligence.apify.actor/mcp` | `enrich_company_hiring` | [Apify Store](https://apify.com/shoomaii/company-hiring-intelligence) | [`servers/company-hiring-intelligence`](./servers/company-hiring-intelligence/) |
| **Podcast & Newsletter Sponsor Intelligence** | `https://shoomaii--podcast-newsletter-sponsor-intel.apify.actor/mcp` | `extract_podcast_newsletter_sponsors` | [Apify Store](https://apify.com/shoomaii/podcast-newsletter-sponsor-intel) | [`servers/podcast-newsletter-sponsors`](./servers/podcast-newsletter-sponsors/) |
| **US WARN Act Layoff Tracker** | `https://shoomaii--us-warn-act-layoffs.apify.actor/mcp` | `search_warn_layoffs` | [Apify Store](https://apify.com/shoomaii/us-warn-act-layoffs) | [`servers/us-warn-act-layoffs`](./servers/us-warn-act-layoffs/) |
| **Company Dossier & Signals API** | `https://shoomaii--company-dossier.apify.actor/mcp` | `get_company_dossier` | [Apify Store](https://apify.com/shoomaii/company-dossier) | [`servers/company-dossier`](./servers/company-dossier/) |
| **B2B SaaS Pricing Extractor & Change Monitor** | `https://shoomaii--saas-pricing-monitor.apify.actor/mcp` | `extract_saas_pricing` | [Apify Store](https://apify.com/shoomaii/saas-pricing-monitor) | [`servers/saas-pricing-monitor`](./servers/saas-pricing-monitor/) |

---

## Quick Start

### 1. Get an Apify Token (Free Tier Available)
Create or sign in to an Apify account and copy your Personal API Token from **Settings → API & Integrations** (`https://console.apify.com/settings/integrations`).

### 2. Connect via Any MCP Client (Cursor, Windsurf, VS Code, Claude Code)

Copy the full config from [`mcp-servers.json`](./mcp-servers.json), or add any single server:

```json
{
  "mcpServers": {
    "company-jobs-salaries": {
      "type": "streamable-http",
      "url": "https://shoomaii--ats-jobs-actor.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_APIFY_TOKEN"
      }
    }
  }
}
```

#### Claude Code CLI
```bash
claude mcp add --transport http company-jobs-salaries \
  https://shoomaii--ats-jobs-actor.apify.actor/mcp \
  --header "Authorization: Bearer YOUR_APIFY_TOKEN"
```

#### Unified Apify MCP Gateway (OAuth — No Token Required in Config)
Prefer one OAuth connection for all eight Actors through Apify's hosted gateway?

```
https://mcp.apify.com/?actors=shoomaii/ats-jobs-actor,shoomaii/prediction-markets-odds,shoomaii/prediction-markets-arb,shoomaii/company-hiring-intelligence,shoomaii/podcast-newsletter-sponsor-intel,shoomaii/us-warn-act-layoffs,shoomaii/company-dossier,shoomaii/saas-pricing-monitor
```

---

## What Each Server Does

### 1. Company Jobs & Salaries (`io.github.Shoomaii/ats-jobs`)
Query live open roles across **Greenhouse, Lever, Ashby, SmartRecruiters, Recruitee, and Personio** in one normalized schema: job title, seniority, ISO-2 country, location, remote flag, extracted salary range, posted date, apply link, and job description.
- **Tool:** `search_company_jobs`
- **Store:** https://apify.com/shoomaii/ats-jobs-actor

### 2. Prediction Markets Odds (`io.github.Shoomaii/prediction-markets-odds`)
Fetch live normalized probabilities, bid/ask spreads, 24h USD volume, and close dates across **Polymarket and Kalshi** with sub-second cached responses and keyword/category/volume filters.
- **Tool:** `get_prediction_market_odds`
- **Store:** https://apify.com/shoomaii/prediction-markets-odds

### 3. Prediction Markets Arbitrage & L2 Slippage (`io.github.Shoomaii/prediction-markets-arb`)
Match equivalent binary markets across **Polymarket and Kalshi**, walk live L2 orderbooks, calculate fee-adjusted net arbitrage percentage and executable VWAP slippage at $100 / $1,000 / $10,000, and flag UMA vs. CFTC resolution rule risk.
- **Tools:** `find_prediction_market_arbitrage`, `get_orderbook_depth_slippage`
- **Store:** https://apify.com/shoomaii/prediction-markets-arb

### 4. Company Hiring Intelligence & Tech Stack (`io.github.Shoomaii/company-hiring-intelligence`)
Turn company domains into Clay/RevOps-ready hiring intelligence: auto-discovers ATS boards and returns open role counts, Engineering / GTM / AI headcount mix, seniority distribution, USD salary medians, and 80+ internal tech stack tools mined from live job descriptions.
- **Tool:** `enrich_company_hiring`
- **Store:** https://apify.com/shoomaii/company-hiring-intelligence

### 5. Podcast & Newsletter Sponsor Intelligence (`io.github.Shoomaii/podcast-newsletter-sponsors`)
Pass podcast show names, Apple Podcasts URLs, RSS feeds, or Substack/Beehiiv newsletters to extract active brand sponsors, promo codes, vanity/UTM links, placement dates, and repeat-sponsor counts.
- **Tool:** `extract_podcast_newsletter_sponsors`
- **Store:** https://apify.com/shoomaii/podcast-newsletter-sponsor-intel

### 6. US WARN Act Layoff Tracker (`io.github.Shoomaii/us-warn-act-layoffs`)
Query official US state WARN Act mass-layoff and facility closure filings across **CA, NY, WA, MD, OR, WI, and IN** in one normalized schema with public stock ticker and domain mapping.
- **Tool:** `search_warn_layoffs`
- **Store:** https://apify.com/shoomaii/us-warn-act-layoffs

### 7. Company Dossier & Signals API (`io.github.Shoomaii/company-dossier`)
Assemble a complete company intelligence dossier in `<3s` per domain: site summary & key links, Cloudflare DoH MX/SPF/DMARC security grade, tech stack, Trust Center vendor, `llms.txt`, live ATS headcount, and GitHub pulse.
- **Tool:** `get_company_dossier`
- **Store:** https://apify.com/shoomaii/company-dossier

### 8. B2B SaaS Pricing Extractor & Change Monitor (`io.github.Shoomaii/saas-pricing-monitor`)
Auto-discover SaaS `/pricing` pages and deterministically extract structured plan tiers (monthly/annual price, seat vs. usage, free tier, trial, Contact Sales, and Enterprise SSO paywall).
- **Tool:** `extract_saas_pricing`
- **Store:** https://apify.com/shoomaii/saas-pricing-monitor

---

## Authentication & Billing

All servers run remotely on Apify Standby. Calls authenticate with the caller's own Apify account (Bearer token or Apify MCP OAuth) and use transparent **Pay-Per-Event** pricing directly on the [Apify Store](https://apify.com/shoomaii).

## License

Documentation and registry manifests in this repository are released under the [MIT License](./LICENSE).
