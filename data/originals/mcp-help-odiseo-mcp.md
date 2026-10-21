# Odiseo CLI

Connect Codex, Claude Code, Cursor, or OpenClaw to the
[Odiseo SEO MCP](https://odiseo.help/mcp) from one command.

Odiseo gives an agent the tools to research a site, build briefs and content
plans, create and review articles, and operate the publication workflow inside
the organization you authorize.

## Requirements

- Node.js 20 or newer
- An Odiseo account whose organization has MCP access
- One supported client: Codex, Claude Code, Cursor, or OpenClaw

## Quickstart

Authenticate in the browser with the OAuth device flow:

```bash
npx odiseo-cli login
```

Then install Odiseo in your client:

```bash
npx odiseo-cli mcp install cursor
```

Replace `cursor` with `codex`, `claude`, or `openclaw`. Finally, verify the
credential and MCP endpoint:

```bash
npx odiseo-cli mcp doctor
```

The login command shows a short code and opens the Odiseo approval page. The
resulting session is stored in `~/.config/odiseo/config.json` with owner-only
permissions. The install command places that bearer credential in the selected
client's user-level MCP configuration.

## Commands

### `odiseo login`

Starts the OAuth device authorization flow:

```bash
odiseo login
odiseo login --no-open
```

For local development:

```bash
odiseo login --base-url http://localhost:3000 --no-open
```

Advanced users can authenticate with an existing Odiseo MCP API key instead:

```bash
odiseo login --key seoap_your_key
```

API keys can be scoped to a site and a narrower permission set. Browser OAuth
and device authorization represent the complete organization membership.

### `odiseo mcp install`

Installs an authenticated Streamable HTTP server definition:

```bash
odiseo mcp install codex
odiseo mcp install claude
odiseo mcp install cursor
odiseo mcp install openclaw
```

The default endpoint is `https://odiseo.help/api/mcp`. Override it for a local
or self-hosted environment:

```bash
odiseo mcp install cursor --endpoint http://localhost:3000/api/mcp
```

Client behavior:

| Client | Installation method |
| --- | --- |
| Cursor | Merges `odiseo` into `~/.cursor/mcp.json` |
| Codex | Replaces only `[mcp_servers.odiseo]` in `~/.codex/config.toml` |
| Claude Code | Runs `claude mcp add` in user scope |
| OpenClaw | Runs `openclaw mcp set` with Streamable HTTP transport |

Cursor and Codex config files are written atomically with mode `0600`. Claude
Code and OpenClaw own and protect their respective configuration stores.

### `odiseo mcp doctor`

Sends a real MCP `initialize` request with the stored credential:

```bash
odiseo mcp doctor
odiseo doctor
```

It reports the MCP server name, protocol version, and latency. It also gives
specific guidance for expired credentials, missing subscription access, and
HTTP authentication failures.

### `odiseo logout`

Removes the credential stored by this CLI. Client configurations are left in
place so you can re-run `odiseo login` and `odiseo mcp install <client>`
without losing unrelated settings.

## Connect without the CLI

Every supported client can also use Odiseo's native MCP OAuth discovery. Add
only this URL:

```text
https://odiseo.help/api/mcp
```

For example:

```bash
codex mcp add odiseo --url https://odiseo.help/api/mcp
codex mcp login odiseo

claude mcp add --transport http odiseo https://odiseo.help/api/mcp

openclaw mcp set odiseo \
  '{"url":"https://odiseo.help/api/mcp","transport":"streamable-http","auth":"oauth"}'
openclaw mcp login odiseo
```

Cursor users can use the **Add to Cursor** button on
[odiseo.help/mcp](https://odiseo.help/mcp).

## Security

- The CLI never prints a saved bearer token.
- File writes are atomic and use owner-only permissions where supported.
- Child processes are launched directly, never through a shell.
- OAuth/device credentials grant access to the authorized organization.
- Publishing and approval tools remain high-impact actions: agents should call
  them only after an explicit user instruction.
- Use a site-scoped `seoap_` API key when a narrower long-lived credential is
  preferable.

If a credential is exposed, revoke it in Odiseo and run `odiseo login` again.

## Development

```bash
npm install
npm run typecheck
npm test
```

Build output is generated in `dist/`. The package has no runtime dependencies.

## License

MIT
