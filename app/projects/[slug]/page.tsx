import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ProjectDetail } from "../_components/project-detail"
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getProjectNeighbors,
} from "@/lib/projects"

interface RouteParams {
  slug: string
}

export function generateStaticParams(): RouteParams[] {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = getProjectBySlug(slug)

  if (!entry) {
    return {
      title: "Project not found | Hein Htet Paing",
    }
  }

  const { projectTitle, projectSummary, coverImage } = entry.data
  const title = `${projectTitle} | Hein Htet Paing`

  return {
    title,
    description: projectSummary,
    alternates: {
      canonical: `https://www.heinhtetpaing.com/projects/${slug}`,
    },
    openGraph: {
      title,
      description: projectSummary,
      url: `https://www.heinhtetpaing.com/projects/${slug}`,
      type: "article",
      images: coverImage
        ? [
            {
              url: coverImage,
              alt: projectTitle,
            },
          ]
        : undefined,
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<RouteParams>
}) {
  const { slug } = await params
  const entry = getProjectBySlug(slug)
  if (!entry) notFound()

  const { prev, next } = getProjectNeighbors(slug)

  return <ProjectDetail data={entry.data} prev={prev} next={next} />
}
