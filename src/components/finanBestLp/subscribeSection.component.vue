<template>
  <section class="w-full py-10 bg-bgDarkColor">
    <div class="max-w-7xl md:max-w-2xl mx-auto w-full flex flex-col gap-4">
      <div class="text-white text-center flex flex-col gap-4 w-10/12 mx-auto">
        <h2 class="text-3xl font-bold">Simule agora completamente de graça.</h2>
        <p class="text-lg leading-loose">
          Simule gratuitamente em mais de 20 bancos e encontre a melhor opção de
          crédito para suas necessidades. Com a SejaBest, você terá seu próprio
          assessor dedicado para simplificar todo o processo relacionado ao
          crédito imobiliário. Deixe-nos guiar você rumo à melhor escolha para o
          seu momento financeiro.
        </p>
      </div>

      <div class="flex flex-row items-center">
        <div  class="w-5/12 flex justify-end lg:hidden md:hidden">
          <img src="/images/finanBest/gasparOnPhone.png" alt="">
        </div>
        <div class="w-full lg:w-8/12 lg:mx-auto px-5">
          <SimulationForm :show-home-equity="false" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

import SimulationForm from '@/components/base/forms/startSimulation.component.vue'

</script>
