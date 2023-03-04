<template lang="">
    <div class="flex flex-wrap justify-end sm:justify-center pb-16 sm:pb-5 pt-10 md:pt-4 md:ml-2">
        <div class="mb-8 md:mb-2 lg:w-1/2 md:w-1/2 w-[40%] px-3 md:px-0 md:pl-1 sm:w-full">
        <div class=" p-2 md:p-[0.7rem] lg:p-[0.625rem] bg-white flex sm:p-3 gap-4 borderGrey rounded-lg lg:h-[70px] md:h-[75px] xl:h-[88px]">
            <img :src="$options.imageConfig.icons.outlineWB.whiteBlueMoney" alt="icone dinheiro" class="w-11 lg:w-12 md:w-8 sm:w-12" />
            <div class="md:mt-2 xl:mt-1 flex flex-col" >
            <h1 class="font-bold text-lg sm:text-xl md:text-xs text-primary">
               Juros Baixos
            </h1>
            <p class="lg:text-xs xl:text-base font-semibold md:text-xs sm:text-sm text-textPrimary">
                Taxa de 1,49% ao mês
            </p>
            </div> 
        </div>
        </div>
        <div class="mb-8 md:mb-2 lg:w-1/2 md:w-1/2 w-[40%] px-3 sm:w-full md:px-0 md:pl-1">
        <div class=" p-2 md:p-2 lg:p-2 bg-white flex sm:p-3 gap-2  borderGrey rounded-lg lg:h-[70px] md:h-[75px] xl:h-[88px]">
            <img :src="$options.imageConfig.icons.outlineWB.whiteBluePhone" alt="icone celular" class="w-12 lg:w-11 md:w-8 sm:w-12" />
            <div class="flex flex-col md:mt-0.5 xl:mt-1" >
            <h1 class="font-bold text-lg lg:text-lg sm:text-xl md:text-xs text-primary">
               Contratação on-line
            </h1>
            <p class="lg:text-xs lg:leading-[0.8rem]  xl:leading-4 xl:text-base font-semibold md:text-xs sm:text-sm text-textPrimary">
                Você passa os dados,a gente faz o resto
            </p>
            </div> 
        </div>
        </div>
        <div class="mb-8 lg:w-1/2 md:w-1/2 w-[40%] px-3 sm:w-full md:px-0 md:pl-1">
        <div class=" p-2  bg-white flex sm:p-3 gap-4 borderGrey rounded-lg lg:h-[70px] md:h-[75px] xl:h-[88px]">
            <img :src="$options.imageConfig.icons.outlineWB.whiteBlueCalendar" alt="icone calendario" class="w-11 lg:w-12 md:w-8 sm:w-11 " />
            <div class="flex flex-col mt-1 md:mt-3 " >
            <h1 class="font-bold text-lg sm:text-xl md:text-xs text-primary">
               Prazo Longo
            </h1>
            <p class="lg:text-xs xl:text-base font-semibold md:text-xs sm:text-sm text-textPrimary">
                Até 5 anos para pagar
            </p>
            </div> 
        </div>
        </div>
        <div class="mb-8 lg:w-1/2 md:w-1/2 w-[40%] px-3 sm:w-full md:px-0 md:pl-1">
        <div class=" p-2 lg:p-[0.625rem] md:p-3 gap-3 bg-white flex sm:p-3 borderGrey rounded-lg lg:h-[70px] md:h-[75px] xl:h-[88px]">
            <img :src="$options.imageConfig.icons.outlineWB.whiteBlueClock" alt="icone relógio" class="w-10 lg:w-11 md:w-8 sm:w-11" />
            <div class="flex flex-col xl:mt-1 md:mt-2" >
            <h1 class="font-bold text-lg sm:text-xl md:text-xs text-primary">
               Aprovação rápida
            </h1>
            <p class="lg:text-xs xl:text-base font-semibold md:text-xs sm:text-sm text-textPrimary">
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