<!-- mcp-name: io.github.pecopeko/mcp-public-intel -->

# mcp-public-intel

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![MCP Registry](https://img.shields.io/badge/MCP_Registry-io.github.pecopeko%2Fmcp--public--intel-0A66C2.svg)](https://registry.modelcontextprotocol.io/?q=pecopeko)
[![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![API Keys Required: 0](https://img.shields.io/badge/API%20Keys-0-brightgreen.svg)](#available-tools)
[![MCP Protocol](https://img.shields.io/badge/MCP-JSON--RPC%202.0%20stdio-purple.svg)](#quick-start)
[![pecopeko/mcp-public-intel MCP server](https://glama.ai/mcp/servers/pecopeko/mcp-public-intel/badges/score.svg)](https://glama.ai/mcp/servers/pecopeko/mcp-public-intel)

**Zero-API-key Model Context Protocol (MCP) server for live public intelligence.**

Plug real-time **Tokyo Stock Exchange (`JPX` / `TDnet`) corporate disclosures & `.T` JPY quotes**, **SEC EDGAR financials & Form D startup raises**, **Greenhouse/Lever/Ashby engineering job boards**, **Shopify store catalogs**, **Substack public posts**, and **Podcasting 2.0 RSS transcripts** directly into **Claude Desktop, Cursor, Antigravity, Windsurf, or Codex** in 10 seconds — with **zero API keys**, **one dependency (`httpx`)**, and **<100ms stdio startup**.

---

## Quick Start (Zero API Keys)

### Claude Desktop / Cursor / Antigravity / Windsurf (`mcpServers`)

Paste into your MCP config (`claude_desktop_config.json`, `.cursor/mcp.json`, or Antigravity MCP config):

```json
{
  "mcpServers": {
    "public-intel": {
      "command": "uvx",
      "args": [
        "--from",
        "git+https://github.com/pecopeko/mcp-public-intel",
        "mcp-public-intel"
      ]
    }
  }
}
```

### Or Run via Official OCI Container (`ghcr.io`)

```json
{
  "mcpServers": {
    "public-intel": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "ghcr.io/pecopeko/mcp-public-intel:1.0.0"]
    }
  }
}
```

### Or Install Locally with `pip`

```bash
pip install "git+https://github.com/pecopeko/mcp-public-intel"
mcp-public-intel --list-tools
```

Then configure your client with `"command": "mcp-public-intel"` (or `"command": "python3", "args": ["-m", "mcp_public_intel"]`).

---

## Available Tools (7 Live Zero-Key Sources + Optional Cloud Batch PPE Connector)

| Tool | Required Inputs | Optional Inputs | Official Public Data Source |
| :--- | :--- | :--- | :--- |
| **`jpx_tokyo_stock_tdnet_disclosures`** | *(none)* | `ticker`, `limit` | Real-time Tokyo Stock Exchange (`JPX` / `TDnet`) corporate announcements classified into English catalysts + live `.T` JPY equity quotes |
| **`sec_company_financials`** | `ticker_or_cik` | `contact_email` | `data.sec.gov` submissions + ASC 606 XBRL `companyfacts` (separates annual 10-K vs quarterly 10-Q revenue, net income, operating income, cash flow, assets, cash, shares) |
| **`sec_form_d_funding_search`** | *(none)* | `query`, `date_from`, `date_to`, `limit` | `efts.sec.gov/LATEST/search-index` (recent Form D & D/A private startup funding filings) |
| **`ats_company_jobs`** | `provider`, `company_slug` | `remote_only`, `keyword`, `limit` | Public Greenhouse, Lever, and Ashby JSON APIs (normalized remote/hybrid, salary, seniority, tech tags) |
| **`shopify_store_catalog`** | `store_url` | `limit`, `collection_handle` | Public Shopify `/products.json` & `/collections.json` (variants, min/max prices, discount %, stock status) |
| **`substack_public_posts`** | `publication` | `limit`, `only_free` | Public Substack `/api/v1/archive` + `/feed` RSS to clean Markdown (honestly flags paywalled previews; zero bypass) |
| **`podcast_rss_transcripts`** | `query_or_rss_url` | `limit` | Apple iTunes Lookup/Search API + Podcasting 2.0 RSS (`<itunes:owner>` host emails + VTT/SRT/JSON transcripts) |
| **`apify_cloud_batch_extract`** | `extractor` | `actor_input`, `apify_token`, `timeout_secs` | Optional multi-domain cloud batch runner via [Apify Store PPE Actors (`pecopeko~*`)](https://apify.com/pecopeko) |

---

## Sample JSON Outputs

### 1. `sec_company_financials` (`{"ticker_or_cik": "AAPL"}`)

```json
{
  "source": "sec_edgar_xbrl",
  "status": "ok",
  "cik": "0000320193",
  "entity_name": "Apple Inc.",
  "tickers": ["AAPL"],
  "xbrl_status": "extracted",
  "annual_financials": {
    "revenue": {
      "tag": "RevenueFromContractWithCustomerExcludingAssessedTax",
      "val": 391035000000,
      "unit": "USD",
      "start": "2023-10-01",
      "end": "2024-09-28",
      "form": "10-K",
      "fp": "FY"
    },
    "net_income": { "tag": "NetIncomeLoss", "val": 93736000000, "unit": "USD", "form": "10-K" },
    "shares_outstanding": { "tag": "EntityCommonStockSharesOutstanding", "val": 15115823000, "unit": "shares", "form": "10-K" }
  },
  "quarterly_financials": {
    "revenue": { "tag": "RevenueFromContractWithCustomerExcludingAssessedTax", "val": 94930000000, "unit": "USD", "form": "10-Q", "period_days": 90 }
  }
}
```

### 2. `sec_form_d_funding_search` (`{"query": "robotics", "limit": 5}`)

```json
{
  "source": "sec_efts_form_d",
  "status": "ok",
  "total_hits": 412,
  "returned_count": 5,
  "filings": [
    {
      "entity_name": "Acme Robotics Inc.",
      "form": "D",
      "file_date": "2026-11-18",
      "primary_cik": "0002012345",
      "biz_locations": ["San Francisco, CA"],
      "edgar_url": "https://www.sec.gov/Archives/edgar/data/2012345/000201234526000001/primary_doc.xml"
    }
  ]
}
```

### 3. `ats_company_jobs` (`{"provider": "ashby", "company_slug": "linear", "remote_only": true, "limit": 5}`)

```json
{
  "source": "ats_ashby",
  "status": "ok",
  "provider": "ashby",
  "company_slug": "linear",
  "total_board_jobs": 24,
  "matched_count": 18,
  "summary": { "remote_count": 18, "hybrid_count": 4, "onsite_count": 2, "with_salary_count": 14 },
  "jobs": [
    {
      "title": "Senior Staff Backend Engineer",
      "workplace_type": "remote",
      "is_remote": true,
      "seniority": "staff",
      "salary": { "currency": "USD", "min": 210000, "max": 250000, "interval": "yearly" },
      "tech_tags": ["TypeScript", "PostgreSQL", "GraphQL", "Node.js"]
    }
  ]
}
```

### 4. `shopify_store_catalog` (`{"store_url": "allbirds.com", "limit": 10}`)

```json
{
  "source": "shopify_public_json",
  "status": "ok",
  "store_url": "https://www.allbirds.com",
  "returned_products": 10,
  "collections_count": 25,
  "products": [
    {
      "title": "Men's Wool Runners",
      "price_min": 78.0,
      "price_max": 98.0,
      "compare_at_price_max": 110.0,
      "max_discount_pct": 29.09,
      "in_stock": true,
      "available_variant_count": 6
    }
  ]
}
```

### 5. `substack_public_posts` (`{"publication": "pragmaticengineer", "limit": 5}`)

```json
{
  "source": "substack_public",
  "status": "ok",
  "publication_url": "https://newsletter.pragmaticengineer.com",
  "free_count": 2,
  "paywalled_preview_count": 3,
  "posts": [
    {
      "title": "Inside Engineering Scaling",
      "audience": "only_paid",
      "is_paywalled": true,
      "paywall_status": "paid_preview_only",
      "body_markdown": "Public preview text only..."
    }
  ]
}
```

### 6. `podcast_rss_transcripts` (`{"query_or_rss_url": "https://feeds.example.com/show.xml", "limit": 3}`)

```json
{
  "source": "podcast_rss_podcasting20",
  "status": "ok",
  "show": {
    "podcast_title": "Builders Weekly",
    "owner_name": "Jane Host",
    "owner_email": "host@buildersweekly.example",
    "categories": ["Technology"]
  },
  "episodes_with_transcript": 3,
  "episodes": [
    {
      "episode_title": "Ep. 42 — MCP in Production",
      "transcript_status": "extracted",
      "transcript": {
        "format": "vtt",
        "segment_count": 148,
        "full_transcript": "Welcome back to Builders Weekly..."
      }
    }
  ]
}
```

---

## Need Scheduled Batch Runs / Cloud Datasets?

`mcp-public-intel` is designed for interactive, ad-hoc AI agent calls from your local machine.

When you need **scheduled cron runs, multi-company / multi-store batch extraction, webhooks, CSV/Parquet/JSON dataset exports, or managed cloud execution**, use our production **Apify Store Pay-Per-Event (PPE) Actors** (pay fractions of a cent per extracted record, zero infrastructure):

- **Apify Store Profile**: https://apify.com/pecopeko
  - [`tokyo-stock-exchange-jpx-tdnet-english-extractor`](https://apify.com/pecopeko/tokyo-stock-exchange-jpx-tdnet-english-extractor) — Real-time Tokyo Stock Exchange (`JPX`/`TDnet`) English corporate filings, `.T` JPY quotes, TOPIX500 Arrowhead tick sizes, 34-tier `S-taka`/`S-yasu` price limits & BOJ releases (`$0.003`/record)
  - [`sec-edgar-8-k-10-k-item-extractor`](https://apify.com/pecopeko/sec-edgar-8-k-10-k-item-extractor) — Batch SEC EDGAR 8-K/10-K/10-Q/Form D extraction with ASC 606 XBRL (`$0.004`/filing)
  - [`shopify-public-catalog-feed-extractor`](https://apify.com/pecopeko/shopify-public-catalog-feed-extractor) — Multi-store Shopify catalog, SKU, price-drop & collection monitoring (`$0.001`/product)
  - [`ats-greenhouse-lever-ashby-jobs-extractor`](https://apify.com/pecopeko/ats-greenhouse-lever-ashby-jobs-extractor) — Multi-company Greenhouse, Lever & Ashby ATS job board cloud aggregator (`$0.001`/job)
  - [`substack-newsletter-posts-extractor`](https://apify.com/pecopeko/substack-newsletter-posts-extractor) — Multi-publication Substack archive & RAG Markdown dataset pipeline (`$0.001`/post)
  - [`podcast-rss-transcript-extractor`](https://apify.com/pecopeko/podcast-rss-transcript-extractor) — Bulk Apple Podcasts reviews, `<itunes:owner>` lead discovery & Podcasting 2.0 transcripts (`$0.002`/episode)
- **Quantitative Python SDKs (`itch.io`)**:
  - **[Tokyo Stock Exchange (TSE) Quant Microstructure Toolkit — Python 3.11 SDK (`$19 USD`)](https://pecopeko.itch.io/tse-quant-microstructure-kit)** — Zero-dependency `Decimal` tick ladder, `S-taka`/`S-yasu` pinned-bar detectors & `15:30` Closing Itayose backtest primitives.

### Support Open-Source Maintenance

If `mcp-public-intel` saves you API fees or engineering hours, consider sponsoring ongoing maintenance via **[GitHub Sponsors](https://github.com/sponsors/pecopeko)**!

---

## Security & Fair-Access Guarantees

- **Strict SSRF Protection**: Blocks `localhost`, `.local`/`.internal` domains, cloud metadata IPs (`169.254.169.254`), RFC1918 private ranges, IPv6 loopback/link-local, IPv4-mapped private IPs, embedded URL credentials, and non-HTTP(S) schemes — and re-validates every HTTP redirect hop.
- **XXE / Billion-Laughs XML Guard**: Rejects `<!DOCTYPE` and `<!ENTITY` declarations in RSS feeds before XML parsing.
- **Polite Fair Access**: Identifies itself cleanly via `User-Agent`, rate-limits SEC EDGAR calls (`<= 8 req/sec`), and honors HTTP `429`/`503` `Retry-After` backoff.
- **Zero Bypass Policy**: Never bypasses CAPTCHAs, login walls, or paywalls. Paywalled Substack posts are transparently tagged `paywall_status: "paid_preview_only"`.

## License

MIT — see [LICENSE](LICENSE).
