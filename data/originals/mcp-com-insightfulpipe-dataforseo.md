# DataForSEO MCP Server by Insightful Pipe

[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue)](https://insightfulpipe.com/mcp-servers/dataforseo)
[![Insightful Pipe](https://img.shields.io/badge/Insightful_Pipe-MCP_Servers-purple)](https://insightfulpipe.com/mcp-servers)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Connect DataForSEO to AI assistants: SERP, keyword, backlink and AI search visibility data.**

Part of the [Insightful Pipe MCP Server Collection](https://insightfulpipe.com/mcp-servers) — use DataForSEO from Claude, ChatGPT, Cursor, and other AI assistants through the Model Context Protocol (MCP).

<img src="images/dataforseo-icon.png" alt="DataForSEO MCP Server" width="64" height="64">

## MCP Server URL

```
https://dataforseo.insightfulmcp.com/
```

## What is DataForSEO MCP?

DataForSEO MCP is a **remote Model Context Protocol server** hosted by InsightfulPipe. Access SERP results, backlink analysis, keyword research, domain analytics, on-page SEO audits, content analysis, and AI optimization insights.

## Installation

### Claude

1. Copy the MCP Server URL: `https://dataforseo.insightfulmcp.com/`
2. Open [Claude Connectors Settings](https://claude.ai/settings/connectors)
3. Scroll to the bottom and click **Add custom connector**
4. Paste the URL and click **Add**
5. Click **Connect** and sign in to InsightfulPipe if asked. Claude then lists the connector as connected.

### ChatGPT

Custom MCP servers are added through ChatGPT's **Developer mode**. Availability depends on your ChatGPT plan, and workspace admins may need to allow it.

1. Turn on **Developer mode** in ChatGPT settings
2. Create a new app for a remote MCP server and paste the URL: `https://dataforseo.insightfulmcp.com/`
3. Sign in to InsightfulPipe if asked. The connection finishes as soon as you are signed in.

See OpenAI's guide: [Developer mode and MCP apps in ChatGPT](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)

### Claude Code

```bash
claude mcp add --transport http dataforseo https://dataforseo.insightfulmcp.com/
```

### Cursor

Add the server to `~/.cursor/mcp.json` (all projects) or `.cursor/mcp.json` (one project):

```json
{
  "mcpServers": {
    "dataforseo": {
      "url": "https://dataforseo.insightfulmcp.com/"
    }
  }
}
```

When Cursor shows **Needs authentication**, click **Connect** and sign in to InsightfulPipe if asked.

## Available Actions

82 actions: 82 read, 0 write.

### Read Actions (82)

<details>
<summary>Show all 82 read actions</summary>

| Action | Description |
|--------|-------------|
| `ai_opt_chatgpt_locations` | Get available locations for ChatGPT scraping |
| `ai_opt_chatgpt_scraper` | Scrape ChatGPT responses for specific queries |
| `ai_opt_kw_locations_and_languages` | Get available locations and languages for AI optimization keyword data |
| `ai_opt_kw_search_volume` | Get AI-optimized keyword search volume data reflecting usage in AI LLMs |
| `ai_opt_llm_mentions_aggregated` | Get aggregated LLM mentions metrics for keyword/domain mentions |
| `ai_opt_llm_mentions_cross_aggregated` | Get cross-aggregated LLM mentions metrics across domains |
| `ai_opt_llm_mentions_filters` | Get available filter fields and operators for LLM Mentions endpoints |
| `ai_opt_llm_mentions_locations` | Get available locations and languages for LLM mentions |
| `ai_opt_llm_mentions_search` | Search for LLM mentions of domains or keywords across AI platforms |
| `ai_opt_llm_mentions_top_domains` | Get top domains mentioned in LLM responses |
| `ai_opt_llm_mentions_top_pages` | Get top pages mentioned in LLM responses |
| `ai_opt_llm_models` | List available LLM models for AI optimization analysis |
| `ai_opt_llm_response` | Get structured LLM response from a specific AI model |
| `backlinks_anchors` | Get anchor text data for backlinks pointing to a target |
| `backlinks_available_filters` | Get available filter fields and operators for Backlinks endpoints |
| `backlinks_backlinks` | Get a list of backlinks for a domain, subdomain, or page |
| `backlinks_bulk_backlinks` | Get backlink counts in bulk for multiple targets |
| `backlinks_bulk_new_lost_backlinks` | Track new and lost backlinks in bulk for multiple targets |
| `backlinks_bulk_new_lost_referring_domains` | Track new and lost referring domains in bulk |
| `backlinks_bulk_pages_summary` | Get pages summary data in bulk |
| `backlinks_bulk_ranks` | Get domain rank data in bulk for multiple targets |
| `backlinks_bulk_referring_domains` | Get referring domain counts in bulk for multiple targets |
| `backlinks_bulk_spam_score` | Get spam scores in bulk for multiple targets |
| `backlinks_competitors` | Find competitor domains by shared backlink profiles |
| `backlinks_domain_intersection` | Find common referring domains between multiple targets |
| `backlinks_domain_pages` | Get pages with backlinks on a domain |
| `backlinks_domain_pages_summary` | Get a summary of pages with backlinks on a domain |
| `backlinks_page_intersection` | Find common backlinks between multiple pages |
| `backlinks_referring_domains` | Get referring domains pointing to a target |
| `backlinks_referring_networks` | Get referring networks (IP ranges) for backlinks |
| `backlinks_summary` | Get a backlinks summary overview for a domain/subdomain/page |
| `backlinks_timeseries_new_lost_summary` | Get new and lost backlinks data over time |
| `backlinks_timeseries_summary` | Get historical backlink data over time |
| `business_listings_available_filters` | Get available filter fields and operators for Business Listings endpoints |
| `business_listings_search` | Search business listings on Google Maps by name, category, or location |
| `content_analysis_phrase_trends` | Analyze phrase trends and popularity in content over time |
| `content_analysis_search` | Search content mentions and citations for a keyword with sentiment analysis |
| `content_analysis_summary` | Get an overview of content citation data for a keyword |
| `domain_technologies` | Detect technologies used on a domain (CMS, analytics, frameworks, etc.) |
| `domain_technologies_available_filters` | Get available filter fields and operators for Domain Technologies endpoints |
| `domain_whois_available_filters` | Get available filter fields and operators for WHOIS endpoints |
| `domain_whois_overview` | Get WHOIS data enriched with backlink stats, ranking, and traffic info |
| `kw_dataforseo_trends_demography` | Get demographic breakdown for keyword trends |
| `kw_dataforseo_trends_explore` | Explore DataForSEO Trends data for keyword popularity over time |
| `kw_dataforseo_trends_subregion_interests` | Get subregion interest data for keyword trends |
| `kw_google_ads_locations` | List available locations for Google Ads keyword data |
| `kw_google_ads_search_volume` | Get search volume, CPC, and competition data from Google Ads for specified keywords |
| `kw_google_trends_categories` | Get available Google Trends categories |
| `kw_google_trends_explore` | Explore Google Trends data for keywords |
| `labs_available_filters` | Get available filter fields and operators for DataForSEO Labs endpoints |
| `labs_bulk_keyword_difficulty` | Get keyword difficulty scores in bulk for up to 1000 keywords |
| `labs_bulk_traffic_estimation` | Get bulk traffic estimation for up to 1000 domains |
| `labs_competitors_domain` | Find competitor domains based on shared organic keywords with ranking and traffic overview |
| `labs_domain_intersection` | Find common keywords between multiple domains |
| `labs_domain_rank_overview` | Get ranking and traffic data from organic and paid search for a domain |
| `labs_historical_keyword_data` | Get historical keyword data over time |
| `labs_historical_rank_overview` | Get historical domain ranking data over time |
| `labs_historical_serp` | Get historical Google SERPs collected within a specified time frame for a keyword |
| `labs_keyword_ideas` | Generate relevant keyword ideas based on seed keywords |
| `labs_keyword_overview` | Google keyword overview: CPC, competition, search volume, search intent, monthly searches |
| `labs_keyword_suggestions` | Get long-tail keyword suggestions based on a seed keyword |
| `labs_keywords_for_site` | Get keywords for which a domain or page ranks in Google organic results |
| `labs_page_intersection` | Find common keywords between multiple pages |
| `labs_ranked_keywords` | Get all keywords a domain ranks for with positions and traffic estimates |
| `labs_related_keywords` | Get keywords related to a seed keyword with search volume and SERP data |
| `labs_relevant_pages` | Find the most relevant pages for specified keywords |
| `labs_search_intent` | Analyze search intent for a list of keywords (informational, navigational, commercial, transactional) |
| `labs_serp_competitors` | Find competitors in SERP for specific keywords |
| `labs_subdomains` | Get subdomains of a target domain with ranking data |
| `labs_top_searches` | Get top searches by volume in a region |
| `onpage_content_parsing` | Parse and analyze webpage content for SEO metrics |
| `onpage_instant_pages` | Get instant page crawl results with on-page SEO metrics and optimization details |
| `onpage_lighthouse` | Get Google Lighthouse performance, accessibility, SEO, and best practices scores |
| `serp_bing_organic` | Get organic Bing SERP results for a keyword |
| `serp_google_organic` | Get organic Google SERP results for a keyword |
| `serp_locations` | List available locations for SERP queries |
| `serp_yahoo_organic` | Get organic Yahoo SERP results for a keyword |
| `serp_youtube_locations` | List available locations for YouTube SERP queries |
| `serp_youtube_organic` | Get organic YouTube search results for a keyword |
| `serp_youtube_video_comments` | Get YouTube video comments |
| `serp_youtube_video_info` | Get detailed YouTube video information (metadata, stats, description) |
| `serp_youtube_video_subtitles` | Get YouTube video subtitles/captions |

</details>

## Control What Your AI Can Do

You decide what AI agents can do with each connected account:

- **Turn individual actions on or off** for every connected account, so agents only see the actions you allow.
- **Connect as Read-only or Read & Write.** A read-only connection can only enable read actions.
- **Destructive actions stay off by default.** Actions such as deletes are disabled until an admin enables them.
- **Team access per account.** Restricted team members only use the accounts they are granted, with the read actions enabled on them.

## Usage Examples

```
"What's the US search volume for "google ads mcp"?"
```

```
"Get a backlink summary for example.com"
```

```
"Which domains are mentioned most in AI answers about "project management software"?"
```

## Pricing

The DataForSEO MCP server is included in every InsightfulPipe plan, together with all other MCP servers and the CLI. Plans start at $29.99/month, and you can try it for 7 days. See [insightfulpipe.com/pricing](https://insightfulpipe.com/pricing) for current plans.

## Ready-Made Skills and Prompts

- [Claude skills for SEO and marketing](https://insightfulpipe.com/marketing-claude-skills/marketing) — ready-made skills that run on your connected data

## Explore More MCP Servers by Insightful Pipe

Visit **[insightfulpipe.com/mcp-servers](https://insightfulpipe.com/mcp-servers)** to discover our full collection of MCP servers.

- [Google Search Console MCP](https://insightfulpipe.com/mcp-servers/google-search-console)
- [Bing Webmaster Tools MCP](https://insightfulpipe.com/mcp-servers/bing-webmaster)
- [PageSpeed Insights MCP](https://insightfulpipe.com/mcp-servers/pagespeed)

**[View All MCP Servers →](https://insightfulpipe.com/mcp-servers)**

## Resources

- [Documentation](https://insightfulpipe.com/docs)
- [Video Tutorial](https://www.youtube.com/playlist?list=PLJNzvjxzI5Xwe__BJJLAelSF0ewO3mEFk)
- [InsightfulPipe Blog](https://insightfulpipe.com/blog)

## Support

- **Documentation**: [insightfulpipe.com/docs](https://insightfulpipe.com/docs)
- **All MCP Servers**: [insightfulpipe.com/mcp-servers](https://insightfulpipe.com/mcp-servers)
- **Email**: support@insightfulpipe.com

---

**[Insightful Pipe](https://insightfulpipe.com)** — AI-powered marketing analytics through MCP servers. [Explore all integrations →](https://insightfulpipe.com/mcp-servers)

## License

MIT License - see [LICENSE](LICENSE) for details.
