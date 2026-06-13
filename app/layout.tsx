import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EricPraveen | Full Stack Developer",
  description: "Portfolio of Alric Prashanth — Full Stack Developer from Sri Lanka. B.Sc. IT at University of Moratuwa. React, Node.js, Spring Boot specialist.",
  keywords: ["EricPraveen", "Alric Prashanth", "Full Stack Developer", "Sri Lanka", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Alric Prashanth" }],
  creator: "Alric Prashanth",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ericpraveen.vercel.app",
    title: "EricPraveen | Full Stack Developer",
    description: "Full Stack Developer from Sri Lanka. React, Node.js, Spring Boot.",
    siteName: "EricPraveen Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "EricPraveen | Full Stack Developer",
    description: "Full Stack Developer from Sri Lanka.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark-900 text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}