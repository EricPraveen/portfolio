"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWandSparkles } from "react-icons/fa6";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const handleLeave = () => setIsVisible(false);
    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [enabled]);

  return (
    <>
      <AnimatePresence>
        {enabled && isVisible && (
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ x: position.x - 200, y: position.y - 200, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", damping: 35, stiffness: 220 }}
          >
            <div style={{
              width: "400px", height: "400px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label={enabled ? "Disable cursor glow" : "Enable cursor glow"}
        onClick={() => setEnabled((v) => !v)}
        className="btn-icon fixed bottom-4 right-4 z-50"
        style={{
          background: enabled ? "#6366f1" : "#141417",
          color: enabled ? "white" : "#55556a",
          border: enabled ? "1px solid #6366f1" : "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.45)",
        }}
      >
        <FaWandSparkles size={15} />
      </button>
    </>
  );
}