---
name: design-design-system
description: Agent Academy course for Design systems (Design). Five ordered steps of real, source-linked resources.
version: 2026-10-15
updated_at: 2026-10-15T10:41:56Z
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

- [tutorial] 「先出设计方案再写代码」Prompt（@Voxyz_ai）. 受众/目标 → 4–6 个色 token → 字体 → ASCII 线框 → 1 个标志元素；完成后桌面 + 手机截图对照 DESIGN.md
  source: https://x.com/i/status/2087178102505926740
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] 10 个 UI Skills 实测 + 安全提醒（@Ryan95322865）. 动效控制在 300ms 内；约三分之一 Skills 有安全问题，装前先读 SKILL.md
  source: https://x.com/i/status/2077328569219604814
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] 2026 产品设计师工作流（@dianne_alter）. 产品上下文 → Mobbin + Paper / Claude Code 原型 → Figma 组件进 Storybook → Agent 审查
  source: https://x.com/i/status/2088261777758851497
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] 8pt Grid（spec.fm）. 8 点栅格间距体系的经典讲解
  source: https://spec.fm/specifics/8-pt-grid
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false

## Step 2: Pick a direction

Choose one style, platform or channel from the reference library. Only one.

Pick ONE visual direction from UI Hub (https://siinxu.github.io/ui-resource-hub/api/resources.json, field `vs`). Write down 2-4 reference previews and the clusters you rejected. Clusters and item counts in this course:

- minimal: 316 items
- motion: 60 items
- enterprise: 37 items
- dark-tech: 27 items
- editorial: 25 items
- 3d: 21 items
- gradient: 18 items
- playful: 17 items
- soft: 15 items
- swiss: 13 items
- apple: 12 items
- material: 11 items
- skeuomorphic: 8 items
- utilitarian: 7 items
- brutalist: 6 items
- glass: 5 items
- fluent: 3 items
- retro: 2 items
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
- [design-system] Adobe Spectrum. Adobe 全家桶设计语言
  source: https://spectrum.adobe.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Apple Design Resources. 官方 Figma / Sketch 套件、SF 字体、SF Symbols
  source: https://developer.apple.com/design/resources/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Atlassian Design System. Jira / Confluence 的规范，token 和写作规范都公开
  source: https://atlassian.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Elastic EUI. Elastic 的公开设计系统，数据密集型界面参考
  source: https://eui.elastic.co/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Fusion Design（阿里）. 阿里中台设计系统
  source: https://fusion.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] GOV.UK Design System. 公共服务规范，无障碍和表单模式是教科书级
  source: https://design-system.service.gov.uk/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] HarmonyOS 设计（华为）. 鸿蒙官方设计规范和资源
  source: https://developer.huawei.com/consumer/cn/design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] HashiCorp Helios. HashiCorp 的公开设计系统，开发者工具类界面参考
  source: https://helios.hashicorp.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Microsoft Fluent 2. 微软跨平台设计语言，有 Web、iOS、Android、Windows 版本
  source: https://fluent2.microsoft.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] NutUI（京东）. 京东移动端和小程序电商风组件规范
  source: https://nutui.jd.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Polaris Web Components 文档. Polaris 新版组件 API
  source: https://shopify.dev/docs/api/app-home/polaris-web-components
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Samsung One UI. 三星官方：布局、栅格、大屏和折叠屏规范
  source: https://developer.samsung.com/one-ui
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Shopify Polaris. Shopify 后台设计系统，现在以 Web Components 为主
  source: https://polaris.shopify.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Spectrum 2. Spectrum 新一代视觉和组件
  source: https://s2.spectrum.adobe.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Twilio Paste. Twilio 的公开设计系统，组件文档写得很规范
  source: https://paste.twilio.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] WeUI（微信）. 微信原生视觉规范组件
  source: https://github.com/Tencent/weui
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] Zendesk Garden. Zendesk 的公开设计系统，SaaS 组件参考
  source: https://garden.zendesk.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [design-system] 微信小程序设计指南. 小程序官方交互和视觉原则
  source: https://developers.weixin.qq.com/miniprogram/design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

- [skill] design-system. Token architecture, component specifications, and slide generation. Three-layer tokens (primitive→semantic→component), CSS variables, spacing/typography scales, component specs, strategic slide creation. Use for design t
  source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/design-system/SKILL.md
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
- [standard] Adobe Spectrum Design Data（tokens）. Spectrum 公开的 token 数据仓库（旧仓库是 adobe/spectrum-tokens）
  source: https://github.com/adobe/spectrum-design-data
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [standard] Ant Design llms.txt / design.md. 有 llms.txt、llms-full.txt 和 design.md，把整套 antd 规范喂给 AI
  source: https://ant.design/docs/react/llms
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [standard] Ant Design 定制主题（Seed → Map → Alias）. 国内最常用的三层 token 算法模型
  source: https://ant.design/docs/react/customize-theme
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [standard] Apple HIG Typography. Dynamic Type 字号层级和行高规范
  source: https://developer.apple.com/design/human-interface-guidelines/typography
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [standard] Atlassian Design Tokens. 语义 token 命名范例，例如 color.background.danger
  source: https://atlassian.design/foundations/tokens/design-tokens
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [standard] Carbon 主题和 token. IBM 四套主题，靠一组语义 token 切换
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
- [standard] DESIGN.md 格式规范（Google）. Google 提出的 DESIGN.md 格式：YAML 写 token，Markdown 写设计意图
  source: https://github.com/google-labs-code/design.md
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [standard] DTCG Format 2025.10 稳定版. token JSON 格式正式规范，Figma、Tokens Studio、Style Dictionary 都在跟
  source: https://www.designtokens.org/tr/2025.10/format/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [standard] Fluent 2 Design Tokens. 微软的全局 token 和别名 token 体系
  source: https://fluent2.microsoft.design/design-tokens
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [system-prompt] High-End Technology-Inspired Website UI Redesign. Generate different styles of high-end, futuristic UI designs for a website front end using Image2. Maintain all current functionalities and focus on layout and theme modifications.
  source: https://prompts.chat/prompts/cmobfhjz3000el1043ccbflbw_high-end-technology-inspired-website-ui-redesign
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-high-end-technology-inspired-website-ui-redesign.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [standard] Material 3 Design Tokens. M3 的 token 分层（ref → sys → comp）和命名
  source: https://m3.material.io/foundations/design-tokens/overview
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
  license: MIT
  install: npx -y @alvinindra/figma-mcp-rust
  needs_credentials: false, writes_external: false
- [mcp] io.github.tunglt1810/figma-mcp-go. Figma MCP server with full read/write access via plugin bridge — no API token or rate limits.
  source: https://github.com/tunglt1810/figma-mcp-go
  license: MIT
  install: npx -y @tunglt1810/figma-mcp-go
  needs_credentials: false, writes_external: true
- [mcp] HTML to Figma — Design System. Translate HTML prototypes into Figma using your design system's real components and tokens.
  source: https://github.com/miapre/mimic-ai
  license: MIT
  install: npx -y html-to-figma-design-system
  needs_credentials: false, writes_external: false
- [mcp] io.github.jirayusueb/figma-mcp-rs. Figma/FigJam MCP server with read/write via plugin — no API token, no limits. 78 tools.
  source: https://github.com/jirayusueb/figma-mcp-rs
  license: MIT
  install: npx -y figma-mcp-rs
  needs_credentials: false, writes_external: true
- [mcp] io.github.nntoan/figma-mcp-rust. Figma MCP server in Rust: plugin bridge, no API token, no rate limits, 73 tools.
  source: https://github.com/nntoan/figma-mcp-rust
  license: MIT
  install: npx -y @nntoan/figma-mcp-rust
  needs_credentials: false, writes_external: false
- [mcp] io.github.vola-trebla/tailwind-context-resolver-mcp. Resolves Tailwind CSS design tokens and validates utility classes against the local project config.
  source: https://github.com/vola-trebla/tailwind-context-resolver-mcp
  license: MIT
  install: npx -y tailwind-context-resolver-mcp
  needs_credentials: false, writes_external: false

## Step 5: Self-check

Go through the checklist and report the result to your owner.

- [skill] impeccable. Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize, extract, or otherwise improve a frontend interface. Covers websites, landing page
  source: https://github.com/pbakaus/impeccable/blob/main/.claude/skills/impeccable/SKILL.md
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
