# DirectAPI Labs — B2B Data APIs, Remote MCP Servers & n8n Workflows

Fast, proxy-free **Streamable HTTP Model Context Protocol (MCP) Servers**, real-time **Standby REST APIs**, **ready-to-import `n8n` workflows**, and lightweight `256 MB` Apify Actors — built for AI coding agents (Cursor, Claude Desktop, Windsurf), automation engineers, and outbound/research pipelines.

- **Apify Store Profile:** [apify.com/whthpnd](https://apify.com/whthpnd)
- **Zero Proxies Required:** Built exclusively on native APIs, DNS/RDAP, SEC EDGAR XBRL, EU VIES VAT, GLEIF LEI, and OFAC datasets.
- **Pay-Per-Event Pricing:** Ultra-low per-call pricing (`$0.002–$0.0035`) with automatic tier discounts up to Gold/Platinum/Diamond.

---

## Remote MCP Servers (Streamable HTTP)

<!-- AUTO-MCP-TABLE:START -->
Every server below speaks standard **MCP Streamable HTTP JSON-RPC 2.0** (`initialize`, `tools/list`, `tools/call`) at `/mcp` and authenticates with your Apify API token (`Authorization: Bearer YOUR_APIFY_TOKEN`).

| MCP Server | Remote `/mcp` Endpoint | Tools | Store Status |
|---|---|---|---|
| **B2B Company, EU VAT/KYB & Fraud Risk** | `https://whthpnd--b2b-company-kyb-risk-api.apify.actor/mcp` | `enrich_b2b_full`, `enrich_company_profile`, `assess_email_domain_risk`, `verify_kyb_vat_sanctions` | [Live on Apify](https://apify.com/whthpnd/b2b-company-kyb-risk-api) |
| **Website SEO, `llms.txt` (GEO) & Security Audit** | `https://whthpnd--seo-geo-security-audit-api.apify.actor/mcp` | `audit_website_full`, `check_ai_geo_readiness`, `audit_ssl_and_security_headers` | [Live on Apify](https://apify.com/whthpnd/seo-geo-security-audit-api) |
| **Domain, Brand & Handle Availability** | `https://whthpnd--domain-brand-availability-api.apify.actor/mcp` | `check_brand_launch_availability`, `check_domains_only` | [Live on Apify](https://apify.com/whthpnd/domain-brand-availability-api) |
| **Apple App Store Reviews & Developer Leads** | `https://whthpnd--ios-app-store-leads-reviews-api.apify.actor/mcp` | `search_ios_apps_and_developer_leads`, `get_ios_app_details`, `get_ios_app_reviews` | [Live on Apify](https://apify.com/whthpnd/ios-app-store-leads-reviews-api) |
| **SEC Company Financials (XBRL) & Form 4 Insiders** | `https://whthpnd--sec-financials-insider-trading-api.apify.actor/mcp` | `get_sec_company_full`, `get_sec_xbrl_financials`, `get_sec_insider_trades` | [Live on Apify](https://apify.com/whthpnd/sec-financials-insider-trading-api) |
| **Google Play Apps, `1–2★` Reviews & Dev Emails** | `https://whthpnd--google-play-leads-reviews-api.apify.actor/mcp` | `search_google_play_apps_and_leads`, `get_google_play_app_details`, `get_google_play_app_reviews` | [Live on Apify](https://apify.com/whthpnd/google-play-leads-reviews-api) |
| **Shopify Store Leads, Catalogs & Apps** | `https://whthpnd--shopify-store-leads-products-api.apify.actor/mcp` | `analyze_shopify_store_full`, `get_shopify_products`, `extract_shopify_store_contacts` | [Live on Apify](https://apify.com/whthpnd/shopify-store-leads-products-api) |
| **Telegram Public Channels, Posts & Search** | `https://whthpnd--telegram-public-channels-api.apify.actor/mcp` | `get_telegram_channel_info_and_posts`, `search_telegram_channel_posts`, `compare_telegram_channels` | [Live on Apify](https://apify.com/whthpnd/telegram-public-channels-api) |
| **US Federal Contracts & Grants (`USASpending`)** | `https://whthpnd--us-federal-contracts-grants-api.apify.actor/mcp` | `search_us_federal_contracts`, `search_us_federal_grants`, `get_us_contractor_awards_summary` | [Live on Apify](https://apify.com/whthpnd/us-federal-contracts-grants-api) |
| **CVE, CISA KEV & Package Security (`OSV` + `EPSS`)** | `https://whthpnd--cve-exploit-package-security-api.apify.actor/mcp` | `audit_package_vulnerabilities`, `lookup_cve_exploit_intel`, `list_actively_exploited_kevs` | [Live on Apify](https://apify.com/whthpnd/cve-exploit-package-security-api) |
<!-- AUTO-MCP-TABLE:END -->

### Glama Connector Badges
[![B2B Company KYB Risk MCP connector](https://glama.ai/mcp/connectors/actor.apify.whthpnd--b2b-company-kyb-risk-api/direct-api-labs-b2b-company-eu-vatkyb-and-fraud-risk/badges/score.svg)](https://glama.ai/mcp/connectors/actor.apify.whthpnd--b2b-company-kyb-risk-api/direct-api-labs-b2b-company-eu-vatkyb-and-fraud-risk)
[![Website SEO, llms.txt & Security Audit MCP connector](https://glama.ai/mcp/connectors/actor.apify.whthpnd--seo-geo-security-audit-api/direct-api-labs-website-seo-llmstxt-and-security-audit/badges/score.svg)](https://glama.ai/mcp/connectors/actor.apify.whthpnd--seo-geo-security-audit-api/direct-api-labs-website-seo-llmstxt-and-security-audit)
[![Domain & Brand Availability MCP connector](https://glama.ai/mcp/connectors/actor.apify.whthpnd--domain-brand-availability-api/direct-api-labs-domain-brand-and-handle-availability/badges/score.svg)](https://glama.ai/mcp/connectors/actor.apify.whthpnd--domain-brand-availability-api/direct-api-labs-domain-brand-and-handle-availability)
[![Apple App Store Leads & Reviews MCP connector](https://glama.ai/mcp/connectors/actor.apify.whthpnd--ios-app-store-leads-reviews-api/direct-api-labs-apple-app-store-leads-and-reviews/badges/score.svg)](https://glama.ai/mcp/connectors/actor.apify.whthpnd--ios-app-store-leads-reviews-api/direct-api-labs-apple-app-store-leads-and-reviews)
[![SEC XBRL Financials & Form 4 Insiders MCP connector](https://glama.ai/mcp/connectors/actor.apify.whthpnd--sec-financials-insider-trading-api/direct-api-labs-sec-xbrl-financials-and-form-4-insiders/badges/score.svg)](https://glama.ai/mcp/connectors/actor.apify.whthpnd--sec-financials-insider-trading-api/direct-api-labs-sec-xbrl-financials-and-form-4-insiders)

---

## Cursor / Claude / Windsurf Config (`mcp.json`)

<!-- AUTO-MCP-CONFIG:START -->
Copy [`mcp-configs/cursor-all.json`](./mcp-configs/cursor-all.json) (or pick the servers you need) and replace `YOUR_APIFY_TOKEN`:

```json
{
  "mcpServers": {
    "b2b-company-kyb-risk": {
      "url": "https://whthpnd--b2b-company-kyb-risk-api.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_APIFY_TOKEN"
      }
    },
    "seo-geo-security-audit": {
      "url": "https://whthpnd--seo-geo-security-audit-api.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_APIFY_TOKEN"
      }
    },
    "domain-brand-availability": {
      "url": "https://whthpnd--domain-brand-availability-api.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_APIFY_TOKEN"
      }
    },
    "ios-appstore-leads-reviews": {
      "url": "https://whthpnd--ios-app-store-leads-reviews-api.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_APIFY_TOKEN"
      }
    },
    "sec-financials-insiders": {
      "url": "https://whthpnd--sec-financials-insider-trading-api.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_APIFY_TOKEN"
      }
    },
    "google-play-leads-reviews": {
      "url": "https://whthpnd--google-play-leads-reviews-api.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_APIFY_TOKEN"
      }
    },
    "shopify-store-leads-products": {
      "url": "https://whthpnd--shopify-store-leads-products-api.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_APIFY_TOKEN"
      }
    },
    "telegram-public-channels": {
      "url": "https://whthpnd--telegram-public-channels-api.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_APIFY_TOKEN"
      }
    },
    "us-federal-contracts-grants": {
      "url": "https://whthpnd--us-federal-contracts-grants-api.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_APIFY_TOKEN"
      }
    },
    "cve-exploit-package-security": {
      "url": "https://whthpnd--cve-exploit-package-security-api.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_APIFY_TOKEN"
      }
    }
  }
}
```
<!-- AUTO-MCP-CONFIG:END -->

---

## Ready-to-Import n8n Workflows

Import any JSON from [`n8n-workflows/`](./n8n-workflows/) directly into **n8n** (`Workflows → Import from File`) and configure Header Auth (`Authorization: Bearer YOUR_APIFY_TOKEN`):

1. **[`b2b-lead-enrichment-eu-vat-risk.json`](./n8n-workflows/b2b-lead-enrichment-eu-vat-risk.json)** — Inbound signup/lead Webhook → Enrich company + EU Impressum + VIES VAT + OFAC + Fraud Score → Route verified `riskVerdict == "allow"` leads cleanly.
2. **[`website-seo-llms-txt-audit.json`](./n8n-workflows/website-seo-llms-txt-audit.json)** — Audit target websites for On-Page SEO, `/llms.txt`, `GPTBot`/`ClaudeBot` permissions, and TLS expiry → Flag sites below score threshold for agency outreach.
3. **[`sec-form4-insider-alerts.json`](./n8n-workflows/sec-form4-insider-alerts.json)** — Daily scheduled monitor fetching normalized `10-K`/`10-Q` XBRL financials and parsed Form 4 insider buys/sales for `NVDA`, `AAPL`, and `MSFT`.

---

## Quickstart (`Python` & `cURL`)

Run [`examples/quickstart.py`](./examples/quickstart.py) (zero external dependencies — stdlib only) or [`examples/curl_examples.sh`](./examples/curl_examples.sh):

```bash
export APIFY_TOKEN="YOUR_APIFY_TOKEN"
python3 examples/quickstart.py
```

Direct REST endpoint examples:

```bash
# Clearbit + Impressum + EU VAT + OFAC + Fraud Risk check
curl -s -H "Authorization: Bearer $APIFY_TOKEN" \
  "https://whthpnd--b2b-company-kyb-risk-api.apify.actor/v1/full?target=sipgate.de"

# Instant signup email/domain fraud risk (<250ms)
curl -s -H "Authorization: Bearer $APIFY_TOKEN" \
  "https://whthpnd--b2b-company-kyb-risk-api.apify.actor/v1/risk?target=test@mailinator.com"

# Website SEO + llms.txt AI search + SSL/Security headers
curl -s -H "Authorization: Bearer $APIFY_TOKEN" \
  "https://whthpnd--seo-geo-security-audit-api.apify.actor/v1/audit?domain=stripe.com"

# SEC XBRL 10-K/10-Q + Form 4 Insider Trades
curl -s -H "Authorization: Bearer $APIFY_TOKEN" \
  "https://whthpnd--sec-financials-insider-trading-api.apify.actor/v1/full?ticker=NVDA"
```

---

## Full DirectAPI Labs Actor Catalog (Apify Store)

<!-- AUTO-CATALOG:START -->
| Category | Actor | Apify Store Link |
|---|---|---|
| **B2B Intelligence / KYB** | `b2b-company-kyb-risk-api` | [whthpnd/b2b-company-kyb-risk-api](https://apify.com/whthpnd/b2b-company-kyb-risk-api) |
| **SEO / GEO / Security** | `seo-geo-security-audit-api` | [whthpnd/seo-geo-security-audit-api](https://apify.com/whthpnd/seo-geo-security-audit-api) |
| **Brand & Domains** | `domain-brand-availability-api` | [whthpnd/domain-brand-availability-api](https://apify.com/whthpnd/domain-brand-availability-api) |
| **Mobile & ASO Leads** | `ios-app-store-leads-reviews-api` | [whthpnd/ios-app-store-leads-reviews-api](https://apify.com/whthpnd/ios-app-store-leads-reviews-api) |
| **Public Markets & SEC** | `sec-financials-insider-trading-api` | [whthpnd/sec-financials-insider-trading-api](https://apify.com/whthpnd/sec-financials-insider-trading-api) |
| **Android & Play Leads** | `google-play-leads-reviews-api` | [whthpnd/google-play-leads-reviews-api](https://apify.com/whthpnd/google-play-leads-reviews-api) |
| **E-Commerce / Shopify** | `shopify-store-leads-products-api` | [whthpnd/shopify-store-leads-products-api](https://apify.com/whthpnd/shopify-store-leads-products-api) |
| **Telegram Intelligence** | `telegram-public-channels-api` | [whthpnd/telegram-public-channels-api](https://apify.com/whthpnd/telegram-public-channels-api) |
| **US Gov Contracts & Grants** | `us-federal-contracts-grants-api` | [whthpnd/us-federal-contracts-grants-api](https://apify.com/whthpnd/us-federal-contracts-grants-api) |
| **AppSec / CVE & EPSS** | `cve-exploit-package-security-api` | [whthpnd/cve-exploit-package-security-api](https://apify.com/whthpnd/cve-exploit-package-security-api) |
| **Podcast Host Emails** | `apple-podcasts-leads-scraper` | [whthpnd/apple-podcasts-leads-scraper](https://apify.com/whthpnd/apple-podcasts-leads-scraper) |
| **Tech Career Boards** | `ats-jobs-greenhouse-lever-ashby` | [whthpnd/ats-jobs-greenhouse-lever-ashby](https://apify.com/whthpnd/ats-jobs-greenhouse-lever-ashby) |
| **Central EU Ads** | `bazos-classifieds-scraper` | [whthpnd/bazos-classifieds-scraper](https://apify.com/whthpnd/bazos-classifieds-scraper) |
| **Extension Leads** | `chrome-web-store-leads-scraper` | [whthpnd/chrome-web-store-leads-scraper](https://apify.com/whthpnd/chrome-web-store-leads-scraper) |
| **Live Music Tickets** | `dice-fm-events-scraper` | [whthpnd/dice-fm-events-scraper](https://apify.com/whthpnd/dice-fm-events-scraper) |
| **Community / RAG** | `discourse-forums-threads-scraper` | [whthpnd/discourse-forums-threads-scraper](https://apify.com/whthpnd/discourse-forums-threads-scraper) |
| **US Trucking Leads** | `fmcsa-usdot-trucking-leads-scraper` | [whthpnd/fmcsa-usdot-trucking-leads-scraper](https://apify.com/whthpnd/fmcsa-usdot-trucking-leads-scraper) |
| **Tech News / HN** | `hacker-news-fast-scraper` | [whthpnd/hacker-news-fast-scraper](https://apify.com/whthpnd/hacker-news-fast-scraper) |
| **Remote Jobs** | `himalayas-remote-jobs-scraper` | [whthpnd/himalayas-remote-jobs-scraper](https://apify.com/whthpnd/himalayas-remote-jobs-scraper) |
| **Events & Organizers** | `luma-events-organizers-scraper` | [whthpnd/luma-events-organizers-scraper](https://apify.com/whthpnd/luma-events-organizers-scraper) |
| **US Healthcare Leads** | `npi-healthcare-doctors-leads-scraper` | [whthpnd/npi-healthcare-doctors-leads-scraper](https://apify.com/whthpnd/npi-healthcare-doctors-leads-scraper) |
| **Prediction Markets** | `polymarket-kalshi-prediction-markets` | [whthpnd/polymarket-kalshi-prediction-markets](https://apify.com/whthpnd/polymarket-kalshi-prediction-markets) |
| **Jobs Multi-Feed** | `remote-jobs-multi-aggregator` | [whthpnd/remote-jobs-multi-aggregator](https://apify.com/whthpnd/remote-jobs-multi-aggregator) |
| **Electronic Events** | `resident-advisor-events-scraper` | [whthpnd/resident-advisor-events-scraper](https://apify.com/whthpnd/resident-advisor-events-scraper) |
| **Venture / Form D** | `sec-form-d-funded-startups-scraper` | [whthpnd/sec-form-d-funded-startups-scraper](https://apify.com/whthpnd/sec-form-d-funded-startups-scraper) |
| **Newsletter Leads** | `substack-newsletters-posts-scraper` | [whthpnd/substack-newsletters-posts-scraper](https://apify.com/whthpnd/substack-newsletters-posts-scraper) |
| **Gov Tenders (EU TED)** | `ted-europa-eu-tenders-scraper` | [whthpnd/ted-europa-eu-tenders-scraper](https://apify.com/whthpnd/ted-europa-eu-tenders-scraper) |
| **Gov Tenders (UK/FR)** | `uk-france-public-tenders-scraper` | [whthpnd/uk-france-public-tenders-scraper](https://apify.com/whthpnd/uk-france-public-tenders-scraper) |
| **Remote Tech Jobs** | `weworkremotely-remote-jobs-scraper` | [whthpnd/weworkremotely-remote-jobs-scraper](https://apify.com/whthpnd/weworkremotely-remote-jobs-scraper) |
<!-- AUTO-CATALOG:END -->

---

## License

MIT © 2026 [DirectAPI Labs](https://apify.com/whthpnd)
