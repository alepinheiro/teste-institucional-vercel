<template>
  <section class="bg-bgDarkColor">
    <div class="flex flex-col lg:flex-row-reverse xl:flex-row-reverse gap-5 text-white px-5 xl:px-0 md:max-w-2xl lg:max-w-5xl xl:max-w-7xl md:mx-auto lg:mx-auto xl:mx-auto xl:justify-between">
      <div class="hidden md:flex lg:flex xl:flex flex-row w-3/5 lg:w-5/12 xl:w-1/2 mx-auto items-center gap-3 xl:justify-end">
        <img
          v-for="{ alt, id, source } of seals"
          :key="id"
            :src="`/images/Home/seals/light/${source}`"
            :alt="alt"
            class="h-13"
          />
      </div>
      <div class="flex flex-col gap-5 lg:gap-3 xl:gap-3 text-white xl:px-0 text-center lg:text-left xl:text-left lg:w-7/12 xl:w-1/2">
        <h2 class="text-2xl md:text-3xl lg:text-3xl font-bold">
          Como podemos ajudar você ou seu negócio?
        </h2>
        <p class="md:text-xl text-textSecondary">
          São diversos produtos pensados para a sua necessidade:
        </p>
      </div>
    </div>
    <component
      :is="'swiper-container'"
      v-bind="sliderOptions"
      class="pb-12 pt-8 xl:pt-20 xl:max-w-7xl"
    >
      <component
        :is="'swiper-slide'"
        v-for="{ title, description, features } of steps"
        :key="title"
        class="bg-secondary text-white py-8 px-4 rounded-lg mb-16 h-auto"
      >
        <div class="flex flex-col gap-4 justify-between h-full">
          <h3 class="text-2xl font-bold">
            {{ title }}
          </h3>

          <p>
            {{ description }}
          </p>

          <hr class="border-white" />

          <ul class="flex flex-col gap-4">
            <li
              v-for="item of features"
              :key="item.text"
              class="flex flex-row gap-2 items-center"
            >
              <div class="h-8 w-8 bg-primary rounded shrink-0">
                <component :is="item.icon" class="w-full h-full p-1" />
              </div>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="item.text"></p>
            </li>
          </ul>

          <div class="flex flex-row items-center gap-2 text-sm">
            <a href="#" class="bg-complementaryColor1 px-3 py-2 rounded">
              Simule grátis
            </a>
            <a href="#" class="underline">Saiba mais</a>
          </div>
        </div>
      </component>
    </component>
  </section>
</template>
<script lang="ts" setup>
import { SwiperOptions } from 'swiper/types'
import { markRaw } from 'vue'
import PercentIcon from '@/components/homePage/icons/percentIcon.component.vue'
import CalendarIcon from '@/components/homePage/icons/calendarIcon.component.vue'
import BuildingIcon from '@/components/homePage/icons/buildingIcon.component.vue'
import DollarSignIcon from '@/components/homePage/icons/dollarSign.component.vue'
import DollarBagIcon from '@/components/homePage/icons/dollarBag.component.vue'
import CarIcon from '@/components/homePage/icons/carIcon.component.vue'

const sliderOptions: SwiperOptions = {
  spaceBetween: 20,
  slidesPerView: 1.2,
  centeredSlides: true,
  autoHeight: false,
  pagination: true,
  autoplay: {
    delay: 8000,
  },
  breakpoints: {
    767: {
      slidesPerView: 2.5,
    },
    1021: {
      slidesPerView: 3.5,
    },
    1277: {
      slidesPerView: 4.5,
    },
    1919: {
      slidesPerView: 4,
      centeredSlides: false,
    }
  },
}

const getUtm = (medium: string) => {
  return new URLSearchParams({
    utm_source: 'institucional-seja-best',
    utm_medium: medium,
    utm_campaign: 'home-page-dez-23',
  })
}

const steps = [
  {
    title: 'Financiamento Imobiliário',
    description:
      'Financie seu imóvel com as melhores taxas e os melhores prazos.',
    features: [
      {
        icon: markRaw(PercentIcon),
        text: 'Taxas a partir de <b> 9,70% a.a. </b> + indexadores.',
      },
      {
        icon: markRaw(CalendarIcon),
        text: 'Pagamento flexível em até <b>420 meses.</b>',
      },
      {
        icon: markRaw(BuildingIcon),
        text: 'Financie em mais de <b>20 bancos parceiros.</b>',
      },
    ],
    utm: getUtm('product-card-finanBest'),
    moreInformation: '#',
  },
  {
    title: 'Crédito com Garantia de Imóvel',
    description: 'Use seu imóvel quitado como garantia para conseguir crédito.',
    features: [
      {
        icon: markRaw(PercentIcon),
        text: 'Taxas a partir de <b>1,09% a.m.</b> + indexadores.',
      },
      {
        icon: markRaw(CalendarIcon),
        text: 'Escolha o prazo: pague em até <b>240 meses.</b>',
      },
      {
        icon: markRaw(DollarSignIcon),
        text: 'Até <b>60% do valor</b> do imóvel como capital.',
      },
    ],
    utm: getUtm('product-card-cashBest'),
    moreInformation: '#',
  },
  {
    title: 'Crédito com Veículo de garantia',
    description: 'Use seu carro, caminhão ou utilitário como garantia.',
    features: [
      {
        icon: markRaw(PercentIcon),
        text: 'Crédito a partir de <b>1,59% a.m.</b> + taxas.',
      },
      {
        icon: markRaw(CalendarIcon),
        text: 'Pague em até 60 meses. <b>Você escolhe.</b>',
      },
      {
        icon: markRaw(DollarBagIcon),
        text: 'Use seu crédito como <b>você quiser.</b>',
      },
    ],
    utm: getUtm('product-card-bestCar'),
    moreInformation: '#',
  },
  {
    title: 'Financiamento Veicular',
    description: 'Simule on-line e grátis e financie o carro dos seus sonhos.',
    features: [
      {
        icon: markRaw(PercentIcon),
        text: 'Taxas a partir de <b>1,49% a.m.</b> + indexadores.',
      },
      {
        icon: markRaw(CalendarIcon),
        text: 'Pagamento em até <b>60 meses ou 5 anos.</b>',
      },
      {
        icon: markRaw(CarIcon),
        text: 'Financie carros novos ou até seminovos.',
      },
    ],
    utm: getUtm('product-card-bestCarFinan'),
    moreInformation: '#',
  },
]

const seals = [
  {
    id: 1,
    source: 'seal02.png',
    alt: 'Campeão de vendas CashMe 2022 - 2023',
  },
  {
    id: 2,
    source: 'seal03.png',
    alt: 'Campeão de vendas Daycoval 2022',
  },
  {
    id: 3,
    source: 'seal01.png',
    alt: 'Top 5 Home Equity Banco Inter',
  },
]
</script>

<style lang="scss" scoped>
::part(bullet) {
  background: #d9d9d9;
  opacity: 100;
}
::part(bullet-active) {
  @apply scale-150 transition-all bg-primary;
}
</style>
