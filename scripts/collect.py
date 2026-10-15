#!/usr/bin/env python3
"""Agent Academy collector: collect -> normalize -> dedupe -> license -> classify(rules) -> metrics -> linkcheck.
Headless: needs only network + optional GITHUB_TOKEN (or a logged-in `gh`). No LLM. Writes data/resources.json,
data/mirror/<id>.md (redistributable texts only), data/changes/<date>.json, data/snapshots/<date>.json, data/state.json.
Only real public items are collected; every item keeps its original source_url. Nothing is invented: if a field
cannot be read from the source it stays null."""
import json, os, re, sys, hashlib, datetime, subprocess, urllib.request, urllib.error, urllib.parse, csv, io, time
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")
NOW = datetime.datetime.now(datetime.timezone.utc).replace(microsecond=0)
NOW_S = NOW.isoformat().replace("+00:00", "Z")
TODAY = NOW.strftime("%Y-%m-%d")
UA = "agent-academy-collector/1.0 (+https://github.com/SiinXu/agent-academy)"
REDIST = ("MIT", "Apache-2.0", "CC0-1.0", "CC-BY-4.0", "BSD-3-Clause", "BSD-2-Clause", "ISC", "Unlicense")

def token():
    t = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    if t: return t
    try: return subprocess.run(["gh", "auth", "token"], capture_output=True, text=True, timeout=10).stdout.strip() or None
    except Exception: return None
TOKEN = token()

def http(url, headers=None, method="GET", timeout=25, retries=2):
    h = {"User-Agent": UA}; h.update(headers or {})
    for a in range(retries + 1):
        try:
            req = urllib.request.Request(url, headers=h, method=method)
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.status, r.read().decode("utf-8", "replace") if method == "GET" else ""
        except urllib.error.HTTPError as e:
            if e.code in (429, 502, 503) and a < retries: time.sleep(2 + a * 3); continue
            return e.code, ""
        except Exception:
            if a < retries: time.sleep(1); continue
            return 0, ""

def gh(path):
    h = {"Accept": "application/vnd.github+json"}
    if TOKEN: h["Authorization"] = f"Bearer {TOKEN}"
    st, body = http("https://api.github.com/" + path.lstrip("/"), h)
    return json.loads(body) if st == 200 and body else None

def load(p, d):
    try: return json.load(open(p))
    except Exception: return d

def slug(s, n=80): return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:n].strip("-")
def sha(s): return "sha256:" + hashlib.sha256(s.encode()).hexdigest()[:24]

def frontmatter(md):
    m = re.match(r"\ufeff?---\s*\n(.*?)\n---", md, re.S); d = {}
    if not m: return d
    lines = m.group(1).splitlines(); i = 0
    while i < len(lines):
        line = lines[i]
        if ":" in line and not line.startswith((" ", "\t", "-")):
            k, v = line.split(":", 1); v = v.strip()
            if v in (">", ">-", "|", "|-", ">+", "|+"):
                buf = []; i += 1
                while i < len(lines) and (lines[i].startswith((" ", "\t")) or not lines[i].strip()):
                    buf.append(lines[i].strip()); i += 1
                d[k.strip()] = " ".join(x for x in buf if x); continue
            d[k.strip()] = v.strip().strip('"\'')
        i += 1
    return d

def first_para(md):
    body = re.sub(r"^\ufeff?---.*?\n---", "", md, flags=re.S)
    for p in re.split(r"\n\s*\n", body):
        t = p.strip()
        if t and not t.startswith(("#", "<", "!", "[!", "|", "```", "-", "*", ">", "[")) and len(t) > 40:
            return re.sub(r"\s+", " ", re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", t))[:400]
    return ""

def clean(s, n=420):
    s = re.sub(r"\s+", " ", (s or "")).strip()
    return s if len(s) <= n else s[: n - 1].rsplit(" ", 1)[0] + "…"

# ---------------------------------------------------------------- repo metadata + licenses
REPO_CACHE = {}
def repo_meta(repo):
    if repo in REPO_CACHE: return REPO_CACHE[repo]
    j = gh(f"repos/{repo}") or {}
    lic = (j.get("license") or {}).get("spdx_id")
    full = j.get("full_name") or repo
    branch = j.get("default_branch") or "main"
    if lic in (None, "NOASSERTION", "NONE"):
        lic = sniff_license(full, branch) or ("NOASSERTION" if lic == "NOASSERTION" else None)
    m = {"repo": full, "branch": branch, "license": lic, "stars": j.get("stargazers_count"),
         "pushed_at": (j.get("pushed_at") or "")[:10] or None, "archived": bool(j.get("archived")),
         "description": j.get("description")}
    REPO_CACHE[repo] = m; return m

def sniff_license(repo, branch, path=""):
    for name in ("LICENSE", "LICENSE.md", "LICENSE.txt", "license", "LICENCE"):
        st, body = http(f"https://raw.githubusercontent.com/{repo}/{branch}/{path}{name}")
        if st == 200 and body: return classify_license_text(body)
    return None

def classify_license_text(t):
    t = t[:3000].lower()
    if "apache license" in t and "version 2.0" in t: return "Apache-2.0"
    if "permission is hereby granted, free of charge" in t: return "MIT"
    if "creative commons" in t and ("cc0" in t or "public domain dedication" in t): return "CC0-1.0"
    if "attribution 4.0" in t and "noncommercial" not in t: return "CC-BY-4.0"
    if "noncommercial" in t: return "CC-BY-NC-4.0"
    if "source-available" in t or "all rights reserved" in t or "proprietary" in t: return "proprietary"
    return None

def policy(lic): return "mirror-with-attribution" if (lic or "").split(" ")[0] in REDIST else "link-and-summary-only"

# ---------------------------------------------------------------- item factory
def base(**kw):
    it = {"id": None, "title": None, "type": None, "industry": None, "roles": [], "summary_source": "", "summary_lang": "en",
          "source_url": None, "raw_url": None, "repo": None, "author": None, "license": None, "redistributable": False,
          "content_policy": "link-and-summary-only", "install": None, "languages": ["en"],
          "metrics": {"repo_stars": None, "repo_pushed_at": None}, "source": None,
          "security": {"audited": False, "executes_code": False, "needs_credentials": False, "writes_external": False},
          "course_step": None, "content_hash": None, "first_seen": None, "updated_at": None, "checked_at": None,
          "http_status": {"source": None}, "status": "active", "duplicate_of": None, "classified_by": "rule"}
    it.update(kw)
    return it

STEP_BY_TYPE = {"style-library": "2-pick-direction", "template": "2-pick-direction", "awesome-list": "2-pick-direction",
                "skill": "3-learn-rules", "standard": "3-learn-rules", "design-system": "3-learn-rules", "vendor-doc": "3-learn-rules",
                "system-prompt": "3-learn-rules", "tutorial": "1-enrol", "plugin": "4-do-it", "workflow": "4-do-it", "mcp": "4-do-it",
                "case": "4-do-it", "tool": "4-do-it", "benchmark": "5-self-check"}

# ---------------------------------------------------------------- source 1: GitHub file trees (skills, agents, commands, policies)
# (repo, path regex, industry, role, type, title_from)  -- the rule table is the classifier for GitHub sources
GH_RULES = [
 ("anthropics/knowledge-work-plugins", r"^customer-support/skills/([^/]+)/SKILL\.md$", "customer-service", None, "skill"),
 ("anthropics/knowledge-work-plugins", r"^marketing/skills/([^/]+)/SKILL\.md$", "marketing", None, "skill"),
 ("anthropics/knowledge-work-plugins", r"^design/skills/([^/]+)/SKILL\.md$", "design", None, "skill"),
 ("anthropics/knowledge-work-plugins", r"^partner-built/brand-voice/skills/([^/]+)/SKILL\.md$", "marketing", "content-marketer", "skill"),
 ("anthropics/knowledge-work-plugins", r"^(customer-support|marketing|design)/README\.md$", None, None, "plugin"),
 ("coreyhaines31/marketingskills", r"^skills/([^/]+)/SKILL\.md$", "marketing", None, "skill"),
 ("anthropics/skills", r"^skills/(frontend-design|canvas-design|brand-guidelines|theme-factory|algorithmic-art|web-artifacts-builder|slack-gif-creator)/SKILL\.md$", "design", None, "skill"),
 ("anthropics/skills", r"^skills/(internal-comms)/SKILL\.md$", "marketing", "content-marketer", "skill"),
 ("Leonxlnx/taste-skill", r"^skills/([^/]+)/SKILL\.md$", "design", "design-engineer", "skill"),
 ("emilkowalski/skills", r"^skills/(animate|animation-performance|animation-vocabulary|apple-design|emil-design-eng|find-animation-opportunities|improve-animations|pick-ui-library|prototype|review-animations|break-ui|mobile-native)/SKILL\.md$", "design", None, "skill"),
 ("nextlevelbuilder/ui-ux-pro-max-skill", r"^\.claude/skills/([^/]+)/SKILL\.md$", "design", None, "skill"),
 ("pbakaus/impeccable", r"^\.claude/skills/(impeccable)/SKILL\.md$", "design", "design-reviewer", "skill"),
 ("wshobson/agents", r"^plugins/(ui-design|accessibility-compliance|brand-landingpage)/(skills/([^/]+)/SKILL|agents/[^/]+|commands/[^/]+)\.md$", "design", None, "auto"),
 ("wshobson/agents", r"^plugins/(content-marketing|seo-content-creation|seo-technical-optimization|seo-analysis-monitoring|social-publishing|avoid-ai-writing|business-analytics)/(skills/([^/]+)/SKILL|agents/[^/]+|commands/[^/]+)\.md$", "marketing", None, "auto"),
 ("wshobson/agents", r"^plugins/customer-sales-automation/agents/(customer-support)\.md$", "customer-service", "support-agent", "system-prompt"),
 ("VoltAgent/awesome-claude-code-subagents", r"^categories/[^/]+/(ui-designer|design-bridge|ui-ux-tester|ux-researcher)\.md$", "design", None, "system-prompt"),
 ("VoltAgent/awesome-claude-code-subagents", r"^categories/[^/]+/(seo-specialist|content-marketer|landing-page-copywriter|growth-loops|telegram-ads-analyst|market-researcher|content-quality-editor)\.md$", "marketing", None, "system-prompt"),
 ("VoltAgent/awesome-claude-code-subagents", r"^categories/[^/]+/(customer-success-manager)\.md$", "customer-service", "customer-success", "system-prompt"),
 ("sierra-research/tau2-bench", r"^data/tau2/domains/(airline|retail|telecom)/(policy|main_policy)\.md$", "customer-service", None, "system-prompt"),
 ("Shubhamsaboo/awesome-llm-apps", r"^(.*(customer_support|support_ticket|seo_audit|email_gtm|multimodal_design_agent_team|ai_game_design)[^/]*)/README\.md$", None, None, "case"),
 ("openai/openai-agents-python", r"^examples/customer_service/main\.py$", "customer-service", "support-agent", "case"),
 # template library: every other permissively licensed SKILL.md in the big skill repos (industry from folder name)
 ("anthropics/knowledge-work-plugins", r"^(?!customer-support/|marketing/|design/|partner-built/brand-voice/)(.+?)/skills/([^/]+)/SKILL\.md$", "auto", None, "skill"),
 ("wshobson/agents", r"^plugins/(?!ui-design/|accessibility-compliance/|brand-landingpage/|content-marketing/|seo-|social-publishing/|avoid-ai-writing/|business-analytics/)([^/]+)/skills/([^/]+)/SKILL\.md$", "auto", None, "skill"),
 ("google/adk-recipes", r"^(.+?)/skills/([^/]+)/SKILL\.md$", "auto", None, "skill"),
 ("anthropics/skills", r"^skills/(skill-creator|mcp-builder|webapp-testing|doc-coauthoring|claude-api)/SKILL\.md$", "auto", None, "skill"),
]
FOLDER_INDUSTRY = [(r"customer|support|retail|ecommerce|commerce", "customer-service"), (r"market|seo|brand|social|content", "marketing"),
 (r"(?<!database-)(?<!api-)(?<!system-)design|\bui-|frontend|accessib", "design"), (r"sales|apollo|common-room|crm", "sales"), (r"financ|trading|payment|account", "finance"),
 (r"legal|compliance|hr-|human-resources", "legal"), (r"human-resources|recruit|hr\b", "hr"), (r"data|analytic|bio-research|research|ml|machine-learning|llm-fine", "data-research"),
 (r"product|project|operations|productivity|small-business|startup|conductor|team", "product"), (r".", "software-engineering")]
def industry_for_path(path):
    for rx, ind in FOLDER_INDUSTRY:
        if re.search(rx, path, re.I): return ind
    return "software-engineering"

ROLE_KW = {
 "customer-service": [("knowledge-base-editor", r"kb|knowledge|article|help ?center|faq"), ("support-lead", r"escalat|lead|qa|quality|sla"),
                      ("customer-success", r"success|churn|onboard|retention|renewal"), ("ecommerce-support", r"retail|order|refund|shop|ecommerce|airline|telecom|return"),
                      ("support-agent", r".")],
 "marketing": [("seo-specialist", r"seo|search|schema|keyword|snippet|aeo|geo\b|cannibal|site-architecture|programmatic"),
               ("email-marketer", r"email|newsletter|sms|lifecycle|drip|sequence|mailchimp|klaviyo"),
               ("paid-ads-specialist", r"\bads?\b|advertis|ppc|campaign-performance|google-ads|meta-ads|tiktok|telegram-ads|ad-creative"),
               ("marketing-analyst", r"analytic|attribution|report|metric|kpi|ab-test|a/b|dashboard|storytelling|performance"),
               ("product-marketer", r"launch|positioning|competit|pricing|product-marketing|sales-enablement|paywall|offer|market-research|market-researcher"),
               ("growth-marketer", r"growth|referral|cold|prospect|lead|signup|cro|conversion|popup|onboarding|loops|free-tools|directory"),
               ("social-media-manager", r"social|community|influencer|tweet|linkedin|instagram|video|publishing"),
               ("content-marketer", r".")],
 "design": [("motion-designer", r"anim|motion|transition|gif|interaction|sonner"), ("design-system", r"design-system|token|theme|system|brand"),
            ("design-reviewer", r"review|critique|audit|accessib|wcag|screen-reader|tester|break-ui|validator|impeccable"),
            ("ux-researcher", r"research|synthesis|ux-copy|copy"), ("design-engineer", r"frontend|web-artifacts|prototype|component|tailwind|code|engineer|landing|bridge|taste|stitch|redesign|output|image-to-code"),
            ("ui-designer", r".")],
}
def role_for(ind, text):
    for r, p in ROLE_KW.get(ind, [("general", r".")]):
        if re.search(p, text, re.I): return r
    return ROLE_KW.get(ind, [("general", "")])[-1][0]

def collect_github(prev_by_id):
    out = []; trees = {}
    for repo, *_ in GH_RULES:
        if repo in trees: continue
        m = repo_meta(repo)
        t = gh(f"repos/{m['repo']}/git/trees/{m['branch']}?recursive=1")
        trees[repo] = (t or {}).get("tree", [])
        print(f"  tree {m['repo']}: {len(trees[repo])} entries, license={m['license']}", file=sys.stderr)
    jobs = []
    for repo, rx, ind, role, typ in GH_RULES:
        m = repo_meta(repo)
        for e in trees[repo]:
            if e.get("type") != "blob": continue
            mm = re.match(rx, e["path"])
            if mm: jobs.append((repo, m, e, mm, ind, role, typ))
    def build(job):
        repo, m, e, mm, ind, role, typ = job
        path = e["path"]; full = m["repo"]
        rid = slug(f"{full}-{path.replace('/SKILL.md','').replace('.md','').replace('/README','')}", 90)
        raw = f"https://raw.githubusercontent.com/{full}/{m['branch']}/{urllib.parse.quote(path)}"
        prev = prev_by_id.get(rid)
        if prev and prev.get("_blob") == e["sha"] and prev.get("summary_source"):
            body = None; it = dict(prev)
            if ind == "auto":  # rule tables may have changed since the last run
                new = industry_for_path(path.rsplit("/skills/", 1)[0])
                if new != it.get("industry"):
                    it["industry"] = new; it["roles"] = [role or role_for(new, f"{path} {it.get('title','')} {(it.get('summary_source') or '')[:120]}")]
        else:
            st, body = http(raw)
            if st != 200: return None
            fm = frontmatter(body)
            name = fm.get("name") or (path.split("/")[-2] if path.endswith("SKILL.md") else (mm.group(1) if mm.groups() else path.split("/")[-2]))
            t2 = typ
            if typ == "auto": t2 = "skill" if path.endswith("SKILL.md") else ("workflow" if "/commands/" in path else "system-prompt")
            if typ == "plugin" or typ == "case":
                name = path.split("/")[-2]
            title = fm.get("title") or name
            if typ == "plugin": title = f"{name.replace('-', ' ').title()} plugin ({full.split('/')[1]})"
            if typ == "case": title = re.sub(r"[_-]+", " ", name).strip().title()
            if "tau2" in full: title = f"tau2-bench {mm.group(1)} agent policy"
            desc = fm.get("description") or first_para(body)
            ind2 = ind
            if ind2 == "auto": ind2 = industry_for_path(path.rsplit("/skills/", 1)[0])
            if ind2 is None:
                ind2 = "customer-service" if re.search(r"customer|support", path) else ("marketing" if re.search(r"market|seo|gtm", path) else "design")
            it = base(title=clean(title, 120), type=t2, industry=ind2, summary_source=clean(desc), repo=full)
            it["roles"] = [role or role_for(ind2, f"{path} {title} {desc[:120]}")]
            it["content_hash"] = sha(body)
            it["_blob"] = e["sha"]
        lic = m["license"]
        if "partner-built/" in path:  # partner folders may carry their own license
            pl = sniff_license(full, m["branch"], "/".join(path.split("/")[:2]) + "/")
            if pl: lic = pl
        if full == "anthropics/skills":  # per-skill LICENSE.txt
            d = path.rsplit("/", 1)[0] + "/"
            lic = sniff_license(full, m["branch"], d) or lic or "see-skill-folder"
            if lic == "proprietary": lic = "source-available (not open source)"
        web = f"https://github.com/{full}/blob/{m['branch']}/{path}" if it["type"] not in ("plugin", "case") else f"https://github.com/{full}/tree/{m['branch']}/{path.rsplit('/',1)[0]}"
        it.update(id=rid, source_url=web, raw_url=raw, license=lic or "unknown", author=full.split("/")[0],
                  redistributable=policy(lic) == "mirror-with-attribution", content_policy=policy(lic), source="github")
        it["metrics"] = {"repo_stars": m["stars"], "repo_pushed_at": m["pushed_at"]}
        if it["type"] == "skill" and path.endswith("SKILL.md"):
            sk = path.split("/")[-2]
            it["install"] = f"npx skills add {full} --skill {sk}"
        if it["type"] == "plugin" and full == "anthropics/knowledge-work-plugins":
            it["install"] = "claude plugin marketplace add anthropics/knowledge-work-plugins"
        it["security"] = {"audited": False, "executes_code": it["type"] in ("case", "workflow") or bool(body and re.search(r"```(bash|sh|python)", body or "")),
                          "needs_credentials": False, "writes_external": False}
        it["status"] = "deprecated" if m["archived"] else "active"
        it["course_step"] = STEP_BY_TYPE.get(it["type"])
        it["languages"] = ["en"]
        if body is not None and it["redistributable"]:
            os.makedirs(os.path.join(DATA, "mirror"), exist_ok=True)
            open(os.path.join(DATA, "mirror", rid + ".md"), "w").write(body)
        return it
    with ThreadPoolExecutor(12) as ex:
        for it in ex.map(build, jobs):
            if it: out.append(it)
    return out

NSFW = re.compile(r"\b(porn\w*|nsfw|xxx|sex\w*|onlyfans|escort\w*|casino|gambl\w*|betting|adult content|hentai)\b", re.I)
# ---------------------------------------------------------------- source 2: official MCP Registry (incremental capable)
MCP_TERMS = {
 "customer-service": ["zendesk", "intercom", "freshdesk", "helpscout", "help scout", "gorgias", "front", "crisp", "zoho desk", "hubspot", "salesforce service",
                      "customer support", "customer service", "customer success", "helpdesk", "help desk", "help center", "knowledge base", "faq", "ticket", "livechat", "kustomer", "gladly", "dixa", "trustpilot", "chatwoot", "shopify", "twilio"],
 "marketing": ["mailchimp", "klaviyo", "google ads", "meta ads", "facebook ads", "linkedin ads", "tiktok", "semrush", "ahrefs", "seo", "search console",
               "google analytics", "brevo", "sendgrid", "buffer", "hootsuite", "marketing", "campaign", "newsletter", "posthog", "mixpanel", "dataforseo", "similarweb", "beehiiv"],
 "design": ["figma", "canva", "penpot", "storybook", "framer", "sketch", "adobe", "design system", "design tokens", "icons", "tailwind", "shadcn", "excalidraw", "webflow", "lottie", "color palette", "fonts", "ui design"],
}
MCP_ROLE = {"customer-service": "support-agent", "marketing": None, "design": None}
WRITE_RX = r"\b(send|create|update|delete|post|publish|schedule|manage|write|modify|reply|assign|close|launch|upload)\w*"
def _mcp_search(arg):
    ind, term = arg
    url = f"https://registry.modelcontextprotocol.io/v0/servers?search={urllib.parse.quote(term)}&version=latest&limit=100"
    st, body = http(url, timeout=40, retries=1)
    if st != 200:
        print(f"  mcp search '{term}': HTTP {st}", file=sys.stderr); return ind, term, None
    return ind, term, json.loads(body).get("servers", [])

def collect_mcp():
    out = {}; failed = 0
    with ThreadPoolExecutor(8) as ex:
        results = list(ex.map(_mcp_search, [(i, t) for i, ts in MCP_TERMS.items() for t in ts]))
    for ind, term, servers in results:
            if servers is None: failed += 1; continue
            for s in servers:
                srv = s.get("server", {}); meta = s.get("_meta", {}).get("io.modelcontextprotocol.registry/official", {})
                name = srv.get("name"); desc = srv.get("description") or ""
                if not name or meta.get("status", "active") != "active": continue
                hay = f"{name} {srv.get('title','')} {desc}".lower()
                # keep only servers whose own name/description really mention the term (registry search is fuzzy)
                # word-boundary match on title/description/last name segment only (not the publisher namespace:
                # "seo" must not match "seoul", "canva" must not match "canvas", "-sketch" usernames do not count)
                own = f"{name.split('/')[-1]} {srv.get('title','')} {desc}".lower()
                if not re.search(r"\b" + re.escape(term.lower()) + r"\b", own): continue
                if NSFW.search(own): continue
                if term in ("front", "ticket") and not re.search(r"front ?app|frontapp|support|help ?desk|customer", own): continue
                repo_url = (srv.get("repository") or {}).get("url") or ""
                website = srv.get("websiteUrl") or ""
                src = repo_url or website
                if not src: continue
                rid = slug("mcp-" + name, 90)
                if rid in out: continue
                pk = srv.get("packages") or []; remotes = srv.get("remotes") or []
                env = [v.get("name") for p in pk for v in (p.get("environmentVariables") or [])]
                headers = [h.get("name") for r in remotes for h in (r.get("headers") or [])]
                needs = bool(env or headers or remotes)
                install = None
                if pk:
                    p0 = pk[0]; rt = p0.get("registryType") or p0.get("registry_type")
                    ident = p0.get("identifier") or p0.get("name")
                    if rt == "npm" and ident: install = f"npx -y {ident}"
                    elif rt == "pypi" and ident: install = f"uvx {ident}"
                    elif rt == "oci" and ident: install = f"docker run -i --rm {ident}"
                elif remotes:
                    install = f"remote ({remotes[0].get('type')}): {remotes[0].get('url')}"
                gh_repo = None
                mm = re.match(r"https?://github\.com/([^/]+/[^/#?]+)", repo_url)
                lic = None; stars = None; pushed = None
                if mm:
                    gh_repo = mm.group(1).removesuffix(".git")
                    rm = repo_meta(gh_repo); lic = rm["license"]; stars = rm["stars"]; pushed = rm["pushed_at"]
                    if rm["repo"]: gh_repo = rm["repo"]
                ind2 = ind
                it = base(id=rid, title=clean(srv.get("title") or name, 120), type="mcp", industry=ind2,
                          roles=[MCP_ROLE[ind] or role_for(ind2, hay)], summary_source=clean(desc),
                          source_url=f"https://github.com/{gh_repo}" if gh_repo else src, repo=gh_repo, author=name.split("/")[0],
                          license=lic or "unknown (registry metadata: CC-BY-4.0 docs; server license not stated)",
                          install=install, source="mcp-registry")
                it["redistributable"] = False; it["content_policy"] = "link-and-summary-only"
                it["registry_name"] = name; it["registry_url"] = f"https://registry.modelcontextprotocol.io/v0/servers?search={urllib.parse.quote(name)}&version=latest"
                it["metrics"] = {"repo_stars": stars, "repo_pushed_at": pushed, "registry_updated_at": (meta.get("updatedAt") or "")[:10] or None}
                it["security"] = {"audited": False, "executes_code": bool(pk), "needs_credentials": needs,
                                  "writes_external": bool(re.search(WRITE_RX, desc, re.I)), "credential_names": env + headers}
                it["course_step"] = "4-do-it"; it["content_hash"] = sha(json.dumps(srv, sort_keys=True))
                out[rid] = it
    if failed > len(results) // 2: raise RuntimeError(f"MCP registry: {failed}/{len(results)} searches failed")
    return list(out.values())

# ---------------------------------------------------------------- source 3: prompts.chat (prompt data CC0-1.0)
PROMPT_RX = {
 "customer-service": r"customer (service|support|success|complaint)|support (agent|reply|ticket|specialist)|help ?desk|call cent|refund|complaint|faq bot|live chat",
 "marketing": r"\b(marketing|marketer|seo|copywrit|advertis|ad copy|social media (manager|post|strateg)|brand(ing)? strateg|email (campaign|marketing)|growth hack|content strateg|landing page copy|newsletter|google ads|campaign strateg)",
 "design": r"\b(ui/?ux|ux/?ui|ui design|ux design|user interface|web design|design system|logo design|logo designer|figma|typograph|color palette|ui architect|ui designer|ux research|wireframe|landing page design)",
}
PROMPT_EXCLUDE = r"esp32|selfie|escape room|music video|cocktail|bedtime|3d environment|lesson plan|slo and error|sheet metal|students"
def collect_prompts():
    out = []; page = 1; seen = set()
    while True:
        st, body = http(f"https://prompts.chat/api/prompts?perPage=100&page={page}")
        if st != 200: break
        d = json.loads(body)
        for p in d.get("prompts", []):
            title = p.get("title") or ""; desc = p.get("description") or ""; content = p.get("content") or ""
            cat = (p.get("category") or {}).get("name") or ""
            if p.get("type") == "IMAGE" or re.search(PROMPT_EXCLUDE, title, re.I) or p.get("delistReason"): continue
            hay = f"{title} {cat} {desc[:300]}"
            ind = next((k for k, rx in PROMPT_RX.items() if re.search(rx, hay, re.I)), None)
            if not ind or p["id"] in seen or NSFW.search(f"{title} {desc} {content[:600]}"): continue
            seen.add(p["id"])
            auth = (p.get("author") or {})
            summary = desc or first_para(content) or content[:300]
            it = base(id=slug(f"prompts-chat-{p.get('slug') or p['id']}", 90), title=clean(title, 120), type="system-prompt", industry=ind,
                      roles=[role_for(ind, hay)], summary_source=clean(summary),
                      source_url=f"https://prompts.chat/prompts/{p['id']}_{p.get('slug')}", author=auth.get("username") or auth.get("name"),
                      license="CC0-1.0", redistributable=True, content_policy="mirror-with-attribution", source="prompts.chat")
            it["metrics"] = {"votes": p.get("voteCount"), "created_at": (p.get("createdAt") or "")[:10]}
            it["content_hash"] = sha(content); it["course_step"] = "3-learn-rules"
            out.append(it)
            os.makedirs(os.path.join(DATA, "mirror"), exist_ok=True)
            open(os.path.join(DATA, "mirror", it["id"] + ".md"), "w").write(
                f"# {title}\n\nSource: {it['source_url']} (prompts.chat, CC0-1.0, author: {it['author']})\n\n{content}\n")
        if page >= d.get("totalPages", 1): break
        page += 1
    return out

# ---------------------------------------------------------------- source 4: UI Hub (user's own aggregator; per-item links only)
UIHUB = "https://siinxu.github.io/ui-resource-hub/api/resources.json"
UIHUB_TYPE = {"skill": "skill", "system": "design-system", "spec": "standard", "tutorial": "tutorial", "guide": "tutorial", "template": "template",
              "library": "style-library", "component": "style-library", "effect": "style-library", "inspiration": "style-library",
              "collection": "style-library", "generator": "tool", "tool": "tool"}
def collect_uihub():
    st, body = http(UIHUB, timeout=60)
    if st != 200: return []
    out = []
    for r in json.loads(body).get("items", []):
        t = UIHUB_TYPE.get(r.get("type"))
        if not t or not r.get("url"): continue
        vs = r.get("vs") or []; ct = r.get("ct") or []
        hay = f"{r.get('name')} {' '.join(vs)} {' '.join(ct)} {' '.join(r.get('rt') or [])} {r.get('type')}"
        role = ("design-engineer" if t == "skill" else "design-system" if t in ("design-system", "standard") else
                "motion-designer" if ("motion" in vs or "motion" in ct) else "ui-designer")
        note = r.get("note") or ""
        zh = bool(re.search(r"[\u4e00-\u9fff]", note))
        it = base(id=slug("uihub-" + r["id"], 90), title=clean(r.get("name"), 120), type=t, industry="design", roles=[role],
                  summary_source=clean(note), summary_lang="zh-CN" if zh else "en", source_url=r["url"],
                  author=r.get("source") or None, license="see source (listed via UI Hub)", source="ui-hub")
        it["via"] = "https://siinxu.github.io/ui-resource-hub/"
        it["facets"] = {"visual_style": vs, "component_types": ct, "pricing": r.get("pricing")}
        it["content_hash"] = sha(json.dumps(r, sort_keys=True, ensure_ascii=False)); it["course_step"] = STEP_BY_TYPE.get(t)
        it["languages"] = ["en"]
        out.append(it)
    return out

# ---------------------------------------------------------------- source 5: BotsDots catalog (Grok Bot templates, link-only)
BD_RX = {"customer-service": r"customer (support|service|success)|support (inbox|tickets?|queue|desk|agent|replies)|help ?desk|refund|customer complaint|\bfaq\b|review repl|\bchurn",
         "marketing": r"\bmarketing|\bseo\b|newsletter|(ad|email|marketing|launch) campaign|social media|content calendar|brand (voice|strategy|monitor)|\bads? (copy|manager|performance|spend)|copywrit|influencer|lead gen",
         "design": r"\b(ui|ux) design|web design|design system|design (review|critique|resources?|feedback|inspiration)|figma|brand kit|mockup|logo design|typograph|landing page design"}
BD_STRONG_CS = r"help ?desk|review reply|\bfaq\b|support (inbox|tickets?|queue|desk)|customer (support|service)"
# BotsDots categories that can hold each profession (keeps household / personal bots out)
BD_CAT = {"customer-service": {"customer-sales", "teams-handoffs", "inbox-calendar"},
          "marketing": {"content-publishing", "customer-sales", "research-briefings"},
          "design": {"content-publishing", "coding-shipping", "research-briefings", "teams-handoffs"}}
def collect_botsdots():
    st, body = http("https://botsdots.site/catalog.json", timeout=60)
    if st != 200: return []
    out = []
    for t in json.loads(body).get("templates", []):
        hay = f"{t.get('name')} {t.get('summary')}"
        ind = next((k for k, rx in BD_RX.items() if re.search(rx, hay, re.I) and t.get("category") in BD_CAT[k]), None)
        if not ind and t.get("category") != "finance-ops" and re.search(BD_STRONG_CS, hay, re.I): ind = "customer-service"
        if not ind or NSFW.search(hay) or re.search(r"broken .*link|replacement share", hay, re.I): continue
        if not t.get("page"): continue
        cr = t.get("creator") or {}
        it = base(id=slug("botsdots-" + t["page"].rstrip("/").split("/")[-1], 90), title=clean(t.get("name"), 120), type="template",
                  industry=ind, roles=[role_for(ind, hay)], summary_source=clean(t.get("summary")), source_url=t["page"],
                  author=cr.get("handle") or cr.get("name"), license="template belongs to its creator (catalog CC0)", source="botsdots")
        it["install"] = t.get("add")
        it["metrics"] = {"score": t.get("score"), "first_seen_catalog": t.get("firstSeen")}
        it["security"] = {"audited": False, "executes_code": "code" in (t.get("access") or []), "needs_credentials": bool(t.get("integrations")),
                          "writes_external": t.get("risk") in ("high",), "risk_label": t.get("risk"), "integrations": t.get("integrations")}
        it["content_hash"] = sha(json.dumps(t, sort_keys=True)); it["course_step"] = "2-pick-direction"
        out.append(it)
    return out

# ---------------------------------------------------------------- source 6: seed files from the plan (already verified by hand)
def collect_seed():
    out = []
    for f in ("customer-service", "marketing", "design"):
        p = os.path.join(ROOT, "seed", f + ".json")
        for s in load(p, {}).get("items", []):
            it = base(**{k: v for k, v in s.items() if k in base()})
            it["source"] = "seed"; it["author"] = (s.get("repo") or "").split("/")[0] or None
            it["course_step"] = s.get("course_step") or STEP_BY_TYPE.get(s["type"])
            it["security"] = {**base()["security"], **(s.get("security") or {})}
            if re.search(r"mailchimp", s["id"]): it["security"]["writes_external"] = True
            it["content_hash"] = sha(json.dumps(s, sort_keys=True))
            out.append(it)
    return out

# ---------------------------------------------------------------- normalize + dedupe
def norm_url(u):
    if not u: return u
    p = urllib.parse.urlsplit(u.strip())
    q = urllib.parse.urlencode([(k, v) for k, v in urllib.parse.parse_qsl(p.query) if not k.lower().startswith("utm_")])
    path = p.path.rstrip("/") or "/"
    return urllib.parse.urlunsplit((p.scheme.lower(), p.netloc.lower().removeprefix("www."), path, q, ""))

PRIORITY = {"seed": 0, "github": 1, "mcp-registry": 2, "prompts.chat": 3, "ui-hub": 4, "botsdots": 5}
def dedupe(items):
    by_url = {}; by_hash = {}; out = []
    for it in sorted(items, key=lambda x: (PRIORITY.get(x["source"], 9), -(x["metrics"].get("repo_stars") or 0))):
        key = norm_url(it["source_url"])
        if key in by_url:
            keep = by_url[key]
            # merge: remember extra roles/industries but keep the first
            for r in it["roles"]:
                if r not in keep["roles"] and it["industry"] == keep["industry"]: keep["roles"].append(r)
            continue
        h = it.get("content_hash")
        if it["type"] == "skill" and h and h in by_hash and by_hash[h]["id"] != it["id"]:
            it["status"] = "duplicate"; it["duplicate_of"] = by_hash[h]["id"]
        by_url[key] = it
        if h: by_hash.setdefault(h, it)
        out.append(it)
    ids = set()
    for it in out:  # unique ids
        base_id = it["id"]; n = 2
        while it["id"] in ids: it["id"] = f"{base_id}-{n}"; n += 1
        ids.add(it["id"])
    return out

# ---------------------------------------------------------------- link check (2 consecutive failures => dead)
def linkcheck(items, prev_by_id, full):
    def chk(it):
        prev = prev_by_id.get(it["id"])
        if not full and prev and prev.get("http_status", {}).get("source") == 200 and prev.get("checked_at"):
            it["http_status"] = prev["http_status"]; it["checked_at"] = prev["checked_at"]; it["_fails"] = prev.get("_fails", 0); return it
        st, _ = http(it["source_url"], method="HEAD", timeout=20, retries=1)
        if st in (403, 405, 0, 404) or st >= 500:
            st2, _ = http(it["source_url"], timeout=25, retries=1); st = st2 or st
        it["http_status"] = {"source": st}; it["checked_at"] = NOW_S
        fails = (prev or {}).get("_fails", 0)
        it["_fails"] = 0 if 200 <= st < 400 else fails + 1
        if it["_fails"] >= 2: it["status"] = "dead"
        return it
    with ThreadPoolExecutor(16) as ex:
        return list(ex.map(chk, items))

# ---------------------------------------------------------------- main
TRACKED = ("title", "summary_source", "license", "install", "status", "type", "industry", "roles", "content_hash")
def cached(name, fn):
    """Run one source; on failure reuse the last good result so one flaky source never empties the site."""
    cp = os.path.join(DATA, "cache", name + ".json"); os.makedirs(os.path.dirname(cp), exist_ok=True)
    try:
        res = fn()
        if not res: raise RuntimeError("empty result")
        json.dump(res, open(cp, "w"), ensure_ascii=False); print(f"  {name}: {len(res)}", file=sys.stderr); return res
    except Exception as e:
        old = load(cp, [])
        print(f"  {name}: FAILED ({e}); reusing cache with {len(old)} items", file=sys.stderr); return old

def main():
    full = "--full-linkcheck" in sys.argv or NOW.weekday() == 0
    prev = load(os.path.join(DATA, "resources.json"), {"items": []})["items"]
    prev_by_id = {p["id"]: p for p in prev}
    g = cached("github", lambda: collect_github(prev_by_id))
    m = cached("mcp-registry", collect_mcp)
    p = cached("prompts-chat", collect_prompts)
    u = cached("ui-hub", collect_uihub)
    b = cached("botsdots", collect_botsdots)
    s = collect_seed()
    items = dedupe(s + g + m + p + u + b)
    print("linkcheck…", file=sys.stderr); items = linkcheck(items, prev_by_id, full)
    # history fields + changes
    changes = []
    for it in items:
        pv = prev_by_id.get(it["id"])
        it["first_seen"] = (pv or {}).get("first_seen") or NOW_S
        if not pv:
            it["updated_at"] = NOW_S; changes.append({"at": NOW_S, "op": "added", "id": it["id"], "type": it["type"], "industry": it["industry"], "fields_changed": []})
        else:
            diff = [k for k in TRACKED if pv.get(k) != it.get(k)]
            it["updated_at"] = NOW_S if diff else pv.get("updated_at") or NOW_S
            if diff:
                op = "dead" if (it["status"] == "dead" and pv.get("status") != "dead") else "updated"
                changes.append({"at": NOW_S, "op": op, "id": it["id"], "type": it["type"], "industry": it["industry"], "fields_changed": diff})
    cur = {it["id"] for it in items}
    for pid, pv in prev_by_id.items():
        if pid not in cur:
            changes.append({"at": NOW_S, "op": "removed", "id": pid, "type": pv["type"], "industry": pv["industry"], "fields_changed": []})
    items.sort(key=lambda x: (x["industry"], x["type"], x["id"]))
    os.makedirs(os.path.join(DATA, "changes"), exist_ok=True); os.makedirs(os.path.join(DATA, "snapshots"), exist_ok=True)
    json.dump({"generated_at": NOW_S, "count": len(items), "items": items}, open(os.path.join(DATA, "resources.json"), "w"), ensure_ascii=False, indent=0)
    if changes:
        cp = os.path.join(DATA, "changes", TODAY + ".json"); old = load(cp, {"date": TODAY, "items": []})
        old["items"] += changes; json.dump(old, open(cp, "w"), ensure_ascii=False, indent=0)
    snap = {it["id"]: {k: v for k, v in it["metrics"].items() if k in ("repo_stars", "votes", "score")} for it in items}
    json.dump({"date": TODAY, "metrics": snap}, open(os.path.join(DATA, "snapshots", TODAY + ".json"), "w"))
    md = os.path.join(DATA, "mirror")  # drop mirrors of items that left the catalogue
    if os.path.isdir(md):
        for f in os.listdir(md):
            if f.endswith(".md") and f[:-3] not in cur: os.remove(os.path.join(md, f))
    st = load(os.path.join(DATA, "state.json"), {})
    st.update(last_collect=NOW_S, counts={"total": len(items)}, last_changes=len(changes))
    json.dump(st, open(os.path.join(DATA, "state.json"), "w"), indent=1)
    print(f"done: {len(items)} items, {len(changes)} changes", file=sys.stderr)

if __name__ == "__main__":
    main()
