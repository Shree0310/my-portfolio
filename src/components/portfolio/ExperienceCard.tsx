"use client"

interface ExperienceCardProps {
  company: string
  position: string
  tenure: string
  description: string
  skills?: string[]
  companyInitials: string
  companyColor: string
}

export default function ExperienceCard({
  company,
  position,
  tenure,
  description,
  skills = [],
  companyInitials,
  companyColor,
}: ExperienceCardProps) {
  const bullets = description.split(',').filter(Boolean)

  return (
    <div
      className="p-6 rounded-2xl border"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--surface-subtle)',
      }}
    >
      {/* Date and location */}
      <div className="flex items-center justify-between mb-4">
        <p className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
          {tenure}
        </p>
        <p className="font-mono text-sm" style={{ color: 'var(--text-faint)' }}>
          Bangalore, India
        </p>
      </div>

      {/* Company badge and role */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: companyColor }}
        >
          {companyInitials}
        </div>
        <div>
          <h3 className="font-semibold text-lg" style={{ color: 'var(--text)' }}>
            {position}
          </h3>
          <p className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
            @ {company}
          </p>
        </div>
      </div>

      {/* Bullet points */}
      <ul className="space-y-2 mb-4">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="text-sm leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0"
            style={{ color: 'var(--text-muted)' }}
          >
            {bullet.trim()}
          </li>
        ))}
      </ul>

      {/* Skills */}
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full font-mono text-xs border backdrop-blur-sm"
              style={{
                borderColor: 'var(--border-medium)',
                backgroundColor: 'var(--surface-medium)',
                color: 'var(--text-muted)',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
