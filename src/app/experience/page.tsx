"use client"

import AmbientBackground from '@/components/portfolio/AmbientBackground'
import Header from '@/components/portfolio/Header'
import Footer from '@/components/portfolio/Footer'
import ExperienceCard from '@/components/portfolio/ExperienceCard'
import { workExperiences } from '@/components/Constants/workEx'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function ExperiencePage() {
  const addToRefs = useScrollReveal({ staggerDelay: 150 })

  return (
    <>
      <AmbientBackground />
      <Header />

      <main className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mb-20">
            <h1 className="text-[44px] font-semibold mb-6" style={{ color: 'var(--text)' }}>
              <span className="font-ui">Where I</span>
              <span className="font-serif italic">'ve worked</span>
            </h1>
          </div>

          {/* Experience Grid */}
          <div className="flex flex-col gap-6">
            {workExperiences.map((exp) => (
              <div key={exp.company} ref={addToRefs as any} className="scroll-reveal">
                <ExperienceCard
                  company={exp.company}
                  position={exp.position}
                  tenure={exp.tenture}
                  description={exp.description}
                  skills={exp.skills}
                  companyInitials={exp.companyInitials || ''}
                  companyColor={exp.companyColor || '#666'}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
