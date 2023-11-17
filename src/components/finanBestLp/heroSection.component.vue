<template>
  <section class="bg-primary w-full flex py-10 relative md:min-h-screen">
    <div class="absolute inset-0 flex justify-center z-20">
      <Topbar class=" w-full max-w-7xl lg:max-w-6xl px-5 mb-auto pt-4" />
    </div>
    <div class="absolute inset-0 overflow-hidden z-0 flex items-end">
      <img src="/images/finanBest/heroSectionXL161123.png" alt="" class="hidden xl:block lg:block object-cover h-full ml-auto">
      <img src="/images/finanBest/heroSectionMD161123.png" alt="" class="hidden md:block object-cover h-full w-full">
    </div>
    <div class="max-w-7xl md:max-w-2xl mx-auto flex flex-row w-full z-10 pt-24 px-5 relative">
      <!--  -->
      <div class="flex-1 md:mt-auto">
        <div
          class="bg-white flex flex-col gap-6 md:gap-3 font-Public-Sans p-8 md:px-8 py-4 rounded-xl shadow-lg"
        >
          <h1 class="text-5xl md:text-4xl text-primary leading-tight text-justify">
            <strong>FinanBest:</strong>
            Financie seu imóvel com a assessoria
            <strong>SejaBest</strong>
          </h1>
          <p class="text-lg md:text-base text-justify">
            Financie seu imóvel com as melhores condições do mercado.
            <b
              >Sem filas, sem gerentes, sem complexidade e com um time de
              especialistas totalmente pronto pra lhe ajudar.</b
            >
          </p>
          <InputWithSlider :slider-props="sliderProps" />
          <div class="flex flex-row gap-2 text-textPrimary items-center md:mx-auto">
            <i class="fa-solid fa-chevron-down"></i>
            <p class="text-xs ">Ou saiba mais sobre o Financiamento Imobiliário da SejaBest rolando para baixo</p>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="flex-1 md:hidden"></div>
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
