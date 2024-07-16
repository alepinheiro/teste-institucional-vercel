<template>
  <header class="absolute z-30 top-0 w-auto inset-x-0">
    <div
      class="py-5 w-full flex flex-row justify-between items-center maxWidth mx-auto">
      <RouterLink :to="{ path: '/', query: $route.query }" class="w-auto h-fit">
        <img
          v-if="customMobileMenuColor !== 'white'"
          :src="$options.imageConfig.brand.blackAndBlueLogo.image"
          :alt="$options.imageConfig.brand.blackAndBlueLogo.alt"
          :title="$options.imageConfig.brand.blackAndBlueLogo.alt"
          class="w-auto h-8" />
        <img
          v-if="customMobileMenuColor === 'white'"
          :src="$options.imageConfig.brand.whiteAndBlueLogo.image"
          :alt="$options.imageConfig.brand.whiteAndBlueLogo.alt"
          :title="$options.imageConfig.brand.whiteAndBlueLogo.alt"
          class="w-auto h-8" />
      </RouterLink>

      <MenuDesktop v-if="windowSize.width > 1023" />
      <MenuMobile
        v-else
        :color="customMobileMenuColor"
        class="h-8 w-8 flex-shrink-0 aspect-square mr-0" />
    </div>
  </header>
</template>

<script lang="ts">
  import { defineAsyncComponent, defineComponent } from 'vue';
  import { useWindowSize } from '@vueuse/core';
  export default defineComponent({
    name: 'TopBar',
    components: {
      MenuDesktop: defineAsyncComponent(
        () => import('@/components/structure/menu.component.vue'),
      ),
      MenuMobile: defineAsyncComponent(
        () => import('@/components/structure/topBar/menuMobile/index.vue'),
      ),
    },
    props: {
      customMobileMenuColor: {
        type: String,
        required: false,
        default: '',
      },
    },
    data() {
      return {
        windowSize: useWindowSize(),
      };
    },
  });
</script>
