"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TypewriterRolesProps = {
  roles: string[];
  className?: string;
};

export default function TypewriterRoles({
  roles,
  className = "",
}: TypewriterRolesProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 400 : 2000;

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1),
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <p className={`text-xl font-medium text-brand-orange md:text-2xl ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={roleIndex}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          className="inline-block min-h-[2rem] md:min-h-[2.5rem]"
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-0.5 inline-block text-brand-orange"
          >
            |
          </motion.span>
        </motion.span>
      </AnimatePresence>
    </p>
  );
}
