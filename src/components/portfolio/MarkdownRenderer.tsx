"use client"

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1
              className="text-4xl font-bold mb-6 mt-8 first:mt-0"
              style={{ color: 'var(--text)' }}
            >
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2
              className="text-3xl font-semibold mb-4 mt-8"
              style={{ color: 'var(--text)' }}
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              className="text-2xl font-semibold mb-3 mt-6"
              style={{ color: 'var(--text)' }}
            >
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4
              className="text-xl font-semibold mb-2 mt-4"
              style={{ color: 'var(--text)' }}
            >
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p
              className="mb-4 leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul
              className="list-disc list-inside mb-4 space-y-2"
              style={{ color: 'var(--text-muted)' }}
            >
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol
              className="list-decimal list-inside mb-4 space-y-2"
              style={{ color: 'var(--text-muted)' }}
            >
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li style={{ color: 'var(--text-muted)' }}>{children}</li>
          ),
          code: ({ inline, children, ...props }: any) => {
            if (inline) {
              return (
                <code
                  className="px-2 py-1 rounded font-mono text-sm"
                  style={{
                    backgroundColor: 'var(--surface-medium)',
                    color: 'var(--text)',
                  }}
                  {...props}
                >
                  {children}
                </code>
              )
            }
            return (
              <code
                className="font-mono text-sm"
                style={{ color: 'var(--text)' }}
                {...props}
              >
                {children}
              </code>
            )
          },
          pre: ({ children }) => (
            <pre
              className="p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm"
              style={{
                backgroundColor: 'var(--surface-medium)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote
              className="border-l-4 pl-4 py-2 mb-4 italic"
              style={{
                borderColor: 'var(--border-strong)',
                color: 'var(--text-muted)',
              }}
            >
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-6">
              <table
                className="w-full text-sm border-collapse"
                style={{ border: '1px solid var(--border-subtle)' }}
              >
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead
              style={{
                backgroundColor: 'var(--card-bg)',
                borderBottom: '2px solid var(--border-subtle)',
              }}
            >
              {children}
            </thead>
          ),
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => (
            <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th
              className="text-left p-3 font-semibold"
              style={{ color: 'var(--text)' }}
            >
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="p-3" style={{ color: 'var(--text-muted)' }}>
              {children}
            </td>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              className="underline hover:no-underline transition-all"
              style={{ color: 'var(--text)' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          hr: () => (
            <hr
              className="my-8"
              style={{ borderColor: 'var(--border-subtle)' }}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
