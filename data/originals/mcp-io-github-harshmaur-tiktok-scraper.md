# TikTok Scraper — MCP server and agent skill

Let an AI agent read TikTok. This repo connects Claude, Cursor, Codex and other MCP clients or skill-aware agents to the [TikTok Scraper](https://apify.com/harshmaur/tiktok-scraper) Apify Actor.

Ask "what were the most liked iced matcha videos this week" or "vet @creator for brand safety", and the agent gets structured rows: videos with views, likes, comments, shares and saves; creator profiles with follower counts; comments with replies; follower and following lists; sounds and hashtag feeds. Optional extras are watermark-free MP4s, transcripts and AI labels for category, sponsored content, brand safety and sentiment.

No TikTok account, cookies or API key. You need only an Apify account.

## Hosted MCP server

```
https://mcp.apify.com/?tools=harshmaur/tiktok-scraper
```

Sign in with OAuth in the client, or send `Authorization: Bearer <APIFY_TOKEN>` with a token from [Apify Console → Integrations](https://console.apify.com/settings/integrations).

Claude Code:

```
claude mcp add --transport http tiktok https://mcp.apify.com/?tools=harshmaur/tiktok-scraper
```

Cursor, Windsurf, VS Code and others (`mcp.json`):

```json
{
  "mcpServers": {
    "tiktok-scraper": {
      "url": "https://mcp.apify.com/?tools=harshmaur/tiktok-scraper"
    }
  }
}
```

Registry name: `io.github.harshmaur/tiktok-scraper` in the [official MCP Registry](https://registry.modelcontextprotocol.io).

## Agent skill

[`skills/apify-tiktok-scraper/SKILL.md`](skills/apify-tiktok-scraper/SKILL.md) tells an agent which input list fits a request, that the per-target video count defaults to 1, which options cost extra, and how to read each row type.

Claude Code plugin (skill plus the hosted MCP tool):

```
/plugin install apify-tiktok-scraper --marketplace harshmaur/apify-tiktok-scraper
```

Any agent that reads skills:

```bash
npx skills add https://github.com/harshmaur/apify-tiktok-scraper
```

## What you can ask

- "The 30 newest videos from @khaby.lame with views and likes."
- "Videos under #booktok since September with at least 50,000 likes, exact tag only."
- "Export comments and replies from this video link."
- "Check the last 20 videos of these five creators. Which look sponsored, and are they brand safe?"

## Price

$0.35 per 1,000 videos, $0.20 per 1,000 comments, $0.25 per 1,000 followers, $4 per 1,000 profiles. Date and likes filters, exact hashtag match and TikTok's own captions are free. AI labels, AI transcripts and video downloads cost extra. Inputs that fail come back as free `failed` rows.

The input uses the same field names as `clockworks/tiktok-scraper`, so a saved input from there runs as it is.

## Links

- Apify Store page: https://apify.com/harshmaur/tiktok-scraper
- API ID: `harshmaur~tiktok-scraper`
- Issues and feature requests: https://apify.com/harshmaur/tiktok-scraper/issues

Disclosure: the Actor is paid per result and built by the author of this repo. Links carry no affiliate parameters.
