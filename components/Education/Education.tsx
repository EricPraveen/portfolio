"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap } from "react-icons/fa";
import { education } from "@/data";

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="education" ref={ref} className="section-padding w-full" style={{ backgroundColor: "#141417" }}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 space-y-3">
          <p className="type-accent-label" style={{ color: "#6366f1" }}>MY BACKGROUND</p>
          <h2 className="type-display-section">Education <span className="accent-italic">Timeline</span></h2>
        </motion.div>
        <div className="relative max-w-3xl">
          <div className="absolute left-[1.75rem] top-2 bottom-2 w-px" style={{ background: "linear-gradient(to bottom, #6366f1, rgba(99,102,241,0.1))" }} />
          <div className="space-y-8">
            {education.map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.15 + i * 0.15 }} className="relative flex gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.15 }}
                  className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: "#1c1c21",
                    border: `2px solid ${i === education.length - 1 ? "#6366f1" : "rgba(255,255,255,0.08)"}`,
                    color: i === education.length - 1 ? "#6366f1" : "#55556a",
                  }}
                >
                  <FaGraduationCap size={22} />
                </motion.div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }} className="flex-1 rounded-xl p-5 shadow-sm" style={{ background: "#0c0c0e", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="mb-3 inline-block rounded-full px-3 py-0.5 text-xs font-semibold" style={{ background: "rgba(99,102,241,0.1)", color: "#6366f1", border: "1px solid rgba(99,102,241,0.25)" }}>{item.period}</span>
                  <h3 className="mb-0.5 text-base font-bold" style={{ color: "#f0f0f5" }}>{item.degree}</h3>
                  <p className="mb-3 text-sm font-medium" style={{ color: "#55556a" }}>{item.institution}</p>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-md px-2 py-0.5 text-xs font-semibold" style={{ background: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.2)" }}>{item.gpa}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#9898a8" }}>{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}