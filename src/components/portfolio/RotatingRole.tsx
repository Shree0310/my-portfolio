"use client"

import { useEffect, useState } from 'react'

const roles = [
  'Design Engineer',
  'Frontend Developer',
  'Web Developer',
  'Accessibility',
  'Responsiveness',
]

export default function RotatingRole() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length)
        setIsVisible(true)
      }, 400)
    }, 2200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-base h-6 overflow-hidden" style={{ color: 'var(--text-muted)', minWidth: '200px' }}>
      <div
        className="transition-all duration-400"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-8px)',
        }}
      >
        {roles[currentIndex]}
      </div>
    </div>
  )
}
