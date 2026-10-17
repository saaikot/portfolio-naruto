"use client";
import { motion } from "framer-motion";

// ✏️ এখানে তোমার Experience / Education অ্যাড করো
const timeline = [
  {
    type: "work",
    rank: "S",
    title: "Frontend Developer",
    org: "Freelance",
    period: "2024 — Present",
    desc: "Building responsive Next.js applications for clients worldwide. Focused on performance, SEO and clean UI.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    type: "work",
    rank: "A",
    title: "Junior Web Developer",
    org: "Company Name",
    period: "2023 — 2024",
    desc: "Developed and maintained React dashboards, integrated REST APIs and improved load time by 40%.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    type: "edu",
    rank: "学",
    title: "BSc in Computer Science",
    org: "University Name",
    period: "2019 — 2023",
    desc: "Graduated with focus on web technologies, algorithms and software engineering.",
    tags: ["CGPA 3.5"],
  },
  {
    type: "edu",
    rank: "学",
    title: "Higher Secondary Certificate",
    org: "College Name",
    period: "2017 — 2019",
    desc: "Science background with strong foundation in mathematics and physics.",
    tags: [],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
        <span className="font-marker text-xs text-muted">[ 05 ]</span>
        <div className="h-px flex-1 bg-gradient-to-r from-leaf/60 to-transparent" />
        <span className="font-jp text-xs text-muted">階 級 一 覧</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative mb-4 font-marker text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl"
      >
        Ninja <span className="text-leaf">Rank History</span>
        <svg
          className="absolute -bottom-3 left-0 w-full max-w-[420px]"
          height="16"
          viewBox="0 0 420 16"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 3 9 Q 105 2, 210 7 T 417 5"
            stroke="#2d7a3e"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16 font-marker text-sm text-muted"
      >
        <span className="text-blood">&gt;</span> experience &amp; education
      </motion.p>

      {/* ===== Timeline ===== */}
      <div className="relative mx-auto max-w-4xl">
        {/* Bamboo stalk — vertical */}
        <div
          className="absolute left-[19px] top-4 h-[calc(100%-2rem)] w-[6px] md:left-1/2 md:-translate-x-1/2"
          style={{
            background:
              "linear-gradient(90deg, #0d3b47 0%, #14b8a6 30%, #0f766e 70%, #082f36 100%)",
            borderRadius: "3px",
            boxShadow:
              "0 0 12px rgba(20, 184, 166, 0.4), inset 0 0 4px rgba(0,0,0,0.5)",
          }}
        >
          {/* Bamboo segments */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-[2px]"
              style={{
                top: `${(i + 1) * 16}%`,
                background:
                  "linear-gradient(90deg, transparent, rgba(0,0,0,0.6), transparent)",
              }}
            />
          ))}
        </div>

        <div className="space-y-12">
          {timeline.map((item, i) => {
            const isRight = i % 2 === 1;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  isRight ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* ===== Kunai node marker ===== */}
                <div className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  {/* Kunai shape — diamond + ring */}
                  <div
                    className="relative flex h-10 w-10 items-center justify-center"
                    style={{
                      background:
                        item.type === "work"
                          ? "linear-gradient(135deg, #c8102e 0%, #8b0000 100%)"
                          : "linear-gradient(135deg, #1e3a8a 0%, #0d1a3a 100%)",
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      boxShadow:
                        item.type === "work"
                          ? "0 0 20px rgba(200, 16, 46, 0.6)"
                          : "0 0 20px rgba(30, 58, 138, 0.6)",
                    }}
                  >
                    <span className="font-marker text-base text-[#f5efe0]">
                      {item.rank}
                    </span>
                  </div>
                  {/* Pulse ring */}
                  <span
                    className="absolute inset-0 animate-ping"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      background:
                        item.type === "work"
                          ? "rgba(200, 16, 46, 0.3)"
                          : "rgba(30, 58, 138, 0.3)",
                    }}
                  />
                </div>

                {/* ===== Card ===== */}
                <div
                  className={`ml-16 w-full md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    isRight ? "md:mr-auto" : "md:ml-auto"
                  }`}
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
                          "0 3px 10px rgba(13, 59, 71, 0.5), inset 0 2px 3px rgba(255,255,255,0.2)",
                      }}
                    />
                    <div
                      className="absolute -left-2 top-0 h-3 w-2 rounded-sm"
                      style={{
                        background:
                          "linear-gradient(180deg, #b45309 0%, #451a03 100%)",
                      }}
                    />
                    <div
                      className="absolute -right-2 top-0 h-3 w-2 rounded-sm"
                      style={{
                        background:
                          "linear-gradient(180deg, #b45309 0%, #451a03 100%)",
                      }}
                    />
                  </div>

                  {/* Paper body */}
                  <div
                    className="relative px-5 py-5"
                    style={{
                      background:
                        "linear-gradient(180deg, #f5efe0 0%, #e8dec4 100%)",
                      boxShadow:
                        "0 15px 40px -15px rgba(255, 122, 0, 0.35), inset 0 0 50px rgba(139, 90, 43, 0.1)",
                    }}
                  >
                    {/* Paper texture */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-25"
                      style={{
                        backgroundImage: `repeating-linear-gradient(2deg, transparent 0, transparent 40px, rgba(139, 90, 43, 0.06) 40px, rgba(139, 90, 43, 0.06) 41px)`,
                      }}
                    />

                    {/* Header row */}
                    <div className="relative mb-3 flex items-center justify-between border-b border-dashed border-[#1a0f04]/30 pb-2">
                      <span className="font-marker text-sm tracking-wider text-[#c8102e]">
                        {item.period}
                      </span>
                      <span className="font-jp text-xs tracking-[0.2em] text-[#1a0f04]/60">
                        {item.type === "work" ? "務" : "学"}
                      </span>
                    </div>

                    {/* Title + org */}
                    <h3 className="relative font-marker text-xl leading-tight text-[#1a0f04]">
                      {item.title}
                    </h3>
                    <p className="relative mt-1 font-marker text-sm text-[#1a0f04]/70">
                      @ {item.org}
                    </p>

                    {/* Description */}
                    <p className="relative mt-3 font-marker text-sm leading-relaxed text-[#1a0f04]/70">
                      {item.desc}
                    </p>

                    {/* Tags */}
                    {item.tags.length > 0 && (
                      <div className="relative mt-4 flex flex-wrap gap-1.5 border-t border-dashed border-[#1a0f04]/30 pt-3">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="border border-[#1a0f04]/30 bg-[#1a0f04]/5 px-2 py-0.5 font-marker text-[10px] text-[#1a0f04]/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Bottom stamp */}
                    <div className="relative mt-4 flex items-center justify-between border-t border-dashed border-[#1a0f04]/30 pt-2">
                      <span className="font-marker text-[10px] tracking-[0.2em] text-[#1a0f04]/50">
                        NO.{String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-marker text-[10px] tracking-wider ${
                          item.type === "work"
                            ? "text-[#c8102e]"
                            : "text-rasengan"
                        }`}
                      >
                        {item.type === "work" ? "MISSION" : "TRAINING"}
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
                          "0 3px 10px rgba(13, 59, 71, 0.5), inset 0 -2px 3px rgba(255,255,255,0.2)",
                      }}
                    />
                    <div
                      className="absolute -left-2 top-0 h-3 w-2 rounded-sm"
                      style={{
                        background:
                          "linear-gradient(180deg, #451a03 0%, #b45309 100%)",
                      }}
                    />
                    <div
                      className="absolute -right-2 top-0 h-3 w-2 rounded-sm"
                      style={{
                        background:
                          "linear-gradient(180deg, #451a03 0%, #b45309 100%)",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}