
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import VueTheMask from 'vue-the-mask' //importante campos inputs com mascara
import moment from "moment" // formata data
import { createHead } from '@vueuse/head'
import VueCookies from 'vue-cookies'
import VueSplide from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { createMetaManager } from 'vue-meta'
import { register } from 'swiper/element/bundle';
import VueScrollTo  from "vue-scrollto";

// componentes globais
import inputBase from '@/components/base/inputBase.component.vue'
import inputMoney from '@/components/base/inputMoney.component.vue'
import selectBase from '@/components/base/selectBase.component.vue'
import videoBase from '@/components/base/videoBase.component.vue'
import footerComponent from '@/components/structure/footer.component.vue';
register();
// configurações do projeto
import('./configurations/color.css')
import ('./assets/css/tailwind.css')
import ('./configurations/customStyle.css')
import('./configurations/themeCustomization.scss');
import image from './configurations/images'
import information from './configurations/information'
const app = createApp(App);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(VueTheMask as any)
app.use(VueCookies)
app.use(createHead())
app.use( VueSplide );
app.use(VueScrollTo)
app.use(createMetaManager())
// componentes globais
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);
dom.watch();
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.component('InputBase', inputBase)
app.component('InputMoney', inputMoney)
app.component('SelectBase', selectBase)
app.component('VideoBase', videoBase)
app.component('FooterComponent', footerComponent)

app.mixin({
  created () {
      this.$options.imageConfig = image
      this.$options.information = information
  }
});

app.config.globalProperties.$filters = {
  // formatos aceitos listados em https://momentjs.com/
  formatDate(date: Date, format: string){
    return moment(date).format(format)
  }
}
app.use(router).mount('#app')
