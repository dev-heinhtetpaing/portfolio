"use client"

import Link from "next/link"
import { motion } from "motion/react"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  MapPin,
  Sparkles,
  Wrench,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Experience, NeighborSummary } from "@/lib/experiences"

interface ExperienceDetailProps {
  data: Experience
  prev: NeighborSummary | null
  next: NeighborSummary | null
}

export function ExperienceDetail({ data, prev, next }: ExperienceDetailProps) {
  return (
    <div className="relative bg-background overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[80%] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-24">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="group -ml-3 text-muted-foreground hover:text-foreground"
          >
            <Link href="/experiences">
              <ArrowLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-1" />
              All experiences
            </Link>
          </Button>
        </motion.div>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-medium mb-5 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            A chapter of the journey
          </div>
          <h1 className="font-serif font-black text-3xl md:text-5xl leading-tight text-foreground">
            {data.role}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-accent font-serif font-bold">
            {data.company}
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {data.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {data.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              {data.timeline.length} milestones
            </span>
          </div>
        </motion.header>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <Card className="border-border bg-card">
              <CardContent className="space-y-4">
                <SidebarRow
                  icon={<Calendar className="w-4 h-4" />}
                  label="Period"
                  value={data.period}
                />
                <SidebarRow
                  icon={<MapPin className="w-4 h-4" />}
                  label="Location"
                  value={data.location}
                />
                <SidebarRow
                  icon={<Building2 className="w-4 h-4" />}
                  label="Company"
                  value={data.company}
                />
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="space-y-3">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 font-medium">
                  <Wrench className="w-3.5 h-3.5" />
                  Tech stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {data.technologies.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="text-[11px]"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hidden lg:block">
              <CardContent className="space-y-3">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  Milestones
                </div>
                <ol className="space-y-2.5">
                  {data.timeline.map((item, idx) => (
                    <li
                      key={`${item.phase}-${idx}`}
                      className="flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-md bg-accent/10 text-accent text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs text-muted-foreground leading-snug">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </aside>

          {/* Timeline */}
          <main className="relative min-w-0">
            <div className="absolute left-6 md:left-7 top-2 bottom-2 w-px bg-linear-to-b from-accent/60 via-border to-transparent" />

            <ol className="space-y-6 md:space-y-8">
              {data.timeline.map((item, idx) => (
                <motion.li
                  key={`${item.phase}-${idx}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Numbered marker */}
                  <div className="absolute left-0 top-1">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent/10 border border-accent/30 text-accent font-serif font-bold text-base md:text-lg flex items-center justify-center shadow-sm">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <Card className="border-border bg-card hover:border-accent/40 hover:shadow-md transition-all duration-300">
                    <CardContent className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <Badge
                          variant="outline"
                          className="text-[11px] uppercase tracking-wider"
                        >
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </Badge>
                        <span className="text-[11px] text-muted-foreground uppercase tracking-widest">
                          {item.phase}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-lg md:text-xl text-foreground leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.li>
              ))}
            </ol>
          </main>
        </div>

        {/* Prev / Next */}
        <nav className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          <NeighborLink
            direction="prev"
            entry={prev}
            fallbackLabel="You've reached the earliest chapter"
          />
          <NeighborLink
            direction="next"
            entry={next}
            fallbackLabel="You're up to the latest chapter"
          />
        </nav>
      </div>
    </div>
  )
}

function SidebarRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-accent mt-0.5 shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
          {label}
        </p>
        <p className="text-sm text-foreground">{value}</p>
      </div>
    </div>
  )
}

function NeighborLink({
  direction,
  entry,
  fallbackLabel,
}: {
  direction: "prev" | "next"
  entry: NeighborSummary | null
  fallbackLabel: string
}) {
  const isNext = direction === "next"

  if (!entry) {
    return (
      <div
        className={`rounded-xl border border-dashed border-border/70 bg-card/40 px-5 py-4 text-sm text-muted-foreground ${
          isNext ? "md:text-right" : ""
        }`}
      >
        {fallbackLabel}
      </div>
    )
  }

  return (
    <Link
      href={`/experiences/${entry.slug}`}
      className={`group rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-md transition-all duration-300 px-5 py-4 block ${
        isNext ? "md:text-right" : ""
      }`}
    >
      <p
        className={`text-[10px] uppercase tracking-widest text-muted-foreground mb-1 flex items-center gap-1.5 font-medium ${
          isNext ? "md:justify-end" : ""
        }`}
      >
        {!isNext && <ArrowLeft className="w-3 h-3" />}
        {isNext ? "Newer chapter" : "Older chapter"}
        {isNext && <ArrowRight className="w-3 h-3" />}
      </p>
      <p className="font-serif font-bold text-foreground group-hover:text-accent transition-colors">
        {entry.role}
      </p>
      <p className="text-sm text-muted-foreground">{entry.company}</p>
    </Link>
  )
}
