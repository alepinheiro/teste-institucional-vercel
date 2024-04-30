<template>
  <div>
    <section class="maxWidth flex flex-wrap pt-8 sm:pt-16 xl:py-20 lg:py-32 md:py-24 sm:hidden">
      <div class="w-1/2 sm:w-full mb-auto text-white">
        <h1
          class="xl:w-2/3 lg:w-2/3 md:w-full sm:text-center text-4xl md:text-3xl sm:text-3xl
          font-semibold mr-0 xl:leading-normal">
          Por que fazer um Empréstimo com Garantia de Veículo?
        </h1>
        <p class="py-6 pr-36 lg:pr-28 md:pr-12 text-2xl md:text-lg sm:text-center ">
          Porque é uma das modalidades de crédito com as menores taxas de juros ao ano
          do mercado. Olhe no gráfico ao lado e compare.
        </p>
        <div
          class="p-3 w-5/12 md:w-6/12 lg:w-6/12 md:text-xs bg-primary text-white text-center font-bold uppercase rounded-xl">
          <a
            :href="$options.information.appVehicleSimulator +$root.utms"
            aria-label="Clique aqui para simular seu financiamento"
            target="_blank">
            Quero contratar
          </a>
        </div>
      </div>
      <div class="w-1/2 mt-auto mb-auto sm:w-full">
        <img
          :src=$options.imageConfig.BextCar.graficoBextCar alt="Gráfico comparando as taxas do crédito como garantia veicular"
          class="sm:w-full md:w-11/12 w-full h-auto  " />
      </div>
    </section>
  </div>
</template>

<script lang="ts">

import partnersLabel from './partnersLabel.vue';
import { defineComponent, ComponentPublicInstance } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type IRootExtension = ComponentPublicInstance & { [key: string]: string }

export default defineComponent({
  name: 'Section3',
  components: {
    partnersLabel
  }
})

</script>

<style></style>