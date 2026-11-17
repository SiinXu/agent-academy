# TikTok Pages MCP Server by Insightful Pipe

[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue)](https://insightfulpipe.com/mcp-servers/tiktok-pages)
[![Insightful Pipe](https://img.shields.io/badge/Insightful_Pipe-MCP_Servers-purple)](https://insightfulpipe.com/mcp-servers)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Connect TikTok Pages to AI assistants: business profile, video metrics and publishing.**

Part of the [Insightful Pipe MCP Server Collection](https://insightfulpipe.com/mcp-servers) — use TikTok Pages from Claude, ChatGPT, Cursor, and other AI assistants through the Model Context Protocol (MCP).

<img src="images/tiktok-pages-icon.svg" alt="TikTok Pages MCP Server" width="64" height="64">

## MCP Server URL

```
https://tiktok-pages.insightfulmcp.com/
```

## What is TikTok Pages MCP?

TikTok Pages MCP is a **remote Model Context Protocol server** hosted by InsightfulPipe. Track TikTok business profile performance, video metrics, follower growth, and audience engagement.

## Installation

### Claude

1. Copy the MCP Server URL: `https://tiktok-pages.insightfulmcp.com/`
2. Open [Claude Connectors Settings](https://claude.ai/settings/connectors)
3. Scroll to the bottom and click **Add custom connector**
4. Paste the URL and click **Add**
5. Click **Connect** and sign in to InsightfulPipe if asked. Claude then lists the connector as connected.

### ChatGPT

Custom MCP servers are added through ChatGPT's **Developer mode**. Availability depends on your ChatGPT plan, and workspace admins may need to allow it.

1. Turn on **Developer mode** in ChatGPT settings
2. Create a new app for a remote MCP server and paste the URL: `https://tiktok-pages.insightfulmcp.com/`
3. Sign in to InsightfulPipe if asked. The connection finishes as soon as you are signed in.

See OpenAI's guide: [Developer mode and MCP apps in ChatGPT](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)

### Claude Code

```bash
claude mcp add --transport http tiktok-pages https://tiktok-pages.insightfulmcp.com/
```

### Cursor

Add the server to `~/.cursor/mcp.json` (all projects) or `.cursor/mcp.json` (one project):

```json
{
  "mcpServers": {
    "tiktok-pages": {
      "url": "https://tiktok-pages.insightfulmcp.com/"
    }
  }
}
```

When Cursor shows **Needs authentication**, click **Connect** and sign in to InsightfulPipe if asked.

## Available Actions

7 actions: 5 read, 2 write.

### Read Actions (5)

| Action | Description |
|--------|-------------|
| `get_creator_info` | Query the authenticated creator's current posting capabilities |
| `get_publish_status` | Fetch delivery status for a TikTok publish_id |
| `get_user_info` | Get TikTok user profile information including follower counts and bio |
| `list_videos` | List public videos for the authenticated TikTok user |
| `query_videos` | Query specific videos by their IDs |

### Write Actions (2)

| Action | Description |
|--------|-------------|
| `direct_post_video` | Initialize one direct TikTok video FILE_UPLOAD |
| `publish_photo` | Initialize one direct TikTok photo post |

## Control What Your AI Can Do

You decide what AI agents can do with each connected account:

- **Turn individual actions on or off** for every connected account, so agents only see the actions you allow.
- **Connect as Read-only or Read & Write.** A read-only connection can only enable read actions.
- **Destructive actions stay off by default.** Actions such as deletes are disabled until an admin enables them.
- **Team access per account.** Restricted team members only use the accounts they are granted, with the read actions enabled on them.

## Usage Examples

```
"List my latest TikTok videos with views and likes"
```

```
"Show my TikTok profile details"
```

```
"Publish a photo post with this caption"
```

## Pricing

The TikTok Pages MCP server is included in every InsightfulPipe plan, together with all other MCP servers and the CLI. Plans start at $29.99/month, and you can try it for 7 days. See [insightfulpipe.com/pricing](https://insightfulpipe.com/pricing) for current plans.

## Explore More MCP Servers by Insightful Pipe

Visit **[insightfulpipe.com/mcp-servers](https://insightfulpipe.com/mcp-servers)** to discover our full collection of MCP servers.

- [Instagram MCP](https://insightfulpipe.com/mcp-servers/instagram)
- [Facebook Pages MCP](https://insightfulpipe.com/mcp-servers/facebook-pages)
- [LinkedIn Pages MCP](https://insightfulpipe.com/mcp-servers/linkedin-pages)
- [YouTube MCP](https://insightfulpipe.com/mcp-servers/youtube)

**[View All MCP Servers →](https://insightfulpipe.com/mcp-servers)**

## Resources

- [Documentation](https://insightfulpipe.com/docs/connectors-tiktok-pages)
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
