// src/hooks/useGitHubProjects.ts
import { useQuery } from '@tanstack/react-query'
import type { GitHubRepo } from '@/types'

const GITHUB_USERNAME = 'AneeqMalik'

async function fetchRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12&direction=desc`,
    { headers: { Accept: 'application/vnd.github+json' } }
  )
  if (!res.ok) throw new Error(`GitHub API ${res.status}`)
  const data: GitHubRepo[] = await res.json()
  return data.filter(r => !r.fork)
}

export function useGitHubProjects() {
  return useQuery<GitHubRepo[], Error>({
    queryKey: ['github-repos', GITHUB_USERNAME],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 10,
    retry: 1,
  })
}
