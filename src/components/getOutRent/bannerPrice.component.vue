<template>
  <div class="w-full relative sm:static md:static pt-10">
    <div
      class="absolute sm:static md:static z-20 w-full sm:w-10/12 md:w-8/12 text-center ml-auto mr-auto"
    >
      <img
        src="/images/getOutRent/bannerpreco.png"
        alt="Tudo isso de R$ 299,00 por apenas R$ 89,90 (70% off). Aprenda e saia do aluguel por menos de R$ 3,00 por dia"
        class="mr-auto ml-auto max-w-2xl sm:max-w-full"
      />

      <a
        class="bg-complementaryColor1 text-white transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 rounded-lg text-2xl sm:text-xl sm:p-2 p-4 font-semibold"
        :href="
          $options.information.hotmartXoAluguel +
          useObjectToQueryString($route.query)
        "
        target="_blank"
      >
        <i class="fa-solid fa-cart-shopping"></i> COMPRE AGORA
      </a>
    </div>
    <div class="mt-24 md:mt-0 sm:mt-0">
      <img
        src="/images/getOutRent/casaBg.png"
        alt="casa na colina"
        class="w-full"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { useObjectToQueryString } from '@/composables/useObjectToQueryString'
import { defineComponent, ComponentPublicInstance } from 'vue'
export default defineComponent({
  name: 'BannerXoAluguel',
  data() {
    return {
      isVisible: false,
      useObjectToQueryString,
    }
  },
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
