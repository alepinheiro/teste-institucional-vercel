<template>
  <section class="bg-secondary py-24 w-full">
    <div class="max-w-7xl flex flex-col gap-24 w-full mx-auto px-5">
      <div class="flex flex-row sm:flex-col sm:gap-5 w-10/12 mx-auto items-center">
        <div class="w-1/3 sm:w-full">
          <img
            src="/images/logoBest/logoSejaBestWhite.png"
            alt=""
            class="object-contain h-14 mx-auto "
          />
        </div>
        <div class="w-full">
          <h2 class="text-3xl sm:text-2xl font-bold text-white text-center">
            Há mais de 10 anos transformamos o acesso ao crédito para quem busca
            sua melhor versão.
          </h2>
        </div>
      </div>
      <div class="flex flex-row sm:flex-col gap-4 text-white">
        <div
          v-for="{ id, icon, title, description } in cards"
          :key="id"
          class="bg-primary rounded-xl p-8 flex flex-col gap-4 flex-1"
        >
          <div>
            <i :class="icon" class="w-6 h-6"></i>
          </div>
          <div>
            <h3 class="flex flex-col gap-4">
              <span class="text-4xl font-bold">{{ title }}</span>
              <span class="text-lg">{{ description }}</span>
            </h3>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-6 mx-auto">
        <div v-for="{ alt, id, source } of seals" :key="id">
          <img :src="source" :alt="alt" class="h-24" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const cards = [
  {
    id: 1,
    icon: 'fa-solid fa-coins',
    title: '+ de 3.000',
    description: 'Propostas lançadas mensalmente',
  },
  {
    id: 2,
    icon: 'fa-solid fa-money-bill-wave',
    title: '+ de R$ 1 bilhão',
    description: 'Emprestados em crédito',
  },
  {
    id: 3,
    icon: 'fa-solid fa-dice-d6',
    title: '+ 20 parceiros',
    description: 'As maiores instituições do mercado',
  },
]

const seals = [
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
]
</script>
