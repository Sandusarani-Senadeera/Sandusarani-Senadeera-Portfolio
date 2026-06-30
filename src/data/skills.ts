export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["JavaScript", "TypeScript", "React / Next.js"],
  },
  {
    title: "Backend",
    skills: ["Java / Spring Boot"],
  },
  {
    title: "Mobile",
    skills: ["Kotlin / Android"],
  },
  {
    title: "Tools & Design",
    skills: ["Python / QA Automation", "Figma / UI-UX"],
  },
];
