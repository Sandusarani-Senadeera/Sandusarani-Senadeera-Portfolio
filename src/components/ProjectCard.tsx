"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-brand-orange/50 hover:bg-white/10"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-brand-orange transition-colors">
          {project.name}
        </h3>
        <ExternalLink
          size={18}
          className="shrink-0 text-gray-500 group-hover:text-brand-orange transition-colors"
        />
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
        {project.description}
      </p>
      <div className="flex items-center gap-3 text-xs text-gray-500">
        {project.language && (
          <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-brand-orange">
            {project.language}
          </span>
        )}
        {project.stars !== undefined && (
          <span className="flex items-center gap-1">
            <Star size={12} className="text-brand-orange" />
            {project.stars}
          </span>
        )}
      </div>
    </motion.a>
  );
}
