"use client"

import Link from 'next/link'
import { useState } from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import { SiGithub, SiReact, SiTypescript, SiNodedotjs, SiRedux, SiThreedotjs, SiJavascript, SiNextdotjs } from 'react-icons/si'

interface ProjectCardProps {
  name: string
  description: string
  url: string
  github?: string
  tag?: string
  skills?: string[]
  gradientFrom?: string
  gradientTo?: string
}

const skillIcons: Record<string, any> = {
  React: SiReact,
  TypeScript: SiTypescript,
  'Node.js': SiNodedotjs,
  Redux: SiRedux,
  'Three.js': SiThreedotjs,
  JavaScript: SiJavascript,
  'Next.js': SiNextdotjs,
}

const skillColors: Record<string, string> = {
  React: '#61DAFB',
  TypeScript: '#3178C6',
  'Node.js': '#3C873A',
  Redux: '#764ABC',
  'Three.js': '#111111',
  JavaScript: '#F7DF1E',
  'Next.js': '#000000',
}

export default function ProjectCard({
  name,
  description,
  url,
  github,
  tag,
  skills = [],
  gradientFrom = '#3b82f6',
  gradientTo = '#8b5cf6',
}: ProjectCardProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="block group h-full">
      <div
        className="relative p-7 rounded-2xl border transition-all duration-150 hover:border-[var(--border-strong)] h-full flex flex-col"
        style={{
          borderColor: 'var(--border-subtle)',
          background: `
            radial-gradient(circle at 0% 0%, ${gradientFrom}40 0%, transparent 38%),
            radial-gradient(circle at 100% 100%, ${gradientTo}40 0%, transparent 38%),
            var(--bg)
          `,
        }}
      >
        {/* Tag */}
        {tag && (
          <div
            className="inline-block px-2 py-1 rounded-md font-mono text-xs mb-4"
            style={{
              backgroundColor: 'var(--surface-medium)',
              color: 'var(--text-faint)',
            }}
          >
            {tag}
          </div>
        )}

        {/* Title */}
        <h3
          className="text-[21px] font-semibold mb-3"
          style={{ color: 'var(--text)' }}
        >
          {name}
        </h3>

        {/* Description */}
        <p
          className="text-base leading-relaxed mb-6 flex-grow"
          style={{ color: 'var(--text-muted)' }}
        >
          {description}
        </p>

        {/* Skill badges */}
        {skills.length > 0 && (
          <div className="flex items-center mb-4 relative mt-auto">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="relative"
                style={{ marginLeft: index > 0 ? '-14px' : '0', zIndex: skills.length - index }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className="w-[34px] h-[34px] rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: skillColors[skill] || '#666',
                    border: '2px solid var(--bg)',
                    color: '#fff',
                  }}
                >
                  {(() => {
                    const Icon = skillIcons[skill]
                    return Icon ? <Icon className="w-4 h-4" /> : <span className="text-xs font-bold">{skill.charAt(0)}</span>
                  })()}
                </div>
                {/* Tooltip */}
                {hoveredSkill === skill && (
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-mono whitespace-nowrap transition-opacity duration-150"
                    style={{
                      backgroundColor: 'var(--inverted-bg)',
                      color: 'var(--inverted-text)',
                    }}
                  >
                    {skill}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-4 font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
          <Link
            href={url}
            target={url.startsWith('/') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[var(--text)] transition-colors"
          >
            <span>Visit</span>
            <HiArrowUpRight className="w-4 h-4" />
          </Link>
          {github && (
            <>
              <span style={{ color: 'var(--border-subtle)' }}>·</span>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[var(--text)] transition-colors"
              >
                <span>GitHub</span>
                <HiArrowUpRight className="w-4 h-4" />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
