"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { REAL_WORLD } from "@/content/ecosystem";
import { fadeUp } from "@/lib/motion";

/** Section 06 — Mint on the Avenue as the field laboratory. Proof, not an ad. */
export default function RealWorld() {
  return (
    <Section
      id="real-world"
      eyebrow="07 / Field Lab"
      title={REAL_WORLD.title}
      sub={REAL_WORLD.body}
      accent="#ffb84d"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="glass mt-10 rounded-2xl p-6 md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-chain/40">
          <span>Mint on the Avenue — Aveda Concept Salon</span>
          <span>Winter Park, FL</span>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {REAL_WORLD.points.map((pt) => (
            <li
              key={pt}
              className="flex items-start gap-2.5 text-sm text-chain/80"
            >
              <span aria-hidden className="mt-0.5 text-accent-amber">
                ▣
              </span>
              {pt}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs leading-relaxed text-chain/45">
          Not a salon advertisement — a proving ground. The point is that these
          systems run against real business constraints, with a human approving
          everything that ships.
        </p>
      </motion.div>
    </Section>
  );
}
