<template>
  <div>
    <nav class="sticky z-50 top-0 py-2 xl:py-4 w-full flex flex-row justify-between items-center max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto px-5" :class="{ 'text-primary': color === 'primary' }">
      <RouterLink :to="'/' + $root.utms">
        <LogoSejaBestSVG class="h-fit"  />
      </RouterLink>

      <MenuComponent class="sm:hidden md:hidden" />
      <MenuMobileComponent class="xl:hidden lg:hidden" />
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuComponent from '@/components/structure/menu.component.vue'
import MenuMobileComponent from '@/components/structure/menuMobile.component.vue'
import LogoSejaBestSVG from '@/components/base/logos/logoSejaBestSVG.component.vue'
import { PropType } from 'vue'

export default defineComponent({
  name: 'TopBar',
  components: {
    MenuComponent,
    MenuMobileComponent,
    LogoSejaBestSVG,
  },
  props: {
    color: {
      type: String as PropType<'primary'>,
      required: true,
    },
  },
  data() {
    return {}
  },
})
</script>
