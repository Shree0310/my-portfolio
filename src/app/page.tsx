'use client'

import { Content } from '@/Components/Content'
import Header from '@/Components/Header'
import Introduction from '@/Components/Introduction'
import Skills from '@/Components/Skills'
import Card from '@/Components/ui/Card'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <Header/>
      {/* <Content/> */}
      <Introduction/>
      <Skills/>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Next.js + Tailwind + Framer Motion
        </motion.h1>
        
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Your setup is working perfectly!
        </motion.p>
        
        <motion.button
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "#4f46e5"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </main>
    </div>
    
  )
}