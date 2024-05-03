<template>
  <section>
    <div class="flex flex-col max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto w-full  justify-center">
      <img src="/images/Home/heroBackground-sm.png"
        class="aspect-square min-md:hidden object-cover w-10/12 mr-0 ml-auto" alt="" />
      <img src="/images/Home/heroBackground.png"
        class="hidden xl:block absolute inset-0 w-8/12 object-contain -right-80 ml-auto -z-10" alt="" />
      <img src="/images/Home/linesMd.png" class="hidden md:block absolute inset-0 w-full object-contain  -z-10"
        alt="" />
      <img src="/images/Home/heroBackground-lg.png"
        class="hidden lg:block absolute inset-0 w-5/12 object-contain  ml-auto -z-10" alt="" />

      <div
        class="z-0 flex flex-col gap-5 min-md:gap-10 items-center min-lg:w-8/12 min-lg:mr-auto xl:items-start lg:items-start text-center min-lg:text-left mt-8 min-md:mt-0 px-5 min-md:pt-32">
        <h1
          class="text-3xl xl:text-6xl lg:text-6xl md:text-6xl font-bold font-darkerGrotesque text-textPrimary leading-7 lg:leading-[48px]">
          A Fintech que transforma, multiplica e facilita o seu acesso ao crédito
        </h1>

        <h2 class="text-textPrimary xl:text-2xl lg:text-2xl md:text-2xl">
          Sem <b> filas, </b> Sem
          <b> gerentes, <br class="xl:hidden lg:hidden md:hidden" /> </b> Sem
          <b> complexidade. </b>
        </h2>

        <hr class="border-px border-textSecondary w-full min-lg:w-2/3" />

        <div class="flex flex-col gap-6">
          <h3 class="text-textSecondary text-xl">
            Premiada e Reconhecida pelo mercado:
          </h3>
          <div class="flex flex-row justify-center min-lg:justify-start gap-4 flex-wrap w-fit">
            <img v-for="{ alt, id, src } of topOfSalesSeals" :key="id" :src="src" :alt="alt"
              class="h-9 min-md:w-full min-md:h-12 mx-0 max-w-[33%] min-md:max-w-[20%] flex-grow object-contain" />
          </div>
        </div>

        <a :href="information.appSimulator + useObjectToQueryString($route.query)
              " class="bg-primary px-5 py-3 rounded-xl text-white font-bold sm:mt-2" target="_blank">
          <span class="xl:hidden lg:hidden md:hidden">Simule seu crédito</span>
          <span class="hidden xl:block text-2xl lg:block lg:text-xl md:block">
            Clique aqui e simule gratuitamente
          </span>
        </a>
      </div>
      <Products class="pt-24" />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import information from '@/configurations/information'
import { topOfSales } from '@/configurations/images'
import { useObjectToQueryString } from '@/composables/useObjectToQueryString'
import Products from '@/components/homePage/productsSection.component.vue'
export default defineComponent({
  name: 'HeroSection',
  components: {
    Products
  },
  data() {
    const topOfSalesSeals = topOfSales('black')
    return {
      information,
      loadedPage: window,
      topOfSalesSeals,
      useObjectToQueryString,
    }
  },
})
</script>
