# TikTok Video Stats MCP Server

[![Glama score](https://glama.ai/mcp/servers/mambalabsdev/mcp-tiktok-video-stats/badges/score.svg)](https://glama.ai/mcp/servers/mambalabsdev/mcp-tiktok-video-stats) [![MCP Registry](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.modelcontextprotocol.io%2Fv0%2Fservers%3Fsearch%3Dcom.mambabuilt%252Fmcp-tiktok-video-stats%26limit%3D1&query=%24.servers%5B0%5D._meta%5B%22io.modelcontextprotocol.registry%2Fofficial%22%5D.status&label=mcp%20registry&color=blue)](https://registry.modelcontextprotocol.io/v0/servers?search=com.mambabuilt/mcp-tiktok-video-stats&limit=1) [![npm version](https://img.shields.io/npm/v/@mambalabsdev/mcp-tiktok-video-stats)](https://www.npmjs.com/package/@mambalabsdev/mcp-tiktok-video-stats) [![npm downloads](https://img.shields.io/npm/dm/@mambalabsdev/mcp-tiktok-video-stats)](https://www.npmjs.com/package/@mambalabsdev/mcp-tiktok-video-stats) [![license](https://img.shields.io/github/license/mambalabsdev/mcp-tiktok-video-stats)](https://github.com/mambalabsdev/mcp-tiktok-video-stats/blob/main/LICENSE)

An MCP server for the Mamba Labs TikTok Video Stats actor on Apify. Read public stats for TikTok posts by URL.

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

Give TikTok video or photo post URLs or post IDs. You get one flat row per post with plays, likes, comments, shares, saves, caption, hashtags, post date, sound, and the author's public follower and like totals.

All of the work runs on Apify. This package is a thin client that starts the actor run, waits for it, and hands back the dataset rows.

## Quick start

You need Node.js 18 or newer and an Apify account with an API token.

Add this to your Claude Desktop config (`claude_desktop_config.json`), Cursor, or any MCP client:

```json
{
  "mcpServers": {
    "mamba-tiktok-video-stats": {
      "command": "npx",
      "args": [
        "-y",
        "@mambalabsdev/mcp-tiktok-video-stats"
      ],
      "env": {
        "APIFY_TOKEN": "your-apify-token"
      }
    }
  }
}
```

Restart the client. The `get_tiktok_video_stats` tool appears.

## Prerequisites

- Node.js 18 or newer.
- An Apify API token from [console.apify.com/account/integrations](https://console.apify.com/account/integrations), set as `APIFY_TOKEN`. The server lists its tool without a token; a call needs one.

## Example prompts

- "How many plays, likes, and shares does this TikTok video have?"
- "Compare the engagement on these 5 TikTok posts."
- "When was this TikTok posted, and what hashtags does it use?"

## Tool

`get_tiktok_video_stats`. One tool. Example arguments:

```json
{
  "videos": [
    "https://www.tiktok.com/@washingtonpost/video/7198260520103841070"
  ]
}
```

## Inputs

Every buyer facing input of the actor. Omitted inputs take the actor's own defaults.

| Input | Type | Required | Description |
|---|---|---|---|
| `videos` | array | no | TikTok video or photo post URLs (https://www.tiktok.com/@handle/video/ID) or numeric post IDs, up to 1,000 per run. Duplicates are read once. |
| `max_videos` | number | no | The most posts to read in this run, from 1 to 1,000. Default 100. Text or a number. |
| `max_charge_usd` | string | no | Optional. The run stops before a charge that would pass this amount. Summary rows are always returned. |

## Pricing

Pay per event on Apify, billed to your Apify account. Prices in USD.

| Event | Free plan | Bronze | Silver | Gold |
|---|---|---|---|---|
| `video-row`, one post read | $0.0004 | $0.00038 | $0.00036 | $0.00034 |
| `missing-post`, one post TikTok reports as deleted, private, or missing | $0.0004 | $0.00038 | $0.00036 | $0.00034 |
| `apify-actor-start`, per run start | $0.006 | $0.006 | $0.006 | $0.006 |

TikTok bot check pages, values that are not TikTok posts, and refused input are free. Mamba Labs pays the platform costs of the run, Apify proxy traffic included.

## Full actor documentation

[apify.com/mambalabs/tiktok-video-stats](https://apify.com/mambalabs/tiktok-video-stats)

## License

MIT. See [LICENSE](LICENSE).
