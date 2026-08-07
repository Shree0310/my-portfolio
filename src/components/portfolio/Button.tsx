import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
  onClick?: () => void
  disabled?: boolean
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-ui transition-all duration-150'
  const sizeStyles = 'px-4 py-2 text-base rounded-full'

  const variantStyles = {
    primary: `bg-[var(--inverted-bg)] text-[var(--inverted-text)] border border-[var(--inverted-bg)] hover:opacity-90`,
    secondary: `bg-transparent text-[var(--text)] border border-[var(--border-medium)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-subtle)]`,
    ghost: `bg-transparent text-[var(--text-muted)] border-0 hover:text-[var(--text)]`,
  }

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : ''

  const combinedClassName = `${baseStyles} ${sizeStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={combinedClassName}>
      {children}
    </button>
  )
}
