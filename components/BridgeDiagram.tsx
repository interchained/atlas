"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { BRIDGE } from "@/content/ecosystem";
import { fadeUp, stagger } from "@/lib/motion";

/** Section 04 — the AiAS Bridge control-plane architecture, drawn as a signal path. */
export default function BridgeDiagram() {
  return (
    <Section
      id="bridge"
      eyebrow="05 / AI Control Plane"
      title={BRIDGE.title}
      sub={BRIDGE.intro}
    >
      <div className="glass relative mt-10 overflow-hidden rounded-2xl p-6 md:p-10">
        <div className="mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-chain/40">
          <span>
            signed <span className="text-accent-cyan">GET</span> ⇄ signed{" "}
            <span className="text-accent-red">POST</span>
          </span>
          <span className="hidden sm:block">aias-bridge / v1</span>
        </div>

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="relative grid gap-7 md:grid-cols-7 md:gap-4"
        >
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute left-0 top-5 hidden h-px w-full origin-left bg-gradient-to-r from-accent-cyan/60 via-white/20 to-accent-red/60 md:block"
          />
          {BRIDGE.steps.map((s, i) => (
            <motion.li key={s.name} variants={fadeUp} className="relative">
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent-cyan/40 bg-ink font-mono text-xs text-accent-cyan">
                0{i + 1}
              </div>
              <h3 className="mt-3 font-display text-sm font-semibold leading-snug">
                {s.name}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-chain/60">
                {s.detail}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-9 flex flex-wrap gap-2">
          {BRIDGE.security.map((s) => (
            <span
              key={s}
              className="rounded border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-chain/70"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <motion.blockquote
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto mt-14 max-w-3xl text-center font-display text-2xl font-semibold tracking-tight md:text-4xl"
      >
        <span className="text-gradient">&ldquo;{BRIDGE.kicker}&rdquo;</span>
      </motion.blockquote>
    </Section>
  );
}
