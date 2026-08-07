"use client"

import { useEffect, useRef } from 'react'

interface ScrollRevealOptions {
  threshold?: number
  staggerDelay?: number
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.15, staggerDelay = 120 } = options
  const elementsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const elements = elementsRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const delay = index * staggerDelay
            setTimeout(() => {
              entry.target.classList.add('revealed')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [threshold, staggerDelay])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el)
    }
  }

  return addToRefs
}
