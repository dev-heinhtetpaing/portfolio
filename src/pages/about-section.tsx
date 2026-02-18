'use client'

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { Code, Database, Globe, Server } from "lucide-react";
import { useActiveSection } from "@/hook/useActiveSection";

const skills = [
  { name: "TypeScript", level: 82, icon: Code },
  { name: "React", level: 92, icon: Globe },
  { name: "Next", level: 80, icon: Server },
  { name: "Node.js", level: 85, icon: Database },
];

const codeSnippet = `const developer = {
  name: "Hein Htet Paing",
  role: "Full Stack Developer",
  skills: ["TypeScript", "React", "Next", "Node.js"],
  passion: "Building amazing web experiences",
  currentFocus: "Modern web architecture"
};`;

export function AboutSection() {

  const { ref } = useActiveSection("About", 0.5)

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/30 max-w-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="container mx-auto  w-full ">
          <div  className="w-full mx-auto grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
          <motion.div
          className="w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-foreground text-lg leading-relaxed word-wrap">
                I'm a passionate full-stack developer with over 2 years of
                experience building modern web applications. I specialize in
                creating scalable, performant solutions using the latest
                technologies and best practices.
              </p>

              <p className="text-muted-foreground leading-relaxed word-wrap">
                My expertise spans from crafting pixel-perfect user interfaces
                with React and TypeScript to building robust backend systems
                with Node.js and modern databases. I'm always exploring new
                technologies and methodologies to deliver exceptional results.
              </p>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <skill.icon className="w-5 h-5 text-accent" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-accent h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
          className="w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-muted-foreground ml-2">
                  developer.ts
                </span>
              </div>
              <pre className="text-sm text-foreground font-mono leading-relaxed overflow-x-auto">
                <code>{codeSnippet}</code>
              </pre>
            </Card>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Next",
                "Node.js",
                "Tailwind",
                "Shadcn/UI",
                "Prisma",
                "MongoDb",
              ].map((tech) => (
                <motion.div key={tech}>
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-accent/10 text-accent border-accent/20"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
