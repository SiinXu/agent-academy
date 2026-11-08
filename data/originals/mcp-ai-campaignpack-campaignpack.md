# Campaign Pack MCP server

[![mcptry](https://mcptry.com/badge/ai.campaignpack/campaignpack)](https://mcptry.com/servers/ai.campaignpack/campaignpack)

Turn a product photo and a couple of sentences into a finished ad campaign —
without leaving Claude, Claude Code or Cursor.

You get a campaign plan, campaign ideas, ad and social scripts, a creator brief,
product stills, and a client-ready PDF you could send to a customer.

**Everything runs on Campaign Pack's own GPUs.** No third-party model provider
is in the path, which is why an unreleased product photo can go into it.

> Hosted server — there is nothing to install or self-host. This repository is
> the connection details and the tool reference.

## Connect

### Claude Desktop / Claude.ai

Settings → Connectors → **Add custom connector**, and give it:

```
https://tools.campaignpack.ai/mcp
```

A browser window asks you to sign in to Campaign Pack and confirm. That is all —
no token to copy.

### Claude Code

```bash
claude mcp add --transport http campaignpack https://tools.campaignpack.ai/mcp
```

### Cursor

`~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "campaignpack": {
      "url": "https://tools.campaignpack.ai/mcp",
      "headers": { "Authorization": "Bearer YOUR_TOKEN" }
    }
  }
}
```

Get a token from the account panel at
[tools.campaignpack.ai](https://tools.campaignpack.ai/ai-studio/) → **🔌 Connect**
→ Generate token. Name it after the machine you are putting it on, so you can
disconnect that one later without touching the others.

You need a Campaign Pack account either way. [Sign up free](https://campaignpack.ai).

## How to use it

Describe the product to your assistant the way you would to a person, then ask
for a campaign. **Your assistant writes the brief** — that is the point of this
being an MCP server rather than a form. The more specific the brief, the better
the pack.

> I sell a stainless steel water bottle, direct to consumers, keeps drinks cold
> for 24 hours. The buyer is a city commuter who already owns a bottle and wants
> a better one. Here's the product photo — make me a campaign.

Runs take minutes, not seconds. The assistant starts the job, gets an id back,
and polls. You can watch the same run in a browser while it works.

## Tools

| Tool | What it does |
|---|---|
| `start_campaign` | Start a pack. Returns a job id and a URL to watch it |
| `check_campaign` | Status, recent steps, queue position |
| `get_pack` | The finished folder, the written overview, the PDF |
| `upload_product_photo` | Put a real product photo in your workspace first |
| `share_campaign` | Give a teammate access **while the run is still going** |
| `list_campaign_access` | Who can see a campaign |
| `unshare_campaign` | Take access back |
| `answer_approval` | Approve or refuse anything the run wants to send outward |
| `abort_campaign` | Stop a run |

### Sizes

| Size | Time | What you get |
|---|---|---|
| `text` | ~1 min | Plan, ideas, scripts, creator brief, PDF |
| `lite` | ~10 min | The above plus two product stills |

The image size edits **your** photo rather than inventing a product, so upload a
real one. Without a photo it refuses, which is deliberate: generated-from-nothing
product images are not usable in an ad.

## Sharing a live run

A campaign you start from your own assistant can be followed by a teammate from
*theirs*, while it is still running. From their own account they can watch its
progress, answer the approval prompts it raises, stop it, and read the finished
pack. It is the same campaign in the same folder, not a copy.

Continuing a finished campaign with another turn is a browser job today — the
tools here start a campaign and follow it, they do not add turns to one that has
already run.

```
share_campaign(session_id, "teammate@company.com")
```

They need their own Campaign Pack account — sharing grants access, it does not
create one.

## Privacy

- No third-party AI API is in the product path. Not OpenAI, not Anthropic, not
  Midjourney, not ElevenLabs. The models run on hardware Campaign Pack owns.
- A run that wants to send your data anywhere outside pauses and asks a human
  first, through `answer_approval`.
- Your assistant never sees your Campaign Pack password. Claude connects by
  OAuth; Cursor uses a token you issue and can revoke.
- Disconnect any client from the account panel at any time.

## Limits worth knowing

- **Runs serialise.** There is one GPU, so one campaign per account at a time.
- A finished pack stays in your workspace; download the PDF from the website.

## Links

- [campaignpack.ai](https://campaignpack.ai)
- [Sign in](https://tools.campaignpack.ai/ai-studio/)
