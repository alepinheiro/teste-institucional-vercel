<template>
  <section
    class="relative z-0 lg:max-w-5xl xl:max-w-7xl mx-auto md:max-w-2xl border-b border-textSecondary"
  >
    <!-- <div
      class="hidden md:block lg:block xl:block bg-gradient-to-b from-[#DEDEDE] to-[#EFEFEF] absolute top-0 bottom-1/3 w-full scale-x-105 inset-x-0 -z-10 rounded-xl"
    ></div> -->
    <div
      class="px-5 lg:px-0 mx-auto flex flex-col gap-10 md:gap-15 lg:gap-15 xl:flex-row xl:gap-5 items-center"
    >
      <div
        class="text-textPrimary flex flex-col gap-2 md:gap-5 lg:gap-7 xl:gap-7 text-center xl:text-left lg:w-2/3 xl:w-5/12 h-fit mb-auto"
      >
        <h2 class="text-base md:text-4xl lg:text-4xl xl:text-3xl font-bold">
          Há mais de 10 anos transformamos o acesso ao crédito
        </h2>
        <p class="text-sm md:text-xl lg:text-xl xl:text-xl">
          Em nossa história ja foram mais de 1 bilhão de reais emprestados em
          crédito através de nossos mais de 20 parceiros, que nos renderam
          também premiações em vendas.
        </p>
      </div>

      <div class="flex flex-col gap-20 xl:gap-10 flex-grow">
        <ul class="flex flex-row gap-2 md:gap-5 lg:gap-5 xl:gap-5 md:w-full">
          <li
            v-for="{ icon, title, description } in cards"
            :key="icon"
            class="p-3 md:py-14 md:px-8 lg:p-8 xl:px-8 w-1/3 flex-grow lg:py-10 xl:py-12 bg-white group hover:bg-primary drop-shadow-lg md:shadow-2xl lg:shadow-2xl xl:shadow-2xl rounded md:rounded-xl lg:rounded-xl xl:rounded-xl flex flex-col md:gap-6 lg:gap-3 xl:gap-2 lg:h-auto transition-all cursor-default"
          >
            <div
              class="w-4 h-4 md:h-7 md:w-7 lg:w-7 lg:h-7 xl:w-7 xl:h-7 text-textSecondary"
            >
              <i
                :class="icon"
                class="group-hover:text-complementaryColor3 block w-full h-full transition-colors"
              ></i>
            </div>
            <span
              class="font-bold text-xl md:text-5xl lg:text-5xl xl:text-5xl text-primary group-hover:text-white transition-all"
            >
              {{ title }}
            </span>
            <span
              class="text-sm text-textPrimary md:font-bold lg:font-bold xl:font-bold block md:text-2xl lg:text-2xl xl:text-2xl leading-4 group-hover:text-white transition-all"
            >
              {{ description }}
            </span>
          </li>
        </ul>
        <div
          class="grid min-md:flex grid-flow-row grid-cols-2 flex-row flex-nowrap items-center gap-6 mx-auto max-w-xl"
        >
          <img
            v-for="{ alt, id, src } of topOfSales('black')"
            :key="id"
            :src="src"
            :alt="alt"
            class="mx-auto h-12 min-md:h-auto min-md:w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { topOfSales } from '@/configurations/images'
export default defineComponent({
  name: 'AboutNumbers',
  data() {
    return {
      topOfSales,
      cards: [
        {
          icon: 'fa-solid fa-money-bill-wave',
          title: '+ 1 bilhão',
          description: 'Emprestados em crédito',
        },
        {
          icon: 'fa-solid fa-dice-d6',
          title: '+ de 20',
          description: 'Parceiros financeiros',
        },
      ],
      seals: [
        {
          id: 1,
          source: 'seal02.png',
          alt: 'Campeão de vendas CashMe 2022 - 2023',
        },
        {
          id: 2,
          source: 'seal03.png',
          alt: 'Campeão de vendas Daycoval 2022',
        },
        {
          id: 3,
          source: 'seal01.png',
          alt: 'Top 5 Home Equity Banco Inter',
        },
      ],
    }
  },
})
</script>
