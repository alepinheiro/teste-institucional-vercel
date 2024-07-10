import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import type { Plugin } from 'vite';

export default function convertImagesToWebP(): Plugin {
  return {
    name: 'convert-images-to-webp',
    apply: 'build',

    async buildStart() {
      const imagesDir = path.resolve('./public/images');
      const webpDir = path.resolve('./public/images/webp');

      const convertToWebP = async (filePath: string, relativePath: string) => {
        const extname = path.extname(filePath);
        const basename = path.basename(filePath, extname);
        const outputDir = path.join(webpDir, path.dirname(relativePath));
        const outputFilePath = path.join(outputDir, `${basename}.webp`);

        // Cria a pasta de saída se não existir
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        try {
          await sharp(filePath).webp({ quality: 80 }).toFile(outputFilePath);
          console.log(
            `✅ Converted ${relativePath} ➡️  ${path.join('webp', relativePath).replace('png', 'webp')}`,
          );
        } catch (error) {
          console.error(`Failed to convert ${relativePath}:`, error);
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
            ['.webp', '.png', '.jpg', '.jpeg'].includes(
              path.extname(file).toLowerCase(),
            )
          ) {
            await convertToWebP(filePath, relativeFilePath);
          } else if (stat.isDirectory()) {
            await processDirectory(filePath, relativeFilePath);
          }
        }
      };

      await processDirectory(imagesDir);
    },
  };
}
