// Scope each skin's CSS to <html data-skin="x"> with PostCSS, so A/B/C can live in one stylesheet.
//   :root -> :root[data-skin=x]   .dark -> [data-skin=x].dark   html -> html[data-skin=x]   body -> [data-skin=x] body
//   anything else -> [data-skin=x] <selector>      (@keyframes untouched; @media contents scoped)
import postcss from 'postcss';
export async function scopeSkins(cssBySkin) {
  const out = [];
  for (const [s, css] of Object.entries(cssBySkin)) {
    const P = `[data-skin=${s}]`;
    const root = postcss.parse(css);
    root.walkRules((r) => {
      if (r.parent && r.parent.type === 'atrule' && /keyframes$/i.test(r.parent.name)) return;
      r.selectors = r.selectors.map((sel) => {
        sel = sel.trim();
        if (sel.startsWith(':root')) return `:root${P}${sel.slice(5)}`;
        if (sel.startsWith('html')) return `html${P}${sel.slice(4)}`;
        if (sel.startsWith('.dark')) return `${P}.dark${sel.slice(5)}`;
        return `${P} ${sel}`;
      });
    });
    out.push(`/* ---- skin ${s} ---- */\n` + root.toString());
  }
  return out.join('\n');
}
