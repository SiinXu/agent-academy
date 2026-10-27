# Figma Vector MCP

A Figma plugin + MCP server that lets Claude (or any MCP client) create and manipulate fully-editable vector nodes on the Figma canvas — paths, shapes, gradients, text, effects, image fills, and more — via a local WebSocket relay.

Developed by **[Working Model Inc](https://workingmodel.co)**

[![npm version](https://img.shields.io/npm/v/figma-vector-mcp)](https://www.npmjs.com/package/figma-vector-mcp)
[![npm downloads](https://img.shields.io/npm/dm/figma-vector-mcp)](https://www.npmjs.com/package/figma-vector-mcp)

**Version 0.3.3** — 58 tools across creation, styling, layout, components, effects, pages, and export.

## Why This Exists

[cursor-talk-to-figma-mcp](https://github.com/sonnylazuardi/cursor-talk-to-figma-mcp) is great for reading Figma state and creating basic primitives, but it has no vector path creation, gradient, effects, or compositing tools. This plugin fills that gap:

| Capability | cursor-talk-to-figma-mcp | figma-vector-mcp |
|---|---|---|
| Create rectangle / ellipse / frame / text | ✅ | ✅ |
| Create from SVG string | ❌ | ✅ |
| Create from path `d` string | ❌ | ✅ |
| Create polyline / polygon | ❌ | ✅ |
| Gradient fills (linear, radial, angular, diamond) | ❌ | ✅ |
| Image fills (base64 → canvas) | ❌ | ✅ |
| Effects (shadow, blur) | ❌ | ✅ |
| Blend modes | ❌ | ✅ |
| Boolean operations (union, subtract, etc.) | ❌ | ✅ |
| Auto-layout | ❌ | ✅ |
| Components + instances | ❌ | ✅ |
| Font discovery | ❌ | ✅ |
| Node search | ❌ | ✅ |
| Multi-page management | ❌ | ✅ |
| Named node registry | ❌ | ✅ |
| Batch commands (single round-trip) | ❌ | ✅ |
| Auto-reconnect + command queue | ❌ | ✅ |
| Export SVG + PNG | ❌ | ✅ |

---

## Architecture

```
Claude (MCP client)
  ↕ stdio (MCP protocol)
server.ts (MCP server)
  ↕ WebSocket (ws://localhost:3055)
socket.ts (relay — channel-based routing)
  ↕ WebSocket
Figma plugin (ui.html ↔ code.js)
  ↕ postMessage
Figma Plugin API → canvas
```

The socket relay runs locally. The Figma plugin connects and joins a named channel. The MCP server joins the same channel and sends commands. Results flow back the same path.

---

## AI Agent Quickstart

For AI agents (Claude Code, Cursor, etc.) — the recommended call sequence to start any session:

```
1. health_check                    → confirm plugin is connected
2. get_document_info               → get page IDs, current page, top-level nodes
3. get_available_fonts             → discover loadable fonts before create_text
4. get_styles                      → load brand colours/text styles if available
```

**Color convention:** All RGB values are **0–1** throughout (matching Figma's internal format). `r: 1, g: 0, b: 0` = red. Never use 0–255.

**Gradient workflow:**
```
1. create_frame({ width, height })          → get frameId
2. set_gradient_fill({ nodeId: frameId, type: "LINEAR", angle: 135,
     stops: [{ color: { r:0.2, g:0.1, b:0.9 }, position: 0 },
             { color: { r:0.9, g:0.2, b:0.4 }, position: 1 }] })
```

**Image fill workflow (with generative AI):**
```
1. Generate image via Replicate/fal.ai → get base64 PNG
2. create_frame({ width: 512, height: 512 })
3. set_image_fill({ nodeId, base64, scaleMode: "FILL" })
```

**Batch compositions** — use `$prev.id` to chain commands without extra round-trips:
```json
{ "commands": [
    { "command": "create_frame", "params": { "width": 400, "height": 300, "name": "Card" } },
    { "command": "set_gradient_fill", "params": { "nodeId": "$prev.id", "type": "LINEAR",
        "stops": [{"color":{"r":0.1,"g":0.1,"b":0.9},"position":0},
                  {"color":{"r":0.8,"g":0.2,"b":0.5},"position":1}] } },
    { "command": "create_text", "params": { "parentId": "$results.0.id",
        "text": "Hello", "fontSize": 32, "x": 24, "y": 24 } }
]}
```

**Known SVG limits:** `figma.createNodeFromSvg()` strips `<defs>`, gradients, filters, masks, and animations. Use `set_gradient_fill` for gradients instead of SVG `<linearGradient>`.

**Reconnection:** If the plugin disconnects, it auto-reconnects with exponential backoff (1s→30s max) and replays queued commands (up to 30s old). No manual intervention needed for short interruptions.

---

## Setup

### 1 — Install the plugin

1. Clone this repo or download the source
2. In Figma desktop: **Plugins → Development → Import plugin from manifest**
3. Select `src/figma-plugin/manifest.json`

### 2 — Install the MCP server

```bash
npm install -g figma-vector-mcp
# or use without installing via npx / bunx (see MCP config below)
```

### 3 — Start the socket relay

```bash
bun run socket
```

Listens on `ws://localhost:3055`. **Auto-start on login (macOS):**

```bash
./scripts/setup.sh --launchd
```

### 4 — Configure the MCP server

```bash
# Auto-detect Claude Code / Cursor and write config:
./scripts/setup.sh

# Local build:
./scripts/setup.sh --local

# Install git pre-commit sandbox lint hook:
./scripts/setup.sh --hooks
```

**Manual config** (`~/.claude/settings.json` or `~/.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "FigmaVectorMCP": {
      "command": "bunx",
      "args": ["figma-vector-mcp@latest"],
      "env": { "FVMCP_CHANNEL": "figma-vector-mcp" }
    }
  }
}
```

### 5 — Connect the plugin

1. Open your Figma file
2. **Plugins → Development → Figma Vector MCP**
3. Enter server URL (`ws://localhost:3055`) → **Connect**
4. Enter channel name (`figma-vector-mcp`) → **Join**

The plugin saves your last URL and channel — pre-filled on next open. **Keep the plugin panel open** during your session — closing it terminates the WebSocket connection.

### 6 — Verify

```
health_check → { "status": "ok", "version": "0.3.3", "currentPage": { ... } }
```

---

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `FVMCP_PORT` | `3055` | Socket relay port |
| `FVMCP_CHANNEL` | `figma-vector-mcp` | Channel name — must match the plugin |
| `FVMCP_TIMEOUT_MS` | `10000` | Default command timeout (ms) |

Per-tool timeout overrides: `health_check` → 3s, `export_node_as_png` → 30s, `export_node_as_svg` → 15s, `create_batch` → 60s.

---

## Tool Reference

### Connection & Health

| Tool | Description | Key Params |
|---|---|---|
| `health_check` | Ping plugin; confirm connectivity | — |
| `join_channel` | Join a named channel | `channel` |

### Vector Creation

| Tool | Description | Key Params |
|---|---|---|
| `create_vector_from_svg` | Place editable vector from SVG string | `svg`, `x`, `y`, `name`, `parentId` |
| `create_path` | Vector from SVG `d` path string | `d`, `x`, `y`, `fillColor`, `strokeColor`, `strokeWeight` |
| `create_polyline` | Vector from `[x,y][]` point pairs | `points`, `closed`, `strokeColor`, `strokeWeight` |

### Primitives

| Tool | Description | Key Params |
|---|---|---|
| `create_frame` | Container frame | `width`, `height`, `x`, `y`, `fillColor` |
| `create_rectangle` | Rectangle | `width`, `height`, `x`, `y`, `fillColor` |
| `create_ellipse` | Ellipse / circle | `width`, `height`, `x`, `y`, `fillColor` |
| `create_text` | Text node with optional fixed-width column | `text`, `fontSize`, `fontFamily`, `fontStyle`, `fillColor`, `width`, `height`, `textAutoResize` |

### Fills & Colour

| Tool | Description | Key Params |
|---|---|---|
| `set_fill_color` | Solid RGBA fill (0–1) | `nodeId`, `r`, `g`, `b`, `a` |
| `set_gradient_fill` | Gradient fill — LINEAR, RADIAL, ANGULAR, DIAMOND | `nodeId`, `type`, `stops`, `angle`, `center`, `gradientTransform` |
| `set_image_fill` | Base64 image as fill | `nodeId`, `base64`, `scaleMode`, `opacity` |

### Stroke

| Tool | Description | Key Params |
|---|---|---|
| `set_stroke` | Full stroke control | `nodeId`, `color`, `weight`, `position`, `dashPattern`, `lineCap`, `lineJoin` |
| `set_stroke_color` | Quick stroke colour + weight | `nodeId`, `r`, `g`, `b`, `a`, `weight` |

### Effects & Compositing

| Tool | Description | Key Params |
|---|---|---|
| `set_effect` | Drop shadow, inner shadow, blur, background blur | `nodeId`, `effects[]` (type, color, offset, blur, spread), `mode` (REPLACE \| APPEND) |
| `set_blend_mode` | Layer blend mode | `nodeId`, `mode` (NORMAL, MULTIPLY, SCREEN, OVERLAY…) |

### Node Manipulation

| Tool | Description | Key Params |
|---|---|---|
| `set_corner_radius` | Corner radius — uniform or per-corner | `nodeId`, `radius` or `topLeft`, `topRight`, `bottomLeft`, `bottomRight` |
| `set_opacity` | Opacity 0–1 | `nodeId`, `opacity` |
| `set_text_style` | Modify text properties + text box size | `nodeId`, `fontSize`, `fontFamily`, `fontStyle`, `letterSpacing`, `lineHeight`, `textAlign`, `fillColor`, `width`, `height`, `textAutoResize` |
| `rename_node` | Rename a node | `nodeId`, `name` |
| `set_visibility` | Show or hide a node | `nodeId`, `visible` |
| `reorder_node` | Change Z-order within parent | `nodeId`, `action` (BRING_TO_FRONT / SEND_TO_BACK / BRING_FORWARD / SEND_BACKWARD) or `index` |
| `move_node` | Reposition | `nodeId`, `x`, `y` |
| `resize_node` | Resize | `nodeId`, `width`, `height` |
| `delete_node` | Remove from canvas | `nodeId` |
| `clone_node` | Duplicate, optionally reposition | `nodeId`, `x`, `y`, `parentId` |
| `group_nodes` | Group nodes | `nodeIds[]`, `name`, `parentId` |
| `ungroup_nodes` | Ungroup | `nodeId` |
| `boolean_operation` | Union, subtract, intersect, exclude | `nodeIds[]`, `operation`, `name` |
| `create_mask` | Clip mask — maskNode clips targetNode | `maskNodeId`, `targetNodeId`, `name` |

### Layout

| Tool | Description | Key Params |
|---|---|---|
| `set_auto_layout` | Enable / configure auto-layout | `nodeId`, `direction`, `spacing`, `padding`, `primaryAxisAlign`, `counterAxisAlign`, `primaryAxisSizingMode`, `counterAxisSizingMode`, `wrap` |
| `set_layout_grid` | Column / row / grid guides on a frame | `nodeId`, `grids[]` (pattern, count, gutterSize, sectionSize, alignment, color) |
| `batch_set_properties` | Bulk update fill/stroke/opacity/position/size | `operations[]` (nodeId + any subset of properties) |

### Components

| Tool | Description | Key Params |
|---|---|---|
| `create_component` | Convert frame/group to component | `nodeId`, `name` |
| `create_instance` | Place component instance | `componentId`, `x`, `y`, `parentId` |
| `get_components` | List all local components | — |
| `get_library_components` | Search local components by name | `query` |

### Document & Pages

| Tool | Description | Key Params |
|---|---|---|
| `get_document_info` | Document name, pages, current page children | — |
| `get_selection` | Currently selected nodes | — |
| `get_node_info` | Full node detail: fills, strokes, layout, text, constraints | `nodeId` |
| `set_focus` | Scroll viewport to node and select it | `nodeId` |
| `find_nodes` | Search by name and/or type | `query`, `type`, `pageId`, `recursive` |
| `get_page_list` | All pages | — |
| `switch_page` | Activate a page | `pageId` or `pageName` |
| `create_page` | Create a new page | `name` |
| `duplicate_frame_to_page` | Copy node to another page | `nodeId`, `targetPageId`, `x`, `y` |

### Node Registry

| Tool | Description | Key Params |
|---|---|---|
| `register_node` | Save named alias for a node ID (persists in document) | `alias`, `nodeId` |
| `resolve_node` | Look up node ID by alias | `alias` |

### Color Registry

| Tool | Description | Key Params |
|---|---|---|
| `register_color` | Save a named color to the document palette (0–1) | `alias`, `r`, `g`, `b`, `a` |
| `resolve_color` | Look up a color by alias | `alias` |
| `list_colors` | List all registered colors in the document | — |

### Styles & Fonts

| Tool | Description | Key Params |
|---|---|---|
| `get_styles` | All local paint and text styles | — |
| `apply_style` | Apply document style to node | `nodeId`, `styleId`, `styleType` |
| `get_available_fonts` | List loadable fonts; filter by name | `query` |

### Export

| Tool | Description | Key Params |
|---|---|---|
| `export_node_as_svg` | Export node as SVG string | `nodeId` |
| `export_node_as_png` | Export as base64 PNG | `nodeId`, `scale` (default 2) |
| `screenshot_current_page` | Export full page as base64 PNG | `scale` |

### Batch

| Tool | Description | Key Params |
|---|---|---|
| `create_batch` | Run multiple commands in one round-trip. Supports `$prev.id` and `$results.N.field` tokens for chaining. | `commands[]` (command, params) |

---

## Sandbox Compatibility

The plugin main thread (`code.js`) runs in Figma's restricted QuickJS sandbox. The UI (`ui.html`) is a normal browser context and is not affected.

Run `bun run lint:plugin` to check `code.src.js` for violations before building. A pre-commit hook can be installed via `./scripts/install-hooks.sh`.

### Banned in `code.js`

| API / Syntax | Safe replacement |
|---|---|
| `import` / `export` | Inline all deps |
| `x ?? y` | `(x != null) ? x : y` |
| `obj?.prop` | `obj && obj.prop` |
| `{ ...obj }` / `[ ...arr ]` | `Object.assign({}, obj)` / `Array.from(arr)` |
| `localStorage` | `figma.clientStorage` |
| `TextDecoder` | Chunked `String.fromCharCode` |
| `fetch()` | Not available in main thread |
| `figma.getNodeById()` (sync) | `await figma.getNodeByIdAsync()` |
| `figma.currentPage = x` (sync assign) | `await figma.setCurrentPageAsync(x)` |
| `figma.getLocalPaintStyles()` (sync) | `await figma.getLocalPaintStylesAsync()` |
| `figma.getLocalTextStyles()` (sync) | `await figma.getLocalTextStylesAsync()` |
| `figma.root.findAllWithCriteria()` without page load | `await figma.loadAllPagesAsync()` first |

### SVG compatibility (`create_vector_from_svg`)

| Feature | Status |
|---|---|
| `<rect>`, `<polygon>`, `<polyline>`, `<path>`, `<circle>`, `<ellipse>` | ✅ |
| `fill`, `stroke`, `stroke-width`, `stroke-linecap`, `stroke-linejoin` | ✅ |
| `viewBox`, `width`, `height` | ✅ |
| `<linearGradient>` / `<radialGradient>` in `<defs>` | ❌ Stripped — use `set_gradient_fill` |
| `<filter>`, `<mask>`, `<pattern>` | ❌ Stripped |
| `<animate>`, `<animateTransform>` | ❌ Stripped |
| `<script>`, `<foreignObject>` | ❌ Stripped |
| `fill="url(#...)"` references | ❌ Replaced with `fill="none"` |

---

## Development

```bash
bun install              # install deps
bun run socket           # start relay on :3055
bun run build            # build MCP server → dist/server.js
bun run build:plugin     # build plugin: code.src.js → code.js
bun run lint:plugin      # check code.src.js for sandbox violations
./scripts/install-hooks.sh  # install pre-commit lint hook
```

### Plugin workflow

1. Edit `src/figma-plugin/code.src.js`
2. `bun run lint:plugin` — catch sandbox violations before building
3. `bun run build:plugin` — esbuild outputs `code.js` (ES2017)
4. Close and reopen the plugin panel in Figma to load the new `code.js`

---

## Credits

- Socket relay (`src/socket.ts`) adapted from [cursor-talk-to-figma-mcp](https://github.com/sonnylazuardi/cursor-talk-to-figma-mcp) — Copyright (c) 2025 sonnylazuardi, MIT License
- `setCharacters` helpers in `code.src.js` adapted from the same project — Copyright (c) 2025 sonnylazuardi, MIT License

---

## License

MIT © Working Model — see [LICENSE](LICENSE) and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

---

Developed by **[Working Model Inc](https://workingmodel.co)**
