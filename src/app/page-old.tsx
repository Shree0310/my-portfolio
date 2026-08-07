'use client'

import Footer from '@/components/Navbar/Footer'
import HeroWithScene from '@/components/HeroWithScene'
import WorkSection from '@/components/WorkSection'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main ref={containerRef} className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section with Parallax */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="pt-32 pb-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <HeroWithScene />
        </div>
      </motion.section>

      {/* Work Section with Scroll Animation */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <WorkSection />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-32">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Footer />
        </div>
      </footer>
    </main>
  )
}
