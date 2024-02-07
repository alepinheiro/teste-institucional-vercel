<template>
  <section>
    <div
      class="min-lg:flex absolute -z-10 min-lg:-top-[20rem] min-lg:left-1/2 w-[60rem] hidden"
    >
      <img
        src="/images/cashBest/heroSectionGaspar.png"
        class="h-full w-full object-contain pl-5"
        alt=""
      />
    </div>
    <div class="min-md:hidden -mt-4/6  mb-0  flex ">
      <img
        src="/images/cashBest/heroSectionGaspar.png"
        class="h-full w-full object-cover object-left ml-1/12 flex-shrink-0"
        alt=""
      />
    </div>
    <div
      class="md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto items-start px-5"
    >
      <div class="flex flex-col gap-5 min-md:gap-8 w-full lg:w-8/12 xl:w-1/2">
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
                class="text-textSecondary text-center text-sm md:text-left min-lg:text-base"
              >
                {{ description }}
              </p>
            </div>
          </component>
        </component>

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
