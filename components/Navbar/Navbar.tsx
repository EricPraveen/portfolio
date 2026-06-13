"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[999] transition-all duration-300"
        style={{
          background: scrolled ? "rgba(2, 2, 9, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="container-custom flex items-center justify-between h-20">
          <motion.button
            onClick={() => handleNavClick("#home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            EricPraveen
          </motion.button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ name, href }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <motion.button
                  key={name}
                  onClick={() => handleNavClick(href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
                  style={{ color: isActive ? "#00d4ff" : "rgba(255,255,255,0.65)" }}
                >
                  {name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                      style={{ background: "linear-gradient(90deg, #00d4ff, #a855f7)" }}
                    />
                  )}
                </motion.button>
              );
            })}

            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-5 py-2 text-sm font-medium rounded-full"
              style={{ border: "1px solid #00d4ff", color: "#00d4ff" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00d4ff";
                e.currentTarget.style.color = "#020209";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#00d4ff";
              }}
            >
              Resume
            </motion.a>
          </div>

          <motion.button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-[2px] w-6 rounded-full"
                style={{ background: "#00d4ff" }}
                animate={{
                  rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                  y: menuOpen && i === 0 ? 7 : menuOpen && i === 2 ? -7 : 0,
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-[998] md:hidden"
            style={{
              background: "rgba(2, 2, 9, 0.95)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map(({ name, href }) => (
                <button
                  key={name}
                  onClick={() => handleNavClick(href)}
                  className="text-left py-2 text-base font-medium"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {name}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                className="mt-2 py-2 text-center rounded-full text-sm font-medium"
                style={{ border: "1px solid #00d4ff", color: "#00d4ff" }}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
