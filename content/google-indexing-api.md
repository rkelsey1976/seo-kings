# Google Indexing API – notify Google when URLs change

The [Google Indexing API](https://developers.google.com/search/apis/indexing-api/v3/quickstart) lets you tell Google that specific URLs have been added or updated so they can be crawled and indexed sooner. It uses **OAuth 2.0** with a **service account** and requires the site to be **verified in Search Console**.

**Official scope:** Google documents the API mainly for **Job Posting** and **BroadcastEvent** (video) pages. In practice it is also used for other site types; eligibility is tied to your Search Console property.

---

## 1. Prerequisites

- **Google Search Console** – Your property (e.g. `https://seo-kings.co.uk`) must be verified and you must be an **Owner**.
- **Google Cloud Project** – Used to enable the API and create a service account.

---

## 2. Setup in Google Cloud

1. **Create or select a project**  
   - Go to [Google Cloud Console](https://console.cloud.google.com).  
   - Create a new project or select an existing one.

2. **Enable the Indexing API**  
   - Menu: **APIs & Services** → **Library**.  
   - Search for **“Indexing API”**.  
   - Open it and click **Enable**.  
   - Direct link (select your project if asked): https://console.developers.google.com/apis/api/indexing.googleapis.com/overview

3. **Create a service account**  
   - **APIs & Services** → **Credentials** → **Create credentials** → **Service account**.  
   - Name it (e.g. “Indexing API”) and finish.  
   - Open the new service account → **Keys** → **Add key** → **Create new key** → **JSON**.  
   - Download the JSON key file and store it somewhere **private** (do not commit to git).  
   - Copy the service account’s **email** (e.g. `indexing-api@your-project.iam.gserviceaccount.com`).

4. **Add the service account to Search Console**  
   - Go to [Google Search Console](https://search.google.com/search-console).  
   - Select the property for **seo-kings.co.uk**.  
   - **Settings** → **Users and permissions** → **Add user**.  
   - Paste the **service account email** and give it **Owner**.  
   - Save.  
   This step is required; without it the API will return 403.

---

## 3. Use the API

**Endpoint:**  
`POST https://indexing.googleapis.com/v3/urlNotifications:publish`

**Headers:**  
- `Content-Type: application/json`  
- `Authorization: Bearer <access_token>`

**Body (example):**  
```json
{
  "url": "https://seo-kings.co.uk/blog/your-new-post",
  "type": "URL_UPDATED"
}
```

- **`type`** can be `URL_UPDATED` or `URL_REMOVED`.  
- **Quota:** Typically **200 requests per day** per project.

You can either call this from your own code (using the service account to obtain an access token) or use the script below.

---

## 4. Script in this repo

We provide a Node script that reads your sitemap and notifies the Indexing API for each URL (respecting daily limits).

**One-time install:**  
```bash
npm install googleapis
```

**Run (after placing your key file somewhere safe):**  
```bash
# Windows (PowerShell)
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\path\to\your-service-account-key.json"; node scripts/submit-google-indexing.js

# macOS / Linux
GOOGLE_APPLICATION_CREDENTIALS=/path/to/your-service-account-key.json node scripts/submit-google-indexing.js
```

The script reads URLs from `out/sitemap.xml` and submits them in batches. It is intended to be run occasionally (e.g. after a deploy), not on every build, to stay within quota.

---

## 5. Summary

| Step | What to do |
|------|------------|
| 1 | Verify **seo-kings.co.uk** in Search Console (you are Owner). |
| 2 | Create a Google Cloud project and **enable the Indexing API**. |
| 3 | Create a **service account**, download its **JSON key**, and **add the service account as Owner** in Search Console. |
| 4 | Run the script with `GOOGLE_APPLICATION_CREDENTIALS` pointing at the key file, or call the API from your own code. |

**Security:** Keep the service account JSON key **out of version control**. Add `*-service-account*.json` (or similar) to `.gitignore` if you store keys in the repo directory.
