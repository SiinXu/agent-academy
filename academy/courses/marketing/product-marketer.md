---
name: marketing-product-marketer
description: Agent Academy course for Product marketing (Marketing). Five ordered steps of real, source-linked resources.
version: 2026-11-10
updated_at: 2026-11-10T04:10:12Z
source: https://academy.incidental.site/courses/marketing/product-marketer/
---

# Product marketing · Marketing

Goal: Learn to plan, write and measure marketing work (content, SEO, email, ads) from real skills and prompts, without publishing anything unapproved.

Permissions: Read-only by default. Email, ads and social MCP servers need credentials and can publish or spend money; ask the owner first.

Machine-readable version: https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/marketing/product-marketer.json
Skill pack: https://academy.incidental.site/packs/marketing/product-marketer.zip
Changes feed: https://academy.incidental.site/api/changes.json

Rules for the agent: read the steps in order. For each item open `raw` if present (mirrored text, license allows it), otherwise open `source`. Do not install or use anything marked needs_credentials or writes_external without asking your owner.


## Step 1: Enrol

Read course.md: the job, the permissions it needs, and what good output looks like.


## Step 2: Pick a direction

Choose one style, platform or channel from the reference library. Only one.

- [template] Marketing Bot. Turns a project description into X launch copy worth tapping
  source: https://botsdots.site/templates/marketing-bot-famb
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/FaMbaDOO2WceFyiKDu6_6
  needs_credentials: true, writes_external: false
- [template] Marketing Calendar Owner. Keep regional and global content, launch, and events calendars in sync. Pulls from Notion and keeps webinars and campaigns current without a weekly chase.
  source: https://botsdots.site/templates/marketing-calendar-owner
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/se318a72a31fad75c277e
  needs_credentials: true, writes_external: false
- [plugin] Marketing plugin (Anthropic knowledge-work-plugins). A marketing plugin primarily designed for [Cowork](https://claude.com/product/cowork), Anthropic's agentic desktop application — though it also works in Claude Code. Content creation, campaign planning, brand voice manag
  source: https://github.com/anthropics/knowledge-work-plugins/tree/main/marketing
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-knowledge-work-plugins-marketing.md
  license: Apache-2.0
  install: claude plugin marketplace add anthropics/knowledge-work-plugins
  needs_credentials: false, writes_external: false
- [template] SEO & AEO Desk. Turns your keywords into content ideas and writer-ready briefs for search and AI answers. Works from a pasted keyword list or your Search Console.
  source: https://botsdots.site/templates/seo-aeo-desk
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/0IhyZWxwbf2cFmsmroZQL
  needs_credentials: false, writes_external: false

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

- [skill] copywriting. When the user wants to write, rewrite, or improve marketing copy for any page, including homepage, landing pages, pricing pages, feature pages, about pages, or product pages. Also use when the user says "write copy for,"
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/copywriting/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/coreyhaines31-marketingskills-skills-copywriting-skill-md.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill copywriting
  needs_credentials: false, writes_external: false
- [skill] launch. When the user wants to plan a product launch, feature announcement, or release strategy. Also use when the user mentions 'launch,' 'Product Hunt,' 'feature release,' 'announcement,' 'go-to-market,' 'beta launch,' 'early 
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/launch/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/coreyhaines31-marketingskills-skills-launch-skill-md.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill launch
  needs_credentials: false, writes_external: false
- [skill] competitive-brief. Research competitors and generate a positioning and messaging comparison with content gaps, opportunities, and threats. Use when building sales battlecards, when finding positioning gaps and messaging angles competitors 
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/marketing/skills/competitive-brief/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/anthropics-knowledge-work-plugins-marketing-skills-competitive-brief-skill-md.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill competitive-brief
  needs_credentials: false, writes_external: false
- [skill] competitors. When the user wants to create or audit comparison and alternative pages ('X vs Y', 'X alternative', 'best X alternatives'), or asks what a public page may say about a competitor: page formats, fair claims, and outdated p
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/competitors/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-competitors.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill competitors
  needs_credentials: false, writes_external: false
- [skill] offers. When the user wants to design or improve the offer itself, or asks why it isn't selling or how to add urgency honestly: value stacking, bonuses, guarantees, scarcity, payment plans, upsells. Best for services, courses, c
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/offers/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-offers.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill offers
  needs_credentials: false, writes_external: false
- [skill] paywalls. When the user wants to create or improve in-app paywalls and upgrade moments, or asks when or how hard to ask free users to pay (after they've seen value): upgrade screens, upsell modals, feature gates, limit-reached and
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/paywalls/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-paywalls.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill paywalls
  needs_credentials: false, writes_external: false
- [skill] pricing. When the user wants to set pricing and packaging, or asks what to charge, whether to raise prices, or how to move existing customers: tiers, value metrics, per-seat vs usage, freemium and trials, willingness to pay, pric
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/pricing/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-pricing.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill pricing
  needs_credentials: false, writes_external: false
- [skill] product-marketing. When the user wants to create or update the product marketing context doc (.agents/product-marketing.md), or asks what belongs in it or whether positioning or ICP is clear enough: product, ICP, positioning, competitors, 
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/product-marketing/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-product-marketing.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill product-marketing
  needs_credentials: false, writes_external: false
- [skill] reverse-engineer-marketing. When the user wants to know how another company grew and what to copy, or asks what a competitor did and when: a dated log of their moves against their traffic from public data, archives, job posts, reviews, and their fu
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/reverse-engineer-marketing/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-reverse-engineer-marketing.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill reverse-engineer-marketing
  needs_credentials: false, writes_external: false
- [skill] sales-enablement. When the user wants sales collateral, or asks what to give a champion or rep, or how to answer an objection or make the case: decks, one-pagers, objection handling, demo scripts, talk tracks, battle cards, proposals, win
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/sales-enablement/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-sales-enablement.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill sales-enablement
  needs_credentials: false, writes_external: false
- [system-prompt] Landing Page Copy Architect – Conversion Framework Prompt. Design a high-converting landing page copy framework for a specific offer. This prompt guides you in creating a reusable blueprint that other AI tools can use to generate full landing page copy.
  source: https://prompts.chat/prompts/cmm7aph8m0001le04izoojs6t_landing-page-copy-architect-conversion-framework-prompt
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-landing-page-copy-architect-conversion-framework-prompt.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Marketing Mastermind for Product Promotion. Act as a marketing expert to help plan regular marketing activities and agent strategies after receiving product pricing and market value information.
  source: https://prompts.chat/prompts/cml2i17710001l104bn2gwczu_marketing-mastermind-for-product-promotion
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-marketing-mastermind-for-product-promotion.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false

## Step 4: Do it

Follow a workflow or case. Install a skill or MCP server only if you have permission.

- [mcp] Grey Tabby Golf. Golf group software: games, scoring, features, pricing, demos, and a 30-day free trial.
  source: https://tabbygolf.com
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://tabbygolf.com/mcp
  needs_credentials: true, writes_external: false
- [mcp] Marketing Scope. Plan campaigns, score offers explainably, and enforce offer-cited tactics before spending.
  source: https://github.com/AxelVerneBooks/marketing-scope-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-axelvernebooks-marketing-scope-mcp.md
  license: MIT
  needs_credentials: false, writes_external: false
- [case] ai_email_gtm_outreach_agent. An end-to-end, multi-agent Streamlit app that automates B2B outreach using GPT-5 and Exa. It discovers relevant companies, finds the right contacts (Founder's Office, GTM/Sales leadership, Partnerships/BD, Product Market
  source: https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/advanced_ai_agents/multi_agent_apps/ai_email_gtm_outreach_agent
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/shubhamsaboo-awesome-llm-apps-advanced-ai-agents-multi-agent-apps-ai-email-gtm-outreach-ag.md
  license: Apache-2.0
  needs_credentials: false, writes_external: false
- [case] ai_seo_audit_team. The **AI SEO Audit Team** is an autonomous, multi-agent workflow built with Google ADK. It takes a webpage URL, crawls the live page, researches real-time SERP competition, and produces a polished, prioritized SEO optimi
  source: https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/advanced_ai_agents/multi_agent_apps/agent_teams/ai_seo_audit_team
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/shubhamsaboo-awesome-llm-apps-advanced-ai-agents-multi-agent-apps-agent-teams-ai-seo-audit.md
  license: Apache-2.0
  needs_credentials: false, writes_external: false

## Step 5: Self-check

Go through the checklist and report the result to your owner.

- [skill] analytics. When the user wants to set up, improve, or audit analytics tracking and measurement. Also use when the user mentions "set up tracking," "GA4," "Google Analytics," "conversion tracking," "event tracking," "UTM parameters,
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/analytics/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/coreyhaines31-marketingskills-skills-analytics-skill-md.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill analytics
  needs_credentials: false, writes_external: false
- [skill] performance-report. Build a marketing performance report with key metrics, trend analysis, wins and misses, and prioritized optimization recommendations. Use when wrapping a campaign, when preparing weekly, monthly, or quarterly channel sum
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/marketing/skills/performance-report/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/anthropics-knowledge-work-plugins-marketing-skills-performance-report-skill-md.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill performance-report
  needs_credentials: false, writes_external: false
- [skill] ab-testing. When the user wants to plan, run, or read A/B tests, or asks a judgement call on one: is the result real, can we stop, which version won, is this worth testing at all: sample size, duration, significance, hypotheses, and
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/ab-testing/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-ab-testing.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill ab-testing
  needs_credentials: false, writes_external: false
- [skill] attribution. When the user wants to work out which marketing drives revenue, or asks whether a channel is really working, which numbers to trust, or how to credit podcasts and dark social: attribution models, platforms that over-clai
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/attribution/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-attribution.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill attribution
  needs_credentials: false, writes_external: false
- [skill] public-relations. When the user wants press and media coverage, or asks what to say to a reporter, whether a story is newsworthy, or how to handle a crisis: pitches, press releases, media lists, HARO, op-eds, podcast guest prep, newsjacki
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/public-relations/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-public-relations.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill public-relations
  needs_credentials: false, writes_external: false
- [system-prompt] business-analyst. Master modern business analysis with AI-powered analytics, real-time dashboards, and data-driven insights. Build comprehensive KPI frameworks, predictive models, and strategic recommendations. Use PROACTIVELY for busines
  source: https://github.com/wshobson/agents/blob/main/plugins/business-analytics/agents/business-analyst.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-business-analytics-agents-business-analyst.md
  license: MIT
  needs_credentials: false, writes_external: false
- [skill] data-storytelling. Transform data into compelling narratives using visualization, context, and persuasive structure. Use when presenting analytics to stakeholders, creating data reports, or building executive presentations.
  source: https://github.com/wshobson/agents/blob/main/plugins/business-analytics/skills/data-storytelling/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-business-analytics-skills-data-storytelling.md
  license: MIT
  install: npx skills add wshobson/agents --skill data-storytelling
  needs_credentials: false, writes_external: false
- [skill] kpi-dashboard-design. Design effective KPI dashboards with metrics selection, visualization best practices, and real-time monitoring patterns. Use this skill when building an executive SaaS metrics dashboard tracking MRR, churn, and LTV/CAC r
  source: https://github.com/wshobson/agents/blob/main/plugins/business-analytics/skills/kpi-dashboard-design/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-business-analytics-skills-kpi-dashboard-design.md
  license: MIT
  install: npx skills add wshobson/agents --skill kpi-dashboard-design
  needs_credentials: false, writes_external: false

### Checklist

- [ ] Every claim in the copy can be traced to a source the owner gave you or a public page you link.
- [ ] Campaigns name one audience, one offer and one primary metric before any copy is written.
- [ ] SEO work starts from real search data or a stated assumption, never invented volumes.
- [ ] Nothing is published, posted, emailed or spent (ads budget) without the owner's explicit approval.
- [ ] Brand voice: read the brand guide or brand-voice skill first; flag anything that conflicts with it.
- [ ] Reports show numbers with their source and date; no fake-precise figures.
- [ ] Remove AI-writing tells (filler intros, em-dash chains, generic superlatives) before handing off.


Report back to your owner: what you learned (5 bullets), which items you installed (none without approval), and the checklist results.
