"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, navLinks } from "@/data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-4 pt-3">
      <nav
        className={`relative mx-auto flex max-w-6xl items-center justify-between px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "bg-[#1a1208]/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
        style={{
          /* Irregular brush-stroke border using SVG mask would be complex — 
             instead, we use a subtle warm paper look with a hand-drawn bottom edge */
          borderBottom: scrolled
            ? "1px solid rgba(255, 122, 0, 0.35)"
            : "1px solid transparent",
          borderTop: scrolled
            ? "1px solid rgba(255, 122, 0, 0.15)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 30px -10px rgba(255, 122, 0, 0.35), inset 0 0 40px rgba(255, 122, 0, 0.03)"
            : "none",
        }}
      >
        {/* ===== Bamboo decorations (left & right edges) ===== */}
        <div className="pointer-events-none absolute -left-1 top-0 bottom-0 flex flex-col justify-center gap-1 opacity-40">
          <div className="h-1.5 w-1.5 rounded-full bg-leaf" />
          <div className="h-1.5 w-1.5 rounded-full bg-leaf" />
          <div className="h-1.5 w-1.5 rounded-full bg-leaf" />
        </div>
        <div className="pointer-events-none absolute -right-1 top-0 bottom-0 flex flex-col justify-center gap-1 opacity-40">
          <div className="h-1.5 w-1.5 rounded-full bg-leaf" />
          <div className="h-1.5 w-1.5 rounded-full bg-leaf" />
          <div className="h-1.5 w-1.5 rounded-full bg-leaf" />
        </div>

        {/* ===== Logo: Ninja Headband ===== */}
        <a href="#home" className="group flex items-center gap-3">
          {/* Headband */}
          <div className="relative flex items-center">
            {/* Fabric strap */}
            <div
              className="relative flex items-center gap-1 px-1 py-1"
              style={{
                background: "linear-gradient(180deg, #2a1a08 0%, #1a0f04 100%)",
                border: "1px solid rgba(255, 122, 0, 0.4)",
                borderRadius: "2px",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Fabric texture lines */}
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, transparent 0, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 3px)",
                }}
              />
              {/* Metal plate */}
              <div
                className="relative flex h-7 w-9 items-center justify-center"
                style={{
                  background:
                    "linear-gradient(180deg, #d4d4d4 0%, #a3a3a3 50%, #737373 100%)",
                  border: "1px solid #525252",
                  borderRadius: "2px",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.4)",
                }}
              >
                {/* Leaf symbol — Konoha */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180"
                  fill="none"
                  stroke="#1a1208"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M12 4 C 16 4, 19 7, 19 11 C 19 15, 15.5 18, 12 18 C 9 18, 6.5 16, 6 13" />
                  <path d="M6 13 C 5.5 11, 7 9, 9 9 C 11 9, 12 10.5, 12 12" />
                  <circle cx="12" cy="12" r="0.7" fill="#1a1208" />
                </svg>
              </div>
            </div>
            {/* Fabric tail (small) */}
            <div
              className="h-3 w-4 ml-0.5"
              style={{
                background:
                  "linear-gradient(180deg, #2a1a08 0%, #1a0f04 100%)",
                borderTop: "1px solid rgba(255, 122, 0, 0.3)",
                borderBottom: "1px solid rgba(255, 122, 0, 0.3)",
                clipPath: "polygon(0 0, 100% 20%, 100% 80%, 0 100%)",
              }}
            />
          </div>

          {/* Initials + kanji */}
          <div className="flex items-baseline gap-2">
           <span
  className="font-marker text-base tracking-wider"
  style={{
    color: "#f5efe0",
    textShadow: "0 0 12px rgba(255, 122, 0, 0.4)",
  }}
>
  {profile.initials}
</span>
            <span className="hidden font-jp text-[10px] text-naruto/70 sm:inline whitespace-nowrap">
              木ノ葉隠れ
            </span>
          </div>
        </a>

       {/* ===== Desktop Nav Links (Wooden Tags) ===== */}
<ul className="hidden items-center gap-0.5 md:flex">
  {navLinks.map((link, i) => (
    <li key={link.href} className="flex items-center">
      <a
        href={link.href}
        className="group relative px-3.5 py-2 text-[11px] font-medium tracking-[0.12em] text-[#b8a98a] transition-all duration-300 hover:text-[#1a1208]"
      >
        {/* Wooden tag background (appears on hover) */}
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, #ff9a3d 0%, #ff7a00 50%, #cc5e00 100%)",
            clipPath:
              "polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)",
            boxShadow:
              "0 4px 12px rgba(255, 122, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
          }}
        />
        <span className="relative">
          {/* Small kanji prefix on hover */}
          <span className="absolute -left-1 opacity-0 transition-all duration-300 group-hover:opacity-0 group-hover:-left-2 font-jp text-[9px] text-[#1a1208]">
            忍
          </span>
          {link.label}
        </span>
      </a>

      {/* Shuriken divider between links */}
      {i < navLinks.length - 1 && (
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          className="opacity-25"
          fill="none"
          stroke="#ff7a00"
          strokeWidth="0.8"
        >
          <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z" />
        </svg>
      )}
    </li>
  ))}
</ul>

        {/* ===== Right Side ===== */}
        <div className="flex items-center gap-3">
          {/* Hanko seal CTA */}
          <a
            href="#contact"
            className="group hidden md:flex items-center gap-2"
          >
            <span className="relative flex h-11 w-11 items-center justify-center">
              {/* Red seal background */}
              <span
                className="absolute inset-0 rounded-sm transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, #c8102e 0%, #8b0000 100%)",
                  boxShadow:
                    "0 0 20px rgba(200, 16, 46, 0.5), inset 0 0 12px rgba(0, 0, 0, 0.3)",
                  transform: "rotate(-6deg)",
                }}
              />
              {/* Seal border pattern */}
              <span
                className="absolute inset-0.5 rounded-sm"
                style={{
                  border: "1px dashed rgba(245, 239, 224, 0.4)",
                  transform: "rotate(-6deg)",
                }}
              />
              <span className="relative font-jp text-base font-bold text-[#f5efe0] transition-transform duration-300 group-hover:rotate-0">
                召
              </span>
            </span>
            <span className="font-marker text-[10px] uppercase tracking-widest text-naruto/80 transition-colors group-hover:text-naruto whitespace-nowrap">
  Hire Me
</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center text-naruto transition-colors hover:text-chakra md:hidden"
            style={{
              background: "rgba(255, 122, 0, 0.08)",
              border: "1px solid rgba(255, 122, 0, 0.4)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="3" y1="3" x2="13" y2="13" />
                  <line x1="13" y1="3" x2="3" y2="13" />
                </>
              ) : (
                <>
                  <path d="M 2 5 Q 8 4, 14 5" />
                  <path d="M 2 11 Q 8 12, 14 11" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden md:hidden"
            style={{
              background: "rgba(20, 15, 8, 0.98)",
              border: "1px solid rgba(255, 122, 0, 0.4)",
              boxShadow: "0 10px 40px rgba(255, 122, 0, 0.15)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 border-b border-line/40 px-5 py-4 text-xs uppercase tracking-widest text-[#b8a98a] transition-colors hover:bg-naruto/10 hover:text-naruto"
              >
                <span className="font-jp text-naruto/60">忍</span>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-4 text-xs font-medium uppercase tracking-widest text-naruto"
            >
              <span className="font-jp text-[#c8102e]">召</span>
              <span className="font-marker text-[10px] uppercase tracking-widest text-naruto/80 transition-colors group-hover:text-naruto whitespace-nowrap">
  Hire Me
</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}