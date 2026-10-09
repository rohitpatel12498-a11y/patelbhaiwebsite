# Patel Bhai — patelbhai.com (React)

React + Vite version of the original `index.php` page. Same content, same businesses,
same links, same filter behaviour — with a modern design.

## Edit content

All businesses, phone numbers, WhatsApp numbers and links live in **`src/data.js`**
(the same structure as the `$site` and `$businesses` arrays in the PHP file).

- `kind: 'redirect'` → card opens another website
- `kind: 'contact'`  → card shows a phone number (Call + WhatsApp)

Images live in `public/images/`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploy on Vercel

**Option A — GitHub (recommended)**
1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo.
3. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`). Click **Deploy**.
4. Add your domain `patelbhai.com` under **Project → Settings → Domains**.

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```
