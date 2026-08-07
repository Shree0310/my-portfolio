"use client"

import { useState } from 'react'
import Button from './Button'

export default function ContactFormNew() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2"
          style={{ color: 'var(--text)' }}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-[10px] font-ui text-base border transition-all duration-150 focus:outline-none focus:ring-1"
          style={{
            backgroundColor: 'var(--surface-subtle)',
            borderColor: 'var(--border-medium)',
            color: 'var(--text)',
          }}
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2"
          style={{ color: 'var(--text)' }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-[10px] font-ui text-base border transition-all duration-150 focus:outline-none focus:ring-1"
          style={{
            backgroundColor: 'var(--surface-subtle)',
            borderColor: 'var(--border-medium)',
            color: 'var(--text)',
          }}
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
          style={{ color: 'var(--text)' }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-[10px] font-ui text-base border transition-all duration-150 focus:outline-none focus:ring-1 resize-none"
          style={{
            backgroundColor: 'var(--surface-subtle)',
            borderColor: 'var(--border-medium)',
            color: 'var(--text)',
          }}
          placeholder="Tell me about your project..."
        />
      </div>

      <Button variant="primary" className="w-full">
        {submitted ? 'Sent – thank you' : 'Send Message'}
      </Button>
    </form>
  )
}
