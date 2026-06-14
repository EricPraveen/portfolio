"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress(total > 0 ? (current / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[9997] h-[2px]"
      style={{ width: "100%", background: "var(--bg-tertiary)" }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "var(--accent-primary)",
          transition: "width 0.1s ease-out",
        }}
      />
    </div>
  );
}