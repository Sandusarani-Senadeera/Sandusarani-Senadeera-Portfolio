"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import {
  skillGroups,
  skillTabs,
  skills,
  type SkillCategoryId,
} from "@/data/skills";

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

        {/* Mobile: grouped list — no filter pills */}
        <div className="space-y-5 md:hidden">
          {skillGroups.map((group) => (
            <AnimatedSection key={group.id}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <group.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {group.title}
                  </h3>
                </div>
                <ul>
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 border-b border-white/5 px-4 py-3.5 last:border-b-0"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tablet & desktop: filter tabs + card grid */}
        <div className="hidden md:block">
          <AnimatedSection delay={0.1}>
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {skillTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
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

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-sm transition-colors hover:border-brand-orange/40"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-black">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold leading-snug text-white">
                    {skill.name}
                  </p>
                  <p className="mt-1.5 text-xs font-medium tracking-wide text-brand-orange uppercase">
                    {skill.categoryLabel}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
