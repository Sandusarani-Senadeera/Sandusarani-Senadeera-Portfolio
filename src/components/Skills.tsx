"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { skillTabs, skills, type SkillCategoryId } from "@/data/skills";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategoryId | "all">("all");

  const filtered =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl sm:h-80 sm:w-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-brand-orange/5 blur-3xl sm:h-72 sm:w-72"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="My"
            highlight="Skills"
            subtitle="Technologies and tools I work with across web, mobile, and quality assurance."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="-mx-4 mb-8 overflow-x-auto px-4 sm:mx-0 sm:mb-10 sm:overflow-visible sm:px-0">
            <div className="flex min-w-max justify-start gap-2 sm:min-w-0 sm:flex-wrap sm:justify-center sm:gap-3">
              {skillTabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors sm:px-5 sm:py-2.5 sm:text-sm ${
                    activeTab === tab.id
                      ? "bg-brand-orange text-black shadow-glow-orange-sm"
                      : "border border-white/10 text-gray-400 hover:border-brand-orange/40 hover:text-white"
                  }`}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -8 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                className="group flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-sm transition-colors hover:border-brand-orange/40 sm:min-h-[128px] sm:p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-black sm:h-11 sm:w-11">
                  <skill.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold leading-snug text-white sm:text-base">
                  {skill.name}
                </p>
                <p className="mt-1.5 text-[10px] font-medium tracking-wide text-brand-orange uppercase sm:text-xs">
                  {skill.categoryLabel}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
