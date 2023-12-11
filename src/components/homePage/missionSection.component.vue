<template>
  <section class="py-10 px-5 flex flex-col gap-8 md:max-w-2xl mx-auto">
    <div class="text-center flex flex-col gap-4">
      <div class="flex flex-col gap-2 md:gap-4">
        <h2 class="text-primary text-2xl md:text-3xl font-bold">Por que existimos?</h2>
        <p class="md:text-xl">
          Acreditamos que o acesso ao crédito pode levar as pessoas a sua melhor
          versão.
        </p>
      </div>

      <p>
        <b>E como fazemos isso?</b> <br />
        <i>Através dos nossos três pilares:</i>
      </p>
    </div>

    <div class="flex flex-col md:flex-row rounded-xl overflow-hidden border">
      <div class="flex flex-col font-bold md:flex-1">
        <button
          v-for="{ id, title, isActive, image } of options"
          :key="id"
          :class="{ 'bg-primary text-white': isActive }"
          class="border-b p-4 md:py-11 text-textPrimary w-full text-start "
          @click="changeActiveImage(image)"
        >
          {{ id }}. {{ title }}
        </button>
      </div>
      <div class="h-48 bg-primary md:flex-1 md:h-auto">
        <img :src="activeImage" alt="" class="object-cover h-full" />
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
