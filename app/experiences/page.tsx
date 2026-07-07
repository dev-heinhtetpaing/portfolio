import type { Metadata } from "next"

import { ExperiencesListing } from "./_components/experiences-listing"

export const metadata: Metadata = {
  title: "Experience | Hein Htet Paing",
  description:
    "A chronological walk through my roles — from my first frontend internship in Yangon to architecting production full-stack platforms in Dubai.",
  alternates: {
    canonical: "https://www.heinhtetpaing.com/experiences",
  },
  openGraph: {
    title: "Experience | Hein Htet Paing",
    description:
      "The roles, milestones, and technology that shaped my career as a full-stack developer.",
    url: "https://www.heinhtetpaing.com/experiences",
    type: "website",
  },
}

export default function ExperiencesPage() {
  return <ExperiencesListing />
}
