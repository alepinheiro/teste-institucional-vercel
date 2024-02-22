<template>
  <header class="absolute z-30 top-0 w-auto inset-x-0">
    <div
      class="py-5 w-full flex flex-row justify-between items-center xl:max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto px-5"
    >
      <RouterLink :to="'/' + $root.utms" class="w-auto h-fit">
        <LogoSejaBestSVG class="w-auto h-8 min-lg:h-14" title="Página Inicial - SejaBest" />
      </RouterLink>

      <MenuDesktop class="sm:hidden md:hidden" />
      <MenuMobile
        :color="customMobileMenuColor"
        class="xl:hidden lg:hidden h-8 w-8 flex-shrink-0 aspect-square mr-0"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuDesktop from '@/components/structure/menu.component.vue'
import MenuMobile from '@/components/structure/menuMobile.component.vue'
import LogoSejaBestSVG from '@/components/base/logos/logoSejaBestSVG.component.vue'

export default defineComponent({
  name: 'TopBar',
  components: {
    MenuDesktop,
    MenuMobile,
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
