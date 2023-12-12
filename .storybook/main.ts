import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      builder: {
        viteConfigPath: './vite.config.ts',
      }
    },
  },
  docs: {
    autodocs: 'tag',
  },
  features: {
    storyStoreV7: true,
  },
  staticDirs: ['../public'],
}
export default config
