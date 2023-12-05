<template>
  <section class="px-5 text-center flex flex-col gap-5">
    <h2 class="font-bold text-3xl text-[#333131]">
      Os melhores produtos de crédito da SejaBest agora na Warren
    </h2>
    <p class="text-[#757680]">
      <b>Escolha a opção</b> que melhor se encaixa nas suas <b>necessidades:</b>
    </p>
    <div class="relative z-0">
      <component
        :is="'swiper-container'"
        id="productSliderWarren"
        v-bind="sliderOptions"
        class="w-full"
      >
        <component
          :is="'swiper-slide'"
          v-for="{ id, description, options, title } of slides"
          :key="id"
          class="bg-white p-5 rounded-2xl block mb-14 pb-4"
        >
          <div class="flex flex-col gap-5 items-start text-start">
            <h3 class="text-2xl font-bold text-[#333131]">
              {{ title }}
            </h3>
            <p class="text-[#807C7B] text-xs">
              {{ description }}
            </p>
            <hr class="border border-[#E5E7EB] w-full" />
            <div class="flex flex-col gap-2">
              <div
                v-for="option of options"
                :key="option.id"
                class="flex flex-row gap-2 items-center"
              >
                <img
                  :src="`/images/warren/icons/${option.icon}.svg`"
                  :alt="option.description"
                  srcset=""
                  class="w-7 h-7 object-contain"
                />
                <span class="text-[#807C7B] text-xs">{{
                  option.description
                }}</span>
              </div>
            </div>
            <a href="#" class="flex flex-row items-center gap-2 text-[#C7452D]">
              <span> Simule grátis </span>
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </component>
      </component>
      <div
        class="absolute bottom-3 h-fit flex flex-row justify-between w-full z-10"
      >
        <button class="wNavigationPrev w-5 h-5">
          <svg
            width="20"
            height="20"
            class="fill-[#757680] hover:fill-[#C7452D] transition-all"
          >
            <path
              d="m9.12 7.259-1.837 1.99H15v1.5H7.282l1.839 1.992-1.103 1.018-2.687-2.911a1.25 1.25 0 0 1 0-1.696l2.687-2.91 1.103 1.017Z"
            />
            <path
              fill-rule="evenodd"
              d="M0 9.938C0 16.149 3.077 20 10.06 20 16.922 20 20 16.15 20 9.938 20 3.602 16.923 0 10.06 0 3.076 0 0 3.602 0 9.938ZM10.06 18.5c-3.221 0-5.284-.882-6.558-2.232C2.213 14.903 1.5 12.816 1.5 9.938c0-2.947.716-4.99 1.988-6.3C4.75 2.335 6.81 1.5 10.059 1.5c3.182 0 5.212.831 6.463 2.133C17.784 4.945 18.5 6.99 18.5 9.938c0 2.878-.713 4.969-1.992 6.335-1.261 1.349-3.295 2.227-6.449 2.227Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button class="wNavigationNext">
          <svg
            width="20"
            height="20"
            class="fill-[#757680] hover:fill-[#C7452D] transition-all rotate-180"
          >
            <path
              d="m9.12 7.259-1.837 1.99H15v1.5H7.282l1.839 1.992-1.103 1.018-2.687-2.911a1.25 1.25 0 0 1 0-1.696l2.687-2.91 1.103 1.017Z"
            />
            <path
              fill-rule="evenodd"
              d="M0 9.938C0 16.149 3.077 20 10.06 20 16.922 20 20 16.15 20 9.938 20 3.602 16.923 0 10.06 0 3.076 0 0 3.602 0 9.938ZM10.06 18.5c-3.221 0-5.284-.882-6.558-2.232C2.213 14.903 1.5 12.816 1.5 9.938c0-2.947.716-4.99 1.988-6.3C4.75 2.335 6.81 1.5 10.059 1.5c3.182 0 5.212.831 6.463 2.133C17.784 4.945 18.5 6.99 18.5 9.938c0 2.878-.713 4.969-1.992 6.335-1.261 1.349-3.295 2.227-6.449 2.227Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
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
      autoplay: {
        delay: 3000,
      },
      pagination: {
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}"></span>`
        },
      },
      navigation: {
        enabled: true,
        prevEl: '.wNavigationPrev',
        nextEl: '.wNavigationNext',
      },
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
            icon: 'percent',
            description: 'Taxas a partir de 9,70% a.a. + indexadores.',
          },
          {
            id: 2,
            icon: 'calendar',
            description: 'Pagamento flexível em até 420 meses.',
          },
          {
            id: 3,
            icon: 'buildingColumns',
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
            icon: 'percent',
            description: 'Taxas a partir de 1,09% a.m. + indexadores.',
          },
          {
            id: 2,
            icon: 'calendar',
            description: 'Escolha o prazo: pague em até 240 meses.',
          },
          {
            id: 3,
            icon: 'dollarSign',
            description: 'Até 60% do valor do imóvel como capital.',
          },
        ],
      },
      {
        id: 3,
        title: 'Crédito com Veículo de garantia',
        description: 'Use seu carro, caminhão ou utilitário como garantia.',
        options: [
          {
            id: 1,
            icon: 'percent',
            description: 'Crédito a partir de 1,59% a.m. + taxas.',
          },
          {
            id: 2,
            icon: 'calendar',
            description: 'Pague em até 60 meses. Você escolhe.',
          },
          {
            id: 3,
            icon: 'dollarBag',
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
            icon: 'percent',
            description: 'Taxas a partir de 1,49% a.m. + indexadores.',
          },
          {
            id: 2,
            icon: 'calendar',
            description: 'Pagamento em até 60 meses ou 5 anos.',
          },
          {
            id: 3,
            icon: 'car',
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

<style lang="scss" scoped>
swiper-container {
  &::part(pagination) {
    @apply absolute inset-x-0 flex flex-row items-center gap-5 w-auto justify-center z-10 bottom-3;
  }

  &::part(bullet) {
    @apply inline-block rounded-full w-3 h-3 transition-all;
    background: #d9d9d9;
  }

  &::part(bullet-active) {
    @apply inline-block w-5 h-5 rounded-full transition-all;
    background: #c7452d;
  }
}
</style>
