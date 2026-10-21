# Shopify MCP Server by Insightful Pipe

[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue)](https://insightfulpipe.com/mcp-servers/shopify)
[![Insightful Pipe](https://img.shields.io/badge/Insightful_Pipe-MCP_Servers-purple)](https://insightfulpipe.com/mcp-servers)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Connect Shopify to AI assistants: orders, products, customers and store analytics.**

Part of the [Insightful Pipe MCP Server Collection](https://insightfulpipe.com/mcp-servers) — use Shopify from Claude, ChatGPT, Cursor, and other AI assistants through the Model Context Protocol (MCP).

<img src="images/shopify-icon.svg" alt="Shopify MCP Server" width="64" height="64">

## MCP Server URL

```
https://shopify.insightfulmcp.com/
```

## What is Shopify MCP?

Shopify MCP is a **remote Model Context Protocol server** hosted by InsightfulPipe. Access store analytics, order data, product performance, and customer insights from your Shopify store.

## Installation

### Claude

1. Copy the MCP Server URL: `https://shopify.insightfulmcp.com/`
2. Open [Claude Connectors Settings](https://claude.ai/settings/connectors)
3. Scroll to the bottom and click **Add custom connector**
4. Paste the URL and click **Add**
5. Click **Connect** and sign in to InsightfulPipe if asked. Claude then lists the connector as connected.

### ChatGPT

Custom MCP servers are added through ChatGPT's **Developer mode**. Availability depends on your ChatGPT plan, and workspace admins may need to allow it.

1. Turn on **Developer mode** in ChatGPT settings
2. Create a new app for a remote MCP server and paste the URL: `https://shopify.insightfulmcp.com/`
3. Sign in to InsightfulPipe if asked. The connection finishes as soon as you are signed in.

See OpenAI's guide: [Developer mode and MCP apps in ChatGPT](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)

### Claude Code

```bash
claude mcp add --transport http shopify https://shopify.insightfulmcp.com/
```

### Cursor

Add the server to `~/.cursor/mcp.json` (all projects) or `.cursor/mcp.json` (one project):

```json
{
  "mcpServers": {
    "shopify": {
      "url": "https://shopify.insightfulmcp.com/"
    }
  }
}
```

When Cursor shows **Needs authentication**, click **Connect** and sign in to InsightfulPipe if asked.

## Available Actions

116 actions: 76 read, 40 write.

### Read Actions (76)

<details>
<summary>Show all 76 read actions</summary>

| Action | Description |
|--------|-------------|
| `get_article` | Get a specific article by ID |
| `get_articles` | List all articles for a blog |
| `get_articles_count` | Get count of articles for a blog |
| `get_balance` | Get current Shopify Payments account balance |
| `get_blog` | Get a specific blog by ID |
| `get_blogs` | List all blogs |
| `get_checkouts` | List abandoned checkouts |
| `get_collection_products` | List all products in a collection |
| `get_collects` | List product-collection relationships |
| `get_countries` | List all countries/regions configured for the store |
| `get_country` | Get a specific country by ID |
| `get_custom_collections` | List all custom (manual) collections |
| `get_customer` | Get a specific customer by ID |
| `get_customer_metafields` | List all metafields for a customer |
| `get_customer_orders` | List all orders for a specific customer |
| `get_customers` | List all customers |
| `get_customers_count` | Get count of customers |
| `get_discount_code` | Get a specific discount code by ID |
| `get_discount_codes` | List all discount codes for a price rule |
| `get_disputes` | List payment disputes (chargebacks) |
| `get_draft_order` | Get a specific draft order by ID |
| `get_draft_orders` | List all draft orders |
| `get_draft_orders_count` | Get count of draft orders |
| `get_events` | List all events |
| `get_fulfillment_orders` | List all fulfillment orders for an order |
| `get_fulfillments` | List all fulfillments for an order |
| `get_gift_card` | Get a specific gift card by ID |
| `get_gift_cards` | List all gift cards (Shopify Plus only) |
| `get_gift_cards_count` | Get count of gift cards |
| `get_inventory_item` | Get a specific inventory item by ID |
| `get_inventory_items` | List inventory items by IDs |
| `get_inventory_levels` | List inventory levels for items or locations |
| `get_location` | Get a specific location by ID |
| `get_locations` | List all locations |
| `get_marketing_events` | List all marketing events |
| `get_metafields` | List all shop-level metafields |
| `get_order` | Get a specific order by ID |
| `get_order_metafields` | List all metafields for an order |
| `get_order_risks` | List fraud risk assessments for an order |
| `get_orders` | List all orders |
| `get_orders_count` | Get count of orders |
| `get_page` | Get a specific page by ID |
| `get_pages` | List all pages (CMS content) |
| `get_pages_count` | Get count of pages |
| `get_payouts` | List Shopify Payments payouts |
| `get_policies` | List all store policies (refund, privacy, terms, etc.) |
| `get_price_rule` | Get a specific price rule by ID |
| `get_price_rules` | List all price rules (discounts/promotions) |
| `get_product` | Get a specific product by ID |
| `get_product_image` | Get a specific product image by ID |
| `get_product_images` | List all images for a product |
| `get_product_metafields` | List all metafields for a product |
| `get_products` | List all products |
| `get_products_count` | Get count of products |
| `get_redirect` | Get a specific redirect by ID |
| `get_redirects` | List all URL redirects |
| `get_redirects_count` | Get count of redirects |
| `get_refund` | Get a specific refund by ID |
| `get_refunds` | List all refunds for an order |
| `get_script_tags` | List all script tags |
| `get_shipping_zones` | List all shipping zones with rates |
| `get_shop` | Get shop information |
| `get_smart_collections` | List all smart (automated) collections |
| `get_tender_transactions` | List tender transactions (payment method breakdown) |
| `get_theme` | Get a specific theme by ID |
| `get_theme_asset` | Read one theme file's contents by its key (e.g. templates/page.json) |
| `get_theme_assets` | List every file (template, section, snippet, asset) in a theme, without file contents |
| `get_themes` | List all themes |
| `get_transaction` | Get a specific transaction by ID |
| `get_transactions` | List all transactions for an order |
| `get_variant` | Get a specific variant by ID |
| `get_variants` | List all variants for a product |
| `get_webhook` | Get a specific webhook by ID |
| `get_webhooks` | List all webhook subscriptions |
| `get_webhooks_count` | Get count of webhooks |
| `search_customers` | Search customers by query string |

</details>

### Write Actions (40)

<details>
<summary>Show all 40 write actions</summary>

| Action | Description |
|--------|-------------|
| `adjust_inventory` | Adjust inventory level at a location (add or subtract) |
| `calculate_refund` | Calculate a refund for an order (preview without creating) |
| `cancel_order` | Cancel an open order |
| `close_order` | Close a completed order |
| `complete_draft_order` | Complete a draft order (mark as paid) |
| `connect_inventory` | Connect an inventory item to a location |
| `create_article` | Create a new article in a blog |
| `create_blog` | Create a new blog on the online store |
| `create_collect` | Add a product to a collection |
| `create_custom_collection` | Create a new custom (manual) collection |
| `create_customer` | Create a new customer |
| `create_draft_order` | Create a new draft order |
| `create_fulfillment` | Create a fulfillment for one or more fulfillment orders |
| `create_metafield` | Create a new shop-level metafield |
| `create_page` | Create a new online store page |
| `create_product` | Create a new product |
| `create_product_image` | Add an image to a product |
| `create_refund` | Create a refund for an order |
| `create_smart_collection` | Create a new smart (automated) collection |
| `create_webhook` | Create a new webhook subscription |
| `delete_page` | Delete an online store page |
| `delete_theme_asset` | Delete a file from a theme |
| `reopen_order` | Reopen a closed order |
| `send_customer_invite` | Send an account invite email to a customer |
| `send_draft_order_invoice` | Send an invoice for a draft order |
| `set_inventory` | Set inventory level to an exact quantity |
| `update_article` | Update an existing article |
| `update_blog` | Update an existing blog |
| `update_custom_collection` | Update an existing custom collection |
| `update_customer` | Update an existing customer |
| `update_draft_order` | Update an existing draft order |
| `update_metafield` | Update an existing metafield |
| `update_page` | Update an existing online store page |
| `update_product` | Update an existing product |
| `update_product_image` | Update a product image |
| `update_smart_collection` | Update an existing smart collection |
| `update_tracking` | Update tracking information for an existing fulfillment |
| `update_variant` | Update a product variant (price, SKU, inventory, etc.) |
| `update_webhook` | Update an existing webhook subscription |
| `upsert_theme_asset` | Create or replace a theme file (template, section, snippet or asset) |

</details>

## Control What Your AI Can Do

You decide what AI agents can do with each connected account:

- **Turn individual actions on or off** for every connected account, so agents only see the actions you allow.
- **Connect as Read-only or Read & Write.** A read-only connection can only enable read actions.
- **Destructive actions stay off by default.** Actions such as deletes are disabled until an admin enables them.
- **Team access per account.** Restricted team members only use the accounts they are granted, with the read actions enabled on them.

## Usage Examples

```
"What were my total orders and top-selling products last week?"
```

```
"Show inventory levels for my best-selling products"
```

```
"List customers who placed more than three orders"
```

## Pricing

The Shopify MCP server is included in every InsightfulPipe plan, together with all other MCP servers and the CLI. Plans start at $29.99/month, and you can try it for 7 days. See [insightfulpipe.com/pricing](https://insightfulpipe.com/pricing) for current plans.

## Explore More MCP Servers by Insightful Pipe

Visit **[insightfulpipe.com/mcp-servers](https://insightfulpipe.com/mcp-servers)** to discover our full collection of MCP servers.

- [WooCommerce MCP](https://insightfulpipe.com/mcp-servers/woocommerce)
- [Magento MCP](https://insightfulpipe.com/mcp-servers/magento)
- [Google Merchant Center MCP](https://insightfulpipe.com/mcp-servers/google-merchant-center)

**[View All MCP Servers →](https://insightfulpipe.com/mcp-servers)**

## Resources

- [Documentation](https://insightfulpipe.com/docs/connectors-shopify)
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
