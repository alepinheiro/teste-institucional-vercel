<template lang="">
    <div class="flex flex-wrap justify-center pb-16 sm:pb-5 pt-10 md:pt-4">
        <div class="mb-8 lg:w-1/2 md:w-1/2 w-5/12 px-3 sm:w-10/12">
        <div class=" p-2  bg-white flex sm:p-3 gap-4 borderGrey rounded-lg">
            <img :src="$options.imageConfig.icons.outline.whiteBlueMoney" alt="icone celular" class="w-16 lg:w-12 md:w-10 sm:w-12" />
            <div class="flex flex-col mt-1" >
            <h1 class="font-bold text-xl sm:text-xl md:text-sm text-primary">
               Juros Baixos
            </h1>
            <p class="lg:text-xs xl:text-xs font-semibold md:text-xs sm:text-sm text-textPrimary">
                Taxa de 1,49% ao mês
            </p>
            </div> 
        </div>
        </div>
        <div class="mb-8 lg:w-1/2 md:w-1/2 w-5/12 px-3 sm:w-10/12">
        <div class=" p-2 md:p-1 lg:p-1 bg-white flex sm:p-3 gap-2  borderGrey rounded-lg">
            <img :src="$options.imageConfig.icons.outline.whiteBluePhone" alt="icone celular" class="w-16 lg:w-12 md:w-8 sm:w-12" />
            <div class="flex flex-col" >
            <h1 class="font-bold text-xl sm:text-xl md:text-xs text-primary">
               Contratação on-line
            </h1>
            <p class="lg:text-xs xl:text-xs font-semibold md:text-xs sm:text-sm text-textPrimary">
                Você passa os dados,a gente faz o resto
            </p>
            </div> 
        </div>
        </div>
        <div class="mb-8 lg:w-1/2 md:w-1/2 w-5/12 px-3 sm:w-10/12">
        <div class=" p-2  bg-white flex sm:p-3 gap-4 borderGrey rounded-lg">
            <img :src="$options.imageConfig.icons.outline.whiteBlueCalendar" alt="icone celular" class="xl:w-14 lg:w-12 md:w-8 sm:w-11" />
            <div class="flex flex-col mt-1" >
            <h1 class="font-bold text-xl sm:text-xl md:text-xs text-primary">
               Prazo Longo
            </h1>
            <p class="lg:text-xs xl:text-xs font-semibold md:text-xs sm:text-sm text-textPrimary">
                Até 5 anos para pagar
            </p>
            </div> 
        </div>
        </div>
        <div class="mb-8 lg:w-1/2 md:w-1/2 w-5/12 px-3 sm:w-10/12">
        <div class=" p-2 gap-3  bg-white flex sm:p-3 borderGrey rounded-lg">
            <img :src="$options.imageConfig.icons.outline.whiteBlueClock" alt="icone celular" class="xl:w-14 lg:w-12 md:w-8 sm:w-11" />
            <div class="flex flex-col" >
            <h1 class="font-bold text-xl sm:text-xl md:text-xs text-primary">
               Aprovação rápida
            </h1>
            <p class="lg:text-xs xl:text-xs font-semibold md:text-xs sm:text-sm text-textPrimary">
                Crédito aprovado em 15 dias
            </p>
            </div> 
        </div>
        </div>
    </div> 
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent ({
    name:"cardWhite"
    
})
</script>

<style>
    
</style>