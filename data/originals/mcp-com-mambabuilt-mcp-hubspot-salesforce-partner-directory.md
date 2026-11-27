# HubSpot and Salesforce Partner Directory MCP Server

[![Glama score](https://glama.ai/mcp/servers/mambalabsdev/mcp-hubspot-salesforce-partner-directory/badges/score.svg)](https://glama.ai/mcp/servers/mambalabsdev/mcp-hubspot-salesforce-partner-directory) [![MCP Registry](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.modelcontextprotocol.io%2Fv0%2Fservers%3Fsearch%3Dcom.mambabuilt%252Fmcp-hubspot-salesforce-partner-directory%26limit%3D1&query=%24.servers%5B0%5D._meta%5B%22io.modelcontextprotocol.registry%2Fofficial%22%5D.status&label=mcp%20registry&color=blue)](https://registry.modelcontextprotocol.io/v0/servers?search=com.mambabuilt/mcp-hubspot-salesforce-partner-directory&limit=1) [![npm version](https://img.shields.io/npm/v/@mambalabsdev/mcp-hubspot-salesforce-partner-directory)](https://www.npmjs.com/package/@mambalabsdev/mcp-hubspot-salesforce-partner-directory) [![npm downloads](https://img.shields.io/npm/dm/@mambalabsdev/mcp-hubspot-salesforce-partner-directory)](https://www.npmjs.com/package/@mambalabsdev/mcp-hubspot-salesforce-partner-directory) [![license](https://img.shields.io/github/license/mambalabsdev/mcp-hubspot-salesforce-partner-directory)](https://github.com/mambalabsdev/mcp-hubspot-salesforce-partner-directory/blob/main/LICENSE)

An MCP server for the Mamba Labs HubSpot and Salesforce Partner Directory actor on Apify. Find CRM partner agencies in the HubSpot and Salesforce directories.

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

Searches the HubSpot Solutions Directory and Salesforce AppExchange consultants and returns one row per partner with tier, rating, website, countries, services, and certifications.

All of the work runs on Apify. This package is a thin client that starts the actor run, waits for it, and hands back the dataset rows.

## Quick start

You need Node.js 18 or newer and an Apify account with an API token.

Add this to your Claude Desktop config (`claude_desktop_config.json`), Cursor, or any MCP client:

```json
{
  "mcpServers": {
    "mamba-hubspot-salesforce-partner-directory": {
      "command": "npx",
      "args": [
        "-y",
        "@mambalabsdev/mcp-hubspot-salesforce-partner-directory"
      ],
      "env": {
        "APIFY_TOKEN": "your-apify-token"
      }
    }
  }
}
```

Restart the client. The `search_crm_partner_directories` tool appears.

## Prerequisites

- Node.js 18 or newer.
- An Apify API token from [console.apify.com/account/integrations](https://console.apify.com/account/integrations), set as `APIFY_TOKEN`. The server lists its tool without a token; a call needs one.

## Example prompts

- "Find HubSpot Elite and Diamond partners in Germany"
- "List Salesforce AppExchange consultants that mention CPQ, with their websites"

## Tool

`search_crm_partner_directories`. One tool. Example arguments:

```json
{
  "directories": [
    "hubspot"
  ],
  "keywords": [
    "migration"
  ],
  "max_results_per_search": 5
}
```

## Inputs

Every buyer facing input of the actor. Omitted inputs take the actor's own defaults.

| Input | Type | Required | Description |
|---|---|---|---|
| `directories` | array | no | hubspot, salesforce, or both. Empty reads both. |
| `keywords` | array | no | Optional. One search per keyword in each directory, for example migration, CPQ, or a service name. Empty lists the whole directory in the directory's own order. In Clay, wrap a column in a one item list. |
| `hubspot_tiers` | array | no | Optional. HubSpot only: elite, diamond, platinum, gold. Empty returns every tier. |
| `countries` | array | no | Optional. HubSpot only: two letter country codes of the partner's office, for example US, GB, DE. Salesforce AppExchange has no country filter in its list; Salesforce rows carry their countries when details are on. |
| `include_details` | boolean | no | true (default): read each profile for website, countries, regions, industries, services, certifications, and for Salesforce the published company email and phone; charged as a partner detail row. false: list fields only, charged as a partner row. |
| `max_results_per_search` | number | no | Partners returned per directory and keyword, 1 to 5000. Default 50. |
| `dedupe` | boolean | no | true (default): a partner already returned in this run is skipped and not charged. |
| `max_charge_usd` | number | no | Optional. The run stops before a charge that would pass this amount. Summary rows are always returned. |

## Pricing

Pay per event on Apify, billed to your Apify account. Prices in USD.

| Event | Free plan | Bronze | Silver | Gold |
|---|---|---|---|---|
| `partner-row`, one partner, list fields | $0.003 | $0.00285 | $0.0027 | $0.00255 |
| `partner-detail-row`, one partner with its profile | $0.005 | $0.00475 | $0.0045 | $0.00425 |
| `apify-actor-start`, per run start | $0.005 | $0.005 | $0.005 | $0.005 |

Search summaries, repeats, and refused input are free. Mamba Labs pays the platform costs of the run, Apify proxy traffic included.

## Full actor documentation

[apify.com/mambalabs/hubspot-salesforce-partner-directory](https://apify.com/mambalabs/hubspot-salesforce-partner-directory)

## License

MIT. See [LICENSE](LICENSE).
