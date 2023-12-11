<template>
  <section class="bg-[#DEDEDE] md:bg-white relative z-0 md:mt-10">
    <div class="bg-gradient-to-b from-[#DEDEDE] to-white absolute top-0 bottom-1/3 inset-x-20 -z-10 rounded-xl"></div>
    <div class="px-5 py-10 md:max-w-2xl mx-auto">
      <div class="flex flex-col gap-2 text-center md:text-left">
        <p class="text-textSecondary md:text-textPrimary ">
          A <b> SejaBest </b> já tem história no mercado.
        </p>
        <h2 class="text-xl md:text-4xl md:text-textPrimary">
          <strong>
            Há 10 anos
          </strong>
          transformamos o acesso ao crédito
        </h2>
      </div>

      <ul class="flex flex-row gap-5 py-10">
        <li
          v-for="{ icon, title, description } in cards"
          :key="icon"
          class="p-5 md:py-10 bg-white drop-shadow-lg md:shadow-2xl rounded md:rounded-xl w-full flex flex-col md:gap-6"
        >
        <div class="md:h-7 md:w-7">
          <i :class="icon" class="text-textSecondary block w-full h-full"></i>
        </div>
          <span class="font-bold text-xl md:text-5xl text-primary block">
            {{ title }}
          </span>
          <span class="text-textSecondary block md:text-xl">
            {{ description }}
          </span>
        </li>
      </ul>

      <div
        class="sm:flex md:hidden flex-row flex-wrap items-center gap-6 mx-auto"
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
  name: 'AboutUs',
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
