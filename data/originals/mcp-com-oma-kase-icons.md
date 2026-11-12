# Omakase Icons

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![npm](https://img.shields.io/npm/v/@uv-foundry/icons-react?label=%40uv-foundry%2Ficons-react)](https://www.npmjs.com/package/@uv-foundry/icons-react)
[![MCP server](https://img.shields.io/badge/MCP-icons.oma--kase.com%2Fmcp-black)](https://icons.oma-kase.com/mcp-server)
[![Omakase Icons MCP connector on Glama](https://glama.ai/mcp/connectors/com.oma-kase/icons/badges/score.svg)](https://glama.ai/mcp/connectors/com.oma-kase/icons)
[![mcptry](https://mcptry.com/badge/com.oma-kase/icons)](https://mcptry.com/servers/com.oma-kase/icons)

251 free icons, each drawn once and generated in every style: stroke, solid, duotone and two-tone, with rounded or sharp corners, at any stroke weight. MIT licensed.

**[Browse all icons](https://icons.oma-kase.com/icons)** · **[Request an icon](https://github.com/neueworld/omakase-icons/issues/new?template=icon-request.yml)** · **[Report a problem](https://github.com/neueworld/omakase-icons/issues/new?template=bug.yml)**

[![Omakase Icons: one drawing, every style](https://icons.oma-kase.com/opengraph-image)](https://icons.oma-kase.com)

## Install

```bash
npm i @uv-foundry/icons-react    # React
npm i @uv-foundry/icons-vue      # Vue 3
npm i @uv-foundry/icons-svelte   # Svelte 5
npm i @uv-foundry/icons-core     # any framework, or plain SVG strings
```

```jsx
import { HomeIcon } from '@uv-foundry/icons-react';

<HomeIcon />
<HomeIcon variant="solid" corner="sharp" size={16} />
```

Every package takes the same options:

| Option | Values | Default |
|---|---|---|
| `variant` | `stroke`, `solid`, `duotone`, `twotone` | `stroke` |
| `corner` | `rounded`, `sharp` | `rounded` |
| `size` | any number of pixels | `24` |
| `strokeWidth` | 1 to 2.25 | fits the size: 2.25 at 16px, 1.8 at 20px, 1.5 at 24px |
| `color` | any CSS colour | `currentColor` |
| `title` | accessible label | none (the icon is hidden from screen readers) |

At 16px and 20px the icons use a drawing snapped to that size's pixel grid, so thin lines stay sharp.

## Use it from an AI coding tool

The [MCP server](https://icons.oma-kase.com/mcp-server) lets Claude Code, Cursor, VS Code and other assistants search the real catalog, so they never import an icon that does not exist. It is a remote Streamable HTTP server at `https://icons.oma-kase.com/mcp`. No sign-in and no API key.

**Claude Code**

```bash
claude mcp add --transport http omakase-icons https://icons.oma-kase.com/mcp
```

**Cursor**: add this to `.cursor/mcp.json` or to the global MCP settings.

```json
{
  "mcpServers": {
    "omakase-icons": { "url": "https://icons.oma-kase.com/mcp" }
  }
}
```

**VS Code**: add this to `.vscode/mcp.json`.

```json
{
  "servers": {
    "omakase-icons": { "type": "http", "url": "https://icons.oma-kase.com/mcp" }
  }
}
```

Tools:

- `search_icons`: find icons by meaning, such as "delete", "payment" or "dirham", and get exact names.
- `get_icon`: ready-to-paste React, Vue, Svelte or SVG code, in any style, corner, size and stroke weight.
- `list_icons`: every icon name in the set.

Plain-text guide for AI tools: [icons.oma-kase.com/llms.txt](https://icons.oma-kase.com/llms.txt).

## Plain SVG files

The [`svg/`](svg) folder has every icon as a standalone file, by style and corner: `svg/<style>/<corner>/<name>.svg`. [`icons.json`](icons.json) lists every icon name.

## Request an icon or report a problem

- **[Request an icon](https://github.com/neueworld/omakase-icons/issues/new?template=icon-request.yml)** that is missing from the set. Requests decide what gets drawn next.
- **[Report a problem](https://github.com/neueworld/omakase-icons/issues/new?template=bug.yml)** with an icon that looks wrong or does not render.

## What's in this repository

This repository holds the published icons: the SVG files, the icon list, the licence and the [changelog](CHANGELOG.md). It is generated from our drawing source on every release, so please open an issue rather than a pull request.

## License

[MIT](LICENSE). Free for personal and commercial use, with no attribution required in your product.

Version 0.9.0. Made by [Omakase](https://oma-kase.com).
