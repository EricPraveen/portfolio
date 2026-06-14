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
    <section id="projects" ref={ref} className="section-min-h w-full" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-4">
            <p className="type-accent-label" style={{ color: "#6366f1" }}>WHAT I&apos;VE BUILT</p>
            <h2 className="type-display-section">Featured <span className="accent-italic">Projects</span></h2>
          </div>
          <motion.a 
            href="https://github.com/EricPraveen" 
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wide shadow-lg"
            style={{ background: "#141417", color: "#f0f0f5", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <FaGithub size={18} /> View GitHub Profile
          </motion.a>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
              className="card group flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#141417]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-transparent z-10 opacity-60" />
                
                {/* Project Image Placeholder */}
                <div 
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, rgba(99,102,241,0.1), rgba(12,12,14,1))` }}
                >
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
                  <span className="text-6xl font-extrabold opacity-20" style={{ color: "#f0f0f5", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {project.title.substring(0, 2).toUpperCase()}
                  </span>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <div
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md"
                    style={{ background: "rgba(0,0,0,0.6)", color: project.status.toLowerCase() === "completed" ? "#34d399" : "#fbbf24", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {project.status.toLowerCase() === "completed" ? "Completed" : "In Progress"}
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-extrabold mb-2" style={{ color: "#f0f0f5", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed mb-4 flex-grow" style={{ color: "#9898a8" }}>
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded-md text-[11px] font-bold shadow-sm"
                      style={{
                        background: `${techColors[tech] || "#ffffff"}15`,
                        color: techColors[tech] || "#f0f0f5",
                        border: `1px solid ${techColors[tech] || "#ffffff"}30`,
                      }}
                    >{tech}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 mt-auto" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="btn-outline flex-1 py-3 px-4 flex items-center justify-center gap-2 text-sm"
                    >
                      <FaGithub size={16} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="btn-primary flex-1 py-3 px-4 flex items-center justify-center gap-2 text-sm shadow-lg"
                    >
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
