# weatheo-ui

React and Tailwind weather components in the shadcn style, powered by the free [weatheo.com](https://weatheo.com) weather API. You copy the source into your project with the shadcn CLI and own it afterwards.

Components: `WeatheoCard` (current conditions), `WeatheoHourly` (hourly strip), `WeatheoDaily` (daily list). Each comes as an async server component and as a client component (`...Client`). The only runtime dependency is React.

## Install

```bash
npx shadcn@latest add https://raw.githubusercontent.com/weatheo-com/weatheo-ui/main/public/r/weatheo-card.json
npx shadcn@latest add https://raw.githubusercontent.com/weatheo-com/weatheo-ui/main/public/r/weatheo-hourly.json
npx shadcn@latest add https://raw.githubusercontent.com/weatheo-com/weatheo-ui/main/public/r/weatheo-daily.json
```

Each command also installs `weatheo-lib` (types, fetcher, formatters, the `useWeatheo` hook) into your `lib` alias folder. Components go into your `components` alias folder and import from `@/lib/...` and `@/components/...`, which the CLI maps to your own aliases.

## Usage

Next.js App Router (server component, fetched on the server and cached for 15 minutes):

```tsx
import { WeatheoCard } from "@/components/weatheo-card"

export default function Page() {
  return <WeatheoCard place="fr/centre-val-de-loire/gien" lang="fr" />
}
```

Client-side React or Vite (fetched in the browser, skeleton while loading):

```tsx
import { WeatheoCardClient } from "@/components/weatheo-card-client"

export function Weather() {
  return <WeatheoCardClient place="fr/centre-val-de-loire/gien" lang="fr" />
}
```

`WeatheoHourly` / `WeatheoHourlyClient` and `WeatheoDaily` / `WeatheoDailyClient` work the same way, from `weatheo-hourly` and `weatheo-daily`.

## Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `place` | string | required | Place key, e.g. `fr/centre-val-de-loire/gien` |
| `lang` | string | `en` | `en`, `fr`, `de`, `zh`, `zh-hant`, `es`, `it`, `pt`, `ja`, `ko`, `ru`, `ar` |
| `units` | `metric` or `imperial` | `metric` | |
| `baseUrl` | string | `https://weatheo.com` | Override the API host |
| `className` | string | | Added to the root element |
| `hours` | number | 24 | `WeatheoHourly` only: hours shown |
| `days` | number | 7 | `WeatheoDaily` only: days shown |

## Find your place key

Copy the path of your city page on weatheo.com after the language. For `https://weatheo.com/fr/fr/centre-val-de-loire/gien` the key is `fr/centre-val-de-loire/gien`. You can also search: `https://weatheo.com/api/v1/search?q=gien`.

## The API

```
GET https://weatheo.com/api/v1/weather?place=<key>&lang=<lang>&units=metric|imperial
```

Free, read-only, CORS enabled, no key. Responses are cached for about 15 to 30 minutes.

## Attribution

Each component shows one small `weatheo.com` link to the city page (`rel="noopener"`). Please keep it.

## Development

```bash
npm install
npm run build:registry   # regenerate public/r/*.json from registry/weatheo/
npm test                 # registry up-to-date check + render tests
```

Sources import from `@/weatheo/...` (the local tsconfig alias). `scripts/build-registry.mjs` rewrites these to `@/lib/...` and `@/components/...` in the generated files; everything else is embedded verbatim.

## Related projects

- [github-readme-weather](https://github.com/weatheo-com/github-readme-weather)
- [mcp-server-weatheo](https://github.com/weatheo-com/mcp-server-weatheo)
- [climate-data](https://github.com/weatheo-com/climate-data)

## Licence

MIT
