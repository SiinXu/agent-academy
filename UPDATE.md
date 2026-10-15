# Daily update pipeline

Workflow: `.github/workflows/update.yml`, cron `17 10 * * *` (10:17 UTC = 06:17 New York during daylight time, 05:17 in winter), plus manual dispatch.

| stage | script | needs an LLM? |
|---|---|---|
| collect (GitHub trees, MCP Registry, prompts.chat API, UI Hub API, BotsDots catalog, seeds) | `collect.py` | no |
| normalize + dedupe (normalized URL, content hash of SKILL.md) | `collect.py` | no |
| license (GitHub license field, LICENSE sniffing, per-skill LICENSE.txt) | `collect.py` | no |
| classify industry / role / type (rule tables) | `collect.py` | no |
| safety flags (env vars, headers, remotes, description regex) | `collect.py` | no |
| link check (2 failures in a row = dead; full run on Mondays) | `collect.py` | no |
| change log `data/changes/<date>.json` | `collect.py` | no |
| translate summaries to 9 locales | `translate.py` (Argos offline + OpenCC) | no |
| build site, API, feeds, packs | `build.mjs` | no |
| deploy | actions/deploy-pages | no |

Each source has a cache in `data/cache/`; when a source fails, the last good copy is used and the failure is logged.

## Optional LLM step (not automated)
Machine translation from Argos is fair for French, Spanish, German and Japanese and weaker for Chinese, Korean, Malay and Vietnamese. To polish:
1. Read `data/l10n/<locale>.json`.
2. Rewrite the `s` field of entries you improve and set `"by": "agent"`.
3. Commit. `translate.py` never overwrites an `agent` entry while the English source is unchanged.

Rule tables in `collect.py` (`FOLDER_INDUSTRY`, `ROLE_KW`) can also be refined by an agent; the result must still be checked by a person.
