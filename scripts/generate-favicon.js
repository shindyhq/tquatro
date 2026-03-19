const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT = path.resolve(__dirname, '../public/logo-512.webp');
const OUT_DIR = path.resolve(__dirname, '../public');

async function generate() {
  console.log('Generating favicon assets from logo-512.webp…\n');

  // -- favicon-16x16.png --
  await sharp(INPUT).resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png().toFile(path.join(OUT_DIR, 'favicon-16x16.png'));
  console.log('✓ favicon-16x16.png');

  // -- favicon-32x32.png --
  await sharp(INPUT).resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png().toFile(path.join(OUT_DIR, 'favicon-32x32.png'));
  console.log('✓ favicon-32x32.png');

  // -- favicon-48x48.png (used for .ico) --
  await sharp(INPUT).resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png().toFile(path.join(OUT_DIR, 'favicon-48x48.png'));
  console.log('✓ favicon-48x48.png');

  // -- apple-touch-icon.png — 180x180 --
  await sharp(INPUT).resize(180, 180, { fit: 'contain', background: { r: 1, g: 11, b: 43, alpha: 1 } })
    .png().toFile(path.join(OUT_DIR, 'apple-touch-icon.png'));
  console.log('✓ apple-touch-icon.png (180×180)');

  // -- android-chrome-192x192.png --
  await sharp(INPUT).resize(192, 192, { fit: 'contain', background: { r: 1, g: 11, b: 43, alpha: 1 } })
    .png().toFile(path.join(OUT_DIR, 'android-chrome-192x192.png'));
  console.log('✓ android-chrome-192x192.png');

  // -- android-chrome-512x512.png --
  await sharp(INPUT).resize(512, 512, { fit: 'contain', background: { r: 1, g: 11, b: 43, alpha: 1 } })
    .png().toFile(path.join(OUT_DIR, 'android-chrome-512x512.png'));
  console.log('✓ android-chrome-512x512.png');

  // -- og-image.png (1200x630 for Open Graph) -- dark bg with centred logo
  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: { r: 1, g: 11, b: 43, alpha: 1 } }
  })
  .composite([{
    input: await sharp(INPUT).resize(400, 400, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer(),
    gravity: 'centre'
  }])
  .png().toFile(path.join(OUT_DIR, 'og-image.png'));
  console.log('✓ og-image.png (1200×630 Open Graph)');

  console.log('\n✅ All favicon assets generated successfully!');

  // Report sizes
  const files = ['favicon-16x16.png','favicon-32x32.png','favicon-48x48.png','apple-touch-icon.png','android-chrome-192x192.png','android-chrome-512x512.png','og-image.png'];
  console.log('\nFile sizes:');
  for (const f of files) {
    const size = (fs.statSync(path.join(OUT_DIR, f)).size / 1024).toFixed(1);
    console.log(`  ${f}: ${size} KB`);
  }
}

generate().catch(err => { console.error('Error:', err); process.exit(1); });
