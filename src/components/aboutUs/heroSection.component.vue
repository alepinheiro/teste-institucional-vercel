<template>
  <section>
    <div class="z-0 relative h-full flex">
      <!-- <div class="absolute inset-0 -z-30 overflow-hidden">
        <div class="relative z-0 w-full h-full">
          <div
            class="absolute inset-0 z-20 bg-gradient-to-t from-[#EFEFEF] to-black/60 from-[20%] via-transparent"
          ></div>
          <iframe
            :src="`https://www.youtube.com/embed/${backgroundVideos.desktop}?autoplay=1&mute=1&loop=1&playlist=${backgroundVideos.desktop}`"
            class="absolute top-0 bottom-0 w-full my-auto h-full z-0 scale-150 opacity-[.90] hidden lg:block xl:block"
          ></iframe>
          <iframe
            :src="`https://www.youtube.com/embed/${backgroundVideos.mobile}?autoplay=1&mute=1&loop=1&playlist=${backgroundVideos.mobile}`"
            class="w-full h-[125%] md:h-[130%] absolute z-0 scale-150 opacity-[.90] lg:hidden xl:hidden"
          ></iframe>
        </div>
      </div> -->

      <div
        class="maxWidth m-auto min-md:mb-20 h-8/12 min-md:h-full xl:py-12 flex flex-col">
        <div
          class="flex flex-col items-center justify-center gap-10 text-center px-5 h-full">
          <video
            autoplay
            loop
            muted
            playsinline
            :src="bextImages.loadingBrandChangeLight.src"
            class="py-5 h-4/12 xl:pt-36 pt-36 sm:pt-18"></video>
          <h2
            class="bg-primary text-white w-fit mx-auto px-3 py-2 rounded-xl text-lg">
            Temos uma missão <b>grandiosa:</b>
          </h2>
          <h1
            class="text-4xl min-md:text-6xl font-darkerGrotesque font-bold text-primary">
            “Transformar o acesso ao crédito para quem busca sua melhor versão”
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { bextImages } from '@/configurations/images';
  import { defineComponent, type PropType } from 'vue';

  export default defineComponent({
    name: 'HeroSection',
    props: {
      showMenu: {
        type: Boolean,
        required: false,
        default: true,
      },
      backgroundVideos: {
        type: Object as PropType<{
          desktop: string;
          mobile: string;
        }>,
        required: true,
      },
    },
    data() {
      return {
        bextImages,
      };
    },
  });
</script>
