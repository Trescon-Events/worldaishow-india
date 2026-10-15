# World AI Show — Malaysia (2027 edition site)

> **Start here:** read `HANDOFF.md` in full before changing or deploying anything. This file = standing conventions; `HANDOFF.md` = what is true right now.

## Project

- **Live URL:** https://worldaishow.com/malaysia/
- **Repo:** Trescon-Events/worldaishow-malaysia (branch `master`)
- **Cloudflare Pages project:** wais-malaysia
- **Stack:** Next.js 16 static export (`output: "export"`, `basePath: "/malaysia"`), React 19, Tailwind 4. READ `node_modules/next/dist/docs/` before writing Next code — this is not the Next.js you know (see the agent-rules block in the AGENTS.md this file extends).

## Architecture (World AI Show on Cloudflare)

worldaishow.com is being moved off the legacy FTP/cPanel server (3.17.159.245) onto Cloudflare, one section at a time. Each section is its own repo + Pages project; a shared Worker (`worldaishow-router`, its own repo) maps URL prefixes to those projects and passes everything else through to the legacy server. Cloudflare account "Trescon" (`b27fbe19c7798f8b75ecaeb7b5660f19`), zone `worldaishow.com`. Do not delete anything on the legacy server — other sections still depend on it.

## Build & deploy

- Build/dev: `npm ci`, `npm run dev` (dev server serves under /malaysia), `npm run build` -> `out/`.
- Deploy: push to `master` — the GitHub-connected Cloudflare Pages project `wais-malaysia` builds and publishes automatically (about 1-2 min; watch it under Workers & Pages → wais-malaysia → Deployments). No manual wrangler deploy.

## Conventions and gotchas

- basePath is `/malaysia`: every internal link/asset must start with `/malaysia/`. The router Worker strips the prefix before hitting Pages.
- No live KonfHub API calls. Speakers/agenda/sponsors/partners/exhibitors come from frozen 2026-09-28 JSON in `src/data/konfhub-archive/`, images in `public/images/konfhub-archive/` (every image path in the JSON must exist). To change data, edit the JSON (or replace it with a new source) — do not re-add browser calls to api.konfhub.com.
- Cloudflare Pages rejects files > 25 MB. The 3D floorplan (.glb) and 360° panoramas live in R2 (`pub-70eeb092c44c45ee83f856cfdd1a0fd9.r2.dev`, CORS scoped to worldaishow.com). Do not put big files in `public/`.
- Forms are HubSpot embeds — leave as-is until the team changes them.
- The attend page's 'buy pass' buttons still link to `konfhub.com/checkout/world-ai-show-malaysia26`, which will die when KonfHub removes the event — replace them.
- The concluded 2026 site is a separate project (`/malaysia2026`) — never point this site's assets at it.

## Multi-tool / multi-person collaboration

Worked on by several people through different tools (Claude Code, Antigravity, plain git). Before starting: `git pull`, then read `HANDOFF.md` in full. Commit small, push to the main branch directly (no PR requirement), and update `HANDOFF.md` "Current state" when you change what is live or discover a gotcha. Never commit tokens/secrets.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
