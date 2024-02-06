<template>
  <div>
    <header
      class="sticky z-50 h-auto top-0 py-5 xl:py-4 w-full flex flex-row justify-between items-center max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto px-5"
    >
      <RouterLink :to="'/' + $root.utms" class="w-auto h-8">
        <LogoSejaBestSVG class="w-auto h-8" title="Página Inicial - SejaBest" />
      </RouterLink>

      <MenuComponent class="sm:hidden md:hidden" />
      <MenuMobileComponent
        class="xl:hidden lg:hidden h-8 w-8 flex-shrink-0 aspect-square mr-0"
      />
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
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
  data() {
    return {}
  },
})
</script>
