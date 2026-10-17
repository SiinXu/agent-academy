# SaaS Dashboard Starter by StudioGrid Pro

A focused, responsive SaaS dashboard starter built with Next.js, React, TypeScript and Tailwind CSS.

This free starter includes a complete dashboard shell, operational metrics, a Recharts visualization, recent account data, light and dark themes, and responsive navigation.

It is designed as a clean starting point for SaaS products, admin interfaces and internal tools without including the full workflows and multi-page structure of the StudioGrid Pro SaaS Dashboard Kit.

> This is a frontend starter. It does not include authentication, a database, backend APIs or payment processing.

## Live Preview

Explore the dashboard overview:

https://saas-dashboard-starter-chi.vercel.app/

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/studiogridpro/saas-dashboard-starter)

This free starter is intentionally focused on a single dashboard overview. Multi-page workflows and cross-screen state are part of the full StudioGrid Pro SaaS Dashboard Kit.

## Preview

![StudioGrid Pro SaaS Dashboard Starter preview](public/saas-dashboard-starter-preview.png)

---

## What's Included

- Responsive application shell
- Desktop sidebar
- Mobile navigation drawer
- Sticky topbar
- Light and dark themes
- Persistent theme preference
- Dashboard overview
- Operational KPI metrics
- Revenue chart
- Operating signals
- Recent accounts table
- Activity log
- CSV snapshot export
- Reusable UI components
- TypeScript source code
- Responsive layouts

---

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui components (Base UI)
- Recharts
- Lucide React

---

## Requirements

- Node.js 20.9 or newer
- pnpm

---

## Installation

Clone the repository and open the project folder:

```bash
git clone https://github.com/studiogridpro/saas-dashboard-starter.git
cd saas-dashboard-starter
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Then open:

```text
http://localhost:3000
```

---

## Available Commands

```bash
pnpm dev
```

Starts the local development server.

```bash
pnpm lint
```

Runs ESLint across the project.

```bash
pnpm build
```

Creates a production build.

```bash
pnpm start
```

Runs the compiled production application.

---

## Project Structure

```text
app/
├── (dashboard)/
│   ├── layout.tsx
│   └── page.tsx
├── globals.css
└── layout.tsx

components/
├── dashboard/
│   ├── app-shell.tsx
│   ├── overview-chart.tsx
│   ├── page-header.tsx
│   ├── recent-accounts.tsx
│   ├── sidebar.tsx
│   ├── theme-toggle.tsx
│   └── topbar.tsx
├── ui/
└── theme-provider.tsx

lib/
├── dashboard-data.ts
└── utils.ts

public/
```

---

## Themes

The starter includes light and dark themes.

Theme colors are defined in:

```text
app/globals.css
```

Theme behavior is handled by:

```text
components/theme-provider.tsx
components/dashboard/theme-toggle.tsx
```

The selected theme is stored locally in the browser and restored when the application loads again.

---

## Responsive Layout

The dashboard shell is designed for desktop, tablet and mobile layouts.

The sidebar becomes a mobile drawer on smaller screens while the main dashboard content adapts to the available width.

When customizing the interface, review it at several breakpoints rather than designing only for desktop.

---

## Customizing the Starter

Start with these files:

```text
app/(dashboard)/page.tsx
components/dashboard/sidebar.tsx
components/dashboard/topbar.tsx
components/dashboard/overview-chart.tsx
lib/dashboard-data.ts
app/globals.css
```

You can replace:

- Pampalane demo branding
- Dashboard copy
- Metrics
- Chart data
- Account data
- Activity data
- Theme colors
- Navigation content

The included demo data can be replaced with API responses, server actions, database queries or your own static data.

---

## Frontend-Only Scope

This starter provides frontend UI and browser-based demo behavior.

It does not include:

- Production authentication
- Database integration
- Backend APIs
- Payment provider integration
- Email delivery
- File storage
- Production authorization
- Real-time notification delivery

Connect the interface to the services and backend architecture used by your own application.

---

## Need the Complete Version?

The full StudioGrid Pro SaaS Dashboard Kit includes seven responsive dashboard pages, reusable components, light and dark modes, and a more complete product structure for SaaS interfaces.

Explore the full kit:

https://studiogridpro.com/products/saas-dashboard-kit?utm_source=github&utm_medium=readme&utm_campaign=saas-dashboard-starter

Looking for dashboard, auth and billing together?

https://studiogridpro.com/products/bundles/saas-ui-bundle?utm_source=github&utm_medium=readme&utm_campaign=saas-dashboard-starter

Need these screens connected to your own API? We build them at a fixed price:

https://studiogridpro.com/nextjs-frontend-sprint?utm_source=github&utm_medium=readme&utm_campaign=saas-dashboard-starter

---

## License

MIT. See `LICENSE.md`.

The premium StudioGrid Pro kits are sold separately under their own commercial license.

---

## StudioGrid Pro

Premium UI kits for modern web products built with Next.js, React, TypeScript and Tailwind CSS.

https://studiogridpro.com?utm_source=github&utm_medium=readme&utm_campaign=saas-dashboard-starter
