"use client"

import Link from 'next/link'
import AmbientBackground from '@/components/portfolio/AmbientBackground'
import Header from '@/components/portfolio/Header'
import Footer from '@/components/portfolio/Footer'
import Badge from '@/components/portfolio/Badge'

export default function TherapistSiteScaffoldSkillPage() {
  return (
    <>
      <AmbientBackground />
      <Header />

      <main className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/#skills"
            className="inline-flex items-center gap-2 mb-8 font-mono text-sm transition-colors duration-150"
            style={{ color: 'var(--text-muted)' }}
          >
            ← Back to portfolio
          </Link>

          {/* Header */}
          <div className="mb-12">
            <Badge variant="live" className="mb-4">
              Claude Code Skill
            </Badge>
            <h1
              className="font-serif text-5xl font-normal mb-4"
              style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}
            >
              therapist-site-scaffold
            </h1>
            <p
              className="text-xl leading-relaxed mb-6"
              style={{ color: 'var(--text-muted)' }}
            >
              A Claude Code skill that scaffolds complete therapist/wellness practice websites with Next.js, TypeScript, and static content—no CMS required.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Next.js", "TypeScript", "Tailwind CSS", "Automation"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm font-mono"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Shree0310/MindCraftWellness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-150"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  color: 'var(--text)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                View Example →
              </a>
              <a
                href="https://mind-craft-wellness.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-150"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  color: 'var(--text)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                Live Demo →
              </a>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ color: 'var(--text)' }}
            >
              Overview
            </h2>
            <div className="space-y-4" style={{ color: 'var(--text-muted)' }}>
              <p>
                This skill generates the repeatable skeleton for therapist and wellness-practice websites: page structure, routing, shared layout components, and a single theme file for per-client customization. Content is seeded as clearly-marked placeholder copy so the site renders fully on first run.
              </p>
              <p>
                The skill drops CMS complexity entirely—everything is static TypeScript/TSX with placeholder content. The user rewrites copy and swaps the theme values afterward as "the delta."
              </p>
            </div>
          </section>

          {/* Fixed Stack */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Tech Stack (Fixed)
            </h2>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <ul className="space-y-3 font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
                <li className="flex items-start gap-3">
                  <span style={{ color: 'var(--text)' }}>→</span>
                  <span><strong style={{ color: 'var(--text)' }}>Next.js (App Router)</strong> with TypeScript</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: 'var(--text)' }}>→</span>
                  <span><strong style={{ color: 'var(--text)' }}>Tailwind CSS</strong> for styling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: 'var(--text)' }}>→</span>
                  <span><strong style={{ color: 'var(--text)' }}>next/font</strong> for font loading (one-line typography swaps)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: 'var(--text)' }}>→</span>
                  <span><strong style={{ color: 'var(--text)' }}>Vercel</strong> deployment-ready</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Standard Page Set */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Standard Page Set
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { route: "/", purpose: "Home — hero, value prop, brief intro, CTA to book" },
                { route: "/about", purpose: "Therapist bio, credentials, approach/philosophy" },
                { route: "/services", purpose: "Modalities/session types offered, format (in-person/online)" },
                { route: "/faqs", purpose: "Accordion of common questions" },
                { route: "/book-a-session", purpose: "Booking CTA — embed or link out" },
                { route: "/contact", purpose: "Contact form or details, location/hours" },
                { route: "/privacy-policy", purpose: "Standard privacy policy scaffold" },
                { route: "/terms-of-service", purpose: "Standard terms scaffold" },
                { route: "/cancellation-policy", purpose: "Session cancellation/rescheduling policy" }
              ].map((page) => (
                <div
                  key={page.route}
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <code className="text-sm font-mono" style={{ color: 'var(--text)' }}>
                    {page.route}
                  </code>
                  <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
                    {page.purpose}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              How It Works
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Ask for Delta Inputs",
                  description: "Collects practice name, primary brand color + accents, typography direction, page additions/removals, and booking integration preference."
                },
                {
                  step: "2",
                  title: "Scaffold Page Structure",
                  description: "Generates all routes under app/ with shared layout (Nav, Footer) and reusable section components."
                },
                {
                  step: "3",
                  title: "Create Theme Architecture",
                  description: "Sets up lib/theme.ts for brand colors/fonts and lib/site-config.ts for practice details—the two primary delta files."
                },
                {
                  step: "4",
                  title: "Seed Placeholder Content",
                  description: "Fills every page with realistic content marked TODO(content) wherever real copy is needed."
                },
                {
                  step: "5",
                  title: "Confirm & Summarize",
                  description: "Reports what was scaffolded, where to customize (theme + config files), and provides a TODO(content) checklist."
                }
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 p-6 rounded-lg"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-lg"
                    style={{
                      background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                      color: '#fff'
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Shared Architecture */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Shared Architecture
            </h2>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <ul className="space-y-3 font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
                <li className="flex items-start gap-3">
                  <span style={{ color: 'var(--text)' }}>→</span>
                  <span><code style={{ color: 'var(--text)' }}>app/layout.tsx</code> — Root layout wiring theme, Nav, Footer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: 'var(--text)' }}>→</span>
                  <span><code style={{ color: 'var(--text)' }}>components/layout/</code> — Nav.tsx, Footer.tsx shared across pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: 'var(--text)' }}>→</span>
                  <span><code style={{ color: 'var(--text)' }}>components/sections/</code> — Reusable blocks (Hero, CTA, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: 'var(--text)' }}>→</span>
                  <span><code style={{ color: 'var(--text)' }}>lib/theme.ts</code> — Brand colors & fonts (primary delta file)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: 'var(--text)' }}>→</span>
                  <span><code style={{ color: 'var(--text)' }}>lib/site-config.ts</code> — Practice name, contact info (secondary delta file)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Placeholder Content Convention */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Placeholder Content Convention
            </h2>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
                Every page renders with realistic-but-fake copy on first generation—never lorem ipsum, never blank sections. Every block needing real content is marked:
              </p>
              <pre
                className="p-4 rounded-lg overflow-x-auto"
                style={{
                  backgroundColor: 'var(--surface-medium)',
                  color: 'var(--text)'
                }}
              >
{`{/* TODO(content): replace with actual practice tagline */}
<h1>Compassionate therapy for anxiety, grief, and life transitions</h1>`}
              </pre>
              <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                At the end of scaffolding, grep for <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--surface-medium)' }}>TODO(content)</code> to get a flat checklist of what needs real copy, grouped by page.
              </p>
            </div>
          </section>

          {/* Example Output */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Reference Implementation
            </h2>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text)' }}>Mind Craft Wellness</strong> is the reference implementation. View the source on GitHub or see it live to understand the complete structure.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Shree0310/MindCraftWellness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-150"
                  style={{
                    backgroundColor: 'var(--surface-medium)',
                    color: 'var(--text)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  GitHub Repository →
                </a>
                <a
                  href="https://mind-craft-wellness.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-150"
                  style={{
                    background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                    color: '#fff'
                  }}
                >
                  View Live Demo →
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
