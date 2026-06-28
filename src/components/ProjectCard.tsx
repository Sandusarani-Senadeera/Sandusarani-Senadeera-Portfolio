"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import type { Project, ProjectStatus } from "@/data/projects";
import { statusLabels } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const statusStyles: Record<
  ProjectStatus,
  { badge: string; dot: string }
> = {
  completed: {
    badge: "bg-emerald-500/10 text-emerald-400",
    dot: "bg-emerald-400",
  },
  "in-progress": {
    badge: "bg-amber-500/10 text-amber-400",
    dot: "bg-amber-400",
  },
  ongoing: {
    badge: "bg-sky-500/10 text-sky-400",
    dot: "bg-sky-400",
  },
};

function ProjectImageFallback({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase() || "?";

  return (
    <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-brand-orange/20 via-white/5 to-white/10">
      <span className="text-4xl font-bold text-brand-orange/80">{initial}</span>
    </div>
  );
}

function ProjectCardImage({
  src,
  alt,
  priority,
  onError,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  onError?: () => void;
}) {
  const isSvg = src.toLowerCase().endsWith(".svg");

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      unoptimized={isSvg}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className={`${isSvg ? "object-contain" : "object-cover"} transition-transform duration-300 group-hover:scale-105`}
      onError={onError}
    />
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const gallery =
    project.images && project.images.length > 0 ? project.images : [project.image];
  const [imageError, setImageError] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const showImage = gallery[0] && !imageError;
  const hasGallery = gallery.length > 1;

  useEffect(() => {
    if (!hasGallery) return;

    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % gallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [gallery.length, hasGallery]);

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
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-brand-orange/50 hover:bg-white/10"
    >
      <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-black/20">
        {showImage ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={gallery[activeImage]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <ProjectCardImage
                  src={gallery[activeImage]}
                  alt={`${project.name} preview ${activeImage + 1}`}
                  priority={index < 3 && activeImage === 0}
                  onError={() => setImageError(true)}
                />
              </motion.div>
            </AnimatePresence>
            {hasGallery && (
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {gallery.map((image, imageIndex) => (
                  <button
                    key={image}
                    type="button"
                    aria-label={`Show image ${imageIndex + 1}`}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      setActiveImage(imageIndex);
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      imageIndex === activeImage
                        ? "w-5 bg-brand-orange"
                        : "w-1.5 bg-white/35 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <ProjectImageFallback name={project.name} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-brand-orange">
            {project.name}
          </h3>
          <ExternalLink
            size={18}
            className="shrink-0 text-gray-500 transition-colors group-hover:text-brand-orange"
          />
        </div>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${statusStyles[project.status].badge}`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${statusStyles[project.status].dot}`}
            />
            {statusLabels[project.status]}
          </span>
          {project.language && (
            <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs text-brand-orange">
              {project.language}
            </span>
          )}
          {project.stars !== undefined && project.stars > 0 && (
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Star size={12} className="text-brand-orange" />
              {project.stars}
            </span>
          )}
        </div>
      </div>
    </motion.a>
  );
}
