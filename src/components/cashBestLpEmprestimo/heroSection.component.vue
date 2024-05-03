<template>
  <section>
    <div class="flex  mx-auto w-full min-md:min-h-screen justify-center">
      <div class="">
        <VideoButton video-id="eDWFe4Wrb2A" class="xl:mr-0 lg:mr-0" />
      </div>
      <img src="/images/Home/heroBackground-sm.png" class="aspect-square min-md:hidden object-cover" alt="" />
      <img src="/images/Home/heroBackground-xl.png"
        class="hidden xl:block absolute inset-0 h-screen object-contain -right-48 ml-auto -z-10" alt="" />
      x

      <div class="">
        <h1
          class="text-3xl min-md:text-6xl font-bold font-darkerGrotesque text-center text-textPrimary leading-7 lg:text-left xl:text-left">
          <span class="text-primary"> cashBext: </span>
          o melhor Empréstimo com Garantia de Imóvel do mercado
        </h1>

        <component :is="'swiper-container'" v-bind="sliderOptions" class="w-full sm:my-2">
          <component :is="'swiper-slide'" v-for="{ description, icon, id } of cards" :key="id"
            class="cursor-default my-auto px-5 min-md:px-0 w-full">
            <div class="flex flex-row gap-2 items-center w-fit mx-auto">
              <component :is="icon" class="text-primary flex-shrink-0" />
              <p class="text-textPrimary text-center text-sm md:text-left min-lg:text-base">
                {{ description }}
              </p>
            </div>
          </component>
        </component>

        <DoubleInputsForm v-model="doubleFormData"
          class="bg-[#EFEFEF] p-2  rounded-2xl   sm:w-11/12 w-9/12 md:w-full mx-auto" @submit="onSubmit" />
        <button v-scroll-to="'#businessPartners'"
          class="flex gap-2 justify-between w-fit mx-auto text-textSecondary pt-10 hover:underline">
          <i class="fa-solid fa-chevron-down animate-bounce"></i>
          <span class="text-xs">Ou saiba mais sobre o cashBext rolando para baixo</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import information from '@/configurations/information'
import PercentIcon from '@/assets/svg/percentWithBackground.vue'
import HouseIcon from '@/assets/svg/houseWithMoneySign.vue'
import CalendarIcon from '@/assets/svg/calendarWithClock.vue'
import DoubleInputsForm from '@/components/cashBext/heroForm.component.vue'
import type { SwiperOptions } from 'swiper/types'
import VideoButton from '@/components/base/videoButton.component.vue'
import { ref } from 'vue'
import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
import { useRoute } from 'vue-router'

defineProps<{
  showMenu: boolean
}>()

const route = useRoute()

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

const onSubmit = () => window.open(information.appSimulator + useObjectToQueryString(route.query), '_blank')
</script>
