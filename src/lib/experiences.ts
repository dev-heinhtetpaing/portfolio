import {
  experience_1,
  experience_2,
  experience_3,
  experience_4,
} from "@/api/data"

export interface ExperienceTimelineItem {
  phase: string
  date: string
  title: string
  description: string
  image: string | null
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  technologies: string[]
  timeline: ExperienceTimelineItem[]
}

export interface ExperienceEntry {
  slug: string
  data: Experience
}

// Ordered oldest -> newest (matches chronology in data.ts)
export const experienceList: ExperienceEntry[] = [
  { slug: "promes-mm", data: experience_1[0] as Experience },
  { slug: "jm505-computer", data: experience_2[0] as Experience },
  { slug: "self-directed-2025", data: experience_3[0] as Experience },
  { slug: "house-and-hedges", data: experience_4[0] as Experience },
]

// Portfolio display order: newest first
export const experienceListDesc: ExperienceEntry[] = [...experienceList].reverse()

export function getExperienceBySlug(slug: string): ExperienceEntry | undefined {
  return experienceList.find((e) => e.slug === slug)
}

export function getAllExperienceSlugs(): string[] {
  return experienceList.map((e) => e.slug)
}

export interface NeighborSummary {
  slug: string
  role: string
  company: string
}

export function getExperienceNeighbors(slug: string): {
  prev: NeighborSummary | null
  next: NeighborSummary | null
} {
  const idx = experienceListDesc.findIndex((e) => e.slug === slug)
  if (idx === -1) return { prev: null, next: null }

  const toSummary = (e: ExperienceEntry): NeighborSummary => ({
    slug: e.slug,
    role: e.data.role,
    company: e.data.company,
  })

  return {
    // In desc order: index-1 is "newer", index+1 is "older"
    next: idx > 0 ? toSummary(experienceListDesc[idx - 1]) : null,
    prev:
      idx < experienceListDesc.length - 1
        ? toSummary(experienceListDesc[idx + 1])
        : null,
  }
}
