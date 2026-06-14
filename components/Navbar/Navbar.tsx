"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/data";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(12,12,14,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        }}
      >
        <div className="container-custom flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 transition-opacity hover:opacity-75"
            aria-label="Go to home"
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, #6366f1, #818cf8)",
                color: "white",
                boxShadow: "0 0 16px rgba(99,102,241,0.3)",
              }}
            >
              E
            </div>
            <span className="hidden text-sm font-semibold tracking-tight sm:block" style={{ color: "#f0f0f5" }}>
              {personalInfo.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map(({ name, href }) => {
              const isActive = pathname === href || (pathname === "/" && href === "/");
              return (
                <Link
                  key={name}
                  href={href}
                  className={`nav-underline relative py-1 text-sm font-medium tracking-tight transition-colors duration-200 ${isActive ? "active" : ""}`}
                  style={{ color: isActive ? "#f0f0f5" : "#9898a8" }}
                >
                  {name}
                </Link>
              );
            })}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="btn-primary hidden sm:inline-flex"
              style={{ height: "2.25rem", padding: "0 1rem", fontSize: "0.825rem" }}
            >
              Resume
            </motion.a>

            {/* Mobile hamburger */}
            <button
              className="btn-icon lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="flex flex-col gap-[5px]">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="block h-[2px] w-5 rounded-full"
                    style={{ background: "#f0f0f5" }}
                    animate={{
                      rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                      y:      menuOpen && i === 0 ? 7  : menuOpen && i === 2 ? -7  : 0,
                      opacity: menuOpen && i === 1 ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-4 right-4 top-24 z-50 overflow-hidden rounded-2xl lg:hidden"
              style={{
                background: "rgba(20,20,23,0.96)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.55)",
              }}
            >
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map(({ name, href }) => {
                  const isActive = pathname === href || (pathname === "/" && href === "/");
                  return (
                    <Link
                      key={name}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors"
                      style={{
                        color:      isActive ? "#6366f1" : "#9898a8",
                        background: isActive ? "rgba(99,102,241,0.08)" : "transparent",
                      }}
                    >
                      {name}
                    </Link>
                  );
                })}
                <div className="mt-2 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                    Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
