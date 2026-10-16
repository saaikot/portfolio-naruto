"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiCopy, FiCheck, FiDownload } from "react-icons/fi";
import { useState } from "react";
import { profile } from "@/data/profile";

export default function About() {
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      {/* ===== Section heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-16 flex items-center gap-4"
      >
        <span className="font-marker text-xs text-muted">[ 02 ]</span>
        <div className="h-px flex-1 bg-gradient-to-r from-naruto/60 to-transparent" />
        <span className="font-jp text-xs text-muted">忍 記 録</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative mb-16 font-marker text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl"
      >
        Shinobi <span className="text-naruto">Profile</span>
        <svg
          className="absolute -bottom-3 left-0 w-full max-w-[340px]"
          height="16"
          viewBox="0 0 340 16"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 3 9 Q 85 2, 170 7 T 337 5"
            stroke="#ff7a00"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </motion.h2>

      {/* ============================================================
          CLOSED SCROLL → click to open
          ============================================================ */}
      {!opened && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center py-16"
        >
          <button
            onClick={() => setOpened(true)}
            className="group relative flex items-center justify-center"
            aria-label="Open scroll"
          >
            {/* Glow */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,122,0,0.25) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />

            {/* Left roller */}
            <div className="relative transition-transform duration-500 group-hover:-translate-x-3">
              <RollerVertical />
            </div>

            {/* Middle — closed paper (thin) */}
            <div
              className="relative -mx-1 h-32 w-3"
              style={{
                background:
                  "linear-gradient(180deg, #f5efe0 0%, #d4c9a8 100%)",
              }}
            />

            {/* Right roller */}
            <div className="relative transition-transform duration-500 group-hover:translate-x-3">
              <RollerVertical />
            </div>

            {/* Red rope — tied */}
            <motion.svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="absolute transition-opacity duration-500 group-hover:opacity-30"
            >
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="14"
                fill="none"
                stroke="#dc2626"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="14"
                fill="none"
                stroke="#991b1b"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              <path
                d="M 20 55 Q 15 70, 25 75"
                fill="none"
                stroke="#dc2626"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 30 58 Q 28 72, 38 78"
                fill="none"
                stroke="#991b1b"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* Kanji label on scroll */}
            <span className="absolute font-jp text-lg font-bold text-[#1a0f04] tracking-widest">
              忍
            </span>
          </button>

          {/* Hint text — marker font */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 font-marker text-sm uppercase tracking-[0.2em] text-naruto/70"
          >
            ↑ click the scroll to open
          </motion.p>
          <p className="mt-2 font-jp text-[10px] tracking-[0.3em] text-muted">
            巻 物 を タ ッ プ
          </p>
        </motion.div>
      )}

      {/* ============================================================
          OPENED SCROLL → full content
          ============================================================ */}
      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr]">
              {/* ============ LEFT — Open Scroll with Photo ============ */}
              <div className="relative mx-auto w-full max-w-[440px]">
                {/* Top bamboo roller */}
                <div className="relative">
                  <div
                    className="h-6 w-full"
                    style={{
                      background:
                        "linear-gradient(180deg, #14b8a6 0%, #0f766e 30%, #0d3b47 70%, #082f36 100%)",
                      borderRadius: "3px",
                      boxShadow:
                        "0 6px 18px rgba(13, 59, 71, 0.6), inset 0 3px 6px rgba(255, 255, 255, 0.2), inset 0 -3px 6px rgba(0, 0, 0, 0.5)",
                    }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 flex justify-around"
                    style={{ height: "24px" }}
                  >
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-px"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent, rgba(0,0,0,0.5), transparent)",
                        }}
                      />
                    ))}
                  </div>
                  <div
                    className="absolute -left-3 top-0 h-6 w-3 rounded-sm"
                    style={{
                      background:
                        "linear-gradient(180deg, #b45309 0%, #78350f 50%, #451a03 100%)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
                    }}
                  />
                  <div
                    className="absolute -right-3 top-0 h-6 w-3 rounded-sm"
                    style={{
                      background:
                        "linear-gradient(180deg, #b45309 0%, #78350f 50%, #451a03 100%)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
                    }}
                  />
                </div>

                {/* Paper body */}
                <div
                  className="relative px-6 py-7"
                  style={{
                    background:
                      "linear-gradient(180deg, #2a1f10 0%, #1f1608 50%, #2a1f10 100%)",
                    boxShadow:
                      "0 25px 70px -20px rgba(255, 122, 0, 0.4), inset 0 0 100px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-50"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(92deg, transparent 0, transparent 22px, rgba(255, 122, 0, 0.04) 22px, rgba(255, 122, 0, 0.04) 23px),
                        repeating-linear-gradient(2deg, transparent 0, transparent 45px, rgba(0, 0, 0, 0.18) 45px, rgba(0, 0, 0, 0.18) 46px)
                      `,
                    }}
                  />
                  <div
                    className="pointer-events-none absolute left-0 top-0 h-28 w-28 opacity-40"
                    style={{
                      background:
                        "radial-gradient(ellipse at top left, rgba(0, 0, 0, 0.6) 0%, transparent 70%)",
                    }}
                  />

                  {/* Header */}
                  <div className="relative mb-4 flex items-center justify-between border-b border-naruto/25 pb-3">
                    <div className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="#ff7a00"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      >
                        <path d="M12 4 C 16 4, 19 7, 19 11 C 19 15, 15.5 18, 12 18 C 9 18, 6.5 16, 6 13" />
                        <path d="M6 13 C 5.5 11, 7 9, 9 9 C 11 9, 12 10.5, 12 12" />
                      </svg>
                      <span className="font-marker text-sm tracking-wider text-naruto">
                        忍 者 登 録 票
                      </span>
                    </div>
                    <span className="font-marker text-xs tracking-widest text-naruto/50">
                      NO. 007
                    </span>
                  </div>

                  {/* Photo */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div
                      className="absolute inset-0 z-10 pointer-events-none"
                      style={{
                        border: "2px solid rgba(255, 122, 0, 0.25)",
                        boxShadow: "inset 0 0 40px rgba(0, 0, 0, 0.6)",
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, #2a1f10 0%, #1f1608 100%)",
                      }}
                    />

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={profile.aboutImage || profile.avatar}
                      alt={profile.name}
                      className="relative h-full w-full object-cover opacity-85 contrast-[1.05] sepia-[0.35] transition-all duration-700 hover:opacity-100 hover:sepia-0"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <svg
                        viewBox="0 0 200 200"
                        className="h-52 w-52 opacity-80"
                        fill="none"
                        stroke="#ff7a00"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      >
                        <path d="M 160 100 A 60 60 0 1 1 100 40 C 60 40, 40 70, 45 100" />
                        <path
                          d="M 100 100 C 90 90, 80 95, 85 105"
                          strokeWidth="2.5"
                        />
                      </svg>
                      <span
                        className="absolute font-jp text-7xl font-bold"
                        style={{
                          color: "#ff7a00",
                          textShadow: "0 0 30px rgba(255, 122, 0, 0.8)",
                        }}
                      >
                        忍
                      </span>
                    </div>

                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse at 50% 45%, transparent 35%, rgba(20, 12, 0, 0.85) 100%)",
                      }}
                    />
                  </div>

                  {/* Bottom info — marker font */}
                  <div className="relative mt-5 flex items-center justify-between">
                    <div>
                      <p className="font-jp text-[10px] tracking-[0.2em] text-naruto/60">
                        出 身
                      </p>
                      <p className="mt-1 font-marker text-base text-ink">
                        {profile.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-leaf" />
                      <span className="font-marker text-xs tracking-widest text-leaf">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom bamboo roller */}
                <div className="relative">
                  <div
                    className="h-6 w-full"
                    style={{
                      background:
                        "linear-gradient(180deg, #14b8a6 0%, #0f766e 30%, #082f36 70%, #0d3b47 100%)",
                      borderRadius: "3px",
                      boxShadow:
                        "0 6px 18px rgba(13, 59, 71, 0.6), inset 0 3px 6px rgba(255, 255, 255, 0.2), inset 0 -3px 6px rgba(0, 0, 0, 0.5)",
                    }}
                  />
                  <div
                    className="absolute -left-3 top-0 h-6 w-3 rounded-sm"
                    style={{
                      background:
                        "linear-gradient(180deg, #b45309 0%, #78350f 50%, #451a03 100%)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
                    }}
                  />
                  <div
                    className="absolute -right-3 top-0 h-6 w-3 rounded-sm"
                    style={{
                      background:
                        "linear-gradient(180deg, #b45309 0%, #78350f 50%, #451a03 100%)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
                    }}
                  />
                </div>

                {/* Red hanko seal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -25 }}
                  animate={{ opacity: 1, scale: 1, rotate: -10 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="absolute -bottom-8 -right-8 flex h-24 w-24 items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #c8102e 0%, #8b0000 100%)",
                    borderRadius: "5px",
                    boxShadow:
                      "0 0 40px rgba(200, 16, 46, 0.7), inset 0 0 25px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <div
                    className="flex h-[84px] w-[84px] flex-col items-center justify-center"
                    style={{ border: "1px dashed rgba(245, 239, 224, 0.5)" }}
                  >
                    <span className="font-jp text-3xl font-bold text-[#f5efe0]">
                      承認
                    </span>
                    <span className="mt-1 font-marker text-[10px] tracking-widest text-[#f5efe0]/70">
                      APPROVED
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* ============ RIGHT — Bio ============ */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="font-jp text-base tracking-widest text-naruto">
                  <span className="text-akatsuki">&gt;</span> 忍 者 の 物 語
                </p>
                <p className="mt-2 font-marker text-sm text-muted">
                  // about_the_sorcerer
                </p>

                <h3 className="relative mt-6 font-marker text-3xl leading-snug tracking-tight sm:text-4xl">
                  Turning ideas into{" "}
                  <span className="text-naruto">ninja techniques</span>.
                </h3>

                <p className="mt-7 text-base leading-relaxed text-muted">
                  {profile.bio1}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {profile.bio2}
                </p>

                {/* Facts — marker font values */}
                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { jp: "経 験", value: "2+ YR" },
                    { jp: "任 務", value: "20+" },
                    { jp: "村", value: "DHK" },
                    { jp: "状 態", value: "OPEN" },
                  ].map((f) => (
                    <div
                      key={f.jp}
                      className="p-4 text-center transition-all duration-300 hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(180deg, #2a1f10 0%, #1f1608 100%)",
                        border: "1px solid rgba(255, 122, 0, 0.35)",
                        clipPath:
                          "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                        boxShadow: "0 8px 20px -8px rgba(255, 122, 0, 0.3)",
                      }}
                    >
                      <p className="font-jp text-xs tracking-widest text-naruto/70">
                        {f.jp}
                      </p>
                      <p className="mt-2 font-marker text-xl text-naruto">
                        {f.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Buttons — marker font */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 px-5 py-3 font-marker text-sm transition-all duration-200"
                    style={{
                      background: "rgba(255, 122, 0, 0.08)",
                      border: "1px solid rgba(255, 122, 0, 0.4)",
                      color: copied ? "#4ade80" : "#b8a98a",
                      clipPath:
                        "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                    }}
                  >
                    {copied ? (
                      <>
                        <FiCheck size={14} />
                        <span>copied!</span>
                      </>
                    ) : (
                      <>
                        <FiCopy size={14} />
                        {profile.email}
                      </>
                    )}
                  </button>

                  <a
                    href={profile.resumeUrl}
                    download
                    className="inline-flex items-center gap-2 px-5 py-3 font-marker text-sm uppercase tracking-wider text-[#1a1208] transition-all duration-200 hover:brightness-110"
                    style={{
                      background:
                        "linear-gradient(180deg, #ff9a3d 0%, #ff7a00 50%, #cc5e00 100%)",
                      boxShadow:
                        "0 8px 24px rgba(255, 122, 0, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3)",
                      clipPath:
                        "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                    }}
                  >
                    <FiDownload size={14} /> 巻 物 · RESUME
                  </a>
                </div>

                {/* Close button — marker */}
                <button
                  onClick={() => setOpened(false)}
                  className="mt-8 font-marker text-xs uppercase tracking-widest text-muted transition-colors hover:text-naruto"
                >
                  ← close scroll
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ===== Vertical bamboo roller for closed state =====
function RollerVertical() {
  return (
    <div className="relative h-32 w-8">
      <div
        className="absolute inset-0 rounded-sm"
        style={{
          background:
            "linear-gradient(90deg, #0d3b47 0%, #14b8a6 30%, #0f766e 70%, #0d3b47 100%)",
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.5), inset -3px 0 8px rgba(0,0,0,0.4), inset 3px 0 8px rgba(255,255,255,0.1)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0, transparent 7px, rgba(255,255,255,0.15) 7px, rgba(255,255,255,0.15) 8px)",
        }}
      />
      <div
        className="absolute -top-1 left-0 right-0 h-3"
        style={{
          background:
            "linear-gradient(180deg, #b45309 0%, #78350f 50%, #451a03 100%)",
          borderRadius: "2px",
        }}
      />
      <div
        className="absolute -bottom-1 left-0 right-0 h-3"
        style={{
          background:
            "linear-gradient(180deg, #451a03 0%, #78350f 50%, #b45309 100%)",
          borderRadius: "2px",
        }}
      />
    </div>
  );
}