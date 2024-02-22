<template>
  <section>
    <div class="z-0 relative h-full flex ">

      <div class="absolute inset-0 -z-30 overflow-hidden">
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
      </div>

      <div class="md:max-w-2xl min-lg:max-w-5xl mx-auto mt-auto min-md:mb-20">
        <div class="flex flex-col gap-2 text-center -mt-14 px-5">
          <h2
            class="bg-primary text-white w-fit mx-auto px-3 py-2 rounded-xl text-lg"
          >
            Temos uma missão <b>grandiosa:</b>
          </h2>
          <h1
            class="text-4xl min-md:text-6xl font-darkerGrotesque font-bold text-primary"
          >
            “Transformar o acesso ao crédito para quem busca sua melhor versão”
          </h1>
        </div>
        <!--  -->
        <a
          href="#"
          v-scroll-to="'#businessPartners'"
          class="flex gap-2 justify-between w-fit mx-auto pt-10 hover:underline text-black"
        >
          <i class="fa-solid fa-chevron-down animate-bounce"></i>
          <span class="text-xs ">
            Clique aqui ou role para saber como estamos fazendo isso
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

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
  data() {
    return {}
  },
})
</script>
