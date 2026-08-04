"use client"

import { useState } from 'react'

export default function ServicesForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    referralSource: '',
    serviceRequired: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with actual API call
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        contactNumber: '',
        referralSource: '',
        serviceRequired: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-neutral-900 dark:text-neutral-100"
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-neutral-900 dark:text-neutral-100"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Contact Number */}
      <div>
        <label htmlFor="contactNumber" className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
          Contact Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          required
          value={formData.contactNumber}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-neutral-900 dark:text-neutral-100"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      {/* Referral Source */}
      <div>
        <label htmlFor="referralSource" className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
          Referral Source <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="referralSource"
          name="referralSource"
          required
          value={formData.referralSource}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-neutral-900 dark:text-neutral-100"
          placeholder="How did you hear about us?"
        />
      </div>

      {/* Service Required */}
      <div>
        <label htmlFor="serviceRequired" className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
          Service Required <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceRequired"
          name="serviceRequired"
          required
          value={formData.serviceRequired}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-neutral-900 dark:text-neutral-100"
        >
          <option value="">Select a service</option>
          <option value="Individual Therapy">Individual Therapy</option>
          <option value="Couples Therapy">Couples Therapy</option>
          <option value="Supervision">Supervision</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
          What do you want to talk about? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-neutral-900 dark:text-neutral-100 resize-none"
          placeholder="Tell us about what you'd like to discuss..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-neutral-400 text-white font-medium rounded-lg transition-colors"
      >
        {isSubmitting ? 'Sending...' : 'Submit Request'}
      </button>

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg">
          <p className="text-green-800 dark:text-green-200 text-sm">
            Thank you! We'll get back to you within 2 working days to book a consultation call.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
          <p className="text-red-800 dark:text-red-200 text-sm">
            Something went wrong. Please try again or contact us directly.
          </p>
        </div>
      )}

      {/* Notice */}
      <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
        Post filling up this form, we will get back to you in 2 working days to book a consultation call.
      </p>
    </form>
  )
}
