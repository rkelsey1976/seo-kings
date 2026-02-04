# Connect IONOS Domain to Netlify (Keep Email on IONOS)

Use this when your domain is registered with IONOS and you want the **website** to be hosted on Netlify while **email stays on IONOS**.

---

## Step 1: Add domain in Netlify

1. Log in to [Netlify](https://app.netlify.com) and open your **seo-kings** site.
2. Go to **Domain management** (or **Site configuration** → **Domain management**).
3. Click **Add a domain** / **Add custom domain**.
4. Add:
   - Your **apex domain** (e.g. `seokings.co.uk`)
   - Your **www** subdomain (e.g. `www.seokings.co.uk`)
5. Netlify will show something like “Domain not yet verified” or “Check DNS” — that’s normal. Leave the tab open; you’ll come back after DNS.

**Note your Netlify site URL** (e.g. `https://something.netlify.app`). The part before `.netlify.app` is your **site name**. You’ll use it in Step 2 for the www CNAME.

---

## Step 2: Change DNS in IONOS

Log in to [IONOS](https://www.ionos.co.uk) → **Domains** → your domain → **Manage** → **DNS** (or **Domain** → **DNS**).

### Records to CHANGE

| Type | Name/Host | Current value | New value | Notes |
|------|------------|---------------|-----------|--------|
| **A** | `@` | `217.160.0.29` | **`75.2.60.5`** | Edit existing A record for @. This points your root domain to Netlify. |
| **AAAA** | `@` | `2001:8d8:100f:f000:0:0:0:200` | **Delete** or leave for now | Optional: delete the AAAA record so the apex uses only the A record (simplest). |

### Record to ADD (if you don’t have www yet)

| Type | Name/Host | Value | Notes |
|------|------------|--------|--------|
| **CNAME** | `www` | **`YOUR-SITE-NAME.netlify.app`** | Replace `YOUR-SITE-NAME` with your actual Netlify site name (e.g. `seo-kings` → `seo-kings.netlify.app`). |

If you already have a CNAME for `www` pointing somewhere else, **edit** it so the target is `YOUR-SITE-NAME.netlify.app`.

### Records to LEAVE AS THEY ARE (email and other)

Do **not** change or delete:

- **MX** `@` → `mx00.ionos.co.uk` and `mx01.ionos.co.uk`
- **TXT** `@` → `"v=spf1 include:_spf-eu.ionos.com ~all"`
- **CNAME** `_dmarc` → `dmarc.ionos.co.uk`
- **CNAME** `s1-ionos._domainkey` → `s1.dkim.ionos.com`
- **CNAME** `s2-ionos._domainkey` → `s2.dkim.ionos.com`
- **CNAME** `s42582890._domainkey` → `s42582890.dkim.ionos.com`
- **CNAME** `autodiscover` → `adsredir.ionos.info`
- **TXT** `_dep_ws_mutex` (if present)
- **CNAME** `_domainconnect` → should be **`_domainconnect.ionos.com`** (IONOS Domain Connect), **not** your Netlify URL.

These are for IONOS mail and other services; changing them can break email or IONOS tools.

---

## Step 3: Set primary domain in Netlify (optional)

In Netlify **Domain management**:

- Choose whether the main address is **seokings.co.uk** or **www.seokings.co.uk**.
- Set that one as **Primary domain**.
- Add a **redirect** so the other one forwards to the primary (e.g. `www.seokings.co.uk` → `https://seokings.co.uk` or the opposite). Netlify can do this when you set the primary.

---

## Step 4: Wait for DNS and HTTPS

- DNS can take **from a few minutes up to 24–48 hours**.
- After the A and CNAME records are correct, Netlify will verify the domain and issue an SSL certificate (HTTPS).
- Check propagation: [dnschecker.org](https://dnschecker.org) — look up your domain and `www`; A for root should be `75.2.60.5`, CNAME for www should be your `*.netlify.app`.

---

## Quick checklist

- [ ] Domain added in Netlify (apex + www).
- [ ] A record `@` in IONOS changed from `217.160.0.29` to **`75.2.60.5`**.
- [ ] AAAA record `@` deleted (optional).
- [ ] CNAME `www` in IONOS set to **`YOUR-SITE-NAME.netlify.app`**.
- [ ] All MX, TXT, and mail-related CNAMEs left unchanged in IONOS.
- [ ] Primary domain and redirect set in Netlify.
- [ ] After propagation, site loads on your domain and Netlify shows “HTTPS” / certificate active.

---

## If the site doesn’t load or SSL fails

1. Confirm in IONOS: A `@` = `75.2.60.5`, CNAME `www` = `[site].netlify.app` (no `https://`, no trailing slash).
2. In Netlify, under **Domain management** → **HTTPS**, use **Verify DNS configuration** / **Renew certificate**.
3. Wait up to 48 hours for DNS; then try again.

Your domain is still registered and managed in IONOS; only the **A** and **www CNAME** point the website to Netlify. Email stays on IONOS.
