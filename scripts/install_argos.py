"""Install the Argos Translate language models used by scripts/translate.py (idempotent)."""
import argostranslate.package as p
need = [("en", c) for c in ("zh", "ja", "ko", "ms", "vi", "fr", "es", "de")] + [("zh", "en")]
have = {(x.from_code, x.to_code) for x in p.get_installed_packages()}
if all(n in have for n in need):
    print("argos: models present"); raise SystemExit
p.update_package_index()
avail = {(x.from_code, x.to_code): x for x in p.get_available_packages()}
for n in need:
    if n not in have and n in avail:
        print("argos: installing", n); p.install_from_path(avail[n].download())
