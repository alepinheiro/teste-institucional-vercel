<template lang="">
    <div class="md:pl-4 lg:pl-4 md:pr-4 lg:pr-4 maxWidth">
        <div class="shadow-lg md:p-0 lg:p-0 bg-primary  rounded-2xl flex flex-wrap">
        <div class="w-6/12 mb-auto ">
          <div class="pl-28 sm:pl-4">
            <div class="text-7xl titleFontBold mt-4 sm:mt-1 text-white lg:text-5xl md:text-3xl " >
                <div class="flex gap-4">
                    <img :src="$options.imageConfig.icons.grafico" class="mt-auto w-2/12 sm:w-2/12" /> 
                    <h1 class="sm:text-3xl lg:text-5xl md:text-3xl text-7xl ">
                      1,59%
                    </h1>
                </div>
            </div>
            <div class="pt-4 text-white text-3xl sm:text-xs sm:mt-1 sm:pt-1 leading-relaxed font-light md:text-xl lg:text-2xl">
                São os juros mensais do <br class="sm:hidden"/>empréstimo usando <br class="sm:hidden"/>
                o veículo como garantia.
            </div>
            <div class=" p-2 sm:p-1 sm:text-xs w-6/12 sm:w-full font-bold sm:font-normal bg-complementaryColor1 mt-4 sm:mt-1 mb-4 text-white text-center uppercase lg:w-5/6 md:w-5/6 md:text-sm md:p-1" >
                <a>Quero simular agora</a>
            </div>
          </div>
        </div>
        <div class="w-6/12 ">
          <img :src="$options.imageConfig.bestCar.imgMulher" alt="mulher recebendo chaves" class="w-full h-full rounded-r-2xl"/>
        </div>
      </div>
    </div>
</template>
<script>

import { defineComponent } from 'vue';
export default defineComponent({
    name: 'banner'
})

</script>
<style>

</style>