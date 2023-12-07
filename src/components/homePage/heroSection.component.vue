<template>
  <section class="bg-bgDarkColor min-h-screen relative z-0 flex">

    <picture class="absolute top-0 inset-x-0 bottom-0 -z-10">
      <source type="image/webp">
      <img
      src="/images/Home/heroBackground.png"
      alt=""
      srcset=""
      class="object-cover h-full w-full">
    </picture>

    <div class=" flex flex-col gap-4 items-center mt-auto mx-auto h-full px-5 pb-12">
      <div class="flex flex-col gap-4 text-center text-white font-bold">
        <h1 class="text-3xl font-darkerGrotesque ">A melhor fintech de Crédito do Brasil</h1>
        <h2 class="text-xl">Sem filas, Sem gerentes, Sem complexidade.</h2>
      </div>
      <a href="#" class="bg-complementaryColor1 text-white font-bold w-fit px-5 py-3 rounded-md">
        Simule seu crédito
      </a>
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
