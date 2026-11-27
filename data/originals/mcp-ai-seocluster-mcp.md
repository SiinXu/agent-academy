# SEOcluster.ai — Hosted SEO MCP Server for Google Search Console

[![SEOcluster.ai MCP connector](https://glama.ai/mcp/connectors/ai.seocluster/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/ai.seocluster/mcp)

Connect **Claude Code**, **OpenAI Codex**, **Cursor**, **Google Antigravity**, and **Windsurf** directly to live **Google Search Console** page ownership, keyword cannibalization checks, technical & AI-Readiness Site Audits, grounded SEO briefs, fail-closed Page Edits, a 50-rule Anti-AI prose + GEO citation gate, and 28-day post-deploy lift tracking.

- **Hosted Streamable HTTP Endpoint:** `https://seocluster.ai/api/mcp` *(zero local npm/Python packages required)*
- **Full Documentation & Prompt Playbook:** [https://seocluster.ai/seo-mcp-server](https://seocluster.ai/seo-mcp-server)
- **Website:** [https://seocluster.ai](https://seocluster.ai)
- **Pricing:** Free plan available ($0/month, no credit card required) · Essential ($29/month) · Pro ($99/month)

---

## Why SEOcluster MCP Instead of Raw Search Console Scripts?

Raw Search Console MCP scripts dump thousands of ungrouped query rows into your prompt window, causing coding agents to hallucinate intent or spin up duplicate blog posts that cannibalize commercial pages.

SEOcluster sits between Google Search Console and your repository as a deterministic safety layer:
- **Compact (<6 KB) Page Ownership Map:** Pre-groups queries by search intent and flags `wrong_owner` and `split_ownership` conflicts.
- **Live GSC Timeframes, Top Queries & 301 Checks:** Supports `window_days` (e.g. `28` or `7` days with live `top_queries`), post-migration `start_date`, and `check_live_redirects=true` so already-redirected URLs are never misreported as active cannibalization.
- **Technical & AI-Readiness Site Audits:** Inspects saved crawl issues, AI bot access, structured data, sitemap diffs, and GSC orphan pages with fail-closed authority labels (`inspect_and_verify` vs `review_required`).
- **Fail-Closed Page Edits:** Marks suggested edits `ready`, `review_required`, or `withheld` — holding 301 redirects, canonicals, and unverified claims for human approval.
- **Zero-Credit Anti-AI Prose & GEO Gate:** 50-rule deterministic prose linter + answer-first AI citation readiness check.
- **28-Day Post-Deploy Outcome Ledger:** Freezes a live Search Console baseline on deploy and verifies click/impression lift 4 weeks later.

---

## 30-Second Setup

1. Sign in free at [seocluster.ai](https://seocluster.ai), connect Google Search Console (read-only), and generate a personal `sc_live_...` API key on [**Integrations**](https://seocluster.ai/integrations).
2. Add `https://seocluster.ai/api/mcp` to your editor:

### OpenAI Codex (Desktop App & CLI)
```bash
mkdir -p ~/.codex && touch ~/.codex/config.toml && awk '/^\[mcp_servers\.seocluster(\]|\.)/{s=1;next} /^\[/{s=0} !s' ~/.codex/config.toml > ~/.codex/config.toml.tmp && mv ~/.codex/config.toml.tmp ~/.codex/config.toml && chmod 600 ~/.codex/config.toml && printf '\n[mcp_servers.seocluster]\nurl = "https://seocluster.ai/api/mcp"\nhttp_headers = { Authorization = "Bearer sc_live_your_key_here" }\n' >> ~/.codex/config.toml
```

### Claude Code CLI
```bash
claude mcp add --transport http --scope user seocluster https://seocluster.ai/api/mcp --header "Authorization: Bearer sc_live_your_key_here"
```

### Cursor & Google Antigravity (`~/.cursor/mcp.json` or `~/.gemini/config/mcp_config.json`)
```json
{
  "mcpServers": {
    "seocluster": {
      "url": "https://seocluster.ai/api/mcp",
      "headers": {
        "Authorization": "Bearer sc_live_your_key_here"
      }
    }
  }
}
```

### Windsurf (`~/.codeium/windsurf/mcp_config.json`)
```json
{
  "mcpServers": {
    "seocluster": {
      "serverUrl": "https://seocluster.ai/api/mcp",
      "headers": {
        "Authorization": "Bearer sc_live_your_key_here"
      }
    }
  }
}
```

---

## Example Prompt & Compact Output

Ask your coding agent before creating or editing a page:

> *"Check `seocluster_site_ownership` for our last 28 days with `check_live_redirects=true` before creating a new landing page for emergency plumbing."*

Illustrative compact response (under 6 KB instead of raw GSC CSV dumps):

```json
{
  "window_days": 28,
  "conflicts": [
    {
      "cluster": "emergency plumber perth",
      "status": "split_ownership",
      "owner_url": "/services/emergency-plumbing/",
      "competing_urls": ["/blog/emergency-plumber-tips/"],
      "recommended_action": "consolidate_into_owner"
    }
  ],
  "live_redirects_filtered": 2
}
```

Instead of inventing a third competing URL, the agent updates the existing owner page and runs `seocluster_prose_and_geo_gate` before opening a PR.

---

## Capabilities & Core Tools

Because `https://seocluster.ai/api/mcp` is a hosted Streamable HTTP MCP endpoint, editors discover the latest tool schemas automatically at runtime via `tools/list` (live catalog & starter prompts at [seocluster.ai/seo-mcp-server](https://seocluster.ai/seo-mcp-server)):

| Tool | Purpose | Credit Cost |
| :--- | :--- | :--- |
| `seocluster_whoami` | Plan tier, monthly quotas, and connected GSC site projects | 0 credits |
| `seocluster_site_ownership` | URL owners, cannibalization conflicts, `window_days` / `start_date` live `top_queries`, and live 301 checks | 0 credits |
| `seocluster_list_audits` | Saved technical SEO & AI-Readiness Site Audit runs (`run_id`, crawl stats, AI readiness summary, GSC orphans) | 0 credits |
| `seocluster_get_audit` | Structured technical crawl issues, AI-Readiness checklist, and sitemap diffs filtered by severity, category, or URL | 0 credits |
| `seocluster_list_briefs` | Saved SEO brief summaries filtered by target URL | 0 credits |
| `seocluster_get_brief` | Full saved brief body + cached Page Edits | 0 credits |
| `seocluster_generate_brief` | Grounded SEO brief from real GSC queries (`dry_run=true` supported) | 1 Brief credit |
| `seocluster_generate_page_edits` | Copy-paste title, meta, H1/H2, FAQ JSON-LD, and internal link edits | 1 Page Edit credit (Essential/Pro) |
| `seocluster_list_actions` | Prioritized GSC quick wins, split-ranking actions, and crawl issues | 0 credits |
| `seocluster_get_action` | Single Action query evidence, confidence score, and implementation steps | 0 credits |
| `seocluster_record_implemented` | Marks Action implemented and freezes 28-day GSC baseline | 0 credits (Essential/Pro) |
| `seocluster_check_outcome` | Evaluates 28-day post-deploy GSC click & impression lift | 0 credits (Essential/Pro) |
| `seocluster_prose_and_geo_gate` | 50-rule Anti-AI prose linter + GEO citation readiness scorer | 0 credits |

---

## License

MIT License (companion configuration & manifest repository). Hosted service operated by [SEOcluster.ai](https://seocluster.ai) — built by Jimmy Faccioli ([jimmytech.com.au](https://jimmytech.com.au)).
