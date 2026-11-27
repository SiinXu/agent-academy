# Book Newsletter Ads MCP server

A public, no-login [Model Context Protocol](https://modelcontextprotocol.io) server for [Book Newsletter Ads](https://booknewsletterads.com), a catalog of newsletter sponsorship options with public list prices in USD (3,593 newsletters at the time of writing).

An AI assistant can search newsletters and prices, then send an inquiry. **The advertiser sends an inquiry through the platform, we pass it to the publisher, who replies to you directly** with availability and booking. There is no buyer fee, we do not take payment, and an inquiry is not a confirmed placement.

This repository only holds the public listing metadata. The server itself is hosted at the endpoint below.

| | |
| --- | --- |
| Endpoint | `https://booknewsletterads.com/mcp` |
| Transport | Streamable HTTP |
| Authentication | None |
| Registry name | `com.booknewsletterads/catalog` |
| Docs | https://booknewsletterads.com/mcp.html |
| Privacy | https://booknewsletterads.com/privacy.html |
| Terms | https://booknewsletterads.com/terms.html |

## Tools

| Tool | What it does |
| --- | --- |
| `search_newsletters` | Filter the public catalog by keyword, category, niche, language, audience country, ad type (header, mid, full-send), USD price range and subscribers. |
| `get_newsletter` | One newsletter with its public offers, list prices and its page on booknewsletterads.com. |
| `list_categories` | The categories, languages, ad types and countries that are in the catalog. |
| `send_inquiry` | Records an advertiser inquiry. We pass it to the publisher, who replies to the advertiser directly. Set `accept_terms` only after the person agrees that their name, email and message are passed to the publisher. |

Publisher emails, phone numbers and contact names are not available through this server.

## Connect

### Cursor

```json
{
  "mcpServers": {
    "book-newsletter-ads": {
      "url": "https://booknewsletterads.com/mcp"
    }
  }
}
```

### Claude Desktop

```json
{
  "mcpServers": {
    "book-newsletter-ads": {
      "type": "http",
      "url": "https://booknewsletterads.com/mcp"
    }
  }
}
```

### Claude Code

```bash
claude mcp add --transport http book-newsletter-ads https://booknewsletterads.com/mcp
```

### VS Code

```json
{
  "servers": {
    "book-newsletter-ads": {
      "type": "http",
      "url": "https://booknewsletterads.com/mcp"
    }
  }
}
```

### ChatGPT

Add a custom connector (developer mode) with the server URL `https://booknewsletterads.com/mcp` and no authentication. Any other Streamable HTTP client can use the same URL.

## Abuse protection

Because there is no login, inquiries are validated and rate limited per IP and globally. Duplicate inquiries within 24 hours are not stored twice.

## Contact

contact@booknewsletterads.com

## License

[MIT](LICENSE)
