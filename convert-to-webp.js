import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = './src/assets/images';
const pngFiles = fs.readdirSync(imagesDir).filter(file => file.endsWith('.png'));

console.log(`Found ${pngFiles.length} PNG files to convert...\n`);

Promise.all(
  pngFiles.map(async (file) => {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));

    try {
      await sharp(inputPath)
        .webp({ quality: 90, lossless: false })
        .toFile(outputPath);

      console.log(`✓ Converted: ${file} → ${file.replace('.png', '.webp')}`);
    } catch (error) {
      console.error(`✗ Error converting ${file}:`, error.message);
    }
  })
).then(() => {
  console.log('\n✅ All images converted to WebP format!');
}).catch(err => {
  console.error('Error:', err);
});
