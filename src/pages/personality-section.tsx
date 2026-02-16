'use client'

import { motion } from "motion/react"
import { Code2 } from "lucide-react"
import { interests, values } from "@/api/data"
import { useActiveSection } from "@/hook/useActiveSection"
export function PersonalitySection() {

  const { ref } = useActiveSection("Personal", 0.3)
  return (
    <section ref={ref} id="personal" className="py-20 bg-muted/30 max-w-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Beyond the Code
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the developer - my passions, values, and what drives me to create amazing
            digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Image and Quote */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/MyGeneratePassportPhoto.png" alt="Hein Htet Paing's photo" className="object-cover " />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-lg italic text-muted-foreground mb-4">
                "I believe great software is born from the perfect blend of technical excellence, creative thinking, and
                genuine care for the people who will use it."
              </p>
              <footer className="text-sm font-medium">— My Development Philosophy</footer>
            </motion.blockquote>
          </motion.div>

          {/* Interests and Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Interests */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-primary" />
                When I'm Not Coding
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <interest.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{interest.label}</h4>
                        <p className="text-sm text-muted-foreground">{interest.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">What I Value</h3>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-muted/50 rounded-lg p-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
