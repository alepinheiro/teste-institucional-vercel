<template>
  <div>
    <TopBarVideo :showMenu="showMenu" />

    <section class="flex pt-6 maxWidth">
      <div
        class="w-5/12 md:w-4/12 mb-auto mt-16 xl:mt-6 md:mt-10 sm:w-full sm:hidden md:hidden"
      >
        <img
          :src="$options.imageConfig.BextCar.carroNotas"
          alt="Uma mercedez benz branca com cédulas de cem reais ao fundo"
          class="absolute left-[-4rem] lg:left-[-3rem] md:left-[-4rem] lg:w-[30rem] xl:w-[45rem] md:w-[24rem] sm:hidden max-w-3xl"
        />
      </div>
      <div
        class="sm:w-full sm:text-left mb-auto text-primary xl:ml-24 xl:mt-24 lg:mt-16 md:mt-10 lg:ml-12 lg:w-7/12 w-full md:justify-center md:flex md:flex-col"
      >
        <h1
          class="sm:pt-20 md:w-full sm:text-center text-5xl md:text-2xl lg:text-4xl sm:text-3xl text-center font-semibold mr-0 flex justify-end md:justify-center lg:justify-center sm:justify-center"
        >
          Com o FinanBest você tem:
        </h1>
        <CardWhite />
      </div>
    </section>

    <section
      class="bgLigthGrey xl:pt-16 lg:pt-14 md:pt-14 sm:pt-12 pb-18 md:pb-12"
    >
      <h1
        class="xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl text-primary font-bold text-center xl:mb-16 lg:mb-12 md:mb-12 sm:mb-10"
      >
        Passo a passo <span class="text-primary">para financiar seu carro</span>
      </h1>
      <StepByStep />
      <div class="maxWidth xl:mt-11 lg:mt-6 md:mt-6 px-28 sm:px-8">
        <p class="text-primary md:text-sm text-lg text-center">
          Com o carro na mão, você paga a
          <span class="font-bold underline">primeira parcela</span> 45 dias
          depois da aprovação. <br class="sm:hidden" />
          Lembrando que o cálculo final do financiamento considera o valor do
          veículo <br class="sm:hidden" />
          financiado, entrada, quantidade de parccelas e juros.
        </p>
      </div>
    </section>

    <div class="bg-primary">
      <section
        class="maxWidth flex flex-wrap pt-8 sm:pt-16 xl:py-20 lg:py-32 md:py-24 sm:hidden"
      >
        <div class="w-1/2 sm:w-full mb-auto lg:p-4 text-white">
          <h1
            class="xl:w-2/3 lg:w-2/3 md:w-full sm:text-center text-4xl md:text-3xl sm:text-3xl font-bold mr-0 xl:leading-normal"
          >
            Por que fazer um Financiamento de Veículo?
          </h1>
          <p
            class="py-6 pr-36 lg:pr-28 md:pr-12 text-xl md:text-lg sm:text-center"
          >
            Porque você já sai com o carro assim que fecha o contrato. Além
            disso, as taxas de juros são mais baixas em comparação com outras
            linhas de crédito tradicionais.
          </p>
          <div
            class="p-2 w-4/12 lg:w-6/12 md:w-6/12 md:text-xs lg:text-xs bg-primary text-white text-center font-bold uppercase rounded-lg"
          >
            <a
              :href="$options.information.appVehicleSimulator + $root.utms"
              aria-label="Clique aqui para contratar seu financiamento"
              target="_blank"
              >Quero contratar</a
            >
          </div>
        </div>
        <div class="w-1/2 mt-auto mb-auto sm:w-full">
          <img
            :src="$options.imageConfig.BextCar.gráficoFinan"
            alt="Gráfico comparando as taxas de juros do FinanBest e do empréstimo pessoal"
            class="sm:w-full md:w-11/12 w-full h-auto"
          />
        </div>
      </section>
      <section class="bgLigthGrey">
        <h1
          class="maxWidth text-4xl sm:text-2xl text-primary text-center pt-12 pb-5 font-bold"
        >
          Quem sonhou, se organizou e<br />
          investiu com a ajuda da Bext
        </h1>
        <CarouselFinan />
        <div>
          <ComparativeBoardFinan />
        </div>
      </section>
    </div>

    <Rodape />
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopBarVideo from '@/components/vehicle/BextCarFinan/topBarVideo.vue'
import CardWhite from '@/components/vehicle/BextCarFinan/cardWhite.vue'
import StepByStep from '@/components/vehicle/BextCarFinan/stepByStep.vue'
import CarouselFinan from '@/components/vehicle/BextCarFinan/carouselFinan.vue'
import ComparativeBoardFinan from '@/components/vehicle/BextCarFinan/comparativeBoardFinan.vue'
import Rodape from '@/components/base/bannerBottomPage.vue'
import { useObjectToQueryString } from '@/composables/useObjectToQueryString'

export default defineComponent({
  name: 'BextCarFinanLP',
  components: {
    TopBarVideo,
    CardWhite,
    StepByStep,
    CarouselFinan,
    ComparativeBoardFinan,
    Rodape,
  },
  props: {
    showMenu: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  mounted(){
    console.log(this.$route.query)
    this.$root.utms = useObjectToQueryString(this.$route.query)
  }
})
</script>

<style>
/* estilo das setas do carrosel */
.splide__arrow {
  opacity: 10;
}

@media (max-width: 667px) {
  .inputBase {
    padding: 0.25rem;
  }
}

@media (max-width: 667px) {
  .p-0Max.maxWidth {
    padding: 0rem;
  }
}

@media (max-width: 380px) {
  .max-90 {
    width: 90%;
  }
}
@media (max-width: 380px) {
  .textphoneMini {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}
</style>
