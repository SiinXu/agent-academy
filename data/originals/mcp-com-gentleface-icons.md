<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/preview-dark.png">
    <img src=".github/preview.png" alt="Gentleface icons in six styles" width="100%">
  </picture>
</p>

# Gentleface icons

Free, pixel-aligned icons drawn on the 16 px grid, with separate 20 and 24 px masters. MIT.

[![npm](https://img.shields.io/npm/v/@gentleface/icons?label=%40gentleface%2Ficons)](https://www.npmjs.com/package/@gentleface/icons)
[![license](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

- 4,035 icons at 16 px in 6 styles: line or solid, with round, soft or sharp corners
- 4,031 of them also drawn at 20 px and at 24 px in light, regular and bold
- 120,954 SVGs in all, plus 1,000 animated ones
- every icon documents what it means and what to use instead

Browse, search and copy them at [gentleface.com](https://gentleface.com).

## Install

| | |
|---|---|
| SVG, 16 px | `npm i @gentleface/icons` |
| SVG, 20 / 24 px | `npm i @gentleface/icons-20`, `@gentleface/icons-24` (`-24-light`, `-24-bold`) |
| React | `npm i @gentleface/react` (`@gentleface/react-20`, `@gentleface/react-24`) |
| Animated | `npm i @gentleface/animated` |
| CDN | `https://cdn.jsdelivr.net/npm/@gentleface/icons@0.7/svg/line-round/16/bell.svg` |
| Iconify | `@gentleface/icons/iconify.json`, prefix `gentleface` |
| Claude Code | `/plugin marketplace add andaja/gentleface-icons`, then `/plugin install gentleface@gentleface` |

## Usage

```tsx
import { BellIcon } from '@gentleface/react';

<BellIcon />                                  // 16 px, line-round
<BellIcon variant="solid-sharp" size={32} />
<BellIcon title="Notifications" />            // with an accessible name
```

```html
<img src="https://cdn.jsdelivr.net/npm/@gentleface/icons@0.7/svg/line-round/16/bell.svg" width="16" height="16" alt="">
```

The SVGs use `currentColor`. Keep each icon at its own size or an exact multiple (16, 32, 48) on whole pixels; a fractional size or position blurs it. For a 20 or 24 px UI, use the icons drawn for that grid instead of scaling the 16 px ones.

## In this repository

| Path | Contents |
|---|---|
| `svg/16/<style>/` | 16 px icons, 4,035 per style |
| `svg/20/<style>/` | 20 px masters, 4,031 per style |
| `svg/24/<style>/` | 24 px masters, regular weight (1.5 px line) |
| `svg/24-light/<style>/`, `svg/24-bold/<style>/` | 24 px masters, light (1 px) and bold (2 px) |
| `animated/` | 1,000 animated 16 px line-round SVGs and their timings (`motions.json`) |
| `icons.json` | names, categories, meanings and tags |
| `plugins/gentleface/` | the Claude Code plugin: MCP server and icon-picking skill |

Styles: `line-round`, `line-soft`, `line-sharp`, `solid-round`, `solid-soft`, `solid-sharp`.

## For coding agents

The Claude Code plugin adds the Gentleface MCP server (search icons by meaning, get them as React, SwiftUI, Compose or SVG code) and a skill that keeps one meaning per icon across a project. Other agents: [gentleface.com/agents](https://gentleface.com/agents).

## Feedback

Missing icon or a wrong meaning: [gentleface.com/feedback](https://gentleface.com/feedback). Problems with this repository or the packages: open an issue. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE). Drawn with Claude Code; art direction by Alex Kiselev, who reviewed every icon.
