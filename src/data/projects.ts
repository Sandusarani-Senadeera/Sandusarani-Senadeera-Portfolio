export type ProjectCategory =
  | "qa"
  | "frontend"
  | "fullstack"
  | "mobile";

export type Project = {
  name: string;
  description: string;
  url: string;
  language?: string;
  category: ProjectCategory;
  stars?: number;
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

export const projects: Project[] = [
  {
    name: "pixelssuite-QA-Automation",
    description:
      "QA automation suite built with Python for testing web applications — ensuring quality through automated test scripts.",
    url: "https://github.com/Sandusarani-Senadeera/pixelssuite-QA-Automation",
    language: "Python",
    category: "qa",
    stars: 1,
  },
  {
    name: "Medi-care",
    description:
      "Hospital Management System with user authentication, patient portal, appointment booking, online consultation, lab reports, and pharmacy modules.",
    url: "https://github.com/Sandusarani-Senadeera/Medi-care",
    language: "HTML",
    category: "frontend",
    stars: 1,
  },
  {
    name: "AI ChatBot",
    description:
      "Multimodal AI chatbot web app integrating Gemini AI for intelligent, richer user experiences on the web.",
    url: "https://github.com/Sandusarani-Senadeera/AI---ChatBot",
    language: "JavaScript",
    category: "frontend",
    stars: 1,
  },
  {
    name: "QR Code Generator",
    description:
      "Responsive QR code generator built with vanilla HTML, CSS, and JavaScript — enter text or URL and download instantly.",
    url: "https://github.com/Sandusarani-Senadeera/QR-code-Generator",
    language: "CSS",
    category: "frontend",
    stars: 1,
  },
  {
    name: "ITPM Assignment",
    description:
      "Industry project management assignment demonstrating structured software development lifecycle practices.",
    url: "https://github.com/Sandusarani-Senadeera/IT23546752-ITPM-Assignment-1",
    language: "JavaScript",
    category: "frontend",
    stars: 1,
  },
  {
    name: "NexaTrust Bank",
    description:
      "Modern banking platform built with TypeScript — a full-featured fintech web application with secure workflows.",
    url: "https://github.com/Sandusarani-Senadeera/NexaTrust-Bank",
    language: "TypeScript",
    category: "fullstack",
    stars: 1,
  },
  {
    name: "Maintenance Incident Ticketing",
    description:
      "Spring Boot maintenance incident ticketing system for a Smart University System — track and resolve campus issues.",
    url: "https://github.com/Sandusarani-Senadeera/maintenance-incident-ticketing-Springboot-",
    language: "Java",
    category: "fullstack",
    stars: 1,
  },
  {
    name: "Ticket Purchasing Management",
    description:
      "Event ticket purchasing and management system for handling event bookings, sales, and administration.",
    url: "https://github.com/Sandusarani-Senadeera/Ticket-Purchasing-Management-System",
    language: "Java",
    category: "fullstack",
    stars: 1,
  },
  {
    name: "Spring Boot Greeting API",
    description:
      "REST API demonstrating Spring Boot fundamentals with @GetMapping, @PathVariable, and @RequestParam endpoints.",
    url: "https://github.com/Sandusarani-Senadeera/spring-boot-Greeting-API",
    language: "Java",
    category: "fullstack",
    stars: 1,
  },
  {
    name: "Virtual Network Infrastructure",
    description:
      "Virtual network infrastructure deployment project covering cloud networking and DevOps configuration.",
    url: "https://github.com/Sandusarani-Senadeera/virtual-network-infrastructure-deployment",
    category: "fullstack",
    stars: 1,
  },
  {
    name: "PowerUp App",
    description:
      "Android workout app UI designed with XML layouts — clean, user-friendly interface following Android UX best practices.",
    url: "https://github.com/Sandusarani-Senadeera/PowerUp-App",
    language: "Kotlin",
    category: "mobile",
    stars: 1,
  },
  {
    name: "Daily Habit Tracker",
    description:
      "Android habit tracker built with Kotlin and SharedPreferences for lightweight local data persistence.",
    url: "https://github.com/Sandusarani-Senadeera/Daily-Habit-Tracker",
    language: "Kotlin",
    category: "mobile",
    stars: 1,
  },
];
