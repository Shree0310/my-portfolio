import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text)' }}>
          404 - Page Not Found
        </h2>
        <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block px-4 py-2 rounded-full border transition-colors duration-150"
          style={{
            borderColor: 'var(--border-medium)',
            backgroundColor: 'var(--surface-subtle)',
            color: 'var(--text)',
          }}
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
