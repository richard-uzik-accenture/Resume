# Favicon System

## Overview
The favicon system uses an SVG source file that's converted to multiple formats and sizes for optimal display across all devices and browsers.

## Files Generated
- **favicon.svg** - Modern SVG favicon (source file)
- **favicon.ico** - Legacy ICO format (32×32)
- **favicon-16x16.png** - Standard browser tab icon
- **favicon-32x32.png** - Standard browser tab icon (retina)
- **apple-touch-icon.png** - iOS home screen icon (180×180)
- **android-chrome-192x192.png** - Android home screen icon
- **android-chrome-512x512.png** - Android splash screen

## Design
The favicon features the initials "RU" (Richard Užík) with:
- **Gradient background**: Primary blue (#0085BD) to primary dark (#145DA0)
- **White text**: Professional and high contrast
- **Rounded corners**: Modern aesthetic
- **Bold typography**: Clear at small sizes

## Updating the Favicon

### Method 1: Edit SVG and Regenerate
1. Edit `assets/SVG/favicon.svg` in any vector editor or code editor
2. Run: `npm run generate:favicons`
3. All PNG/ICO files will be regenerated automatically

### Method 2: Replace SVG File
1. Replace `assets/SVG/favicon.svg` with your new design
2. Ensure viewBox is "0 0 512 512" for proper scaling
3. Run: `npm run generate:favicons`

## Browser Support
- **Modern browsers**: Use SVG favicon (best quality, scalable)
- **Safari iOS**: Uses apple-touch-icon.png
- **Android**: Uses android-chrome-*.png from manifest
- **Legacy browsers**: Fall back to favicon.ico

## Manifest Integration
The `site.webmanifest` file is configured with:
- App name: "Richard Užík - Resume"
- Theme color: #0085BD (primary brand color)
- Icons for PWA installation

## Technical Notes
- SVG favicon loads first for modern browser support
- PNG fallbacks ensure compatibility with older browsers
- All sizes generated from single SVG source for consistency
- Uses `sharp` library for high-quality image conversion
