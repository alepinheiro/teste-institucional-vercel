<template>
  <section class="bg-primary w-full flex pt-10 relative min-h-screen sm:pt-0">
    <div class="absolute inset-x-0 h-fit top-0 flex justify-center z-20">
      <Topbar class=" w-full max-w-7xl lg:max-w-5xl px-5 mb-auto pt-4" />
    </div>
    <div class="absolute inset-0 overflow-hidden z-0 flex items-end sm:h-2/3">
      <img src="/images/finanBest/heroSectionXL161123.png" alt="" class="hidden xl:block lg:block object-cover h-full ml-auto">
      <img src="/images/finanBest/heroSectionMD161123.png" alt="" class=" xl:hidden lg:hidden object-cover h-full w-full">
    </div>
    <div class="max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto flex flex-row w-full z-10 py-12 sm:py-0 px-5 sm:px-0 relative">
      <!--  -->
      <div class="flex-1 lg:w-7/12 lg:flex-initial mt-auto sm:bg-gradient-to-b sm:from-transparent sm:to-bgDarkColor">
        <div
          class="bg-white sm:bg-transparent flex flex-col gap-6 sm:gap-2 md:gap-3 font-Public-Sans p-8 md:px-8 py-4 rounded-xl shadow-lg sm:h-full sm:justify-end sm:pt-40"
        >
          <h1 class="text-5xl sm:text-3xl sm:text-white text-primary leading-tight sm:drop-shadow ">
            <strong>FinanBest:</strong>
            Financie seu imóvel com a assessoria
            <strong>SejaBest</strong>
          </h1>
          <p class="text-base sm:text-white text-justify sm:leading-loose sm:drop-shadow">
            Financie seu imóvel com as melhores condições do mercado.
            <b
              >Sem filas, sem gerentes, sem complexidade e com um time de
              especialistas totalmente pronto pra lhe ajudar.</b
            >
          </p>
          <InputWithSlider v-model="formValue" :props="sliderProps" @submit="openSimulation"  />
        </div>
      </div>
      <!--  -->
      <div class="flex-1 xl:block lg:block hidden"></div>
      <!--  -->
    </div>
  </section>
</template>
<script lang="ts" setup>
import InputWithSlider from '@/components/base/forms/inputWithSlider.component.vue'
import Topbar from '@/components/structure/topbar.component.vue'
import information from '@/configurations/information';
import { ref } from 'vue';

const sliderProps = {
  minimumValue: 50000,
  maximumValue: 30000000,
  defaultValue: 350000,
  backgroundColor: '#0524DD',
  title: 'Quanto custa o seu sonho?',
}

const formValue = ref(0)

const utm = new URLSearchParams({
  utm_source: 'institucional-seja-best',
  utm_medium: 'hero-section-finanbest',
  utm_campaign: 'landing-pages-dez-23',
})

const openSimulation = () => {
  window.open(`${information.appSimulator}?${utm.toString()}`, '_blank')
}

</script>
