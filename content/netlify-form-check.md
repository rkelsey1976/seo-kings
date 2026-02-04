# Netlify contact form – check it’s working

## What’s set up

- **Form name:** `contact` (must match everywhere).
- **Hidden form in `public/index.html`**  
  Netlify discovers forms at build time from the built HTML. A hidden form with the same `name="contact"` and same field names is in `index.html` so the build includes it.
- **React form on `/contact`**  
  Submits via JavaScript with `form-name: contact` and the same fields. Honeypot field `bot-field` is included (hidden) for spam protection.

## How to verify

1. **Deploy**  
   Push to your repo so Netlify builds and deploys the site.

2. **Netlify dashboard**  
   - Go to **Site** → **Forms**.  
   - You should see a form named **contact** (created when the build ran).  
   - If it’s missing, trigger a new **Deploy** (Build & deploy → Trigger deploy).

3. **Submit a test**  
   - Open your live site: `https://seo-kings.co.uk/contact` (or your Netlify URL).  
   - Fill in the form (use real-looking but test data).  
   - Leave the honeypot field empty (it’s hidden).  
   - Submit.

4. **Check submissions**  
   - In Netlify: **Forms** → **contact** → **Form submissions**.  
   - Your test submission should appear.  
   - Optional: set up **Form notifications** (e.g. email or Slack) in **Form settings**.

5. **Thank-you page**  
   After submit you should be redirected to `/thank-you`. If you see an error or no redirect, check the browser console (F12) for errors.

## If it doesn’t work

- **No “contact” form in Netlify**  
  Redeploy so the built `index.html` (with the hidden form) is what Netlify sees.  
- **404 on POST**  
  Confirm your Netlify domain and that you’re submitting to the same origin (e.g. `https://seo-kings.co.uk`). The app posts to `'/'`.  
- **Submissions not showing**  
  Check **Forms** → **contact** → **Form settings** (e.g. spam filter, required fields).  
- **CORS / “blocked”**  
  You must POST to the same origin as the page (your Netlify site). Don’t post to a different domain.

## Field list (must match)

- `form-name`: `contact` (hidden, added in code)  
- `name`, `email`, `phone`, `business`, `service`, `website`, `message`  
- `bot-field` (honeypot, hidden; leave empty)
