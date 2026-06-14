import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sandusarani Senadeera | Full-Stack Web Developer",
  description:
    "Portfolio of Sandusarani Senadeera — BSc IT (Software Engineering) undergraduate, Full-Stack Developer, Mobile App Developer, UI/UX Designer, and QA Automation enthusiast based in Colombo, Sri Lanka.",
  keywords: [
    "Sandusarani Senadeera",
    "Full-Stack Developer",
    "Frontend Developer",
    "Mobile Developer",
    "QA Automation",
    "Portfolio",
    "SLIIT",
    "Sri Lanka",
  ],
  authors: [{ name: "Sandusarani Senadeera" }],
  openGraph: {
    title: "Sandusarani Senadeera | Portfolio",
    description:
      "Full-Stack Web Developer & IT Undergraduate — explore my projects, skills, and services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
