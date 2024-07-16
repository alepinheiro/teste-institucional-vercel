<template lang="">
  <div class="md:pl-4 lg:pl-4 md:pr-4 lg:pr-4 maxWidth">
    <div
      class="shadow-lg md:p-0 lg:p-0 bg-[#EFEFEF] rounded-2xl flex flex-wrap sm:justify-center sm:items-center">
      <div class="w-6/12 mb-auto sm:w-full">
        <div class="pl-20 md:pl-4 sm:pl-4 py-4 sm:flex sm:flex-col">
          <div
            class="text-7xl titleFontBold sm:mt-1 lg:text-5xl md:text-3xl sm:self-center sm:items-center">
            <div class="flex gap-4 sm:self-center sm:justify-center">
              <img
                :src="icons.grafico"
                class="mt-auto w-2/12 sm:w-10 md:w-10 lg:w-16" />
              <h1 class="sm:text-4xl lg:text-5xl md:text-4xl text-7xl">
                1,59%
              </h1>
            </div>
          </div>
          <p
            class="text-3xl sm:text-xl sm:text-center sm:p-4 pt-4 sm:pt-8 font-light md:text-xl lg:text-2xl">
            São os juros mensais do
            <br class="sm:hidden" />empréstimo usando <br class="sm:hidden" />
            o veículo como garantia.
          </p>
          <div
            class="rounded-xl p-2 sm:p-3 sm:text-xs w-6/12 sm:flex sm:items-center sm:justify-center sm:w-11/12 sm:self-center font-bold bg-primary mt-4 sm:mt-5 text-white text-center uppercase lg:w-5/6 md:w-4/6 md:text-sm md:p-1">
            <a
              :href="links.simulator.urlVehicle + $root.utms"
              aria-label="Clique aqui para simular seu financiamento"
              target="_blank">
              Quero simular agora
            </a>
          </div>
        </div>
      </div>
      <div class="w-6/12">
        <img
          :src="bextCarPage.imgMulher.src"
          :alt="bextCarPage.imgMulher.alt"
          loading="lazy"
          class="w-full h-full rounded-r-2xl sm:hidden" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { bextCarPage, icons } from '@/configurations/images';
  import { links } from '@/configurations/information';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Banner',
    data() {
      return {
        links,
        icons,
        bextCarPage,
      };
    },
  });
</script>
