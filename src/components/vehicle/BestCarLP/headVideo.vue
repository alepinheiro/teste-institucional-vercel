<template lang="">
  <div class="w-full h-full">
    <div class="bgCashBest">
      <div class="maxWidth xl:h-screen lg:h-screen" >
      <div class="maxWidth xl:h-screen lg:h-screen  sm:hidden md:hidden" >
        <div class="w-full flex pt-20 md:pt-8 sm:pt-4">
          <div class="md:pt-4 sm:py-8 max-w-[600px] w-full">
            <div class="bg-primary rounded-xl w-full shadow-2xl p-12">
                <div class="text-6xl titleFontBold  text-white  pb-6" >
                  <h1><div><span class="textDecoration flex w-52 pb-1 text-white">BestCar:</span> </div>
                  <div class="text-6xl titleFontBold pt-2 text-white  " >
                    Empréstimo com garantia de veículo
                  </div></h1>
                </div>
                  <div class=" pt-0 text-white pb-8 border-b">
                    Use o seu carro como garantia em troca das melhores taxas.Você consegue crédito para
                    seus objetivos fincanceiros <span class="font-semibold">sem precisar veder o veículo</span>
                    com taxas a partir de  <span class="font-semibold">0.00% ao mês</span> 
                    <span class="text-white font-bold"> e prazos de té 000 meses.</span>
                  </div> 
                  <div class="flex pt-2">
                   <div class="w-6/12 text-lg text-white pt-2 font-semibold text-textPrimary"> 
                      Quanto vale <br /> o seu sonho?
                    </div>
                    <div class="w-full flex items-end gap-4">
                    <div class="w-9/12 pr-1">
                    <inputMoney class="w-full" v-model="value" id="value" label=""  placeholder=""  />
                    </div>
                    <div class="w-3/12 ">
                    <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center" >
                      <a :href="$options.information.simuladorVeicular+this.$root.utms"  style=" text-decoration: none;"
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
     <!-- Video Responsivo para tablets-->
      <div class=" sm:hidden xl:hidden lg:hidden">
        <div class="maxWidth " >
        <div class="w-full flex">
          <div class="w-1/2 pt-4 mt-auto mb-auto ">
            <div class="">
                <div class="text-5xl titleFontBold  text-white  pb-6" >
                  <h1><div><span class="textDecoration flex w-42 pb-1 text-complementaryColor3">BestCar</span> </div>
                  <div class="text-5xl titleFontBold pt-2 text-white  " >
                    Empréstimo com garantia de veículo
                  </div></h1>
                </div>
                <div class=" py-4 text-white pb-6">
                  Use o seu carro como garantia em troca das melhores taxas.Você consegue crédito para
                  seus objetivos fincanceiros <span class="font-semibold">sem precisar veder o veículo</span>
                  com taxas a partir de  <span class="font-semibold">0.00% ao mês</span> 
                  <span class="text-white font-bold"> e prazos de té 000 meses.</span>
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
                    <inputMoney class="w-full" v-model="value" id="value" label=""  placeholder=""  />
                  </div>
                  <div class="w-3/12 ">
                    <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center" >
                      <a :href="$options.information.simuladorVeicular+this.$root.utms"  style=" text-decoration: none;"
                      target="_blank">Simular</a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div @click="showVideo=true" class="w-1/2 text-white md:pr-4 sm:hidden mt-auto mb-auto">
            <img :src="$options.imageConfig.cashBest.phoneVideoMd" alt="Video crédito com garantia de imóvel"  class="w-8/12 h-auto mr-auto ml-auto "/>
          </div>
        </div>
      </div>
    </div>
    <!--Inicio video Mobile-->
    <div class=" xl:hidden lg:hidden md:hidden">
      <div class="maxWidth " >
        <topbarComponent position="relative" />
        <div class="w-full ">
          <div @click="showVideo=true" class="w-full mt-4">
            <img :src="$options.imageConfig.cashBest.phoneVideo" alt="Video crédito com garantia de imóvel" class="w-full h-auto "/>
          </div>
          <div class="py-8 sm:py-4  w-full">
            <div class=" rounded-xl w-full ">
                <div class="text-4xl titleFontBold  text-white  pb-2" >
                  <h1><div><span class="textDecoration flex w-30 pb-1 text-complementaryColor3">BestCar</span> </div>
                  <div class="text-4xl titleFontBold pt-2 text-white  " >
                    Empréstimo com garantia de veículo
                  </div></h1>
                </div>
                <div class=" py-4 text-white pb-6">
                  Use o seu carro como garantia em troca das melhores taxas.Você consegue crédito para
                  seus objetivos fincanceiros <span class="font-semibold">sem precisar veder o veículo</span>
                  com taxas a partir de  <span class="font-semibold">0.00% ao mês</span> 
                  <span class="text-white font-bold"> e prazos de té 000 meses.</span>
                </div>
                <div class="bg-bglight2Color p-4 rounded-xl">
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
                      <inputMoney class="w-full" v-model="value" id="value" label=""  placeholder=""  />
                    </div>
                    <div class="w-3/12 ">
                      <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center" >
                        <a :href="$options.information.simuladorVeicular+this.$root.utms"  style=" text-decoration: none;"
                        target="_blank">Simular</a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <popUpVideo  v-if="showVideo" :videoUrl="videoUrl" 
      :videoStyle="videoStyle" @closePopUp="showVideo=false" /> 
    </div>
    <!--fim do video mobile-->
    </div>
</div>
</template>
<script>
import { defineComponent } from 'vue';
import popUpVideo from "@/components/base/popUpVideo.component.vue"
export default defineComponent({
  name: "headVideo",
  components:{popUpVideo},
  data() {
    return {
      isVisible:false,
      value:300000,
      showVideo:false,
      videoStyle: "w-full h-[36rem] mr-auto ml-auto rounded-2xl ",
      videoUrl:"https://www.youtube.com/embed/Mlg8eDX61uE",
      tutorial:{
        show1:false,
        show2:false,
        show3:false,
        show4:false,
      }
    }
  },
})
</script>
<style lang="">
    
</style>