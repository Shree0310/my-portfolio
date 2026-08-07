"use client"

import AmbientBackground from '@/components/portfolio/AmbientBackground'
import Header from '@/components/portfolio/Header'
import Footer from '@/components/portfolio/Footer'
import ProjectCard from '@/components/portfolio/ProjectCard'
import { projects } from '@/components/Constants/projects'

export default function ProjectsPage() {

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
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                url={project.url}
                tag={project.tag}
                skills={project.skills}
                gradientFrom={project.gradientFrom}
                gradientTo={project.gradientTo}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
