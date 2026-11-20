# Apify agent skills: China sourcing, TikTok Shop, Threads, flights, Lazada

Agent skills that teach Claude Code, Cursor, Codex, Gemini CLI and other coding agents how to get e-commerce, social and travel data with [Apify](https://apify.com) Actors: which Actor to call for a request, an input that is known to work, what it costs and what usually goes wrong.

Every skill was checked the same way: an agent that had only the skill wrote the Actor calls for five test requests (one deliberately out of scope), and every call was run on Apify. 20 Nov 2026: right Actor in 20 of 20 cases, all 16 runs returned data.

## Install

All skills:

```bash
npx skills add lergassy/apify-agent-skills
```

One skill:

```bash
npx skills add lergassy/apify-agent-skills --skill apify-flight-search
```

Claude Code plugin marketplace:

```
/plugin marketplace add lergassy/apify-agent-skills
```

You need an Apify account and token (`APIFY_TOKEN`, or `apify login` with the [Apify CLI](https://docs.apify.com/cli)). The same Actors work through the [Apify MCP server](https://mcp.apify.com).

## Skills

| Skill | Use it for | Actors |
|-------|------------|--------|
| [apify-china-sourcing](skills/apify-china-sourcing/SKILL.md) | Wholesale products and suppliers on 1688.com and Alibaba.com: price tiers, MOQ, variants, supplier facts, 1688 vs Alibaba price | `blueskyscraper/1688-products-scraper`, `blueskyscraper/1688-product-details-scraper`, `blueskyscraper/alibaba-products-scraper` |
| [apify-tiktok-shop-research](skills/apify-tiktok-shop-research/SKILL.md) | Best-selling TikTok Shop products, the videos and creators that sell them, top shops and lives, shopper search, reviews — 15 markets | `lergassy/tiktok-shop-top-products-scraper`, `-videos-scraper`, `-creators-scraper`, `-shops-live-scraper`, `-reviews-scraper`, `apimy/tiktok-shop-search-scraper` |
| [apify-threads-research](skills/apify-threads-research/SKILL.md) | Meta Threads posts of accounts, keyword and hashtag search, replies, profiles with bio contacts — no login | `lergassy/threads-scraper`, `-search-scraper`, `-replies-scraper`, `-profile-scraper` |
| [apify-flight-search](skills/apify-flight-search/SKILL.md) | Google Flights itineraries, cheapest day over a month, cheapest destinations from an airport, KAYAK fares per booking site | `lergassy/google-flights-scraper`, `lergassy/flight-price-calendar`, `lergassy/kayak-flights-scraper`, `lergassy/flights-mcp-server` |
| [apify-lazada-products](skills/apify-lazada-products/SKILL.md) | Lazada search, product pages with variants, shop catalogues and reviews in ID, MY, SG, PH, TH, VN | `lergassy/lazada-scraper`, `blueskyscraper/lazada-product-scraper` |

Each skill folder has `SKILL.md` (when to use it, routing table, working inputs, row fields, troubleshooting) and `references/gotchas.md` (prices and cost traps).

## MCP endpoints

The same Actors as ready MCP servers (Streamable HTTP, header `Authorization: Bearer <APIFY_TOKEN>`), listed in the [official MCP Registry](https://registry.modelcontextprotocol.io) under `io.github.lergassy/*`. The `server.json` files are in [mcp/](mcp/).

| Registry name | Endpoint |
|---------------|----------|
| `io.github.lergassy/flights-mcp-server` | `https://lergassy--flights-mcp-server.apify.actor/mcp` |
| `io.github.lergassy/google-flights` | `https://mcp.apify.com/?tools=lergassy/google-flights-scraper,lergassy/flight-price-calendar,lergassy/kayak-flights-scraper` |
| `io.github.lergassy/lazada` | `https://mcp.apify.com/?tools=lergassy/lazada-scraper,blueskyscraper/lazada-product-scraper` |
| `io.github.lergassy/tiktok-shop` | `https://mcp.apify.com/?tools=lergassy/tiktok-shop-top-products-scraper,lergassy/tiktok-shop-videos-scraper,lergassy/tiktok-shop-creators-scraper,lergassy/tiktok-shop-shops-live-scraper,lergassy/tiktok-shop-reviews-scraper,apimy/tiktok-shop-search-scraper` |
| `io.github.lergassy/threads` | `https://mcp.apify.com/?tools=lergassy/threads-scraper,lergassy/threads-search-scraper,lergassy/threads-profile-scraper` |
| `io.github.lergassy/china-sourcing` | `https://mcp.apify.com/?tools=blueskyscraper/1688-products-scraper,blueskyscraper/1688-product-details-scraper,blueskyscraper/alibaba-products-scraper` |

## Disclosure

The Actors these skills route to are paid (pay per result) and are built and maintained by the author of this repository. Links carry no affiliate parameters. Prices in the skills are Apify Store list prices on the date shown; the Store page of each Actor is the source of truth.

## Format

Skills follow the [Agent Skills](https://agentskills.io) format and the layout of [apify/awesome-skills](https://github.com/apify/awesome-skills): `skills/<name>/SKILL.md` with YAML frontmatter (`name`, `description`, `metadata.keywords`) and optional `references/`. CLI commands carry `--json`, `--user-agent lergassy-agent-skills/<skill>` and `2>/dev/null`.

Issues and pull requests are welcome — wrong field, failed input, a request the skill should handle.

## License

[MIT](LICENSE)
