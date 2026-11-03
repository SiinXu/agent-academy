# insanedev MCP servers

Remote MCP servers for the insanedev Actors on Apify. Each one runs on Apify's hosted MCP server
(`mcp.apify.com`), so there is nothing to install: add the URL to your MCP client and sign in with your Apify account.

| Server | What it does | MCP URL |
| --- | --- | --- |
| [Shopify Store Leads](shopify-store-leads/) | Shopify stores by country, installed apps, theme or brand, with public e-mails, phones and social profiles | `https://mcp.apify.com/?tools=insanedev/shopify-store-list` |

Runs are billed to your own Apify account at the Actor's Store price. Apify gives every account $5 of free usage a month.

## Connect

Claude (claude.ai or Claude Desktop): Settings → Connectors → Add custom connector, paste the URL and sign in to Apify.

Claude Code:

```bash
claude mcp add --transport http shopify-store-leads "https://mcp.apify.com/?tools=insanedev/shopify-store-list"
```

Cursor, VS Code and other clients that take a JSON config:

```json
{
  "mcpServers": {
    "shopify-store-leads": {
      "url": "https://mcp.apify.com/?tools=insanedev/shopify-store-list"
    }
  }
}
```

If your client has no OAuth support, add the header `Authorization: Bearer <your Apify API token>`. The token is in
[Apify Console → Settings → API & Integrations](https://console.apify.com/settings/integrations).

## License

MIT for this repository (configuration and docs). The Actors themselves are paid services on Apify.
