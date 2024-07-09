import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import router from './router/index';
import VueTheMask from 'vue-the-mask'; //importante campos inputs com mascara
import VueCookies from 'vue-cookies';
import { createHead } from '@unhead/vue';
import VueScrollTo from 'vue-scrollto';

// configurações do projeto
import image from './configurations/images';
import information from './configurations/information';

const app = createApp(App);
// componentes globais
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faArrowRight,
  faBars,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faArrowRight, faChevronDown);

app.component('Icon', FontAwesomeIcon);
app.component('InputBase', import('@/components/base/inputBase.component.vue'));
app.component(
  'InputMoney',
  import('@/components/base/inputMoney.component.vue'),
);
app.component(
  'SelectBase',
  import('@/components/base/selectBase.component.vue'),
);
app.component(
  'VideoBase',
  defineAsyncComponent(
    () => import('@/components/base/videoBase.component.vue'),
  ),
);
app.component(
  'FooterComponent',
  import('@/components/structure/theFooter.component.vue'),
);

app.mixin({
  created() {
    this.$options.imageConfig = image;
    this.$options.information = information;
  },
});

app
  // @ts-expect-error plugin error
  .use(VueTheMask)
  .use(VueCookies)
  .use(createHead())
  .use(VueScrollTo)
  .use(router)
  .mount('#app');
