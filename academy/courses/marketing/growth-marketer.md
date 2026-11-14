---
name: marketing-growth-marketer
description: Agent Academy course for Growth (Marketing). Five ordered steps of real, source-linked resources.
version: 2026-11-14
updated_at: 2026-11-14T02:28:51Z
source: https://academy.incidental.site/courses/marketing/growth-marketer/
---

# Growth · Marketing

Goal: Learn to plan, write and measure marketing work (content, SEO, email, ads) from real skills and prompts, without publishing anything unapproved.

Permissions: Read-only by default. Email, ads and social MCP servers need credentials and can publish or spend money; ask the owner first.

Machine-readable version: https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/marketing/growth-marketer.json
Skill pack: https://academy.incidental.site/packs/marketing/growth-marketer.zip
Changes feed: https://academy.incidental.site/api/changes.json

Rules for the agent: read the steps in order. For each item open `raw` if present (mirrored text, license allows it), otherwise open `source`. Do not install or use anything marked needs_credentials or writes_external without asking your owner.


## Step 1: Enrol

Read course.md: the job, the permissions it needs, and what good output looks like.


## Step 2: Pick a direction

Choose one style, platform or channel from the reference library. Only one.

- [template] Marketing Manager. Helps independent and AI-assisted musicians get their songs heard with free, low-key promotion across YouTube, Spotify, and music communities.
  source: https://botsdots.site/templates/marketing-manager
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/GW1Db37PnYoLXuaxX_Si-
  needs_credentials: true, writes_external: false
- [template] Zealt Chief of Staff. Coordinates a specialist bot team for a social photo app: Scout world moments, Marketing, Social, Idea Lab, and Knowledge. Keeps lanes clear and growth
  source: https://botsdots.site/templates/zealt-chief-of-staff
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/dadANmm6M496kgq3qgBJ3
  needs_credentials: false, writes_external: false
- [template] AI Character Studio. Runs faceless AI influencer characters end to end: scripts with hook options, AI avatar videos, captions, scheduled posting and weekly growth checks.
  source: https://botsdots.site/templates/ai-character-studio
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/RDa3UxaLxHIts4XVIX73W
  needs_credentials: false, writes_external: false
- [template] Dan. Daily marketing manager for a sports fan page: growth plans, ready-to-post text, local fan replies, brand deals and income.
  source: https://botsdots.site/templates/dan
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/7zNjK3LlQ55fGobGVWPQl
  needs_credentials: false, writes_external: false
- [template] Marketing Lead. A sellable marketing strategy bot, part of the 'Founder's Back Office' package of public Grok Bot templates.
  source: https://botsdots.site/templates/marketing-lead
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/mP9VpuCPU4iU9r5o0MiAM
  needs_credentials: false, writes_external: true
- [template] Nole. An X growth helper grounded in X's open-source ranking code and classic copywriting.
  source: https://botsdots.site/templates/nole-zeze
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/zEZeFchc863A_-JaGcX2D
  needs_credentials: false, writes_external: false
- [template] Contractor Growth Desk. A marketing workbench for owner-operated contractors and service businesses: demo website drafts, B2B leads from companies running Meta and Google…
  source: https://botsdots.site/templates/contractor-growth-desk
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/NRm6z_mrm7ITEybyuOZMA
  needs_credentials: false, writes_external: false

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

- [skill] cold-email. Write and run B2B cold outbound that gets replies, from cold emails and follow-ups to sending setup, LinkedIn, multichannel cadences, and reply handling. Use when the user mentions "cold email," "cold outreach," "outboun
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/cold-email/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/coreyhaines31-marketingskills-skills-cold-email-skill-md.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill cold-email
  needs_credentials: false, writes_external: false
- [skill] cro. When the user wants more conversions from a page or form, or asks why a page isn't converting, what to change first, or whether to add or remove a field or element: landing and pricing pages, lead forms, or a URL shared 
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/cro/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-cro.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill cro
  needs_credentials: false, writes_external: false
- [skill] directory-submissions. When the user wants to list a product in startup, SaaS, AI, MCP, and review directories, or asks which directories are worth it or whether listings are working: Product Hunt, G2, Capterra, AlternativeTo, MCP registries, 
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/directory-submissions/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-directory-submissions.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill directory-submissions
  needs_credentials: false, writes_external: false
- [skill] free-tools. When the user wants to plan or build a free tool as marketing, or asks whether a tool idea is worth building or which one to pick: calculators, graders, generators, and other interactive tools for leads, SEO, and links. 
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/free-tools/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-free-tools.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill free-tools
  needs_credentials: false, writes_external: false
- [skill] marketing-ideas. When the user wants marketing ideas or growth tactics for a software product, or asks what to try to get attention or the next customers with little time or budget, or after the obvious channels. Draws on a library of 13
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/marketing-ideas/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-marketing-ideas.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill marketing-ideas
  needs_credentials: false, writes_external: false
- [skill] marketing-loops. When the user wants a recurring marketing job an AI agent runs on a cadence or trigger, or asks what a weekly or daily automated check should do, remember, and when it should stop: SEO and ads checks, churn watches, outb
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/marketing-loops/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-marketing-loops.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill marketing-loops
  needs_credentials: false, writes_external: false
- [skill] onboarding. When the user wants better onboarding and activation, or asks why new users don't stick or what the first session should do: first-run experience, aha moments, checklists, empty states, time to value. For the signup flow
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/onboarding/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-onboarding.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill onboarding
  needs_credentials: false, writes_external: false
- [skill] popups. When the user wants to create or improve popups, modals, slide-ins, sticky bars, and banners, or asks whether one will help or annoy and when to show it: exit intent, email capture, scroll and time triggers, announcement
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/popups/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-popups.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill popups
  needs_credentials: false, writes_external: false
- [skill] prospecting. When the user wants to find and qualify prospects for outbound, or asks who to target first, which signal to prioritize, or where to spot buyers with the problem: buying signals, enrichment, verification, account researc
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/prospecting/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-prospecting.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill prospecting
  needs_credentials: false, writes_external: false
- [skill] referrals. When the user wants referral and affiliate programs or word of mouth, or asks what to reward, how much to pay, or which loop to start with: refer-a-friend incentives, commissions and payouts, partner programs, 'made with
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/referrals/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-referrals.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill referrals
  needs_credentials: false, writes_external: false
- [skill] revops. When the user wants to design revenue operations, or asks when a lead is ready for sales or why sales and marketing disagree on lead quality: lifecycle stages, MQL and SQL, scoring, routing, handoff, pipeline stages, CRM
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/revops/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-revops.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill revops
  needs_credentials: false, writes_external: false
- [skill] signup. When the user wants better signup, registration, and trial start flows, or asks which fields or steps to cut or whether to require a card: SSO and drop-off before an account exists. For what happens after signup, see onb
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/signup/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-signup.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill signup
  needs_credentials: false, writes_external: false
- [system-prompt] social-publishing-publisher. Agent-first social media publishing specialist. Use this agent to schedule and publish posts across 13 platforms (X, LinkedIn, Instagram, Facebook Pages, TikTok, Discord, Telegram, YouTube, Reddit, WordPress, Pinterest) 
  source: https://github.com/wshobson/agents/blob/main/plugins/social-publishing/agents/social-publishing-publisher.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-social-publishing-agents-social-publishing-publisher.md
  license: MIT
  needs_credentials: false, writes_external: false
- [system-prompt] growth-loops. Use when the user wants to design a growth loop, understand PLG mechanics, or build sustainable acquisition. Triggers on: 'growth loop', 'flywheel', 'viral loop', 'PLG growth', 'product-led growth', 'growth mechanics', '
  source: https://github.com/VoltAgent/awesome-claude-code-subagents/blob/main/categories/08-business-product/growth-loops.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/voltagent-awesome-claude-code-subagents-categories-08-business-product-growth-loops.md
  license: MIT
  needs_credentials: false, writes_external: false
- [system-prompt] landing-page-copywriter. Use this agent when writing or optimizing landing page copy, hero sections, CTAs, or conversion-focused funnel content for a specific audience and offer.
  source: https://github.com/VoltAgent/awesome-claude-code-subagents/blob/main/categories/08-business-product/landing-page-copywriter.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/voltagent-awesome-claude-code-subagents-categories-08-business-product-landing-page-copywr.md
  license: MIT
  needs_credentials: false, writes_external: false
- [system-prompt] RIP McKinsey: Here are 10 prompts to replace expensive business consultants. "RIP McKinsey: Here are 10 prompts to replace expensive business consultants." focuses on using AI to handle strategic business tasks. RIP McKinsey. Here are 10 prompts to replace expensive business consultants: 1. SWOT 
  source: https://prompts.chat/prompts/cmjirfi450008jx04zg2kwvml_rip-mckinsey-here-are-10-prompts-to-replace-expensive-business-consultants
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-rip-mckinsey-here-are-10-prompts-to-replace-expensive-business-consultants.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Banner Slogan and Subtext Generator. A senior marketing and art direction assistant that creates minimal, impactful, and conversion-focused banner slogans. It produces a main slogan, an alternative slogan, and subtext for each banner based on the industry, 
  source: https://prompts.chat/prompts/cmue8hu2f0001kz04fqubnkts_banner-slogan-and-subtext-generator
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-banner-slogan-and-subtext-generator.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Master Storyteller and Sales Copywriter Prompt. This prompt guides the user to create compelling sales narratives that transform prospects into loyal customers by embedding the product into their identity.
  source: https://prompts.chat/prompts/cmm3yusid0001ie048o71sjvk_master-storyteller-and-sales-copywriter-prompt
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-master-storyteller-and-sales-copywriter-prompt.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] sales and marketing strategy. I am the proprietor of a company with an in-house sheet metal manufacturing facility. I am looking for business opportunities to expand my operations and increase revenue. I am interested in lead generation, business dev
  source: https://prompts.chat/prompts/cmv0859sx0001l6049kz9kqye_sales-and-marketing-strategy
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-sales-and-marketing-strategy.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false

## Step 4: Do it

Follow a workflow or case. Install a skill or MCP server only if you have permission.

- [case] ai_email_gtm_outreach_agent. An end-to-end, multi-agent Streamlit app that automates B2B outreach using GPT-5 and Exa. It discovers relevant companies, finds the right contacts (Founder's Office, GTM/Sales leadership, Partnerships/BD, Product Market
  source: https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/advanced_ai_agents/multi_agent_apps/ai_email_gtm_outreach_agent
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/shubhamsaboo-awesome-llm-apps-advanced-ai-agents-multi-agent-apps-ai-email-gtm-outreach-ag.md
  license: Apache-2.0
  needs_credentials: false, writes_external: false
- [mcp] Probative legal-marketing data. Open US legal-marketing datasets with sources and DOIs, one server per dataset. CC BY 4.0.
  source: https://github.com/ops864/legal-marketing-data
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-com-probativegrowth-legal-marketing-data.md
  license: CC-BY-4.0
  install: remote (streamable-http): https://probativegrowth.com/mcp
  needs_credentials: true, writes_external: false
- [mcp] io.github.pooriaarab/agentic-campaign. Plan a social campaign calendar across brands and platforms.
  source: https://github.com/itsryanarmani/agentic-campaign
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-pooriaarab-agentic-campaign.md
  license: MIT
  install: npx -y agentic-campaign
  needs_credentials: false, writes_external: false
- [mcp] Levered. Senior growth marketing, powered by AI, for less than the cost of a full-time hire.
  source: https://levered.marketing
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://levered.marketing/api/v2/mcp/public
  needs_credentials: true, writes_external: false

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
