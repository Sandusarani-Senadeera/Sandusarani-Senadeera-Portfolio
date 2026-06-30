"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/profile";

const NAV_OFFSET = 80;

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;

  const top =
    section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollToSection(href.replace("#", ""));
    closeMobileMenu();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) closeMobileMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [closeMobileMenu]);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        mobileOpen || scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-brand-orange/5"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="relative z-50 text-lg font-bold lowercase text-white sm:text-xl"
        >
          sandu<span className="text-brand-orange">.</span>
        </a>

        <ul className="hidden items-center gap-x-4 lg:flex xl:gap-x-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-brand-orange xl:text-[0.9375rem] ${
                  activeSection === link.href
                    ? "text-brand-orange"
                    : "text-gray-300"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={closeMobileMenu}
            />

            <motion.div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="relative z-40 max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-black/98 lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex min-h-12 items-center rounded-xl px-4 text-base font-medium transition-colors ${
                        activeSection === link.href
                          ? "bg-brand-orange/10 text-brand-orange"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
