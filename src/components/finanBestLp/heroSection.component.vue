<template>
  <section class="bg-primary w-full flex pt-10 relative min-h-screen sm:pt-0">
    <div class="absolute inset-x-0 h-fit top-0 flex justify-center z-20">
      <Topbar class=" w-full max-w-7xl lg:max-w-6xl px-5 mb-auto pt-4" />
    </div>
    <div class="absolute inset-0 overflow-hidden z-0 flex items-end">
      <img src="/images/finanBest/heroSectionXL161123.png" alt="" class="hidden xl:block lg:block object-cover h-full ml-auto">
      <img src="/images/finanBest/heroSectionMD161123.png" alt="" class="hidden md:block sm:block object-cover h-full w-full">
    </div>
    <div class="max-w-7xl md:max-w-2xl mx-auto flex flex-row w-full z-10 py-12 sm:py-0 px-5 sm:px-0 relative sm:max-h-screen">
      <!--  -->
      <div class="flex-1 mt-auto sm:bg-gradient-to-b sm:from-transparent sm:to-bgDarkColor">
        <div
          class="bg-white sm:bg-transparent flex flex-col gap-6 sm:gap-2 md:gap-3 font-Public-Sans p-8 md:px-8 py-4 rounded-xl shadow-lg sm:h-full sm:justify-end"
        >
          <h1 class="text-5xl sm:text-lg sm:text-white md:text-4xl text-primary leading-tight text-justify sm:drop-shadow">
            <strong>FinanBest:</strong>
            Financie seu imóvel com a assessoria
            <strong>SejaBest</strong>
          </h1>
          <p class="text-lg sm:text-xs sm:text-white md:text-base text-justify sm:leading-loose sm:drop-shadow">
            Financie seu imóvel com as melhores condições do mercado.
            <b
              >Sem filas, sem gerentes, sem complexidade e com um time de
              especialistas totalmente pronto pra lhe ajudar.</b
            >
          </p>
          <InputWithSlider :slider-props="sliderProps" />
          <div class="flex flex-row gap-2 text-textPrimary items-center md:mx-auto sm:text-white sm:w-5/6 sm:mx-auto">
            <i class="fa-solid fa-chevron-down"></i>
            <p class="text-xs sm:text-2xs ">Ou saiba mais sobre o Financiamento Imobiliário da SejaBest rolando para baixo</p>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="flex-1 md:hidden sm:hidden"></div>
      <!--  -->
    </div>
  </section>
</template>
<script lang="ts" setup>
import InputWithSlider from '@/components/finanBestLp/inputWithSlider.component.vue'
import Topbar from '@/components/structure/topbar.component.vue'

const sliderProps = {
  minimumValue: 100000,
  maximumValue: 9999999,
  defaultValue: 250000,
}
</script>
