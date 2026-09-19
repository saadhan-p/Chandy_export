# Chandy's Global Exports - Vercel Ready B2B Web Application

An enterprise-grade B2B web application for **Chandy's Global Exports**, built using the **Maritime Meridian** design system from Stitch.

## Features
- **Clean URLs:** Routes work without `.html` extension (e.g. `/products`, `/about`, `/global-reach`, `/why-us`, `/contact`).
- **Optimized Caching:** Long-term caching headers configured for static assets.
- **Vercel Configuration:** Pre-configured `vercel.json`, `package.json`, and `.gitignore`.

## How to Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Fastest)
Run the following command in your terminal from this directory:
```bash
npx vercel
```
Follow the interactive prompt to log in and deploy. For production deployment:
```bash
npx vercel --prod
```

### Option 2: Deploy via Vercel Dashboard (Git)
1. Push this directory to your GitHub / GitLab / Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your repository. Vercel will automatically detect `vercel.json` & `package.json` and deploy instantly!
