"use client";
import { motion } from "framer-motion";
import { skillBars, services } from "@/data/skills";

export default function Skills() {
  const rankMap = ["S", "A", "B"];

  return (
    <section
      id="skills"
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
        <span className="font-marker text-xs text-muted">[ 03 ]</span>
        <div className="h-px flex-1 bg-gradient-to-r from-chakra/60 to-transparent" />
        <span className="font-jp text-xs text-muted">忍 術 一 覧</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative mb-16 font-marker text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl"
      >
        Jutsu <span className="text-chakra">Arsenal</span>
        <svg
          className="absolute -bottom-3 left-0 w-full max-w-[340px]"
          height="16"
          viewBox="0 0 340 16"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 3 9 Q 85 2, 170 7 T 337 5"
            stroke="#ffd60a"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </motion.h2>

      {/* ============================================================
          MARKER-STYLE RANK BADGE — Vertical S-RANK paper strip
          ============================================================ */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-14 flex items-stretch gap-6"
      >
        {/* Vertical marker rank strip */}
        <div
          className="relative flex flex-col items-center justify-center px-4 py-6"
          style={{
            background: "linear-gradient(180deg, #f5efe0 0%, #e8dec4 100%)",
            boxShadow:
              "0 12px 40px -12px rgba(255, 122, 0, 0.6), inset 0 0 30px rgba(139, 90, 43, 0.15)",
            border: "1px solid rgba(255, 122, 0, 0.4)",
          }}
        >
          <div
            className="absolute -top-1 left-0 right-0 h-2"
            style={{
              background:
                "repeating-linear-gradient(90deg, #f5efe0 0, #f5efe0 3px, transparent 3px, transparent 5px)",
            }}
          />
          <span
            className="font-marker text-3xl leading-none text-[#1a0f04]"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              letterSpacing: "0.2em",
            }}
          >
            S-RANK
          </span>
          <div
            className="mt-3 flex h-8 w-8 items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #c8102e 0%, #8b0000 100%)",
              borderRadius: "2px",
              transform: "rotate(-6deg)",
            }}
          >
            <span className="font-jp text-xs font-bold text-[#f5efe0]">認</span>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col justify-center">
          <p
            className="font-marker text-2xl leading-tight text-naruto sm:text-3xl"
            style={{ textShadow: "0 0 20px rgba(255, 122, 0, 0.4)" }}
          >
            Master of Ninjutsu
          </p>
          <p className="mt-2 font-marker text-sm text-muted">
            // classification:{" "}
            <span className="text-chakra">elite_specialist</span>
          </p>
          <p className="mt-1 font-jp text-[10px] tracking-[0.3em] text-naruto/60">
            特 級 忍 者
          </p>
        </div>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* ============================================================
            LEFT — Chakra Skill Bars (cream paper scroll)
            ============================================================ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Top bamboo roller */}
          <div className="relative">
            <div
              className="h-3 w-full"
              style={{
                background:
                  "linear-gradient(180deg, #14b8a6 0%, #0f766e 40%, #0d3b47 70%, #082f36 100%)",
                borderRadius: "2px",
                boxShadow:
                  "0 4px 12px rgba(13, 59, 71, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)",
              }}
            />
            <div
              className="absolute -left-2 top-0 h-3 w-2 rounded-sm"
              style={{
                background: "linear-gradient(180deg, #b45309 0%, #451a03 100%)",
              }}
            />
            <div
              className="absolute -right-2 top-0 h-3 w-2 rounded-sm"
              style={{
                background: "linear-gradient(180deg, #b45309 0%, #451a03 100%)",
              }}
            />
          </div>

          {/* Paper body */}
          <div
            className="relative px-6 py-6"
            style={{
              background: "linear-gradient(180deg, #f5efe0 0%, #e8dec4 100%)",
              boxShadow:
                "inset 0 0 60px rgba(139, 90, 43, 0.15), 0 15px 40px -15px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(92deg, transparent 0, transparent 22px, rgba(139, 90, 43, 0.06) 22px, rgba(139, 90, 43, 0.06) 23px),
                  repeating-linear-gradient(2deg, transparent 0, transparent 45px, rgba(139, 90, 43, 0.04) 45px, rgba(139, 90, 43, 0.04) 46px)
                `,
              }}
            />

            {/* Header */}
            <div className="relative mb-5 flex items-center justify-between border-b border-dashed border-[#1a0f04]/30 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-jp text-base font-bold text-[#1a0f04]">
                  術
                </span>
                <span
                  className="font-marker text-sm text-[#1a0f04]"
                  style={{ letterSpacing: "0.05em" }}
                >
                  techniques.log
                </span>
              </div>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c8102e]" />
                <span className="font-marker text-xs text-[#1a0f04]/60">
                  active
                </span>
              </span>
            </div>

            {/* Skill bars */}
            <div className="relative space-y-5">
              {skillBars.map((s, i) => (
                <div key={s.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span
                      className="font-marker text-sm text-[#1a0f04]"
                      style={{ letterSpacing: "0.02em" }}
                    >
                      {s.name}
                    </span>
                    <span
                      className="font-marker text-base text-[#c8102e]"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      {s.level}%
                    </span>
                  </div>

                  <div className="relative h-2.5 overflow-hidden bg-[#1a0f04]/15">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative h-full"
                      style={{
                        background:
                          "linear-gradient(90deg, #1a0f04 0%, #4a2a08 100%)",
                        boxShadow: "2px 0 6px rgba(26, 15, 4, 0.4)",
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(90deg, transparent 0, transparent 3px, rgba(245, 239, 224, 0.4) 3px, rgba(245, 239, 224, 0.4) 4px)",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom strip */}
            <div className="relative mt-6 flex items-center justify-between border-t border-dashed border-[#1a0f04]/30 pt-3">
              <span
                className="font-marker text-xs text-[#1a0f04]/70"
                style={{ letterSpacing: "0.1em" }}
              >
                total: {skillBars.length} jutsu
              </span>
              <span
                className="font-marker text-xs text-[#c8102e]"
                style={{ letterSpacing: "0.1em" }}
              >
                MASTERED
              </span>
            </div>
          </div>

          {/* Bottom bamboo roller */}
          <div className="relative">
            <div
              className="h-3 w-full"
              style={{
                background:
                  "linear-gradient(180deg, #0d3b47 0%, #0f766e 60%, #14b8a6 100%)",
                borderRadius: "2px",
                boxShadow:
                  "0 4px 12px rgba(13, 59, 71, 0.5), inset 0 -2px 4px rgba(255,255,255,0.2)",
              }}
            />
            <div
              className="absolute -left-2 top-0 h-3 w-2 rounded-sm"
              style={{
                background: "linear-gradient(180deg, #451a03 0%, #b45309 100%)",
              }}
            />
            <div
              className="absolute -right-2 top-0 h-3 w-2 rounded-sm"
              style={{
                background: "linear-gradient(180deg, #451a03 0%, #b45309 100%)",
              }}
            />
          </div>
        </motion.div>

        {/* ============================================================
            RIGHT — Service Cards with marker rank badges
            ============================================================ */}
        <div className="space-y-5">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-marker text-sm text-naruto"
            style={{ letterSpacing: "0.15em" }}
          >
            → available_for
          </motion.p>

          {services.map((s, i) => {
            const elements = ["火", "水", "風"];
            const element = elements[i % elements.length];
            const rank = rankMap[i] || "C";

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative flex items-stretch"
              >
                {/* Marker rank badge */}
                <div
                  className="relative flex w-14 shrink-0 items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(180deg, #f5efe0 0%, #e8dec4 100%)",
                    borderRight: "1px dashed rgba(26, 15, 4, 0.4)",
                  }}
                >
                  <span
                    className="font-marker text-2xl text-[#1a0f04]"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "upright",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {rank}
                  </span>
                </div>

                {/* Card body */}
                <div
                  className="relative flex-1 p-5 transition-all duration-300 group-hover:translate-x-1"
                  style={{
                    background:
                      "linear-gradient(180deg, #f5efe0 0%, #e8dec4 100%)",
                    boxShadow:
                      "0 10px 30px -12px rgba(255, 122, 0, 0.4), inset 0 0 40px rgba(139, 90, 43, 0.1)",
                    clipPath:
                      "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)",
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(2deg, transparent 0, transparent 40px, rgba(139, 90, 43, 0.06) 40px, rgba(139, 90, 43, 0.06) 41px)",
                    }}
                  />

                  <div className="relative flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center transition-transform duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, #c8102e 0%, #8b0000 100%)",
                        borderRadius: "3px",
                        transform: "rotate(-5deg)",
                        boxShadow: "0 0 20px rgba(200, 16, 46, 0.4)",
                      }}
                    >
                      <span className="font-jp text-xl font-bold text-[#f5efe0]">
                        {element}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h4
                        className="font-marker text-lg leading-tight text-[#1a0f04]"
                        style={{ letterSpacing: "0.02em" }}
                      >
                        {s.title}
                      </h4>
                      <p className="mt-1.5 font-marker text-sm text-[#1a0f04]/70">
                        &gt; {s.desc}
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-3 flex items-center justify-between border-t border-dashed border-[#1a0f04]/30 pt-2.5">
                    <span
                      className="font-marker text-xs text-[#1a0f04]/60"
                      style={{ letterSpacing: "0.2em" }}
                    >
                      NO.{String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-marker text-xs text-[#c8102e]"
                      style={{ letterSpacing: "0.15em" }}
                    >
                      CLASSIFIED
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Elements row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-4"
          >
            <span
              className="font-marker text-sm text-muted"
              style={{ letterSpacing: "0.2em" }}
            >
              五 大 元 素
            </span>
            <div className="h-px flex-1 bg-naruto/20" />
            <div className="flex items-center gap-3">
              {["火", "水", "風", "雷", "土"].map((c, i) => (
                <span
                  key={c}
                  className="font-jp text-lg text-naruto/60 transition-colors hover:text-naruto"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}