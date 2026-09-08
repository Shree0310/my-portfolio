---
name: therapist-site-scaffold
description: Scaffold a new therapist/wellness practice website (Next.js, TypeScript, static content, no CMS). Use this whenever the user asks to start a new therapist, counselor, psychologist, or wellness-practice client site, says "new client site," "scaffold a wellness site," or references the standard therapist site page set (Home, About, Services, FAQ, Book a Session, Contact, Privacy Policy, Terms of Service, Cancellation Policy). Do NOT use for non-therapy/wellness clients, sites needing a CMS, or edits to an already-scaffolded site — this skill is for the initial setup only.
---

# Therapist/Wellness Site Scaffold

Generates the repeatable skeleton for therapist and wellness-practice websites: page structure, routing, shared layout components, and a single theme file for per-client customization. Content is seeded as clearly-marked placeholder copy so the site renders fully on first run — the user rewrites copy and swaps the theme values afterward as "the delta."

Reference implementation: https://github.com/Shree0310/MindCraftWellness (live: mind-craft-wellness.vercel.app). If the user hasn't already cloned it locally, clone it into a scratch folder and inspect `src/app` before scaffolding, so the generated structure matches their established conventions rather than a generic guess. This skill's version drops Sanity — no CMS, everything is static TypeScript/TSX with placeholder content.

## Stack (fixed — do not vary per client)

- Next.js (App Router), TypeScript
- Tailwind CSS for styling
- `next/font` for font loading (so typography swaps are a one-line change)
- Deployed to Vercel

If the user's request implies a different stack, stop and confirm before scaffolding — this skill assumes the above.

## Step 1: Ask for the delta inputs up front

Before generating anything, ask for (skip any the user already gave you):
1. Practice/therapist name
2. Primary brand color (hex or description) + 1-2 accent colors
3. Typography direction (e.g. "warm serif headings, clean sans body" — or just "pick something calm and professional")
4. Any pages to add/remove from the standard set (see below)
5. Whether "Book a Session" links to an external scheduler (Calendly, etc.) or needs a real form/backend

Don't block on content specifics (bios, service descriptions, FAQ answers) — those get placeholder copy per Step 4.

## Step 2: Standard page set

Scaffold these routes under `app/` unless the user said to drop/add:

| Route | Purpose |
|---|---|
| `/` | Home — hero, value prop, brief intro, CTA to book |
| `/about` | Therapist bio, credentials, approach/philosophy |
| `/services` | Modalities/session types offered, format (in-person/online) |
| `/faqs` | Accordion of common questions |
| `/book-a-session` | Booking CTA — embed or link out per Step 1 answer |
| `/contact` | Contact form or details, location/hours if relevant |
| `/privacy-policy` | Standard privacy policy scaffold |
| `/terms-of-service` | Standard terms scaffold |
| `/cancellation-policy` | Session cancellation/rescheduling policy scaffold |

Optional, only if requested: `/blog` or `/resources`, `/testimonials`.

## Step 3: Shared architecture

- `app/layout.tsx` — root layout wiring the theme (fonts, base colors), `<Nav>`, `<Footer>`
- `components/layout/Nav.tsx`, `Footer.tsx` — shared across all pages, links generated from the page list so adding/removing a page later is a one-place edit
- `components/sections/` — reusable section blocks (Hero, ValueProps, CTA, FAQAccordion, ContactForm) that pages compose from, rather than one-off markup per page
- `lib/theme.ts` (or `tailwind.config.ts` `theme.extend`) — the single file holding brand color tokens and font family names. This is the primary "delta" file per client — everything else should reference tokens from here, never hardcode a hex value in a component.
- `lib/site-config.ts` — practice name, tagline, contact info, nav links, social links — the second "delta" file, so copy changes don't require touching component code

## Step 4: Placeholder content convention

Every page renders with realistic-but-fake copy on first generation — never lorem ipsum, never blank sections. Mark every block that needs real client content with an inline comment:

```tsx
{/* TODO(content): replace with actual practice tagline */}
<h1>Compassionate therapy for anxiety, grief, and life transitions</h1>
```

At the end of scaffolding, grep for `TODO(content)` and give the user a flat list of what still needs real copy, grouped by page — this is their delta checklist.

## Step 5: Confirm before finishing

Summarize what was scaffolded (pages, theme file location, config file location, TODO count) and remind the user the two files to focus on for customization are `lib/theme.ts` and `lib/site-config.ts`, plus resolving the `TODO(content)` list.
