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
    <section id="contact" ref={ref} className="section-padding w-full" style={{ backgroundColor: "#0c0c0e", minHeight: "calc(100vh - 8rem)" }}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12 space-y-3">
          <p className="type-accent-label" style={{ color: "#6366f1" }}>GET IN TOUCH</p>
          <h2 className="type-display-section">Let&apos;s <span className="accent-italic">Work Together</span></h2>
          <p className="max-w-xl text-base" style={{ color: "#9898a8" }}>Have a project in mind or just want to say hi? My inbox is always open.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left — Contact info */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} className="space-y-3">
            <div className="status-badge mb-6 w-fit">
              <span className="status-dot" />
              Open to Opportunities
            </div>
            {contactItems.map(({ icon: Icon, label, value, href }) => {
              const card = (
                <div className="flex items-center gap-4 rounded-xl p-4 shadow-sm" style={{ background: "#141417", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: "#1c1c21", border: "1px solid rgba(255,255,255,0.08)", color: "#6366f1" }}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "#55556a" }}>{label}</p>
                    <p className="text-sm font-medium" style={{ color: "#f0f0f5" }}>{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="block">{card}</a>
              ) : (
                <div key={label}>{card}</div>
              );
            })}
          </motion.div>

          {/* Right — Form */}
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-5 rounded-2xl p-6 sm:p-8" style={{ background: "#141417", border: "1px solid rgba(255,255,255,0.08)" }}>
            {[
              { label: "Your Name",  name: "name",  type: "text",  placeholder: "John Doe" },
              { label: "Your Email", name: "email", type: "email", placeholder: "john@example.com" },
            ].map((field) => (
              <div key={field.name}>
                <label htmlFor={`contact-${field.name}`} className="mb-2 block text-sm font-medium" style={{ color: "#9898a8" }}>{field.label}</label>
                <input
                  id={`contact-${field.name}`} type={field.type} name={field.name} required
                  value={formData[field.name as keyof typeof formData]} onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                  style={{ background: "#1c1c21", border: "1px solid rgba(255,255,255,0.08)", color: "#f0f0f5", transition: "border-color 0.2s" }}
                  onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>
            ))}
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium" style={{ color: "#9898a8" }}>Message</label>
              <textarea
                id="contact-message" name="message" required rows={5}
                value={formData.message} onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl px-4 py-3 text-sm outline-none"
                style={{ background: "#1c1c21", border: "1px solid rgba(255,255,255,0.08)", color: "#f0f0f5", transition: "border-color 0.2s" }}
                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>
            <motion.button type="submit" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="btn-primary w-full justify-center">
              <FaPaperPlane size={14} />
              {status === "sent" ? "Opening mail client..." : "Send Message"}
            </motion.button>
            {status === "sent" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm" style={{ color: "#22c55e" }}>
                Your default mail app should open shortly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}