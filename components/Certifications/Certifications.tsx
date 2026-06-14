"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt, FaShieldAlt } from "react-icons/fa";
import { certifications } from "@/data";

const categories = ["All", "Cloud & DevOps", "AI & Data", "Web Development", "Databases", "Professional", "Programming", "University"];
const sorts = ["Most Recent", "Alphabetical", "Issuer"] as const;
type SortKey = (typeof sorts)[number];

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState<SortKey>("Most Recent");

  const total = certifications.length;
  const validCount = certifications.filter((c) => c.status === "valid").length;
  const inProgressCount = total - validCount;

  const filteredCerts = useMemo(() => {
    let result = [...certifications];

    if (filter !== "All") {
      result = result.filter((cert) => cert.category === filter);
    }

    if (sort === "Alphabetical") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "Issuer") {
      result.sort((a, b) => a.issuer.localeCompare(b.issuer));
    } else {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [filter, sort]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="certifications" ref={ref} className="section-min-h w-full" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container-custom">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10"
        >
          <div>
            <p className="type-accent-label mb-2" style={{ color: "#6366f1" }}>CREDENTIALS</p>
            <h2 className="type-display-section">
              <span className="accent-italic">Certificates</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3 max-w-md">
            <span
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
              style={{ background: "rgba(99,102,241,0.1)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.25)" }}
            >
              <FaShieldAlt size={12} /> {total} total certificates
            </span>
            <p className="text-sm leading-relaxed" style={{ color: "#9898a8" }}>
              A curated record of professional learning across cloud, data, web engineering, university work, and competitive problem solving.
            </p>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
        >
          {[
            { label: "TOTAL", value: total },
            { label: "VALID", value: validCount },
            { label: "IN PROGRESS", value: inProgressCount },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl px-6 py-5"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="text-4xl font-bold mb-1" style={{ color: "#f0f0f5" }}>{s.value}</div>
              <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#55556a" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 mb-10"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold tracking-widest uppercase mr-2" style={{ color: "#55556a" }}>Filter</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-4 py-1.5 rounded-full text-xs font-bold transition-all"
                style={{
                  background: filter === cat ? "#6366f1" : "rgba(255,255,255,0.03)",
                  color: filter === cat ? "#ffffff" : "#9898a8",
                  border: `1px solid ${filter === cat ? "#818cf8" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold tracking-widest uppercase mr-2" style={{ color: "#55556a" }}>Sort</span>
            {sorts.map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                className="px-4 py-1.5 rounded-full text-xs font-bold transition-all"
                style={{
                  background: sort === s ? "#f0f0f5" : "rgba(255,255,255,0.03)",
                  color: sort === s ? "#0c0c0e" : "#9898a8",
                  border: `1px solid ${sort === s ? "#f0f0f5" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9 }}
                className="rounded-2xl p-6 flex flex-col"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* Top row — avatar + status */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold"
                    style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}40` }}
                  >
                    {cert.issuerInitial}
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      background: cert.status === "valid" ? "rgba(34,197,94,0.1)" : "rgba(251,191,36,0.1)",
                      color: cert.status === "valid" ? "#34d399" : "#fbbf24",
                      border: `1px solid ${cert.status === "valid" ? "rgba(34,197,94,0.3)" : "rgba(251,191,36,0.3)"}`,
                    }}
                  >
                    {cert.status === "valid" ? "Valid" : "In Progress"}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#55556a" }}>
                    {cert.category}
                  </span>
                  {cert.featured && (
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: "rgba(34,197,94,0.08)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)" }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold leading-snug mb-2" style={{ color: "#f0f0f5", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm font-medium mb-1" style={{ color: "#818cf8" }}>{cert.issuer}</p>

                {/* Issued date */}
                <p className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "#55556a" }}>
                  Issued {cert.issuedDate}
                </p>

                {/* Verify */}
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", color: "#f0f0f5", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    Verify <FaExternalLinkAlt size={11} />
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
