<template>
  <section class="w-full">
    <div
      class="flex flex-col w-full items-center py-10 px-5 md:max-w-3xl max-w-7xl mx-auto">
      <h2 class="text-center text-2xl">
        As melhores instituições financeiras na
        <b class="text-[#D0FE42]"> palma da sua mão </b>
      </h2>

      <div
        class="flex sm:flex-col-reverse md:flex-col-reverse sm:gap-4 flex-row justify-between w-full lg:py-20 xl:py-20">
        <div
          class="sm:w-full w-2/5 md:w-full lg:w-1/2 xl:w-1/2 lg:px-5 md:px-5 flex flex-col gap-4 justify-center">
          <p
            class="leading-8 sm:px-5 text-center text-base lg:text-left xl:text-left">
            Com mais de 10 anos de experiência em crédito Imobiliário, a Bext
            reuniu um time de ponta para desenvolver uma ferramenta poderosa e
            capaz de fintechizar o seu negócio. Mais de 200 parceiros já
            confiaram na capacidade do BestHub, utilizando nossos recursos para
            potencializar seus negócios.
          </p>
          <button
            class="text-black sm:text-center text-lg font-bold px-5 py-3 rounded-xl font-hover transition-all bg-[#D0FE42] mt-5 font-sans hover:-translate-y-1 w-fit sm:mx-auto md:mx-auto"
            @click="openLink()">
            Quero ser um parceiro Best
          </button>
        </div>

        <div
          class="flex flex-col gap-5 sm:mx-auto md:w-4/6 m-auto lg:w-1/2 xl:w-1/2 lg:px-12 xl:px-16 sm:py-10 md:py-10">
          <div
            v-for="line in banks"
            :key="line.toString()"
            class="flex flex-row gap-2 odd:ml-auto">
            <span
              v-for="{ id, text, logo } of line"
              :key="id"
              :class="
                text === 'hiddenText'
                  ? 'text-white/0 select-none bg-gradient-to-r odd:first:bg-gradient-to-l from-white/10 to-transparent max-w-[2.5rem]'
                  : 'bg-white/10 min-w-[4rem] hover:bg-[#5F5F5F] transition-all'
              "
              class="rounded-xl px-3 min-h-[3rem] flex">
              <img
                :src="`/images/bestHub/icons/banks/${logo}.svg`"
                :alt="text"
                loading="lazy"
                class="my-auto mx-auto h-10 py-2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { links } from '@/configurations/information';
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
              id: 12,
              text: 'bancoBV',
              logo: 'logoBvWhite',
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
              id: 17,
              text: 'bradesco',
              logo: 'logoBradescoWhite',
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
              id: 13,
              text: 'c6Bank',
              logo: 'logoC6BankWhite',
            },

            {
              id: 2,
              text: 'santander',
              logo: 'logoSantanderWhite',
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
              id: 5,
              text: 'creditas',
              logo: 'logoCreditasWhite',
            },

            {
              id: 7,
              text: 'inter',
              logo: 'logoInterWhite',
            },
            {
              id: 9,
              text: 'itau',
              logo: 'logoItauWhite',
            },
            {
              id: 17,
              text: 'hiddenText',
              logo: 'blank',
            },
          ],
        ],
      };
    },
    methods: {
      openLink() {
        window.open(links.bestHub.register + this.$root.utms, '_blank');
      },
    },
  });
</script>
