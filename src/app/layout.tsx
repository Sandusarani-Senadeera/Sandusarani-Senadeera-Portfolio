import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sandusaranisenadeera.online"),
  title: "Sandusarani Senadeera",
  description:
    "Portfolio of Sandusarani Senadeera - Information Technology undergraduate, Full-Stack Developer, Mobile App Developer, UI/UX Designer, and QA Automation enthusiast based in Colombo, Sri Lanka.",
  openGraph: {
    title: "Sandusarani Senadeera",
    description:
      "Full-Stack Web Developer & IT Undergraduate - explore my projects, skills, and services.",
    url: "https://www.sandusaranisenadeera.online",
    siteName: "Sandusarani Senadeera",
    images: [
      {
        url: "/images/profile.png",
        width: 1024,
        height: 1024,
        alt: "Sandusarani Senadeera portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandusarani Senadeera",
    description:
      "Full-Stack Web Developer & IT Undergraduate - explore my projects, skills, and services.",
    images: ["/images/profile.png"],
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