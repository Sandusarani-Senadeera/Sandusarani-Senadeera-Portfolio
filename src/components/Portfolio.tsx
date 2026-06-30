"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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

function FilterSelect<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: { id: T; label: string }[];
}) {
  return (
    <label className="block w-full">
      <span className="mb-2 block text-xs font-medium tracking-wide text-gray-500 uppercase">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value as T)}
          className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 py-3 pr-10 pl-4 text-sm text-white outline-none transition-colors focus:border-brand-orange/50"
        >
          {options.map((option) => (
            <option
              key={option.id}
              value={option.id}
              className="bg-black text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={18}
          className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
          aria-hidden
        />
      </div>
    </label>
  );
}

function FilterPills<T extends string>({
  options,
  value,
  onChange,
  activeStyle,
}: {
  options: { id: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  activeStyle: "solid" | "outline";
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {options.map((option) => {
        const isActive = value === option.id;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? activeStyle === "solid"
                  ? "bg-brand-orange text-black shadow-glow-orange-sm"
                  : "border border-brand-orange bg-brand-orange/10 text-brand-orange"
                : "border border-white/10 text-gray-400 hover:border-brand-orange/40 hover:text-white"
            }`}
          >
            {option.label}
          </button>
        );
      })}
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
          {/* Mobile: compact dropdown filters */}
          <div className="mb-6 space-y-3 md:hidden">
            <FilterSelect
              label="Category"
              value={activeCategory}
              onChange={setActiveCategory}
              options={categoryTabs}
            />
            <FilterSelect
              label="Status"
              value={activeStatus}
              onChange={setActiveStatus}
              options={projectStatuses}
            />
          </div>

          {/* Tablet & desktop: pill filters */}
          <div className="mb-8 hidden space-y-6 md:block">
            <div>
              <p className="mb-3 text-center text-xs font-medium tracking-wide text-gray-500 uppercase">
                Category
              </p>
              <FilterPills
                options={categoryTabs}
                value={activeCategory}
                onChange={setActiveCategory}
                activeStyle="solid"
              />
            </div>
            <div>
              <p className="mb-3 text-center text-xs font-medium tracking-wide text-gray-500 uppercase">
                Status
              </p>
              <FilterPills
                options={projectStatuses}
                value={activeStatus}
                onChange={setActiveStatus}
                activeStyle="outline"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeStatus}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
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
