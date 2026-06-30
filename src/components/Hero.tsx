"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import AnimatedHeroName from "./AnimatedHeroName";
import ProfileImage from "./ProfileImage";
import SocialLinks from "./SocialLinks";
import TypewriterRoles from "./TypewriterRoles";
import { profile } from "@/data/profile";

const helloText = "Hello!";

const letterVariants = {
  hidden: { opacity: 0, y: 24, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-20 sm:pt-24"
    >
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-72 w-72 rounded-full bg-brand-orange/5 blur-3xl" />

      <div className="mx-auto grid max-w-7xl flex-1 items-center gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <motion.p
            initial="hidden"
            animate="visible"
            className="mb-4 flex text-xs font-semibold tracking-[0.35em] text-brand-orange uppercase sm:text-sm"
          >
            {helloText.split("").map((char, i) => (
              <motion.span
                key={`hello-${i}`}
                custom={i}
                variants={letterVariants}
                className="inline-block origin-bottom"
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          <AnimatedHeroName />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mb-6"
          >
            <TypewriterRoles roles={profile.rotatingRoles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="mb-8 max-w-lg leading-relaxed text-gray-400"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="mb-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-brand-orange px-8 py-3 text-sm font-semibold text-black shadow-glow-orange transition-shadow hover:shadow-glow-orange-lg"
            >
              Let&apos;s talk
            </motion.a>
            <motion.a
              href={profile.cvPath}
              download ="Sandusarani_Senadeera_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full border-2 border-brand-orange px-8 py-3 text-sm font-semibold text-brand-orange transition-colors hover:bg-brand-orange hover:text-black"
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            <SocialLinks />
          </motion.div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <ProfileImage size="xl" priority />
        </div>
      </div>
    </section>
  );
}
