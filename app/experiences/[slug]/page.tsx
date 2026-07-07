import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ExperienceDetail } from "../_components/experience-detail"
import {
  getAllExperienceSlugs,
  getExperienceBySlug,
  getExperienceNeighbors,
} from "@/lib/experiences"

interface RouteParams {
  slug: string
}

export function generateStaticParams(): RouteParams[] {
  return getAllExperienceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = getExperienceBySlug(slug)

  if (!entry) {
    return {
      title: "Experience not found | Hein Htet Paing",
    }
  }

  const { role, company, period, location } = entry.data
  const title = `${role} · ${company} | Hein Htet Paing`
  const description = `${role} at ${company} (${period}, ${location}). A deep dive into the milestones, decisions, and technology that shaped this chapter of my career.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.heinhtetpaing.com/experiences/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.heinhtetpaing.com/experiences/${slug}`,
      type: "article",
    },
  }
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<RouteParams>
}) {
  const { slug } = await params
  const entry = getExperienceBySlug(slug)
  if (!entry) notFound()

  const { prev, next } = getExperienceNeighbors(slug)

  return <ExperienceDetail data={entry.data} prev={prev} next={next} />
}
