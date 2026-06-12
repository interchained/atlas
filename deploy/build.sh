#!/usr/bin/env bash
# Interchained Atlas — production build for standalone self-hosting.
# Produces a standalone Next.js server with static + public assets copied alongside.
# Robust to both flat (.next/standalone/server.js) and nested layouts.
set -euo pipefail

# Run from the project root regardless of where this is invoked from.
cd "$(dirname "$0")/.."

# 0. Guard: standalone output must be enabled or nothing below will exist.
if ! grep -q '"standalone"' next.config.mjs 2>/dev/null; then
  echo "✗ next.config.mjs is missing  output: \"standalone\"  — add it and re-run." >&2
  exit 1
fi

echo "▸ Installing dependencies (npm ci)…"
npm ci

echo "▸ Building…"
npm run build

# 1. Locate server.js wherever Next placed it (flat, or nested under a project dir
#    if a higher workspace root was inferred). This is the key robustness step.
# Exclude node_modules — React ships its own server.js we must not match.
SERVER_JS="$(find .next/standalone -maxdepth 3 -name server.js -not -path '*/node_modules/*' | sort | head -1)"
if [ -z "${SERVER_JS}" ]; then
  echo "✗ No server.js found under .next/standalone — standalone output was not produced." >&2
  echo "  Check the build log above for errors, then re-run." >&2
  exit 1
fi
SA_DIR="$(dirname "${SERVER_JS}")"
echo "▸ Standalone server directory: ${SA_DIR}"

echo "▸ Wiring standalone assets (next to server.js)…"
# Next's standalone output does NOT copy these automatically.
mkdir -p "${SA_DIR}/.next"
rm -rf "${SA_DIR}/.next/static" "${SA_DIR}/public"
cp -r .next/static "${SA_DIR}/.next/static"
cp -r public       "${SA_DIR}/public"

echo "✓ Standalone server ready. Run it with:"
echo ""
echo "    cd ${SA_DIR} && PORT=3000 HOSTNAME=127.0.0.1 node server.js"
echo ""
echo "  (With outputFileTracingRoot pinned, this should be .next/standalone — flat.)"
