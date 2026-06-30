"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import {
  projectCategories,
  projectStatuses,
  projects,
  type ProjectCategory,
  type ProjectStatus,
} from "@/data/projects";
import { profile } from "@/data/profile";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">(
    "all",
  );
  const [activeStatus, setActiveStatus] = useState<ProjectStatus | "all">(
    "all",
  );

  const filtered = projects.filter((p) => {
    const matchesCategory =
      activeCategory === "all" || p.category === activeCategory;
    const matchesStatus =
      activeStatus === "all" || p.status === activeStatus;
    return matchesCategory && matchesStatus;
  });

  const categoryTabs: { id: ProjectCategory | "all"; label: string }[] = [
    { id: "all", label: "All Projects" },
    ...projectCategories,
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="My"
            highlight="Portfolio"
            subtitle="Projects from my GitHub — updated when I upload new repos."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="-mx-4 mb-6 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
            <div className="flex min-w-max justify-start gap-2 sm:min-w-0 sm:flex-wrap sm:justify-center sm:gap-3">
              {categoryTabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors sm:px-5 sm:text-sm ${
                    activeCategory === tab.id
                      ? "bg-brand-orange text-black shadow-glow-orange-sm"
                      : "border border-white/10 text-gray-400 hover:border-brand-orange/40 hover:text-white"
                  }`}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="-mx-4 mb-8 overflow-x-auto px-4 sm:mx-0 sm:mb-10 sm:overflow-visible sm:px-0">
            <div className="flex min-w-max justify-start gap-2 sm:min-w-0 sm:flex-wrap sm:justify-center sm:gap-3">
              {projectStatuses.map((tab) => (
                <motion.button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveStatus(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors sm:px-5 sm:text-sm ${
                    activeStatus === tab.id
                      ? "border border-brand-orange bg-brand-orange/10 text-brand-orange"
                      : "border border-white/10 text-gray-400 hover:border-brand-orange/40 hover:text-white"
                  }`}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeStatus}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.url} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatedSection delay={0.2}>
          <div className="mt-12 text-center">
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="text-sm text-brand-orange hover:underline"
            >
              View all repos on GitHub →
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
