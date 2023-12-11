<template>
  <section class="bg-[#DEDEDE] px-5 py-10">
    <div class="flex flex-col gap-2 text-center">
      <p class="text-textSecondary">
        A <b> SejaBest </b> já tem história no mercado.
      </p>
      <h2 class="text-xl">
        <strong>Há 10 anos</strong> transformamos o acesso ao crédito
      </h2>
    </div>

    <ul class="flex flex-row gap-5 py-10">
      <li v-for="{ icon, title, description } in cards" :key="icon" class="p-5 bg-white drop-shadow-lg rounded w-full">
        <i :class="icon" class="text-textSecondary block"></i>
        <span class="font-bold text-xl text-primary block">
          {{ title }}
        </span>
        <span class="text-textSecondary block">
          {{ description }}
        </span>
      </li>
    </ul>

    <div class="sm:flex flex-row flex-wrap items-center gap-6 mx-auto hidden">
      <div
        v-for="{ alt, id, source } of seals"
        :key="id"
        class="w-1/3 last-of-type:w-1/2 last-of-type:mx-auto last-of-type:flex-grow-0 flex-grow"
      >
        <img :src="`/images/Home/seals/dark/${source}`" :alt="alt" class="h-24 sm:h-auto" />
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
