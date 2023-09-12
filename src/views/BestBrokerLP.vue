<template>
  <div class="bg-black w-full text-white overflow-x-hidden">
    <section
      class="min-h-[600px] bestBrokerHeroImg pt-96 px-5 flex flex-col items-stretch gap-5 py-10 text-center"
    >
      <div class="w-full flex justify-center">
        <img
          src="/images/bestBroker/logoBestBrokerWhite.png"
          class="w-fit h-fit"
          alt=""
        />
      </div>
      <h1 class="text-4xl">
        O curso definitivo para se tornar expert em
        <span class="text-[#D0FE42]">Crédito Imobiliário</span>
      </h1>
      <p class="text-2xl">
        Pare de perder vendas e aumente os seus lucros mensais através do
        financiamento imobiliário e do Home Equity.
      </p>

      <div class="w-full flex justify-center">
        <div class="relative w-fit h-fit">
          <img src="/images/bestBroker/Rectangle89.svg" alt="" />
          <div
            class="absolute inset-0 flex flex-col justify-center gap-4 py-8 px-4"
          >
            <p class="text-2xl">
              Se você deseja se destacar e transformar a sua vida, essa é a
              chance que você esperava.
            </p>
            <button
              class="border border-[#D0FE42] px-6 py-4 rounded-xl text-4xl"
            >
              Descubra o Best Broker
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="px-5 py-10 flex flex-col gap-5 items-center">
      <img
        src="/images/bestBroker/productBox.png"
        class="w-auto h-fit mx-auto"
        alt=""
      />
      <p class="text-3xl text-center">
        Uma preparação completa para o Corretor que quer aumentar seus lucros
        através das Ferramentas Financerias
      </p>
      <ul class="flex flex-row flex-wrap gap-4 items-center justify-center">
        <li
          v-for="{ icon, id, text } of includedTools"
          :key="id"
          class="border-2 border-[#D0FE42] rounded px-8 py-3 shadow-md shadow-[#D0FE4260] flex flex-row items-center gap-4"
        >
          <i :class="icon"></i>
          <span>
            {{ text }}
          </span>
        </li>
      </ul>
    </section>

    <section class="flex flex-col w-full items-center relative z-0">
      <!-- <div class=" h-fit "> -->
        <img
          src="/images/bestBroker/gasparMottaProfile.png"
          alt=""
          srcset=""
          class="absolute z-0 w-5/6"
        />
        <div class="flex flex-col w-full gap-4 pt-80 text-center z-10 px-5">
          <p class="text-3xl">
            Ministrado por Gaspar Motta, o maior
            <span class="text-[#D0FE42]">
              especialista em crédito imobiliário
            </span>
            da atualidade e CEO da SejaBest
          </p>
          <p class="text-2xl">
            Tendo em sua carreira já estruturado mais de
            <span class="text-[#D0FE42]">
              R$1 bilhão em créditos.
            </span>
          </p>
        </div>
      <!-- </div> -->
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BestBrokerLP',
  data() {
    return {
      includedTools: [
        {
          id: 1,
          icon: 'fa-solid fa-video',
          text: 'Videoaulas',
        },
        {
          id: 2,
          icon: 'fa-solid fa-star',
          text: 'Cases de sucesso',
        },
        {
          id: 3,
          icon: 'fa-solid fa-lightbulb',
          text: 'Dicas rápidas',
        },
        {
          id: 4,
          icon: 'fa-solid fa-table',
          text: 'Parceria garantida',
        },
        {
          id: 5,
          icon: 'fa-solid fa-table',
          text: 'Planilhas e Checklists',
        },
        {
          id: 6,
          icon: 'fa-solid fa-square-pen',
          text: 'Tutoriais',
        },
      ],
    }
  },
})
</script>
<style lang="scss">
.bestBrokerHeroImg {
  background-image: url('/images/bestBroker/heroImage.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
