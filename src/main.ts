
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import VueTheMask from 'vue-the-mask' //importante campos inputs com mascara
import moment from "moment" // formata data
import { createHead } from '@vueuse/head'
import VueCookies from 'vue-cookies'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

// componentes globais
import inputBase from '@/components/base/inputBase.component.vue'
import inputMoney from '@/components/base/inputMoney.component.vue'
import selectBase from '@/components/base/selectBase.component.vue'
// configurações do projeto
import('./configurations/color.css')
import ('./assets/css/tailwind.css')
import ('./configurations/customStyle.css')
import image from './configurations/images'

const app = createApp(App);
app.use(VueTheMask)
app.use(VueCookies)
app.use(createHead())

// componentes globais
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('font-awesome-layers', FontAwesomeLayers)
app.component('font-awesome-layer-text', FontAwesomeLayersText)
app.component('inputBase', inputBase)
app.component('inputMoney', inputMoney)
app.component('selectBase', selectBase)

app.mixin({
  created () {
      this.$options.imageConfig = image
  }
});
app.config.globalProperties.$filters = {
  // formatos aceitos listados em https://momentjs.com/
  formatDate(date: any, format: string){
    return moment(date).format(format)
  }
}
app.use(router).mount('#app')
