<template>
  <section
    class="bg-bgDarkColor w-full flex pt-10 relative min-h-screen sm:pt-0 overflow-hidden z-0"
  >
    <div class="absolute inset-x-0 h-fit top-0 flex justify-center z-20">
      <Topbar class="w-full max-w-7xl lg:max-w-5xl px-5 mb-auto pt-4" />
    </div>
    <iframe
      width="100%"
      height="120%"
      src="https://www.youtube.com/embed/tpJ20737xJ4?autoplay=1&mute=1&loop=1&playlist=tpJ20737xJ4"
      title="Quais são as diferenças entre financiamento imobiliário do banco e da construtora?"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      class="absolute sm:-top-[0%] inset-0 -z-10 -top-14 sm:hidden opacity-40"
    ></iframe>
    <div class="max-w-7xl mx-auto text-white mt-16 border w-full flex">
      <div class="flex flex-row mt-auto items-center justify-between w-full">
        <div class="w-7/12 flex-grow">
          <h1>CashBest: o Crédito com Garantia de Imóvel da SejaBest</h1>
          <p>
            Descubra as melhores taxas do mercado: a partir de 1.09% a.m. + IPCA
            ou 1.49% a.m. fixa. Com a possibilidade de liberar até 60% do valor
            do seu imóvel como capital para usar como desejar, e ainda contar
            com um prazo de até 20 anos para pagamento.
          </p>
        </div>
        <div class="w-5/12 flex-grow">
          <InputWithSlider :slider-props="sliderProps" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Topbar from '@/components/structure/topbar.component.vue'
import InputWithSlider from '@/components/finanBestLp/inputWithSlider.component.vue'
const sliderProps = {
  minimumValue: 50000,
  maximumValue: 30000000,
  defaultValue: 50000,
}
</script>
