<template>
  <section
    class="p-5 flex flex-col min-lg:flex-row gap-5 maxWidth mx-auto min-lg:py-36">
    <div class="flex flex-col gap-5 w-full">
      <h3
        class="font-bold text-lg min-md:text-2xl text-center min-lg:text-left">
        Uma nova marca. Pela mesma causa, com a mesma cultura e somando muito
        mais possibilidades.
      </h3>
      <p class="min-md:text-xl sm:text-center sm:text-center">
        Há 10 anos colocamos os clientes no centro da disrupção, oferecendo
        soluções mais eficientes para possibilitar seu acesso ao crédito.
      </p>
      <button
        class="text-2xl hidden bg-primary text-white mr-auto px-5 py-2 rounded-lg font-bold active:scale-95 transition min-lg:block">
        Conheça a Bext
      </button>
    </div>

    <video
      autoplay
      loop
      muted
      playsinline
      :src="$options.imageConfig.brand.loadingBrandChangeLight.image"
      class="py-5 h-4/5 min-lg:w-full"></video>
    <button
      class="bg-primary text-white mx-auto px-5 py-2 rounded-lg font-bold active:scale-95 transition min-lg:hidden">
      Conheça a Bext
    </button>
    <div
      class="grid min-md:hidden grid-flow-row grid-cols-2 flex-row flex-nowrap items-center gap-6 mx-auto max-w-xl pt-5">
      <img
        v-for="{ alt, id, src } of topOfSales('black')"
        :key="id"
        :src="src"
        :alt="alt"
        class="mx-auto h-12 min-md:h-14" />
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { topOfSales } from '@/configurations/images';
  export default defineComponent({
    name: 'NewBrandSection',
    data() {
      return {
        topOfSales,
      };
    },
  });
</script>
