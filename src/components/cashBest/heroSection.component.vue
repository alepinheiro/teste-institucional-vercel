<template>
  <section
    class="bg-bgDarkColor w-full flex py-10 relative min-h-screen sm:pt-0 overflow-hidden z-0"
  >
    <div
      v-if="showMenu"
      class="absolute inset-x-0 h-fit top-0 flex justify-center z-20 w-full xl:bg-[#070e3730] xl:backdrop-blur-md lg:bg-[#070e3730] lg:backdrop-blur-md xl:shadow-sm lg:shadow-sm"
    >
      <TopBar class="w-full xl:max-w-7xl lg:max-w-5xl px-5 mb-auto pt-4 text-white" />
    </div>

    <div class="absolute inset-0 z-0 overflow-hidden flex sm:h-1/2 md:h-2/3">
      <img
        src="/images/cashBest/heroBackgroundXl.png"
        alt=""
        class="object-cover mx-auto"
      />
    </div>

    <div
      class="relative xl:max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto mt-16 w-full flex pb-0 md:pb-8 lg:pb-16 xl:pb-16 flex-col gap-4 px-5 z-0 justify-end"
    >
      <VideoButton
        :video-id="'eDWFe4Wrb2A'"
        class="absolute flex sm:top-18 md:top-48 lg:top-1/3 top-1/3 inset-x-0"
      />
      <div
        class="flex flex-row md:flex-col sm:flex-col mt-auto items-center justify-between w-full gap-4 lg:gap-12 xl:gap-12 sm:mt-40"
      >
        <div
          class="w-full lg:w-1/2 flex-grow flex flex-col gap-3 text-white"
        >
          <h1 class="text-4xl sm:text-3xl md:text-4xl font-bold leading-snug">
            <span
              class="relative z-0 after:absolute after:bg-secondary after:-inset-0.5 after:content-[''] after:-z-10 mr-2"
            >
              CashBest:
            </span>
            <br class="hidden lg:block">
            {{'o Crédito com Garantia de Imóvel da SejaBest'.replace(/\s([^\s<]+)\s*$/,'\u00A0$1')}}
          </h1>
          <p class="sm:text-justify text-xl">
            Taxas a partir de 1.02% a.m + IPCA ou 1.49% a.m Fixa.
            <b>
              Libere até 60% do valor do seu imóvel como capital,
            </b>
            use como quiser com até 240X para pagar.
          </p>
        </div>
        <div class="lg:w-1/2 w-full flex-grow">
          <InputWithSlider :props="sliderProps" @submit="openSimulation" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import TopBar from '@/components/structure/topBar/index.component.vue'
import VideoButton from '@/components/bestHub/videoButton.component.vue'
import InputWithSlider from '@/components/base/forms/inputWithSlider.component.vue'
import information from '@/configurations/information'

defineProps<{
  showMenu: boolean
}>()

const sliderProps = {
  minimumValue: 50000,
  maximumValue: 15000000,
  defaultValue: 350000,
  backgroundColor: '#FFFFFF20',
  title: 'De quanto você está precisando?',
}

const utm = new URLSearchParams({
  utm_source: 'institucional-seja-best',
  utm_medium: 'hero-section-cashbest',
  utm_campaign: 'landing-pages-dez-23',
})

const openSimulation = () => {
  window.open(`${information.appSimulator}?${utm.toString()}`, '_blank')
}
</script>
