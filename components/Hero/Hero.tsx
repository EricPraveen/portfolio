"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown } from "react-icons/fa";
import { personalInfo } from "@/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#020209" }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full opacity-20 animate-blob"
          style={{
            width: "500px",
            height: "500px",
            top: "-100px",
            left: "-100px",
            background: "radial-gradient(circle, #a855f7, transparent)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute rounded-full opacity-20 animate-blob"
          style={{
            width: "400px",
            height: "400px",
            bottom: "-50px",
            right: "-50px",
            background: "radial-gradient(circle, #00d4ff, transparent)",
            filter: "blur(80px)",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute rounded-full opacity-10 animate-blob"
          style={{
            width: "300px",
            height: "300px",
            top: "50%",
            left: "50%",
            background: "radial-gradient(circle, #22d3ee, transparent)",
            filter: "blur(60px)",
            animationDelay: "5s",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main content */}
      <div className="container-custom relative z-10 text-center">
        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
          style={{
            background: "rgba(168, 85, 247, 0.1)",
            border: "1px solid rgba(168, 85, 247, 0.3)",
            color: "#a855f7",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#a855f7" }}
          />
          Available for freelance work
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
        >
          <span style={{ color: "rgba(255,255,255,0.95)" }}>Hi, I'm </span>
          <span
            style={{
              background: "linear-gradient(135deg, #00d4ff, #a855f7, #22d3ee)",
              backgroundSize: "300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-3xl font-medium mb-6 h-12 flex items-center justify-center"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          <span style={{ color: "rgba(255,255,255,0.4)" }} className="mr-2">
            I build
          </span>
          <TypeAnimation
            sequence={[
              "Full Stack Web Apps",
              2000,
              "React Interfaces",
              2000,
              "REST APIs",
              2000,
              "Spring Boot Services",
              2000,
              "IoT Systems",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ color: "#00d4ff" }}
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {/* Primary button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-full font-semibold text-sm"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #a855f7)",
              color: "white",
              boxShadow: "0 0 30px rgba(168,85,247,0.3)",
            }}
          >
            View My Work
          </motion.button>

          {/* Secondary button */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold text-sm flex items-center gap-2"
            style={{
              border: "1px solid rgba(0, 212, 255, 0.4)",
              color: "#00d4ff",
            }}
          >
            <FaDownload size={14} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {[
            { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
            {
              icon: FaLinkedin,
              href: personalInfo.linkedin,
              label: "LinkedIn",
            },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.6)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00d4ff";
                e.currentTarget.style.color = "#00d4ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
              }}
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}