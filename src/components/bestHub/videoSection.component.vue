<template>
  <section class="relative h-fit w-full z-0">
    <img
      class="absolute h-full right-0 -z-10 object-cover sm:hidden md:hidden"
      src="/images/bestHub/videoPlayerDesktop.png"
      alt=""
    />
    <img
      class="absolute object-cover -z-10 w-full h-2/3 md:h-full -right-4 xl:hidden lg:hidden"
      src="/images/bestHub/videoPlayerMobile.png"
      alt=""
    />
    <div
      class="flex flex-col lg:flex-row-reverse xl:flex-row-reverse max-w-7xl mx-auto z-10 lg:py-20 xl:py-20 px-5"
    >
      <VideoButton :video-id="'mWVJV3BnJCU'" class="z-10" />

      <div
        class="md:w-4/6 md:mx-auto lg:w-1/2 xl:w-1/2 flex flex-col md:items-center gap-10 sm:gap-5 md:gap-5 h-fit my-auto md:pt-10 md:pb-20 sm:pt-10 sm:pb-20"
      >
        <h1 class="font-medium text-2xl sm:text-center md:text-center">
          Quem não <b>fintechiza</b>,<br />
          fica para trás
        </h1>
        <div class="border-t-2 border-white/30 sm:w-full lg:mr-5 xl:mr-5"></div>
        <p class="text-base sm:text-center md:text-center lg:pr-5 xl:pr-5">
          Fintechize a sua marca, e aumente os seus lucros com a ajuda do
          BestHub, a melhor plataforma de produtos de crédito do mercado.
          <br />
          <br />
          Diversifique as suas
          <span class="font-bold underline underline-offset-4"
            >fontes de receita</span
          >, trazendo mais soluções para o seu cliente.
        </p>

        <a
          :href="$options.information.bestHubApp.subscribe"
          target="_blank"
          class="text-black sm:text-center md:text-center text-xl font-bold px-5 py-3 rounded-xl font-hover transition-all bg-[#D0FE42] mt-5 font-sans hover:-translate-y-1 w-fit sm:mx-auto md:mx-auto"
        >
          Quero fintechizar meu negócio
        </a>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import VideoButton from "@/components/bestHub/videoButton.component.vue";

export default defineComponent({
  name: 'VideoSection',
  components: {
    VideoButton
  },
  data() {
    return {}
  },
})
</script>
