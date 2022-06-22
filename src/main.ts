
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import VueTheMask from 'vue-the-mask' //importante campos inputs com mascara
import moment from "moment" // formata data
import { createHead } from '@vueuse/head'
import VueCookies from 'vue-cookies'
import { createGtm } from "vue-gtm"

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
app.use(
  createGtm({
    id: "GTM-KVJ4GJS", // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
    defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
    compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
  })
)
// componentes globais
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
