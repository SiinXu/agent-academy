---
name: design-ui-designer
description: Agent Academy course for UI designer (Design). Five ordered steps of real, source-linked resources.
version: 2026-10-15
updated_at: 2026-10-15T10:41:56Z
source: https://siinxu.github.io/agent-academy/courses/design/ui-designer/
---

# UI designer · Design

Goal: Learn to design an interface that does not look templated: pick one style from UI Hub, follow design skills, build, and verify with four screenshots.

Permissions: Mostly read-only. Figma/Canva MCP servers need tokens; skills are text you can read. Installing a skill writes files into the project; ask first.

Machine-readable version: https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/design/ui-designer.json
Skill pack: https://siinxu.github.io/agent-academy/packs/design/ui-designer.zip
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
- [tutorial] AI × Design Weekly（Jason Cyr）. 每周 AI × 设计动态：Figma MCP、Codex ↔ Figma、设计系统 Skills
  source: https://jasoncyr.substack.com/p/ai-design-weekly-issue-005
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] AI slop 成因与破解（@dashiAIxz）. 约束不够就趋同；用随机数打破、给参考图、首尾帧生视频做 Landing
  source: https://x.com/i/status/2095715594368860421
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] Airbnb DLS（Karri Saarinen 复盘）. Airbnb DLS 不公开；主导者亲自讲怎么搭跨端组件体系
  source: https://karrisaarinen.com/dls/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] animations.dev. Emil 的网页动效系统课（付费）
  source: https://animations.dev
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] Atomic Design（Brad Frost 免费全书）. 原子、分子、组织的组件分层方法论
  source: https://atomicdesign.bradfrost.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] Claude Design vs Figma MCP（@dotey 宝玉）. 直出 HTML 原型 vs 操作 Figma 文件；不是设计师优先选 Claude Design
  source: https://x.com/i/status/2102509523684479377
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] Claude Design 设计师 Nate Parrott 的 6 条用法（@mylifcc）. 中文整理：大多数人一开始就用错了 Claude Design
  source: https://x.com/i/status/2104441471948496967
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] Design Engineer Stack 101（@SataEricUX）. 给设计师 / PM 讲清 React、Next、TS、Prisma 各管什么
  source: https://x.com/i/status/2094659988971261998
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] Designlab：Vibe Coding Camp. 4 周：Claude Code + Figma MCP + Supabase + Vercel
  source: https://designlab.com/advanced/vibe-coding-course
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] Emil Kowalski Skills 中文全解（@pengchujin）. apple-design、animate、review-animations 各干什么，什么时候不该加动画
  source: https://x.com/i/status/2101578929786228924
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] Emil Kowalski：7 个动效实用技巧. Sonner、Vaul 作者写的 UI 动效手感要点
  source: https://emilkowal.ski/ui/7-practical-animation-tips
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tutorial] Figma 官方 Variables 指南. 在 Figma 里落地 token 和模式（明暗、品牌）
  source: https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma
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
- [style-library] UI Hub (Sii n's UI resource hub) — llms.txt / api. Curated multilingual directory of ~2,391 public UI resources with visual-style (vs) facets, design KB (specs, skills), JSON endpoints and a recommended design-skill workflow.
  source: https://siinxu.github.io/ui-resource-hub/llms.txt
  license: aggregator; per-item license
  needs_credentials: false, writes_external: false
- [plugin] Design plugin (knowledge-work-plugins). A design productivity plugin primarily designed for Cowork, Anthropic's agentic desktop application — though it also works in Claude Code. Helps with design critique, system management, UX writing, accessibility, researc
  source: https://github.com/anthropics/knowledge-work-plugins/tree/main/design
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-knowledge-work-plugins-design.md
  license: Apache-2.0
  install: claude plugin marketplace add anthropics/knowledge-work-plugins
  needs_credentials: false, writes_external: false
- [template] figma bro. A design partner that works inside Figma, not around it
  source: https://botsdots.site/templates/figma-bro
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/VHMdjIGjGpgDSJR7dW6Gz
  needs_credentials: true, writes_external: false
- [template] Idle Tees Designer. Visual/UX designer for idle/incremental games. Owns drones look, landscape/background, VFX, UI polish, and readable hierarchy while protecting
  source: https://botsdots.site/templates/idle-tees-designer
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/ogAh6MiV-0HAhp9wbHMTS
  needs_credentials: false, writes_external: true
- [template] Music Video. Generates a track from your lyrics, syncs every line to the beat, and renders kinetic-typography visuals into a draft music video
  source: https://botsdots.site/templates/music-video
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/1Et06G_Q820_RNat-_0tQ
  needs_credentials: false, writes_external: false
- [template] Spruce. Send a photo of a room to clean out or redecorate and get a concept after mockup plus easy step-by-step instructions
  source: https://botsdots.site/templates/spruce
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/NVpdpaSAKHtd1qH6VH9vc
  needs_credentials: false, writes_external: false
- [template] Photomosaic. Builds 3-panel X photomosaics in Figma from a reference post plus background and hero assets. On-demand design ops — drop a post and get export-ready panels
  source: https://botsdots.site/templates/photomosaic
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/dYpPe1PCZv2WJDVTYDwhc
  needs_credentials: true, writes_external: false
- [style-library] 21st.dev. 社区组件市场
  source: https://21st.dev/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 21st.dev AI 聊天组件合集. 248 个以上社区组件
  source: https://21st.dev/community/components/s/ai-chat
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 404s. 专收 404 页面
  source: https://www.404s.design
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 8bitcn/ui. Pixel-art 8-bit take on shadcn components for games and retro sites.
  source: https://8bitcn.com
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] A/B Test Design. 真实 A/B 测试前后对比，学「哪个版本赢了」
  source: https://abtest.design
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] agentic-design.ai. 智能体设计模式
  source: https://agentic-design.ai/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] AI Elements（Vercel）. Vercel 官方 AI 组件
  source: https://ai-sdk.dev/elements
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] aicss. AI 智能体聊天组件（@tranmautritam）
  source: https://aicss.dev
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] aiverse. 200 多个海外 AI 产品交互案例
  source: https://www.aiverse.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Angular Material. Angular 官方 Material 组件
  source: https://material.angular.dev/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Ant Design. 蚂蚁中后台组件库，60+ 组件，表格表单极强
  source: https://ant.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Ant Design Mobile. 蚂蚁移动端组件库
  source: https://mobile.ant.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Ant Design X（蚂蚁）. 专门做 AI 界面
  source: https://x.ant.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] AntV G2. 蚂蚁可视化语法，几十种图表
  source: https://g2.antv.antgroup.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

- [skill] algorithmic-art. Creating algorithmic art using p5.js with seeded randomness and interactive parameter exploration. Use this when users request creating art using code, generative art, algorithmic art, flow fields, or particle systems. C
  source: https://github.com/anthropics/skills/blob/main/skills/algorithmic-art/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-skills-skills-algorithmic-art.md
  license: Apache-2.0
  install: npx skills add anthropics/skills --skill algorithmic-art
  needs_credentials: false, writes_external: false
- [skill] canvas-design. Create beautiful visual art in .png and .pdf documents using design philosophy. You should use this skill when the user asks to create a poster, piece of art, design, or other static piece. Create original visual designs
  source: https://github.com/anthropics/skills/blob/main/skills/canvas-design/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-skills-skills-canvas-design.md
  license: Apache-2.0
  install: npx skills add anthropics/skills --skill canvas-design
  needs_credentials: false, writes_external: false
- [skill] banner-design. Design banners for social media, ads, website heroes, creative assets, and print. Multiple art direction options with optional generated or supplied visuals. Actions: design, create, generate banner. Platforms: Facebook,
  source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/banner-design/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/nextlevelbuilder-ui-ux-pro-max-skill-claude-skills-banner-design.md
  license: MIT
  install: npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill banner-design
  needs_credentials: false, writes_external: false
- [skill] mobile-native. Make a web app feel native on a phone — the small CSS and meta-tag fixes that separate "a website in a browser" from something that feels installed. Covers sticky hover states, tap highlight flashes, the 100vh bug, input
  source: https://github.com/emilkowalski/skills/blob/main/skills/mobile-native/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/emilkowalski-skills-skills-mobile-native.md
  license: MIT
  install: npx skills add emilkowalski/skills --skill mobile-native
  needs_credentials: false, writes_external: false
- [skill] mobile-android-design. Master Material Design 3 and Jetpack Compose patterns for building native Android apps. Use when designing Android interfaces, implementing Compose UI, or following Google's Material Design guidelines.
  source: https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/mobile-android-design/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-ui-design-skills-mobile-android-design.md
  license: MIT
  install: npx skills add wshobson/agents --skill mobile-android-design
  needs_credentials: false, writes_external: false
- [skill] mobile-ios-design. Master iOS Human Interface Guidelines and SwiftUI patterns for building native iOS apps. Use when designing iOS interfaces, implementing SwiftUI views, or ensuring apps follow Apple's design principles.
  source: https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/mobile-ios-design/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-ui-design-skills-mobile-ios-design.md
  license: MIT
  install: npx skills add wshobson/agents --skill mobile-ios-design
  needs_credentials: false, writes_external: false
- [skill] responsive-design. Implement modern responsive layouts using container queries, fluid typography, CSS Grid, and mobile-first breakpoint strategies. Use when building adaptive interfaces, implementing fluid layouts, or creating component-le
  source: https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/responsive-design/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-ui-design-skills-responsive-design.md
  license: MIT
  install: npx skills add wshobson/agents --skill responsive-design
  needs_credentials: false, writes_external: false
- [system-prompt] Kickstart Prompt for Web UX & UI Design. A prompt to kick start a web design project. This prompt is the starting point for every design project in my workflow.
  source: https://prompts.chat/prompts/cmmnb9dxg0001l8047jcrujr5_kickstart-prompt-for-web-ux-ui-design
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-kickstart-prompt-for-web-ux-ui-design.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Excel Data to Figma Presentation Designer. Transform your weekly Excel data into a sleek, readable, and aesthetically pleasing Figma presentation format.
  source: https://prompts.chat/prompts/cmjrggy0h0001jx04fiyxm5yj_excel-data-to-figma-presentation-designer
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-excel-data-to-figma-presentation-designer.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Make UI/UX better of an already Created Application. Generate a comprehensive, actionable development plan to enhance the existing web application.
  source: https://prompts.chat/prompts/cmmk64mqt000hjv04p6gpiiti_make-uiux-better-of-an-already-created-application
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-make-uiux-better-of-an-already-created-application.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] UI Designer Role. Act as a UI Designer to create intuitive and visually appealing user interfaces.
  source: https://prompts.chat/prompts/cmjffc2my0001js04kskcgjiw_ui-designer-role
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-ui-designer-role.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] UX/UI Developer. I want you to act as a UX/UI developer. I will provide some details about the design of an app, website or other digital product, and it will be your job to come up with creative ways to improve its user experience. This
  source: https://prompts.chat/prompts/cmj1zb14o003pvl0resywfieo_uxui-developer
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-uxui-developer.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Web Design. I want you to act as a web design consultant. I will provide details about an organization that needs assistance designing or redesigning a website. Your role is to analyze these details and recommend the most suitable i
  source: https://prompts.chat/prompts/cmj26y5ci0001u80rkksgnrdm_web-design
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-web-design.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] change home page desgin for blog and documentation platorm. change home page desgin which contain header bar,tags,blog cards and docs card , give better ui design
  source: https://prompts.chat/prompts/cmm51bp2p0001jp046bwjorxw_change-home-page-design-for-blog-and-documentation-platform
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-change-home-page-design-for-blog-and-documentation-platform.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Generate a Plan for Building the Best UI/UX. Generate a comprehensive, actionable development plan for building a responsive web application.
  source: https://prompts.chat/prompts/cmmk5uygc0001jv04g4yuguhi_generate-a-plan-for-building-the-best-uiux
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-generate-a-plan-for-building-the-best-uiux.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Rustic Farm Logo Design. I'm looking for a talented designer to create a rustic-style farm logo for my brand. R Lucky Star Farm
  source: https://prompts.chat/prompts/cmug1en4j0001i904qunedjs2_rustic-farm-logo-design
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-rustic-farm-logo-design.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Tistory Blog Skin UI/UX Enhancement Pipeline. Tistory Poster 스킨 기반 블로그의 UI/UX를 프로페셔널 수준으로 개선하는 구조화된 프롬프트. inpa.tistory.com 레퍼런스 기반.
  source: https://prompts.chat/prompts/cmmlkcl380005l604a6fmy1h3_tistory-blog-skin-uiux-enhancement-pipeline
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-tistory-blog-skin-uiux-enhancement-pipeline.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Web Design Consultant. I want you to act as a web design consultant. I will provide you with details related to an organization needing assistance designing or redeveloping their website, and your role is to suggest the most suitable interface
  source: https://prompts.chat/prompts/cmj1zb17l005avl0rn2t38f1q_web-design-consultant
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-web-design-consultant.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false

## Step 4: Do it

Follow a workflow or case. Install a skill or MCP server only if you have permission.

- [case] How this site was designed (Agent Academy design record). source: https://siinxu.github.io/agent-academy/cases/agent-academy-build/. raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/content/cases/agent-academy-build.en.md

- [workflow] UI Hub skills.json (recommended design workflow). Workflow: pick ONE direction skill (frontend-design or taste-skill) → search resources by style/kind → build with emil-design-eng → audit with impeccable + web-design-guidelines + accessibility → verify in browser light+
  source: https://siinxu.github.io/ui-resource-hub/api/skills.json
  license: aggregator
  needs_credentials: false, writes_external: false
- [case] Multimodal Design Agent Team. A Streamlit application that provides comprehensive design analysis using a team of specialized AI agents powered by Google's Gemini model.
  source: https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/advanced_ai_agents/multi_agent_apps/agent_teams/multimodal_design_agent_team
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/shubhamsaboo-awesome-llm-apps-advanced-ai-agents-multi-agent-apps-agent-teams-multimodal-d.md
  license: Apache-2.0
  needs_credentials: false, writes_external: false
- [mcp] io.github.GLips/Figma-Context-MCP. Give your coding agent access to your Figma data. Implement designs in any framework in one-shot.
  source: https://github.com/GLips/Figma-Context-MCP
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-glips-figma-context-mcp.md
  license: MIT
  install: npx -y figma-developer-mcp
  needs_credentials: true, writes_external: false
- [mcp] Figma MCP Server. The Figma MCP server brings Figma design context directly into your AI workflow.
  source: https://github.com/figma/mcp-server-guide
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://mcp.figma.com/mcp
  needs_credentials: true, writes_external: false
- [mcp] io.github.TranHoaiHung/figma-ui-mcp. Bidirectional Figma MCP — AI draws UI on Figma canvas, reads designs back
  source: https://github.com/TranHoaiHung/figma-ui-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-tranhoaihung-figma-ui-mcp.md
  license: MIT
  install: npx -y figma-ui-mcp
  needs_credentials: false, writes_external: false
- [mcp] Keyline Icons. Search Keyline Icons by name and get any icon's SVG source or React import. No key, no network.
  source: https://github.com/keyline-icons/keyline-icons
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-com-keylineicons-mcp.md
  license: MIT
  install: npx -y @keyline-icons/mcp
  needs_credentials: false, writes_external: false
- [mcp] com.webflow/mcp. AI-powered design and management for Webflow Sites
  source: https://github.com/webflow/mcp-server
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-com-webflow-mcp.md
  license: MIT
  install: remote (streamable-http): https://mcp.webflow.com/mcp
  needs_credentials: true, writes_external: true
- [mcp] Illustrator MCP Server. Drive Adobe Illustrator from any MCP client: artwork, type, colour, effects, data and export.
  source: https://github.com/zachshallbetter/adobe-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-zachshallbetter-adobe-mcp-illustrator.md
  license: MIT
  install: npx -y adobe-mcp-illustrator
  needs_credentials: true, writes_external: false
- [mcp] io.github.neozhehan/figma-edit-mcp. Programmatically read, create, and modify Figma designs via MCP.
  source: https://github.com/neozhehan/figma-edit-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-neozhehan-figma-edit-mcp.md
  license: MIT
  install: npx -y figma-edit-mcp
  needs_credentials: false, writes_external: true
- [mcp] Figma MCP Server. A local MCP server with full Figma REST API coverage.
  source: https://github.com/planetabhi/figma-mcp-server
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-planetabhi-figma-mcp-server.md
  license: MIT
  install: npx -y figma-mcp-server
  needs_credentials: true, writes_external: false
- [mcp] figmanage. Let agents manage your Figma workspace. 102 tools for seats, teams, offboarding, and cleanup.
  source: https://github.com/dannykeane/figmanage
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-dannykeane-figmanage.md
  license: MIT
  install: npx -y figmanage
  needs_credentials: false, writes_external: true
- [mcp] io.github.felixAnhalt/Figma-Context-MCP. LLM-optimized Figma MCP server.
  source: https://github.com/felixAnhalt/figma-to-code-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-felixanhalt-figma-context-mcp.md
  license: MIT
  install: npx -y @tmegit/figma-developer-mcp
  needs_credentials: true, writes_external: false
- [mcp] io.github.cmd8/excalidraw-mcp. Model Context Protocol server for Excalidraw diagrams.
  source: https://github.com/cmd8/excalidraw-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-cmd8-excalidraw-mcp.md
  license: MIT
  install: npx -y @cmd8/excalidraw-mcp
  needs_credentials: false, writes_external: false
- [mcp] io.github.debu-sinha/excalidraw. Security-hardened Excalidraw MCP server with auth, rate limiting, and 14 tools
  source: https://github.com/debu-sinha/excalidraw-mcp-server
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-debu-sinha-excalidraw.md
  license: MIT
  install: npx -y excalidraw-mcp-server
  needs_credentials: false, writes_external: false
- [mcp] Figma MCP Server. MCP server enabling AI assistants to interact with Figma designs via natural language commands
  source: https://github.com/oabolade/figma_mcp_server_actor
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-oabolade-figma-mcp-server-actor.md
  license: ISC
  install: npx -y @oabolade-pegasus/figma-mcp-server
  needs_credentials: true, writes_external: false
- [mcp] figma-vault. Figma designs pulled once into a local vault; AI agents read them offline with no rate limits
  source: https://github.com/NBhey/figma-vault
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-nbhey-figma-vault.md
  license: MIT
  install: npx -y figma-vault
  needs_credentials: false, writes_external: false
- [mcp] io.github.compassalessandrolorenz/Figma-Context-MCP-AIR. Figma MCP server for AI agents. 9 tools: design context, variables, screenshots, and FigJam.
  source: https://github.com/compassalessandrolorenz/Figma-Context-MCP-AIR
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-compassalessandrolorenz-figma-context-mcp-air.md
  license: MIT
  install: npx -y figma-context-mcp-air
  needs_credentials: true, writes_external: false
- [tool] 21st-dev/magic-mcp. 在 Cursor 里调用 1 万+ React / Tailwind 组件（21st 的 MCP）
  source: https://github.com/21st-dev/magic-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/uihub-ued-magic-mcp.md
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tool] 3Dicons. 免费 3D 图标
  source: https://3dicons.co
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tool] Adobe Leonardo. 按对比度生成无障碍色阶，Adobe 开源
  source: https://leonardocolor.io/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [tool] Agentation. 在界面上直接标注问题，生成说明给编程 Agent（@tranmautritam）
  source: https://agentation.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [mcp] All SVG Icons. Search and fetch SVG icons from 250,000+ icons across 200+ open-source icon sets.
  source: https://allsvgicons.com/mcp/
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://i.allsvgicons.com/mcp
  needs_credentials: true, writes_external: false
- [mcp] Andorra public sources. Andorra public data: BOPA bulletin, statistics, maps, e-tramits procedures and govern.ad pages
  source: https://github.com/joalavedra/andorra-fonts-publiques
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-joalavedra-andorra-fonts-publiques.md
  license: CC0-1.0
  install: uvx fonts-andorra
  needs_credentials: false, writes_external: false
- [tool] Bolt. 对话生成应用，可在线改代码
  source: https://bolt.cello.so/ByQ3siiRkMz
  license: see source (listed via UI Hub)
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
