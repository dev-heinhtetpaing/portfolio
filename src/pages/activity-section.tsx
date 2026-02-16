'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "motion/react"
import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react"
import { activities } from "@/api/data"


export function ActivitySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Development Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and milestones in web development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {activities.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block" />

                  <Card className="md:ml-16 border-border bg-card hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div className="flex items-center gap-2">
                          {exp.type === "work" ? (
                            <Building2 className="w-5 h-5 text-accent" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-accent" />
                          )}
                          <CardTitle className="text-foreground">{exp.title}</CardTitle>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>
                      <CardDescription className="flex items-center gap-4 text-muted-foreground">
                        <span className="font-medium">{exp.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground text-sm">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              {<achievement.Icon className="text-accent flex-shrink-0" />}
                              {achievement.value}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
