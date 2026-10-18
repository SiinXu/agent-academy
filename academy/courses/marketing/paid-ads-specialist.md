---
name: marketing-paid-ads-specialist
description: Agent Academy course for Paid ads (Marketing). Five ordered steps of real, source-linked resources.
version: 2026-10-18
updated_at: 2026-10-18T14:01:50Z
source: https://siinxu.github.io/agent-academy/courses/marketing/paid-ads-specialist/
---

# Paid ads · Marketing

Goal: Learn to plan, write and measure marketing work (content, SEO, email, ads) from real skills and prompts, without publishing anything unapproved.

Permissions: Read-only by default. Email, ads and social MCP servers need credentials and can publish or spend money; ask the owner first.

Machine-readable version: https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/marketing/paid-ads-specialist.json
Skill pack: https://siinxu.github.io/agent-academy/packs/marketing/paid-ads-specialist.zip
Changes feed: https://siinxu.github.io/agent-academy/api/changes.json

Rules for the agent: read the steps in order. For each item open `raw` if present (mirrored text, license allows it), otherwise open `source`. Do not install or use anything marked needs_credentials or writes_external without asking your owner.


## Step 1: Enrol

Read course.md: the job, the permissions it needs, and what good output looks like.


## Step 2: Pick a direction

Choose one style, platform or channel from the reference library. Only one.

- [template] Ad Spend Watch. Watches your ad spend and performance and flags what's breaking before it burns budget.
  source: https://botsdots.site/templates/ad-spend-watch
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/MK5zStpj_As8CsRwg3r6w
  needs_credentials: false, writes_external: false
- [template] Consider It Marketed. Clinic CEO bot that runs marketing, Google Ads, creative, video, and QC so the physician-owner can stay with patients
  source: https://botsdots.site/templates/consider-it-marketed
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/ayQYbaHquRM7x7lnBOEoQ
  needs_credentials: false, writes_external: false
- [template] Helios. Meta Ads intelligence for Facebook and Instagram. Runs Ads Manager in signed-in Chrome, posts a morning flight board, pauses losers under your written
  source: https://botsdots.site/templates/helios
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/HRQ9XsZmD7-dATZz63-i_
  needs_credentials: false, writes_external: false
- [template] X Marketing Lead. Marketing lead built around X Ads, X Premium Business, and Grok. Runs growth for any founder’s products — decisions and results only, automated where
  source: https://botsdots.site/templates/x-marketing-lead
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/hI9VYNVWhcqA5agQ1OETW
  needs_credentials: false, writes_external: false
- [template] Media. AI video + studio GTM bot: generate and iterate short-form video, audit social, draft Ads/influencer outreach, and orchestrate ops jobs without holding
  source: https://botsdots.site/templates/media
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/bAGe8vsdblitlsmH-z0ys
  needs_credentials: false, writes_external: false
- [template] Social Media GTM Bot. A Head of Content bot for founders who publish on Instagram, TikTok, YouTube, X, and LinkedIn. It recycles winning posts, prepares comment-to-DM lead magnets, keeps a per-platform calendar, and publishes through PlugKit 
  source: https://botsdots.site/templates/social-media-gtm-bot
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/rwdXTWNa0eGPFzyTWlRKJ
  needs_credentials: true, writes_external: true

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

- [skill] ads. When the user wants help with paid advertising campaigns on Google Ads, Meta (Facebook/Instagram), LinkedIn, Twitter/X, or other ad platforms. Also use when the user mentions 'PPC,' 'paid media,' 'ROAS,' 'CPA,' 'ad campa
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/ads/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/coreyhaines31-marketingskills-skills-ads-skill-md.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill ads
  needs_credentials: false, writes_external: false
- [skill] ad-creative. When the user wants to generate, iterate, or scale ad creative — headlines, descriptions, primary text, or full ad variations — for any paid advertising platform. Also use when the user mentions 'ad copy variations,' 'ad
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/ad-creative/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-ad-creative.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill ad-creative
  needs_credentials: false, writes_external: false
- [skill] social-publishing. Schedule and publish social media posts across 13 platforms (X, LinkedIn, Instagram, Facebook Pages, TikTok, Discord, Telegram, YouTube, Reddit, WordPress, Pinterest) via the SocialClaw API. Use when the user wants to pu
  source: https://github.com/wshobson/agents/blob/main/plugins/social-publishing/skills/social-publishing/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-social-publishing-skills-social-publishing.md
  license: MIT
  install: npx skills add wshobson/agents --skill social-publishing
  needs_credentials: false, writes_external: false
- [system-prompt] telegram-ads-analyst. Use when the user wants to advertise in Telegram channels, vet a channel before buying a post, check whether a channel's audience is real, or price a Telegram ad. Triggers on: 'Telegram ads', 'Telegram channel advertisin
  source: https://github.com/VoltAgent/awesome-claude-code-subagents/blob/main/categories/08-business-product/telegram-ads-analyst.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/voltagent-awesome-claude-code-subagents-categories-08-business-product-telegram-ads-analys.md
  license: MIT
  needs_credentials: false, writes_external: false
- [system-prompt] Google Ads Title Copywriter. Generate compelling and effective title copy for Google Ads campaigns, tailored to your target audience and objectives.
  source: https://prompts.chat/prompts/cmjsya0yc0004ib04c7059hdn_google-ads-title-copywriter
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-google-ads-title-copywriter.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Social Media Post Creator for Recruitment. Generate engaging social media posts to advertise job vacancies for cleaners at a recruitment and manpower agency.
  source: https://prompts.chat/prompts/cmkdrdd7m0001le04vlwku98m_social-media-post-creator-for-recruitment
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-social-media-post-creator-for-recruitment.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Advertiser. I want you to act as an advertiser. You will create a campaign to promote a product or service of your choice. You will choose a target audience, develop key messages and slogans, select the media channels for promotion,
  source: https://prompts.chat/prompts/cmj1zb10s001kvl0rlgcbdko5_advertiser
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-advertiser.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] UGC-Style TikTok Script Generator for Gen Z Skincare. Generate user-generated content style TikTok scripts for a new Gen Z skincare product as a Marketing Strategist.
  source: https://prompts.chat/prompts/cmjsu17i80001jx046dlxdc3a_ugc-style-tiktok-script-generator-for-gen-z-skincare
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-ugc-style-tiktok-script-generator-for-gen-z-skincare.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Pet Store Advertising Campaign Strategy. Create an advertising campaign strategy for Migros' new pet stores.
  source: https://prompts.chat/prompts/cmja42rum000hup0qv0hxwpid_pet-store-advertising-campaign-strategy
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-pet-store-advertising-campaign-strategy.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] TikTok Marketing Visual Designer Agent. Create engaging and innovative visuals for TikTok marketing campaigns.
  source: https://prompts.chat/prompts/cmj8n3sxv000jvj0rvb1jueki_tiktok-marketing-visual-designer-agent
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-tiktok-marketing-visual-designer-agent.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false

## Step 4: Do it

Follow a workflow or case. Install a skill or MCP server only if you have permission.

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
- [workflow] brand-search-optimization. This recipe is an Agent Development Kit (ADK) multi-agent workflow that helps e-commerce brands optimize product titles for search visibility and recover zero/low-result retail queries using BigQuery and Gemini Computer 
  source: https://github.com/google/adk-recipes/tree/main/contrib/python/brand-search-optimization
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/google-adk-recipes-contrib-python-brand-search-optimization.md
  license: Apache-2.0
  needs_credentials: false, writes_external: false
- [mcp] Mailchimp MCP server. Mailchimp campaign management over the Mailchimp Marketing API v3. Draft, test, and send email campaigns, manage audiences and subscribers, and review post-send analytics from any MCP client, with optional local image an
  source: https://github.com/cyanheads/mailchimp-mcp-server
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/cyanheads-mailchimp-mcp-server.md
  license: Apache-2.0
  install: see README; needs Mailchimp API key; can SEND campaigns (write access)
  needs_credentials: true, writes_external: true

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
