<template>
  <div class="w-full  flex xl:py-8 justify-between" :class="[position === 'top' ? 'bg-transparent' : 'bg-transparent']">
    <div class="pr-8">
      <router-link :to="'/' + ($root as IRootExtension).utms" class="lineDecoration">
        <img v-if="position === 'top'" :src="$options.imageConfig.logoSejabest" alt="Logo SejaBest " class="w-auto h-12 " />
      </router-link>
      <router-link :to="'/' + ($root as IRootExtension).utms" class="lineDecoration">
        <img
          v-if="position !== 'top'" :src="$options.imageConfig.logoSejabestWhite" alt="Logo SejaBest "
          class="w-auto h-12 " />
      </router-link>
    </div>
    <MenuComponent class="sm:hidden md:hidden" :link-style="linkStyle" />
    <MenuMobileComponent class="xl:hidden lg:hidden" :color="color" :link-style="linkStyle" />
  </div>
</template>
<script lang="ts">

import { ComponentPublicInstance, defineComponent } from 'vue';
import MenuComponent from '@/components/structure/menu.component.vue'
import MenuMobileComponent from '@/components/structure/menuMobile.component.vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type IRootExtension = ComponentPublicInstance & { [key: string]: string }

export default defineComponent({
  name: 'TopbarComponent',
  components: {
    MenuComponent,
    MenuMobileComponent
  },
  props: {
    position: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      color: 'fill-white',
      linkStyle: 'linkStyleDark'
    }
  },
  mounted() {

    if (this.position === 'top') {
      this.color = 'fill-textPrimary'
      this.linkStyle = 'linkStyle'
    }
  },
})
</script>
