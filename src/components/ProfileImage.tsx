"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ProfileImageProps = {
  size?: "sm" | "md" | "lg";
  priority?: boolean;
  className?: string;
};

const sizes = {
  sm: "h-44 w-44 md:h-52 md:w-52",
  md: "h-56 w-56 md:h-64 md:w-64",
  lg: "h-72 w-72 md:h-96 md:w-96",
};

export default function ProfileImage({
  size = "lg",
  priority = false,
  className = "",
}: ProfileImageProps) {
  return (
    <motion.div
      className={`relative ${sizes[size]} shrink-0 ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className="absolute inset-0 scale-110 rounded-full bg-brand-orange/25 blur-3xl"
        aria-hidden
      />
      <div className="relative h-full w-full">
        <Image
          src="/images/profile.png"
          alt="Sandusarani Senadeera"
          fill
          priority={priority}
          unoptimized
          className="object-contain drop-shadow-[0_0_30px_rgba(255,95,31,0.5)]"
          sizes={size === "lg" ? "384px" : size === "md" ? "256px" : "208px"}
        />
      </div>
    </motion.div>
  );
}
