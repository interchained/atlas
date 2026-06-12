"use client";

import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  sub?: string;
  accent?: string;
  className?: string;
  children?: React.ReactNode;
}

/** Standard page section: mono eyebrow, display title, body sub, revealed on scroll. */
export default function Section({
  id,
  eyebrow,
  title,
  sub,
  accent = "#38dbff",
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-24 px-6 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-atlas">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p
              className="font-mono text-xs uppercase tracking-[0.3em]"
              style={{ color: accent }}
            >
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-chain md:text-5xl">
              {title}
            </h2>
          )}
          {sub && (
            <p className="mt-4 text-base leading-relaxed text-chain/70 md:text-lg">
              {sub}
            </p>
          )}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
