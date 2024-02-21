<template>
  <section class="flex flex-col relative z-0 h-screen">
    <div class="overflow-hidden flex-grow flex">
      <div class="mx-auto w-64 relative md:static lg:static xl:static">
        <div
          class="absolute overflow-hidden -left-7 -right-0 -top-20 flex min-md:top-0 md:left-2/3 lg:left-[70%] xl:left-[55%] min-md:bottom-0 "
        >
          <img
            ref="bestPlayMockup"
            src="/images/Home/bestPlayMockup.png"
            alt="Conheça o maior canal de crédito do Brasil"
            title="Conheça o maior canal de crédito do Brasil no youtube"
            loading="lazy"
            class="w-auto h-[44rem] min-md:h-[54rem] xl:h-[58rem] mt-32 md:mt-24 lg:mt-48 xl:mt-24 object-cover object-left-top"
          />
        </div>
      </div>
    </div>
    <div
      class="bg-[#181818] bg-gradient-to-br to-black from-transparent w-full h-4/5 mt-auto flex"
    >
      <div
        class="md:max-w-2xl md:mx-auto lg:max-w-5xl lg:mx-auto xl:max-w-7xl xl:mx-auto z-10 my-auto"
      >
        <div class="flex flex-col gap-5 md:w-5/6 py-10 px-5">
          <BestPlayLogo class="h-16 mx-auto md:ml-0 lg:ml-0 xl:ml-0" />

          <div
            class="flex flex-col lg:justify-between xl:justify-between gap-5 text-white"
          >
            <div class="flex flex-col gap-5 lg:w-2/3 xl:w-1/2 justify-center">
              <h2
                class="text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-center md:text-left lg:text-left xl:text-left"
              >
                Conheça o maior canal de crédito do Brasil
              </h2>
              <div class="flex flex-row gap-5">
                <div
                  v-for="{ description, icon, number, suffix } of stats"
                  :key="icon"
                  class="flex flex-col p-3 rounded-md w-full shadow-xl hover:shadow-2xl hover:scale-105 shadow-black/40 even:hidden md:even:block lg:even:block xl:even:block border border-zinc-800/60 hover:border-complementaryColor3 transition cursor-default bg-[#181818]"
                >
                  <div class="w-6 h-6 lg:w-8 lg:h-8 text-complementaryColor3">
                    <i :class="icon" class="w-full h-full"></i>
                  </div>
                  <span
                    class="text-4xl lg:text-5xl font-darkerGrotesque font-bold text-complementaryColor3"
                  >
                    {{ number + suffix }}
                  </span>
                  <div class="font-bold text-xs lg:text-base">
                    {{ description }}
                  </div>
                </div>
              </div>
              <p
                class="text-sm md:text-xl lg:text-xl xl:text-xl md:w-5/6 lg:w-5/6 xl:leading-loose text-center md:text-left lg:text-left xl:text-left"
              >
                Explore temas como crédito, financiamento, empreendedorismo e
                mercado financeiro, visando levá-lo à sua melhor versão.
              </p>
            </div>
            <a
              href="https://www.youtube.com/@SejaBest"
              class="bg-complementaryColor2 w-fit rounded px-6 py-4 mx-auto font-bold md:ml-0 lg:ml-0 xl:ml-0"
            >
              Inscreva-se agora
            </a>
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
          number: 2,
          suffix: 'MI+',
          description: 'Alcance mensal',
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
          end: '1200px',
          scrub: 1,
          toggleActions: 'restart pause restart restart',
        },
        yPercent: -75,
        duration: 0.5,
        ease: 'circ.in',
      })
    },
  },
})
</script>
