"""Original content for resource detail pages, only what each licence allows (runs after collect.py, daily).

Writes data/originals.json  {id: {kind, label, license, url, file?, record?}} and data/originals/<id>.md (full texts).
  kind "full"    : the complete original text may be republished (MIT / Apache-2.0 / ISC / CC0 / ... README or raw file).
  kind "excerpt" : only a public record may be shown (BotsDots catalog entry, CC0; MCP Registry server record; UI Hub entry).
SKILL.md / prompt mirrors from collect.py (data/mirror) are not repeated here; build.mjs counts them as "full".
Never fetches anything that needs a login. GitHub API calls use GITHUB_TOKEN only when the CI provides it."""
import json, os, re, sys, urllib.parse
from concurrent.futures import ThreadPoolExecutor
sys.path.insert(0, os.path.dirname(__file__))
import collect as C  # http(), classify_license_text(), REDIST

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'data'); OUTD = os.path.join(DATA, 'originals')
REDIST = set(C.REDIST)
MAXC = 60000
items = [i for i in json.load(open(os.path.join(DATA, 'resources.json')))['items'] if i.get('status') == 'active']
prev = C.load(os.path.join(DATA, 'originals.json'), {})
os.makedirs(OUTD, exist_ok=True)
out = {}
lic0 = lambda l: (l or '').split(' ')[0]

def gh_api(path):
    h = {'Accept': 'application/vnd.github+json'}
    t = os.environ.get('GITHUB_TOKEN')
    if t: h['Authorization'] = f'Bearer {t}'
    st, body = C.http('https://api.github.com/' + path, h, retries=1)
    return json.loads(body) if st == 200 and body else None

def readme(repo, branch='HEAD'):
    for n in ('README.md', 'readme.md', 'Readme.md', 'README.MD', 'README.markdown', 'README'):
        st, body = C.http(f'https://raw.githubusercontent.com/{repo}/{branch}/{n}', retries=1)
        if st == 200 and body.strip(): return f'https://github.com/{repo}/blob/{branch}/{n}', body
    return None, None

def save_full(i, url, text, lic, label):
    p = os.path.join(OUTD, i['id'] + '.md'); open(p, 'w').write(text[:MAXC])
    out[i['id']] = {'kind': 'full', 'label': label, 'license': lic, 'url': url, 'file': f"data/originals/{i['id']}.md", 'truncated': len(text) > MAXC}

# 1) BotsDots: the catalog record is CC0-1.0; the bot's own instructions belong to its creator (x.ai page, link only)
st, body = C.http('https://botsdots.site/catalog.json', timeout=60)
bd = {t.get('page', '').rstrip('/'): t for t in (json.loads(body).get('templates', []) if st == 200 else [])}
for i in items:
    if i['source'] != 'botsdots': continue
    t = bd.get((i['source_url'] or '').rstrip('/'))
    if t:
        rec = {k: t.get(k) for k in ('name', 'summary', 'category', 'cadence', 'risk', 'access', 'integrations', 'official', 'firstSeen', 'add', 'page')}
        rec['creator'] = (t.get('creator') or {}).get('handle'); rec['catalog_sources'] = [s.get('name') for s in t.get('sources') or []]
        out[i['id']] = {'kind': 'excerpt', 'label': 'botsdots', 'license': t.get('license') or 'CC0-1.0', 'url': i['source_url'], 'record': rec}
    elif i['id'] in prev: out[i['id']] = prev[i['id']]

# 2) MCP Registry: server record (always) + the repository README when the repo licence allows republication
def mcp(i):
    name = i.get('registry_name'); rec = None
    if name:
        st, body = C.http(f"https://registry.modelcontextprotocol.io/v0/servers?search={urllib.parse.quote(name)}&version=latest&limit=20", timeout=30, retries=1)
        if st == 200:
            for s in json.loads(body).get('servers', []):
                srv = s.get('server', {})
                if srv.get('name') == name:
                    rec = {'name': name, 'title': srv.get('title'), 'description': srv.get('description'), 'version': srv.get('version'),
                           'repository': (srv.get('repository') or {}).get('url'), 'website': srv.get('websiteUrl'),
                           'packages': [{'type': p.get('registryType'), 'id': p.get('identifier'), 'version': p.get('version'), 'transport': (p.get('transport') or {}).get('type'),
                                         'env': [{'name': v.get('name'), 'required': v.get('isRequired'), 'secret': v.get('isSecret'), 'description': v.get('description')} for v in p.get('environmentVariables') or []]} for p in srv.get('packages') or []],
                           'remotes': [{'type': r.get('type'), 'url': r.get('url'), 'headers': [h.get('name') for h in r.get('headers') or []]} for r in srv.get('remotes') or []]}
                    break
    full = None
    if i.get('repo') and lic0(i.get('license')) in REDIST:
        url, text = readme(i['repo'])
        if text: full = (url, text)
    return i, rec, full
with ThreadPoolExecutor(8) as ex:
    for i, rec, full in ex.map(mcp, [i for i in items if i['source'] == 'mcp-registry']):
        if full: save_full(i, full[0], full[1], i['license'], 'readme')
        if rec:
            if i['id'] in out: out[i['id']]['record'] = rec
            else: out[i['id']] = {'kind': 'excerpt', 'label': 'mcp-registry', 'license': 'MCP Registry record', 'url': i.get('registry_url') or i['source_url'], 'record': rec}
        elif i['id'] not in out and i['id'] in prev: out[i['id']] = prev[i['id']]

# 3) seed items marked redistributable but without a collect.py mirror: fetch their raw file
for i in items:
    if i['source'] == 'seed' and i.get('redistributable') and not os.path.exists(os.path.join(DATA, 'mirror', i['id'] + '.md')) and i.get('raw_url') and lic0(i.get('license')) in REDIST:
        st, body = C.http(i['raw_url'], retries=1)
        if st == 200 and body.strip() and not body.lstrip().startswith('<!'): save_full(i, i['source_url'], body, i['license'], 'raw')
        elif i.get('repo'):
            url, text = readme(i['repo'])
            if text: save_full(i, url, text, i['license'], 'readme')

# 4) UI Hub entries: the Hub record is ours (always shown as an excerpt); GitHub sources with a permissive licence also get their README
def hub(i):
    m = re.match(r'https?://github\.com/([^/]+/[^/#?]+)/?$', i.get('source_url') or '')
    if not m: return i, None, None
    repo = m.group(1).removesuffix('.git'); j = gh_api(f'repos/{repo}')
    if not j: return i, None, 'api'
    lic = (j.get('license') or {}).get('spdx_id')
    if lic not in REDIST: return i, None, lic or 'none'
    url, text = readme(j.get('full_name') or repo, j.get('default_branch') or 'HEAD')
    return i, (url, text, lic) if text else None, lic
with ThreadPoolExecutor(4) as ex:
    for i, full, lic in ex.map(hub, [i for i in items if i['source'] == 'ui-hub']):
        if full: save_full(i, full[0], full[1], full[2], 'readme')
        elif lic == 'api' and i['id'] in prev and prev[i['id']].get('kind') == 'full': out[i['id']] = prev[i['id']]  # rate-limited: keep yesterday's
        else: out[i['id']] = {'kind': 'excerpt', 'label': 'ui-hub', 'license': 'UI Hub entry', 'url': 'https://siinxu.github.io/ui-resource-hub/', 'record': {'repo_license': lic} if lic else {}}

keep = {k for k, v in out.items() if v.get('file')}
for f in os.listdir(OUTD):
    if f.endswith('.md') and f[:-3] not in keep: os.remove(os.path.join(OUTD, f))
json.dump(out, open(os.path.join(DATA, 'originals.json'), 'w'), ensure_ascii=False, indent=0, sort_keys=True)
from collections import Counter
print('originals:', Counter((v['kind'], v['label']) for v in out.values()))
