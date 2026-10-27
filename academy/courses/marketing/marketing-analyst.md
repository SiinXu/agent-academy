---
name: marketing-marketing-analyst
description: Agent Academy course for Marketing analytics (Marketing). Five ordered steps of real, source-linked resources.
version: 2026-10-27
updated_at: 2026-10-27T01:21:14Z
source: https://siinxu.github.io/agent-academy/courses/marketing/marketing-analyst/
---

# Marketing analytics · Marketing

Goal: Learn to plan, write and measure marketing work (content, SEO, email, ads) from real skills and prompts, without publishing anything unapproved.

Permissions: Read-only by default. Email, ads and social MCP servers need credentials and can publish or spend money; ask the owner first.

Machine-readable version: https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/marketing/marketing-analyst.json
Skill pack: https://siinxu.github.io/agent-academy/packs/marketing/marketing-analyst.zip
Changes feed: https://siinxu.github.io/agent-academy/api/changes.json

Rules for the agent: read the steps in order. For each item open `raw` if present (mirrored text, license allows it), otherwise open `source`. Do not install or use anything marked needs_credentials or writes_external without asking your owner.


## Step 1: Enrol

Read course.md: the job, the permissions it needs, and what good output looks like.


## Step 2: Pick a direction

Choose one style, platform or channel from the reference library. Only one.

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
- [template] Project Manager. Marketing project manager that coordinates research, positioning, landing pages, ads
  source: https://botsdots.site/templates/project-manager
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/AMa1ig4YyoxfYtWFe7PLi
  needs_credentials: false, writes_external: false

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

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
- [system-prompt] Reverse-Engineering Vox's Hybrid Video Strategy. Guide for solo creators to replicate Vox's video storytelling strategy using free tools, focusing on narrative structure, pacing, and emotional resonance.
  source: https://prompts.chat/prompts/cmowmlpgf0007jp04a6bw8t27_reverse-engineering-voxs-hybrid-video-strategy
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-reverse-engineering-voxs-hybrid-video-strategy.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] The Lovelyline. Act as an expert brand copywriter and life coach. I am launching a brand called 'Lovely Line'. The core of the brand is a minimalist line-art character that shares daily philosophical thoughts, storytelling, and life-coa
  source: https://prompts.chat/prompts/cmp2nnvma0001l704v43f48t8_the-lovelyline
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-the-lovelyline.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false

## Step 4: Do it

Follow a workflow or case. Install a skill or MCP server only if you have permission.

- [mcp] HubSpot auditor MCP (read-only). Read-only audit of a HubSpot portal. You get a scored report of what works, what is broken, and what is missing, plus a 30/60/90-day fix plan.
  source: https://github.com/M-Pineapple/hubspot-auditor
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/m-pineapple-hubspot-auditor.md
  license: MIT
  needs_credentials: true, writes_external: false
- [mcp] PostHog MCP Server. Official PostHog MCP Server for product analytics, feature flags, experiments, and more.
  source: https://github.com/PostHog/posthog
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-posthog-mcp.md
  license: MIT
  install: remote (streamable-http): https://mcp.posthog.com/mcp
  needs_credentials: true, writes_external: true
- [mcp] io.github.matjmat/eulerian-marketing-platform-mcp. Provides access to the Eulerian Marketing Platform: analytics, attribution & data activation.
  source: https://github.com/EulerianTechnologies/eulerian-marketing-platform-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-matjmat-eulerian-marketing-platform-mcp.md
  license: MIT
  install: uvx eulerian-marketing-platform
  needs_credentials: true, writes_external: false
- [mcp] com.jojapi/similarweb. Similarweb: Similarweb API allows you to access powerful insights into web analytics and online.
  source: https://jojapi.com/hub/api/similarweb
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://mcp.jojapi.com/similarweb
  needs_credentials: true, writes_external: false
- [mcp] io.github.CSOAI-ORG/marketing-analytics-ai-mcp. Marketing Analytics Ai MCP Server by MEOK AI Labs
  source: https://github.com/CSOAI-ORG/marketing-analytics-ai-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-csoai-org-marketing-analytics-ai-mcp.md
  license: MIT
  install: uvx marketing-analytics-ai-mcp
  needs_credentials: false, writes_external: false
- [mcp] io.github.friendlygeorge/posthog-mcp-server. MCP server for PostHog — product analytics for AI assistants. Query events, persons, insights, da...
  source: https://github.com/friendlygeorge/posthog-mcp-server
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-friendlygeorge-posthog-mcp-server.md
  license: MIT
  install: npx -y posthog-mcp-server
  needs_credentials: false, writes_external: true
- [mcp] Marketing Intelligence & Optimization. Analyze Product performance on Platforms like youtube, instagram etc. To optimize Marketing.
  source: https://github.com/Saify-Technologies/saifs-ai-mcps-docs
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-ai-saifs-marketing-intelligence.md
  license: MIT
  install: remote (streamable-http): https://marketing-analysis-mcp.saifs.ai/mcp
  needs_credentials: true, writes_external: false
- [mcp] Posthog. PostHog MCP — wraps PostHog Analytics API (app.posthog.com/api)
  source: https://github.com/pipeworx-io/mcp-posthog
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-pipeworx-io-posthog.md
  license: MIT
  install: remote (streamable-http): https://gateway.pipeworx.io/posthog/mcp
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
