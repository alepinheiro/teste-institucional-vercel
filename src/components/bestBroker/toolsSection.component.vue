<template>
  <section
    class="w-full bg-gradient-to-b from-black to-transparent py-18 border-b-2 border-[#D0FE42]"
  >
    <div
      class="flex flex-col gap-12 w-full text-center lg:max-w-5xl xl:max-w-5xl lg:mx-auto xl:mx-auto"
    >
      <h2 class="text-3xl px-5 max-w-5xl md:max-w-2xl mx-auto">
        Aprenda tudo sobre as
        <span class="text-[#D0FE42] font-bold"> Ferramentas Financeiras </span>
        que estão transformando o jeito de monetizar operações
      </h2>

      <div class="w-full sm:px-5 md:px-5">
        <swiper-container id="toolsSlider" :="swiperParams" class="w-full">
          <swiper-slide class="relative z-0 mb-6">
            <img
              src="/images/bestBroker/financialTools1.png"
              class="absolute inset-0 object-cover -z-10 w-full"
              alt=""
              srcset=""
            />

            <div
              class="flex flex-col gap-2 text-left py-4 px-8 mx-auto z-10 pt-48"
            >
              <h3 class="text-3xl text-[#D0FE42] font-bold">
                Financiamento Imobiliário
              </h3>
              <p class="w-full">
                Nos últimos anos o financiamento imobiliário tem crescido cada
                vez mais. Só em 2022 foram financiados 715 mil imóveis,
                levantando o valor total de R$179 bilhões de reais. Esses
                financiamentos correspondem a 70% das vendas de imóveis no
                Brasil.
              </p>
            </div>
          </swiper-slide>

          <swiper-slide class="relative z-0 mb-6">
            <img
              src="/images/bestBroker/financialTools2.png"
              class="absolute inset-0 object-cover -z-10 w-full"
              alt=""
              srcset=""
            />

            <div
              class="flex flex-col gap-2 text-left py-4 px-8 mx-auto z-10 pt-48"
            >
              <h3 class="text-3xl text-[#D0FE42] font-bold">Home Equity</h3>
              <p class="w-full">
                Permite utilizar um imóvel para obter parte do valor dele como
                crédito sem finalidade específica: quitar dívidas, investir ou
                para capital de giro, por exemplo. Possui as menores taxas do
                mercado e o melhor retorno financeiro.
              </p>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>

      <a
        v-scroll-to="{
          el: '#comprar',
          duration: 300,
          lazy: false,
          easing: 'linear',
          offset: -100,
          force: true,
          cancelable: true,
          x: false,
          y: true
        }"
        class="uppercase text-2xl px-10 w-fit mx-auto py-6 border-2 border-[#D0FE42] rounded-xl font-bold hover:bg-[#D0FE42] transition-all px-5 duration-300 hover:border-white hover:text-black"
        href="#"
      >
        Quero ser um Corretor 360°
      </a>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { SwiperOptions } from 'swiper/types'

export default defineComponent({
  name: 'ToolsSection',
  setup() {
    const swiperParams: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1279: {
          slidesPerView: 2,
        },
      },
    }
    return {
      swiperParams,
    }
  },
  data() {
    return {}
  },
})
</script>
