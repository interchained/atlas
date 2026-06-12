"use client";

import { motion } from "framer-motion";
import { FINAL_CTA } from "@/content/ecosystem";
import { fadeUp } from "@/lib/motion";

const isExternal = (href: string) => href.startsWith("http");

/** Section 10 — the closing signal. */
export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-center md:py-36">
      <div
        aria-hidden
        className="atlas-grid absolute inset-0 -z-10 rotate-180"
      />
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl"
      >
        Build on systems you can{" "}
        <span className="text-gradient">own</span>.
      </motion.h2>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 flex flex-wrap justify-center gap-3"
      >
        {FINAL_CTA.ctas.map((c) =>
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
    </section>
  );
}
