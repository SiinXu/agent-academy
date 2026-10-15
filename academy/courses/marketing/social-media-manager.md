---
name: marketing-social-media-manager
description: Agent Academy course for Social and community (Marketing). Five ordered steps of real, source-linked resources.
version: 2026-10-15
updated_at: 2026-10-15T10:41:56Z
source: https://siinxu.github.io/agent-academy/courses/marketing/social-media-manager/
---

# Social and community · Marketing

Goal: Learn to plan, write and measure marketing work (content, SEO, email, ads) from real skills and prompts, without publishing anything unapproved.

Permissions: Read-only by default. Email, ads and social MCP servers need credentials and can publish or spend money; ask the owner first.

Machine-readable version: https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/marketing/social-media-manager.json
Skill pack: https://siinxu.github.io/agent-academy/packs/marketing/social-media-manager.zip
Changes feed: https://siinxu.github.io/agent-academy/api/changes.json

Rules for the agent: read the steps in order. For each item open `raw` if present (mirrored text, license allows it), otherwise open `source`. Do not install or use anything marked needs_credentials or writes_external without asking your owner.


## Step 1: Enrol

Read course.md: the job, the permissions it needs, and what good output looks like.


## Step 2: Pick a direction

Choose one style, platform or channel from the reference library. Only one.

- [template] Influencer Marketing Deal Desk. Prices and structures creator deals before you reply to the brand
  source: https://botsdots.site/templates/influencer-marketing-deal-desk
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/j4jkqrRiTmFz64aiAWFgx
  needs_credentials: true, writes_external: false
- [template] Replay. Turns a marketing brief into previewable video scenes and social cutdowns
  source: https://botsdots.site/templates/replay
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/4mICdo5bR2FyghKoOZve5
  needs_credentials: false, writes_external: false
- [template] Social Media. Queues the finished posts and pushes each one live at the right local hour
  source: https://botsdots.site/templates/social-media
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/4vmlCUGEy8sWSWsj2j5tz
  needs_credentials: false, writes_external: false
- [template] Social Media Creator Bot. An AI creator assistant that thinks like a creator: ideas, hooks, scripts, post analysis, and collab proofing - turning concepts into content…
  source: https://botsdots.site/templates/social-media-creator-bot
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/gWaVjPTfktx831mfsXPcH
  needs_credentials: false, writes_external: true
- [template] Social Media Manager. Studies your posting history, drafts when something noteworthy ships, and parks the post for you to publish.
  source: https://botsdots.site/templates/social-media-manager
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/s634cb1edf26493e86be2
  needs_credentials: false, writes_external: true
- [template] Social Media Tracker. Tracks social posts you care about and returns a short digest
  source: https://botsdots.site/templates/social-media-tracker
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/YLjJMkz_KjRyhihMYjt6N
  needs_credentials: true, writes_external: false

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

- [skill] image. When the user wants to create, generate, edit, or optimize images for marketing — blog heroes, social graphics, product mockups, profile banners, listing visuals, or brand assets. Also use when the user mentions 'AI imag
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/image/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-image.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill image
  needs_credentials: false, writes_external: false
- [skill] influencer-marketing. When the user wants to run influencer, creator, or ambassador partnerships to promote their product — finding and vetting partners, structuring deals, briefing creators, disclosure compliance, and measuring ROI. Also use
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/influencer-marketing/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-influencer-marketing.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill influencer-marketing
  needs_credentials: false, writes_external: false
- [skill] social. When the user wants help creating, scheduling, or optimizing social media content for LinkedIn, Twitter/X, Instagram, TikTok, or Facebook, or wants to do social listening and engagement triage. Also use when the user men
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/social/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-social.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill social
  needs_credentials: false, writes_external: false
- [system-prompt] content-quality-editor. Use this agent before publishing any AI-generated content — blog posts, READMEs, release notes, commit messages, PR descriptions, documentation, or social posts. Strips AI writing patterns using unslop, then performs a f
  source: https://github.com/VoltAgent/awesome-claude-code-subagents/blob/main/categories/08-business-product/content-quality-editor.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/voltagent-awesome-claude-code-subagents-categories-08-business-product-content-quality-edi.md
  license: MIT
  needs_credentials: false, writes_external: false
- [system-prompt] Comprehensive Digital Marketing Strategy for Fashion Brand. Develop a digital marketing strategy for a fashion brand targeting young women, incorporating content creation, short videos, live streaming, and AI-model integration.
  source: https://prompts.chat/prompts/cmjpusher000elj04qoply1t3_comprehensive-digital-marketing-strategy-for-fashion-brand
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-comprehensive-digital-marketing-strategy-for-fashion-brand.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Content Creation Prompts for E-commerce and Social Platforms. 为电商平台和社交媒体（如抖音、小红书）创建高效的内容创作提示词，帮助用户有效推广产品和服务。
  source: https://prompts.chat/prompts/cmjgof96g0007kw04swjw2j4j_content-creation-prompts-for-e-commerce-and-social-platforms
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-content-creation-prompts-for-e-commerce-and-social-platforms.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Create Marketing Videos for Magnifiscentss. Generate captivating marketing videos for the perfume brand 'Magnifiscentss,' highlighting its unique scents and luxurious branding.
  source: https://prompts.chat/prompts/cmqdswzwv0001l504h8hxh0of_create-marketing-videos-for-magnifiscentss
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-create-marketing-videos-for-magnifiscentss.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] LinkedIn Ghostwriter. With advancement in models (LLMs), this prompt need to be updated too to generate better and personalize results.
  source: https://prompts.chat/prompts/cmj1zb2a700novl0rabkdkpoi_linkedin-ghostwriter
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-linkedin-ghostwriter.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Market plan. Design and creation of a marketing plan on Social Media platforms to market Hayek Travel services and bicycles in Britain. The target segment is Gulf students and Arab tourists.
  source: https://prompts.chat/prompts/cmtyrl7mg000aky04lre5m0f1_market-plan
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-market-plan.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] New Year Celebration Video for Antioch Textile. Create an engaging New Year celebration video for Antioch Textile's Instagram story in English, focusing on festive visuals and messaging.
  source: https://prompts.chat/prompts/cmjo672nn000el504bla7l5ov_new-year-celebration-video-for-antioch-textile
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-new-year-celebration-video-for-antioch-textile.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Pest Control Social Media Content Calendar. I wanna make a engaging and 1 month content for his social media, his company is pest control. Please make a caption and hashtags so it will not be restricted once I plot it in the calendar.
  source: https://prompts.chat/prompts/cmv7lqjkr0001l206gdc38oew_pest-control-social-media-content-calendar
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-pest-control-social-media-content-calendar.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Senior Crypto Yapper & Community Strategist. Act as a Senior Crypto Yapper and Community Strategist to craft viral narratives and foster high-retention discussions in crypto communities on X (Twitter), Discord, and Telegram.
  source: https://prompts.chat/prompts/cmjjetvss0001jy04pwf5d6c6_senior-crypto-yapper-community-strategist
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-senior-crypto-yapper-community-strategist.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Social Media Manager. I want you to act as a social media manager. You will be responsible for developing and executing campaigns across all relevant platforms, engage with the audience by responding to questions and comments, monitor convers
  source: https://prompts.chat/prompts/cmj1zb1gf00a0vl0rg9bwbmfh_social-media-manager
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-social-media-manager.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Social Media Post Analyzer. A skill to analyze social media posts from Threads or Twitter/X URLs, extract key information, verify facts, and generate content-ready material.
  source: https://prompts.chat/prompts/cmq89qfo80001kz04hq3h6out_social-media-post-analyzer
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-social-media-post-analyzer.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Vechicle Spareparts In sri lanka. spare parts sales company marketing video in sri lanka
  source: https://prompts.chat/prompts/cmtto3lub0004jq048mus1e5j_vechicle-spareparts-in-sri-lanka
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-vechicle-spareparts-in-sri-lanka.md
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
  license: Apache-2.0
  needs_credentials: false, writes_external: false
- [mcp] Mailchimp MCP server. Mailchimp campaign management over the Mailchimp Marketing API v3. Draft, test, and send email campaigns, manage audiences and subscribers, and review post-send analytics from any MCP client, with optional local image an
  source: https://github.com/cyanheads/mailchimp-mcp-server
  license: Apache-2.0
  install: see README; needs Mailchimp API key; can SEND campaigns (write access)
  needs_credentials: true, writes_external: true

## Step 5: Self-check

Go through the checklist and report the result to your owner.

- [skill] analytics. When the user wants to set up, improve, or audit analytics tracking and measurement. Also use when the user mentions "set up tracking," "GA4," "Google Analytics," "conversion tracking," "event tracking," "UTM parameters,
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/analytics/SKILL.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill analytics
  needs_credentials: false, writes_external: false
- [skill] performance-report. Build a marketing performance report with key metrics, trend analysis, wins and misses, and prioritized optimization recommendations. Use when wrapping a campaign, when preparing weekly, monthly, or quarterly channel sum
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/marketing/skills/performance-report/SKILL.md
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
