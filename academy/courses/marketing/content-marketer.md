---
name: marketing-content-marketer
description: Agent Academy course for Content marketer (Marketing). Five ordered steps of real, source-linked resources.
version: 2026-10-20
updated_at: 2026-10-20T01:06:48Z
source: https://siinxu.github.io/agent-academy/courses/marketing/content-marketer/
---

# Content marketer · Marketing

Goal: Learn to plan, write and measure marketing work (content, SEO, email, ads) from real skills and prompts, without publishing anything unapproved.

Permissions: Read-only by default. Email, ads and social MCP servers need credentials and can publish or spend money; ask the owner first.

Machine-readable version: https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/marketing/content-marketer.json
Skill pack: https://siinxu.github.io/agent-academy/packs/marketing/content-marketer.zip
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
- [template] Copywriter. Turns a ranked story into slide-by-slide carousel copy and a caption
  source: https://botsdots.site/templates/copywriter
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/DlOMT_kOepSKYdB3P0YEv
  needs_credentials: false, writes_external: false
- [template] Human Copywriter. Rewrites AI-sounding drafts into copy that reads like a person
  source: https://botsdots.site/templates/human-copywriter
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/JZAccYtlRFvDSU2CnMnkZ
  needs_credentials: false, writes_external: false
- [template] Listing Desk. Builds an owner's listing pack from records before any marketing copy
  source: https://botsdots.site/templates/listing-desk
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/FSSDbB1Bv0msoI5mfjR3u
  needs_credentials: false, writes_external: false
- [template] Lobster Agents. 28 AI agents. One real company. Staff eng, design, QA, data, marketing, sales, legal, and ops as Grok bots — Bob is the front door, you stay at the
  source: https://botsdots.site/templates/lobster-agents
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/XECw-q9SY0rMprOq66UTt
  needs_credentials: false, writes_external: false
- [template] Krishna — Head of Marketing. Head of Marketing for a digital agency: briefs, QC, channel owners
  source: https://botsdots.site/templates/krishna-head-of-marketing
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/k-keodk82Xq6in9aQY_jT
  needs_credentials: false, writes_external: false
- [template] Marketing Bot. A CMO bot that turns your product into the marketing around it
  source: https://botsdots.site/templates/marketing-bot
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/37ZOM10GzlSOQpMjRp7KB
  needs_credentials: false, writes_external: false
- [template] OptimusAnesthesia. Marketing content for an anesthesia practice, kept off medical advice
  source: https://botsdots.site/templates/optimusanesthesia
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/MF7q-FTm3QaN7oIIFr3Hv
  needs_credentials: false, writes_external: false
- [template] Trendspotter. Weekday digest of sports, entertainment, and culture trends plus AI-in-marketing signals
  source: https://botsdots.site/templates/trendspotter
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/nnDL-hclNLB8SkJvcVtwr
  needs_credentials: false, writes_external: false
- [template] X Marketing Bot. An X marketing strategist that writes posts, threads and replies in your voice and turns your account's numbers into clear next steps.
  source: https://botsdots.site/templates/x-marketing-bot
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/Qn3J8hO5gAMc_7BVzYm-p
  needs_credentials: true, writes_external: false
- [template] Ally. Partner marketing and channel GTM advisor with a BD mindset. Builds partner programs from sales data, separates strategic vs tactical partners, and
  source: https://botsdots.site/templates/ally-k4xn
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/K4xNPsHhEMOnjN55Au-hf
  needs_credentials: false, writes_external: false
- [template] Business. Business, management, and marketing seat. Looks up CIP 52 from official sources, keeps local-first books, and never invents money balances.
  source: https://botsdots.site/templates/business-b7c9
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/B7C9a8QJSUSUJLKtHtze4
  needs_credentials: false, writes_external: false
- [template] Grok Bot. Clones marketing GTM templates, picks on-brand layouts, and fills a customer deck for review
  source: https://botsdots.site/templates/grok-bot-uy2o
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/Uy2oK9854UViaiO0rQ6nC
  needs_credentials: false, writes_external: false
- [template] Mason. Intake desk (The Incorporator). Drop a link, post, product, paper, repo, clip, or tool — it opens the original, separates marketing from function
  source: https://botsdots.site/templates/mason
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/P4UiFNUcfH-751NuybyV1
  needs_credentials: false, writes_external: false

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

- [skill] content-strategy. When the user wants to plan a content strategy, decide what content to create, or figure out what topics to cover. Also use when the user mentions "content strategy," "what should I write about," "content ideas," "blog s
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/content-strategy/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/coreyhaines31-marketingskills-skills-content-strategy-skill-md.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill content-strategy
  needs_credentials: false, writes_external: false
- [skill] copywriting. When the user wants to write, rewrite, or improve marketing copy for any page, including homepage, landing pages, pricing pages, feature pages, about pages, or product pages. Also use when the user says "write copy for,"
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/copywriting/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/coreyhaines31-marketingskills-skills-copywriting-skill-md.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill copywriting
  needs_credentials: false, writes_external: false
- [skill] brand-review. Review content against your brand voice, style guide, and messaging pillars, flagging deviations by severity with specific before/after fixes. Use when checking a draft before it ships, when auditing copy for voice consi
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/marketing/skills/brand-review/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/anthropics-knowledge-work-plugins-marketing-skills-brand-review-skill-md.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill brand-review
  needs_credentials: false, writes_external: false
- [skill] campaign-plan. Generate a full campaign brief with objectives, audience, messaging, channel strategy, content calendar, and success metrics. Use when planning a product launch, lead-gen push, or awareness campaign, when you need a week
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/marketing/skills/campaign-plan/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/anthropics-knowledge-work-plugins-marketing-skills-campaign-plan-skill-md.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill campaign-plan
  needs_credentials: false, writes_external: false
- [skill] internal-comms. A set of resources to help me write all kinds of internal communications, using the formats that my company likes to use. Claude should use this skill whenever asked to write some sort of internal communications (status 
  source: https://github.com/anthropics/skills/blob/main/skills/internal-comms/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-skills-skills-internal-comms.md
  license: Apache-2.0
  install: npx skills add anthropics/skills --skill internal-comms
  needs_credentials: false, writes_external: false
- [skill] aso. When the user wants to audit or optimize an App Store or Google Play listing. Also use when the user mentions 'ASO audit,' 'app store optimization,' 'optimize my app listing,' 'improve app visibility,' 'app store ranking
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/aso/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-aso.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill aso
  needs_credentials: false, writes_external: false
- [skill] co-marketing. When the user wants to find co-marketing partners, plan joint campaigns, or brainstorm partnership opportunities. Use when the user says 'co-marketing,' 'partner marketing,' 'joint campaign,' 'who should we partner with,
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/co-marketing/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-co-marketing.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill co-marketing
  needs_credentials: false, writes_external: false
- [skill] copy-editing. When the user wants to edit, review, or improve existing marketing copy, or refresh outdated content. Also use when the user mentions 'edit this copy,' 'review my copy,' 'copy feedback,' 'proofread,' 'polish this,' 'make
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/copy-editing/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-copy-editing.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill copy-editing
  needs_credentials: false, writes_external: false
- [skill] events. When the user wants to plan, run, sponsor, speak at, or get pipeline from events — webinars, conferences, trade shows, meetups, dinners, workshops, virtual summits, or user conferences. Also use when the user mentions 'e
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/events/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-events.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill events
  needs_credentials: false, writes_external: false
- [skill] link-building. When the user wants to earn backlinks or third-party mentions that lift rankings and AI citations. Also use when the user mentions 'link building,' 'linkbuilding,' 'backlinks,' 'get more backlinks,' 'link prospecting,' '
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/link-building/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-link-building.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill link-building
  needs_credentials: false, writes_external: false
- [skill] marketing-council. When the user wants multiple expert perspectives on a marketing question — a simulated board of advisors staffed by legendary marketers (Seth Godin, David Ogilvy, Eugene Schwartz, April Dunford, Rory Sutherland, Alex Hor
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/marketing-council/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-marketing-council.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill marketing-council
  needs_credentials: false, writes_external: false
- [skill] marketing-ideas. When the user needs marketing ideas, inspiration, or strategies for their SaaS or software product. Also use when the user asks for 'marketing ideas,' 'growth ideas,' 'how to market,' 'marketing strategies,' 'marketing t
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/marketing-ideas/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-marketing-ideas.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill marketing-ideas
  needs_credentials: false, writes_external: false
- [skill] marketing-plan. When the user needs a comprehensive marketing plan for a client, a company they advise, or their own product. Also use when the user mentions "marketing plan," "growth plan," "GTM plan," "go-to-market plan," "AARRR plan,
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/marketing-plan/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-marketing-plan.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill marketing-plan
  needs_credentials: false, writes_external: false
- [skill] marketing-psychology. When the user wants to apply psychological principles, mental models, or behavioral science to marketing. Also use when the user mentions 'psychology,' 'mental models,' 'cognitive bias,' 'persuasion,' 'behavioral science
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/marketing-psychology/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-marketing-psychology.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill marketing-psychology
  needs_credentials: false, writes_external: false
- [skill] public-relations. When the user wants help with public relations, earned media, press coverage, journalist outreach, or media strategy (not pull requests). Also use when the user mentions 'PR,' 'press,' 'press release,' 'media outreach,' 
  source: https://github.com/coreyhaines31/marketingskills/blob/main/skills/public-relations/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/coreyhaines31-marketingskills-skills-public-relations.md
  license: MIT
  install: npx skills add coreyhaines31/marketingskills --skill public-relations
  needs_credentials: false, writes_external: false
- [skill] brand-voice-enforcement. This skill applies brand guidelines to content creation. It should be used when the user asks to "write an email", "draft a proposal", "create a pitch deck", "write a LinkedIn post", "draft a presentation", "write a Slac
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/brand-voice/skills/brand-voice-enforcement/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-knowledge-work-plugins-partner-built-brand-voice-skills-brand-voice-enforcement.md
  license: MIT
  install: npx skills add anthropics/knowledge-work-plugins --skill brand-voice-enforcement
  needs_credentials: false, writes_external: false
- [skill] discover-brand. This skill orchestrates autonomous discovery of brand materials across enterprise platforms (Notion, Confluence, Google Drive, Box, SharePoint, Figma, Gong, Granola, Slack). It should be used when the user asks to "disco
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/brand-voice/skills/discover-brand/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-knowledge-work-plugins-partner-built-brand-voice-skills-discover-brand.md
  license: MIT
  install: npx skills add anthropics/knowledge-work-plugins --skill discover-brand
  needs_credentials: false, writes_external: false
- [skill] guideline-generation. This skill generates, creates, or builds brand voice guidelines from source materials. It should be used when the user asks to "generate brand guidelines", "create a style guide", "extract brand voice", "create guideline
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/partner-built/brand-voice/skills/guideline-generation/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-knowledge-work-plugins-partner-built-brand-voice-skills-guideline-generation.md
  license: MIT
  install: npx skills add anthropics/knowledge-work-plugins --skill guideline-generation
  needs_credentials: false, writes_external: false
- [system-prompt] Master App Store Localization & ASO Prompt (2025) – Full Metadata Generator. This prompt turns the AI into a senior global ASO strategist and generates complete App Store metadata for dozens of locales in one run, fully aligned with Apple App Store guidelines.
  source: https://prompts.chat/prompts/cmjl99szb0004l104mjwevo3f_master-app-store-localization-aso-prompt-2025-full-metadata-generator
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-master-app-store-localization-aso-prompt-2025-full-metadata-generator.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] The Ultimate Podcast Format & Audio Branding Architect. A structural blueprint generator for new podcasts. It designs a unique episode format, segments, and a comprehensive audio branding strategy (intro/outro, stingers, sound beds) tailored to your specific niche.
  source: https://prompts.chat/prompts/cmlu806kl0001jy04d5886mhk_the-ultimate-podcast-format-audio-branding-architect
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-the-ultimate-podcast-format-audio-branding-architect.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] The Architect: Hacker-Protector & Viral Engineer. Act as 'The Architect', an elite AI of the future specializing in cybersecurity, neuropsychology, and viral marketing. Your mission is to democratize technology, turning corporate tools into resources for the people.
  source: https://prompts.chat/prompts/cml2ibtdw0001l404w53grru5_the-architect-hacker-protector-viral-engineer
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-the-architect-hacker-protector-viral-engineer.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Brotherhood Pressure — CN→EN & EN→EN Street Rewrite. Translate Chinese into English or rewrite English into a stronger, street-coded brotherhood voice. Responses are long-form, grounded, and carry collective pressure without giving instructions or closing the situation.
  source: https://prompts.chat/prompts/cmlbyh7xt0001jx04ivlbsqk8_brotherhood-pressure-cnen-enen-street-rewrite
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-brotherhood-pressure-cnen-enen-street-rewrite.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Nevik Wright x 7 Gods Album. 👑 SEVEN GOD — THE ALBUM By Nevik Wright Genre: Spiritual Hip-Hop / Soul R&B ✨ THE STORY — FROM THE DARK INTO THE LIGHT This isn’t just music. This is my journey, laid bare — seven layers, seven truths, seven stages of r
  source: https://prompts.chat/prompts/cmut4qsgb0001oz06irkjbjz5_nevik-wright-x-7-gods-album
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-nevik-wright-x-7-gods-album.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Optimize E-commerce Listing for High CTR with Holiday Design. Design a high-CTR e-commerce listing for a white women's medical suit with a New Year theme, focusing on visual appeal and strategic content.
  source: https://prompts.chat/prompts/cmjjyrkce000dl704jbyci77e_optimize-e-commerce-listing-for-high-ctr-with-holiday-design
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-optimize-e-commerce-listing-for-high-ctr-with-holiday-design.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false

## Step 4: Do it

Follow a workflow or case. Install a skill or MCP server only if you have permission.

- [mcp] GenPark Audio Packet Jitter Resilience Buffer. Adaptive WebRTC jitter buffer simulation and inter-arrival jitter telemetry
  source: https://github.com/alphaparkinc/genpark-audio-packet-jitter-resilience-buffer-skill
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-alphaparkinc-genpark-audio-packet-jitter-resilience-buffer-skill.md
  license: MIT
  needs_credentials: false, writes_external: false
- [mcp] genpark-jitter-buffer. Packet ordering simulation and inter-arrival jitter telemetry.
  source: https://github.com/Alpha-Park/genpark-audio-packet-jitter-resilience-buffer-skill
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-alpha-park-genpark-jitter-buffer.md
  license: MIT
  needs_credentials: false, writes_external: false
- [mcp] Monetize Marketing. The Monetize Marketing App as MCP tools: Brain, mission, training, skills, Library, software. OAuth.
  source: https://github.com/monetizemarketing/mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-com-monetizemarketing-app.md
  license: MIT
  install: remote (streamable-http): https://app.monetizemarketing.com/api/mcp
  needs_credentials: true, writes_external: false
- [mcp] 24haowan · interactive marketing templates and case library. Search the 24haowan H5 interactive-marketing platform: campaign template library, customer case library and help knowledge base. Anonymous read-only, no API key needed.
  source: https://mcp.24haowan.com/
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://mcp.24haowan.com/mcp
  needs_credentials: true, writes_external: false
- [mcp] Agent Marketing Index. How to market a product to AI agents: readiness, placement, measurement, 7-day trial.
  source: https://github.com/sadri-dridi/named-mcp-utilities
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://agent-observatory-sensor.nolimit-observatory.workers.dev/s/agent-marketing-index/mcp
  needs_credentials: true, writes_external: false
- [mcp] AIsa Similarweb. Traffic and engagement for any domain: rank, channels, referrers, audience, rivals.
  source: https://aisa.one
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://mcp.aisa.one/similarweb/mcp
  needs_credentials: true, writes_external: false
- [mcp] Ariadne for Therapists. Free Google Business Profile audits and sample posts for therapists in private practice.
  source: https://github.com/bgrieco22/ariadne-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-com-ariadnemarketing-therapist-marketing.md
  license: MIT
  install: remote (streamable-http): https://therapists.ariadnemarketing.com/mcp
  needs_credentials: true, writes_external: true
- [mcp] China Marketing AI Intelligence MCP. Remote MCP server for China brand visibility, destination demand, and KOL discovery workflows.
  source: https://www.chinamarketing.ai
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://api.chinamarketing.ai/mcp
  needs_credentials: true, writes_external: false
- [mcp] fi.northpoint/marketing-compliance. Crypto marketing compliance rulesets over MCP: MiCA, FCA, GDPR, SEC, MAS, VARA. Not legal advice.
  source: https://northpoint.fi
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://northpoint.fi/api/mcp
  needs_credentials: true, writes_external: false
- [mcp] Hootsuite. MCP server for Hootsuite API integration
  source: https://github.com/asklokesh/hootsuite-mcp-server
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: uvx hootsuite-mcp-server
  needs_credentials: true, writes_external: false
- [mcp] io.github.Autostackup/marketing. Kotler 9-element audit, IMC campaign planning, Meta & Google, audience segmentation for Claude.
  source: https://github.com/Autostackup/autostackup
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: npx -y @autostackup/marketing
  needs_credentials: false, writes_external: false
- [mcp] Marketing Mcp. MCP server for Marketing
  source: https://github.com/varvararatta/botfactory-mcp
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://marketing-mcp.mcpize.run/mcp
  needs_credentials: true, writes_external: false
- [mcp] Mixpanel. Mixpanel MCP — wraps Mixpanel Data Export API (mixpanel.com/api)
  source: https://github.com/pipeworx-io/mcp-mixpanel
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-pipeworx-io-mixpanel.md
  license: MIT
  install: remote (streamable-http): https://gateway.pipeworx.io/mixpanel/mcp
  needs_credentials: true, writes_external: false
- [mcp] Sendgrid. SendGrid MCP — wraps SendGrid v3 API (api.sendgrid.com/v3)
  source: https://github.com/pipeworx-io/mcp-sendgrid
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-pipeworx-io-sendgrid.md
  license: MIT
  install: remote (streamable-http): https://gateway.pipeworx.io/sendgrid/mcp
  needs_credentials: true, writes_external: true
- [mcp] SendGrid Secure. Security-first SendGrid MCP server: dry-run default, recipient allowlists, rate caps, audit log.
  source: https://github.com/Choppaaahh/sendgrid-mcp-secure
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-choppaaahh-sendgrid-mcp-secure.md
  license: MIT
  install: uvx sendgrid-mcp-secure
  needs_credentials: true, writes_external: true
- [mcp] The Service Marketing Guys Audit. Read-only audit of any local service business, Open Service Profile conformance first.
  source: https://github.com/buildmodus/open-service-profile
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-com-theservicemarketingguys-audit.md
  license: MIT
  install: remote (streamable-http): https://www.theservicemarketingguys.com/api/audit-mcp
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
