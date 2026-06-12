"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import { LAYERS, PRODUCTS, type LayerId } from "@/content/ecosystem";

/** Fired by OrbitMap (hero) with a product id — opens that card here. */
export const OPEN_PRODUCT_EVENT = "atlas:openProduct";

type Filter = LayerId | "all";

interface TabProps {
  active: boolean;
  onClick: () => void;
  label: string;
  color: string;
  count: number;
}

function Tab({ active, onClick, label, color, count }: TabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition ${
        active
          ? "bg-white/[0.07] text-chain"
          : "border-white/10 text-chain/55 hover:text-chain"
      }`}
      style={
        active
          ? { borderColor: `${color}88`, boxShadow: `0 0 16px -6px ${color}66` }
          : undefined
      }
    >
      {label} <span className="opacity-50">{count}</span>
    </button>
  );
}

/** Section 03 — the layered ecosystem explorer: filter tabs + expandable node cards. */
export default function StackExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      setFilter("all");
      setOpenId(id);
      window.setTimeout(() => {
        document
          .getElementById(`node-${id}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 120);
    };
    window.addEventListener(OPEN_PRODUCT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_PRODUCT_EVENT, onOpen);
  }, []);

  const visible = useMemo(
    () => (filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.layer === filter)),
    [filter]
  );

  const layerOf = (id: LayerId) => LAYERS.find((l) => l.id === id)!;
  const activeLayer = filter === "all" ? null : layerOf(filter);

  return (
    <Section
      id="stack"
      eyebrow="03 / Ecosystem Map"
      title="Explore the Interchained Stack"
      sub={`${PRODUCTS.length} surfaces across five layers, held together by one principle. Filter by layer, open a node — deep dives included.`}
    >
      <div className="mt-8 flex flex-wrap gap-2">
        <Tab
          active={filter === "all"}
          onClick={() => setFilter("all")}
          label="All"
          color="#eef2f8"
          count={PRODUCTS.length}
        />
        {LAYERS.map((l) => (
          <Tab
            key={l.id}
            active={filter === l.id}
            onClick={() => setFilter(l.id)}
            label={l.short}
            color={l.color}
            count={PRODUCTS.filter((p) => p.layer === l.id).length}
          />
        ))}
      </div>

      <div className="mt-4 min-h-[1.5rem]">
        {activeLayer && (
          <p className="font-mono text-xs text-chain/50">
            <span style={{ color: activeLayer.color }}>
              {activeLayer.name}
            </span>{" "}
            — {activeLayer.blurb}
          </p>
        )}
      </div>

      <motion.div layout className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => {
            const layer = layerOf(p.layer);
            const open = openId === p.id;
            return (
              <motion.article
                layout
                id={`node-${p.id}`}
                key={p.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={() => setOpenId(open ? null : p.id)}
                className="glass group relative cursor-pointer overflow-hidden rounded-xl p-5 transition-colors hover:border-white/20"
                style={
                  open
                    ? { boxShadow: `0 0 32px -12px ${layer.color}66` }
                    : undefined
                }
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, ${layer.color}, transparent)`,
                  }}
                />
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {p.name}
                  </h3>
                  {p.badge && (
                    <span
                      className="shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                      style={{
                        borderColor: `${layer.color}66`,
                        color: layer.color,
                      }}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-chain/65">{p.tagline}</p>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-relaxed text-chain/75">
                        {p.description}
                      </p>
                      {p.facts && (
                        <dl className="mt-3 space-y-1.5">
                          {p.facts.map((f) => (
                            <div
                              key={f.label}
                              className="flex gap-2 font-mono text-[11px] leading-relaxed"
                            >
                              <dt className="w-28 shrink-0 text-chain/40">
                                {f.label}
                              </dt>
                              <dd className="text-chain/75">{f.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      <div className="mt-3 flex flex-wrap gap-4">
                        {p.href && (
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider transition-opacity hover:opacity-75"
                            style={{ color: layer.color }}
                          >
                            Visit ↗
                          </a>
                        )}
                        {p.repo && (
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-chain/60 transition-colors hover:text-chain"
                          >
                            Source ↗
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-chain/40">
                    {layer.name}
                  </span>
                  <span className="font-mono text-sm text-chain/40">
                    {open ? "−" : "+"}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
