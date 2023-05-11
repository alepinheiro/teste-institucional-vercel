<template>
    <section>
        <div class="maxWidth flex flex-wrap pt-0">
          <div class="w-1/2 mt-auto mb-auto sm:w-full sm:hidden">
            <img
              :src="$options.imageConfig.bestCar.carro"
              alt="um carro branco sobre um fundo azul"
              class="sm:w-full md:max-w-[30rem] lg:max-w-3xl max-w-4xl h-auto  xl:sticky xl:mt-[-35%] z-0"/>
          </div>
          <div class="w-1/2 sm:w-full text-right mt-auto xl:mt-24 mb-auto text-white">
            <h1
              class="xl:w-2/3 lg:w-2/3 md:w-full sm:text-center sm:text-3xl text-4xl md:text-3xl font-semibold
              text-right mr-0 ml-auto">
              Como Funciona?
            </h1>
            <p class="py-6 pl-[12.5rem] sm:pl-0 sm:text-sm sm:text-center lg:pl-24 md:pl-8 text-xl md:text-lg ">
              Com o bestCar, você pode usar o seu carro, <br/>
              <span class="font-bold">van ou caminhão quitado para conseguir empréstimo rápido.</span>
              Nessa modalidade,
              <span class="font-bold"> as <br /> taxas são mais baixas,</span>
              já que seu veículo é usado como uma garantia.
            </p>
          </div>
        </div>
        <banner />
        <div class="maxWidth">
            <card />
        </div>
    </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import card from '@/components/vehicle/BestCarLP/card.vue'
import banner from '@/components/vehicle/BestCarLP/banner.vue'
export default defineComponent({
    name:'Section2',
    components: {
      card,
      banner
    }
})
</script>

<style></style>

