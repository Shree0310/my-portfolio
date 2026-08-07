"use client"

import Link from 'next/link'
import { useState } from 'react'

interface ProjectCardProps {
  name: string
  description: string
  url: string
  tag?: string
  skills?: string[]
  gradientFrom?: string
  gradientTo?: string
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
  tag,
  skills = [],
  gradientFrom = '#3b82f6',
  gradientTo = '#8b5cf6',
}: ProjectCardProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group h-full"
    >
      <div
        className="relative p-7 rounded-2xl border transition-all duration-150 hover:border-[var(--border-strong)] h-full flex flex-col"
        style={{
          borderColor: 'var(--border-subtle)',
          background: `
            radial-gradient(circle at 0% 0%, ${gradientFrom}15 0%, transparent 38%),
            radial-gradient(circle at 100% 100%, ${gradientTo}15 0%, transparent 38%),
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
                  className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: skillColors[skill] || '#666',
                    border: '2px solid var(--bg)',
                    color: skill === 'JavaScript' || skill === 'React' ? '#000' : '#fff',
                  }}
                >
                  {skill.charAt(0)}
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

        {/* Visit link */}
        <div className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
          Visit →
        </div>
      </div>
    </Link>
  )
}
