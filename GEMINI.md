# World AI Show — Malaysia (2027 edition site) — Antigravity / Gemini notes

Mirror of `AGENTS.md` (which is authoritative — read it and `HANDOFF.md` first).

- Live: https://worldaishow.com/malaysia/ · Repo: Trescon-Events/worldaishow-malaysia2026 (rename to worldaishow-malaysia pending) · Pages: worldaishow-malaysia
- Build: `npm ci`, `npm run dev` (dev server serves under /malaysia), `npm run build` -> `out/`.
- Deploy: push to `master` — the GitHub-connected Cloudflare Pages project `wais-malaysia` builds and publishes automatically (about 1-2 min; watch it under Workers & Pages → wais-malaysia → Deployments). No manual wrangler deploy.

Key rules:
- basePath is `/malaysia`: every internal link/asset must start with `/malaysia/`. The router Worker strips the prefix before hitting Pages.
- No live KonfHub API calls. Speakers/agenda/sponsors/partners/exhibitors come from frozen 2026-09-28 JSON in `src/data/konfhub-archive/`, images in `public/images/konfhub-archive/` (every image path in the JSON must exist). To change data, edit the JSON (or replace it with a new source) — do not re-add browser calls to api.konfhub.com.
- Cloudflare Pages rejects files > 25 MB. The 3D floorplan (.glb) and 360° panoramas live in R2 (`pub-70eeb092c44c45ee83f856cfdd1a0fd9.r2.dev`, CORS scoped to worldaishow.com). Do not put big files in `public/`.
- Forms are HubSpot embeds — leave as-is until the team changes them.
- The attend page's 'buy pass' buttons still link to `konfhub.com/checkout/world-ai-show-malaysia26`, which will die when KonfHub removes the event — replace them.
- The concluded 2026 site is a separate project (`/malaysia2026`) — never point this site's assets at it.

Always `git pull` and read `HANDOFF.md` before starting; update its "Current state" when you change what is live.
