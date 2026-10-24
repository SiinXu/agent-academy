
<div align="center">
  <img src="https://ui.bigbullapp.com/logo.svg" alt="bigbullui logo" width="96" />
</div>

# bigbullui

> 659 tactile, copy-paste React 19 + Tailwind CSS 4 components you own. Zero external dependencies. Open source, MIT licensed.

[![npm version](https://badge.fury.io/js/bigbullui.svg)](https://www.npmjs.com/package/bigbullui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/F0Rextasy/bigbullui/blob/main/LICENSE)
[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)](https://tailwindcss.com)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-success.svg)](https://github.com/F0Rextasy/bigbullui)
[![CI](https://github.com/F0Rextasy/bigbullui/actions/workflows/ci.yml/badge.svg)](https://github.com/F0Rextasy/bigbullui/actions/workflows/ci.yml)
[![publint](https://img.shields.io/badge/publint-clean-success.svg)](https://publint.dev)
[![attw](https://img.shields.io/badge/attw-type--safe-success.svg)](https://arethetypeswrong.github.io)

## Features

- **Zero 3rd-Party Dependencies** — UI files import ONLY React and a 7-line `cn` utility. No Radix or Lucide bloat.
- **Code You Own** — Run the CLI or copy source files directly into your codebase. No black-box npm lock-in.
- **Tailwind CSS v4 Native** — Driven entirely by CSS variables and `@theme inline` with warm cream paper and night stub themes.
- **Accessible by Default** — Full WAI-ARIA support, keyboard roving tabindex, focus rings, and `prefers-reduced-motion` fallbacks.
- **659 Crafted Components** — From foundational form controls and data tables to rich charts and retro interactive widgets.

## Quick Start (CLI — Recommended)

Initialize bigbullui in your project:

```bash
npx bigbullui init
```

Add any component directly to your project:

```bash
npx bigbullui add button card dialog metric-card
```

Works with the shadcn CLI too — every component is published as registry JSON:

```bash
npx shadcn@latest add https://ui.bigbullapp.com/r/button.json
# Full page blocks work too (block source + its components bundled):
npx shadcn@latest add https://ui.bigbullapp.com/r/admin-overview.json
```

Works with AI coding assistants via MCP (zero backend — runs locally):

```bash
claude mcp add bigbullui -- npx -y bigbullui mcp
```

Use immediately in your views:

```tsx
import { Button } from "@/components/ui/button";

export function Example() {
  return <Button>Get Started</Button>;
}
```

---

### Alternative: All-in-One npm Package

```bash
npm install bigbullui
```

Add the design tokens to your global CSS:

```css
@import "tailwindcss";
@import "bigbullui/css";
/* Optional: Windows High Contrast / forced-colors support */
/* @import "bigbullui/high-contrast.css"; */
```

Import and use:

```tsx
import { Button, Card, MetricCard } from "bigbullui";
```

### Companion: bigbullicons (1023 Ticket Stub stroke icons)

```bash
npm install bigbullicons
```

```tsx
import { StampIcon } from "bigbullicons";

export function Example() {
  return <StampIcon name="ticket" size={20} />;
}
```

Browse every icon with live animated previews at [ui.bigbullapp.com/icons](https://ui.bigbullapp.com/icons) — or pull a single icon into any project with `npx bigbullui add icon-ticket`.

### Manual Copy-Paste Alternative

No install needed. Copy files from [`src/components/ui/`](https://github.com/F0Rextasy/bigbullui/tree/main/src/components/ui) (plus the `cn` helper at `src/components/ui/lib/utils.ts`) into your project, copy the token CSS from [`bigbullui.css`](https://github.com/F0Rextasy/bigbullui/blob/main/bigbullui.css) — done.

## Components

<details>
<summary><strong>Form</strong> — inputs, pickers, toggles and controls</summary>

| File | Component | Description |
|---|---|---|
| [`button`](https://ui.bigbullapp.com/docs/button) | Button | Animated button with hover feedback and crisp focus. |
| [`input`](https://ui.bigbullapp.com/docs/input) | Input | Text input with dashed focus border and design tokens. |
| [`textarea`](https://ui.bigbullapp.com/docs/textarea) | Textarea | Multi-line text area matching Input styling. |
| [`checkbox`](https://ui.bigbullapp.com/docs/checkbox) | Checkbox | Crisp checkbox with bold checked states. |
| [`switch`](https://ui.bigbullapp.com/docs/switch) | Switch | Two-state toggle switch with sliding thumb. |
| [`radio-group`](https://ui.bigbullapp.com/docs/radio-group) | Radio Group | Accessible single-select radio button set. |
| [`slider`](https://ui.bigbullapp.com/docs/slider) | Slider | Draggable value slider with chunky thumb. |
| [`select`](https://ui.bigbullapp.com/docs/select) | Select | Custom dashed listbox dropdown with keyboard navigation. |
| [`stepper`](https://ui.bigbullapp.com/docs/stepper) | Stepper | Increment and decrement buttons with mono readout. |
| [`pin-input`](https://ui.bigbullapp.com/docs/pin-input) | Pin Input | Segmented single-character boxes for codes and OTP. |
| [`rating`](https://ui.bigbullapp.com/docs/rating) | Rating | Interactive star rating with live hover preview. |
| [`copy-button`](https://ui.bigbullapp.com/docs/copy-button) | Copy Button | Tactile button with clipboard feedback and check state. |
| [`search-bar`](https://ui.bigbullapp.com/docs/search-bar) | Search Bar | Dashed search field with shortcut keycap and clear action. |
| [`combobox`](https://ui.bigbullapp.com/docs/combobox) | Combobox | Filterable searchable dropdown with instant keyboard filter. |
| [`file-dropzone`](https://ui.bigbullapp.com/docs/file-dropzone) | File Dropzone | Drag-and-drop upload zone with dashed borders and file preview. |
| [`color-picker`](https://ui.bigbullapp.com/docs/color-picker) | Color Picker | Palette swatch picker with framing and active mark. |
| [`password-strength`](https://ui.bigbullapp.com/docs/password-strength) | Password Strength | Segmented security verification meter with animated strength bars and criteria checklist. |
| [`inline-edit`](https://ui.bigbullapp.com/docs/inline-edit) | Inline Edit | Click-to-edit field with focus outline, animated save pulse, and cancel action. |
| [`time-input`](https://ui.bigbullapp.com/docs/time-input) | Time Input | Curtain call showtime selector with hours, minutes, and AM/PM stepper. |
| [`masked-input`](https://ui.bigbullapp.com/docs/masked-input) | Masked Input | Formatted code field with auto-formatted delimiters and validation mark. |
| [`date-picker`](https://ui.bigbullapp.com/docs/date-picker) | Date Picker | Date picker input with popover calendar and quick date selection. |
| [`dual-slider`](https://ui.bigbullapp.com/docs/dual-slider) | Dual Slider | Price range selector with minimum and maximum draggable handles. |
| [`autocomplete`](https://ui.bigbullapp.com/docs/autocomplete) | Autocomplete | Typeahead search input with instant suggestions and keyboard select. |
| [`tree-select`](https://ui.bigbullapp.com/docs/tree-select) | Tree Select | Hierarchical seating dropdown selector with expandable zone nodes. |
| [`masked-currency`](https://ui.bigbullapp.com/docs/masked-currency) | Masked Currency | Formatted currency price input with prefix badge and numeric mask. |
| [`segmented-switch`](https://ui.bigbullapp.com/docs/segmented-switch) | Segmented Switch | Mechanical multi-option lever switch with smooth slide carriage. |
| [`signature-pad`](https://ui.bigbullapp.com/docs/signature-pad) | Signature Pad | Interactive canvas endorsement pad with clear action and receipt stamp. |
| [`tag-input`](https://ui.bigbullapp.com/docs/tag-input) | Tag Input | Tag input with pill chip badges, remove buttons, backspace deletion, and dashed container. |
| [`calendar`](https://ui.bigbullapp.com/docs/calendar) | Calendar | Month calendar with date selection, month navigation, and today indicator. |
| [`file-upload-list`](https://ui.bigbullapp.com/docs/file-upload-list) | File Upload List | Multi-file upload manager queue with individual file progress percentage bars, file size formatting (KB/MB), file type badges, cancel/retry/remove buttons, and overall upload count status. |
| [`toggle-group`](https://ui.bigbullapp.com/docs/toggle-group) | Toggle Group | Single-choice segmented control with roving tabindex. |
| [`dropdown-menu`](https://ui.bigbullapp.com/docs/dropdown-menu) | Dropdown Menu | Popup actions menu with keyboard shortcuts and items. |
| [`label`](https://ui.bigbullapp.com/docs/label) | Label | Form label with mono uppercase styling and an animated stamp-red asterisk when required. |
| [`form-field`](https://ui.bigbullapp.com/docs/form-field) | Form Field | Field wrapper with label, control, description, and error message with a shake-in animation on error. |
| [`field`](https://ui.bigbullapp.com/docs/field) | Field | Composable field primitives: Field, FieldLabel, FieldControl, FieldDescription, FieldError, FieldGroup, FieldSet. |
| [`toggle`](https://ui.bigbullapp.com/docs/toggle) | Toggle | Two-state button with aria-pressed, springy press animation, and default/outline/accent variants. |
| [`multi-select`](https://ui.bigbullapp.com/docs/multi-select) | Multi Select | Trigger + popover picker with search input, checkbox options, and animated removable selection chips. |
| [`input-group`](https://ui.bigbullapp.com/docs/input-group) | Input Group | Input with prefix icon slot, suffix slot, and inner action button; dashed focus ring and animated underline sweep. |
| [`button-group`](https://ui.bigbullapp.com/docs/button-group) | Button Group | Joins buttons with rounded outer corners, internal separators, and sliding hover highlight. |
| [`loading-button`](https://ui.bigbullapp.com/docs/loading-button) | Loading Button | Button with loading spinner swap, width locking to avoid jumps, and a brief success check-mark stamp. |
| [`checkbox-group`](https://ui.bigbullapp.com/docs/checkbox-group) | Checkbox Group | Checkbox options with a select-all row (indeterminate state), animated check fills, and staggered entrance. |
| [`dropdown-menu-v2`](https://ui.bigbullapp.com/docs/dropdown-menu-v2) | Dropdown Menu V2 | V2 dropdown menu: nested submenus, checkbox items, radio groups, separators, danger items, and shortcut kbd hints. |
| [`fab`](https://ui.bigbullapp.com/docs/fab) | Fab | Floating action button fixed in corner with hover growth, ripple press, and tooltip label on hover. |
| [`size-picker`](https://ui.bigbullapp.com/docs/size-picker) | Size Picker | Size chip picker with out-of-stock strikes and stock dots. |
| [`variant-picker`](https://ui.bigbullapp.com/docs/variant-picker) | Variant Picker | Color swatch and size variant picker with animated selection. |
| [`wishlist-button`](https://ui.bigbullapp.com/docs/wishlist-button) | Wishlist Button | Heart wishlist button with pop fill and floating burst. |
| [`add-to-cart-button`](https://ui.bigbullapp.com/docs/add-to-cart-button) | Add To Cart Button | Add-to-cart button with flying dot arc and check stamp. |
| [`like-button`](https://ui.bigbullapp.com/docs/like-button) | LikeButton | Heart/thumb button that fills on click with burst particle animation and count increment. |
| [`emoji-picker`](https://ui.bigbullapp.com/docs/emoji-picker) | EmojiPicker | Panel with category tabs (Smileys, Gestures, Hearts, Objects), search filter, and emoji grid with selection callback. |
| [`copy-chip`](https://ui.bigbullapp.com/docs/copy-chip) | CopyChip | Small mono chip that copies to clipboard with check morph and 'COPIED' feedback |
| [`phone-input`](https://ui.bigbullapp.com/docs/phone-input) | PhoneInput | Phone number input with country code selector and formatted display |
| [`email-input`](https://ui.bigbullapp.com/docs/email-input) | EmailInput | Email input with live validation and typo domain suggestions |
| [`date-range-picker`](https://ui.bigbullapp.com/docs/date-range-picker) | DateRangePicker | Two-month mini calendar grid for selecting start and end dates with nights count |
| [`month-picker`](https://ui.bigbullapp.com/docs/month-picker) | MonthPicker | 12-month grid for selecting a month with year navigation |
| [`year-picker`](https://ui.bigbullapp.com/docs/year-picker) | YearPicker | Year grid with page navigation for selecting a year |
| [`time-range-picker`](https://ui.bigbullapp.com/docs/time-range-picker) | TimeRangePicker | Two time inputs with duration readout that animates on change |
| [`clock-picker`](https://ui.bigbullapp.com/docs/clock-picker) | ClockPicker | Analog clock with draggable hands for time selection |
| [`hotkey-recorder`](https://ui.bigbullapp.com/docs/hotkey-recorder) | HotkeyRecorder | Record keyboard hotkey combinations with visual chip display |
| [`file-input`](https://ui.bigbullapp.com/docs/file-input) | FileInput | Styled file input with drop chips and selection count animation |
| [`slider-ticks`](https://ui.bigbullapp.com/docs/slider-ticks) | SliderTicks | Slider with tick marks, labels, and snap-to-ticks functionality |
| [`image-crop`](https://ui.bigbullapp.com/docs/image-crop) | Image Crop | Canvas-based image cropping with draggable crop rect, rule-of-thirds grid, resize handles, and dataURL output. |
| [`hooks`](https://ui.bigbullapp.com/docs/hooks) | Hooks | SSR-safe React hooks: media query, localStorage, intersection, click-outside, copy, hotkey, and debounce. |
| [`focus-trap`](https://ui.bigbullapp.com/docs/focus-trap) | Focus Trap | Pure TypeScript focus trapping helpers for accessible overlays: getFocusable and trapFocus. |
| [`login-form`](https://ui.bigbullapp.com/docs/login-form) | Login Form | Login form with live validation, show/hide password, remember me and social buttons. |
| [`register-form`](https://ui.bigbullapp.com/docs/register-form) | Register Form | Registration form with name, email, animated password strength and terms consent. |
| [`forgot-password`](https://ui.bigbullapp.com/docs/forgot-password) | Forgot Password | Password reset flow: email input transitions to animated sent confirmation. |
| [`otp-verify`](https://ui.bigbullapp.com/docs/otp-verify) | Otp Verify | 6-digit OTP verification with auto-advance, paste support and resend countdown. |
| [`two-factor`](https://ui.bigbullapp.com/docs/two-factor) | Two Factor | 2FA setup panel with animated QR scan line, recovery codes and copy action. |
| [`form-progress`](https://ui.bigbullapp.com/docs/form-progress) | Form Progress | Form completion progress with segmented dashed bars. |
| [`stepper-v2`](https://ui.bigbullapp.com/docs/stepper-v2) | Stepper V2 | Vertical/horizontal stepper v2 with descriptions and done states. |
| [`search-filter-bar`](https://ui.bigbullapp.com/docs/search-filter-bar) | Search Filter Bar | Combined search, sort and filter toolbar with animated chips. |
| [`avatar-upload`](https://ui.bigbullapp.com/docs/avatar-upload) | Avatar Upload | Avatar upload circle with hover camera overlay and preview. |
| [`shipping-options`](https://ui.bigbullapp.com/docs/shipping-options) | Shipping Options | Shipping option radio cards with carrier, duration and price. |
| [`payment-methods`](https://ui.bigbullapp.com/docs/payment-methods) | Payment Methods | Payment method selector with card, bank, cash, wallet icons. |
| [`credit-card-form`](https://ui.bigbullapp.com/docs/credit-card-form) | Credit Card Form | Credit card form with live number formatting and expiry mask. |
| [`installment-picker`](https://ui.bigbullapp.com/docs/installment-picker) | Installment Picker | Installment plan picker: months, monthly amount, total. |
| [`coupon-field`](https://ui.bigbullapp.com/docs/coupon-field) | Coupon Field | Coupon code field with validation, success check and shake error. |
| [`checkbox-card`](https://ui.bigbullapp.com/docs/checkbox-card) | Checkbox Card | Card-style checkbox with title, description and check pop. |
| [`radio-tile`](https://ui.bigbullapp.com/docs/radio-tile) | Radio Tile | Radio tile with icon, description and sliding dot. |
| [`switch-card`](https://ui.bigbullapp.com/docs/switch-card) | Switch Card | Switch card combining title, description and toggle. |
| [`field-array`](https://ui.bigbullapp.com/docs/field-array) | Field Array | Dynamic form rows: add, remove, move up/down. |
| [`textarea-autosize`](https://ui.bigbullapp.com/docs/textarea-autosize) | Textarea Autosize | Auto-growing textarea with min/max height bounds. |
| [`char-counter`](https://ui.bigbullapp.com/docs/char-counter) | Char Counter | Character counter with near-limit and over-limit states. |
| [`password-input`](https://ui.bigbullapp.com/docs/password-input) | Password Input | Password input with animated show/hide eye toggle. |
| [`consent-checkbox`](https://ui.bigbullapp.com/docs/consent-checkbox) | Consent Checkbox | GDPR/KVKK consent checkbox with link and required marker. |
| [`address-form`](https://ui.bigbullapp.com/docs/address-form) | Address Form | Address form grid: street, city, district, postal, country. |
| [`currency-select`](https://ui.bigbullapp.com/docs/currency-select) | Currency Select | Currency select dropdown with symbols and codes. |
| [`country-select`](https://ui.bigbullapp.com/docs/country-select) | Country Select | Country select with flag emojis and codes. |
| [`duration-input`](https://ui.bigbullapp.com/docs/duration-input) | Duration Input | Duration input: hour/minute/second steppers. |
| [`serial-input`](https://ui.bigbullapp.com/docs/serial-input) | Serial Input | Serial number input: grouped boxes, auto-advance, paste support. |
| [`radio-cards`](https://ui.bigbullapp.com/docs/radio-cards) | Radio Cards | Rich selectable radio cards with prices, perks and active ticket border. |
| [`split-button`](https://ui.bigbullapp.com/docs/split-button) | Split Button | Dual-action button with primary click trigger and dropdown secondary actions. |
| [`combobox-v2`](https://ui.bigbullapp.com/docs/combobox-v2) | Combobox V2 | Async searchable combobox with debounced loading and infinite scroll. |
| [`select-v2`](https://ui.bigbullapp.com/docs/select-v2) | Select V2 | Grouped select with sticky headers and disabled options. |
| [`input-otp`](https://ui.bigbullapp.com/docs/input-otp) | Input OTP | Six-box one-time code with paste split and autocomplete. |
| [`form-validation`](https://ui.bigbullapp.com/docs/form-validation) | Form Validation | Schema-less validation hooks with rules and helpers. |
| [`language-select`](https://ui.bigbullapp.com/docs/language-select) | Language Select | Language picker with native names and codes. |
| [`timezone-select`](https://ui.bigbullapp.com/docs/timezone-select) | Timezone Select | IANA timezone picker with live UTC offsets. |
| [`number-input`](https://ui.bigbullapp.com/docs/number-input) | Number Input | Stepped numeric input with locale grouping and currency. |
| [`search-command`](https://ui.bigbullapp.com/docs/search-command) | Search Command | Inline search field with keyboard-navigated result panel. |
| [`slider-range-label`](https://ui.bigbullapp.com/docs/slider-range-label) | Slider Range Label | Dual-handle range slider with live min/max labels. |
| [`file-image-preview`](https://ui.bigbullapp.com/docs/file-image-preview) | File Image Preview | Image dropzone with thumbnail grid and remove. |
| [`input-mask-phone`](https://ui.bigbullapp.com/docs/input-mask-phone) | Input Mask Phone | Country-aware phone mask with completion counter. |
| [`date-time-picker`](https://ui.bigbullapp.com/docs/date-time-picker) | Date Time Picker | Combined date and time picker with live preview. |
| [`range-calendar`](https://ui.bigbullapp.com/docs/range-calendar) | Range Calendar | Month grid with range highlight and night counter. |
| [`inline-multiselect`](https://ui.bigbullapp.com/docs/inline-multiselect) | Inline Multiselect | Chips flow inside the input with backspace delete. |
| [`signature-line`](https://ui.bigbullapp.com/docs/signature-line) | Signature Line | Printable signature line with typed name. |
| [`stamp-field`](https://ui.bigbullapp.com/docs/stamp-field) | Stamp Field | Approval stamp box with name, date and seal. |
| [`credit-card-input`](https://ui.bigbullapp.com/docs/credit-card-input) | Credit Card Input | Smart card input with brand detect and grouping. |
| [`activity-calendar`](https://ui.bigbullapp.com/docs/activity-calendar) | Activity Calendar | GitHub-style contribution heatmap grid. |
| [`smart-search-bar`](https://ui.bigbullapp.com/docs/smart-search-bar) | Smart Search Bar | Shortcut search bar with filter and history. |
| [`star-rating-input`](https://ui.bigbullapp.com/docs/star-rating-input) | Star Rating Input | Hoverable five-star rating field with readout. |
| [`color-palette-picker`](https://ui.bigbullapp.com/docs/color-palette-picker) | Color Palette Picker | Preset palette swatches with hex readout. |
| [`pricing-slider`](https://ui.bigbullapp.com/docs/pricing-slider) | Pricing Slider | Seat slider with live tier cost math. |
| [`virtual-card-flipper`](https://ui.bigbullapp.com/docs/virtual-card-flipper) | Virtual Card Flipper | 3D flipping bank card with CVC back. |
| [`split-bill-calculator`](https://ui.bigbullapp.com/docs/split-bill-calculator) | Split Bill Calculator | Bill splitter with tip and per-person math. |
| [`recent-searches`](https://ui.bigbullapp.com/docs/recent-searches) | Recent Searches | History list with clear action. |
| [`trending-chips`](https://ui.bigbullapp.com/docs/trending-chips) | Trending Chips | Hot chip row with active stamp. |
| [`saved-searches`](https://ui.bigbullapp.com/docs/saved-searches) | Saved Searches | Named queries with run and delete. |
| [`mini-month`](https://ui.bigbullapp.com/docs/mini-month) | Mini Month | Compact calendar with today ring. |
| [`passkey-button`](https://ui.bigbullapp.com/docs/passkey-button) | Passkey Button | Passwordless sign in trigger. |
| [`magic-link`](https://ui.bigbullapp.com/docs/magic-link) | Magic Link | Email field with sent confirmation. |
| [`sso-row`](https://ui.bigbullapp.com/docs/sso-row) | Sso Row | Provider buttons with or divider. |
| [`devices-list`](https://ui.bigbullapp.com/docs/devices-list) | Devices List | Session rows with revoke action. |
| [`delete-account`](https://ui.bigbullapp.com/docs/delete-account) | Delete Account | Two-step typed confirmation zone. |
| [`onboarding-checklist`](https://ui.bigbullapp.com/docs/onboarding-checklist) | Onboarding Checklist | Stampable steps with progress rail. |
| [`invite-team`](https://ui.bigbullapp.com/docs/invite-team) | Invite Team | Email plus role picker with log. |
| [`sample-data`](https://ui.bigbullapp.com/docs/sample-data) | Sample Data | Demo seed loader with state stamp. |
| [`otp-v2`](https://ui.bigbullapp.com/docs/otp-v2) | Otp V2 | Segmented OTP with paste fill. |
| [`newsletter-box`](https://ui.bigbullapp.com/docs/newsletter-box) | Newsletter Box | Email capture with success stamp. |
| [`theme-preset-picker`](https://ui.bigbullapp.com/docs/theme-preset-picker) | Theme Preset Picker | Swatch preset cards. |
| [`form-builder`](https://ui.bigbullapp.com/docs/form-builder) | Form Builder | Add rename remove fields. |
| [`conditional-fields`](https://ui.bigbullapp.com/docs/conditional-fields) | Conditional Fields | Inputs by ticket type. |
| [`nps-survey`](https://ui.bigbullapp.com/docs/nps-survey) | Nps Survey | Zero to ten score buttons. |
| [`bug-report`](https://ui.bigbullapp.com/docs/bug-report) | Bug Report | Mini filing form with severity. |
</details>
<details>
<summary><strong>Display</strong> — surfaces, badges and data views</summary>

| File | Component | Description |
|---|---|---|
| [`mention-input`](https://ui.bigbullapp.com/docs/mention-input) | Mention Input | Mention input with instant @ autocomplete popover. |
| [`transfer-list`](https://ui.bigbullapp.com/docs/transfer-list) | Transfer List | Two-column transfer list between available and claimed items. |
| [`theme-toggle`](https://ui.bigbullapp.com/docs/theme-toggle) | Theme Toggle | Theme switcher with day and night flip animation. |
| [`seat-map`](https://ui.bigbullapp.com/docs/seat-map) | Seat Map | Interactive arena seating chart matrix grid with row letters, seat numbers, tier types, and price calculator. |
| [`keypad`](https://ui.bigbullapp.com/docs/keypad) | Keypad | Numeric PIN keypad with tactile mechanical keys, visual pulse, and masked PIN display. |
| [`ticket-card`](https://ui.bigbullapp.com/docs/ticket-card) | Ticket Card | Complete admission ticket with notched edges and seat details. |
| [`coupon`](https://ui.bigbullapp.com/docs/coupon) | Coupon | Discount coupon with scissor cutout lines and promo code copy. |
| [`boarding-pass`](https://ui.bigbullapp.com/docs/boarding-pass) | Boarding Pass | Flight pass with origin, destination and receipt section. |
| [`price-tag`](https://ui.bigbullapp.com/docs/price-tag) | Price Tag | Price tag with eyelet string hole and sale mark. |
| [`luggage-tag`](https://ui.bigbullapp.com/docs/luggage-tag) | Luggage Tag | Baggage claim tag with handle loop and destination code. |
| [`barcode`](https://ui.bigbullapp.com/docs/barcode) | Barcode | Dynamic SVG barcode with mono serial readout. |
| [`stamp-seal`](https://ui.bigbullapp.com/docs/stamp-seal) | Stamp Seal | Rotated rubber stamp badge with double dashed circular ring. |
| [`card`](https://ui.bigbullapp.com/docs/card) | Card | Double-frame surface container with header, content, and footer. |
| [`avatar`](https://ui.bigbullapp.com/docs/avatar) | Avatar | Initials or photo badge with dashed ring. |
| [`star`](https://ui.bigbullapp.com/docs/star) | Star | Current-color star glyph for ratings and counts. |
| [`table`](https://ui.bigbullapp.com/docs/table) | Table | Data table with dashed row dividers and mono headers. |
| [`marquee`](https://ui.bigbullapp.com/docs/marquee) | Marquee | Smooth ticker reel that pauses on hover. |
| [`timeline`](https://ui.bigbullapp.com/docs/timeline) | Timeline | Vertical chronological events with dashed connection stem. |
| [`sparkline`](https://ui.bigbullapp.com/docs/sparkline) | Sparkline | Lightweight SVG trend sparkline with animated end-point. |
| [`bar-chart`](https://ui.bigbullapp.com/docs/bar-chart) | Bar Chart | Mini data bar chart with dashed guideline grids and hover zoom. |
| [`data-table`](https://ui.bigbullapp.com/docs/data-table) | Data Table | Sortable, searchable data table with row selection and pagination. |
| [`video-frame`](https://ui.bigbullapp.com/docs/video-frame) | Video Frame | Cinema screening container with sprocket edges and play overlay. |
| [`audio-mini`](https://ui.bigbullapp.com/docs/audio-mini) | Audio Mini | Compact audio player with animated equalizer bars and duration counter. |
| [`lightbox`](https://ui.bigbullapp.com/docs/lightbox) | Lightbox | Fullscreen media viewer with film frame edges and image paging. |
| [`stack`](https://ui.bigbullapp.com/docs/stack) | Stack | Stacked container with staggered angles and hover fan-out. |
| [`container`](https://ui.bigbullapp.com/docs/container) | Container | Centered layout wrapper with notch cutouts. |
| [`kanban-lite`](https://ui.bigbullapp.com/docs/kanban-lite) | Kanban Lite | Queue and stage progression board with notch cards. |
| [`gantt-lite`](https://ui.bigbullapp.com/docs/gantt-lite) | Gantt Lite | Interactive festival and stage timetable schedule with animated now indicator. |
| [`stopwatch`](https://ui.bigbullapp.com/docs/stopwatch) | Stopwatch | Precision timer with lap tear-offs and digital readout. |
| [`countup`](https://ui.bigbullapp.com/docs/countup) | Countup | Mechanical turnstile odometer counter with animated tally and slot frames. |
| [`nfc-badge`](https://ui.bigbullapp.com/docs/nfc-badge) | NFC Badge | Contactless gate pass tap simulator with animated radio wave ripple pulse, status badge, lanyard notch, and admission chime. |
| [`qr-reader`](https://ui.bigbullapp.com/docs/qr-reader) | QR Reader | Turnstile simulated camera QR and barcode scanner viewfinder with animated laser sweep and targeting reticle. |
| [`audio-waveform`](https://ui.bigbullapp.com/docs/audio-waveform) | Audio Waveform | Interactive multi-bar audio wave visualizer for concert recordings with live animated frequency bars and timestamp readout. |
| [`ticket-fold`](https://ui.bigbullapp.com/docs/ticket-fold) | Ticket Fold | 3D accordion fold pass that unfolds with smooth perspective rotation and tear-away slip. |
| [`split-flap`](https://ui.bigbullapp.com/docs/split-flap) | Split Flap | Mechanical departure board with flipping characters and retro terminal styling. |
| [`watermark`](https://ui.bigbullapp.com/docs/watermark) | Watermark | Repeating watermark pattern with security angle. |
| [`turnstile-gate`](https://ui.bigbullapp.com/docs/turnstile-gate) | Turnstile Gate | Mechanical rotor barrier with pass counter, status LED, and push animation. |
| [`collapsible`](https://ui.bigbullapp.com/docs/collapsible) | Collapsible | Standalone expandable disclosure card with notch header, animated height reveal and status mark. |
| [`aspect-ratio`](https://ui.bigbullapp.com/docs/aspect-ratio) | Aspect Ratio | Proportional media container with preset ratios, framed border, and corner guides. |
| [`pricing-table`](https://ui.bigbullapp.com/docs/pricing-table) | Pricing Table | 3-tier matrix with billing switcher, highlighted plan and feature checklist. |
| [`metric-card`](https://ui.bigbullapp.com/docs/metric-card) | Metric Card | Dashboard KPI card with value, trend delta and period label. |
| [`code-block`](https://ui.bigbullapp.com/docs/code-block) | Code Block | Code snippet block with filename tab, language badge and copy button. |
| [`activity-feed`](https://ui.bigbullapp.com/docs/activity-feed) | Activity Feed | Universal user and team activity stream for deployments, invites, edits, and security audits with timeline avatars, action badges, relative timestamps, and event icons. |
| [`credit-card`](https://ui.bigbullapp.com/docs/credit-card) | Credit Card | Universal payment card visualizer with real-time card number formatting, brand badge detection (Visa, Mastercard, Amex), metallic EMV chip, and interactive 3D flip card to show CVV. |
| [`empty`](https://ui.bigbullapp.com/docs/empty) | Empty | Perforated placeholder box for zero-state views. |
| [`donut-chart`](https://ui.bigbullapp.com/docs/donut-chart) | Donut Chart | Interactive SVG donut and pie chart with segment hover highlight, tooltips, center total readout, and custom color legend. |
| [`accordion`](https://ui.bigbullapp.com/docs/accordion) | Accordion | Collapsible disclosure items with smooth height transitions. |
| [`countdown`](https://ui.bigbullapp.com/docs/countdown) | Countdown | Live ticking event timer with segmented cards. |
| [`carousel`](https://ui.bigbullapp.com/docs/carousel) | Carousel | Sliding track carousel with prev/next arrows, dot indicators, keyboard arrows, and optional autoplay. |
| [`avatar-group`](https://ui.bigbullapp.com/docs/avatar-group) | Avatar Group | Overlapping avatar stack with +N overflow chip that fans out on hover. |
| [`item`](https://ui.bigbullapp.com/docs/item) | Item | Generic row surface with leading media, title, description, and trailing actions; hover lift with accent bar slide-in. |
| [`listbox`](https://ui.bigbullapp.com/docs/listbox) | Listbox | Single/multi selectable list with keyboard navigation, ARIA roles, and check marks that slide in. |
| [`list`](https://ui.bigbullapp.com/docs/list) | List | List with dashed, numbered and icon variants plus staggered item entrances and List/ListItem composition. |
| [`quote`](https://ui.bigbullapp.com/docs/quote) | Quote | Blockquote with dashed left frame, stamp entrance and mono uppercase cite line. |
| [`figure`](https://ui.bigbullapp.com/docs/figure) | Figure | Framed media figure with double-frame surface and delayed figcaption fade-in. |
| [`description-list`](https://ui.bigbullapp.com/docs/description-list) | DescriptionList | Term/description pairs with mono uppercase terms, muted descriptions and staggered row entrances. |
| [`media-object`](https://ui.bigbullapp.com/docs/media-object) | MediaObject | Horizontal media plus content row with title, description, meta chips and hover lift. |
| [`link-card`](https://ui.bigbullapp.com/docs/link-card) | LinkCard | Whole-card link with sliding arrow, darkening border on hover and fade-up entrance. |
| [`logo-cloud`](https://ui.bigbullapp.com/docs/logo-cloud) | LogoCloud | Grid or marquee row of monogram logo tiles in dashed frames with hover reveal. |
| [`faq`](https://ui.bigbullapp.com/docs/faq) | Faq | Self-contained accordion Q&A with one-open behavior, grid-rows height reveal and rotating plus icon. |
| [`testimonial`](https://ui.bigbullapp.com/docs/testimonial) | Testimonial | Quote card with initials avatar, name, role and staggered star rating pop-in. |
| [`team-grid`](https://ui.bigbullapp.com/docs/team-grid) | TeamGrid | Grid of member cards with initials avatars, roles, optional links and staggered hover-lift entrances. |
| [`feature-grid`](https://ui.bigbullapp.com/docs/feature-grid) | FeatureGrid | Feature tiles with icon slot, stamp-on-hover icons, darkening borders and staggered entrance. |
| [`line-chart`](https://ui.bigbullapp.com/docs/line-chart) | Line Chart | Multi-series line chart with stroke-dasharray animation and hover tooltips |
| [`area-chart`](https://ui.bigbullapp.com/docs/area-chart) | Area Chart | Filled area chart with gradient fills and hover highlights |
| [`stacked-bar`](https://ui.bigbullapp.com/docs/stacked-bar) | Stacked Bar Chart | Horizontal stacked bars with segmented rows and legend chips |
| [`gauge`](https://ui.bigbullapp.com/docs/gauge) | Gauge | Half-donut SVG gauge with needle animation and value readout |
| [`radar-chart`](https://ui.bigbullapp.com/docs/radar-chart) | Radar Chart | Spider web chart with polygon axes and data polygon animation |
| [`heatmap`](https://ui.bigbullapp.com/docs/heatmap) | Heatmap | Grid of colored cells showing value intensities with diagonal stagger |
| [`calendar-heatmap`](https://ui.bigbullapp.com/docs/calendar-heatmap) | Calendar Heatmap | GitHub-style Git calendar heatmap grid |
| [`funnel-chart`](https://ui.bigbullapp.com/docs/funnel-chart) | Funnel Chart | Horizontal funnel stages showing conversion percentages between steps |
| [`scatter-plot`](https://ui.bigbullapp.com/docs/scatter-plot) | Scatter Plot | SVG scatter plot with dashed axes and hover enlargements |
| [`waterfall-chart`](https://ui.bigbullapp.com/docs/waterfall-chart) | Waterfall Chart | Floating bars showing incremental changes with connecting guides |
| [`candlestick-chart`](https://ui.bigbullapp.com/docs/candlestick-chart) | Candlestick Chart | OHLC candlestick chart for financial data visualization |
| [`leaderboard`](https://ui.bigbullapp.com/docs/leaderboard) | Leaderboard | Ranked leaderboard with medal tiles for top 3 and count-up scores |
| [`scoreboard`](https://ui.bigbullapp.com/docs/scoreboard) | Scoreboard | Two-team score card with rolling digit animation |
| [`json-viewer`](https://ui.bigbullapp.com/docs/json-viewer) | JSON Viewer | Collapsible JSON tree with mono keys and color-typed values |
| [`diff-viewer`](https://ui.bigbullapp.com/docs/diff-viewer) | Diff Viewer | Unified diff viewer showing added/removed/context lines |
| [`terminal`](https://ui.bigbullapp.com/docs/terminal) | Terminal | Fake terminal card with sequential line reveal and blinking cursor |
| [`log-viewer`](https://ui.bigbullapp.com/docs/log-viewer) | Log Viewer | Scrolling log stream with level badges and filter chips |
| [`treemap-chart`](https://ui.bigbullapp.com/docs/treemap-chart) | Treemap Chart | Squarified treemap with recursive rectangles and staggered labels |
| [`spotlight`](https://ui.bigbullapp.com/docs/spotlight) | Spotlight | Full-viewport dim overlay with cutout hole positioned via target ref/bounding box; pulse ring around target; caption card. |
| [`image-compare`](https://ui.bigbullapp.com/docs/image-compare) | ImageCompare | Before/after slider with clip-path inset controlled by draggable divider; BEFORE/AFTER labels. |
| [`zoom-image`](https://ui.bigbullapp.com/docs/zoom-image) | ZoomImage | Image with hover magnifier lens tracking cursor; framed double border. |
| [`virtual-list`](https://ui.bigbullapp.com/docs/virtual-list) | VirtualList | Windowed list for fixed-height rows: scrollTop math, visible slice renders, spacer divs; smooth scroll. |
| [`reveal`](https://ui.bigbullapp.com/docs/reveal) | Reveal | IntersectionObserver: children animate in when entering viewport with fade-up/scale variants, delay prop, once re-trigger option. |
| [`product-card`](https://ui.bigbullapp.com/docs/product-card) | Product Card | Product card with image slot, price, discount badge and wishlist heart. |
| [`user-card`](https://ui.bigbullapp.com/docs/user-card) | User Card | Profile card with avatar, role, meta chips and action slot. |
| [`article-card`](https://ui.bigbullapp.com/docs/article-card) | Article Card | Blog article card with category badge, excerpt and author meta. |
| [`event-card`](https://ui.bigbullapp.com/docs/event-card) | Event Card | Event card with perforated date block, venue and time chips. |
| [`invoice`](https://ui.bigbullapp.com/docs/invoice) | Invoice | Invoice layout with line items, tax breakdown and stamped total. |
| [`receipt`](https://ui.bigbullapp.com/docs/receipt) | Receipt | Thermal receipt with zigzag tear edge, mono lines and barcode footer. |
| [`checkout-summary`](https://ui.bigbullapp.com/docs/checkout-summary) | Checkout Summary | Cart summary with quantity steppers, tax row and checkout CTA. |
| [`order-card`](https://ui.bigbullapp.com/docs/order-card) | Order Card | Order status card with step dots and item summary. |
| [`stamp-card`](https://ui.bigbullapp.com/docs/stamp-card) | Stamp Card | Loyalty punch card with stamped circles and reward row. |
| [`gift-card`](https://ui.bigbullapp.com/docs/gift-card) | Gift Card | Gift card with ribbon stripe, amount and balance bar. |
| [`id-card`](https://ui.bigbullapp.com/docs/id-card) | Id Card | Employee ID card with hologram shine sweep and barcode. |
| [`rsvp-card`](https://ui.bigbullapp.com/docs/rsvp-card) | Rsvp Card | Invitation RSVP card with attending toggle and wax stamp. |
| [`chat-window`](https://ui.bigbullapp.com/docs/chat-window) | ChatWindow | Full chat panel with message list, input bar, and typing indicator slot. |
| [`chat-bubble`](https://ui.bigbullapp.com/docs/chat-bubble) | ChatBubble | Single message bubble with tail, status ticks, and hover press feedback. |
| [`typing-indicator`](https://ui.bigbullapp.com/docs/typing-indicator) | TypingIndicator | Three bouncing dots with user name label indicating who is typing. |
| [`comment-thread`](https://ui.bigbullapp.com/docs/comment-thread) | CommentThread | Nested comments with avatars, collapse/reply actions, and dashed indent guides. |
| [`reaction-bar`](https://ui.bigbullapp.com/docs/reaction-bar) | ReactionBar | Emoji buttons with counts, active reaction pops, and hover tooltips. |
| [`share-menu`](https://ui.bigbullapp.com/docs/share-menu) | ShareMenu | Platform icon row (X, Facebook, LinkedIn, Link) with copy link feedback and stamp stamp. |
| [`story-viewer`](https://ui.bigbullapp.com/docs/story-viewer) | StoryViewer | Circular story ring with progress animation, avatar names, and tap zones for prev/next. |
| [`post-card`](https://ui.bigbullapp.com/docs/post-card) | PostCard | Social post with header, body, gradient media placeholder, and action row with like/comment/share counts. |
| [`follower-list`](https://ui.bigbullapp.com/docs/follower-list) | FollowerList | Rows with avatars, names, handles, and Follow buttons that morph between states. |
| [`voice-message`](https://ui.bigbullapp.com/docs/voice-message) | VoiceMessage | Chat audio bubble with play/pause button and animated waveform bars showing audio duration. |
| [`audio-player`](https://ui.bigbullapp.com/docs/audio-player) | AudioPlayer | Full deck audio player with play/pause morph button, seek bar, time readout, volume slider, and track info |
| [`video-player`](https://ui.bigbullapp.com/docs/video-player) | VideoPlayer | Video frame with sprocket styling, hover fade-in controls, progress bar with scrub preview |
| [`playlist`](https://ui.bigbullapp.com/docs/playlist) | Playlist | Track rows with equalizer bars for active track, title/artist, duration, and slide-in marker |
| [`volume-slider`](https://ui.bigbullapp.com/docs/volume-slider) | VolumeSlider | Vertical or horizontal slider with fill animation, mute toggle, and ARIA roles |
| [`podcast-player`](https://ui.bigbullapp.com/docs/podcast-player) | PodcastPlayer | Episode card with art slot, play button, speed selector chips, skip buttons, and chapter ticks |
| [`video-thumbnail`](https://ui.bigbullapp.com/docs/video-thumbnail) | VideoThumbnail | Poster frame with duration badge, play overlay circle that scales on hover with ripple ring, and title strip |
| [`media-controls`](https://ui.bigbullapp.com/docs/media-controls) | MediaControls | Compact transport bar with prev/play/next/stop buttons, progress micro-bar, and time display |
| [`time-ago`](https://ui.bigbullapp.com/docs/time-ago) | TimeAgo | Relative time display showing '5 MIN AGO' with live re-render tick every 30s |
| [`live-clock`](https://ui.bigbullapp.com/docs/live-clock) | LiveClock | Digital clock showing HH:MM:SS with optional timezone and variant support |
| [`typewriter`](https://ui.bigbullapp.com/docs/typewriter) | Typewriter | Types text char-by-char with blinking block cursor, loops through phrases |
| [`highlight-text`](https://ui.bigbullapp.com/docs/highlight-text) | HighlightText | Highlights query matches inside text with accent background and animated reveal |
| [`truncate`](https://ui.bigbullapp.com/docs/truncate) | Truncate | Single/multi-line clamp with optional expand toggle (MORE/LESS) |
| [`text-diff`](https://ui.bigbullapp.com/docs/text-diff) | TextDiff | Word-level diff showing added/removed words with animation |
| [`currency-display`](https://ui.bigbullapp.com/docs/currency-display) | CurrencyDisplay | Formatted money with symbol, mono integer part, smaller muted decimals, optional count-up animation |
| [`receipt-printer`](https://ui.bigbullapp.com/docs/receipt-printer) | ReceiptPrinter | Thermal printer that feeds mono receipt lines out of a printer slot with a stepped paper animation. |
| [`queue-ticket`](https://ui.bigbullapp.com/docs/queue-ticket) | QueueTicket | Take-a-number queue ticket with a big tear-off number tab, NOW SERVING ring and queue stats. |
| [`now-serving`](https://ui.bigbullapp.com/docs/now-serving) | NowServing | Split-flap style NOW SERVING board whose digits flip on value change with a blinking chime dot. |
| [`passport`](https://ui.bigbullapp.com/docs/passport) | Passport | Double-frame passport cover with monogram, holder fields and staggered visa stamp marks. |
| [`wax-seal`](https://ui.bigbullapp.com/docs/wax-seal) | WaxSeal | Circular wax blob with a pressed-in monogram entrance and an optional cracked break state. |
| [`envelope`](https://ui.bigbullapp.com/docs/envelope) | Envelope | Envelope whose flap opens with a 3D rotateX and the letter inside rises, on hover or via an open prop. |
| [`airmail-letter`](https://ui.bigbullapp.com/docs/airmail-letter) | AirmailLetter | Airmail bordered letter with red/blue diagonal stripes, mono lines, a postmark corner and an unfold entrance. |
| [`postmark`](https://ui.bigbullapp.com/docs/postmark) | Postmark | Circular postal cancellation stamp with wavy lines, city and date arcs that stamps in on mount. |
| [`cassette-tape`](https://ui.bigbullapp.com/docs/cassette-tape) | CassetteTape | Cassette with two spinning reels, shifting tape amounts and a handwritten-style label with play toggle. |
| [`vinyl-record`](https://ui.bigbullapp.com/docs/vinyl-record) | VinylRecord | Spinning vinyl with radial grooves, center label, a tonearm that slides in and a wobble on drop. |
| [`flip-clock`](https://ui.bigbullapp.com/docs/flip-clock) | FlipClock | Mechanical split-flap HH:MM clock whose digit cards flip on change with a blinking colon. |
| [`neon-sign`](https://ui.bigbullapp.com/docs/neon-sign) | NeonSign | Neon sign with layered glow text-shadow, flicker-in entrance and a subtle per-letter buzz. |
| [`marquee-bulbs`](https://ui.bigbullapp.com/docs/marquee-bulbs) | MarqueeBulbs | Marquee board framed by chase-blinking bulbs with scrolling center text. |
| [`backstage-pass`](https://ui.bigbullapp.com/docs/backstage-pass) | BackstagePass | Laminated ALL ACCESS pass with lanyard hole, rotated stripe strip, shine sweep on hover and fake barcode. |
| [`wristband`](https://ui.bigbullapp.com/docs/wristband) | Wristband | Festival wristband with patterned repeating stripes, snap closure, serial and a subtle breathing animation. |
| [`lanyard`](https://ui.bigbullapp.com/docs/lanyard) | Lanyard | Strap with clip that sways gently from the top and holds an attached card slot for children. |
| [`ticket-stub-v2`](https://ui.bigbullapp.com/docs/ticket-stub-v2) | TicketStubV2 | Rip-off event stub whose tear line detaches the stub with rotate-and-fall on tear, plus serial and barcode. |
| [`qr-code`](https://ui.bigbullapp.com/docs/qr-code) | QR Code | Generates QR codes with Reed-Solomon error correction, mask evaluation, and finder patterns. Includes encodeQrMatrix helper. |
| [`rich-text-editor`](https://ui.bigbullapp.com/docs/rich-text-editor) | Rich Text Editor | Minimal contentEditable editor with toolbar (bold, italic, underline, lists, links, quote, code) and word/char counter. |
| [`sankey-chart`](https://ui.bigbullapp.com/docs/sankey-chart) | Sankey Chart | Two-level flow diagram with bezier ribbons, value-based width, hover tooltips, and entrance animations. |
| [`org-chart`](https://ui.bigbullapp.com/docs/org-chart) | Org Chart | Hierarchical tree of boxes with connector lines, expand/collapse nodes, avatar initials, and entrance animations. |
| [`tilt-card`](https://ui.bigbullapp.com/docs/tilt-card) | Tilt Card | 3D cursor-tracking tilt card with springy reset and glare highlight. |
| [`flip-card`](https://ui.bigbullapp.com/docs/flip-card) | Flip Card | Two-face card with rotateY flip animation, hover or click trigger. |
| [`spotlight-card`](https://ui.bigbullapp.com/docs/spotlight-card) | Spotlight Card | Card with cursor-following radial spotlight glow. |
| [`drag-sort`](https://ui.bigbullapp.com/docs/drag-sort) | Drag Sort | HTML5 drag-and-drop reorderable list with grab handles and drop indicators. |
| [`session-list`](https://ui.bigbullapp.com/docs/session-list) | Session List | Active session manager: device icons, location, revoke buttons. |
| [`api-key-card`](https://ui.bigbullapp.com/docs/api-key-card) | Api Key Card | API key card with masked value, reveal toggle, copy and regenerate actions. |
| [`permissions-matrix`](https://ui.bigbullapp.com/docs/permissions-matrix) | Permissions Matrix | Role � permission checkbox matrix with animated check pops. |
| [`audit-log`](https://ui.bigbullapp.com/docs/audit-log) | Audit Log | Audit trail with actor avatars, color-coded action badges and timestamps. |
| [`stats-overview`](https://ui.bigbullapp.com/docs/stats-overview) | Stats Overview | Overview layout: KPI tile row, mini bar chart panel and recent records table. |
| [`user-table`](https://ui.bigbullapp.com/docs/user-table) | User Table | User management table with role badges, status dots and remove action. |
| [`settings-section`](https://ui.bigbullapp.com/docs/settings-section) | Settings Section | Settings section: title, description rows and save confirmation stamp. |
| [`profile-settings`](https://ui.bigbullapp.com/docs/profile-settings) | Profile Settings | Profile settings with avatar slot, fields and animated danger zone. |
| [`billing-panel`](https://ui.bigbullapp.com/docs/billing-panel) | Billing Panel | Billing panel: plan card, usage meters and invoice list. |
| [`usage-meter`](https://ui.bigbullapp.com/docs/usage-meter) | Usage Meter | Quota meter with color-coded fill bar and over-limit pulse warning. |
| [`team-members`](https://ui.bigbullapp.com/docs/team-members) | Team Members | Team member management: invite input, role chips, remove action. |
| [`webhook-list`](https://ui.bigbullapp.com/docs/webhook-list) | Webhook List | Webhook list with URL, event chips, test button and remove. |
| [`feature-flag-panel`](https://ui.bigbullapp.com/docs/feature-flag-panel) | Feature Flag Panel | Feature flag panel with toggle switches and rollout percentages. |
| [`queued-jobs`](https://ui.bigbullapp.com/docs/queued-jobs) | Queued Jobs | Job queue panel with status, progress bars and cancel action. |
| [`bento-grid`](https://ui.bigbullapp.com/docs/bento-grid) | Bento Grid | Bento grid: variable-sized cells with hover lift and staggered entrance. |
| [`split-screen`](https://ui.bigbullapp.com/docs/split-screen) | Split Screen | Split layout: left content and right emphasis panel with ratio control. |
| [`centered-card`](https://ui.bigbullapp.com/docs/centered-card) | Centered Card | Centered single card layout for login/register pages. |
| [`two-column-list`](https://ui.bigbullapp.com/docs/two-column-list) | Two Column List | Two-column notebook-style list with dashed separators. |
| [`masonry-columns`](https://ui.bigbullapp.com/docs/masonry-columns) | Masonry Columns | CSS columns masonry: cards flow by height with break-inside protection. |
| [`data-grid`](https://ui.bigbullapp.com/docs/data-grid) | Data Grid | Heavy data grid: sortable columns, pagination, sticky header. |
| [`tree-table`](https://ui.bigbullapp.com/docs/tree-table) | Tree Table | Hierarchical table rows with expand/collapse chevrons. |
| [`kanban-v2`](https://ui.bigbullapp.com/docs/kanban-v2) | Kanban V2 | Drag-and-drop kanban board v2 with animated column transfers. |
| [`board-checklist`](https://ui.bigbullapp.com/docs/board-checklist) | Board Checklist | Task checklist: checkboxes, assignee, priority badges and progress bar. |
| [`task-list`](https://ui.bigbullapp.com/docs/task-list) | Task List | Task rows with assignee chips and priority badges. |
| [`timeline-vertical-v2`](https://ui.bigbullapp.com/docs/timeline-vertical-v2) | Timeline Vertical V2 | Two-sided vertical timeline v2 with alternating cards. |
| [`feed-masonry`](https://ui.bigbullapp.com/docs/feed-masonry) | Feed Masonry | Masonry feed of mixed-height content cards. |
| [`inbox-list`](https://ui.bigbullapp.com/docs/inbox-list) | Inbox List | Email inbox list: unread dots, senders, stars, subject previews. |
| [`activity-v2`](https://ui.bigbullapp.com/docs/activity-v2) | Activity V2 | Filterable activity feed v2 with action badges and avatars. |
| [`rank-list`](https://ui.bigbullapp.com/docs/rank-list) | Rank List | Ranked list with drag-to-reorder and score readouts. |
| [`table-summary`](https://ui.bigbullapp.com/docs/table-summary) | Table Summary | Table footer summary rows with bolded totals in dashed frame. |
| [`empty-col-span`](https://ui.bigbullapp.com/docs/empty-col-span) | Empty Col Span | Empty table cell placeholder with floating icon animation. |
| [`row-expand`](https://ui.bigbullapp.com/docs/row-expand) | Row Expand | Expandable row detail panels with height animation. |
| [`column-toggle`](https://ui.bigbullapp.com/docs/column-toggle) | Column Toggle | Column show/hide dropdown menu for data grids. |
| [`mention-list`](https://ui.bigbullapp.com/docs/mention-list) | Mention List | @mention suggestion panel with avatars and keyboard highlight. |
| [`dm-thread`](https://ui.bigbullapp.com/docs/dm-thread) | Dm Thread | Direct message thread: header with presence, bubbles, input. |
| [`poll`](https://ui.bigbullapp.com/docs/poll) | Poll | Interactive poll with animated result bars and vote confirmation. |
| [`quiz-card`](https://ui.bigbullapp.com/docs/quiz-card) | Quiz Card | Mini quiz card with options and correct/incorrect feedback. |
| [`bio-card`](https://ui.bigbullapp.com/docs/bio-card) | Bio Card | Bio card with social link icons and follow action. |
| [`mention-highlight`](https://ui.bigbullapp.com/docs/mention-highlight) | Mention Highlight | Highlight @mentions and #hashtags inside running text. |
| [`badge-list`](https://ui.bigbullapp.com/docs/badge-list) | Badge List | Achievement badge grid with earned/locked states and shine sweep. |
| [`gift-message`](https://ui.bigbullapp.com/docs/gift-message) | Gift Message | Gift message card with ribbon wiggle and open animation. |
| [`voice-note-list`](https://ui.bigbullapp.com/docs/voice-note-list) | Voice Note List | Voice note list: play buttons, waveforms, durations. |
| [`price-compare`](https://ui.bigbullapp.com/docs/price-compare) | Price Compare | Price comparison table across sellers with best-offer highlight. |
| [`cart-badge`](https://ui.bigbullapp.com/docs/cart-badge) | Cart Badge | Cart count badge that pulses on item add. |
| [`order-tracking`](https://ui.bigbullapp.com/docs/order-tracking) | Order Tracking | Order tracking strip: status dots with dates and courier. |
| [`refund-card`](https://ui.bigbullapp.com/docs/refund-card) | Refund Card | Refund status card with amount and reason. |
| [`wallet-card`](https://ui.bigbullapp.com/docs/wallet-card) | Wallet Card | Wallet balance card with top-up and mini transactions. |
| [`crypto-ticker`](https://ui.bigbullapp.com/docs/crypto-ticker) | Crypto Ticker | Crypto price ticker with animated up/down arrows. |
| [`exchange-rate`](https://ui.bigbullapp.com/docs/exchange-rate) | Exchange Rate | Exchange rate converter with two-way live calculation. |
| [`budget-progress`](https://ui.bigbullapp.com/docs/budget-progress) | Budget Progress | Budget spending bar with category breakdown and overrun warning. |
| [`subscription-card`](https://ui.bigbullapp.com/docs/subscription-card) | Subscription Card | Subscription card: plan, renewal date, features, cancel. |
| [`gallery-grid`](https://ui.bigbullapp.com/docs/gallery-grid) | Gallery Grid | Image gallery grid with fullscreen lightbox and keyboard paging. |
| [`image-carousel`](https://ui.bigbullapp.com/docs/image-carousel) | Image Carousel | Image carousel with arrows, dots and swipe feel. |
| [`thumbnail-strip`](https://ui.bigbullapp.com/docs/thumbnail-strip) | Thumbnail Strip | Horizontal thumbnail strip with animated selection frame. |
| [`video-list`](https://ui.bigbullapp.com/docs/video-list) | Video List | Video results list: thumbnails, duration badges, channel names. |
| [`audio-recorder`](https://ui.bigbullapp.com/docs/audio-recorder) | Audio Recorder | Microphone recording simulator with waveform and send action. |
| [`media-embed`](https://ui.bigbullapp.com/docs/media-embed) | Media Embed | Embedded media frame: 16:9, skeleton shimmer, dashed border. |
| [`poster-card`](https://ui.bigbullapp.com/docs/poster-card) | Poster Card | Event poster card with gradient overlay and date corner. |
| [`screenshot-frame`](https://ui.bigbullapp.com/docs/screenshot-frame) | Screenshot Frame | Browser-chrome screenshot frame with URL bar and controls. |
| [`quote-wall`](https://ui.bigbullapp.com/docs/quote-wall) | Quote Wall | Masonry quote wall built on Quote cards. |
| [`glossary-list`](https://ui.bigbullapp.com/docs/glossary-list) | Glossary List | Glossary list with letter index tabs and term definitions. |
| [`changelog-list`](https://ui.bigbullapp.com/docs/changelog-list) | Changelog List | Changelog list: version badges, added/fixed/breaking sections. |
| [`recipe-card`](https://ui.bigbullapp.com/docs/recipe-card) | Recipe Card | Recipe card: ingredients/steps tabs, time and servings. |
| [`code-editor`](https://ui.bigbullapp.com/docs/code-editor) | Code Editor | Code editor: line-number gutter, Tab insertion, scroll sync. |
| [`markdown-editor`](https://ui.bigbullapp.com/docs/markdown-editor) | Markdown Editor | Markdown write/preview tabs with built-in renderer. |
| [`markdown-preview`](https://ui.bigbullapp.com/docs/markdown-preview) | Markdown Preview | Standalone markdown renderer: headings, lists, code, links, bold. |
| [`html-preview`](https://ui.bigbullapp.com/docs/html-preview) | Html Preview | Sandboxed HTML preview frame. |
| [`diff-editor`](https://ui.bigbullapp.com/docs/diff-editor) | Diff Editor | Editable side-by-side diff view. |
| [`json-editor`](https://ui.bigbullapp.com/docs/json-editor) | Json Editor | JSON editor with live validation, error line and format button. |
| [`regex-tester`](https://ui.bigbullapp.com/docs/regex-tester) | Regex Tester | Regex tester: pattern, test string, highlighted matches and count. |
| [`cron-builder`](https://ui.bigbullapp.com/docs/cron-builder) | Cron Builder | Cron expression builder: 5 fields, presets, live description. |
| [`color-token-table`](https://ui.bigbullapp.com/docs/color-token-table) | Color Token Table | Theme token table: swatch, value, copy action. |
| [`snippet-card`](https://ui.bigbullapp.com/docs/snippet-card) | Snippet Card | Code snippet card with language badge and copy button. |
| [`console-panel`](https://ui.bigbullapp.com/docs/console-panel) | Console Panel | Console panel: colored output lines, input row, autoscroll. |
| [`env-editor`](https://ui.bigbullapp.com/docs/env-editor) | Env Editor | Environment variable editor: secret masking, add/remove rows. |
| [`world-map`](https://ui.bigbullapp.com/docs/world-map) | World Map | Stylized world map grid with region value intensity and hover readout. |
| [`bubble-chart`](https://ui.bigbullapp.com/docs/bubble-chart) | Bubble Chart | Bubble chart with size-coded circles and hover magnify. |
| [`word-cloud`](https://ui.bigbullapp.com/docs/word-cloud) | Word Cloud | Word cloud with weight-based font sizing and hover accent. |
| [`network-graph`](https://ui.bigbullapp.com/docs/network-graph) | Network Graph | Node-edge network graph with bezier links and hover highlight. |
| [`sunburst-chart`](https://ui.bigbullapp.com/docs/sunburst-chart) | Sunburst Chart | Two-ring sunburst chart with segment hover dimming. |
| [`ticket-validator`](https://ui.bigbullapp.com/docs/ticket-validator) | Ticket Validator | Ticket validator device with blinking green/red result light. |
| [`punch-clock`](https://ui.bigbullapp.com/docs/punch-clock) | Punch Clock | Punch clock with live digital time and in/out stamp feed. |
| [`mailbox`](https://ui.bigbullapp.com/docs/mailbox) | Mailbox | Mailbox with flag raise and letter send animation. |
| [`medal-display`](https://ui.bigbullapp.com/docs/medal-display) | Medal Display | Medal board with gold/silver/bronze tiers and shine sweep. |
| [`trophy-shelf`](https://ui.bigbullapp.com/docs/trophy-shelf) | Trophy Shelf | Trophy shelf with earned/empty slots and drop-in animation. |
| [`megaphone`](https://ui.bigbullapp.com/docs/megaphone) | Megaphone | Announcement megaphone with animated sound waves. |
| [`score-keeper`](https://ui.bigbullapp.com/docs/score-keeper) | Score Keeper | Two-team score keeper with pulse on score change. |
| [`match-ticker`](https://ui.bigbullapp.com/docs/match-ticker) | Match Ticker | Live match ticker with scrolling scores and LIVE badges. |
| [`badge-ribbon`](https://ui.bigbullapp.com/docs/badge-ribbon) | Badge Ribbon | Award rosette badge ribbon with swallow-tail streamers and certified stamp. |
| [`bullet-chart`](https://ui.bigbullapp.com/docs/bullet-chart) | Bullet Chart | Target versus actual progress meter with qualitative ranges and goal marker. |
| [`histogram`](https://ui.bigbullapp.com/docs/histogram) | Histogram | Frequency distribution histogram with hover count readout and grow animation. |
| [`milestone-chart`](https://ui.bigbullapp.com/docs/milestone-chart) | Milestone Chart | Horizontal milestone timeline progress line with reached checkpoints. |
| [`stat-tile`](https://ui.bigbullapp.com/docs/stat-tile) | Stat Tile | KPI metric box with big tabular numbers, delta change and sparkline bars. |
| [`kpi-strip`](https://ui.bigbullapp.com/docs/kpi-strip) | Kpi Strip | Responsive grid strip of KPI metric tiles