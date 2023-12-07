<template>
  <section class="bg-bgDarkColor">
    <div class="flex flex-col gap-5 text-white px-5 text-center">
      <h2 class="text-2xl font-bold">
        Como podemos ajudar você ou seu negócio?
      </h2>
      <p>São diversos produtos pensados para a sua necessidade:</p>
    </div>
    <component :is="'swiper-container'" v-bind="sliderOptions" class="pb-12 pt-8">
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
              :key="item.icon"
              class="flex flex-row gap-2 items-center"
            >
              <div class="h-8 w-8 bg-primary rounded shrink-0"></div>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="item.text"></p>
            </li>
          </ul>

          <div class="flex flex-row items-center gap-2 text-sm">
            <a href="#" class="bg-complementaryColor1 px-3 py-2 rounded ">
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
const sliderOptions: SwiperOptions = {
  spaceBetween: 20,
  slidesPerView: 1.2,
  centeredSlides: true,
  autoHeight: false,
  pagination: true,
  autoplay: {
    delay: 8000,
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
        icon: 'percent',
        text: 'Taxas a partir de <b> 9,70% a.a. </b> + indexadores.',
      },
      {
        icon: 'calendar',
        text: 'Pagamento flexível em até <b>420 meses.</b>',
      },
      {
        icon: 'building',
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
        icon: 'percent',
        text: 'Taxas a partir de <b>1,09% a.m.</b> + indexadores.',
      },
      {
        icon: 'calendar',
        text: 'Escolha o prazo: pague em até <b>240 meses.</b>',
      },
      {
        icon: 'dollarSign',
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
        icon: 'percent',
        text: 'Crédito a partir de <b>1,59% a.m.</b> + taxas.',
      },
      {
        icon: 'calendar',
        text: 'Pague em até 60 meses. <b>Você escolhe.</b>',
      },
      {
        icon: 'dollarSign',
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
        icon: 'percent',
        text: 'Taxas a partir de <b>1,49% a.m.</b> + indexadores.',
      },
      {
        icon: 'calendar',
        text: 'Pagamento em até <b>60 meses ou 5 anos.</b>',
      },
      {
        icon: 'dollarSign',
        text: 'Financie carros novos ou até seminovos.',
      },
    ],
    utm: getUtm('product-card-bestCarFinan'),
    moreInformation: '#',
  },
]
</script>
