<template>
  <header class="absolute z-30 top-0 w-auto inset-x-0">
    <div
      class="py-5 xl:py-4 w-full flex flex-row justify-between items-center xl:max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto px-5"
    >
      <RouterLink :to="'/' + $root.utms" class="w-auto h-8">
        <LogoSejaBestSVG class="w-auto h-8" title="Página Inicial - SejaBest" />
      </RouterLink>

      <MenuComponent class="sm:hidden md:hidden" />
      <MenuMobileComponent
        :color="customMobileMenuColor"
        class="xl:hidden lg:hidden h-8 w-8 flex-shrink-0 aspect-square mr-0"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuComponent from '@/components/structure/menu.component.vue'
import MenuMobileComponent from '@/components/structure/menuMobile.component.vue'
import LogoSejaBestSVG from '@/components/base/logos/logoSejaBestSVG.component.vue'

export default defineComponent({
  name: 'TopBar',
  components: {
    MenuComponent,
    MenuMobileComponent,
    LogoSejaBestSVG,
  },
  props: {
    customMobileMenuColor: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {}
  },
})
</script>
