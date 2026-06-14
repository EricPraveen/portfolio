"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaCode, FaGraduationCap, FaLaptopCode, FaCoffee, FaTrophy } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { stats } from "@/data";

const statIcons = [FaLaptopCode, FaGraduationCap, FaCode, FaCoffee];
const achievements = [
  { title: "Consistent Academic Excellence", description: "Maintained GPA above 3.6 throughout B.Sc. IT at University of Moratuwa.", icon: FaGraduationCap },
  { title: "Full Stack Project Delivery", description: "Built 4+ projects spanning MERN, Spring Boot, and PostgreSQL stacks.", icon: FaCode },
  { title: "Freelance Developer on Upwork", description: "Delivering real-world solutions for international clients.", icon: FaUpwork },
  { title: "Open Source Contributor", description: "Active on GitHub with consistent contributions and personal projects.", icon: FaTrophy },
];

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <section id="achievements" ref={ref} className="section-padding w-full" style={{ backgroundColor: "#141417" }}>
      <div className="container-custom">
        {/* Stats row */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }} whileHover={{ y: -4 }} className="rounded-xl p-5 text-center shadow-sm" style={{ background: "#0c0c0e", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(99,102,241,0.1)", color: "#6366f1" }}>
                  <Icon size={18} />
                </div>
                <h3 className="mb-0.5 text-2xl font-extrabold md:text-3xl" style={{ color: "#f0f0f5", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {inView && <CountUp end={stat.value} duration={2} decimals={stat.value % 1 !== 0 ? 2 : 0} />}
                  {stat.suffix}
                </h3>
                <p className="text-xs font-medium" style={{ color: "#55556a" }}>{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievements heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="mb-10 space-y-3">
          <p className="type-accent-label" style={{ color: "#6366f1" }}>MILESTONES</p>
          <h2 className="type-display-section">Key <span className="accent-italic">Achievements</span></h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="flex gap-4 rounded-xl p-5 shadow-sm"
              style={{ background: "#0c0c0e", border: "1px solid rgba(255,255,255,0.08)", transition: "transform 0.3s, border-color 0.3s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", color: "#6366f1" }}>
                <item.icon size={18} />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold" style={{ color: "#f0f0f5" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9898a8" }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}