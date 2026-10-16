---
name: marketing-growth-marketer
description: Agent Academy course for Growth (Marketing). Five ordered steps of real, source-linked resources.
version: 2026-10-16
updated_at: 2026-10-16T10:29:38Z
source: https://siinxu.github.io/agent-academy/courses/marketing/growth-marketer/
---

# Growth · Marketing

Goal: Learn to plan, write and measure marketing work (content, SEO, email, ads) from real skills and prompts, without publishing anything unapproved.

Permissions: Read-only by default. Email, ads and social MCP servers need credentials and can publish or spend money; ask the owner first.

Machine-readable version: https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/marketing/growth-marketer.json
Skill pack: https://siinxu.github.io/agent-academy/packs/marketing/growth-marketer.zip
Changes feed: https://siinxu.github.io/agent-academy/api/changes.json

Rules for the agent: read the steps in order. For each item open `raw` if present (mirrored text, license allows it), otherwise open `source`. Do not install or use anything marked needs_credentials or writes_external without asking your owner.


## Step 1: Enrol

Read course.md: the job, the permissions it needs, and what good output looks like.


## Step 2: Pick a direction

Choose one style, platform or channel from the reference library. Only one.

- [template] Zealt Chief of Staff. Coordinates a specialist bot team for a social photo app: Scout world moments, Marketing, Social, Idea Lab, and Knowledge. Keeps lanes clear and growth
  source: https://botsdots.site/templates/zealt-chief-of-staff
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/dadANmm6M496kgq3qgBJ3
  needs_credentials: false, writes_external: false
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
- [template] Market Researcher. Monitors your competitors' public websites, ads, marketing, pricing, and positioning on a standing cadence
  source: https://botsdots.site/templates/market-researcher
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/xzkXiUbdYfPd7g30OhLGf
  needs_credentials: false, writes_external: false

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

- [skill] cold-email. Write and run B2B cold outbound that gets replies, from cold emails and follow-ups to sending setup, LinkedIn, multichannel cadences, and reply handling. Use when the user mentions "cold email," "cold outreach," "outboun
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/cold-email/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/coreyhaines31-marketingskills-skills-cold-email-skill-md.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill cold-email
  needs_credentials: false, writes_external: false
- [skill] community-marketing. Build and leverage online communities to drive product growth and brand loyalty. Use when the user wants to create a community strategy, grow a Discord or Slack community, manage a forum or subreddit, build brand advocat
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/community-marketing/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-community-marketing.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill community-marketing
  needs_credentials: false, writes_external: false
- [skill] cro. When the user wants to optimize, improve, or increase conversions on any marketing page or form — including homepage, landing pages, pricing pages, feature pages, lead capture forms, or contact forms. Also use when the u
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/cro/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-cro.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill cro
  needs_credentials: false, writes_external: false
- [skill] directory-submissions. When the user wants to submit their product to startup, SaaS, AI, agent, MCP, no-code, or review directories for backlinks, domain rating, and discovery. Also use when the user mentions "directory submissions," "submit t
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/directory-submissions/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-directory-submissions.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill directory-submissions
  needs_credentials: false, writes_external: false
- [skill] marketing-loops. When the user wants to set up a recurring, self-running marketing workflow — a repeatable loop an AI agent runs on a cadence (weekly, daily, on a trigger) rather than a one-off task. Also use when the user mentions 'mark
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/marketing-loops/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-marketing-loops.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill marketing-loops
  needs_credentials: false, writes_external: false
- [skill] onboarding. When the user wants to optimize post-signup onboarding, user activation, first-run experience, or time-to-value. Also use when the user mentions "onboarding flow," "activation rate," "user activation," "first-run experie
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/onboarding/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-onboarding.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill onboarding
  needs_credentials: false, writes_external: false
- [skill] popups. When the user wants to create or optimize popups, modals, overlays, slide-ins, or banners for conversion purposes. Also use when the user mentions "exit intent," "popup conversions," "modal optimization," "lead capture p
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/popups/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-popups.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill popups
  needs_credentials: false, writes_external: false
- [skill] prospecting. When the user wants to find, qualify, and build a list of prospects to reach out to, across B2B SaaS, general B2B, or local small businesses. Also use when the user mentions "prospecting," "build a prospect list," "find 
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/prospecting/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-prospecting.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill prospecting
  needs_credentials: false, writes_external: false
- [skill] referrals. When the user wants to create, optimize, or analyze a referral program, affiliate program, or word-of-mouth strategy. Also use when the user mentions 'referral,' 'affiliate,' 'ambassador,' 'word of mouth,' 'viral loop,' 
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/referrals/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-referrals.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill referrals
  needs_credentials: false, writes_external: false
- [skill] signup. When the user wants to optimize signup, registration, account creation, or trial activation flows. Also use when the user mentions "signup conversions," "registration friction," "signup form optimization," "free trial si
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
- [mcp] io.github.pooriaarab/agentic-campaign. Plan a social campaign calendar across brands and platforms.
  source: https://github.com/pooriaarab/agentic-campaign
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-pooriaarab-agentic-campaign.md
  license: MIT
  install: npx -y agentic-campaign
  needs_credentials: false, writes_external: false
- [case] ai_seo_audit_team. The **AI SEO Audit Team** is an autonomous, multi-agent workflow built with Google ADK. It takes a webpage URL, crawls the live page, researches real-time SERP competition, and produces a polished, prioritized SEO optimi
  source: https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/advanced_ai_agents/multi_agent_apps/agent_teams/ai_seo_audit_team
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/shubhamsaboo-awesome-llm-apps-advanced-ai-agents-multi-agent-apps-agent-teams-ai-seo-audit.md
  license: Apache-2.0
  needs_credentials: false, writes_external: false
- [workflow] brand-search-optimization. This recipe is an Agent Development Kit (ADK) multi-agent workflow that helps e-commerce brands optimize product titles for search visibility and recover zero/low-result retail queries using BigQuery and Gemini Computer 
  source: https://github.com/google/adk-recipes/tree/main/contrib/python/brand-search-optimization
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/google-adk-recipes-contrib-python-brand-search-optimization.md
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
- [skill] ab-testing. When the user wants to plan, design, or implement an A/B test or experiment, or build a growth experimentation program. Also use when the user mentions "A/B test," "split test," "experiment," "test this change," "variant
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/ab-testing/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-ab-testing.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill ab-testing
  needs_credentials: false, writes_external: false
- [skill] attribution. When the user wants to figure out which marketing actually drives conversions and revenue, choose or interpret an attribution model, or reconcile conflicting numbers across tools. Also use when the user mentions "attribu
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/attribution/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-attribution.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill attribution
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
- [system-prompt] Apple Store ASO Expert Guide. Guide to optimizing app visibility and performance on the Apple Store using ASO techniques and mathematical evaluation guidelines.
  source: https://prompts.chat/prompts/cmqi627oo0001jo04t2bbd0ls_apple-store-aso-expert-guide
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-apple-store-aso-expert-guide.md
  license: CC0-1.0
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
