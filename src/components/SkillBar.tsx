"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SkillBarProps = {
  name: string;
  level: number;
  index: number;
};

export default function SkillBar({ name, level, index }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold tracking-wider text-white uppercase">
          {name}
        </span>
        <span className="text-sm text-brand-orange">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-brand-orange shadow-glow-orange-sm"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
