"use client";

import { motion } from "framer-motion";
import { HERO } from "@/content/ecosystem";
import OrbitMap from "./OrbitMap";

const isExternal = (href: string) => href.startsWith("http");

/** Section 01 — headline, thesis-in-one-breath, terminal accent, orbit map. */
export default function Hero() {
  const words = HERO.headline.split(" ");
  const head = words.slice(0, -2).join(" ");
  const tail = words.slice(-2).join(" ");

  return (
    <div id="top" className="relative overflow-hidden px-6 pb-20 pt-32 md:pt-40">
      <div aria-hidden className="atlas-grid absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-atlas items-center gap-14 lg:grid-cols-[1.05fr,0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-chain/50"
          >
            <span className="text-accent-cyan">●</span> {HERO.eyebrow} — ecosystem
            map
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 font-display text-5xl font-bold leading-[1.04] tracking-tight md:text-7xl"
          >
            {head} <span className="text-gradient">{tail}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-chain/70 md:text-lg"
          >
            {HERO.sub}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="cursor-blink mt-5 font-mono text-xs text-chain/45"
          >
            <span className="text-accent-green">➜</span> {HERO.terminal}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {HERO.ctas.map((c) =>
              c.primary ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="rounded-md bg-accent-cyan px-5 py-2.5 font-semibold text-ink shadow-[0_0_24px_-4px_rgba(56,219,255,0.6)] transition hover:shadow-[0_0_36px_-2px_rgba(56,219,255,0.8)]"
                >
                  {c.label}
                </a>
              ) : (
                <a
                  key={c.label}
                  href={c.href}
                  {...(isExternal(c.href)
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="rounded-md border border-white/15 px-5 py-2.5 text-chain/85 transition hover:border-accent-cyan/50 hover:text-chain"
                >
                  {c.label}
                </a>
              )
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <OrbitMap />
        </motion.div>
      </div>
    </div>
  );
}
