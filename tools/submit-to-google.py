#!/usr/bin/env python3
"""Google Indexing API — submit URLs for faster re-crawling.

Prerequisites:
  pip3 install google-auth google-auth-httplib2 google-api-python-client

Setup:
  See tools/indexing-api.md — you need a service account JSON key file
  at ~/Desktop/seo-kings/tools/service-account.json

Usage:
  # Submit specific URLs
  python3 tools/submit-to-google.py submit https://seo-kings.co.uk/website-designer-keynsham

  # Submit all changed URLs (from sitemap lastmod dates)
  python3 tools/submit-to-google.py submit-changed

  # Check status of a URL
  python3 tools/submit-to-google.py status https://seo-kings.co.uk/website-designer-keynsham

  # Submit the full sitemap for re-processing
  python3 tools/submit-to-google.py sitemap
"""

import json
import os
import sys
import time
from pathlib import Path

import httplib2
from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ["https://www.googleapis.com/auth/indexing"]
SERVICE_ACCOUNT_FILE = Path(__file__).parent / "service-account.json"
SITE_URL = "https://seo-kings.co.uk"

# Default URLs to submit after canonical/title fixes
DEFAULT_URLS = [
    f"{SITE_URL}/website-designer-keynsham",
    f"{SITE_URL}/blog/website-design-keynsham",
    f"{SITE_URL}/areas/keynsham",
    f"{SITE_URL}/website-designer-midsomer-norton",
    f"{SITE_URL}/blog/website-design-midsomer-norton-peachy-cleans",
    f"{SITE_URL}/areas/midsomer-norton",
]

def get_service():
    """Build and return an Indexing API service object."""
    if not SERVICE_ACCOUNT_FILE.exists():
        print(f"ERROR: Service account key not found at {SERVICE_ACCOUNT_FILE}")
        print("See tools/indexing-api.md for setup instructions.")
        sys.exit(1)

    credentials = service_account.Credentials.from_service_account_file(
        str(SERVICE_ACCOUNT_FILE), scopes=SCOPES
    )
    http = credentials.authorize(httplib2.Http())
    return build("indexing", "v3", http=http)


def submit_url(service, url):
    """Submit a URL for indexing."""
    body = {
        "type": "URL_UPDATED",
        "url": url,
    }
    try:
        result = service.urlNotifications().publish(body=body).execute()
        print(f"  ✓ Submitted: {url}")
        print(f"    Response: {json.dumps(result, indent=2)}")
        return True
    except Exception as e:
        print(f"  ✗ Failed: {url}")
        print(f"    Error: {e}")
        return False


def check_status(service, url):
    """Check the indexing status of a URL."""
    try:
        result = service.urlNotifications().get(url=url).execute()
        print(f"  Status for {url}:")
        print(f"    {json.dumps(result, indent=2)}")
        return result
    except Exception as e:
        print(f"  Could not get status for {url}")
        print(f"    Error: {e}")
        return None


def submit_sitemap(service):
    """Submit the sitemap for re-processing."""
    import requests
    sitemap_url = f"{SITE_URL}/sitemap.xml"
    ping_url = f"https://www.google.com/ping?sitemap={sitemap_url}"
    print(f"Pinging Google with sitemap: {sitemap_url}")
    # Note: sitemap ping is deprecated but still accepted by some endpoints
    print("Note: Google sitemap ping is deprecated. Use GSC or the Indexing API instead.")
    print(f"For manual submission, go to: https://search.google.com/search-console")
    print(f"  → Sitemaps → Enter: {sitemap_url}")


def submit_changed():
    """Submit URLs that have recently changed (based on sitemap.js lastmod)."""
    sitemap_path = Path(__file__).parent.parent / "src" / "constants" / "sitemap.js"
    if not sitemap_path.exists():
        print(f"ERROR: sitemap.js not found at {sitemap_path}")
        sys.exit(1)

    content = sitemap_path.read_text()
    import re
    from datetime import datetime, timedelta

    today = datetime.now().date()
    three_days_ago = today - timedelta(days=3)

    # Parse routes with lastmod dates
    urls_to_submit = []
    for match in re.finditer(r"path:\s*'([^']+)',\s*lastmod:\s*'(\d{4}-\d{2}-\d{2})'", content):
        path, lastmod = match.groups()
        lastmod_date = datetime.strptime(lastmod, "%Y-%m-%d").date()
        if lastmod_date >= three_days_ago:
            urls_to_submit.append(f"{SITE_URL}{path}")

    if not urls_to_submit:
        print("No recently modified URLs found in sitemap.")
        return

    print(f"Found {len(urls_to_submit)} URLs modified in the last 3 days:")
    for url in urls_to_submit:
        print(f"  - {url}")

    service = get_service()
    success_count = 0
    for url in urls_to_submit:
        if submit_url(service, url):
            success_count += 1
        time.sleep(1)  # Rate limit: 1 request per second

    print(f"\nSubmitted {success_count}/{len(urls_to_submit)} URLs successfully.")


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    command = sys.argv[1]

    if command == "submit":
        if len(sys.argv) < 3:
            # Submit default URLs
            print("Submitting default URLs (recent canonical/title fixes)...")
            service = get_service()
            success_count = 0
            for url in DEFAULT_URLS:
                if submit_url(service, url):
                    success_count += 1
                time.sleep(1)
            print(f"\nSubmitted {success_count}/{len(DEFAULT_URLS)} URLs successfully.")
        else:
            urls = sys.argv[2:]
            service = get_service()
            success_count = 0
            for url in urls:
                if submit_url(service, url):
                    success_count += 1
                time.sleep(1)
            print(f"\nSubmitted {success_count}/{len(urls)} URLs successfully.")

    elif command == "status":
        if len(sys.argv) < 3:
            print("Usage: submit-to-google.py status <url>")
            sys.exit(1)
        url = sys.argv[2]
        service = get_service()
        check_status(service, url)

    elif command == "submit-changed":
        submit_changed()

    elif command == "sitemap":
        service = get_service()
        submit_sitemap(service)

    else:
        print(f"Unknown command: {command}")
        print(__doc__)
        sys.exit(1)


if __name__ == "__main__":
    main()