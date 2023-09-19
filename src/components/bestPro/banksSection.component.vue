<template>
  <section class="py-10">
    <div class="flex flex-col gap-8 w-full items-center ">
      <h2 class="text-center">As melhores instituições financeiras na <span class="text-[#D0FE42]">
        palma da sua mão
      </span>
    </h2>
      <div class="flex sm:flex-col-reverse sm:gap-4 flex-row justify-between w-full max-w-7xl">
        <div class="sm:w-full w-2/5 md:w-1/2 lg:w-1/2 lg:px-5 md:px-5 flex flex-col gap-4">
          <p class="leading-10 sm:px-5 text-justify ">
            Com mais de 10 anos de experiência em crédito Imobiliário, a SejaBest reuniu um time de ponta para desenvolver uma ferramenta poderosa e capaz de fintechizar o seu negócio. Mais de XX parceiros já confiaram na capacidade do BestPro, utilizando nossos recursos para potencializar seus negócios.
          </p>
          <button
              class="px-4 py-2 bg-[#D0FE42] text-black font-sans rounded w-fit mx-auto xl:ml-0 hover:-translate-y-1 transition-all"
            >
            Quero assinar o BestPro
            </button>
        </div>
        <div class="flex flex-col gap-5 sm:w-full w-2/5 md:w-1/2">
          <div
            v-for="line in banks"
            :key="line.toString()"
            class="flex flex-row gap-2 odd:ml-auto"
          >
            <span
              v-for="{ id, text, logo } of line"
              :key="id"
              :class="
                text === 'hiddenText'
                  ? 'text-white/0 select-none bg-gradient-to-r odd:first:bg-gradient-to-l from-white/10 to-transparent max-w-[2.5rem]'
                  : 'bg-white/10 min-w-[4rem] hover:bg-[#5F5F5F] transition-all'
              "
              class="rounded-xl px-3 min-h-[3rem] flex"
            >
              <img
                :src="`/images/bestPro/icons/banks/${logo}.svg`"
                :alt="text"
                class="my-auto mx-auto h-10 py-2"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BanksSection',
  data() {
    return {
      banks: [
        [
          {
            id: 14,
            text: 'hiddenText',
            logo: 'blank',
          },
          {
            id: 1,
            text: 'daycoval',
            logo: 'logoDaycovalWhite',
          },
          {
            id: 2,
            text: 'santander',
            logo: 'logoSantanderWhite',
          },
          {
            id: 3,
            text: 'hiddenText',
            logo: 'blank',
          },
        ],
        [
          {
            id: 4,
            text: 'hiddenText',
            logo: 'blank',
          },
          {
            id: 5,
            text: 'creditas',
            logo: 'logoCreditasWhite',
          },
          {
            id: 6,
            text: 'cashme',
            logo: 'logoCashMeWhite',
          },
          {
            id: 15,
            text: 'hiddenText',
            logo: 'blank',
          },
        ],
        [
          {
            id: 16,
            text: 'hiddenText',
            logo: 'blank',
          },
          {
            id: 7,
            text: 'inter',
            logo: 'logoInterWhite',
          },
          {
            id: 8,
            text: 'caixa',
            logo: 'logoCaixaWhite',
          },
          {
            id: 9,
            text: 'itau',
            logo: 'logoItauWhite',
          },
          {
            id: 10,
            text: 'hiddenText',
            logo: 'blank',
          },
        ],
        [
          {
            id: 11,
            text: 'hiddenText',
            logo: 'blank',
          },
          {
            id: 12,
            text: 'bradesco',
            logo: 'logoBradescoWhite',
          },
          {
            id: 13,
            text: 'c6Bank',
            logo: 'logoC6BankWhite',
          },
          {
            id: 17,
            text: 'hiddenText',
            logo: 'blank',
          },
        ],
      ],
    }
  },
})
</script>
