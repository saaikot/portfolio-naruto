"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { categories, projects } from "@/data/projects";

// Rank by category / featured
function getRank(p: { featured: boolean; category: string }) {
  if (p.featured) return "S";
  if (p.category === "web") return "A";
  if (p.category === "app") return "B";
  return "C";
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const list =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
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
        <span className="font-marker text-xs text-muted">[ 04 ]</span>
        <div className="h-px flex-1 bg-gradient-to-r from-naruto/60 to-transparent" />
        <span className="font-jp text-xs text-muted">任 務 一 覧</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative mb-4 font-marker text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl"
      >
        Completed <span className="text-naruto">Missions</span>
        <svg
          className="absolute -bottom-3 left-0 w-full max-w-[400px]"
          height="16"
          viewBox="0 0 400 16"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 3 9 Q 100 2, 200 7 T 397 5"
            stroke="#ff7a00"
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
        className="mb-12 font-marker text-sm text-muted"
      >
        <span className="text-blood">&gt;</span> {projects.length} missions on record
      </motion.p>

      {/* ===== Filter tabs ===== */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="mb-12 flex flex-wrap gap-3"
      >
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`relative px-5 py-2.5 transition-all duration-300 ${
              filter === c.id ? "text-[#1a1208]" : "text-muted hover:text-ink"
            }`}
          >
            <span
              className="pointer-events-none absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: filter === c.id ? 1 : 0,
                background:
                  "linear-gradient(180deg, #ff9a3d 0%, #ff7a00 50%, #cc5e00 100%)",
                clipPath:
                  "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
                boxShadow: "0 4px 12px rgba(255, 122, 0, 0.4)",
              }}
            />
            {filter !== c.id && (
              <span
                className="pointer-events-none absolute inset-0 border border-naruto/30"
                style={{
                  clipPath:
                    "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
                }}
              />
            )}
            <span className="relative font-marker text-sm uppercase tracking-wider">
              {c.label}
            </span>
          </button>
        ))}
      </motion.div>

      {/* ===== Projects grid ===== */}
      <motion.div layout className="grid gap-8 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {list.length === 0 && (
        <p className="py-16 text-center font-marker text-lg text-muted">
          // no_missions_found
        </p>
      )}
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const rank = getRank(project);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      {/* ===== Top bamboo roller ===== */}
      <div className="relative">
        <div
          className="h-4 w-full"
          style={{
            background:
              "linear-gradient(180deg, #14b8a6 0%, #0f766e 40%, #0d3b47 70%, #082f36 100%)",
            borderRadius: "2px",
            boxShadow:
              "0 4px 12px rgba(13, 59, 71, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)",
          }}
        />
        <div
          className="absolute -left-2 top-0 h-4 w-2 rounded-sm"
          style={{
            background: "linear-gradient(180deg, #b45309 0%, #451a03 100%)",
          }}
        />
        <div
          className="absolute -right-2 top-0 h-4 w-2 rounded-sm"
          style={{
            background: "linear-gradient(180deg, #b45309 0%, #451a03 100%)",
          }}
        />
      </div>

      {/* ===== Paper body ===== */}
      <div
        className="relative flex items-stretch"
        style={{
          background: "linear-gradient(180deg, #f5efe0 0%, #e8dec4 100%)",
          boxShadow:
            "0 15px 40px -15px rgba(255, 122, 0, 0.4), inset 0 0 60px rgba(139, 90, 43, 0.1)",
        }}
      >
        {/* Vertical rank badge */}
        <div
          className="relative flex w-12 shrink-0 items-center justify-center transition-all duration-300 group-hover:bg-[#c8102e]/5"
          style={{
            borderRight: "1px dashed rgba(26, 15, 4, 0.3)",
          }}
        >
          <span
            className="font-marker text-3xl text-[#1a0f04]"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              letterSpacing: "0.15em",
            }}
          >
            {rank}
          </span>
          {/* Featured seal */}
          {project.featured && (
            <div
              className="absolute -right-3 top-3 flex h-7 w-7 items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #c8102e 0%, #8b0000 100%)",
                borderRadius: "2px",
                transform: "rotate(-8deg)",
                boxShadow: "0 0 15px rgba(200, 16, 46, 0.6)",
              }}
            >
              <span className="font-jp text-[10px] font-bold text-[#f5efe0]">
                認
              </span>
            </div>
          )}
        </div>

        {/* Card content */}
        <div className="relative flex-1 p-5">
          {/* Paper texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(2deg, transparent 0, transparent 40px, rgba(139, 90, 43, 0.08) 40px, rgba(139, 90, 43, 0.08) 41px)`,
            }}
          />

          {/* Project image / placeholder */}
          <div className="relative mb-4 aspect-[16/9] overflow-hidden bg-[#1a0f04]">
            {project.image ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover opacity-85 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-jp text-6xl text-naruto/40 transition-transform duration-500 group-hover:scale-110">
                  忍
                </span>
              </div>
            )}
            {/* Vignette */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(26, 15, 4, 0.7) 100%)",
              }}
            />
            {/* Year stamp */}
            <div className="absolute bottom-2 right-2 border border-naruto/40 bg-black/60 px-2 py-0.5 backdrop-blur">
              <span className="font-marker text-xs text-naruto">
                {project.year}
              </span>
            </div>
          </div>

          {/* Header row */}
          <div className="relative mb-3 flex items-baseline justify-between gap-3 border-b border-dashed border-[#1a0f04]/30 pb-2">
            <h3 className="font-marker text-xl leading-tight text-[#1a0f04] transition-colors group-hover:text-[#c8102e]">
              {project.title}
            </h3>
            <span className="font-marker text-xs tracking-widest text-[#1a0f04]/50">
              NO.{String(project.id).padStart(2, "0")}
            </span>
          </div>

          {/* Description */}
          <p className="relative font-marker text-sm leading-relaxed text-[#1a0f04]/70 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="relative mt-4 flex flex-wrap gap-1.5">
            {project.tags?.map((t: string) => (
              <span
                key={t}
                className="border border-[#1a0f04]/30 bg-[#1a0f04]/5 px-2 py-0.5 font-marker text-[10px] text-[#1a0f04]/70"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="relative mt-4 flex items-center gap-4 border-t border-dashed border-[#1a0f04]/30 pt-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-marker text-xs text-[#1a0f04]/60 transition-colors hover:text-[#c8102e]"
              >
                <FiGithub size={13} /> code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-marker text-xs text-[#1a0f04]/60 transition-colors hover:text-naruto"
              >
                <FiExternalLink size={13} /> live_demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ===== Bottom bamboo roller ===== */}
      <div className="relative">
        <div
          className="h-4 w-full"
          style={{
            background:
              "linear-gradient(180deg, #0d3b47 0%, #0f766e 60%, #14b8a6 100%)",
            borderRadius: "2px",
            boxShadow:
              "0 4px 12px rgba(13, 59, 71, 0.5), inset 0 -2px 4px rgba(255,255,255,0.2)",
          }}
        />
        <div
          className="absolute -left-2 top-0 h-4 w-2 rounded-sm"
          style={{
            background: "linear-gradient(180deg, #451a03 0%, #b45309 100%)",
          }}
        />
        <div
          className="absolute -right-2 top-0 h-4 w-2 rounded-sm"
          style={{
            background: "linear-gradient(180deg, #451a03 0%, #b45309 100%)",
          }}
        />
      </div>
    </motion.article>
  );
}