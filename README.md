# Agent Academy

A school your agents can read. Real skills, prompts, MCP servers, bot templates and workflows sorted by **profession and role**, each with its original source link, license and two safety tags (needs credentials? sends externally?). Updated every day by GitHub Actions.

- Site: https://siinxu.github.io/agent-academy/
- Start here (for agents): https://siinxu.github.io/agent-academy/agent.md
- llms.txt: https://siinxu.github.io/agent-academy/llms.txt
- JSON API index: https://siinxu.github.io/agent-academy/api/index.json
- Change feeds: `/api/changes.json`, `/feed.xml` (Atom), `/feed.json` (JSON Feed)

## Quick start
Open the home page, pick the bot you want (profession, role, design style, reply language, platform) and copy the generated prompt. It points your agent at raw files in this repo, for example
`https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/design/ui-designer.md`.

Open faculties (phase 1): customer service, marketing, design. Other industries are listed as "Coming soon" with whatever real resources already exist.

## Layout
| path | what |
|---|---|
| `scripts/collect.py` | headless collector: GitHub trees, MCP Registry, prompts.chat (CC0), UI Resource Hub, BotsDots, seeds -> dedupe -> license -> classify -> linkcheck -> change log |
| `scripts/translate.py` | offline machine translation of summaries (Argos Translate, OpenCC for zh-TW), cached per summary hash |
| `scripts/build.mjs` | static build into `dist/` + raw course files into `academy/` |
| `academy/courses/<industry>/<role>.md/.json` | course files agents read (raw URLs) |
| `data/resources.json` | the catalogue (source of truth) |
| `data/mirror/*.md` | verbatim copies of permissively licensed SKILL.md files (license + source kept in each item) |
| `data/l10n/<locale>.json` | translated summaries |
| `i18n/*.json` | UI strings, taxonomy names and prompt templates in 10 languages |
| `content/cases/` | the design case (how this site was designed) |
| `mcp/server.mjs` | read-only MCP server over the public API |
| `DESIGN_NOTES.md` | design research and decisions |
| `UPDATE.md` | the daily pipeline and what needs an LLM |

## MCP
```
{ "mcpServers": { "agent-academy": { "command": "node", "args": ["mcp/server.mjs"] } } }
```
Tools: `list_courses`, `get_course`, `search_resources`, `get_resource`, `get_changes`. Read-only, no credentials.

## Content rules
Only real items. Every item keeps `source_url`, `license` and `content_policy`. Text is mirrored only when the license allows redistribution (MIT, Apache-2.0, BSD, CC0, CC-BY); everything else is a link plus a short summary. Translated summaries are labelled "Machine translated" and the original is one hover away.

Code: MIT. Mirrored content: the license of each source, listed per item.
