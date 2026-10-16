"use client";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";
import { SiVercel } from "react-icons/si";
import { profile } from "@/data/profile";
import useTypewriter from "@/hooks/useTypewriter";

function InfoLine({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-jp text-[10px] tracking-widest text-naruto/60 shrink-0 w-8">
        {label}
      </span>
      <svg
        className="shrink-0"
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
      >
        <path
          d="M 2 5 Q 7 4, 12 5"
          stroke="rgba(255, 122, 0, 0.4)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`flex-1 font-marker text-sm leading-snug ${
          accent ? "text-akatsuki font-bold" : "text-ink"
        }`}
        style={{ letterSpacing: "0.02em" }}
      >
        {value}
      </span>
    </div>
  );
}

function BambooRoller({ position = "top" }: { position?: "top" | "bottom" }) {
  return (
    <div className="relative h-5 w-full">
      <div
        className="absolute inset-0"
        style={{
          background:
            position === "top"
              ? "linear-gradient(180deg, #14b8a6 0%, #0f766e 40%, #0d3b47 70%, #082f36 100%)"
              : "linear-gradient(180deg, #0d3b47 0%, #082f36 30%, #0f766e 70%, #14b8a6 100%)",
          borderRadius: "2px",
          boxShadow:
            "0 4px 12px rgba(13, 59, 71, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.5)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0, transparent 8px, rgba(255,255,255,0.08) 8px, rgba(255,255,255,0.08) 9px)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 flex justify-around"
        style={{ height: "20px" }}
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
        className="absolute -left-3 top-0 h-5 w-3 rounded-sm"
        style={{
          background:
            "linear-gradient(180deg, #b45309 0%, #78350f 50%, #451a03 100%)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
        }}
      />
      <div
        className="absolute -right-3 top-0 h-5 w-3 rounded-sm"
        style={{
          background:
            "linear-gradient(180deg, #b45309 0%, #78350f 50%, #451a03 100%)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
        }}
      />
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  const socials = [
    { icon: FiGithub, href: profile.socials.github, label: "GitHub", char: "忍" },
    { icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn", char: "火" },
    { icon: SiVercel, href: profile.socials.vercel, label: "Vercel", char: "風" },
    { icon: FiMail, href: profile.socials.email, label: "Email", char: "雷" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-5 pb-16 pt-32 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ============================== LEFT ============================== */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <div className="flex items-center">
              <div
                className="flex items-center gap-2 px-3 py-1.5"
                style={{
                  background: "linear-gradient(180deg, #2a1a08 0%, #1a0f04 100%)",
                  border: "1px solid rgba(255, 122, 0, 0.5)",
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)",
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-naruto opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-naruto" />
                </span>
                <span className="font-jp text-[10px] tracking-[0.2em] text-naruto">
                  上忍
                </span>
                <span className="font-marker text-xs tracking-widest text-naruto/80">
                  JONIN
                </span>
              </div>
            </div>
            <span className="font-marker text-xs text-muted">//</span>
            <span className="font-marker text-xs text-muted">
              {profile.location}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1, duration: 0.5 }}
            className="font-jp text-base text-muted"
          >
            <span className="text-naruto">&gt;</span> 木ノ葉隠れ の 忍,
            <span className="ml-2 font-marker text-sm text-ink">i am</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.6 }}
            className="relative mt-3 font-marker text-[52px] leading-[1.02] tracking-tight sm:text-7xl lg:text-[92px]"
          >
            {profile.name}
            <span className="text-naruto">.</span>
            <svg
              className="absolute -bottom-2 left-0 w-full max-w-[280px]"
              height="14"
              viewBox="0 0 280 14"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 3 8 Q 70 2, 140 6 T 277 5"
                stroke="#ff7a00"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M 8 11 Q 80 7, 150 10 T 270 9"
                stroke="#ffd60a"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.35, duration: 0.5 }}
            className="mt-8 flex items-center font-marker text-base text-muted sm:text-lg"
          >
            <span className="text-naruto">jutsu.rank</span>
            <span className="mx-2 text-muted">=</span>
            <span className="text-chakra">&quot;</span>
            <span className="text-ink">{typed}</span>
            <span className="text-chakra">&quot;</span>
            <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-naruto sm:h-5" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base"
          >
            {profile.bio1}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.65, duration: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-200"
              style={{
                background:
                  "linear-gradient(180deg, #ff9a3d 0%, #ff7a00 50%, #cc5e00 100%)",
                color: "#1a1208",
                boxShadow:
                  "0 6px 20px rgba(255, 122, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                clipPath:
                  "polygon(10px 0, calc(100% - 4px) 0, 100% 50%, calc(100% - 4px) 100%, 10px 100%, 0 50%)",
              }}
            >
              <span className="font-jp">召喚</span>
              <span className="font-marker">Summon Me</span>
              <FiArrowRight
                className="transition-transform group-hover:translate-x-1"
                size={14}
              />
            </a>

            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-naruto transition-all duration-200 hover:text-[#1a1208]"
              style={{
                background: "rgba(255, 122, 0, 0.08)",
                border: "1px solid rgba(255, 122, 0, 0.5)",
                clipPath:
                  "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
              }}
            >
              <span className="font-jp">任務</span>
              <span className="font-marker">Missions</span>
            </a>

            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 font-marker text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:text-chakra"
            >
              <FiDownload size={14} /> scroll.pdf
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8, duration: 0.5 }}
            className="mt-10 flex items-center gap-3"
          >
            <span className="font-marker text-[10px] uppercase tracking-widest text-muted">
              connect
            </span>
            <div className="h-px w-10 bg-naruto/40" />
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label, char }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group relative flex h-11 w-11 items-center justify-center"
                >
                  <span
                    className="absolute inset-0 rounded-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(200, 16, 46, 0.15) 0%, rgba(139, 0, 0, 0.15) 100%)",
                      border: "1px solid rgba(200, 16, 46, 0.5)",
                      transform: "rotate(-3deg)",
                    }}
                  />
                  <span className="absolute -top-1 -right-1 font-jp text-[8px] text-akatsuki/70">
                    {char}
                  </span>
                  <Icon
                    size={16}
                    className="relative text-naruto/70 transition-colors group-hover:text-naruto"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ============================== RIGHT — Natural Unroll Scroll ============================== */}
        <div className="relative mx-auto w-full max-w-[380px]">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.5 }}
            className="relative z-20"
          >
            <BambooRoller position="top" />
          </motion.div>

          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{
              delay: 2.9,
              duration: 2.0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="relative px-5 py-6"
              style={{
                background:
                  "linear-gradient(180deg, #2a1f10 0%, #1f1608 50%, #2a1f10 100%)",
                boxShadow:
                  "0 20px 60px -15px rgba(255, 122, 0, 0.3), inset 0 0 80px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(92deg, transparent 0, transparent 20px, rgba(255, 122, 0, 0.03) 20px, rgba(255, 122, 0, 0.03) 21px),
                    repeating-linear-gradient(2deg, transparent 0, transparent 40px, rgba(0, 0, 0, 0.15) 40px, rgba(0, 0, 0, 0.15) 41px)
                  `,
                }}
              />

              <div
                className="pointer-events-none absolute left-0 top-0 h-20 w-20 opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(0, 0, 0, 0.5) 0%, transparent 70%)",
                }}
              />
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse at bottom right, rgba(0, 0, 0, 0.6) 0%, transparent 70%)",
                }}
              />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2">
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
                  <span className="font-jp text-[10px] tracking-[0.3em] text-naruto">
                    忍 者 登 録 票
                  </span>
                </div>
              </div>

              <div className="relative mt-4 aspect-[4/5] overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #2a1f10 0%, #1f1608 100%)",
                    border: "1px solid rgba(255, 122, 0, 0.15)",
                  }}
                />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.heroImage || profile.avatar}
                  alt={profile.name}
                  className="relative h-full w-full object-cover opacity-80 contrast-[1.1] sepia-[0.5] transition-all duration-700 hover:opacity-100 hover:sepia-0"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="h-40 w-40 opacity-70"
                    fill="none"
                    stroke="#ff7a00"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <path d="M 160 100 A 60 60 0 1 1 100 40 C 60 40, 40 70, 45 100" />
                    <path
                      d="M 100 100 C 90 90, 80 95, 85 105"
                      strokeWidth="2"
                    />
                  </svg>
                  <span
                    className="absolute font-jp text-6xl font-bold"
                    style={{
                      color: "#ff7a00",
                      textShadow: "0 0 20px rgba(255, 122, 0, 0.6)",
                    }}
                  >
                    忍
                  </span>
                </div>

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 45%, transparent 30%, rgba(20, 12, 0, 0.85) 100%)",
                  }}
                />
              </div>

              <div className="relative mt-5 space-y-3">
                <InfoLine label="名前" value={profile.name} />
                <InfoLine label="階級" value={profile.title} />
                <InfoLine label="出身" value={profile.location} />
                <InfoLine label="状態" value="ACTIVE MISSION" accent />
              </div>

              <div className="relative mt-6 flex items-end justify-between">
                <div
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                  className="font-jp text-[9px] tracking-[0.3em] text-naruto/50"
                >
                  木 ノ 葉 隠 れ の 里
                </div>

                <div
                  className="flex h-14 w-14 items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #c8102e 0%, #8b0000 100%)",
                    borderRadius: "3px",
                    boxShadow: "0 0 20px rgba(200, 16, 46, 0.5)",
                    transform: "rotate(-4deg)",
                  }}
                >
                  <div
                    className="flex h-[46px] w-[46px] flex-col items-center justify-center"
                    style={{ border: "1px dashed rgba(245, 239, 224, 0.4)" }}
                  >
                    <span className="font-jp text-base font-bold text-[#f5efe0]">
                      認
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <BambooRoller position="bottom" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}