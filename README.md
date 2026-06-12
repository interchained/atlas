<div align="center">

`◇──◇──◇──◇──◇──◇──◇`

# INTERCHAINED ATLAS

**The ownership stack for AI, proof-of-work, creators, and open systems.**

`atlas@interchained:~$ render --stack ownership`

`◇──◇──◇──◇──◇──◇──◇`

</div>

---

## ⛓ The Lore of the Chain Dwellers

> *Every map is a claim about who the territory belongs to.*
> *This one belongs to the people who live on it.*

### I. The Renting Years

In the early cycles, almost everyone rented.

Keys were held by landlords. Words lived in feeds that could be switched off. Workflows ran in walled gardens whose gates moved nightly. The rent was never only money — it was leverage, surrendered one convenient default at a time. Whole guilds woke one morning to find their craft owned by someone else's terms of service.

Most shrugged. The rent was due either way.

### II. The First Dwellers

Some refused.

They synced their own nodes and kept their own keys. They ran their own models on their own iron. They signed their own messages and published from halls they held the deeds to. They did not storm the gates — **they built where there were no gates.**

The platforms called them stubborn. They called themselves **Chain Dwellers**, because they lived on the thing itself: block by block, key by key, commit by commit.

The first law they cut into the genesis stone was short:

> **What you build on, you must be able to own.**

### III. The Five Regions

The Dwellers' territory grew into five regions — you will find them rendered as layers in this very Atlas, each burning its own color.

| Region | Color | Known in the common tongue as |
|---|---|---|
| **The Signal Spire** | cyan `#38dbff` | AI Infrastructure — AiAS, the Bridge, Mint, PIN, Malachi, and the open-source agent fleet |
| **The Deep Forge** | ember `#ff4257` | Blockchain / Ownership — ITC, Elara, ITSL, Vision, wITC + iBridge |
| **The Commons** | violet `#b78bff` | Creator / Community — Kudos, iNEWS, iFUND, iHUB, iNOP |
| **The Exchange Roads** | amber `#ffb84d` | Commerce / Utility — iTRADE, iHOST, GameXchange, RideFlow |
| **The Proving Grounds** | green `#4dffa6` | Learning / Labs — where mechanics are taught by touch |

### IV. The Sentinel and the Runners

In the Signal Spire there is a watcher-mind called the **Sentinel**. It does not write; it *weighs*.

Swift runner-minds do the writing — drafts, summaries, pages by the hundred. But no runner holds a seal. Every draft crosses a **signed bridge** — HMAC-stamped, nonce-checked, replay-proof — and lands in the hall it was written for, where it waits for a human hand.

The Dwellers keep this law absolute, and carve it over every bridge gate:

> *The hall remains the authority. The runner is only the worker.*

### V. The Herald

Not every Dweller stays at the forge. One walks the **Commons** — **Malachi**, an open agent who keeps a presence where people already gather: Discord and Telegram, carrying *one* memory across both so no thread is ever dropped.

> *"Greetings, seeker. I am Malachi. Ask, and the path shall reveal itself."*

It answers in context, conjures images on command (`/imagine`), reads the open web when asked (`/review`, `/deepsearch`) — and reports back to the devnet it helps tend. The Herald proves a quiet point the Dwellers care about: an agent can *serve* a community without *owning* it. Your server, your keys, your data — the Herald only carries the word.

And the Herald does not range alone. Scouts run ahead of the caravan — **Journey** seeking chroniclers, **Angel** seeking patrons, **GenShi** charting the lists, **Amari** listening at the crossroads of Reddit and the forums, **Job** hunting the next post — while back at the forge the code-surgeons **_Gex** and **KeyStone** mend what breaks. An open fleet: every scout a repo you can read.

### VI. The Heartbeat of the Deep Forge

The Forge beats in SHA-256 hammerfall — computation, not permission. An older rhythm, **Yespower**, sleeps in reserve, kept oiled for the rare day the heart stutters.

And the forge never goes cold: past the millionth block, the **ember constant** — `0.10301990` per block — keeps the fires lit for whoever still swings a hammer. Difficulty bends with the crowd (the smiths call it DGW-Nova), the better to hold the cadence steady.

The Dwellers do not read the Forge as a ledger of riches. They read it as a heartbeat. *(Nothing in this repository is investment advice; the Forge makes no promises about price, listings, or returns. It never has.)*

### VII. The Wild

Lore is cheap until it meets weather.

So the Dwellers keep a proving post out in the Wild — a real salon on a real avenue in Winter Park, where the runners draft against real appointments, real customers, real consequence. Tools that survive the Wild earn their place on the map. Tools that don't, don't.

### VIII. The Inner Circle

The Circle is not bought. **It is walked.**

Quests, certifications, documentation shipped, code improved, follow-through proven — that is the whole initiation. New Dwellers start at the edge of the map and earn their way inward, one merged commit at a time.

### IX. The Creed

```
Own your keys.
Own your AI workflows.
Own your infrastructure.
Own your content systems.
Own your distribution.
Own your community rails.
Own your automation.
```

This repository is the map of that territory. The map is not the territory — but here, for once, the territory is yours too.

*Block by block.* — **the Dwellers**

---

## 🗺 For New Dwellers — Quickstart

A 2027-grade ecosystem atlas: **Next.js 15** (App Router) + **React 19** + **TypeScript** + **Tailwind CSS 3.4** + **Framer Motion 11**.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## 🧭 The Cartographer's Desk — where everything lives

**`content/ecosystem.ts` is the single source of truth.** Every product, layer, link, fact sheet, interlock, timeline entry, and block of copy lives there. Edit that one file; the components render whatever it contains.

| What | Where |
|---|---|
| Products, layers, links, facts, interlocks, all copy | `content/ecosystem.ts` |
| Brand emblem | `public/logo.png` (also `app/icon.png` favicon) |
| OG social card (1200×630) | `public/og.jpg`, wired in `app/layout.tsx` |
| Colors, fonts, tokens | `tailwind.config.ts` |
| Glass / grid / gradient utilities | `app/globals.css` |
| SEO metadata + OG/Twitter | `app/layout.tsx` |
| Section order | `app/page.tsx` |

### Component map

```
app/page.tsx
├── Constellation      fixed canvas starfield + connection lines
├── ScrollProgress     2px gradient progress bar
├── MiniNav            sticky glass nav + ⌘K trigger
├── CommandPalette     ⌘K launcher over sections/products/links
├── Hero               headline + terminal accent + OrbitMap
│   └── OrbitMap       3 rotating rings of nodes — hover for tooltips,
│                      click a node to open its card in the Stack explorer
├── Thesis             "Ownership is the architecture" + 6 pillars
├── StackExplorer      layer filter tabs + expandable node cards (facts + repo links)
├── Interlocks         the live edges between systems
├── BridgeDiagram      AiAS Bridge 7-step signed flow + security chips
├── PowStory           ITC story + terminal spec card + chain-spec accordion
├── RealWorld          Mint on the Avenue field lab
├── OpenSourceSection  credentials + contributor paths
├── Timeline           what shipped, layer-coded
├── Audiences          builders / businesses / creators / operators / contributors
├── FinalCTA           closing CTAs
└── Footer             19-link directory + fine print
```

## 🎨 Design system

- **Palette** — near-black navy void `#050810`, chain-white `#eef2f8`, and the five region colors above, all keyed to the brand emblem.
- **Type** — Space Grotesk (display), Inter (body), JetBrains Mono (terminal accents), via Google Fonts `@import` in `globals.css`.
- **Motifs** — orbital ecosystem map, constellation canvas, blueprint grid, block/chain ticks, signed GET⇄POST signal path, glass panels with luminous edges.
- **Motion** — transform/opacity only; `prefers-reduced-motion` respected everywhere (canvas disables itself, orbits freeze).

## 🚀 Raising your own beacon — deploy

**Vercel:** import the repo → Next.js auto-detected → deploy. Zero config.

**Self-hosted (nginx + Cloudflare):** the app emits a standalone server
(`output: "standalone"`). Full walkthrough — production build, systemd unit, nginx
reverse proxy, Cloudflare SSL **Flexible** (with the redirect-loop + open-origin traps
handled), and the **Full (Strict)** upgrade path — lives in **[DEPLOY.md](./DEPLOY.md)**,
with drop-in files under [`deploy/`](./deploy):

```bash
bash deploy/build.sh                       # → .next/standalone/server.js
PORT=3000 HOSTNAME=127.0.0.1 node .next/standalone/server.js
```

`metadataBase` in `app/layout.tsx` is set to the production domain `https://atlas.interchained.org` so the OG card and canonical URLs resolve absolute. Change it there if the domain ever moves.

## 📜 The Old Laws — content guardrails (keep them)

- Only verifiable claims: "Founding 500 member of HyperAgent", "received 20,000 HyperAgent inference credits". Do NOT reference the Claude Partner Network or imply any Anthropic affiliation. Never "partnered with Anthropic", never "backed/funded by HyperAgent". (Anthropic may appear only as one of the listed BYOK LLM providers.)
- ITC is experimental open infrastructure — **never an investment**. No price, listing, return, user-count, or revenue claims anywhere on the page.
- Consensus is stated as **SHA-256 primary, Yespower emergency fallback** — keep public copy in sync with chain reality.
- No fake testimonials, customers, awards, or numbers. The momentum section lists only what actually shipped.

## 🔗 The territory

[interchained.org](https://interchained.org) · [eco.interchained.org](https://eco.interchained.org) · [GitHub](https://github.com/interchained) · [aiassistsecure](https://github.com/aiassistsecure) · [AiAS](https://aiassist.net) · [Elara](https://elara.interchained.org) · [ITSL](https://itsl.interchained.org) · [Vision](https://vision.interchained.org) · [Kudos](https://kudos.interchained.org) · [Labs](https://labs.interchained.org) · [iNEWS](https://1337.news) · [Deck](https://deck.interchained.org)

<div align="center">

`◇──◇──◇──◇──◇──◇──◇`

*Own the systems you build on.*

</div>
