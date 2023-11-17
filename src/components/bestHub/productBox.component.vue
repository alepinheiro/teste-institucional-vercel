<template>
  <section
    class="w-full relative z-0 flex border-t border-[#D0FE42] pt-32 sm:pt-10 pb-18 sm:pb-4"
  >
    <div
      class="flex sm:flex-col md:flex-col flex-row-reverse gap-5 items-center max-w-7xl m-auto"
    >
      <div
        class="z-10 flex-1 lg:flex-initial lg:relative md:-mb-24 sm:-mb-12 lg:w-2/6"
      >
        <img
          src="/images/bestBroker/productBox.png"
          class="w-auto mx-auto md:max-w-2xl object-contain lg:scale-150"
          alt=""
        />
      </div>

      <div
        class="flex flex-col gap-14 sm:gap-6 sm:px-5 md:max-w-2xl lg:w-4/6 flex-1 lg:flex-auto"
      >
        <img
          src="/images/bestBroker/logoBestBrokerWhite.png"
          class="h-16 w-fit mx-auto object-contain"
          alt=""
        />

        <h2 class="text-2xl font-bold text-center">
          O curso definitivo para se tornar expert em
          <b class="text-[#D0FE42]">Crédito Imobiliário</b>
        </h2>

        <p class="text-xl text-center">
          Uma preparação completa para o Corretor que quer
          <span class="text-[#D0FE42] font-bold"> aumentar seus lucros </span>
          através das Ferramentas Financeiras
        </p>

        <ul
          class="flex flex-row flex-wrap gap-3 items-center justify-center py-5"
        >
          <li
            v-for="{ icon, id, text } of includedTools"
            :key="id"
            class="sm:w-full border-2 border-[#D0FE42] rounded px-5 py-3 shadow-md shadow-[#D0FE4260] flex flex-row items-center justify-center gap-4 hover:bg-[#D0FE42] hover:text-black cursor-default transition-all"
          >
            <div class="w-5 h-5">
              <i :class="icon" class="w-full h-full"></i>
            </div>
            <p class="text-xl font-bold w-fit mt-1  sm:text-center">
              {{ text }}
            </p>
          </li>
        </ul>

        <a
          :href="$options.information.bestHubApp.subscribe+ $root.utms"
          target="_blank"
          class="text-black sm:text-center md:text-center text-xl font-bold px-5 py-3 rounded-xl font-hover transition-all bg-[#D0FE42] mt-5 font-sans hover:-translate-y-1 w-fit mx-auto"
        >
          SAIBA MAIS
        </a>
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
