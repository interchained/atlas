// ─────────────────────────────────────────────────────────────────────────────
// INTERCHAINED ATLAS — SOURCE OF TRUTH
// Every product, layer, link, timeline entry, and block of copy on the page
// lives in this file. Edit here; the components just render it.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  title: "Interchained Atlas",
  tagline: "The ownership stack for AI, proof-of-work, creators, and open systems.",
  description:
    "Interchained is building self-hosted AI infrastructure, proof-of-work tools, open-source wallets, creator reward systems, and real-world automation products — connected by one principle: ownership.",
};

// ── Layers ───────────────────────────────────────────────────────────────────

export type LayerId = "ai" | "chain" | "creator" | "commerce" | "labs";

export interface Layer {
  id: LayerId;
  name: string;
  short: string;
  blurb: string;
  color: string; // hex accent — applied via inline style so Tailwind purge is never an issue
}

export const LAYERS: Layer[] = [
  {
    id: "ai",
    name: "AI Infrastructure",
    short: "AI",
    blurb: "Self-hosted orchestration, signed agent tunnels, content systems, and an open-source agent fleet — all answering to their owners.",
    color: "#38dbff",
  },
  {
    id: "chain",
    name: "Blockchain / Ownership",
    short: "Chain",
    blurb: "Proof-of-work rails, self-custody wallets, and a token layer — open infrastructure, not a pitch.",
    color: "#ff4257",
  },
  {
    id: "creator",
    name: "Creator / Community",
    short: "Creator",
    blurb: "Reward systems and community surfaces that turn contribution into participation.",
    color: "#b78bff",
  },
  {
    id: "commerce",
    name: "Commerce / Utility",
    short: "Commerce",
    blurb: "Trading, hosting, games, and real-world utility experiments on ecosystem rails.",
    color: "#ffb84d",
  },
  {
    id: "labs",
    name: "Learning / Labs",
    short: "Labs",
    blurb: "Blockchain mechanics you can touch — difficulty, subsidy, and consensus in the browser.",
    color: "#4dffa6",
  },
];

// ── Products ─────────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  layer: LayerId;
  tagline: string;
  description: string;
  href?: string;
  badge?: string;
  short?: string; // compact label for the hero orbit map; defaults to name
  repo?: string; // public source repository, when released
  facts?: { label: string; value: string }[]; // deep-dive rows shown on card expand
  orbit?: 1 | 2 | 3; // ring placement on the hero ecosystem map; omit to keep off the map
}

export const PRODUCTS: Product[] = [
  // — AI Infrastructure —
  {
    id: "aias",
    name: "AiAssist SECURE / AiAS",
    layer: "ai",
    short: "AiAS",
    tagline: "Self-hosted, multi-tenant AI orchestration.",
    description:
      "Multi-provider BYOK routing, white-label capability, source access, and private deployment. A sentinel reasoning model governs fast, inexpensive runners — your providers, your keys, your infrastructure.",
    href: "https://aiassist.net",
    orbit: 1,
    facts: [
      { label: "Architecture", value: "Sentinel reasoning model governs fast runner models" },
      { label: "BYOK providers", value: "OpenAI, Anthropic, Groq, Gemini, Mistral, OpenRouter, DeepSeek, Together, Perplexity, xAI" },
      { label: "Deployment", value: "Self-hosted, multi-tenant, white-label, full source" },
    ],
  },
  {
    id: "aias-bridge",
    name: "AiAS Bridge",
    layer: "ai",
    tagline: "A signed WordPress-to-agent publishing tunnel.",
    description:
      "WordPress owns the policy — master prompt, keyword queue, cadence, kill switch. Remote agents execute draft creation through HMAC-secured endpoints with timestamps, nonces, and replay protection.",
  },
  {
    id: "mint-autoblogger",
    name: "Mint Auto-Blogger",
    layer: "ai",
    tagline: "The worker-side agent for MintOnTheAvenue.com.",
    description:
      "Pulls policy from WordPress, respects the kill switch, selects queued keywords, writes drafts, and reports results back through the Bridge. Drafts by default — a human approves what publishes.",
  },
  {
    id: "mint-ai-studio",
    name: "Mint AI Studio",
    layer: "ai",
    tagline: "WordPress AI SEO and content tooling, forged in a real business.",
    description:
      "SEO grading, content refabrication, AI image support, brand guardrails, and editorial workflows — built from the needs of an actual local business, not a demo.",
    short: "Mint",
    orbit: 3,
  },
  {
    id: "pin",
    name: "PIN — P2P Inference Network",
    layer: "ai",
    tagline: "Local models become paid inference endpoints.",
    description:
      "A Rust daemon that connects local Ollama, vLLM, and OpenAI-compatible runtimes to a paid inference marketplace. Operators keep 67% of inference revenue, settled in USDT on BNB Smart Chain.",
    href: "https://aiassist.net",
    repo: "https://github.com/aiassistsecure/pin-clientd",
    short: "PIN",
    orbit: 2,
    facts: [
      { label: "Client", value: "pin-clientd daemon + pin-client-gui" },
      { label: "Runtimes", value: "Ollama, vLLM, any OpenAI-compatible server" },
      { label: "Operator share", value: "67% of inference revenue" },
      { label: "Settlement", value: "USDT on BNB Smart Chain" },
    ],
  },
  {
    id: "malachi",
    name: "Malachi",
    layer: "ai",
    tagline: "The ecosystem's agent in Discord & Telegram.",
    description:
      "An open-source, self-hosted AI agent that lives in Discord and Telegram with one shared persistent memory across both. Built on the AiAssist API (BYOK, multi-model): answers in context, generates images with /imagine, reads the web with /review and /deepsearch — and contributes to the devnet. Your tokens, your server, your data (local SQLite, localhost-bound).",
    href: "https://malachi.aiassist.net",
    repo: "https://github.com/aiassistsecure/malachi_the_bot",
    short: "Malachi",
    orbit: 2,
    facts: [
      { label: "Platforms", value: "Discord + Telegram (shared memory)" },
      { label: "Engine", value: "Python · FastAPI · SQLite · MIT" },
      { label: "Powered by", value: "AiAssist API — BYOK, multi-model" },
      { label: "Commands", value: "/imagine, /review, /deepsearch" },
      { label: "Role", value: "Community agent + devnet contributor" },
    ],
  },
  {
    id: "aias-python",
    name: "AiAS Python SDK",
    layer: "ai",
    tagline: "The Python client for the AiAssist API.",
    description:
      "Build on AiAS from Python: an OpenAI-compatible client for the AiAssist API with multi-provider routing and BYOK. The same family of SDKs that powers agents like Malachi.",
    repo: "https://github.com/aiassistsecure/aiassist-python",
    short: "Py SDK",
  },
  {
    id: "signal-mcp",
    name: "Signal MCP Spec",
    layer: "ai",
    tagline: "An opinionated spec for MCP servers agents reason well against.",
    description:
      "A clean-sheet design for Model Context Protocol servers built for a signal-intelligence domain — not a REST-to-tool wrapper. The contract layer that makes agent tooling legible.",
    repo: "https://github.com/aiassistsecure/signal-MCP-spec",
    short: "Signal MCP",
  },
  {
    id: "keystone-lite",
    name: "KeyStone Lite",
    layer: "ai",
    tagline: "Local-first editor for AI-assisted, surgical code edits.",
    description:
      "A local-first desktop editor for AI-assisted debugging and surgical code edits — agentic code work that stays on your machine.",
    repo: "https://github.com/aiassistsecure/KeyStone-Lite",
    short: "KeyStone",
  },
  {
    id: "gex",
    name: "_Gex",
    layer: "ai",
    tagline: "The AI code surgeon.",
    description:
      "Scans your source, clones the repo to a parallel directory, asks an LLM for surgical fixes, applies them to the clone, and proposes the changes — your working tree is never edited in place.",
    repo: "https://github.com/aiassistsecure/_Gex",
    short: "_Gex",
  },
  {
    id: "whiteglove",
    name: "WhiteGlove",
    layer: "ai",
    tagline: "An agentic UX framework.",
    description:
      "AI-powered adaptive websites that respond to human intent — an agentic UX layer that reshapes the interface around what a visitor is actually trying to do.",
    repo: "https://github.com/aiassistsecure/WhiteGlove",
    short: "WhiteGlove",
  },
  {
    id: "browsewithme",
    name: "BrowseWithMe",
    layer: "ai",
    tagline: "A privacy-first browsing companion.",
    description:
      "A browsing companion built privacy-first — no data collection. Part of the AiAS open-source tool family.",
    repo: "https://github.com/aiassistsecure/BrowseWithMe",
    short: "BrowseWithMe",
  },
  {
    id: "journey",
    name: "Journey",
    layer: "ai",
    tagline: "Finds journalists already covering your space.",
    description:
      "A discovery agent that finds journalists already writing about the topics you're building, shipping, and open-sourcing — so outreach starts warm.",
    repo: "https://github.com/aiassistsecure/journey",
    short: "Journey",
  },
  {
    id: "angel",
    name: "Angel",
    layer: "ai",
    tagline: "Finds the investors who back your category.",
    description:
      "An AI agent that discovers angel investors, micro funds, seed funds, family offices, and operator-investors who back companies in your category.",
    repo: "https://github.com/aiassistsecure/angel",
    short: "Angel",
  },
  {
    id: "genshi",
    name: "GenShi",
    layer: "ai",
    tagline: "Generate Sheets — describe it, watch B2B data stream in.",
    description:
      "A new kind of discovery agent: describe what you need, define your columns, and watch real B2B data stream in — powered by Netrows.",
    repo: "https://github.com/aiassistsecure/genshi",
    short: "GenShi",
  },
  {
    id: "amari",
    name: "Amari",
    layer: "ai",
    tagline: "A DevRel & sales signal scout.",
    description:
      "Built on @aiassist-secure/intelligence-mcp, Amari watches Reddit, Hacker News, and other public sources for real-time signals worth acting on.",
    repo: "https://github.com/aiassistsecure/Amari",
    short: "Amari",
  },
  {
    id: "job",
    name: "Job",
    layer: "ai",
    tagline: "Job finds jobs.",
    description:
      "A discovery agent pointed at the job market — Job finds jobs.",
    repo: "https://github.com/aiassistsecure/Job",
    short: "Job",
  },

  // — Blockchain / Ownership —
  {
    id: "itc",
    name: "ITC",
    layer: "chain",
    tagline: "Interchained's proof-of-work chain.",
    description:
      "SHA-256 primary with Yespower fallback behavior reserved for emergency stall scenarios. Built around self-custody, mining, open-source tooling, and ecosystem participation — infrastructure, not an investment.",
    href: "https://interchained.org",
    repo: "https://github.com/interchained/interchained",
    orbit: 1,
    facts: [
      { label: "Launch", value: "Fair launch · no premine · genesis unspent" },
      { label: "Consensus", value: "SHA-256 primary · Yespower emergency fallback" },
      { label: "Emission", value: "≈1.1M ITC across ~1M blocks, then 0.10301990 ITC/block tail" },
      { label: "Difficulty", value: "DGW-Nova retargeting" },
      { label: "Token layer", value: "ITSL native subsystem" },
    ],
  },
  {
    id: "elara",
    name: "Elara Wallet",
    layer: "chain",
    short: "Elara",
    tagline: "Open-source wallet for people who hold their own keys.",
    description:
      "ITC and BTC support, seed backup, address management, and mobile usability — designed around self-custody first. Open-source release strategy in motion.",
    href: "https://elara.interchained.org",
    repo: "https://github.com/interchained/elara",
    orbit: 1,
    facts: [
      { label: "License", value: "GPLv3 — non-custodial" },
      { label: "Stack", value: "Capacitor + Svelte" },
      { label: "Chains", value: "ITC + BTC" },
    ],
  },
  {
    id: "itsl",
    name: "ITSL",
    layer: "chain",
    tagline: "The Interchained token layer.",
    description:
      "Expands what builders can create on top of the ITC ecosystem — a native token subsystem for ecosystem experiments.",
    href: "https://itsl.interchained.org",
    orbit: 1,
  },
  {
    id: "vision",
    name: "Vision Explorer",
    layer: "chain",
    tagline: "The official ITC block & token explorer.",
    description:
      "See the chain for yourself: blocks, transactions, and ITSL assets. Next.js 15 + FastAPI, MIT-licensed, and self-hostable — run your own explorer instead of trusting someone else's.",
    href: "https://vision.interchained.org",
    repo: "https://github.com/interchained/vision",
    short: "Vision",
    orbit: 2,
    facts: [
      { label: "Stack", value: "Next.js 15 + FastAPI" },
      { label: "License", value: "MIT — self-hostable" },
      { label: "Scope", value: "Blocks, transactions, ITSL tokens" },
    ],
  },
  {
    id: "witc-ibridge",
    name: "wITC + iBridge",
    layer: "chain",
    tagline: "Cross-chain rails for ITC.",
    description:
      "wITC is ITC wrapped 1:1 on BNB Smart Chain, minted and redeemed through the iBridge cross-chain bridge — move value across chains without giving up the base layer.",
    facts: [
      { label: "Peg", value: "1:1 wrapped ITC" },
      { label: "Network", value: "BNB Smart Chain" },
      { label: "Mechanism", value: "iBridge mint / redeem" },
    ],
  },
  {
    id: "explainers",
    name: "Subsidy & DAA Explainers",
    layer: "chain",
    tagline: "The monetary mechanics, explained without hype.",
    description:
      "Educational pages on block rewards, subsidy decay, mining difficulty, and how ITC mechanics compare to Bitcoin's.",
    href: "https://labs.interchained.org",
  },

  // — Creator / Community —
  {
    id: "kudos",
    name: "Kudos",
    layer: "creator",
    tagline: "Earn ITC from posts on X.",
    description:
      "Topics represent ITC pools, submissions are graded, and contribution becomes a social-mining-style experiment. Proof-of-post, in effect.",
    href: "https://kudos.interchained.org",
    repo: "https://github.com/aiassistsecure/Kudos",
    badge: "Live",
    orbit: 2,
    facts: [
      { label: "Grading", value: "Submissions scored by AiAS" },
      { label: "Pools", value: "Topics map to ITC reward pools" },
      { label: "Surface", value: "Posts on X" },
    ],
  },
  {
    id: "inews",
    name: "iNEWS",
    layer: "creator",
    tagline: "The ecosystem's news and information surface.",
    description: "Signals, updates, and ecosystem coverage at 1337.news.",
    href: "https://1337.news",
    orbit: 2,
  },
  {
    id: "ifund",
    name: "iFUND",
    layer: "creator",
    tagline: "Launchpad and funding surface.",
    description: "A funding surface for ecosystem initiatives — projects raise and coordinate on ecosystem rails.",
    href: "https://earn.interchained.org/launchpad/m/about",
    orbit: 2,
  },
  {
    id: "ihub",
    name: "iHUB",
    layer: "creator",
    tagline: "The contributor and community hub.",
    description: "Where builders, operators, and contributors coordinate across the ecosystem.",
    href: "https://earn.interchained.org/hub",
    orbit: 2,
  },
  {
    id: "inop",
    name: "iNOP",
    layer: "creator",
    tagline: "The node and operator portal.",
    description: "Node and operator-related ecosystem portal — the surface for the people who keep the rails running.",
    href: "https://earn.interchained.org/nop",
  },

  // — Commerce / Utility —
  {
    id: "itrade",
    name: "iTRADE",
    layer: "commerce",
    tagline: "Trading surface for the ecosystem.",
    description: "A trading-related ecosystem surface on the earn.interchained.org rails.",
    href: "https://earn.interchained.org/itrade",
    orbit: 3,
  },
  {
    id: "ihost",
    name: "iHOST",
    layer: "commerce",
    tagline: "Hosting and infrastructure services.",
    description: "Infrastructure services for ecosystem builders and operators.",
    href: "https://earn.interchained.org/hosting",
    orbit: 3,
  },
  {
    id: "gamexchange",
    name: "GameXchange",
    layer: "commerce",
    tagline: "The Bitcoin/game platform.",
    description:
      "Prediction games, raffles, high/low mechanics, swaps, and wallet/security flows — a long-running PHP/MySQL platform in the Interchained orbit.",
    href: "https://app.gamexchange.org",
    orbit: 3,
  },
  {
    id: "rideflow",
    name: "RideFlow",
    layer: "commerce",
    tagline: "A ride-share experiment under the Interchained umbrella.",
    description:
      "An open-source ride-sharing platform where drivers keep 82% of every fare — real GPS, real maps, real transparency.",
    href: "https://rideflow.interchained.org",
    repo: "https://github.com/interchained/rideFlow",
    badge: "Prototype",
    orbit: 3,
    facts: [
      { label: "Driver share", value: "82% of every fare" },
      { label: "Stack", value: "TypeScript · real GPS + maps" },
    ],
  },

  // — Learning / Labs —
  {
    id: "labs",
    name: "Interchained Labs",
    layer: "labs",
    short: "Labs",
    tagline: "Blockchain-in-browser education and experimentation.",
    description:
      "A genuine blockchain in your browser — run it, mine it, learn from it. No node, no install, no backend; every hash is real SHA-256, computed live in the tab. A Bitcoin-style educator: send tokens, watch the mempool fill, and mine real proof-of-work blocks.",
    href: "https://labs.interchained.org",
    repo: "https://github.com/interchained/lab",
    orbit: 3,
    facts: [
      { label: "Runs in", value: "Your browser — no node, no backend" },
      { label: "PoW", value: "Real SHA-256, computed live in-tab" },
      { label: "Teaches", value: "Mempool, mining, blocks, difficulty, subsidy" },
    ],
  },
  {
    id: "daa-lab",
    name: "DAA Lab",
    layer: "labs",
    tagline: "Difficulty adjustment, visualized.",
    description: "Compare difficulty adjustment algorithms and see how chains defend their cadence.",
    href: "https://labs.interchained.org",
    repo: "https://github.com/interchained/lab",
  },
  {
    id: "subsidy-lab",
    name: "Subsidy Lab",
    layer: "labs",
    tagline: "Monetary policy you can scrub through.",
    description: "Block subsidy decay and emission schedules, explained interactively.",
    href: "https://labs.interchained.org",
    repo: "https://github.com/interchained/lab",
  },
];

// ── Hero ─────────────────────────────────────────────────────────────────────

export const HERO = {
  eyebrow: "Interchained Atlas",
  headline: "Own the systems you build on.",
  sub: SITE.description,
  terminal: "atlas@interchained:~$ render --stack ownership",
  ctas: [
    { label: "Explore the Ecosystem", href: "#stack", primary: true },
    { label: "View Open Source", href: "https://github.com/interchained", primary: false },
    { label: "Explore AiAS", href: "https://aiassist.net", primary: false },
  ],
};

// ── Thesis pillars ───────────────────────────────────────────────────────────

export const THESIS = {
  title: "Ownership is the architecture.",
  body: "The next generation of software should not force creators, businesses, and communities to surrender their data, keys, infrastructure, and workflows to closed platforms. Interchained builds tools that give people more control over the systems they depend on.",
  pillars: [
    { name: "Self-hosted AI", detail: "Run orchestration on your terms — your providers, your keys, your deployment." },
    { name: "Proof-of-work infrastructure", detail: "Open rails secured by computation, not permission." },
    { name: "Open-source wallets & tools", detail: "Hold your own keys with software you can read." },
    { name: "Creator & community rewards", detail: "Contribution becomes participation, on-chain." },
    { name: "Real-world business automation", detail: "Agents that answer to the business, tested in a real one." },
    { name: "Contributor-driven development", detail: "Quests, certifications, and shipped work over vanity." },
  ],
};

// ── AiAS Bridge architecture ─────────────────────────────────────────────────

export const BRIDGE = {
  title: "WordPress as control plane. Agents as execution layer.",
  intro:
    "AiAS Bridge is a signed publishing tunnel. The site owner defines policy in WordPress — master prompt, keyword queue, cadence, status, category, tags, and a kill switch, all in wp-admin. Remote agents do the work; the site keeps the authority.",
  steps: [
    { name: "WordPress Plugin", detail: "Policy lives in wp-admin: prompt, queue, cadence, kill switch." },
    { name: "Signed config pull", detail: "Agent fetches policy via HMAC-signed GET." },
    { name: "Sentinel routes", detail: "AiAS sentinel interprets policy and dispatches a runner." },
    { name: "Runner drafts", detail: "A fast runner generates the draft content." },
    { name: "Sentinel review", detail: "The sentinel reviews the draft against policy." },
    { name: "Signed post back", detail: "Draft returns via HMAC-signed POST." },
    { name: "Human approval", detail: "Posts land as drafts by default. A person publishes." },
  ],
  security: ["HMAC-SHA256", "Timestamps", "Nonces", "Replay protection", "Audit log", "Kill switch", "Drafts by default"],
  kicker: "The site remains the authority. The agent is only the worker.",
};

// ── Proof-of-work story ──────────────────────────────────────────────────────

export const POW = {
  title: "Proof-of-work as public infrastructure.",
  body: "ITC is Interchained's proof-of-work chain — designed as a foundation for experiments in mining, self-custody, token layers, and open-source monetary infrastructure. It connects wallet tooling, educational labs, social-mining experiments, and ecosystem participation.",
  facts: [
    { label: "Consensus", value: "SHA-256 primary" },
    { label: "Fallback", value: "Yespower (emergency stall scenarios)" },
    { label: "Custody", value: "Self-custody first" },
    { label: "Tooling", value: "Open source" },
    { label: "Token layer", value: "ITSL" },
    { label: "Education", value: "Labs + explainers" },
  ],
  emphasis: ["Self-custody", "Mining", "Open-source tooling", "Education", "Contributor participation", "Wallet usability", "Experimentation"],
  disclaimer:
    "ITC is open infrastructure for experimentation — not an investment product. No claims are made about price, returns, listings, or future value.",
};

// ── Real-world proof ─────────────────────────────────────────────────────────

export const REAL_WORLD = {
  title: "Built in the wild.",
  body: "Interchained is not only theory. Mint on the Avenue — an Aveda Concept Salon in Winter Park, Florida — serves as a real-world business laboratory for AI-assisted WordPress SEO, content operations, local marketing workflows, and practical automation. The tools are tested against real business needs, not just demos.",
  points: [
    "Mint Auto-Blogger in operation",
    "Mint AI Studio workflows",
    "Local SEO workflows",
    "Draft-first publishing",
    "Human approval on everything",
    "Business-controlled brand voice",
  ],
};

// ── Open source & contributors ───────────────────────────────────────────────

export const OPEN_SOURCE = {
  title: "Open systems need real builders.",
  body: "Interchained is moving toward staged open-source releases, beginning with key ecosystem tools such as Elara Wallet and related documentation. The contributor network is built through practical quests, certifications, project tasks, documentation, and real shipped work — disciplined ecosystem-building, not vanity.",
  credentials: [
    "Founding 500 member of HyperAgent",
    "Received 20,000 HyperAgent inference credits",
  ],
  paths: [
    "Contributor onboarding",
    "Builder certification quest",
    "Inner-circle builder filtering",
    "Open-source documentation",
    "Good-first-issue contribution paths",
  ],
};

// ── Timeline / shipped momentum ──────────────────────────────────────────────

export const TIMELINE = {
  title: "What shipped.",
  sub: "Momentum, not clutter — recent movement across the stack.",
  items: [
    { label: "AiAS Bridge working", layer: "ai" as LayerId },
    { label: "Mint Auto-Blogger running", layer: "ai" as LayerId },
    { label: "PIN inference network shipped", layer: "ai" as LayerId },
    { label: "Malachi agent live (Discord + Telegram)", layer: "ai" as LayerId },
    { label: "HyperAgent integration experiments", layer: "ai" as LayerId },
    { label: "Elara open-source release strategy", layer: "chain" as LayerId },
    { label: "ITSL shipped", layer: "chain" as LayerId },
    { label: "Vision explorer shipped", layer: "chain" as LayerId },
    { label: "Kudos social mining live", layer: "creator" as LayerId },
    { label: "Labs launched", layer: "labs" as LayerId },
    { label: "DAA + subsidy explainers launched", layer: "labs" as LayerId },
    { label: "RideFlow prototype live", layer: "commerce" as LayerId },
    { label: "Deck refreshed", layer: "creator" as LayerId },
    { label: "Contributor quest started", layer: "creator" as LayerId },
    { label: "HyperAgent Founding 500 + 20k inference credits", layer: "ai" as LayerId },
    { label: "AS — Computer Programming & Analysis, Valencia College", layer: "labs" as LayerId },
  ],
};

// ── Audiences ────────────────────────────────────────────────────────────────

export const AUDIENCES = {
  title: "Who it's for.",
  cards: [
    {
      name: "Builders",
      detail: "Explore AI infrastructure, proof-of-work tools, wallets, and open-source systems.",
    },
    {
      name: "Businesses",
      detail: "Use AiAS, AiAS Bridge, and Mint-style automation to own AI workflows, content operations, and customer-facing automation.",
    },
    {
      name: "Creators",
      detail: "Use Kudos, iNEWS, and ecosystem rails to turn contribution into participation.",
    },
    {
      name: "Operators",
      detail: "Use iHOST, iHUB, iNOP, and infrastructure tools to support and grow the network.",
    },
    {
      name: "Contributors",
      detail: "Join the inner circle by completing quests, shipping documentation, improving code, and proving follow-through.",
    },
  ],
};

// ── Final CTA + footer ───────────────────────────────────────────────────────

export const FINAL_CTA = {
  headline: "Build on systems you can own.",
  ctas: [
    { label: "Explore the Ecosystem", href: "#stack", primary: true },
    { label: "Join the Builder Network", href: "https://earn.interchained.org/hub", primary: false },
    { label: "View GitHub", href: "https://github.com/interchained", primary: false },
    { label: "Explore AiAS", href: "https://aiassist.net", primary: false },
    { label: "Learn About ITC", href: "https://interchained.org", primary: false },
  ],
};

export const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "interchained.org", href: "https://interchained.org" },
  { label: "eco.interchained.org", href: "https://eco.interchained.org" },
  { label: "GitHub", href: "https://github.com/interchained" },
  { label: "GitHub — aiassistsecure", href: "https://github.com/aiassistsecure" },
  { label: "Deck", href: "https://deck.interchained.org" },
  { label: "AiAS — aiassist.net", href: "https://aiassist.net" },
  { label: "Malachi", href: "https://malachi.aiassist.net" },
  { label: "Elara Wallet", href: "https://elara.interchained.org" },
  { label: "ITSL", href: "https://itsl.interchained.org" },
  { label: "Kudos", href: "https://kudos.interchained.org" },
  { label: "Labs", href: "https://labs.interchained.org" },
  { label: "Vision Explorer", href: "https://vision.interchained.org" },
  { label: "iNEWS — 1337.news", href: "https://1337.news" },
  { label: "iFUND", href: "https://earn.interchained.org/launchpad/m/about" },
  { label: "iTRADE", href: "https://earn.interchained.org/itrade" },
  { label: "iHOST", href: "https://earn.interchained.org/hosting" },
  { label: "iHUB", href: "https://earn.interchained.org/hub" },
  { label: "iNOP", href: "https://earn.interchained.org/nop" },
  { label: "GameXchange", href: "https://app.gamexchange.org" },
  { label: "RideFlow", href: "https://rideflow.interchained.org" },
];

export const FOOTER_NOTE =
  "Interchained builds open, ownership-first infrastructure. Nothing on this page is investment advice. ITC is experimental proof-of-work infrastructure; no claims are made about price, listings, returns, or future value.";

// ── Section nav (mini-nav + command palette) ─────────────────────────────────

export const NAV_SECTIONS = [
  { id: "thesis", label: "Thesis" },
  { id: "stack", label: "Stack" },
  { id: "interlocks", label: "Interlocks" },
  { id: "bridge", label: "Bridge" },
  { id: "pow", label: "Proof-of-Work" },
  { id: "real-world", label: "Real World" },
  { id: "open-source", label: "Open Source" },
  { id: "timeline", label: "Shipped" },
  { id: "audiences", label: "Who" },
];

// ── System interlocks (how the stack composes) ───────────────────────────────

export interface Interlock {
  a: string;
  verb: string;
  b: string;
  detail: string;
  color: string;
}

export const INTERLOCKS: { title: string; sub: string; edges: Interlock[] } = {
  title: "One stack, not two dozen apps.",
  sub: "The Atlas only matters if the nodes compose. These are the live edges between systems — where one surface feeds, secures, or settles another.",
  edges: [
    {
      a: "Kudos",
      verb: "graded by",
      b: "AiAS",
      detail: "Sentinels score X-post submissions against topic pools.",
      color: "#38dbff",
    },
    {
      a: "Kudos",
      verb: "rewards in",
      b: "ITC",
      detail: "Graded contribution draws from on-chain topic pools.",
      color: "#b78bff",
    },
    {
      a: "ITC",
      verb: "explored in",
      b: "Vision",
      detail: "Blocks, transactions, and ITSL assets — self-hostable, MIT.",
      color: "#ff4257",
    },
    {
      a: "ITC",
      verb: "held in",
      b: "Elara",
      detail: "Self-custody keys on mobile, ITC + BTC.",
      color: "#ff4257",
    },
    {
      a: "ITC",
      verb: "wrapped via",
      b: "iBridge → wITC",
      detail: "1:1 onto BNB Smart Chain, and back again.",
      color: "#ff4257",
    },
    {
      a: "PIN",
      verb: "extends",
      b: "AiAS",
      detail: "Local models become paid endpoints; operators keep 67%.",
      color: "#38dbff",
    },
    {
      a: "Malachi",
      verb: "built on",
      b: "AiAS",
      detail: "The ecosystem's Discord + Telegram agent — shared memory, BYOK, devnet contributor.",
      color: "#38dbff",
    },
    {
      a: "Mint",
      verb: "runs on",
      b: "AiAS Bridge",
      detail: "A real business hardens the publishing tunnel daily.",
      color: "#ffb84d",
    },
    {
      a: "Labs",
      verb: "teach",
      b: "ITC mechanics",
      detail: "Difficulty and subsidy, interactive in the browser.",
      color: "#4dffa6",
    },
  ],
};

// ── ITC chain spec deep dive ─────────────────────────────────────────────────

export const ITC_DEEP: {
  title: string;
  intro: string;
  rows: { k: string; body: string }[];
} = {
  title: "Open the chain spec",
  intro: "stated plainly, no hype",
  rows: [
    {
      k: "Consensus & fallback",
      body: "SHA-256 is the primary proof-of-work algorithm. Yespower is retained as an emergency fallback path reserved for chain-stall scenarios — resilience, not a second identity.",
    },
    {
      k: "Emission & supply",
      body: "Approximately 1.1M ITC are emitted across the first ~1M blocks, after which a tail emission of 0.10301990 ITC per block continues — designed for long-horizon mining participation rather than scarcity theater.",
    },
    {
      k: "Difficulty",
      body: "DGW-Nova retargeting responds quickly to hashrate swings to defend block cadence — the mechanic you can watch in the DAA Lab.",
    },
    {
      k: "Token layer",
      body: "ITSL is a native token subsystem on ITC rails — builders issue and move ecosystem assets without leaving the chain.",
    },
    {
      k: "Cross-chain",
      body: "wITC wraps ITC 1:1 onto BNB Smart Chain through iBridge, with mint and redeem flows back to the base layer.",
    },
    {
      k: "Explore & hold",
      body: "Vision (MIT, self-hostable) is the chain's explorer; Elara (open-source, ITC + BTC) is the self-custody wallet. Both are part of the same ownership story.",
    },
  ],
};
