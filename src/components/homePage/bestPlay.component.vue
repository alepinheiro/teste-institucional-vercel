<template>
  <section class="flex flex-col xl:h-[50%] relative z-0 overflow-hidden">
    <div class="h-64 overflow-hidden flex bg-[#EFEFEF] xl:h-8">
      <div class="mx-auto w-64 relative md:static lg:static xl:static">
        <div
          class="absolute -left-7 -right-8 top-24 flex md:top-80 md:left-2/3 lg:left-[35%] xl:left-[45%] lg:top-116 xl:top-40"
        >
          <img
            ref="bestPlayMockup"
            src="/images/Home/bestPlayMockup.png"
            alt="Conheça o maior canal de crédito do Brasil"
            loading="lazy"
            class="w-auto h-[44rem] md:h-[54rem] lg:h-[54rem] xl:h-[54rem] object-cover object-left-top"
          />
        </div>
      </div>
    </div>

    <div
      class="md:max-w-2xl md:mx-auto lg:max-w-5xl lg:mx-auto xl:max-w-7xl xl:mx-auto"
    >
      <div class="flex flex-col gap-5 md:w-4/6 py-10 px-5">
        <BestPlayLogo class="h-16 mx-auto md:hidden lg:hidden xl:hidden" />

        <div
          class="flex flex-col lg:flex-row xl:flex-row lg:justify-between xl:justify-between gap-5 text-white"
        >
          <div
            class="flex flex-col gap-5 lg:w-1/3 xl:w-1/3 xl:h-128 justify-center"
          >
            <h2
              class="text-3xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-center md:text-left lg:text-left xl:text-left"
            >
              Conheça o maior canal de crédito do Brasil
            </h2>
            <div class="flex flex-row gap-5">
              <div
                v-for="{ description, icon, number, suffix } of stats"
                :key="icon"
                class="flex flex-col p-3 rounded w-full shadow-xl shadow-black/40"
              >
                <div class="w-6 h-6 text-complementaryColor3">
                  <i :class="icon" class="w-full h-full"></i>
                </div>
                <span
                  class="text-4xl font-darkerGrotesque font-bold text-complementaryColor3"
                >
                  {{ number + suffix }}
                </span>
                <div class="font-bold text-xs">{{ description }}</div>
              </div>
            </div>
            <p class="text-sm">
              Explore temas como crédito, financiamento, empreendedorismo e
              mercado financeiro, visando levá-lo à sua melhor versão.
            </p>
          </div>
          <div
            class="flex flex-row lg:flex-col-reverse xl:flex-col-reverse gap-5 lg:my-auto xl:my-auto"
          >
            <a
              href="https://www.youtube.com/@SejaBest"
              class="bg-complementaryColor2 w-fit rounded px-6 py-4 mx-auto font-bold"
            >
              Inscreva-se agora
            </a>
            <BestPlayLogo class="h-14 hidden md:block lg:block xl:block" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import BestPlayLogo from '@/components/imagesSVG/logos/bestPlay.component.vue'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { defineComponent, ref } from 'vue'
import { gsap } from 'gsap'

export default defineComponent({
  name: 'BestPlay',
  components: { BestPlayLogo },
  setup() {
    gsap.registerPlugin(ScrollTrigger)
    const bestPlayMockup = ref<HTMLDivElement | null>(null)

    return {
      gsap,
      bestPlayMockup,
    }
  },
  data() {
    return {
      stats: [
        {
          icon: 'fa-solid fa-video-camera',
          number: 500,
          suffix: '+',
          description: 'Vídeos grátis',
        },
        {
          icon: 'fa-solid fa-people-group',
          number: 60,
          suffix: 'K+',
          description: 'Inscritos no canal',
        },
      ],
    }
  },
  mounted() {
    this.translateToTop(this.bestPlayMockup)
  },
  methods: {
    translateToTop(element: HTMLDivElement | null) {
      if (!element) return

      this.gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: '+1000px',
          scrub: 1,
          toggleActions: 'restart pause restart restart',
        },
        yPercent: -100,
        duration: 0.5,
        ease: 'circ.in',
      })
    },
  },
})
</script>
