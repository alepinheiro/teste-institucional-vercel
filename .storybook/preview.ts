import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'

import('@/configurations/color.css')
import('@/assets/css/tailwind.css')
import('@/configurations/customStyle.css')
import router from '@/router/index'
import image from '@/configurations/images'
import information from '@/configurations/information'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { register } from 'swiper/element/bundle'
import { createMetaManager } from 'vue-meta'
import { createHead } from '@vueuse/head'

setup((app) => {
  app.use(createMetaManager())
  app.use(createHead())
  app.mixin({
    created() {
      this.$options.imageConfig = image
      this.$options.information = information
    },
  })
})

register()
library.add(fas, far, fab)
dom.watch()

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
