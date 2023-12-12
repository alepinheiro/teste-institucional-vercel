<template>
  <section
    class=" flex flex-col gap-8 md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto"
  >
    <div class="text-center flex flex-col gap-4 lg:gap-5 xl:gap-5">
      <div class="flex flex-col gap-2 md:gap-4 lg:gap-5 xl:gap-5">
        <h2
          class="text-primary text-xl md:text-3xl lg:text-5xl xl:text-5xl font-bold"
        >
          Por que existimos?
        </h2>
        <p class="md:text-xl lg:text-3xl xl:text-3xl text-textPrimary">
          Acreditamos que o acesso ao crédito pode levar as pessoas a sua melhor
          versão.
        </p>
      </div>

      <p class="md:text-xl lg:text-3xl xl:text-3xl">
        <b>E como fazemos isso?</b> <br class="md:hidden lg:hidden xl:hidden" />
        <i>Através dos nossos três pilares:</i>
      </p>
    </div>

    <div
      class="flex flex-col md:flex-row lg:flex-row xl:flex-row rounded-xl overflow-hidden border border-textSecondary"
    >
      <div class="flex flex-col font-bold md:flex-1 lg:flex-1 xl:flex-1">
        <button
          v-for="{ id, title, isActive, image } of options"
          :key="id"
          :class="[
            isActive
              ? 'bg-primary text-white border-primary'
              : 'border-textSecondary text-textSecondary',
          ]"
          class="border-b p-4 xl:px-10 md:py-11 lg:h-full xl:h-full md:text-xl lg:text-3xl xl:text-3xl w-full text-start"
          @click="changeActiveImage(image)"
        >
          {{ id }}. {{ title }}
        </button>
      </div>
      <div
        class="h-48 bg-primary md:flex-1 lg:flex-1 xl:flex-1 md:h-auto lg:h-auto xl:h-auto"
      >
        <img :src="activeImage" alt="" class="object-cover h-full w-full" />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MissionSection',
  data() {
    return {
      activeImage: 'https://dummyimage.com/1000x1000.png?text=default',
      options: [
        {
          id: 1,
          title: 'Educação',
          description:
            'Através de conteúdos gratuitos que produzimos para empoderar o cliente na tomada da melhor decisão. Confira clicando abaixo:',
          image: 'https://dummyimage.com/1000x1000.png?text=01',
          isActive: true,
        },
        {
          id: 2,
          title: 'Tecnologia',
          description:
            'Através de conteúdos gratuitos que produzimos para empoderar o cliente na tomada da melhor decisão. Confira clicando abaixo:',
          image: 'https://dummyimage.com/1000x1000.png?text=02',
          isActive: false,
        },
        {
          id: 3,
          title: 'Experiência Humanizada',
          description:
            'Através de conteúdos gratuitos que produzimos para empoderar o cliente na tomada da melhor decisão. Confira clicando abaixo:',
          image: 'https://dummyimage.com/1000x1000.png?text=03',
          isActive: false,
        },
      ],
    }
  },
  methods: {
    changeActiveImage(url: string) {
      this.activeImage = url
    },
  },
})
</script>
