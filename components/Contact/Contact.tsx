"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { personalInfo } from "@/data";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  };

  const contactItems = [
    { icon: FaEnvelope,    label: "Email",    value: personalInfo.email,          href: `mailto:${personalInfo.email}` },
    { icon: FaMapMarkerAlt,label: "Location", value: personalInfo.location,       href: "" },
    { icon: FaGithub,      label: "GitHub",   value: "@EricPraveen",              href: personalInfo.github },
    { icon: FaLinkedin,    label: "LinkedIn", value: "ericpraveen-alricprashanth",href: personalInfo.linkedin },
    { icon: SiUpwork,      label: "Upwork",   value: "Freelance Developer",       href: personalInfo.upwork },
  ];

  return (
    <section id="contact" ref={ref} className="section-min-h w-full" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 space-y-3 text-center">
          <p className="type-accent-label" style={{ color: "#6366f1" }}>GET IN TOUCH</p>
          <h2 className="type-display-section">Let&apos;s <span className="accent-italic">Work Together</span></h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#9898a8" }}>Have a project in mind or just want to say hi? My inbox is always open.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 w-full">
          {/* Left — Contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} className="space-y-8 flex flex-col justify-center">
            <div className="status-badge w-fit px-4 py-2 text-sm shadow-md">
              <span className="status-dot animate-pulse" style={{ width: "10px", height: "10px" }} />
              Open to Opportunities
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 w-full">
              {contactItems.map(({ icon: Icon, label, value, href }, i) => {
                const card = (
                  <div className="card p-6 sm:p-8 flex flex-col gap-4 items-start group h-full justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6" style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", color: "#6366f1", boxShadow: "0 4px 20px rgba(99,102,241,0.2)" }}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#55556a" }}>{label}</p>
                      <p className="text-base sm:text-lg font-bold leading-snug break-all" style={{ color: "#f0f0f5" }}>{value}</p>
                    </div>
                  </div>
                );
                const className = href ? `block outline-none hover:no-underline ${i === 4 ? "sm:col-span-2" : ""}` : (i === 4 ? "sm:col-span-2" : "");
                return href ? (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={className}>{card}</a>
                ) : (
                  <div key={label} className={className}>{card}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="card p-8 sm:p-10 space-y-6 relative overflow-hidden flex flex-col justify-center">
            {/* Form Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#6366f1]/5 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: "#f0f0f5", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Send me a message</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: "Your Name",  name: "name",  type: "text",  placeholder: "John Doe" },
                { label: "Your Email", name: "email", type: "email", placeholder: "john@example.com" },
              ].map((field) => (
                <div key={field.name} className="space-y-2">
                  <label htmlFor={`contact-${field.name}`} className="block text-xs font-bold tracking-widest uppercase" style={{ color: "#9898a8" }}>{field.label}</label>
                  <input
                    id={`contact-${field.name}`} type={field.type} name={field.name} required
                    value={formData[field.name as keyof typeof formData]} onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl px-5 py-4 text-base outline-none transition-all duration-300 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.3)]"
                    style={{ background: "rgba(20,20,23,0.8)", border: "1px solid rgba(255,255,255,0.08)", color: "#f0f0f5" }}
                    onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
              ))}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="contact-message" className="block text-xs font-bold tracking-widest uppercase" style={{ color: "#9898a8" }}>Message</label>
              <textarea
                id="contact-message" name="message" required rows={5}
                value={formData.message} onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl px-5 py-4 text-base outline-none transition-all duration-300 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.3)]"
                style={{ background: "rgba(20,20,23,0.8)", border: "1px solid rgba(255,255,255,0.08)", color: "#f0f0f5" }}
                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>

            <motion.button 
              type="submit" 
              whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(99,102,241,0.4)" }} 
              whileTap={{ scale: 0.98 }} 
              className="btn-primary w-full justify-center h-16 text-lg font-bold tracking-wide mt-2"
            >
              <FaPaperPlane size={18} />
              {status === "sent" ? "Opening mail client..." : "Send Message"}
            </motion.button>
            
            {status === "sent" && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-sm font-bold mt-4" style={{ color: "#34d399" }}>
                Your default mail app should open shortly!
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}