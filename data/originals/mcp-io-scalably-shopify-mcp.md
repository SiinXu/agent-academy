# Shopify MCP

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![MCP](https://img.shields.io/badge/Model_Context_Protocol-compatible-01e9ac)
![Shopify Admin API](https://img.shields.io/badge/Shopify_Admin_GraphQL-2026--04-black)

A single MCP server exposing the full Shopify Admin GraphQL API read surface (version `2026-04`) through 6 universal tools. Read-only is enforced at the query-parser level: mutations are rejected before they ever reach Shopify, not merely discouraged. Multi-store by design: one server instance can serve many shops.

Built and maintained by [Scalably](https://scalably.io). Runs on the [Model Context Protocol](https://modelcontextprotocol.io). License: MIT.

> **Why read-only at the parser level?** Giving an AI agent write access to a live store is how you end up with a deleted product or a wrong-priced variant. This server enforces read-only by *parsing* every query and rejecting mutations before they leave the process, not by trusting the model to behave, and not by relying on Shopify-side scopes alone. It's the safety boundary an agent in production actually needs. ([more on the pattern](https://scalably.io/blog/how-to-build-mcp-server-python))

<!-- mcp-name: io.scalably/shopify-mcp -->

## Install

Claude Code:

```bash
claude mcp add shopify -e SHOPIFY_DOMAIN=my-store.myshopify.com -e SHOPIFY_ACCESS_TOKEN=shpat_... -- uvx scalably-shopify-mcp
```

Codex:

```bash
codex mcp add shopify --env SHOPIFY_DOMAIN=my-store.myshopify.com --env SHOPIFY_ACCESS_TOKEN=shpat_... -- uvx scalably-shopify-mcp
```

Claude Desktop: download `shopify-mcp.mcpb` from the latest GitHub release and open it.

## Setup

### Single store (simplest)

- `SHOPIFY_DOMAIN` or `SHOPIFY_SHOP_DOMAIN` - `<shop>.myshopify.com`
- Auth path A: `SHOPIFY_ACCESS_TOKEN` (legacy `shpat_`)
- Auth path B: `SHOPIFY_CLIENT_ID` + `SHOPIFY_CLIENT_SECRET` (Dev Dashboard custom app, client-credentials OAuth, 24h tokens auto-refreshed)

The single store registers under alias `default`; callers can omit the `shop` argument on tool calls.

### Multi-store (agency setups)

Set `SHOPIFY_STORES` to a JSON object mapping alias to store config:

```json
{
  "main":   {"domain": "my-store.myshopify.com",        "client_id": "...", "client_secret": "..."},
  "outlet": {"domain": "my-store-outlet.myshopify.com", "client_id": "...", "client_secret": "..."},
  "legacy": {"domain": "legacy-store.myshopify.com",    "access_token": "shpat_..."}
}
```

- Each store can use either `client_id` + `client_secret` (Dev Dashboard OAuth) or `access_token` (legacy `shpat_`).
- Aliases: `[a-z0-9][a-z0-9_-]{0,63}`, lowercase-normalized on load.
- Token cache is per-store-domain; one throttled store doesn't block others.

### Scopes needed (read-only)

Minimum viable: `read_products read_orders read_customers`.

Recommended baseline: `read_products read_orders read_customers read_inventory read_locations read_fulfillments read_discounts read_content read_themes read_files read_markets read_metaobjects read_metaobject_definitions read_reports read_translations read_locales read_shipping`.

Add `read_all_orders` for order history older than 60 days. Enable Protected customer data access in Dev Dashboard, Configuration, if the agent needs customer PII.

## Tools (6)

| Tool | What it does |
|---|---|
| `shopify_list_stores` | List all Shopify stores configured for this agent. Call first. |
| `shopify_graphql_query` | Arbitrary read-only GraphQL. Mutations rejected by the parser. |
| `shopify_graphql_introspect` | Schema introspection, full catalog or a single type. |
| `shopify_bulk_query` | Launch an async bulk export (JSONL). |
| `shopify_bulk_poll` | Poll a bulk operation status and download URL. |
| `shopify_shopifyql` | ShopifyQL analytics (SQL-like; requires `read_reports`). |

Every non-list tool takes an optional `shop` argument (alias or domain). Required when more than one store is configured; auto-selected when exactly one.

## Coverage

The full Admin GraphQL API read surface: any object, field, or connection accessible with the token's scopes is reachable via `shopify_graphql_query`. Anything large-scale (more than 10k records) should use `shopify_bulk_query`. Analytics goes through `shopify_shopifyql`.

## Configuration

| Variable | Required | Purpose |
|---|---|---|
| `SHOPIFY_DOMAIN`, `SHOPIFY_SHOP_DOMAIN` | one of these or `SHOPIFY_STORES` | Single-store admin domain, `<shop>.myshopify.com` |
| `SHOPIFY_ACCESS_TOKEN` | see above | Legacy `shpat_` access token (single-store auth path B) |
| `SHOPIFY_CLIENT_ID`, `SHOPIFY_CLIENT_SECRET` | see above | Dev Dashboard custom-app credentials (single-store auth path A) |
| `SHOPIFY_STORES` | no | JSON object mapping alias to store config; takes precedence over the single-store variables above |
| `SHOPIFY_STORE_<ALIAS>_DOMAIN`, `_CLIENT_ID`, `_CLIENT_SECRET`, `_ACCESS_TOKEN` | no | Prefix-key alternative to `SHOPIFY_STORES` for multi-store setups; one set of keys per store alias |
| `SHOPIFY_REQUEST_TIMEOUT_SECONDS` | no | HTTP request timeout in seconds (default 60) |
| `SHOPIFY_LOG_LEVEL` | no | INFO (default) or DEBUG |

## Read-only enforcement

Every query is parsed with `graphql-core` before transmission. The parser rejects:
- `subscription` operations (not supported by the Admin API anyway)
- Any top-level `mutation` except `bulkOperationCancel` (cancels an in-flight bulk job, no shop-data write)
- Malformed GraphQL (syntax errors)
- Queries over 100KB

`bulkOperationRunQuery` is not in the generic parser allowlist. Legitimate bulk exports go through the dedicated `shopify_bulk_query` tool, which validates the inner query with the same read-only check before wrapping it in the bulk mutation. Single source of truth, no reliance on Shopify-side validation.

## Rate limiting

Per-store cost-based leaky bucket (Shopify's model). Each response includes `extensions.cost.throttleStatus`. On `THROTTLED` errors, the server sleeps `ceil((requestedQueryCost - currentlyAvailable) / restoreRate)` seconds (minimum 1s) and retries up to 3 times before surfacing the error. Buckets are independent per store: a throttle on one store doesn't affect another.

## Reply shape

Tool replies mirror the underlying call rather than a uniform envelope. `shopify_list_stores` returns a JSON array of `{alias, domain, name, currency, auth_mode}`; every GraphQL-backed tool (`shopify_graphql_query`, `shopify_graphql_introspect`, `shopify_bulk_query`, `shopify_bulk_poll`, `shopify_shopifyql`) returns the raw Shopify Admin API response, `{"data": ..., "errors": ..., "extensions": ...}`, unwrapped. Tool-level failures (bad input, redacted transport errors) raise a plain error.

## Limits

100KB query size ceiling. Bulk exports: exactly one top-level connection per query, max 5 total connections, max depth 2, every nested connection node selects `id` without an alias; one bulk operation at a time per shop on API versions through 2025-10, up to 5 on 2026-01 and later. API version defaults to `2026-04`; override per call with `api_version="YYYY-MM"`.

## Verify

Each release lists the package version, the `.mcpb` sha256 and the production commit it was derived from in CHANGELOG.md. CI runs the tests and a clean install of the built wheel on every push.

## Privacy Policy

This connector runs locally, on your own machine, under your own Shopify credentials. It is a thin read-only bridge between your MCP client and Shopify's Admin API.

- **Data collection:** The connector collects no personal data and contains no telemetry, analytics, or external reporting. It does not phone home.
- **Data usage:** Shopify store data you query is returned to your local MCP client to fulfill your request, and is not used for any other purpose.
- **Data storage:** The connector stores nothing persistently. Access tokens are held in memory only for the life of the process and are never written to disk. The only network destination is Shopify's own API (`*.myshopify.com`), enforced by a domain allowlist.
- **Third-party sharing:** None. Data flows only between your machine and Shopify. No third party, including the connector's author, ever receives your data or credentials.
- **Retention:** No data is retained by the connector after the process exits.
- **Secret handling:** Access tokens, client secrets, and all Shopify token prefixes are redacted from logs and error messages.
- **Contact:** hello@scalably.io

The canonical hosted version of this policy: https://scalably.io/connector-privacy.html

## License

MIT. Copyright Scalably.

## Learn more

We write about building production MCP servers and AI agents at [scalably.io/blog](https://scalably.io/blog):
- [How to build an MCP server in Python](https://scalably.io/blog/how-to-build-mcp-server-python), the read-only enforcement pattern used here, from a server we run in production
- [What is an MCP server?](https://scalably.io/blog/what-is-an-mcp-server), the host/client/server model
- [MCP Inspector: debug your MCP server](https://scalably.io/blog/mcp-inspector-debug-mcp-server), the silent failures to watch for

## References

- [Shopify Admin GraphQL API](https://shopify.dev/docs/api/admin-graphql)
- [Client credentials grant](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/client-credentials-grant)
- [Rate limits](https://shopify.dev/docs/api/usage/rate-limits)
- [Bulk operations](https://shopify.dev/docs/api/usage/bulk-operations/queries)
- [ShopifyQL](https://shopify.dev/docs/api/shopifyql)
