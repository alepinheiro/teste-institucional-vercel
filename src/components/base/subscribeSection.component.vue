<template>
  <section
    :class="{
      'bg-primary': component.bgColor === 'PRIMARY',
      'bg-secondary': component.bgColor === 'SECONDARY',
      'bg-bgDarkColor': component.bgColor === 'BGDARKCOLOR',
    }"
    class="w-full py-20 sm:pt-20 sm:pb-4 xl:pb-0 lg:pb-0 bg-bgDarkColor"
  >
    <div
      class="max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto w-full flex flex-col gap-12 sm:gap-8"
    >
      <div class="text-white text-center flex flex-col gap-4 sm:gap-4 w-10/12 mx-auto">
        <h2 class="text-4xl sm:text-2xl font-bold">
          {{
            'Simule agora completamente de graça.'.replace(
              /\s([^\s<]+)\s*$/,
              '\u00A0$1',
            )
          }}
        </h2>
        <p class="text-base">
          <b>
            Simule gratuitamente em mais de 20 bancos e encontre a melhor opção
            de crédito para suas necessidades.</b
          >
          Com a Bext, você terá seu próprio assessor dedicado para
          simplificar todo o processo relacionado ao crédito imobiliário.
          Deixe-nos guiar você rumo à melhor escolha para o seu momento
          financeiro.
        </p>
      </div>

      <div class="flex flex-row items-center ">
        <div
          class="w-5/12 flex flex-grow justify-end md:hidden sm:hidden"
        >
          <img
            :src="`/images/components/forms/subscribe/${image}.png`"
            alt=""
            class="mb-0 mt-auto"
          />
        </div>
        <div class="w-7/12 lg:w-7/12 md:w-full sm:w-full lg:mx-auto px-5 pb-8">
          <SimulationForm :show-home-equity="form.showRealtyValue" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SimulationForm from '@/components/base/forms/startSimulation.component.vue'

defineProps<{
  component: {
    bgColor: 'PRIMARY' | 'SECONDARY' | 'BGDARKCOLOR'
  }
  form: {
    showRealtyValue: boolean
  }
  image: 'gaspar' | 'gabrielle'
}>()
</script>
