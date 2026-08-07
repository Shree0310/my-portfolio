"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Button from './Button'

export default function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Components', href: '/components' },
    { label: 'Contact', href: '/contact' },
  ]

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 border-b backdrop-blur-sm"
      style={{
        borderColor: 'var(--border-subtle)',
        boxShadow: '0 4px 24px var(--shadow-color)',
        backgroundColor: 'var(--bg)',
      }}
    >
      {/* Logo */}
      <Link href="/" className="font-serif text-lg font-normal" style={{ color: 'var(--text)' }}>
        Sowrasree Banerjee
      </Link>

      {/* Navigation - hidden on mobile */}
      <nav className="hidden md:flex items-center gap-6 ml-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="font-ui text-base transition-colors duration-150"
            style={{
              color: pathname === item.href ? 'var(--text)' : 'var(--text-muted)',
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Right side actions */}
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border font-mono text-xs transition-all duration-150"
            style={{
              borderColor: 'var(--border-medium)',
              backgroundColor: 'var(--surface-subtle)',
              color: 'var(--text-muted)',
            }}
          >
            <div
              className="relative w-8 h-4 rounded-full transition-colors"
              style={{
                backgroundColor: theme === 'dark' ? 'var(--accent-emerald)' : 'rgba(0,0,0,0.15)',
              }}
            >
              <div
                className="absolute top-0.5 w-3 h-3 rounded-full transition-transform shadow-sm"
                style={{
                  backgroundColor: theme === 'dark' ? '#000' : '#fff',
                  transform: theme === 'dark' ? 'translateX(16px)' : 'translateX(2px)',
                }}
              />
            </div>
            <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </button>
        )}

        {/* Get in touch button */}
        <Button variant="primary" href="/contact">
          Get in touch
        </Button>
      </div>
    </header>
  )
}
