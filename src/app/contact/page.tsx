"use client"

import Link from 'next/link'
import AmbientBackground from '@/components/portfolio/AmbientBackground'
import Header from '@/components/portfolio/Header'
import Footer from '@/components/portfolio/Footer'
import ContactFormNew from '@/components/portfolio/ContactFormNew'

export default function ContactPage() {
  return (
    <>
      <AmbientBackground />
      <Header />

      <main className="relative z-10 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1
              className="text-[44px] font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Let's work together
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              I'm currently available for freelance work and new opportunities. Whether you have a
              project in mind or just want to chat, I'd love to hear from you.
            </p>
          </div>

          {/* Contact Card */}
          <div
            className="p-8 rounded-2xl border mb-12"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--surface-subtle)',
            }}
          >
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: 'var(--text)' }}
            >
              Get in touch
            </h2>
            <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
              <a
                href="mailto:sowrasree0310@gmail.com"
                className="transition-colors duration-150 hover:underline"
                style={{ color: 'var(--text)' }}
              >
                sowrasree0310@gmail.com
              </a>
            </p>

            <div className="flex gap-4 font-mono text-sm">
              <Link
                href="https://x.com/sourashreeart"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150 hover:underline"
                style={{ color: 'var(--text-muted)' }}
              >
                X
              </Link>
              <Link
                href="https://www.linkedin.com/in/sowrasree-banerjee/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150 hover:underline"
                style={{ color: 'var(--text-muted)' }}
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Shree0310"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150 hover:underline"
                style={{ color: 'var(--text-muted)' }}
              >
                GitHub
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <ContactFormNew />
        </div>
      </main>

      <Footer />
    </>
  )
}
