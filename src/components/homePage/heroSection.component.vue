<template>
  <section class="relative z-0 flex">
    <div class="absolute inset-x-0 h-fit top-0 flex justify-center z-20">
      <TopBar class="w-full max-w-7xl lg:max-w-5xl px-5 mb-auto pt-4" />
    </div>
    <picture class="absolute top-0 inset-x-0 bottom-0 -z-10">
      <source type="image/png" />
      <img
        src="/images/Home/heroBackground.png"
        alt="A melhor fintech de Crédito do Brasil"
        class="object-cover h-full w-full sm:object-left"
      />
    </picture>

    <div
      class="flex flex-col gap-4 items-center mt-auto mx-auto h-fit px-5 "
    >
      <div class="flex flex-col gap-4 text-center text-white w-11/12 mx-auto md:w-full lg:w-full xl:w-full ">
        <h1
          class=" font-bold text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-darkerGrotesque leading-7 tracking-wide"
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
import { defineComponent } from 'vue'
import TopBar from '@/components/structure/topbar.component.vue'
import information from '@/configurations/information'

export default defineComponent({
  name: 'HeroSection',
  components: { TopBar },
  data() {
    return {
      information,
    }
  },
})
</script>
