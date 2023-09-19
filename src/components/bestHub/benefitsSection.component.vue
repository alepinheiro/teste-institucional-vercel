<template>
  <section
    class="border-b border-[#D0FE42] flex flex-col items-center relative py-10 w-full"
  >
    <div class="max-w-5xl mx-auto w-full flex flex-col items-center px-5">
      <h2 class="font-bold sm:w-3/4 mx-auto text-center text-3xl">
        Um <b class="text-[#D0FE42]">CRM</b> de crédito completo para o seu negócio.
      </h2>
      <ul class="flex flex-row flex-wrap gap-4 my-8 md:px-5">
        <li
          v-for="{ id, icon, title, description } of benefits"
          :key="id"
          class="p-5 w-1/3 md:w-1/3 sm:w-fit flex flex-col items-center justify-center flex-grow border border-white text-white rounded-xl"
        >
          <div class=" mx-auto flex flex-row gap-2 items-center h-fit w-auto pb-5">
            <img :src="`/images/bestHub/icons/${icon}.svg`" class="w-8 h-8 object-cover" alt="" />
            <h3 class="text-3xl my-auto flex-grow leading-none mt-3 md:mt-0 sm:text-2xl sm:text-center md:text-2xl md:text-center ">
              {{ title }}
            </h3>
          </div>
          <p class="text-xl text-center">
            {{ description }}
          </p>
        </li>
      </ul>
      <!-- <div class="flex sm:flex-col flex-row items-center gap-4">
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
      </div> -->
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
          title: 'Plataforma white label',
          description: 'Tanto a plataforma como os materiais saem com a cara e a cor da sua marca.',
        },
        {
          id: 2,
          icon: 'subscribe',
          title: 'Acompanhe os negócios',
          description: 'Uma área no estilo kanban para facilitar seu dia a dia.',
        },
        {
          id: 1,
          icon: 'percent',
          title: 'Simulações em tempo real',
          description: 'Mais agilidade para a sua rotina.',
        },
        {
          id: 1,
          icon: 'banks',
          title: '+ de 15 bancos parceiros',
          description: 'Uma plataforma multibancos com as maiores e melhores instituições ao seu dispor.',
        },
      ],
    }
  },
})
</script>
