<template>
  <section class="bg-bgDarkColor min-h-screen relative z-0 flex">
    <div class="absolute inset-x-0 h-fit top-0 flex justify-center z-20">
      <Topbar class=" w-full max-w-7xl lg:max-w-5xl px-5 mb-auto pt-4" />
    </div>
    <picture class="absolute top-0 inset-x-0 bottom-0 -z-10">
      <source type="image/webp" />
      <img
        src="/images/Home/heroBackground.png"
        alt="A melhor fintech de Crédito do Brasil"
        class="object-cover h-full w-full"
      />
    </picture>

    <div
      class="flex flex-col gap-4 items-center mt-auto mx-auto h-full px-5 pb-12"
    >
      <div class="flex flex-col gap-4 text-center text-white font-bold">
        <h1 class="text-3xl md:text-5xl font-darkerGrotesque tracking-wide font-[700]">
          A melhor fintech de Crédito do Brasil
        </h1>
        <h2 class="text-xl md:text-2xl">Sem filas, Sem gerentes, Sem complexidade.</h2>
      </div>
      <a
        :href="information.appSimulator + $root.utms"
        class="bg-complementaryColor1 text-white font-bold w-fit px-5 py-3 rounded-md md:text-xl"
      >
        Simule seu crédito
      </a>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Topbar from '@/components/structure/topbar.component.vue'
import information from '@/configurations/information';

export default defineComponent({
  name: 'HeroSection',
  components: { Topbar },
  data() {
    return {
      information
    }
  },
})
</script>