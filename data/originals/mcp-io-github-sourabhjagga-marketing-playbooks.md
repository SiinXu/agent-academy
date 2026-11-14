# 🏛️ Marketing Playbooks MCP

[![Official MCP Registry](https://img.shields.io/badge/MCP_Registry-Official_Verified-black.svg)](https://registry.modelcontextprotocol.io)
[![MCP Protocol](https://img.shields.io/badge/MCP_Protocol-v2024--11--05-0284C7.svg)](https://modelcontextprotocol.io)
[![Vector Engine](https://img.shields.io/badge/Engine-LanceDB_+_FastEmbed-059669.svg)](https://lancedb.com)
[![Status: Healthy](https://img.shields.io/badge/Health-200_OK-emerald.svg)](https://playbooks.managedcloudvps.com/health)
[![License: MIT](https://img.shields.io/badge/License-MIT-slate.svg)](LICENSE)
[![Indexed Playbooks](https://img.shields.io/badge/Playbooks-19%2C895_Indexed-blue.svg)](https://playbooks.managedcloudvps.com/#disciplines)

> **Autonomous AI Chief Marketing Officer (CMO) & Growth Advisory Council.**  
> Instant, sub-15ms semantic RAG retrieval across **19,895 battle-tested playbooks** and **11 elite growth disciplines**. Built for Claude Code, Cursor, Windsurf, Devin, and autonomous agent loops.

---

## ⚡ Quickstart (Free Daily Tier)

No API key or registration is required to start. You receive **20 free queries per IP every 24 hours**.

### 1. Claude Code CLI (1-Liner)
```bash
claude mcp add --transport sse marketing-playbooks https://playbooks.managedcloudvps.com/mcp
```

### 2. Cursor IDE
Open **Cursor Settings → MCP → Add New MCP Server**, or add to `.cursor/mcp.json`:
```json
{
  "mcpServers": {
    "marketing-playbooks": {
      "url": "https://playbooks.managedcloudvps.com/mcp"
    }
  }
}
```

### 3. Claude Desktop
Add to your `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "marketing-playbooks": {
      "url": "https://playbooks.managedcloudvps.com/mcp"
    }
  }
}
```

### 4. Direct JSON-RPC / Autonomous Agent (cURL)
```bash
curl -s -X POST https://playbooks.managedcloudvps.com/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "consult_heuristic_cro_and_growth_experiments",
      "arguments": {
        "query": "checkout abandonment and coupon field friction"
      }
    }
  }'
```

---

## 🤖 Autonomous Agent Integration & Discovery Endpoints

For AI crawlers, multi-agent frameworks (LangGraph, CrewAI, AutoGen), and automated coding agents, the server exposes standard machine-readable specifications:

| Resource | URL | Format | Description |
| :--- | :--- | :--- | :--- |
| **MCP Registry Manifest** | `https://playbooks.managedcloudvps.com/.well-known/mcp.json` | JSON | Official schema, transport config, and complete tool definitions. |
| **LLM Crawler File** | `https://playbooks.managedcloudvps.com/llms.txt` | Text | Standard LLM summary for agent registries and search crawlers. |
| **Unabridged Agent Manual** | `https://playbooks.managedcloudvps.com/llms-full.txt` | Markdown | Wire protocol, full input schemas, and system prompt directives. |
| **Health Check** | `https://playbooks.managedcloudvps.com/health` | JSON | Real-time service uptime, latency, and corpus version verification. |

### Recommended Agent System Prompt Injection
When wiring this MCP into an autonomous agent or coding persona, add:
```text
You have access to the Marketing Playbooks knowledge engine (marketing-playbooks) covering 19,895 verified growth playbooks. Consult this tool whenever designing user acquisition funnels, evaluating landing page conversion, structuring SEO URLs, or planning content repurposing.
```

---

## 📚 11 Battle-Tested Growth Frameworks

Every response is retrieved from verified, authoritative growth methodologies indexed in local LanceDB columnar tables:

| Framework ID | Growth Discipline | Indexed Chunks | Core Methodologies |
| :--- | :--- | :--- | :--- |
| `seo_architecture` | **Technical SEO & Architecture** | 4,062 | Site crawlability, URL taxonomy, internal link graphs, long-tail query clustering. |
| `direct_response_funnels` | **Direct-Response & Value Ladders** | 2,763 | Hook-Story-Offer architecture, order bumps, tripwires, and webinar ascension paths. |
| `audience_flywheel` | **Audience Flywheels & Zero-Click** | 2,515 | Zero-click discovery, audience influence mapping, and continuous compounding momentum. |
| `customer_value_journey` | **8-Stage Customer Journey** | 2,407 | Lead magnet design, subscriber activation, retention, and lifetime ascension loops. |
| `skyscraper_authority` | **Skyscraper Authority & Backlinks** | 2,150 | Skyscraper 1.0 & 2.0 asset design, reverse outreach workflows, and high-tier digital PR. |
| `heuristic_cro` | **Empirical & Heuristic CRO** | 1,585 | Qualitative & quantitative conversion audits, friction eradication, and checkout optimization. |
| `permission_positioning` | **Permission & Category Positioning** | 1,296 | Purple Cow differentiation, smallest viable market focus, and permission asset compounding. |
| `brand_voice_editorial` | **Human Brand Voice & Editorial** | 906 | Storytelling rules, Ugly First Draft (TUFD), and high-open-rate newsletter architecture. |
| `programmatic_seo` | **Programmatic Scaling & Content Decay** | 905 | Programmatic directory design, template uniqueness gates, and content decay triage. |
| `content_pyramid` | **Omnichannel Content Pyramid** | 657 | Repurposing 1 core pillar asset into 64 micro-distribution pieces across platforms. |
| `high_tempo_growth` | **High-Tempo Experimentation (ICE)** | 649 | North Star Metric definition, ICE prioritization scoring, and rapid weekly growth sprints. |

---

## 🛠️ Complete MCP Tools Reference

1. `search_growth_playbooks(query, framework_id?, limit?)` — Semantic vector search across all 19,895 playbooks.
2. `consult_seo_and_content_architecture(query)` — Technical SEO audits, URL taxonomy, content decay mitigation, and programmatic directory design.
3. `consult_authority_and_search_flywheels(query)` — Skyscraper 1.0 & 2.0 link building, reverse outreach, high-authority digital PR, and zero-click search.
4. `consult_conversion_funnels_and_lead_magnets(query)` — 8-stage customer journey, tripwires, lead magnets, ascension loops, and value ladders.
5. `consult_omnichannel_storytelling_and_distribution(query)` — Content pyramid repurposing (1 pillar to 64 micro-assets) and human editorial brand voice.
6. `consult_heuristic_cro_and_growth_experiments(query)` — Empirical conversion audits, UX friction removal, North Star Metric, and ICE scoring.
7. `consult_category_positioning_and_permission_marketing(query)` — Purple Cow differentiation, smallest viable market focus, and tribe-driven permission marketing.
8. `consult_growth_council_roundtable(query)` — Convenes all 11 disciplines simultaneously. Synthesizes viewpoints across Acquisition, Funnels, Conversion, Distribution, and Strategy into one multi-discipline consensus.
9. `get_playbook(framework_id, title_keyword)` — Retrieves full unabridged playbook text matching a specific title keyword within a framework.
10. `list_disciplines_and_playbooks()` — Returns complete inventory, framework metadata, and chunk statistics.

---

## 💎 Flexible Pricing & Quota Plans

Choose the plan that fits your development workflow:

| Plan | Price | Monthly Quota | Features | Setup |
| :--- | :--- | :--- | :--- | :--- |
| **Free** | **$0** | 20 queries / day | All 11 disciplines, standard latency | Zero-config |
| **Starter** | **$2.99** | 3,000 queries / 60 days | **No promo footers**, dedicated Polar key, live usage tracking | Polar key |
| **Growth** | **$4.99** | 10,000 queries / 30 days | **No promo footers**, priority council search, live usage tracking | Polar key |
| **Unlimited** | **$8.99** | **Unlimited** / 30 days | **No promo footers**, priority queue, key rotation on Polar | Polar key |

### Adding your Paid API Key:
Once subscribed at [playbooks.managedcloudvps.com](https://playbooks.managedcloudvps.com), add your Bearer key to your MCP settings:
```json
{
  "mcpServers": {
    "marketing-playbooks": {
      "url": "https://playbooks.managedcloudvps.com/mcp",
      "headers": {
        "Authorization": "Bearer mp_live_YOUR_KEY_HERE"
      }
    }
  }
}
```

---

## 🔒 Safe Harbor & Legal Notice
`marketing-playbooks` indexes and synthesizes publicly documented growth frameworks, educational playbooks, and strategic case studies under the Fair Use doctrine for AI-assisted software engineering. All referenced methodology titles belong to their respective creators and organizations.

---

## 📄 License
MIT License. Crafted with LanceDB & FastEmbed for the next generation of autonomous AI developers.
