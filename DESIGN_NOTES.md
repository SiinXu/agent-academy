# DESIGN_NOTES - Agent Academy (working name)

Status: written 2026-10-15 before any CSS. Hex values are estimated by eye from the 800px webp previews (not pulled from source CSS); they get re-checked against the real build.
Process followed: site-plan.md section 2.4 sample course -> UI Hub (data.json clustered, previews opened) -> frontend-design + taste-skill + impeccable rules -> emil-design-eng / UI Hub kb/spec/motion.md for motion -> self-check.

## Design read (one line)
A campus catalogue for agents: a dense, editorial bento index where each profession is a grain-gradient "faculty" tile, crowned by a slowly turning academy seal, set in a wide heavy grotesk. Mode (impeccable): Read + Operate (browse and copy), not Persuade.

## 1. Clustering data.json (2,376 items in the local copy; 2,391 in the live api/resources.json)
Counted every `vs` (visual style) tag before choosing, rather than starting from DESIGN_BRIEF.md:

| vs cluster | items | what is in it | verdict |
|---|---|---|---|
| minimal | 1031 | mostly component styles (723), skills, libraries | too generic as a world; used only for body discipline |
| enterprise | 805 | Ant/TDesign/Arco component styles | rejected: dashboard look the user already vetoed |
| material | 326 | Google M3 component styles | rejected: system look, no identity |
| soft | 259 | pastel component styles | rejected: low density |
| playful | 216 | stickers, mascots | rejected: wrong tone for a reference catalogue |
| motion | 152 | Motion+, Transitions, Rive, Skiper, Animata | **kept** (motion vocabulary) |
| dark-tech | 102 | Lukacho, Skiper, Rare UI, Aceternity, Magic UI | partly kept (Lukacho line field, Skiper seal); Aceternity/Magic rejected because usage.incidental.site already lives there |
| gradient / 3d | 78 / 67 | NEAT, Backgrounds Supply, Canvas UI, Codrops | **kept** as grain gradients only, never rainbow |
| editorial | 25 | Codrops, Inspora, Reelfolio, Land-book, Refero | **kept** (bento index + dense masonry) |
| swiss | 19 | Vercel/Uber/IBM specs | rejected: hairline-grid broadsheet is an AI tell (frontend-design trait 3) |
| skeuomorphic | 8 | liquid metal, metallic paint | rejected: that is the usage site's chrome dial; must not reskin |

Chosen intersection: **editorial x motion x gradient** (Codrops + Skiper + Lukacho + Backgrounds Supply + Rare UI + Rive + Inspora + Reelfolio).

## 2. Previews actually opened with the Read tool (19 files)
previews/tympanus-net-codrops.webp, previews/site/tympanus-net-codrops.webp, previews/skiper-ui-com.webp, previews/site/skiper-ui-com.webp, previews/ui-lukacho-com.webp, previews/rive-app.webp, previews/backgrounds-supply.webp, previews/rareui-com.webp, previews/inspora-design.webp, previews/site/inspora-design.webp, previews/reelfolio-io.webp, previews/neat-firecms-co.webp, previews/canvasui-dev.webp, previews/60fps-design.webp, previews/ui-elevenlabs-io.webp, previews/transitions-dev.webp, previews/originkit-dev.webp, previews/libraries-dev.webp, previews/brandguidelines-net.webp

## 3. KEPT (8 references)

| # | Library (data.json id) | Preview path | Borrowed element + motion type | hex (est.) | radius | shadow | fonts (observed) |
|---|---|---|---|---|---|---|---|
| 1 | Codrops (`tympanus-net-codrops`, vs editorial/motion/3d) | previews/site/tympanus-net-codrops.webp + previews/tympanus-net-codrops.webp | 3-column **bento index**: tall colored feature tiles (Creative Hub dark, Spotlights cobalt, Webzibition violet) flanking a list of article rows with thumbs. Cover: **grain gradient** cobalt to deep teal. Motion: slow gradient drift on tile hover (background-position), thumbnail lift | page #F2F2F2, tile dark #1C1C22, cobalt #3A47F5, deep teal #0E3A44, text #111 | tiles 8px, thumbs 6px | none, color blocks carry depth | wide heavy grotesk wordmark (extended, ~800), neutral sans body |
| 2 | Skiper UI (`skiper-ui-com`) | previews/skiper-ui-com.webp + previews/site/skiper-ui-com.webp | **Rotating seal / crest** (text on a circle around a blue orb) = the academy emblem; giant condensed display headline with tiny letter-spaced caption; command-copy pill (`npx shadcn add ...`) next to a primary button. Motion: continuous slow rotation (40s linear), orb inner gradient shift | bg #0E0E0E / #FFFFFF, orb #1E6BFF to #0A1A4F, pill #F2F2F2 | pill 10px, button 10px | none | heavy grotesk display 800 uppercase, spaced small serif caps for caption (not reused: serif tell) |
| 3 | Lukacho UI (`ui-lukacho-com`, ct motion/chart) | previews/ui-lukacho-com.webp | **Thin-line wave field**: ~40 hairline bezier strokes sweeping across the hero behind the copy. Motion: slow drift / phase shift of the stroke bundle (transform only) | bg #0B0B0B, strokes #FFFFFF at 8-25% | n/a | none | bold grotesk 700, tight leading |
| 4 | Backgrounds Supply (`backgrounds-supply`) | previews/backgrounds-supply.webp | **Wine-to-pink grain gradient** for the Marketing faculty tile; glassy outline pills for counts. Motion: gradient hue drift on hover | #E0457B, #8E1D4F, #3B0A22, pill border rgba(255,255,255,.35) | pills 999px | none | geometric sans 400/500 |
| 5 | Rare UI (`rareui-com`) | previews/rareui-com.webp | **Bold organic petal shape** bleeding off the tile edge; vivid orange on near-black = the Design faculty tile. Motion: petals rotate a few degrees on hover (spring) | #FF5A1F on #17171A | petals ~28px rounded squares | none | Inter-like 600 (not reused) |
| 6 | Rive (`rive-app`, ct motion/button) | previews/rive-app.webp | **Pipeline chips** `EDITOR -> FORMAT -> RUNTIME -> RENDERER`: used for the 5-step course path (Enrol, Pick a direction, Learn the rules, Do it, Self-check). Motion: a traveling highlight steps along the chain; click selects a step | #FFFFFF chips on #1E1E1E, accent #F5A623 (not reused) | 3px chip | none | squared techno caps (not reused) |
| 7 | Inspora (`inspora-design`, editorial/minimal) | previews/site/inspora-design.webp | **Dense masonry of real items** with a filter row of flat tabs and a real status pill ("Updated hourly" -> our "Data updated <time>"). Motion: none at rest; hover raises the tile 2px | #FFFFFF, tabs #EBEBEB, active #1A1A1A | tiles 4px | none | neutral grotesk 13-14px |
| 8 | Reelfolio (`reelfolio-io`) | previews/reelfolio-io.webp | **Fanned card stack** (numbered stacked screenshots) -> the hero "latest additions" stack that fans out on hover/focus. Numbering is legit here: it is a real order (newest first) | cards #FFFFFF, shadow soft | 10px | 0 8px 24px rgba(0,0,0,.12) (only on the stack) | n/a |

## 4. REJECTED (with reason)
- previews/neat-firecms-co.webp: rainbow mesh (orange-magenta-cyan) = generic AI gradient. Only the idea "gradient as a material" survives, in single-hue grain form.
- previews/canvasui-dev.webp: periwinkle haze + floating particles = AI purple.
- previews/originkit-dev.webp: purple particle fields, same reason.
- previews/ui-elevenlabs-io.webp: clean shadcn kit, equal rounded cards, centered hero: the SaaS-card kit tell (frontend-design trait 4).
- previews/transitions-dev.webp: pastel blur, too soft; keep only the idea of page transitions (cross-document View Transitions).
- previews/libraries-dev.webp and previews/brandguidelines-net.webp: black + single white mark, sparse; also too close to the usage site's ink world.
- previews/60fps-design.webp: app-icon cluster; would need third-party logos we do not have rights to. Not used.
- Old skins that must not return: paper + orange, Carbon gray, Instrument + lime; usage.incidental.site's ink + chrome + electric blue; UI Hub's midnight ink + cyan aurora.

## 5. Token system
Color (light / dark):

| token | light | dark | from |
|---|---|---|---|
| --canvas | #ECECEF | #0D0D11 | Codrops page gray, cooled |
| --surface | #FFFFFF | #16161C | Inspora tiles |
| --surface-2 | #F4F4F6 | #1E1E26 | |
| --ink | #15151B | #F0F0F4 | |
| --muted | #575764 | #A3A3B2 | AA on both surfaces |
| --line | #D6D6DD | #2C2C36 | |
| --link / focus | #3340E6 | #9AA3FF | Codrops cobalt |
| faculty: customer-service | #3A47F5 -> #0E3A44 | same | Codrops cover |
| faculty: marketing | #E0457B -> #3B0A22 | same | Backgrounds Supply |
| faculty: design | #FF5A1F petals on #17171A | same | Rare UI |

Type:
- Display: **Archivo** variable (wdth 62-125, wght 100-900), set expanded (wdth 112-125) weight 800 for headlines and the wordmark, condensed (wdth 75) for big counters. Echoes the Codrops/Skiper wide heavy grotesk. Not Inter, not Fraunces/Instrument (banned by taste-skill).
- Body/UI: **Geist** variable 400/500/600, 15px body, 1.6 line-height, max 72ch.
- Code only: **Geist Mono** for install commands and endpoint paths (real code, not decorative data labels).
- CJK falls back to system (PingFang SC/TC, Hiragino, Apple SD Gothic Neo, Noto Sans CJK); Vietnamese diacritics covered by Geist/Archivo latin-ext.
- Rules: sentence case everywhere, no all-caps labels, no em dash in copy, no "01/02" except the real 5-step course order and the real newest-first stack.

Radius scale (by hierarchy, not one value): faculty tiles 14px, resource tiles 8px, chips 6px, pills 999px, seal circle.
Shadow: none on cards (color blocks and 1px lines carry depth); one soft shadow only on the fanned stack.
Spacing: 4px base; card padding is one token `--pad: 18px` (mobile 16px) used by every card type; gaps 12/16/24/40.

## 6. Motion budget (one orchestrated moment per page + responsive feedback)
| motion | where | spec | reduced-motion |
|---|---|---|---|
| seal rotation | hero emblem | 48s linear infinite rotate, pauses offscreen (IntersectionObserver) | static |
| line-wave drift | hero background | 2 SVG stroke bundles, translateX/rotate 18s ease-in-out alternate | static |
| fanned stack | hero latest additions | rest: rotated -6..6deg stacked; hover/focus: spread translateY, 260ms cubic-bezier(.2,.8,.2,1) | no transform, plain list |
| grain gradient drift | faculty tiles | background-position 0 -> 40% on hover, 600ms ease-out; petals rotate 8deg spring | color only |
| pipeline traveler | course path | highlight steps every 1.6s once when scrolled into view, then stops; click to select | first step selected |
| number ticker | counts | count-up 900ms ease-out once | final number |
| page transitions | all pages | `@view-transition { navigation: auto }` 220ms fade | none |
Only transform/opacity/background-position animate. No scroll listeners (IntersectionObserver only).

## 7. Layout plan (desktop 1440 / mobile 390)
```
[wordmark]  Courses  Templates  New  Sources  For agents      [lang] [theme]
+--------------------------------------+---------------------------+
| H1 (2 lines max) + 1-line sub        |  seal  +  fanned stack of |
| [copy: "Read https://.../agent.md"]  |  5 newest real resources  |
| real counts row (ticker)             |                           |
|        line-wave field behind        |                           |
+--------------------------------------+---------------------------+
| FACULTY BENTO: CS tile (cobalt) | MK tile (wine) | DS tile (petal) |   tall tiles, roles + counts
|  + 9 planned industries as a compact strip (marked "not open yet")  |
| COURSE PATH (Rive chips, 5 steps) | step detail with real resources  |
| LATEST: Inspora masonry, filter tabs by type, 24 newest            |
| MATRIX: profession x type counts (clickable cells)                 |
| FOR AGENTS: endpoint list with real sizes + copy                   |
| DESIGN CASE feature (this build's record)                          |
footer: data updated <local time>, sources, feed
```
Mobile: single column, bento becomes horizontal snap row of 3 faculty tiles, masonry 1 column, seal shrinks next to H1.

## 8. Anti-overflow + consistency rules (hard)
- Every URL, repo path, install command: `overflow-wrap:anywhere; word-break:break-word` and code blocks `white-space:pre-wrap`.
- Titles clamp to 2 lines, summaries to 3 on tiles; full text on detail page.
- One card padding token for all cards; tiles in a grid row share height (grid `align-items:stretch`), actions pinned to the bottom.

---

## 9. Direction change (2026-10-15, confirmed by the user via the parent agent)
1. The core interaction is a **prompt generator**, placed as a prominent **Quick start** module (not the whole page): pick or type the bot you want, profession and role, preferences (design style, reply language, platform) -> one copyable prompt that points to raw files in the GitHub repo (course.md, SKILL.md mirrors, role JSON).
2. The home page itself stays **fancy**: animated background, bento showcase, course and industry visualisations, a live "Latest added" feed from real data, and the design-course before/after case.
3. The design course is the thickest course and is wired to UI Hub data (api/resources.json, ~2,391 items); this site's own design process is its first case.
4. Template library = permissively licensed SKILL.md files + prompts.chat CC0 prompts + BotsDots directory, each with license + source link. Industries without a course show "Coming soon" (localised).
5. Every card shows two safety tags: needs credentials? sends externally?

### Extra previews opened for the home page (Read tool)
previews/ui-aceternity-com.webp, previews/magicui-design.webp, previews/www-cult-ui-com.webp, previews/cs/cs2-magicui-design--background--orbiting-circles--v0.webp, previews/cs/cs-ui-aceternity-com-background.webp, previews/cs/cs-magicui-design-layout.webp, previews/cs/cs2-magicui-design--background--shine-border--v0.webp, previews/cs/cs-ui-aceternity-com-card.webp
(total opened for this project: 27 files)

## 10. Three home-page directions

### Option A - "Campus bento" (CHOSEN)
Codrops bento + Skiper seal + Lukacho line field, with three Magic UI / Aceternity pieces used as the motion layer.
| element | library | preview path | hex | radius | shadow | motion |
|---|---|---|---|---|---|---|
| line-wave hero field | Lukacho UI | previews/ui-lukacho-com.webp | strokes ink at 10-22% | n/a | none | slow drift 18s, transform only |
| academy seal + orbiting sources | Skiper UI + Magic UI orbiting-circles | previews/skiper-ui-com.webp, previews/cs/cs2-magicui-design--background--orbiting-circles--v0.webp | orb #3A47F5 -> #0E3A44; rings line #D6D6DD / #2C2C36 | circle; source chips 999px | none | seal text rotates 48s; source chips orbit on two rings (40s / 60s, reverse) |
| bento showcase (faculties, course path, matrix) | Magic UI bento layout + Codrops tiles | previews/cs/cs-magicui-design-layout.webp, previews/site/tympanus-net-codrops.webp | tiles #FFFFFF / #16161C; faculty grains #3A47F5, #E0457B, #FF5A1F | 14px tiles, 8px inner | none (1px line) | hover gradient drift; inner "animated list" items slide in |
| Quick start generator card | Magic UI shine-border (single hue, not rainbow) | previews/cs/cs2-magicui-design--background--shine-border--v0.webp | border sweep #3A47F5 -> #E0457B -> #3A47F5 at 60% | 16px card, 10px inputs | none | conic border sweep 7s; output prompt types in 260ms on change |
| Latest added feed | Magic UI marquee / animated list | previews/cs/cs-magicui-design-layout.webp (notifications list) | rows #FFFFFF / #1E1E26 | 10px | 0 1px 0 line | two-row marquee (60s, pauses on hover/focus) |
| before/after design case | Aceternity 3D card | previews/cs/cs-ui-aceternity-com-card.webp | #F7F8FA card, #15151B text | 14px | 0 18px 40px -24px rgba(0,0,0,.35) | pointer tilt max 6deg + drag slider between before/after |
| wordmark + display type | Codrops / Skiper wide heavy grotesk | previews/tympanus-net-codrops.webp | ink | n/a | n/a | none |
Why chosen: it is the only option where the subject (a school with faculties) drives the structure; it keeps colour to three faculty hues + neutral, so it is fancy without rainbow; it works in both themes; it is visibly different from usage.incidental.site (ink + chrome + electric blue, metal dial) and from UI Hub (midnight + cyan aurora).

### Option B - "Aceternity night stage" (rejected)
| element | preview | hex | radius | shadow | motion |
|---|---|---|---|---|---|
| dark stage hero with metallic gradient headline | previews/cs/cs-ui-aceternity-com-background.webp | #0B0B0C bg, headline #FFFFFF -> #8A8A8A | 12px | none | spotlight beam, background beams |
| overlapping product collage | previews/ui-aceternity-com.webp | #18181B tiles | 12px | none | 3D tilt collage |
| generator as "join the waitlist"-style input | previews/cs/cs-ui-aceternity-com-background.webp | input border #2A2A2E | 8px | none | glow focus |
Rejected because: dark-only stage + spotlight + metallic headline is the usage.incidental.site world (would read as a reskin), and the collage needs product screenshots we do not have.

### Option C - "Cult pixel terminal" (rejected)
| element | preview | hex | radius | shadow | motion |
|---|---|---|---|---|---|
| grotesk + pixel-mono headline pair | previews/www-cult-ui-com.webp | #FAFAFA bg, #111 ink, #6B6B6B muted | 0-6px | none | decrypted-text reveal |
| centered big headline over hairline grid | previews/magicui-design.webp | grid #E6E6E6 | 0 | none | none |
| CLI footer strip `npx ... add` | previews/www-cult-ui-com.webp | mono #3F3F46 | 6px | none | caret blink |
Rejected because: it turns the home into a terminal/form (the user explicitly said not to reduce home to a form), relies on mono data labels and hairline grids (both AI tells in frontend-design / taste-skill), and has almost no colour to separate the professions.
