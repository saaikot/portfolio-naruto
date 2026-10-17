"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
  FiMapPin,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { profile } from "@/data/profile";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const fd = new FormData(formRef.current!);
      const subject = encodeURIComponent(
        (fd.get("subject") as string) || "Hello!"
      );
      const body = encodeURIComponent(
        `${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("idle");
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const socials = [
    { icon: FiGithub, href: profile.socials.github, label: "GitHub", char: "忍" },
    { icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn", char: "火" },
    { icon: SiVercel, href: profile.socials.vercel, label: "Vercel", char: "風" },
    { icon: FaWhatsapp, href: profile.socials.whatsapp, label: "WhatsApp", char: "雷" },
    { icon: FiMail, href: profile.socials.email, label: "Email", char: "土" },
  ];

  return (
    <section
      id="contact"
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
        <span className="font-marker text-xs text-muted">[ 06 ]</span>
        <div className="h-px flex-1 bg-gradient-to-r from-akatsuki/60 to-transparent" />
        <span className="font-jp text-xs text-muted">連 絡 先</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative mb-4 font-marker text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl"
      >
        Summon <span className="text-akatsuki">Me</span>
        <svg
          className="absolute -bottom-3 left-0 w-full max-w-[260px]"
          height="16"
          viewBox="0 0 260 16"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M 3 9 Q 65 2, 130 7 T 257 5"
            stroke="#c8102e"
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
        className="mb-14 font-marker text-sm text-muted"
      >
        <span className="text-blood">&gt;</span> reply within 24 hours
      </motion.p>

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ==============================
            LEFT — Contact Info (scroll paper)
            ============================== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Top bamboo roller */}
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

          {/* Paper body */}
          <div
            className="relative p-6"
            style={{
              background: "linear-gradient(180deg, #f5efe0 0%, #e8dec4 100%)",
              boxShadow:
                "0 20px 60px -20px rgba(255, 122, 0, 0.4), inset 0 0 60px rgba(139, 90, 43, 0.1)",
            }}
          >
            {/* Paper texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                backgroundImage: `repeating-linear-gradient(2deg, transparent 0, transparent 40px, rgba(139, 90, 43, 0.06) 40px, rgba(139, 90, 43, 0.06) 41px)`,
              }}
            />

            {/* Header */}
            <div className="relative mb-6 flex items-center justify-between border-b border-dashed border-[#1a0f04]/30 pb-3">
              <span className="font-marker text-sm tracking-wider text-[#1a0f04]">
                連絡 · channels
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2d7a3e]" />
                <span className="font-marker text-xs text-[#1a0f04]/60">
                  online
                </span>
              </span>
            </div>

            {/* Contact rows */}
            <div className="relative space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #c8102e 0%, #8b0000 100%)",
                    borderRadius: "3px",
                    transform: "rotate(-4deg)",
                    boxShadow: "0 0 15px rgba(200, 16, 46, 0.4)",
                  }}
                >
                  <FiMail size={14} className="text-[#f5efe0]" />
                </span>
                <div>
                  <p className="font-marker text-[10px] tracking-[0.2em] text-[#1a0f04]/50">
                    EMAIL
                  </p>
                  <p className="font-marker text-sm text-[#1a0f04] transition-colors group-hover:text-[#c8102e]">
                    {profile.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #1e3a8a 0%, #0d1a3a 100%)",
                    borderRadius: "3px",
                    transform: "rotate(-4deg)",
                    boxShadow: "0 0 15px rgba(30, 58, 138, 0.4)",
                  }}
                >
                  <FiMapPin size={14} className="text-[#f5efe0]" />
                </span>
                <div>
                  <p className="font-marker text-[10px] tracking-[0.2em] text-[#1a0f04]/50">
                    LOCATION
                  </p>
                  <p className="font-marker text-sm text-[#1a0f04]">
                    {profile.location}
                  </p>
                </div>
              </div>

              <a
                href={profile.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #25D366 0%, #14532d 100%)",
                    borderRadius: "3px",
                    transform: "rotate(-4deg)",
                    boxShadow: "0 0 15px rgba(37, 211, 102, 0.4)",
                  }}
                >
                  <FaWhatsapp size={14} className="text-[#f5efe0]" />
                </span>
                <div>
                  <p className="font-marker text-[10px] tracking-[0.2em] text-[#1a0f04]/50">
                    WHATSAPP
                  </p>
                  <p className="font-marker text-sm text-[#1a0f04] transition-colors group-hover:text-[#25D366]">
                    {profile.phone}
                  </p>
                </div>
              </a>
            </div>

            {/* Socials section */}
            <div className="relative mt-6 border-t border-dashed border-[#1a0f04]/30 pt-4">
              <p className="mb-3 font-marker text-[10px] uppercase tracking-[0.2em] text-[#1a0f04]/60">
                // find_me_on
              </p>
              <div className="flex flex-wrap gap-2">
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
                      className="absolute inset-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(200, 16, 46, 0.12) 0%, rgba(139, 0, 0, 0.12) 100%)",
                        border: "1px solid rgba(200, 16, 46, 0.5)",
                        borderRadius: "2px",
                        transform: "rotate(-3deg)",
                      }}
                    />
                    <span className="absolute -top-1 -right-1 font-jp text-[8px] text-akatsuki/70">
                      {char}
                    </span>
                    <Icon
                      size={15}
                      className="relative text-[#1a0f04]/70 transition-colors group-hover:text-[#c8102e]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bamboo roller */}
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
        </motion.div>

        {/* ==============================
            RIGHT — Contact Form (scroll paper)
            ============================== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Top bamboo roller */}
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

          {/* Paper body */}
          <div
            className="relative p-6 sm:p-7"
            style={{
              background: "linear-gradient(180deg, #f5efe0 0%, #e8dec4 100%)",
              boxShadow:
                "0 20px 60px -20px rgba(255, 122, 0, 0.4), inset 0 0 60px rgba(139, 90, 43, 0.1)",
            }}
          >
            {/* Paper texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                backgroundImage: `repeating-linear-gradient(2deg, transparent 0, transparent 40px, rgba(139, 90, 43, 0.06) 40px, rgba(139, 90, 43, 0.06) 41px)`,
              }}
            />

            {/* Header */}
            <div className="relative mb-6 flex items-center justify-between border-b border-dashed border-[#1a0f04]/30 pb-3">
              <span className="font-marker text-sm tracking-wider text-[#1a0f04]">
                伝書 · message
              </span>
              <span className="font-marker text-[10px] tracking-wider text-[#1a0f04]/60">
                sealed ✓
              </span>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="relative">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="your_name" name="name" placeholder="naruto uzumaki" required />
                <Field
                  label="email"
                  name="email"
                  type="email"
                  placeholder="naruto@konoha.jp"
                  required
                />
              </div>

              <div className="mt-5">
                <Field
                  label="subject"
                  name="subject"
                  placeholder="mission inquiry"
                />
              </div>

              {/* Textarea */}
              <div className="mt-5">
                <label className="mb-2 block font-marker text-sm tracking-wider text-[#1a0f04]/70">
                  &gt; message
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-0 top-3 font-marker text-base text-[#c8102e]">
                    ✎
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="// type your message here..."
                    className="w-full resize-none border-0 border-b-2 border-[#1a0f04]/30 bg-transparent py-3 pl-7 pr-2 font-marker text-base text-[#1a0f04] outline-none transition-colors placeholder:text-[#1a0f04]/30 focus:border-[#c8102e]"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative mt-8 flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm uppercase tracking-wider text-[#1a1208] transition-all duration-200 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                style={{
                  background:
                    "linear-gradient(180deg, #ff9a3d 0%, #ff7a00 50%, #cc5e00 100%)",
                  boxShadow:
                    "0 8px 24px rgba(255, 122, 0, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.3)",
                  clipPath:
                    "polygon(10px 0, calc(100% - 4px) 0, 100% 50%, calc(100% - 4px) 100%, 10px 100%, 0 50%)",
                }}
              >
                {status === "sending" ? (
                  <>
                    <span className="h-2 w-2 animate-ping rounded-full bg-current" />
                    <span className="font-marker">transmitting...</span>
                  </>
                ) : (
                  <>
                    <span className="font-marker">送信 · SEND</span>
                    <FiSend
                      className="transition-transform group-hover:translate-x-1"
                      size={14}
                    />
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <p className="mt-4 flex items-center gap-2 font-marker text-sm text-[#2d7a3e]">
                  <FiCheckCircle size={14} /> message_transmitted_successfully
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 flex items-center gap-2 font-marker text-sm text-[#c8102e]">
                  <FiAlertCircle size={14} /> transmission_failed — try email
                </p>
              )}
            </form>
          </div>

          {/* Bottom bamboo roller */}
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

          {/* Red hanko seal — decorative */}
          <div
            className="absolute -bottom-6 -right-6 flex h-16 w-16 items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #c8102e 0%, #8b0000 100%)",
              borderRadius: "4px",
              transform: "rotate(-8deg)",
              boxShadow: "0 0 25px rgba(200, 16, 46, 0.6)",
            }}
          >
            <div
              className="flex h-[56px] w-[56px] flex-col items-center justify-center"
              style={{ border: "1px dashed rgba(245, 239, 224, 0.5)" }}
            >
              <span className="font-jp text-xl font-bold text-[#f5efe0]">
                送
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-marker text-sm tracking-wider text-[#1a0f04]/70">
        &gt; {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 font-marker text-base text-[#c8102e]">
          ✎
        </span>
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full border-0 border-b-2 border-[#1a0f04]/30 bg-transparent py-2.5 pl-7 pr-2 font-marker text-base text-[#1a0f04] outline-none transition-colors placeholder:text-[#1a0f04]/30 focus:border-[#c8102e]"
        />
      </div>
    </div>
  );
}