"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ProfileImage from "./ProfileImage";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <AnimatedSection>
          <SectionHeading title="About" highlight="Me" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-col items-center text-center">
            <ProfileImage size="sm" />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-6 text-lg font-medium text-brand-orange"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 max-w-2xl leading-relaxed text-gray-400"
            >
              {profile.aboutExtended}
            </motion.p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {profile.roles.map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-xs text-brand-orange"
                >
                  {role}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-brand-orange px-8 py-3 text-sm font-semibold text-black shadow-glow-orange"
              >
                Hire Me
              </motion.a>
              <motion.a
                href={profile.cvPath}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full border-2 border-brand-orange px-8 py-3 text-sm font-semibold text-brand-orange transition-colors hover:bg-brand-orange hover:text-black"
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
