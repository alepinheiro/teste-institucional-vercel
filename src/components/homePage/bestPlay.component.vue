<template>
  <section class="flex flex-col xl:h-128 relative z-0 overflow-hidden">
    <div class="h-64 overflow-hidden flex bg-[#EFEFEF]">
      <div class="mx-auto w-64 relative md:static lg:static xl:static">
        <div
          class="absolute -left-7 -right-8 top-24 flex md:top-80 md:left-2/3 lg:left-[45%] xl:left-1/2 lg:top-80"
        >
          <img
            ref="bestPlayMockup"
            src="/images/Home/bestPlayMockup.png"
            alt="Conheça o maior canal de crédito do Brasil"
            loading="lazy"
            class="w-auto h-[44rem] object-cover object-left-top"
          />
        </div>
      </div>
    </div>

    <div
      class="md:max-w-2xl md:mx-auto lg:max-w-5xl lg:mx-auto xl:max-w-7xl xl:mx-auto"
    >
      <div class="flex flex-col gap-5 md:w-4/6 py-10 px-5">
        <BestPlayLogo class="h-14 mx-auto md:hidden lg:hidden xl:hidden" />

        <div
          class="flex flex-col lg:flex-row xl:flex-row lg:justify-between xl:justify-between gap-5 text-white"
        >
          <div class="flex flex-col gap-5 lg:w-5/12 xl:w-5/12">
            <h2
              class="text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-center md:text-left lg:text-left xl:text-left"
            >
              Conheça o maior canal de crédito do Brasil
            </h2>

            <p class="leading-9 xl:text-xl">
              BestPlay é o canal de comunicação da SejaBest no YouTube. Com mais
              de 500 vídeos, nosso canal reúne uma comunidade de mais de 50 mil
              pessoas. Abordamos temas como crédito, financiamento,
              empreendedorismo e mercado financeiro, com o único propósito de
              levar você à sua melhor versão.
            </p>
          </div>
          <div
            class="flex flex-row lg:flex-col-reverse xl:flex-col-reverse gap-5 lg:my-auto xl:my-auto"
          >
            <a
              href="https://www.youtube.com/@SejaBest"
              class="bg-complementaryColor2 w-fit rounded px-6 py-4 ml-auto"
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
    return {}
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
