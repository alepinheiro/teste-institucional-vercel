<template>
  <section>
    <div
      class="flex flex-col max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto w-full min-md:min-h-screen justify-center"
    >
    <div class="absolute inset-x-0 top-48 md:hidden lg:right-1/4 lg:top-[65vh] xl:right-1/3 xl:top-auto ">
        <VideoButton video-id="eDWFe4Wrb2A" class="xl:mr-0 lg:mr-0"  />
      </div>
      <img
        src="/images/Home/heroBackground-sm.png"
        class="aspect-square min-md:hidden object-cover"
        alt=""
      />
      <img
        src="/images/Home/heroBackground-xl.png"
        class="hidden xl:block absolute inset-x-0 h-[95vh] object-contain -right-48 ml-auto -mt-12 -z-10"
        alt=""
      />
      <img
        src="/images/Home/heroBackground-lg.png"
        class="hidden lg:block absolute inset-x-0 h-[95vh] object-contain -right-24 ml-auto -mt-12 -z-10"
        alt=""
      />

      <div
        class="flex flex-col gap-5 min-md:gap-10 items-center lg:w-8/12 xl:w-1/2 min-lg:mr-auto min-lg:items-start text-center xl:text-left lg:text-left -mt-16 min-md:mt-0 min-md:pt-20 min-md:pb-10 px-5"
      >
        <h1
          class="text-3xl min-md:text-5xl font-bold font-darkerGrotesque text-center text-textPrimary leading-7 lg:text-left"
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
          class="bg-[#EFEFEF] p-4 min-md:px-12 min-md:py-8 rounded-2xl w-full lg:mr-8"
          @submit="onSubmit"
        />
        <a
          href="#"
          v-scroll-to="'#businessPartners'"
          class="flex gap-2 justify-between w-fit mx-auto text-textSecondary pt-10 hover:underline"
        >
          <i class="fa-solid fa-chevron-down animate-bounce"></i>
          <span class="text-xs"
            >Ou saiba mais sobre o CashBest rolando para baixo</span
          >
        </a>
      </div>
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
import VideoButton from '@/components/base/videoButton.component.vue'
import { ref } from 'vue'

defineProps<{
  showMenu: boolean
}>()

const doubleFormData = ref<{
  assetValue: number
  creditValue: number
}>({
  assetValue: 500000,
  creditValue: 250000,
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
