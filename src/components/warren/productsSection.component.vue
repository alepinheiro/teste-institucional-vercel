<template>
  <section class="px-5 text-center flex flex-col gap-5">
    <h2 class="font-bold text-3xl text-[#333131]">
      Os melhores produtos de crédito da SejaBest agora na Warren
    </h2>
    <p class="text-[#757680]">
      <b>Escolha a opção</b> que melhor se encaixa nas suas <b>necessidades:</b>
    </p>
    <component :is="'swiper-container'" v-bind="sliderOptions" class="w-full">
      <component
        :is="'swiper-slide'"
        v-for="{ id, description, options, title } of slides"
        :key="id"
        class=" bg-white p-5 rounded-2xl border block mb-12"
      >
        <div class="flex flex-col gap-5 items-start text-start ">
          <h3 class="text-3xl font-bold text-[#333131]">
            {{ title }}
          </h3>
          <p class="text-[#807C7B] text-xs">
            {{ description }}
          </p>
          <hr class="border border-[#E5E7EB] w-full">
          <div class="flex flex-col gap-2">
            <div v-for="option of options" :key="option.id" class="flex flex-row gap-2">
                <i :class="option.icon"></i>
                <span class="text-[#807C7B] text-xs">{{ option.description }}</span>
            </div>
          </div>
        </div>
      </component>
    </component>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { SwiperOptions } from 'swiper/types'

export default defineComponent({
  name: 'ProductsSection',
  setup() {
    const sliderOptions: SwiperOptions = {
      spaceBetween: 20,
      slidesPerView: 'auto',
      pagination: true,
      autoHeight: true,
      breakpoints: {
        1280: {
          slidesPerView: 4,
        },
      },
    }

    return {
      sliderOptions,
    }
  },
  data() {
    const slides = [
      {
        id: 1,
        title: 'Financiamento Imobiliário',
        description:
          'Financie seu imóvel com as melhores taxas e os melhores prazos.',
        options: [
          {
            id: 1,
            icon: 'fa-solid fa-foldwifi',
            description: 'Taxas a partir de 9,70% a.a. + indexadores.',
          },
          {
            id: 2,
            icon: 'fa-solid fa-safari',
            description: 'Pagamento flexível em até 420 meses.',
          },
          {
            id: 3,
            icon: 'fa-solid fa-safari',
            description: 'Financie em mais de 20 bancos parceiros.',
          },
        ],
      },
      {
        id: 2,
        title: 'Crédito com Garantia de Imóvel',
        description:
          'Use seu imóvel quitado como garantia para conseguir crédito.',
        options: [
          {
            id: 1,
            icon: 'fa-solid fa-safari',
            description: 'Taxas a partir de 1,09% a.m. + indexadores.',
          },
          {
            id: 2,
            icon: 'fa-solid fa-safari',
            description: 'Escolha o prazo: pague em até 240 meses.',
          },
          {
            id: 3,
            icon: 'fa-solid fa-safari',
            description: 'Até 60% do valor do imóvel como capital.',
          },
        ],
      },
      {
        id: 3,
        title: 'Crédito com Veículo de garantia',
        description:
          'Use seu carro, caminhão ou utilitário como garantia.',
        options: [
          {
            id: 1,
            icon: 'fa-solid fa-safari',
            description: 'Crédito a partir de 1,59% a.m. + taxas.',
          },
          {
            id: 2,
            icon: 'fa-solid fa-safari',
            description: 'Pague em até 60 meses. Você escolhe.',
          },
          {
            id: 3,
            icon: 'fa-solid fa-safari',
            description: 'Use seu crédito como você quiser.',
          },
        ],
      },
      {
        id: 4,
        title: 'Financiamento Veicular',
        description:
          'Simule on-line e grátis e financie o carro dos seus sonhos.',
        options: [
          {
            id: 1,
            icon: 'fa-solid fa-safari',
            description: 'Taxas a partir de 1,49% a.m. + indexadores.',
          },
          {
            id: 2,
            icon: 'fa-solid fa-safari',
            description: 'Pagamento em até 60 meses ou 5 anos.',
          },
          {
            id: 3,
            icon: 'fa-solid fa-safari',
            description: 'Financie carros novos ou até seminovos.',
          },
        ],
      },
    ]
    return {
      slides,
    }
  },
})
</script>
