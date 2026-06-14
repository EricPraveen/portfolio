"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { techStack, skillBars } from "@/data";

const skillGroups = [
  { label: "Frontend",  names: ["HTML5","CSS3","JavaScript","React","Tailwind","Bootstrap"] },
  { label: "Backend",   names: ["Node.js","Express","Spring Boot","PHP"] },
  { label: "Database",  names: ["MongoDB","MySQL","PostgreSQL"] },
  { label: "Languages", names: ["Java","Python","C","C++"] },
  { label: "Tools",     names: ["Git","GitHub","Figma","VS Code","Linux"] },
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const techLookup = Object.fromEntries(techStack.map((t) => [t.name, { icon: t.icon, color: t.color }]));

  return (
    <section id="skills" ref={ref} className="section-min-h w-full" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 space-y-3 text-center"
        >
          <p className="type-accent-label" style={{ color: "#6366f1" }}>WHAT I WORK WITH</p>
          <h2 className="type-display-section">Skills &amp; <span className="accent-italic">Tech Stack</span></h2>
        </motion.div>

        <div className="grid gap-8 lg:gap-12 xl:grid-cols-[1fr_1fr] items-start">
          {/* Left — Skill badges in Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skillGroups.map((group, gi) => (
              <div key={group.label} className="card p-5">
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#55556a" }}>{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.names.map((name, i) => {
                    const tech = techLookup[name];
                    const Icon = tech?.icon;
                    return (
                      <motion.div
                        key={name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.15 + gi * 0.05 + i * 0.04 }}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="skill-badge px-3 py-1.5 text-[13px] shadow-sm hover:shadow-lg"
                        style={{ background: "rgba(0,0,0,0.2)" }}
                      >
                        {Icon && <Icon size={18} style={{ color: tech.color, flexShrink: 0 }} />}
                        {name}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — Proficiency bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-6 lg:p-8 space-y-6"
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#55556a" }}>PROFICIENCY OVERVIEW</p>
            {skillBars.map(({ name, level, color }, i) => (
              <div key={name} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-base font-bold" style={{ color: "#f0f0f5" }}>{name}</span>
                  <span className="font-bold tracking-wider" style={{ color: color, fontFamily: "'Fira Code', monospace", fontSize: "0.85rem" }}>{level}%</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full relative" style={{ background: "rgba(255,255,255,0.05)", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)" }}>
                  <motion.div
                    className="h-full rounded-full relative"
                    style={{ background: `linear-gradient(90deg, ${color}40, ${color})`, boxShadow: `0 0 15px ${color}60` }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white opacity-50 rounded-full blur-[2px]" />
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}