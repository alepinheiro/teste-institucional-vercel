<template>
  <section class="flex relative h-screen z-0">
    <div class="absolute inset-x-0 h-fit top-0 flex justify-center z-20">
      <TopBar class="w-full max-w-7xl lg:max-w-5xl px-5 mb-auto pt-4" />
    </div>

    <div
      class="bg-primary rounded-full h-44 absolute top-0 inset-x-0 w-full bottom-1/4 -z-20 blur-2xl mt-auto"
    ></div>

    <picture class="absolute top-0 inset-x-0 bottom-1/4 -z-10">
      <source type="image/png" />
      <img
        src="/images/Home/heroBackground.png"
        alt="A melhor fintech de Crédito do Brasil"
        class="object-cover h-full w-full"
      />
    </picture>

    <div
      class="text-white text-2xl mt-auto pb-12 font-bold px-5 text-center h-3/5 flex flex-col justify-center"
    >
      <h2>Temos uma missão grandiosa:</h2>
      <h1 class="font-darkerGrotesque text-4xl">
        “Transformar o acesso ao crédito para quem busca sua melhor versão”
      </h1>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopBar from '@/components/structure/topbar.component.vue'

export default defineComponent({
  name: 'HeroSection',
  components: { TopBar },
  data() {
    return {}
  },
})
</script>
