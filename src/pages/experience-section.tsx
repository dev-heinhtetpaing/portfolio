'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

import { experiences } from "@/api/data";
import { Building2, Calendar, GraduationCap, MapPin } from "lucide-react";
import { useActiveSection } from "@/hook/useActiveSection";

export function ExperienceSection() {

  const { ref } = useActiveSection("Experience", 0.2)

  return (
    <section ref={ref} id="experience" className="py-20 bg-background max-w-screen overflow-hidden">
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
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border " />
            <div className="space-y-8 w-full ">
              {experiences.map((exp, index) => {
                return (
                  <div
                    key={index}
                    className="w-full relative group "
                  >
                    {/* Timeline dot */}
                    <Badge className="absolute left-8  md:left-1/2 z-10 -translate-x-1/2 top-0 md:-translate-y-1/2 md:top-1/2  w-15 h-15 bg-accent  rounded-full shadow-md  border-3 border-white-200">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: [0.5, 1.5, 1] }}
                        transition={{ duration: 0.8, ease: "easeInOut", times: [0, 0.4, 1] }}
                        viewport={{ once: true }}
                      >
                        <exp.icon size={22} />
                      </motion.span>
                    </Badge>
                    <div className="w-full flex justify-end md:group:odd:flex-row md:group-even:flex-row-reverse md:justify-between items-center">
                      <div className="md:flex flex-grow justify-center hidden">
                        <motion.span
                          initial={{ opacity: 0, x: (index % 2 === 0) ? -100 : 100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100, damping: 13 }}
                          viewport={{ once: true }}
                          className="text-xl text-pretty text-muted-foreground">
                          {exp.period}
                        </motion.span>
                      </div>
                      <motion.span
                        initial={{ opacity: 0, x: (index % 2 === 0) ? 100 : -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100, damping: 13 }}
                        viewport={{ once: true }}
                        className="md:w-5/12 w-10/12"
                      ><Card className="  border-border bg-card hover:shadow-md transition-shadow duration-300 ">
                          <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <CardTitle className="text-foreground flex items-center gap-2">
                                {" "}
                                {exp.type === "work" ? (
                                  <Building2 size={32} className=" text-accent" />
                                ) : (
                                  <GraduationCap
                                    size={42}
                                    className=" text-accent"
                                  />
                                )}
                                {exp.title}
                              </CardTitle>
                              <Badge
                                variant="outline"
                                className="w-fit md:hidden "
                              >
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
                            <p className="text-foreground mb-4 leading-relaxed">
                              {exp.description}
                            </p>
                            <div className="space-y-2">
                              <h4 className="font-medium text-foreground text-sm">
                                Key Achievements:
                              </h4>
                              <ul className="space-y-1">
                                {exp.achievements.map((achievement, i) => (
                                  <li
                                    key={i}
                                    className="text-sm text-muted-foreground flex items-start gap-2"
                                  >
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card></motion.span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
