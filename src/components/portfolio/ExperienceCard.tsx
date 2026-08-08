"use client"

import { HiCalendar, HiMapPin, HiBriefcase, HiBuildingOffice2 } from 'react-icons/hi2'
import { SiGoogle } from 'react-icons/si'

interface ExperienceCardProps {
  company: string
  position: string
  tenure: string
  description: string
  skills?: string[]
  companyInitials: string
  companyColor: string
}

const getCompanyIcon = (company: string) => {
  if (company.includes('Google') || company.includes('EPAM')) {
    return { icon: SiGoogle, type: 'logo' }
  }
  if (company.includes('CAPGEMINI') || company.includes('Capgemini')) {
    return { icon: HiBuildingOffice2, type: 'generic' }
  }
  return null
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
  const companyIconData = getCompanyIcon(company)

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
        <p className="flex items-center gap-1.5 font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
          <HiCalendar className="w-4 h-4" />
          {tenure}
        </p>
        <p className="flex items-center gap-1.5 font-mono text-sm" style={{ color: 'var(--text-faint)' }}>
          <HiMapPin className="w-4 h-4" />
          Bangalore, India
        </p>
      </div>

      {/* Company badge and role */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
          style={{ backgroundColor: companyColor }}
        >
          {companyIconData ? (
            <companyIconData.icon className="w-5 h-5" />
          ) : (
            <span className="font-bold text-sm">{companyInitials}</span>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg flex items-center gap-1.5" style={{ color: 'var(--text)' }}>
            <HiBriefcase className="w-4 h-4" />
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
