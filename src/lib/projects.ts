import { project_1, project_2, project_3, project_4 } from "@/api/data"

export interface ProjectTimelineItem {
  phase: string
  title: string
  description: string
  image?: string | null
}

export interface Project {
  projectId: string
  coverImage: string
  projectTitle: string
  projectSummary: string
  technologies: string[]
  timeline: ProjectTimelineItem[]
}

export interface ProjectEntry {
  slug: string
  data: Project
}

// Ordered newest -> oldest (matches numbering in data.ts)
export const projectList: ProjectEntry[] = [
  { slug: project_1[0].projectId, data: project_1[0] as Project },
  { slug: project_2[0].projectId, data: project_2[0] as Project },
  { slug: project_3[0].projectId, data: project_3[0] as Project },
  { slug: project_4[0].projectId, data: project_4[0] as Project },
]

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projectList.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projectList.map((p) => p.slug)
}

export interface ProjectNeighborSummary {
  slug: string
  title: string
  coverImage: string
}

export function getProjectNeighbors(slug: string): {
  prev: ProjectNeighborSummary | null
  next: ProjectNeighborSummary | null
} {
  const idx = projectList.findIndex((p) => p.slug === slug)
  if (idx === -1) return { prev: null, next: null }

  const toSummary = (p: ProjectEntry): ProjectNeighborSummary => ({
    slug: p.slug,
    title: p.data.projectTitle,
    coverImage: p.data.coverImage,
  })

  return {
    // List is newest -> oldest, so idx-1 is newer, idx+1 is older
    next: idx > 0 ? toSummary(projectList[idx - 1]) : null,
    prev:
      idx < projectList.length - 1
        ? toSummary(projectList[idx + 1])
        : null,
  }
}
