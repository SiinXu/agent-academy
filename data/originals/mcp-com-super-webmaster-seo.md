# Super Webmaster MCP

Free SEO and GEO audit of any public website, straight from your AI assistant. You get scores out of 100 and a list of fixes ranked by how much they help. Results are written in French.

This repository holds the documentation only. The server is hosted by [Super Webmaster](https://super-webmaster.com): nothing to install, no API key, no account.

- Endpoint (remote, streamable HTTP, no authentication): `https://app.super-webmaster.com/api/mcp/public`
- Official MCP Registry name: `com.super-webmaster/seo`
- Full guide (in French): https://super-webmaster.com/mcp-seo.php

## Tools

| Tool | What it does |
|---|---|
| `auditer_site` | Starts an audit of a public website (up to 200 pages). |
| `resultat_audit` | Returns the scores (technical, content, authority, AI visibility) and the most useful fixes. |
| `detail_correction` | Explains how to apply one fix, step by step. |

A typical prompt: "Audit example.com with Super Webmaster and tell me the three fixes that will help most."

## Setup

**Claude.ai**: Settings, Connectors, Add custom connector. Give it a name, paste the endpoint URL, then Add and Connect.

**ChatGPT**: open the plugins page, Add, Add a custom MCP server. Paste the endpoint URL and set Authentication to "No authentication".

**Claude Code**:

```
claude mcp add --transport http super-webmaster https://app.super-webmaster.com/api/mcp/public
```

**Other clients** (Cursor, VS Code, and others that accept remote MCP servers): add a remote server with the endpoint URL above.

We tested it with Claude.ai, ChatGPT and Claude Code.

## Limits

- The public endpoint has a shared quota of 200 audits per 24 hours.
- The same site is audited at most once per hour. A second request within the hour returns the existing result.
- Without an account, the three most useful fixes come in full and the others as titles, with a link to the full report.

## About

Made by Pierre Billard, SEO and GEO consultant, founder of [Super Webmaster](https://super-webmaster.com). Free audit in the browser: https://app.super-webmaster.com
