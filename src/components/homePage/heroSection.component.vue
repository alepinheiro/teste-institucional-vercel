<template>
  <div>
    <section
      class="px-5 flex flex-col xl:flex-row-reverse lg:flex-row-reverse gap-5 items-center max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto w-full pt-10"
    >
      <img
        src="/images/Home/gasparHeroSection.png"
        class="w-48 xl:w-1/2 lg:w-5/12 md:hidden"
        alt=""
      />
      <div
        class="flex flex-col gap-5 items-center xl:w-1/2 lg:w-7/12 xl:items-start lg:items-start text-center xl:text-left lg:text-left"
      >
        <h1
          class="text-3xl xl:text-6xl lg:text-6xl md:text-6xl font-bold font-darkerGrotesque text-textPrimary"
        >
          Facilitamos o seu
          <span class="text-primary"> acesso ao crédito </span>
          através de uma
          <span
            class="before:inline before:absolute before:-left-2 before:-right-2 before:top-1 before:-bottom-2 before:bg-primary before:-z-10 text-white relative z-0 inline-table ml-2 whitespace-pre-line"
          >
            plataforma multibancos
          </span>
        </h1>

        <h2 class="text-primary xl:text-2xl lg:text-xl md:text-2xl">
          Sem <b> filas, </b> Sem
          <b> gerentes, <br class="xl:hidden lg:hidden md:hidden" /> </b> Sem
          <b> complexidade. </b>
        </h2>

        <hr class="border-px border-textSecondary w-full" />

        <img
          src="/images/Home/awards/awardsHeroSection.png"
          class="xl:w-1/2 lg:w-2/3 md:w-4/6"
          alt=""
        />

        <a
          :href="information.appSimulator + $root.utms"
          class="bg-complementaryColor1 px-5 py-3 rounded text-white font-bold"
        >
          <span class="xl:hidden lg:hidden md:hidden">Simule seu crédito</span>
          <span class="hidden xl:block text-2xl lg:block lg:text-xl md:block"
            >Clique aqui e simule gratuitamente</span
          >
        </a>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import information from '@/configurations/information'

export default defineComponent({
  name: 'HeroSection',
  data() {
    return {
      information,
      loadedPage: window,
    }
  },
})
</script>
