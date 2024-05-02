<template>
  <section
    :class="{
      'bg-secondary': container.bgColor === 'SECONDARY',
      'bg-primary': container.bgColor === 'PRIMARY',
      'bg-[#23242E]': container.bgColor === 'BGDARKCOLOR',
    }"
    class="py-36 sm:py-12 w-full"
  >
    <div
      class="max-w-7xl lg:max-w-5xl flex flex-col gap-8 md:gap-12 sm:gap-5 w-full mx-auto px-5"
    >
      <div
        class="flex flex-row gap-2 sm:flex-col sm:gap-5 w-10/12 mx-auto items-center"
      >
        <div class="xl:w-5/12 w-1/3 sm:w-full sm:pb-4 ">
          <img
            :src="$options.imageConfig.brand.whiteAndBlueLogo.image"
            :alt="$options.imageConfig.brand.whiteAndBlueLogo.alt"
            class="object-contain h-auto w-full sm:w-2/3 mx-auto xl:w-10/12"
          />
        </div>
        <div class="w-full xl:w-7/12 w-2/3">
          <h2 class="text-3xl lg:text-2xl sm:text-xl font-bold text-white text-center">
            Há mais de 10 anos transformamos o acesso ao crédito para quem busca
            sua melhor versão.
          </h2>
        </div>
      </div>
      <div>
      <h3 class="text-textPrimary xl:hidden lg:hidden md:hidden text-xl text-center text-white py-8">Premiada e Reconhecida pelo mercado</h3>
      <div class="w-full flex flex-wrap justify-around xl:hidden lg:hidden md:hidden">
        <img
          v-for="{ alt, id, src } of topOfSales('white')"
          :key="id"
          :src="src"
          :alt="alt"
          class="mx-auto h-auto min-md:h-24 w-[20%] my-2"
        />
      </div>
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
              <span class="text-3xl font-bold">{{ title }}</span>
              <span class="text-lg">{{ description }}</span>
            </h3>
          </div>
        </div>
      </div>
      <div>
      <h3 class="text-textPrimary sm:hidden text-2xl text-center text-white py-16">Premiada e Reconhecida pelo mercado</h3>
      <div class="flex flex-row gap-6 mx-auto flex-wrap items-center sm:hidden">
        <img
          v-for="{ alt, id, src } of topOfSales('white')"
          :key="id"
          :src="src"
          :alt="alt"
          class="h-20 md:h-16 mx-auto"
        />
      </div>
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
