<template>
  <div class="w-full relative sm:static md:static pt-24 sm:pt-12">
    <div class="absolute sm:static md:static z-20 w-full">
      <div
        class="w-full flex flex-wrap sm:w-10/12 md:w-10/12 text-center ml-auto mr-auto">
        <div class="w-6/12 sm:w-full md:w-full">
          <div
            class="w-8/12 sm:w-full md:w-full sm:p-4 mr-0 ml-auto text-white text-left sm:text-center md:text-center">
            <div class="-rotate-6 text-left sm:pl-8">
              <span
                class="bg-primary px-4 text-white text-4xl sm:text-3xl shadow-md font-semibold py-2">
                Agora você
              </span>
            </div>
            <div
              class="-rotate-2 pl-16 sm:pl-28 text-left pb-12 sm:pt-4 pt-8 sm:pb-8">
              <span
                class="bg-primary px-4 text-white text-5xl sm:text-4xl shadow-md font-semibold py-2">
                É BEST
              </span>
            </div>
            <p>
              Parabéns pela aquisição do guia
              <span class="font-bold">
                "Xô, Aluguel: O Método Best para conquistar seu primeiro imóvel
                com Financiamento Imobiliário".
              </span>
            </p>
            <p class="pt-4">
              Agora, você está um passo mais perto do sonho da casa própria. O
              que acha de aprender mais e ainda se manter informado sobre o
              mercado financeiro e imobiliário? Entre em nosso canal no Telegram
              e descubra o BestNews:
              <span class="underline">
                uma comunidade ativa com tudo o que você precisa na palma da sua
                mão. Clique agora no botão abaixo.
              </span>
            </p>
            <div class="sm:text-center md:text-center">
              <button
                class="bg-primary text-white transition duration-500 ease-in-out mt-12 transform hover:translate-y-1 hover:scale-105 rounded-lg text-xl sm:text-xl sm:p-2 p-4 font-semibold"
                @click="openLink()">
                <Icon icon="fa-brands fa-telegram" />
                <span> Quero conteúdos gratuitos </span>
              </button>
            </div>
          </div>
        </div>
        <div class="w-6/12 sm:w-full md:w-full sm:pt-8 md:pt-8">
          <ResponsiveImage
            imagePath="/images/getOutRent/phones.png"
            :imgAttrs="{
              alt: 'Conteúdo do telegram na palma da sua mão',
            }"
            class="mr-auto ml-auto md:w-1/2 sm:w-full" />
        </div>
      </div>
    </div>
    <div class="mt-[28rem] md:mt-0 sm:hidden md:hidden">
      <ResponsiveImage
        imagePath="/images/getOutRent/casaBg.png"
        :imgAttrs="{
          alt: 'casa na colina',
          role: 'presentation',
        }"
        class="w-7/12" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { links } from '@/configurations/information';
  export default defineComponent({
    name: 'SuccessBanner',
    data() {
      return {
        isVisible: false,
      };
    },
    methods: {
      openLink() {
        window.open(links.social.telegram, '_blank');
      },
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
