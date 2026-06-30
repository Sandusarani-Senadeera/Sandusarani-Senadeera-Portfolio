"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection>
          <SectionHeading title="My" highlight="Skills" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title}>
                <h3 className="mb-4 text-sm font-semibold tracking-wider text-brand-orange uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.05 * (categoryIndex * 3 + index),
                      }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-2 text-sm text-brand-orange"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
