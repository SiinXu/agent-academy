#!/usr/bin/env python3
import os as _o
for _k in ("OMP_NUM_THREADS", "MKL_NUM_THREADS", "OPENBLAS_NUM_THREADS"): _o.environ.setdefault(_k, "1")
"""Headless translation of resource summaries + course texts into 9 locales with Argos Translate (offline, open source).
Cache: data/l10n/<locale>.json  {id: {"s": text, "h": hash_of_source, "by": "argos"}}; only new/changed summaries are translated.
zh-TW is produced from zh-CN with OpenCC (s2twp), which reads better than direct en->zt models.
Sources in Chinese (UI Hub notes) are translated zh->en first, then en->others; zh-CN keeps the original.
Optional LLM polish: an agent can overwrite entries and set "by": "agent"; those are never overwritten by this script while the source hash is unchanged.
Usage: python scripts/translate.py [--limit N]"""
import json, os, sys, hashlib, re
from concurrent.futures import ProcessPoolExecutor
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
L10N = os.path.join(ROOT, "data", "l10n")
TARGETS = {"zh-CN": "zh", "ja": "ja", "ko": "ko", "ms": "ms", "vi": "vi", "fr": "fr", "es": "es", "de": "de"}
H = lambda s: hashlib.sha1(s.encode()).hexdigest()[:12]

def texts():
    db = json.load(open(os.path.join(ROOT, "data", "resources.json")))
    out = {}
    for i in db["items"]:
        if i.get("status") in ("dead", "duplicate") or not i.get("summary_source"): continue
        out[i["id"]] = (i["summary_source"], i.get("summary_lang") or "en")
    c = json.load(open(os.path.join(ROOT, "data", "courses.json")))
    tx = {}
    for ind, lst in c["checklists"].items():
        for k, s in enumerate(lst): tx[f"check.{ind}.{k}"] = (s, "en")
    for ind, s in c["goals"].items(): tx[f"goal.{ind}"] = (s, "en")
    for ind, s in c["permissions"].items(): tx[f"perm.{ind}"] = (s, "en")
    return out, tx

_tr = None
def _init():
    global _tr
    import argostranslate.translate as t; _tr = t
def _job(args):
    key, src, slang, targets = args
    res = {}
    try:
        en = src if slang == "en" else _tr.translate(src, "zh", "en")
        res["en"] = en
        for loc, code in targets:
            if loc == "zh-CN" and slang == "zh-CN": res[loc] = src; continue
            res[loc] = _tr.translate(en, "en", code)
    except Exception as e:
        print("fail", key, e, file=sys.stderr)
    return key, res

def main():
    limit = int(sys.argv[sys.argv.index("--limit") + 1]) if "--limit" in sys.argv else None
    os.makedirs(L10N, exist_ok=True)
    cache = {loc: json.load(open(os.path.join(L10N, loc + ".json"))) if os.path.exists(os.path.join(L10N, loc + ".json")) else {} for loc in list(TARGETS) + ["zh-TW", "en"]}
    items, tx = texts()
    jobs = []
    for bucket, src_map in (("items", items), ("texts", tx)):
        for key, (src, slang) in src_map.items():
            h = H(src)
            def cur(loc):
                d = cache[loc] if bucket == "items" else cache[loc].get("_texts", {})
                return d.get(key)
            need = [(loc, code) for loc, code in TARGETS.items() if not cur(loc) or (cur(loc)["h"] != h and cur(loc).get("by") != "agent")]
            if need: jobs.append((bucket, key, src, slang, need, h))
    if limit: jobs = jobs[:limit]
    print(f"translate: {len(jobs)} texts need work", file=sys.stderr)
    import opencc; cc = opencc.OpenCC("s2twp")
    with ProcessPoolExecutor(int(os.environ.get("TR_WORKERS", "3")), initializer=_init) as ex:
        meta = {key: (bucket, h) for bucket, key, *_r, h in jobs}
        for n, (key, res) in enumerate(ex.map(_job, [(k, s, sl, need) for _b, k, s, sl, need, _h in jobs], chunksize=4)):
            bucket, h = meta[key]
            for loc, txt in res.items():
                if loc == "en":
                    if bucket == "items" and items.get(key, ("", "en"))[1] != "en": cache["en"][key] = {"s": txt, "h": h, "by": "argos"}
                    continue
                tgt = cache[loc] if bucket == "items" else cache[loc].setdefault("_texts", {})
                tgt[key] = {"s": txt, "h": h, "by": "argos"}
                if loc == "zh-CN":
                    tw = cache["zh-TW"] if bucket == "items" else cache["zh-TW"].setdefault("_texts", {})
                    tw[key] = {"s": cc.convert(txt), "h": h, "by": "opencc"}
            if n % 100 == 0:
                print(f"  {n}/{len(jobs)}", file=sys.stderr)
                for loc, d in cache.items(): json.dump(d, open(os.path.join(L10N, loc + ".json"), "w"), ensure_ascii=False)
    # Chinese-source items: zh-CN keeps the original wording
    for key, (src, slang) in items.items():
        if slang == "zh-CN":
            cache["zh-CN"][key] = {"s": src, "h": H(src), "by": "source"}
            cache["zh-TW"][key] = {"s": cc.convert(src), "h": H(src), "by": "opencc"}
    live = set(items)
    for loc, d in cache.items():
        for k in [k for k in d if not k.startswith("_") and k not in live]: d.pop(k)
        json.dump(d, open(os.path.join(L10N, loc + ".json"), "w"), ensure_ascii=False)
    print("translate: done", file=sys.stderr)

if __name__ == "__main__":
    main()
