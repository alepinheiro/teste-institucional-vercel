import fs from 'fs';
import path from 'path';
import { Plugin } from 'vite';

export function findUnusedImages(): Plugin {
  return {
    name: 'findUnusedImages',
    apply: 'build',

    async buildStart() {
      const imagesDir = path.resolve('./public/images');
      const webpDir = path.resolve('./public/images/webp');
      const projectDir = path.resolve('./src');
      let allImages: string[] = [];
      let usedImages: Set<string> = new Set();

      // Função para obter todas as imagens do diretório, exceto do diretório webp
      const getAllImages = (dir: string, relativeDir: string = '') => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const relativeFilePath = path.join(relativeDir, file);
          const stat = fs.statSync(filePath);

          if (
            stat.isFile() &&
            ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(
              path.extname(file).toLowerCase(),
            )
          ) {
            if (!relativeFilePath.startsWith('webp')) {
              allImages.push(relativeFilePath);
            }
          } else if (
            stat.isDirectory() &&
            !relativeFilePath.startsWith('webp')
          ) {
            getAllImages(filePath, relativeFilePath);
          }
        }
      };

      // Função para verificar todas as imagens usadas nos arquivos do projeto
      const findUsedImages = (dir: string) => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);

          if (
            stat.isFile() &&
            ['.js', '.ts', '.jsx', '.tsx', '.vue', '.html', '.css'].includes(
              path.extname(file).toLowerCase(),
            )
          ) {
            const content = fs.readFileSync(filePath, 'utf-8');
            for (const image of allImages) {
              const imagePattern = new RegExp(
                image.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'),
                'g',
              );
              if (imagePattern.test(content)) {
                usedImages.add(image);
              }
            }
          } else if (stat.isDirectory()) {
            findUsedImages(filePath);
          }
        }
      };

      // Obtendo todas as imagens
      getAllImages(imagesDir);

      // Verificando as imagens usadas nos arquivos do projeto
      findUsedImages(projectDir);

      // Listando imagens não utilizadas
      const unusedImages = allImages.filter((image) => !usedImages.has(image));
      if (unusedImages.length > 0) {
        console.log('🔍 Imagens não utilizadas encontradas:');
        unusedImages.forEach((image) => console.log(`- ${image}`));
      } else {
        console.log('🎉 Nenhuma imagem não utilizada encontrada.');
      }
    },
  };
}
