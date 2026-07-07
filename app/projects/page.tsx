import type { Metadata } from "next"

import { ProjectsListing } from "./_components/projects-listing"

export const metadata: Metadata = {
  title: "Projects | Hein Htet Paing",
  description:
    "Selected full-stack projects I designed, built, and deployed end-to-end — from architecture and databases to CI/CD and pixel-perfect UI.",
  alternates: {
    canonical: "https://www.heinhtetpaing.com/projects",
  },
  openGraph: {
    title: "Projects | Hein Htet Paing",
    description:
      "Selected full-stack projects I designed, built, and deployed end-to-end.",
    url: "https://www.heinhtetpaing.com/projects",
    type: "website",
  },
}

export default function ProjectsPage() {
  return <ProjectsListing />
}
