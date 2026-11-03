# Klaviyo MCP Server by Insightful Pipe

[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue)](https://insightfulpipe.com/mcp-servers/klaviyo)
[![Insightful Pipe](https://img.shields.io/badge/Insightful_Pipe-MCP_Servers-purple)](https://insightfulpipe.com/mcp-servers)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Connect Klaviyo to AI assistants: campaigns, flows, lists, segments and performance reports.**

Part of the [Insightful Pipe MCP Server Collection](https://insightfulpipe.com/mcp-servers) — use Klaviyo from Claude, ChatGPT, Cursor, and other AI assistants through the Model Context Protocol (MCP).

<img src="images/klaviyo-icon.png" alt="Klaviyo MCP Server" width="64" height="64">

## MCP Server URL

```
https://klaviyo.insightfulmcp.com/
```

## What is Klaviyo MCP?

Klaviyo MCP is a **remote Model Context Protocol server** hosted by InsightfulPipe. Access email campaigns, flows, lists, segments, metrics, and marketing performance data from your Klaviyo account.

## Installation

### Claude

1. Copy the MCP Server URL: `https://klaviyo.insightfulmcp.com/`
2. Open [Claude Connectors Settings](https://claude.ai/settings/connectors)
3. Scroll to the bottom and click **Add custom connector**
4. Paste the URL and click **Add**
5. Click **Connect** and sign in to InsightfulPipe if asked. Claude then lists the connector as connected.

### ChatGPT

Custom MCP servers are added through ChatGPT's **Developer mode**. Availability depends on your ChatGPT plan, and workspace admins may need to allow it.

1. Turn on **Developer mode** in ChatGPT settings
2. Create a new app for a remote MCP server and paste the URL: `https://klaviyo.insightfulmcp.com/`
3. Sign in to InsightfulPipe if asked. The connection finishes as soon as you are signed in.

See OpenAI's guide: [Developer mode and MCP apps in ChatGPT](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)

### Claude Code

```bash
claude mcp add --transport http klaviyo https://klaviyo.insightfulmcp.com/
```

### Cursor

Add the server to `~/.cursor/mcp.json` (all projects) or `.cursor/mcp.json` (one project):

```json
{
  "mcpServers": {
    "klaviyo": {
      "url": "https://klaviyo.insightfulmcp.com/"
    }
  }
}
```

When Cursor shows **Needs authentication**, click **Connect** and sign in to InsightfulPipe if asked.

## Available Actions

63 actions: 37 read, 26 write.

### Read Actions (37)

<details>
<summary>Show all 37 read actions</summary>

| Action | Description |
|--------|-------------|
| `get_account_details` | Get details about the Klaviyo account (company info, contact, preferences) |
| `get_campaign` | Get a single campaign by ID |
| `get_campaign_report` | Get campaign performance statistics (recipients, delivered, opens, clicks, conversions, revenue, unsubscribes, bounces) |
| `get_campaign_send_job` | Get the status of a campaign send job (queued, processing, complete, cancelled) |
| `get_campaigns` | List all campaigns with optional filtering |
| `get_catalog_item` | Get a single catalog item by ID |
| `get_catalog_items` | List catalog items (products synced to Klaviyo) |
| `get_coupon_codes` | List all coupon codes |
| `get_coupons` | List all coupons |
| `get_custom_metric` | Get a single custom metric by ID |
| `get_custom_metrics` | List custom metrics (account-defined metrics built from standard ones) |
| `get_email_template` | Get a single email template by ID |
| `get_email_templates` | List email templates (name, editor type, timestamps; definition on request) |
| `get_event` | Get a single event by ID, optionally with its metric and profile |
| `get_events` | List events (tracked actions) with optional filtering |
| `get_flow` | Get a single flow by ID |
| `get_flow_report` | Get flow performance statistics (recipients, delivered, opens, clicks, conversions, revenue, unsubscribes, bounces) |
| `get_flow_series_report` | Get flow performance statistics as a time series (hourly, daily, weekly or monthly buckets) |
| `get_flows` | List all flows (automated email/SMS sequences) |
| `get_form_report` | Get sign-up form performance (views, submits, submit rate, step views, qualified and closed forms) |
| `get_form_series_report` | Get sign-up form performance as a time series |
| `get_list` | Get a single list by ID |
| `get_list_profiles` | List the profiles that are members of a list |
| `get_lists` | List all lists/audiences |
| `get_metric` | Get a single metric by ID |
| `get_metrics` | List all metrics (event types tracked in Klaviyo) |
| `get_profile` | Get a single profile by ID |
| `get_profiles` | List all profiles with optional filtering |
| `get_segment` | Get a single segment by ID |
| `get_segment_profiles` | List the profiles that currently belong to a segment |
| `get_segment_report` | Get segment membership totals and changes (members added, removed, net change, total) |
| `get_segment_series_report` | Get segment membership statistics as a time series |
| `get_segments` | List all segments |
| `get_tag` | Get a single tag by ID |
| `get_tag_group` | Get a single tag group by ID |
| `get_tag_groups` | List tag groups (name, default, exclusive) |
| `get_tags` | List all tags |

</details>

### Write Actions (26)

<details>
<summary>Show all 26 write actions</summary>

| Action | Description |
|--------|-------------|
| `add_profiles_to_list` | Add one or more profiles to a list |
| `assign_template_to_campaign_message` | Assign an email template to a campaign message |
| `cancel_campaign_send` | Cancel a queued campaign send, or revert a scheduled campaign back to draft |
| `clone_email_template` | Clone an existing email template |
| `create_campaign` | Create a new campaign |
| `create_catalog_item` | Create a new catalog item |
| `create_coupon` | Create a new coupon |
| `create_coupon_codes` | Bulk create coupon codes for a coupon |
| `create_email_template` | Create a new email template |
| `create_event` | Create/track a new event |
| `create_events_bulk` | Create many events in one request (async job) |
| `create_list` | Create a new list/audience |
| `create_profile` | Create a new profile |
| `create_tag` | Create a new tag |
| `send_campaign` | Send a campaign immediately or schedule it |
| `subscribe_profile_to_marketing` | Subscribe one or more profiles to email/SMS marketing |
| `suppress_profiles` | Suppress (unsubscribe) one or more profiles from all marketing |
| `unsubscribe_profile_from_marketing` | Unsubscribe one or more profiles from email/SMS marketing |
| `update_campaign` | Update an existing campaign |
| `update_campaign_message` | Update a campaign message (subject, preview text, etc.) |
| `update_catalog_item` | Update an existing catalog item |
| `update_email_template` | Update an existing email template |
| `update_flow_status` | Update a flow's status (e.g. set to live, draft, or manual) |
| `update_list` | Update an existing list |
| `update_profile` | Update an existing profile |
| `upload_image_from_url` | Upload an image to Klaviyo from a URL |

</details>

## Control What Your AI Can Do

You decide what AI agents can do with each connected account:

- **Turn individual actions on or off** for every connected account, so agents only see the actions you allow.
- **Connect as Read-only or Read & Write.** A read-only connection can only enable read actions.
- **Destructive actions stay off by default.** Actions such as deletes are disabled until an admin enables them.
- **Team access per account.** Restricted team members only use the accounts they are granted, with the read actions enabled on them.

## Usage Examples

```
"Show the campaign report for last month's newsletters"
```

```
"Show performance for my active flows"
```

```
"Create a list called "VIP Customers""
```

## Pricing

The Klaviyo MCP server is included in every InsightfulPipe plan, together with all other MCP servers and the CLI. Plans start at $29.99/month, and you can try it for 7 days. See [insightfulpipe.com/pricing](https://insightfulpipe.com/pricing) for current plans.

## Explore More MCP Servers by Insightful Pipe

Visit **[insightfulpipe.com/mcp-servers](https://insightfulpipe.com/mcp-servers)** to discover our full collection of MCP servers.

- [Mailchimp MCP](https://insightfulpipe.com/mcp-servers/mailchimp)
- [Shopify MCP](https://insightfulpipe.com/mcp-servers/shopify)

**[View All MCP Servers →](https://insightfulpipe.com/mcp-servers)**

## Resources

- [Documentation](https://insightfulpipe.com/docs)
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
