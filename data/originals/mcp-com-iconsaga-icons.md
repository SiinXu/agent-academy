<p align="center">
  <a href="https://iconsaga.com"><img src="assets/readme/readme-1-hook-1600x800.png" width="880" alt="IconSaga: 5,527 free icons. IconSaga's icon sets and a grid of its icons on a dark stage, with iconsaga.com."></a>
</p>

# IconSaga

**Icons that match. In your colors.**

IconSaga has <!-- sync:icons -->5,527<!-- /sync --> free icons for your website, slides and documents, all drawn in one style so they belong together.

**Use them yourself, or let your AI pick them for you.**

- **Yourself:** find an icon at [iconsaga.com](https://iconsaga.com), choose your colors, then copy it into your slides or download it.
- **With your AI:** connect IconSaga once to the AI that builds your website. Then just ask, in your own words and your own language: *"add an icon to each feature card, in our brand colors."* Your AI finds icons that fit and puts them in.

## See it in action

<p align="center">
  <a href="https://youtu.be/cNZ1gJO2w-A"><img src="assets/readme/readme-4-demo-1600x900.png" width="880" alt="Watch the IconSaga demo on YouTube (1:23): Icons that match. In your colors. 5,527 icons in 62 sets, line, solid and duo, free with one credit line."></a>
</p>

<p align="center"><a href="https://youtu.be/cNZ1gJO2w-A">Watch the demo on YouTube</a> (1:23) · <a href="https://youtu.be/H1BwibkKLDE">Thai version</a></p>

<p align="center">
  <img src="assets/readme/readme-2-colors-1600x800.png" width="880" alt="Pick your brand colors. Every icon follows. IconSaga's color picker with ready color pairs, and a page of icons shown in the chosen colors.">
</p>

## Connect your AI

<p align="center">
  <img src="assets/readme/readme-3-mcp-1600x800.png" width="880" alt="Let your AI pick icons via MCP. Claude Code, Codex and Cursor, and a chat where the AI finds three cloud backup icons in your colors.">
</p>

It takes about a minute, and you don't need an account to start.

### Claude

The easiest way: **[add IconSaga from Claude's directory](https://claude.ai/directory/iconsaga)** and click Connect. You sign in to IconSaga once (a free account is enough), then ask Claude for icons in your own words.

### Claude Code

Run this once in your terminal:

<!-- sync:connect:claude-code -->
```bash
claude mcp add --transport http iconsaga https://iconsaga.com/mcp
```
<!-- /sync -->

Then ask Claude for icons in your own words.

### Codex

Run this once in your terminal:

<!-- sync:connect:codex -->
```bash
codex mcp add iconsaga --url https://iconsaga.com/mcp
```
<!-- /sync -->

Then ask Codex for icons in your own words.

### Cursor

**[Add IconSaga to Cursor][add-to-cursor]**. Cursor opens and asks you to confirm.

<!-- sync:cursor-ref -->
[add-to-cursor]: https://cursor.com/install-mcp?name=iconsaga&config=eyJ1cmwiOiJodHRwczovL2ljb25zYWdhLmNvbS9tY3AifQ%3D%3D
<!-- /sync -->

<details>
<summary>Or add it by hand</summary>

Put this in `.cursor/mcp.json` in your project:

<!-- sync:connect:cursor -->
```json
{
  "mcpServers": {
    "iconsaga": {
      "url": "https://iconsaga.com/mcp"
    }
  }
}
```
<!-- /sync -->

</details>

### Any other AI tool that supports MCP

MCP is the standard way for an AI tool to use another service. If your tool has a place for connectors or MCP servers, add IconSaga there:

<!-- sync:connect:builders -->
```text
In the tool's connectors or integrations, add a custom MCP server:
Name: IconSaga
URL: https://iconsaga.com/mcp
(To use your account there: https://iconsaga.com/mcp/account and sign in, or a personal key, below.)
```
<!-- /sync -->

### Keep your AI on track (optional)

Paste a few lines of instructions into your project once, so your AI keeps using IconSaga the same way every time: one style for the whole site, your colors, and the credit line. **[What to paste, and where](ai/README.md)**

### Use your IconSaga account (optional)

Without an account, your AI can use IconSaga <!-- sync:guest-per-day -->30<!-- /sync --> times a day. With a free account it's <!-- sync:free-per-month -->1,000<!-- /sync --> times a month. **[Connect with your account](docs/connect-with-your-account.md)**

## What to ask for

- *"Add an icon to each of the three feature cards. Use our brand colors."*
- *"Replace the icons on the pricing page with IconSaga icons."*
- *"Make a slide about our three-step process, with one icon for each step."*

Two short examples: **[a website section](examples/website-section.md)** · **[a slide](examples/slide.md)**

## Free and Pro

| | Free | Pro |
|---|---|---|
| All <!-- sync:icons -->5,527<!-- /sync --> icons, in three styles and your colors | Yes | Yes |
| Use them in your own work and your clients' work | Yes, with one credit line | Yes, no credit line |
| Your AI can use IconSaga | <!-- sync:guest-per-day -->30<!-- /sync --> times a day without an account, <!-- sync:free-per-month -->1,000<!-- /sync --> a month with a free account | <!-- sync:pro-per-month -->20,000<!-- /sync --> times a month |
| Moving icons for slides and videos | <!-- sync:free-exports -->10<!-- /sync --> a month with a free account | No limit |
| Download a whole set at once | | Yes |
| Sell templates, UI kits and print products made with the icons | | Yes |
| Price | Free | <!-- sync:price-monthly -->$8<!-- /sync --> a month or <!-- sync:price-yearly -->$69<!-- /sync --> a year |

More about Pro: [iconsaga.com/pro](https://iconsaga.com/pro)

### The credit line

On the free plan, add this one line where credits usually go, like your site's footer, the last slide, or the end of a document:

<!-- sync:credit:block -->
```text
Icons by IconSaga · iconsaga.com
```
<!-- /sync -->

One line covers every icon in that piece of work. With Pro, you don't need it.

## Can't find an icon?

**[Request an icon](https://github.com/iconsaga/iconsaga/issues/new?template=request-an-icon.yml)** and tell us what it should show. New icons come out in every release: see the [changelog](CHANGELOG.md).

## License

- **The icons** are not in this repository. You get them from [iconsaga.com](https://iconsaga.com) or through your AI, under the [IconSaga License](https://iconsaga.com/license). In short: use them in your own work and your clients' work, but don't resell or share them as an icon set, and don't use them in a logo.
- **The examples and text in this repository** are under the [MIT License](LICENSE).

---

<p align="center"><!-- sync:credit -->Icons by IconSaga · iconsaga.com<!-- /sync --></p>
