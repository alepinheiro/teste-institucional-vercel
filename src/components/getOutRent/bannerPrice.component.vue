<template>
  <div class="w-full relative sm:static md:static pt-10">
    <div class="absolute sm:static md:static z-20 w-full sm:w-10/12 md:w-10/12 text-center ml-auto mr-auto">

        <img
          src="/images/getOutRent/bannerpreco.png"
          alt="Tudo isso de R$ 299,00 por apenas R$ 89,90 (70% off). Aprenda e saia do aluguel por menos de R$ 3,00 por dia"
          class="mr-auto ml-auto max-w-2xl sm:max-w-full" />

        <button
          class="bg-complementaryColor1 text-white transition duration-500 ease-in-out
          transform hover:translate-y-1 hover:scale-105 rounded-lg text-2xl sm:text-xl sm:p-2 p-4 font-semibold"
          @click="openLink()">
          <i class="fa-solid fa-cart-shopping"></i> COMPRE AGORA
        </button>

    </div>
    <div class="mt-24 md:mt-0 sm:mt-0">
      <img src="/images/getOutRent/casaBg.png" alt="casa na colina" class="w-full  " />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ComponentPublicInstance } from 'vue'
type IRootExtension = ComponentPublicInstance & { [key: string]: string }
export default defineComponent({
  name: 'BannerXoAluguel',
  data() {
    return {
      isVisible: false,
    }
  },
  methods:{
    openLink(){
      window.open( this.$options.information.hotmartXoAluguel+(this.$root as IRootExtension).utms, '_blank' );
    },
  }
})
</script>

<style scoped>
.house {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url('/images/getOutRent/casaBg.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
}
</style>