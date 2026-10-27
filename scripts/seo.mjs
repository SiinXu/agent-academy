// SEO / GEO / analytics head for every Agent Academy page (v-seo). Locales are ?lang=<code> variants of the same page.
export const CF_TOKEN = '41d8abdb6f1247c08f2412afcd5f2143'; // Cloudflare Web Analytics: siinxu.github.io
export const ORG = { '@type': 'Organization', '@id': 'https://incidental.site/#org', name: 'Incidental AI', url: 'https://incidental.site/' };
const SEC = { library: 'Library', templates: 'Templates', courses: 'Courses', i: 'Courses', r: 'Library', cases: 'Courses', latest: 'Latest', changelog: 'Changelog', sources: 'Sources', agents: 'For agents' };
const SEC_URL = { i: 'courses/', r: 'library/', cases: 'courses/' };
const escA = (v) => String(v ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
export function seoHead({ SITE, LOCALES, rel, title, desc, ld = [], og = 'website' }) {
  const url = `${SITE}/${rel}`;
  const alt = LOCALES.map((l) => `<link rel="alternate" hreflang="${l}" href="${url}?lang=${l}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${url}">`;
  const g = [ORG];
  if (!rel) g.push({ '@type': 'WebSite', '@id': `${SITE}/#site`, name: 'Agent Academy', url: `${SITE}/`, inLanguage: LOCALES, publisher: { '@id': ORG['@id'] }, potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: `${SITE}/library/?q={search_term_string}` }, 'query-input': 'required name=search_term_string' } });
  else if (rel !== '404.html') {
    const seg = rel.split('/')[0], list = [['Agent Academy', `${SITE}/`]];
    if (SEC[seg] && rel !== `${seg}/`) list.push([SEC[seg], `${SITE}/${SEC_URL[seg] || seg + '/'}`]);
    list.push([title.replace(/ · Agent Academy$/, ''), url]);
    g.push({ '@type': 'BreadcrumbList', itemListElement: list.map(([n, item], k) => ({ '@type': 'ListItem', position: k + 1, name: n, item })) });
  }
  g.push(...ld);
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': g }).replace(/</g, '\\u003c');
  return `${alt}<meta property="og:site_name" content="Agent Academy"><meta property="og:image" content="${SITE}/assets/og.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Agent Academy"><meta property="og:locale" content="en_US">`
   + `<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escA(title)}"><meta name="twitter:description" content="${escA(desc)}"><meta name="twitter:image" content="${SITE}/assets/og.png">`
   + `<script type="application/ld+json">${json}</script>`
   + `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token":"${CF_TOKEN}"}'></script><script defer src="https://stats.incidental.site/events.js" data-site="academy"></script><script defer src="https://stats.incidental.site/subscribe.js"></script>`;
}
export const ROBOTS = (SITE) => `User-agent: *\nAllow: /\n\n# 2026-10-26: heavy non-citing crawlers - skip ?lang= / query duplicates (each page x10 locales); Crawl-delay only honored by SemrushBot\nUser-agent: Amazonbot\nUser-agent: meta-externalagent\nUser-agent: SemrushBot\nDisallow: /*?\nCrawl-delay: 10\n\n# AI / generative search crawlers are welcome\n${['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-Web', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended'].map((b) => `User-agent: ${b}\nAllow: /`).join('\n')}\n\nSitemap: ${SITE}/sitemap.xml\n`;
export function sitemaps(SITE, LOCALES, defaultXml) {
  const locs = [...defaultXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const today = new Date().toISOString().slice(0, 10);
  const files = { 'sitemap-default.xml': defaultXml };
  for (const l of LOCALES) files[`sitemap-${l}.xml`] = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${locs.map((x) => `<url><loc>${x}?lang=${l}</loc></url>`).join('\n')}\n</urlset>\n`;
  files['sitemap.xml'] = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(files).map((k) => `<sitemap><loc>${SITE}/${k}</loc><lastmod>${today}</lastmod></sitemap>`).join('\n')}\n</sitemapindex>\n`;
  return files;
}
