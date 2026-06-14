"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { navLinks, personalInfo } from "@/data";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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
          background: scrolled ? "rgba(12,12,14,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        }}
      >
        <div className="container-custom flex h-[72px] items-center justify-between">

          {/* Left - Logo & Name */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden p-0.5" style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}>
              <img src="/profile.jpeg" alt="Profile" className="w-full h-full object-cover rounded-full bg-[#141417]" />
            </div>
            <span className="hidden text-sm font-bold tracking-widest uppercase sm:block" style={{ color: "#f0f0f5", letterSpacing: "0.15em" }}>
              {personalInfo.name}
            </span>
          </Link>

          {/* Center - Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ name, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={name}
                  href={href}
                  className="relative py-2 text-[13px] font-medium transition-colors duration-300 group"
                  style={{ color: isActive ? "#f0f0f5" : "#8b8b9e" }}
                >
                  {name}
                  {/* Underline Indicator */}
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    style={{ background: "linear-gradient(90deg, #6366f1, #a855f7)" }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right - Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full transition-all hover:bg-white/5 text-[#8b8b9e] hover:text-white border border-white/5">
              <FaSearch size={14} />
            </button>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full transition-all hover:bg-white/5 text-[#8b8b9e] hover:text-white border border-white/5"
            >
              {darkMode ? <FaMoon size={14} /> : <FaSun size={14} />}
            </button>

            {/* Hire Me Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center justify-center px-6 h-10 rounded-full text-sm font-bold text-white shadow-lg shadow-[#6366f1]/20"
              style={{ background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)" }}
            >
              Hire Me
            </motion.a>

            {/* Mobile hamburger */}
            <button
              className="btn-icon lg:hidden w-10 h-10 flex items-center justify-center border border-white/5 rounded-full"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="flex flex-col gap-[4px]">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="block h-[2px] w-4 rounded-full"
                    style={{ background: "#f0f0f5" }}
                    animate={{
                      rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                      y:      menuOpen && i === 0 ? 6  : menuOpen && i === 2 ? -6  : 0,
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

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 w-64 z-50 lg:hidden border-l flex flex-col"
              style={{
                background: "rgba(12,12,14,0.98)",
                borderColor: "rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex justify-end p-6">
                <button onClick={() => setMenuOpen(false)} className="w-10 h-10 flex items-center justify-center border border-white/5 rounded-full text-[#8b8b9e]">
                  <span className="relative block w-4 h-4">
                    <span className="absolute top-1/2 left-0 w-4 h-[2px] bg-current rotate-45 -translate-y-1/2" />
                    <span className="absolute top-1/2 left-0 w-4 h-[2px] bg-current -rotate-45 -translate-y-1/2" />
                  </span>
                </button>
              </div>

              <div className="flex flex-col gap-2 px-6">
                {navLinks.map(({ name, href }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={name}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors"
                      style={{
                        color:      isActive ? "#ffffff" : "#8b8b9e",
                        background: isActive ? "rgba(255,255,255,0.05)" : "transparent",
                      }}
                    >
                      {name}
                    </Link>
                  );
                })}
                <div className="mt-4 pt-4 flex flex-col gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <a href="#contact" className="flex items-center justify-center px-6 h-11 rounded-xl text-sm font-bold text-white" style={{ background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)" }}>
                    Hire Me
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
