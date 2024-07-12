<template>
  <section class="w-full linhas">
    <div class="py-12 px-5 flex flex-col gap-5 max-w-5xl mx-auto">
      <div>
        <h2 class="text-white text-4xl font-bold text-center pb-3">
          O passo a passo definitivo para o
          <div class="pt-3">
            <span class="bg-primary mt-2 p-1">Financiamento Imobiliário</span>
          </div>
        </h2>
        <h3 class="text-white text-2xl font-bold text-center">
          Confira o que você vai adquirir no pacote e como vamos te ajudar a
          conseguir seu primeiro imóvel.
        </h3>
      </div>
      <ResponsiveImage
        imagePath="/images/getOutRent/Start.png"
        :imgAttrs="{
          role: 'presentation',
        }"
        class="w-14 ml-10 mt-5" />
      <div
        class="grid sm:grid-cols-2 grid-cols-4 grid-flow-row px-5 gap-10 mx-auto justify-center relative z-0">
        <img
          src="/images/getOutRent/2ColLines.svg"
          class="absolute inset-0 -z-10 h-[90%] w-full hidden sm:block m-auto"
          role="presentation" />
        <img
          src="/images/getOutRent/4ColLines.svg"
          class="absolute inset-0 -z-10 h-[80%] w-[80%] block sm:hidden m-auto"
          role="presentation" />
        <span
          v-for="{ id, text } of steps"
          :id="`step${id}`"
          :key="id"
          :style="{ order: id }"
          class="relative my-auto h-18 w-full flex justify-center items-center text-white text-center z-10 after:absolute after:content-[''] after:bg-bgDarkColor2 after:hover:bg-primary after:border-2 after:border-primary after:-inset-2 after:odd:-rotate-2 after:even:rotate-2 after:-z-10 cursor-default after:cursor-default">
          {{ text }}
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'BannerSteps',
    data() {
      return {
        isVisible: false,
        steps: [
          {
            id: 1,
            text: 'Visão geral do Mercado',
          },
          {
            id: 2,
            text: 'Características do Produto',
          },
          {
            id: 3,
            text: 'Tipos de Financiamento',
          },
          {
            id: 4,
            text: 'Regras gerais',
          },
          {
            id: 5,
            text: 'Exemplos Reais',
          },
          {
            id: 6,
            text: 'Passo a Passo do Financiamento',
          },
          {
            id: 7,
            text: 'BÔNUS: Amortização',
          },
          {
            id: 8,
            text: 'Dicas de Aprovação',
          },
        ],
      };
    },
  });
</script>

<style scoped lang="scss">
  .linhas {
    background-image: url('/images/getOutRent/linhas.png');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: relative;

    @screen md {
      background-position: bottom;
    }
  }
</style>
