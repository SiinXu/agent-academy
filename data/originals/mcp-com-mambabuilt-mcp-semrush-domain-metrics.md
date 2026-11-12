# Semrush Domain Metrics MCP Server

[![Glama score](https://glama.ai/mcp/servers/mambalabsdev/mcp-semrush-domain-metrics/badges/score.svg)](https://glama.ai/mcp/servers/mambalabsdev/mcp-semrush-domain-metrics) [![MCP Registry](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.modelcontextprotocol.io%2Fv0%2Fservers%3Fsearch%3Dcom.mambabuilt%252Fmcp-semrush-domain-metrics%26limit%3D1&query=%24.servers%5B0%5D._meta%5B%22io.modelcontextprotocol.registry%2Fofficial%22%5D.status&label=mcp%20registry&color=blue)](https://registry.modelcontextprotocol.io/v0/servers?search=com.mambabuilt/mcp-semrush-domain-metrics&limit=1) [![npm version](https://img.shields.io/npm/v/@mambalabsdev/mcp-semrush-domain-metrics)](https://www.npmjs.com/package/@mambalabsdev/mcp-semrush-domain-metrics) [![npm downloads](https://img.shields.io/npm/dm/@mambalabsdev/mcp-semrush-domain-metrics)](https://www.npmjs.com/package/@mambalabsdev/mcp-semrush-domain-metrics) [![license](https://img.shields.io/github/license/mambalabsdev/mcp-semrush-domain-metrics)](https://github.com/mambalabsdev/mcp-semrush-domain-metrics/blob/main/LICENSE)

An MCP server for the Mamba Labs Semrush Domain Metrics actor on Apify. Semrush public domain metrics as rows.

## What's Inside

- [What it does](#what-it-does)
- [Quick start](#quick-start)
- [Prerequisites](#prerequisites)
- [Example prompts](#example-prompts)
- [Tool](#tool)
- [Inputs](#inputs)
- [Pricing](#pricing)
- [Full actor documentation](#full-actor-documentation)
- [License](#license)

## What it does

Takes domains and returns one row each with Authority Score, visits, organic and paid traffic, backlinks, rank, competitors, and keywords, from Semrush's public website pages.

All of the work runs on Apify. This package is a thin client that starts the actor run, waits for it, and hands back the dataset rows.

## Quick start

You need Node.js 18 or newer and an Apify account with an API token.

Add this to your Claude Desktop config (`claude_desktop_config.json`), Cursor, or any MCP client:

```json
{
  "mcpServers": {
    "mamba-semrush-domain-metrics": {
      "command": "npx",
      "args": [
        "-y",
        "@mambalabsdev/mcp-semrush-domain-metrics"
      ],
      "env": {
        "APIFY_TOKEN": "your-apify-token"
      }
    }
  }
}
```

Restart the client. The `get_semrush_domain_metrics` tool appears.

## Prerequisites

- Node.js 18 or newer.
- An Apify API token from [console.apify.com/account/integrations](https://console.apify.com/account/integrations), set as `APIFY_TOKEN`. The server lists its tool without a token; a call needs one.

## Example prompts

- "Get the Semrush Authority Score and monthly visits for stripe.com."
- "Compare backlinks and organic traffic for hubspot.com and notion.so."

## Tool

`get_semrush_domain_metrics`. One tool. Example arguments:

```json
{
  "domains": [
    "stripe.com"
  ],
  "max_domains": 1
}
```

## Inputs

Every buyer facing input of the actor. Omitted inputs take the actor's own defaults.

| Input | Type | Required | Description |
|---|---|---|---|
| `domains` | array | no | Domains or URLs to look up, such as stripe.com. Semrush publishes a page for some domains only: in a test of 30, 15 had one. |
| `max_domains` | number | no | Text number from 1 to 1000. Default 100. Reads run 20 seconds apart, so 100 domains take about 33 minutes. Set the run timeout to fit. |
| `max_charge_usd` | number | no | Optional. The run stops before a charge that would pass this amount. Summary rows are always returned. |

## Pricing

Pay per event on Apify, billed to your Apify account. Prices in USD.

| Event | Free plan | Bronze | Silver | Gold |
|---|---|---|---|---|
| `domain-row`, one domain with metrics | $0.01 | $0.0095 | $0.009 | $0.0085 |
| `no-page-row`, one domain with no Semrush page | $0.003 | $0.00285 | $0.0027 | $0.00255 |
| `apify-actor-start`, per run start | $0.002 | $0.002 | $0.002 | $0.002 |

Summaries, refused reads, and refused input are free. Mamba Labs pays the platform costs of the run, Apify proxy traffic included.

## Full actor documentation

[apify.com/mambalabs/semrush-domain-metrics](https://apify.com/mambalabs/semrush-domain-metrics)

## License

MIT. See [LICENSE](LICENSE).
