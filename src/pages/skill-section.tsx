'use client'

// import useActiveSection from "../hook/useActiveSection";
import { skills } from "@/api/data";
import { useActiveSection } from "@/hook/useActiveSection";
import type { Variants } from "motion/react";
import { motion } from "motion/react";

function Skills() {
  //   const { ref } = useActiveSection("Skills", 1);


  const FadeInAnimation: Variants = {
    initial: { y: 100, opacity: 0 },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 180, delay: 0.05 * index },
    }),

  };

  const { ref } = useActiveSection("Skills", 0.5)

  return (
    <section id="skills" ref={ref} className="py-20 scroll-mt-30 bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
            Skills
          </h2>
          <ul className="  flex flex-wrap items-center justify-center gap-4 ">
            {Boolean(skills.length) &&
              skills.map((skill, index) => (
                <motion.li
                  key={index}
                  variants={FadeInAnimation}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                  viewport={{ once: true }}
                  className="text-center items-center rounded-lg border bg-slate-50 shadow-sm  px-3 py-1 text-slate-600"
                >
                  {skill}
                </motion.li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;