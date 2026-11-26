<p align="center">
  <img src="docs/images/banner.png" alt="shopify-store-sync-mcp: diff and sync configuration between Shopify stores from your AI assistant" width="100%">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/shopify-store-sync-mcp"><img src="https://img.shields.io/npm/v/shopify-store-sync-mcp?color=cb3837" alt="npm version"></a>
  <a href="https://github.com/ussefidder/shopify-store-sync-mcp/actions/workflows/ci.yml"><img src="https://github.com/ussefidder/shopify-store-sync-mcp/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-57c26e" alt="MIT license"></a>
  <img src="https://img.shields.io/badge/node-%3E%3D22-6cb6ff" alt="Node 22+">
  <a href="https://registry.modelcontextprotocol.io/?q=shopify-store-sync-mcp"><img src="https://img.shields.io/badge/MCP%20Registry-listed-a371f7" alt="Listed on the MCP Registry"></a>
  <img src="https://img.shields.io/badge/Shopify%20Admin%20API-2026--10-e3b341" alt="Shopify Admin API 2026-10">
  <a href="https://glama.ai/mcp/servers/ussefidder/shopify-store-sync-mcp"><img src="https://glama.ai/mcp/servers/ussefidder/shopify-store-sync-mcp/badges/score.svg" alt="shopify-store-sync-mcp MCP server, rated on Glama"></a>
</p>

<h3 align="center">Keep your Shopify stores in sync by asking for it.</h3>

<p align="center">Compare a dev store with production, see every difference field by field, review a dry-run plan, then apply it.<br>From Claude, Cursor or any MCP client, or straight from the command line.</p>

<p align="center">
  <a href="#get-started">Get started</a> ·
  <a href="#what-it-syncs">What it syncs</a> ·
  <a href="#built-for-big-catalogs">Big catalogs</a> ·
  <a href="#why-this-tool">Why this tool</a> ·
  <a href="#safe-on-production">Safety</a> ·
  <a href="#tested-on-real-stores">Tested</a> ·
  <a href="#roadmap">Roadmap</a>
</p>

<p align="center">
  <img src="docs/images/at-a-glance.png" alt="Everything it does: field-level diff, dry-run plans, safe apply, production guardrails, cross-store ID remapping, big catalogs (4,000 products in 51 minutes), live status and cancel, products with prices and stock, metafields and translations, theme settings diff, config as code, CLI and drift checks" width="100%">
</p>

<p align="center"><b>Open to recommendations.</b> Missing a resource, a workflow or a check you need? <a href="https://github.com/ussefidder/shopify-store-sync-mcp/issues/new">Open an issue</a> and tell us.</p>

<p align="center">
  <img src="docs/images/quickstart.png" alt="Three steps: connect your stores with npx shopify-store-sync-mcp connect, add the server to your AI client, ask in plain language" width="100%">
</p>

https://github.com/user-attachments/assets/07dd060d-aec6-4b71-b29b-486bfd9ccf35

<sub>Compare, plan, confirm, apply: the full walkthrough, with sound. Every output shown is real, from two sample stores.</sub>

<p align="center">
  <img src="docs/images/demo.png" alt="diff_stores, plan_sync and apply_plan output: 6 created, 3 updated, 1 conflict skipped, protected store refused until a person confirms" width="100%">
</p>

<sub>Real output of the server's tools on two sample stores.</sub>

## What it syncs

The store setup that usually gets rebuilt by hand, plus the images it uses. References between items (a size guide pointing at a product, a menu linking to a page) are carried across by handle, so they land on the right item instead of a broken ID.

<p align="center">
  <img src="docs/images/what-it-syncs.png" alt="Metafield definitions, metaobject definitions and entries, collections, pages, menus, redirects, store policies, files and images, and opt-in products (variants with SKU, barcode, weight and variant image; prices and stock when asked), metafield values and translations" width="100%">
</p>

<details>
<summary><b>Details per resource</b></summary>

| Resource | Keyed by | Notes |
|---|---|---|
| `metafield_definitions` | `OWNER_TYPE.namespace.key` | Name, description, pinning, storefront and customer account access, capabilities, validations. A type change is reported as a conflict, since Shopify can't change a definition's type in place, unless you choose what to do with `type_mismatch` (see [When a metafield's type differs](#when-a-metafields-type-differs)). |
| `metaobject_definitions` | `type` | Schema, access, capabilities. Fields are added or updated, never removed. Self-referencing definitions are handled. |
| `pages` | `handle` | Title, body HTML, template, published state. With `as_drafts` (`--as-drafts`), new pages are created hidden and existing ones keep their state. |
| `metaobjects` | `type/handle` | All field values, publish status. References to products, collections, pages and other metaobjects are remapped. A field the source leaves empty is never cleared in the target. With `as_drafts`, new entries are created as drafts. |
| `menus` | `handle` | Full item tree (3 levels), including customer account menus. Links to resources are remapped; custom URLs are kept; links to things that can't be matched are left out and reported. **Links that only the target menu has are kept**, in place, and the plan names them. |
| `redirects` | `path` | Thousands are fine. |
| `collections` | `handle` | Title, description, sort order, template, SEO and smart-collection rules (rules on a metafield definition are remapped). On Admin API 2026-07 and later, also what Shopify's collection sources add: **exclusions** (by tag, type, vendor, category or another collection), **sub-collections**, and conditions only the new model has (product status, category, metaobject values...). Products picked by hand into manual collections with `collection_products: true` (`--with-collection-products`). Conditions, exclusions, sub-collections and picked products that only the target has are kept. Manual versus smart is reported as a conflict. |
| `shop_policies` | `type` | Refund, privacy, terms, shipping and contact policy text. |
| `products` *(opt-in)* | `handle` | Title, description, vendor, type, category, tags, template, SEO, options, images, and variants matched by option values: SKU, barcode, weight, taxable flag, inventory policy, inventory tracking, shipping, customs details (HS code, country of origin) and the variant's image. **New products are created as drafts.** Prices only with `prices: true` (`--with-prices`), stock only with `inventory: true` (`--with-inventory`, available quantity per location, matched to the target's locations by name). On update, the tags, variants, option values and media (images, videos, 3D models) that only the target has are kept, and don't count as differences. Gift cards are skipped. See "What product sync leaves alone" below. |
| `metafields` *(opt-in)* | `PRODUCT/handle/namespace.key`, `COLLECTION/handle/…`, `PRODUCTVARIANT/handle/Size=M/…`, `SHOP/namespace.key` | Metafield **values** on products, collections, product variants and the shop. A value lands on the item with the same handle in the target; a variant value on the variant with the same option values; a shop value on the target's own shop. Reference values (including references to variants) are remapped. Filter with `namespaces` and `owner_types`. Shopify's own copies of built-in fields (`global.title_tag`, `global.description_tag`, `global.harmonized_system_code`) are left out: they travel with the item itself. |
| `discounts` *(opt-in, compared only)* | `automatic/title`, `code/title` | Automatic and code discounts: type, Shopify's summary of what they give, status, dates, combinations, codes (or their count for bulk sets) and usage limits. **Never written**: a plan lists differences as conflicts, since a discount changes what customers pay. Two discounts with the same title are reported instead of matched. |
| `translations` *(opt-in)* | `locale:Type/handle` | Translations of products, pages, collections, metaobjects, menus and policies. Registered against the target's own text, after the content itself is synced. A translated field only the target has is kept. The plan warns when a language isn't added to the target. With `market_translations: true` (`--market-translations`), the translations each market overrides too, keyed `locale@market:Type/handle` and registered for the market of the same handle. |
| `locations` *(opt-in)* | `name` | Inventory locations: address and whether they fulfill online orders. Locations run by a fulfillment app and deactivated ones are left out; nothing is deactivated or deleted. Two locations with the same name in different countries (often each store's default "Shop location") are a conflict, not a move. |
| `markets` *(opt-in)* | `handle` | Country markets: name, status, countries, currency settings, tax and duty price inclusions, web presences (subfolders or domains, with languages). Countries and web presences only the target has are kept. A missing subfolder is created; a missing domain is reported, since domains are connected by hand. B2B, location and channel markets are not synced. |
| `catalogs` *(opt-in)* | `title` | Market catalogs: status, markets, price list (currency, percentage adjustment, compare-at mode), and fixed variant prices with `prices: true`. A price list in a currency the target doesn't sell in is refused before anything is written. Which products a catalog includes is synced by `sales_channels`; a new catalog starts empty and the plan says so. |
| `sales_channels` *(opt-in)* | `Product/handle`, `Collection/handle` | Where products and collections are published: sales channels by app handle (`online_store`, `pos`...) and market catalogs (`catalog:<title>`), plus each product's status (active, draft, archived). **Only adds: nothing is unpublished.** A sales channel is an app, so it can't be created: the plan names channels the target hasn't installed, and items are still published on the others. Big catalogs are read with bulk exports and written 25 per request, 12 requests at once. Narrow with `include: ["Product/linen-*"]`. |

`products`, `metafields`, `translations` and `discounts` are read only when you ask for them (`resources: ["products"]`). Name what you want and only that is read (see [Targeted checks](#targeted-checks)). `owner_types` (`--owner-types`) limits metafield definitions and values to some owners, e.g. `["SHOP"]`. App-owned (`app--…`) and Shopify-reserved (`shopify--…`) data is skipped and listed in the report. Shopify's category metafield definitions (namespace `shopify`, the ones behind storefront filters such as fabric or size) can be compared with `include_reserved` (`--include-reserved`); they are never written, so a plan lists them as conflicts to enable in the target's admin.

**Files and images** referenced by any of the above are matched by file name in the target. When one is missing, the plan says so and `apply_plan` uploads it from the source store.

**What product sync leaves alone.** Never copied: sales-channel publishing, the status of existing products, unit cost, videos and 3D models (the target keeps its own), and translations of option names and values. Stock is copied only when asked, into locations with the same name; a location the target doesn't have is skipped. Nothing is ever removed from a target product: a tag, variant or image deleted in the source stays in the target until you remove it there.

**Big catalogs.** See [Built for big catalogs](#built-for-big-catalogs).

**Nothing goes live by surprise.** New products are drafts and new collections aren't on any sales channel. Pages and metaobject entries copy the published state of the source unless you pass `as_drafts`; the plan tells you when new ones would be visible right away.

</details>

### Stores in different currencies

When the two stores sell in different currencies, amounts are never converted on a guess. Give the rate with `currency_rates` (`--currency-rate MAD:EUR=0.092`; the reverse rate works too) and the tool converts:

- **product prices** (with `prices`), rounded to the target currency's decimals
- **catalog price lists**: moved to a currency the target sells in, fixed prices converted
- **market currencies** the target doesn't sell in

Without a rate, product prices are left out of the comparison, a percentage price list (no fixed amounts) follows the target's currency, and fixed prices in a currency the target can't sell in are refused before anything is written. The plan says which, and why.

```bash
shopify-store-sync-mcp plan dev prod --resources products,markets,catalogs --with-prices --currency-rate MAD:EUR=0.092
```

### When a metafield's type differs

A metafield can have one type in the source and another in the target, say `single_line_text_field` on one side and `list.single_line_text_field` on the other. By default the plan reports it as a conflict and skips it. `type_mismatch` (`--type-mismatch`) says what to do instead; it needs `metafields`, and `metafield_definitions` for retyping:

| Value | When to use it | What happens |
|---|---|---|
| `convert_values` | The target's type is the right one (its definition may be empty) | The target's definition is left alone. Source values are converted to its type: a value becomes a list of one, a list of one becomes a value, text moves between single and multi-line. A value that can't fit (a list of several values into a single value) is reported as a conflict. |
| `retype_definitions` | The source's type is the right one | The target's definition is **deleted and created again** with the source's type, since Shopify can't change a type in place. Its values are saved first to `~/.shopify-store-sync/backups`, then written back converted; the ones that can't be converted stay in the backup file and are reported. Then the source's values are written. Check collection conditions, storefront filters and theme code that use the field: in Liquid, `.value` of a list is an array. |

```bash
shopify-store-sync-mcp plan staging dev --resources metafield_definitions,metafields \
  --include "PRODUCT.custom.size,PRODUCT/*" --type-mismatch convert-values
```

## Built for big catalogs

Thousands of products are fine. Above 250 items the tool reads with Shopify bulk exports and writes in batches by itself, instead of one request per item. Comparing a 72-product store with a 4,530-product one went from about 10 hours in version 0.8.0 to 82 seconds since 0.8.1.

<p align="center">
  <img src="docs/images/big-catalogs.png" alt="This tool, earlier version against current. Full product diff, 72 against 4,530 products: about 10 hours in 0.8.0, 82 seconds since 0.8.1. Full copy of 4,000 products with variants, prices, stock and 86,000 metafields: about 3 hours in 0.10 with Shopify bulk operations, 51 minutes since 0.11 with batched requests" width="100%">
</p>

**Timed live, store to store**: 4,000 products with 46,000 variants, images, prices and stock per location, and 85,972 metafield values, copied between two development stores through the MCP tools. Both columns are this tool: version 0.10 wrote through Shopify bulk operations, version 0.11 through batched requests. Other tools and copying by hand were not timed.

| Step | This tool 0.10: Shopify bulk operations | This tool 0.11: batched requests |
|---|---:|---:|
| Diff and plan | 6 min | 6 min |
| 701 images, created once each | 3 min | 1 min |
| 4,000 products | 1 h 51 min | **18.5 min** |
| 85,972 metafield values | 1 h 7 min | **25 min** |
| **Total** | **about 3 h** | **51 min** |

Why: a Shopify bulk operation writes its items one after the other, about one every five seconds on these stores, and a store runs at most five at once. A few writes per request, twelve requests at once, go about six times faster for products. Metafield values start faster still and then settle at the store's API rate limit, which the tool waits out on its own.

- **Reads**: both stores are listed by handle first, and only the products both have are read in full. A full read of a big catalog is one bulk export.
- **Writes**: new and changed products go a few per request, 12 requests at once, with their variants, prices and stock. Missing images are created first, once each and all at the same time, so no product waits on a download and a shared image isn't copied per product. Metafield values go 100 per request. Measured on a live store, this is several times faster than Shopify's bulk write operations, which stay available with `SYNC_BULK_WRITES=true`.
- **Live status**: a big apply runs in the background. `apply_status` shows what is written, failed and left per resource type, and the time remaining. Reports list 50 items per section, with counts of the rest.
- **Nothing to set up**: it kicks in on its own. `SYNC_BULK_THRESHOLD` and `SYNC_WRITE_REQUESTS` tune it.

## Use cases

<p align="center">
  <img src="docs/images/use-cases.png" alt="Dev to production, multi-region brands, new market launch, drift audits" width="100%">
</p>

## Why this tool

Plenty of Shopify MCP servers read and write *one* store. This one is built for the job *between* stores, where every ID is different:

| | Generic Admin MCP servers | shopify-store-sync-mcp |
|---|---|---|
| Compare two stores | ❌ | ✅ field-level diff |
| Cross-store ID remapping | ❌ you copy raw IDs | ✅ products, collections, pages, blogs, metaobjects, definitions, customer account pages and shop policies |
| Dry run before writing | ❌ | ✅ every write goes through a reviewed plan |
| Detects changes made after planning | ❌ | ✅ re-reads the target and skips anything that drifted |
| Deletes | sometimes | **never** |
| Production guardrails | ❌ | ✅ writes are off by default; protected stores are confirmed by a person, not by the assistant |
| Audit trail | ❌ | ✅ JSONL log of every write |

**Why not just Shopify CLI?** The CLI runs one query you wrote, on one store. This tool uses the CLI only to sign in, and does the comparing, ID remapping, ordering, uploads and safety checks for you.

<p align="center">
  <img src="docs/images/vs-shopify-cli.png" alt="Left: raw shopify store execute commands per store with manual comparison and ID rewriting. Right: diff_stores, plan_sync and apply_plan doing it with remapping, ordering, uploads and drift checks" width="100%">
</p>

### Compared with store-copy apps

Matrixify, Rewind Staging and Simple Sync also move data from one store to another. Here is what each one states on its own pages (checked November 2026), next to this tool:

<p align="center">
  <img src="docs/images/vs-copy-apps.png" alt="Matrixify, Rewind Staging, Simple Sync and shopify-store-sync-mcp compared on how each works, what it copies, whether it shows a diff or plan first, and price" width="100%">
</p>

<details>
<summary><b>Details and sources</b></summary>

| | [Matrixify](https://apps.shopify.com/excel-export-import) | [Rewind Staging](https://apps.shopify.com/store-copy) | [Simple Sync](https://apps.shopify.com/simple-sync) | shopify-store-sync-mcp |
|---|---|---|---|---|
| How it works | Export a spreadsheet from one store, import it into the other | App that copies a store and can keep syncing it | App with manual or daily scheduled syncs | MCP server or CLI on your machine, signed in through Shopify CLI |
| What it copies | Products, collections, customers, companies, discounts, orders, pages, blogs, redirects, files, metafields and more, as spreadsheet rows | [Products, product images and metafields, collections](https://help.rewind.com/hc/en-us/articles/27237967418267), [metaobjects](https://help.rewind.com/hc/en-us/articles/53073708244379-How-to-copy-Shopify-metaobjects-with-Rewind-Staging). Not categories, customers, menus, or metafields on pages and collections | Products and media, collections, metaobjects and definitions, metafields, pages, redirects, blogs, translations, themes, files | [See What it syncs](#what-it-syncs): definitions, metaobjects, collections, pages, menus, redirects, policies, files, products, metafield values, translations |
| Diff or plan before writing | A [dry run](https://matrixify.app/documentation/matrixify-import-job-options/) checks the file's structure; it doesn't compare with the target store | Not stated | Not stated | Field-level diff of both stores, then a plan you review before anything is written |
| Price | Free demo (10 products per file), then [$20, $50 or $200 per 30 days](https://matrixify.app/pricing/) | $99 a month, plus $29 per extra store | $129 to $499 a month, by number of target stores | Free, MIT licensed |

"Not stated" means the app's own pages don't describe it, not that it's missing. We haven't timed these apps, so there is no speed claim against them here; our own measured run is in [Built for big catalogs](#built-for-big-catalogs). If you've used one of them on a catalog of a similar size, open an issue and your result will be added.

</details>

## Safe on production

<p align="center">
  <img src="docs/images/safety.png" alt="Read-only by default, plan then apply, drift protection, never deletes, protected stores, conflicts not forced, audit log, no broken IDs" width="100%">
</p>

<details>
<summary><b>How each safeguard works</b></summary>

1. **Read-only by default.** `allowWrites` is `false` until you set it, per store.
2. **Plan, then apply.** `apply_plan` only runs a plan produced by `plan_sync`. Plans expire after an hour and their files are removed after a week.
3. **Drift protection.** Before writing, the target is re-read. Any item that changed since planning is skipped, not overwritten.
4. **No deletes.** Items that exist only in the target are listed, never removed. The same holds inside an item wherever Shopify's API replaces a whole list: menu links, product tags, variants and media that only the target has are read first and sent back with the update. One thing is not kept: when the source has a value for a field and the target has another, the source's value wins. That is what a sync is, and the plan shows each one before you apply.
5. **Protected stores are confirmed by a person.** For a store marked `protected`, the assistant can't supply the confirmation itself. Your client asks you to type the store's domain (MCP elicitation); in a client that can't ask, the plan is applied from the command line with `--confirm <domain>`. The assistant sees store content (page bodies, product descriptions), so this is what stands between a prompt hidden in that content and your production store.
6. **Conflicts aren't forced.** A metafield definition whose type differs is reported and skipped.
7. **Audit log.** Every write is appended to `~/.shopify-store-sync/audit.log` (override with `SYNC_AUDIT_LOG`).
8. **Snapshot folders are treated as input.** A folder used as a source (`dir:`) is validated file by file, can only hold the known resource types, and files are only ever uploaded from Shopify's own file hosts. Over MCP, folders are read and written inside one base folder (`SYNC_SNAPSHOT_DIR`, or the folder the server runs in).
9. **No silent shortcuts.** A list too long to read fully stops with an error instead of coming back short, and a request that gets no answer is abandoned after a time limit; a write is never repeated blindly.

To report a vulnerability, see [SECURITY.md](SECURITY.md).

</details>

## Get started

### 1. Connect your stores

**Recommended: sign in with Shopify CLI.** No app to create, nothing to paste: run `connect` and click **Install**. The other two options are only for scheduled or unattended runs.

<p align="center">
  <img src="docs/images/connect.png" alt="connect output: browser approval, Connected, and the stores.json line to add; then the three ways to connect compared" width="100%">
</p>

```bash
npm install -g @shopify/cli                                # 4.9 or newer
npx shopify-store-sync-mcp connect my-dev-store            # read-only
npx shopify-store-sync-mcp connect my-staging-store --writes
```

<details>
<summary><b>More about the Shopify CLI sign-in (recommended)</b></summary>

Each `connect` opens Shopify in your browser; click **Install** to approve. It asks for read-only scopes unless you pass `--writes` (or the store is configured with `"allowWrites": true`), then prints the line to add to `stores.json`:

```json
{ "stores": { "my-dev-store": { "domain": "my-dev-store.myshopify.com", "auth": "shopify-cli" } } }
```

It needs Shopify CLI 4.9 or newer; `connect` checks the version first and says so when it's older.

To compare the metafield definitions of customers, orders and other owners that hold customer data, add their read scopes: `connect my-dev-store --scopes read_customers,read_orders`. They're left out by default because they open up customer data, and only read scopes can be added this way. A later `connect` without `--scopes` drops them again.

Requests then run through `shopify store execute`, Shopify CLI's supported command, using the sign-in it saved. Each request starts Shopify CLI (about a second), so a full diff takes tens of seconds instead of one or two with an app. That sign-in belongs to you and expires after a while; when it does, the tool says so and you run `connect` again. Because of that, use option 2 or 3 for scheduled or unattended runs.

</details>

<details>
<summary><b>Option 2: a Dev Dashboard app (automation on your own stores)</b></summary>

One app covers every store in the same Shopify organization, and tokens are fetched and refreshed for you.

1. Open the [Dev Dashboard](https://dev.shopify.com/dashboard), go to **Apps**, click **Create app**, then **Create app manually**.
2. Give it a name, for example `Store Sync`. Any URL works as the App URL (it's never opened); untick **Embed app in Shopify admin**.
3. In **Scopes**, paste the scopes from "Scopes needed per resource" below, then click **Create app** and **Release**.
4. Install it on each store: open `https://admin.shopify.com/store/<store-handle>/oauth/install?client_id=<your client ID>` and click **Install**.
5. Under the app's **Settings**, copy the **Client ID** and **Client secret** into environment variables (step 2 reads them from there).

Adding a scope later means releasing a new version and approving the update on each store (same install link).

</details>

<details>
<summary><b>Option 3: a store in someone else's organization (a client's store)</b></summary>

An app's client credentials only work on stores owned by the same organization as the app; elsewhere Shopify answers `shop_not_permitted`. For a store you don't own there are two ways:

- **Sign in with Shopify CLI** (option 1) with your staff or collaborator account. Nothing to create; best for work you run yourself.
- **For unattended runs**, ask the store's owner to follow option 2 in *their* organization (create the app in their Dev Dashboard, install it on their store) and share the client ID and client secret with you.

An existing Admin API access token (`shpat_...`) from a custom app that was created in the store admin still works: use it as `accessToken` in step 2. New apps of that kind can no longer be created there (Shopify moved app creation to the Dev Dashboard on January 1, 2026), so don't plan new setups around it.

</details>

<details>
<summary><b>Scopes needed per resource</b></summary>

| Resource | Read scope | Write scope |
|---|---|---|
| metafield definitions | `read_products` (and the owner type's read scope) | `write_products` (and the owner type's write scope) |
| metaobjects and definitions | `read_metaobjects`, `read_metaobject_definitions` | `write_metaobjects`, `write_metaobject_definitions` |
| pages | `read_online_store_pages` | `write_online_store_pages` |
| menus | `read_online_store_navigation` | `write_online_store_navigation` |
| redirects | `read_online_store_navigation` | `write_online_store_navigation` |
| collections | `read_products` | `write_products` |
| products | `read_products` | `write_products` (plus `read_files`/`write_files` for their images) |
| shop policies | `read_legal_policies` | `write_legal_policies` |
| metafield values (products, collections, variants, shop) | `read_products` | `write_products` |
| translations | `read_translations`, `read_locales` | `write_translations` |
| files | `read_files` | `write_files` (to upload missing files) |
| theme diff | `read_themes` | none, never writes |
| discounts | `read_discounts` | none, never writes |
| product stock (`--with-inventory`) | `read_inventory`, `read_locations` | `write_inventory` |
| ID remapping | `read_products`, `read_content` | none |

Metafield definitions of some owner types (customers, orders, draft orders, companies, locations, markets) need that owner's read scope too, such as `read_customers`. The Shopify CLI sign-in doesn't ask for those, since they open up customer and order data. When a store won't show an owner type, the diff carries on: that owner type is listed as "not compared", on both stores, with the scope Shopify asked for.

Everything at once (the set used for the live tests), ready to paste:

```text
read_products,write_products,read_metaobjects,write_metaobjects,read_metaobject_definitions,write_metaobject_definitions,read_online_store_pages,write_online_store_pages,read_online_store_navigation,write_online_store_navigation,read_legal_policies,write_legal_policies,read_translations,write_translations,read_locales,read_files,write_files,read_themes,read_content,read_discounts,read_inventory,write_inventory,read_locations
```

Give source stores read-only scopes when you can.

</details>

### 2. Describe your stores

`connect` prints the line to add. A `stores.json` mixing all three ways to connect:

```json
{
  "stores": {
    "dev":  { "domain": "my-brand-dev.myshopify.com", "auth": "shopify-cli" },
    "eu":   { "domain": "my-brand-eu.myshopify.com", "clientId": "env:EU_CLIENT_ID", "clientSecret": "env:EU_CLIENT_SECRET", "allowWrites": true, "protected": true },
    "uk":   { "domain": "my-brand-uk.myshopify.com", "accessToken": "env:UK_TOKEN" }
  }
}
```

<details>
<summary><b>All store options</b></summary>

Create `stores.json`. Secrets can come from environment variables with `env:NAME`:

```json
{
  "stores": {
    "dev": {
      "domain": "my-brand-dev.myshopify.com",
      "accessToken": "env:DEV_TOKEN",
      "label": "Development"
    },
    "eu": {
      "domain": "my-brand-eu.myshopify.com",
      "clientId": "env:EU_CLIENT_ID",
      "clientSecret": "env:EU_CLIENT_SECRET",
      "allowWrites": true,
      "protected": true
    }
  }
}
```

| Option | Default | Meaning |
|---|---|---|
| `domain` | required | `*.myshopify.com` domain |
| `auth` | | `"shopify-cli"`: use the sign-in saved by `connect` (no token needed), **or** |
| `accessToken` | | Static Admin API token from an existing custom app, **or** |
| `clientId` + `clientSecret` | | Dev Dashboard app; tokens are fetched and refreshed automatically |
| `apiVersion` | `2026-10` | Admin API version |
| `allowWrites` | `false` | Must be `true` for `apply_plan` to write to this store |
| `protected` | `false` | Applying also needs a person to confirm with the store's domain: asked by your AI client, or `--confirm <domain>` on the command line |

You can also pass the whole config as JSON in `SHOPIFY_STORES`, or point `SHOPIFY_STORES_FILE` at a file elsewhere. For a single store, `SHOPIFY_STORE_DOMAIN` plus `SHOPIFY_ACCESS_TOKEN` works.

</details>

<details>
<summary><b>Environment variables</b></summary>

| Variable | Default | Meaning |
|---|---|---|
| `SHOPIFY_STORES_FILE` | `./stores.json` | Where the store config lives |
| `SHOPIFY_STORES` | | The whole store config as inline JSON |
| `SHOPIFY_API_VERSION` | `2026-10` | Admin API version for stores that don't set `apiVersion` |
| `SHOPIFY_CLI_BIN` | `shopify` | Path to Shopify CLI, when it isn't on the `PATH` |
| `SYNC_SNAPSHOT_DIR` | folder the server runs in | Over MCP, snapshot folders (`export_snapshot`, `dir:`) must be inside this folder |
| `SYNC_ALLOW_AGENT_CONFIRM` | off | `true` lets `apply_plan` take the protected-store confirmation as an argument. Only for unattended automation where no person can be asked |
| `SYNC_REQUEST_TIMEOUT_MS` | `60000` | How long one request to Shopify may take |
| `SYNC_CLI_TIMEOUT_MS` | `120000` | How long one Shopify CLI call may take before it is stopped |
| `SYNC_MAX_ITEMS` | `50000` | Longest list read from a store; a longer one is an error, never a silent cut |
| `SYNC_WRITE_CONCURRENCY` | `4` | How many independent writes run at once |
| `SYNC_BULK_THRESHOLD` | `250` | Above this many items, products and metafield values are read with a Shopify bulk export and written in batches instead of one request each |
| `SYNC_WRITE_REQUESTS` | `12` | How many batched write requests run at once on one store |
| `SYNC_BULK_WRITES` | off | `true` writes large sets through Shopify bulk operations instead of batched requests: fewer requests, usually much slower |
| `SYNC_BULK_TIMEOUT_MS` | `1800000` | How long a bulk operation may go without writing anything more before it is given up on (a big one may run for hours) |
| `SYNC_BACKGROUND_STEPS` | `50` | Plans with more steps than this are applied in the background; follow them with `apply_status` |
| `SYNC_BULK_PARALLEL` | `5` | With `SYNC_BULK_WRITES`, how many bulk write operations run at once on one store |
| `SYNC_CLI_CONCURRENCY` | `12` | With the Shopify CLI sign-in, how many `shopify` processes run at once per store (up to 16) |
| `SYNC_AUDIT_LOG` | `~/.shopify-store-sync/audit.log` | Where every write is logged |
| `SYNC_STATE_DIR` | `~/.shopify-store-sync` | Where plans and the audit log are kept |

</details>

### 3. Add it to your AI client

```json
{
  "mcpServers": {
    "shopify-store-sync": {
      "command": "npx",
      "args": ["-y", "shopify-store-sync-mcp"],
      "env": { "SHOPIFY_STORES_FILE": "/absolute/path/to/stores.json" }
    }
  }
}
```

<details>
<summary><b>Claude Desktop, Claude Code and Cursor</b></summary>

**Claude Desktop** (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "shopify-store-sync": {
      "command": "npx",
      "args": ["-y", "shopify-store-sync-mcp"],
      "env": {
        "SHOPIFY_STORES_FILE": "/absolute/path/to/stores.json",
        "DEV_TOKEN": "shpat_...",
        "EU_CLIENT_ID": "...",
        "EU_CLIENT_SECRET": "..."
      }
    }
  }
}
```

**Claude Code**

```bash
claude mcp add shopify-store-sync \
  -e SHOPIFY_STORES_FILE=/absolute/path/to/stores.json \
  -e DEV_TOKEN=shpat_... \
  -- npx -y shopify-store-sync-mcp
```

**Cursor** (`.cursor/mcp.json`) takes the same `command`, `args` and `env` as Claude Desktop.

</details>

### 4. Ask

- *"Compare dev and eu. Only metaobjects and menus."*
- *"Which product metafield definitions in namespace custom are missing from eu?"* (uses `include: ["PRODUCT.custom.*"]`)
- *"Plan a sync of the faq and size_guide metaobjects from dev to eu."*
- *"Apply only ops 1 to 4 of that plan."*
- *"Sync the pages from dev to eu, but keep new ones hidden."* (uses `as_drafts: true`)
- *"Copy the linen-shirt product to eu, with its prices."* (uses `resources: ["products"], include: ["linen-shirt"], prices: true`)
- *"Copy the French translations from dev to eu."* (uses `resources: ["translations"], locales: ["fr"]`)
- *"Export eu's configuration to ./store-config so I can commit it."*
- *"Has eu drifted from ./store-config?"*
- *"What's different in the theme settings between dev and eu?"*
- *"Is the size_guide/shirts entry the same on dev and eu, and does everything it links to exist on eu?"* (uses `compare_item`)

### Targeted checks

You don't have to diff a whole store. Name what you want, and the tool reads only that where Shopify allows it:

| To compare | Use | What is read |
|---|---|---|
| One item, side by side | `check dev eu metaobjects size_guide/shirts` (tool: `compare_item`) | That item, plus a lookup of everything it points at, to tell you what's missing in the target |
| Some resource types | `--resources pages,menus` | Those types only |
| Metaobject entries | `--include "size_guide/shirts"`, `"size_guide/*"`, `"size*"` or `--metaobject-types size_guide` | The named entries (looked up by handle), or only the matching types |
| Collections, products | `--include "linen,summer-sale"`; products also take prefixes (`"linen-*"`) | Those handles, looked up directly |
| Metafield definitions | `--include "PRODUCT.*"` or `--owner-types PRODUCT,SHOP` | Those owner types |
| Metafield values | `--include "PRODUCT/linen-shirt/*"`, `"PRODUCTVARIANT/linen-shirt/*"`, `"SHOP/*"`, `--namespaces custom` | Those owners (and namespace) |
| Translations | `--locales fr` | That language |

Pages, menus, redirects and policies are always read in full (they're few, or Shopify has no direct lookup for them), then filtered. Every report starts with what was compared, so a narrow check is never mistaken for a full one.

## Tools

What `diff_stores` reports, field by field (real output):

<p align="center">
  <img src="docs/images/field-diff.png" alt="Field-level diff: page body, menu items, definition name, and a type conflict reported but not forced" width="100%">
</p>

<details>
<summary><b>All 13 tools</b></summary>

| Tool | Writes? | What it does |
|---|---|---|
| `list_stores` | no | Configured stores and their write permissions, and the server's version. Secrets are never returned. |
| `list_resource_types` | no | What can be synced and how it's keyed. |
| `snapshot_store` | no | Read one store's configuration in portable form. |
| `compare_item` | no | One item side by side: each field that differs, and whether what it points at exists in the target. Reads only that item where possible. |
| `diff_stores` | no | Only-in-source, changed (field by field, and entry by entry inside JSON values), only-in-target. `format: "markdown"` returns a report to paste into a ticket. |
| `plan_sync` | no | Dry-run plan: creates, updates, conflicts, missing references. Returns a `plan_id`. |
| `get_plan` | no | Show a plan, or list recent ones. `format: "markdown"` returns it as a report to share before applying. |
| `apply_plan` | **yes** | Execute a plan, with every safety check above. For a protected store your client asks you to confirm. A plan of more than 50 steps runs in the background and this returns at once. |
| `apply_status` | no | How far an apply has got: written, failed and left per resource type, phase, time so far and time remaining, failures counted per reason. Also answers after a server restart. |
| `cancel_apply` | stops writes | Stop a running apply and the Shopify bulk operations it started. What was written stays written. |
| `get_audit_log` | no | Read what an apply wrote, newest first: one entry per step with its outcome. Filter by plan, outcome or resource type. |
| `export_snapshot` | local files only | Write a store's configuration to a folder for git ([config as code](#config-as-code)). |
| `diff_themes` | no | Compare theme templates and settings between two stores ([theme settings](#theme-settings-diff)). |

Every tool except `apply_plan` and `cancel_apply` is read-only toward Shopify and annotated as such, so clients can auto-approve them. Long calls report progress (what was read, which step was written) to clients that ask for it.

</details>

## Command line

Everything also works without an AI client, and `--exit-code` turns `diff` into a scheduled drift check.

<p align="center">
  <img src="docs/images/cli.png" alt="CLI output of diff, plan and themes commands" width="100%">
</p>

<details>
<summary><b>Commands</b></summary>

Everything also works without an AI client. Run a command instead of starting the server:

```bash
npx shopify-store-sync-mcp stores
npx shopify-store-sync-mcp diff dev eu --resources pages,menus
npx shopify-store-sync-mcp check dev eu metaobjects size_guide/shirts
npx shopify-store-sync-mcp plan dev eu --as-drafts
npx shopify-store-sync-mcp plan stg dev --resources products,metafields --with-prices --with-inventory
npx shopify-store-sync-mcp apply <plan-id> --confirm my-brand-eu.myshopify.com
npx shopify-store-sync-mcp export eu ./store-config
npx shopify-store-sync-mcp themes dev eu --ignore-settings "current.sections.header.*"
npx shopify-store-sync-mcp diff dev eu --format md > drift-report.md
```

Long commands show what they're doing on stderr: what was read, which step is being written and roughly how long is left, and a "still working" line every 10 seconds when nothing else happens (`--quiet` turns it off). `--json` gives machine-readable output with every value in full, `--format md` a Markdown report for a ticket, a pull request or a client, and `--exit-code` makes `diff` and `themes` exit with 2 when they find differences, handy for a scheduled drift check. Run `npx shopify-store-sync-mcp help` for every option.

</details>

## Config as code

Export a store's setup as small, sorted JSON files, commit it, and use the folder as a source anywhere (`dir:./store-config`) to spot drift, review changes as a pull request, or restore.

<p align="center">
  <img src="docs/images/config-as-code.png" alt="Exported store-config folder and one translation file" width="100%">
</p>

<details>
<summary><b>How to use it</b></summary>

Export a store's configuration as one small JSON file per item, with sorted keys and no store-specific IDs, then commit it:

```bash
npx shopify-store-sync-mcp export prod ./store-config
git add store-config && git commit -m "Snapshot prod configuration"
```

Any command or tool that takes a source also takes `dir:<path>`:

- **Spot drift:** `diff dir:./store-config prod` shows what changed in production since the commit.
- **Review changes:** edit the files or re-export from staging, and review the change as a pull request.
- **Restore or promote:** `plan dir:./store-config prod`, then `apply`, with all the usual safety checks.

</details>

<details>
<summary><b>Theme settings diff (read-only)</b></summary>

`diff_themes` (or `themes` on the command line) compares the published themes of two stores: JSON templates, section groups and `config/settings_data.json`, setting by setting. Pass theme ids to compare other themes, and `files` to narrow it down (for example `templates/product*.json`). Settings that differ on purpose between stores (a header logo, an announcement bar, market colors) can be left out with `ignore_settings` (`--ignore-settings`): globs on the setting's path, optionally limited to a file, such as `current.sections.header.*` or `config/settings_data.json:current.color_*`. The report says how many differences were left out. It is read-only: themes are never written to.

</details>

## How it works

<p align="center">
  <img src="docs/images/how-it-works.png" alt="Snapshot, diff, plan, apply, with safety checks before every write" width="100%">
</p>

<p align="center">
  <img src="docs/images/remapping.png" alt="gid://shopify/Product/101 in dev becomes shopify://Product/linen-shirt, then gid://shopify/Product/9101 in eu" width="100%">
</p>

<details>
<summary><b>How ID remapping works</b></summary>

Every Shopify ID is store-specific, so the server never compares or copies raw IDs. When it reads a store, each `gid://shopify/...` value is rewritten into a portable reference:

```
gid://shopify/Product/8123456          →  shopify://Product/linen-shirt
gid://shopify/Metaobject/2918          →  shopify://Metaobject/faq/returns
gid://shopify/MetaobjectDefinition/77  →  shopify://MetaobjectDefinition/faq
gid://shopify/CustomerAccountPage/12   →  shopify://CustomerAccountPage/orders
gid://shopify/ShopPolicy/5             →  shopify://ShopPolicy/PRIVACY_POLICY
gid://shopify/Menu/41                  →  shopify://Menu/main-menu
gid://shopify/MetafieldDefinition/9    →  shopify://MetafieldDefinition/PRODUCT.custom.fabric
gid://shopify/ProductVariant/4412      →  shopify://ProductVariant/linen-shirt/Size%3DM
gid://shopify/Shop/1                   →  shopify://Shop
gid://shopify/MediaImage/730           →  shopify://File/size-chart.png
```

This covers JSON list values (`list.product_reference`) and definition validations (`metaobject_definition_id`). When it writes, references are resolved by handle in the target. A reference that doesn't exist there is flagged in the plan before anything is written.

Things in the same plan can depend on each other, for example a metaobject pointing at another one being created, or a definition that references itself. These are written in two passes: first without the pending references, then complete.

Files (images, generic files and videos) are matched by file name and uploaded to the target when missing. Collection rules that filter on a metafield are remapped to the target's definition.

**Not remapped yet:** product variants and articles. Their values are left out of the sync and listed as warnings, never copied as broken IDs.

Two references followed from the source store to the target, as the sample sync above wrote them:

</details>

## Tested on real stores

<p align="center">
  <img src="docs/images/tested.png" alt="163 automated tests, 83 GraphQL operations validated, 11 item types written live, 2 sign-in methods used live" width="100%">
</p>

<details>
<summary><b>Every live test and its result</b></summary>

| Feature | Live result |
|---|---|
| Diff of all default resource types | both stores read in about 2 seconds with an app, about 30 through the Shopify CLI sign-in |
| Create: metafield and metaobject definitions, metaobjects, smart collection, page, redirect, French translation | applied, second diff empty |
| File reference on a metaobject | image uploaded to the target by file name and linked |
| Update: page title and body, collection description | applied, second diff empty |
| Shop policies | synced; a policy Shopify manages automatically is reported with how to unblock it |
| Metafield values, including a `product_reference` | applied, reference remapped to the target's own product |
| Values on products missing from the target | skipped up front with the reason |
| Export to a folder, then diff that folder against the store | no differences |
| Theme settings diff | read-only, 15 files compared in about 1 second |
| Products (Shopify CLI sign-in, Windows) | a real product copied as a draft with its 4 images and alt text; after editing the copy and adding a variant and an image there, the update restored the title and kept both; the next diff was identical |
| Products: reading only named handles | planning one product went from 97 to 6 seconds |
| Big catalog store to store (0.11.0, MCP, Windows) | 4,000 products, 46,000 variants with prices and stock, 701 images and 85,972 metafield values in 51 minutes from plan to finish, 0 products failed; [timings above](#built-for-big-catalogs) |
| Menus (0.5.0) | a link added only in the target stayed in place through an update that added a link from the source; the plan named it; the next plan was empty |
| Products: what only the target has (0.5.0) | a tag and a YouTube video added only in the target were both still there after an update that renamed the product and added a tag |
| Protected store over MCP (0.5.0, stdio, Windows) | refused when the assistant passed the domain itself; applied after the person typed it when the client asked |
| Snapshot folders over MCP (0.5.0) | a folder outside the base folder was refused |
| Safety: write to a read-only store | refused |
| Safety: target edited after the plan was made | step skipped, nothing overwritten |
| Markets (0.12.0, Shopify CLI sign-in) | two country markets created, a country added to an existing one; second plan empty |
| Catalogs and currencies (0.12.0) | a catalog with its publication created; a MAD price list refused for an EUR store, then copied with `--currency-rate MAD:EUR=0.092` (990.00 MAD became 91.08 EUR); second plan empty |
| Sales channels (0.12.0), 200 products | status and channels copied; a catalog the target lacked reported, the other channels still published; 100 products written in 40 seconds |
| Locations (0.12.0) | a warehouse created with its address; both stores' "Shop location" in different countries found |
| Collection sources (0.12.0, Admin API 2026-10) | an exclusion, a sub-collection collection and 5 hand-picked products copied; second plan empty |
| Metafield type differences (0.12.0) | `convert_values`: single values written into the target's list definition as lists; `retype_definitions`: a single-value definition recreated as a list, its own values backed up and converted; second plan empty |
| Shopify CLI sign-in on Windows (CLI 4.9.4), both stores | `connect` read-only and `--writes`; plan, apply (7 creates incl. file upload and translation), update and re-diff all exact; also through the MCP server over stdio |

Behaviours of the live API found this way are covered by tests: `nodes` returns `null` for customer account pages (they're looked up by listing instead), `ShopPolicy.type` has to be aliased next to `Metaobject.type`, Shopify refuses edits to auto-managed policies, and a failed token request carries its reason (such as `app_not_installed`) in an HTML page.

</details>

## Roadmap

<p align="center">
  <img src="docs/images/roadmap.png" alt="Roadmap: shipped (syncing, safety, ways to use it, quality) and next (collection sources, batch writes, more product fields, variants and articles, more metafield owners, menu translations, markets, undo, optional deletes)" width="100%">
</p>

<details>
<summary><b>The full list</b></summary>

**Shipped**

*Syncing*
- [x] Metafield definitions, metaobject definitions and metaobject entries
- [x] Products: content, category, options, images, variants matched by option values (SKU, barcode, weight, customs, shipping, variant image); new ones as drafts, prices and stock only when asked
- [x] Big catalogs: bulk reads, and bulk writes for new products and metafield values
- [x] Collections with smart-collection rules, pages, menus (3 levels, customer account menus too), redirects, store policies
- [x] Metafield values on products, collections, product variants and the shop, translations per language, products included (opt-in)
- [x] Images and files matched by file name, uploaded to the target when missing
- [x] Cross-store ID remapping by handle, including list references and rules on metafield definitions
- [x] Two-pass writes for items that point at each other or at themselves
- [x] Filters: resource types, include and exclude patterns, namespaces, metaobject types, owner types, languages
- [x] `as_drafts`: new pages hidden, new metaobject entries as drafts, published state of existing ones left alone
- [x] Markets, market catalogs with price lists, sales channel publishing with product status, inventory locations, market-specific translations (opt-in)
- [x] Collection sources (2026-07+): exclusions, sub-collections, conditions of the new model; products picked by hand (opt-in)
- [x] Stores in different currencies: prices, fixed prices and market currencies converted with a rate you give, never guessed
- [x] Metafield type differences resolved on request: values converted to the target's type, or the target's definition retyped with its values backed up
- [x] Compared only, never written: discounts (automatic and code) and Shopify's category metafield definitions

*Safety*
- [x] Dry-run plans that expire after an hour, applied in full or step by step (`--only`)
- [x] Drift check before every write, read-only by default
- [x] Never deletes, also inside an item: menu links, product tags, variants and media that only the target has are kept
- [x] Protected stores are confirmed by a person (asked by the client, or `--confirm` on the command line), never by the assistant
- [x] Conflicts reported instead of forced (type changes, manual versus smart collections, values on items missing from the target)
- [x] Snapshot folders validated, files uploaded only from Shopify's hosts, folders kept inside a base folder over MCP
- [x] Time limits on every request, and an error instead of a shortened list
- [x] Audit log of every write

*Ways to use it*
- [x] MCP server with 10 tools, read-only tools annotated for auto-approval, progress reported on long calls
- [x] Command line with `--json` output (values never shortened), `--format md` reports, `--exit-code` for scheduled drift checks, and progress with time left
- [x] Targeted checks: one item side by side (`check`, `compare_item`), and include patterns that limit what is read
- [x] Config as code: export a store to files and use the folder as a source (`dir:`)
- [x] Read-only theme settings diff, with settings that differ on purpose left out
- [x] JSON values (json metafields, settings) compared entry by entry
- [x] Connect without creating an app (Shopify CLI sign-in), or with a Dev Dashboard app or an access token
- [x] Published on npm, runs with `npx`

*Quality*
- [x] 198 automated tests against an in-memory Shopify, plus MCP protocol tests
- [x] Every GraphQL operation validated against Shopify's schema for 2026-04, 2026-10 and 2027-01
- [x] Tested live between two stores on Linux and Windows, Shopify CLI 4.9 and 5
- [x] Parallel reads and writes (metaobject types read and entries written in parallel; the check before writing re-reads only what the plan touches) with throttle-aware retries; clear errors for missing installs, expired sign-ins and auto-managed policies
- [x] Linted, no known vulnerabilities in any dependency, release checklist for Shopify's quarterly API versions

**Next**
- [ ] Write smart-collection rules through `sources` only, once 2026-04 can be dropped (`ruleSet` is deprecated but supported through 2027-01; exclusions, sub-collections and new conditions already use `sources`)
- [ ] Bulk writes for product updates and redirects (`urlRedirectImport`); new products and metafield values already go in bulk
- [ ] Translations of option names and values
- [ ] Remap blog articles, so references to them sync too
- [ ] Metafield values on pages and blogs; metafield definition constraints
- [ ] Menu item (link) translations
- [ ] Discounts: sync them, behind an explicit flag (compared only today)
- [ ] Undo: restore the previous values of an applied plan from the audit log
- [ ] Optional deletes, behind an explicit flag

</details>

We're open to recommendations: ideas, feature requests and PRs are all welcome, through an [issue](https://github.com/ussefidder/shopify-store-sync-mcp/issues/new). Issues tagged `good first issue` are a good place to start.

<details>
<summary><b>Development</b></summary>

```bash
npm install           # Node 22 or newer
npm test              # vitest: unit, sync engine against an in-memory Shopify, and MCP protocol tests
npm run typecheck
npm run lint
npm run build

# Validate every GraphQL operation against Shopify's real Admin schema
npm run validate:graphql            # defaults to 2026-10
npm run validate:graphql -- 2027-01

npm run check         # typecheck, lint, tests and schema validation in one go
```

Layout:

```
src/
  index.ts            entrypoint: MCP server on stdio, or the CLI when given a command
  engine.ts           everything the tools and the CLI do, in one place
  server.ts           MCP tools
  cli.ts              command line
  snapshotFiles.ts    export and read snapshot folders (config as code)
  themes.ts           read-only theme settings diff
  config.ts           store config loading and validation
  shopify/client.ts   Admin GraphQL client (token refresh, throttling, retries)
  shopify/cliClient.ts  the same requests through Shopify CLI's sign-in (`shopify store execute`)
  refs.ts             GID <-> portable reference mapping
  snapshot.ts         read a store into portable form
  drafts.ts           the "as drafts" view: published state left out
  diff.ts             field-level diff
  plan.ts             dry-run plans and plan storage
  apply.ts            guarded, drift-checked, two-pass writes
  resources/          one adapter per resource type
test/
  fakeShop.ts         in-memory Admin API used by the tests
```

Adding a resource type means writing one adapter (`fetch`, `create`, `update`) in `src/resources/`. See [CONTRIBUTING.md](CONTRIBUTING.md), which also has the release checklist.

</details>

<details>
<summary><b>Related projects</b></summary>

Syncing definitions between stores isn't a new idea, and these tools are worth knowing:

| Project | Type | What it covers |
|---|---|---|
| [groupthought/metasync](https://github.com/groupthought/metasync) | CLI | Metafield and metaobject definitions plus resource data; dry run by default; has a delete mode |
| [TeamDijon/meta-sync](https://github.com/TeamDijon/meta-sync) | CLI | Metafield and metaobject definitions and entries; manifest-based copy; bulk mode deletes the target first |
| [shopify-metadata-migrator](https://github.com/warriorachilles/shopify-metadata-migrator) | CLI | Copies metafield and metaobject definitions |
| MetaMaintain, Metora, Rewind Staging | Shopify apps (paid or freemium) | Definition and entry sync through an embedded app |

What this project adds: it runs inside your AI client as an MCP server (or as a CLI) on your own machine, signed in as you through Shopify CLI or with your own private app, so there's no third-party app from the App Store and no data goes anywhere except Shopify. You can ask for a diff in plain language; it also covers products, pages, menus, redirects, collections, policies, metafield values and translations, remaps references and files across stores, keeps store configuration in git, checks for drift before writing and never deletes. If you only need a scripted one-shot copy of definitions, one of the CLIs above may be all you need.

</details>

## Disclaimer

Not affiliated with, endorsed by or sponsored by Shopify Inc. "Shopify" is a trademark of Shopify Inc. Test on development stores first; you are responsible for what you apply to production.

## License

[MIT](LICENSE) © Youssef Idder
