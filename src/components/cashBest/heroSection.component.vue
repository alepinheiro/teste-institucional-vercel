<template>
  <section>
    <div class="absolute -z-10 -right-72 -top-80 h-[65rem] flex">
      <img
        src="/images/cashBest/heroSectionGaspar.png"
        class="h-full w-full object-contain object-bottom"
        alt=""
      />
    </div>
    <div class="md:max-w-2xl lg:max-w-5xl mx-auto items-start">
      <div class="flex flex-col gap-5 md:gap-8 w-full lg:w-8/12">
        <h1
          class="text-3xl md:text-5xl lg:text-5xl font-bold font-darkerGrotesque text-center text-textPrimary leading-7"
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
            <p
              class="text-textSecondary text-center text-sm md:text-left lg:text-base"
            >
              {{ description }}
            </p>
          </component>
        </component>

        <div class="w-full flex-grow text-textPrimary">
          <InputWithSlider
            :props="sliderProps"
            class="md:hidden lg:hidden"
            @submit="onSubmit"
          />
          <DoubleInputsForm
            v-model="doubleFormData"
            class="bg-[#efeaea] px-12 py-8 rounded-2xl hidden md:block lg:block xl:block"
            @submit="onSubmit"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
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
