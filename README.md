# 🌿 Bloom Website

The marketing website for Bloom — a mindful garden for you and the people you love.

Built with **Next.js 14**, **React 18**, and **TypeScript**. Designed in warm earthy aesthetics. Deployed on Vercel.

---

## 📁 Project Structure

```
bloom-website/
├── app/
│   ├── about/          # Founder story page
│   ├── api/checkout/   # Stripe checkout endpoint
│   ├── community/      # Community guidelines
│   ├── impressum/      # German legal notice
│   ├── journal/        # Blog/journal index + dynamic posts
│   │   └── [slug]/     # Individual journal post
│   ├── pricing/        # Product pricing + checkout
│   ├── privacy/        # Privacy policy
│   ├── success/        # Post-checkout welcome
│   ├── terms/          # Terms of service
│   ├── globals.css     # Design system
│   ├── layout.tsx      # Root layout with nav/footer
│   └── page.tsx        # Home page (Hero + sections)
├── components/
│   ├── Footer.tsx
│   ├── FounderPreview.tsx
│   ├── Hero.tsx
│   ├── LegalLayout.tsx
│   ├── Nav.tsx
│   ├── TapToBloomDemo.tsx  ⭐ The killer interactive simulation
│   ├── ThreeGardens.tsx
│   └── TrustAndCTA.tsx
├── content/
│   └── journal/        # Markdown posts (add new posts here!)
│       └── welcome.md
├── lib/
│   └── journal.ts      # Markdown loader
├── package.json
└── README.md
```

---

## 🚀 Local Development

### Step 1: Install dependencies

```bash
cd bloom-website
npm install
```

### Step 2: Create `.env.local`

Copy `.env.example` to `.env.local` and fill in your keys:

```bash
cp .env.example .env.local
```

For local testing **without Stripe**, you can leave `STRIPE_SECRET_KEY` empty. The checkout will gracefully show a "pre-launch" message instead of failing.

### Step 3: Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you're live!

---

## 📦 Deploy to Vercel (5 minutes)

### Option A: GitHub + Vercel (recommended)

1. **Create a new GitHub repo** called `bloom-website`
2. **Push this folder** to that repo:
   ```bash
   git init
   git add .
   git commit -m "Initial bloom website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/bloom-website.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new)
4. **Import** the repo
5. Add your environment variables (see below)
6. Click **Deploy** → live in ~60 seconds

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel
```

---

## 🔐 Environment Variables

Add these in Vercel: **Settings → Environment Variables**

| Variable | Required | Description |
|----------|----------|-------------|
| `STRIPE_SECRET_KEY` | When charging | Get from [stripe.com](https://stripe.com) → API keys |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | When charging | Public key from same Stripe page |

**Important:** The site works perfectly without Stripe keys — checkout simply shows a "pre-launch" message. Add the keys when your business is registered and Stripe account is ready.

---

## ✍️ Adding a New Journal Post

The journal uses markdown files. To add a new post:

1. **Create a new file** in `content/journal/` with format `your-slug.md`
2. **Add front matter** at the top:

```markdown
---
title: "Your post title"
date: "2026-06-15"
excerpt: "Short description shown in the journal list (1-2 sentences)"
emoji: "🌱"
---

# Your content here

Write in normal markdown. Headings (`##`), **bold**, *italic*, [links](https://example.com), > blockquotes, lists — all supported.
```

3. **Commit and push** to GitHub
4. Vercel auto-deploys in ~60 seconds

That's it. No CMS. No database. Just markdown files.

---

## 🎨 Design System

All colors live in `app/globals.css` as CSS variables:

- `--terra` (#C17F59) — primary terracotta
- `--sage` (#8B9E7E) — secondary green
- `--bg` (#FAF7F2) — warm background
- `--ink` (#1A1410) — almost-black for text and buttons
- `--cream` (#FBF5EB) — soft accent

Fonts: **Fraunces** (serif display) + **Inter** (body). Loaded from Google Fonts in `app/layout.tsx`.

---

## 🛠 Customizing

### Update brand name / domain
Search and replace `trybloom.co` with your actual domain across all files.

### Update legal pages
Replace `[BRACKETS]` placeholders in `/app/impressum`, `/app/privacy`, `/app/terms` with your actual info.

### Add Stripe products
Edit `/app/api/checkout/route.ts` → `PRODUCTS` object to add or change products.

### Update the prompts in the demo
Edit `/components/TapToBloomDemo.tsx` → `PROMPTS` array.

---

## 🔥 What's Next

After deploying, you'll want to:

1. ✅ Register UG/GmbH and update Impressum
2. ✅ Sign Stripe up with the registered business
3. ✅ Configure DNS for your domain in Vercel
4. ✅ Set up Google Workspace / Migadu for `hello@`, `privacy@`, `trust@` emails
5. ✅ Sign DPAs with Supabase + Vercel
6. ✅ Write your first proper journal post

---

## 💚 Made with love in Cologne

— Rafael · 2026
