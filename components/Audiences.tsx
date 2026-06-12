"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { AUDIENCES } from "@/content/ecosystem";
import { fadeUp, stagger } from "@/lib/motion";

/** Section 09 — who the stack is for. */
export default function Audiences() {
  return (
    <Section id="audiences" eyebrow="10 / Audiences" title={AUDIENCES.title}>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {AUDIENCES.cards.map((c, i) => (
          <motion.div
            key={c.name}
            variants={fadeUp}
            className="glass rounded-xl p-5 transition-colors hover:border-white/25"
          >
            <span className="font-mono text-[10px] text-chain/40">
              0{i + 1}
            </span>
            <h3 className="mt-2 font-display text-lg font-semibold">
              {c.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-chain/65">
              {c.detail}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
