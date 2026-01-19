# Assets Directory

This directory contains all static assets (images and videos) for the portfolio website.

## Quick Start

1. **Add your images** to the appropriate folders following the naming conventions in `/images/README.md`
2. **Add your videos** to the appropriate folders following the naming conventions in `/videos/README.md`
3. The components will automatically use these assets when they exist, or show placeholders if files are missing

## Directory Structure

```
public/
├── images/
│   ├── hero/
│   │   └── portrait.jpg (or .png)
│   ├── projects/
│   │   ├── startup-expansion/
│   │   │   ├── cover.jpg
│   │   │   ├── campaign-visual-1.jpg
│   │   │   └── campaign-visual-2.jpg
│   │   ├── esg-competition/
│   │   │   ├── cover.jpg
│   │   │   ├── campaign-visual-1.jpg
│   │   │   └── campaign-visual-2.jpg
│   │   ├── muig-rebrand/
│   │   │   ├── cover.jpg
│   │   │   ├── campaign-visual-1.jpg
│   │   │   └── campaign-visual-2.jpg
│   │   └── capstone/
│   │       ├── cover.jpg
│   │       ├── campaign-visual-1.jpg
│   │       └── campaign-visual-2.jpg
│   ├── social-media/
│   │   ├── instagram/
│   │   │   ├── reel-financial-literacy-campaign.jpg (or .mp4)
│   │   │   └── carousel-event-highlights.jpg
│   │   └── linkedin/
│   │       └── post-reflecting-head-of-publicity.jpg
│   └── blog/
│       ├── intersection-finance-storytelling.jpg
│       ├── navigating-ecommerce-market-entry.jpg
│       └── building-brand-as-student.jpg
└── videos/
    └── projects/
        ├── startup-expansion/
        │   └── highlight-video.mp4
        ├── esg-competition/
        │   └── highlight-video.mp4
        ├── muig-rebrand/
        │   └── highlight-video.mp4
        └── capstone/
            └── highlight-video.mp4
```

## Component Mapping

### Hero Component
- **Image:** `/images/hero/portrait.jpg`
- **Usage:** Main hero section portrait

### Projects Component
Each project expects:
- **Cover Image:** `/images/projects/{project-id}/cover.jpg`
- **Highlight Video:** `/videos/projects/{project-id}/highlight-video.mp4`
- **Campaign Visual 1:** `/images/projects/{project-id}/campaign-visual-1.jpg`
- **Campaign Visual 2:** `/images/projects/{project-id}/campaign-visual-2.jpg`

Project IDs:
- `startup-expansion` - E-Commerce Market Entry
- `esg-competition` - EY ESG National Innovation
- `muig-rebrand` - Investment Group Rebrand
- `capstone` - Integrative Business Practices

### Social Media Component
- **Post 1 (Instagram Reel):** `/images/social-media/instagram/reel-financial-literacy-campaign.jpg`
- **Post 2 (Instagram Carousel):** `/images/social-media/instagram/carousel-event-highlights.jpg`
- **Post 3 (LinkedIn Post):** `/images/social-media/linkedin/post-reflecting-head-of-publicity.jpg`

### Blog Component
- **Article 1:** `/images/blog/intersection-finance-storytelling.jpg`
- **Article 2:** `/images/blog/navigating-ecommerce-market-entry.jpg`
- **Article 3:** `/images/blog/building-brand-as-student.jpg`

## How It Works

The `Placeholder` component automatically:
- Shows the actual image/video if the file exists
- Falls back to a placeholder UI if the file is missing
- This allows you to add assets incrementally without breaking the site

## File Naming Tips

- Use lowercase letters
- Separate words with hyphens (-)
- Use descriptive names that match the content
- Include proper file extensions (.jpg, .png, .mp4)

## Image Optimization

Before adding images:
1. Compress images to reduce file size (use tools like TinyPNG, ImageOptim, or Squoosh)
2. Use appropriate formats:
   - JPG for photos
   - PNG for graphics with transparency
   - WebP for better compression (optional)
3. Recommended sizes are listed in `/images/README.md`

## Video Optimization

Before adding videos:
1. Compress videos to keep file sizes reasonable (< 10MB recommended)
2. Use MP4 format with H.264 codec
3. Consider providing multiple quality versions if needed

For detailed specifications, see:
- `/images/README.md` - Image requirements and specifications
- `/videos/README.md` - Video requirements and specifications
