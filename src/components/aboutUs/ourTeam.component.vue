<template>
  <section class="flex flex-col gap-7">
    <div class="flex flex-col items-center text-center gap-4 px-5">
      <span class="font-bold text-complementaryColor1"> Time SejaBest </span>
      <h2 class="text-xl text-primary font-bold">
        Um time de profissionais qualificados
      </h2>
      <p>
        A SejaBest conta com um forte time de assessores que estão preparados
        para te ajudar a encontrar uma solução de crédito que se encaixa nas
        suas necessidades.
      </p>
    </div>

    <div class="relative flex flex-col gap-5 h-84 overflow-hidden">
      <div
        ref="firstRow"
        class="flex flex-row gap-5 absolute left-0 top-0 overflow-hidden"
      >
        <div
          v-for="({ alt }, index) in teamMembers"
          :key="alt"
          class="h-38 w-32 bg-primary flex flex-shrink-0 rounded-md"
        >
          <img
            :src="`/images/aboutUs/teamMembers/${index}.png`"
            :alt="alt"
            class="h-32 w-32 object-cover my-auto"
            loading="lazy"
          />
        </div>
      </div>

      <div
        ref="secondRow"
        class="flex flex-row gap-5 absolute h-42 right-0 bottom-0 overflow-hidden"
      >
        <div
          v-for="({ alt }, index) in teamMembers"
          :key="alt"
          class="h-38 w-32 bg-primary flex flex-shrink-0 rounded-md"
        >
          <img
            :src="`/images/aboutUs/teamMembers/${index}.png`"
            :alt="alt"
            class="h-32 w-32 object-cover my-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'

export default defineComponent({
  name: 'OurTeam',
  setup() {
    gsap.registerPlugin(ScrollTrigger)
    const firstRow = ref<HTMLDivElement | null>(null)
    const secondRow = ref<HTMLDivElement | null>(null)

    return {
      firstRow,
      secondRow,
    }
  },
  data() {
    const teamMembers = {
      daniel: {
        alt: 'Daniel',
      },
      bianca: {
        alt: 'Bianca',
      },
      julia: {
        alt: 'Julia',
      },
      natalia: {
        alt: 'Natália',
      },
      gaspar: {
        alt: 'Gaspar',
      },
      bruna: {
        alt: 'Bruna',
      },
      jaqueline: {
        alt: 'Jaqueline',
      },
      paola: {
        alt: 'Paola',
      },
      estevao: {
        alt: 'Estevão',
      },
      felipe: {
        alt: 'Felipe',
      },
      gabi: {
        alt: 'Gabrielle',
      },
      amanda: {
        alt: 'Amanda',
      },
    }

    return {
      teamMembers,
    }
  },
  mounted() {
    this.slideToLeft(this.firstRow)
    this.slideToRight(this.secondRow)
  },
  methods: {
    slideToLeft(element: HTMLDivElement | null) {
      if (!element) return
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
        },
        x: -element.offsetWidth,
        repeat: -1,
        duration: 20,
        ease: 'none',
      })
    },
    slideToRight(element: HTMLDivElement | null) {
      if (!element) return
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
        },
        x: +element.offsetWidth,
        repeat: -1,
        duration: 20,
        ease: 'none',
      })
    },
  },
})
</script>
