import { notFound } from 'next/navigation'
import { promises as fs } from 'fs'
import path from 'path'
import SkillPageClient from './SkillPageClient'
import { parseSkillMarkdown } from '@/lib/markdown'

interface PageProps {
  params: Promise<{
    skillName: string
  }>
}

async function getSkillContent(skillName: string) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'skills', `${skillName}.md`)
    const fileContent = await fs.readFile(filePath, 'utf8')
    return parseSkillMarkdown(fileContent)
  } catch (error) {
    return null
  }
}

export async function generateStaticParams() {
  return [
    { skillName: 'therapist-site-scaffold' },
    { skillName: 'web-animation-design' }
  ]
}

export default async function SkillPage({ params }: PageProps) {
  const { skillName } = await params
  const skillData = await getSkillContent(skillName)

  if (!skillData) {
    notFound()
  }

  // Get gradient colors based on skill name
  const gradients: Record<string, { from: string; to: string }> = {
    'therapist-site-scaffold': { from: '#ec4899', to: '#8b5cf6' },
    'web-animation-design': { from: '#f59e0b', to: '#f97316' }
  }

  const gradient = gradients[skillName] || { from: '#3b82f6', to: '#8b5cf6' }

  return (
    <SkillPageClient
      skillName={skillName}
      metadata={skillData.metadata}
      content={skillData.content}
      gradientFrom={gradient.from}
      gradientTo={gradient.to}
    />
  )
}
