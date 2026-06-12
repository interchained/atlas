import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050810",
        navy: { DEFAULT: "#16345f", deep: "#0a1830" },
        chain: "#eef2f8",
        accent: {
          cyan: "#38dbff",
          red: "#ff4257",
          violet: "#b78bff",
          amber: "#ffb84d",
          green: "#4dffa6",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        atlas: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
