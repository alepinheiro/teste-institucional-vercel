<template>
  <section class="w-full relative z-0 lg:h-[700px] xl:h-[700px] flex">
    <div
      class="flex sm:flex-col md:flex-col flex-row-reverse gap-5 items-center max-w-7xl m-auto "
    >

    <div class="border-t border-[#D0FE42] inset-x-0 absolute sm:top-40 md:top-40 top-0 z-0 mx-auto md:max-w-2xl max-w-7xl">
    </div>

      <div class="z-10 flex-1 lg:flex-initial lg:relative md:-mb-24 sm:-mb-12 lg:w-2/6">
        <img
          src="/images/bestBroker/productBox.png"
          class="w-auto mx-auto md:max-w-2xl object-contain lg:scale-150"
          alt=""
        />
      </div>

      <div class="flex flex-col gap-5 sm:px-5 md:max-w-2xl lg:w-4/6 flex-1 lg:flex-auto">

        <p class="text-3xl text-center">
          Uma preparação completa para o Corretor que quer
          <span class="text-[#D0FE42] font-bold"> aumentar seus lucros </span>
          através das Ferramentas Financeiras
        </p>

        <ul class="flex flex-row flex-wrap gap-3 items-center justify-center py-5">
          <li
            v-for="{ icon, id, text } of includedTools"
            :key="id"
            class=" border-2 border-[#D0FE42] rounded px-10 py-5 shadow-md shadow-[#D0FE4260] flex flex-row items-center gap-4 hover:bg-[#D0FE42] hover:text-black cursor-default transition-all"
          >
            <i :class="icon"></i>
            <span class="text-2xl font-bold">
              {{ text }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ProductBox',
  data() {
    return {
        includedTools: [
        {
          id: 1,
          icon: 'fa-solid fa-video',
          text: 'Videoaulas',
        },
        {
          id: 2,
          icon: 'fa-solid fa-star',
          text: 'Cases de sucesso',
        },
        {
          id: 3,
          icon: 'fa-solid fa-lightbulb',
          text: 'Dicas rápidas',
        },
        {
          id: 4,
          icon: 'fa-solid fa-table',
          text: 'Parceria garantida',
        },
        {
          id: 5,
          icon: 'fa-solid fa-table',
          text: 'Planilhas e Checklists',
        },
        {
          id: 6,
          icon: 'fa-solid fa-square-pen',
          text: 'Tutoriais',
        },
      ],
    }
  },
})
</script>
