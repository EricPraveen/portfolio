"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { personalInfo } from "@/data";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      className="section-min-h relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Background gradients */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle glow behind text */}
        <div 
          className="absolute left-[10%] top-[30%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} 
        />
        {/* Glow behind code block */}
        <div 
          className="absolute right-[10%] top-[40%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)", filter: "blur(80px)" }} 
        />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">

          {/* Left Column — Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col space-y-5"
          >
            {/* Eyebrow */}
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#55556a" }}>
                PORTFOLIO / INTRO
              </p>

              {/* Typing effect */}
              <div className="text-[#6366f1] text-lg md:text-xl font-medium tracking-wide h-7">
                <TypeAnimation
                  sequence={[
                    "Full Stack Dev",
                    2000,
                    "React Engineer",
                    2000,
                    "Software Architect",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <span aria-hidden="true" className="opacity-50 ml-1">|</span>
              </div>
            </div>

            {/* Massive Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold leading-[1.05] tracking-tight text-[#f0f0f5]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Hi, I&apos;m {personalInfo.name.split(" ")[0]}.<br />
              I build things<br />
              <span className="italic" style={{ background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                that matter.
              </span>
            </h1>

            {/* Bio Paragraph */}
            <p className="max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-[#9898a8]">
              {personalInfo.title} from {personalInfo.location} — crafting digital experiences at the intersection of performance and design.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/projects")}
                className="flex items-center justify-center h-12 px-8 rounded-full text-sm font-bold text-white shadow-lg shadow-[#6366f1]/20"
                style={{ background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)" }}
              >
                View My Work
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/about")}
                className="flex items-center justify-center h-12 px-8 rounded-full text-sm font-bold text-[#f0f0f5] border border-white/10"
                style={{ background: "transparent" }}
              >
                More About Me
              </motion.button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-4">
              {[
                { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
                { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
                { icon: FaMedium, href: "https://medium.com", label: "Medium" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-white/5 text-[#8b8b9e] hover:text-[#f0f0f5] transition-colors"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Code Snippet Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end items-center relative w-full"
          >
            {/* The Glassmorphic Code Card */}
            <div 
              className="relative w-full max-w-lg p-6 rounded-2xl overflow-hidden shadow-2xl"
              style={{ 
                background: "rgba(18, 18, 20, 0.6)", 
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" 
              }}
            >
              {/* Top gradient highlight on card */}
              <div className="absolute top-0 inset-x-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)" }} />
              
              {/* Floating decorative square inside code block */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl opacity-20 border border-white/10" style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)", transform: "rotate(15deg)" }} />

              <pre className="font-mono text-sm leading-loose tracking-wide relative z-10" style={{ fontFamily: "'Fira Code', monospace" }}>
                <code className="block">
                  <span className="text-[#6366f1]">const</span>{" "}
                  <span className="text-[#f0f0f5]">builder</span>{" "}
                  <span className="text-[#a855f7]">=</span>{" "}
                  <span className="text-[#22c55e]">"{personalInfo.name}"</span>
                  <span className="text-[#8b8b9e]">;</span>
                </code>
                <code className="block mt-4">
                  <span className="text-[#6366f1]">const</span>{" "}
                  <span className="text-[#f0f0f5]">focus</span>{" "}
                  <span className="text-[#a855f7]">=</span>{" "}
                  <span className="text-[#f0f0f5]">[</span>
                  <span className="text-[#22c55e]">"performance"</span>
                  <span className="text-[#8b8b9e]">,</span>{" "}
                  <span className="text-[#22c55e]">"design"</span>
                  <span className="text-[#f0f0f5]">]</span>
                  <span className="text-[#8b8b9e]">;</span>
                </code>
                <code className="block mt-4">
                  <span className="text-[#6366f1]">export</span>{" "}
                  <span className="text-[#6366f1]">default</span>{" "}
                  <span className="text-[#f0f0f5]">function</span>{" "}
                  <span className="text-[#38bdf8]">craft</span>
                  <span className="text-[#f0f0f5]">()</span>{" "}
                  <span className="text-[#f0f0f5]">{`{`}</span>
                </code>
                <code className="block pl-8">
                  <span className="text-[#a855f7]">return</span>{" "}
                  <span className="text-[#22c55e]">"work that matters"</span>
                  <span className="text-[#8b8b9e]">;</span>
                </code>
                <code className="block">
                  <span className="text-[#f0f0f5]">{`}`}</span>
                </code>
              </pre>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}