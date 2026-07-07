"use client"

import { motion } from "motion/react"
import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Layers,
  MapPin,
  Sparkles,
  Wrench,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { experienceListDesc } from "@/lib/experiences"

export function ExperiencesListing() {
  const totalRoles = experienceListDesc.length
  const totalTech = new Set(
    experienceListDesc.flatMap((e) => e.data.technologies)
  ).size

  return (
    <section className="relative bg-background overflow-hidden pt-28 pb-24">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
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
            Professional Journey
          </div>
          <h1 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-5 leading-tight">
            Building <span className="text-accent">real systems</span>,
            <br className="hidden sm:block" /> one role at a time.
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            From my first frontend internship in Yangon to architecting
            production full-stack platforms in Dubai — here is the story of how
            I got here.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto">
            <StatCard
              icon={<Briefcase className="w-4 h-4" />}
              label="Roles"
              value={totalRoles.toString()}
            />
            <StatCard
              icon={<Layers className="w-4 h-4" />}
              label="Chapters"
              value={experienceListDesc
                .reduce((n, e) => n + e.data.timeline.length, 0)
                .toString()}
            />
            <StatCard
              icon={<Wrench className="w-4 h-4" />}
              label="Tech"
              value={`${totalTech}+`}
            />
          </div>
        </motion.header>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-linear-to-b from-accent/60 via-border to-transparent" />

          <ol className="space-y-10">
            {experienceListDesc.map((exp, i) => {
              const number = experienceListDesc.length - i
              return (
                <motion.li
                  key={exp.slug}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: Math.min(i * 0.05, 0.25),
                  }}
                  className="relative pl-16 md:pl-24 group"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-0 md:left-2 top-2">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center text-accent group-hover:border-accent/60 group-hover:shadow-md transition-all duration-300">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 text-[10px] font-bold bg-accent text-primary-foreground rounded-full min-w-5 h-5 px-1 flex items-center justify-center shadow ring-2 ring-background">
                        {number}
                      </span>
                    </div>
                  </div>

                  <Card className="border-border bg-card hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                    <CardContent className="space-y-5">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-1.5">
                            {exp.data.period}
                          </p>
                          <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground leading-snug">
                            {exp.data.role}
                          </h2>
                          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">
                              {exp.data.company}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.data.location}
                            </span>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="w-fit md:mt-2 shrink-0"
                        >
                          {exp.data.timeline.length} milestones
                        </Badge>
                      </div>

                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-4">
                        {exp.data.timeline[0]?.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.data.technologies.slice(0, 8).map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="text-[11px]"
                          >
                            {t}
                          </Badge>
                        ))}
                        {exp.data.technologies.length > 8 && (
                          <Badge variant="outline" className="text-[11px]">
                            +{exp.data.technologies.length - 8}
                          </Badge>
                        )}
                      </div>

                      <div className="pt-1">
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="group/btn -ml-3 hover:bg-accent/10 hover:text-accent"
                        >
                          <Link href={`/experiences/${exp.slug}`}>
                            Read the full story
                            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.li>
              )
            })}
          </ol>
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
