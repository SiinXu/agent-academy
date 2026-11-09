# The Marketing Vault MCP server

Connect Claude, ChatGPT, Cursor and other AI assistants to [The Marketing Vault](https://marketerprompts.com). Your assistant writes from your saved business profile (who you sell to, your offer and prices, your proof and your brand voice) instead of starting from a blank prompt.

This repository holds the public listing details for the hosted server. The server itself runs on The Marketing Vault's infrastructure; there is nothing to install.

- **Server URL:** `https://agsuleyeonapmldynizb.supabase.co/functions/v1/mcp`
- **Transport:** Streamable HTTP
- **Auth:** OAuth 2.1 with Dynamic Client Registration. You sign in with your Marketing Vault account and approve access; every request runs as you and only sees your own data.
- **Claude:** listed in [Claude's connector directory](https://claude.ai/directory/connectors/the-marketing-vault)
- **Setup guides for every app:** [marketerprompts.com/mcp](https://marketerprompts.com/mcp)

## What it can do

- **Write campaign assets** from your business profile: offers, sales pages, webinar and VSL scripts, email sequences, ad copy, opt-in pages and blog posts.
- **Plan the work around the copy:** traffic strategy plans, referral and affiliate partner research, value ladders and high-ticket sales call frameworks.
- **Pressure-test ideas** with the Board of Business Experts and a 25-buyer market research stress test.
- **Keep your business context current:** facts, brand voice, verified proof, standing rules and reference notes that every tool reads.
- **Find past work:** every generated output is saved to your Vault library.

The Vault doesn't invent facts, metrics or testimonials. Missing inputs are reported back, and anything not on file is flagged for you to confirm.

## Tools

| Tool | What it does |
|---|---|
| `list_businesses` | Lists your business profiles and which one is the default |
| `get_customer_profile` | Returns a business's ideal customer profile, offer details and brand voice |
| `list_marketing_tools` | Lists the 30+ copy and strategy tools, filterable by category or search |
| `run_marketing_tool` | Generates copy or strategy from your saved Business Context |
| `list_saved_outputs` | Lists your saved outputs, newest first |
| `save_output` | Saves copy or strategy to your library |
| `get_my_usage` | Shows generations used and your limit |
| `update_business_facts` | Updates offers, prices, founder story, audience, hard rules and banned words |
| `update_brand_voice` | Updates brand voice fields |
| `add_proof` | Saves verified testimonials, results or figures |
| `save_reference_note` | Stores a background note on a business |
| `list_standing_rules` / `add_standing_rule` / `update_standing_rule` / `delete_standing_rule` | Manage permanent rules for a business |

## Quick setup

**Claude:** install from the [connector directory](https://claude.ai/directory/connectors/the-marketing-vault), or Settings → Connectors → Add custom connector and paste the server URL.

**Claude Code:**
```
claude mcp add --transport http the-marketing-vault https://agsuleyeonapmldynizb.supabase.co/functions/v1/mcp
```

**Cursor, VS Code, Windsurf (mcp.json):**
```json
{
  "mcpServers": {
    "the-marketing-vault": {
      "url": "https://agsuleyeonapmldynizb.supabase.co/functions/v1/mcp"
    }
  }
}
```

Then ask: "Use The Marketing Vault to list my businesses."

## Account

You need a Marketing Vault account ([sign up](https://marketerprompts.com)). New accounts include free trial runs; paid plans include a monthly assistant allowance. Reading or updating your business profile doesn't use a run.

## Support

Email [mail@beknownonline.com](mailto:mail@beknownonline.com) · [Privacy](https://marketerprompts.com/privacy) · [Terms](https://marketerprompts.com/terms)

The Marketing Vault is a product of Be Known, LLC in Knoxville, TN.
