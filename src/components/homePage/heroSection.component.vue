<template>
  <section>
    <div
      class="flex flex-col max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto w-full md:min-h-screen justify-center"
    >
      <img
        src="/images/Home/heroBackground-sm.png"
        class="aspect-square min-md:hidden"
        alt=""
      />
      <img
        src="/images/Home/heroBackground-xl.png"
        class="hidden xl:block absolute inset-x-0 h-[80vh] object-contain -right-32 ml-auto -mt-48 -z-10"
        alt=""
      />
      <img
        src="/images/Home/heroBackground-lg.png"
        class="hidden lg:block absolute inset-x-0  h-[80vh] object-contain -right-40 ml-auto -mt-60 -z-10"
        alt=""
      />
      <div
        class="z-0 flex flex-col gap-5 min-md:gap-10 items-center min-lg:w-8/12 min-lg:mr-auto xl:items-start lg:items-start text-center xl:text-left lg:text-left -mt-24 min-md:mt-0 px-5"
      >
        <h1
          class="text-3xl xl:text-6xl lg:text-6xl md:text-6xl font-bold font-darkerGrotesque text-textPrimary leading-7 lg:leading-[48px]"
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

        <h2 class="text-primary xl:text-2xl lg:text-2xl md:text-2xl">
          Sem <b> filas, </b> Sem
          <b> gerentes, <br class="xl:hidden lg:hidden md:hidden" /> </b> Sem
          <b> complexidade. </b>
        </h2>

        <hr class="border-px border-textSecondary w-full min-lg:w-2/3" />

        <div class="flex flex-col gap-4">
          <h3 class="text-textPrimary text-xl">Reconhecidos pelo mercado:</h3>
          <div class="flex flex-row gap-4 flex-wrap">
            <img
              v-for="{ alt, id, src } of topOfSalesSeals"
              :key="id"
              :src="src"
              :alt="alt"
              class="h-9 min-md:h-12 mx-auto max-w-[33%] min-md:max-w-[20%] flex-grow object-contain"
            />
          </div>
        </div>

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
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import information from '@/configurations/information'
import { topOfSales } from '@/configurations/images'

export default defineComponent({
  name: 'HeroSection',
  data() {
    const topOfSalesSeals = topOfSales('black')
    return {
      information,
      loadedPage: window,
      topOfSalesSeals,
    }
  },
})
</script>
