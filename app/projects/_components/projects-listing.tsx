"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, FolderKanban, Layers, Sparkles, Wrench } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { projectList } from "@/lib/projects"

export function ProjectsListing() {
  const totalProjects = projectList.length
  const totalPhases = projectList.reduce(
    (n, p) => n + p.data.timeline.length,
    0
  )
  const totalTech = new Set(
    projectList.flatMap((p) => p.data.technologies)
  ).size

  return (
    <section className="relative bg-background overflow-hidden pt-28 pb-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/2 right-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-medium mb-5 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Selected Work
          </div>
          <h1 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 leading-tight">
            Projects that <span className="text-accent">shipped</span>,
            <br className="hidden sm:block" /> not just prototypes.
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Real production systems I designed, built, and deployed end-to-end —
            from architecture and databases to CI/CD and the pixel on your
            screen.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto">
            <StatCard
              icon={<FolderKanban className="w-4 h-4" />}
              label="Projects"
              value={totalProjects.toString()}
            />
            <StatCard
              icon={<Layers className="w-4 h-4" />}
              label="Phases"
              value={totalPhases.toString()}
            />
            <StatCard
              icon={<Wrench className="w-4 h-4" />}
              label="Tech"
              value={`${totalTech}+`}
            />
          </div>
        </motion.header>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {projectList.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.08, 0.3) }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block group h-full"
                aria-label={`View project: ${project.data.projectTitle}`}
              >
                <Card className="h-full overflow-hidden border-border bg-card hover:border-accent/40 hover:shadow-xl transition-all duration-300 py-0 gap-0">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <Image
                      src={project.data.coverImage}
                      alt={project.data.projectTitle}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/85 backdrop-blur text-[10px] font-medium uppercase tracking-widest text-foreground border border-border/60">
                      <FolderKanban className="w-3 h-3 text-accent" />
                      Case study
                    </div>
                  </div>

                  <CardContent className="p-5 md:p-6 flex flex-col gap-4 flex-1">
                    <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground leading-snug group-hover:text-accent transition-colors">
                      {project.data.projectTitle}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3">
                      {project.data.projectSummary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.data.technologies.slice(0, 6).map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="text-[11px]"
                        >
                          {t}
                        </Badge>
                      ))}
                      {project.data.technologies.length > 6 && (
                        <Badge variant="outline" className="text-[11px]">
                          +{project.data.technologies.length - 6}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-1 text-sm">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest">
                        {project.data.timeline.length} phases
                      </span>
                      <span className="flex items-center gap-1 font-medium text-accent">
                        View project
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-lg border border-border bg-card/60 backdrop-blur-sm px-3 py-3 text-left">
      <div className="text-accent flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-medium">
        {icon}
        {label}
      </div>
      <div className="mt-1 font-serif font-bold text-2xl text-foreground">
        {value}
      </div>
    </div>
  )
}
