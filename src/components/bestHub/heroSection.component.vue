<template>
  <section class="w-full">
    <div class="w-full min-h-screen relative z-0 flex">
      <!-- <img src="/images/bestHub/heroBackground.png" class="absolute object-cover h-full w-full -z-10" alt="" srcset=""> -->
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/NmVcwxwQ2mk?autoplay=1&mute=1&loop=1&playlist=NmVcwxwQ2mk"
        title="Quais são as diferenças entre financiamento imobiliário do banco e da construtora?"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="absolute sm:-top-[0%] inset-0 -z-10 -top-14 sm:hidden"
      >
      </iframe>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/SdZZsOFr4zw?autoplay=1&mute=1&loop=1&playlist=SdZZsOFr4zw"
        title="Quais são as diferenças entre financiamento imobiliário do banco e da construtora?"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="absolute sm:-top-[15%] inset-0 -z-10 -top-14 hidden sm:block"
      >
      </iframe>
      <div
        class="w-full h-auto flex-grow bg-gradient-to-b from-transparent via-black/70 to-90% to-black flex items-center pb-10"
      >
        <div
          class="flex flex-col max-w-3xl sm:px-5 items-center mx-auto text-center mt-auto pb-20 sm:pb-10"
        >
          <h1 class="text-5xl font-bold">BestHub, o nome já diz tudo</h1>
          <h2 class="font-normal text-2xl">
            O melhor hub de crédito do mercado
          </h2>
          <a
            :href="$options.information.bestHubApp.subscribe"
            target="_blank"
            class="text-black text-xl font-bold px-10 py-6 rounded-xl font-hover transition-all bg-[#D0FE42] mt-5 font-sans hover:-translate-y-1"
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
