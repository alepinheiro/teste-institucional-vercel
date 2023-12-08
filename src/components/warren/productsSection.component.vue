<template>
  <section class="py-10 text-center flex flex-col gap-16 bg-warren-hintOfRed">
    <div
      class="text-center flex flex-col gap-5 px-5 lg:w-4/6 xl:w-4/6 mx-auto lg:max-w-5xl"
    >
      <h2
        class="font-bold text-3xl text-warren-darkCharcoal md:text-5xl lg:text-5xl xl:text-5xl"
      >
        Os melhores produtos de crédito da SejaBest agora na Warren
      </h2>
      <p class="text-warren-stormGray">
        <b>Escolha a opção</b> que melhor se encaixa nas suas
        <b>necessidades:</b>
      </p>
    </div>

    <div class="relative z-0 px-5 md:px-0 lg:px-0 xl:px-0">
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
          class="bg-white py-10 px-5 rounded-2xl block mb-14 h-auto md:w-96 lg:w-96 xl:w-96"
        >
          <div
            class="flex flex-col gap-5 items-start text-start h-full justify-between"
          >
            <h3 class="text-2xl font-bold text-warren-darkCharcoal">
              {{ title }}
            </h3>
            <p class="text-warren-grey">
              {{ description }}
            </p>
            <hr class="border border-warren-solitude w-full" />
            <div class="flex flex-col gap-8">
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
                <!--  eslint-disable-next-line vue/no-v-html -->
                <span class="text-warren-grey" v-html="option.description">
                </span>
              </div>
            </div>
            <a
              :href="`${information.appSimulator}${$root.utms}`"
              target="_blank"
              class="flex flex-row items-center gap-2 text-warren-terracota font-bold"
            >
              <span> Simule grátis </span>
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </component>
      </component>
      <div class="absolute bottom-3 h-fit flex inset-x-0 z-[1] px-5 w-full">
        <div class="w-5/6 flex flex-row justify-between mx-auto">
          <button
            class="wNavigationPrev w-5 h-5"
            aria-label="Anterior"
            aria-controls="previous"
          >
            <svg
              width="20"
              height="20"
              class="fill-warren-stormGray hover:fill-warren-terracota transition-all"
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
          <button
            class="wNavigationNext"
            aria-label="Próximo"
            aria-controls="next"
          >
            <svg
              width="20"
              height="20"
              class="fill-warren-stormGray hover:fill-warren-terracota transition-all rotate-180"
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
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { SwiperOptions } from 'swiper/types'
import information from '@/configurations/information'

export default defineComponent({
  name: 'ProductsSection',
  setup() {
    const sliderOptions: SwiperOptions = {
      spaceBetween: 20,
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 6000,
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
        668: {
          slidesPerView: 2.5,
          centeredSlides: true,
          loop: false,
        },
        1024: {
          slidesPerView: 3.5,
          centeredSlides: true,
          loop: false,
        },
        1280: {
          slidesPerView: 4,
          centeredSlides: true,
          loop: false,
        },
      },
    }

    return {
      sliderOptions,
      information,
    }
  },
  data() {
    const slides = [
      {
        id: 'card-financiamento-imobiliario',
        title: 'Financiamento Imobiliário',
        description:
          'Financie seu imóvel com as melhores taxas e os melhores prazos.',
        options: [
          {
            id: 1,
            icon: 'percent',
            description: 'Taxas a partir de <b>9,70% a.a.</b> + indexadores.',
          },
          {
            id: 2,
            icon: 'calendar',
            description: 'Pagamento flexível em até <b>420 meses.</b>',
          },
          {
            id: 3,
            icon: 'buildingColumns',
            description: 'Financie em mais de <b>20 bancos parceiros.</b>',
          },
        ],
      },
      {
        id: 'card-credito-com-garantia-de-imovel',
        title: 'Crédito com Garantia de Imóvel',
        description:
          'Use seu imóvel quitado como garantia para conseguir crédito.',
        options: [
          {
            id: 1,
            icon: 'percent',
            description: 'Taxas a partir de <b>1,09% a.m.</b> + indexadores.',
          },
          {
            id: 2,
            icon: 'calendar',
            description: 'Escolha o prazo: pague em até <b>240 meses.</b>',
          },
          {
            id: 3,
            icon: 'dollarSign',
            description: 'Até <b>60% do valor</b> do imóvel como capital.',
          },
        ],
      },
      {
        id: 'credito-com-garantia-de-veiculo',
        title: 'Crédito com Veículo de garantia',
        description: 'Use seu carro, caminhão ou utilitário como garantia.',
        options: [
          {
            id: 1,
            icon: 'percent',
            description: 'Crédito a partir de <b>1,59% a.m.</b> + taxas.',
          },
          {
            id: 2,
            icon: 'calendar',
            description: 'Pague em até 60 meses.<b> Você escolhe.</b>',
          },
          {
            id: 3,
            icon: 'dollarBag',
            description: 'Use seu crédito como <b>você quiser.</b>',
          },
        ],
      },
      {
        id: 'financiamento-veicular',
        title: 'Financiamento Veicular',
        description:
          'Simule on-line e grátis e financie o carro dos seus sonhos.',
        options: [
          {
            id: 1,
            icon: 'percent',
            description: 'Taxas a partir de <b>1,49% a.m.</b> + indexadores.',
          },
          {
            id: 2,
            icon: 'calendar',
            description: 'Pagamento em até <b>60 meses ou 5 anos.</b>',
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
    @apply inline-block rounded-full w-3 h-3 transition-all bg-zinc-300;
  }

  &::part(bullet-active) {
    @apply inline-block w-4 h-4 rounded-full transition-all bg-warren-terracota;
  }
}
</style>
