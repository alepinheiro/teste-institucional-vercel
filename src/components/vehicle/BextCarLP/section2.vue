<template>
  <section>
    <div class="maxWidth flex flex-wrap pt-0">
      <div class="w-1/2 mt-auto mb-auto sm:w-full sm:hidden">
        <img
          :src="bextCarPage.carro.src"
          :alt="bextCarPage.carro.alt"
          class="sm:w-full md:max-w-[30rem] lg:max-w-3xl max-w-4xl h-auto xl:sticky xl:mt-[-35%] z-0" />
      </div>
      <div
        class="w-1/2 sm:w-full text-right mt-auto sm:pt-12 mb-auto text-white">
        <h1
          class="xl:w-2/3 lg:w-2/3 md:w-full sm:text-center sm:text-3xl text-4xl md:text-3xl font-semibold text-right mr-0 ml-auto">
          Como Funciona?
        </h1>
        <p
          class="py-6 pl-[12.5rem] sm:pl-0 sm:text-center lg:pl-24 md:pl-8 text-xl xl:text-2xl md:text-lg">
          Com o BextCar, você pode usar o seu
          <span class="font-bold">
            carro, van ou caminhão quitado para conseguir empréstimo rápido.
          </span>
          Nessa modalidade,
          <span class="font-bold"> as taxas são mais baixas,</span>
          já que seu veículo é usado como uma garantia.
        </p>
      </div>
    </div>
    <Banner />
    <div class="maxWidth">
      <Card />
    </div>
  </section>
</template>

<script lang="ts">
  import { defineAsyncComponent, defineComponent } from 'vue';
  import { bextCarPage } from '@/configurations/images';
  export default defineComponent({
    name: 'Section2',
    components: {
      Card: defineAsyncComponent(
        () => import('@/components/vehicle/BextCarLP/card.vue'),
      ),
      Banner: defineAsyncComponent(
        () => import('@/components/vehicle/BextCarLP/banner.vue'),
      ),
    },
    data() {
      return {
        bextCarPage,
      };
    },
  });
</script>

<style></style>
