# Google Business Profile & Local SEO Checker

A free, hosted, read-only [MCP](https://modelcontextprotocol.io) server that checks Google Business Profiles and local SEO for Australian local businesses. Built and run by [Kangaroo Growth](https://kangaroogrowth.com.au), a local marketing agency.

- **Endpoint:** `https://mcp.kangaroogrowth.com.au/mcp` (Streamable HTTP)
- **Auth:** none. No login, no API key, nothing stored
- **Registry name:** `au.com.kangaroogrowth/gbp-local-seo`
- **Tools:** 19, every one read-only (`readOnlyHint: true`)
- **Docs and privacy:** https://kangaroogrowth.com.au/free-tools/mcp

The benchmark numbers come from our own scrape of real Australian Google Business Profiles, per Google primary category. The method and the full dataset write-up are at https://kangaroogrowth.com.au/research/google-business-profile-names-australia. The rule checks follow Google's published guidelines and work for any country.

## Install

There is nothing to install locally. Point your MCP client at the endpoint.

### Claude Code

```bash
claude mcp add --transport http gbp-local-seo https://mcp.kangaroogrowth.com.au/mcp
```

### Claude Desktop / claude.ai

Settings, Connectors, Add custom connector, then paste `https://mcp.kangaroogrowth.com.au/mcp`.

### Cursor (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "gbp-local-seo": {
      "url": "https://mcp.kangaroogrowth.com.au/mcp"
    }
  }
}
```

### VS Code (`.vscode/mcp.json`)

```json
{
  "servers": {
    "gbp-local-seo": {
      "type": "http",
      "url": "https://mcp.kangaroogrowth.com.au/mcp"
    }
  }
}
```

### Any client without remote support

```json
{
  "mcpServers": {
    "gbp-local-seo": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.kangaroogrowth.com.au/mcp"
      ]
    }
  }
}
```

## Getting started

Start with `audit_business`. Give it the business name, plus the suburb, trade and website if you have them. One call runs the name check, the benchmark, the category pick and the website audit, and returns a priority-ordered action list.

### Example prompts

- "Audit Smith Plumbing in Brunswick, website smithplumbing.com.au"
- "Will this Google post get rejected? <paste post>"
- "Is the name 'Best Cheap Plumber Melbourne' going to get my profile suspended?"
- "My Google profile got suspended, what do I do?"
- "Make me a review link and QR code for my business"

### Example raw call

```bash
curl -s https://mcp.kangaroogrowth.com.au/mcp \
  -H 'content-type: application/json' -H 'accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"check_gbp_post","arguments":{"text":"Call us on 0400 000 000 for 20% off!"}}}'
```

## Tools

| Tool | What it does |
|---|---|
| [`audit_business`](#audit_business) | Audit a local business end to end |
| [`find_google_profile`](#find_google_profile) | Find the Google profile from the website |
| [`read_site_reviews`](#read_site_reviews) | Read the review data a website publishes |
| [`list_site_services`](#list_site_services) | List a site's service and area pages |
| [`verify_business_name`](#verify_business_name) | Settle a business name against the website |
| [`benchmark_business`](#benchmark_business) | Benchmark against real Australian businesses |
| [`pick_gbp_category`](#pick_gbp_category) | Pick the Google primary category |
| [`check_business_name`](#check_business_name) | Check business name for suspension risk |
| [`check_gbp_description`](#check_gbp_description) | Check a GBP description |
| [`check_gbp_post`](#check_gbp_post) | Pre-flight a GBP post |
| [`audit_gbp_profile`](#audit_gbp_profile) | Score a Google Business Profile |
| [`build_review_link`](#build_review_link) | Build a direct review link + QR code |
| [`check_review_request`](#check_review_request) | Check a review request message |
| [`check_review_reply`](#check_review_reply) | Check a review reply |
| [`suspension_triage`](#suspension_triage) | Triage a suspended or unverified profile |
| [`audit_website_local_seo`](#audit_website_local_seo) | Audit a website's local SEO |
| [`compare_nap`](#compare_nap) | Compare name, address, phone across listings |
| [`draft_spam_report`](#draft_spam_report) | Draft a competitor spam report |
| [`optimisation_checklist`](#optimisation_checklist) | GBP optimisation checklist |

### audit_business

**Audit a local business end to end**

START HERE. One call: checks the Google profile name against the rules AND against the business's own website, benchmarks review count and rating against real Australian businesses in the same Google category, recommends the primary category from what real businesses in that trade use, audits the website's local SEO layer, and returns a priority-ordered action list. Call it with whatever the user has already said; it reports what each missing field would have added instead of demanding it up front.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "business_name": {
      "type": "string",
      "description": "Name exactly as it appears on the Google profile"
    },
    "suburb": {
      "type": "string",
      "description": "Optional: main suburb or city"
    },
    "trade": {
      "type": "string",
      "description": "Optional: what they do in plain English, e.g. electrician, hair salon, carpet cleaning"
    },
    "website": {
      "type": "string",
      "description": "Optional but worth asking for: their website. Settles the business-name question and adds the site audit"
    },
    "review_count": {
      "type": "number",
      "description": "Optional: current Google review count"
    },
    "rating": {
      "type": "number",
      "description": "Optional: current Google star rating, e.g. 4.6"
    },
    "category": {
      "type": "string",
      "description": "Optional: the current Google primary category, if they know it"
    },
    "service_area_business": {
      "type": "boolean",
      "description": "True if they travel to the customer (default true)"
    }
  },
  "required": [
    "business_name"
  ]
}
```

</details>

### find_google_profile

**Find the Google profile from the website**

Reads a business's website and pulls out every link to its Google Business Profile, with the Place ID or CID where the link carries one. Use this instead of asking the user to go and find their listing. If the site links to no profile at all, that is itself a finding worth reporting.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "website": {
      "type": "string",
      "description": "The business's website"
    }
  },
  "required": [
    "website"
  ]
}
```

</details>

### read_site_reviews

**Read the review data a website publishes**

Pulls the rating, review count and individual reviews a business publishes on its own site through schema.org aggregateRating and Review markup. Use it to get a review count and rating without asking the user, then feed them to benchmark_business. Reports when a site publishes no review data at all, which is a finding in itself.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "website": {
      "type": "string",
      "description": "The business's website"
    }
  },
  "required": [
    "website"
  ]
}
```

</details>

### list_site_services

**List a site's service and area pages**

Reads the website's sitemap (or its homepage links if there is no sitemap) and returns the service pages and suburb/area pages it has. Use it to work out which Services belong on the Google profile and whether the service area on the profile matches the suburbs the site actually covers.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "website": {
      "type": "string",
      "description": "The business's website"
    }
  },
  "required": [
    "website"
  ]
}
```

</details>

### verify_business_name

**Settle a business name against the website**

Checks a Google Business Profile name against Google's naming rules, then reads the business's own website to decide whether the flagged words are the genuine real-world brand (allowed) or were added to the listing for ranking (not allowed). Reads the site's title, schema.org markup, og:site_name, logo alt text, footer and ABN. Use this instead of check_business_name whenever a website is available.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name exactly as it appears on the Google profile"
    },
    "website": {
      "type": "string",
      "description": "The business's website. Without it this falls back to the plain rule check"
    },
    "city": {
      "type": "string",
      "description": "Optional: city or suburb"
    },
    "category": {
      "type": "string",
      "description": "Optional: primary GBP category"
    },
    "legal_or_signage_name": {
      "type": "string",
      "description": "Optional: the name on signage, invoices or ABN registration"
    }
  },
  "required": [
    "name"
  ]
}
```

</details>

### benchmark_business

**Benchmark against real Australian businesses**

Where a business actually sits against real Australian Google Business Profiles in the same Google primary category: review-count and star-rating percentiles, the gap to the median and the top quartile in reviews and in months, and how common a rule-breaking name is in that category. Built from Kangaroo Growth's own Google Maps scrape, not from a survey. Use it any time someone asks whether their reviews or rating are good.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "category": {
      "type": "string",
      "description": "Google primary category, e.g. Electrician, Beauty salon"
    },
    "trade": {
      "type": "string",
      "description": "Or plain English, e.g. electrician, carpet cleaner. Used if category is missing or unknown"
    },
    "review_count": {
      "type": "number",
      "description": "Current Google review count"
    },
    "rating": {
      "type": "number",
      "description": "Current Google star rating, e.g. 4.6"
    },
    "business_name": {
      "type": "string",
      "description": "Optional, for labelling"
    }
  }
}
```

</details>

### pick_gbp_category

**Pick the Google primary category**

Returns the Google primary category real Australian businesses in a trade actually use, with the share that use each one, plus the additional categories worth adding. Replaces 'go search Maps and copy the top 3' with the answer. Primary category is the biggest ranking lever on a profile.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "trade": {
      "type": "string",
      "description": "What they do in plain English, e.g. electrician, mobile dog groomer"
    },
    "services": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional: the services they offer"
    }
  },
  "required": [
    "trade"
  ]
}
```

</details>

### check_business_name

**Check business name for suspension risk**

Checks a Google Business Profile name against Google's naming rules (no keywords, locations, taglines, phone numbers, hours). Keyword-stuffed names are the most common cause of suspensions. Returns PASS/RISK/FAIL, each problem with its fix, and the likely real name.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The name exactly as it appears on the profile"
    },
    "legal_or_signage_name": {
      "type": "string",
      "description": "Optional: the name on signage, invoices or ABN registration. Words also in this name are allowed"
    },
    "city": {
      "type": "string",
      "description": "Optional: city or suburb the business is in"
    },
    "category": {
      "type": "string",
      "description": "Optional: primary GBP category"
    }
  },
  "required": [
    "name"
  ]
}
```

</details>

### check_gbp_description

**Check a GBP description**

Checks a Google Business Profile description before it's saved: the 750-character limit, links, prices or promotions (not allowed), keyword stuffing, AI-style filler, missing area or services, and what shows before 'More'. Gives a four-block structure that works.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "description": {
      "type": "string",
      "description": "The description text"
    },
    "business_name": {
      "type": "string",
      "description": "Optional"
    },
    "city": {
      "type": "string",
      "description": "Optional: main city or suburb"
    },
    "services": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional: main services that should be mentioned"
    }
  },
  "required": [
    "description"
  ]
}
```

</details>

### check_gbp_post

**Pre-flight a GBP post**

Checks a Google Business Profile post before publishing so it doesn't get rejected: phone numbers in the text (a top cause of silent rejections), link shorteners, contact details, all caps, gimmicky punctuation, regulated products, length. Returns fixes and a three-line post format that publishes reliably.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "The post text"
    },
    "button": {
      "type": "string",
      "description": "Optional: the button type planned, e.g. 'Learn more', 'Call now', 'Book'"
    }
  },
  "required": [
    "text"
  ]
}
```

</details>

### audit_gbp_profile

**Score a Google Business Profile**

Scores a Google Business Profile out of 100 from the details you give (categories, reviews and review recency, photos, services, products, posts, links, hours, service area) and returns a priority-ordered fix list. Weighted by what actually brings in calls. Unknown fields are listed for checking, never counted as passes. Read the values off the profile (or ask the user) and pass what you have.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Business name on the profile"
    },
    "city": {
      "type": "string",
      "description": "Main city/suburb"
    },
    "primary_category": {
      "type": "string",
      "description": "Primary category"
    },
    "additional_categories": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Additional categories ([] if none)"
    },
    "description": {
      "type": "string",
      "description": "Description text"
    },
    "review_count": {
      "type": "number",
      "description": "Total reviews"
    },
    "average_rating": {
      "type": "number",
      "description": "Star rating, e.g. 4.8"
    },
    "reviews_last_30_days": {
      "type": "number",
      "description": "Reviews in the last 30 days"
    },
    "days_since_newest_review": {
      "type": "number",
      "description": "Days since the newest review"
    },
    "reply_rate_percent": {
      "type": "number",
      "description": "% of reviews with an owner reply"
    },
    "photos_count": {
      "type": "number",
      "description": "Total photos"
    },
    "has_logo": {
      "type": "boolean",
      "description": "Logo set"
    },
    "has_cover": {
      "type": "boolean",
      "description": "Cover photo set"
    },
    "services_count": {
      "type": "number",
      "description": "Number of services listed"
    },
    "services_with_descriptions": {
      "type": "number",
      "description": "Services that have a description"
    },
    "products_count": {
      "type": "number",
      "description": "Number of products"
    },
    "posts_last_30_days": {
      "type": "number",
      "description": "Posts in the last 30 days"
    },
    "website_url": {
      "type": "string",
      "description": "Website link on the profile"
    },
    "booking_url": {
      "type": "string",
      "description": "Booking link, or empty string if none"
    },
    "chat_links": {
      "type": "boolean",
      "description": "Chat/SMS/WhatsApp links set"
    },
    "hours_set": {
      "type": "boolean",
      "description": "Opening hours set"
    },
    "is_service_area_business": {
      "type": "boolean",
      "description": "True if the business goes to customers (tradie, mobile service)"
    },
    "address_shown": {
      "type": "boolean",
      "description": "Street address visible on the profile"
    },
    "service_areas": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Service areas listed"
    },
    "opening_date_set": {
      "type": "boolean",
      "description": "Opening date set"
    }
  }
}
```

</details>

### build_review_link

**Build a direct review link + QR code**

Turns a Google Place ID into a direct 'write a review' link that opens the review box, plus a printable QR code image. Catches the common mistake of using a CID or Maps ID instead of a Place ID.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "place_id": {
      "type": "string",
      "description": "Google Place ID (usually starts with ChIJ). Find it with Google's Place ID finder"
    },
    "business_name": {
      "type": "string",
      "description": "Optional, for labelling"
    }
  },
  "required": [
    "place_id"
  ]
}
```

</details>

### check_review_request

**Check a review request message**

Checks the SMS or email a business sends to ask for Google reviews against Google's review policy and the Australian Consumer Law: incentives, review gating (only asking happy customers), asking for 5 stars, scripting the review. Returns problems, fixes and a compliant template.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "The review request message text"
    }
  },
  "required": [
    "message"
  ]
}
```

</details>

### check_review_reply

**Check a review reply**

Checks an owner's reply to a Google review before posting it: privacy leaks (addresses, invoice numbers, health details), offers to change a review, argumentative tone, generic one-liners, length. Gives advice suited to the star rating.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "reply": {
      "type": "string",
      "description": "The drafted reply"
    },
    "stars": {
      "type": "number",
      "description": "Star rating of the review (1-5)"
    },
    "review_text": {
      "type": "string",
      "description": "Optional: the review being replied to"
    }
  },
  "required": [
    "reply"
  ]
}
```

</details>

### suspension_triage

**Triage a suspended or unverified profile**

For a suspended, disabled, unverified or limited Google Business Profile: ranks the likely causes from yes/no answers, says whether to appeal, re-verify or wait, and lists the evidence to gather plus a video verification shot list. Answer what you know and leave the rest out.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "description": "What Google shows: suspended, disabled, pending verification, limited, not showing"
    },
    "name_has_extra_words": {
      "type": "boolean",
      "description": "Name has keywords, suburb or tagline not on signage"
    },
    "service_area_business_showing_address": {
      "type": "boolean",
      "description": "Goes to customers but shows a street address"
    },
    "virtual_office_or_coworking": {
      "type": "boolean",
      "description": "Address is a virtual office, coworking or shared space"
    },
    "po_box_or_mailbox": {
      "type": "boolean",
      "description": "Address is a PO box or mailbox"
    },
    "recent_major_edits": {
      "type": "boolean",
      "description": "Changed name/address/category/phone recently"
    },
    "multiple_profiles": {
      "type": "boolean",
      "description": "More than one profile for the same business"
    },
    "phone_not_local_or_tracking": {
      "type": "boolean",
      "description": "Main phone is a call centre, premium or tracking number"
    },
    "website_mismatch": {
      "type": "boolean",
      "description": "Website name/phone/area doesn't match the profile"
    },
    "recently_moved_or_rebranded": {
      "type": "boolean",
      "description": "Moved or rebranded recently"
    },
    "restricted_category": {
      "type": "boolean",
      "description": "Locksmith, garage door, towing, pest control, removalist or similar high-spam category"
    }
  },
  "required": [
    "status"
  ]
}
```

</details>

### audit_website_local_seo

**Audit a website's local SEO**

Fetches one public web page and checks its local SEO layer: title and H1 naming the service and area, click-to-call link, LocalBusiness schema, name and phone matching the Google profile, indexability, robots.txt, sitemap, mobile viewport, forms, review proof. Returns a score and a priority-ordered fix list. Only reads the page.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "Page to check, usually the homepage or the page the Google profile links to"
    },
    "business_name": {
      "type": "string",
      "description": "Optional: name as on the Google profile"
    },
    "phone": {
      "type": "string",
      "description": "Optional: phone as on the Google profile"
    },
    "suburb": {
      "type": "string",
      "description": "Optional: main suburb/city"
    },
    "main_service": {
      "type": "string",
      "description": "Optional: main service, e.g. 'electrician'"
    }
  },
  "required": [
    "url"
  ]
}
```

</details>

### compare_nap

**Compare name, address, phone across listings**

Checks that a business's name, address and phone (NAP) match across directory listings, ignoring formatting differences (St vs Street, +61 vs 0, Pty Ltd). Paste each listing's details or text. Returns real mismatches and a list of Australian directories worth having.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "reference": {
      "type": "object",
      "description": "The correct details, as on the Google profile",
      "properties": {
        "name": {
          "type": "string",
          "description": "Business name"
        },
        "address": {
          "type": "string",
          "description": "Street address (omit for a hidden-address service business)"
        },
        "phone": {
          "type": "string",
          "description": "Phone"
        }
      }
    },
    "listings": {
      "type": "array",
      "description": "Listings to compare",
      "items": {
        "type": "object",
        "properties": {
          "source": {
            "type": "string",
            "description": "e.g. Yellow Pages"
          },
          "name": {
            "type": "string",
            "description": ""
          },
          "address": {
            "type": "string",
            "description": ""
          },
          "phone": {
            "type": "string",
            "description": ""
          },
          "text": {
            "type": "string",
            "description": "Or paste the listing text instead of fields"
          }
        }
      }
    }
  },
  "required": [
    "reference",
    "listings"
  ]
}
```

</details>

### draft_spam_report

**Draft a competitor spam report**

Drafts a factual report about a competitor's Google listing that breaks the guidelines (keyword-stuffed name, fake address, duplicates, fake reviews, closed business), with where to send it and the evidence to attach. Only drafts the text. Nothing is submitted.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "competitor_name": {
      "type": "string",
      "description": "Listing name as shown on Google"
    },
    "issue": {
      "type": "string",
      "enum": [
        "keyword_name",
        "fake_address",
        "duplicate",
        "fake_reviews",
        "closed"
      ],
      "description": "Type of violation"
    },
    "evidence": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional: links or facts that prove it"
    }
  },
  "required": [
    "competitor_name",
    "issue"
  ]
}
```

</details>

### optimisation_checklist

**GBP optimisation checklist**

Returns the full step-by-step Google Business Profile optimisation checklist an agency works through (categories, name, description, contact links, service area, hours, attributes, services, products, photos, reviews, posts, booking, website and citations), tailored to the trade and city.

<details><summary>Input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "business_type": {
      "type": "string",
      "description": "e.g. electrician, hair salon"
    },
    "city": {
      "type": "string",
      "description": "e.g. Melbourne"
    },
    "service_area_business": {
      "type": "boolean",
      "description": "True if they go to the customer (default true)"
    }
  }
}
```

</details>

## Run it yourself

It is a Cloudflare Worker with one dependency.

```bash
npm install
npm test        # every rule has a known-bad input that must fail
npx wrangler dev
```

Change `account_id` and the custom domain route in `wrangler.toml` before deploying to your own account. `ADMIN_KEY` (Worker secret) unlocks `/admin/guard`.

## Limits

Fair-use rate limits apply per IP, or per MCP session for traffic from Claude.ai and ChatGPT. Normal use never hits them. The only tool that fetches anything is `audit_website_local_seo` (one page plus robots.txt and the sitemap, 10s timeout, 3MB cap, private and internal hosts blocked).

## Privacy

No inputs are stored or logged. Each call records the tool name only, for usage counts. Full policy: https://kangaroogrowth.com.au/free-tools/mcp#privacy

## License

MIT. See [LICENSE](LICENSE).
