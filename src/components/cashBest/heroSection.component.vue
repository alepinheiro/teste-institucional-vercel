<template>
  <!-- <section
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
  </section> -->
  <section>
    <div class="absolute top-0 inset-x-0 -z-10 pl-16 h-64 md:hidden">
      <img
        src="/images/cashBest/heroSectionGaspar.png"
        class="object-bottom h-full w-full object-cover"
        alt=""
      />
    </div>
    <div class="pt-48 md:pt-12 px-5 flex flex-col gap-5 md:max-w-2xl mx-auto">
      <h1
        class="text-3xl md:text-5xl font-bold font-darkerGrotesque text-center text-textPrimary leading-7"
      >
        <span class="text-primary"> CashBest: </span>
        o melhor Crédito com Garantia de Imóvel do mercado
      </h1>

      <component
        :is="'swiper-container'"
        v-bind="sliderOptions"
        class="w-full px-5"
      >
        <component
          :is="'swiper-slide'"
          v-for="{ description, icon, id } of cards"
          :key="id"
          class="flex flex-row gap-2 items-center cursor-default my-auto"
        >
          <component :is="icon" class="text-primary flex-shrink-0" />
          <p class="text-textSecondary text-center text-sm md:text-left">
            {{ description }}
          </p>
        </component>
      </component>

      <div class="lg:w-1/2 w-full flex-grow text-textPrimary">
        <InputWithSlider
          :props="sliderProps"
          @submit="onSubmit"
          class="md:hidden"
        />
        <DoubleInputsForm
          v-model="doubleFormData"
          class="bg-[#efeaea] px-12 py-8 rounded-2xl"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// import TopBar from '@/components/structure/topBar/index.component.vue'
import VideoButton from '@/components/bestHub/videoButton.component.vue'
import InputWithSlider from '@/components/base/forms/inputWithSlider.component.vue'
import information from '@/configurations/information'
import PercentIcon from '@/assets/svg/percentWithBackground.vue'
import HouseIcon from '@/assets/svg/houseWithMoneySign.vue'
import CalendarIcon from '@/assets/svg/calendarWithClock.vue'
import DoubleInputsForm from '@/components/cashBest/heroForm.component.vue'
import type { SwiperOptions } from 'swiper/types'
import { ref } from 'vue'

defineProps<{
  showMenu: boolean
}>()

const sliderProps = {
  minimumValue: 50000,
  maximumValue: 15000000,
  defaultValue: 350000,
  backgroundColor: '#EFEFEF',
  title: 'De quanto você precisa?',
}

const doubleFormData = ref<{
  assetValue:  number
  creditValue:  number
}>({
  assetValue: 0,
  creditValue: 0,
})

const cards = [
  {
    id: 'percent',
    icon: PercentIcon,
    description: 'A partir de 1.09% a.m. + IPCA ou 1.49% a.m. fixa.',
  },
  {
    id: 'house',
    icon: HouseIcon,
    description: 'Até 60% do valor seu imóvel como crédito',
  },
  {
    id: 'calendar',
    icon: CalendarIcon,
    description: 'Escolha como pagar. Em até 20 anos.',
  },
]

const sliderOptions: SwiperOptions = {
  spaceBetween: 0,
  slidesPerView: 1,
  loop: true,
  autoHeight: false,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    667: {
      slidesPerView: 3,
      autoplay: false,
      spaceBetween: 20,
      loop: false,
    },
  },
}

const onSubmit = () => window.open(information.appSimulator, '_blank')
</script>
