import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SocialEdge | Elite Digital Partner & Engineering Agency",
  description: "We engineering premium digital solutions, custom React/Next.js architectures, custom CRMs, mobile applications, and luxury brand design assets tailored to scale enterprise influence.",
  keywords: ["digital agency", "web development", "UI/UX design", "SaaS development", "mobile apps", "React", "Next.js", "branding"],
  authors: [{ name: "SocialEdge Team" }],
  openGraph: {
    title: "SocialEdge | Elite Digital Partner & Engineering Agency",
    description: "We engineering premium digital solutions, custom React/Next.js architectures, custom CRMs, mobile applications, and luxury brand design assets tailored to scale enterprise influence.",
    type: "website",
    locale: "en_US",
    url: "https://socialedge.agency",
    siteName: "SocialEdge",
  },
  twitter: {
    card: "summary_large_image",
    title: "SocialEdge | Elite Digital Partner & Engineering Agency",
    description: "We engineering premium digital solutions, custom React/Next.js architectures, custom CRMs, mobile applications, and luxury brand design assets tailored to scale enterprise influence.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
