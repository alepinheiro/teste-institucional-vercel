<template>
  <section
    class="flex flex-col gap-8 xl:gap-20 md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto"
  >
    <div class="text-center flex flex-col gap-4 lg:gap-5 xl:gap-5">
      <div class="flex flex-col gap-2 md:gap-4 lg:gap-5 xl:gap-5">
        <h2
          class="text-primary text-xl md:text-3xl lg:text-4xl xl:text-4xl font-bold"
        >
          Por que existimos?
        </h2>
        <p class="md:text-xl lg:text-2xl xl:text-2xl text-textPrimary">
          Acreditamos que o acesso ao crédito pode levar as pessoas a sua melhor
          versão.
        </p>
      </div>

      <p class="md:text-xl lg:text-2xl xl:text-2xl">
        <b>E como fazemos isso?</b> <br class="md:hidden lg:hidden xl:hidden" />
        <i>Através dos nossos três pilares:</i>
      </p>
    </div>

    <div
      class="flex flex-col md:flex-row lg:flex-row xl:flex-row rounded-xl overflow-hidden border border-textSecondary"
    >
      <div class="flex flex-col font-bold md:flex-1 lg:flex-1 xl:flex-1">
        <button
          v-for="({ id, title }, index) in options"
          :key="id"
          :class="[
            activeCard.id === id
              ? 'bg-primary text-white border-primary'
              : 'border-textSecondary text-textSecondary hover:bg-white hover:text-primary',
          ]"
          class="border-b md:last-of-type:border-0 lg:last-of-type:border-0 xl:last-of-type:border-0 p-4 xl:px-10 md:h-full lg:h-full xl:h-full md:text-xl lg:text-2xl xl:text-2xl w-full text-start transition-all"
          @click="changeActiveImage(index)"
        >
          {{ title }}
        </button>
      </div>
      <div
        class="h-48 md:flex-1 lg:flex-1 xl:flex-1 md:h-96 lg:h-96 xl:h-96 relative overflow-hidden"
      >
        <img
          ref="activeImage"
          :src="activeCard.image"
          alt=""
          class="object-cover h-full w-full absolute inset-0"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { gsap } from 'gsap'
import useWindowSize from '@/composables/useWindowSize'

export default defineComponent({
  name: 'MissionSection',
  setup() {
    const activeImage = ref<HTMLDivElement | null>(null)

    return {
      gsap,
      activeImage,
    }
  },
  data() {
    return {
      activeCard: {
        image: 'https://dummyimage.com/1000x1000.png?text=default',
        id: 'education',
      },
      options: {
        education: {
          id: 'education',
          title: '1. Educação',
          description:
            'Através de conteúdos gratuitos que produzimos para empoderar o cliente na tomada da melhor decisão. Confira clicando abaixo:',
          image: 'https://dummyimage.com/1000x1000.png?text=01',
        },
        technology: {
          id: 'technology',
          title: '2. Tecnologia',
          description:
            'Através de conteúdos gratuitos que produzimos para empoderar o cliente na tomada da melhor decisão. Confira clicando abaixo:',
          image: 'https://dummyimage.com/1000x1000.png?text=02',
        },
        humanizedExperience: {
          id: 'humanizedExperience',
          title: '3. Experiência Humanizada',
          description:
            'Através de conteúdos gratuitos que produzimos para empoderar o cliente na tomada da melhor decisão. Confira clicando abaixo:',
          image: 'https://dummyimage.com/1000x1000.png?text=03',
        },
      },
    }
  },
  mounted() {
    this.changeActiveImage('education')
  },
  methods: {
    changeActiveImage(id: keyof typeof this.options) {
      const timeline = gsap.timeline()

      const { size } = useWindowSize()

      const direction = size.value === ('xs' || 'sm') ? [0, -100] : [-100, 0]

      if (this.activeImage) {
        timeline.to(this.activeImage, {
          xPercent: direction[0],
          yPercent: direction[1],
          duration: 0.5,
          ease: 'sine',
          onComplete: () => {
            this.activeCard = {
              id: id,
              image: this.options[id].image,
            }
          },
        })
        timeline.to(this.activeImage, {
          xPercent: 0,
          yPercent: 0,
          duration: 0.5,
          ease: 'sine',
        })
      }

      timeline.play()
    },
  },
})
</script>
