import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

import ResponsiveImage from '@/components/base/image.component.vue';
app.component('ResponsiveImage', ResponsiveImage);

// configurações do projeto
import image from './configurations/images';
import information from './configurations/information';
app.mixin({
  created() {
    this.$options.imageConfig = image;
    this.$options.information = information;
  },
});

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
