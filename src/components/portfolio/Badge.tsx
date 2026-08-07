import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'live'
  className?: string
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[13px] border backdrop-blur-sm'

  const variantStyles = {
    default: 'border-[var(--border-medium)] bg-[var(--surface-medium)] text-[var(--text-muted)]',
    live: 'border-[var(--border-medium)] bg-[var(--surface-medium)] text-[var(--text-muted)]',
  }

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {variant === 'live' && (
        <span className="relative flex h-2 w-2">
          <span
            className="absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{
              backgroundColor: 'var(--accent-emerald)',
              animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
            }}
          />
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ backgroundColor: 'var(--accent-emerald)' }}
          />
        </span>
      )}
      {children}
    </span>
  )
}
