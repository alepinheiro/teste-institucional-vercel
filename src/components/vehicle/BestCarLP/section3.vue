<template lang="">
    <div class="">
        <div class="maxWidth flex flex-wrap pt-8 sm:pt-16 xl:py-20 lg:py-32 md:py-24 sm:hidden">
          <div class="w-1/2 sm:w-full mb-auto text-white">
            <div class="xl:w-2/3 lg:w-2/3 md:w-full sm:text-center text-4xl md:text-3xl sm:text-3xl font-semibold mr-0 xl:leading-normal">
              Por que fazer um empréstimo com garantia de veículo?
            </div>
            <div class="py-6 pr-36 lg:pr-28 md:pr-12 text-2xl md:text-lg sm:text-center ">
              Porque é uma das modalidades de crédito  com as menores taxas de juros ao ano
              do mercado.Olhe no gráfico ao lado e compare.
            </div>
            <div class=" p-2 w-4/12 md:w-6/12 lg:w-6/12 md:text-xs bg-complementaryColor1 text-white text-center font-bold uppercase" >
                <a :href="$options.information.appVehicleSimulator+this.$root.utms"  target="_blank">Quero contratar</a>
            </div>
            </div>
            <div class="w-1/2 mt-auto mb-auto sm:w-full">
                <img :src= $options.imageConfig.bestCar.gráficoBestCar alt="BestHub"  
                class="sm:w-full md:w-11/12 w-full h-auto  "/>
            </div>
        </div>
        <partnersLabel />
    </div>
</template>

<script>
import partnersLabel from './partnersLabel.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'section3',
    components: {partnersLabel
    } 
})
</script>
<style lang="">
    
</style>