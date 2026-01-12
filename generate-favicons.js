// Script to generate favicon files from SVG
// Uses sharp library to convert SVG to various PNG sizes

const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const svgPath = path.join(__dirname, 'assets', 'SVG', 'favicon.svg');
const outputDir = __dirname;

// Favicon sizes to generate
const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 }
];

async function generateFavicons() {
    console.log('📦 Generating favicons...\n');

    // Read SVG file
    const svgBuffer = fs.readFileSync(svgPath);

    // Generate each size
    for (const { name, size } of sizes) {
        const outputPath = path.join(outputDir, name);

        await sharp(svgBuffer)
            .resize(size, size)
            .png()
            .toFile(outputPath);

        console.log(`✅ Generated ${name} (${size}x${size})`);
    }

    // Also create favicon.ico (multi-size ICO file)
    await sharp(svgBuffer)
        .resize(32, 32)
        .toFile(path.join(outputDir, 'favicon.ico'));

    console.log(`✅ Generated favicon.ico (32x32)`);

    console.log('\n✨ All favicons generated successfully!');
}

generateFavicons().catch(err => {
    console.error('❌ Error generating favicons:', err);
    process.exit(1);
});
