"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LAYERS, PRODUCTS, type Product } from "@/content/ecosystem";
import logo from "@/public/logo.png";
import { OPEN_PRODUCT_EVENT } from "./StackExplorer";

const RINGS: { radius: number; duration: number }[] = [
  { radius: 23, duration: 80 },
  { radius: 35, duration: 120 },
  { radius: 46, duration: 170 },
];

const layerColor = (p: Product) =>
  LAYERS.find((l) => l.id === p.layer)?.color ?? "#38dbff";

/**
 * The hero ecosystem map: the Interchained emblem at center, three slowly
 * rotating rings of product nodes. Each node counter-rotates so its label
 * stays upright; hover/focus reveals a tooltip.
 */
export default function OrbitMap() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] select-none">
      {/* Ring outlines */}
      {RINGS.map((r, i) => (
        <div
          key={i}
          aria-hidden
          className="absolute rounded-full border border-white/[0.07]"
          style={{ inset: `${50 - r.radius}%` }}
        />
      ))}

      {/* Crosshair axes */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"
      />
      <div
        aria-hidden
        className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
      />

      {/* Center emblem */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div
          aria-hidden
          className="animate-pulse-soft absolute -inset-6 -z-10 rounded-full bg-accent-cyan/20 blur-2xl"
        />
        <Image
          src={logo}
          alt="Interchained emblem"
          width={96}
          height={96}
          priority
          className="h-20 w-20 rounded-full md:h-24 md:w-24"
        />
      </div>

      {/* Orbiting nodes */}
      {RINGS.map((ring, ri) => {
        const nodes = PRODUCTS.filter((p) => p.orbit === ri + 1);
        return (
          <motion.div
            key={ri}
            className="pointer-events-none absolute inset-0"
            style={{ transformOrigin: "50% 50%" }}
            animate={reduce ? { rotate: 0 } : { rotate: 360 }}
            transition={
              reduce
                ? undefined
                : { duration: ring.duration, ease: "linear", repeat: Infinity }
            }
          >
            {nodes.map((p, i) => {
              const angle = (i / nodes.length) * Math.PI * 2 + ri * 0.7;
              const x = 50 + ring.radius * Math.sin(angle);
              const y = 50 - ring.radius * Math.cos(angle);
              const color = layerColor(p);
              return (
                <div
                  key={p.id}
                  className="absolute"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="-translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={reduce ? { rotate: 0 } : { rotate: -360 }}
                      transition={
                        reduce
                          ? undefined
                          : {
                              duration: ring.duration,
                              ease: "linear",
                              repeat: Infinity,
                            }
                      }
                    >
                      <button
                        type="button"
                        aria-label={`${p.name} — open in the stack explorer`}
                        onMouseEnter={() => setActive(p.id)}
                        onMouseLeave={() =>
                          setActive((v) => (v === p.id ? null : v))
                        }
                        onFocus={() => setActive(p.id)}
                        onBlur={() =>
                          setActive((v) => (v === p.id ? null : v))
                        }
                        onClick={() =>
                          window.dispatchEvent(
                            new CustomEvent<string>(OPEN_PRODUCT_EVENT, {
                              detail: p.id,
                            })
                          )
                        }
                        className="pointer-events-auto group relative -m-1.5 flex cursor-pointer flex-col items-center rounded-md p-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan/60"
                      >
                        <span
                          className="block h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:scale-150"
                          style={{
                            backgroundColor: color,
                            boxShadow: `0 0 12px ${color}`,
                          }}
                        />
                        <span className="mt-1.5 whitespace-nowrap font-mono text-[10px] uppercase tracking-wider text-chain/60 transition-colors group-hover:text-chain">
                          {p.short ?? p.name}
                        </span>
                        {active === p.id && (
                          <span className="absolute top-full z-20 mt-2 w-44 rounded-md border border-white/10 bg-ink/95 p-2 text-left text-[11px] leading-snug text-chain/80 shadow-xl backdrop-blur">
                            <span
                              className="font-semibold"
                              style={{ color }}
                            >
                              {p.name}
                            </span>
                            <br />
                            {p.tagline}
                            <br />
                            <span className="mt-1 inline-block font-mono text-[10px] uppercase tracking-wider text-chain/45">
                              click → open in stack
                            </span>
                          </span>
                        )}
                      </button>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
}
