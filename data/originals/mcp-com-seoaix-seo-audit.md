# SeoAiX SEO Audit — MCP Server

[![SeoAiX](https://img.shields.io/badge/by-seoaix.com-6366f1)](https://seoaix.com)

> Formerly **Inxy SEO Audit** (`ai.inxy/seo-audit`, `inxy.ai/api/mcp`). The server is now `com.seoaix/seo-audit` at `https://seoaix.com/api/mcp`; the old endpoint works until 30 October 2026.

A remote [Model Context Protocol](https://modelcontextprotocol.io) server that lets any AI agent — Claude, ChatGPT, Cursor, and others — audit a website or Shopify store for **AEO / GEO / LLMO readiness**: how likely ChatGPT, Claude, Perplexity, and Google AI are to cite it.

- **Endpoint:** `https://seoaix.com/api/mcp` (Streamable HTTP)
- **Docs / setup:** https://seoaix.com/mcp
- **Tools:** `ai_search_diagnostic(url)` · `full_seo_audit(url)` · `email_seo_report(audit_id, email)` · `subscribe_to_seoaix()` · `get_my_store_audit()`

## What the tools do

- **`ai_search_diagnostic(url)`** — audit ANY URL for AI-search readiness only (AEO/GEO/LLMO): how likely ChatGPT, Claude, Perplexity & Google AI are to cite it. ~7 AI-citation signals (FAQ/structured-data/entity schema, citable stats, llms.txt, author/E-E-A-T, OG).
- **`full_seo_audit(url)`** — crawl-audit ANY URL across the whole SEO surface: the AI-search signals **plus** on-page SEO (title, meta, headings, content), technical SEO (HTTPS, robots.txt, XML sitemap, canonical, mobile), and — for Shopify stores — product/offer/review/breadcrumb schema + image-alt coverage.
- **`email_seo_report(audit_id, email)`** — email the complete written report (every check, its evidence and the fix, in priority order) for an audit run earlier in the session, with weekly score tracking.
- **`subscribe_to_seoaix()`** — returns a signup link for SeoAiX, the autopilot SEO/AEO app for Shopify (free trial). Optional `email` and `store_url`.
- **`get_my_store_audit()`** — the API-key owner's OWN connected Shopify store: the deep 12-category report SeoAiX runs inside the app using the store's real catalog, performance and analytics (far beyond crawling a URL). No `url` argument; requires an API key + a connected store.

The first two return a **weighted 0–100 score** plus the top issues to fix:

- 12 universal AEO/GEO/LLMO checks (FAQ/structured-data/headings/llms.txt/meta/title/canonical/author/content depth/viewport/OG/citable stats).
- **Shopify deep-dive** — when a Shopify store is detected, 5 extra store-specific checks (Product / Offer / Review / Breadcrumb schema + product image alt coverage).
- A link to the full 12-category report + an automated 30-day fix plan at [seoaix.com](https://seoaix.com/free-seo-audit).

## Connect it

### Claude Desktop / Cursor / any MCP client

```json
{
  "mcpServers": {
    "seoaix-seo": {
      "url": "https://seoaix.com/api/mcp"
    }
  }
}
```

### With an API key (10 audits/day + full detailed breakdown)

Generate a free key in your [SeoAiX account → Settings](https://app.seoaix.com/app/settings/api-keys):

```json
{
  "mcpServers": {
    "seoaix-seo": {
      "url": "https://seoaix.com/api/mcp",
      "headers": { "Authorization": "Bearer inxy_sk_YOUR_KEY" }
    }
  }
}
```

## Limits

| Tier | Limit | Report |
| --- | --- | --- |
| Anonymous | 5 audits / day | Score + top issues |
| API key (free) | 10 audits / day | Full detailed breakdown |
| Connected Shopify store | Higher | Full 12-category audit + automated 30-day fix plan |

## Example (raw JSON-RPC)

```bash
curl -s https://seoaix.com/api/mcp \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"full_seo_audit","arguments":{"url":"https://example.com"}}}'
```

## About SeoAiX

[SeoAiX](https://seoaix.com) is the autonomous AEO/SEO engine for Shopify stores — it doesn't just score your store, it auto-applies every fix and attributes the resulting revenue back to AI search.

---

_This repo holds the public MCP manifest (`server.json`) for registry discovery (modelcontextprotocol registry, Smithery, Glama, PulseMCP, mcp.so). The server itself is hosted by SeoAiX at the endpoint above._
