# Keynsham area page images

Images here are used on `/areas/keynsham` (hero + gallery). Optimize them for web (resize, compress) as needed.

## Current files

- **keynsham-hero.jpg** – Hero background (1280px). In use.
- **keynsham-health-centre.jpg** – Gallery: Keynsham Health Centre. In use.
- **keynsham-railway-station.jpg** – Gallery. Download if missing (see below).
- **keynsham-abbey-ruins.jpg** – Gallery. Download if missing (see below).

## Download missing images

From the project root run:

```powershell
.\scripts\download-keynsham-images.ps1
```

The script waits 10 seconds between requests to reduce Wikimedia rate limits. If you get 429 errors, wait a few minutes and run it again, or download manually from:

- Railway: https://upload.wikimedia.org/wikipedia/commons/thumb/3/63/Keynsham_railway_station_-_geograph.org.uk_-_363741.jpg/800px-Keynsham_railway_station_-_geograph.org.uk_-_363741.jpg  
- Abbey: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Keynsham_Abby_ruins.jpg/800px-Keynsham_Abby_ruins.jpg  

Save as `keynsham-railway-station.jpg` and `keynsham-abbey-ruins.jpg` in this folder.

## Optimization tips

- Hero: keep ~1280px wide for quality; compress to &lt;200 KB if possible.
- Gallery: 800px wide is enough; aim for &lt;100 KB per image.
- Use Squoosh, ImageOptim, or your editor’s “Save for Web” to compress after resizing.
