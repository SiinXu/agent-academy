# Remote MCP server

Hosted MCP at `https://api.trendsapi.ai/mcp`. Same five operations and catalogs as REST, plus a free `get_usage`. Token: [trendsapi.ai/account](https://trendsapi.ai/account).

REST contract: [trendsapi-ai/trendsapi](https://github.com/trendsapi-ai/trendsapi).

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![MCP](https://img.shields.io/badge/MCP-HTTP-blueviolet.svg)](https://modelcontextprotocol.io)

## Tools

| MCP tool | REST `mode` | Required | Returns |
|---|---|---|---|
| `get_time_series` | `get_time_series` | `source`, `keyword` | About 5 years of weekly history |
| `get_growth` | `get_growth` | `source`, `keyword` | Percent change over one or more windows |
| `get_top_trends` | `get_top_trends` | `type` | Live ranked board |
| `get_context` | `get_context` | `source`, `keyword` | Posts, videos, stories and comments about a keyword right now |
| `get_top_posts` | `get_top_posts` | `source`, `keyword` | Top posts for a hashtag on TikTok or Instagram (Business plan) |
| `get_usage` | (MCP only) | none | Plan, requests used and left, reset date. Free |

Sources, feeds, and keyword formats: [hub keyword sources](https://github.com/trendsapi-ai/trendsapi#keyword-sources) and [live boards](https://github.com/trendsapi-ai/trendsapi#live-boards).

`App Downloads` / `App Rankings` need an Android bundle ID (`com.openai.chatgpt`).

## Cursor

`~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "trend-feeds": {
      "url": "https://api.trendsapi.ai/mcp",
      "transport": "http",
      "headers": { "Authorization": "Bearer YOUR_TOKEN" }
    }
  }
}
```

## VS Code

`.vscode/mcp.json`:

```json
{
  "servers": {
    "trend-feeds": {
      "type": "http",
      "url": "https://api.trendsapi.ai/mcp",
      "headers": { "Authorization": "Bearer YOUR_TOKEN" }
    }
  }
}
```

## Claude Desktop

```json
{
  "mcpServers": {
    "trend-feeds": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://api.trendsapi.ai/mcp", "--header", "Authorization:${AUTH_HEADER}"],
      "env": { "AUTH_HEADER": "Bearer YOUR_TOKEN" }
    }
  }
}
```

Claude.ai and ChatGPT sign in with OAuth, no token: add `https://trendsapi.ai/mcp` as a custom connector (Claude: Settings → Connectors → Add custom connector; ChatGPT on the web: Plugins → + → Add custom MCP server, authentication OAuth).

No local production server in this repo.

## License

MIT. See [LICENSE](LICENSE).
