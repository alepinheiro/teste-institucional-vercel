<template>
  <section>
    <div
      class="relative z-0 xl:max-w-7xl mx-auto bg-[#DEDEDE] md:bg-inherit lg:bg-inherit xl:bg-inherit"
    >
      <div
        class="hidden min-md:block bg-gradient-to-b from-[#DEDEDE] absolute top-0 bottom-0 w-full inset-x-0 -z-10 rounded-xl md:rounded-none lg:rounded-none"
      ></div>
      <div
        class="lg:px-0 p-10 mx-auto flex flex-col lg:flex-row xl:flex-row items-center md:max-w-2xl lg:max-w-5xl"
      >
        <div
          class="flex flex-col gap-2 lg:gap-7 xl:gap-7 text-center md:text-left lg:text-left xl:text-left lg:w-5/12 xl:w-5/12"
        >
          <p class="text-textPrimary">
            A <b> Bext </b> já tem história no mercado.
          </p>
          <h2
            class="text-xl md:text-4xl lg:text-5xl xl:text-5xl md:text-textPrimary lg:text-textPrimary xl:text-textPrimary"
          >
            <strong> Há 10 anos </strong>
            transformamos o acesso ao crédito
          </h2>
        </div>
        <ul
          class="flex flex-row gap-2 md:gap-5 lg:gap-5 xl:gap-5 py-10 md:w-full lg:w-7/12 xl:w-7/12"
        >
          <li
            v-for="{ icon, title, description } in cards"
            :key="icon"
            class="p-3 w-1/3 flex-grow min-md:p-6 bg-white drop-shadow-lg min-md:shadow-2xl rounded-xl min-md:rounded-xl flex flex-col min-md:gap-3 lg:h-full"
          >
            <div class="w-4 h-4 md:h-7 md:w-7 lg:w-7 lg:h-7 xl:w-7 xl:h-7">
              <i
                :class="icon"
                class="text-textSecondary block w-full h-full"
              ></i>
            </div>
            <span
              class="font-bold text-xl md:text-5xl lg:text-5xl xl:text-5xl text-primary pb-2"
            >
              {{ title }}
            </span>
            <span
              class="text-sm text-textSecondary block min-md:text-xl leading-4"
            >
              {{ description }}
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
