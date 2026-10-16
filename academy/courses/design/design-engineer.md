---
name: design-design-engineer
description: Agent Academy course for Design engineer (Design). Five ordered steps of real, source-linked resources.
version: 2026-10-16
updated_at: 2026-10-16T10:29:38Z
source: https://siinxu.github.io/agent-academy/courses/design/design-engineer/
---

# Design engineer · Design

Goal: Learn to design an interface that does not look templated: pick one style from UI Hub, follow design skills, build, and verify with four screenshots.

Permissions: Mostly read-only. Figma/Canva MCP servers need tokens; skills are text you can read. Installing a skill writes files into the project; ask first.

Machine-readable version: https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/design/design-engineer.json
Skill pack: https://siinxu.github.io/agent-academy/packs/design/design-engineer.zip
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

- minimal: 458 items
- editorial: 284 items
- dark-tech: 107 items
- motion: 103 items
- playful: 81 items
- enterprise: 41 items
- 3d: 33 items
- retro: 29 items
- swiss: 28 items
- gradient: 25 items
- soft: 15 items
- apple: 12 items
- brutalist: 12 items
- material: 11 items
- skeuomorphic: 8 items
- utilitarian: 7 items
- glass: 5 items
- fluent: 3 items
- industrial: 1 items
- neumorphism: 1 items

First case to read: how this site was designed by an agent: https://siinxu.github.io/agent-academy/cases/agent-academy-build/ (raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/content/cases/agent-academy-build.en.md)

- [template] Framecraft. Builds and cleans Figma frames for product designers: library components, CSS-style autolayout, pixel-accurate spacing from inspected properties. Keeps
  source: https://botsdots.site/templates/framecraft
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/rT68Jw98kUdeABmvFobN5
  needs_credentials: true, writes_external: false
- [design-system] Apple Human Interface Guidelines. Apple's platform design guidance: foundations, patterns, components, inputs, technologies.
  source: https://developer.apple.com/design/human-interface-guidelines
  license: Apple terms; link only
  needs_credentials: false, writes_external: false
- [design-system] Material Design 3. Google's open-source design system: foundations, styles (color, typography, motion), components.
  source: https://m3.material.io/
  license: Google site terms; link only
  needs_credentials: false, writes_external: false
- [style-library] UI Hub (Incidental AI UI resource hub) — llms.txt / api. Curated multilingual directory of ~2,391 public UI resources with visual-style (vs) facets, design KB (specs, skills), JSON endpoints and a recommended design-skill workflow.
  source: https://siinxu.github.io/ui-resource-hub/llms.txt
  license: aggregator; per-item license
  needs_credentials: false, writes_external: false

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

- [skill] frontend-design. Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.
  source: https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/anthropics-skills-skills-frontend-design-skill-md.md
  license: Apache-2.0 (per-skill LICENSE.txt; docx/pdf/pptx/xlsx are source-available, excluded)
  install: npx skills add anthropics/skills --skill frontend-design
  needs_credentials: false, writes_external: false
- [skill] web-artifacts-builder. Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui). Use for complex artifacts requiring state management, routing, or s
  source: https://github.com/anthropics/skills/blob/main/skills/web-artifacts-builder/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-skills-skills-web-artifacts-builder.md
  license: Apache-2.0
  install: npx skills add anthropics/skills --skill web-artifacts-builder
  needs_credentials: false, writes_external: false
- [skill] brandkit. Premium brand-kit image generation skill for creating high-end brand-guidelines boards, logo systems, identity decks, and visual-world presentations. Trained for minimalist, cinematic, editorial, dark-tech, luxury, cultu
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/brandkit/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-brandkit.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill brandkit
  needs_credentials: false, writes_external: false
- [skill] design-taste-frontend. tasteskill v2, the anti-slop frontend skill. Art direction for websites, distilled from a study of 247 curated gallery sites (One Page Love, Awwwards Sites of the Day). Deals researched directions (idea, composition, typ
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-taste-skill.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill taste-skill
  needs_credentials: false, writes_external: false
- [skill] design-taste-frontend-v1. The original v1 taste-skill, preserved for projects depending on its exact behavior. The current default is `design-taste-frontend` (v2), which is a new skill. Use this v1 install name only if you need exact backward com
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill-v1/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-taste-skill-v1.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill taste-skill-v1
  needs_credentials: false, writes_external: false
- [skill] design-taste-frontend-v2-experimental. Old v2 (experimental) of taste-skill, the single-file dial-driven version, preserved for projects depending on its exact behavior. The current default is `design-taste-frontend` (v2). Use this install name only if you ne
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill-v2-experimental/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-taste-skill-v2-experimental.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill taste-skill-v2-experimental
  needs_credentials: false, writes_external: false
- [skill] full-output-enforcement. Overrides default LLM truncation behavior. Enforces complete code generation, bans placeholder patterns, and handles token-limit splits cleanly. Apply to any task requiring exhaustive, unabridged output.
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/output-skill/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-output-skill.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill output-skill
  needs_credentials: false, writes_external: false
- [skill] gpt-taste. Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP Scro
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/gpt-tasteskill/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-gpt-tasteskill.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill gpt-tasteskill
  needs_credentials: false, writes_external: false
- [skill] high-end-visual-design. Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look che
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/soft-skill/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-soft-skill.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill soft-skill
  needs_credentials: false, writes_external: false
- [skill] image-to-code. Elite website image-to-code skill for Codex. For visually important web tasks, it must first generate the design image(s) itself, deeply analyze them, then implement the website to match them as closely as possible. In C
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/image-to-code-skill/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-image-to-code-skill.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill image-to-code-skill
  needs_credentials: false, writes_external: false
- [skill] imagegen-frontend-mobile. Elite mobile app image-generation skill for creating premium, app-native screen concepts and flows. Designed for iOS, Android, and cross-platform mobile products. Prioritizes clean hierarchy, comfortably readable text, s
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/imagegen-frontend-mobile/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-imagegen-frontend-mobile.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill imagegen-frontend-mobile
  needs_credentials: false, writes_external: false
- [skill] imagegen-frontend-web. Elite frontend image-direction skill for generating premium, conversion-aware website design references. CRITICAL OUTPUT RULE — generate ONE separate horizontal image FOR EVERY section. A landing page with 8 sections pro
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/imagegen-frontend-web/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-imagegen-frontend-web.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill imagegen-frontend-web
  needs_credentials: false, writes_external: false
- [skill] industrial-brutalist-ui. Raw mechanical interfaces fusing Swiss typographic print with military terminal aesthetics. Rigid grids, extreme type scale contrast, utilitarian color, analog degradation effects. For data-heavy dashboards, portfolios, 
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/brutalist-skill/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-brutalist-skill.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill brutalist-skill
  needs_credentials: false, writes_external: false
- [skill] minimalist-ui. Clean editorial-style interfaces. Warm monochrome palette, typographic contrast, flat bento grids, muted pastels. No gradients, no heavy shadows.
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/minimalist-skill/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-minimalist-skill.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill minimalist-skill
  needs_credentials: false, writes_external: false
- [skill] redesign-existing-projects. Upgrades existing websites and apps to premium quality. Audits current design, identifies generic AI patterns, and applies high-end design standards without breaking functionality. Works with any CSS framework or vanilla
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/redesign-skill/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-redesign-skill.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill redesign-skill
  needs_credentials: false, writes_external: false
- [skill] stitch-design-taste. Semantic Design System Skill for Google Stitch. Generates agent-friendly DESIGN.md files that enforce premium, anti-generic UI standards — strict typography, calibrated color, asymmetric layouts, perpetual micro-motion, 
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/stitch-skill/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-stitch-skill.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill stitch-skill
  needs_credentials: false, writes_external: false
- [skill] pick-ui-library. Pick the right library for a given frontend task from a curated, opinionated list — numbers, OTP inputs, charts, command menus, virtualization, drag and drop, toasts, state, styling, and more. Only runs when explicitly i
  source: https://github.com/emilkowalski/skills/blob/main/skills/pick-ui-library/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/emilkowalski-skills-skills-pick-ui-library.md
  license: MIT
  install: npx skills add emilkowalski/skills --skill pick-ui-library
  needs_credentials: false, writes_external: false
- [skill] prototype. Build multiple genuinely different versions of a UI piece you describe, rendered behind a visual picker so you can flip through them live and promote the one that feels right. Only runs when explicitly invoked; it does n
  source: https://github.com/emilkowalski/skills/blob/main/skills/prototype/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/emilkowalski-skills-skills-prototype.md
  license: MIT
  install: npx skills add emilkowalski/skills --skill prototype
  needs_credentials: false, writes_external: false
- [skill] nextjs-app-router-patterns. Master Next.js 14+ App Router with Server Components, streaming, parallel routes, and advanced data fetching. Use when building Next.js applications, implementing SSR/SSG, or optimizing React Server Components.
  source: https://github.com/wshobson/agents/blob/main/plugins/frontend-mobile-development/skills/nextjs-app-router-patterns/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-frontend-mobile-development-skills-nextjs-app-router-patterns.md
  license: MIT
  install: npx skills add wshobson/agents --skill nextjs-app-router-patterns
  needs_credentials: false, writes_external: false
- [skill] react-native-architecture. Build production React Native apps with Expo, navigation, native modules, offline sync, and cross-platform patterns. Use when developing mobile apps, implementing native integrations, or architecting React Native project
  source: https://github.com/wshobson/agents/blob/main/plugins/frontend-mobile-development/skills/react-native-architecture/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-frontend-mobile-development-skills-react-native-architecture.md
  license: MIT
  install: npx skills add wshobson/agents --skill react-native-architecture
  needs_credentials: false, writes_external: false
- [skill] react-state-management. Master modern React state management with Redux Toolkit, Zustand, Jotai, and React Query. Use when setting up global state, managing server state, or choosing between state management solutions.
  source: https://github.com/wshobson/agents/blob/main/plugins/frontend-mobile-development/skills/react-state-management/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-frontend-mobile-development-skills-react-state-management.md
  license: MIT
  install: npx skills add wshobson/agents --skill react-state-management
  needs_credentials: false, writes_external: false
- [skill] web-component-design. Master React, Vue, and Svelte component patterns including CSS-in-JS, composition strategies, and reusable component architecture. Use when building UI component libraries, designing component APIs, or implementing front
  source: https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/web-component-design/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-ui-design-skills-web-component-design.md
  license: MIT
  install: npx skills add wshobson/agents --skill web-component-design
  needs_credentials: false, writes_external: false
- [skill] design-handoff. Generate developer handoff specs from a design. Use when a design is ready for engineering and needs a spec sheet covering layout, design tokens, component props, interaction states, responsive breakpoints, edge cases, a
  source: https://github.com/anthropics/knowledge-work-plugins/blob/main/design/skills/design-handoff/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-knowledge-work-plugins-design-skills-design-handoff.md
  license: Apache-2.0
  install: npx skills add anthropics/knowledge-work-plugins --skill design-handoff
  needs_credentials: false, writes_external: false
- [system-prompt] design-bridge. Use this agent when you need to translate a DESIGN.md from the VoltAgent/awesome-design-md repository into polished Claude Code instructions for building user interfaces that faithfully match the chosen brand. Invoke thi
  source: https://github.com/VoltAgent/awesome-claude-code-subagents/blob/main/categories/01-core-development/design-bridge.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/voltagent-awesome-claude-code-subagents-categories-01-core-development-design-bridge.md
  license: MIT
  needs_credentials: false, writes_external: false
- [skill] 0xdesign/design-lab. 设计探索流程：访谈、出多个方案、按反馈迭代
  source: https://www.ui-skills.com/skills/0xdesign/design-lab
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] accessibility（Addy Osmani）. 无障碍设计
  source: https://www.ui-skills.com/skills/addyosmani/accessibility
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] adapt（Paul Bakaus）. 响应式适配
  source: https://www.ui-skills.com/skills/pbakaus/adapt
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] addyosmani/agent-skills. Addy Osmani 的工程 Skill 集，含前端性能和质量类
  source: https://github.com/addyosmani/agent-skills
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/uihub-ued-addy-agent-skills.md
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] Ant Design for Agents（MCP + Skill）. 蚂蚁官方：antd mcp、antd setup --client cursor/claude/codex，一条命令装好 MCP 和 Skill
  source: https://ant-design.antgroup.com/docs/react/for-agents
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] anthropics/canvas-design. Anthropic 官方，生成海报和视觉设计
  source: https://www.ui-skills.com/skills/anthropics/canvas-design
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] anti-slop. 反 AI slop 设计 Skill
  source: https://github.com/miqdadbadjuber/anti-slop
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/uihub-ued-anti-slop.md
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] apple-design（Emil Kowalski）. 苹果风格设计
  source: https://www.ui-skills.com/skills/emilkowalski/apple-design
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false

## Step 4: Do it

Follow a workflow or case. Install a skill or MCP server only if you have permission.

- [case] How this site was designed (Agent Academy design record). source: https://siinxu.github.io/agent-academy/cases/agent-academy-build/. raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/content/cases/agent-academy-build.en.md

- [workflow] ui-design. Guided component creation with proper patterns
  source: https://github.com/wshobson/agents/blob/main/plugins/ui-design/commands/create-component.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-ui-design-commands-create-component.md
  license: MIT
  needs_credentials: false, writes_external: false
- [mcp] Figma MCP Server. The Figma MCP server brings Figma design context directly into your AI workflow.
  source: https://github.com/figma/mcp-server-guide
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://mcp.figma.com/mcp
  needs_credentials: true, writes_external: false
- [mcp] Storybook MCP Addon. Help agents automatically write and test stories for your UI components.
  source: https://github.com/storybookjs/mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-storybookjs-addon-mcp.md
  license: MIT
  install: npx -y @storybook/addon-mcp
  needs_credentials: false, writes_external: true
- [mcp] Excalidraw Architect. Generate beautiful Excalidraw architecture diagrams with auto-layout and component styling
  source: https://github.com/BV-Venky/excalidraw-architect-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-bv-venky-excalidraw-architect-mcp.md
  license: MIT
  install: uvx excalidraw-architect-mcp
  needs_credentials: false, writes_external: false
- [mcp] Tailwind Shades. Tailwind CSS palettes (50-950) from any color, the closest Tailwind color, and Tailwind's defaults
  source: https://github.com/bourhaouta/vscode-tailwindshades
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-bourhaouta-tailwindshades.md
  license: MIT
  install: npx -y tailwindshades-mcp
  needs_credentials: true, writes_external: true
- [mcp] io.github.sunhome243/figma-mcp-express. Compact Figma MCP with validated batch ops through a local plugin bridge.
  source: https://github.com/sunhome243/figma-mcp-express
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-sunhome243-figma-mcp-express.md
  license: MIT
  install: npx -y figma-mcp-express
  needs_credentials: false, writes_external: false
- [mcp] io.github.felixAnhalt/Figma-Context-MCP. LLM-optimized Figma MCP server.
  source: https://github.com/felixAnhalt/figma-to-code-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-felixanhalt-figma-context-mcp.md
  license: MIT
  install: npx -y @tmegit/figma-developer-mcp
  needs_credentials: true, writes_external: false
- [mcp] io.github.kolganovr/figma-mcp-bridge. Write to a live Figma canvas, get a screenshot back, and roll back mistakes. Zero deps, free plan.
  source: https://github.com/kolganovr/figma-mcp-bridge
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-kolganovr-figma-mcp-bridge.md
  license: MIT
  install: npx -y @kolganovr/figma-mcp-bridge
  needs_credentials: false, writes_external: true
- [mcp] Figma CodeKit MCP. Figma to pixel-perfect code: deterministic HTML/React, then a render + pixel-diff verify loop.
  source: https://github.com/Mehmoodqureshi/figma-codekit-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-mehmoodqureshi-figma-codekit-mcp.md
  license: MIT
  install: npx -y figma-codekit-mcp
  needs_credentials: true, writes_external: false
- [mcp] io.github.jmshinhwa/tailwind-v4-upgrade-blocker-lint. 19 rules that find the Tailwind v3 syntax Tailwind v4 removed or silently redefined, in the file you
  source: https://github.com/jmshinhwa/readystack-themes
  license: proprietary
  install: npx -y @readystack/tailwind-v4-upgrade-blocker-lint
  needs_credentials: false, writes_external: false
- [mcp] Draw40. Draw40 is an independent diagram workspace with an interactive MCP Apps canvas. OAuth sign-in.
  source: https://draw.404040.net/
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://draw.404040.net/mcp
  needs_credentials: true, writes_external: false
- [mcp] Tailwind App. Tailwind MCP server — list Pinterest accounts and create, schedule, and manage Pinterest posts.
  source: https://api-docs.tailwind.ai/mcp
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://mcp.tailwind.ai
  needs_credentials: true, writes_external: true

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
