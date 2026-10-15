// Direction B · "Neutral black + Emerald" · Hub vs: dark-tech · Aceternity UI + Cult UI (+ Magic UI list/marquee/beam)
import fs from 'node:fs';
import path from 'node:path';
export function pageB(X) {
  const { COUNTS: C, esc, nf, ic, roles, csItems, mkItems, mcpItems, feed, STYLE_CARDS, TAX, SOON, IND_IC, owner, mono, stars, rUrl, safety, TYPE, wizard, themeBtn, copyBtn, radio, BASE } = X;
  const BB = JSON.parse(fs.readFileSync(path.join(X.ROOT, 'directions/orig/bg-beams.json'), 'utf8'));
  const css = `
:root{--f-body:"Geist",ui-sans-serif,system-ui,sans-serif;--f-mono:"Geist Mono",ui-monospace,monospace;
 --bg:#FAFAFA;--card:#FFFFFF;--muted-bg:#F5F5F5;--line:#E5E5E5;--ink:#0A0A0A;--ink2:#404040;--muted:#737373;
 --acc:#047857;--acc-ink:#FFFFFF;--acc-soft:#ECFDF5;--acc-b1:#10B981;--acc-b2:#047857;--acc-b3:#6EE7B7;--ring:#047857;
 --shadow-input:0 2px 3px -1px rgba(0,0,0,.1),0 1px 0 0 rgba(25,28,33,.02),0 0 0 1px rgba(25,28,33,.08);
 --he-bg:#E5E5E5;--spot-bg:#ECFDF5;--dotc:rgba(4,120,87,.35);--mb-c:#10B981;--beam-base:#d4d4d4;
 --t-bg:#0A0A0A;--t-ink:#E5E5E5;--ln:#525252;--caret:#34D399;--tk-num:#34D399;--tk-key:#6EE7B7;--tk-url:#A3A3A3;--tk-str:#A7F3D0;--tk-kw:#34D399}
.dark{--bg:#0A0A0A;--card:#111111;--muted-bg:#171717;--line:#262626;--ink:#FAFAFA;--ink2:#D4D4D4;--muted:#A3A3A3;
 --acc:#34D399;--acc-ink:#022C22;--acc-soft:rgba(52,211,153,.10);--acc-b1:#34D399;--acc-b2:#059669;--acc-b3:#A7F3D0;--ring:#34D399;
 --shadow-input:none;--he-bg:rgba(38,38,38,.8);--spot-bg:#0B1F18;--dotc:rgba(52,211,153,.45);--mb-c:#34D399;--beam-base:#404040;
 --t-bg:#050505}
${X.MOCKBAR_CSS}
body{letter-spacing:-.005em}
.wrap{max-width:1180px;margin:0 auto;padding:0 24px}
.i-moon{display:none}.dark .i-sun{display:none}.dark .i-moon{display:block}
.lbl{font:500 11px/1 var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.lbl b{color:var(--acc);font-weight:500}
/* header + Aceternity Floating Dock */
.top{position:sticky;top:0;z-index:50;height:0}
.top .wrap{position:relative;display:flex;align-items:flex-start;justify-content:center;padding-top:14px}
.brand{position:absolute;left:24px;top:26px;display:flex;align-items:center;gap:10px;font-weight:600;letter-spacing:-.02em}
.brand i{width:22px;height:22px;border-radius:6px;background:var(--acc);display:grid;place-items:center;color:var(--acc-ink);font-style:normal}.brand i .ic{width:13px;height:13px}
.dock{display:flex;align-items:flex-end;gap:16px;height:64px;padding:0 16px 12px;border-radius:16px;background:color-mix(in srgb,#F9FAFB 92%,transparent);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:var(--shadow-input)}
.dark .dock{background:color-mix(in srgb,#171717 92%,transparent);box-shadow:0 0 0 1px rgba(255,255,255,.06)}
.dock-item{position:relative;width:40px;height:40px;border-radius:999px;display:flex;align-items:center;justify-content:center;background:#E5E7EB;color:#525252}
.dark .dock-item{background:#262626;color:#D4D4D4}
.dock-item[aria-current]{background:var(--ink);color:var(--bg)}
.dock-ic{width:20px;height:20px;display:flex}.dock-ic .ic{width:100%;height:100%}
.dock-tip{position:absolute;top:-32px;left:50%;transform:translate(-50%,2px);white-space:nowrap;border-radius:6px;border:1px solid #E5E7EB;background:#F3F4F6;padding:2px 8px;font-size:12px;color:#404040;opacity:0;pointer-events:none;transition:opacity .15s,transform .15s}
.dark .dock-tip{border-color:#171717;background:#262626;color:#fff}
.dock-item:hover .dock-tip,.dock-item:focus-visible .dock-tip{opacity:1;transform:translate(-50%,0)}
.dock-m{display:none;position:relative}
/* Aceternity FloatingDockMobile: h-10 w-10 rounded-full toggle, items stagger in with y:10 → 0, delay (n-1-i)*0.05 */
.dock-m>button{width:40px;height:40px;border-radius:999px;background:#F9FAFB;display:grid;place-items:center;color:#737373;box-shadow:var(--shadow-input)}.dark .dock-m>button{background:#262626;color:#A3A3A3}.dock-m>button .ic{width:20px;height:20px}
.dock-m ul{position:absolute;right:0;top:48px;display:flex;flex-direction:column;gap:8px;margin:0;padding:0;list-style:none;pointer-events:none}
.dock-m li{opacity:0;transform:translateY(-10px);transition:opacity .2s,transform .2s;transition-delay:calc(var(--i)*50ms)}
.dock-m.open ul{pointer-events:auto}.dock-m.open li{opacity:1;transform:none}
.dock-m li a,.dock-m li button{width:40px;height:40px;border-radius:999px;background:#F9FAFB;display:grid;place-items:center;color:#525252}.dark .dock-m li a,.dark .dock-m li button{background:#171717;color:#D4D4D4}.dock-m li .ic{width:16px;height:16px}
.dock-sep{width:1px;height:24px;background:var(--line);align-self:center;margin-top:12px}
/* hero: Background Beams */
.hero{position:relative;overflow:hidden;padding:150px 0 96px;border-bottom:1px solid var(--line)}
.hero .beams-bg{position:absolute;inset:0;pointer-events:none}
.hero .beams-bg svg{position:absolute;inset:0;width:100%;height:100%}
.hero .wrap{position:relative;display:grid;grid-template-columns:1.15fr .85fr;gap:56px;align-items:center}
.hero h1{margin:18px 0 0;font-size:clamp(44px,6vw,76px);line-height:.98;letter-spacing:-.045em;font-weight:600;text-wrap:balance}
.hero h1 .acc{color:var(--acc)}
.lede{margin:22px 0 32px;font-size:18px;line-height:1.55;color:var(--muted);max-width:540px}
.cta{display:flex;align-items:center;gap:20px;flex-wrap:wrap}
.mb-btn{height:52px;min-width:190px;border-radius:14px}
.mb-btn .mb-in{border:1px solid #1E293B;background:rgba(15,23,42,.8);color:#fff;font-size:15px;font-weight:500;padding:0 22px}
.dark .mb-btn .mb-in{border-color:#262626;background:rgba(10,10,10,.8)}
.mb-btn .mb-in .ic{width:16px;height:16px}
.link{display:inline-flex;align-items:center;gap:6px;font-size:15px;font-weight:500;color:var(--ink2)}.link:hover{color:var(--acc)}.link .ic{width:16px;height:16px}
.stats{display:flex;gap:0;margin-top:48px;border-top:1px solid var(--line)}
.stat{flex:1;padding:16px 16px 0 0}.stat+.stat{padding-left:16px;border-left:1px solid var(--line)}
.stat b{display:block;font:600 28px/1 var(--f-body);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.stat span{display:block;margin-top:8px}
/* hero visual: Magic UI Animated List */
.live{position:relative;height:460px;overflow:hidden;border-radius:16px;border:1px solid var(--line);background:color-mix(in srgb,var(--card) 80%,transparent);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);padding:16px}
.live::after{content:"";position:absolute;left:0;right:0;bottom:0;height:35%;background:linear-gradient(to top,var(--bg),transparent);pointer-events:none}
.live-h{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.dotlive{display:inline-block;width:6px;height:6px;border-radius:999px;background:var(--acc);margin-right:8px;box-shadow:0 0 0 4px var(--acc-soft)}
.alist{display:flex;flex-direction:column;gap:12px}
.notif{display:flex;gap:12px;align-items:center;padding:12px 14px;border-radius:16px;background:var(--card);box-shadow:0 0 0 1px rgba(0,0,0,.03),0 2px 4px rgba(0,0,0,.05),0 12px 24px rgba(0,0,0,.05);transition:transform .2s}
.dark .notif{background:transparent;border:1px solid rgba(255,255,255,.1);box-shadow:0 -20px 80px -20px #ffffff1f inset}
.notif:hover{transform:scale(1.02)}
.notif i{flex:none;width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:var(--acc-soft);color:var(--acc);font-style:normal}.notif i .ic{width:18px;height:18px}
.notif b{display:block;font-size:14px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:300px}
.notif small{display:block;font-size:12.5px;color:var(--muted)}
/* sections */
.sec{padding:112px 0 0}
.sec-h{display:grid;grid-template-columns:1fr auto;align-items:end;gap:24px;margin-bottom:32px}
.sec-h h2{margin:14px 0 0;font-size:40px;line-height:1.05;letter-spacing:-.04em;font-weight:600;text-wrap:balance}.sec-h p{margin:12px 0 0;color:var(--muted);max-width:560px}
/* Aceternity Bento Grid */
.bento{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:18rem;gap:16px}
.bi{display:flex;flex-direction:column;justify-content:space-between;gap:16px;padding:16px;border-radius:12px;border:1px solid var(--line);background:var(--card);box-shadow:var(--shadow-input);transition:box-shadow .2s}
.dark .bi{border-color:rgba(255,255,255,.2);background:#000;box-shadow:none}
.bi:hover{box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)}.dark .bi:hover{box-shadow:none}
.bi.span2{grid-column:span 2}
.bi-head{flex:1;min-height:6rem;border-radius:12px;overflow:hidden;position:relative;background:linear-gradient(to bottom right,var(--muted-bg),var(--card))}
.dark .bi-head{background:linear-gradient(to bottom right,#171717,#000)}
.bi-txt{transition:transform .2s}.bi:hover .bi-txt{transform:translateX(8px)}
.bi-txt .ic{width:16px;height:16px;color:var(--muted)}
.bi-t{margin:8px 0;font-weight:700;color:var(--ink2);font-size:15px}.dark .bi-t{color:#E5E5E5}
.bi-d{font-size:12.5px;color:var(--muted);line-height:1.5}
.bh-thumbs{position:absolute;inset:12px;display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.bh-thumbs img{width:100%;height:100%;object-fit:cover;border-radius:8px;border:1px solid var(--line)}
.bh-list{position:absolute;inset:12px;display:flex;flex-direction:column;gap:8px}
.bh-row{display:flex;align-items:center;gap:8px;padding:8px;border-radius:10px;border:1px solid var(--line);background:var(--card);font-size:12px}
.dark .bh-row{background:#0A0A0A}
.bh-row i{flex:none;width:22px;height:22px;border-radius:999px;background:var(--acc-soft);color:var(--acc);display:grid;place-items:center;font:600 9px/1 var(--f-mono);font-style:normal}
.bh-row span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bh-bars{position:absolute;inset:14px 16px;display:flex;flex-direction:column;justify-content:center;gap:7px}
.bh-bars div{display:grid;grid-template-columns:118px 1fr 34px;align-items:center;gap:10px}
.bh-bars i{display:block;height:8px;border-radius:999px;background:linear-gradient(to right,var(--acc-b2),var(--acc-b1));width:var(--h)}
.bh-bars small{font:500 11px/1 var(--f-body);color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bh-bars em{font:500 10.5px/1 var(--f-mono);color:var(--ink2);font-style:normal;text-align:right;font-variant-numeric:tabular-nums}
.bh-chips{position:absolute;inset:12px;display:flex;flex-wrap:wrap;align-content:flex-start;gap:6px}
.bh-chips span{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 9px;border-radius:999px;border:1px solid var(--line);background:var(--card);font:500 11px/1 var(--f-mono);color:var(--ink2);max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dark .bh-chips span{background:#0A0A0A}
.bh-chips .ic{width:12px;height:12px;color:var(--acc)}
.bh-chips.soon span{border-style:dashed;color:var(--muted);font-family:var(--f-body);font-size:12px}
/* Cult UI Wizard Expandable */
.wz{position:relative;border-radius:20px;background:var(--card);box-shadow:0 0 0 1px rgba(0,0,0,.06),0 1px 2px -1px rgba(0,0,0,.06),0 2px 4px 0 rgba(0,0,0,.04);transition:box-shadow .2s;overflow:hidden}
.dark .wz{background:#0D0D0D;box-shadow:0 0 0 1px rgba(255,255,255,.06),0 1px 2px -1px rgba(255,255,255,.03),0 2px 4px 0 rgba(0,0,0,.2)}
.wz-bar{position:absolute;left:0;top:0;height:2px;width:100%;background:var(--line)}.wz-bar i{display:block;height:100%;width:calc(var(--p,0) * 1%);background:var(--acc);transition:width .5s cubic-bezier(.16,1,.3,1)}
.wz-top{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px 0}
.wz-tabs{display:flex;padding:1px}
.wz-tabs button{display:flex;align-items:center;gap:8px;min-height:44px;padding:16px;border-radius:8px;color:var(--muted);font-size:14px;transition:color .15s,background-color .15s,transform .15s}
.wz-tabs button:hover{background:color-mix(in srgb,var(--muted-bg) 60%,transparent)}.wz-tabs button:active{transform:scale(.98)}
.wz-tabs button[aria-selected="true"]{border-bottom-left-radius:0;border-bottom-right-radius:0;background:color-mix(in srgb,var(--muted-bg) 50%,transparent);color:var(--ink);font-weight:500}
.dark .wz-tabs button[aria-selected="true"]{background:#171717}
.wz-tabs button:disabled{opacity:.45;cursor:not-allowed}
.wz-tabs em{font-style:normal;display:flex;width:20px;height:20px;border-radius:999px;align-items:center;justify-content:center;font:700 10px/1 var(--f-body);font-variant-numeric:tabular-nums;background:color-mix(in srgb,var(--muted-bg) 50%,transparent);color:var(--muted);box-shadow:inset 0 1px 1px hsla(0,0%,0%,.02),inset 0 1px 1px hsla(0,0%,0%,.02),0 0 0 1px rgba(255,255,255,.25);transition:all .2s}
.dark .wz-tabs em{box-shadow:inset 0 1px 1px hsla(0,0%,100%,.02),inset 0 1px 1px rgba(255,255,255,.05),inset 0 0 0 1px hsla(0,0%,100%,.05),0 0 1px rgba(0,0,0,.25)}
.wz-tabs button[aria-selected="true"] em,.wz-tabs button[data-done="true"] em{background:color-mix(in srgb,var(--acc) 15%,transparent);color:var(--acc);box-shadow:0 0 0 1px color-mix(in srgb,var(--acc) 25%,transparent)}
.wz-top .pct{font-variant-numeric:tabular-nums}
.wz-steps{padding:0 20px 20px}
.well{border-radius:0 12px 12px 12px;background:color-mix(in srgb,var(--muted-bg) 50%,transparent);padding:20px 16px 16px;box-shadow:0 0 0 1px rgba(0,0,0,.06),0 1px 2px -1px rgba(0,0,0,.05)}
.dark .well{background:#171717;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 1px 2px -1px rgba(255,255,255,.04)}
.wz-h{margin:0 0 4px;font-size:18px;font-weight:500;letter-spacing:-.01em;text-wrap:balance;outline:none}
.wz-panel>.wz-h+*{margin-top:16px}
.opt-prof{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.spot-card.pc{--spot-r:300px;display:flex;flex-direction:column;align-items:flex-start;gap:10px;text-align:left;min-height:196px;padding:24px;border-radius:8px;border:1px solid var(--line);background:var(--card);transition:border-color .2s}
.dark .spot-card.pc{background:#000;border-color:#262626}
.spot-card.pc::before{background-color:var(--spot-bg);background-image:radial-gradient(var(--dotc) 1.2px,transparent 1.4px);background-size:9px 9px}
.pc .pc-ic{width:40px;height:40px;border-radius:10px;display:grid;place-items:center;border:1px solid var(--line);background:var(--card);color:var(--ink)}.pc .pc-ic .ic{width:20px;height:20px}
.dark .pc .pc-ic{background:#0A0A0A}
.pc b{font-size:18px;font-weight:600;letter-spacing:-.02em;margin-top:6px}.pc p{margin:0;font-size:13.5px;color:var(--muted);line-height:1.5}
.pc small{margin-top:auto}
.pc[data-sel="true"]{border-color:var(--acc)}.pc[data-sel="true"] .pc-ic{background:var(--acc);border-color:var(--acc);color:var(--acc-ink)}
.pc .sel-dot{position:absolute;top:16px;right:16px;width:8px;height:8px;border-radius:999px;background:var(--acc);opacity:0;box-shadow:0 0 0 4px var(--acc-soft);transition:opacity .2s}.pc[data-sel="true"] .sel-dot{opacity:1}
.field{margin-top:16px;display:grid;gap:8px;max-width:620px}
.field label{font-size:13px;font-weight:500;color:var(--ink2)}
.input{height:42px;width:100%;border-radius:8px;border:0;background:var(--card);padding:0 12px;font:inherit;font-size:14px;color:var(--ink);box-shadow:0 0 0 1px var(--line),0 1px 2px rgba(0,0,0,.04);transition:box-shadow .15s}
.dark .input{background:#0A0A0A}
.input:focus{outline:none;box-shadow:0 0 0 2px var(--acc)}
.field small{min-height:1.2em;color:var(--acc);font:500 12px/1.3 var(--f-mono)}
.soon{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-top:16px}
.soon-l{font:500 11px/1 var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-right:6px}
.soon-i{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 9px;border-radius:999px;border:1px dashed var(--line);color:var(--muted);font-size:12px}.soon-i .ic{width:12px;height:12px}
/* Aceternity Card Hover Effect */
.hgrid{display:grid;grid-template-columns:repeat(3,1fr);--he-r:24px}
.hcard{display:block;padding:8px;text-align:left;border-radius:24px}
.hcard .hc{height:100%;border-radius:16px;padding:20px;border:1px solid transparent;background:var(--card);box-shadow:var(--shadow-input);transition:border-color .2s}
.dark .hcard .hc{background:#000;border-color:rgba(255,255,255,.2)}
.hcard:hover .hc{border-color:#CBD5E1}.dark .hcard:hover .hc{border-color:#334155}
.hcard h4{margin:0;font-weight:700;letter-spacing:.01em;color:var(--ink);font-size:15px}
.hcard p{margin:8px 0 0;color:var(--muted);font-size:13px;line-height:1.55;letter-spacing:.01em}
.hcard[data-sel="true"] .hc{border-color:var(--acc);box-shadow:0 0 0 1px var(--acc)}
.hcard[data-sel="true"] h4{color:var(--acc)}
.hcard .pm{display:inline-grid;place-items:center;width:34px;height:34px;border-radius:9px;margin-bottom:12px;border:1px solid var(--line);font:600 12px/1 var(--f-mono)}
.hgrid.plat{grid-template-columns:repeat(5,1fr)}
.pref+.pref{margin-top:20px}.pref-l{margin:0 0 10px;font:500 11px/1 var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}.pref-l span{text-transform:none;letter-spacing:0;margin-left:6px;opacity:.8}
/* Aceternity Focus Cards */
.fgrid{display:grid;grid-template-columns:repeat(7,1fr);gap:12px}
.fc{position:relative;min-width:0;height:150px;border-radius:8px;overflow:hidden;background:var(--muted-bg);text-align:left}
.dark .fc{background:#171717}
.fc img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:left top}
.fc img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.fc .fc-o{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:12px;background:rgba(0,0,0,.5);opacity:0;transition:opacity .3s}
.fc.is-h .fc-o,.fc[data-sel="true"] .fc-o{opacity:1}
.fc .fc-o b{font-size:16px;font-weight:500;background:linear-gradient(to bottom,#FAFAFA,#E5E5E5);-webkit-background-clip:text;background-clip:text;color:transparent}
.fc .fc-o small{font:500 10.5px/1.3 var(--f-mono);color:#D4D4D4}
.fc .fc-any{position:absolute;inset:0;display:grid;place-items:center;align-content:center;gap:8px;color:var(--muted);font-size:13px;text-align:center;padding:10px}.fc .fc-any .ic{width:22px;height:22px;color:var(--acc)}
.fc[data-sel="true"]{box-shadow:0 0 0 2px var(--acc)}
.fc[data-sel="true"]::after{content:"";position:absolute;top:10px;right:10px;width:8px;height:8px;border-radius:999px;background:var(--acc);box-shadow:0 0 0 3px rgba(0,0,0,.4)}
/* shadcn Badge chips */
.opt-lang{display:flex;flex-wrap:wrap;gap:8px}
.badge{display:inline-flex;align-items:center;height:30px;padding:0 13px;border-radius:999px;border:1px solid var(--line);font-size:13px;font-weight:500;color:var(--ink2);background:var(--card);transition:all .15s}
.dark .badge{background:#0A0A0A}
.badge:hover{border-color:var(--muted)}.badge[data-sel="true"]{background:var(--acc);border-color:var(--acc);color:var(--acc-ink)}
.wz-foot{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:16px}
.wz-sum{display:flex;align-items:center;gap:10px;flex-wrap:wrap;min-width:0}
.wz-sum-l{font:500 11px/1 var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.wz-chips{display:flex;gap:6px;flex-wrap:wrap}
.chip{display:inline-flex;align-items:center;height:24px;padding:0 9px;border-radius:999px;background:var(--acc-soft);color:var(--acc);font-size:12px;font-weight:500}
.sum-empty{font-size:13px;color:var(--muted)}
.wz-nav{display:flex;gap:8px;align-items:center;flex:none}
.btn{display:inline-flex;align-items:center;gap:8px;height:44px;padding:0 16px;border-radius:10px;font-size:14px;font-weight:500;transition:background .15s,opacity .15s}
.btn .ic{width:16px;height:16px}.btn:disabled{opacity:.4;pointer-events:none}
.btn-g{color:var(--ink2)}.btn-g:hover{background:var(--muted-bg)}
.btn-p{background:var(--ink);color:var(--bg)}.btn-p:hover{opacity:.9}
.wz .mb-btn{height:46px;min-width:170px;border-radius:12px}
/* result: Cult UI Terminal Animation window */
.wz-result{padding:20px;display:grid;gap:20px}
.res-term{overflow:hidden;border-radius:12px}
.res-term[data-reveal]{transform:translateY(16rem);opacity:1;transition:transform 1s cubic-bezier(.16,1,.3,1)}
.res-term[data-reveal].in{transform:none}
.tw-win{position:relative;display:flex;flex-direction:column;overflow:hidden;border-radius:12px;background:var(--t-bg);min-height:22rem;box-shadow:0 0 0 1px rgba(255,255,255,.06)}
.tw-bar{display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid #1F1F1F}
.tw-bar .dots{display:flex;gap:6px}.tw-bar .dots i{width:10px;height:10px;border-radius:999px;background:#2A2A2A}
.tw-bar span{font:500 12px/1 var(--f-mono);color:#A3A3A3}.tw-bar small{margin-left:auto;font:500 11px/1 var(--f-mono);color:#34D399}
.tw-body{padding:24px 40px 32px;font:400 13.5px/1.7 var(--f-mono);max-height:430px;overflow:auto;cursor:text}
.tw-cmd{color:#737373;margin-bottom:10px}.tw-cmd b{color:#34D399;font-weight:500}
.res-l{margin:0 0 12px}
.stage{--beam-from:var(--acc-b1);--beam-to:var(--acc-b2);--beam-path:var(--beam-base);display:grid;grid-template-columns:1fr auto 1fr;gap:80px;align-items:center;padding:28px;border-radius:12px;background:color-mix(in srgb,var(--muted-bg) 50%,transparent);box-shadow:0 0 0 1px rgba(0,0,0,.06)}
.dark .stage{background:#111;box-shadow:0 0 0 1px rgba(255,255,255,.06)}
.stage-col{display:flex;flex-direction:column;gap:14px}.stage-col[data-files-r]{align-items:flex-end}
.agent{width:76px;height:76px;border-radius:999px;display:grid;place-items:center;align-content:center;background:var(--card);border:2px solid var(--line);box-shadow:0 0 20px -12px rgba(0,0,0,.8);text-align:center;gap:2px}
.dark .agent{background:#000}
.agent .ic{width:26px;height:26px;color:var(--acc)}.agent b{display:none}
.agent-cap{position:absolute}
.file{display:flex;align-items:center;gap:10px;width:250px;max-width:100%;padding:10px;border-radius:999px;border:2px solid var(--line);background:var(--card);box-shadow:0 0 20px -12px rgba(0,0,0,.8);transition:border-color .15s}
.dark .file{background:#000}
.file:hover{border-color:var(--acc)}
.file .f-ic{flex:none;width:34px;height:34px;border-radius:999px;display:grid;place-items:center;background:var(--acc-soft);color:var(--acc)}.file .f-ic .ic{width:16px;height:16px}
.file .f-t{min-width:0;padding-right:10px}.file b{display:block;font:500 12px/1.3 var(--f-mono);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.file small{display:block;font-size:11.5px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.res-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.copy-btn.cb{height:46px;padding:0 20px;border-radius:12px;background:var(--acc);color:var(--acc-ink);font-weight:600;font-size:14px}
.copy-btn.cb[data-copied="true"]{box-shadow:0 0 0 6px color-mix(in srgb,var(--acc) 22%,transparent)}
.btn-o{border:1px solid var(--line);background:var(--card)}.btn-o:hover{background:var(--muted-bg)}.dark .btn-o{background:#0A0A0A}
.res-actions .btn-g{margin-left:auto}
/* feed: Magic UI vertical Marquee × 3 */
.vfeed{position:relative;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;height:600px;overflow:hidden}
.vfeed::before,.vfeed::after{content:"";position:absolute;left:0;right:0;height:25%;z-index:2;pointer-events:none}
.vfeed::before{top:0;background:linear-gradient(to bottom,var(--bg),transparent)}.vfeed::after{bottom:0;background:linear-gradient(to top,var(--bg),transparent)}
.vfeed .marquee{padding:0;--duration:46s}
.fcard{display:block;padding:18px;border-radius:14px;border:1px solid var(--line);background:var(--card);transition:border-color .15s}
.dark .fcard{background:#0D0D0D}
.fcard:hover{border-color:var(--acc)}
.fcard-h{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px}
.fcard b{display:block;font-size:15px;font-weight:600;letter-spacing:-.01em;line-height:1.3}
.fcard p{margin:8px 0 12px;font-size:13.5px;color:var(--muted);line-height:1.5;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.fcard-f{display:flex;flex-wrap:wrap;gap:6px}
.tag{display:inline-flex;align-items:center;gap:4px;height:22px;padding:0 8px;border-radius:6px;background:var(--muted-bg);font:500 11px/1 var(--f-mono);color:var(--ink2)}
.tag .ic{width:11px;height:11px}.tag.warn{background:var(--acc-soft);color:var(--acc)}
/* compare */
.case{display:grid;grid-template-columns:.8fr 2fr;gap:40px;align-items:start}
.case ul{list-style:none;margin:20px 0 0;padding:0;display:grid;gap:0;border-top:1px solid var(--line)}
.case li{padding:14px 0;border-bottom:1px solid var(--line);display:grid;grid-template-columns:36px 1fr;font-size:14px;color:var(--muted)}.case li b{color:var(--ink);font-weight:500;display:block}
.case li em{font:500 11px/1.6 var(--f-mono);font-style:normal;color:var(--acc)}
.compare{aspect-ratio:16/10;border-radius:16px;border:1px solid var(--line)}
.foot{margin-top:128px;border-top:1px solid var(--line)}
.foot .wrap{display:grid;grid-template-columns:1.6fr repeat(3,1fr);gap:32px;padding-top:48px;padding-bottom:40px}
.foot h4{margin:0 0 14px}.foot ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}.foot li a{font-size:14px;color:var(--ink2)}.foot li a:hover{color:var(--acc)}
.foot p{color:var(--muted);font-size:14px;max-width:340px;margin:14px 0 0}
.foot-b .wrap{display:flex;justify-content:space-between;padding-top:16px;padding-bottom:20px;border-top:1px solid var(--line)}
@media (max-width:1024px){.hero .wrap{grid-template-columns:1fr}.fgrid{grid-template-columns:repeat(4,1fr)}.hgrid.plat{grid-template-columns:repeat(3,1fr)}}
@media (max-width:760px){
 .wrap{padding:0 16px}.top{height:64px;background:color-mix(in srgb,var(--bg) 82%,transparent);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}.top .wrap{justify-content:flex-end;padding-top:12px}.brand{left:16px;top:21px}
 .dock{display:none}.dock-m{display:block}
 .hero{padding:110px 0 56px}.stats{flex-wrap:wrap}.stat{flex:1 1 45%;padding:14px 0 0!important;border-left:0!important}.live{height:380px}
 .sec{padding-top:72px}.sec-h{grid-template-columns:1fr}.sec-h h2{font-size:30px}
 .bento{grid-template-columns:1fr;grid-auto-rows:16rem}.bi.span2{grid-column:auto}
 .wz-top{padding:14px 12px 0}.wz-top .pct{display:none}.wz-tabs{width:100%;overflow-x:auto}.wz-tabs button{padding:12px;flex:1;justify-content:center}
 .wz-steps,.wz-result{padding:0 12px 12px}.wz-result{padding-top:12px}
 .opt-prof{grid-template-columns:1fr}.spot-card.pc{min-height:0;padding:16px;flex-direction:row;align-items:center}.pc p,.pc small{display:none}.pc b{margin:0}
 .hgrid{grid-template-columns:1fr}.hgrid.plat{grid-template-columns:repeat(2,1fr)}.fgrid{grid-template-columns:repeat(2,1fr)}.fc{height:110px}
 .wz-foot{flex-direction:column;align-items:stretch}.wz-nav{justify-content:flex-end}
 .tw-body{padding:16px;font-size:12.5px}.stage{grid-template-columns:1fr;gap:14px;padding:14px;justify-items:center}.stage-col,.stage-col[data-files-r]{width:100%;align-items:stretch}.file{width:100%}.agent{order:-1}
 .vfeed{grid-template-columns:1fr;height:520px}.vfeed .marquee:nth-child(n+2){display:none}
 .case{grid-template-columns:1fr}.foot .wrap{grid-template-columns:1fr 1fr}.res-actions .btn-g{margin-left:0}
}`;
  const bgBeams = `<svg data-bg-beams viewBox="0 0 696 316" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="${BB.big}" stroke="url(#paint0_radial_bb)" stroke-opacity="0.05" stroke-width="0.5"/>${BB.paths.map((p, i) => `<path d="${p}" stroke="url(#lg-${i})" stroke-opacity="0.4" stroke-width="0.5"/>`).join('')}<defs>${BB.paths.map((p, i) => `<linearGradient id="lg-${i}" x1="0%" x2="0%" y1="0%" y2="0%"><stop style="stop-color:var(--acc-b3)" stop-opacity="0"/><stop style="stop-color:var(--acc-b3)"/><stop offset="32.5%" style="stop-color:var(--acc-b1)"/><stop offset="100%" style="stop-color:var(--acc-b2)" stop-opacity="0"/></linearGradient>`).join('')}<radialGradient id="paint0_radial_bb" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"><stop offset="0.0666667" style="stop-color:var(--beam-base)"/><stop offset="0.243243" style="stop-color:var(--beam-base)"/><stop offset="0.43594" stop-color="white" stop-opacity="0"/></radialGradient></defs></svg>`;
  const live = [...csItems.slice(0, 3), ...mkItems.slice(0, 2), ...mcpItems.slice(0, 3)].slice(0, 8);
  const tyIc = { mcp: 'plug', skill: 'book', 'system-prompt': 'terminal', template: 'bot', workflow: 'layers', case: 'doc', tutorial: 'book', 'awesome-list': 'library' };
  const mbBtn = (label, attrs = '', inner = '') => `<button type="button" class="mb-btn" data-moving-border data-duration="3000" ${attrs}><span class="mb-track"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%"><rect fill="none" width="100%" height="100%" rx="30%" ry="30%"/></svg><span class="mb-dot"></span></span><span class="mb-in">${inner}${label}</span></button>`;
  const mbLink = (label, href) => `<a class="mb-btn" href="${href}" data-moving-border data-duration="3000"><span class="mb-track"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%"><rect fill="none" width="100%" height="100%" rx="30%" ry="30%"/></svg><span class="mb-dot"></span></span><span class="mb-in">${label}${ic('right')}</span></a>`;
  const mkRoles = roles.marketing.slice(0, 9); const mkMax = Math.max(...mkRoles.map((r) => r.n));
  const fcard = (x) => `<a class="fcard" href="${rUrl(x.id)}"><div class="fcard-h"><span class="lbl">${esc(TYPE[x.ty] || x.ty)} · <b>${esc(TAX.industries[x.in]?.en || x.in)}</b></span><span class="lbl">${ic('star')} ${stars(x.q)}</span></div><b>${esc(x.t)}</b><p>${esc(x.s)}</p><div class="fcard-f"><span class="tag">@${esc(owner(x.h))}</span><span class="tag">${esc(x.li && x.li !== 'see source' ? x.li : 'licence: source')}</span>${safety(x).map(([i, l]) => `<span class="tag warn">${ic(i)}${l}</span>`).join('') || `<span class="tag">${ic('shield')}read-only</span>`}</div></a>`;
  const cols = [feed.filter((_, i) => i % 3 === 0), feed.filter((_, i) => i % 3 === 1), feed.filter((_, i) => i % 3 === 2)];
  const dockItems = [['home', 'Home', '#', true], ['library', 'Library', `${BASE}library/`], ['book', 'Courses', `${BASE}courses/`], ['rss', 'Latest', '#latest'], ['bot', 'For agents', `${BASE}agents/`, false, 'dock-hide'], ['github', 'GitHub', 'https://github.com/SiinXu/agent-academy', false, 'dock-hide']];
  const W = wizard({
    cls: '', anim: 'stagger', typeMs: 4,
    head: `<div class="wz-bar" aria-hidden="true"><i data-wz-progress role="progressbar" aria-label="Wizard progress" aria-valuemin="0" aria-valuemax="100"></i></div><div class="wz-top" data-mod="steps"><div class="wz-tabs" role="tablist" aria-label="Steps"><button type="button" role="tab" data-wz-tab="1"><em>1</em>Bot</button><button type="button" role="tab" data-wz-tab="2"><em>2</em>Role</button><button type="button" role="tab" data-wz-tab="3"><em>3</em>Preferences</button></div><span class="lbl pct"><span data-wz-progress-label>0%</span> complete</span></div>`,
    h1: 'Which bot are you building?', h2: 'Which role should it learn first?', h3: 'How should it work?',
    prof: (p) => `<button type="button" class="spot-card pc" data-spotlight-card data-item ${radio('prof', p.k)}><span class="sel-dot"></span><span class="pc-ic">${p.icon}</span><b>${esc(p.name)}</b><p>${esc(p.blurb)}</p><small class="lbl">${nf(p.n)} resources · ${p.roles} roles</small></button>`,
    custom: `<div class="field" data-item data-mod="custom"><label for="wz-goal">Or describe it in one line</label><input class="input" id="wz-goal" data-wz-goal maxlength="200" placeholder="e.g. answer refund emails for my online shop" autocomplete="off"><small data-wz-guess aria-live="polite"></small></div>`,
    roleCls: 'hgrid', roleAttr: 'data-hover-effect',
    roleTpl: `<button type="button" class="hcard" data-item ${radio('role', '{val}')} aria-checked="{sel}" data-sel="{sel}"><div class="hc"><h4>{title}</h4><p>{n} resources in 5 steps. Starts with {top}.</p></div></button>`,
    styleCls: 'fgrid', styleAttr: 'data-focus-cards',
    style: (s) => `<button type="button" class="fc" ${radio('style', s.k)}>${s.any ? `<span class="fc-any">${ic('sparkles')}Let the agent pick one of 20</span>` : `<img src="img/style-${s.k}.webp" alt="${esc(s.src)} preview from UI Hub" loading="lazy" width="480" height="300"><span class="fc-o"><b>${s.k}</b><small>${nf(s.n)} refs · ${esc(s.src)}</small></span>`}</button>`,
    platCls: 'hgrid plat', platAttr: 'data-hover-effect',
    plat: (p) => `<button type="button" class="hcard" ${radio('plat', p.k)}><div class="hc"><span class="pm">${esc(p.m)}</span><h4>${esc(p.n)}</h4><p>${esc(p.note)}</p></div></button>`,
    lang: (l) => `<button type="button" class="badge" ${radio('lang', l.k)}>${esc(l.n)}</button>`,
    chipTpl: `<button type="button" class="chip" data-chip-step="{step}">{label}</button>`,
    back: `<button type="button" class="btn btn-g" data-wz-back>${ic('left')}Back</button>`,
    next: `<button type="button" class="btn btn-p" data-wz-next>Continue${ic('right')}</button>`,
    gen: mbBtn('Generate · 生成', 'data-wz-generate data-mod="generate"', ic('sparkles')),
    terminal: `<div class="tw-win" data-mod="terminal"><div class="tw-bar"><span class="dots"><i></i><i></i><i></i></span><span data-term-title>prompt</span><small data-term-status>typing…</small></div><div class="tw-body"><div class="tw-cmd"><b>~/agent-academy</b> $ academy prompt --print</div><pre data-term-body style="margin:0;font:inherit" title="Click to skip"></pre></div></div>`,
    filesLabel: '<span class="lbl">Your agent will read</span>',
    agent: `${ic('bot')}<b data-agent-name>Agent</b>`,
    fileTpl: `<a class="file" id="{id}" data-side="{side}" href="{href}" target="_blank" rel="noopener"><span class="f-ic">{ico}</span><span class="f-t"><b>{name}</b><small>{kind} · {note}</small></span></a>`,
    copy: copyBtn('cb'), cursorCls: 'btn btn-o',
    restart: `<button type="button" class="btn btn-g" data-wz-restart data-mod="restart">${ic('restart')}Start over · 重新选</button>`,
  }).replace('<div class="wz-steps" data-wz-steps>', '<div class="wz-steps" data-wz-steps><div class="well">').replace('<div class="wz-foot">', '</div><div class="wz-foot">');
  return `${X.head('b', 'Neutral black + Emerald', css)}<body>
<a class="skip" href="#main">Skip to content</a>${X.mockBar('b')}
<header class="top"><div class="wrap"><a class="brand" href="#"><i>${ic('sparkles')}</i><span>Agent Academy</span></a>
<nav class="dock" data-dock data-mod="nav" aria-label="Main">${dockItems.map(([i, l, h, cur, cls]) => `<a class="dock-item ${cls || ''}" href="${h}" aria-label="${l}"${cur ? ' aria-current="page"' : ''}><span class="dock-tip">${l}</span><span class="dock-ic">${ic(i)}</span></a>`).join('')}<span class="dock-sep"></span><button class="dock-item" type="button" data-theme-toggle aria-label="Toggle light / dark"><span class="dock-tip">Theme</span><span class="dock-ic">${ic('sun', 'ic i-sun')}${ic('moon', 'ic i-moon')}</span></button></nav>
<div class="dock-m" data-mod-alt="nav-mobile"><button type="button" aria-expanded="false" aria-label="Open menu" onclick="const m=this.parentNode;m.classList.toggle('open');this.setAttribute('aria-expanded',m.classList.contains('open'))">${ic('menu')}</button><ul>${dockItems.map(([i, l, h], n) => `<li style="--i:${n}"><a href="${h}" aria-label="${l}">${ic(i)}</a></li>`).join('')}<li style="--i:${dockItems.length}"><button type="button" data-theme-toggle aria-label="Toggle light / dark">${ic('sun', 'ic i-sun')}${ic('moon', 'ic i-moon')}</button></li></ul></div></div></header>
<main id="main">
<section class="hero"><div class="beams-bg" data-mod="hero-bg">${bgBeams}</div>
<div class="wrap"><div data-mod="hero"><p class="lbl"><b>●</b> Agent Academy · updated daily · ${nf(C.changes)} changes logged</p>
<h1 data-text-generate>Teach your agent a real job.</h1>
<p class="lede">${nf(C.total)} real skills, MCP servers, prompts and workflows, sorted into courses by profession. Your agent reads one course, then gets to work.</p>
<div class="cta" data-mod="buttons">${mbLink('Build a prompt', '#start')}<a class="link" href="${BASE}library/">Browse the library${ic('right')}</a></div>
<div class="stats" data-mod="stats"><div class="stat"><b data-ticker="${C.total}">${nf(C.total)}</b><span class="lbl">resources</span></div><div class="stat"><b data-ticker="${C.skills}">${nf(C.skills)}</b><span class="lbl">skills</span></div><div class="stat"><b data-ticker="${C.mcp}">${nf(C.mcp)}</b><span class="lbl">MCP servers</span></div><div class="stat"><b data-ticker="${C.prompts}">${nf(C.prompts)}</b><span class="lbl">prompts</span></div></div></div>
<div class="live" data-mod="hero-visual"><div class="live-h"><span class="lbl"><span class="dotlive"></span>Added in today's run</span><span class="lbl">${nf(C.changes)}</span></div>
<div class="alist" data-animated-list data-delay="1000">${live.map((x) => `<template><a class="notif" href="${rUrl(x.id)}"><i>${ic(tyIc[x.ty] || 'doc')}</i><span><b>${esc(x.t)}</b><small>${esc(TYPE[x.ty] || x.ty)} · ${esc(TAX.industries[x.in]?.en || x.in)} · ${stars(x.q)}★</small></span></a></template>`).join('')}</div></div></div></section>

<section class="sec wrap" id="professions"><div class="sec-h"><div><p class="lbl"><b>01</b> · Professions</p><h2>Three professions are open.</h2><p>Each one is a course: five ordered steps of source-linked resources, licences and safety tags included.</p></div><a class="link" href="${BASE}courses/">All courses${ic('right')}</a></div>
<div class="bento" data-mod="showcase">
 <a class="bi span2" href="${BASE}courses/design/"><div class="bi-head"><div class="bh-thumbs">${STYLE_CARDS.slice(0, 3).map((s) => `<img src="img/style-${s.k}.webp" alt="" loading="lazy" width="480" height="300">`).join('')}</div></div><div class="bi-txt">${ic('palette')}<div class="bi-t">Design · ${nf(C.ind.design)} resources</div><div class="bi-d">${roles.design.length} roles. Wired to UI Hub's 20 visual styles; this site is the first case study.</div></div></a>
 <a class="bi" href="${BASE}courses/customer-service/" data-mod="showcase-cs"><div class="bi-head"><div class="bh-list">${csItems.slice(0, 4).map((x) => `<div class="bh-row"><i>${esc(mono(owner(x.h)))}</i><span>${esc(x.t)}</span></div>`).join('')}</div></div><div class="bi-txt">${ic('headset')}<div class="bi-t">Customer service · ${nf(C.ind['customer-service'])}</div><div class="bi-d">${roles['customer-service'].length} roles, from support agent to escalations lead.</div></div></a>
 <a class="bi" href="${BASE}courses/marketing/" data-mod="showcase-mk"><div class="bi-head"><div class="bh-bars">${mkRoles.slice(0, 7).map((r) => `<div><small>${esc(TAX.roles[r.k].en)}</small><i style="--h:${Math.round((r.n / mkMax) * 92) + 8}%"></i><em>${r.n}</em></div>`).join('')}</div></div><div class="bi-txt">${ic('megaphone')}<div class="bi-t">Marketing · ${nf(C.ind.marketing)}</div><div class="bi-d">${roles.marketing.length} roles. Bars show resources per role.</div></div></a>
 <a class="bi" href="${BASE}library/?type=mcp"><div class="bi-head"><div class="bh-chips">${mcpItems.slice(0, 7).map((x) => `<span>${ic('plug')}${esc(x.t.length > 26 ? x.t.slice(0, 25) + '…' : x.t)}</span>`).join('')}</div></div><div class="bi-txt">${ic('plug')}<div class="bi-t">${nf(C.mcp)} MCP servers</div><div class="bi-d">Tagged when they need credentials or write to outside systems.</div></div></a>
 <a class="bi" href="${BASE}courses/"><div class="bi-head"><div class="bh-chips soon">${SOON.slice(0, 9).map((k) => `<span>${esc(TAX.industries[k].en)}</span>`).join('')}</div></div><div class="bi-txt">${ic('layers')}<div class="bi-t">Coming soon</div><div class="bi-d">Collected already; each opens when its course is ready.</div></div></a>
</div></section>

<section class="sec wrap" id="start"><div class="sec-h"><div><p class="lbl"><b>02</b> · Quick start</p><h2>Three picks, one prompt.</h2><p>Choose the bot, the role and how it works. Generate, then paste into the agent you already use. Nothing is sent from this page.</p></div></div>
<div data-mod="wizard"><div data-mod="wizard-accent">${W}</div></div></section>

<section class="sec wrap" id="latest"><div class="sec-h"><div><p class="lbl"><b>03</b> · Latest</p><h2>Fresh from the sources.</h2><p>Real items from today's run. Every card shows licence, stars and safety tags.</p></div><a class="link" href="${BASE}latest/">Change log${ic('right')}</a></div>
<div class="vfeed" data-mod="feed">${cols.map((col, i) => `<div class="marquee vertical pause${i === 1 ? ' reverse' : ''}" data-marquee data-repeat="3" style="--duration:${44 + i * 6}s"><div>${col.map(fcard).join('')}</div></div>`).join('')}</div></section>

<section class="sec wrap" id="case"><div class="case"><div><p class="lbl"><b>04</b> · Design case</p><h2 style="margin:14px 0 0;font-size:34px;letter-spacing:-.04em;line-height:1.05">This site, before and after its own course.</h2>
<ul><li><em>01</em><span><b>Pick one style</b>UI Hub vs cluster + 2–4 refs</span></li><li><em>02</em><span><b>Follow design skills</b>taste-skill, frontend-design, emil-design-eng</span></li><li><em>03</em><span><b>Build from Hub components</b>original code, not invented</span></li><li><em>04</em><span><b>Verify</b>4 screenshots + Lighthouse</span></li></ul></div>
<div class="compare" data-compare data-mod="before-after" tabindex="0" role="slider" aria-label="Before / after" aria-valuemin="0" aria-valuemax="100"><img class="cmp-top" src="img/case-before.webp" alt="Before: unstyled HTML" width="1200" height="750"><img src="img/case-after.webp" alt="After: styled home page" width="1200" height="750"><span class="cmp-line"></span><span class="cmp-knob">${ic('code')}</span><span class="cmp-tag l">before</span><span class="cmp-tag r">after</span></div></div></section>
</main>
<footer class="foot" data-mod="footer"><div class="wrap"><div><a class="brand" style="position:static" href="#"><i>${ic('sparkles')}</i>Agent Academy</a><p>A free school for AI agents. Every item links to its original source.</p></div>
<div><h4 class="lbl">Learn</h4><ul><li><a href="${BASE}courses/">Courses</a></li><li><a href="${BASE}library/">Library</a></li><li><a href="${BASE}latest/">Latest</a></li></ul></div>
<div><h4 class="lbl">For agents</h4><ul><li><a href="${BASE}llms.txt">llms.txt</a></li><li><a href="${BASE}agent.md">agent.md</a></li><li><a href="${BASE}api/index.json">JSON API</a></li><li><a href="${BASE}feed.xml">Atom feed</a></li></ul></div>
<div><h4 class="lbl">Project</h4><ul><li><a href="https://github.com/SiinXu/agent-academy">GitHub</a></li><li><a href="${BASE}sources/">Sources</a></li><li><a href="https://siinxu.github.io/ui-resource-hub/">UI Hub</a></li></ul></div></div>
<div class="foot-b"><div class="wrap"><span class="lbl">Direction B · Neutral black + Emerald · vs dark-tech</span><span class="lbl">Data · Oct 15, 2026</span></div></div></footer>
${X.tail()}`;
}
