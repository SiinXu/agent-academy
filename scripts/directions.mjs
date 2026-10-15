// Writes dist/directions/: the design-notes page (module -> UI Hub component tables for the home page and
// every inner page, per style A/B/C) plus redirect stubs for the old mock URLs (a.html -> ../?skin=a).
// The skins themselves are built by scripts/build.mjs (scripts/skins/{a,b,c}.mjs, src/pages.css).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { MAP, DIRS, MODULES, SITE_MAP } from '../directions/mapping.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'dist/directions');
fs.mkdirSync(OUT, { recursive: true });
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
for (const d of ['a', 'b', 'c']) fs.writeFileSync(path.join(OUT, `${d}.html`), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Style ${d.toUpperCase()} · Agent Academy</title><meta http-equiv="refresh" content="0; url=../?skin=${d}"><link rel="canonical" href="../?skin=${d}"></head><body><a href="../?skin=${d}">Agent Academy · style ${d.toUpperCase()}</a></body></html>`);
const SHOTS = path.join(ROOT, 'directions/shots');
if (fs.existsSync(SHOTS)) fs.cpSync(SHOTS, path.join(OUT, 'shots'), { recursive: true });
const { indexPage } = await import('../directions/src/page-index.mjs');
fs.writeFileSync(path.join(OUT, 'index.html'), indexPage({ esc, MAP, DIRS, MODULES, SITE_MAP, OUT }));
console.log('directions: wrote dist/directions/index.html + a/b/c redirect stubs | home modules', MODULES.length, '| site modules', SITE_MAP.length);
