"use client";

import Image from "next/image";
import { NAV_SECTIONS } from "@/content/ecosystem";
import { PALETTE_EVENT } from "./CommandPalette";
import logo from "@/public/logo.png";

/** Sticky glass mini-nav: emblem, section anchors, ⌘K launcher. */
export default function MiniNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-atlas items-center gap-4 px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <Image
            src={logo}
            alt="Interchained emblem"
            width={28}
            height={28}
            className="h-7 w-7 rounded-full"
            priority
          />
          <span className="font-display text-sm font-semibold tracking-wide">
            INTERCHAINED <span className="text-chain/40">//</span>{" "}
            <span className="text-accent-cyan">ATLAS</span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-5 lg:flex">
          {NAV_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-mono text-[11px] uppercase tracking-widest text-chain/55 transition-colors hover:text-chain"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open command palette"
          onClick={() => window.dispatchEvent(new Event(PALETTE_EVENT))}
          className="ml-auto flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 font-mono text-[11px] text-chain/60 transition hover:border-accent-cyan/40 hover:text-chain lg:ml-0"
        >
          <span>Search</span>
          <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]">⌘K</kbd>
        </button>
      </div>
    </header>
  );
}
