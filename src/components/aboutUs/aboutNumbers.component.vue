<template>
  <section class="relative z-0 md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto">
    <div
      class="hidden md:block lg:block xl:block bg-gradient-to-b from-[#DEDEDE] to-[#EFEFEF] absolute top-0 bottom-1/3 w-full scale-x-105 inset-x-0 -z-10 rounded-xl"
    ></div>
    <div
      class="px-5 lg:px-0 py-10 mx-auto flex flex-col lg:flex-row xl:flex-row items-center"
    >
      <div
        class="text-textPrimary flex flex-col gap-2 lg:gap-7 xl:gap-7 text-center md:text-left lg:text-left xl:text-left lg:w-5/12 xl:w-5/12"
      >
        <h2 class="text-xl font-bold">
          Há mais de 10 anos transformamos o acesso ao crédito
        </h2>
        <p class="text-sm">
          Em nossa história ja foram mais de 1 bilhão de reais emprestados em
          crédito através de nossos mais de 20 parceiros, que nos renderam
          também premiações em vendas.
        </p>
      </div>

      <ul
        class="flex flex-row gap-2 md:gap-5 lg:gap-5 xl:gap-5 py-10 md:w-full lg:w-7/12 xl:w-7/12"
      >
        <li
          v-for="{ icon, title, description } in cards"
          :key="icon"
          class="p-3 w-1/3 flex-grow md:py-10 lg:py-10 xl:px-10 xl:py-16 bg-white group hover:bg-primary drop-shadow-lg md:shadow-2xl lg:shadow-2xl xl:shadow-2xl rounded md:rounded-xl lg:rounded-xl xl:rounded-xl flex flex-col md:gap-6 lg:gap-3 lg:h-full transition-all"
        >
          <div
            class="w-4 h-4 md:h-7 md:w-7 lg:w-7 lg:h-7 xl:w-7 xl:h-7 text-textSecondary"
          >
            <i
              :class="icon"
              class="group-hover:text-complementaryColor3 block w-full h-full"
            ></i>
          </div>
          <span
            class="font-bold text-xl md:text-5xl lg:text-5xl xl:text-5xl text-primary group-hover:text-white transition-all"
          >
            {{ title }}
          </span>
          <span
            class="text-sm text-textSecondary block md:text-xl leading-4 group-hover:text-white transition-all"
          >
            {{ description }}
          </span>
        </li>
      </ul>

      <div
        class="flex md:hidden lg:hidden xl:hidden flex-row flex-wrap items-center gap-6 mx-auto"
      >
        <div
          v-for="{ alt, id, source } of seals"
          :key="id"
          class="w-1/3 last-of-type:w-1/2 last-of-type:mx-auto last-of-type:flex-grow-0 flex-grow"
        >
          <img
            :src="`/images/Home/seals/dark/${source}`"
            :alt="alt"
            class="h-24 sm:h-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AboutNumbers',
  data() {
    return {
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
