"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import SkillBar from "./SkillBar";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection>
          <SectionHeading title="My" highlight="Skills" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                index={index}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
