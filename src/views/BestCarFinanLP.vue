<template lang="">
    <div>
        <topBarVideo />

        <!-- Div com conteúdo sem vídeo para mobile-->
        <div class="maxWidth xl:h-screen lg:h-screen xl:hidden lg:hidden md:hidden" >
        <div class="w-full flex pt-20 md:pt-8 sm:pt-4">
          <div class="md:pt-4 sm:py-8 max-w-[600px] w-full">
            <div class="bg-primary rounded-xl w-full shadow-2xl p-6">
                <div class="text-4xl titleFontBold  text-white  pb-6" >
                  <h1><div><span class="textDecoration italic text-white">FinanBest:</span> </div>
                  <div class="text-4xl titleFontBold pt-2 text-white  " >
                    Financiamento veicular da SejaBest
                  </div></h1>
                </div>
                  <div class=" pt-0 text-white pb-8 border-div-video">
                    Escolha o carro, novo ou usado, e financie até 100% do valor. Faça uma simulação agora
                    e veja como ficam as parcelas.
                  </div> 
                  <div class="flex pt-2">
                   <div class="w-6/12 text-sm text-white pt-2 font-semibold text-textPrimary"> 
                      De quanto <br /> você precisa?
                    </div>
                    <div class="w-full flex items-end gap-0">
                    <div class="w-9/12 pr-1">
                    <inputMoney class="w-full" v-model="value" id="value" label=""  placeholder=""  />
                    </div>
                    <div class="w-3/12 ">
                      <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center text-xs sm:mb-1" >
                        <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                        target="_blank">Simular</a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
          </div>  
        </div>

        <div class="flex pt-6">
          <div class="w-5/12 mb-auto md:mt-10 sm:w-full sm:hidden">
            <img :src="$options.imageConfig.bestCar.carroNotas" alt="" class="lg:w-[28rem] xl:w-[40rem] md:w-[20rem] sm:hidden max-w-3xl">
          </div>
          <div class="sm:w-full sm:text-left mb-auto text-primary xl:ml-14 xl:mt-24 lg:mt-16  md:mt-10 lg:ml-12 md:ml-[1.2rem] md:w-[55%] lg:w-7/12 w-6/12">
            <div class="md:w-full sm:text-center text-5xl  md:text-2xl lg:text-4xl sm:text-3xl text-center font-semibold mr-0">
              Com o FinanBest você tem: 
            </div>
                <cardWhite />
          </div>
        </div>
        <div class="bgLigthGrey xl:pt-16 lg:pt-14 md:pt-14 sm:pt-12 pb-18 md:pb-12">
            <h1 class="xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl text-secondary font-bold text-center xl:mb-16 lg:mb-12 md:mb-12 sm:mb-10 ">
                Passo a passo <span class="text-primary">para financiar seu carro</span>
            </h1>
            <stepByStep />
            <div class="maxWidth xl:mt-11 lg:mt-6 md:mt-6 px-28 sm:px-8">
                <P class="text-secondary md:text-sm text-lg text-center">
                    Com o carro na mão, você paga a <span class="font-bold underline">primeira parcela</span>
                    45 dias depois da aprovação. <br />Lembrando que o cálculo final do financiamento 
                    considera o valor do veículo <br /> financiado,entrada, quantidade de parccelas e juros.
                </P>
            </div>
        </div>
        <div class="bg-secondary">
        <div class="maxWidth flex flex-wrap pt-8 sm:pt-16 xl:py-20 lg:py-32 md:py-24 sm:hidden">
          <div class="w-1/2 sm:w-full mb-auto lg:p-4 text-white">
            <div class="xl:w-2/3 lg:w-2/3 md:w-full sm:text-center text-4xl md:text-3xl sm:text-3xl font-semibold mr-0">
              Por que fazer um financiamento de veículo?
            </div>
            <div class="py-6 pr-36 lg:pr-28 md:pr-12 text-xl md:text-lg sm:text-center ">
              Porque você já sai com o carro assim que fecha o contrato.<br/>Além disso, a taxa de juro é 
              mais baixa em comparação com linhas de crédito tradicionais
            </div>
            <div class=" p-2 w-4/12 lg:w-6/12 md:w-6/12 md:text-xs lg:text-xs bg-complementaryColor1 text-white text-center font-bold uppercase" >
                <a>Quero contratar</a>
            </div>
            </div>
            <div class="w-1/2 mt-auto mb-auto sm:w-full">
                <img :src= $options.imageConfig.bestCar.gráficoFinan alt="BestHub"  
                class="sm:w-full md:w-11/12 w-full h-auto  "/>
            </div>
        </div>
        <div class="bgLigthGrey">
            <partnersLabelGrey />
            <div class="maxWidth pt-20 py-16">
                <h1 class="text-4xl sm:text-2xl font-bold text-secondary pb-8">Dúvidas frequentes</h1>  
                <FaqFinan />
            </div>
                <h1 class="maxWidth text-4xl sm:text-2xl text-secondary text-center pt-12 pb-5">
                    Quem sonhou, se organizou e<br />
                    investiu com a ajuda da SejaBest
                </h1>
            <Carousel />
            <div>
                <comparativeBoardFinan />
            </div>
        </div>
    </div>
    <div class="w-full bg-gradient-to-r from-primary to-secondary pt-16 pb-4 sm:mt-0 sm:pt-3 lg:pt-0 md:pt-0" >
        <div class="maxWidth sm:p-0 p-0Max  flex justify-center ">
            <div class="w-3/12 sm:w-6/12 md:w-4/12 relative">
                <img :src="$options.imageConfig.home.photoFooter"  alt="Gaspar Motta Filho"
                    class="w-full sm:w-[65%]  max-90 absolute bottom-[-1.77rem] sm:bottom-[-1.4rem] md:bottom-[-2.6rem] lg:bottom-[-2.7rem] h-auto "/>
            </div>
        <div class="w-9/12 sm:w-6/12 md:w-8/12  sm:mr-2">
            <div class="text-white pt-4 sm:pt-1 titleFontBold text-7xl lg:text-6xl md:text-5xl sm:text-2xl textphoneMini text-right md:mr-1 sm:mr-0">
                E aí, vamos ser<br/> Best com a gente?
        </div>
        <div class="w-full flex">
            <div class="flex pt-4 sm:pt-2 justify-end w-full">
                   <div class="mt-4 mr-2 text-lg md:text-base md:text-right sm:text-xs sm:mr-1 text-white pt-2 text-textPrimary"> 
                      De quanto você precisa?
                    </div>
                    <div class="flex items-end w-5/12 md:w-[58%] sm:w-full gap-4 md:gap-1 sm:gap-0">
                    <div class="w-9/12 sm:w-full pr-1">
                        <inputMoney class="w-full " v-model="value" id="value" label=""  placeholder=""  />
                    </div>
                    <div class="w-4/12 ">
                        <div class="  p-2 w-full sm:p-1 bg-complementaryColor1 rounded-xl text-white text-center" >
                            <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                             target="_blank" class="sm:hidden">Simular</a>
                             <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                             target="_blank" class="sm:visible sm:text-xs xl:hidden lg:hidden md:hidden">Ir</a>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
  </div>
</div>  
</template>

<script>
import { defineComponent } from 'vue';
import topBarVideo from '@/components/vehicle/BestCarFinan/topBarVideo.vue';
import cardWhite from '@/components/vehicle/BestCarFinan/cardWhite.vue';
import stepByStep from '@/components/vehicle/BestCarFinan/stepByStep.vue';
import partnersLabelGrey from '@/components/vehicle/BestCarFinan/partnersLabelGrey.vue';
import FaqFinan from '@/components/vehicle/BestCarFinan/FaqFinan.vue';
import Carousel from '@/components/vehicle/BestCarLP/carousel.vue';
import comparativeBoardFinan from '@/components/vehicle/BestCarFinan/comparativeBoardFinan.vue';
export default defineComponent({
    name: "BestCarFinanLP",
    components:{ topBarVideo,cardWhite,stepByStep,partnersLabelGrey,
        FaqFinan,Carousel,comparativeBoardFinan
    }
})

</script>

<style>
  /* estilo das setas do carrosel */

    .splide__arrow svg {
      fill: #fff;
    }
    .splide__arrow{
      opacity: 10;
    }

    @media (max-width: 667px) {
      .inputBase{
        padding: 0.25rem;
    }
  }

 
    @media (max-width:667px) {
      .p-0Max.maxWidth{
        padding: 0rem;
      }
    }

    @media (max-width:380px) {
      .max-90{
        width: 90%;
      }
    }
      @media (max-width:380px) {
      .textphoneMini{
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    }
</style>