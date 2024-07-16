import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App);

import ResponsiveImage from '@/components/base/image.component.vue';
app.component('ResponsiveImage', ResponsiveImage);

import router from './router/index';
import VueTheMask from 'vue-the-mask'; //importante campos inputs com mascara
import VueCookies from 'vue-cookies';
import { createHead } from '@unhead/vue';
import VueScrollTo from 'vue-scrollto';

app
  .use(createHead())
  .use(VueCookies)
  .use(router)
  // @ts-expect-error plugin error
  .use(VueTheMask)
  .use(VueScrollTo)
  .mount('#app');
