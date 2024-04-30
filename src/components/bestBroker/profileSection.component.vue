<template>
  <section class="w-full">
    <div
      class="flex flex-col lg:flex-row xl:flex-row w-full py-18 md:max-w-2xl mx-auto max-w-7xl z-0 border-b border-[#D0FE42]"
    >
      <div
        class="relative flex-1 flex-grow w-full h-full sm:pt-96 md:pt-96 z-0 flex"
      >
        <img
          src="/images/bestBroker/gasparMottaProfile.png"
          alt=""
          srcset=""
          class="absolute inset-0 mx-auto z-0"
        />
        <div class="w-full z-10 mb-0 px-5">
          <p class="text-3xl  lg:hidden xl:hidden text-center">
          Ministrado por <b>Gaspar Motta</b>, o maior
          <span class="text-[#D0FE42]">
            especialista em crédito imobiliário
          </span>
          da atualidade e <b>CEO da Bext</b>
        </p>
        </div>
      </div>
      <div
        class="flex-1 flex flex-col w-full gap-4 px-5 z-10 text-center lg:text-right xl:text-right"
      >
        <p class="text-3xl hidden lg:block xl:block">
          Ministrado por <b>Gaspar Motta</b>, o maior
          <span class="text-[#D0FE42]">
            especialista em crédito imobiliário
          </span>
          da atualidade e <b>CEO da Bext</b>
        </p>
        <p class="text-2xl py-6">
          Tendo em sua carreira já estruturado mais de
          <span class="text-[#D0FE42] font-bold">
            R$1 bilhão em créditos.
          </span>
        </p>
        <GradientBackground
          :height="'100%'"
          :width="'100%'"
          :color="'#D0FE42'"
          :angle="getBackgroundAngle"
          :content-class="'flex flex-col gap-8 sm:justify-center justify-start w-fit p-5 text-center xl:text-left lg:text-left cursor-default'"
        >
          <template #content>
            <div class="flex flex-col gap-4 px-5 text-lg lg:text-right xl:text-right">
              <p>
                Com mais de 10 anos de experiência com produtos financeiros, tem
                conhecimento dos processos de todos os maiores bancos e
                instituições do país, incluindo:
              </p>
              <img src="/images/bestBroker/banks.png" class="w-full hover:mix-blend-screen hover:scale-105 transition-all ease-in-out duration-700 " alt="" />
            </div>
          </template>
        </GradientBackground>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import GradientBackground from '@/components/bestBroker/gradientBackground.component.vue'

export default defineComponent({
  name: 'ProfileSection',
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
        return 180
      } else if (
        this.windowInnerWidth >= 1024 &&
        this.windowInnerWidth <= 1279
      ) {
        return 270
      } else {
        return 270
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
