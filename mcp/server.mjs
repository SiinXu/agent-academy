#!/usr/bin/env node
// Agent Academy MCP server (stdio, read-only, no dependencies).
// Reads the public JSON API, so it never needs credentials and never writes anywhere.
// Run: npx -y github:SiinXu/agent-academy mcp   or   node mcp/server.mjs
// Env: AA_SITE (default https://siinxu.github.io/agent-academy)
const SITE = (process.env.AA_SITE || 'https://siinxu.github.io/agent-academy').replace(/\/$/, '');
const get = async (p) => { const r = await fetch(`${SITE}/${p}`); if (!r.ok) throw new Error(`${p}: HTTP ${r.status}`); return p.endsWith('.json') ? r.json() : r.text(); };
const TOOLS = [
  { name: 'list_courses', description: 'List open courses (profession/role) with raw course.md URLs and resource counts.', inputSchema: { type: 'object', properties: {} } },
  { name: 'get_course', description: 'Get one course as JSON: goal, permissions, checklist and the resources for each of the 5 steps.', inputSchema: { type: 'object', properties: { id: { type: 'string', description: 'e.g. design/ui-designer' } }, required: ['id'] } },
  { name: 'search_resources', description: 'Search real resources (skills, prompts, MCP servers, templates, workflows) by text, industry, type, and safety.', inputSchema: { type: 'object', properties: { query: { type: 'string' }, industry: { type: 'string' }, type: { type: 'string' }, safe_only: { type: 'boolean', description: 'only items that need no credentials and send nothing externally' }, limit: { type: 'number', default: 20 } } } },
  { name: 'get_resource', description: 'Get one resource with source URL, license, install command and safety flags.', inputSchema: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'] } },
  { name: 'get_changes', description: 'Recent additions, updates and removals (last 30 days).', inputSchema: { type: 'object', properties: { limit: { type: 'number', default: 50 } } } },
];
async function call(name, a = {}) {
  if (name === 'list_courses') return (await get('api/index.json')).endpoints.courses;
  if (name === 'get_course') return get(`api/courses/${a.id}.json`);
  if (name === 'get_resource') return get(`api/resources/${a.id}.json`);
  if (name === 'get_changes') { const c = await get('api/changes.json'); return (c.items || c).slice(0, a.limit || 50); }
  if (name === 'search_resources') {
    const q = (a.query || '').toLowerCase(); const idx = (await get('api/search-index.json')).items;
    return idx.filter((i) => (!a.industry || i.in === a.industry) && (!a.type || i.ty === a.type) && (!a.safe_only || (!i.c && !i.w)) && (!q || `${i.t} ${i.s} ${i.h}`.toLowerCase().includes(q)))
      .sort((x, y) => y.q - x.q).slice(0, a.limit || 20)
      .map((i) => ({ id: i.id, title: i.t, type: i.ty, industry: i.in, summary: i.s, license: i.li, needs_credentials: !!i.c, writes_external: !!i.w, url: `${SITE}/api/resources/${i.id}.json` }));
  }
  throw new Error(`unknown tool ${name}`);
}
let buf = '';
const send = (m) => process.stdout.write(JSON.stringify(m) + '\n');
process.stdin.on('data', async (d) => {
  buf += d; let n;
  while ((n = buf.indexOf('\n')) >= 0) {
    const line = buf.slice(0, n).trim(); buf = buf.slice(n + 1); if (!line) continue;
    let m; try { m = JSON.parse(line); } catch { continue; }
    if (m.id === undefined) continue;
    try {
      if (m.method === 'initialize') send({ jsonrpc: '2.0', id: m.id, result: { protocolVersion: m.params?.protocolVersion || '2025-06-18', capabilities: { tools: {} }, serverInfo: { name: 'agent-academy', version: '1.0.0' } } });
      else if (m.method === 'tools/list') send({ jsonrpc: '2.0', id: m.id, result: { tools: TOOLS } });
      else if (m.method === 'tools/call') { const r = await call(m.params.name, m.params.arguments); send({ jsonrpc: '2.0', id: m.id, result: { content: [{ type: 'text', text: typeof r === 'string' ? r : JSON.stringify(r, null, 1) }] } }); }
      else if (m.method === 'ping') send({ jsonrpc: '2.0', id: m.id, result: {} });
      else send({ jsonrpc: '2.0', id: m.id, error: { code: -32601, message: 'method not found' } });
    } catch (e) { send({ jsonrpc: '2.0', id: m.id, result: { isError: true, content: [{ type: 'text', text: String(e.message || e) }] } }); }
  }
});
