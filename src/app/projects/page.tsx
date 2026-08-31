"use client"

import AmbientBackground from '@/components/portfolio/AmbientBackground'
import Header from '@/components/portfolio/Header'
import Footer from '@/components/portfolio/Footer'
import ProjectCard from '@/components/portfolio/ProjectCard'
import SkillCard from '@/components/portfolio/SkillCard'
import { projects } from '@/components/Constants/projects'
import { claudeCodeSkills } from '@/components/Constants/skills'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function ProjectsPage() {
  const addToRefs = useScrollReveal({ staggerDelay: 100 })

  return (
    <>
      <AmbientBackground />
      <Header />

      <main className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mb-20">
            <h1
              className="text-[44px] font-semibold mb-6"
              style={{ color: 'var(--text)' }}
            >
              Projects
            </h1>
            <p
              className="text-lg leading-relaxed max-w-3xl"
              style={{ color: 'var(--text-muted)' }}
            >
              I'm a passionate Frontend Engineer based in Bangalore, India, with a deep love for
              building elegant and efficient web applications. With 6 years of professional
              experience, I've had the privilege of working on diverse projects — from AI-powered
              features to complex enterprise applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.name} ref={addToRefs as any} className="scroll-reveal">
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  url={project.url}
                  github={project.github}
                  tag={project.tag}
                  skills={project.skills}
                  gradientFrom={project.gradientFrom}
                  gradientTo={project.gradientTo}
                />
              </div>
            ))}
          </div>

          {/* skill.md section */}
          <div className="mt-20">
            <div className="mb-12">
              <h2 className="text-4xl font-semibold mb-4" style={{ color: 'var(--text)' }}>
                <span className="font-mono">skill.md</span>
              </h2>
              <p
                className="text-base leading-relaxed max-w-3xl"
                style={{ color: 'var(--text-muted)' }}
              >
                skill.md files are custom markdown files that extend Claude Code's capabilities for specific workflows.
                They encapsulate repeatable patterns, domain knowledge, and automation recipes that make
                development faster and more consistent.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {claudeCodeSkills.map((skill) => (
                <div key={skill.name} ref={addToRefs as any} className="scroll-reveal">
                  <SkillCard
                    name={skill.name}
                    description={skill.description}
                    location={skill.location}
                    tags={skill.tags}
                    gradientFrom={skill.gradientFrom}
                    gradientTo={skill.gradientTo}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
