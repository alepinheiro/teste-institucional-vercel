<template>
  <section>
    <div
      class="absolute -right-0 top-0 flex md:left-2/3 lg:left-[70%] xl:left-[55%] bottom-0"
    >
      <img
        ref="bestPlayMockup"
        src="/images/Home/bestPlayMockup.png"
        alt="Conheça o maior canal de crédito do Brasil"
        title="Conheça o maior canal de crédito do Brasil no youtube"
        loading="lazy"
        class="w-auto h-[58rem] md:mt-48 mt-60 object-cover object-left-top"
      />
    </div>
    <div class="w-full my-auto flex">
      <div
        class="md:max-w-2xl md:mx-auto lg:max-w-5xl lg:mx-auto xl:max-w-7xl xl:mx-auto z-10 my-auto"
      >
        <div class="flex md:w-5/6 py-10 px-5">
          <div
            class="flex flex-col justify-between gap-10 text-white lg:w-2/3 xl:w-1/2"
          >
            <BestPlayLogo class="h-16 mx-auto md:ml-0 lg:ml-0 xl:ml-0" />
            <h2
              class="text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-center md:text-left lg:text-left xl:text-left"
            >
              Conheça o maior canal de crédito do Brasil
            </h2>
            <!--  -->
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
            <!--  -->
            <p
              class="text-sm md:text-xl lg:text-xl xl:text-xl md:w-5/6 lg:w-5/6 xl:leading-loose text-center md:text-left lg:text-left xl:text-left"
            >
              Explore temas como crédito, financiamento, empreendedorismo e
              mercado financeiro, visando levá-lo à sua melhor versão.
            </p>
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
  name: 'BestPlayDesktop',
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
          start: 'top 90%',
          end: '80% 80%',
          scrub: 1,
          toggleActions: 'restart pause restart restart',
          // markers: true,
        },
        yPercent: -25,
        // duration: 0.5,
        ease: 'circ.in',
      })
    },
  },
})
</script>
