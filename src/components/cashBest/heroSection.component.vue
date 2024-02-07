<template>
  <section>
    <div class="absolute top-0 inset-x-0 -z-10 pl-16 h-64 md:hidden">
      <img
        src="/images/cashBest/heroSectionGaspar.png"
        class="object-bottom h-full w-full object-cover"
        alt=""
      />
    </div>
    <div class="pt-48 md:pt-12 px-5 flex flex-col gap-5 md:gap-8 md:max-w-2xl mx-auto">
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
          class="md:hidden"
          @submit="onSubmit"
        />
        <DoubleInputsForm
          v-model="doubleFormData"
          class="bg-[#efeaea] px-12 py-8 rounded-2xl"
          @submit="onSubmit"
        />
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
