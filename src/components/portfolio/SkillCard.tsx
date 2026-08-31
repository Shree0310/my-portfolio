"use client"

import { useState } from 'react'
import { SiClaude } from 'react-icons/si'

interface SkillCardProps {
  name: string
  description: string
  location: string
  tags?: string[]
  gradientFrom?: string
  gradientTo?: string
}

export default function SkillCard({
  name,
  description,
  location,
  tags = [],
  gradientFrom = '#3b82f6',
  gradientTo = '#8b5cf6',
}: SkillCardProps) {
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
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          }}
        >
          <SiClaude className="w-6 h-6 text-white" />
        </div>

        {/* Name */}
        <h3
          className="text-[21px] font-semibold mb-2 font-mono"
          style={{ color: 'var(--text)' }}
        >
          {name}
        </h3>

        {/* Description */}
        <p
          className="text-base leading-relaxed mb-4 flex-grow"
          style={{ color: 'var(--text-muted)' }}
        >
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md font-mono text-xs"
                style={{
                  backgroundColor: 'var(--surface-medium)',
                  color: 'var(--text-faint)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Location */}
        <div
          className="font-mono text-xs mt-auto"
          style={{ color: 'var(--text-faint)' }}
        >
          {location}
        </div>
      </div>
    </div>
  )
}
