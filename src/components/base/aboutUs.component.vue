<template>
  <section
    :class="{
      'bg-secondary': container.bgColor === 'SECONDARY',
      'bg-primary': container.bgColor === 'PRIMARY',
      'bg-bgDarkColor': container.bgColor === 'BGDARKCOLOR',
    }"
    class="py-24 w-full"
  >
    <div
      class="max-w-7xl lg:max-w-5xl flex flex-col gap-24 sm:gap-8 w-full mx-auto px-5"
    >
      <div
        class="flex flex-row gap-2 sm:flex-col sm:gap-5 w-10/12 mx-auto items-center"
      >
        <div class="w-1/3 sm:w-full">
          <img
            src="/images/logoBest/logoSejaBestWhite.png"
            alt=""
            class="object-contain h-20 mx-auto"
          />
        </div>
        <div class="w-full xl:w-2/3">
          <h2 class="text-3xl sm:text-xl font-bold text-white text-center">
            Há mais de 10 anos transformamos o acesso ao crédito para quem busca
            sua melhor versão.
          </h2>
        </div>
      </div>
      <div class="sm:flex flex-row flex-wrap items-center gap-6 mx-auto hidden">
        <img
          v-for="{ alt, id, src } of topOfSales('white')"
          :key="id"
          :src="src"
          :alt="alt"
          class="mx-auto h-12"
        />
      </div>
      <div class="flex flex-row sm:flex-col gap-4 text-white">
        <div
          v-for="{ id, icon, title, description } in cardContent"
          :key="id"
          :class="{
            'bg-secondary': cards.bgColor === 'SECONDARY',
            'bg-primary': cards.bgColor === 'PRIMARY',
            'bg-bgDarkColor': cards.bgColor === 'BGDARKCOLOR',
          }"
          class="rounded-xl p-8 flex flex-col gap-4 flex-1"
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
      <div class="flex flex-row gap-6 mx-auto flex-wrap items-center sm:hidden">
        <img
          v-for="{ alt, id, src } of topOfSales('white')"
          :key="id"
          :src="src"
          :alt="alt"
          class="h-20 mx-auto"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { topOfSales } from '@/configurations/images'

defineProps<{
  container: {
    bgColor: 'PRIMARY' | 'SECONDARY' | 'BGDARKCOLOR'
  }
  cards: {
    bgColor: 'PRIMARY' | 'SECONDARY' | 'BGDARKCOLOR'
  }
}>()

const cardContent = [
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
</script>
