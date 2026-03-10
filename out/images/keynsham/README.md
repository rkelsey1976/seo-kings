# Keynsham area page images

Images here are used on `/areas/keynsham` (hero, section images, testimonial). Optimize for web (resize, compress) as needed.

## Current files

- **keynsham-hero.jpg** – Hero background (Keynsham Health Centre). In use.
- **keynsham-health-centre.jpg** – Keynsham Health Centre. In use.
- **keynsham-railway-station.jpg** – Railway station. Download if missing (see below).
- **keynsham-abbey-ruins.jpg** – Abbey ruins. Download if missing (see below).
- **keynsham-wireframe.png**, **keynsham-webdesign-laptop.png**, etc. – Website design images (section images).

## More Keynsham place photos

See **content/keynsham-photos.md** for:
- Commons category with 900+ Keynsham images
- Direct links for High Street, Abbey, railway, church
- How to add them to this folder and use on the page

## Download missing place images

From the project root run:

```powershell
.\scripts\download-keynsham-images.ps1
```

The script waits 10 seconds between requests. If you get 429 errors, wait a few minutes and run again, or download manually from Commons and save here:

- Railway: [Keynsham railway station](https://commons.wikimedia.org/wiki/File:Keynsham_railway_station_-_geograph.org.uk_-_363741.jpg) → save as `keynsham-railway-station.jpg`
- Abbey: [Keynsham Abbey ruins](https://commons.wikimedia.org/wiki/File:Keynsham_Abby_ruins.jpg) → save as `keynsham-abbey-ruins.jpg`

## Optimization tips

- Hero: keep ~1280px wide; compress to &lt;200 KB if possible.
- Section/gallery: 800px wide; aim for &lt;100 KB per image.
- Use Squoosh, ImageOptim, or “Save for Web” to compress after resizing.
