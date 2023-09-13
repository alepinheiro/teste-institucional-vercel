<template>
  <section class="w-full bg-gradient-to-b from-black to-transparent">
    <div
      class="flex flex-col gap-4 w-full text-center px-5 max-w-5xl md:max-w-2xl mx-auto"
    >
      <h2 class="text-3xl py-10">
        Aprenda tudo sobre as
        <span class="text-[#D0FE42] font-bold"> Ferramentas Financeiras </span>
        que estão transformando o jeito de monetizar operações
      </h2>

      <div class="w-full">
        <swiper-container
          :slides-per-view="1"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :space-between="30"
          :loop="true"
          :pagination="true"
          :breakpoints="{
            320: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1.5,
              loop: true,
              spaceBetween: 30,
            },
            1279: {
              slidesPerView: 1.5,
              loop: true,
              spaceBetween: 30,
            },
          }"
          class="w-full"
        >
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

      <button
        class="px-6 w-fit mx-auto py-4 border-2 border-[#D0FE42] rounded-xl font-bold hover:bg-[#D0FE42] transition-all hover:border-white hover:text-black"
      >
        Quero ser um Corretor 360°
      </button>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { register } from 'swiper/element/bundle'
register()
export default defineComponent({
  name: 'ToolsSection',
  data() {
    return {}
  },
})
</script>
