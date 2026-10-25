---
name: design-design-engineer
description: Agent Academy course for Design engineer (Design). Five ordered steps of real, source-linked resources.
version: 2026-10-25
updated_at: 2026-10-25T00:21:53Z
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

- [template] Framecraft. Builds and cleans Figma frames for product designers: library components, CSS-style autolayout, pixel-accurate spacing from inspected properties. Keeps
  source: https://botsdots.site/templates/framecraft
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/rT68Jw98kUdeABmvFobN5
  needs_credentials: true, writes_external: false
- [template] Webi. A web designer and front-end coder that owns your site's look, mockups and HTML/CSS/JS/WordPress code, and proves every change on the live URL.
  source: https://botsdots.site/templates/webi
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/LI80oX1Y_cQ_t9f4LwgxE
  needs_credentials: false, writes_external: false
- [design-system] Apple Human Interface Guidelines. Apple's platform design guidance: foundations, patterns, components, inputs, technologies.
  source: https://developer.apple.com/design/human-interface-guidelines
  license: Apple terms; link only
  needs_credentials: false, writes_external: false
- [design-system] Material Design 3. Google's open-source design system: foundations, styles (color, typography, motion), components.
  source: https://m3.material.io/
  license: Google site terms; link only
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
- [skill] design-taste-frontend. tasteskill v2, the anti-slop frontend skill. Art direction for websites, distilled from a study of 247 curated gallery sites (One Page Love, Awwwards Sites of the Day). Deals researched directions (idea, composition, typ
  source: https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/leonxlnx-taste-skill-skills-taste-skill.md
  license: MIT
  install: npx skills add Leonxlnx/taste-skill --skill taste-skill
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
- [skill] 0xdesign/design-lab. A design exploration flow: interview, multiple options, iterate on feedback
  source: https://www.ui-skills.com/skills/0xdesign/design-lab
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] accessibility（Addy Osmani）. Accessibility design
  source: https://www.ui-skills.com/skills/addyosmani/accessibility
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] adapt（Paul Bakaus）. Responsive adaptation
  source: https://www.ui-skills.com/skills/pbakaus/adapt
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] addyosmani/agent-skills. Addy Osmani’s engineering skills, including frontend performance and quality
  source: https://github.com/addyosmani/agent-skills
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/uihub-ued-addy-agent-skills.md
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] Ant Design for Agents（MCP + Skill）. Ant Group official: antd mcp and antd setup --client cursor/claude/codex install the MCP and skill in one command
  source: https://ant-design.antgroup.com/docs/react/for-agents
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] anthropics/canvas-design. Anthropic's official skill for posters and visual design
  source: https://www.ui-skills.com/skills/anthropics/canvas-design
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] anti-slop. An anti-AI-slop design skill
  source: https://github.com/miqdadbadjuber/anti-slop
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/uihub-ued-anti-slop.md
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] apple-design（Emil Kowalski）. Apple-style design
  source: https://www.ui-skills.com/skills/emilkowalski/apple-design
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] avoid-ai-design. A rule set for avoiding templated AI-looking design
  source: https://github.com/funboy322/avoid-ai-design
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/uihub-ued-avoid-ai-design.md
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] beautiful-shadows（Meng To）. Beautiful shadows
  source: https://www.ui-skills.com/skills/mengto/beautiful-shadows
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] bencium Claude Code Design Skill. Called “one of the most complete UX design skills” by the community; focused on UX flow and usability
  source: https://github.com/bencium/bencium-claude-code-design-skill
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/uihub-ued-bencium-design.md
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] better-interface（Jakub Krehel）. Polish interface details
  source: https://www.ui-skills.com/skills/jakubkrehel/better-interface
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [system-prompt] Comprehensive UI/UX Mobile App Analysis. Perform a detailed UI/UX analysis on mobile app screenshots, providing feedback from multiple perspectives including designer, engineer, and user.
  source: https://prompts.chat/prompts/cmj9yexu6000ns80rshl4m7vr_comprehensive-uiux-mobile-app-analysis
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-comprehensive-uiux-mobile-app-analysis.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [skill] dammyjay93/interface-design. Specialized in admin panels, dashboards and SaaS UIs
  source: https://www.ui-skills.com/skills/dammyjay93/interface-design
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] design-guide（GrubbyLee）. A design guide written for agents
  source: https://github.com/GrubbyLee/design-guide
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/uihub-ued-grubby-design-guide.md
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] design-review（superfuture）. Design review
  source: https://www.ui-skills.com/skills/superfuture/design-review
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] diffusionstudio/text-to-lottie. Generate Lottie animations from text
  source: https://www.ui-skills.com/skills/diffusionstudio/text-to-lottie
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] Emil Kowalski · skills. Emil's agent skills repo: /mobile-native (native touch feel, no hover) and /break-ui (stress-test UI with extreme data like long names) (from X: @emilkowalski, 4601 likes / 5138 bookmarks, 2026-10-04)
  source: https://github.com/emilkowalski/skills
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/uihub-x-emilkowalski-skills.md
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] emil-design-eng（Emil Kowalski）. Design engineering details
  source: https://www.ui-skills.com/skills/emilkowalski/emil-design-eng
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] emilkowalski/animate. Animate from scratch, deciding in the right order whether and how things move
  source: https://www.ui-skills.com/skills/emilkowalski/animate
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [skill] emilkowalski/review-animations. Review animation timing, rhythm and consistency
  source: https://www.ui-skills.com/skills/emilkowalski/review-animations
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
