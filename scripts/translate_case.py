"""Machine-translate content/cases/*.en.md into the other locales (Argos offline), keeping markdown structure,
`code` spans and **bold** markers. zh-TW comes from the hand-written zh-CN file via OpenCC. Run once per edit."""
import os as _o
for _k in ("OMP_NUM_THREADS", "MKL_NUM_THREADS", "OPENBLAS_NUM_THREADS"): _o.environ.setdefault(_k, "1")
import os, re, sys, glob
from concurrent.futures import ProcessPoolExecutor
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T = {"ja": "ja", "ko": "ko", "ms": "ms", "vi": "vi", "fr": "fr", "es": "es", "de": "de"}
NOTE = {"ja": "機械翻訳", "ko": "기계 번역", "ms": "Terjemahan mesin", "vi": "Bản dịch máy", "fr": "Traduction automatique", "es": "Traducción automática", "de": "Maschinelle Übersetzung"}
def tr_text(s, code):
    import argostranslate.translate as t
    parts = re.split(r"(`[^`]+`|\*\*|\[[^\]]*\]\([^)]*\))", s)
    out = []
    for p in parts:
        if not p or p.startswith("`") or p == "**" or not re.search(r"[A-Za-z]{2}", p): out.append(p); continue
        if p.startswith("["):
            m = re.match(r"\[([^\]]*)\]\(([^)]*)\)", p); out.append(f"[{t.translate(m.group(1), 'en', code)}]({m.group(2)})"); continue
        lead = re.match(r"\s*", p).group(0); trail = re.search(r"\s*$", p).group(0)
        out.append(lead + t.translate(p.strip(), "en", code) + trail)
    return "".join(out)
def tr_line(ln, code):
    if ln.startswith("```") or not ln.strip(): return ln
    if re.match(r"^\|\s*-", ln): return ln
    if ln.startswith("|"):
        cells = ln.strip().strip("|").split("|"); return "| " + " | ".join(tr_text(c.strip(), code) for c in cells) + " |"
    m = re.match(r"^!\[([^\]]*)\]\((.*)\)$", ln)
    if m: return f"![{tr_text(m.group(1), code)}]({m.group(2)})"
    m = re.match(r"^(#{1,4}\s+|\s*[-*]\s+|\s*\d+\.\s+)?(.*)$", ln)
    return (m.group(1) or "") + tr_text(m.group(2), code)
def job(a):
    src, loc = a; code = T[loc]; lines = open(src).read().split("\n"); out = []; inc = False
    for ln in lines:
        if ln.startswith("```"): inc = not inc; out.append(ln); continue
        out.append(ln if inc else tr_line(ln, code))
    title = out[0]; out.insert(1, f"\n_{NOTE[loc]} (Argos Translate). Original: English._")
    open(src.replace(".en.md", f".{loc}.md"), "w").write("\n".join(out)); return loc
if __name__ == "__main__":
    import opencc
    cc = opencc.OpenCC("s2twp")
    for zh in glob.glob(os.path.join(ROOT, "content/cases/*.zh-CN.md")):
        open(zh.replace(".zh-CN.md", ".zh-TW.md"), "w").write(cc.convert(open(zh).read()))
    srcs = glob.glob(os.path.join(ROOT, "content/cases/*.en.md"))
    with ProcessPoolExecutor(4) as ex:
        for r in ex.map(job, [(s, l) for s in srcs for l in T]): print("case", r, file=sys.stderr)
