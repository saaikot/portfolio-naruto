"use client";
import { motion } from "framer-motion";
import { profile, navLinks } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-naruto/20">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255, 122, 0, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Top bamboo roller */}
      <div className="relative">
        <div
          className="h-3 w-full"
          style={{
            background:
              "linear-gradient(180deg, #14b8a6 0%, #0f766e 40%, #0d3b47 70%, #082f36 100%)",
            boxShadow:
              "0 3px 10px rgba(13, 59, 71, 0.5), inset 0 2px 3px rgba(255,255,255,0.2)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8">
        {/* ===== Main content ===== */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Headband logo */}
            <a href="#home" className="group flex items-center gap-3">
              {/* Mini headband */}
              <div className="relative flex items-center">
                <div
                  className="flex items-center gap-1 px-1 py-1"
                  style={{
                    background:
                      "linear-gradient(180deg, #2a1a08 0%, #1a0f04 100%)",
                    border: "1px solid rgba(255, 122, 0, 0.4)",
                    borderRadius: "2px",
                  }}
                >
                  <div
                    className="relative flex h-6 w-8 items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(180deg, #d4d4d4 0%, #a3a3a3 50%, #737373 100%)",
                      border: "1px solid #525252",
                      borderRadius: "2px",
                      boxShadow:
                        "0 1px 2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-180"
                      fill="none"
                      stroke="#1a1208"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    >
                      <path d="M12 4 C 16 4, 19 7, 19 11 C 19 15, 15.5 18, 12 18 C 9 18, 6.5 16, 6 13" />
                      <path d="M6 13 C 5.5 11, 7 9, 9 9 C 11 9, 12 10.5, 12 12" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex items-baseline gap-1.5">
                <span
                  className="font-marker text-lg tracking-wider"
                  style={{ color: "#f5efe0" }}
                >
                  {profile.initials}
                </span>
                <span className="font-jp text-xs text-naruto/70 whitespace-nowrap">
                  木ノ葉
                </span>
              </div>
            </a>

            <p className="mt-4 max-w-xs font-marker text-sm leading-relaxed text-muted">
              {profile.title} — building modern web experiences.
            </p>
          </motion.div>

          {/* Navigate links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="mb-4 font-marker text-xs uppercase tracking-[0.2em] text-naruto">
              // navigate
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group inline-flex items-center gap-1.5 font-marker text-sm text-muted transition-colors hover:text-naruto"
                >
                  <span className="text-naruto/40 transition-colors group-hover:text-naruto">
                    ›
                  </span>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Status + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="mb-4 font-marker text-xs uppercase tracking-[0.2em] text-naruto">
              // status
            </p>
            <p className="flex items-center gap-2 font-marker text-sm text-muted">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-leaf" />
              available for work
            </p>

            <a
              href="#contact"
              className="group relative mt-5 inline-flex items-center gap-2 px-5 py-2.5 transition-all duration-200 hover:brightness-110"
              style={{
                background:
                  "linear-gradient(180deg, #ff9a3d 0%, #ff7a00 50%, #cc5e00 100%)",
                color: "#1a1208",
                boxShadow:
                  "0 6px 20px rgba(255, 122, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                clipPath:
                  "polygon(8px 0, calc(100% - 4px) 0, 100% 50%, calc(100% - 4px) 100%, 8px 100%, 0 50%)",
              }}
            >
              <span className="font-jp text-sm">召喚</span>
              <span className="font-marker text-sm">hire me</span>
            </a>
          </motion.div>
        </div>

        {/* ===== Chakra divider ===== */}
        <div className="relative mt-12 mb-6 h-px">
          <div
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(90deg, transparent 0, transparent 6px, rgba(255, 122, 0, 0.3) 6px, rgba(255, 122, 0, 0.3) 12px)",
            }}
          />
        </div>

        {/* ===== Bottom bar ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p className="font-marker text-xs text-muted">
            © 2026{" "}
            <span className="text-naruto">{profile.name}</span>. all rights
            reserved.
          </p>

          {/* Village crest + built with */}
          <div className="flex items-center gap-3 font-marker text-xs text-muted">
            <span>built with</span>
            {/* Konoha crest */}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="#ff7a00"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <path d="M12 4 C 16 4, 19 7, 19 11 C 19 15, 15.5 18, 12 18 C 9 18, 6.5 16, 6 13" />
              <path d="M6 13 C 5.5 11, 7 9, 9 9 C 11 9, 12 10.5, 12 12" />
            </svg>
            <span>
              <span className="text-naruto">next.js</span> +{" "}
              <span className="text-chakra">tailwind</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom bamboo roller */}
      <div className="relative">
        <div
          className="h-3 w-full"
          style={{
            background:
              "linear-gradient(180deg, #0d3b47 0%, #0f766e 60%, #14b8a6 100%)",
            boxShadow:
              "0 3px 10px rgba(13, 59, 71, 0.5), inset 0 -2px 3px rgba(255,255,255,0.2)",
          }}
        />
      </div>
    </footer>
  );
}