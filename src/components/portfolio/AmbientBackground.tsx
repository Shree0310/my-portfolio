"use client"

export default function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: 'var(--bg)', isolation: 'isolate' }}
      aria-hidden="true"
    >
      {/* Conic gradient blob - bottom right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-20%',
          right: '-15%',
          width: '60%',
          height: '60%',
          background: 'conic-gradient(from 180deg at 50% 50%, #3b82f6, #8b5cf6, #ec4899, #f97316, #eab308, #3b82f6)',
          filter: 'blur(60px)',
          opacity: 0.15,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Radial gradient blob - center, floating */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          filter: 'blur(28px)',
          opacity: 0.15,
          mixBlendMode: 'multiply',
          animation: 'blobFloat 14s ease-in-out infinite',
        }}
      />

      {/* Dark mode adjustments via CSS */}
      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          div[style*="mixBlendMode"] {
            mix-blend-mode: screen !important;
            opacity: 0.2 !important;
          }
        }
        :global(.dark) div[style*="mixBlendMode"] {
          mix-blend-mode: screen !important;
          opacity: 0.2 !important;
        }
      `}</style>
    </div>
  )
}
