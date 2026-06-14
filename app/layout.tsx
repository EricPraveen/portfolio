import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CursorGlow from "@/components/UI/CursorGlow";
import LoadingScreen from "@/components/UI/LoadingScreen";

export const metadata: Metadata = {
  title: "EricPraveen — Full Stack Developer",
  description: "Portfolio of Eric Praveen, a Full Stack Developer building modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen antialiased flex flex-col" style={{ backgroundColor: "#0c0c0e", color: "#f0f0f5" }}>
        <LoadingScreen />
        <CursorGlow />
        <Navbar />
        <main className="flex-grow pt-24 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}