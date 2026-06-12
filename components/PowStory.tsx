"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import { ITC_DEEP, POW } from "@/content/ecosystem";
import { fadeUp, stagger } from "@/lib/motion";

/** Section 06 — ITC as public infrastructure: emphasis tags, terminal spec card, chain-spec deep dive. */
export default function PowStory() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Section
      id="pow"
      eyebrow="06 / Proof-of-Work"
      title={POW.title}
      sub={POW.body}
      accent="#ff4257"
    >
      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr,1.1fr]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {POW.emphasis.map((e) => (
              <span
                key={e}
                className="rounded-full border border-accent-red/25 bg-accent-red/[0.06] px-3 py-1 font-mono text-xs text-chain/75"
              >
                {e}
              </span>
            ))}
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-6 border-l-2 border-accent-red/40 pl-4 text-xs leading-relaxed text-chain/50"
          >
            {POW.disclaimer}
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="glass rounded-2xl p-6 font-mono text-sm"
        >
          <div className="mb-5 flex items-center gap-1.5">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                aria-hidden
                className={`h-3 w-3 rounded-[2px] ${
                  i < 7
                    ? "bg-accent-red/70"
                    : "animate-pulse-soft bg-accent-red/25"
                }`}
              />
            ))}
            <span className="ml-2 text-[10px] uppercase tracking-widest text-chain/40">
              chain height ▸ advancing
            </span>
          </div>
          <dl className="space-y-2.5">
            {POW.facts.map((f) => (
              <div
                key={f.label}
                className="flex gap-3 border-b border-white/[0.05] pb-2.5"
              >
                <dt className="w-32 shrink-0 text-chain/45">{f.label}</dt>
                <dd className="text-chain/90">{f.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      {/* Chain spec deep dive */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12"
      >
        <div className="mb-4 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-semibold md:text-2xl">
            {ITC_DEEP.title}
          </h3>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-chain/40 sm:block">
            {ITC_DEEP.intro}
          </span>
        </div>
        <div className="glass divide-y divide-white/[0.06] overflow-hidden rounded-2xl">
          {ITC_DEEP.rows.map((row, i) => {
            const open = openIdx === i;
            return (
              <div key={row.k}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <span className="font-mono text-sm text-chain/85">
                    <span className="mr-3 text-accent-red/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {row.k}
                  </span>
                  <span className="font-mono text-sm text-chain/40">
                    {open ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pl-14 text-sm leading-relaxed text-chain/70">
                        {row.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
