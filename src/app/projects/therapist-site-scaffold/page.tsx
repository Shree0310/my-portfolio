"use client"

import Link from 'next/link'
import AmbientBackground from '@/components/portfolio/AmbientBackground'
import Header from '@/components/portfolio/Header'
import Footer from '@/components/portfolio/Footer'
import Badge from '@/components/portfolio/Badge'

export default function TherapistSiteScaffoldPage() {
  return (
    <>
      <AmbientBackground />
      <Header />

      <main className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 mb-8 font-mono text-sm transition-colors duration-150"
            style={{ color: 'var(--text-muted)' }}
          >
            ← Back to projects
          </Link>

          {/* Header */}
          <div className="mb-12">
            <Badge variant="live" className="mb-4">
              Developer Tool
            </Badge>
            <h1
              className="font-serif text-5xl font-normal mb-4"
              style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}
            >
              Therapist Site Scaffold
            </h1>
            <p
              className="text-xl leading-relaxed mb-6"
              style={{ color: 'var(--text-muted)' }}
            >
              A custom Claude Code skill that generates production-ready therapist and wellness practice websites in seconds.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Claude Code", "Next.js", "TypeScript", "Tailwind CSS", "Automation"].map((skill) => (
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
                View on GitHub →
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
                View Live Example →
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
                This custom Claude Code skill automates the creation of therapist and wellness practice websites, reducing what typically takes hours or days into a single command. It scaffolds a complete Next.js application with TypeScript, Tailwind CSS, and a thoughtfully designed page structure tailored for mental health professionals.
              </p>
              <p>
                Rather than using generic templates, the skill generates production-ready code with placeholder content that's realistic and contextual. Every section that needs client-specific content is marked with <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--card-bg)' }}>TODO(content)</code> comments, making it easy to identify what needs customization.
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Complete Page Set",
                  description: "Generates 9 essential pages: Home, About, Services, FAQs, Book a Session, Contact, Privacy Policy, Terms of Service, and Cancellation Policy."
                },
                {
                  title: "Single-File Theming",
                  description: "All brand colors, fonts, and styling tokens live in one theme file. Swap the entire visual identity by editing a single configuration."
                },
                {
                  title: "Reusable Components",
                  description: "Shared layout components and section blocks that compose into pages, ensuring consistency and maintainability."
                },
                {
                  title: "Smart Placeholder Content",
                  description: "Realistic, context-aware placeholder copy (never lorem ipsum) with clear TODO markers for required customization."
                },
                {
                  title: "Static & Fast",
                  description: "No CMS complexity. Pure TypeScript/TSX with static content for maximum performance and zero infrastructure overhead."
                },
                {
                  title: "Deploy-Ready",
                  description: "Optimized for Vercel deployment with proper Next.js App Router conventions and best practices built in."
                }
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-lg"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)' }}>
                    {feature.description}
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
                  title: "Gather Requirements",
                  description: "The skill prompts for practice name, brand colors, typography preferences, and any page additions/removals from the standard set."
                },
                {
                  step: "2",
                  title: "Generate Structure",
                  description: "Scaffolds the complete Next.js App Router structure with pages, components, layouts, and configuration files."
                },
                {
                  step: "3",
                  title: "Apply Theming",
                  description: "Injects brand colors and fonts into the theme configuration file, ensuring visual consistency across all pages."
                },
                {
                  step: "4",
                  title: "Add Content Markers",
                  description: "Places TODO(content) comments throughout the code wherever client-specific copy is needed."
                },
                {
                  step: "5",
                  title: "Ready to Deploy",
                  description: "The site is immediately runnable with realistic placeholder content. Simply swap the delta (theme + content) and deploy."
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

          {/* Tech Stack */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Tech Stack
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
                  <span><strong style={{ color: 'var(--text)' }}>Next.js (App Router)</strong> — Modern React framework with file-based routing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: 'var(--text)' }}>→</span>
                  <span><strong style={{ color: 'var(--text)' }}>TypeScript</strong> — Type-safe development for maintainability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: 'var(--text)' }}>→</span>
                  <span><strong style={{ color: 'var(--text)' }}>Tailwind CSS</strong> — Utility-first styling for rapid customization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: 'var(--text)' }}>→</span>
                  <span><strong style={{ color: 'var(--text)' }}>next/font</strong> — Optimized font loading with single-line swaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: 'var(--text)' }}>→</span>
                  <span><strong style={{ color: 'var(--text)' }}>Vercel</strong> — Zero-config deployment and hosting</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Example Output */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Example Output
            </h2>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text)' }}>Mind Craft Wellness</strong> is a reference implementation generated using this skill. It showcases the complete page structure, theming system, and component architecture.
              </p>
              <a
                href="https://mind-craft-wellness.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="/Images/MindCraftWellness.png"
                  alt="Mind Craft Wellness screenshot"
                  className="rounded-lg w-full"
                  style={{ border: '1px solid var(--border-subtle)' }}
                />
              </a>
            </div>
          </section>

          {/* Impact */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  metric: "90%",
                  label: "Time Saved",
                  description: "From hours of setup to minutes"
                },
                {
                  metric: "100%",
                  label: "Type Safety",
                  description: "TypeScript throughout"
                },
                {
                  metric: "0",
                  label: "Infrastructure",
                  description: "No CMS or backend needed"
                }
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-lg text-center"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {item.metric}
                  </div>
                  <div className="font-semibold mb-1" style={{ color: 'var(--text)' }}>
                    {item.label}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
