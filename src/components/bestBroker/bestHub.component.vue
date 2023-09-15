<template>
  <section class="w-full py-10 bg-black border-b border-[#D0FE42]">
    <div class="md:max-w-2xl max-w-7xl mx-auto px-5">
      <div class="flex sm:flex-col md:flex-col flex-row">
        <div class="flex flex-col gap-5">
          <img
            src="/images/bestBroker/logoBestHub.svg"
            class="mx-auto"
            alt=""
          />
          <img
            src="/images/bestBroker/bestHubNotebook.png"
            class="mx-auto sm:max-w-auto w-full"
            alt=""
            srcset=""
          />
          <h2 class="text-center text-xl py-5">
            Potencialize seus conhecimentos em um
            <span class="text-[#D0FE42]">CRM de crédito</span>
            completo para o seu negócio.
          </h2>
          <div class="w-full text-center py-4">
            <button
              class="py-4 px-6 bg-[#C7C7C7] text-black text-sm font-bold rounded"
            >
              Conheça o BestHub
            </button>
          </div>
        </div>
        <div class="flex flex-row flex-wrap gap-4 py-5">
          <div
            v-for="{ description, icon, id, title } of bestHubCards"
            :key="id"
            class="border-1 border-[#D9D9D9] w-1/3 sm:w-1/3 flex-grow px-5 py-10 rounded-xl my-0 flex flex-col justify-around gap-4"
          >
            <div
              class="flex flex-row gap-2 items-center w-fit mx-auto sm:text-center"
            >
              <i :class="icon"></i>
              <h3 class="text-xl">{{ title }}</h3>
            </div>
            <p class="sm:text-center">{{ description }}</p>
          </div>
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
          id: 2,
          icon: 'fa-solid fa-shapes',
          title: 'Acompanhe os negócios',
          description:
            'Uma área no estilo kanban para facilitar seu dia a dia.',
        },
        {
          id: 1,
          icon: 'fa-solid fa-pen-to-square',
          title: 'Plataforma white label',
          description:
            'Tanto a plataforma como os materiais saem com a cara e a cor da sua marca.',
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
