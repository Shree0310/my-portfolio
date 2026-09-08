"use client"

import Link from 'next/link'
import AmbientBackground from '@/components/portfolio/AmbientBackground'
import Header from '@/components/portfolio/Header'
import Footer from '@/components/portfolio/Footer'
import Badge from '@/components/portfolio/Badge'

export default function WebAnimationDesignSkillPage() {
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
              web-animation-design
            </h1>
            <p
              className="text-xl leading-relaxed mb-6"
              style={{ color: 'var(--text-muted)' }}
            >
              A comprehensive guide for creating web animations that feel natural and purposeful, based on Emil Kowalski's "Animations on the Web" course.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Animations", "Framer Motion", "React Spring", "GSAP", "Performance"].map((skill) => (
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
                This skill provides comprehensive guidance for designing and implementing web animations that feel right. It covers easing functions, spring physics, timing, duration, and accessibility considerations for motion.
              </p>
              <p>
                Based on Emil Kowalski's animations.dev course, this skill helps you make informed decisions about when and how to animate, which easing curves to use, and how to ensure your animations are performant and accessible.
              </p>
            </div>
          </section>

          {/* Quick Start */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Quick Start: Four Questions
            </h2>
            <div className="space-y-4">
              {[
                { question: "Is this element entering or exiting?", answer: "Use ease-out" },
                { question: "Is an on-screen element moving?", answer: "Use ease-in-out" },
                { question: "Is this a hover/color transition?", answer: "Use ease" },
                { question: "Will users see this 100+ times daily?", answer: "Don't animate it" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <p className="font-semibold mb-2" style={{ color: 'var(--text)' }}>
                    {item.question}
                  </p>
                  <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
                    → {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* The Easing Blueprint */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              The Easing Blueprint
            </h2>

            {/* ease-out */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text)' }}>
                ease-out (Most Common)
              </h3>
              <div
                className="p-6 rounded-lg mb-4"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
                  Use for <strong style={{ color: 'var(--text)' }}>user-initiated interactions</strong>: dropdowns, modals, tooltips, any element entering or exiting the screen.
                </p>
                <p style={{ color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text)' }}>Why it works:</strong> Acceleration at the start creates an instant, responsive feeling. The element "jumps" toward its destination then settles in.
                </p>
              </div>
              <div
                className="p-4 rounded-lg overflow-x-auto"
                style={{
                  backgroundColor: 'var(--surface-medium)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <pre className="text-sm font-mono" style={{ color: 'var(--text)' }}>
{`/* Sorted weak to strong */
--ease-out-quad:  cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
--ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
--ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
--ease-out-expo:  cubic-bezier(0.19, 1, 0.22, 1);
--ease-out-circ:  cubic-bezier(0.075, 0.82, 0.165, 1);`}
                </pre>
              </div>
            </div>

            {/* ease-in-out */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text)' }}>
                ease-in-out (For Movement)
              </h3>
              <div
                className="p-6 rounded-lg mb-4"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <p style={{ color: 'var(--text-muted)' }}>
                  Use when <strong style={{ color: 'var(--text)' }}>elements already on screen need to move or morph</strong>. Mimics natural motion like a car accelerating then braking.
                </p>
              </div>
              <div
                className="p-4 rounded-lg overflow-x-auto"
                style={{
                  backgroundColor: 'var(--surface-medium)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <pre className="text-sm font-mono" style={{ color: 'var(--text)' }}>
{`/* Sorted weak to strong */
--ease-in-out-quad:  cubic-bezier(0.455, 0.03, 0.515, 0.955);
--ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
--ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
--ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1);
--ease-in-out-expo:  cubic-bezier(1, 0, 0, 1);
--ease-in-out-circ:  cubic-bezier(0.785, 0.135, 0.15, 0.86);`}
                </pre>
              </div>
            </div>

            {/* ease */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text)' }}>
                ease (For Hover Effects)
              </h3>
              <div
                className="p-6 rounded-lg mb-4"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <p style={{ color: 'var(--text-muted)' }}>
                  Use for <strong style={{ color: 'var(--text)' }}>hover states and color transitions</strong>. The asymmetrical curve (faster start, slower end) feels elegant for gentle animations.
                </p>
              </div>
              <div
                className="p-4 rounded-lg overflow-x-auto"
                style={{
                  backgroundColor: 'var(--surface-medium)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <pre className="text-sm font-mono" style={{ color: 'var(--text)' }}>
{`transition: background-color 150ms ease;`}
                </pre>
              </div>
            </div>
          </section>

          {/* Duration Guidelines */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Duration Guidelines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                { type: "Micro-interactions", duration: "100-150ms" },
                { type: "Standard UI (tooltips, dropdowns)", duration: "150-250ms" },
                { type: "Modals, drawers", duration: "200-300ms" }
              ].map((item) => (
                <div
                  key={item.type}
                  className="p-6 rounded-lg text-center"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div className="text-3xl font-bold mb-2" style={{ color: 'var(--text)' }}>
                    {item.duration}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {item.type}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <p className="mb-3" style={{ color: 'var(--text)' }}><strong>Rules:</strong></p>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• UI animations should stay under 300ms</li>
                <li>• Larger elements animate slower than smaller ones</li>
                <li>• Exit animations can be ~20% faster than entrance</li>
                <li>• Match duration to distance - longer travel = longer duration</li>
              </ul>
            </div>
          </section>

          {/* When to Animate */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              When to Animate
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>
                  ✓ Do Animate
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <li>• Enter/exit transitions for spatial consistency</li>
                  <li>• State changes benefiting from visual continuity</li>
                  <li>• Responses to user actions (feedback)</li>
                  <li>• Rarely-used interactions where delight adds value</li>
                </ul>
              </div>
              <div
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>
                  ✗ Don't Animate
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <li>• Keyboard-initiated actions</li>
                  <li>• Hover effects on frequently-used elements</li>
                  <li>• Anything users interact with 100+ times daily</li>
                  <li>• When speed matters more than smoothness</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Spring Animations */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Spring Animations
            </h2>
            <div
              className="p-6 rounded-lg mb-6"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <p style={{ color: 'var(--text-muted)' }}>
                Springs feel more natural because they don't have fixed durations—they simulate real physics.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text)' }}>
                  When to Use Springs
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <li>• Drag interactions with momentum</li>
                  <li>• Elements that should feel "alive"</li>
                  <li>• Gestures that can be interrupted mid-animation</li>
                  <li>• Organic, playful interfaces</li>
                </ul>
              </div>
              <div
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text)' }}>
                  Bounce Guidelines
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <li>• Avoid bounce in most UI contexts</li>
                  <li>• Use bounce for drag-to-dismiss, playful interactions</li>
                  <li>• Keep bounce subtle (0.1-0.3) when used</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Performance */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Performance: The Golden Rule
            </h2>
            <div
              className="p-6 rounded-lg mb-6"
              style={{
                background: 'linear-gradient(135deg, #f59e0b40 0%, #f9731640 100%)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <p className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
                Only animate <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--surface-medium)' }}>transform</code> and <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--surface-medium)' }}>opacity</code>
              </p>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                These properties skip layout and paint stages, running entirely on the GPU.
              </p>
            </div>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <p className="mb-3 font-semibold" style={{ color: 'var(--text)' }}>Avoid animating:</p>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• <code>padding</code>, <code>margin</code>, <code>height</code>, <code>width</code> (trigger layout)</li>
                <li>• <code>blur</code> filters above 20px (expensive, especially Safari)</li>
                <li>• CSS variables in deep component trees</li>
              </ul>
            </div>
          </section>

          {/* Accessibility */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Accessibility: prefers-reduced-motion
            </h2>
            <div
              className="p-6 rounded-lg mb-4"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
                Animations can cause motion sickness or distraction for some users. Whenever you add an animation, also add a media query to disable it:
              </p>
              <div
                className="p-4 rounded-lg overflow-x-auto"
                style={{
                  backgroundColor: 'var(--surface-medium)'
                }}
              >
                <pre className="text-sm font-mono" style={{ color: 'var(--text)' }}>
{`.modal {
  animation: fadeIn 200ms ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .modal {
    animation: none;
  }
}`}
                </pre>
              </div>
            </div>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <p className="mb-3 font-semibold" style={{ color: 'var(--text)' }}>Guidelines:</p>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• Every animated element needs its own <code>prefers-reduced-motion</code> media query</li>
                <li>• Set <code>animation: none</code> or <code>transition: none</code></li>
                <li>• No exceptions for opacity or color - disable all animations</li>
                <li>• Show play buttons instead of autoplay videos</li>
              </ul>
            </div>
          </section>

          {/* Practical Tips */}
          <section className="mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Practical Tips
            </h2>
            <div
              className="overflow-x-auto rounded-lg"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <th className="text-left p-4" style={{ color: 'var(--text)' }}>Scenario</th>
                    <th className="text-left p-4" style={{ color: 'var(--text)' }}>Solution</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scenario: "Make buttons feel responsive", solution: "Add transform: scale(0.97) on :active" },
                    { scenario: "Element appears from nowhere", solution: "Start from scale(0.95), not scale(0)" },
                    { scenario: "Shaky/jittery animations", solution: "Add will-change: transform" },
                    { scenario: "Hover causes flicker", solution: "Animate child element, not parent" },
                    { scenario: "Popover scales from wrong point", solution: "Set transform-origin to trigger location" },
                    { scenario: "Sequential tooltips feel slow", solution: "Skip delay/animation after first tooltip" }
                  ].map((item, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td className="p-4" style={{ color: 'var(--text-muted)' }}>{item.scenario}</td>
                      <td className="p-4 font-mono text-xs" style={{ color: 'var(--text)' }}>{item.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
