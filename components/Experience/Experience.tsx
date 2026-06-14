"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheckCircle } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    id: 1, role: "Freelance Full Stack Developer", company: "Upwork",
    period: "2024 – Present", type: "Freelance",
    description: "Delivering full-stack web solutions for international clients on Upwork. Building responsive React frontends, Node.js/Spring Boot backends, and database-driven applications.",
    highlights: ["Built and deployed MERN stack applications for clients","Designed REST APIs with Node.js and Spring Boot","Worked with PostgreSQL and MongoDB databases","Delivered pixel-perfect UI with React and Tailwind CSS"],
    icon: SiUpwork,
  },
  {
    id: 2, role: "Undergraduate IT Student", company: "University of Moratuwa",
    period: "2023 – Present", type: "Academic",
    description: "Pursuing B.Sc. IT (Hons) with a strong GPA of 3.63/4.0. Actively building projects in software engineering, databases, IoT, and embedded systems.",
    highlights: ["Maintaining GPA of 3.63 / 4.0","Studying algorithms, OOP, and system design","Building IoT and embedded systems projects","Active contributor on GitHub"],
    icon: FaBriefcase,
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" ref={ref} className="section-padding w-full" style={{ backgroundColor: "#0c0c0e" }}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 space-y-3">
          <p className="type-accent-label" style={{ color: "#6366f1" }}>MY JOURNEY</p>
          <h2 className="type-display-section">Work <span className="accent-italic">Experience</span></h2>
        </motion.div>
        <div className="max-w-3xl space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.15 }}
              className="rounded-xl p-6 shadow-sm"
              style={{ background: "#141417", border: "1px solid rgba(255,255,255,0.08)", transition: "transform 0.3s, border-color 0.3s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: "#1c1c21", border: "1px solid rgba(255,255,255,0.08)", color: "#6366f1" }}>
                  <exp.icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold" style={{ color: "#f0f0f5" }}>{exp.role}</h3>
                    <span className="rounded-full px-3 py-0.5 text-xs font-semibold" style={{ background: "rgba(99,102,241,0.1)", color: "#6366f1", border: "1px solid rgba(99,102,241,0.25)" }}>{exp.type}</span>
                  </div>
                  <div className="mb-4 flex items-center gap-2 text-sm">
                    <span style={{ color: "#6366f1", fontWeight: 600 }}>{exp.company}</span>
                    <span style={{ color: "rgba(255,255,255,0.15)" }}>•</span>
                    <span style={{ color: "#55556a" }}>{exp.period}</span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed" style={{ color: "#9898a8" }}>{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((point, j) => (
                      <motion.li key={j} initial={{ opacity: 0, x: -8 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.15 + j * 0.05 }} className="flex items-start gap-2 text-sm" style={{ color: "#9898a8" }}>
                        <FaCheckCircle size={11} style={{ color: "#22c55e", marginTop: "3px", flexShrink: 0 }} />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
