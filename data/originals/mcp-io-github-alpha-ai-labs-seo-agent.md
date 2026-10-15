# SEOPro AI Agent Plugin

Run the full SEO loop from your AI assistant:

**Search Console insight → prioritized action → generated article → CMS publishing → indexing → measurable Google and AI-referral results.**

SEOPro AI is a hosted remote MCP server for anyone responsible for website growth, from founders and small teams to in-house marketers, consultants, and agencies. It is distributed as a portable [Agent Plugin](https://agent-plugins.org/). The implementation stays on SEOPro AI infrastructure; this repository contains the public connection metadata, setup guides, reusable SEO workflows, and security documentation.

![Agency operators reviewing an SEO workflow](assets/mcp-agency-workflow.webp)

## Connect

### Install as an Agent Plugin

This repository conforms to Agent Plugins 1.0.0. Add or clone the repository through a [compatible client's](https://agent-plugins.org/compatible-clients) plugin installation flow. The client discovers:

```text
seoproai-mcp/
├── plugin.json                   # Agent Plugins manifest
├── mcp.json                      # Agent Plugins MCP config
├── .claude-plugin/plugin.json    # Claude plugin manifest
├── .mcp.json                     # Claude plugin MCP config
└── skills/
    └── seoproai-operator/
        └── SKILL.md
```

- `plugin.json` identifies the portable package.
- `mcp.json` declares the hosted Streamable HTTP server.
- `.claude-plugin/plugin.json` and `.mcp.json` make the same package native to Claude Code and Cowork.
- `skills/seoproai-operator/` supplies safe SEO workflows and approval gates for one or many websites.

Agent Plugins 1.0.0 intentionally leaves remote authentication to the client. Complete OAuth in the client or keep a scoped SEOPro AI API key in its secret store. Never add credentials to `mcp.json`, `plugin.json`, or `SKILL.md`.

Clients that do not yet load Agent Plugins can use the manual setup below.

### Connect manually

**Remote MCP URL**

```text
https://api.seoproai.co/api/mcp
```

No server package or local runtime is required. Interactive clients use OAuth. Developer clients may use a revocable SEOPro AI API key as a bearer token.

Official MCP Registry identifier: `io.github.alpha-ai-labs/seo-agent`

| Client | Auth | Setup |
|---|---|---|
| Claude | OAuth | Settings → Connectors → Add custom connector → paste the URL → Connect |
| ChatGPT | OAuth | Settings → Apps & Connectors → Advanced/Developer mode → Create → paste the URL |
| Codex | OAuth | `codex mcp add seopro-ai --url https://api.seoproai.co/api/mcp`, then `codex mcp login seopro-ai` |
| Claude Code | OAuth or API key | `claude mcp add --transport http seopro-ai https://api.seoproai.co/api/mcp` |
| Hermes | API key | Add the URL and environment-backed bearer header in `~/.hermes/config.yaml` |
| OpenClaw | OAuth or API key | Add a Streamable HTTP entry under `mcp.servers`; prefer OAuth or keep a static key in an environment variable |
| Cursor / Windsurf | OAuth or API key | Add a remote Streamable HTTP server in MCP settings |

See [client setup](docs/client-setup.md) for copy-paste configurations and current caveats.

## Three SEO workflows

### 1. Find website quick wins

```text
Using SEOPro AI, list my websites. For [website], review the last 28 days of
Search Console performance. Find queries ranking 5–15 with meaningful
impressions, group them by page, and give me a prioritized action plan. Do not
make any changes.
```

### 2. Build and generate a content plan

```text
Using SEOPro AI, review [client site]'s search performance and current keyword
plan. Propose a four-week content plan around [service/topic]. Show me the plan
before creating it. After I approve it, create the keyword plan and generate
only the first article.
```

### 3. Review, publish, index, and measure

```text
Using SEOPro AI, show me the draft for [article]. Check its title, meta
description, structure, and relevance to the target keyword. Do not publish
until I explicitly approve the final draft. After approval, publish it, submit
the published URL for indexing, and give me a 30-day measurement checklist.
```

The complete prompt pack is in [agency prompt pack](docs/agency-prompt-pack.md).

## Demo and example data

- Use the [90-second demo script](docs/90-second-demo-script.md) to record a consistent agency workflow without exposing customer data.
- Use the [fictional tool results](docs/example-tool-results.md) for directory reviews, screenshots, and public demonstrations.
- The product workflow visual is available at [assets/mcp-agency-workflow.webp](assets/mcp-agency-workflow.webp).

![Example connected Search Console performance view](assets/search-console-example.png)

The Search Console image is an example connected performance view. Results vary by website.

## What the server exposes

The server provides 18 narrowly scoped tools across:

- Websites and account context.
- Search Console summaries, keywords, trends, and AI-referral traffic.
- Technical audits, AI citations, and backlink profiles.
- Keyword/content planning and asynchronous article generation.
- Draft review and explicit-confirmation CMS publishing.
- Explicit-confirmation indexing requests and indexing status.

Read tools are annotated as read-only and non-destructive. Publishing and indexing are annotated as externally consequential and require an explicit confirmation argument on every call.

## Privacy and security

- Authentication is required for every MCP request.
- OAuth and API-key access can be revoked.
- Website ownership and subscription limits are enforced by the same backend routes used by the SEOPro AI dashboard.
- Analytics records operational metadata such as tool name, success, latency band, auth method, and normalized client family. It never records credentials, tool arguments, article content, website content, or returned customer data.
- The public repository contains no hosted-server source code or credentials.

Read [SECURITY.md](SECURITY.md), [architecture and data handling](docs/architecture-and-data-handling.md), and the [SEOPro AI Privacy Policy](https://seoproai.co/privacy-policy).

## Requirements

- An SEOPro AI account. The current acquisition offer is a **$1 seven-day trial**.
- Connected websites and, for search-performance workflows, Google Search Console.
- A supported CMS connection for publishing workflows.

Start at [seoproai.co/mcp](https://seoproai.co/mcp?utm_source=github&utm_medium=repository&utm_campaign=mcp_launch&utm_content=readme).

## Repository map

- `plugin.json` — Agent Plugins 1.0.0 package manifest.
- `mcp.json` — Portable Streamable HTTP MCP connection without embedded credentials.
- `.claude-plugin/plugin.json` — Claude Code and Cowork plugin manifest.
- `.mcp.json` — Claude-native remote HTTP connector configuration without embedded credentials.
- `server.json` — Official MCP Registry metadata for the hosted endpoint.
- `docs/client-setup.md` — Client-specific setup.
- `docs/agency-prompt-pack.md` — Safe, reusable agency prompts.
- `docs/compatibility.md` — Tested client/auth matrix.
- `docs/troubleshooting.md` — Connection and tool-call diagnostics.
- `docs/architecture-and-data-handling.md` — Trust boundary and analytics disclosure.
- `docs/directory-listing-copy.md` — Canonical short and long listing descriptions.
- `docs/90-second-demo-script.md` — Timed narration, capture plan, and privacy checklist.
- `docs/example-tool-results.md` — Fictional sample data for screenshots and reviews.
- `assets/` — Public workflow and product-proof visuals.
- `skills/seoproai-operator/` — Portable Agent Skill for founders, small teams, in-house marketers, consultants, and agencies.
- `scripts/validate_agent_plugin.py` — Schema, transport, package-boundary, and skill validation used by CI.

## Support

Email [support@seoproai.co](mailto:support@seoproai.co) or open a GitHub issue without including credentials or customer data. Service availability: [seoproai.co](https://seoproai.co).

## License

Documentation and repository assets are licensed under MIT. The hosted SEOPro AI service and its implementation remain proprietary and are governed by the [Terms](https://seoproai.co/terms-conditions).
