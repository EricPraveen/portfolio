"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { personalInfo, navLinks } from "@/data";

export default function Footer() {
  return (
    <footer className="mt-10 w-full" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#141417" }}>
      <div className="container-custom py-10 lg:py-12">

        {/* Top CTA */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-0.035em",
            color: "#f0f0f5",
          }}>
            Let&apos;s build something{" "}
            <span className="accent-italic">remarkable.</span>
          </h2>
        </div>

        {/* 3 columns */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.95fr_0.9fr]">

          {/* Col 1 — Brand + socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold" style={{ background: "linear-gradient(135deg, #6366f1, #818cf8)", color: "white" }}>E</div>
              <p className="max-w-xs text-sm leading-6" style={{ color: "#9898a8" }}>
                {personalInfo.fullName} — Full Stack Developer from Sri Lanka, building modern, performant web experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: FaGithub,  href: personalInfo.github,           label: "GitHub" },
                { icon: FaLinkedin,href: personalInfo.linkedin,         label: "LinkedIn" },
                { icon: FaEnvelope,href: `mailto:${personalInfo.email}`,label: "Email" },
                { icon: SiUpwork,  href: personalInfo.upwork,           label: "Upwork" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="btn-icon">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick nav */}
          <nav aria-label="Footer quick navigation" className="grid gap-2 text-sm">
            <p className="type-accent-label" style={{ color: "#55556a" }}>QUICK NAV</p>
            <div className="grid gap-1.5">
              {navLinks.map(({ name, href }) => (
                <button
                  key={name}
                  onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
                  className="w-fit text-left transition-colors text-sm"
                  style={{ color: "#9898a8" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9898a8")}
                >
                  {name}
                </button>
              ))}
            </div>
          </nav>

          {/* Col 3 — Contact + status */}
          <div className="space-y-3">
            <div className="status-badge w-fit">
              <span className="status-dot" />
              Open to Opportunities
            </div>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-sm transition-colors" style={{ color: "#9898a8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9898a8")}
            >
              <FaEnvelope size={13} aria-hidden="true" />
              {personalInfo.email}
            </a>
            <div className="space-y-1 text-sm" style={{ color: "#9898a8" }}>
              <p>UTC+5:30</p>
              <p>Sri Lanka 🇱🇰</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-3 pt-4 text-xs sm:flex-row sm:items-center sm:justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "#55556a" }}>
          <p>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</p>
          <p>Built with Next.js &amp; ☕</p>
        </div>
      </div>
    </footer>
  );
}