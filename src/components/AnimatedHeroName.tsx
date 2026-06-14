"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const spring = { type: "spring" as const, stiffness: 260, damping: 20 };

function OrangeLetter({
  char,
  index,
  delay,
}: {
  char: string;
  index: number;
  delay: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay + index * 0.055,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.2 } }}
      className="inline-block text-brand-orange"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export default function AnimatedHeroName() {
  return (
    <motion.h1
      className="mb-2 font-bold leading-[1.1] tracking-tight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Line 1: I'm Sandusarani */}
      <div className="flex flex-wrap items-baseline gap-x-[0.35em] text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
        <motion.span
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          className="text-white"
        >
          I&apos;m
        </motion.span>

        <span aria-label={profile.firstName}>
          {profile.firstName.split("").map((char, i) => (
            <OrangeLetter key={`f-${i}`} char={char} index={i} delay={0.45} />
          ))}
        </span>
      </div>

      {/* Line 2: Senadeera */}
      <motion.div
        className="mt-1 text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        aria-label={profile.lastName}
      >
        {profile.lastName.split("").map((char, i) => (
          <OrangeLetter key={`l-${i}`} char={char} index={i} delay={1.05} />
        ))}
      </motion.div>
    </motion.h1>
  );
}
