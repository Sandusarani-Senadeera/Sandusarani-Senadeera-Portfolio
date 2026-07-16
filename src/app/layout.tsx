import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sandusarani Senadeera",
  url: "https://www.sandusaranisenadeera.online",
  image: "https://www.sandusaranisenadeera.online/favicon-192x192.png",
  jobTitle: "Full-Stack Web Developer",
  email: "sandusaranisenadeera@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressRegion: "Western Province",
    addressCountry: "LK",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}