"use client"

import { useState } from 'react'
import { projects, threejsProjects } from './Constants/projects'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState<'selected' | 'threejs'>('selected')

  const selectedProjects = projects.slice(0, 3)
  const displayProjects = activeTab === 'selected' ? selectedProjects : threejsProjects

  return (
    <section>
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Work
        </h2>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-neutral-200 dark:border-neutral-800">
          <button
            onClick={() => setActiveTab('selected')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'selected'
                ? 'text-neutral-900 dark:text-neutral-100'
                : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
            }`}
            aria-selected={activeTab === 'selected'}
            role="tab"
          >
            Selected ({selectedProjects.length})
            {activeTab === 'selected' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 dark:bg-neutral-100"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab('threejs')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'threejs'
                ? 'text-neutral-900 dark:text-neutral-100'
                : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
            }`}
            aria-selected={activeTab === 'threejs'}
            role="tab"
          >
            Three.js & React Fiber ({threejsProjects.length})
            {activeTab === 'threejs' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 dark:bg-neutral-100"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        </div>
      </div>

      {/* Project List */}
      <div className="space-y-12">
        {displayProjects.map((project, idx) => (
          <Link
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group grid md:grid-cols-[1fr,2fr] gap-8 items-start"
            >
              {/* Left: Number and Image */}
              <div className="space-y-4">
                <div className="text-sm font-mono text-neutral-400 dark:text-neutral-500">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right: Project Info */}
              <div className="space-y-3 pt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  <span>View project</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </section>
  )
}
