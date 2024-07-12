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
  faCoins,
  faDiceD6,
  faArrowRight,
  faVideoCamera,
  faChevronDown,
  faPeopleGroup,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';

app.component('Icon', FontAwesomeIcon);

// configurações do projeto
import image from './configurations/images';
import information from './configurations/information';
import { register } from 'swiper/element/bundle';
app.mixin({
  created() {
    this.$options.imageConfig = image;
    this.$options.information = information;
  },
  mounted() {
    register();
    library.add(
      faBars,
      faXmark,
      faCheck,
      faCoins,
      faDiceD6,
      faArrowRight,
      faChevronDown,
      faVideoCamera,
      faPeopleGroup,
      faMoneyBillWave,
    );
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
  .use(createHead())
  .use(VueCookies)
  .use(router)
  // @ts-expect-error plugin error
  .use(VueTheMask)
  .use(VueScrollTo)
  .mount('#app');
