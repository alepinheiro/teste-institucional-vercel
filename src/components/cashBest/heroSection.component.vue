<template>
  <section
    class="bg-bgDarkColor w-full flex pt-10 relative min-h-screen sm:pt-0 overflow-hidden z-0 sm:h-screen"
  >
    <div class="absolute inset-x-0 h-fit top-0 flex justify-center z-20">
      <Topbar class="w-full xl:max-w-7xl lg:max-w-5xl px-5 mb-auto pt-4" />
    </div>

    <div class="absolute inset-0 z-0 overflow-hidden flex">
      <img
        src="/public/images/cashBest/heroBackgroundXl.png"
        alt=""
        class=" object-cover"
      />
    </div>

    <div
      class="xl:max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto mt-16 w-full flex pb-8 flex-col gap-4 px-5 z-10"
    >
      <div
        class="flex flex-row md:flex-col sm:flex-col mt-auto items-end justify-between w-full gap-3"
      >
        <div
          class="w-7/12 md:w-full sm:w-full flex-grow flex flex-col gap-3 text-white"
        >
          <h1 class="text-5xl md:text-4xl sm:text-xl font-bold leading-snug">
            <span
              class="relative z-0 after:absolute after:bg-secondary after:-inset-0.5 after:content-[''] after:-z-10 mr-2"
            >
              CashBest:
            </span>
            o Crédito com Garantia de Imóvel da SejaBest
          </h1>
          <p class="text-lg sm:text-xs">
            Descubra as melhores taxas do mercado: a partir de 1.09% a.m. + IPCA
            ou 1.49% a.m. fixa.
            <b>
              Com a possibilidade de liberar até 60% do valor do seu imóvel como
              capital
            </b>
            para usar como desejar, e ainda contar com um prazo de até 20 anos
            para pagamento.
          </p>
        </div>
        <div class="w-5/12 md:w-full sm:w-full flex-grow">
          <InputWithSlider :props="sliderProps" />
        </div>
      </div>
      <div
        class="flex flex-row gap-2 text-white items-center md:mx-auto sm:text-white sm:w-5/6 sm:mx-auto"
      >
        <i class="fa-solid fa-chevron-down"></i>
        <p class="text-xs sm:text-2xs underline underline-offset-4">
          Ou saiba mais sobre o Home Equity rolando para baixo
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Topbar from '@/components/structure/topbar.component.vue'
import InputWithSlider from '@/components/base/forms/inputWithSlider.component.vue'
const sliderProps = {
  minimumValue: 50000,
  maximumValue: 15000000,
  defaultValue: 350000,
  backgroundColor: '#FFFFFF20',
  title: 'De quanto você está precisando?',
}
</script>
