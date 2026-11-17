# Marketing Miner MCP Server

MCP server for the [Marketing Miner Profilers API](https://profilers-api.marketingminer.com/docs). Connects Claude, Cursor, Windsurf and other MCP clients to Marketing Miner keyword research and website analytics.

## Available tools

| Tool | Endpoint | Description |
|---|---|---|
| `marketing_miner_get_search_volume` | `GET /keywords/search-volume-data` | Search volume + CPC + YoY + seasonality for a single keyword |
| `marketing_miner_batch_search_volume` | `POST /keywords/search-volume-data` | Batch processing of 1–1000 keywords |
| `marketing_miner_get_keyword_suggestions` | `GET /keywords/suggestions` | Keyword suggestions (questions / new / trending) with difficulty and SERP features. Supports `limit` + `offset` with `has_more` / `next_offset` in the response. |
| `marketing_miner_get_website_stats` | `GET /websites/stats` | Estimated traffic, keyword count, breakdown by result_type |
| `marketing_miner_get_website_stats_range` | `GET/POST /websites/stats-range` | Historical traffic trend + competitor comparison |

Every tool returns `markdown` (default, human-readable) or `json` (`response_format: "json"`), plus `structuredContent` with all API fields. Each tool declares an `outputSchema` for client-side validation.

## Installation

Get an API token from [marketingminer.com/en/features/api](https://www.marketingminer.com/en/features/api), then pick one of the options below.

### Option A — Claude Code CLI one-liner (recommended, cross-platform)

Works on macOS, Windows and Linux — Claude Code CLI handles the config file location for you.

```bash
claude mcp add marketing-miner \
  -s user \
  -e MARKETING_MINER_API_TOKEN=YOUR_TOKEN \
  -- npx -y github:lukaskostka/marketing-miner-mcp
```

- `-s user` → installs globally (available from any project)
- `-e` → sets the API token as environment variable
- Replace `YOUR_TOKEN` with your actual Marketing Miner API token

To remove later: `claude mcp remove marketing-miner -s user`.

### Option B — `npx` straight from GitHub (no clone needed)

The repo ships the built `dist/` folder, so `npx` can run it directly.

**Claude Desktop / Cursor / Windsurf config:**
```json
{
  "mcpServers": {
    "marketing-miner": {
      "command": "npx",
      "args": ["-y", "github:lukaskostka/marketing-miner-mcp"],
      "env": {
        "MCP_TRANSPORT": "stdio",
        "MARKETING_MINER_API_TOKEN": "your_token_here"
      }
    }
  }
}
```

### Option C — clone the repo (for development / customization)

```bash
git clone https://github.com/lukaskostka/marketing-miner-mcp.git
cd marketing-miner-mcp
npm install
npm run build
```

Then point your MCP client at the built binary:
```json
{
  "mcpServers": {
    "marketing-miner": {
      "command": "node",
      "args": ["/absolute/path/to/marketing-miner-mcp/dist/index.js"],
      "env": {
        "MCP_TRANSPORT": "stdio",
        "MARKETING_MINER_API_TOKEN": "your_token_here"
      }
    }
  }
}
```

Run locally with `MARKETING_MINER_API_TOKEN=xxx npm start` (stdio, default) or `MCP_TRANSPORT=http MARKETING_MINER_API_TOKEN=xxx npm start` (Streamable HTTP on port 8000).

### Option D — Docker (self-hosted HTTP)

```bash
git clone https://github.com/lukaskostka/marketing-miner-mcp.git
cd marketing-miner-mcp
docker build -t marketing-miner-mcp .
docker run -p 8000:8000 -e MARKETING_MINER_API_TOKEN=your_token_here marketing-miner-mcp
```

Connect from a remote client via Streamable HTTP URL (see *Connecting from an MCP client* below).

## Configuration

| Variable | Default | Description |
|---|---|---|
| `MARKETING_MINER_API_TOKEN` | — | **Required.** API token from [marketingminer.com/en/features/api](https://www.marketingminer.com/en/features/api) |
| `MCP_TRANSPORT` | `stdio` | `stdio` (local MCP clients) or `http` (Streamable HTTP for hosted deployments) |
| `HOST` | `0.0.0.0` | HTTP bind host |
| `PORT` | `8000` | HTTP port |
| `MCP_HTTP_PATH` | `/mcp` | HTTP path |

Alternative token names: `MARKETING_MINER_API_KEY`, `MARKETING_MINER_TOKEN`, `MM_API_TOKEN`, `MM_API_KEY`.

## Remote HTTP client config

If you are running the server over Streamable HTTP (Option D above or any remote host), MCP clients connect via URL only:

```json
{
  "mcpServers": {
    "marketing-miner": {
      "url": "https://your-host.example.com/mcp"
    }
  }
}
```

## Usage examples

**1. Search volume for a single keyword:**
> "What is the search volume and seasonality of `marketing` in CZ?" → `marketing_miner_get_search_volume({lang:"cs", keyword:"marketing"})`

**2. Batch processing:**
> "Compare search volume of SEO terms" → `marketing_miner_batch_search_volume({lang:"cs", keywords:["seo","ppc","google ads","content marketing"]})`

**3. Question research for FAQ:**
> "Find questions around `hypoteka`" → `marketing_miner_get_keyword_suggestions({lang:"cs", keyword:"hypoteka", suggestions_type:"questions", limit:50})`

**4. Paginating suggestions:**
> Fetch next page → `marketing_miner_get_keyword_suggestions({lang:"cs", keyword:"hypoteka", limit:50, offset:50})`

**5. Competitor analysis:**
> "How much traffic does seznam.cz get?" → `marketing_miner_get_website_stats({lang:"cs", type:"domain", target:"seznam.cz"})`

**6. Competitor trends:**
> "Compare traffic trends of seznam.cz vs. idnes.cz" → `marketing_miner_get_website_stats_range({lang:"cs", type:"domain", target:"seznam.cz", period:"monthly", competitors:["idnes.cz"]})`

## Supported markets

`cs`, `sk`, `pl`, `hu`, `ro`, `gb`, `us`

## Architecture

- Node 18+, TypeScript (strict), ESM
- MCP SDK `^1.18` (`McpServer.registerTool`, Zod input + output schemas, tool annotations)
- Streamable HTTP (stateless per-request transport) + stdio
- Zod runtime validation with `.strict()` (rejects unknown keys)
- `structuredContent` + `outputSchema` on every tool
- Response truncation for both markdown (25k chars) and oversized `structuredContent` arrays
- Optional DNS-rebinding protection (`Origin` header validation when bound to loopback)

## License

MIT
