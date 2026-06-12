"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { THESIS } from "@/content/ecosystem";
import { fadeUp, stagger } from "@/lib/motion";

/** Section 02 — the ownership thesis and six pillars. */
export default function Thesis() {
  return (
    <Section
      id="thesis"
      eyebrow="02 / The Thesis"
      title={THESIS.title}
      sub={THESIS.body}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {THESIS.pillars.map((p, i) => (
          <motion.div
            key={p.name}
            variants={fadeUp}
            className="glass rounded-xl p-5 transition-colors hover:border-accent-cyan/30"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-chain/35">
              pillar 0{i + 1}
            </span>
            <h3 className="mt-2 font-display text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-chain/65">
              {p.detail}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
