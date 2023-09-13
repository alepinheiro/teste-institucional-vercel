<template>
  <section class="sm:pt-40 pt-12 py-10 w-full bestBrokerHeroBg">
    <div class="max-w-5xl md:max-w-2xl mx-auto">
      <div class="w-1/2 sm:w-full flex flex-col gap-4 sm:text-center px-5">
        <img
          src="/images/bestBroker/logoBestBrokerWhite.png"
          class="sm:mx-auto ml-0 w-3/5"
          alt=""
        />

        <h1 class="text-4xl">
          O <b>curso definitivo</b> para se tornar expert em
          <span class="text-[#D0FE42] font-bold">Crédito Imobiliário</span>
        </h1>

        <p class="text-2xl text-[#D4D4D4] leading-relaxed sm:w-4/5 mx-auto">
          Pare de perder vendas e aumente os seus lucros mensais através do
          financiamento imobiliário e do Home Equity.
        </p>

        <div
          class="flex flex-col sm:justify-center justify-start gap-4 bgGradientToBottom w-fit p-5 max-w-[22rem] sm:max-w-sm lg:max-w-sm text-center sm:mx-auto"
        >
          <p class="text-base w-fit sm:mx-auto">
            Se você deseja se destacar e transformar a sua vida, essa é a chance
            que você esperava.
          </p>
          <button
            class="px-6 py-4 rounded text-xl font-bold font-Public-Sans bg-[#D0FE42] text-black hover:border-white w-fit mx-auto"
          >
            Descubra o Best Broker
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HeroSection',
  data() {
    return {}
  },
})
</script>
