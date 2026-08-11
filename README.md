# Maritha Ebolosue — Portfolio

Personal portfolio for **Maritha Ebolosue**, Software Engineer.

**Live:** [my-portfolio-maritha.vercel.app](https://my-portfolio-maritha.vercel.app/)

## Positioning

Software Engineer specializing in **TypeScript · Node.js · NestJS · PostgreSQL · React / Next.js**, with 4+ years building production web applications, APIs, and backend systems.

## Stack

- **Framework:** Next.js 15, React 18
- **Styling:** Tailwind CSS
- **Motion:** Framer Motion
- **Contact:** EmailJS
- **Extras:** theme toggle, interactive clock/game, AI chat widget

## Architecture

```
src/app/
  page.jsx                 # Main composition
  layout.jsx               # Root layout + metadata
  api/send/                # Chat / send API route
  components/
    HeroSection.jsx
    AboutSection.jsx
    ProjectsSection.jsx
    ProjectCard.jsx
    AchievementsSection.jsx
    Navbar.jsx
    EmailSection.jsx
    ...
```

## Featured work (on site)

1. **GoWithMe Ride** — production NestJS backend (private) powering a live website + iOS/Android apps
   - Website: https://www.gowithmeride.com/
   - Play Store / App Store listed on the portfolio project card
2. **CleanScape** — marketplace with Supabase, Stripe, Sentry
3. **InsureTech API** — NestJS + PostgreSQL + Swagger + Jest
4. **Quest** — Next.js + Clerk + Drizzle + Stripe
5. **Estatify** — React + Express listing platform
6. **VaultCraft** — Solana token tooling

## Local development

```bash
npm install
cp .env.example .env.local
# Add your Groq API key to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### MariBot (Groq)

MariBot uses the Groq Chat Completions API (`GROQ_API_KEY`) with a grounded knowledge base about Maritha's career in `src/app/lib/marithaKnowledge.js`. The route is `POST /api/send`.

## Theme

Pink (light) and blue (dark) themes are available from the navbar toggle. Theme preference is stored in `localStorage`.
