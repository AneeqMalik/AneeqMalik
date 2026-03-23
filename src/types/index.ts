// src/types/index.ts

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
  fork: boolean
}

export interface Skill {
  name: string
  level: number // 0–100
  category: 'frontend' | 'backend' | 'cloud' | 'database' | 'devops' | 'languages' | 'mobile' | 'core' | 'tools'
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  location: string
  type: 'full-time' | 'freelance' | 'contract' | 'part-time'
  bullets: string[]
}

export interface ClientProject {
  id: string
  title: string
  description: string
  icon: string
  outcome: string
  tags: string[]
  href: string
}

export interface Project {
  id: string
  title: string
  category: string
  icon: string
  description: string
  highlights: string[]
  tags: string[]
  github?: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'fiverr' | 'linkedin' | 'twitter'
}
