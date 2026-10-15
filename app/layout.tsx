import type { Metadata } from "next";
import {
  Russo_One,
  Noto_Sans_JP,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

// ===== Fonts =====
const russo = Russo_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-russo",
  display: "swap",
});

const notoJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-jp",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// ===== Metadata (browser tab title) =====
export const metadata: Metadata = {
  title: "Portfolio — Naruto Theme",
  description: "Naruto-themed full stack developer portfolio",
};

// ===== Root layout =====
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${russo.variable} ${notoJp.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}