"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";
import { profile } from "@/data/profile";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(
      `https://www.linkedin.com/in/sandusarani-senadeera-ab3560322/`,
      "_blank",
    );
    form.reset();
  };

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
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-orange transition-colors"
                  >
                    Message me on LinkedIn
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
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-gray-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-orange"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-gray-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-orange"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-orange"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange py-3 font-semibold text-black shadow-glow-orange"
              >
                <Send size={18} />
                Send via LinkedIn
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
