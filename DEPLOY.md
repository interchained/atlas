# Deploying Interchained Atlas

Self-hosting on your own Linux box, behind **nginx**, fronted by **Cloudflare** with
**SSL mode "Flexible"**. Files referenced here live in [`deploy/`](./deploy).

> **Founder-honest note on Flexible SSL.** In Flexible mode the hop from Cloudflare to
> your origin is **plain HTTP**. That means (a) the origin must *not* redirect to HTTPS
> or you'll get an infinite redirect loop, and (b) anyone who learns your origin IP can
> reach `:80` directly, bypassing Cloudflare. Both are handled below — but **Full (Strict)**
> is the right destination once you're stable. The nginx file has a one-block upgrade path.

---

## 1. Production build

Two ways to run in production. Pick one.

### A) Standalone (recommended for self-hosting — lean, no full node_modules)

```bash
bash deploy/build.sh
# → .next/standalone/server.js  (+ static & public copied in)
```

Run it:

```bash
cd .next/standalone && PORT=3000 HOSTNAME=127.0.0.1 node server.js
```

> **If you copy the assets by hand** (instead of using `build.sh`), the order matters:
> the `.next/standalone/` directory only exists *after* a build with
> `output: "standalone"`. So **build first, then copy** — and don't `mkdir -p` the
> destination (`cp -r .next/static .next/standalone/.next/static` creates it; pre-making
> it nests wrongly as `static/static`):
>
> ```bash
> npm run build                                          # creates .next/standalone/.next/
> cp -r .next/static .next/standalone/.next/static
> cp -r public       .next/standalone/public
> ```
>
> Quick check if a copy fails with "No such file or directory":
> `grep standalone next.config.mjs` and `ls -d .next/standalone`.

### B) Classic `next start` (simplest)

```bash
npm ci
npm run build
PORT=3000 HOSTNAME=127.0.0.1 npm start
```

Either way, **bind to `127.0.0.1`** so the app is reachable only through nginx.

---

## 2. Keep it running — systemd

```bash
# Put the built app at /var/www/interchained-atlas (adjust paths to taste)
sudo mkdir -p /var/www/interchained-atlas
sudo rsync -a --delete ./ /var/www/interchained-atlas/    # or deploy just .next/standalone

sudo cp deploy/interchained-atlas.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now interchained-atlas
sudo systemctl status interchained-atlas
```

The unit binds the server to `127.0.0.1:3000`, restarts on failure, and runs with
hardening flags. Logs: `journalctl -u interchained-atlas -f`.

*(Prefer PM2? `pm2 start .next/standalone/server.js --name atlas` with the same env works too — systemd just avoids the extra dependency.)*

---

## 3. nginx reverse proxy

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/interchained-atlas
sudo ln -s /etc/nginx/sites-available/interchained-atlas /etc/nginx/sites-enabled/
# edit server_name to your domain(s)
sudo nginx -t && sudo systemctl reload nginx
```

What the config does, specifically for Flexible mode:
- Listens on **port 80 only** (Cloudflare connects over HTTP).
- **Does not** redirect to HTTPS at the origin — avoids the redirect loop.
- Restores the real visitor IP from `CF-Connecting-IP`.
- Passes Cloudflare's `X-Forwarded-Proto` through (a `map` defaults it to the origin
  scheme if absent), so Next.js sees the true `https` scheme.
- Long-caches `/_next/static/`, gzips text assets, keepalive to the upstream.

---

## 4. Cloudflare settings

1. **DNS** → A/AAAA record for your domain → your origin IP → **proxy ON** (orange cloud).
2. **SSL/TLS → Overview** → set encryption mode to **Flexible**.
3. **SSL/TLS → Edge Certificates** → enable **Always Use HTTPS** (this makes the *edge*
   force HTTPS for visitors — which is exactly where the redirect belongs, not the origin).
4. Optional: **Auto Minify**, **Brotli**, and a **Cache Rule** for `/_next/static/*`.

---

## 5. Close the open-origin hole (do this)

Flexible mode leaves `:80` reachable from anywhere. Lock the origin firewall to
Cloudflare's ranges so only Cloudflare can reach it:

```bash
# ufw example — allow Cloudflare IPv4 ranges to :80, deny the rest
for cidr in $(curl -s https://www.cloudflare.com/ips-v4); do
  sudo ufw allow from "$cidr" to any port 80 proto tcp
done
# (repeat with https://www.cloudflare.com/ips-v6 for IPv6)
sudo ufw deny 80/tcp        # block all other direct HTTP
sudo ufw enable
```

Keep SSH (`22`) allowed for yourself. For the strongest posture, consider a
**Cloudflare Tunnel** (`cloudflared`) so the origin needs no inbound ports at all.

---

## 6. Upgrade to Full (Strict) later

When you're ready to encrypt the CF↔origin hop:

1. Cloudflare → **SSL/TLS → Overview → Full (strict)**.
2. **SSL/TLS → Origin Server → Create Certificate** → save to
   `/etc/ssl/cloudflare/atlas.pem` and `atlas.key`.
3. Uncomment the `:443` server block at the bottom of `deploy/nginx.conf`, and switch
   the `:80` block to a `301 → https` redirect (safe now that CF speaks HTTPS to you).
4. `sudo nginx -t && sudo systemctl reload nginx`.

No application changes required — the app already trusts `X-Forwarded-Proto`.

---

## Updating after a code change

```bash
git pull                       # or drop in the new build
bash deploy/build.sh
sudo rsync -a --delete .next/standalone/ /var/www/interchained-atlas/.next/standalone/
sudo systemctl restart interchained-atlas
```
