"use client"

import React from 'react'

type Feature = {
  title: string
  description: string
  content: React.ReactNode
}

const Skill: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div className="bg-neutral-800/50 rounded-lg p-6 mb-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-neutral-100">{feature.title}</h3>
          <p className="text-sm text-neutral-300 mt-1">{feature.description}</p>
        </div>
      </div>
      <div className="mt-4">
        {feature.content}
      </div>
    </div>
  )
}

export default Skill