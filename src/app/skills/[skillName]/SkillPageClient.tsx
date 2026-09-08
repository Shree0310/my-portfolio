"use client"

import Link from 'next/link'
import { HiDownload } from 'react-icons/hi'
import AmbientBackground from '@/components/portfolio/AmbientBackground'
import Header from '@/components/portfolio/Header'
import Footer from '@/components/portfolio/Footer'
import Badge from '@/components/portfolio/Badge'
import MarkdownRenderer from '@/components/portfolio/MarkdownRenderer'
import { SkillMetadata } from '@/lib/markdown'

interface SkillPageClientProps {
  skillName: string
  metadata: SkillMetadata
  content: string
  gradientFrom: string
  gradientTo: string
}

export default function SkillPageClient({
  skillName,
  metadata,
  content,
  gradientFrom,
  gradientTo
}: SkillPageClientProps) {
  const handleDownload = () => {
    const blob = new Blob([`---\nname: ${metadata.name}\ndescription: ${metadata.description}\n---\n\n${content}`], {
      type: 'text/markdown'
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${skillName}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <AmbientBackground />
      <Header />

      <main className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/#skills"
            className="inline-flex items-center gap-2 mb-8 font-mono text-sm transition-colors duration-150 hover:opacity-70"
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
              {metadata.name}
            </h1>
            <p
              className="text-xl leading-relaxed mb-6"
              style={{ color: 'var(--text-muted)' }}
            >
              {metadata.description}
            </p>

            {/* Download button */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-150 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
                color: '#fff'
              }}
            >
              <HiDownload className="w-5 h-5" />
              Download SKILL.md
            </button>
          </div>

          {/* Markdown Content */}
          <div
            className="p-8 rounded-2xl mb-12"
            style={{
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <MarkdownRenderer content={content} />
          </div>

          {/* Footer note */}
          <div
            className="p-6 rounded-lg text-center"
            style={{
              backgroundColor: 'var(--surface-medium)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              This is the actual SKILL.md file used by Claude Code. Download it and place it in{' '}
              <code
                className="px-2 py-1 rounded font-mono"
                style={{ backgroundColor: 'var(--card-bg)' }}
              >
                ~/.claude/skills/{skillName}/
              </code>{' '}
              to use this skill.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
