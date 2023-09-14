<template>
  <section class="sm:pt-48 pt-12 py-10 w-full bestBrokerHeroBg">
    <div class="max-w-7xl md:max-w-2xl mx-auto relative">
      <div class="sm:hidden absolute right-1/4 bottom-1/2">
        <button
          class="relative w-16 h-16 bg-zinc-200 rounded-full mx-auto flex justify-center items-center z-0"
          @click="false"
        >
          <div
            class="absolute bg-zinc-200 rounded-full inset-0 animate-ping z-0"
          ></div>
          <div class="flex z-10 text-black">
            <i class="fa-solid fa-play"></i>
          </div>
        </button>
      </div>

      <div class="w-1/2 sm:w-full flex flex-col gap-4 sm:text-center px-5">
        <div
          class="bg-black/50 rounded sm:flex flex-row items-center gap-4 py-4 px-6 w-fit sm:mx-auto mr-auto hidden"
        >
          <button
            class="relative w-8 h-8 bg-zinc-200 rounded-full mx-auto flex justify-center items-center z-0"
            @click="false"
          >
            <div
              class="absolute bg-zinc-200 rounded-full inset-0 animate-ping z-0"
            ></div>
            <div class="flex m-auto">
              <i class="fa-solid fa-play z-10 text-black"></i>
            </div>
          </button>
          <span class="font-bold font-Public-Sans text-sm">
            Toque aqui e assista agora uma palavra do CEO
          </span>
        </div>

        <img
          src="/images/bestBroker/logoBestBrokerWhite.png"
          class="sm:mx-auto ml-0 w-3/5 py-5"
          alt=""
        />

        <h1 class="text-4xl">
          O <b>curso definitivo</b> para se tornar expert em
          <span class="text-[#D0FE42] font-bold">Crédito Imobiliário</span>
        </h1>

        <p class="text-2xl text-[#D4D4D4] leading-relaxed sm:w-5/6 mx-auto">
          Pare de perder vendas e aumente os seus lucros mensais através do
          financiamento imobiliário e do Home Equity.
        </p>

        <!-- <div
          class=" bgGradientToBottom "
        >

        </div> -->
        <div class="h-full w-full">
          <GradientBackgroundComponent
            :height="'100%'"
            :width="'100%'"
            :color="'#D0FE42'"
            :angle="90"
            :content-class="'flex flex-col sm:justify-center justify-start gap-4 w-fit p-5 max-w-[22rem] sm:max-w-sm lg:max-w-sm text-center xl:text-left lg:text-left sm:mx-auto'"
          >
            <template #content>
              <p class="text-base w-fit sm:mx-auto">
                Se você deseja se destacar e transformar a sua vida, essa é a
                chance que você esperava.
              </p>
              <button
                class="px-6 py-4 rounded text-xl font-bold font-Public-Sans bg-[#D0FE42] text-black hover:border-white w-fit mx-auto xl:ml-0 lg:ml-0"
              >
                Descubra o Best Broker
              </button>
            </template>
          </GradientBackgroundComponent>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import GradientBackgroundComponent from '@/components/bestBroker/gradientBackground.component.vue'
export default defineComponent({
  name: 'HeroSection',
  components: { GradientBackgroundComponent },
  data() {
    return {}
  },
})
</script>
