<template>
  <div class="maxWidth h-screen overflow-hidden">
  <carousel :itemsToShow="3" :wrapAround="true" :transition="400" >
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
    <slide :key="slide" :style="{'width' : auto}">
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
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data(){
    return{
      auto: 'auto',
    }
  }
}
</script>
<style scoped>


.carousel__viewport {
  perspective: 1000px;
  height: 100%;
}
.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.8);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.8);
}

.carousel__slide--prev {
  opacity: 0.8;
  transform: rotateY(-10deg) scale(0.8);
  z-index: 0;
  margin-left: 4rem;
  
}

.carousel__slide--next {
  opacity: 0.8;
  transform: rotateY(10deg)  scale(0.8);
  z-index: 0;
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
  z-index: 1;
}
.carousel__slide--clone{
  display: none;
}
</style>