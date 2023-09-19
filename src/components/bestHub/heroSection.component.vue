<template>
  <section class="w-full">
    <div class="w-full min-h-screen relative z-0 flex">
      <img src="/public/images/bestHub/heroBackground.png" class="absolute object-cover h-full w-full -z-10" alt="" srcset="">
      <!-- <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/A6cmeg6s0Hg?autoplay=1&mute=1"
        title="Quais são as diferenças entre financiamento imobiliário do banco e da construtora?"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="absolute sm:-top-[15%] inset-0 -z-10"
      >
      </iframe> -->
      <div
        class="w-full h-auto flex-grow bg-gradient-to-b from-transparent to-black flex items-center"
      >
        <div
          class="flex flex-col max-w-3xl sm:px-5 items-center mx-auto text-center mt-auto pb-20"
        >
          <h1 class="text-5xl font-bold">BestHub, o nome já diz tudo</h1>
          <h2 class="font-normal text-2xl">
            O melhor hub de crédito do mercado
          </h2>
          <a
            :href="$options.information.appBestHubPreRegister" target="_blank"
            class="text-black text-2xl font-bold px-10 py-6 rounded-xl font-hover transition-all bg-[#D0FE42] mt-5 font-sans hover:-translate-y-1"
          >
          Quero ser um parceiro Best
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HeroSection',
  data() {
    return {}
  },
})
</script>
