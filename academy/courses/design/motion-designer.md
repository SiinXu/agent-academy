---
name: design-motion-designer
description: Agent Academy course for Motion and interaction (Design). Five ordered steps of real, source-linked resources.
version: 2026-10-24
updated_at: 2026-10-24T00:46:06Z
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

- minimal: 1496 items
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

- [template] figma bro. Turns a Figma frame into a build spec, and audits your components, tokens, and motion
  source: https://botsdots.site/templates/figma-bro-pxnv
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/pXNvc_U2cGyZmheYrUuF_
  needs_credentials: true, writes_external: false
- [template] Art Bot. Artist and creative director that turns your brands into style guides, on-brand images, animations, video edits with music, decks and design critiques.
  source: https://botsdots.site/templates/art-bot
  license: template belongs to its creator (catalog CC0)
  install: https://x.ai/bot/uMHJk_yjZLpxC0GQfT4aK
  needs_credentials: false, writes_external: false
- [style-library] 'kin. ‘kin are a creative commercial interior design, branding and graphic design studio.
  source: https://by-kin.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] ©Design by Dylan. Portfolio by Dylan Brouwer: a Dutch digital designer & Webflow developer crafting experience-driven websites for brands & agencies. Bold, intuitive design...
  source: https://www.dylanbrouwer.design/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] +13322566869. Digital Producer. Specialized in Design & E-commerce. Only.From me to you.Always Responsive.Face to Face.Kyiv raised Miami Based.
  source: https://13322566869.com
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 000h. Listed in awesome-shadcn-ui: MIT-licensed shadcn registry of React components with organic shapes and adjustable motion, covering core UI, charts, drawers, text effects, animated backgrounds and WebGL sculptures.
  source: https://cojeev.com/ui/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 100 Lost Species. A digital memorial that unfolds across time. In 100 seconds, 100 lost species are remembered, before the site itself disappears, echoing their silence.
  source: https://www.100lostspecies.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 1367 Studio. Dark studio homepage: one glowing key visual holds the screen with minimal nav — a lesson in single-focus heroes (via CSS Design Awards)
  source: https://www.1367studio.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 1820 Productions. Award-winning video production company in Dallas, TX. We listen, craft, and deliver stylish production with seamless execution.
  source: https://www.1820productions.com
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 24/7 Artists. A bold, vibrant one-page website for 24/7 Artists, capturing the rhythm of music through dynamic visuals, depth, and movement—designed to empower artists...
  source: https://247artists.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 25 Residences. 25 Residences is an architectural firm that is redefining luxury living in the heart of Mumbai.
  source: https://25residences.com/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 3-in-1 Icon Morph. A clever icon animation where the signal bars, WiFi, and battery status icons seamlessly morph into a single combined WiFi symbol.
  source: https://x.com/hukamdesign/status/2097837510038868477
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 3200 Kelvin. Portfolio website for 3200 Kelvin — a Web Design & Development Studio creating authentic websites that speak, connect, illuminate, and transform brands'...
  source: https://www.3200kelvin.com
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 365 — A Year of Cartier. The Cartier Yearbook celebrates 2024's extraordinary journey, showcasing transformative creativity, innovation, and timeless elegance.
  source: https://365ayearof.cartier.com/en/
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 365 Days at Vercel. A dark, moody motion piece marking 365 days at Vercel, featuring a rotating 3D tetrahedron catching dramatic light against a pixelated typographic backdrop.
  source: https://x.com/JohnPhamous/status/2087226344564469850
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 3D Bank Card. A cinematic 3D render exploring the inside of a Lead Bank card, animating apart to reveal iridescent prismatic layers and glowing chip components beneath a minimal matte surface.
  source: https://x.com/glebich/status/2100831842253570148
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 3D Benchmark Art. A looping 3D motion study featuring iridescent bar-chart columns morphing between arc and M-shaped formations with prismatic blue and purple lighting, created as hero art for a model benchmark page.
  source: https://x.com/benfryc/status/2075275106301903067
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 3D Can. An interactive 3D beverage can built with three.js for Iskra Graphics, wrapped in vibrant sticker-style branding and rotating in a dark, bubble-filled environment.
  source: http://iskra.graphics/can
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 3D Face Morphing. A surreal 3D animation study where a hyper-realistic male face morphs between geometric and organic shapes, from spheres and cubes to melting puddles, on a vivid blue background.
  source: https://x.com/ingi_erlingsson/status/2085892337092162035
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 3D Fashion Models. A series of stylized 3D character renders in normal-map shading, featuring diverse streetwear and futuristic fashion outfits set against a vivid green background.
  source: https://x.com/ingi_erlingsson/status/2086274940861329645
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 3D Knot. A pastel rainbow-colored 3D knot object continuously rotates and morphs through different configurations in this smooth motion study.
  source: https://jlongster.com
  license: see source (listed via UI Hub)
  needs_credentials: false, writes_external: false
- [style-library] 3D Sphere Videos. A technical reference sheet comparing 3D sphere renders across multiple animation phases and material states, from glossy white to deep black, annotated with file names and phase values.
  source: https://x.com/kosta4a/status/2086083489418391688
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

- [mcp] After Effects MCP Server. Drive Adobe After Effects from any MCP client: compositions, layers, animation and rendering.
  source: https://github.com/zachshallbetter/adobe-mcp
  raw: https://raw.githubusercontent.com/SiinXu/agent-academy/main/data/originals/mcp-io-github-zachshallbetter-adobe-mcp-aftereffects.md
  license: MIT
  install: npx -y adobe-mcp-aftereffects
  needs_credentials: true, writes_external: false
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
- [tool] Unicorn Studio. Build WebGL effects without code
  source: https://www.unicorn.studio/
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
