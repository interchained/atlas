"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { LAYERS, TIMELINE } from "@/content/ecosystem";
import { fadeUp, stagger } from "@/lib/motion";

/** Section 08 — shipped momentum, layer-coded. */
export default function Timeline() {
  return (
    <Section
      id="timeline"
      eyebrow="09 / Momentum"
      title={TIMELINE.title}
      sub={TIMELINE.sub}
    >
      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="relative mt-10 max-w-2xl border-l border-white/10 pl-8"
      >
        {TIMELINE.items.map((it) => {
          const color =
            LAYERS.find((l) => l.id === it.layer)?.color ?? "#38dbff";
          return (
            <motion.li
              key={it.label}
              variants={fadeUp}
              className="relative pb-7 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
              />
              <p className="text-sm text-chain/85 md:text-base">{it.label}</p>
            </motion.li>
          );
        })}
      </motion.ol>
    </Section>
  );
}
