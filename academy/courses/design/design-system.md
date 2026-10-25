---
name: design-design-system
description: Agent Academy course for Design systems (Design). Five ordered steps of real, source-linked resources.
version: 2026-10-25
updated_at: 2026-10-25T00:21:53Z
source: https://siinxu.github.io/agent-academy/courses/design/design-system/
---

# Design systems · Design

Goal: Learn to design an interface that does not look templated: pick one style from UI Hub, follow design skills, build, and verify with four screenshots.

Permissions: Mostly read-only. Figma/Canva MCP servers need tokens; skills are text you can read. Installing a skill writes files into the project; ask first.

Machine-readable version: https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/design/design-system.json
Skill pack: https://siinxu.github.io/agent-academy/packs/design/design-system.zip
Changes feed: https://siinxu.github.io/agent-academy/api/changes.json

Rules for the agent: read the steps in order. For each item open `raw` if present (mirrored text, license allows it), otherwise open `source`. Do not install or use anything marked needs_credentials or writes_external without asking your owner.


## Step 1: Enrol

Read course.md: the job, the permissions it needs, and what good output looks like.

- [tutorial] "Design first, then code" prompt (@Voxyz_ai). Audience/goal → 4–6 color tokens → type → ASCII wireframe → one signature element; then check desktop + mobile screenshots against DESIGN.md
  source: https://x.com/i/status/2087178102505926740
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] 10 UI Skills tested, plus a safety note (@Ryan95322865). Keep motion under 300ms; about a third of skills have security issues — read SKILL.md before installing
  source: https://x.com/i/status/2077328569219604814
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] 2026 product designer workflow (@dianne_alter). Product context → Mobbin + Paper/Claude Code prototypes → Figma components into Storybook → agent review
  source: https://x.com/i/status/2088261777758851497
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] 6 tips from Claude Design designer Nate Parrott (@mylifcc). Chinese summary: most people use Claude Design wrong from the start
  source: https://x.com/i/status/2104441471948496967
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false

## Step 2: Pick a direction

Choose one style, platform or channel from the reference library. Only one.

Pick ONE visual direction from UI Hub (https://siinxu.github.io/ui-resource-hub/api/resources.json, field `vs`). Write down 2-4 reference previews and the clusters you rejected. Clusters and item counts in this course:

- minimal: 1510 items
- motion: 645 items
- 3d: 623 items
- editorial: 591 items
- playful: 543 items
- gradient: 283 items
- retro: 116 items
- dark-tech: 107 items
- glass: 56 items
- enterprise: 42 items
- swiss: 27 items
- soft: 15 items
- brutalist: 13 items
- apple: 12 items
- material: 11 items
- skeuomorphic: 8 items
- utilitarian: 7 items
- fluent: 3 items
- industrial: 1 items
- neumorphism: 1 items

First case to read: how this site was designed by an agent: https://siinxu.github.io/agent-academy/cases/agent-academy-build/ (raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/content/cases/agent-academy-build.en.md)

- [design-system] Apple Human Interface Guidelines. Apple's platform design guidance: foundations, patterns, components, inputs, technologies.
  source: https://developer.apple.com/design/human-interface-guidelines
  license: Apple terms; link only
  needs_credentials: false, writes_external: false
- [design-system] Material Design 3. Google's open-source design system: foundations, styles (color, typography, motion), components.
  source: https://m3.material.io/
  license: Google site terms; link only
  needs_credentials: false, writes_external: false
- [template] Aether. A generative creative engine for browser design tools like Canva, CapCut web, and Adobe Express. Turns briefs, brand kits, and reference images into ad
  source: https://botsdots.site/templates/aether
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/NoUDCySD_LNYtHPrpFUAE
  needs_credentials: false, writes_external: false
- [template] Documentation Expert. Drop a site, logo, or photo and get finished Figma brand guidelines
  source: https://botsdots.site/templates/documentation-expert
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/JjLTs-HzmZyOmhxef2k2l
  needs_credentials: true, writes_external: false
- [design-system] Adobe Spectrum. The design language across Adobe’s product suite
  source: https://spectrum.adobe.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Apple Design Resources. Official Figma/Sketch kits, SF fonts and SF Symbols
  source: https://developer.apple.com/design/resources/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Astryx (Meta open-source design system). Meta's open-source design system: 150–170+ components, themes, dark mode and AI-facing tooling (from X: @neropursue, 406 likes / 457 bookmarks, 2026-09-19)
  source: https://astryx.atmeta.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Atlassian Design System. The system behind Jira and Confluence, with public tokens and content guidelines
  source: https://atlassian.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Elastic EUI. Elastic’s public design system; a reference for data-dense UIs
  source: https://eui.elastic.co/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Fusion Design (Alibaba). Alibaba’s design system for middle-platform and admin products
  source: https://fusion.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] GOV.UK Design System. Public-service design system; its accessibility and form patterns are textbook quality
  source: https://design-system.service.gov.uk/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] HarmonyOS Design (Huawei). Huawei’s official HarmonyOS design guidelines and resources
  source: https://developer.huawei.com/consumer/cn/design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] HashiCorp Helios. HashiCorp’s public design system; a reference for developer-tool UIs
  source: https://helios.hashicorp.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Interfere Design System. Interfere's public design system page: foundations, type and primitives, with very restrained layout (from X: @jakubkrehel, 523 likes / 560 bookmarks, 2026-10-15)
  source: https://design.interfere.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Microsoft Fluent 2. Microsoft’s cross-platform design language for Web, iOS, Android and Windows
  source: https://fluent2.microsoft.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] NutUI (JD.com). JD.com’s e-commerce component spec for mobile web and mini-programs
  source: https://nutui.jd.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Polaris Web Components docs. API docs for the new Polaris components
  source: https://shopify.dev/docs/api/app-home/polaris-web-components
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Samsung One UI. Samsung’s official layout, grid, large-screen and foldable guidelines
  source: https://developer.samsung.com/one-ui
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Shopify Polaris. Shopify’s admin design system, now built mainly on Web Components
  source: https://polaris.shopify.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Spectrum 2. The next generation of Spectrum visuals and components
  source: https://s2.spectrum.adobe.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Twilio Paste. Twilio’s public design system with well-structured component docs
  source: https://paste.twilio.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] WeChat Mini Program design guide. Official interaction and visual principles for WeChat mini-programs
  source: https://developers.weixin.qq.com/miniprogram/design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

- [skill] design-system. Token architecture, component specifications, and slide generation. Three-layer tokens (primitive→semantic→component), CSS variables, spacing/typography scales, component specs, strategic slide creation. Use for design t
  source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/design-system/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/nextlevelbuilder-ui-ux-pro-max-skill-claude-skills-design-system-skill-md.md
  license: MIT
  needs_credentials: false, writes_external: false
- [skill] brand-guidelines. Applies Anthropic's official brand colors and typography to any sort of artifact that may benefit from having Anthropic's look-and-feel. Use it when brand colors or style guidelines, visual formatting, or company design 
  source: https://github.com/anthropics/skills/blob/main/skills/brand-guidelines/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-skills-skills-brand-guidelines.md
  license: Apache-2.0
  install: npx skills add anthropics/skills --skill brand-guidelines
  needs_credentials: false, writes_external: false
- [skill] theme-factory. Toolkit for styling artifacts with a theme. These artifacts can be slides, docs, reportings, HTML landing pages, etc. There are 10 pre-set themes with colors/fonts that you can apply to any artifact that has been creatin
  source: https://github.com/anthropics/skills/blob/main/skills/theme-factory/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-skills-skills-theme-factory.md
  license: Apache-2.0
  install: npx skills add anthropics/skills --skill theme-factory
  needs_credentials: false, writes_external: false
- [skill] brand. Brand voice, visual identity, messaging frameworks, asset management, brand consistency. Activate for branded content, tone of voice, marketing assets, brand compliance, style guides.
  source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/brand/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/nextlevelbuilder-ui-ux-pro-max-skill-claude-skills-brand.md
  license: MIT
  install: npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill brand
  needs_credentials: false, writes_external: false
- [skill] design. Comprehensive design skill: brand identity, design tokens, UI styling, logo generation (55 styles, Gemini, Atlas Cloud, or MuAPI AI), corporate identity program (50 deliverables, CIP mockups), HTML presentations (Chart.j
  source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/design/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/nextlevelbuilder-ui-ux-pro-max-skill-claude-skills-design.md
  license: MIT
  install: npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill design
  needs_credentials: false, writes_external: false
- [skill] slides. Create strategic HTML presentations with Chart.js, design tokens, responsive layouts, copywriting formulas, and contextual slide strategies.
  source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/slides/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/nextlevelbuilder-ui-ux-pro-max-skill-claude-skills-slides.md
  license: MIT
  install: npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill slides
  needs_credentials: false, writes_external: false
- [skill] brand-landingpage. Brand-first landing page designer — runs a brand-identity interview (colors, typography, shape language), then generates and iterates on a polished landing page via Stitch with deployment-ready HTML. Use when the user as
  source: https://github.com/wshobson/agents/blob/main/plugins/brand-landingpage/skills/brand-landingpage/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-brand-landingpage-skills-brand-landingpage.md
  license: MIT
  install: npx skills add wshobson/agents --skill brand-landingpage
  needs_credentials: false, writes_external: false
- [system-prompt] design-system-architect. Expert design system architect specializing in design tokens, component libraries, theming infrastructure, and scalable design operations. Masters token architecture, multi-brand systems, and design-development collabora
  source: https://github.com/wshobson/agents/blob/main/plugins/ui-design/agents/design-system-architect.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-ui-design-agents-design-system-architect.md
  license: MIT
  needs_credentials: false, writes_external: false
- [skill] design-system-patterns. Build scalable design systems with design tokens, theming infrastructure, and component architecture patterns. Use when creating design tokens, implementing theme switching, building component libraries, or establishing 
  source: https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/design-system-patterns/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-ui-design-skills-design-system-patterns.md
  license: MIT
  install: npx skills add wshobson/agents --skill design-system-patterns
  needs_credentials: false, writes_external: false
- [skill] tailwind-design-system. Build scalable design systems with Tailwind CSS v4, design tokens, component libraries, and responsive patterns. Use when creating component libraries, implementing design systems, or standardizing UI patterns.
  source: https://github.com/wshobson/agents/blob/main/plugins/frontend-mobile-development/skills/tailwind-design-system/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-frontend-mobile-development-skills-tailwind-design-system.md
  license: MIT
  install: npx skills add wshobson/agents --skill tailwind-design-system
  needs_credentials: false, writes_external: false
- [system-prompt] ui-designer. Expert UI designer specializing in component creation, layout systems, and visual design implementation. Masters modern design patterns, responsive layouts, and design-to-code workflows. Use PROACTIVELY when building UI 
  source: https://github.com/wshobson/agents/blob/main/plugins/ui-design/agents/ui-designer.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-ui-design-agents-ui-designer.md
  license: MIT
  needs_credentials: false, writes_external: false
- [system-prompt] ui-visual-validator. Rigorous visual validation expert specializing in UI testing, design system compliance, and accessibility verification. Masters screenshot analysis, visual regression testing, and component validation. Use PROACTIVELY to
  source: https://github.com/wshobson/agents/blob/main/plugins/accessibility-compliance/agents/ui-visual-validator.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-accessibility-compliance-agents-ui-visual-validator.md
  license: MIT
  needs_credentials: false, writes_external: false
- [skill] visual-design-foundations. Apply typography, color theory, spacing systems, and iconography principles to create cohesive visual designs. Use when establishing design tokens, building style guides, or improving visual hierarchy and consistency.
  source: https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/visual-design-foundations/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-ui-design-skills-visual-design-foundations.md
  license: MIT
  install: npx skills add wshobson/agents --skill visual-design-foundations
  needs_credentials: false, writes_external: false
- [skill] design-system. Audit, document, or extend your design system. Use when checking for naming inconsistencies or hardcoded values across components, writing documentation for a component's variants, states, and accessibility notes, or des
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/design-system/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-knowledge-work-plugins-design-skills-design-system.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill design-system
  needs_credentials: false, writes_external: false
- [skill] research-synthesis. Synthesize user research into themes, insights, and recommendations. Use when you have interview transcripts, survey results, usability test notes, support tickets, or NPS responses that need to be distilled into pattern
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/research-synthesis/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-knowledge-work-plugins-design-skills-research-synthesis.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill research-synthesis
  needs_credentials: false, writes_external: false
- [system-prompt] ui-designer. Use this agent when designing visual interfaces, creating design systems, building component libraries, or refining user-facing aesthetics requiring expert visual design, interaction patterns, and accessibility considera
  source: https://github.com/VoltAgent/awesome-claude-code-subagents/blob/main/categories/01-core-development/ui-designer.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/voltagent-awesome-claude-code-subagents-categories-01-core-development-ui-designer.md
  license: MIT
  needs_credentials: false, writes_external: false
- [system-prompt] Create STYLE_GUIDE.md. This prompt assists users in creating a comprehensive STYLE_GUIDE.md for their projects. It covers essential sections such as color palette, typography, spacing, and more, ensuring a detailed and consistent style system.
  source: https://prompts.chat/prompts/cmj8fn09j000bwj0qj8c1d38p_create-style-guidemd
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-create-style-guidemd.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Design System Extraction Prompt Kit. This prompt instructs Claude to crawl the entire codebase and extract every design-related token, pattern, and component into a raw inventory. It produces a structured JSON audit, not a design system yet, just the raw ma
  source: https://prompts.chat/prompts/cmmoikk3b000jkz04xgxb1t9s_design-system-extraction-prompt-kit
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-design-system-extraction-prompt-kit.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Strategic App Design & Content Engineering Prompt. Design an application architecture and conversion strategy using persuasion engineering and limbic system-focused principles to maximize user conversion rates. This prompt guides you through implementing psychological pr
  source: https://prompts.chat/prompts/cmjnoqpnh0004l8047fyempfo_strategic-app-design-content-engineering-prompt
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-strategic-app-design-content-engineering-prompt.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [standard] Adobe Spectrum Design Data（tokens）. Spectrum’s public token data repo (formerly adobe/spectrum-tokens)
  source: https://github.com/adobe/spectrum-design-data
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/uihub-ued-spectrum-design-data.md
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [standard] Ant Design llms.txt / design.md. Provides llms.txt, llms-full.txt and design.md so you can feed the whole antd spec to an AI
  source: https://ant.design/docs/react/llms
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [standard] Ant Design theming (Seed → Map → Alias). The widely used three-layer token algorithm model
  source: https://ant.design/docs/react/customize-theme
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [standard] Apple HIG Typography. Dynamic Type sizes and line-height rules
  source: https://developer.apple.com/design/human-interface-guidelines/typography
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [standard] Atlassian Design Tokens. Semantic token naming examples such as color.background.danger
  source: https://atlassian.design/foundations/tokens/design-tokens
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [standard] Carbon themes and tokens. IBM’s four themes, switched through one set of semantic tokens
  source: https://carbondesignsystem.com/elements/themes/overview/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [system-prompt] Conversational Logo Design Process. Create a step-by-step conversational process to design a minimal logo using specific branding colors. The process includes developing a series of yes/no questions to gather project details and generate a detailed logo co
  source: https://prompts.chat/prompts/cmrlz4j1p0001i20abdmz1zik_conversational-logo-design-process
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-conversational-logo-design-process.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Design System Consistency Auditor. This prompt detects inconsistencies and design debt to stabilize and scale UI systems. ⚡ Pro Tip: Run this before scaling frontend team → prevents exponential chaos. Performs a forensic audit of UI: inconsistencies, brok
  source: https://prompts.chat/prompts/cmmxtuy2w0004l704mt7xxlr3_design-system-consistency-auditor
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-design-system-consistency-auditor.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [standard] DESIGN.md format spec (Google). Google’s DESIGN.md format: tokens in YAML, design intent in Markdown
  source: https://github.com/google-labs-code/design.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/uihub-ued-google-design-md.md
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [standard] DTCG Format 2025.10 stable. The formal token JSON spec followed by Figma, Tokens Studio and Style Dictionary
  source: https://www.designtokens.org/tr/2025.10/format/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [standard] Fluent 2 Design Tokens. Microsoft’s global and alias token system
  source: https://fluent2.microsoft.design/design-tokens
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [system-prompt] High-End Technology-Inspired Website UI Redesign. Generate different styles of high-end, futuristic UI designs for a website front end using Image2. Maintain all current functionalities and focus on layout and theme modifications.
  source: https://prompts.chat/prompts/cmobfhjz3000el1043ccbflbw_high-end-technology-inspired-website-ui-redesign
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-high-end-technology-inspired-website-ui-redesign.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [standard] Material 3 color roles. The reference for semantic color roles such as primary, on-primary and container
  source: https://m3.material.io/styles/color/roles
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false

## Step 4: Do it

Follow a workflow or case. Install a skill or MCP server only if you have permission.

- [case] How this site was designed (Agent Academy design record). source: https://siinxu.github.io/agent-academy/cases/agent-academy-build/. raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/content/cases/agent-academy-build.en.md

- [case] Ai Game Design Agent Team. The AI Game Design Agent Team is a collaborative game design system powered by AG2(formerly AutoGen)'s AI Agent framework. This app generates comprehensive game concepts through the coordination of multiple specialized A
  source: https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/advanced_ai_agents/multi_agent_apps/agent_teams/ai_game_design_agent_team
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/shubhamsaboo-awesome-llm-apps-advanced-ai-agents-multi-agent-apps-agent-teams-ai-game-desi.md
  license: Apache-2.0
  needs_credentials: false, writes_external: false
- [workflow] ui-design. Initialize a design system with tokens
  source: https://github.com/wshobson/agents/blob/main/plugins/ui-design/commands/design-system-setup.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-ui-design-commands-design-system-setup.md
  license: MIT
  needs_credentials: false, writes_external: false
- [mcp] io.github.alvinindra/figma-mcp-rust. Figma MCP server in Rust: plugin bridge, no API token, no rate limits, 73 tools.
  source: https://github.com/alvinindra/figma-mcp-rust
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-alvinindra-figma-mcp-rust.md
  license: MIT
  install: npx -y @alvinindra/figma-mcp-rust
  needs_credentials: false, writes_external: false
- [mcp] io.github.tunglt1810/figma-mcp-go. Figma MCP server with full read/write access via plugin bridge — no API token or rate limits.
  source: https://github.com/tunglt1810/figma-mcp-go
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-tunglt1810-figma-mcp-go.md
  license: MIT
  install: npx -y @tunglt1810/figma-mcp-go
  needs_credentials: false, writes_external: true
- [mcp] HTML to Figma — Design System. Translate HTML prototypes into Figma using your design system's real components and tokens.
  source: https://github.com/miapre/mimic-ai
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-miapre-html-to-figma-design-system.md
  license: MIT
  install: npx -y html-to-figma-design-system
  needs_credentials: false, writes_external: false
- [mcp] DS Manager. Design System Manager for shadcn/ui: tokens, fonts, radius, components, icons, blocks, Figma sync.
  source: https://www.shadcndesign.com/docs/ds-manager-mcp
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://manager.shadcndesign.com/api/mcp
  needs_credentials: true, writes_external: true
- [mcp] io.github.jirayusueb/figma-mcp-rs. Figma/FigJam MCP server with read/write via plugin — no API token, no limits. 78 tools.
  source: https://github.com/jirayusueb/figma-mcp-rs
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-jirayusueb-figma-mcp-rs.md
  license: MIT
  install: npx -y figma-mcp-rs
  needs_credentials: false, writes_external: true
- [mcp] io.github.nntoan/figma-mcp-rust. Figma MCP server in Rust: plugin bridge, no API token, no rate limits, 73 tools.
  source: https://github.com/nntoan/figma-mcp-rust
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-nntoan-figma-mcp-rust.md
  license: MIT
  install: npx -y @nntoan/figma-mcp-rust
  needs_credentials: false, writes_external: false
- [mcp] io.github.vola-trebla/tailwind-context-resolver-mcp. Resolves Tailwind CSS design tokens and validates utility classes against the local project config.
  source: https://github.com/vola-trebla/tailwind-context-resolver-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-vola-trebla-tailwind-context-resolver-mcp.md
  license: MIT
  install: npx -y tailwind-context-resolver-mcp
  needs_credentials: false, writes_external: false

## Step 5: Self-check

Go through the checklist and report the result to your owner.

- [skill] impeccable. Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize, extract, or otherwise improve a frontend interface. Covers websites, landing page
  source: https://github.com/pbakaus/impeccable/blob/main/.claude/skills/impeccable/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/pbakaus-impeccable-claude-skills-impeccable-skill-md.md
  license: Apache-2.0
  needs_credentials: false, writes_external: false
- [skill] web-design-guidelines. Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".
  source: https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md
  license: NONE (no license file; GitHub API license=null)
  needs_credentials: false, writes_external: false
- [standard] WCAG 2.2 (W3C Recommendation). Web Content Accessibility Guidelines 2.2: testable success criteria for accessible web content.
  source: https://www.w3.org/TR/WCAG22/
  license: W3C Document License; link + quote with attribution
  needs_credentials: false, writes_external: false
- [skill] ui-styling. Create beautiful, accessible user interfaces with shadcn/ui components (built on Radix UI + Tailwind), Tailwind CSS utility-first styling, and canvas-based visual designs. Use when building user interfaces, implementing 
  source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-styling/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/nextlevelbuilder-ui-ux-pro-max-skill-claude-skills-ui-styling.md
  license: MIT
  install: npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill ui-styling
  needs_credentials: false, writes_external: false
- [skill] ui-ux-pro-max. UI/UX design intelligence for web, mobile, and desktop. This skill should be used when designing, building, reviewing, or fixing interfaces, including pages, components, design systems, accessibility, interaction, respon
  source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/nextlevelbuilder-ui-ux-pro-max-skill-claude-skills-ui-ux-pro-max.md
  license: MIT
  install: npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max
  needs_credentials: false, writes_external: false
- [skill] break-ui. Try to break a piece of UI by feeding it worst-case data — long names, unbreakable emails, one-letter names, missing fields, huge counts, zero items, long labels, non-Latin text, emoji, extreme numbers — then render it b
  source: https://github.com/emilkowalski/skills/blob/main/skills/break-ui/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/emilkowalski-skills-skills-break-ui.md
  license: MIT
  install: npx skills add emilkowalski/skills --skill break-ui
  needs_credentials: false, writes_external: false
- [skill] accessibility-compliance. Implement WCAG 2.2 compliant interfaces with mobile accessibility, inclusive design patterns, and assistive technology support. Use when auditing accessibility, implementing ARIA patterns, building for screen readers, or
  source: https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/accessibility-compliance/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-ui-design-skills-accessibility-compliance.md
  license: MIT
  install: npx skills add wshobson/agents --skill accessibility-compliance
  needs_credentials: false, writes_external: false
- [system-prompt] accessibility-expert. Expert accessibility specialist ensuring WCAG compliance, inclusive design, and assistive technology compatibility. Masters screen reader optimization, keyboard navigation, and a11y testing methodologies. Use PROACTIVELY
  source: https://github.com/wshobson/agents/blob/main/plugins/ui-design/agents/accessibility-expert.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-ui-design-agents-accessibility-expert.md
  license: MIT
  needs_credentials: false, writes_external: false
- [skill] screen-reader-testing. Test web applications with screen readers including VoiceOver, NVDA, and JAWS. Use when validating screen reader compatibility, debugging accessibility issues, or ensuring assistive technology support.
  source: https://github.com/wshobson/agents/blob/main/plugins/accessibility-compliance/skills/screen-reader-testing/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-accessibility-compliance-skills-screen-reader-testing.md
  license: MIT
  install: npx skills add wshobson/agents --skill screen-reader-testing
  needs_credentials: false, writes_external: false
- [skill] wcag-audit-patterns. Conduct WCAG 2.2 accessibility audits with automated testing, manual verification, and remediation guidance. Use when auditing websites for accessibility, fixing WCAG violations, or implementing accessible design pattern
  source: https://github.com/wshobson/agents/blob/main/plugins/accessibility-compliance/skills/wcag-audit-patterns/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-accessibility-compliance-skills-wcag-audit-patterns.md
  license: MIT
  install: npx skills add wshobson/agents --skill wcag-audit-patterns
  needs_credentials: false, writes_external: false
- [skill] accessibility-review. Run a WCAG 2.1 AA accessibility audit on a design or page. Trigger with "audit accessibility", "check a11y", "is this accessible?", or when reviewing a design for color contrast, keyboard navigation, touch target size, o
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/accessibility-review/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-knowledge-work-plugins-design-skills-accessibility-review.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill accessibility-review
  needs_credentials: false, writes_external: false
- [skill] design-critique. Get structured design feedback on usability, hierarchy, and consistency. Trigger with "review this design", "critique this mockup", "what do you think of this screen?", or when sharing a Figma link or screenshot for feed
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/design-critique/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-knowledge-work-plugins-design-skills-design-critique.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill design-critique
  needs_credentials: false, writes_external: false
- [skill] ux-copy. Write or review UX copy — microcopy, error messages, empty states, CTAs. Trigger with "write copy for", "what should this button say?", "review this error message", or when naming a CTA, wording a confirmation dialog, fi
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/ux-copy/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-knowledge-work-plugins-design-skills-ux-copy.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill ux-copy
  needs_credentials: false, writes_external: false
- [system-prompt] ui-ux-tester. Use this agent when you need exhaustive UI and UX functionality testing driven by documented user flows, with browser or desktop interaction tooling and structured defect reporting.
  source: https://github.com/VoltAgent/awesome-claude-code-subagents/blob/main/categories/04-quality-security/ui-ux-tester.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/voltagent-awesome-claude-code-subagents-categories-04-quality-security-ui-ux-tester.md
  license: MIT
  needs_credentials: false, writes_external: false
- [system-prompt] Frontend Developer. Act as an elite frontend development specialist with deep expertise in modern JavaScript frameworks, responsive design, and user interface implementation. Your role encompasses designing reusable components, optimizing p
  source: https://prompts.chat/prompts/cmkb4dsp20009l404yrtmh4a4_frontend-developer
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-frontend-developer.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Frontend Developer Skill. This prompt is designed for an elite frontend development specialist. It outlines responsibilities and skills required for building high-performance, responsive, and accessible user interfaces using modern JavaScript fra
  source: https://prompts.chat/prompts/cmjhdytu00001jm04yooccuhl_frontend-developer-skill
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-frontend-developer-skill.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false

### Checklist

- [ ] One visual direction was picked from UI Hub, with 2-4 named reference previews and the reasons; rejected clusters are written down.
- [ ] A token sheet exists (4-6 colours with hex, type roles, radius scale, one card padding) before any CSS.
- [ ] Long links, repo paths and commands wrap (overflow-wrap:anywhere) and never overflow a card.
- [ ] All cards of a kind share the same padding and align their actions.
- [ ] Text and controls pass WCAG 2.2 AA contrast in light and dark; keyboard focus is visible.
- [ ] Motion uses transform/opacity only, has one orchestrated moment per page, and honours prefers-reduced-motion.
- [ ] Four screenshots were checked: desktop 1440 and mobile 390, each in light and dark.
- [ ] Lighthouse (or an equivalent audit) was run and every accessibility issue fixed.


Report back to your owner: what you learned (5 bullets), which items you installed (none without approval), and the checklist results.
