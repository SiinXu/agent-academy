# Sinqlo MCP — Design Systems for the AI Era

[![Sinqlo MCP connector](https://glama.ai/mcp/connectors/com.sinqlo.mcp/sinqlo/badges/score.svg)](https://glama.ai/mcp/connectors/com.sinqlo.mcp/sinqlo)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](./LICENSE)

Official setup guide, configuration templates, and Claude Skill for the **[Sinqlo](https://sinqlo.com)** remote Model Context Protocol (MCP) server (`https://mcp.sinqlo.com/mcp`).

Connect Claude, Claude Code, Cursor, Windsurf, or any MCP-compatible client to your live, lightweight design systems and brand kits in Sinqlo — logo variations, color roles & tokens (CSS/Tailwind/JSON/Hex/RGB/CMYK/Pantone), font stacks, plain-sentence brand rules, and permanent Brand Links — so AI agents stay on brand without guessing hex codes or using outdated logo files.

- **Website:** https://sinqlo.com
- **Official Docs:** https://sinqlo.com/claude/
- **MCP Endpoint:** `https://mcp.sinqlo.com/mcp` (Streamable HTTP)
- **Glama Directory:** https://glama.ai/mcp/connectors/com.sinqlo.mcp/sinqlo

---

## Quickstart

> **Requirements:** A Sinqlo account on the [Studio or Agency plan](https://sinqlo.com/pricing/) (or membership in a Studio/Agency team) with at least one brand kit.

### Claude.ai / Claude Desktop / Claude Mobile (OAuth 2.1)

1. Open **Settings → Connectors** in Claude.
2. Add **Sinqlo** from the connector directory (or choose **Add custom connector** and enter `https://mcp.sinqlo.com/mcp`).
3. Sign in to Sinqlo and click **Allow access** (OAuth 2.1 with PKCE — Claude never sees your password).

### Claude Code

```bash
claude mcp add --transport http sinqlo https://mcp.sinqlo.com/mcp
```

### Cursor, Windsurf & VS Code (`mcp.json`)

Generate a read-only API key in Sinqlo under **Settings → API Keys**, then add Sinqlo to your MCP config:

```json
{
  "mcpServers": {
    "sinqlo": {
      "url": "https://mcp.sinqlo.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_SINQLO_API_KEY"
      }
    }
  }
}
```

---

## Available Tools (13 Read-Only Tools)

All tools are **read-only by design**. Connected agents cannot create, edit, overwrite, or delete brands, files, or account settings.

| Tool | Description |
| :--- | :--- |
| `get_brand_kit` | Fetch the full brand kit in one call: logos, colors, typography, gradients, patterns, and brand rules. |
| `get_brand_tokens` | Export design tokens as CSS custom properties, a Tailwind v4 theme, or W3C JSON. |
| `get_logo_image` | Retrieve a logo or variation as SVG or PNG (download URL valid for 1 hour). |
| `list_logo_variations` | List every variation of a brand's logo (e.g., white, black, symbol-only, horizontal). |
| `list_brand_colors` | Retrieve the color palette in Hex, RGB, CMYK, and Pantone. |
| `list_brand_fonts` | Retrieve brand font families, weights, styles, and source links. |
| `render_social_asset` | Render an on-brand social image (Instagram, TikTok, YouTube, Open Graph) as PNG. |
| `list_brands` | List brands in your library with pagination and client filtering. |
| `search_brands` | Find a brand by title or client name without needing its ID. |
| `get_brand` | Fetch brand details: title, client, colors, fonts, external links, and notes. |
| `get_smart_link` | Retrieve the permanent shareable Brand Link for a brand. |
| `get_brand_stats` | View download counts for a brand and each of its logo variations. |
| `get_usage_stats` | Check your plan, brand count, and storage usage. |

---

## Example Prompts

- *"Get the Acme brand kit and summarize its colors, fonts, and rules."*
- *"Give me Acme's Tailwind v4 tokens and build a landing-page hero using their logo."*
- *"Show me Acme's white logo variation as an SVG."*
- *"Make an Instagram post for Acme announcing our spring launch."*
- *"Share the permanent Brand Link for Northwind."*

---

## Claude Skill Included

This repository includes a ready-to-use Claude Skill at [`skills/sinqlo-brand-kit/SKILL.md`](./skills/sinqlo-brand-kit/SKILL.md) that instructs Claude to pull the live brand kit and design tokens from Sinqlo before writing UI code or generating visuals.

To install it in Claude Code, copy the `skills/sinqlo-brand-kit` folder into your project's `.claude/skills/` directory (or `~/.claude/skills/` for global use).

---

## Security & Privacy

- **Read-only:** Agents cannot modify or delete anything in Sinqlo.
- **Scoped access:** Agents only see brand kits you own or belong to via team membership.
- **Audit visibility:** Every MCP read appears on the kit owner's Sinqlo dashboard.
- **EU-hosted:** Encrypted in transit and at rest. See [Security](https://sinqlo.com/security/), [Privacy Policy](https://sinqlo.com/privacy-policy/), and [DPA](https://sinqlo.com/dpa/).

## Support

Questions or issues? Email [support@sinqlo.com](mailto:support@sinqlo.com).
