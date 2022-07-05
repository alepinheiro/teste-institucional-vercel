<template>
<div class="text-textPrimary">
  <div class="bgBannerPrimary">
    <div class="maxWidth xl:h-screen lg:h-screen" >
      <topbarComponent position="relative" />
      <div class="w-full flex flex-wrap justify-between mt-24 md:mt-4 sm:mt-4">
        <div class="sm:w-full md:w-7/12 text-white md:pr-4   mt-auto mb-auto">
          <div class="text-4xl sm:text-2xl md:text-2xl  font-semibold ">Empréstimo com as <br><span class=" textDecoration"> menores taxas</span> do mercado</div>
          <div class="font-semibold lg:text-2xl xl:text-2xl md:py-4  sm:py-4  py-16">Use seu imóvel para garantir as melhores condições <br> com até 240x para pagar usando o dinheiro como preferir.</div>
          <div class=" flex justify-between sm:justify-around">
            <div class="">
              <img :src="$options.imageConfig.icons.percentageWhite"  class="w-20 mr-auto ml-auto"/>
              <div class="text-sm text-center">Taxa a partir de<br/> 0,79% a.m + IPCA </div>
            </div>
            <div class="">
              <img :src="$options.imageConfig.icons.moneyWhite"  class="w-20 mr-auto ml-auto"/>
               <div class="text-sm text-center">Prazo de até<br/> 240 X</div>
            </div>
            <div class="sm:hidden">
              <img :src="$options.imageConfig.icons.calendarWhite"  class="w-20 mr-auto ml-auto"/>
               <div class="text-sm text-center">Atendimento personalizado<br/>7 dias por semana</div>
            </div>
          </div>
        </div>
        <div class="pt-24 md:pt-4 sm:py-8 md:w-5/12 max-w-sm w-full md:mr-auto md:ml-auto sm:mr-auto sm:ml-auto mb-8">
          <div class="bg-white rounded-xl w-full shadow-2xl p-4 py-24 md:py-12 sm:py-12">
              <div class="text-3xl sm:text-2xl font-semibold pb-3 text-primary "><span class=" textDecoration"> Vamos começar?</span></div>
              <div class="text-xl sm:text-lg">Nos conte de quanto você precisa?</div>
              <inputMoney v-model="value" id="value" label=""  placeholder=""  />
              <div class="buttonBlue mt-12 text-center xl:text-xl w-full">
                <a href="https://simulador.seja.best/"  style=" text-decoration: none;"
                  target="_blank">Simule seu crédito</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white w-full flex flex-wrap">
    <div></div>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import topbarComponent from '@/components/structure/topbar.component.vue';
export default defineComponent({
  name: 'Home',
  components:{
    topbarComponent 
  },
  data() {
    return {
      isVisible:false,
      value:100000,
    }
  },
})
</script>
