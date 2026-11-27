# Trustpilot Reviews Scraper - Reviews, Replies & AI Summary

Get Trustpilot reviews of any company: rating, title, text, language, dates, likes, verified flag, reviewer and country, and the company's reply. Plus a free company row with TrustScore, total reviews, categories and Trustpilot's own AI summary. Filters: stars, language, date. $0.0005 per review.

**[Run it on Apify](https://apify.com/pomlabs/trustpilot-reviews-scraper?utm_source=github&utm_medium=readme&utm_campaign=trustpilot-reviews-scraper)**: no install, free credit on a new Apify account.

Export **every Trustpilot review of any company**, not just the 200 Trustpilot shows per listing: past that limit the Actor reads the narrower listings (each star, each language, each topic) and merges them by date, so 1,000 or 5,000 reviews still come out newest first, with no duplicates.

Also in one Actor: **company search**, **category browsing**, **company profiles**, **AI pain-point analysis**, deterministic **review insights**, **fake-review signals** on every review, **monitoring** that delivers only new reviews, and **alerts** to a webhook, Slack, Discord, Telegram or WhatsApp.

You pay only for what is delivered. Unknown companies, empty filters and failed analyses are listed with the reason and never charged.

## What you get

**Each review:** ID and link, rating, title, full text, language, published, experience and update dates, likes, source and verification level, reviewer name, ID, profile link, photo, country and review count, the **company reply** with its date and reply delay in days, `riskLevel` (high = 1-2 stars without reply), `suspicionScore` 0-100 with the `authenticitySignals` behind it, and the company columns (`companyTrustScore`, `companyTotalReviews`, `companyCategories`...).

**Each company (free row):** TrustScore, stars, total reviews, last-12-months count, star and language breakdown, categories and rankings, website, logo, e-mail, phone, address, claim and verification flags, reply rate and time, negative reviews replied, consumer alert, **Trustpilot's AI summary and topic summaries**, similar companies, an **authenticity summary** (share of single-review accounts per star, burst days, duplicate texts) and, on request, the **transparency report** (how reviews are collected, per month and star, reports, reviews taken offline) and exact per-language and rolling-window counts.

**Analysis rows (on request):**
- `reviewInsights` (no AI): sentiment split, complaint themes ranked, top complaint and praise terms, customer requests with quotes, reply rate and median reply delay, unanswered negative reviews, rating by month.
- `painPointAnalysis` (AI): summary, themes with severity, share and trend, quotes checked word for word against the reviews, strengths, missing features, quick wins, churn signals and a risk score, in the language you choose.

## Modes

| Mode | What it does |
|---|---|
| `reviews` (default) | Reviews of the companies you list: websites, Trustpilot URLs, brand names (found through Trustpilot search) or reviewer profile URLs (every review that person wrote) |
| `searchCompanies` | Companies matching a keyword, with country, city, TrustScore, review count and claimed filters |
| `categories` | Companies of a Trustpilot category, sorted by relevance, review count or latest review; with no category, the list of categories |
| `companyInfo` | Company profiles only, optionally with the website's contact e-mails, phones, social links and payment processors |

## Input

| Field | Description |
|---|---|
| `companies` | `amazon.com`, `https://www.trustpilot.com/review/www.booking.com`, `https://www.trustpilot.com/users/<id>` or `Nubank` |
| `maxReviews` | Reviews per company; `0` = all of them |
| `sort` | `recency` (default) or `relevance` |
| `sampling` | `balanced` (same number per star) or `proportional`, when you want fewer reviews than the company has |
| `stars`, `languages`, `topics` | Trustpilot filters; several languages are read one by one |
| `date`, `lastDays`, `startDate`, `publishedAfter` | Trustpilot's period filter, a rolling window, a start day or an exact moment (only reviews after the last one you have) |
| `search`, `verified`, `withReplies`, `countryOfReviewer` | Words in the review, verified only, with a company reply only, reviewer countries |
| `includeTransparency`, `includeStats`, `includeWindowedStats` | Extra company data |
| `reviewInsights`, `painPointAnalysis`, `analysisLanguage` | Analysis rows |
| `enrichEmails`, `qualifyByPayment` | Contacts and payment processors from the company website |
| `monitoringMode`, `monitorStateName`, `emitUnchanged`, `emitExpired`, `skipReposts` | Monitoring |
| `webhookUrl`, `slackWebhookUrl`, `discordWebhookUrl`, `telegramBotToken` + `telegramChatId`, WhatsApp Cloud API fields | Alerts |
| `compact`, `fields`, `descriptionMaxLength`, `excludeEmptyFields`, `splitDatasets` | Output shape |

Field names of the other popular Trustpilot Actors (`companyUrls`, `companyDomains`, `startUrls`, `maxReviewsPerCompany`, `filterStars`, `filterLanguages`, `filterDateRange`, `verifiedOnly`, `incrementalMode`...) are accepted too, so you can switch without rewriting your input.

```json
{ "companies": ["www.booking.com"], "maxReviews": 1000, "stars": ["1", "2"], "reviewInsights": true }
```

```json
{ "companies": ["nubank.com.br"], "monitoringMode": true, "monitorStateName": "nubank-daily", "slackWebhookUrl": "https://hooks.slack.com/services/..." }
```

## Output

A review:

```json
{
  "type": "review", "company": "nubank.com.br", "companyName": "Nubank", "reviewId": "6b05ef26abcc49375c0772b0",
  "rating": 5, "title": "Os ícones do app são de fácil acesso", "text": "Os ícones do app são de fácil acesso...",
  "language": "pt", "publishedAt": "2026-11-24T22:10:14.000Z", "experiencedAt": "2026-11-24T00:00:00.000Z",
  "verified": false, "verificationLevel": "not-verified", "reviewer": "Romulo Trotta", "reviewerCountry": "BR",
  "reviewerReviewCount": 2, "companyReply": null, "replyDelayDays": null, "riskLevel": "low",
  "suspicionScore": 10, "authenticitySignals": ["unverified_extreme_rating"],
  "url": "https://www.trustpilot.com/reviews/6b05ef26abcc49375c0772b0"
}
```

A company found by search:

```json
{ "type": "companyHit", "company": "cyberghostvpn.com", "name": "CyberGhost VPN", "trustScore": 4, "numberOfReviews": 24195, "email": "support@cyberghost.ro", "city": "Bucharest", "country": "Romania", "categories": ["VPN Service", "Software Company"], "url": "https://www.trustpilot.com/review/cyberghostvpn.com" }
```

An AI analysis (Nubank, 60 reviews): "Customers highly appreciate Nubank for its intuitive mobile application, fast onboarding, and fee-free everyday banking. However, there is severe dissatisfaction regarding sudden account freezes..." with themes such as "Sudden Account Blockades & Closures" (severity 5, 11.7% of reviews) and quick wins like "Allow users to download PDF statements without password protection".

## Pricing

| Event | Price |
|---|---|
| Review delivered | **$0.0005** ($0.50 per 1,000) on the free plan; Bronze $0.00045, Silver $0.0004, Gold and up $0.00035 |
| Company delivered (search, category, profile modes) | $0.000225 |
| Review insights, per company | $0.018 |
| AI pain-point analysis, per company | $0.045 |
| Contact e-mail found on the company website | $0.0009 |

The company row of the reviews mode, unchanged reviews in monitoring, errors and failed analyses are free. No start fee. Set a maximum cost per run in the Apify console and the Actor stops cleanly at it.

## FAQ

**Do I need a Trustpilot account?** No.

**How many reviews can I get?** As many as Trustpilot has for your filters. Trustpilot shows 200 per listing; past that the Actor splits by star, language and topic and merges by date. Very large companies (100,000+) can still leave some reviews unreachable without an account; the company row says how many were delivered against Trustpilot's total.

**How does monitoring work?** The first run is the baseline. Later runs with the same watch name deliver only reviews no earlier run delivered, stop after 20 known reviews in a row, and charge only the new ones.

**What is the suspicion score?** A transparent 0-100 sum of signals Trustpilot data shows: single-review account, no photo, very short text, duplicated text, a burst day, several reviews of the same company, unverified extreme rating. It is a lead for your own review, not a verdict.

**Is the AI summary always there?** Only when Trustpilot shows one on the company page; otherwise the field is `null`.

## Call it by API

```bash
curl -X POST "https://api.apify.com/v2/acts/pomlabs~trustpilot-reviews-scraper/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"companies": ["www.amazon.com"], "maxReviews": 40}'
```

Python:

```python
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("pomlabs/trustpilot-reviews-scraper").call(run_input={"companies": ["www.amazon.com"], "maxReviews": 40})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

## Use it from Claude, Cursor or any MCP client

```bash
claude mcp add trustpilot-reviews-scraper "https://mcp.apify.com?tools=pomlabs/trustpilot-reviews-scraper" -t http
```

## More Actors by Pom Labs

All our Actors: [apify.com/pomlabs](https://apify.com/pomlabs?utm_source=github&utm_medium=readme&utm_campaign=trustpilot-reviews-scraper)
