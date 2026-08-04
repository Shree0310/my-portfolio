"use client"

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
}

export default function HeroWithScene() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Name & Role */}
      <motion.div variants={itemVariants}>
        <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
          Sowrasree Banerjee
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400">
          Design Engineer
        </p>
      </motion.div>

      {/* Bio */}
      <motion.p
        variants={itemVariants}
        className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-xl"
      >
        I'm a Frontend Engineer with 6 years of experience building AI-powered experiences,
        immersive 3D interfaces, and design systems that scale. I bridge design and engineering
        to create products that feel effortless.
      </motion.p>

      {/* Social Links */}
      <motion.div
        variants={itemVariants}
        className="flex gap-4 items-center"
      >
        {[
          { href: "https://github.com/sourashree", icon: FaGithub, label: "GitHub" },
          { href: "https://linkedin.com/in/sourashree", icon: FaLinkedin, label: "LinkedIn" },
          { href: "https://twitter.com/sourashree", icon: FaTwitter, label: "Twitter" }
        ].map((social, idx) => (
          <motion.div
            key={social.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5 + idx * 0.1,
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1] as any
            }}
          >
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-block hover:scale-110 transform transition-transform"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
