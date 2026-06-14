"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCertificate, FaEye, FaDownload } from "react-icons/fa";
import { certifications } from "@/data";

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  return (
    <section id="certifications" ref={ref} className="section-padding w-full" style={{ backgroundColor: "#0c0c0e" }}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 space-y-3">
          <p className="type-accent-label" style={{ color: "#6366f1" }}>CREDENTIALS</p>
          <h2 className="type-display-section">My <span className="accent-italic">Certifications</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 + i * 0.04 }}
              className="flex flex-col rounded-xl p-5 shadow-sm"
              style={{ background: "#141417", border: "1px solid rgba(255,255,255,0.08)", transition: "transform 0.3s, border-color 0.3s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "#1c1c21", border: "1px solid rgba(255,255,255,0.08)", color: "#6366f1" }}>
                <FaCertificate size={18} />
              </div>
              <h3 className="mb-1 flex-1 text-sm font-bold leading-snug" style={{ color: "#f0f0f5" }}>{cert.title}</h3>
              <p className="mb-0.5 text-xs font-semibold" style={{ color: "#6366f1" }}>{cert.issuer}</p>
              <p className="mb-4 text-xs" style={{ color: "#55556a" }}>{cert.date}</p>
              {cert.pdf && (
                <div className="mt-auto flex gap-2">
                  <a href={cert.pdf} target="_blank" rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium"
                    style={{ background: "rgba(99,102,241,0.1)", color: "#6366f1", border: "1px solid rgba(99,102,241,0.2)" }}
                  ><FaEye size={10} /> View</a>
                  <a href={cert.pdf} download
                    className="flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium"
                    style={{ background: "#1c1c21", color: "#55556a", border: "1px solid rgba(255,255,255,0.08)" }}
                  ><FaDownload size={10} /></a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
