import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import('@/configurations/color.css');
import('@/assets/css/tailwind.css');
import('@/configurations/customStyle.css');
import('@/configurations/themeCustomization.scss');
import image from '@/configurations/images';
import information from '@/configurations/information';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { register } from 'swiper/element/bundle';
// import { createMetaManager } from 'vue-meta'
import { createHead } from '@unhead/vue';

setup((app) => {
  app.use(createHead());
  // app.use(createMetaManager())
  app.mixin({
    created() {
      this.$options.imageConfig = image;
      this.$options.information = information;
    },
  });
});

register();
library.add(fas);
dom.watch();

const customViewports = {
  smMin: {
    name: 'SM - min (320 x 850px)',
    styles: {
      width: '320px',
      height: '850px',
    },
  },
  smMax: {
    name: 'SM - max (667 x 850px)',
    styles: {
      width: '667px',
      height: '850px',
    },
  },
  mdMin: {
    name: 'MD - min (668 x 850px)',
    styles: {
      width: '668px',
      height: '850px',
    },
  },
  mdMax: {
    name: 'MD - max (1023 x 850px)',
    styles: {
      width: '1023px',
      height: '850px',
    },
  },
  lgMin: {
    name: 'LG - min (1024 x 850px)',
    styles: {
      width: '1024px',
      height: '850px',
    },
  },
  lgMax: {
    name: 'LG - max (1279 x 850px)',
    styles: {
      width: '1279px',
      height: '850px',
    },
  },
  xlMin: {
    name: 'XL - min (1920 x 850px)',
    styles: {
      width: '1920px',
      height: '850px',
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: { ...customViewports, ...INITIAL_VIEWPORTS },
    },
  },
};

export default preview;
