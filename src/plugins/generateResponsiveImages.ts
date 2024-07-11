import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { Plugin } from 'vite';

const breakpoints = {
  sm: 767,
  md: 1023,
  lg: 1279,
  xl: 1920,
  'min-md': 768,
  'min-lg': 1024,
};

const imageResolutions = [
  { name: 'sm', width: breakpoints.sm },
  { name: 'md', width: breakpoints['min-md'] },
  { name: 'lg', width: breakpoints['min-lg'] },
  { name: 'xl', width: breakpoints.xl },
];

export function generateResponsiveImages(): Plugin {
  return {
    name: 'generate-responsive-images',
    apply: 'build',

    async buildStart() {
      const imagesDir = path.resolve('./public/images');
      const webpDir = path.resolve('./public/images/webp');

      const createResponsiveImages = async (
        filePath: string,
        relativePath: string,
      ) => {
        const extname = path.extname(filePath);
        const basename = path.basename(filePath, extname);
        const outputDir = path.join(webpDir, path.dirname(relativePath));

        // Cria a pasta de saída se não existir
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        for (const { name, width } of imageResolutions) {
          const outputFilePath = path.join(
            outputDir,
            `${basename}-${name}.webp`,
          );
          try {
            await sharp(filePath)
              .resize({ width })
              .webp({ quality: 80 })
              .toFile(outputFilePath);
            console.log(`✅ Converted ${relativePath} to ${outputFilePath}`);
          } catch (error) {
            console.error(
              `❌ Failed to convert ${relativePath} to ${outputFilePath}:`,
              error,
            );
          }
        }
      };

      const processDirectory = async (
        dir: string,
        relativeDir: string = '',
      ) => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const relativeFilePath = path.join(relativeDir, file);
          const stat = fs.statSync(filePath);

          // Verifica se o arquivo está dentro da pasta webp
          if (relativeFilePath.startsWith('webp')) {
            continue;
          }

          if (
            stat.isFile() &&
            ['.png', '.jpg', '.jpeg', '.gif'].includes(
              path.extname(file).toLowerCase(),
            )
          ) {
            await createResponsiveImages(filePath, relativeFilePath);
          } else if (stat.isDirectory()) {
            await processDirectory(filePath, relativeFilePath);
          }
        }
      };

      await processDirectory(imagesDir);
    },
  };
}
