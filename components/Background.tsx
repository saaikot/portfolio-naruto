"use client";

export default function Background() {
  // Falling leaves positions
  const leaves = [
    { left: "8%",  delay: 0,   dur: 12, color: "#ff7a00", size: 14, rot: 0 },
    { left: "22%", delay: 3.5, dur: 15, color: "#2d7a3e", size: 12, rot: 45 },
    { left: "38%", delay: 1.5, dur: 14, color: "#ffd60a", size: 10, rot: 90 },
    { left: "52%", delay: 6,   dur: 16, color: "#ff7a00", size: 13, rot: 120 },
    { left: "68%", delay: 2,   dur: 13, color: "#2d7a3e", size: 11, rot: 180 },
    { left: "82%", delay: 4.5, dur: 17, color: "#ffd60a", size: 12, rot: 220 },
    { left: "95%", delay: 7,   dur: 14, color: "#ff7a00", size: 10, rot: 260 },
  ];

  // Chakra particles
  const particles = [
    { top: "15%", left: "12%", color: "#ff7a00", dur: 8 },
    { top: "28%", left: "78%", color: "#ffd60a", dur: 10 },
    { top: "62%", left: "18%", color: "#60a5fa", dur: 9 },
    { top: "78%", left: "82%", color: "#ff7a00", dur: 11 },
    { top: "45%", left: "45%", color: "#ffd60a", dur: 7 },
    { top: "88%", left: "30%", color: "#2d7a3e", dur: 12 },
    { top: "10%", left: "60%", color: "#ff7a00", dur: 9 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      {/* ========== Layer 1: Perspective grid ========== */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 122, 0, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 122, 0, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 75% 60% at 50% 45%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 60% at 50% 45%, #000 30%, transparent 80%)",
        }}
      />

      {/* ========== Layer 2: Chakra swirls (blurred blobs) ========== */}
      <div
        className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 122, 0, 0.25) 0%, transparent 70%)",
          filter: "blur(120px)",
          animation: "chakra-swirl 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-32 top-1/2 h-[460px] w-[460px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 214, 10, 0.18) 0%, transparent 70%)",
          filter: "blur(130px)",
          animation: "chakra-swirl 28s ease-in-out infinite",
          animationDelay: "-8s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(30, 58, 138, 0.25) 0%, transparent 70%)",
          filter: "blur(140px)",
          animation: "chakra-swirl 26s ease-in-out infinite",
          animationDelay: "-14s",
        }}
      />

      {/* ========== Layer 3: Chakra particles ========== */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full"
          style={{
            top: p.top,
            left: p.left,
            background: p.color,
            boxShadow: `0 0 14px 3px ${p.color}90`,
            animation: `float-slow ${p.dur}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      {/* ========== Layer 4: Falling leaves ========== */}
      {leaves.map((l, i) => (
        <div
          key={i}
          className="absolute top-0"
          style={{
            left: l.left,
            animation: `leaf-fall ${l.dur}s linear infinite`,
            animationDelay: `${l.delay}s`,
            transform: `rotate(${l.rot}deg)`,
          }}
        >
          {/* Leaf SVG */}
          <svg
            width={l.size}
            height={l.size}
            viewBox="0 0 24 24"
            fill={l.color}
            style={{
              filter: `drop-shadow(0 0 4px ${l.color}80)`,
              opacity: 0.7,
            }}
          >
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22l1.02-2.41c0.54,0.06 0.99,0.09 1.39,0.09c4.79,0 8.4-2.58 10-8.02l0.35-0.82 l-0.83-0.35c-0.34-0.14-0.66-0.26-0.98-0.37l-0.86-0.3l-0.45,0.79c-0.97,1.69-2.43,2.86-4.18,3.65C14.7,13.3 16,11.36 16,9 C16,8.66 15.96,8.32 15.9,8l1.1-0.09L17,8z" />
          </svg>
        </div>
      ))}

      {/* ========== Layer 5: Rasengan ambient glow (top-right) ========== */}
      <div
        className="absolute right-20 top-20 h-40 w-40 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "chakra-pulse 4s ease-in-out infinite",
        }}
      />

      {/* ========== Layer 6: Vignette ========== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}