"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, FolderKanban } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { projectList } from "@/lib/projects"
import { useActiveSection } from "@/hook/useActiveSection"

export function ProjectsSection() {
  const { ref } = useActiveSection("Projects", 0.5)

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-background max-w-screen overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A concise look at recent full-stack projects — click any card to
            explore the full case study.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto">
          {projectList.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: Math.min(index * 0.08, 0.24),
              }}
              viewport={{ once: true }}
            >
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`View case study: ${project.data.projectTitle}`}
                className="block group h-full"
              >
                <Card className="h-full border-border bg-card hover:border-accent/40 hover:shadow-md transition-all duration-300 overflow-hidden py-0 gap-0">
                  <div className="flex h-full">
                    <div className="relative w-28 sm:w-32 md:w-36 aspect-square shrink-0 bg-muted overflow-hidden">
                      <Image
                        src={project.data.coverImage}
                        alt={project.data.projectTitle}
                        fill
                        sizes="(max-width: 640px) 112px, 144px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                      <div className="absolute top-1.5 left-1.5 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-background/85 backdrop-blur text-[9px] font-medium uppercase tracking-widest text-foreground border border-border/50">
                        <FolderKanban className="w-2.5 h-2.5 text-accent" />
                        Case
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 p-3 md:p-4 flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif font-bold text-sm md:text-base text-foreground leading-snug line-clamp-2 min-w-0 flex-1 group-hover:text-accent transition-colors">
                          {project.data.projectTitle}
                        </h3>
                        <ArrowRight className="w-4 h-4 shrink-0 mt-0.5 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-1" />
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {project.data.projectSummary}
                      </p>

                      <div className="flex flex-wrap gap-1 mt-auto">
                        {project.data.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-[10px] px-1.5 py-0"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.data.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-[10px] px-1.5 py-0"
                          >
                            +{project.data.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              Explore more
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
