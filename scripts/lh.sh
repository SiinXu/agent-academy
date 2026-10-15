#!/bin/sh
# usage: scripts/lh.sh <url> <name> [desktop|mobile]
LH=/workspace/tools/lh/node_modules/.bin/lighthouse
P=${3:-mobile}
if [ "$P" = desktop ]; then EXTRA="--preset=desktop"; else EXTRA=""; fi
CHROME_PATH=/usr/bin/google-chrome $LH "$1" $EXTRA --quiet --chrome-flags="--headless=new --no-sandbox" --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=".lh/$2-$P.json" >/dev/null 2>&1
node -e "const r=require('./.lh/$2-$P.json');const c=r.categories;console.log('$2 $P',Object.values(c).map(x=>x.id+':'+Math.round(x.score*100)).join(' '));for(const a of Object.values(r.audits))if(a.score!==null&&a.score<0.9&&a.scoreDisplayMode!=='informative'&&a.scoreDisplayMode!=='manual')console.log('  -',a.id,a.displayValue||'',a.score)"
