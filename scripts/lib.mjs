// shared helpers for the static build
import fs from 'node:fs'; import path from 'node:path';
export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
export const LOCALES = ['zh-CN', 'zh-TW', 'en', 'ja', 'ko', 'ms', 'vi', 'fr', 'es', 'de'];
export const OPEN = ['customer-service', 'marketing', 'design'];
export const readJSON = (p, d = null) => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8')); } catch { return d; } };
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// inline <script> text in HTML: Han as \\uXXXX escapes (same strings at runtime) so the page source carries no Chinese outside zh data files
const escScripts = (h) => h.replace(/(<script(?![^>]*ld\+json)[^>]*>)([\s\S]*?)(<\/script>)/g, (m, a, b, c) => a + b.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, (ch) => '\\u' + ch.charCodeAt(0).toString(16).padStart(4, '0')) + c);
export function write(dist, rel, content) { const p = path.join(dist, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, rel.endsWith('.html') && typeof content === 'string' ? escScripts(content) : content); }
export const host = (u) => { try { return new URL(u).host.replace(/^www\./, ''); } catch { return u; } };
export const shortSrc = (u) => { try { const x = new URL(u); return (x.host.replace(/^www\./, '') + x.pathname).replace(/\/$/, ''); } catch { return u; } };
