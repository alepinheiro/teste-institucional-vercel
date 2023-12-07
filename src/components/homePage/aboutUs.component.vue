<template>
  <section class="bg-[#DEDEDE] px-5 py-10">
    <div class="flex flex-col gap-2 text-center">
      <p class="text-textSecondary">
        A <b> SejaBest </b> já tem história no mercado.
      </p>
      <h2 class="text-2xl">
        <strong>Há 10 anos</strong> transformamos o acesso ao crédito
      </h2>
    </div>

    <ul class="flex flex-row gap-5 py-4">
      <li v-for="{ icon, title } in cards" :key="icon" class="p-10 bg-white drop-shadow-lg rounded">
        {{ title }}
      </li>
    </ul>

    <div class="sm:flex flex-row flex-wrap items-center gap-6 mx-auto hidden">
      <div
        v-for="{ alt, id, source } of seals"
        :key="id"
        class="w-1/3 last-of-type:w-1/2 last-of-type:mx-auto last-of-type:flex-grow-0 flex-grow"
      >
        <img :src="source" :alt="alt" class="h-24 sm:h-auto" />
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
          icon: 'dollar',
          title: '+ 1 bilhão',
          description: 'Emprestados em crédito',
        },
        {
          icon: 'cube',
          title: '+ de 20',
          description: 'Parceiros financeiros',
        },
      ],
      seals: [
        {
          id: 1,
          source: '/images/finanBest/seals/sealTopOfSalesCashMe.png',
          alt: 'Campeão de vendas CashMe 2022 - 2023',
        },
        {
          id: 2,
          source: '/images/finanBest/seals/sealTopOfSalesDaycoval.png',
          alt: 'Campeão de vendas Daycoval 2022',
        },
        {
          id: 3,
          source: '/images/finanBest/seals/sealTopHomeEquityFiveInter.png',
          alt: 'Top 5 Home Equity Banco Inter',
        },
      ],
    }
  },
})
</script>
