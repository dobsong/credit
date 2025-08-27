import type { Reference } from './reference'

export interface DevelopmentSection {
  id: number
  sectionName: string
  prompts: string[]
  notes: string
  references: Reference[]
  links: { name: string; url: string }[]
  sectionText?: string
  freeTextLabel?: string
}
