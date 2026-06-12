"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { OPEN_SOURCE } from "@/content/ecosystem";
import { fadeUp, stagger } from "@/lib/motion";

/** Section 07 — staged open source + the contributor inner circle. */
export default function OpenSourceSection() {
  return (
    <Section
      id="open-source"
      eyebrow="08 / Open Source"
      title={OPEN_SOURCE.title}
      sub={OPEN_SOURCE.body}
      accent="#4dffa6"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-10 grid gap-4 sm:grid-cols-2"
      >
        {OPEN_SOURCE.credentials.map((c) => (
          <motion.div
            key={c}
            variants={fadeUp}
            className="glass rounded-xl p-5 transition-colors hover:border-accent-green/30"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-green/80">
              status
            </span>
            <p className="mt-2 font-display text-base font-semibold leading-snug">
              {c}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-8 flex flex-wrap gap-2"
      >
        {OPEN_SOURCE.paths.map((p) => (
          <span
            key={p}
            className="rounded border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-chain/70"
          >
            {p}
          </span>
        ))}
      </motion.div>
    </Section>
  );
}
