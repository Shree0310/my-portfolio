import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="border-t py-8 text-center"
      style={{
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[13px]">
        <p style={{ color: 'var(--text-muted)' }} className="font-ui">
          Built with love by{' '}
          <span className="font-serif" style={{ color: 'var(--text)' }}>
            Sowrasree Banerjee
          </span>
        </p>
        <div className="flex items-center gap-4 font-mono">
          <Link
            href="https://x.com/sourashreeart"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150"
            style={{ color: 'var(--text-muted)' }}
          >
            X
          </Link>
          <Link
            href="https://www.linkedin.com/in/sowrasree-banerjee/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150"
            style={{ color: 'var(--text-muted)' }}
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Shree0310"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150"
            style={{ color: 'var(--text-muted)' }}
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  )
}
