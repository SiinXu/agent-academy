<p align="center">
  <img src="https://raw.githubusercontent.com/WireCatLabs/hubspot-cli/main/docs/images/social-preview.png" alt="HubSpot CRM CLI for AI agents" width="100%">
</p>

# hubspot: HubSpot CRM CLI for AI agents

<p align="center">
  Know where every deal stands and what changed overnight, without opening HubSpot. Ask your AI agent, and it answers
  from a copy of your deals, contacts and companies on your computer, even offline.
</p>

<p align="center">
  <a href="https://github.com/WireCatLabs/hubspot-cli/blob/main/docs/index.md">Docs</a> ·
  <a href="https://github.com/WireCatLabs/hubspot-cli/blob/main/docs/installation.md">Install</a> ·
  <a href="https://github.com/WireCatLabs/hubspot-cli/blob/main/docs/usage.md">Usage</a> ·
  <a href="https://discord.gg/DebENqbRrJ">Discord</a>
</p>

<p align="center">
  <a href="https://github.com/WireCatLabs/hubspot-cli/actions/workflows/ci.yml"><img src="https://github.com/WireCatLabs/hubspot-cli/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://github.com/WireCatLabs/hubspot-cli/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-blue" alt="License: Apache 2.0"></a>
</p>

- **Ask instead of clicking.** "Which deals are stuck in Contract sent?" gets an answer in a second, in Claude Code,
  Codex or any app that speaks MCP.
- **The morning starts with what changed.** `changes list` shows what each sync saw change, and a schedule sends it to
  you.
- **Writes when you want them.** Create and update deals, contacts and companies, move a deal or close it. The key
  stays read only until you give it the write scopes, and a delete asks first.

```text
You:    What changed in the CRM since yesterday?
Agent:  (runs hubspot work changes list "at>=1d")
        · New deal "Example kitchen", 15 000 EUR, in Appointment scheduled
        · "Example office" moved to Closed won, 8 200 EUR
You:    Who is the contact on Example kitchen?
Agent:  (runs hubspot work deals show deal:12)
        Anna Example, anna@example.com, at Example LLC.
```

*Invented deals, illustrative output.*

## Quick start

A super admin of the HubSpot account makes one key first: a **service key** (Development → Keys → Service keys) or
the access token of a legacy **private app**. Give it these read scopes:

```text
crm.objects.contacts.read     crm.objects.companies.read    crm.objects.deals.read
crm.objects.owners.read       crm.schemas.contacts.read     crm.schemas.companies.read
crm.schemas.deals.read        sales-email-read
```

To let `hubspot` change records too, add `crm.objects.contacts.write`, `crm.objects.companies.write` and
`crm.objects.deals.write`. Leave them out and the key only reads.

Add `crm.objects.leads.read` on Sales Hub Professional or Enterprise to read leads, and `tickets` to read tickets
through `api`. A scope you leave out fails only the commands that need it.

```sh
npm install -g @wirecat/hubspot-cli
hubspot skill install                  # the agent skill, for Claude Code, Codex and Gemini CLI
hubspot work session start             # paste the key when asked, it goes to the keyring
hubspot work sync                      # copy your deals, contacts and companies
hubspot work deals list status:open
```

`work` is a profile, a name you choose for this account. It is the first word of every command that uses the
account. You need Node.js 22.16 or a later 22.x, or Node.js 24 or later. `hubspot doctor` shows what is set up and
needs no network.

More: [install and connect](docs/installation.md)

## What you can do

- **Know the pipeline.** Open deals with their stage, amount and owner, the board of each pipeline and how many deals
  stand in each stage.
- **See what changed.** Deals made, moved, won and lost, given another owner, and new activities, since any time you
  name.
- **Find a client.** Any contact or company in the account, read live, with its phones and e-mails.
- **Follow the work on a deal.** Notes, calls, e-mails, meetings and tasks, copied with the deals.
- **Change a deal from the chat.** Create a deal, rename it, move it to the next stage, close it won or lost, or add
  a contact or a company, and the copy takes the change at once.
- **Reach past the copy.** Every operation of HubSpot's CRM API is a command of its own: notes, tasks, tickets,
  associations and merges included.
- **Search across your work.** A deal turns up next to the chat where you agreed on it and the meeting where you
  discussed it, if you use the other WireCat tools.

## For AI agents

Ask in plain words. The agent picks the commands.

> *"Use hubspot. Which deals are waiting in Contract sent, and for how much?"*
> *"Use hubspot. What changed in the CRM since yesterday?"*

- **Claude Code, Codex, Gemini CLI, OpenClaw** and other agents with a terminal run `hubspot` themselves.
  `hubspot skill install` teaches them how.
- **Claude Desktop, Cursor** and other MCP apps connect to `hubspot work mcp serve`.

```sh
hubspot work mcp add claude-code --allow-writes   # or: codex
hubspot work mcp config                           # the entry for Claude Desktop, Cursor and others
```

`--allow-writes` confirms you saw that the server offers commands that change something: `sync` and schedules on this
computer, and the writes to HubSpot, which only a key with write scopes can make. Text from the account reaches the
agent marked as untrusted, so the agent reads it as data, never as instructions. The sign-in commands are not offered
over MCP.

More: [agents and MCP](docs/usage.md#agents)

## Why hubspot

- **A copy of your CRM on your computer.** `sync` copies your deals with their contacts and companies, and the next
  sync takes only the changes. Lists, the pipeline and search then answer with no request to HubSpot, also offline.
- **The key stays in the system keyring.** It never appears in output, errors or run records, and no command takes it
  as an argument.
- **A permission on every command.** Each command and each operation of HubSpot's API has its own level, so you
  decide what an agent may read and change.
- **Your CRM beside your other context.** Deals sit in the same local store as your messages, notes and meetings from
  the other WireCat tools, and `search all` finds them together.
- **As many accounts as you need.** Each HubSpot account is a profile you name in the command, and none is ever picked
  for you.
- **Free and open source.** Apache 2.0.

## Main features

### Deals and the pipeline

```sh
hubspot work deals list stage:"Contract sent"          # from the copy, offline too
hubspot work deals show deal:12                        # one deal with its stage, amount and the people on it
hubspot work pipelines list                            # the deal pipelines and their stages
hubspot work leads list                                # leads, on Sales Hub Professional or Enterprise
hubspot work deals create --title "Example kitchen" --amount 15000 --currency EUR
hubspot work deals move deal:12 "Contract sent"        # the next stage of its pipeline
hubspot work deals close deal:12 won
```

### Contacts, companies and owners

```sh
hubspot work people list "Anna"                        # any contact in the account, read live
hubspot work organizations list "Example LLC"          # any company, read live
hubspot work users list                                # the account's owners
hubspot work people create --name "Anna Example" --email anna@example.com
hubspot work organizations update 4021 --phone "+34 600 000 000"
```

### Activities and what changed

```sh
hubspot work activities list                           # notes, calls, e-mails, meetings and tasks
hubspot work changes list "at>=1d"                     # what changed in the last day
```

Activities are copied once you turn on the activities setting. `activities list` names the setting.

### Any operation of the API

```sh
hubspot work api list                                  # every operation, without calling HubSpot
hubspot work api deals-list --limit 5                  # one of them
hubspot work api notes-create --body-file note.json    # a note on a deal: a write, which asks first
```

`api` offers every operation of HubSpot's CRM API version 2026-03, from its 15 specs, each with its own permission:
reads, writes and deletes. Notes, tasks and tickets are written here.

### With your other sources

```sh
hubspot work search all "Example LLC"                  # the deal beside your other WireCat data
```

More: [use it](docs/usage.md) · [command reference](docs/commands.md)

### How it works

- **A key, not a user.** A service key or a private app token belongs to the account, not to a person. `hubspot`
  copies the whole account, and `owner:me` names nobody: filter by `owner:<owner id>` from `users list`.
- **Polite to HubSpot.** `hubspot` sends at most 4 requests a second for each profile, under HubSpot's limits on
  every plan. When the account has spent its daily allowance, it says when the allowance comes back.
- **Made for scripts.** `--json` prints one JSON value, and every error has a code to branch on.

## Sign-in and profiles

A profile is a name you choose for one HubSpot account, such as `work`. It is the first word of every command that
uses the account, and none is ever assumed: a command without one stops and names the choices.
`WCHUBSPOT_PROFILE=work` sets it for one shell session.

`hubspot work session start` asks for the key without showing it, or reads it from stdin. It checks the key against
the account and keeps it in the system keyring. `--credential-storage file` keeps it in a private file instead.
`session status --check` names the account the key reads, `session end` forgets the key on this computer, and
`session list` lists the profiles. `account remove --keep-data` or `--delete-data` forgets a profile, keeping or
deleting its copy of the CRM.

A second profile that signs in to the same HubSpot account is refused, so one copy is never synced twice.

More: [sign in](docs/installation.md#sign-in) · [profiles](docs/usage.md#the-profile-comes-first)

## Settings and permissions

Each profile has a permission level for every command and every API operation: `allow`, `ask`, `readonly` or `deny`.
A command's key is its name, such as `deals.list`. An API operation's key is `api.<command>`, such as
`api.deals-search`, and `api` covers them all.

Changing a deal, contact or company with its command goes ahead; deleting one asks. Every write of `api` also checks
its group's `<group>.write`, such as `deals.write`, and every delete its `<group>.delete`: both ask. A write that does
what a command does checks that command's key too, so `deals.update deny` holds on both paths. A key belongs to the
account, not to a person, so giving a record an owner checks `crm.assign-others`, which is `deny` until you allow it.
A GDPR delete of a contact checks `people.erase` as well, so you can deny it alone.

```sh
hubspot work config set permissions.people deny   # this profile reads no contacts
```

Over MCP nobody is there to answer, so `ask` lets the command run. Set a key to `readonly` or `deny` to stop an
agent. `hubspot work mcp serve --permission people.list=deny` makes a key stricter for one server only, never looser.
`WCHUBSPOT_READ_ONLY=1` refuses every write.

More: [settings and permissions](docs/configuration.md#permissions)

## Limits

- `hubspot` is tested against a fake account built from HubSpot's API reference, and each release is checked against
  a HubSpot test account.
- A contact keeps one e-mail and two numbers (phone and mobile), and a company one number and no e-mail: a longer
  list is refused. Leads, notes, tasks and a deal's contacts and company are written through `api`.
- HubSpot takes no idempotency key: a write that ended in `outcome_unknown` may have happened. Check before repeating.
- Tickets are read and written only through `api`, not copied.
- Leads need Sales Hub Professional or Enterprise.
- Before 1.0, a minor version may change commands, `--json` fields and MCP tools. The changelog marks each such
  change.

## Security

The key works like a password: anyone who has it can read what its scopes allow. `hubspot` keeps it in the system
keyring and never prints it. `hubspot` cannot revoke a key, so after a leak delete or rotate it in HubSpot.

More: [security](docs/security.md) · Report a vulnerability: [SECURITY.md](SECURITY.md)

## When something goes wrong

```sh
hubspot doctor                        # what is set up, without connecting
hubspot work session status --check   # whether the key works, and for which account
```

More: [troubleshooting](docs/troubleshooting.md) · Ask on [Discord](https://discord.gg/DebENqbRrJ) · Bugs go to this
repository's [issues](https://github.com/WireCatLabs/hubspot-cli/issues).

## Documentation

Every page is in [docs/](docs/index.md): [install](docs/installation.md), [use it](docs/usage.md),
[commands](docs/commands.md), [settings](docs/configuration.md), [troubleshooting](docs/troubleshooting.md) and
[security](docs/security.md).

## Development

```sh
pnpm install && pnpm build
node dist/bin/hubspot.js --help
pnpm test
```

Tests run against a fake account built from HubSpot's API reference, with invented records and an injected keyring.
Nothing reaches a real account. `pnpm release:check` runs every check a release needs.

More: [testing](docs/dev/TESTING.md) · [design](docs/dev/DESIGN.md)

Pull requests, bug reports and ideas go to [issues](https://github.com/WireCatLabs/hubspot-cli/issues).

## Part of WireCat

`hubspot` is one of the [WireCat](https://wirecat.dev) tools: open-source, local-first command-line tools that give AI
agents your context from messengers, mail, calendars, documents and CRMs. Each one works on its own.

## License

[Apache 2.0](LICENSE)
