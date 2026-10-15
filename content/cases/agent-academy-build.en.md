## The brief
Agent Academy is a school that agents read: real skills, prompts, MCP servers and bot templates, sorted by profession, each with its source link and licence. The home page has one job: show what is inside and hand over one prompt to copy. Constraints: 10 languages, light and dark, long links never overflow, one card padding everywhere.

## Rules that held
- **Neutral plus one accent.** Every style uses one neutral scale and a single accent, and text contrast stays at 4.5:1 or better.
- **Every module comes from UI Hub.** Each block names the Hub item it was ported from: id, preview and original code. Where the port deviates, the reason is written down.
- **Screenshots decide.** Nothing ships before desktop and mobile shots in both themes are checked for overflow, clipping and uneven padding.

## What changed between rounds
The first rounds picked a look first and found components later. The result was decoration without a job, and it was rejected. From round four the order flipped: choose the Hub component for each module, port it from its source, then theme it with tokens. That is also why three styles can share one page structure: only tokens, fonts and the signature modules change.

## How switching works
A small script sets `<html data-skin>` before the first paint, from `?skin=`, then the saved choice, then A. Light and dark are a separate toggle. Each style's CSS is scoped to its skin, so switching loads nothing new and never flashes.
