<template>
  <section>
    <div
      class="flex flex-col max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto w-full justify-center items-end overflow-hidden">
      <div class="pl-6 h-96 min-md:h-auto">
        <ResponsiveImage
          imagePath="/images/Home/heroBackground-sm.png"
          :imgAttrs="{
            loading: 'eager',
            fetchpriority: 'high',
            alt: 'Gaspar Motta - CEO Bext',
          }"
          class="h-96 min-lg:w-auto min-lg:absolute min-lg:top-0 lg:-right-56 xl:-right-[10%] min-lg:h-screen md:hidden mx-auto" />
      </div>

      <ResponsiveImage
        imagePath="/images/Home/linesMd.webp"
        :imgAttrs="{
          role: 'presentation',
          class: 'object-cover ',
        }"
        class="hidden md:block absolute top-0 left-0 w-full -z-10" />

      <div
        class="z-0 flex flex-col gap-5 min-md:gap-10 items-center min-lg:w-8/12 min-lg:mr-auto min-lg:items-start text-center min-lg:text-left mt-8 min-md:mt-0 px-10 min-md:pt-32">
        <h1
          class="text-3xl min-md:text-6xl font-bold font-darkerGrotesque text-textPrimary leading-7 lg:leading-[48px]">
          A Fintech que transforma, multiplica e facilita o seu acesso ao
          crédito
        </h1>

        <h2 class="text-textPrimary min-md:text-2xl">
          Sem <b> filas, </b> Sem
          <b> gerentes, <br class="xl:hidden lg:hidden md:hidden" /> </b> Sem
          <b> complexidade. </b>
        </h2>

        <hr class="border-px border-textSecondary w-full min-lg:w-2/3" />

        <div class="flex flex-col gap-6">
          <h3 class="text-textSecondary text-xl">
            Premiada e Reconhecida pelo mercado:
          </h3>
          <div
            class="flex flex-row justify-center min-lg:justify-start gap-4 flex-wrap">
            <ResponsiveImage
              v-for="{ alt, id, src } of topOfSalesSeals"
              :key="id"
              :imagePath="src"
              :imgAttrs="{
                alt,
                loading: 'eager',
                fetchpriority: 'high',
              }"
              class="h-9 min-md:h-12 mx-0 object-contain" />
          </div>
        </div>

        <a
          :href="links.simulator.url + useObjectToQueryString($route.query)"
          class="bg-primary px-5 py-3 rounded-xl text-white font-bold sm:mt-2 hover:scale-105 transition ease-in-out hover:drop-shadow-md"
          target="_blank">
          <span class="xl:hidden lg:hidden md:hidden">
            Simule seu crédito
          </span>
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
  import { links } from '@/configurations/information';
  import { defineAsyncComponent, defineComponent } from 'vue';
  import { topOfSales } from '@/configurations/images';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';

  export default defineComponent({
    name: 'HeroSection',
    components: {
      Products: defineAsyncComponent(
        () => import('@/components/homePage/productsSection.component.vue'),
      ),
    },
    data() {
      const topOfSalesSeals = topOfSales('black');

      return {
        links,
        topOfSalesSeals,
        loadedPage: window,
        showHeroImage: false,
        useObjectToQueryString,
      };
    },
  });
</script>
