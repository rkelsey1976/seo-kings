# Google Indexing API Setup for SEO Kings

This tool submits URLs to Google's Indexing API for faster re-crawling.

## Setup Steps

### 1. Create a Google Cloud Service Account

Go to: https://console.cloud.google.com/apis/credentials

1. Create a project (or use existing) called "seo-kings-indexing"
2. Go to **IAM & Admin → Service Accounts**
3. Click **Create Service Account**
   - Name: `seo-kings-indexer`
   - Role: Skip for now
   - Click **Done**
4. Click the service account email → **Keys** tab → **Add Key** → **Create new key** → **JSON**
5. Save the JSON file to: `~/Desktop/seo-kings/tools/service-account.json`

### 2. Enable the Indexing API

Go to: https://console.cloud.google.com/apis/library/indexing.googleapis.com

1. Click **Enable**

### 3. Add Service Account as GSC Owner

Go to: https://search.google.com/search-console → seo-kings.co.uk property

1. Go to **Settings → Owners and users**
2. Click **Add user**
3. Paste the service account email (ends in `@seo-kings-indexing.iam.gserviceaccount.com`)
4. Set role to **Owner** (required for Indexing API)

### 4. Run the Submit Script

```bash
cd ~/Desktop/seo-kings
python3 tools/submit-to-google.py
```

## URLs Submitted by Default

- https://seo-kings.co.uk/website-designer-keynsham
- https://seo-kings.co.uk/blog/website-design-keynsham
- https://seo-kings.co.uk/areas/keynsham
- https://seo-kings.co.uk/website-designer-midsomer-norton
- https://seo-kings.co.uk/blog/website-design-midsomer-norton-peachy-cleans
- https://seo-kings.co.uk/areas/midsomer-norton