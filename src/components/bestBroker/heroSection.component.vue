<template>
  <section
    class="w-full flex md:min-h-screen lg:min-h-screen xl:min-h-screen bestBrokerHeroBg"
  >
    <div
      class="flex sm:flex-col flex-row-reverse md:my-auto md:max-w-2xl mx-auto max-w-7xl relative"
    >
      <div class="sm:relative sm:h-80 flex px-5 w-1/2 sm:w-full z-0">
        <img
          src="/images/bestBroker/heroImageDesktop.png"
          class="hidden xl:block absolute inset-y-0 -right-[15%] h-full object-cover z-0"
          alt=""
        />
        <div
          class="sm:bg-black/50 rounded sm:flex flex-row items-center gap-4 py-4 px-6 w-fit m-auto z-10 h-fit sm:mb-5"
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
          <span class="font-bold font-Public-Sans text-base sm:block hidden">
            Toque aqui e assista agora uma palavra do CEO
          </span>
        </div>
      </div>

      <div
        class="w-1/2 sm:w-full flex flex-col gap-12 sm:text-center px-5 sm:py-18 z-10 my-auto"
      >
        <img
          src="/images/bestBroker/logoBestBrokerWhite.png"
          class="sm:mx-auto ml-0 w-3/5 py-5"
          alt=""
        />

        <div class="flex flex-col gap-5">
          <h1 class="text-4xl">
            O <b>curso definitivo</b> para se tornar expert em
            <span class="text-[#D0FE42] font-bold">Crédito Imobiliário</span>
          </h1>

          <p class="text-2xl text-[#D4D4D4] leading-relaxed mx-auto">
            Pare de perder vendas e aumente os seus lucros mensais através do
            financiamento imobiliário e do Home Equity.
          </p>
        </div>

        <div class="h-full w-full lg:max-w-sm sm:mx-auto">
          <GradientBackground
            :height="'100%'"
            :width="'100%'"
            :color="'#D0FE42'"
            :angle="getBackgroundAngle"
            :content-class="'flex flex-col gap-8 sm:justify-center justify-start w-fit p-5 text-center xl:text-left lg:text-left cursor-default'"
          >
            <template #content>
              <p class="text-2xl w-fit sm:mx-auto font-bold leading-relaxed">
                Se você deseja se destacar e transformar a sua vida, essa é a
                chance que você esperava.
              </p>
              <a
                v-scroll-to="{
                  el: '#comprar',
                  duration: 1000,
                  lazy: false,
                  easing: 'linear',
                  offset: -100,
                  force: true,
                  cancelable: true,
                  x: false,
                  y: true,
                }"
                href="#"
                class="px-6 py-4 rounded-xl text-2xl font-bold font-Public-Sans bg-[#D0FE42] text-black hover:border-white w-fit mx-auto xl:ml-0 lg:ml-0 hover:shadow-[#D0FE4260] hover:scale-105 hover:shadow-xl transition-all"
              >
                Descubra o Best Broker
              </a>
            </template>
          </GradientBackground>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import GradientBackground from '@/components/bestBroker/gradientBackground.component.vue'
export default defineComponent({
  name: 'HeroSection',
  components: { GradientBackground },
  data() {
    return {
      windowInnerWidth: 360,
    }
  },
  computed: {
    getBackgroundAngle() {
      if (this.windowInnerWidth < 667) {
        return 180
      } else if (
        this.windowInnerWidth >= 668 &&
        this.windowInnerWidth <= 1023
      ) {
        return 90
      } else if (
        this.windowInnerWidth >= 1024 &&
        this.windowInnerWidth <= 1279
      ) {
        return 90
      } else {
        return 90
      }
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowInnerWidth = window.innerWidth
    })
  },
})
</script>
