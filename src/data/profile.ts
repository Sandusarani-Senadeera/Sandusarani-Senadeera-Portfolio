export const profile = {
  firstName: "Sandusarani",
  lastName: "Senadeera",
  fullName: "Sandusarani Senadeera",
  title: "Full-Stack Web Developer",
  rotatingRoles: [
    "QA Tester",
    "Mobile App Developer",
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "UI/UX Designer",
  ],
  cvPath: "/cv/Sandusarani-Senadeera-CV.pdf",
  tagline:
    "BSc (Hons) in Information Technology (Software Engineering) Undergraduate",
  roles: [
    "QA Tester",
    "Mobile App Developer",
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "UI/UX Designer",
  ],
  location: "Colombo, Western Province, Sri Lanka",
  email: "sandusaranisenadeera@gmail.com",
  education: {
    school: "St. Joseph's Girls' School, Nugegoda",
    degree: "BSc (Hons) in Information Technology — Software Engineering",
    institution: "SLIIT — Faculty of Computing",
    period: "2023 – 2027",
  },
  bio: "Passionate IT undergraduate specializing in software engineering with hands-on experience across frontend, full-stack, mobile, and QA automation. I build user-centered digital products — from hospital management systems and banking platforms to Android apps and automated test suites — while continuously learning industry-relevant skills through projects, hackathons, and open-source contributions.",
  aboutExtended:
    "I focus on turning real-world problems into clean, scalable software. My work spans web development with React and Next.js, backend APIs with Spring Boot, Android apps with Kotlin, and QA automation with Python and Selenium. I believe success in tech comes from balancing strong technical skills with communication, teamwork, and a growth mindset.",
  github: "https://github.com/Sandusarani-Senadeera",
  linkedin: "https://www.linkedin.com/in/sandusarani-senadeera-ab3560322",
  linkedinMessage:
    "https://www.linkedin.com/in/sandusarani-senadeera-ab3560322/",
  instagram:
    "https://www.instagram.com/sandu23s?igsh=MXZ1eWQ4aTNkNTlvMQ==",
  facebook: "https://www.facebook.com/share/195f81Kh4R/",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    href: profile.linkedin,
    icon: "linkedin" as const,
  },
  {
    name: "GitHub",
    href: profile.github,
    icon: "github" as const,
  },
  {
    name: "Instagram",
    href: profile.instagram,
    icon: "instagram" as const,
  },
  {
    name: "Facebook",
    href: profile.facebook,
    icon: "facebook" as const,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
