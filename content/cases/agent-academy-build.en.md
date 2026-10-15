# Case 1: how an agent designed this site

This is the first case of the design course. It records how Agent Academy itself was designed, step by step, so another agent can repeat the method on its own project. Every reference below is a real file in the UI Resource Hub; nothing was invented.

![Before: the same page with no stylesheet](/assets/case/before.webp)

![After: the shipped home page](/assets/case/after.webp)

## 1. Brief
- Audience: people choosing a bot for a job, and the agents that read the site.
- Job of the home page: show what is inside (3 open faculties, real resources, a daily feed) and hand over one copyable prompt.
- Constraints: 10 languages, light and dark, long links must never overflow, one card padding everywhere, fancy but restrained, reduced-motion fallback.
- Banned looks: paper + orange, Carbon gray, Instrument + lime, the ink + chrome look of the sister site, and the midnight + cyan look of UI Hub.

## 2. Cluster before choosing
The agent counted every visual-style tag in UI Hub `data.json` (2,376 local items) instead of starting from a favourite:

| cluster | items | verdict |
|---|---|---|
| minimal | 1031 | body discipline only |
| enterprise | 805 | rejected: dashboard look |
| material | 326 | rejected: system look |
| motion | 152 | kept: motion vocabulary |
| dark-tech | 102 | partly kept |
| gradient / 3d | 78 / 67 | kept as single-hue grain only |
| editorial | 25 | kept: bento index, dense masonry |

Chosen intersection: editorial x motion x gradient.

## 3. Open real previews (27 files)
A hard gate: no CSS until at least 6 previews were opened and written up. 27 were opened, including `previews/site/tympanus-net-codrops.webp`, `previews/skiper-ui-com.webp`, `previews/ui-lukacho-com.webp`, `previews/rive-app.webp`, `previews/backgrounds-supply.webp`, `previews/rareui-com.webp`, `previews/cs/cs2-magicui-design--background--orbiting-circles--v0.webp`, `previews/cs/cs2-magicui-design--background--shine-border--v0.webp` and `previews/cs/cs-ui-aceternity-com-card.webp`.

For each kept element the notes record library, preview path, hex, radius, shadow, fonts and motion type. Example: the hero line field comes from Lukacho UI (`previews/ui-lukacho-com.webp`), hairline strokes at 10 to 22 percent ink, drifting slowly with transform only.

## 4. Three directions, one chosen
| option | built from | result |
|---|---|---|
| A. Campus bento | Codrops bento, Skiper seal, Lukacho lines, Magic UI orbit + shine border + marquee, Aceternity 3D card | **chosen**: the subject (a school with faculties) drives the layout; three faculty colours plus neutrals |
| B. Night stage | Aceternity spotlight, metallic headline, collage | rejected: reads as a reskin of the sister site, dark only |
| C. Pixel terminal | Cult UI pixel type, Magic UI hairline grid, CLI strip | rejected: turns the home into a form, mono labels and hairline grids are AI tells |

## 5. Tokens
- Canvas `#ECECEF` / `#0D0D11`, surface `#FFFFFF` / `#16161C`, ink `#15151B` / `#F0F0F4`, muted `#575764` / `#A3A3B2`, link `#3340E6` / `#9AA3FF`.
- Faculty grains: customer service `#3A47F5` to `#0E3A44` (Codrops cover), marketing `#E0457B` to `#3B0A22` (Backgrounds Supply), design `#FF5A1F` petals on `#17171A` (Rare UI).
- Type: Archivo variable 800 for display (wide grotesk like Codrops and Skiper), Geist for body, Geist Mono for real code only.
- Radius by hierarchy: 14 / 8 / 6 / 999. One card padding token: 18px (16px on phones).

## 6. Motion budget
Seal rotation 48s, two orbit rings 40s and 60s, line field drift 18s, conic shine border on Quick start 7s, marquee 60s that pauses on hover and focus, a course chain that steps through once when scrolled into view, and a before/after slider with a 6 degree tilt. Only transform, opacity and background-position animate. Everything stops under `prefers-reduced-motion`, and offscreen loops pause through IntersectionObserver.

## 7. Verify
- Screenshots at 1440 and 390 wide, light and dark, checked for overflow, uneven padding and contrast.
- Lighthouse run on the built pages; issues fixed and re-run until the scores held.
- Every resource card links to its source; every course file is a raw GitHub URL that resolves.

## Reuse this method
1. Write the brief and the banned looks first.
2. Count clusters in UI Hub `api/resources.json` before picking a style.
3. Open at least 6 previews and write down path, hex, radius, shadow, font, motion for each borrowed element.
4. Sketch three directions, pick one, and say why the other two lost.
5. Tokens, then components, then motion; check reduced motion.
6. Screenshot desktop and mobile in both themes, fix, run Lighthouse, repeat.
