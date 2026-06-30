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

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <p className="mb-2 text-center text-xs font-medium tracking-wide text-gray-500 uppercase sm:mb-3">
        {label}
      </p>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {children}
      </div>
    </div>
  );
}

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
          <div className="mb-6 space-y-5 sm:mb-8 sm:space-y-6">
            <FilterGroup label="Category">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`rounded-full px-3 py-2 text-xs font-medium transition-colors sm:px-5 sm:py-2.5 sm:text-sm ${
                    activeCategory === tab.id
                      ? "bg-brand-orange text-black shadow-glow-orange-sm"
                      : "border border-white/10 text-gray-400 hover:border-brand-orange/40 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </FilterGroup>

            <FilterGroup label="Status">
              {projectStatuses.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveStatus(tab.id)}
                  className={`rounded-full px-3 py-2 text-xs font-medium transition-colors sm:px-5 sm:py-2.5 sm:text-sm ${
                    activeStatus === tab.id
                      ? "border border-brand-orange bg-brand-orange/10 text-brand-orange"
                      : "border border-white/10 text-gray-400 hover:border-brand-orange/40 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </FilterGroup>
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeStatus}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.url} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 text-center sm:mt-12">
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
