import fs from 'fs';
import path from 'path';
import { Plugin } from 'vite';
import { exec } from 'child_process';
import { routes } from '@/router/routes';
const routesToAudit = routes.map((route) => route.path);

export function lighthouse(): Plugin {
  return {
    name: 'lighthouse',
    apply: 'build',
    closeBundle: async () => {
      // Start the Vite server
      const vite = await import('vite');
      const viteServer = await vite.createServer();
      await viteServer.listen();

      const baseUrl = 'http://localhost:10086';

      /**
       * Cria o diretório caso não exista
       */
      const reportsDir = path.resolve(__dirname, 'lighthouse');
      if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir, { recursive: true });
      }

      /**
       * Executa o lighthouse na rota selecionada
       * @param url rota desejada
       * @returns
       */
      const runLighthouse = (url: string): Promise<void> => {
        return new Promise((resolve, reject) => {
          const outputPath = path.resolve(
            reportsDir,
            `${url.replace(/\//g, '_')}.html`,
          );
          const command = `lighthouse ${url} --output html --output-path ${outputPath}`;
          exec(command, (err, stdout, stderr) => {
            if (err) {
              console.error(
                `Erro ao executar o Lighthouse na rota ${url}: ${err}`,
              );
              reject(err);
              return;
            }
            console.log(`Lighthouse output for ${url}: ${stdout}`);
            console.error(`Lighthouse errors for ${url}: ${stderr}`);
            resolve();
          });
        });
      };

      for (const route of routesToAudit) {
        await runLighthouse(`${baseUrl}${route}`);
      }

      await viteServer.close();
    },
  };
}
