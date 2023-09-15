<template>
  <div class="py-12 px-4">
    <h2 class="text-white text-4xl font-bold text-center sm:text-xl md:text-base pb-3">
      O passo a passo definitivo para o <span class="bg-primary p-1 ">Financiamento Imobiliário</span>
    </h2>
    <h3 class="text-white text-xl font-bold text-center sm:text-sm md:text-sm">
      Confira o que você vai adquirir no pacote e
      como vamos te ajudar a conseguir seu primeiro imóvel.
    </h3>
  </div>
  <div class="linhas w-full py-12 sm:hidden md:hidden">
    <div class="maxWidth text-white">
      <div class="flex items-center">
        <div class="text-2xl  w-2/12 font-bold text-complementaryColor3 -rotate-6">
          Start!
        </div>
        <div class="border-2 w-3/12 lg:w-5/12 text-center border-primary p-4 text-3xl sm:text-xl -rotate-2 hover:bg-primary">
          Visão geral do Mercado
        </div>
        <div class="border-t-2 h-2 w-1/12 border-primary"></div>
        <div class="border-2 border-primary text-center flex-1 p-4 text-3xl rotate-2  hover:bg-primary">
          Característica do Produto
        </div>
        <div class="border-t-2 h-2 w-1/12 border-primary"></div>
        <div class="border-2 border-primary text-center flex-1 p-4 text-3xl -rotate-2 hover:bg-primary">
          Tipos de Financiamento
        </div>
        <div class="border-t-2 h-2 w-1/12 border-primary"></div>
        <div class="border-2 border-primary text-center flex-1 p-4 text-3xl rotate-2 hover:bg-primary">
          Regras gerais
        </div>
      </div>
      <div class="border-r-2 mr-16 h-24 border-primary"></div>
      <div class="flex items-center">
        <div class="text-base  w-2/12 font-bold text-complementaryColor3 -rotate-2">

        </div>
        <div class="border-2 flex-1 text-center border-primary p-4 text-3xl rotate-2 hover:bg-primary">
          BÔNUS: Amortização
        </div>
        <div class="border-t-2 h-2 w-1/12 border-primary"></div>
        <div class="border-2 border-primary text-center flex-1 p-4 text-3xl -rotate-2 hover:bg-primary">
          Dicas de Aprovação
        </div>
        <div class="border-t-2 h-2 w-1/12 border-primary"></div>
        <div class="border-2 border-primary text-center flex-1 p-4 text-3xl rotate-2 hover:bg-primary">
          Exemplos Reais
        </div>
        <div class="border-t-2 h-2 w-1/12 border-primary"></div>
        <div class="border-2 border-primary w-4/12 lg:w-5/12 text-center p-4 text-3xl -rotate-2 hover:bg-primary">
          Passo a Passo do Financiamento
        </div>
      </div>
    </div>
  </div>
  <div class="w-full xl:hidden lg:hidden text-white p-6 md:w-9/12 mr-auto ml-auto">
    <div class="flex items-center">
      <div class="border-2 flex-1 text-center border-primary p-4 text-base -rotate-2 hover:bg-primary">
        Visão geral do Mercado
      </div>
      <div class="border-t-2 h-2 w-1/12 border-primary"></div>
      <div class="border-2 border-primary text-center flex-1 p-4 text-base rotate-2  hover:bg-primary">
        Característica do Produto
      </div>
    </div>
    <div class="border-r-2 mr-24 h-18 border-primary"></div>
    <div class="flex items-center">
      <div class="border-2 flex-1 text-center border-primary p-4 text-base rotate-2 hover:bg-primary">
        Tipos de Financiamento
      </div>
      <div class="border-t-2 h-2 w-1/12 border-primary"></div>
      <div class="border-2 border-primary text-center flex-1 py-8 px-4 sm:py-4 text-base -rotate-2  hover:bg-primary">
        Regras gerais
      </div>
    </div>
    <div class="border-l-2 ml-24 h-18 border-primary"></div>
    <div class="flex items-center">
      <div class="border-2 flex-1 text-center border-primary p-4 text-base -rotate-2 hover:bg-primary">
        BÔNUS: Amortização
      </div>
      <div class="border-t-2 h-2 w-1/12 border-primary"></div>
      <div class="border-2 border-primary text-center flex-1 p-4 text-base rotate-2  hover:bg-primary">
        Dicas de Aprovação
      </div>
    </div>
    <div class="border-r-2 mr-24 h-18 border-primary"></div>
    <div class="flex items-center">
      <div class="border-2 border-primary text-center flex-1 py-8 px-4  text-base rotate-2  hover:bg-primary">
        Exemplos Reais
      </div>
      <div class="border-t-2 h-2 w-1/12 border-primary"></div>
      <div class="border-2 flex-1 text-center border-primary p-4 text-base -rotate-2 hover:bg-primary">
        Passo a Passo do Financiamento
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BannerSteps',
  data() {
    return {
      isVisible: false,
    }
  },
})
</script>

<style scoped>
.linhas {
  background-image: url("/images/getOutRent/linhas.png");
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