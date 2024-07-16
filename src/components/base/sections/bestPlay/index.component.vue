<template>
  <section>
    <Mobile
      v-if="windowSize.width.value < 768"
      :title="title"
      class="flex flex-col relative z-0 h-screen min-md:hidden" />

    <Desktop
      v-else
      :title="title"
      class="min-md:flex flex-col relative z-0 h-screen bg-[#181818] bg-gradient-to-br to-black from-transparent overflow-hidden hidden" />
  </section>
</template>

<script lang="ts" setup>
  import { useWindowSize } from '@vueuse/core';
  import { defineAsyncComponent } from 'vue';
  const Desktop = defineAsyncComponent(
    () => import('@/components/base/sections/bestPlay/desktop.component.vue'),
  );
  const Mobile = defineAsyncComponent(
    () => import('@/components/base/sections/bestPlay/mobile.component.vue'),
  );

  const windowSize = useWindowSize();
  const title = 'Conheça o melhor canal de crédito do Brasil';
</script>
