<template>
  <section>
    <div
      class="absolute -right-0 top-0 flex md:left-2/3 lg:left-[70%] xl:left-[55%] bottom-0">
      <img
        ref="bestPlayMockup"
        :src="$options.imageConfig.mockUps.youtubePhone.image"
        :alt="$options.imageConfig.mockUps.youtubePhone.alt"
        :title="$options.imageConfig.mockUps.youtubePhone.alt"
        loading="lazy"
        class="w-auto h-[110vh] md:mt-48 mt-60 object-cover object-left-top" />
    </div>
    <div class="w-full my-auto flex">
      <div class="md:max-w-2xl lg:max-w-5xl xl:max-w-7xl m-auto z-10 w-full">
        <div class="flex md:w-5/6 py-10 px-5">
          <div
            class="flex flex-col justify-between items-start gap-10 text-white lg:w-2/3 xl:w-1/2">
            <img
              :src="$options.imageConfig.brand.youtubeLogo.image"
              :alt="$options.imageConfig.brand.youtubeLogo.alt"
              :title="$options.imageConfig.brand.youtubeLogo.alt"
              class="h-16 w-64" />
            <h2 class="text-5xl font-bold text-left">
              {{ title }}
            </h2>
            <!--  -->
            <div class="flex flex-row gap-5 w-full">
              <div
                v-for="{ description, icon, number, suffix } of stats"
                :key="icon"
                class="flex-1 flex flex-col p-3 rounded-xl w-full shadow-xl hover:shadow-2xl hover:scale-105 shadow-black/40 even:block border border-zinc-800/60 hover:border-primary transition cursor-default bg-[#181818]">
                <div class="w-8 h-8 text-lightPrimary">
                  <Icon :icon="icon" class="w-full h-full" />
                </div>
                <span
                  class="text-4xl lg:text-5xl font-darkerGrotesque font-bold text-lightPrimary">
                  {{ number + suffix }}
                </span>
                <div class="font-bold text-xs lg:text-base">
                  {{ description }}
                </div>
              </div>
            </div>
            <!--  -->
            <p class="text-xl md:w-5/6 lg:w-5/6 leading-loose text-left">
              Explore temas como crédito, financiamento, empreendedorismo e
              mercado financeiro, visando levá-lo à sua melhor versão.
            </p>
            <a
              :href="`${$options.information.socialMedia.youtube}${$root.utms}`"
              class="bg-lightPrimary w-fit rounded-xl px-6 py-4 mx-auto font-bold ml-0">
              Inscreva-se agora
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import BestPlayLogo from '@/components/imagesSVG/logos/bestPlay.component.vue';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';
  import { defineComponent, ref } from 'vue';
  import { gsap } from 'gsap';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
  import { useRoute } from 'vue-router';
  export default defineComponent({
    name: 'BestPlayDesktop',
    components: { BestPlayLogo },
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
        route: useRoute(),
      };
    },
    mounted() {
      this.$root.utms = useObjectToQueryString(this.route.query);
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
          yPercent: -25,
          // duration: 0.5,
          ease: 'circ.in',
        });
      },
    },
  });
</script>
