"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#0c0c0e" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-col items-center gap-3"
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold"
              style={{
                background: "linear-gradient(135deg, #6366f1, #818cf8)",
                color: "white",
                boxShadow: "0 0 32px rgba(99,102,241,0.3)",
              }}
            >
              E
            </div>
            <p className="text-2xl font-bold tracking-tight" style={{ color: "#f0f0f5", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              EricPraveen
            </p>
          </motion.div>

          <div className="w-40 overflow-hidden rounded-full" style={{ height: "2px", background: "#1c1c21" }}>
            <motion.div
              style={{ height: "100%", background: "#6366f1" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-xs"
            style={{ color: "#55556a", fontFamily: "'Fira Code', monospace" }}
          >
            Loading portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}