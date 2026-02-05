# Point peachycleans.info (Wix) to Netlify – Keep Google Email

Use this when **peachycleans.info** is currently on Wix and you want the **website** to be served from Netlify while **email stays on Google Workspace**.

---

## Step 1: Add domain in Netlify

1. Log in to [Netlify](https://app.netlify.com) and open the **site** that will serve peachycleans.info (e.g. the Peachy Cleans or SEO Kings site).
2. Go to **Domain management** (or **Site configuration** → **Domain management**).
3. Click **Add custom domain** / **Add a domain**.
4. Add:
   - **peachycleans.info**
   - **www.peachycleans.info**
5. Netlify will show “Domain not yet verified” or “Check DNS” — that’s normal. You’ll fix it with DNS in Step 2.

**Note your Netlify site name** (e.g. `peachycleans` or `seo-kings` from `https://something.netlify.app`). You need it for the www CNAME below.

---

## Step 2: Change DNS (where peachycleans.info is managed)

Your DNS might be in **Wix** (Domain → DNS / Advanced DNS) or at the **domain registrar** if the domain was transferred. Edit the records there.

### A records (apex – peachycleans.info)

**Remove** the three existing A records that point to Wix:

| Host name        | Current value     | Action   |
|------------------|-------------------|----------|
| peachycleans.info | 185.230.63.171    | **Delete** |
| peachycleans.info | 185.230.63.186    | **Delete** |
| peachycleans.info | 185.230.63.107    | **Delete** |

**Add** one A record for Netlify:

| Type | Host name        | Value        | TTL   |
|------|------------------|-------------|-------|
| **A** | peachycleans.info | **75.2.60.5** | 1 Hour |

This points the root domain (peachycleans.info) to Netlify.

---

### CNAME records (www and en)

**Edit** the www record:

| Type   | Host name             | Current value     | New value                        |
|--------|------------------------|-------------------|----------------------------------|
| **CNAME** | www.peachycleans.info | cdn1.wixdns.net    | **YOUR-SITE-NAME.netlify.app**   |

Replace **YOUR-SITE-NAME** with your actual Netlify site name (e.g. if your site is `https://peachycleans.netlify.app`, use **peachycleans.netlify.app**).

**en.peachycleans.info**

- If you no longer need the English subdomain on Wix, you can **delete** the CNAME `en.peachycleans.info` → `cdn1.wixdns.net`.
- If you want `en` to show the same Netlify site, add or change a CNAME:  
  **en** → **YOUR-SITE-NAME.netlify.app**  
  (Netlify will need `en.peachycleans.info` added as a domain alias in Domain management.)

---

### Records to LEAVE as they are (email and verification)

Do **not** change or delete:

- **MX** – All 5 records pointing to Google (aspmx.l.google.com, alt1–alt4). These keep Google Workspace email working.
- **TXT** – `v=spf1 include:_spf.google.com ~all` (SPF for Google email).
- **TXT** – `google-site-verification=...` (only if you still use this property in Search Console; you can leave it).

---

## Step 3: Nameservers – you don’t need to change them

Your nameservers are currently **ns0.wixdns.net** and **ns1.wixdns.net**. Wix often **does not show an option to change nameservers** when the domain is on Wix — and that’s fine.

**You do not need to change nameservers.** Leave them as they are.  
Just do **Step 2** in the same place where you manage DNS (Wix → Domain → DNS / Advanced DNS): edit the **A** and **CNAME** records as described above. That is enough to point peachycleans.info to Netlify.

**If the domain is registered elsewhere** (e.g. GoDaddy, Namecheap, IONOS) and only the DNS was pointing to Wix, you can either:

- Keep using the current registrar’s DNS and change the A and CNAME records there to the values above, or  
- Switch nameservers to Netlify DNS (or another provider) and set the same A, CNAME, MX and TXT there.

---

## Step 4: After saving DNS

1. Wait **5–60 minutes** (sometimes up to 48 hours).
2. In Netlify → **Domain management**, click **Verify DNS** / **Check DNS** for peachycleans.info and www.peachycleans.info.
3. In Netlify, enable **HTTPS** for both peachycleans.info and www.peachycleans.info (Netlify will issue certificates automatically).
4. Choose the **primary** domain (e.g. peachycleans.info) and set the other (e.g. www) to redirect to it if you want a single canonical URL.

---

## Quick reference – what to change

| Record type | Host              | Old (Wix)           | New (Netlify)                |
|-------------|-------------------|----------------------|-----------------------------|
| A           | peachycleans.info | 185.230.63.171/186/107 (delete all 3) | **75.2.60.5** (one A only) |
| CNAME       | www               | cdn1.wixdns.net      | **YOUR-SITE-NAME.netlify.app** |
| CNAME       | en                | cdn1.wixdns.net      | Delete or point to Netlify (see above) |
| MX          | peachycleans.info | Google (aspmx…)      | **Leave as is**             |
| TXT         | peachycleans.info | SPF / verification   | **Leave as is**             |

---

## If Wix won’t let you edit A/CNAME

Some Wix plans don’t allow custom DNS. In that case you must:

1. **Transfer the domain** to a registrar that allows full DNS (e.g. Cloudflare, Namecheap, IONOS, Google Domains), or  
2. **Point nameservers** at that registrar (or Netlify DNS) and manage A, CNAME, MX and TXT there using the same values as above.

If you tell me where peachycleans.info is registered (Wix vs other), I can adapt these steps exactly for that provider.
