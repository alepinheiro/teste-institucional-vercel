<template>
  <section class="w-full flex relative min-h-screen">
    <div class="absolute inset-0 overflow-hidden z-0 flex items-end sm:h-2/3">
      <img
        src="/images/finanBest/heroBgXL.png"
        alt=""
        class="hidden xl:block lg:block object-cover h-full ml-auto"
      />
      <img
        src="/images/finanBest/heroBgMD.png"
        alt=""
        class="xl:hidden lg:hidden object-cover h-full w-full"
      />
    </div>

    <div
      class="relative max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto flex flex-row w-full z-10 py-0 px-0 min-md:px-5"
    >
      <!--  -->
      <div
        class="lg:w-7/12 xl:w-5/12 lg:flex-initial min-md:mt-auto  md:pb-10 pb-20 pt-32 min-lg:pb-32 "
      >
        <div
          class="bg-gradient-to-b min-md:bg-gradient-to-t via-white from-transparent to-white/80 flex flex-col gap-6 p-8 xl:px-6 py-4 min-md:rounded-xl min-hd:shadow-lg h-full justify-end"
        >
          <h1
            class="min-lg:font-darkerGrotesque font-Public-Sans text-2xl md:text-4xl min-lg:text-6xl text-primary leading-tight whitespace-pre-line min-lg:font-bold"
          >
            <span class="min-lg:hidden">
              <b>FinanBest:</b>
              Financie seu imóvel com a assessoria
              <b>SejaBest</b>
            </span>
            <span class="hidden min-lg:block">
              FinanBest: Financie seu imóvel com a assessoria SejaBest
            </span>
          </h1>
          <!--  -->
          <p class="text-base text-textPrimary text-justify min-lg:hidden">
            Financie seu imóvel com as melhores condições do mercado.
            <b
              >Sem filas, sem gerentes, sem complexidade e com um time de
              especialistas totalmente pronto pra lhe ajudar.</b
            >
          </p>
          <!--  -->
          <div class="hidden min-lg:flex flex-row gap-4">
            <div
              v-for="{ description, icon, id } of cards"
              :key="id"
              class="flex flex-row gap-2 items-center mx-auto w-full"
            >
              <component :is="icon" class="text-primary flex-shrink-0" />
              <p class="text-textPrimary text-left text-base">
                {{ description }}
              </p>
            </div>
          </div>

          <hr class="border border-textSecondary hidden min-lg:block" />

          <InputWithSlider
            v-model="formValue"
            :props="smallScreensFormProps"
            class="min-lg:hidden"
            @submit="openSimulation"
          />

          <InputWithSlider
            v-model="formValue"
            :props="largeScreensFormProps"
            class="min-lg:flex hidden"
            @submit="openSimulation"
          />
        </div>
        <!--  -->
        <a
          href="#"
          v-scroll-to="'#businessPartners'"
          class="flex gap-2 justify-between w-fit mx-auto text-textSecondary pt-10 hover:underline"
        >
          <i class="fa-solid fa-chevron-down animate-bounce"></i>
          <span class="text-xs"
            >Ou saiba mais sobre o FinanBest rolando para baixo</span
          >
        </a>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import CalendarIcon from '@/assets/svg/calendarWithClock.vue'
import InputWithSlider from '@/components/base/forms/inputWithSlider.component.vue'
import PercentIcon from '@/assets/svg/percentWithBackground.vue'
import information from '@/configurations/information'
import { ref } from 'vue'

const smallScreensFormProps = {
  minimumValue: 50000,
  maximumValue: 30000000,
  defaultValue: 350000,
  backgroundColor: 'transparent',
  title: 'Quanto custa o seu sonho?',
}

const largeScreensFormProps = {
  minimumValue: 50000,
  maximumValue: 30000000,
  defaultValue: 350000,
  backgroundColor: 'transparent',
  title: 'Quanto custa o seu sonho?',
}

const formValue = ref(0)

const utm = new URLSearchParams({
  utm_source: 'institucional-seja-best',
  utm_medium: 'hero-section-finanbest',
  utm_campaign: 'landing-pages-dez-23',
})

const cards = [
  {
    id: 'percent',
    icon: PercentIcon,
    description: 'Taxas a partir de 9,70% a.a. + taxas referencial',
  },
  {
    id: 'calendar',
    icon: CalendarIcon,
    description: 'Page em até 420 meses',
  },
]

const openSimulation = () => {
  window.open(`${information.appSimulator}?${utm.toString()}`, '_blank')
}
</script>
