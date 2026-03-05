# Website design images – sources and links

Free, high-quality images you can use for the site (hero, section images, blog). Download and add to `public/images/` then reference in AreaDetail or other pages.

## Quick search links

| Source | Search links |
|--------|--------------|
| **Pexels** | [Web development](https://www.pexels.com/search/web%20development/) · [Coding](https://www.pexels.com/search/coding/) · [Website design](https://www.pexels.com/search/website%20design/) |
| **Unsplash** | [Web development](https://unsplash.com/s/photos/web-development) · [Laptop coding](https://unsplash.com/s/photos/laptop-coding) · [Developer](https://unsplash.com/s/photos/developer) |
| **Negative Space** | [Responsive web design](https://negativespace.co/responsive-web-design/) (CC0) |
| **Picjumbo** | [Web designer desk](https://picjumbo.com/busy-web-designer-minimalist-workplace-desk/) |

All of the above allow free use in commercial projects (check each site’s license for attribution).

## Suggested themes

- Laptop or desktop with code/design on screen  
- Person working on laptop (modern, clean desk)  
- Mobile + laptop (responsive / “works on every device”)  
- Local business (shop front, tradesperson) if you want “local” + “web” in one image  

## Direct image URLs (Unsplash – free to use)

You can use these as `src` in `<img>` or download and save under `public/images/` for better control and performance.

- **Developer at laptop (modern office)**  
  https://unsplash.com/photos/young-professional-ui-web-developer-working-on-his-project-with-laptop-computer-in-modern-workplace-JGC4WzC1F_Q  
  Use “Download” on the page, or use their recommended embed/source URL.

- **Laptop + monitor setup**  
  https://unsplash.com/photos/a-person-sitting-at-a-desk-with-a-laptop-and-a-computer-monitor-p6YWrjhmjhM  

- **Code on screen**  
  https://unsplash.com/photos/a-computer-screen-with-a-bunch-of-code-on-it-GAoGLvYLt3c  

- **Person with laptop (minimal)**  
  https://unsplash.com/photos/person-using-black-laptop-computer-jKL2PvKN8Q0  

## Using in this project

1. **Download** from Pexels/Unsplash (choose a size, e.g. 1200px or 800px wide).  
2. **Save** into e.g. `public/images/website-design/` (create the folder if needed).  
3. **Optimise** (compress, resize) so files stay small.  
4. **Reference** in code as `/images/website-design/yourfile.jpg`.  

For section images on area pages, set e.g. `whySectionImage: { src: '/images/website-design/hero.jpg', alt: '...' }` in the area data in `src/pages/AreaDetail.jsx`.
