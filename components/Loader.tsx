"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 2200);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Rasengan orb */}
          <div className="relative flex h-40 w-40 items-center justify-center">
            {/* Outer glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(30, 58, 138, 0.15) 50%, transparent 75%)",
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Ring 1 — outer, slow */}
            <motion.div
              className="absolute h-36 w-36 rounded-full border-2 border-blue-400/60"
              style={{
                borderStyle: "dashed",
                boxShadow: "0 0 30px rgba(96, 165, 250, 0.5)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Ring 2 — middle, reverse */}
            <motion.div
              className="absolute h-28 w-28 rounded-full border border-cyan-300/70"
              style={{ borderStyle: "dotted" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Ring 3 — inner, fast */}
            <motion.div
              className="absolute h-20 w-20 rounded-full border-2 border-blue-300"
              style={{
                borderTopColor: "transparent",
                borderBottomColor: "transparent",
                boxShadow: "0 0 20px rgba(147, 197, 253, 0.8)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />

            {/* Center core */}
            <motion.div
              className="relative flex h-14 w-14 items-center justify-center rounded-full"
              style={{
                background:
                  "radial-gradient(circle, #ffffff 0%, #93c5fd 30%, #3b82f6 70%, #1e3a8a 100%)",
                boxShadow:
                  "0 0 40px 10px rgba(96, 165, 250, 0.9), 0 0 80px 20px rgba(59, 130, 246, 0.4)",
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-jp text-xl font-bold text-white drop-shadow-lg">
                忍
              </span>
            </motion.div>

            {/* Chakra particles orbiting */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const angle = (i / 6) * 360;
              const rad = (angle * Math.PI) / 180;
              const distance = 70;
              return (
                <motion.div
                  key={i}
                  className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300"
                  style={{
                    boxShadow: "0 0 10px 2px rgba(103, 232, 249, 0.9)",
                  }}
                  animate={{
                    x: Math.cos(rad) * distance,
                    y: Math.sin(rad) * distance,
                    rotate: 360,
                  }}
                  transition={{
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                />
              );
            })}
          </div>

          {/* Loading bar */}
          <div className="mt-12 h-[3px] w-56 overflow-hidden rounded-full bg-line">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #ff7a00, #ffd60a)",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          {/* Loading text */}
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.4em] text-muted">
            charging chakra
          </p>

          {/* Kanji subtitle */}
          <p className="mt-2 font-jp text-xs tracking-[0.3em] text-naruto">
            忍 者 の 道
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}