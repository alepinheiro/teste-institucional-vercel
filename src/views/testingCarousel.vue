<template>
  <div class="overflow-hidden maxWidth">
  <carousel :itemsToShow="3" :transition="300" :itemsToScroll="1" wrapAround="true" :modelValue="0">
    <slide :key="slide"  :style="{'width' : auto}">
      <div class="w-full  max-w-sm p-4">
                <div class="border-1 rounded-xl w-full text-white ">
                  <div class=" rounded-t-xl bg-primary p-4  text-center border-b-4 border-complementaryColor1">
                    <div class="text-4xl titleFont">Cash<span class="font-semibold">Best</span></div>
                    <div class="text-xl defaultFont">Conheça o Crédito com </div>
                    <div class="text-xl defaultFont">garantia de imóvel</div>
                  </div>
                  <div class="w-full p-6 bg-secondary rounded-b-xl">
                    <div class="w-full flex  items-center">
                      <div class="pr-6 ">
                        <img :src="$options.imageConfig.icons.percentageFill" alt="Taxa"  class="w-9 h-8  "/>
                      </div>
                      <div class="text-xl w-full">
                        As menores taxas do mercado, a partir de 0,88% a.m. + IPCA ou 1,49% a.m. Fixa
                      </div>
                    </div>
                    <div class="w-full flex pt-6 items-center">
                      <div class="pr-6 ">
                        <img :src="$options.imageConfig.icons.calendarFill" alt="Prazo" class="w-9 h-8  "/>
                      </div>
                      <div class="text-xl w-full">
                        Prazos de até 20 anos
                      </div>
                    </div>
                    <div class="w-full flex pt-6 items-center">
                      <div class="pr-6 ">
                        <img :src="$options.imageConfig.icons.moneyFill" alt="Valor"  class="w-9 h-8  "/>
                      </div>
                      <div class="text-xl w-full">
                        Até 60% do valor do imóvel como capital
                      </div>
                    </div>
                    <div class="buttonComplementaryColor1 mt-6 text-center">
                      <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                        target="_blank">Faça uma simulação</a>
                    </div>
                  </div>
                </div>
              </div>        
    </slide>
    <slide :key="slide" :style="{'width' : auto}" >
      <div class="w-full mr-auto ml-auto max-w-sm p-4" id="card2">
                <div class="border-1 w-full gradienteSBDark  rounded-xl text-white ">
                  <div class=" rounded-t-xl bg-secondary p-4  text-center border-b-4 border-complementaryColor3">
                    <div class="text-4xl titleFont">Finan<span class="font-semibold">Best</span></div>
                    <div class="text-xl defaultFont">As melhores soluções em </div>
                    <div class="text-xl defaultFont
                    
                    ">Financiamento imobiliário</div>
                  </div>
                  <div class="w-full p-6 rounded-b-xl ">
                    <div class="w-full flex  items-center">
                      <div class="pr-6 ">
                        <img :src="$options.imageConfig.icons.percentageFill" alt="Taxa"  class="w-9 h-8  "/>
                      </div>
                      <div class="text-xl w-full">
                        Taxas a partir de 9,70% a.a. + taxas referencial
                      </div>
                    </div>
                    <div class="w-full flex pt-8 items-center">
                      <div class="pr-6 ">
                        <img :src="$options.imageConfig.icons.calendarFill" alt="Prazo" class="w-9 h-8  "/>
                      </div>
                      <div class="text-xl w-full">
                        Pague em até 420 meses
                      </div>
                    </div>
                    <div class="w-full flex pt-8 items-center">
                      <div class="pr-6 ">
                        <img :src="$options.imageConfig.icons.moneyFill" alt="Banco" class="w-9 h-8  "/>
                      </div>
                      <div class="text-xl w-full">
                        Os melhores bancos do mercado
                      </div>
                    </div>
                    <div class="buttonComplementaryColor1 mt-8 text-center">
                      <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                        target="_blank">Faça uma simulação</a>
                    </div>
                  </div>
                </div>
              </div>       
    </slide>
    <slide :key="slide" :style="{'width' : auto}" :class="{'moveCloseL' : Index1}">
      <div class="w-full mr-auto ml-auto max-w-sm p-4" id="card3">
                <div class="border-1 w-full gradienteSBDark  rounded-xl text-white ">
                  <div class=" rounded-t-xl bg-secondary p-4  text-center border-b-4 border-complementaryColor3">
                    <div class="text-4xl titleFont">Car<span class="font-semibold">Best</span></div>
                    <div class="text-xl defaultFont">Empréstimo com</div>
                    <div class="text-xl defaultFont">Garantia de veículo</div>
                  </div>
                  <div class="w-full p-6 rounded-b-xl ">
                    <div class="w-full flex  items-center">
                      <div class="pr-6 ">
                        <img :src="$options.imageConfig.icons.percentageFill" alt="Taxa"  class="w-9 h-8  "/>
                      </div>
                      <div class="text-xl w-full">
                        Taxas a partir de 9,70% a.a. + taxas referencial
                      </div>
                    </div>
                    <div class="w-full flex pt-8 items-center">
                      <div class="pr-6 ">
                        <img :src="$options.imageConfig.icons.calendarFill" alt="Prazo" class="w-9 h-8  "/>
                      </div>
                      <div class="text-xl w-full">
                        Pague em até 420 meses
                      </div>
                    </div>
                    <div class="w-full flex pt-8 items-center">
                      <div class="pr-6 ">
                        <img :src="$options.imageConfig.icons.moneyFill" alt="Banco" class="w-9 h-8  "/>
                      </div>
                      <div class="text-xl w-full">
                        Os melhores bancos do mercado
                      </div>
                    </div>
                    <div class="buttonComplementaryColor1 mt-8 text-center">
                      <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                        target="_blank">Faça uma simulação</a>
                    </div>
                  </div>
                </div>
              </div>       
    </slide>
    <slide :key="slide" :style="{'width' : auto}" >
      <div class="w-full  max-w-sm p-4"  id="card4" >
                <div class="border-1 rounded-xl w-full text-white ">
                  <div class=" rounded-t-xl bg-primary p-4  text-center border-b-4 border-complementaryColor1">
                    <div class="text-4xl titleFont">Financiamento veicular</div>
                    <div class="text-xl defaultFont">Seu sonho de ter um</div>
                    <div class="text-xl defaultFont">veículo está a uma simulação!</div>
                  </div>
                  <div class="w-full p-6 bg-secondary rounded-b-xl">
                    <div class="w-full flex  items-center">
                      <div class="pr-6 ">
                        <img :src="$options.imageConfig.icons.percentageFill" alt="Taxa"  class="w-9 h-8  "/>
                      </div>
                      <div class="text-xl w-full">
                        As menores taxas do mercado, a partir de 0,88% a.m. + IPCA ou 1,49% a.m. Fixa
                      </div>
                    </div>
                    <div class="w-full flex pt-6 items-center">
                      <div class="pr-6 ">
                        <img :src="$options.imageConfig.icons.calendarFill" alt="Prazo" class="w-9 h-8  "/>
                      </div>
                      <div class="text-xl w-full">
                        Prazos de até 20 anos
                      </div>
                    </div>
                    <div class="w-full flex pt-6 items-center">
                      <div class="pr-6 ">
                        <img :src="$options.imageConfig.icons.moneyFill" alt="Valor"  class="w-9 h-8  "/>
                      </div>
                      <div class="text-xl w-full">
                        Até 60% do valor do imóvel como capital
                      </div>
                    </div>
                    <div class="buttonComplementaryColor1 mt-6 text-center">
                      <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                        target="_blank">Faça uma simulação</a>
                    </div>
                  </div>
                </div>
              </div>        
            </slide>
    <template #addons>
      <div>
        <navigation />
      </div>
    </template>
  </carousel>
</div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data(){
    return{
      auto: 'auto',
      Index1: 2
    }
  }
}
</script>
<style>

.carousel__viewport {
  perspective: 1000px;
  height: 100%;
}
.carousel__track {
  transform-style: preserve-3d;
  transform: translateX(-129.2%)  !important;
  margin: 0 0 0 0 !important;

}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.8;
  transform: rotateY(0deg) scale(0.8);
}

.carousel__slide--active ~ .carousel__slide {
  transform: translateX(-20%) scale(0.8);
}

.carousel__slide--prev {
  opacity: 0.8;
  transform:  translateX(10%) scale(0.8);
  z-index: 0;
  
}

.carousel__slide--next {
  opacity: 0.8;
  transform: scale(0.8);
  z-index: 0;
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
  z-index: 1;
}

.carousel__prev {
    left: 30px;
}
.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
    background-color: white;
}

.carousel__pagination-button::after {
    display: block;
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius:100%;
    background-color: var(--vc-pgn-background-color);
}

#card4{
  transform: translateX(-73%);
}


#card3{
  transform: translateX(-31%);
}

.carousel__slide--prev > #card2 {
  transform: translateX(-41%);
}
.carousel__slide> #card2 {
  transform: translateX(-30%);
}

.carousel__slide--prev > #card2 {
  transform: translateX(-41%);
}
.carousel__slide> #card2 {
  transform: translateX(-30%);
}
</style>