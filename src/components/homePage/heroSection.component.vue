<template>
  <section class="relative z-0 flex">
    <div
      v-if="showMenu"
      class="absolute inset-x-0 h-fit top-0 flex justify-center z-20"
    >
      <TopBar class="w-full max-w-7xl lg:max-w-5xl px-5 mb-auto pt-4" />
    </div>
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="relative z-0 w-full h-full">
        <div
          class="absolute inset-0 z-20 bg-gradient-to-t from-bgDarkColor via-bgDarkColor/70 to-transparent"
        ></div>
        <iframe
          :src="`https://www.youtube.com/embed/${backgroundVideos.desktop}?autoplay=1&mute=1&loop=1&playlist=${backgroundVideos.desktop}`"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop"
          allowfullscreen
          class="absolute top-0 bottom-0 w-full my-auto h-full z-0 scale-150 opacity-30 hidden lg:block xl:block"
        ></iframe>
        <iframe
          :src="`https://www.youtube.com/embed/${backgroundVideos.mobile}?autoplay=1&mute=1&loop=1&playlist=${backgroundVideos.mobile}`"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop"
          allowfullscreen
          class="w-full h-full absolute z-0 scale-150 opacity-30 block lg:hidden xl:hidden"
        ></iframe>
      </div>
    </div>

    <div class="flex flex-col gap-4 items-center mt-auto mx-auto h-fit px-5">
      <div class="flex flex-col gap-4 text-center text-white">
        <h1
          class="font-bold text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-darkerGrotesque leading-7 tracking-wide"
        >
          A melhor fintech de Crédito do Brasil
        </h1>
        <h2 class="text-2xl md:text-2xl lg:text-2xl xl:text-2xl">
          Sem
          <b> filas. </b>
          Sem
          <b> gerentes. </b>
          Sem
          <b> complexidade. </b>
        </h2>
      </div>
      <a
        :href="information.appSimulator + $root.utms"
        class="bg-complementaryColor1 text-white font-bold w-fit px-5 py-3 rounded-md md:text-xl lg:text-xl xl:text-xl"
      >
        Simule seu crédito
      </a>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import TopBar from '@/components/structure/topbar.component.vue'
import information from '@/configurations/information'

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
    return {
      information,
      loadedPage: window,
    }
  },
})
</script>
