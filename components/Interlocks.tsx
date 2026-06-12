"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { INTERLOCKS } from "@/content/ecosystem";
import { fadeUp, stagger } from "@/lib/motion";

/** Section 04 — the live edges between systems: what feeds, secures, or settles what. */
export default function Interlocks() {
  return (
    <Section
      id="interlocks"
      eyebrow="04 / System Interlocks"
      title={INTERLOCKS.title}
      sub={INTERLOCKS.sub}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-10 grid gap-3 md:grid-cols-2"
      >
        {INTERLOCKS.edges.map((e) => (
          <motion.div
            key={`${e.a}-${e.verb}-${e.b}`}
            variants={fadeUp}
            className="glass flex flex-col gap-2 rounded-xl p-4 transition-colors hover:border-white/20"
          >
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="rounded border border-white/15 bg-white/[0.05] px-2 py-0.5 text-chain">
                {e.a}
              </span>
              <span className="text-chain/45">—{e.verb}→</span>
              <span
                className="rounded border px-2 py-0.5"
                style={{ borderColor: `${e.color}66`, color: e.color }}
              >
                {e.b}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-chain/65">{e.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
