<template>
  <section>
    <div
      class="flex flex-col max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto w-full justify-center items-end overflow-hidden">
      <div v-if="showHeroImage" class="h-96 w-full"></div>
      <picture
        v-else
        fetchpriority="high"
        class="h-96 min-lg:w-auto min-lg:absolute min-lg:top-0 min-lg:right-0 min-lg:h-screen md:hidden mx-auto">
        <source
          media="(max-width: 767px)"
          srcset="/images/webp/Home/heroBackground-sm.webp" />

        <source
          media="(min-width: 1024px)"
          srcset="/images/webp/Home/heroBackground-lg.webp" />

        <source srcset="/images/webp/Home/heroBackground.webp" />

        <img
          src="/images/webp/Home/heroBackground-sm.webp"
          fetchpriority="high"
          class="h-full w-full object-cover"
          alt="" />
      </picture>

      <img
        src="/images/webp/Home/linesMd.webp"
        class="hidden md:block absolute inset-0 w-full object-contain -z-10"
        alt="" />
      <!-- <img
        src="/images/webp/Home/heroBackground-lg.webp"
        class="hidden lg:block absolute inset-0 w-5/12 object-contain ml-auto -z-10"
        alt="" /> -->

      <div
        class="z-0 flex flex-col gap-5 min-md:gap-10 items-center min-lg:w-8/12 min-lg:mr-auto min-lg:items-start text-center min-lg:text-left mt-8 min-md:mt-0 px-5 min-md:pt-32">
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
            class="flex flex-row justify-center min-lg:justify-start gap-4 flex-wrap w-fit">
            <img
              v-for="{ alt, id, src } of topOfSalesSeals"
              :key="id"
              :src="src"
              :alt="alt"
              class="h-9 min-md:w-full min-md:h-12 mx-0 max-w-[33%] min-md:max-w-[20%] flex-grow object-contain" />
          </div>
        </div>

        <a
          :href="
            information.appSimulator + useObjectToQueryString($route.query)
          "
          class="bg-primary px-5 py-3 rounded-xl text-white font-bold sm:mt-2"
          target="_blank">
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
  import Products from '@/components/homePage/productsSection.component.vue';
  import information from '@/configurations/information';
  import { defineComponent } from 'vue';
  import { topOfSales } from '@/configurations/images';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
  export default defineComponent({
    name: 'HeroSection',
    components: {
      Products,
    },
    data() {
      const topOfSalesSeals = topOfSales('black');

      return {
        information,
        topOfSalesSeals,
        loadedPage: window,
        showHeroImage: false,
        useObjectToQueryString,
      };
    },
    mounted() {
      window.addEventListener('DOMContentLoaded', () => {
        this.showHeroImage = true;
      });
    },
  });
</script>
