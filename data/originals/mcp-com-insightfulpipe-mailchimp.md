# Mailchimp MCP Server by Insightful Pipe

[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue)](https://insightfulpipe.com/mcp-servers/mailchimp)
[![Insightful Pipe](https://img.shields.io/badge/Insightful_Pipe-MCP_Servers-purple)](https://insightfulpipe.com/mcp-servers)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Connect Mailchimp to AI assistants: campaigns, audiences, automations and email reports.**

Part of the [Insightful Pipe MCP Server Collection](https://insightfulpipe.com/mcp-servers) — use Mailchimp from Claude, ChatGPT, Cursor, and other AI assistants through the Model Context Protocol (MCP).

<img src="images/mailchimp-icon.png" alt="Mailchimp MCP Server" width="64" height="64">

## MCP Server URL

```
https://mailchimp.insightfulmcp.com/
```

## What is Mailchimp MCP?

Mailchimp MCP is a **remote Model Context Protocol server** hosted by InsightfulPipe. Access campaigns, audiences, automations, templates, and email performance analytics from your Mailchimp account.

## Installation

### Claude

1. Copy the MCP Server URL: `https://mailchimp.insightfulmcp.com/`
2. Open [Claude Connectors Settings](https://claude.ai/settings/connectors)
3. Scroll to the bottom and click **Add custom connector**
4. Paste the URL and click **Add**
5. Click **Connect** and sign in to InsightfulPipe if asked. Claude then lists the connector as connected.

### ChatGPT

Custom MCP servers are added through ChatGPT's **Developer mode**. Availability depends on your ChatGPT plan, and workspace admins may need to allow it.

1. Turn on **Developer mode** in ChatGPT settings
2. Create a new app for a remote MCP server and paste the URL: `https://mailchimp.insightfulmcp.com/`
3. Sign in to InsightfulPipe if asked. The connection finishes as soon as you are signed in.

See OpenAI's guide: [Developer mode and MCP apps in ChatGPT](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)

### Claude Code

```bash
claude mcp add --transport http mailchimp https://mailchimp.insightfulmcp.com/
```

### Cursor

Add the server to `~/.cursor/mcp.json` (all projects) or `.cursor/mcp.json` (one project):

```json
{
  "mcpServers": {
    "mailchimp": {
      "url": "https://mailchimp.insightfulmcp.com/"
    }
  }
}
```

When Cursor shows **Needs authentication**, click **Connect** and sign in to InsightfulPipe if asked.

## Available Actions

231 actions: 105 read, 126 write.

### Read Actions (105)

<details>
<summary>Show all 105 read actions</summary>

| Action | Description |
|--------|-------------|
| `get_account` | Get information about the Mailchimp account (root resource) |
| `get_account_export` | Get the status of an account export job |
| `get_activity_feed` | Get the activity feed (chimp chatter) for the account |
| `get_authorized_app` | Get a specific authorized application |
| `get_automation` | Get a specific automation |
| `get_automation_email` | Get a specific email in an automation workflow |
| `get_automation_email_queue` | Get the subscriber queue for an automation email |
| `get_automation_removed_subscribers` | Get subscribers removed from an automation workflow |
| `get_batch` | Get the status of a batch operation request |
| `get_campaign` | Get details of a specific campaign |
| `get_campaign_content` | Get the HTML and plain-text content of a campaign |
| `get_campaign_feedback` | List feedback messages for a campaign |
| `get_campaign_folder` | Get a specific campaign folder |
| `get_campaign_send_checklist` | Get the send checklist for a campaign |
| `get_connected_site` | Get a specific connected site |
| `get_conversation` | Get a specific conversation |
| `get_conversation_messages` | List messages in a conversation |
| `get_customer` | Get a specific customer from an e-commerce store |
| `get_facebook_ad` | Get a specific Facebook ad created through Mailchimp |
| `get_facebook_ad_report` | Get reporting data for a specific Facebook ad |
| `get_file` | Get a specific file |
| `get_growth_history` | Get growth history for a list/audience |
| `get_landing_page` | Get a specific landing page |
| `get_landing_page_content` | Get the content for a specific landing page |
| `get_landing_page_report` | Get reporting data for a specific landing page |
| `get_list` | Get details of a specific list/audience |
| `get_list_abuse_reports` | Get abuse reports for a list/audience |
| `get_list_activity` | Get recent activity for a list/audience |
| `get_list_clients` | Get email client usage statistics for a list/audience |
| `get_list_locations` | Get geographic locations for a list's subscribers |
| `get_list_signup_forms` | Get signup forms for a list/audience |
| `get_list_webhooks` | Get webhooks configured for a list/audience |
| `get_member` | Get a specific member |
| `get_member_activity` | Get recent activity for a specific list member |
| `get_member_activity_feed` | Get the activity feed for a specific list member |
| `get_member_events` | Get events for a specific list member |
| `get_member_goals` | Get goal events for a specific list member |
| `get_member_notes` | Get notes for a specific list member |
| `get_member_tags` | Get tags for a specific list member |
| `get_order` | Get a specific order from an e-commerce store |
| `get_product` | Get a specific product from an e-commerce store |
| `get_report` | Get a specific campaign report |
| `get_report_abuse_reports` | Get abuse reports for a campaign |
| `get_report_advice` | Get advice and recommendations for a campaign report |
| `get_report_click_details` | Get click activity for a campaign report |
| `get_report_click_details_for_link` | Get click details for a specific link in a campaign report |
| `get_report_click_subscribers` | Get subscribers who clicked a specific link in a campaign |
| `get_report_domain_performance` | Get domain performance stats (ISP breakdown) for a campaign |
| `get_report_ecommerce_product_activity` | Get e-commerce product activity for a campaign |
| `get_report_email_activity` | Get per-subscriber email activity (opens, clicks, bounces) for a campaign |
| `get_report_locations` | Get geographic open locations for a campaign |
| `get_report_open_details` | Get open activity for a campaign report |
| `get_report_sent_to` | Get list of campaign recipients |
| `get_report_sub_reports` | Get sub-reports for a campaign (A/B split or multivariate) |
| `get_report_unsubscribes` | Get unsubscribes for a campaign report |
| `get_segment` | Get a specific segment |
| `get_segment_members` | List members in a specific segment |
| `get_store` | Get a specific e-commerce store |
| `get_survey_questions` | Get questions and responses for a survey |
| `get_survey_report` | Get reporting data for a specific survey |
| `get_survey_responses` | Get responses for a survey |
| `get_template` | Get a specific template |
| `get_template_default_content` | Get the default content for a template |
| `get_template_folder` | Get a specific template folder |
| `get_verified_domain` | Get a specific verified sending domain |
| `list_account_exports` | List account export jobs |
| `list_all_orders` | List all orders across all e-commerce stores |
| `list_authorized_apps` | List authorized applications connected to the account |
| `list_automation_emails` | List emails in an automation workflow |
| `list_automations` | List all automations |
| `list_batches` | List batch operation requests |
| `list_campaign_folders` | List all campaign folders |
| `list_campaigns` | List all campaigns |
| `list_carts` | List carts for an e-commerce store |
| `list_connected_sites` | List all connected sites |
| `list_conversations` | List conversations |
| `list_customers` | List customers of an e-commerce store |
| `list_facebook_ads` | List Facebook ads created through Mailchimp |
| `list_facebook_ads_reports` | List reporting data for Facebook ads |
| `list_file_folders` | List folders in the file manager |
| `list_files` | List files in the file manager |
| `list_interest_categories` | List interest categories for a list/audience |
| `list_interests` | List interests in a category |
| `list_landing_page_reports` | List reporting data for landing pages |
| `list_landing_pages` | List all landing pages |
| `list_lists` | List all audiences/lists |
| `list_members` | List members of a specific list/audience |
| `list_merge_fields` | List merge fields for a list/audience |
| `list_order_lines` | List line items for an order |
| `list_orders` | List orders in an e-commerce store |
| `list_product_images` | List images for a product |
| `list_product_variants` | List variants for a product |
| `list_products` | List products in an e-commerce store |
| `list_promo_codes` | List promo codes for a promo rule |
| `list_promo_rules` | List promo rules for an e-commerce store |
| `list_reports` | List campaign reports |
| `list_segments` | List segments for a list/audience |
| `list_stores` | List all connected e-commerce stores |
| `list_survey_reports` | List reporting data for surveys |
| `list_tags` | List tags for a list/audience |
| `list_template_folders` | List all template folders |
| `list_templates` | List all templates |
| `list_verified_domains` | List all verified sending domains |
| `search_campaigns` | Search campaigns by query string |
| `search_members` | Search members across all lists by query string |

</details>

### Write Actions (126)

<details>
<summary>Show all 126 write actions</summary>

| Action | Description |
|--------|-------------|
| `add_automation_email_subscriber` | Add a subscriber to an automation email queue |
| `add_campaign_feedback` | Add feedback on a campaign |
| `add_member` | Add a new member to a list/audience |
| `add_segment_member` | Add a member to a static segment |
| `archive_automation` | Archive an automation |
| `archive_member` | Archive (soft delete) a list member |
| `batch_list_members` | Batch subscribe or unsubscribe list members |
| `batch_segment_members` | Batch add/remove members to/from a static segment |
| `cancel_campaign` | Cancel a campaign that is sending |
| `create_account_export` | Create an account data export |
| `create_batch_webhook` | Create a batch webhook |
| `create_campaign` | Create a new campaign |
| `create_campaign_folder` | Create a new campaign folder |
| `create_cart` | Add a cart to an e-commerce store |
| `create_cart_line` | Add a line item to a cart |
| `create_connected_site` | Create a connected site |
| `create_customer` | Add a customer to an e-commerce store |
| `create_file_folder` | Create a folder in the file manager |
| `create_interest` | Create an interest (group option) in a category |
| `create_interest_category` | Create an interest category (group title) for a list |
| `create_landing_page` | Create a new landing page |
| `create_list` | Create a new list/audience |
| `create_list_webhook` | Create a new webhook for a list/audience |
| `create_member_event` | Create a custom event for a list member (used in automations/journeys) |
| `create_member_note` | Add a note to a list member |
| `create_merge_field` | Add a new merge field to a list |
| `create_order` | Add an order to an e-commerce store |
| `create_order_line` | Add a line item to an order |
| `create_product` | Add a product to an e-commerce store |
| `create_product_image` | Add an image to a product |
| `create_product_variant` | Add a variant to a product |
| `create_promo_code` | Add a promo code to a promo rule |
| `create_promo_rule` | Add a promo rule to an e-commerce store |
| `create_segment` | Create a new segment for a list/audience |
| `create_store` | Create a new e-commerce store |
| `create_template` | Create a new template |
| `create_template_folder` | Create a new template folder |
| `create_verified_domain` | Add a domain to verify for sending |
| `delete_automation_email` | Delete an automation email |
| `delete_batch` | Stop/delete a batch operation request |
| `delete_batch_webhook` | Delete a batch webhook |
| `delete_campaign` | Delete a campaign |
| `delete_campaign_feedback` | Delete a campaign feedback message |
| `delete_campaign_folder` | Delete a campaign folder |
| `delete_cart` | Delete a cart |
| `delete_cart_line` | Delete a cart line item |
| `delete_connected_site` | Delete a connected site |
| `delete_customer` | Delete an e-commerce customer |
| `delete_file` | Delete a file from the file manager |
| `delete_file_folder` | Delete a file manager folder |
| `delete_interest` | Delete an interest |
| `delete_interest_category` | Delete an interest category |
| `delete_landing_page` | Delete a landing page |
| `delete_list` | Delete a list/audience |
| `delete_list_webhook` | Delete a list webhook |
| `delete_member_note` | Delete a note from a list member |
| `delete_member_permanent` | Permanently delete a list member (GDPR) |
| `delete_merge_field` | Delete a merge field |
| `delete_order` | Delete an order |
| `delete_order_line` | Delete an order line item |
| `delete_product` | Delete a product from an e-commerce store |
| `delete_product_image` | Delete a product image |
| `delete_product_variant` | Delete a product variant |
| `delete_promo_code` | Delete a promo code |
| `delete_promo_rule` | Delete a promo rule |
| `delete_segment` | Delete a segment |
| `delete_store` | Delete an e-commerce store |
| `delete_template` | Delete a template |
| `delete_template_folder` | Delete a template folder |
| `delete_verified_domain` | Delete a verified domain |
| `pause_all_automation_emails` | Pause all emails in an automation |
| `pause_automation_email` | Pause a specific automation email |
| `pause_campaign` | Pause an RSS-driven campaign |
| `publish_landing_page` | Publish a landing page |
| `publish_survey` | Publish a survey |
| `remove_automation_subscriber` | Remove a subscriber from an automation workflow |
| `remove_segment_member` | Remove a member from a static segment |
| `replicate_campaign` | Replicate/copy a campaign |
| `resend_campaign` | Resend a campaign to non-openers |
| `resume_campaign` | Resume a paused RSS-driven campaign |
| `schedule_campaign` | Schedule a campaign for delivery at a specific time |
| `send_campaign` | Send a campaign |
| `send_test_email` | Send a test email for a campaign |
| `set_campaign_content` | Set the content (HTML/template) for a campaign |
| `set_customer` | Add or update an e-commerce customer (upsert) |
| `set_member` | Add or update a list member (upsert) |
| `start_all_automation_emails` | Start all emails in an automation |
| `start_automation_email` | Start a specific automation email |
| `start_batch` | Start a batch operation request |
| `trigger_customer_journey` | Trigger a step in a customer journey for a contact |
| `unpublish_landing_page` | Unpublish a landing page |
| `unpublish_survey` | Unpublish a survey |
| `unschedule_campaign` | Unschedule a scheduled campaign |
| `update_automation_email` | Update settings for an automation email |
| `update_batch_webhook` | Update a batch webhook |
| `update_campaign` | Update settings for a campaign |
| `update_campaign_feedback` | Update a campaign feedback message |
| `update_campaign_folder` | Update a campaign folder |
| `update_cart` | Update a cart |
| `update_cart_line` | Update a cart line item |
| `update_customer` | Update an e-commerce customer |
| `update_file` | Update a file in the file manager |
| `update_file_folder` | Update a file manager folder |
| `update_interest` | Update an interest |
| `update_interest_category` | Update an interest category |
| `update_landing_page` | Update a landing page |
| `update_list` | Update settings for a list/audience |
| `update_list_webhook` | Update a list webhook |
| `update_member` | Update a list member |
| `update_member_note` | Update a note on a list member |
| `update_member_tags` | Add or remove tags from a list member |
| `update_merge_field` | Update a merge field |
| `update_order` | Update an order |
| `update_order_line` | Update an order line item |
| `update_product` | Update a product in an e-commerce store |
| `update_product_image` | Update a product image |
| `update_product_variant` | Update a product variant |
| `update_promo_code` | Update a promo code |
| `update_promo_rule` | Update a promo rule |
| `update_segment` | Update a segment |
| `update_signup_form` | Customize a list's signup form |
| `update_store` | Update an e-commerce store |
| `update_template` | Update a template |
| `update_template_folder` | Update a template folder |
| `verify_connected_site_script` | Verify the script installation on a connected site |
| `verify_domain` | Submit a domain for verification |

</details>

## Control What Your AI Can Do

You decide what AI agents can do with each connected account:

- **Turn individual actions on or off** for every connected account, so agents only see the actions you allow.
- **Connect as Read-only or Read & Write.** A read-only connection can only enable read actions.
- **Destructive actions stay off by default.** Actions such as deletes are disabled until an admin enables them.
- **Team access per account.** Restricted team members only use the accounts they are granted, with the read actions enabled on them.

## Usage Examples

```
"Show open and click rates for my last 5 campaigns"
```

```
"How has my audience grown this year?"
```

```
"Create a segment of subscribers who opened the last campaign"
```

## Pricing

The Mailchimp MCP server is included in every InsightfulPipe plan, together with all other MCP servers and the CLI. Plans start at $29.99/month, and you can try it for 7 days. See [insightfulpipe.com/pricing](https://insightfulpipe.com/pricing) for current plans.

## Explore More MCP Servers by Insightful Pipe

Visit **[insightfulpipe.com/mcp-servers](https://insightfulpipe.com/mcp-servers)** to discover our full collection of MCP servers.

- [Klaviyo MCP](https://insightfulpipe.com/mcp-servers/klaviyo)
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
