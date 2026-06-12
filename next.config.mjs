import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emit a self-contained production server at .next/standalone/server.js
  // for lean self-hosting behind nginx. `next start` still works too.
  output: "standalone",
  // Pin the file-tracing root to THIS project so the standalone output is always
  // FLAT (.next/standalone/server.js). Without this, Next may infer a higher
  // workspace root (e.g. from a stray lockfile in your home directory) and nest
  // the server under .next/standalone/<project>/server.js — which breaks the
  // asset-copy paths and the systemd WorkingDirectory.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
