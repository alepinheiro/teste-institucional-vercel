<template>
  <nav class="w-full flex xl:py-8 lg:py-6 justify-between bg-transparent">
    <div class="pr-8">
      <router-link
        :to="'/' + $root.utms"
        aria-label="Página inicial SejaBest"
        class="lineDecoration"
      >
        <img
          v-if="position === 'top'"
          :src="$options.imageConfig.logoSejabest"
          alt="Logo SejaBest "
          title="Logo SejaBest "
          class="w-auto h-12"
        />
      </router-link>

      <router-link :to="'/' + $root.utms" class="lineDecoration">
        <img
          v-if="position !== 'top'"
          :src="$options.imageConfig.logoSejabestWhite"
          alt="Logo SejaBest "
          title="Logo SejaBest "
          class="w-auto h-12"
        />
      </router-link>
    </div>

    <MenuComponent class="sm:hidden md:hidden" :link-style="linkStyle" />
    <MenuMobileComponent
      class="xl:hidden lg:hidden"
      :color="color"
      :link-style="linkStyle"
    />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuComponent from '@/components/structure/menu.component.vue'
import MenuMobileComponent from '@/components/structure/menuMobile.component.vue'

export default defineComponent({
  name: 'TopBar',
  components: {
    MenuComponent,
    MenuMobileComponent,
  },
  props: {
    position: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      color: 'fill-white',
      linkStyle: 'linkStyleDark',
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
