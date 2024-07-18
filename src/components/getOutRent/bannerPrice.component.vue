<template>
  <div class="w-full relative sm:static md:static pt-10">
    <div
      class="absolute sm:static md:static z-20 w-full sm:w-10/12 md:w-8/12 text-center ml-auto mr-auto">
      <ResponsiveImage
        imagePath="/images/getOutRent/bannerpreco.png"
        :imgAttrs="{
          alt: 'Tudo isso de R$ 299,00 por apenas R$ 89,90 (70% off). Aprenda e saia do aluguel por menos de R$ 3,00 por dia',
          class: 'max-w-2xl mr-auto ml-auto sm:max-w-full',
        }" />

      <a
        class="flex flex-row items-center gap-2 w-fit mx-auto bg-primary text-white transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 rounded-lg text-2xl sm:text-xl sm:p-2 p-4 font-semibold"
        :href="links.hotmart.xoAluguel + useObjectToQueryString($route.query)"
        target="_blank">
        <CartShopping class="w-5 h-5 min-lg:w-6 min-lg:h-6" />
        <span> COMPRE AGORA </span>
      </a>
    </div>
    <div class="mt-24 md:mt-0 sm:mt-0">
      <ResponsiveImage
        imagePath="/images/getOutRent/casaBg.png"
        :imgAttrs="{
          role: 'presentation',
          loading: 'lazy',
        }"
        class="w-full" />
    </div>
  </div>
</template>

<script lang="ts">
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
  import { defineComponent } from 'vue';
  import { links } from '@/configurations/information';
  import CartShopping from '@/assets/svg/faIcon/cartShopping.vue';
  export default defineComponent({
    name: 'BannerXoAluguel',
    components: { CartShopping },
    data() {
      return {
        links,
        isVisible: false,
        useObjectToQueryString,
      };
    },
  });
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
