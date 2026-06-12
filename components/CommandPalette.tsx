"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FOOTER_LINKS, NAV_SECTIONS, PRODUCTS } from "@/content/ecosystem";

export const PALETTE_EVENT = "atlas:palette";

type Item = { label: string; hint: string; href: string };

/** ⌘K launcher over sections, products, and the link directory. */
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<Item[]>(() => {
    const sections: Item[] = NAV_SECTIONS.map((s) => ({
      label: s.label,
      hint: "jump to section",
      href: `#${s.id}`,
    }));
    const products: Item[] = PRODUCTS.filter((p) => p.href).map((p) => ({
      label: p.name,
      hint: p.tagline,
      href: p.href as string,
    }));
    const links: Item[] = FOOTER_LINKS.map((l) => ({
      label: l.label,
      hint: "open link",
      href: l.href,
    }));
    const seen = new Set<string>();
    return [...sections, ...products, ...links].filter((i) => {
      const key = `${i.label}::${i.href}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, []);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return items;
    return items.filter((i) => `${i.label} ${i.hint}`.toLowerCase().includes(t));
  }, [q, items]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(PALETTE_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQ("");
      setIdx(0);
      window.setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => setIdx(0), [q]);

  const go = (item?: Item) => {
    const target = item ?? results[idx];
    if (!target) return;
    setOpen(false);
    if (target.href.startsWith("#")) {
      document.querySelector(target.href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(target.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-ink/70 px-4 pt-[14vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="glass w-full max-w-xl overflow-hidden rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <span className="font-mono text-xs text-accent-cyan">❯</span>
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setIdx((v) => Math.min(v + 1, results.length - 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setIdx((v) => Math.max(v - 1, 0));
                  } else if (e.key === "Enter") {
                    e.preventDefault();
                    go();
                  }
                }}
                placeholder="Jump to a system, section, or link…"
                className="w-full bg-transparent font-mono text-sm text-chain placeholder:text-chain/35 focus:outline-none"
              />
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-chain/50">
                esc
              </kbd>
            </div>
            <ul className="max-h-[46vh] overflow-y-auto py-1.5">
              {results.length === 0 && (
                <li className="px-4 py-6 text-center font-mono text-xs text-chain/40">
                  no signals found
                </li>
              )}
              {results.map((r, i) => (
                <li key={`${r.label}::${r.href}`}>
                  <button
                    type="button"
                    onMouseEnter={() => setIdx(i)}
                    onClick={() => go(r)}
                    className={`flex w-full items-baseline justify-between gap-4 px-4 py-2.5 text-left transition-colors ${
                      i === idx ? "bg-white/[0.06]" : ""
                    }`}
                  >
                    <span className="text-sm text-chain/90">{r.label}</span>
                    <span className="truncate font-mono text-[11px] text-chain/40">
                      {r.hint}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
