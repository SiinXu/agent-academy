# Remote MCP server

Hosted MCP at `https://api.trendsapi.ai/mcp`. Same three operations and catalogs as REST. Token: [trendsapi.ai/#get-key](https://trendsapi.ai/#get-key).

REST contract: [trendsapi-ai/trendsapi](https://github.com/trendsapi-ai/trendsapi).

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![MCP](https://img.shields.io/badge/MCP-HTTP-blueviolet.svg)](https://modelcontextprotocol.io)

## Tools

| MCP tool | REST `mode` | Required | Returns |
|---|---|---|---|
| `get_trends` | `get_time_series` | `source`, `keyword` | Weekly history |
| `get_growth` | `get_growth` | `source`, `keyword` | Percent change |
| `get_top_trends` | `get_top_trends` | `type` | Live ranked feed |

Sources, feeds, and keyword formats: [hub keyword sources](https://github.com/trendsapi-ai/trendsapi#keyword-sources) and [live feeds](https://github.com/trendsapi-ai/trendsapi#live-feeds).

`app downloads` / `app rankings` still need an Android bundle ID (`com.openai.chatgpt`).

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

Claude.ai: Settings → Connectors → Add custom connector → `https://api.trendsapi.ai/mcp`.

No local production server in this repo.

## License

MIT. See [LICENSE](LICENSE).
