import matter from 'gray-matter'

export interface SkillMetadata {
  name: string
  description: string
  metadata?: {
    'short-description'?: string
  }
}

export function parseSkillMarkdown(content: string) {
  const { data, content: markdownContent } = matter(content)

  return {
    metadata: data as SkillMetadata,
    content: markdownContent
  }
}
