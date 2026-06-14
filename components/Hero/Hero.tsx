"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { personalInfo } from "@/data";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100vh-8rem)] items-center overflow-hidden"
      style={{ backgroundColor: "#0c0c0e" }}
    >
      {/* Radial gradient background */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(70% 80% at 30% 50%, rgba(99,102,241,0.12) 0%, transparent 68%)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: 0, right: "10%", width: "400px", height: "300px",
            background: "radial-gradient(ellipse, rgba(34,197,94,0.06), transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Grain texture */}
      <div aria-hidden="true" className="hero-grain pointer-events-none absolute inset-0 -z-10" />

      {/* Grid lines overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          opacity: 0.025,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Main content */}
      <div className="container-custom w-full">
        <div className="grid w-full gap-12 py-32 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:py-0">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl space-y-8"
          >
            {/* Accent label */}
            <p className="type-accent-label" style={{ color: "#55556a" }}>
              Portfolio / Intro
            </p>

            {/* Typing animation */}
            <div style={{ minHeight: "1.8rem" }}>
              <p className="text-lg font-medium tracking-tight sm:text-xl" style={{ color: "#6366f1" }}>
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "React Specialist",
                    2000,
                    "Spring Boot Engineer",
                    2000,
                    "Open Source Builder",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <span aria-hidden="true" className="ml-1 inline-block align-baseline" style={{ opacity: 0.5 }}>|</span>
              </p>
            </div>

            {/* Main heading */}
            <h1 className="type-display">
              <span className="font-extrabold" style={{ color: "#f0f0f5" }}>
                Hi, I&apos;m {personalInfo.name}.
              </span>
              <br />
              <span style={{ color: "#f0f0f5", fontWeight: 500 }}>I build things </span>
              <span className="accent-italic">that matter.</span>
            </h1>

            {/* Bio */}
            <p className="max-w-xl text-lg leading-8 sm:text-xl" style={{ color: "#9898a8" }}>
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push("/projects")}
                className="btn-primary h-12 px-6 text-base"
              >
                View My Work
              </motion.button>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline h-12 px-6 text-base"
              >
                <FaDownload size={14} />
                Download CV
              </motion.a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
                { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn-icon h-11 w-11"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Code card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="code-card ml-auto max-w-sm">
              <p>
                <span style={{ color: "#6366f1" }}>const</span>{" "}
                <span style={{ color: "#f0f0f5" }}>developer</span>{" "}
                <span style={{ color: "#55556a" }}>=</span>{" "}
                <span style={{ color: "#22d3ee" }}>&quot;{personalInfo.name}&quot;</span>;
              </p>
              <p>
                <span style={{ color: "#6366f1" }}>const</span>{" "}
                <span style={{ color: "#f0f0f5" }}>focus</span>{" "}
                <span style={{ color: "#55556a" }}>=</span> [
                <span style={{ color: "#22d3ee" }}>&quot;performance&quot;</span>,{" "}
                <span style={{ color: "#22d3ee" }}>&quot;design&quot;</span>];
              </p>
              <br />
              <p>
                <span style={{ color: "#6366f1" }}>export default function</span>{" "}
                <span style={{ color: "#fbbf24" }}>craft</span>() {"{"}
              </p>
              <p className="pl-5">
                <span style={{ color: "#6366f1" }}>return</span>{" "}
                <span style={{ color: "#22d3ee" }}>&quot;work that matters&quot;</span>;
              </p>
              <p>{"}"}</p>
              <br />
              <p><span style={{ color: "#55556a" }}>{"// Stack: React · Spring Boot · PostgreSQL"}</span></p>
              <p><span style={{ color: "#55556a" }}>{"// GPA: "}{personalInfo.gpa}{" / 4.0 @ "}{personalInfo.university}</span></p>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}