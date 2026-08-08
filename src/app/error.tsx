'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text)' }}>
          Something went wrong!
        </h2>
        <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-full border transition-colors duration-150"
          style={{
            borderColor: 'var(--border-medium)',
            backgroundColor: 'var(--surface-subtle)',
            color: 'var(--text)',
          }}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
