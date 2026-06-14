"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap } from "react-icons/fa";
import { education } from "@/data";

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="education" ref={ref} className="section-min-h w-full" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 space-y-3 text-center">
          <p className="type-accent-label" style={{ color: "#6366f1" }}>MY BACKGROUND</p>
          <h2 className="type-display-section">Education <span className="accent-italic">Timeline</span></h2>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-[24px] sm:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 rounded-full" style={{ background: "linear-gradient(to bottom, #6366f1 0%, rgba(99,102,241,0.1) 100%)" }} />

          <div className="space-y-8 sm:space-y-12">
            {education.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={item.id} 
                  initial={{ opacity: 0, y: 40 }} 
                  animate={inView ? { opacity: 1, y: 0 } : {}} 
                  transition={{ duration: 0.7, delay: i * 0.15 }} 
                  className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[24px] sm:left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                      className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border-[3px]"
                      style={{
                        background: "#1c1c21",
                        borderColor: i === 0 ? "#6366f1" : "rgba(255,255,255,0.1)",
                        color: i === 0 ? "#6366f1" : "#9898a8",
                        boxShadow: i === 0 ? "0 0 20px rgba(99,102,241,0.5)" : "none"
                      }}
                    >
                      <FaGraduationCap size={20} />
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  {isEven ? (
                    <>
                      <div className="w-full pl-12 sm:pl-0 flex justify-start sm:justify-end">
                        <div className="card p-6 sm:p-8 w-full text-left sm:mr-10 relative group">
                           {/* Subtle background glow on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          <div className="relative z-10">
                            <span className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold shadow-sm" style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)" }}>{item.period}</span>
                            <h3 className="mb-1 text-xl sm:text-2xl font-extrabold" style={{ color: "#f0f0f5", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.degree}</h3>
                            <p className="mb-3 text-base sm:text-lg font-semibold" style={{ color: "#9898a8" }}>{item.institution}</p>
                            <div className="mb-3">
                              <span className="rounded-lg px-2 py-1 text-xs font-bold tracking-wide" style={{ background: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.2)" }}>GPA: {item.gpa}</span>
                            </div>
                            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#9898a8" }}>{item.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="hidden sm:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden sm:block" />
                      <div className="w-full pl-12 sm:pl-0 flex justify-start">
                        <div className="card p-6 sm:p-8 w-full text-left sm:ml-10 relative group">
                           {/* Subtle background glow on hover */}
                          <div className="absolute inset-0 bg-gradient-to-l from-[#6366f1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          <div className="relative z-10">
                            <span className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold shadow-sm" style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)" }}>{item.period}</span>
                            <h3 className="mb-1 text-xl sm:text-2xl font-extrabold" style={{ color: "#f0f0f5", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.degree}</h3>
                            <p className="mb-3 text-base sm:text-lg font-semibold" style={{ color: "#9898a8" }}>{item.institution}</p>
                            <div className="mb-3">
                              <span className="rounded-lg px-2 py-1 text-xs font-bold tracking-wide" style={{ background: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.2)" }}>GPA: {item.gpa}</span>
                            </div>
                            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#9898a8" }}>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}