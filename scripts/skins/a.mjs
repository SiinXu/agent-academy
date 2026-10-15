// Direction A · "Zinc + Indigo" · Hub vs: minimal · shadcn/ui + Magic UI
export function page(X) {
  const { COUNTS: C, esc, nf, ic, roles, csItems, mkItems, feed, STYLE_CARDS, TAX, SOON, IND_IC, owner, mono, stars, rUrl, safeTags, licTag, TYPE, wizard, copyBtn, radio, BASE, IMG, i, n, tx, updated } = X;
  const css = `
:root{--f-body:"Geist",ui-sans-serif,system-ui,sans-serif;--f-mono:"Geist Mono",ui-monospace,monospace;
 --bg:#FFFFFF;--bg2:#FAFAFA;--card:#FFFFFF;--muted-bg:#F4F4F5;--line:#E4E4E7;--input:#E4E4E7;--ink:#09090B;--ink2:#3F3F46;--muted:#71717A;
 --acc:#4F46E5;--acc-ink:#FFFFFF;--acc-soft:#EEF2FF;--acc-2:#818CF8;--ring:#4F46E5;--flicker-color:#4F46E5;
 --mc-from:#4F46E5;--mc-to:#A5B4FC;--mc-glow:rgba(79,70,229,.06);--bento-sh:0 0 0 1px rgba(0,0,0,.03),0 2px 4px rgba(0,0,0,.05),0 12px 24px rgba(0,0,0,.05);
 --t-bg:#FFFFFF;--t-ink:#18181B;--ln:#A1A1AA;--caret:#4F46E5;--tk-num:#4F46E5;--tk-key:#4338CA;--tk-url:#52525B;--tk-str:#6D28D9;--tk-kw:#4F46E5;--bg-sh:#4F46E5}
.dark{--bg:#09090B;--bg2:#0E0E11;--card:#09090B;--muted-bg:#18181B;--line:#27272A;--input:#27272A;--ink:#FAFAFA;--ink2:#D4D4D8;--muted:#A1A1AA;
 --acc:#818CF8;--acc-ink:#0B0B2B;--acc-soft:rgba(129,140,248,.12);--acc-2:#C7D2FE;--ring:#818CF8;--flicker-color:#818CF8;
 --mc-from:#818CF8;--mc-to:#312E81;--mc-glow:rgba(129,140,248,.10);
 --t-bg:#09090B;--t-ink:#E4E4E7;--ln:#52525B;--caret:#818CF8;--tk-num:#A5B4FC;--tk-key:#C7D2FE;--tk-url:#A1A1AA;--tk-str:#C4B5FD;--tk-kw:#A5B4FC;--bg-sh:#4F46E5}
.wrap{max-width:1200px;margin:0 auto;padding:0 24px}
.i-moon{display:none}.dark .i-sun{display:none}.dark .i-moon{display:block}
/* shadcn Button */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:36px;padding:0 16px;border-radius:8px;font-size:14px;font-weight:500;white-space:nowrap;transition:background .15s,color .15s,box-shadow .15s,opacity .15s;border:1px solid transparent}
.btn .ic{width:16px;height:16px}
.btn-p{background:var(--ink);color:var(--bg)}.btn-p:hover{background:color-mix(in srgb,var(--ink) 90%,transparent)}
.btn-acc{background:var(--acc);color:var(--acc-ink)}.btn-acc:hover{background:color-mix(in srgb,var(--acc) 90%,transparent)}
.btn-o{border-color:var(--line);background:var(--bg);box-shadow:0 1px 2px rgba(0,0,0,.05)}.btn-o:hover{background:var(--muted-bg)}
.dark .btn-o{background:color-mix(in srgb,var(--input) 30%,transparent)}.dark .btn-o:hover{background:color-mix(in srgb,var(--input) 50%,transparent)}
.btn-g:hover{background:var(--muted-bg)}.btn-lg{height:40px;padding:0 24px}.btn-sm{height:32px;padding:0 12px}.btn-ic{width:36px;padding:0}
.btn:disabled{opacity:.5;pointer-events:none}
/* nav = shadcn Tabs list */
.nav{position:sticky;top:0;z-index:40;background:color-mix(in srgb,var(--bg) 80%,transparent);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.nav .wrap{display:flex;align-items:center;gap:16px;height:60px}
.logo{display:flex;align-items:center;gap:10px;font-weight:600;letter-spacing:-.01em}
.logo-m{width:26px;height:26px;border-radius:7px;background:var(--ink);color:var(--bg);display:grid;place-items:center}.logo-m .ic{width:15px;height:15px}
.tabs-list{display:inline-flex;align-items:center;height:36px;padding:3px;border-radius:10px;background:var(--muted-bg);color:var(--muted);margin:0 auto}
.tabs-list a{display:inline-flex;align-items:center;height:100%;padding:0 12px;border-radius:7px;font-size:14px;font-weight:500;color:color-mix(in srgb,var(--ink) 60%,transparent);border:1px solid transparent;transition:all .15s}
.tabs-list a:hover{color:var(--ink)}.tabs-list a[aria-current]{background:var(--bg);color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.05)}
.dark .tabs-list a[aria-current]{background:color-mix(in srgb,var(--input) 30%,transparent);border-color:var(--input)}
.nav-r{display:flex;gap:8px;align-items:center}
/* hero */
.hero{position:relative;overflow:hidden;border-bottom:1px solid var(--line)}
.hero canvas{position:absolute;inset:0;width:100%;height:100%;-webkit-mask-image:radial-gradient(70% 60% at 70% 40%,#000,transparent);mask-image:radial-gradient(70% 60% at 70% 40%,#000,transparent)}
.hero .wrap{position:relative;display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center;padding-top:88px;padding-bottom:72px}
.eyebrow{display:inline-flex;align-items:center;gap:8px;height:26px;padding:0 10px 0 4px;border:1px solid var(--line);border-radius:999px;font-size:12px;font-weight:500;color:var(--ink2);background:var(--bg)}
.eyebrow b{display:inline-flex;align-items:center;height:18px;padding:0 7px;border-radius:999px;background:var(--acc);color:var(--acc-ink);font-weight:500}
h1{font-size:clamp(40px,5.4vw,64px);line-height:1.02;letter-spacing:-.035em;font-weight:600;margin:20px 0 0;text-wrap:balance}
.wr{display:block;overflow:hidden;padding:2px 0 8px}.wr span{display:inline-block;color:var(--acc)}
.lede{font-size:18px;line-height:1.55;color:var(--muted);max-width:520px;margin:18px 0 28px}
.cta{display:flex;gap:12px;flex-wrap:wrap}
.stats{display:grid;grid-template-columns:repeat(4,1fr);margin-top:44px;border:1px solid var(--line);border-radius:12px;background:var(--bg);overflow:hidden}
.stat{padding:14px 16px;border-left:1px solid var(--line)}.stat:first-child{border-left:0}
.stat b{display:block;font-size:24px;font-weight:600;letter-spacing:-.02em;font-variant-numeric:tabular-nums}.stat span{font-size:12.5px;color:var(--muted)}
/* hero beam diagram */
.diagram{--beam-from:var(--acc);--beam-to:var(--acc-2);--beam-path:var(--muted);position:relative;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:24px;padding:28px;border:1px solid var(--line);border-radius:16px;background:color-mix(in srgb,var(--bg) 70%,transparent);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);min-height:420px}
.dg-col{display:flex;flex-direction:column;gap:14px}
.node{display:flex;align-items:center;gap:10px;padding:8px 12px 8px 8px;border:1px solid var(--line);border-radius:999px;background:var(--bg);font-size:13px;font-weight:500;box-shadow:0 0 20px -12px rgba(0,0,0,.8)}
.node i{width:28px;height:28px;border-radius:999px;display:grid;place-items:center;background:var(--muted-bg);font:600 11px/1 var(--f-mono);font-style:normal;color:var(--ink2)}
.node small{margin-left:auto;color:var(--muted);font:500 11.5px/1 var(--f-mono)}
.hub{width:84px;height:84px;border-radius:999px;display:grid;place-items:center;background:var(--bg);border:1px solid var(--line);box-shadow:0 0 20px -12px rgba(0,0,0,.8)}
.hub .ic{width:34px;height:34px;color:var(--acc)}
.dg-out{justify-self:end}.dg-out .node{flex-direction:column;border-radius:16px;padding:14px 16px;gap:6px;text-align:center}
.dg-out .node .ic{width:26px;height:26px;color:var(--ink)}
.dg-cap{position:absolute;left:0;right:0;bottom:14px;text-align:center;font:500 11.5px/1 var(--f-mono);color:var(--muted)}
/* sections */
.sec{padding:96px 0 0}
.sec-h{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:28px}
.sec-h h2{font-size:36px;letter-spacing:-.03em;line-height:1.1;font-weight:600;margin:0;text-wrap:balance}
.sec-h p{margin:8px 0 0;color:var(--muted);max-width:560px}
.kicker{font:500 12.5px/1 var(--f-mono);color:var(--acc);margin:0 0 12px}
/* Magic UI Bento Grid */
.bento{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:22rem;gap:16px}
.bc{position:relative;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;border-radius:12px;background:var(--bg);box-shadow:var(--bento-sh);transform:translateZ(0)}
.dark .bc{box-shadow:inset 0 -20px 80px -20px #ffffff1f;border:1px solid rgba(255,255,255,.1)}
.bc.span2{grid-column:span 2}
.bc-bg{position:absolute;inset:0;overflow:hidden}
.bc-body{position:relative;z-index:10;margin-top:auto;padding:16px;display:flex;flex-direction:column;gap:4px;transition:transform .3s;pointer-events:none}
.bc:hover .bc-body{transform:translateY(-40px)}
.bc-body .ic{width:48px;height:48px;color:var(--ink2);transform-origin:left;transition:transform .3s ease-in-out;stroke-width:1.25}
.bc:hover .bc-body .ic{transform:scale(.75)}
.bc-body h3{margin:0;font-size:20px;font-weight:600;color:var(--ink2)}
.bc-body p{margin:0;color:var(--muted);max-width:32rem;font-size:14.5px}
.bc-cta{position:absolute;bottom:0;left:0;z-index:10;padding:16px;display:flex;align-items:center;gap:8px;font-size:14px;font-weight:500;color:var(--acc);opacity:0;transform:translateY(40px);transition:all .3s}
.bc-cta .ic{width:16px;height:16px}
.bc:hover .bc-cta{opacity:1;transform:none}
.bc::after{content:"";position:absolute;inset:0;pointer-events:none;transition:background .3s}.bc:hover::after{background:rgba(0,0,0,.03)}.dark .bc:hover::after{background:rgba(38,38,38,.1)}
.fade-b{-webkit-mask-image:linear-gradient(to top,transparent 34%,#000 78%);mask-image:linear-gradient(to top,transparent 34%,#000 78%)}
.thumbs{position:absolute;top:18px;right:-40px;left:40px;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;transform:rotate(-4deg) translateY(-8px);transition:transform .4s}
.bc:hover .thumbs{transform:rotate(-4deg) translateY(-14px) scale(1.02)}
.thumb{border-radius:10px;overflow:hidden;border:1px solid var(--line);background:var(--muted-bg);aspect-ratio:16/10}.thumb img{width:100%;height:100%;object-fit:cover}
.thumb figcaption{display:none}
.alist{position:absolute;inset:12px 12px 0;display:flex;flex-direction:column;gap:10px}
.notif{display:flex;gap:10px;align-items:center;padding:10px 12px;border-radius:14px;background:var(--bg);box-shadow:0 0 0 1px rgba(0,0,0,.03),0 2px 4px rgba(0,0,0,.05),0 12px 24px rgba(0,0,0,.05);transition:transform .2s}
.dark .notif{background:transparent;border:1px solid rgba(255,255,255,.1);box-shadow:0 -20px 80px -20px #ffffff1f inset;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}
.notif:hover{transform:scale(1.02)}
.notif i{flex:none;width:36px;height:36px;border-radius:12px;display:grid;place-items:center;background:var(--acc-soft);color:var(--acc);font:600 11px/1 var(--f-mono);font-style:normal}
.notif b{display:block;font-size:13px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:220px}
.notif small{font-size:12px;color:var(--muted)}
.vmq{position:absolute;inset:0 0 auto;height:72%;display:flex;gap:8px;padding:0 12px;-webkit-mask-image:linear-gradient(to bottom,transparent,#000 15%,#000 70%,transparent);mask-image:linear-gradient(to bottom,transparent,#000 15%,#000 70%,transparent)}
.vmq .marquee{--duration:30s;flex:1;padding:0}
.mini{width:100%;padding:10px 12px;border-radius:12px;border:1px solid var(--line);background:var(--bg);transition:background .2s}
.mini:hover{background:var(--muted-bg)}
.mini b{display:block;font-size:12.5px;font-weight:500;line-height:1.35}.mini small{display:block;margin-top:4px;font:500 11px/1 var(--f-mono);color:var(--muted)}
.bars{position:absolute;inset:20px 20px auto;display:flex;flex-direction:column;gap:8px}
.bar{display:grid;grid-template-columns:96px 1fr 40px;align-items:center;gap:10px;font-size:12px;color:var(--muted)}
.bar span:nth-child(2){height:8px;border-radius:999px;background:var(--muted-bg);overflow:hidden}
.bar span:nth-child(2) i{display:block;height:100%;border-radius:inherit;background:var(--acc);opacity:var(--o,1);width:var(--w)}
.bar span:last-child{text-align:right;font:500 11.5px/1 var(--f-mono);color:var(--ink2)}
.soonlist{position:absolute;inset:20px 20px auto;display:flex;flex-wrap:wrap;gap:8px}
.soonlist span{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;border-radius:999px;border:1px dashed var(--line);font-size:12.5px;color:var(--muted)}
.soonlist .ic{width:14px;height:14px}
/* wizard = shadcn Card + Border Beam */
.wz{position:relative;border:1px solid var(--line);border-radius:12px;background:var(--card);box-shadow:0 1px 2px rgba(0,0,0,.05)}
.wz .border-beam{--bb-size:120px;--bb-dur:8s;--bb-from:var(--acc);--bb-to:var(--acc-2)}
.wz-head{display:grid;grid-template-columns:1fr auto;gap:16px 32px;align-items:start;padding:24px 24px 0}
.wz-head h3{margin:0;font-size:18px;font-weight:600;letter-spacing:-.01em}.wz-head p{margin:6px 0 0;color:var(--muted);font-size:14px}
.prog{min-width:260px}
.prog-l{display:flex;justify-content:space-between;font-size:13px;font-weight:500;margin-bottom:8px}.prog-l span:last-child{color:var(--muted);font-variant-numeric:tabular-nums}
.progress{position:relative;height:8px;width:100%;overflow:hidden;border-radius:999px;background:color-mix(in srgb,var(--acc) 20%,transparent)}
.progress i{position:absolute;inset:0;background:var(--acc);transform:translateX(calc(-100% + var(--p,0) * 1%));transition:transform .5s cubic-bezier(.16,1,.3,1)}
.wz-tabs{grid-column:1/-1;display:inline-flex;width:fit-content;height:36px;padding:3px;border-radius:10px;background:var(--muted-bg)}
.wz-tabs button{display:inline-flex;align-items:center;gap:8px;padding:0 14px;border-radius:7px;font-size:14px;font-weight:500;color:color-mix(in srgb,var(--ink) 60%,transparent);border:1px solid transparent;transition:all .15s}
.wz-tabs button[aria-selected="true"]{background:var(--bg);color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.05)}
.dark .wz-tabs button[aria-selected="true"]{background:color-mix(in srgb,var(--input) 30%,transparent);border-color:var(--input)}
.wz-tabs button:disabled{opacity:.5;cursor:not-allowed}
.wz-tabs em{font-style:normal;display:inline-grid;place-items:center;width:18px;height:18px;border-radius:999px;font:600 11px/1 var(--f-mono);background:var(--line);color:var(--ink2)}
.wz-tabs button[data-done="true"] em{background:var(--acc);color:var(--acc-ink)}
.wz-steps{padding:24px}
.wz-h{margin:0 0 16px;font-size:15px;font-weight:600;outline:none}
.opt-prof{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.pc{border-radius:12px;padding:20px;text-align:left;display:flex;flex-direction:column;gap:12px;min-height:188px;--gs:220px}
.pc .pc-ic{width:44px;height:44px;border-radius:10px;display:grid;place-items:center;background:var(--muted-bg);color:var(--ink);transition:background .2s,color .2s}
.pc .pc-ic .ic{width:22px;height:22px}
.pc b{font-size:17px;font-weight:600;letter-spacing:-.01em}.pc p{margin:0;color:var(--muted);font-size:13.5px;line-height:1.45}
.pc small{margin-top:auto;font:500 12px/1 var(--f-mono);color:var(--muted)}
.pc .tick{position:absolute;top:14px;right:14px;width:22px;height:22px;border-radius:999px;display:grid;place-items:center;background:var(--acc);color:var(--acc-ink);opacity:0;transform:scale(.6);transition:all .2s cubic-bezier(.2,.9,.3,1.2)}
.pc .tick .ic{width:13px;height:13px;stroke-width:2.5}
[data-sel="true"].pc{background:linear-gradient(var(--card) 0 0) padding-box,linear-gradient(var(--acc),var(--acc)) border-box}
[data-sel="true"].pc .tick{opacity:1;transform:none}
[data-sel="true"].pc .pc-ic{background:var(--acc);color:var(--acc-ink)}
.field{margin-top:20px;display:grid;gap:8px;max-width:640px}
.field label{font-size:14px;font-weight:500}
.input{height:40px;width:100%;border-radius:8px;border:1px solid var(--input);background:transparent;padding:0 12px;font:inherit;font-size:14px;color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.05);transition:border-color .15s,box-shadow .15s}
.dark .input{background:color-mix(in srgb,var(--input) 30%,transparent)}
.input:focus{outline:none;border-color:var(--ring);box-shadow:0 0 0 3px color-mix(in srgb,var(--ring) 50%,transparent)}
.input::placeholder{color:var(--muted)}
.field small{color:var(--muted);font-size:13px;min-height:1.2em}
.soon{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:20px;padding-top:16px;border-top:1px dashed var(--line)}
.soon-l{font:500 12px/1 var(--f-mono);color:var(--muted);margin-right:4px}
.soon-i{display:inline-flex;align-items:center;gap:6px;height:26px;padding:0 10px;border-radius:999px;background:var(--muted-bg);color:var(--muted);font-size:12.5px}.soon-i .ic{width:13px;height:13px}
/* shadcn Radio Group · Choice Card */
.opt-role,.opt-plat{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.opt-plat{grid-template-columns:repeat(5,1fr)}
.choice{display:flex;gap:12px;align-items:flex-start;text-align:left;padding:16px;border:1px solid var(--line);border-radius:8px;transition:border-color .15s,background .15s;background:var(--card)}
.choice:hover{background:var(--bg2)}
.choice .ct{flex:1;min-width:0}.choice b{display:block;font-size:14px;font-weight:500}.choice small{display:block;margin-top:4px;color:var(--muted);font-size:13px;line-height:1.4}
.choice .rd{flex:none;width:16px;height:16px;border-radius:999px;border:1px solid var(--input);margin-top:2px;display:grid;place-items:center;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.choice .rd::after{content:"";width:8px;height:8px;border-radius:999px;background:var(--acc);transform:scale(0);transition:transform .15s}
.choice[data-sel="true"]{border-color:var(--acc);background:var(--acc-soft)}
.choice[data-sel="true"] .rd{border-color:var(--acc)}.choice[data-sel="true"] .rd::after{transform:scale(1)}
.pm{flex:none;width:36px;height:36px;border-radius:8px;display:grid;place-items:center;border:1px solid var(--line);background:var(--bg);font:600 13px/1 var(--f-mono);letter-spacing:-.02em}
.choice.plat{flex-direction:column;gap:10px}.choice.plat .rd{position:absolute;top:14px;right:14px;margin:0}.choice.plat{position:relative}
.pref+.pref{margin-top:24px}
.pref-l{margin:0 0 10px;font-size:13px;font-weight:500;color:var(--ink2)}.pref-l span{color:var(--muted);font-weight:400;margin-left:6px}
.opt-style{display:grid;grid-template-columns:repeat(7,1fr);gap:12px}
.sc{border-radius:12px;padding:6px;text-align:left;--gs:160px}
.sc .sc-img{aspect-ratio:16/10;border-radius:8px;overflow:hidden;background:var(--muted-bg);display:grid;place-items:center;color:var(--muted)}
.sc .sc-img img{width:100%;height:100%;object-fit:cover;transition:transform .4s}.sc:hover .sc-img img{transform:scale(1.04)}
.sc b{display:block;margin:8px 4px 0;font-size:13px;font-weight:500}.sc small{display:block;margin:2px 4px 4px;font:500 11px/1.3 var(--f-mono);color:var(--muted)}
.sc[data-sel="true"]{background:linear-gradient(var(--card) 0 0) padding-box,linear-gradient(var(--acc),var(--acc)) border-box}
.sc[data-sel="true"] b{color:var(--acc)}
/* shadcn Badge chips */
.opt-lang{display:flex;flex-wrap:wrap;gap:8px}
.badge{display:inline-flex;align-items:center;gap:4px;height:28px;padding:0 12px;border-radius:999px;border:1px solid var(--line);font-size:13px;font-weight:500;transition:all .15s;color:var(--ink2)}
.badge:hover{background:var(--muted-bg)}
.badge[data-sel="true"]{background:var(--acc);border-color:var(--acc);color:var(--acc-ink)}
.wz-foot{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:28px;padding-top:20px;border-top:1px solid var(--line)}
.wz-sum{display:flex;align-items:center;gap:10px;min-width:0;flex-wrap:wrap}
.wz-sum-l{font:500 12px/1 var(--f-mono);color:var(--muted)}
.wz-chips{display:flex;flex-wrap:wrap;gap:6px}
.chip{display:inline-flex;align-items:center;height:24px;padding:0 9px;border-radius:999px;background:var(--muted-bg);color:var(--ink2);font-size:12px;font-weight:500;transition:background .15s}.chip:hover{background:var(--line)}
.sum-empty{font-size:13px;color:var(--muted)}
.wz-nav{display:flex;gap:8px;flex:none}
.shimmer-btn{height:40px;padding:0 22px;font-weight:500;font-size:14px;--radius:10px}
/* result */
.wz-result{padding:24px;display:grid;gap:24px}
.term{border:1px solid var(--line);border-radius:12px;background:var(--t-bg);overflow:hidden}
.term-h{display:flex;align-items:center;gap:8px;padding:14px 16px;border-bottom:1px solid var(--line)}
.term-h .dots{display:flex;gap:8px}.term-h .dots i{width:8px;height:8px;border-radius:999px;background:#EF4444}.term-h .dots i:nth-child(2){background:#EAB308}.term-h .dots i:nth-child(3){background:#22C55E}
.term-h span{margin-left:8px;font:500 12px/1 var(--f-mono);color:var(--muted)}.term-h small{margin-left:auto;font:500 12px/1 var(--f-mono);color:var(--muted)}
.term-b{padding:16px;margin:0;font:400 13px/1.6 var(--f-mono);cursor:text;white-space:pre-wrap;overflow-wrap:anywhere}
.res-l{margin:0 0 12px;font-size:13px;font-weight:500;color:var(--ink2)}
.stage{--beam-from:var(--acc);--beam-to:var(--acc-2);--beam-path:var(--muted);display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:72px;padding:28px;border:1px solid var(--line);border-radius:12px;background:var(--bg2);min-height:260px}
.stage-col{display:flex;flex-direction:column;gap:12px}
.stage-col[data-files-r]{align-items:flex-end}
.agent{width:96px;height:96px;border-radius:999px;display:grid;place-items:center;align-content:center;gap:4px;background:var(--bg);border:1px solid var(--line);box-shadow:0 0 20px -12px rgba(0,0,0,.8);text-align:center}
.agent .ic{width:28px;height:28px;color:var(--acc)}.agent b{font-size:11.5px;font-weight:600;max-width:84px;line-height:1.1}
.file{display:flex;align-items:center;gap:10px;width:260px;max-width:100%;padding:10px 12px;border:1px solid var(--line);border-radius:10px;background:var(--bg);box-shadow:0 1px 2px rgba(0,0,0,.05);transition:border-color .15s,transform .15s}
.file:hover{border-color:var(--acc);transform:translateY(-1px)}
.file .f-ic{flex:none;width:32px;height:32px;border-radius:8px;display:grid;place-items:center;background:var(--acc-soft);color:var(--acc)}.file .f-ic .ic{width:16px;height:16px}
.file b{display:block;font:500 12.5px/1.3 var(--f-mono);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.file small{display:block;font-size:12px;color:var(--muted);margin-top:2px}
.file .f-t{min-width:0}
.res-actions{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.copy-btn.btn-acc{height:40px;padding:0 18px;border-radius:8px;font-weight:500;font-size:14px}
.copy-btn[data-copied="true"]{box-shadow:0 0 0 4px color-mix(in srgb,var(--acc) 25%,transparent)}
.res-actions .btn-g{margin-left:auto}
/* feed: Marquee + Tweet Card */
.feed{position:relative;display:flex;flex-direction:column;gap:4px}
.feed::before,.feed::after{content:"";position:absolute;top:0;bottom:0;width:20%;z-index:2;pointer-events:none}
.feed::before{left:0;background:linear-gradient(to right,var(--bg),transparent)}.feed::after{right:0;background:linear-gradient(to left,var(--bg),transparent)}
.tw{display:flex;flex-direction:column;gap:10px;width:340px;padding:16px;border:1px solid var(--line);border-radius:12px;background:var(--bg);transition:background .15s}
.tw:hover{background:var(--bg2)}
.tw-h{display:flex;align-items:center;gap:10px}
.tw-h i{width:36px;height:36px;border-radius:999px;border:1px solid color-mix(in srgb,var(--line) 50%,transparent);display:grid;place-items:center;background:var(--muted-bg);font:600 11px/1 var(--f-mono);font-style:normal;color:var(--ink2);flex:none}
.tw-h b{display:block;font-size:14px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:230px}
.tw-h small{display:block;color:var(--muted);font-size:12.5px}
.tw p{margin:0;font-size:14px;line-height:1.5;color:var(--ink2);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.tw-f{display:flex;gap:6px;flex-wrap:wrap;margin-top:auto}
.tag{display:inline-flex;align-items:center;gap:4px;height:22px;padding:0 8px;border-radius:999px;border:1px solid var(--line);font-size:11.5px;font-weight:500;color:var(--ink2)}
.tag .ic{width:12px;height:12px}.tag.warn{border-color:color-mix(in srgb,var(--acc) 40%,var(--line));color:var(--acc)}
/* before / after */
.case{display:grid;grid-template-columns:1.6fr 1fr;gap:32px;align-items:center}
.compare{aspect-ratio:16/10;border-radius:12px;border:1px solid var(--line);box-shadow:var(--bento-sh)}
.case ol{margin:0;padding:0;list-style:none;display:grid;gap:14px;counter-reset:s}
.case li{display:grid;grid-template-columns:28px 1fr;gap:12px;counter-increment:s}
.case li::before{content:counter(s);width:28px;height:28px;border-radius:999px;display:grid;place-items:center;border:1px solid var(--line);font:600 12px/1 var(--f-mono);color:var(--acc)}
.case li b{display:block;font-size:14.5px;font-weight:600}.case li span{font-size:14px;color:var(--muted)}.case li b span{color:var(--ink)}
.case{grid-template-columns:1.6fr 1fr}
/* footer: shadcn Blocks */
.foot{margin-top:120px;border-top:1px solid var(--line);background:var(--bg2)}
.foot .wrap{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:32px;padding-top:48px;padding-bottom:32px}
.foot .fh{margin:0 0 12px;font-size:13px;font-weight:600}.foot ul{list-style:none;margin:0;padding:0;display:grid;gap:8px}.foot li a{font-size:14px;color:var(--muted)}.foot li a:hover{color:var(--ink)}
.foot p{color:var(--muted);font-size:14px;max-width:320px}
.foot-b{border-top:1px solid var(--line)}.foot-b .wrap{display:flex;justify-content:space-between;padding-top:16px;padding-bottom:16px;font-size:12.5px;color:var(--muted)}
@media (max-width:1024px){.hero .wrap{grid-template-columns:1fr}.opt-style{grid-template-columns:repeat(4,1fr)}.opt-plat{grid-template-columns:repeat(3,1fr)}}
@media (max-width:760px){
 .wrap{padding:0 16px}.tabs-list{display:none}.nav .wrap{justify-content:space-between}
 .hero .wrap{padding-top:48px;padding-bottom:40px;gap:32px}.stats{grid-template-columns:repeat(2,1fr)}.stat:nth-child(3){border-left:0}.stat:nth-child(n+3){border-top:1px solid var(--line)}
 .diagram{gap:12px;padding:16px;min-height:0}.node{font-size:12px;padding:6px 10px 6px 6px}.node small{display:none}.hub{width:56px;height:56px}.hub .ic{width:24px;height:24px}
 .bento{grid-template-columns:1fr;grid-auto-rows:20rem}.bc.span2{grid-column:auto}
 .sec{padding-top:64px}.sec-h{flex-direction:column;align-items:start}.sec-h h2{font-size:28px}
 .wz-head{grid-template-columns:1fr;padding:16px 16px 0}.prog{min-width:0}.wz-tabs{width:100%}.wz-tabs button{flex:1;justify-content:center;padding:0 6px;font-size:13px}
 .wz-steps,.wz-result{padding:16px}
 .opt-prof{grid-template-columns:1fr;gap:10px}.pc{min-height:0;padding:14px;flex-direction:row;align-items:center;gap:12px}.pc p{display:none}.pc small{margin:0 0 0 auto;display:none}
 .opt-role{grid-template-columns:1fr}.opt-plat{grid-template-columns:repeat(2,1fr)}.opt-style{grid-template-columns:repeat(2,1fr)}
 .wz-foot{flex-direction:column;align-items:stretch}.wz-nav{justify-content:flex-end}
 .stage{grid-template-columns:1fr;gap:16px;padding:16px;justify-items:center}.stage-col,.stage-col[data-files-r]{align-items:stretch;width:100%}.file{width:100%}.agent{order:-1}
 .case{grid-template-columns:1fr}.foot .wrap{grid-template-columns:1fr 1fr}.res-actions .btn-g{margin-left:0}
}`;
  const sources = [['GitHub', 'GH', C.src.github], ['MCP Registry', 'MCP', C.src['mcp-registry']], ['prompts.chat', 'PC', C.src['prompts.chat']], ['UI Hub', 'UI', C.src['ui-hub']], ['BotsDots', 'BD', C.src.botsdots]];
  const beamsHero = JSON.stringify(sources.map((s, k) => ({ from: `src-${k}`, to: 'hub-node', curvature: (2 - k) * 30, duration: 5, delay: k * 0.4 })).concat([{ from: 'hub-node', to: 'out-node', duration: 4, delay: 1 }]));
  const chg = Object.entries(X.CHG.items.reduce((a, x) => (a[x.type] = (a[x.type] || 0) + 1, a), {})).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const maxC = chg[0][1];
  const tweet = (x) => `<a class="tw" href="${rUrl(x.id)}"><div class="tw-h"><i>${esc(mono(owner(x.h)))}</i><div><b>${esc(x.t)}</b><small>@${esc(owner(x.h))} · ${tx('types', x.ty)}</small></div></div><p>${esc(x.s)}</p><div class="tw-f"><span class="tag">${ic('star')}${stars(x.q)}</span><span class="tag">${licTag(x)}</span>${safeTags(x)}</div></a>`;
  const half = Math.ceil(feed.length / 2);
  const W = wizard({
    cls: 'card', anim: 'blurfade', typeMs: 4,
    head: `<span class="border-beam" data-mod="wizard-accent" aria-hidden="true"><i></i></span><div class="wz-head" data-mod="steps"><div><h3>${i('qs.title')}</h3><p>${i('wz.sub')}</p></div>
<div class="prog"><div class="prog-l"><span>${i('wz.progress')}</span><span data-wz-progress-label>0%</span></div><div class="progress" data-wz-progress role="progressbar" aria-label="${esc(X.t('wz.progress'))}" data-i-aria="wz.progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i></i></div></div>
<div class="wz-tabs" role="tablist" aria-label="Steps"><button type="button" role="tab" data-wz-tab="1"><em>1</em>${i('wz.tab1')}</button><button type="button" role="tab" data-wz-tab="2"><em>2</em>${i('wz.tab2')}</button><button type="button" role="tab" data-wz-tab="3"><em>3</em>${i('wz.tab3')}</button></div></div>`,
    prof: (p) => `<button type="button" class="pc magic-card" data-magic-card data-gsize="220" data-item ${radio('prof', p.k)} data-mod-item="step1"><span class="tick">${ic('check')}</span><span class="pc-ic">${p.icon}</span><b>${p.name}</b><p>${p.blurb}</p><small>${p.meta}</small></button>`,
    custom: `<div class="field" data-item data-mod="custom"><label for="wz-goal">${i('wz.custom')}</label><input class="input" id="wz-goal" data-wz-goal maxlength="200" placeholder="${esc(X.t('qs.bot_ph'))}" data-i-ph="qs.bot_ph" autocomplete="off"><small data-wz-guess aria-live="polite"></small></div>`,
    roleTpl: `<button type="button" class="choice" data-item ${radio('role', '{val}')} aria-checked="{sel}" data-sel="{sel}"><span class="ct"><b>{title}</b><small>{n} {res} · {eg} {top}</small></span><span class="rd"></span></button>`,
    style: (s) => `<button type="button" class="sc magic-card" data-magic-card data-gsize="160" ${radio('style', s.k)}><span class="sc-img">${s.any ? ic('sparkles') : s.img}</span><b>${s.label}</b><small>${s.sub}</small></button>`,
    plat: (p) => `<button type="button" class="choice plat" ${radio('plat', p.k)}><span class="pm">${esc(p.m)}</span><span class="ct"><b>${p.name}</b><small>${p.noteH}</small></span><span class="rd"></span></button>`,
    lang: (l) => `<button type="button" class="badge" ${radio('lang', l.k)}>${esc(l.n)}</button>`,
    chipTpl: `<button type="button" class="chip" data-chip-step="{step}">{label}</button>`,
    back: `<button type="button" class="btn btn-o" data-wz-back>${ic('left')}${i('wz.back')}</button>`,
    next: `<button type="button" class="btn btn-p" data-wz-next>${i('wz.next')}${ic('right')}</button>`,
    gen: `<button type="button" class="shimmer-btn" data-wz-generate data-mod="generate"><span class="sh-spark-wrap"><span class="sh-spark"></span></span>${ic('sparkles')}${i('wz.gen')}<span class="sh-hl"></span><span class="sh-back"></span></button>`,
    terminal: `<div class="term" data-mod="terminal"><div class="term-h"><span class="dots"><i></i><i></i><i></i></span><span data-term-title>prompt</span><small data-term-status></small></div><pre class="term-b" data-term-body aria-live="off"></pre></div>`,
    agent: `${ic('bot')}<b data-agent-name>Agent</b>`,
    fileTpl: `<a class="file" id="{id}" data-side="{side}" href="{href}" target="_blank" rel="noopener"><span class="f-ic">{ico}</span><span class="f-t"><b>{name}</b><small>{kind} · {note}</small></span></a>`,
    copy: copyBtn('btn-acc'), cursorCls: 'btn btn-o btn-lg',
    restart: `<button type="button" class="btn btn-g" data-wz-restart data-mod="restart">${ic('restart')}${i('wz.restart')}</button>`,
  });
  const main = `<main id="main" data-sk-home="a">
<section class="hero"><canvas data-flicker='{"squareSize":4,"gridGap":6,"flickerChance":0.3,"maxOpacity":0.22}' data-mod="hero-bg" aria-hidden="true"></canvas>
<div class="wrap"><div data-mod="hero"><span class="eyebrow"><b>${i('h.daily')}</b>${i('stat.updated')} ${updated} · ${n('h.changes_n', C.changes)}</span>
<h1>${i('h.title')}<span class="wr" data-word-rotate='${JSON.stringify(X.OPEN.map((k) => TAX.industries[k].en))}' data-rotate-tx="industries:${X.OPEN.join(',')}"><span>${esc(TAX.industries[X.OPEN[0]].en)}</span></span></h1>
<p class="lede">${n('h.lede', C.total)}</p>
<div class="cta" data-mod="buttons"><a class="btn btn-p btn-lg" href="#start">${i('hero.cta')}${ic('right')}</a><a class="btn btn-o btn-lg" href="${BASE}library/">${i('hero.cta2')}</a></div>
<div class="stats" data-mod="stats"><div class="stat"><b data-ticker="${C.total}">${nf(C.total)}</b>${i('stat.resources')}</div><div class="stat"><b data-ticker="${C.skills}">${nf(C.skills)}</b>${i('stat.skills')}</div><div class="stat"><b data-ticker="${C.mcp}">${nf(C.mcp)}</b>${i('stat.mcp')}</div><div class="stat"><b data-ticker="${C.prompts}">${nf(C.prompts)}</b>${i('h.prompts')}</div></div></div>
<div class="diagram" data-beam-stage data-beams='${beamsHero}' data-mod="hero-visual" role="img" aria-label="${esc(X.t('orbit.label'))}" data-i-aria="orbit.label"><div class="dg-col">${sources.map(([nm, m, c], k) => `<div class="node" id="src-${k}"><i>${m}</i>${esc(nm)}<small>${nf(c)}</small></div>`).join('')}</div>
<div class="hub" id="hub-node">${ic('library')}</div><div class="dg-out"><div class="node" id="out-node">${ic('bot')}${i('h.your_agent')}<small>${n('h.courses_n', X.DATA ? Object.keys(X.DATA.courses).length : 0)}</small></div></div>
<div class="dg-cap">${i('h.diag')}</div></div></div></section>

<section class="sec wrap" id="professions"><div class="sec-h"><div><p class="kicker">${i('h.k_prof')}</p><h2>${i('h.prof_t')}</h2><p>${i('h.prof_s')}</p></div><a class="btn btn-o" href="${BASE}courses/">${i('h.all_courses')}${ic('right')}</a></div>
<div class="bento" data-mod="showcase">
 <div class="bc span2"><div class="bc-bg fade-b"><div class="thumbs">${STYLE_CARDS.map((s) => `<figure class="thumb" style="margin:0"><img src="${IMG}style-${s.k}.webp" alt="" loading="lazy" width="480" height="300"></figure>`).join('')}</div></div>
  <div class="bc-body">${ic('palette')}<h3>${tx('industries', 'design')}</h3><p>${nf(C.ind.design)} ${i('fac.items')} · ${roles.design.length} ${i('fac.roles')}. ${i('h.ds_d')}</p></div><a class="bc-cta" href="${BASE}i/design/">${i('h.open_course')}${ic('right')}</a></div>
 <div class="bc" data-mod="showcase-cs"><div class="bc-bg fade-b"><div class="alist" data-animated-list data-delay="1200">${csItems.slice(0, 5).map((x) => `<template><a class="notif" href="${rUrl(x.id)}"><i>${esc(mono(owner(x.h)))}</i><span><b>${esc(x.t)}</b><small>${tx('types', x.ty)} · ${stars(x.q)} ★</small></span></a></template>`).join('')}</div></div>
  <div class="bc-body">${ic('headset')}<h3>${tx('industries', 'customer-service')}</h3><p>${nf(C.ind['customer-service'])} ${i('fac.items')} · ${roles['customer-service'].length} ${i('fac.roles')}</p></div><a class="bc-cta" href="${BASE}i/customer-service/">${i('h.open_course')}${ic('right')}</a></div>
 <div class="bc" data-mod="showcase-mk"><div class="bc-bg"><div class="vmq"><div class="marquee vertical pause" data-marquee data-repeat="3"><div>${mkItems.slice(0, 6).map((x) => `<a class="mini" href="${rUrl(x.id)}"><b>${esc(x.t)}</b><small>${tx('types', x.ty)} · ${stars(x.q)}★</small></a>`).join('')}</div></div><div class="marquee vertical reverse pause" data-marquee data-repeat="3"><div>${mkItems.slice(6, 12).map((x) => `<a class="mini" href="${rUrl(x.id)}"><b>${esc(x.t)}</b><small>${tx('types', x.ty)} · ${stars(x.q)}★</small></a>`).join('')}</div></div></div></div>
  <div class="bc-body">${ic('megaphone')}<h3>${tx('industries', 'marketing')}</h3><p>${nf(C.ind.marketing)} ${i('fac.items')} · ${roles.marketing.length} ${i('fac.roles')}</p></div><a class="bc-cta" href="${BASE}i/marketing/">${i('h.open_course')}${ic('right')}</a></div>
 <div class="bc"><div class="bc-bg"><div class="bars">${chg.map(([ty, c], k) => `<div class="bar">${tx('types', ty)}<span><i style="--w:${Math.max(6, Math.round((c / maxC) * 100))}%;--o:${1 - k * 0.12}"></i></span><span>${nf(c)}</span></div>`).join('')}</div></div>
  <div class="bc-body">${ic('rss')}<h3>${i('h.upd_t')}</h3><p>${n('h.upd_d', C.changes)}</p></div><a class="bc-cta" href="${BASE}changelog/">${i('nav.changelog')}${ic('right')}</a></div>
 <div class="bc"><div class="bc-bg"><div class="soonlist">${SOON.slice(0, 8).map((k) => `<span>${ic(IND_IC[k] || 'box')}${tx('industries', k)}</span>`).join('')}</div></div>
  <div class="bc-body">${ic('layers')}<h3>${i('fac.soon')}</h3><p>${i('h.soon_d')}</p></div><a class="bc-cta" href="${BASE}courses/">${i('h.next')}${ic('right')}</a></div>
</div></section>

<section class="sec wrap" id="start"><div class="sec-h"><div><p class="kicker">${i('qs.title')}</p><h2>${i('h.start_t')}</h2><p>${i('h.start_s')}</p></div></div>
<div data-mod="wizard">${W}</div></section>

<section class="sec" id="latest"><div class="wrap sec-h"><div><p class="kicker">${i('nav.latest')}</p><h2>${i('h.latest_t')}</h2><p>${i('h.latest_s')}</p></div><a class="btn btn-o" href="${BASE}latest/">${i('h.all_latest')}${ic('right')}</a></div>
<div class="feed" data-mod="feed"><div class="marquee pause" data-marquee data-repeat="3"><div>${feed.slice(0, half).map(tweet).join('')}</div></div><div class="marquee reverse pause" data-marquee data-repeat="3"><div>${feed.slice(half).map(tweet).join('')}</div></div></div></section>

<section class="sec wrap" id="case"><div class="sec-h"><div><p class="kicker">${i('h.k_case')}</p><h2>${i('h.case_t')}</h2><p>${i('h.case_s')}</p></div><a class="btn btn-o" href="${BASE}cases/agent-academy-build/">${i('case.read')}${ic('right')}</a></div>
<div class="case"><div class="compare" data-compare data-mod="before-after" tabindex="0" role="slider" aria-label="${esc(X.t('case.drag'))}" data-i-aria="case.drag" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"><img class="cmp-top" src="${IMG}case-before.webp" alt="Before: unstyled HTML" width="1200" height="750" loading="lazy"><img src="${IMG}case-after.webp" alt="After: styled home page" width="1200" height="750" loading="lazy"><span class="cmp-line"></span><span class="cmp-knob">${ic('code')}</span><span class="cmp-tag l">${i('h.before')}</span><span class="cmp-tag r">${i('h.after')}</span></div>
<ol>${[1, 2, 3, 4].map((k) => `<li><span><b>${i('h.cs' + k)}</b>${i('h.cs' + k + 'd')}</span></li>`).join('')}</ol></div></section>
</main>`;
  return { css, main };
}
