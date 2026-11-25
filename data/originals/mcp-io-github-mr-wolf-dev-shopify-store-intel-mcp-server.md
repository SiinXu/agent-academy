# Shopify Store Intelligence, Apps & Catalog + MCP

[![Glama MCP Server](https://glama.ai/mcp/servers/Mr-Wolf-Dev/shopify-store-intel-mcp-server/badges/score.svg)](https://glama.ai/mcp/servers/Mr-Wolf-Dev/shopify-store-intel-mcp-server)

**Keyless, HTTP-only (< 512 MB RAM) Apify Actor & Standby Streamable HTTP MCP Server** for Shopify store intelligence, app/pixel stack detection, contact extraction, and product catalog pricing analysis.

- **Apify Store:** `https://apify.com/mr.wolf/shopify-store-intel-mcp-server`
- **Standby MCP Endpoint:** `https://mr-wolf-1--shopify-store-intel-mcp-server.apify.actor/mcp`
- **Source Code:** `https://github.com/Mr-Wolf-Dev/shopify-store-intel-mcp-server`

## What It Extracts

- **Store & Theme Metadata:** Confirms Shopify platform, `.myshopify.com` domain, active theme name/ID, currency, and country code.
- **28+ Apps & Marketing Pixels:** Klaviyo, Omnisend, Postscript, Attentive, Privy, Judge.me, Yotpo, Loox, Okendo, Stamped.io, Gorgias, Zendesk, Intercom, Recharge, Bold Commerce, Smile.io, Rebuy, Loop Returns, AfterShip, Triple Whale, Northbeam, Elevar, GTM/GA4, Hotjar, Microsoft Clarity, Meta Pixel, TikTok Pixel, Pinterest Tag.
- **Payments & BNPL:** Shop Pay, Apple Pay, Google Pay, PayPal, Klarna, Afterpay, Affirm, Sezzle.
- **Contacts & Socials:** Public contact emails and social profile URLs (Instagram, TikTok, Facebook, X/Twitter, YouTube, LinkedIn, Pinterest).
- **Catalog & Pricing Stats:** Normalized `/products.json` and `/collections.json` with min/max/avg price, sale count, stock availability, top vendors, and top product types (with graceful fallback when a store rate-limits or disables `/products.json`).

## MCP Tools (Streamable HTTP)

- `analyze_shopify_store` — Full store stack, theme, apps, payments, contacts, and catalog summary.
- `extract_shopify_products` — Extract and filter `/products.json` by keyword, vendor, product type, price range, and stock.
- `compare_shopify_stores` — Compare up to 5 Shopify stores side-by-side.

### Connect via MCP Client

```json
{
  "mcpServers": {
    "shopify-store-intel": {
      "url": "https://mr-wolf-1--shopify-store-intel-mcp-server.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_APIFY_API_TOKEN"
      }
    }
  }
}
```

---

## Quick REST API Call

```bash
curl -X POST "https://api.apify.com/v2/acts/mr.wolf~shopify-store-intel-mcp-server/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d {}
```

## Related HTTP-Only MCP Actors by Mr. Wolf

All Actors run HTTP-only (< 512 MB RAM, zero headless browsers) with Pay-Per-Event pricing and Streamable HTTP Standby MCP endpoints:

| Actor | Use Case | Apify Store | Source |
| --- | --- | --- | --- |
| **Global KYB Entity, LEI & EU VAT** | GLEIF LEI parent trees, EU VIES VAT, French SIRENE | [Apify Store](https://apify.com/mr.wolf/global-kyb-entity-mcp-server) | [GitHub](https://github.com/Mr-Wolf-Dev/global-kyb-entity-mcp-server) |
| **FDA Recalls, 510(k) & Clinical Trials** | openFDA recalls, 510(k) clearances, ClinicalTrials.gov v2 | [Apify Store](https://apify.com/mr.wolf/pharma-regulatory-mcp-server) | [GitHub](https://github.com/Mr-Wolf-Dev/pharma-regulatory-mcp-server) |
| **SEC EDGAR Filings & XBRL Financials** | 10-K, 10-Q, 8-K, Form 4 & US-GAAP XBRL metrics | [Apify Store](https://apify.com/mr.wolf/sec-edgar-mcp-server) | [GitHub](https://github.com/Mr-Wolf-Dev/sec-edgar-mcp-server) |
| **Tech & Startup Jobs (4 ATS APIs)** | Greenhouse, Lever, Ashby, SmartRecruiters + hiring signals | [Apify Store](https://apify.com/mr.wolf/ats-jobs-mcp-server) | [GitHub](https://github.com/Mr-Wolf-Dev/ats-jobs-mcp-server) |
| **B2B Domain Intel & Email Verifier** | DNS/MX/SPF/DMARC deliverability, tech stack & contacts | [Apify Store](https://apify.com/mr.wolf/domain-intel-mcp-server) | [GitHub](https://github.com/Mr-Wolf-Dev/domain-intel-mcp-server) |
| **EU Public Tenders & Grants (TED Europa)** | European procurement notices by CPV, country & budget | [Apify Store](https://apify.com/mr.wolf/eu-tenders-mcp-server) | [GitHub](https://github.com/Mr-Wolf-Dev/eu-tenders-mcp-server) |
| **SAM.gov US Federal Contracts** | Keyless US federal RFPs, NAICS & contracting officers | [Apify Store](https://apify.com/mr.wolf/us-sam-tenders-mcp-server) | [GitHub](https://github.com/Mr-Wolf-Dev/us-sam-tenders-mcp-server) |
