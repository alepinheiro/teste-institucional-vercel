import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      builder: {
        viteConfigPath: './vite.config.ts',
      }
    },
  },
  docs: {
    autodocs: true,
  },
  features: {
    storyStoreV7: true,
  },
  staticDirs: ['../public'],
  viteFinal: (config) => {
    return mergeConfig(config, {
        base: '/src/',
        build: {
            minify: false,
            sourcemap: false
        },
    })
},
}
export default config
