<template>
  <section>
    <div
      class="flex flex-col max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto w-full md:min-h-screen justify-center"
    >
      <img
        src="/images/Home/heroBackground-sm.png"
        class="aspect-square min-md:hidden"
        alt=""
      />
      <img
        src="/images/Home/heroBackground-min-lg.png"
        class="aspect-square hidden min-lg:block absolute inset-x-0 h-screen object-contain lg:-right-64 ml-auto -mt-32 -z-10"
        alt=""
      />
      <div
        class="flex flex-col gap-5 min-md:gap-10 items-center min-lg:w-8/12 min-lg:mr-auto xl:items-start lg:items-start text-center xl:text-left lg:text-left -mt-24 min-md:mt-0 md:pt-20 px-5"
      >
        <!-- <div class="flex flex-col gap-5 min-md:gap-8 w-full lg:w-8/12 xl:w-1/2"> -->
        <h1
          class="text-3xl min-md:text-5xl font-bold font-darkerGrotesque text-center text-textPrimary leading-7"
        >
          <span class="text-primary"> CashBest: </span>
          o melhor Crédito com Garantia de Imóvel do mercado
        </h1>

        <component
          :is="'swiper-container'"
          v-bind="sliderOptions"
          class="w-full"
        >
          <component
            :is="'swiper-slide'"
            v-for="{ description, icon, id } of cards"
            :key="id"
            class="cursor-default my-auto px-5 min-md:px-0 w-full"
          >
            <div class="flex flex-row gap-2 items-center w-fit mx-auto">
              <component :is="icon" class="text-primary flex-shrink-0" />
              <p
                class="text-textPrimary text-center text-sm md:text-left min-lg:text-base"
              >
                {{ description }}
              </p>
            </div>
          </component>
        </component>

        <DoubleInputsForm
          v-model="doubleFormData"
          class="bg-[#efeaea] p-4 min-md:px-12 min-md:py-8 rounded-2xl w-full"
          @submit="onSubmit"
        />
      </div>
      <!-- </div> -->
    </div>
  </section>
</template>

<script lang="ts" setup>
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

const doubleFormData = ref<{
  assetValue: number
  creditValue: number
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
