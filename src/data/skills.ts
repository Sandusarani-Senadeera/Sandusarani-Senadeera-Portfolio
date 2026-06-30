import { Code2, Server, Smartphone, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SkillCategoryId =
  | "frontend"
  | "backend"
  | "mobile"
  | "tools-design";

export type Skill = {
  name: string;
  category: SkillCategoryId;
  categoryLabel: string;
  icon: LucideIcon;
};

export const skillTabs: {
  id: SkillCategoryId | "all";
  label: string;
}[] = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
  { id: "tools-design", label: "Tools & Design" },
];

export const skills: Skill[] = [
  {
    name: "JavaScript",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: Code2,
  },
  {
    name: "TypeScript",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: Code2,
  },
  {
    name: "React / Next.js",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: Code2,
  },
  {
    name: "Java / Spring Boot",
    category: "backend",
    categoryLabel: "Backend",
    icon: Server,
  },
  {
    name: "Kotlin / Android",
    category: "mobile",
    categoryLabel: "Mobile",
    icon: Smartphone,
  },
  {
    name: "Python / QA Automation",
    category: "tools-design",
    categoryLabel: "Tools & Design",
    icon: Palette,
  },
  {
    name: "Figma / UI-UX",
    category: "tools-design",
    categoryLabel: "Tools & Design",
    icon: Palette,
  },
];
