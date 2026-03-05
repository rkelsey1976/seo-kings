# Keynsham place photos

Free-to-use photos of Keynsham (town, High Street, landmarks) for the area page. All from **Wikimedia Commons** / **Geograph** (CC BY-SA). Download and save to `public/images/keynsham/` then reference in the site.

## Already in the project

- **keynsham-hero.jpg** – Keynsham Health Centre (hero background)
- **keynsham-health-centre.jpg** – Keynsham Health Centre (section image)

## Download more (script)

From project root:

```powershell
.\scripts\download-keynsham-images.ps1
```

This fetches (with 10s delay between requests to avoid rate limits):

- keynsham-hero.jpg (1280px)
- keynsham-health-centre.jpg (800px)
- **keynsham-railway-station.jpg** – Keynsham railway station
- **keynsham-abbey-ruins.jpg** – Keynsham Abbey ruins

## Browse and download more

- **Commons category:** [Category:Keynsham](https://commons.wikimedia.org/wiki/Category:Keynsham) – 900+ images
- **Good options:**
  - [Keynsham High Street](https://commons.wikimedia.org/wiki/File:2010_,_B3116_High_Street,_Keynsham_-_geograph.org.uk_-_1792957.jpg) – High Street
  - [Keynsham Abbey](https://commons.wikimedia.org/wiki/Category:Keynsham_Abbey) – Abbey ruins and park
  - [Keynsham railway station](https://commons.wikimedia.org/wiki/File:Keynsham_railway_station_-_geograph.org.uk_-_363741.jpg)
  - [Keynsham Health Centre](https://commons.wikimedia.org/wiki/File:Keynsham_Health_Centre_-_geograph.org.uk_-_4733516.jpg)
  - [St John the Baptist church](https://commons.wikimedia.org/wiki/Category:St_John_the_Baptist%27s_church,_Keynsham)
  - [20200518 Keynsham](https://commons.wikimedia.org/wiki/File:20200518_Keynsham.jpg) – Town view (5 MB)

Download from the file page (e.g. “More details” → download link). Save into `public/images/keynsham/` with clear names (e.g. `keynsham-high-street.jpg`, `keynsham-abbey.jpg`). Optimise (resize/compress) before or after.

## Use on the page

- **Hero:** already uses `keynsham-hero.jpg`
- **Section images:** Why / Services / Website design / Cost / What to look for use the website-design PNGs; you can swap in place photos by changing `whySectionImage`, `servicesSectionImage`, etc. in `src/pages/AreaDetail.jsx` (Keynsham data) to point at `/images/keynsham/keynsham-high-street.jpg` etc.
- **Gallery:** the gallery section was removed; if you add it back, use the `gallery` array with `src`, `alt`, `caption` for each image.
