<template>
  <section class="flex relative h-screen z-0">
    <div
      v-if="showMenu"
      class="absolute inset-x-0 h-fit top-0 flex justify-center z-20 w-full xl:bg-[#070e3730] xl:backdrop-blur-md lg:bg-[#070e3730] lg:backdrop-blur-md xl:shadow-sm lg:shadow-sm"
    >
      <TopBar class="w-full max-w-7xl lg:max-w-5xl px-5 mb-auto pt-4" />
    </div>

    <div
      class="bg-primary rounded-full w-full md:w-5/6 lg:w-4/6 xl:w-4/6 h-32 md:h-64 lg:h-54 absolute top-0 inset-x-0 bottom-[15%] md:bottom-24 -z-20 blur-2xl mt-auto md:mx-auto lg:mx-auto xl:mx-auto"
    ></div>

    <div class="absolute inset-0 -z-30 overflow-hidden">
      <div class="relative z-0 w-full h-full">
        <div
          class="absolute inset-0 z-20 bg-gradient-to-t from-[#0a0c55] lg:from-[#0b0b60] xl:from-[#0b0b60] to-transparent"
        ></div>
        <iframe
          :src="`https://www.youtube.com/embed/${backgroundVideos.desktop}?autoplay=1&mute=1&loop=1&playlist=${backgroundVideos.desktop}`"
          class="absolute top-0 bottom-0 w-full my-auto h-full z-0 scale-150 opacity-[.35] hidden lg:block xl:block"
        ></iframe>
        <iframe
          :src="`https://www.youtube.com/embed/${backgroundVideos.mobile}?autoplay=1&mute=1&loop=1&playlist=${backgroundVideos.mobile}`"
          class="w-full h-[85%] md:h-[130%] absolute z-0 scale-150 opacity-[.35] block lg:hidden xl:hidden"
        ></iframe>
      </div>
    </div>

    <div
      class="text-white text-2xl mt-auto pb-12 font-bold px-5 text-center h-2/6 md:h-2/5 flex flex-col justify-center md:max-w-[663px] lg:max-w-5xl xl:max-w-7xl md:mx-auto lg:mx-auto xl:mx-auto"
    >
      <h2 class="text-2xl md:font-medium lg:font-medium xl:font-medium">
        Temos uma missão grandiosa:
      </h2>
      <h1
        class="font-darkerGrotesque text-4xl md:text-6xl lg:text-6xl xl:text-6xl xl:w-3/4 xl:mx-auto"
      >
        “Transformar o acesso ao crédito para quem busca sua melhor versão”
      </h1>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import TopBar from '@/components/structure/topbar.component.vue'

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
        desktop: string
        mobile: string
      }>,
      required: true,
    },
  },
  components: { TopBar },
  data() {
    return {}
  },
})
</script>
