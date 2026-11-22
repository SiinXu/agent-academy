# Tsoden SEO & AEO plugins for ChatGPT, Codex, Claude, Cursor and Gemini

Two plugins backed by the Tsoden SERP Checker MCP servers.

| Plugin | What it does | Server | Account |
|---|---|---|---|
| [`ai-visibility-audit`](plugins/ai-visibility-audit) | Live checks of any website's readiness for AI search: AI crawler access in robots.txt, llms.txt, entity structured data, prompt opportunities. Skills turn results into fixes. | `https://serp.tsoden.ai/mcp/free` | none |
| [`tsoden-seo`](plugins/tsoden-seo) | Your Google rankings and your brand's visibility in ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews: diagnose drops, compare competitors, start checks. | `https://serp.tsoden.ai/mcp` | OAuth sign-in |

Setup guide: https://serp.tsoden.ai/integrations/ai-assistants

## Install

**Claude Code**

```
/plugin marketplace add notformal/tsoden-ai-plugins
/plugin install ai-visibility-audit@tsoden
/plugin install tsoden-seo@tsoden
```

**Codex / ChatGPT (workspace marketplace)** — this repository carries
`.agents/plugins/marketplace.json`. Workspace admins import it under
Workspace settings → Plugins → Add → Import marketplace (the per-plugin install
policy is set there, not in this file); Codex users can run
`codex plugin marketplace add notformal/tsoden-ai-plugins`. Plugins imported this way that
bundle an MCP server may be labelled "Desktop only"; the public directory
listing (submitted separately) works on the web.

**Cursor, Gemini CLI and other MCP clients** — add the server URL above. Gemini
CLI reads `gemini-extension.json` at the repository root.

## Layout

```
.claude-plugin/marketplace.json     Claude Code marketplace
.agents/plugins/marketplace.json    OpenAI (ChatGPT / Codex) marketplace
gemini-extension.json               Gemini CLI extension (free server)
registry/<name>/server.json         Official MCP Registry entries
plugins/<name>/
  plugin.json                       Agent Plugins manifest + OpenAI listing (extensions.com.openai)
  .claude-plugin/plugin.json        Claude Code manifest
  mcp.json / .mcp.json              MCP server config (portable / Claude Code)
  skills/<skill>/SKILL.md           Workflows; agents/openai.yaml holds the ChatGPT listing
  assets/                           Logo and composer icon
```

## Privacy

The free checks read only public pages of the site you name. The account plugin
acts with the signed-in user's permissions and can be disconnected at any time
under Profile → Connected assistants. Policy: https://serp.tsoden.ai/privacy-policy

Support: info@tsoden.ai · License: MIT
