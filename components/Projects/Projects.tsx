"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { projects } from "@/data";

const techColors: Record<string, string> = {
  "React.js":"#61DAFB","React":"#61DAFB","Node.js":"#68A063","Express.js":"#9ca3af",
  "MongoDB":"#47A248","Bootstrap":"#7952B3","HTML":"#E34F26","CSS":"#1572B6",
  "JavaScript":"#F7DF1E","Spring Boot":"#6DB33F","PostgreSQL":"#336791",
  "Tailwind CSS":"#38BDF8","Tailwind":"#38BDF8","TypeScript":"#3178C6",
  "MySQL":"#4479A1","Java":"#F89820","Python":"#3776AB",
};

const gradients = [
  "linear-gradient(135deg,rgba(99,102,241,0.15),rgba(129,140,248,0.08))",
  "linear-gradient(135deg,rgba(34,197,94,0.12),rgba(74,222,128,0.06))",
  "linear-gradient(135deg,rgba(251,191,36,0.12),rgba(252,211,77,0.06))",
  "linear-gradient(135deg,rgba(236,72,153,0.12),rgba(244,114,182,0.06))",
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="projects" ref={ref} className="section-padding w-full" style={{ backgroundColor: "#0c0c0e" }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-end justify-between gap-4"
        >
          <div className="space-y-3">
            <p className="type-accent-label" style={{ color: "#6366f1" }}>WHAT I&apos;VE BUILT</p>
            <h2 className="type-display-section">Featured <span className="accent-italic">Projects</span></h2>
          </div>
          <FaGithub size={28} className="hidden sm:block" style={{ color: "#55556a" }} />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className="group overflow-hidden rounded-xl shadow-sm"
              style={{
                background: "#141417",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.45)";
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              {/* Top bar */}
              <div className="h-1 w-full" style={{
                background: i % 2 === 0
                  ? "linear-gradient(90deg, #6366f1, #818cf8)"
                  : "linear-gradient(90deg, #818cf8, #22c55e)",
              }} />

              {/* Image area */}
              <div
                className="relative flex aspect-[16/9] items-center justify-center overflow-hidden"
                style={{ background: gradients[i % gradients.length] }}
              >
                <div
                  className="absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur"
                  style={{
                    background: "rgba(12,12,14,0.75)",
                    borderColor: "rgba(255,255,255,0.1)",
                    color: project.status.toLowerCase() === "completed" ? "#34d399" : "#fbbf24",
                  }}
                >
                  {project.status.toLowerCase() === "completed" ? "Completed" : "In Progress"}
                </div>
                <span className="select-none text-7xl font-extrabold opacity-10" style={{ color: "#f0f0f5", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  0{project.id}
                </span>
              </div>

              {/* Card body */}
              <div className="space-y-4 p-5">
                <h3 className="text-xl font-bold leading-tight tracking-tight" style={{ color: "#f0f0f5", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="line-clamp-2 text-sm leading-6" style={{ color: "#9898a8" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-md px-2.5 py-0.5 text-xs font-semibold"
                      style={{
                        background: `${techColors[tech] || "#ffffff"}15`,
                        color: techColors[tech] || "#9898a8",
                        border: `1px solid ${techColors[tech] || "#ffffff"}25`,
                      }}
                    >{tech}</span>
                  ))}
                </div>
                <div className="flex gap-3 pt-1">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium transition-colors"
                    style={{ color: "#55556a" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f5")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#55556a")}
                  >
                    <FaGithub size={13} /> Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: "#6366f1" }}
                    >
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-9 text-center"
        >
          <a
            href="https://github.com/EricPraveen"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors"
            style={{ color: "#f0f0f5" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f0f5")}
          >
            View All Projects on GitHub
            <FaArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
