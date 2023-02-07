<template lang="">
    <div class="maxWidth md:p-4 flex flex-row sm:flex-col sm:items-center">
      <div class="w-3/12 text-center bgCardsGrey sm:w-10/12 p-5 sm:p-10 md:p-2 rounded-md">
        <h1 class="text-primary text-xl font-bold md:text-lg sm:font-lg">Simulação</h1>
        <p class="text-lg text-textPrimary md:text-sm sm:text-sm sm:mt-2">Preencha os dados e tenha uma prévia de taxas e parcelas.</p>
      </div>
      <img :src="$options.imageConfig.icons.setaDireita" class="xl:w-4 w-4 sm:hidden  mr-4 ml-4 " />
      <img :src="$options.imageConfig.icons.setaBaixo" class="xl:w-4 w-4 sm:visible xl:hidden lg:hidden md:hidden sm:my-4 flex self-center mr-4 ml-4 " />

      <div class="w-3/12 text-center bgCardsGrey sm:w-10/12 p-5 sm:p-10 md:p-2 rounded-md">
        <h1 class="text-primary text-xl font-bold md:text-lg sm:font-lg">Análise</h1>
        <p class="text-lg text-textPrimary md:text-sm sm:text-sm sm:mt-2">Depois, a gente faz uma análise para entender o seu perfil financeiro.</p>
      </div>
      <img :src="$options.imageConfig.icons.setaDireita" class="xl:w-4 w-4 sm:hidden mr-4 ml-4" />
      <img :src="$options.imageConfig.icons.setaBaixo" class="xl:w-4 w-4 sm:visible xl:hidden lg:hidden md:hidden sm:my-4 flex self-center mr-4 ml-4 " />

      <div class="w-3/12 text-center bgCardsGrey sm:w-10/12 p-5 sm:p-10 md:p-2 rounded-md">
        <h1 class="text-primary text-xl font-bold md:text-lg sm:font-lg">Proposta</h1>
        <p class="text-lg text-textPrimary md:text-sm sm:text-sm sm:mt-2">Se aprovado, a gente aprenseta a proposta de crédito pré-liberada.</p>
      </div>
      <img :src="$options.imageConfig.icons.setaDireita" class="xl:w-4 w-4 sm:hidden  mr-4 ml-4" />
      <img :src="$options.imageConfig.icons.setaBaixo" class="xl:w-4 w-4 sm:visible xl:hidden lg:hidden md:hidden sm:my-4 flex self-center mr-4 ml-4 " /> 

      <div class="w-3/12 text-center bgCardsGrey sm:w-10/12 p-5 sm:p-10 md:p-2 rounded-md">
        <h1 class="text-primary text-xl font-bold md:text-lg sm:font-lg">Assinatura</h1>
        <p class="text-lg text-textPrimary md:text-sm sm:text-sm sm:mt-2">Com tudo certinho, é só assinar o contrato e pegar as chaves.</p>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent ({
    name: "stepByStep",
})
</script>

<style>

  .bgCardsGrey{
    background-color: #e1e1e1;
  }
</style>