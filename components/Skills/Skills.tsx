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
    <section id="skills" ref={ref} className="section-padding w-full" style={{ backgroundColor: "#141417" }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-3"
        >
          <p className="type-accent-label" style={{ color: "#6366f1" }}>WHAT I WORK WITH</p>
          <h2 className="type-display-section">Skills &amp; <span className="accent-italic">Tech Stack</span></h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
          {/* Left — Skill badges */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {skillGroups.map((group, gi) => (
              <div key={group.label}>
                <p className="type-accent-label mb-3" style={{ color: "#55556a" }}>{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.names.map((name, i) => {
                    const tech = techLookup[name];
                    const Icon = tech?.icon;
                    return (
                      <motion.div
                        key={name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.35, delay: 0.15 + gi * 0.05 + i * 0.04 }}
                        whileHover={{ y: -2 }}
                        className="skill-badge"
                      >
                        {Icon && <Icon size={13} style={{ color: tech.color, flexShrink: 0 }} />}
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
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="type-accent-label mb-6" style={{ color: "#55556a" }}>PROFICIENCY</p>
            {skillBars.map(({ name, level, color }, i) => (
              <div key={name} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span style={{ color: "#f0f0f5", fontWeight: 500 }}>{name}</span>
                  <span style={{ color: "#55556a", fontFamily: "'Fira Code', monospace", fontSize: "0.78rem" }}>{level}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full" style={{ background: "#1c1c21" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}