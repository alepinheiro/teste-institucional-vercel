<template>
  <section class="w-full">
    <div class="max-w-4xl mx-auto px-5 py-20 sm:py-5">
      <div class="flex flex-col w-full">
        <h2 class="text-5xl mb-1">Por que ser <b>Best?</b></h2>
        <div class="border-b-2 border-[#D0FE42] w-2/5"></div>

        <ul class="flex flex-col py-4 divide-y-1 divide-white/30">
          <li class="flex flex-row items-stretch h-16 sm:h-24 text-center">
            <div class="w-4/6 sm:w-1/2 my-auto"></div>
            <div class="w-1/6 sm:w-1/4 my-auto">SejaBest</div>
            <div class="w-1/6 sm:w-1/4 my-auto">Bancos Tradicionais</div>
          </li>

          <li
            v-for="{ banksFeature, bestFeature, id, title } of tableItems"
            :key="id"
            class="flex flex-row h-14 sm:h-24 text-xl"
          >
            <div class="w-4/6 sm:w-1/2 my-auto">
              {{ title }}
            </div>
            <div class="w-1/6 sm:w-1/4 text-center my-auto">
              <i :class="`fa-solid ${ bestFeature ? 'fa-check text-green-500' : 'fa-xmark text-zinc-600' }`"></i>

            </div>
            <div class="w-1/6 sm:w-1/4 text-center my-auto">
              <i :class="`fa-solid ${ banksFeature ? 'fa-check text-red-500' : 'fa-xmark text-zinc-600' }`"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BestTable',
  data() {
    const tableItems = [
      {
        id: 1,
        title: 'Plataforma multibancos',
        bestFeature: true,
        banksFeature: true,
      },
      {
        id: 2,
        title: 'CRM completo com a cara da sua marca',
        bestFeature: true,
        banksFeature: false,
      },
      {
        id: 3,
        title: 'Um time de especialistas para lhe ajudar',
        bestFeature: true,
        banksFeature: false,
      },
      {
        id: 4,
        title: 'Agilidade para as suas operações',
        bestFeature: true,
        banksFeature: false,
      },
      {
        id: 5,
        title: 'Assessoria personalizada para seu cliente',
        bestFeature: true,
        banksFeature: false,
      },
      {
        id: 6,
        title: 'Ecossistema educacional completo',
        bestFeature: true,
        banksFeature: false,
      },
      {
        id: 7,
        title: 'Programa de certificação e treinamento',
        bestFeature: true,
        banksFeature: false,
      },
      {
        id: 8,
        title: 'Foco em você e no seu cliente',
        bestFeature: true,
        banksFeature: false,
      },
      {
        id: 9,
        title: 'Vivemos do seu resultado',
        bestFeature: true,
        banksFeature: false,
      },
      {
        id: 10,
        title: 'Uma plataforma multiprodutos',
        bestFeature: true,
        banksFeature: true,
      },
    ]
    return {
      tableItems,
    }
  },
})
</script>
