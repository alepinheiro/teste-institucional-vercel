<template>
  <div class="bg-black w-full text-white overflow-x-hidden">
    <section
      class="min-h-[600px] bestBrokerHeroImg pt-96 px-5 flex flex-col gap-5 py-10 text-center"
    >
      <img
        src="/images/bestBroker/logoBestBrokerWhite.png"
        class="w-auto h-fit mx-auto"
        alt=""
      />
      <h1 class="text-4xl">
        O curso definitivo para se tornar expert em Crédito Imobiliário
      </h1>
      <p class="text-2xl">
        Pare de perder vendas e aumente os seus lucros mensais através do
        financiamento imobiliário e do Home Equity.
      </p>
      <div class="ctaBestBroker p-4 flex flex-col gap-4 py-8">
        <p>
          Se você deseja se destacar e transformar a sua vida, essa é a chance
          que você esperava.
        </p>
        <button class="border border-[#D0FE42] px-6 py-4 rounded-xl">
          Descubra o Best Broker
        </button>
      </div>
    </section>
    <section class="px-5 py-10 flex flex-col gap-5">
      <img
        src="http://unsplash.it/672/768?random&gravity=center"
        class="w-auto h-fit mx-auto"
        alt=""
      />
      <p class="text-3xl text-center">Uma preparação completa para o Corretor que quer aumentar seus lucros através das Ferramentas Financerias</p>
      <div class="flex flex-row flex-wrap gap-4 items-center justify-center">
        <div v-for="{ icon, id, text } of includedTools" :key="id" class="border-2 border-[#D0FE42] rounded px-8 py-3 shadow-md shadow-[#D0FE4260] ">
          {{ text }}
        </div>
      </div>
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
          icon: '',
          text: 'Videoaulas'
        },
        {
          id: 2,
          icon: '',
          text: 'Cases de sucesso'
        },
        {
          id: 3,
          icon: '',
          text: 'Dicas rápidas'
        },
        {
          id: 4,
          icon: '',
          text: 'Parceria garantida'
        },
        {
          id: 5,
          icon: '',
          text: 'Planilhas e Checklists'
        },
        {
          id: 6,
          icon: '',
          text: 'Tutoriais'
        }
      ]
    }
  },
})
</script>
<style lang="scss">
.bestBrokerHeroImg {
  background-image: url('http://unsplash.it/600/600?random&gravity=center');
  background-position: top;
  background-repeat: no-repeat;
  background-size: auto;
}

.ctaBestBroker {
  background-image: url('/images/bestBroker/Rectangle89.svg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
</style>
