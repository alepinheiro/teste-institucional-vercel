<template lang="">
  <div class="w-full h-full">
    <div class="bgCashBest sm:hidden md:hidden">
      <div class="maxWidth xl:h-screen lg:h-screen" >
        <topbarComponent position="relative" />
      <div class="maxWidth xl:h-screen lg:h-screen" >
        <div class="w-full flex pt-20 md:pt-8 sm:pt-4">
          <div class="md:pt-4 sm:py-8 max-w-[600px] w-full">
            <div class="bg-primary rounded-xl w-full shadow-2xl p-12">
                <div class="text-6xl titleFontBold  text-white  pb-6" >
                  <h1><div><span class="textDecoration italic text-white">FinanBest:</span> </div>
                  <div class="text-6xl titleFontBold pt-2 text-white  " >
                    Financiamento veicular da SejaBest
                  </div></h1>
                </div>
                  <div class=" pt-0 text-white pb-8 border-div-video">
                    Escolha o carro, novo ou usado, e financie até 100% do valor. Faça uma simulação agora
                    e veja como ficam as parcelas.
                  </div> 
                  <div class="flex pt-2">
                   <div class="w-6/12 text-lg text-white pt-2 font-semibold text-textPrimary"> 
                      De quanto <br /> você precisa?
                    </div>
                    <div class="w-full flex items-end gap-4">
                    <div class="w-9/12 pr-1">
                    <inputMoney class="w-full" v-model="value" id="value" label=""  placeholder=""  />
                    </div>
                    <div class="w-3/12 ">
                    <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center" >
                      <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                      target="_blank">Simular</a>
                    </div>
                    </div>
                    </div>
                </div>
          </div>
        </div>
          <div @click="showVideo=true" class="h-[500px] p-16 w-[600px]  md:w-7/12 text-white md:pr-4 sm:hidden ">
          </div>
        </div>
        </div>
     </div> 
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import topbarComponent from '@/components/structure/topbar.component.vue';
export default defineComponent ({
    name: "topBarVideo",
    components: {
      topbarComponent
    } 
})
</script>
<style lang="">
    
</style>