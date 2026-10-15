// Direction C · "Warm stone + Rose" · Hub vs: editorial · Cult UI + shadcn/ui (+ Aceternity Hero Highlight, Magic UI Safari / Tweet Card / Pulsating Button)
import fs from 'node:fs';
import path from 'node:path';
export function page(X) {
  const { COUNTS: C, esc, nf, ic, roles, csItems, mkItems, mcpItems, feed, STYLE_CARDS, TAX, SOON, IND_IC, owner, mono, stars, rUrl, safeTags, licTag, TYPE, wizard, copyBtn, radio, BASE, IMG, SAFARI, i, n, tx, updated } = X;
  const course = JSON.parse(fs.readFileSync(path.join(X.ROOT, 'dist/api/courses/design/ui-designer.json'), 'utf8'));
  const latin = (s) => s && !/[\u3000-\u9fff\uac00-\ud7af]/.test(s);
  // Aceternity Hero Highlight dot patterns (original data-URIs), recoloured: stone dots, rose hover dots
  const dot = (c) => `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23${c}' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`;
  const css = `
:root{--f-body:"Geist",ui-sans-serif,system-ui,sans-serif;--f-mono:"Geist Mono",ui-monospace,monospace;--f-disp:"Instrument Serif",ui-serif,Georgia,serif;
 --bg:#FAFAF9;--card:#FFFFFF;--muted-bg:#F5F5F4;--line:#E7E5E4;--input:#D6D3D1;--ink:#1C1917;--ink2:#44403C;--muted:#78716C;
 --acc:#E11D48;--acc-text:#BE123C;--acc-ink:#FFFFFF;--acc-soft:#FFE4E6;--acc-2:#FDA4AF;--ring:#E11D48;--pulse-color:rgba(225,29,72,.35);
 --hl-from:#FECDD3;--hl-to:#FDA4AF;--hl-ink:#1C1917;--dot:${dot('d6d3d1')};--dot-hover:${dot('e11d48')};
 --mc-sh:rgba(17,24,28,.08) 0 0 0 1px,rgba(17,24,28,.08) 0 1px 2px -1px,rgba(17,24,28,.04) 0 2px 4px;
 --t-bg:#FFFFFF;--t-ink:#1C1917;--ln:#A8A29E;--caret:#E11D48;--tk-num:#E11D48;--tk-key:#9F1239;--tk-url:#57534E;--tk-str:#BE123C;--tk-kw:#E11D48;
 --sb-c:#E11D48;--beam-from:#E11D48;--beam-to:#FDA4AF}
.dark{--bg:#0C0A09;--card:#1C1917;--muted-bg:#1C1917;--line:#292524;--input:#44403C;--ink:#FAFAF9;--ink2:#D6D3D1;--muted:#A8A29E;
 --acc:#FB7185;--acc-text:#FDA4AF;--acc-ink:#1C0A0E;--acc-soft:rgba(251,113,133,.12);--acc-2:#FECDD3;--ring:#FB7185;--pulse-color:rgba(251,113,133,.35);
 --hl-from:#BE123C;--hl-to:#9F1239;--hl-ink:#FFF1F2;--dot:${dot('292524')};--dot-hover:${dot('fb7185')};
 --mc-sh:0 1px 0 0 rgba(255,255,255,.03) inset,0 0 0 1px rgba(255,255,255,.03) inset,0 0 0 1px rgba(0,0,0,.1),0 2px 2px 0 rgba(0,0,0,.1),0 4px 4px 0 rgba(0,0,0,.1),0 8px 8px 0 rgba(0,0,0,.1);
 --t-bg:#0C0A09;--t-ink:#E7E5E4;--ln:#57534E;--caret:#FB7185;--tk-num:#FB7185;--tk-key:#FDA4AF;--tk-url:#A8A29E;--tk-str:#FECDD3;--tk-kw:#FB7185;
 --sb-c:#FB7185;--beam-from:#FB7185;--beam-to:#FECDD3}
.wrap{max-width:1200px;margin:0 auto;padding:0 24px}
.i-moon{display:none}.dark .i-sun{display:none}.dark .i-moon{display:block}
.serif{font-family:var(--f-disp);font-weight:400;letter-spacing:-.01em}
.kick{font:500 11.5px/1 var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin:0}
.kick b{color:var(--acc-text);font-weight:500}
/* shadcn Button */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:36px;padding:0 16px;border-radius:999px;font-size:14px;font-weight:500;white-space:nowrap;transition:background .15s,color .15s,box-shadow .15s,transform .15s;border:1px solid transparent}
.btn:active{transform:scale(.97)}
.btn .ic{width:16px;height:16px}
.btn-p{background:var(--ink);color:var(--bg)}.btn-p:hover{background:color-mix(in srgb,var(--ink) 88%,transparent)}
.btn-o{border-color:var(--line);background:var(--card);box-shadow:0 1px 2px rgba(28,25,23,.05)}.btn-o:hover{background:var(--muted-bg)}
.btn-g{color:var(--ink2)}.btn-g:hover{background:var(--muted-bg)}.btn-lg{height:44px;padding:0 22px;font-size:15px}.btn-sm{height:32px;padding:0 12px}.btn-ic{width:36px;padding:0}
.btn-acc{background:var(--acc);color:var(--acc-ink)}.btn-acc:hover{background:color-mix(in srgb,var(--acc) 90%,#000)}
.btn:disabled{opacity:.5;pointer-events:none}
/* header + Cult UI Direction Aware Tabs */
.nav{position:sticky;top:0;z-index:40;background:color-mix(in srgb,var(--bg) 82%,transparent);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.nav .wrap{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;height:64px}
.logo{display:flex;align-items:baseline;gap:6px;font:400 26px/1 var(--f-disp);letter-spacing:-.01em}.logo i{font-style:italic;color:var(--acc-text)}
.da{position:relative;display:flex;gap:4px;border-radius:999px;background:#292524;padding:3.2px 3px;box-shadow:inset 0 1px 1px rgba(0,0,0,.4),inset 0 -1px 0 rgba(255,255,255,.04)}
.dark .da{background:#1C1917;box-shadow:inset 0 0 0 1px #292524}
.da a{position:relative;z-index:20;display:flex;align-items:center;gap:8px;padding:6px 14px;border-radius:999px;font-size:13.5px;font-weight:500;color:#E7E5E4;transition:color .2s}
.da a .ic{width:15px;height:15px}
.da-bubble{position:absolute;left:0;top:3.2px;bottom:3.2px;z-index:10;border-radius:999px;background:#44403C;mix-blend-mode:difference;border:1px solid rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.08);transition:transform .4s cubic-bezier(.34,1.25,.64,1),width .4s cubic-bezier(.34,1.25,.64,1)}
.nav-r{display:flex;gap:6px;justify-content:flex-end;align-items:center}
/* hero: Aceternity Hero Highlight */
.hero{border-bottom:1px solid var(--line);overflow:hidden}
.hero .wrap{display:grid;grid-template-columns:1fr 1.05fr;gap:56px;align-items:center;padding-top:88px;padding-bottom:88px}
h1{font:400 clamp(52px,7vw,92px)/.95 var(--f-disp);letter-spacing:-.02em;margin:22px 0 0;text-wrap:balance}
.hl{color:var(--hl-ink);background-image:linear-gradient(to right,var(--hl-from),var(--hl-to));font-style:italic;border-radius:.18em;padding:0 .14em .06em}
.lede{font-size:18px;line-height:1.6;color:var(--muted);max-width:480px;margin:24px 0 30px}
.cta{display:flex;gap:10px;flex-wrap:wrap}
.stats{display:grid;grid-template-columns:repeat(4,auto);justify-content:start;gap:36px;margin-top:48px;padding-top:20px;border-top:1px solid var(--line)}
.stat b{display:block;font:400 40px/1 var(--f-disp);font-variant-numeric:tabular-nums}.stat span{display:block;margin-top:6px;font-size:12.5px;color:var(--muted)}
/* Magic UI Safari with real course content */
.sf-wrap{position:relative;filter:drop-shadow(0 30px 40px rgba(28,25,23,.12))}
.dark .sf-wrap{filter:drop-shadow(0 30px 60px rgba(0,0,0,.6))}
.safari .lfe5e5e5{fill:#E7E5E4}.safari .df262626{fill:#fff}.dark .safari .df404040{fill:#292524}.dark .safari .df262626{fill:#1C1917}
.safari text{fill:#78716C}
.sf-screen{background:var(--card)}
.doc{padding:22px 26px;font-size:12px;line-height:1.5;color:var(--ink2);height:100%;overflow:hidden;-webkit-mask-image:linear-gradient(#000 78%,transparent);mask-image:linear-gradient(#000 78%,transparent)}
.doc-k{font:500 10px/1 var(--f-mono);color:var(--muted);letter-spacing:.06em;text-transform:uppercase}
.doc .doc-h{margin:8px 0 4px;font:400 28px/1.05 var(--f-disp);color:var(--ink)}
.doc p{margin:0 0 12px;max-width:44ch;color:var(--muted)}
.doc ol{list-style:none;margin:0;padding:0;display:grid;gap:7px}
.doc li{display:grid;grid-template-columns:22px 1fr auto;gap:10px;align-items:start;padding:8px 10px;border-radius:10px;background:var(--muted-bg)}
.doc li em{font:500 10.5px/1.6 var(--f-mono);font-style:normal;color:var(--acc-text)}
.doc li b{display:block;font-weight:500;color:var(--ink)}.doc li small{display:block;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:330px}
.doc li span{font:500 10.5px/1.6 var(--f-mono);color:var(--muted)}
/* sections */
.sec{padding:112px 0 0}
.sec-h{display:grid;grid-template-columns:1fr auto;align-items:end;gap:24px;margin-bottom:32px}
.sec-h h2{font:400 52px/1 var(--f-disp);letter-spacing:-.015em;margin:12px 0 0;text-wrap:balance}
.sec-h h2 i{color:var(--acc-text)}
.sec-h p{margin:12px 0 0;color:var(--muted);max-width:560px}
/* Cult UI Texture Card mosaic */
.mosaic{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.tex{--r:24px;border-radius:var(--r);border:1px solid rgba(255,255,255,.6);background:linear-gradient(to bottom,#F5F5F4,rgba(255,255,255,.7))}
.tex>div{border-radius:calc(var(--r) - 1px);border:1px solid rgba(0,0,0,.1);height:100%}
.tex>div>div{border-radius:calc(var(--r) - 2px);border:1px solid rgba(255,255,255,.5);height:100%}
.tex>div>div>div{border-radius:calc(var(--r) - 3px);border:1px solid rgba(12,10,9,.2);height:100%}
.tex>div>div>div>div{border-radius:calc(var(--r) - 4px);border:1px solid rgba(255,255,255,.5);height:100%;background:linear-gradient(to bottom,rgba(255,255,255,.7),rgba(245,245,244,.5));color:#78716C;display:flex;flex-direction:column}
.dark .tex{border-color:rgba(12,10,9,.6);background:linear-gradient(to bottom,#292524,#1C1917)}
.dark .tex>div{border-color:rgba(28,25,23,.8)}.dark .tex>div>div{border-color:#0C0A09}.dark .tex>div>div>div{border-color:rgba(28,25,23,.7)}
.dark .tex>div>div>div>div{border-color:rgba(68,64,60,.5);background:linear-gradient(to bottom,rgba(28,25,23,.7),rgba(12,10,9,.5));color:#A8A29E}
.tex.span2{grid-column:span 2}
.tex-h{padding:22px 22px 0}
.tex-h h3{margin:0;font:400 30px/1.05 var(--f-disp);color:var(--ink);letter-spacing:-.01em}
.tex-h p{margin:6px 0 0;font-size:13.5px;color:var(--muted)}
.tex-c{padding:16px 22px;flex:1}
.tex-f{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 22px 18px;border-top:1px solid var(--line);font-size:13px}
.tex-f a{display:inline-flex;align-items:center;gap:6px;color:var(--ink);font-weight:500}.tex-f a .ic{width:15px;height:15px}.tex-f a:hover{color:var(--acc-text)}
.tex-f small{font:500 11px/1 var(--f-mono);color:var(--muted)}
.mc-thumbs{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.mc-img{position:relative;aspect-ratio:16/10;border-radius:20px;padding:0;box-shadow:0 1px 1px rgba(0,0,0,.05),0 1px 1px rgba(255,252,240,.5) inset,0 0 0 1px rgba(255,255,255,.1) inset,0 0 1px rgba(28,27,26,.5)}
.mc-img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:left top;border-radius:16px}
.mc-img::after{content:"";position:absolute;inset:0;border-radius:16px;box-shadow:0 0 0 1px rgba(0,0,0,.07),0 0 0 3px #fff,0 0 0 4px rgba(0,0,0,.08)}
.dark .mc-img::after{box-shadow:0 0 0 1px rgba(0,0,0,.07),0 0 0 3px rgba(100,100,100,.3),0 0 0 4px rgba(0,0,0,.08)}
.mc-img figcaption{position:absolute;left:10px;bottom:8px;z-index:2;font:500 10.5px/1 var(--f-mono);padding:4px 7px;border-radius:999px;background:rgba(255,255,255,.9);color:#1C1917}
.rows{display:grid;gap:2px}
.row{display:grid;grid-template-columns:28px 1fr auto;gap:10px;align-items:center;padding:8px 0;border-bottom:1px dashed var(--line);font-size:13px;color:var(--ink2)}
.row:last-child{border-bottom:0}
.row i{width:28px;height:28px;border-radius:999px;display:grid;place-items:center;background:var(--muted-bg);font:600 10px/1 var(--f-mono);font-style:normal;color:var(--ink2);border:1px solid var(--line)}
.row span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.row small{font:500 11px/1 var(--f-mono);color:var(--muted)}
.rbar{display:grid;grid-template-columns:120px 1fr 30px;gap:10px;align-items:center;padding:5px 0;font-size:12.5px;color:var(--ink2)}
.rbar span:first-child{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rbar i{display:block;height:6px;border-radius:999px;background:var(--line);overflow:hidden}.rbar i::after{content:"";display:block;height:100%;width:var(--w);border-radius:inherit;background:var(--acc)}
.rbar small{font:500 11px/1 var(--f-mono);color:var(--muted);text-align:right}
.pills{display:flex;flex-wrap:wrap;gap:6px}
.pills span{display:inline-flex;align-items:center;gap:6px;height:26px;padding:0 10px;border-radius:999px;border:1px solid var(--line);background:var(--card);font-size:12.5px;color:var(--ink2)}
.pills span .ic{width:13px;height:13px;color:var(--muted)}
.pills.dash span{border-style:dashed;background:transparent;color:var(--muted)}
/* wizard: shadcn Card + Magic UI Shine Border */
.wz{position:relative;border:1px solid var(--line);border-radius:24px;background:var(--card);box-shadow:0 1px 2px rgba(28,25,23,.05),0 24px 48px -24px rgba(28,25,23,.12)}
.wz .shine-border{--sb-w:1.5px;--sb-dur:14s}
.wz-head{display:grid;grid-template-columns:1fr minmax(240px,320px);gap:12px 40px;align-items:end;padding:28px 32px 0}
.wz-head h3{margin:0;font:400 34px/1 var(--f-disp)}.wz-head p{margin:8px 0 0;color:var(--muted);font-size:14px}
.prog-l{display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:8px;color:var(--muted)}.prog-l b{font-weight:500;color:var(--ink);font-variant-numeric:tabular-nums}
.progress{position:relative;height:4px;width:100%;overflow:hidden;border-radius:999px;background:color-mix(in srgb,var(--acc) 15%,var(--line))}
.progress i{position:absolute;inset:0;background:var(--acc);transform:translateX(calc(-100% + var(--p,0) * 1%));transition:transform .6s cubic-bezier(.16,1,.3,1)}
/* shadcn Tabs · line variant */
.wz-tabs{grid-column:1/-1;display:flex;gap:24px;border-bottom:1px solid var(--line);margin-top:14px}
.wz-tabs button{position:relative;display:inline-flex;align-items:center;gap:8px;padding:12px 2px;font-size:14px;font-weight:500;color:var(--muted);transition:color .15s}
.wz-tabs button::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;border-radius:2px;background:var(--ink);transform:scaleX(0);transition:transform .3s cubic-bezier(.16,1,.3,1)}
.wz-tabs button[aria-selected="true"]{color:var(--ink)}.wz-tabs button[aria-selected="true"]::after{transform:scaleX(1)}
.wz-tabs button:disabled{opacity:.45;cursor:not-allowed}
.wz-tabs em{font:400 italic 17px/1 var(--f-disp);color:var(--muted)}
.wz-tabs button[data-done="true"] em{color:var(--acc-text)}
.wz-steps{padding:28px 32px 28px;overflow:hidden}
.wz-h{margin:0 0 18px;font:400 26px/1.1 var(--f-disp);outline:none}
/* Cult UI Minimal Card (bots + platforms) */
.opt-prof{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.mc{position:relative;border-radius:24px;background:#FAFAF9;padding:8px;text-align:left;box-shadow:var(--mc-sh);transition:background .15s,box-shadow .2s}
.mc:hover{background:#F5F5F4}
.dark .mc{background:#292524}.dark .mc:hover{background:rgba(41,37,36,.8)}
.mc-top{position:relative;height:96px;border-radius:20px;display:grid;place-items:center;background:linear-gradient(to bottom,#FFFFFF,#F5F5F4);box-shadow:0 1px 1px rgba(0,0,0,.05),0 1px 1px rgba(255,252,240,.5) inset,0 0 0 1px rgba(255,255,255,.1) inset,0 0 1px rgba(28,27,26,.5)}
.dark .mc-top{background:linear-gradient(to bottom,#1C1917,#0C0A09);box-shadow:0 1px 0 rgba(255,255,255,.03) inset,0 0 0 1px rgba(255,255,255,.03) inset,0 0 0 1px rgba(0,0,0,.1)}
.mc-top .ic{width:34px;height:34px;color:var(--ink);stroke-width:1.4;transition:color .2s,transform .3s cubic-bezier(.34,1.3,.64,1)}
.mc:hover .mc-top .ic{transform:scale(1.08)}
.mc b{display:block;margin:14px 6px 0;font:400 24px/1.05 var(--f-disp);color:var(--ink)}
.mc p{margin:6px 6px 0;font-size:13px;line-height:1.45;color:var(--muted)}
.mc small{display:block;margin:10px 6px 6px;font:500 11px/1 var(--f-mono);color:var(--muted)}
.mc .tick{position:absolute;top:16px;right:16px;width:22px;height:22px;border-radius:999px;display:grid;place-items:center;background:var(--acc);color:var(--acc-ink);opacity:0;transform:scale(.5);transition:opacity .2s,transform .25s cubic-bezier(.34,1.4,.64,1)}
.mc .tick .ic{width:13px;height:13px;stroke-width:2.6}
.mc[data-sel="true"]{box-shadow:0 0 0 2px var(--acc),var(--mc-sh)}
.mc[data-sel="true"] .tick{opacity:1;transform:none}.mc[data-sel="true"] .mc-top .ic{color:var(--acc-text)}
.field{margin-top:20px;display:grid;gap:8px;max-width:640px}
.field label{font-size:14px;font-weight:500}
.input{height:44px;width:100%;border-radius:12px;border:1px solid var(--input);background:var(--card);padding:0 14px;font:inherit;font-size:14px;color:var(--ink);box-shadow:0 1px 2px rgba(28,25,23,.05);transition:border-color .15s,box-shadow .15s}
.input:focus{outline:none;border-color:var(--ring);box-shadow:0 0 0 3px color-mix(in srgb,var(--ring) 30%,transparent)}
.input::placeholder{color:var(--muted)}
.field small{color:var(--muted);font-size:13px;min-height:1.2em}
.soon{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-top:20px;padding-top:16px;border-top:1px dashed var(--line)}
.soon-l{font:500 11px/1 var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-right:6px}
.soon-i{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 9px;border-radius:999px;border:1px dashed var(--line);color:var(--muted);font-size:12px}.soon-i .ic{width:12px;height:12px}
/* shadcn Radio Group · choice card (roles) */
.opt-role{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.choice{display:flex;gap:12px;align-items:flex-start;text-align:left;padding:16px;border:1px solid var(--line);border-radius:16px;background:var(--card);transition:border-color .15s,background .15s}
.choice:hover{background:var(--muted-bg)}
.choice .ct{flex:1;min-width:0}.choice b{display:block;font-size:14.5px;font-weight:500}.choice small{display:block;margin-top:4px;color:var(--muted);font-size:13px;line-height:1.4}
.choice .rd{flex:none;width:16px;height:16px;border-radius:999px;border:1px solid var(--input);margin-top:2px;display:grid;place-items:center}
.choice .rd::after{content:"";width:8px;height:8px;border-radius:999px;background:var(--acc);transform:scale(0);transition:transform .2s cubic-bezier(.34,1.4,.64,1)}
.choice[data-sel="true"]{border-color:var(--acc);background:var(--acc-soft)}
.choice[data-sel="true"] .rd{border-color:var(--acc)}.choice[data-sel="true"] .rd::after{transform:scale(1)}
.pref+.pref{margin-top:26px}
.pref-l{margin:0 0 12px;font:500 11.5px/1 var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}.pref-l span{text-transform:none;letter-spacing:0;margin-left:6px;opacity:.8}
/* Aceternity 3D Card (styles) */
.opt-style{display:grid;grid-template-columns:repeat(7,1fr);gap:12px}
.c3{text-align:left;border-radius:16px;min-width:0}
.c3>span{display:block;padding:6px;border-radius:16px;border:1px solid var(--line);background:var(--card);height:100%}
.c3 .c3-img{display:grid;place-items:center;aspect-ratio:4/3;border-radius:11px;overflow:hidden;background:var(--muted-bg);color:var(--acc-text)}
.c3 .c3-img img{width:100%;height:100%;object-fit:cover;object-position:left top}
.c3 .c3-img .ic{width:22px;height:22px}
.c3 b{display:block;margin:9px 4px 0;font:400 19px/1 var(--f-disp)}
.c3 small{display:block;margin:4px 4px 3px;font:500 10.5px/1.3 var(--f-mono);color:var(--muted)}
.c3:hover>span{box-shadow:0 20px 40px -20px rgba(225,29,72,.25)}
.c3[data-sel="true"]>span{border-color:var(--acc);box-shadow:0 0 0 1px var(--acc)}
.c3[data-sel="true"] b{color:var(--acc-text)}
/* platforms: Minimal Card, compact */
.opt-plat{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
.mc.pl{padding:6px;border-radius:20px}
.mc.pl .mc-top{height:64px;border-radius:15px}
.mc.pl .pm{font:500 22px/1 var(--f-disp);font-style:italic;color:var(--ink)}
.mc.pl[data-sel="true"] .pm{color:var(--acc-text)}
.mc.pl b{font:500 14px/1.2 var(--f-body);margin:10px 6px 0}.mc.pl p{font-size:12px;margin:3px 6px 6px}
.mc.pl .tick{top:12px;right:12px;width:18px;height:18px}.mc.pl .tick .ic{width:11px;height:11px}
/* shadcn Badge */
.opt-lang{display:flex;flex-wrap:wrap;gap:8px}
.badge{display:inline-flex;align-items:center;height:28px;padding:0 12px;border-radius:999px;border:1px solid var(--line);font-size:13px;font-weight:500;color:var(--ink2);background:var(--card);transition:all .15s}
.badge:hover{background:var(--muted-bg)}
.badge[data-sel="true"]{background:var(--ink);border-color:var(--ink);color:var(--bg)}
.wz-foot{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:30px;padding-top:20px;border-top:1px solid var(--line)}
.wz-sum{display:flex;align-items:center;gap:10px;min-width:0;flex-wrap:wrap}
.wz-sum-l{font:500 11px/1 var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.wz-chips{display:flex;flex-wrap:wrap;gap:6px}
.chip{display:inline-flex;align-items:center;height:24px;padding:0 10px;border-radius:999px;background:var(--acc-soft);color:var(--acc-text);font-size:12px;font-weight:500;transition:filter .15s}.chip:hover{filter:brightness(.97)}
.sum-empty{font-size:13px;color:var(--muted)}
.wz-nav{display:flex;gap:8px;flex:none}
/* Magic UI Pulsating Button */
.pulse-btn{display:inline-flex;align-items:center;justify-content:center;height:44px;padding:0 22px;border-radius:999px;background:var(--acc);color:var(--acc-ink);font-size:15px;font-weight:500}
.pulse-btn .ic{width:16px;height:16px}
/* result: Cult UI Code Block */
.wz-result{padding:28px 32px;display:grid;gap:26px}
.cb{position:relative;overflow:hidden;border-radius:16px;border:1px solid rgba(9,9,11,.1);padding:2px;background:#FAFAF9}
.dark .cb{border-color:rgba(255,255,255,.1);background:rgba(255,255,255,.05)}
.cb-tabs{display:flex;align-items:center;gap:4px;padding-right:10px}
.cb-tab{position:relative;margin:4px 0 6px 10px;padding:0 6px;border-radius:8px;font:500 12px/24px var(--f-body);color:var(--ink)}
.cb-tab::after{content:"";position:absolute;left:0;right:0;bottom:-6px;height:2px;border-radius:999px;background:var(--ink)}
.cb-tab.off{color:var(--muted)}.cb-tab.off::after{display:none}
.cb-tabs small{margin-left:auto;font:500 11px/1 var(--f-mono);color:var(--muted)}
.cb pre{margin:0;padding:18px 16px;border-radius:0 0 14px 14px;background:var(--t-bg);font:400 13px/1.65 var(--f-mono);cursor:text;white-space:pre-wrap;overflow-wrap:anywhere}
.dark .cb pre{background:rgba(9,9,11,.5)}
.res-l{margin:0 0 12px;font:500 11.5px/1 var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.stage{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:72px;padding:28px;border:1px dashed var(--input);border-radius:20px;min-height:260px;background-image:var(--dot);background-size:16px 16px}
.stage-col{display:flex;flex-direction:column;gap:12px}.stage-col[data-files-r]{align-items:flex-end}
.agent{width:100px;height:100px;border-radius:999px;display:grid;place-items:center;align-content:center;gap:4px;background:var(--card);box-shadow:var(--mc-sh),0 0 0 6px color-mix(in srgb,var(--acc) 10%,transparent);text-align:center}
.agent .ic{width:28px;height:28px;color:var(--acc-text)}.agent b{font:400 15px/1 var(--f-disp);max-width:84px}
.file{display:flex;align-items:center;gap:10px;width:260px;max-width:100%;padding:6px 12px 6px 6px;border-radius:16px;background:var(--card);box-shadow:var(--mc-sh);transition:transform .2s cubic-bezier(.34,1.3,.64,1)}
.file:hover{transform:translateY(-2px)}
.file .f-ic{flex:none;width:36px;height:36px;border-radius:11px;display:grid;place-items:center;background:var(--muted-bg);color:var(--acc-text)}.file .f-ic .ic{width:16px;height:16px}
.file b{display:block;font:500 12.5px/1.3 var(--f-mono);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--ink)}.file small{display:block;font-size:12px;color:var(--muted);margin-top:2px}
.file .f-t{min-width:0}
.res-actions{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.copy-btn.btn-acc{height:44px;padding:0 20px;border-radius:999px;font-weight:500;font-size:15px}
.copy-btn[data-copied="true"]{box-shadow:0 0 0 5px color-mix(in srgb,var(--acc) 22%,transparent)}
.res-actions .btn-g{margin-left:auto}
/* feed: Magic UI Tweet Card grid */
.tgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.tw{display:flex;flex-direction:column;gap:12px;padding:16px;border:1px solid var(--line);border-radius:12px;background:var(--card);box-shadow:0 1px 2px rgba(28,25,23,.04);transition:border-color .15s,transform .2s}
.tw:hover{border-color:var(--input);transform:translateY(-2px)}
.tw-h{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
.tw-u{display:flex;align-items:center;gap:12px;min-width:0}
.tw-u i{width:40px;height:40px;flex:none;border-radius:999px;border:1px solid color-mix(in srgb,var(--line) 50%,transparent);display:grid;place-items:center;background:var(--muted-bg);font:600 11px/1 var(--f-mono);font-style:normal;color:var(--ink2)}
.tw-u b{display:block;font-size:15px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:240px}
.tw-u small{display:block;font-size:13.5px;color:var(--muted)}
.tw-h>.ic{flex:none;width:18px;height:18px;color:var(--muted)}
.tw p{margin:0;font-size:15px;line-height:1.5;color:var(--ink2);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.tw-f{display:flex;gap:6px;flex-wrap:wrap;margin-top:auto}
.tag{display:inline-flex;align-items:center;gap:4px;height:22px;padding:0 8px;border-radius:999px;border:1px solid var(--line);font-size:11.5px;font-weight:500;color:var(--ink2)}
.tag .ic{width:12px;height:12px}.tag.warn{border-color:color-mix(in srgb,var(--acc) 35%,var(--line));color:var(--acc-text);background:var(--acc-soft)}
/* before / after */
.case{display:grid;grid-template-columns:1fr 1.7fr;gap:48px;align-items:center}
.compare{aspect-ratio:16/10;border-radius:20px;border:1px solid var(--line);box-shadow:var(--mc-sh)}
.case ol{margin:24px 0 0;padding:0;list-style:none;display:grid;gap:0}
.case li{display:grid;grid-template-columns:44px 1fr;gap:12px;padding:14px 0;border-top:1px solid var(--line)}
.case li em{font:400 italic 28px/1 var(--f-disp);color:var(--acc-text)}
.case li b{display:block;font-size:15px;font-weight:500}.case li span{font-size:14px;color:var(--muted)}.case li b span{color:var(--ink);font-size:15px}.case-h{margin:12px 0 0;font:400 46px/1 var(--f-disp);letter-spacing:-.015em}.case-h i{color:var(--acc-text)}.case .btn{margin-top:20px}
/* footer */
.foot{margin-top:128px;border-top:1px solid var(--line)}
.foot .wrap{display:grid;grid-template-columns:1.6fr repeat(3,1fr);gap:32px;padding-top:56px;padding-bottom:40px}
.foot .fh{margin:0 0 14px;font:500 11px/1 var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.foot ul{list-style:none;margin:0;padding:0;display:grid;gap:9px}.foot li a{font-size:14px;color:var(--ink2)}.foot li a:hover{color:var(--acc-text)}
.foot p{color:var(--muted);font-size:14px;max-width:340px}
.foot .foot-big{max-width:none;width:100%;box-sizing:border-box;font:400 clamp(64px,13vw,184px)/.8 var(--f-disp);letter-spacing:-.03em;color:var(--line);text-align:center;margin:0;padding:0 0 8px;white-space:nowrap;overflow:hidden;user-select:none}
.foot .foot-big i{color:color-mix(in srgb,var(--acc) 30%,var(--line))}
.foot .foot-big::before,.foot .foot-big i::before{content:attr(data-t)}
.foot-b{border-top:1px solid var(--line)}.foot-b .wrap{display:flex;justify-content:space-between;padding-top:16px;padding-bottom:16px;font-size:12.5px;color:var(--muted)}
@media (max-width:1024px){.hero .wrap{grid-template-columns:1fr}.opt-style{grid-template-columns:repeat(4,1fr)}.opt-plat{grid-template-columns:repeat(3,1fr)}.mosaic{grid-template-columns:1fr 1fr}.tgrid{grid-template-columns:1fr 1fr}}
@media (max-width:760px){
 .wrap{padding:0 16px}.nav .wrap{grid-template-columns:1fr auto}.da{display:none}.nav-r .gh{display:none}
 .hero .wrap{padding-top:48px;padding-bottom:48px;gap:36px}.stats{grid-template-columns:repeat(2,1fr);gap:20px}
 .doc{padding:12px 14px;font-size:10.5px}.doc .doc-h{font-size:18px}.doc p:not(.doc-h){display:none}.doc li{padding:5px 8px;grid-template-columns:18px 1fr}.doc li span{display:none}.doc li small{max-width:200px}
 .sec{padding-top:80px}.sec-h{grid-template-columns:1fr}.sec-h h2{font-size:38px}
 .mosaic{grid-template-columns:1fr}.tex.span2{grid-column:auto}.mc-thumbs{grid-template-columns:repeat(2,1fr)}.mc-thumbs figure:nth-child(3){display:none}
 .wz{border-radius:20px}.wz-head{grid-template-columns:1fr;padding:20px 16px 0}.wz-head h3{font-size:28px}.wz-tabs{gap:0;justify-content:space-between}.wz-tabs button{font-size:13px}
 .wz-steps,.wz-result{padding:20px 16px}
 .opt-prof{grid-template-columns:1fr;gap:10px}.mc:not(.pl){display:grid;grid-template-columns:64px 1fr;align-items:center;column-gap:4px}.mc:not(.pl) .mc-top{height:64px;border-radius:18px;grid-row:span 2}.mc:not(.pl) .mc-top .ic{width:26px;height:26px}.mc:not(.pl) b{margin:0 6px;font-size:21px}.mc:not(.pl) p{display:none}.mc:not(.pl) small{margin:4px 6px 0}
 .opt-role{grid-template-columns:1fr}.opt-plat{grid-template-columns:repeat(2,1fr)}.opt-style{grid-template-columns:repeat(2,1fr)}
 .wz-foot{flex-direction:column;align-items:stretch}.wz-nav{justify-content:flex-end}
 .stage{grid-template-columns:1fr;gap:14px;padding:14px;justify-items:center}.stage-col,.stage-col[data-files-r]{align-items:stretch;width:100%}.file{width:100%}.agent{order:-1}
 .tgrid{grid-template-columns:1fr}.tgrid .tw:nth-child(n+4){display:none}
 .case{grid-template-columns:1fr;gap:28px}.foot .wrap{grid-template-columns:1fr 1fr}.res-actions .btn-g{margin-left:0}
}`;
  const steps = course.steps.map((s) => { const r = s.read.find((x) => latin(x.title)) || s.read[0]; return { n: s.read.length, key: s.step, eg: r ? r.title : '' }; });
  const tweet = (x) => `<a class="tw" href="${rUrl(x.id)}"><div class="tw-h"><div class="tw-u"><i>${esc(mono(owner(x.h)))}</i><div><b>${esc(x.t)}</b><small>@${esc(owner(x.h))} · ${tx('types', x.ty)}</small></div></div>${ic('github')}</div><p>${esc(x.s)}</p><div class="tw-f"><span class="tag">${ic('star')}${stars(x.q)}</span><span class="tag">${licTag(x)}</span>${safeTags(x)}</div></a>`;
  const tex = (cls, mod, inner) => `<div class="tex ${cls}"${mod ? ` data-mod="${mod}"` : ''}><div><div><div><div>${inner}</div></div></div></div></div>`;
  const mkRoles = roles.marketing.slice(0, 6); const mkMax = Math.max(...mkRoles.map((r) => r.n));
  const W = wizard({
    cls: '', anim: 'direction', typeMs: 4,
    head: `<span class="shine-border" data-mod="wizard-accent" aria-hidden="true"></span><div class="wz-head" data-mod="steps"><div><h3>${i('h.start_t')}</h3><p>${i('wz.sub')}</p></div>
<div><div class="prog-l"><span>${i('wz.progress')}</span><b data-wz-progress-label>0%</b></div><div class="progress" data-wz-progress role="progressbar" aria-label="${esc(X.t('wz.progress'))}" data-i-aria="wz.progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i></i></div></div>
<div class="wz-tabs" role="tablist" aria-label="Steps"><button type="button" role="tab" data-wz-tab="1"><em>i.</em>${i('wz.tab1')}</button><button type="button" role="tab" data-wz-tab="2"><em>ii.</em>${i('wz.tab2')}</button><button type="button" role="tab" data-wz-tab="3"><em>iii.</em>${i('wz.tab3')}</button></div></div>`,
    prof: (p) => `<button type="button" class="mc" data-item ${radio('prof', p.k)}><span class="tick">${ic('check')}</span><span class="mc-top">${p.icon}</span><b>${p.name}</b><p>${p.blurb}</p><small>${p.meta}</small></button>`,
    custom: `<div class="field" data-item data-mod="custom"><label for="wz-goal">${i('wz.custom')}</label><input class="input" id="wz-goal" data-wz-goal maxlength="200" placeholder="${esc(X.t('qs.bot_ph'))}" data-i-ph="qs.bot_ph" autocomplete="off"><small data-wz-guess aria-live="polite"></small></div>`,
    roleTpl: `<button type="button" class="choice" data-item ${radio('role', '{val}')} aria-checked="{sel}" data-sel="{sel}"><span class="ct"><b>{title}</b><small>{n} {res} · {eg} {top}</small></span><span class="rd"></span></button>`,
    style: (s) => `<button type="button" class="c3" data-3d ${radio('style', s.k)}><span><span class="c3-img" data-z style="--z:40">${s.any ? ic('sparkles') : s.img}</span><b data-z style="--z:30">${s.label}</b><small data-z style="--z:20">${s.sub}</small></span></button>`,
    plat: (p) => `<button type="button" class="mc pl" ${radio('plat', p.k)}><span class="tick">${ic('check')}</span><span class="mc-top"><span class="pm">${esc(p.m)}</span></span><b>${p.name}</b><p>${p.noteH}</p></button>`,
    lang: (l) => `<button type="button" class="badge" ${radio('lang', l.k)}>${esc(l.n)}</button>`,
    chipTpl: `<button type="button" class="chip" data-chip-step="{step}">{label}</button>`,
    back: `<button type="button" class="btn btn-o btn-lg" data-wz-back>${ic('left')}${i('wz.back')}</button>`,
    next: `<button type="button" class="btn btn-p btn-lg" data-wz-next>${i('wz.next')}${ic('right')}</button>`,
    gen: `<button type="button" class="pulse-btn" data-wz-generate data-mod="generate"><span>${ic('sparkles')}${i('wz.gen')}</span></button>`,
    terminal: `<div class="cb" data-mod="terminal"><div class="cb-tabs" role="presentation"><span class="cb-tab" data-term-title>prompt.md</span><span class="cb-tab off">AGENTS.md</span><small data-term-status></small></div><pre data-term-body aria-live="off"></pre></div>`,
    agent: `${ic('bot')}<b data-agent-name>Agent</b>`,
    fileTpl: `<a class="file" id="{id}" data-side="{side}" href="{href}" target="_blank" rel="noopener"><span class="f-ic">{ico}</span><span class="f-t"><b>{name}</b><small>{kind} · {note}</small></span></a>`,
    copy: copyBtn('btn-acc'), cursorCls: 'btn btn-o btn-lg',
    restart: `<button type="button" class="btn btn-g btn-lg" data-wz-restart data-mod="restart">${ic('restart')}${i('wz.restart')}</button>`,
  });
  const main = `<main id="main" data-sk-home="c">
<section class="hero hero-hl" data-hero-highlight data-mod="hero-bg"><div class="wrap"><div data-mod="hero"><p class="kick"><b>Agent Academy</b> · ${i('h.daily_upd')} · ${n('h.changes_n', C.changes)}</p>
<h1>${i('h.t_a')} <span class="hl" data-i="h.t_b">${esc(X.t('h.t_b'))}</span></h1>
<p class="lede">${n('h.lede', C.total)}</p>
<div class="cta" data-mod="buttons"><a class="btn btn-p btn-lg" href="#start">${i('hero.cta')}${ic('right')}</a><a class="btn btn-o btn-lg" href="${BASE}library/">${i('hero.cta2')}</a></div>
<div class="stats" data-mod="stats"><div class="stat"><b data-ticker="${C.total}">${nf(C.total)}</b>${i('stat.resources')}</div><div class="stat"><b data-ticker="${C.skills}">${nf(C.skills)}</b>${i('h.skills')}</div><div class="stat"><b data-ticker="${C.mcp}">${nf(C.mcp)}</b>${i('stat.mcp')}</div><div class="stat"><b data-ticker="${C.prompts}">${nf(C.prompts)}</b>${i('h.prompts')}</div></div></div>
<div class="sf-wrap" data-mod="hero-visual"><div class="safari"><div class="sf-screen"><div class="doc"><span class="doc-k">academy/courses/design/ui-designer.md</span><p class="doc-h">${tx('roles', 'ui-designer')} · ${i('h.five_steps')}</p><p data-x="goal.design">${esc(course.goal)}</p>
<ol>${steps.map((s, k) => `<li><em>0${k + 1}</em><div><b>${i('step.' + s.key)}</b><small>${esc(s.eg)}</small></div><span>${s.n} ${i('src.items')}</span></li>`).join('')}</ol></div></div>${SAFARI}</div></div></div></section>

<section class="sec wrap" id="professions"><div class="sec-h"><div><p class="kick"><b>01</b> · ${i('h.k_prof')}</p><h2>${i('h.prof_t')}</h2><p>${i('h.prof_s')}</p></div><a class="btn btn-o" href="${BASE}courses/">${i('h.all_courses')}${ic('right')}</a></div>
<div class="mosaic" data-mod="showcase">
${tex('span2', '', `<div class="tex-h"><h3>${tx('industries', 'design')}</h3><p>${roles.design.length} ${i('fac.roles')}. ${i('h.ds_d')}</p></div><div class="tex-c"><div class="mc-thumbs">${STYLE_CARDS.slice(0, 3).map((s) => `<figure class="mc-img" style="margin:0"><img src="${IMG}style-${s.k}.webp" alt="" loading="lazy" width="480" height="300"><figcaption>${esc(s.k)}</figcaption></figure>`).join('')}</div></div><div class="tex-f"><small>${nf(C.ind.design)} ${i('fac.items')}</small><a href="${BASE}i/design/">${i('h.open_course')}${ic('right')}</a></div>`)}
${tex('', 'showcase-cs', `<div class="tex-h"><h3>${tx('industries', 'customer-service')}</h3><p>${roles['customer-service'].length} ${i('fac.roles')}. ${i('h.cs_d')}</p></div><div class="tex-c"><div class="rows">${csItems.slice(0, 4).map((x) => `<div class="row"><i>${esc(mono(owner(x.h)))}</i><span>${esc(x.t)}</span><small>${stars(x.q)}★</small></div>`).join('')}</div></div><div class="tex-f"><small>${nf(C.ind['customer-service'])} ${i('fac.items')}</small><a href="${BASE}i/customer-service/">${i('h.open_course')}${ic('right')}</a></div>`)}
${tex('', 'showcase-mk', `<div class="tex-h"><h3>${tx('industries', 'marketing')}</h3><p>${roles.marketing.length} ${i('fac.roles')}. ${i('h.mk_d')}</p></div><div class="tex-c">${mkRoles.map((r) => `<div class="rbar">${tx('roles', r.k)}<i style="--w:${Math.round((r.n / mkMax) * 100)}%"></i><small>${r.n}</small></div>`).join('')}</div><div class="tex-f"><small>${nf(C.ind.marketing)} ${i('fac.items')}</small><a href="${BASE}i/marketing/">${i('h.open_course')}${ic('right')}</a></div>`)}
${tex('', '', `<div class="tex-h"><h3>${nf(C.mcp)} ${i('stat.mcp')}</h3><p>${i('h.mcp_d')}</p></div><div class="tex-c"><div class="pills">${mcpItems.slice(0, 6).map((x) => `<span>${ic('plug')}${esc(x.t.length > 24 ? x.t.slice(0, 23) + '…' : x.t)}</span>`).join('')}</div></div><div class="tex-f"><small>MCP Registry</small><a href="${BASE}library/?type=mcp">${i('h.browse')}${ic('right')}</a></div>`)}
${tex('', '', `<div class="tex-h"><h3>${i('fac.soon')}</h3><p>${i('h.soon_d')}</p></div><div class="tex-c"><div class="pills dash">${SOON.slice(0, 8).map((k) => `<span>${ic(IND_IC[k] || 'box')}${tx('industries', k)}</span>`).join('')}</div></div><div class="tex-f"><small>${SOON.length}</small><a href="${BASE}courses/">${i('h.next')}${ic('right')}</a></div>`)}
</div></section>

<section class="sec wrap" id="start"><div class="sec-h"><div><p class="kick"><b>02</b> · ${i('qs.title')}</p><h2>${i('h.start_t')}</h2><p>${i('h.start_s')}</p></div></div>
<div data-mod="wizard">${W}</div></section>

<section class="sec wrap" id="latest"><div class="sec-h"><div><p class="kick"><b>03</b> · ${i('nav.latest')}</p><h2>${i('h.latest_t')}</h2><p>${i('h.latest_s')}</p></div><a class="btn btn-o" href="${BASE}latest/">${i('h.all_latest')}${ic('right')}</a></div>
<div class="tgrid" data-mod="feed">${feed.slice(0, 6).map(tweet).join('')}</div></section>

<section class="sec wrap" id="case"><div class="case"><div><p class="kick"><b>04</b> · ${i('h.k_case')}</p><h2 class="case-h">${i('h.case_t')}</h2>
<ol>${[1, 2, 3, 4].map((k) => `<li><em>${['i.', 'ii.', 'iii.', 'iv.'][k - 1]}</em><div><b>${i('h.cs' + k)}</b>${i('h.cs' + k + 'd')}</div></li>`).join('')}</ol><a class="btn btn-o" href="${BASE}cases/agent-academy-build/">${i('case.read')}${ic('right')}</a></div>
<div class="compare" data-compare data-mod="before-after" tabindex="0" role="slider" aria-label="${esc(X.t('case.drag'))}" data-i-aria="case.drag" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"><img class="cmp-top" src="${IMG}case-before.webp" alt="Before: unstyled HTML" width="1200" height="750" loading="lazy"><img src="${IMG}case-after.webp" alt="After: styled home page" width="1200" height="750" loading="lazy"><span class="cmp-line"></span><span class="cmp-knob">${ic('code')}</span><span class="cmp-tag l">${i('h.before')}</span><span class="cmp-tag r">${i('h.after')}</span></div></div></section>
</main>`;
  return { css, main };
}
