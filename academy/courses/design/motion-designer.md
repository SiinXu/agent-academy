---
name: design-motion-designer
description: Agent Academy course for Motion and interaction (Design). Five ordered steps of real, source-linked resources.
version: 2026-10-15
updated_at: 2026-10-15T10:41:56Z
source: https://siinxu.github.io/agent-academy/courses/design/motion-designer/
---

# Motion and interaction · Design

Goal: Learn to design an interface that does not look templated: pick one style from UI Hub, follow design skills, build, and verify with four screenshots.

Permissions: Mostly read-only. Figma/Canva MCP servers need tokens; skills are text you can read. Installing a skill writes files into the project; ask first.

Machine-readable version: https://raw.githubusercontent.com/SiinXu/agent-academy/main/academy/courses/design/motion-designer.json
Skill pack: https://siinxu.github.io/agent-academy/packs/design/motion-designer.zip
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

- [template] figma bro. Turns a Figma frame into a build spec, and audits your components, tokens, and motion
  source: https://botsdots.site/templates/figma-bro-pxnv
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/pXNvc_U2cGyZmheYrUuF_
  needs_credentials: true, writes_external: false
- [style-library] 60fps. 移动端界面动效（@neropursue）
  source: https://60fps.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Aceternity UI. 
  source: https://ui.aceternity.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Aceternity UI 全部组件. Full list of free Aceternity components: spotlight, 3D cards, background beams, text effects, floating nav.
  source: https://ui.aceternity.com/components
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Animata. 数百个免费动效组件
  source: https://animata.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Animate UI. 
  source: https://animate-ui.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Animate.css. 现成的 CSS 动画类，加个 class 就能动；许可以原仓库为准，本站只放链接
  source: https://animate.style/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Animated Icons. 207 个动画 React 图标
  source: https://animated-icons-nu.vercel.app
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Anime.js. 轻量 JavaScript 动画库
  source: https://animejs.com
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] AutoAnimate. 一行代码给列表加进出场动画
  source: https://auto-animate.formkit.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] BeUI. 漂亮的 React 组件
  source: https://beui.dev
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Circle Loaders. SVG 环形加载动画
  source: https://circleloaders.dominikakissi.com
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Codrops. 前端特效教程和 Demo 老牌站
  source: https://tympanus.net/codrops/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Cult UI. 
  source: https://www.cult-ui.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Eldora UI. 动效组件与模板，shadcn 风格
  source: https://www.eldoraui.site/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Embla Carousel. 轻量轮播，手感顺滑
  source: https://www.embla-carousel.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] GSAP. 专业级 JS 动画平台，免费使用但为自有许可（非 MIT），本站只放链接
  source: https://gsap.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Hover.dev. 偏交互感的现成组件和模板
  source: https://www.hover.dev/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Hover.dev 组件. Hover.dev animated components: buttons, navs, cards, heroes; some free.
  source: https://www.hover.dev/components
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Inspira UI. Vue/Nuxt animated components in the spirit of Aceternity and Magic UI. Free and open source.
  source: https://inspira-ui.com
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] interior. New GitHub UI repo: micro-interactions for react, built for the half-second after a click (★958, MIT, ddoemonn/interior)
  source: https://interior.dev
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] Kinetics. 150+ 动效，附 React 代码和可喂 AI 的提示词
  source: https://kinetics.colorion.co
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false

## Step 3: Learn the rules

Read the required skills, prompts and standards in order.

- [skill] emil-design-eng. This skill encodes Emil Kowalski's philosophy on UI polish, component design, animation decisions, and the invisible details that make software feel great.
  source: https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/emilkowalski-skills-skills-emil-design-eng-skill-md.md
  license: MIT
  needs_credentials: false, writes_external: false
- [skill] slack-gif-creator. Knowledge and utilities for creating animated GIFs optimized for Slack. Provides constraints, validation tools, and animation concepts. Use when users request animated GIFs for Slack like "make me a GIF of X doing Y for 
  source: https://github.com/anthropics/skills/blob/main/skills/slack-gif-creator/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/anthropics-skills-skills-slack-gif-creator.md
  license: Apache-2.0
  install: npx skills add anthropics/skills --skill slack-gif-creator
  needs_credentials: false, writes_external: false
- [skill] animate. Build an animation from scratch, making the decisions in the order that determines whether it feels right — should it animate at all, what purpose, which tool, which properties, which curve and duration, how it interrupt
  source: https://github.com/emilkowalski/skills/blob/main/skills/animate/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/emilkowalski-skills-skills-animate.md
  license: MIT
  install: npx skills add emilkowalski/skills --skill animate
  needs_credentials: false, writes_external: false
- [skill] animation-performance. Keep web animations inside the frame budget — animate composite-only properties, keep motion off the main thread when the page is busy, and find the cause when an animation drops frames. Covers the layout/paint/composite
  source: https://github.com/emilkowalski/skills/blob/main/skills/animation-performance/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/emilkowalski-skills-skills-animation-performance.md
  license: MIT
  install: npx skills add emilkowalski/skills --skill animation-performance
  needs_credentials: false, writes_external: false
- [skill] animation-vocabulary. Reverse-lookup glossary that turns a vague description of a web animation or motion effect into its exact term ("the bouncy thing when a popover opens" → Pop in; "the iOS rubber-band scroll" → Rubber-banding). Use when t
  source: https://github.com/emilkowalski/skills/blob/main/skills/animation-vocabulary/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/emilkowalski-skills-skills-animation-vocabulary.md
  license: MIT
  install: npx skills add emilkowalski/skills --skill animation-vocabulary
  needs_credentials: false, writes_external: false
- [skill] apple-design. Apple's approach to interface design and fluid, physical motion, translated for the web. Use when building or reviewing gesture-driven UI, spring animations, drag/swipe/sheet interactions, momentum and interruptible tran
  source: https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/emilkowalski-skills-skills-apple-design.md
  license: MIT
  install: npx skills add emilkowalski/skills --skill apple-design
  needs_credentials: false, writes_external: false
- [skill] find-animation-opportunities. Search a codebase or UI for places that don't animate but should, and reject everything that shouldn't. Read-only; it proposes motion with exact values, it does not implement it. Use when the user asks "what could be ani
  source: https://github.com/emilkowalski/skills/blob/main/skills/find-animation-opportunities/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/emilkowalski-skills-skills-find-animation-opportunities.md
  license: MIT
  install: npx skills add emilkowalski/skills --skill find-animation-opportunities
  needs_credentials: false, writes_external: false
- [skill] improve-animations. Survey a codebase's animation and motion code as a senior motion advisor, then produce a prioritized audit and self-contained implementation plans for other agents (or cheaper models) to execute. Read-only on source code
  source: https://github.com/emilkowalski/skills/blob/main/skills/improve-animations/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/emilkowalski-skills-skills-improve-animations.md
  license: MIT
  install: npx skills add emilkowalski/skills --skill improve-animations
  needs_credentials: false, writes_external: false
- [skill] review-animations. Reviews animation and motion code against a high craft bar derived from Emil Kowalski's design engineering philosophy. Default to flagging; approval is earned.
  source: https://github.com/emilkowalski/skills/blob/main/skills/review-animations/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/emilkowalski-skills-skills-review-animations.md
  license: MIT
  install: npx skills add emilkowalski/skills --skill review-animations
  needs_credentials: false, writes_external: false
- [skill] interaction-design. Design and implement microinteractions, motion design, transitions, and user feedback patterns. Use when adding polish to UI interactions, implementing loading states, or creating delightful user experiences.
  source: https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/interaction-design/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-ui-design-skills-interaction-design.md
  license: MIT
  install: npx skills add wshobson/agents --skill interaction-design
  needs_credentials: false, writes_external: false
- [skill] react-native-design. Master React Native styling, navigation, and Reanimated animations for cross-platform mobile development. Use when building React Native apps, implementing navigation patterns, or creating performant animations.
  source: https://github.com/wshobson/agents/blob/main/plugins/ui-design/skills/react-native-design/SKILL.md
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/wshobson-agents-plugins-ui-design-skills-react-native-design.md
  license: MIT
  install: npx skills add wshobson/agents --skill react-native-design
  needs_credentials: false, writes_external: false
- [system-prompt] Apple-Level UI System Designer (2026 Standard). Transforms any idea into a clean, premium, Apple-inspired UI system with real design discipline and production-ready structure. It avoids “AI-vibe coded” outputs by enforcing disciplined layout systems, intentional spaci
  source: https://prompts.chat/prompts/cmmxtz3690005l704lv6dp3h5_apple-level-ui-system-designer-2026-standard
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-apple-level-ui-system-designer-2026-standard.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false
- [system-prompt] Visual QA & Cross-Browser Audit. Systematically checks a built design against its intended specification across browsers, devices, and edge cases. This is the designer's QA not functional testing, but visual fidelity and interaction quality. Produces a 
  source: https://prompts.chat/prompts/cmmoq1aqr000kle046h0960yk_visual-qa-cross-browser-audit
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/mirror/prompts-chat-visual-qa-cross-browser-audit.md
  license: CC0-1.0
  needs_credentials: false, writes_external: false

## Step 4: Do it

Follow a workflow or case. Install a skill or MCP server only if you have permission.

- [case] How this site was designed (Agent Academy design record). source: https://siinxu.github.io/agent-academy/cases/agent-academy-build/. raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/content/cases/agent-academy-build.en.md

- [mcp] io.github.AJSMonty/adobe-mcp. Drive Adobe CC (AE, Photoshop, Illustrator, Premiere, Character Animator) from any MCP client
  source: https://github.com/AJSMonty/adobe-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-ajsmonty-adobe-mcp.md
  license: MIT
  install: npx -y @ajsmonty/adobe-mcp
  needs_credentials: true, writes_external: false
- [mcp] Icons8. Search and fetch genuine Icons8 icons and Ouch illustrations as SVG, PNG or animation.
  source: https://icons8.com/mcp
  license: unknown (registry metadata: CC-BY-4.0 docs; server license not stated)
  install: remote (streamable-http): https://mcp.icons8.com/mcp/
  needs_credentials: true, writes_external: false
- [tool] Unicorn Studio. 无代码做 WebGL 特效
  source: https://www.unicorn.studio/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [workflow] UI Hub skills.json (recommended design workflow). Workflow: pick ONE direction skill (frontend-design or taste-skill) → search resources by style/kind → build with emil-design-eng → audit with impeccable + web-design-guidelines + accessibility → verify in browser light+
  source: https://siinxu.github.io/ui-resource-hub/api/skills.json
  license: aggregator
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
