<template>
  <div class="w-full h-full">
    <div class="bgBestcar sm:hidden md:hidden z-10">
      <div class="maxWidth xl:h-screen lg:h-screen" >
      <topbarComponent class="relative" :class="{'hidden': isLP}"/>
      <div class="maxWidth xl:h-screen lg:h-screen  sm:hidden md:hidden z-10" >
        <div class="w-full flex pt-5 md:pt-8 sm:pt-4">
          <div class="md:pt-4 sm:py-8 max-w-[600px] w-full">
            <div class="bg-primary rounded-xl w-full shadow-2xl p-12 mt-xxl xl:mt-6  lg:mt-12">
                <div class="text-6xl titleFontBold  text-white  pb-6" >
                  <h1><div><span class="textDecoration flex w-52 pb-1 text-white">BestCar:</span> </div>
                  <div class="text-6xl titleFontBold pt-2 text-white  " >
                    Empréstimo com Garantia de Veículo
                  </div></h1>
                </div>
                  <div class=" pt-0 text-white pb-8 border-b">
                    Use o seu carro como garantia em troca das melhores taxas.Você consegue crédito para
                    seus objetivos fincanceiros <span class="font-semibold">sem precisar vender o veículo</span>
                    com taxas a partir de  <span class="font-semibold">1,59% ao mês</span> 
                    <span class="text-white font-bold"> e prazos de até 60 meses.</span>
                  </div> 
                  <div class="flex pt-2">
                   <div class="w-6/12 text-lg text-white pt-2 font-semibold text-textPrimary"> 
                      Quanto vale <br /> o seu sonho?
                    </div>
                    <div class="w-full flex items-end gap-4">
                    <div class="w-9/12 pr-1">
                    <inputMoney id="value" v-model="value" class="w-full" label="" placeholder=""  />
                    </div>
                    <div class="w-3/12 ">
                    <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center" >
                      <a 
                      :href="$options.information.appVehicleSimulator+($root as IRootExtension).utms"  style="text-decoration: none;"
                      target="_blank">Simular</a>
                    </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
          <div class="h-[500px] p-16 w-[600px]  md:w-7/12 text-white md:pr-4 sm:hidden" @click="showVideo=true">
        </div>
        </div>
        </div>
     </div>
    </div>
         <!-- Video Responsivo para tablets-->
    <div class=" sm:hidden xl:hidden lg:hidden bg-primary">
      <div class="maxWidth " >
        <topbarComponent class="relative"/>
        <div class="w-full flex items-center justify-center">
          <div class="w-6/2 pt-4 mt-auto mb-auto justify-cente item-center">
                <div class="bg-secondary p-6 rounded-lg shadow-lg">
                <div class="text-5xl titleFontBold  text-white  pb-6" >
                  <h1><div><span class="textDecoration flex w-42 pb-1 text-complementaryColor3">BestCar</span> </div>
                  <div class="text-5xl titleFontBold pt-2 text-white  " >
                    Empréstimo com Garantia de Veículo
                  </div></h1>
                </div>
                <div class=" py-4 text-white pb-6">
                  Use o seu carro como garantia em troca das melhores taxas. Você consegue crédito para
                  seus objetivos fincanceiros <span class="font-semibold">sem precisar vender o veículo</span>
                  com taxas a partir de  <span class="font-semibold">1,59% ao mês</span> 
                  <span class="text-white font-bold"> e prazos de até 60 meses.</span>
                </div>
                <div class="flex w-full items-center border-b-1 border-complementaryColor3 pb-4">
                  <div class="w-2/12 pr-6 mt-auto mb-auto">
                    <img  :src="$options.imageConfig.iconSejaBestWhite" alt="SejaBest"  class="w-12 h-auto ">
                  </div>
                  <div class="w-10/12 text-lg text-white"> 
                    Sem <span class="text-complementaryColor3">Filas.</span> 
                    Sem <span class="text-complementaryColor3">gerentes.</span>  
                    Sem <span class="text-complementaryColor3">complexidades</span> 
                  </div>
                </div>
                <div class="w-10/12 text-xl text-white pt-2 font-semibold text-textPrimary"> 
                  De quanto você precisa?
                </div>
                <div class="w-full flex  items-end justify-between">
                  <div class="w-9/12 pr-1">
                    <inputMoney id="value" v-model="value" class="w-full" label="" placeholder=""  />
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  </div>
    <!--Inicio video Mobile-->
    <div class=" xl:hidden lg:hidden md:hidden bg-primary">
      <div class="maxWidth " >
        <topbarComponent position="relative" />
        <div class="w-full ">
          <div class="py-8 sm:py-4  mt-4  w-full bg-secondary p-6 rounded-lg">
            <div class=" rounded-xl w-full ">
                <div class="text-4xl titleFontBold  text-white  pb-2" >
                  <h1><div><span class="textDecoration flex w-30 pb-1 text-complementaryColor3">BestCar</span> </div>
                  <div class="text-4xl titleFontBold pt-2 text-white  " >
                    Empréstimo com Garantia de Veículo
                  </div></h1>
                </div>
                <div class=" py-4 text-white pb-6">
                  Use o seu carro como garantia em troca das melhores taxas. Você consegue crédito para
                  seus objetivos fincanceiros <span class="font-semibold">sem precisar vender o veículo</span>
                  com taxas a partir de  <span class="font-semibold">1,59% ao mês</span> 
                  <span class="text-white font-bold"> e prazos de até 60 meses.</span>
                </div>
                <div class="bg-bglight2Color p-3 rounded-xl">
                  <div class="flex w-full items-center border-b-1 border-primary pb-4">
                    <div class="w-2/12 pr-6 mt-auto mb-auto">
                      <img  :src="$options.imageConfig.iconSejaBest" alt="SejaBest" class="w-6 h-auto ">
                    </div>
                    <div class="w-10/12 text-lg "> 
                      Sem <span class="text-primary">Filas.</span> 
                      Sem <span class=" text-primary">gerentes.</span>  
                      Sem <span class=" text-primary">complexidade</span> 
                    </div>
                  </div>
                  <div class="w-10/12 text-xl  pt-2 font-semibold text-textPrimary"> 
                    De quanto você precisa?
                  </div>
                  <div class="w-full flex  items-end justify-between">
                    <div class="w-9/12 pr-1">
                      <inputMoney id="value" v-model="value" class="w-full" label="" placeholder=""  />
                    </div>
                    <div class="w-3/12 ">
                      <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center" >
                        <a 
                        :href="$options.information.appVehicleSimulator+($root as IRootExtension).utms"  
                        style=" text-decoration: none;"
                        target="_blank">Simular</a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    <!--fim do video mobile-->
    </div>
</div>
</template>

<script lang="ts">

import { defineComponent, ComponentPublicInstance } from 'vue';
import topbarComponent from '@/components/structure/topbar.component.vue';

type IRootExtension = ComponentPublicInstance & { [key: string]: any }

export default defineComponent({
  name: "HeadVideo",
  components: { topbarComponent },
  props: {
    isLP: Boolean
  },
  data() {
    return {
      isVisible: false,
      value: 40000,
      showVideo: false,
      videoStyle: "w-full h-[36rem] mr-auto ml-auto rounded-2xl ",
      videoUrl: "https://www.youtube.com/embed/Mlg8eDX61uE",
      tutorial: {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
      }
    }
  },
})
</script>
<style>
@media (min-width:1880px) {
  .mt-xxl {
    margin-top: 9rem
  }
}
</style>