<template lang="">
  <div class="w-full h-full">
    <div class="bgCashBest sm:hidden">
      <div class="maxWidth xl:h-screen lg:h-screen" >
      <div class="maxWidth xl:h-screen lg:h-screen md:hidden" >
        <div class="w-full flex pt-20 md:pt-8 sm:pt-4">
          <div class="md:pt-4 sm:py-8 max-w-[600px] w-full">
            <div class="bg-primary rounded-xl w-full shadow-2xl p-12">
                <div class="text-6xl titleFontBold  text-white  pb-6" >
                  <h1><div><span class="textDecoration text-white">BestCar:</span> </div>
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
     <!-- Video Responsivo para tablets-->
    <div class=" sm:hidden xl:hidden lg:hidden">
      <div class="maxWidth " >
        <div class="w-full flex">
          <div class="w-1/2 pt-4 mt-auto mb-auto ">
            <div class="">
                <div class="text-5xl titleFontBold  text-white  pb-6" >
                  <h1><div>Conheça o <span class="textDecoration text-complementaryColor3">CashBest</span> </div>
                  <div class="text-5xl titleFontBold pt-2 text-white  " >
                    O Home Equity da SejaBest
                  </div></h1>
                </div>
                <div class=" py-4 text-white pb-6">
                  As menores taxas do mercado, a partir de <span class="font-semibold">0,88% a.m + IPCA ou fixa 1,49% a.m.</span>
                  Pegando até  <span class="font-semibold">60% do valor</span> do seu imóvel como capital para usar como quiser,  você tem até 240 meses para pagar.
                  <span class="text-complementaryColor3"> Assista ao lado e saiba como.</span>
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
                      <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
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
    <popUpVideo  v-if="showVideo" :videoUrl="videoUrl" 
      :videoStyle="videoStyle" @closePopUp="showVideo=false" /> 
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