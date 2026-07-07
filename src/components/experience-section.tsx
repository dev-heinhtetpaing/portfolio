'use client'

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  Calendar,
  GraduationCap,
  MapPin,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experiences } from "@/api/data";
import { experienceListDesc } from "@/lib/experiences";
import { useActiveSection } from "@/hook/useActiveSection";

type WorkItem = {
  kind: "work";
  slug: string;
  role: string;
  company: string;
  location: string;
  period: string;
  technologies: string[];
};

type EducationItem = {
  kind: "education";
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
};

type TimelineItem = WorkItem | EducationItem;

const educationItems: EducationItem[] = experiences
  .filter((e) => e.type === "education")
  .map((e) => ({
    kind: "education",
    title: e.title,
    company: e.company,
    location: e.location,
    period: e.period,
    description: e.description,
    achievements: e.achievements as unknown as string[],
  }));

const workItems: WorkItem[] = experienceListDesc.map((e) => ({
  kind: "work",
  slug: e.slug,
  role: e.data.role,
  company: e.data.company,
  location: e.data.location,
  period: e.data.period,
  technologies: e.data.technologies,
}));

const timelineItems: TimelineItem[] = [...workItems, ...educationItems];

export function ExperienceSection() {
  const { ref } = useActiveSection("Experience", 0.2);

  return (
    <section
      ref={ref}
      id="experience"
      className="py-20 bg-background max-w-screen overflow-hidden"
    >
      <div className="container mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and educational background in web
            development
          </p>
        </motion.div>

        <div className="w-full mx-auto">
          <div className="relative ">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border " />
            <div className="space-y-8 w-full ">
              {timelineItems.map((item, index) => {
                const Icon = item.kind === "work" ? Building2 : GraduationCap;
                return (
                  <div key={index} className="w-full relative group ">
                    <Badge className="absolute left-8  md:left-1/2 z-10 -translate-x-1/2 top-0 md:-translate-y-1/2 md:top-1/2  w-15 h-15 bg-accent  rounded-full shadow-md  border-3 border-white-200">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: [0.5, 1.5, 1] }}
                        transition={{
                          duration: 0.8,
                          ease: "easeInOut",
                          times: [0, 0.4, 1],
                        }}
                        viewport={{ once: true }}
                      >
                        <Icon size={22} />
                      </motion.span>
                    </Badge>
                    <div className="w-full flex justify-end md:group:odd:flex-row md:group-even:flex-row-reverse md:justify-between items-center">
                      <div className="md:flex grow justify-center hidden">
                        <motion.span
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -100 : 100,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 100,
                            damping: 13,
                          }}
                          viewport={{ once: true }}
                          className="text-xl text-pretty text-muted-foreground"
                        >
                          {item.period}
                        </motion.span>
                      </div>
                      <motion.span
                        initial={{
                          opacity: 0,
                          x: index % 2 === 0 ? 100 : -100,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          type: "spring",
                          stiffness: 100,
                          damping: 13,
                        }}
                        viewport={{ once: true }}
                        className="md:w-5/12 w-10/12"
                      >
                        {item.kind === "work" ? (
                          <WorkCard item={item} />
                        ) : (
                          <EducationCard item={item} />
                        )}
                      </motion.span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button asChild size="lg" className="group">
            <Link href="/experiences">
              Explore more
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <Link
      href={`/experiences/${item.slug}`}
      aria-label={`View details for ${item.role} at ${item.company}`}
      className="block"
    >
      <Card className="group/card border-border bg-card hover:border-accent/50 hover:shadow-md transition-all duration-300 gap-2 py-4">
        <CardHeader className="px-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <CardTitle className="text-foreground font-serif font-bold text-sm md:text-base leading-snug flex items-start gap-2">
                <Building2 size={16} className="text-accent shrink-0 mt-0.5" />
                <span className="min-w-0 flex-1 line-clamp-2 wrap-break-word">
                  {item.role}
                </span>
              </CardTitle>
              <CardDescription className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs">
                <span className="font-medium text-foreground/80">
                  {item.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </span>
              </CardDescription>
              <Badge variant="outline" className="w-fit md:hidden mt-2">
                <Calendar className="w-3 h-3 mr-1" />
                {item.period}
              </Badge>
            </div>
            <ArrowRight className="w-4 h-4 shrink-0 mt-1 text-muted-foreground transition-all group-hover/card:text-accent group-hover/card:translate-x-1" />
          </div>
        </CardHeader>
        <CardContent className="px-4">
          <div className="flex flex-wrap gap-1">
            {item.technologies.slice(0, 5).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-[10px] px-1.5 py-0"
              >
                {tech}
              </Badge>
            ))}
            {item.technologies.length > 5 && (
              <Badge
                variant="outline"
                className="text-[10px] px-1.5 py-0"
              >
                +{item.technologies.length - 5}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function EducationCard({ item }: { item: EducationItem }) {
  return (
    <Card className="  border-border bg-card hover:shadow-md transition-shadow duration-300 ">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <CardTitle className="text-foreground flex items-center gap-2">
            <GraduationCap size={42} className=" text-accent" />
            {item.title}
          </CardTitle>
          <Badge variant="outline" className="w-fit md:hidden ">
            <Calendar className="w-3 h-3 mr-1" />
            {item.period}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-4 text-muted-foreground">
          <span className="font-medium">{item.company}</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {item.location}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground mb-4 leading-relaxed">
          {item.description}
        </p>
        <div className="space-y-2">
          <h4 className="font-medium text-foreground text-sm">
            Key Achievements:
          </h4>
          <ul className="space-y-1">
            {item.achievements.map((achievement, i) => (
              <li
                key={i}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0 leading-relaxed" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
