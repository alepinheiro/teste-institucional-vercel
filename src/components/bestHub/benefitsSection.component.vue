<template>
  <section
    class="border-b border-[#D0FE42] flex flex-col items-center relative py-10"
  >
    <div class="sm:px-5 lg:px-5 max-w-5xl mx-auto w-full flex flex-col items-center">
      <p class="font-bold sm:w-3/4 mx-auto text-center">
        Uma plataforma completa para seu negócio.
      </p>
      <ul class="flex flex-row flex-wrap gap-4 my-8">
        <li
          v-for="{ id, icon, text } of benefits"
          :key="id"
          class="w-1/3 sm:w-fit flex-grow py-3 px-4 bg-white text-black rounded-xl"
        >
          <div class="w-fit mx-auto flex flex-row gap-2 items-center">
            <img :src="`/images/bestHub/icons/${icon}.svg`" alt="" />
            <span class="text-xl">
              {{ text }}
            </span>
          </div>
        </li>
      </ul>
      <div class="flex sm:flex-col flex-row items-center gap-4">
        <span class="font-bold text-2xl">A partir de</span>
        <div
          class="border-2 border-white/30 hover:border-[#D0FE42] shadow-lg hover:shadow-[#D0FE4240] px-6 py-4 rounded-2xl transition-all"
        >
          <div class="flex flex-row justify-center py-4">
            <span class="text-xl mt-auto mr-1">R$</span>
            <span class="text-5xl font-bold -mb-2">89</span>
            <span>,90</span>
          </div>
          <span> mensais no plano anual </span>
        </div>
        <a
          :href="$options.information.appBestHubPreRegister" target="_blank"
          class="px-4 py-2 bg-[#D0FE42] text-black rounded-2xl w-fit hover:-translate-y-1 transition-all font-sans"
        >
          Assine e seja Pro
        </a>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BenefitsSection',
  data() {
    return {
      benefits: [
        {
          id: 1,
          icon: 'whiteLabel',
          text: 'Plataforma white label',
        },
        {
          id: 2,
          icon: 'subscribe',
          text: 'Acompanhe os negócios',
        },
        {
          id: 1,
          icon: 'percent',
          text: 'Simulações em tempo real',
        },
        {
          id: 1,
          icon: 'banks',
          text: '+ de 15 bancos parceiros',
        },
      ],
    }
  },
})
</script>
