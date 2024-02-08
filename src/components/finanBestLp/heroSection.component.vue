<template>
  <section class="w-full flex pt-0 min-md:pt-10 relative min-h-screen">
    <!-- <div
      class="absolute inset-x-0 h-fit top-0 flex justify-center z-20 w-full xl:bg-[#070e3730] xl:backdrop-blur-md lg:bg-[#070e3730] lg:backdrop-blur-md xl:shadow-sm lg:shadow-sm"
    >
      <TopBar
        class="w-full max-w-7xl lg:max-w-5xl px-5 mb-auto pt-4 text-primary"
      />
    </div> -->
    <div class="absolute inset-0 overflow-hidden z-0 flex items-end sm:h-2/3">
      <img
        src="/images/finanBest/heroSectionXL161123.png"
        alt=""
        class="hidden xl:block lg:block object-cover h-full ml-auto"
      />
      <img
        src="/images/finanBest/heroSectionMD161123.png"
        alt=""
        class="xl:hidden lg:hidden object-cover h-full w-full"
      />
    </div>
    <div
      class="relative max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto flex flex-row w-full z-10 py-0 min-md:py-12 px-0 min-md:px-5"
    >
      <!--  -->
      <div
        class="flex-1 lg:w-7/12 lg:flex-initial mt-auto mb-32 sm:bg-gradient-to-b sm:from-transparent sm:to-white"
      >
        <div
          class="bg-transparent min-hd:bg-white flex flex-col gap-6 md:gap-3 font-Public-Sans p-8 md:px-8 py-4 rounded-xl min-hd:shadow-lg h-full justify-end pt-40"
        >
          <h1
            class="min-md:text-5xl text-2xl text-primary leading-tight whitespace-pre-line"
          >
            <strong>FinanBest:</strong>
            Financie seu imóvel com a assessoria
            <strong>SejaBest</strong>
          </h1>
          <p class="text-base text-textPrimary text-justify">
            Financie seu imóvel com as melhores condições do mercado.
            <b
              >Sem filas, sem gerentes, sem complexidade e com um time de
              especialistas totalmente pronto pra lhe ajudar.</b
            >
          </p>
          <InputWithSlider
            v-model="formValue"
            :props="sliderProps"
            class=""
            @submit="openSimulation"
          />
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
import information from '@/configurations/information'
import { ref } from 'vue'

defineProps<{
  showMenu: boolean
}>()

const sliderProps = {
  minimumValue: 50000,
  maximumValue: 30000000,
  defaultValue: 350000,
  backgroundColor: 'var(--primaryColor)',
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
