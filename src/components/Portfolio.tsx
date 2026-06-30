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

type FilterOption<T extends string> = {
  id: T;
  label: string;
  shortLabel?: string;
};

function FilterSelect<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: FilterOption<T>[];
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

function FilterGrid<T extends string>({
  label,
  options,
  value,
  onChange,
  columnsClass,
}: {
  label: string;
  options: FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
  columnsClass: string;
}) {
  return (
    <div>
      <p className="mb-2.5 text-xs font-semibold tracking-wider text-gray-500 uppercase">
        {label}
      </p>
      <div className={`grid gap-2 ${columnsClass}`}>
        {options.map((option) => {
          const isActive = value === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={`w-full rounded-xl px-2 py-2.5 text-center text-xs font-medium transition-colors sm:py-3 sm:text-sm ${
                isActive
                  ? "bg-brand-orange text-black shadow-glow-orange-sm"
                  : "border border-white/10 bg-white/[0.03] text-gray-400 hover:border-brand-orange/40 hover:text-white"
              }`}
            >
              {option.shortLabel ?? option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const categoryTabs: FilterOption<ProjectCategory | "all">[] = [
  { id: "all", label: "All Projects", shortLabel: "All" },
  ...projectCategories.map((category) => ({
    id: category.id,
    label: category.label,
    shortLabel:
      category.id === "mobile"
        ? "Mobile"
        : category.id === "qa"
          ? "QA"
          : category.label,
  })),
];

const statusTabs: FilterOption<ProjectStatus | "all">[] =
  projectStatuses.map((status) => ({
    id: status.id,
    label: status.label,
    shortLabel:
      status.id === "all"
        ? "All"
        : status.id === "in-progress"
          ? "In Progress"
          : status.label,
  }));

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
          {/* Phone: dropdown filters */}
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
              options={statusTabs}
            />
          </div>

          {/* Tablet & desktop: aligned filter panel */}
          <div className="mx-auto mb-8 hidden max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 md:block">
            <div className="space-y-4">
              <FilterGrid
                label="Category"
                options={categoryTabs}
                value={activeCategory}
                onChange={setActiveCategory}
                columnsClass="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
              />
              <div className="border-t border-white/10 pt-4">
                <FilterGrid
                  label="Status"
                  options={statusTabs}
                  value={activeStatus}
                  onChange={setActiveStatus}
                  columnsClass="grid-cols-2 lg:grid-cols-4"
                />
              </div>
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
