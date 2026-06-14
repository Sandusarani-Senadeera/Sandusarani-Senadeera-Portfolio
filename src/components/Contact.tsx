"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, ExternalLink, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";
import { profile } from "@/data/profile";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <AnimatedSection>
          <SectionHeading
            title="Get In"
            highlight="Touch"
            subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
          />
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-white transition-colors hover:text-brand-orange"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white">{profile.location}</p>
                </div>
              </div>

              <div>
                <p className="mb-4 text-sm text-gray-500">Connect with me</p>
                <SocialLinks />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  <LinkedInIcon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Message on LinkedIn
                  </h3>
                  <p className="text-sm text-gray-400">
                    Best way to reach me for projects & collaboration
                  </p>
                </div>
              </div>

              <p className="mb-6 leading-relaxed text-gray-400">
                I respond quickly on LinkedIn. Send me a direct message about
                job opportunities, freelance work, or anything you&apos;d like to
                discuss.
              </p>

              <div className="mt-auto space-y-3">
                <motion.a
                  href={profile.linkedinMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange py-3.5 font-semibold text-black shadow-glow-orange transition-shadow hover:shadow-glow-orange-lg"
                >
                  <MessageCircle size={18} />
                  Message me on LinkedIn
                </motion.a>

                <motion.a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-brand-orange/50 hover:text-brand-orange"
                >
                  View my LinkedIn profile
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
