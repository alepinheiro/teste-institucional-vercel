<template>
  <section class="w-full py-10 bg-gradient-to-b from-black to-transparent border-b border-[#D0FE42]">
    <div class="max-w-2xl mx-auto">
      <img
        src="/images/bestBroker/bestHubNotebook.png"
        class="max-w-[700px] mx-auto sm:max-w-auto w-full"
        alt=""
        srcset=""
      />
      <div class="mx-auto w-full sm:-mt-10 px-5">
        <div
          class="flex sm:flex-col sm:gap-5 md:gap-5 items-center md:flex-row md:max-w-2xl max-w-5xl"
        >
          <img
            src="/images/bestBroker/logoBestHub.svg"
            class="mx-auto"
            alt=""
          />

          <h2 class="text-center text-xl py-5">
            Potencialize seus conhecimentos em um
            <span class="text-[#D0FE42]">CRM de crédito</span>
            completo para o seu negócio.
          </h2>
        </div>

        <div class="flex flex-row flex-wrap gap-4 py-5">
          <div
            v-for="{ description, icon, id, title } of bestHubCards"
            :key="id"
            class="border-1 border-[#D9D9D9] w-1/3 sm:w-full flex-grow p-4 rounded-xl my-0 flex flex-col justify-around gap-4"
          >
            <div class="flex flex-row gap-2 items-center w-fit mx-auto">
              <i :class="icon"></i>
              <h3 class="text-xl">{{ title }}</h3>
            </div>
            <p class="sm:text-center">{{ description }}</p>
          </div>
        </div>

        <div class="w-full text-center py-4">
          <button
            class="py-4 px-6 bg-[#C7C7C7] text-black text-xl font-bold rounded"
          >
            Conheça o BestHub
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BestHub',
  data() {
    return {
      bestHubCards: [
        {
          id: 1,
          icon: 'fa-solid fa-pen-to-square',
          title: 'Plataforma white label',
          description:
            'Tanto a plataforma como os materiais saem com a cara e a cor da sua marca.',
        },
        {
          id: 2,
          icon: 'fa-solid fa-shapes',
          title: 'Acompanhe os negócios',
          description:
            'Uma área no estilo kanban para facilitar seu dia a dia.',
        },
        {
          id: 3,
          icon: 'fa-solid fa-percent',
          title: 'Simulações em tempo real',
          description: 'Mais agilidade para a sua rotina.',
        },
        {
          id: 3,
          icon: 'fa-solid fa-building-columns',
          title: '+ de 15 bancos parceiros',
          description:
            'Uma plataforma multibancos com as maiores e melhores instituições ao seu dispor.',
        },
      ],
    }
  },
})
</script>
