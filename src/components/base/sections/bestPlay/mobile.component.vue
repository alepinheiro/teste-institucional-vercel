<template>
  <section>
    <div class="overflow-hidden flex-grow flex">
      <div class="w-full">
        <div class="overflow-hidden flex h-full pt-30 -mr-12">
          <img
            ref="bestPlayMockup"
            :src="$options.imageConfig.mockUps.youtubePhone.image"
            :alt="$options.imageConfig.mockUps.youtubePhone.alt"
            :title="$options.imageConfig.mockUps.youtubePhone.alt"
            loading="lazy"
            class="w-full h-[26rem] object-contain object-top" />
        </div>
      </div>
    </div>
    <div
      class="bg-[#181818] bg-gradient-to-br to-black from-transparent w-full mt-auto flex">
      <div class="my-auto">
        <div class="flex flex-col gap-5 py-10 px-5">
          <img
            :src="$options.imageConfig.brand.youtubeLogo.image"
            :alt="$options.imageConfig.brand.youtubeLogo.alt"
            :title="$options.imageConfig.brand.youtubeLogo.alt"
            loading="lazy"
            class="h-16" />

          <div class="flex flex-col gap-5 text-white">
            <div class="flex flex-col gap-5 justify-center">
              <h2 class="text-3xl font-bold text-center">
                {{ title }}
              </h2>
              <div class="flex flex-row gap-5">
                <div
                  v-for="{ description, icon, number, suffix } of stats"
                  :key="description"
                  class="flex flex-col p-3 rounded-md w-full shadow-xl hover:shadow-2xl hover:scale-105 shadow-black/40 even:hidden border border-zinc-800/60 hover:border-primary transition cursor-default bg-[#181818]">
                  <div class="w-6 h-6 text-primary">
                    <Component :is="icon" class="w-full h-full" />
                  </div>
                  <span
                    class="text-4xl font-darkerGrotesque font-bold text-primary">
                    {{ number + suffix }}
                  </span>
                  <div class="font-bold text-xs">
                    {{ description }}
                  </div>
                </div>
              </div>
              <p class="text-sm text-center">
                Explore temas como crédito, financiamento, empreendedorismo e
                mercado financeiro, visando levá-lo à sua melhor versão.
              </p>
            </div>
            <a
              :href="`${$options.information.socialMedia.youtube}${$root.utms}`"
              class="bg-primary w-fit rounded-xl px-6 py-4 mx-auto font-bold">
              Inscreva-se agora
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';
  import { defineAsyncComponent, defineComponent, markRaw, ref } from 'vue';
  import { gsap } from 'gsap';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
  export default defineComponent({
    name: 'BestPlay',

    props: {
      title: {
        type: String,
        required: true,
      },
    },
    setup() {
      gsap.registerPlugin(ScrollTrigger);
      const bestPlayMockup = ref<HTMLDivElement | null>(null);

      return {
        gsap,
        bestPlayMockup,
      };
    },
    data() {
      return {
        useObjectToQueryString,
        stats: [
          {
            icon: markRaw(
              defineAsyncComponent(
                () => import('@/assets/svg/faIcon/video.vue'),
              ),
            ),
            number: 500,
            suffix: '+',
            description: 'Vídeos grátis',
          },
          {
            icon: markRaw(
              defineAsyncComponent(
                () => import('@/assets/svg/faIcon/peopleGroup.vue'),
              ),
            ),
            number: 2,
            suffix: 'MI+',
            description: 'Alcance mensal',
          },
          {
            icon: markRaw(
              defineAsyncComponent(
                () => import('@/assets/svg/faIcon/peopleGroup.vue'),
              ),
            ),
            number: 60,
            suffix: 'K+',
            description: 'Inscritos no canal',
          },
        ],
      };
    },
    mounted() {
      this.$root.utms = useObjectToQueryString(this.$route.query);
      this.translateToTop(this.bestPlayMockup);
    },
    methods: {
      translateToTop(element: HTMLDivElement | null) {
        if (!element) return;

        this.gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            end: '80% 80%',
            scrub: 1,
            toggleActions: 'restart pause restart restart',
            // markers: true,
          },
          yPercent: -30,
          // duration: 0.5,
          ease: 'circ.in',
        });
      },
    },
  });
</script>
