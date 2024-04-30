<template>
  <div class="w-full h-full">
    <!-- 🖥️ Desktop -->
    <section class="bgBextCar">
      <div class="maxWidth xl:h-screen lg:h-screen">
        <TopBar v-if="showMenu" customMobileMenuColor="white" color="primary" class="text-white" />
        <div class="maxWidth">

          <div class="w-full xl:w-5/12 lg:w-5/12 md:w-10/12 md:mr-auto md:ml-auto pt-24 sm:pt-8 ">
            <div class="py-8 sm:py-4 mt-4 w-full bg-bgLightColor p-6 rounded-lg">
              <div class="rounded-xl w-full">
                <div class="titleFontBold flex pb-2">
                  <h1 class="text-5xl sm:text-4xl textDecoration pb-1 text-primary">
                    BextCar:
                  </h1>
                  
                </div>
                <h1 class="text-3xl sm:text-2xl titleFontBold pt-2 ">
                    Empréstimo com Garantia de Veículo
                  </h1>
                <p class="py-4  pb-6">
                  Use o seu carro como garantia em troca das melhores taxas. Você
                  consegue crédito para seus objetivos financeiros
                  <span class="font-semibold">sem precisar vender o veículo</span>
                  com taxas a partir de
                  <span class="font-semibold">1,59% ao mês</span>
                  <span class=" font-bold">
                    e prazos de até 60 meses.</span>
                </p>
                <div class="bg-bgLight2Color p-3 rounded-xl">
                  <div class="flex w-full items-center justify-center border-b-1 border-primary pb-4">
                    <div class=" mt-auto mb-auto p-2 sm:pr-4 ">
                      <img :src="$options.imageConfig.brand.iconBlue.image"
                        :alt="$options.imageConfig.brand.iconBlue.alt" class="w-6 sm:w-12  h-auto mr-auto ml-auto" />
                    </div>
                    <p class="sm:text-xl">
                      Sem <span class="text-primary">Filas.</span> Sem
                      <span class="text-primary">gerentes.</span> Sem
                      <span class="text-primary">complexidade.</span>
                    </p>
                  </div>
                  <h2 class="w-full text-2xl text-center pt-4 font-bold ">
                    De quanto você precisa?
                  </h2>
                  <div class="w-full ">
                    <inputMoney id="value" v-model="value" class="w-full text-xl mb-4" label="" placeholder="" />
                    <div class="py-3 px-8 w-full bg-primary rounded-xl text-white font-bold text-center">
                        <a :href="$options.information.appVehicleSimulator +
                          useObjectToQueryString($route.query)
                          " style="text-decoration: none" 
                          aria-label="Clique aqui para simular seu financiamento" target="_blank">
                          Simular
                        </a>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useObjectToQueryString } from '@/composables/useObjectToQueryString'
import TopBar from '@/components/structure/topBar/index.component.vue'
export default defineComponent({
  name: 'HeadVideo',
  components: {
    TopBar
  },
  props: {
    showMenu: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      useObjectToQueryString,
      isVisible: false,
      value: 40000,
      showVideo: false,
      videoStyle: 'w-full h-[36rem] mr-auto ml-auto rounded-2xl ',
      videoUrl: 'https://www.youtube.com/embed/Mlg8eDX61uE',
      tutorial: {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
      },
    }
  },
})
</script>

<style>
@media (min-width: 1880px) {
  .mt-xxl {
    margin-top: 9rem;
  }
}
</style>
