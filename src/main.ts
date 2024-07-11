import { createApp } from 'vue';
import App from './App.vue';
import IndexHeroSection from '@/components/homePage/heroSection.component.vue';

const app = createApp(App);
app.component('IndexHeroSection', IndexHeroSection);

// componentes globais
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBars,
  faCheck,
  faXmark,
  faArrowRight,
  faVideoCamera,
  faChevronDown,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBars,
  faXmark,
  faCheck,
  faArrowRight,
  faChevronDown,
  faVideoCamera,
  faPeopleGroup,
);

app.component('Icon', FontAwesomeIcon);

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
import ResponsiveImage from '@/components/base/image.component.vue';
app.component('ResponsiveImage', ResponsiveImage);
app
  // @ts-expect-error plugin error
  .use(VueTheMask)
  .use(VueCookies)
  .use(createHead())
  .use(VueScrollTo)
  .use(router)
  .mount('#app');
