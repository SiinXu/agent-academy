# SEOpen for AI coding agents

Fix what's hurting your site's search traffic from your own repo, then see whether it worked.

SEOpen audits your site and reads your Search Console. This plugin gives your coding agent that list and the steps to work through it: change the code on a branch, run your build, record the fix. It also writes and improves pages, adds internal links, gets pages indexed and moves URLs safely, using only facts from your repo or from you. SEOpen then checks the change reached the live page and measures it in Search Console at 7, 14 and 28 days.

You need a [SEOpen](https://getseopen.com) account.

## Install in Claude Code

1. Install the plugin in Claude Code:

   ```
   /plugin marketplace add SEOpen/seopen-agent
   /plugin install seopen@seopen
   /reload-plugins
   ```

2. Sign in. Run `/mcp`, choose `seopen` and **Authenticate**. SEOpen opens in your browser: sign in and choose what Claude Code may do. It can always read; tick "Can make changes" to let it record fixes, and "Can spend research credits" to let it buy keyword and domain lookups. There's no key to make or keep in your shell.

3. Check it works:

   ```
   /seopen:seopen-setup
   ```

Then, in your site's repo:

```
/seopen:seopen-fix
```

## Install in Codex

Codex signs in with OAuth, so there's no key to make:

```bash
codex plugin marketplace add SEOpen/seopen-agent
codex plugin add seopen@seopen
codex mcp login seopen
```

The last command opens SEOpen in your browser. Sign in, choose what Codex may do (it can always read; making changes and spending research credits are yours to tick), and you're connected. In your site's repo, ask for `$seopen-setup` to check it, then `$seopen-fix`.

## The skills

25 skills, listed with their costs in [the plugin README](plugins/seopen/README.md):

- **Find**: striking distance, content refresh, keyword research, keyword gap, keyword clusters, teardowns, competitor plans, link prospects, free tool ideas, AI visibility, AI citations and local audits.
- **Fix and write**: fix SEOpen's issues, improve a page, write a new page from a brief, comparison and alternatives pages, internal links, indexing, a facts file the writing skills read, site migrations and a pre-deploy check.
- **Run on a schedule**: autopilot, which ships at most one change a run as a pull request.
- **Report**: a weekly review and a monthly client report.

Every change a skill makes is logged in SEOpen, which checks it reached the live page and measures it in Search Console.

## Claude, ChatGPT and other apps, without a key

Apps that add remote MCP servers by address (Claude.ai and Claude Desktop custom connectors, ChatGPT, and others that support MCP sign-in) connect with OAuth:

1. Add a custom connector with the address `https://app.getseopen.com/api/mcp`.
2. The app sends you to SEOpen. Sign in, then choose what it may do: it can always read, and you can let it make changes or spend research credits, the same choices a key has.
3. You're sent back to the app, connected to your workspace.

See and disconnect connected apps at https://app.getseopen.com/agents. The skills still need installing in the app (for Claude, upload each skill's zip in Settings).

## Other agents

The skills are plain [Agent Skills](https://agentskills.io) in [`plugins/seopen/skills`](plugins/seopen/skills), so any client that reads `SKILL.md` can use them. Connect the server yourself:

**Cursor**, in `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "seopen": {
      "url": "https://app.getseopen.com/api/mcp",
      "headers": { "Authorization": "Bearer ${env:SEOPEN_API_KEY}" }
    }
  }
}
```

**Kiro**, in one click:

[![Add to Kiro](https://kiro.dev/images/add-to-kiro.svg)](https://kiro.dev/launch/mcp/add?name=seopen&config=%7B%22url%22%3A%22https%3A%2F%2Fapp.getseopen.com%2Fapi%2Fmcp%22%7D)

**Codex without the plugin**, with a key, in `~/.codex/config.toml`:

```toml
[mcp_servers.seopen]
url = "https://app.getseopen.com/api/mcp"
bearer_token_env_var = "SEOPEN_API_KEY"
```

**Without the plugin in Claude Code:**

```bash
claude mcp add --scope user --transport http seopen https://app.getseopen.com/api/mcp --header 'Authorization: Bearer ${SEOPEN_API_KEY}'
```

The single quotes keep the key out of Claude Code's settings: it reads `SEOPEN_API_KEY` when it connects. `--scope user` makes the server work in every folder, not just the one you ran it in.

The server also offers the main workflows as prompts (`fix_issues`, `weekly_review`, `keyword_research`, `ai_visibility_check`), which many clients show as commands.

## What it can and can't do

- It works on a branch (`seopen/fixes`, `seopen/write` and so on) and doesn't merge or deploy unless you ask. Autopilot merges only if you choose that when you set it up.
- A key can read and nothing more unless you tick those boxes. Lookups that cost credits name their price first and spend only what the call allows.
- Nothing can delete your data through the server.
- It's written for Next.js App Router, Astro, SvelteKit and plain HTML. On anything else it tells you first.

## Support and privacy

- Support: hello@getseopen.com, or the [plugin docs](https://getseopen.com/docs/agents/plugin).
- [Privacy policy](https://getseopen.com/privacy) and [terms](https://getseopen.com/terms).

## Licence

MIT. See [LICENSE](LICENSE).
