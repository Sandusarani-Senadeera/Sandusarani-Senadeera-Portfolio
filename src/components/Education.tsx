"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";
import { profile } from "@/data/profile";

export default function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <AnimatedSection>
          <SectionHeading
            title="My"
            highlight="Education"
            subtitle="Academic background  — building strong foundations in IT and software engineering."
          />
        </AnimatedSection>

        <div className="relative space-y-8">
          <div
            className="absolute left-[1.15rem] top-2 hidden h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-brand-orange via-brand-orange/40 to-transparent md:block"
            aria-hidden
          />

          {education.map((item, index) => (
            <AnimatedSection key={item.institution} delay={index * 0.15}>
              <motion.div
                whileHover={{ x: 6 }}
                className="relative flex gap-6 md:gap-8"
              >
                <div className="relative z-10 hidden shrink-0 md:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-orange bg-black shadow-glow-orange-sm">
                    <GraduationCap size={18} className="text-brand-orange" />
                  </div>
                </div>

                <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-brand-orange/40">
                  <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {item.institution}
                    </h3>
                    <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-medium text-brand-orange">
                      {item.period}
                    </span>
                  </div>

                  <p className="mb-1 font-medium text-brand-orange">
                    {item.degree}
                    {item.field && (
                      <span className="text-gray-400"> — {item.field}</span>
                    )}
                  </p>

                  {item.location && (
                    <p className="mb-3 flex items-center gap-1.5 text-sm text-gray-500">
                      <MapPin size={14} className="text-brand-orange" />
                      {item.location}
                    </p>
                  )}

                  {item.description && (
                    <p className="text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-2 text-sm text-brand-orange hover:underline"
          >
            <Calendar size={16} />
            View full profile on LinkedIn
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
