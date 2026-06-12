import Image from "next/image";
import { FOOTER_LINKS, FOOTER_NOTE, SITE } from "@/content/ecosystem";
import logo from "@/public/logo.png";

/** Link directory + fine print. Server component — no motion needed here. */
export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-6 py-14">
      <div className="mx-auto max-w-atlas">
        <div className="flex flex-wrap items-center gap-3">
          <Image
            src={logo}
            alt="Interchained emblem"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full"
          />
          <div>
            <p className="font-display font-semibold">{SITE.title}</p>
            <p className="font-mono text-xs text-chain/50">{SITE.tagline}</p>
          </div>
        </div>

        <nav className="mt-9 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {FOOTER_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-chain/55 transition-colors hover:text-accent-cyan"
            >
              {l.label} ↗
            </a>
          ))}
        </nav>

        <p className="mt-10 max-w-3xl text-[11px] leading-relaxed text-chain/40">
          {FOOTER_NOTE}
        </p>
        <p className="mt-4 font-mono text-[11px] text-chain/35">
          © {new Date().getFullYear()} Interchained — own the systems you build
          on.
        </p>
      </div>
    </footer>
  );
}
