"use client"

import Link from 'next/link'
import AmbientBackground from '@/components/portfolio/AmbientBackground'
import Header from '@/components/portfolio/Header'
import Footer from '@/components/portfolio/Footer'
import Badge from '@/components/portfolio/Badge'
import Button from '@/components/portfolio/Button'
import RotatingRole from '@/components/portfolio/RotatingRole'
import ProjectCard from '@/components/portfolio/ProjectCard'
import ExperienceCard from '@/components/portfolio/ExperienceCard'
import { projects } from '@/components/Constants/projects'
import { workExperiences } from '@/components/Constants/workEx'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Home() {
  const addToRefs = useScrollReveal({ staggerDelay: 100 })

  return (
    <>
      <AmbientBackground />
      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 py-12">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="reveal reveal-0 mb-6">
              <Badge variant="live">
                Based in Bangalore · open to work
              </Badge>
            </div>

            {/* Name */}
            <h1
              className="reveal reveal-1 font-serif text-[60px] font-normal mb-4"
              style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}
            >
              Sowrasree Banerjee
            </h1>

            {/* Rotating role */}
            <div className="reveal reveal-2 mb-8 flex justify-center">
              <RotatingRole />
            </div>

            {/* Description */}
            <p
              className="reveal reveal-3 text-lg leading-relaxed max-w-2xl mx-auto mb-8"
              style={{ color: 'var(--text-muted)' }}
            >
              I'm a Frontend Engineer with 6 years of experience building AI-powered experiences,
              immersive 3D interfaces, and design systems that scale. I bridge design and
              engineering to create products that feel effortless.
            </p>

            {/* CTAs */}
            <div className="reveal reveal-4 flex items-center justify-center gap-4 mb-8">
              <Button variant="primary" href="/projects">
                View my work
              </Button>
              <Button variant="secondary" href="/contact">
                Get in touch
              </Button>
            </div>

            {/* Social links */}
            <div className="reveal reveal-4 flex items-center justify-center gap-6 font-mono text-sm">
              <Link
                href="https://x.com/sourashreeart"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150"
                style={{ color: 'var(--text-muted)' }}
              >
                X
              </Link>
              <Link
                href="https://www.linkedin.com/in/sowrasree-banerjee/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150"
                style={{ color: 'var(--text-muted)' }}
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Shree0310"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150"
                style={{ color: 'var(--text-muted)' }}
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* Things I've built section */}
        <section className="px-6 pt-4 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-semibold" style={{ color: 'var(--text)' }}>
                <span className="font-ui">Things I</span>
                <span className="font-serif italic">'ve built</span>
              </h2>
              <Link
                href="/projects"
                className="font-mono text-sm transition-colors duration-150"
                style={{ color: 'var(--text-muted)' }}
              >
                Projects
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 3).map((project) => (
                <div key={project.name} ref={addToRefs as any} className="scroll-reveal">
                  <ProjectCard
                    name={project.name}
                    description={project.description}
                    url={project.url}
                    tag={project.tag}
                    skills={project.skills}
                    gradientFrom={project.gradientFrom}
                    gradientTo={project.gradientTo}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where I've worked section */}
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-semibold" style={{ color: 'var(--text)' }}>
                <span className="font-ui">Where I</span>
                <span className="font-serif italic">'ve worked</span>
              </h2>
              <Link
                href="/experience"
                className="font-mono text-sm transition-colors duration-150"
                style={{ color: 'var(--text-muted)' }}
              >
                Experience
              </Link>
            </div>
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
        </section>
      </main>

      <Footer />
    </>
  )
}
