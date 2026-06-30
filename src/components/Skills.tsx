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
          <div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 sm:gap-3">
            {skillTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-3 py-2 text-xs font-medium transition-colors sm:px-5 sm:py-2.5 sm:text-sm ${
                  activeTab === tab.id
                    ? "bg-brand-orange text-black shadow-glow-orange-sm"
                    : "border border-white/10 text-gray-400 hover:border-brand-orange/40 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition-colors hover:border-brand-orange/40 min-[480px]:flex-col min-[480px]:items-center min-[480px]:text-center min-[480px]:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-black">
                  <skill.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1 min-[480px]:flex-none">
                  <p className="text-sm font-semibold leading-snug text-white sm:text-base">
                    {skill.name}
                  </p>
                  <p className="mt-1 text-[10px] font-medium tracking-wide text-brand-orange uppercase sm:text-xs">
                    {skill.categoryLabel}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
