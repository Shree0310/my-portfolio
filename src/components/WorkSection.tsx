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

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {displayProjects.map((project, idx) => (
          <Link
            key={project.name}
            href={project.url}
            className="group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </section>
  )
}
