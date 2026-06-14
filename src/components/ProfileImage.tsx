"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ProfileImageProps = {
  size?: "sm" | "md" | "lg" | "xl";
  priority?: boolean;
  className?: string;
};

const sizes = {
  sm: "h-44 w-44 md:h-52 md:w-52",
  md: "h-56 w-56 md:h-64 md:w-64",
  lg: "h-72 w-72 md:h-96 md:w-96",
  xl: "h-[22rem] w-[22rem] sm:h-[26rem] sm:w-[26rem] md:h-[30rem] md:w-[30rem] lg:h-[34rem] lg:w-[34rem]",
};

const imageSizes = {
  sm: "208px",
  md: "256px",
  lg: "384px",
  xl: "544px",
};

export default function ProfileImage({
  size = "lg",
  priority = false,
  className = "",
}: ProfileImageProps) {
  return (
    <motion.div
      className={`relative aspect-square ${sizes[size]} shrink-0 ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full [transform:translateZ(0)]">
        <Image
          src="/images/profile.png"
          alt="Sandusarani Senadeera"
          fill
          priority={priority}
          unoptimized
          className="object-contain"
          sizes={imageSizes[size]}
        />
      </div>
    </motion.div>
  );
}
