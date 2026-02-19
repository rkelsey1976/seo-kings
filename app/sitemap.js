import { getSitemapUrls } from '../src/constants/sitemap';

/** Generated at build; used for static export. See src/constants/sitemap.js for URL source. */
export default function sitemap() {
  const urls = getSitemapUrls();
  return urls.map((u) => ({
    url: u.url,
    lastModified: u.lastModified,
    changeFrequency: u.changeFrequency,
    priority: u.priority,
  }));
}
