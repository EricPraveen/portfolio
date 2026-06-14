"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaWandSparkles, FaCompass, FaRocket, FaHeart } from "react-icons/fa6";
import { personalInfo, values, journeyTimeline } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  FaWandSparkles,
  FaCompass,
  FaRocket,
  FaHeart,
};

export default function About() {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: quoteRef, inView: quoteInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: journeyRef, inView: journeyInView } = useInView({ threshold: 0.05, triggerOnce: true });


  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="section-min-h container-custom flex items-center justify-center">
        <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center xl:gap-16">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-sm font-bold tracking-widest uppercase" style={{ color: "#6366f1" }}>ABOUT</p>
            <h1 className="font-extrabold tracking-tight" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", lineHeight: 1.05, color: "#f0f0f5" }}>
              I&apos;m {personalInfo.name.replace("Praveen", " Praveen")}.
            </h1>
            <p className="text-2xl sm:text-3xl font-medium tracking-tight" style={{ color: "#9898a8" }}>
              IT undergrad. Full-stack builder.
            </p>
            <p className="max-w-lg text-lg sm:text-xl leading-relaxed" style={{ color: "#55556a" }}>
              I craft digital products that feel sharp, useful, and human. My work blends strong engineering with clear design thinking.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md aspect-[4/5] lg:max-w-lg lg:aspect-[4/4.5] xl:max-w-xl xl:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl"
            style={{ background: "#141417", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Top-left Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-md"
              style={{ background: "rgba(12,12,14,0.6)", color: "#f0f0f5", border: "1px solid rgba(255,255,255,0.1)" }}>
              Sri Lanka 🇱🇰
            </div>
            
            {/* Bottom-right Badge */}
            <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-md"
              style={{ background: "rgba(34,197,94,0.15)", color: "#34d399", border: "1px solid rgba(34,197,94,0.3)" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#34d399] animate-pulse" />
              Available
            </div>

            {/* Placeholder for actual photo */}
            <Image src="/profile.jpeg" alt="Eric Praveen" fill className="object-cover" priority />

          </motion.div>
        </div>
      </section>

      {/* 2. QUOTE & BIO SECTION */}
      <section ref={quoteRef} className="container-custom py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Large Quote */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={quoteInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <blockquote
              className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight italic"
              style={{
                color: "#f0f0f5",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                borderLeft: "3px solid #6366f1",
                paddingLeft: "2rem",
                marginLeft: "-2rem"
              }}
            >
              "I build at the intersection of engineering precision and human storytelling."
            </blockquote>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={quoteInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-base sm:text-lg leading-relaxed"
            style={{ color: "#9898a8" }}
          >
            <p>
              I grew up being curious about how things work, from everyday gadgets to websites. That curiosity slowly became a habit of taking things apart and rebuilding them better.
            </p>
            <p>
              Coding started as an experiment and quickly became a craft. Once I shipped my first project, I realized software could be both technically rigorous and emotionally clear.
            </p>
            <p>
              Today, I am driven by impact: creating products people genuinely use, learning fast, and documenting lessons along the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. VALUES SECTION */}
      <section ref={valuesRef} id="about-values" className="container-custom py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 space-y-3 text-center">
          <p className="type-accent-label" style={{ color: "#6366f1" }}>WHAT I STAND FOR</p>
          <h2 className="type-display-section">Values that guide my <span className="accent-italic">work</span></h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val, i) => {
            const Icon = iconMap[val.icon] || FaCompass;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="card p-6 flex flex-col gap-4 items-center text-center relative group"
              >
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#6366f1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" style={{ background: "rgba(99,102,241,0.1)", color: "#6366f1", border: "1px solid rgba(99,102,241,0.2)", boxShadow: "0 8px 32px rgba(99,102,241,0.2)" }}>
                  <Icon size={24} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#f0f0f5" }}>{val.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#9898a8" }}>{val.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. TIMELINE SECTION */}
      <section ref={journeyRef} className="container-custom py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={journeyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12 space-y-3 text-center">
          <p className="type-accent-label" style={{ color: "#6366f1" }}>THE JOURNEY</p>
          <h2 className="type-display-section">Life <span className="accent-italic">timeline</span></h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Center Line (hidden on very small screens, shown as left line on small, center on md+) */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full" style={{ background: "linear-gradient(to bottom, #6366f1 0%, rgba(99,102,241,0.1) 100%)" }} />

          <div className="space-y-12 md:space-y-16">
            {journeyTimeline.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0"
                >
                  {/* Dot aligned to the top edge of the card */}
                  <div className="absolute left-[24px] md:left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                    <div className="h-6 w-6 rounded-full bg-[#141417] border-4 border-[#6366f1] shadow-[0_0_20px_rgba(99,102,241,0.6)]" />
                  </div>

                  {/* Content Card */}
                  {isEven ? (
                    <>
                      {/* Left Side Card */}
                      <div className="w-full pl-12 md:pl-0 flex justify-start md:justify-end">
                        <div className="card p-6 sm:p-8 w-full max-w-xl text-left md:mr-12 relative">
                          <span className="inline-block rounded-full px-3 py-1 text-sm font-bold mb-3 shadow-sm" style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)" }}>
                            {item.year}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-extrabold mb-3 tracking-tight" style={{ color: "#f0f0f5", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            {item.title}
                          </h3>
                          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#9898a8" }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                      {/* Empty right column */}
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      {/* Empty left column */}
                      <div className="hidden md:block" />
                      {/* Right Side Card */}
                      <div className="w-full pl-12 md:pl-0 flex justify-start">
                        <div className="card p-6 sm:p-8 w-full max-w-xl text-left md:ml-12 relative">
                          <span className="inline-block rounded-full px-3 py-1 text-sm font-bold mb-3 shadow-sm" style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.3)" }}>
                            {item.year}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-extrabold mb-3 tracking-tight" style={{ color: "#f0f0f5", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            {item.title}
                          </h3>
                          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#9898a8" }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}