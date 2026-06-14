export type ProjectCategory =
  | "qa"
  | "frontend"
  | "fullstack"
  | "mobile";

export type ProjectStatus = "completed" | "in-progress" | "ongoing";

export type Project = {
  name: string;
  description: string;
  url: string;
  language?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  stars?: number;
};

export const projectStatuses: {
  id: ProjectStatus | "all";
  label: string;
}[] = [
  { id: "all", label: "All Status" },
  { id: "completed", label: "Completed" },
  { id: "in-progress", label: "In Progress" },
  { id: "ongoing", label: "Ongoing" },
];

export const statusLabels: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  ongoing: "Ongoing",
};

export const projectCategories: {
  id: ProjectCategory;
  label: string;
}[] = [
  { id: "qa", label: "QA Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "mobile", label: "Mobile Development" },
];

/** Projects synced from https://github.com/Sandusarani-Senadeera */
export const projects: Project[] = [
  {
    name: "Sandusarani Senadeera Portfolio",
    description:
      "Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
    url: "https://github.com/Sandusarani-Senadeera/Sandusarani-Senadeera-Portfolio",
    language: "TypeScript",
    category: "frontend",
    status: "ongoing",
    stars: 0,
  },
  {
    name: "NexaTrust Bank",
    description:
      "Modern banking platform built with TypeScript — a full-featured fintech web application.",
    url: "https://github.com/Sandusarani-Senadeera/NexaTrust-Bank",
    language: "TypeScript",
    category: "fullstack",
    status: "in-progress",
    stars: 1,
  },
  {
    name: "pixelssuite-QA-Automation",
    description:
      "QA automation suite built with Python for automated web application testing.",
    url: "https://github.com/Sandusarani-Senadeera/pixelssuite-QA-Automation",
    language: "Python",
    category: "qa",
    status: "completed",
    stars: 1,
  },
  {
    name: "Maintenance Incident Ticketing",
    description:
      "Maintenance incident ticketing system (Spring Boot) for a Smart University System.",
    url: "https://github.com/Sandusarani-Senadeera/maintenance-incident-ticketing-Springboot-",
    language: "Java",
    category: "fullstack",
    status: "completed",
    stars: 1,
  },
  {
    name: "Ticket Purchasing Management",
    description:
      "Ticket purchasing management system for event handling, bookings, and administration.",
    url: "https://github.com/Sandusarani-Senadeera/Ticket-Purchasing-Management-System",
    language: "Java",
    category: "fullstack",
    status: "completed",
    stars: 1,
  },
  {
    name: "Virtual Network Infrastructure",
    description:
      "Virtual network infrastructure deployment covering cloud networking and DevOps configuration.",
    url: "https://github.com/Sandusarani-Senadeera/virtual-network-infrastructure-deployment",
    category: "fullstack",
    status: "completed",
    stars: 1,
  },
  {
    name: "Spring Boot Greeting API",
    description:
      "Spring Boot REST API with @GetMapping, @PathVariable, and @RequestParam endpoints.",
    url: "https://github.com/Sandusarani-Senadeera/spring-boot-Greeting-API",
    language: "Java",
    category: "fullstack",
    status: "completed",
    stars: 1,
  },
  {
    name: "Medi-care",
    description:
      "Hospital management system with patient portal, appointments, consultations, lab reports, and pharmacy modules.",
    url: "https://github.com/Sandusarani-Senadeera/Medi-care",
    language: "HTML",
    category: "frontend",
    status: "in-progress",
    stars: 1,
  },
  {
    name: "AI ChatBot",
    description:
      "Multimodal AI chatbot web app integrating Gemini AI for intelligent user experiences.",
    url: "https://github.com/Sandusarani-Senadeera/AI---ChatBot",
    language: "JavaScript",
    category: "frontend",
    status: "completed",
    stars: 1,
  },
  {
    name: "QR Code Generator",
    description:
      "Responsive QR code generator built with HTML, CSS, and JavaScript — enter text or URL and download instantly.",
    url: "https://github.com/Sandusarani-Senadeera/QR-code-Generator",
    language: "CSS",
    category: "frontend",
    status: "completed",
    stars: 1,
  },
  {
    name: "ITPM Assignment",
    description:
      "Industry project management assignment demonstrating software development lifecycle practices.",
    url: "https://github.com/Sandusarani-Senadeera/IT23546752-ITPM-Assignment-1",
    language: "JavaScript",
    category: "frontend",
    status: "completed",
    stars: 1,
  },
  {
    name: "PowerUp App",
    description:
      "Android workout app UI built with XML layouts following mobile UX best practices.",
    url: "https://github.com/Sandusarani-Senadeera/PowerUp-App",
    language: "Kotlin",
    category: "mobile",
    status: "completed",
    stars: 1,
  },
  {
    name: "Daily Habit Tracker",
    description:
      "Android habit tracker built with Kotlin and SharedPreferences for local data persistence.",
    url: "https://github.com/Sandusarani-Senadeera/Daily-Habit-Tracker",
    language: "Kotlin",
    category: "mobile",
    status: "completed",
    stars: 1,
  },
];
