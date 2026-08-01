"use client"

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

export default function HeroWithScene() {
  return (
    <div className="space-y-6">
      {/* Name & Role */}
      <div>
        <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
          Sowrasree Banerjee
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400">
          Design Engineer
        </p>
      </div>

      {/* Bio */}
      <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-xl">
        I'm a Frontend Engineer with 6 years of experience building AI-powered experiences,
        immersive 3D interfaces, and design systems that scale. I bridge design and engineering
        to create products that feel effortless.
      </p>

      {/* Social Links */}
      <div className="flex gap-4 items-center">
        <Link
          href="https://github.com/sourashree"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub className="w-5 h-5" />
        </Link>
        <Link
          href="https://linkedin.com/in/sourashree"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-5 h-5" />
        </Link>
        <Link
          href="https://twitter.com/sourashree"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          aria-label="Twitter"
        >
          <FaTwitter className="w-5 h-5" />
        </Link>
      </div>
    </div>
  )
}
