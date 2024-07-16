<template>
  <div
    class="overflow-x-hidden w-screen h-screen md:h-auto sm:h-auto bg-gradient-to-r from-primary to-[#08025d] md:bg-gradient-to-t md:from-primary md:to-[#08025d] sm:bg-gradient-to-t sm:from-primary sm:to-[#08025d] flex md:flex sm:flex">
    <img
      :src="bestNews.bgSejaBestSide"
      loading="lazy"
      class="absolute h-full w-auto cover lg:w-6/12 md:hidden sm:hidden" />
    <div
      class="flex items-center justify-center w-6/12 divResize lg:w-6/12 md:hidden sm:hidden">
      <img
        :src="bestNews.doublePhone"
        alt="Foto de um celular com o portal BestNews"
        loading="lazy"
        class="absolute left-[2%] top-[30%] w-[26rem] lg:w-[21rem] lg:mt-4 imgResize" />
    </div>
    <div class="flex flex-col justify-center maxWidth z-10 pl-4 h-full">
      <div
        class="flex md:flex-col sm:flex-col sm:p-1 gap-11rem xl:gap-20 lg:justify-center lg:gap-24 mb-6 md:mb-12 sm:mb-8 sm:ml-3">
        <img
          :src="bextImages.logoSejabestWhite"
          alt="Logo Bext"
          loading="lazy"
          class="w-48 lg:w-36 md:self-start xl:self-center" />
        <h1
          class="text-white w-full items-center xl:pr-8 pr-4 md:w-full sm:w-full lg:w-8/12 text-base xl:text-xl sm:text-left sm:text-xl md:self-center md:text-xl sm:mt-5 md:mt-6">
          Aprenda tudo sobre financiamento, modalidades de empréstimo e
          acompanhe o mercado financeiro todos os dias.
        </h1>
      </div>
      <div
        class="flex flex-wrap md:flex-row items-center md:justify-center sm:justify-center">
        <div
          class="cardShine text-white bg-primary justify-between w-3/12 xl:w-[28%] lg:w-[31%] md:w-[30%] sm:w-11/12 h-auto xl:h-[22.8rem] lg:h-[18.5rem] md:h-[280px] p-6 lg:p-5 md:p-5 md:mr-2 flex flex-col shadow-md rounded-xl md:my-8 sm:my-1">
          <img
            :src="bestNews.youBest"
            alt="Acompanhe a Bext no Youtube"
            loading="lazy"
            class="w-36 md:w-28 lg:w-30 pb-2 pt-2 lg:pt-4 sm:self-center" />
          <p
            class="text-lg lg:text-sm lg:mb-1 lg:leading-6 flex items-center self-center sm:text-center xl:leading-8 md:text-sm">
            Veja explicações sobre Financiamento Imobiliário, empréstimo com
            garantia de imóvel e informações sobre taxas.
          </p>
          <a
            :href="links.social.youtube"
            aria-label="Clique aqui para acessar o YoutBest"
            class="font-bold bg-primary btnShine xl:py-2 md:text-xs lg:py-2 items-center flex justify-center mt-5 lg:mt-0 rounded-xl p-1 lg:p-1 w-full self-center shadow-lg lg:text-sm lg:w-full md:w-full sm:w-10/12 sm:text-sm lg:normal-case md:normal-case xl:text-sm">
            Assista grátis
          </a>
        </div>
        <div
          class="cardShine text-white bg-primary justify-between w-3/12 xl:w-[28%] lg:w-[31%] md:w-[30%] sm:w-11/12 h-auto xl:h-[22.8rem] lg:h-[18.5rem] md:h-[280px] p-6 lg:p-5 md:p-5 md:mx-3 flex flex-col shadow-md rounded-xl ml-8 md:ml-0 sm:ml-0 md:my-8 sm:my-4 lg:ml-4">
          <img
            :src="bestNews.bestNewsTelegram"
            alt="Acompanhe a Bext no Telegram"
            loading="lazy"
            class="w-36 md:w-28 lg:w-30 pb-2 pt-2 lg:pt-4 sm:self-center" />
          <p
            class="text-lg lg:text-sm lg:mb-1 lg:leading-6 flex items-center self-center sm:text-center xl:leading-8 md:text-sm">
            Ao entrar no nosso grupo no telegram, você recebe o conteúdo novo
            antes de todo mundo, assim que a gente posta.
          </p>
          <a
            :href="links.social.telegram"
            aria-label="Receba conteúdo exclusivo no Telegram"
            class="font-bold bg-primary btnShine xl:py-2 md:text-xs lg:py-2 items-center flex justify-center mt-5 lg:mt-0 rounded-xl p-1 lg:p-1 w-full self-center shadow-lg lg:text-sm lg:w-full md:w-full sm:w-10/12 sm:text-sm lg:normal-case md:normal-case xl:text-sm">
            Exlcusividade agora
          </a>
        </div>
        <div
          class="cardShine text-white bg-primary justify-between w-3/12 xl:w-[28%] lg:w-[31%] md:w-[30%] sm:w-11/12 h-auto xl:h-[22.8rem] lg:h-[18.5rem] md:h-[280px] p-6 lg:p-5 md:p-5 md:mx-3 flex flex-col shadow-md rounded-xl ml-8 md:ml-0 sm:ml-0 md:my-8 sm:my-4 lg:ml-4">
          <img
            :src="bestNews.bestNewsLinkedin"
            alt="Acompanhe a Bext no LinkedIn"
            loading="lazy"
            class="w-36 md:w-28 lg:w-30 pb-2 pt-4 sm:self-center" />
          <p
            class="text-lg lg:text-sm lg:mb-1 lg:leading-6 flex items-center self-center sm:text-center xl:leading-8 md:text-sm">
            Vamos conversar sobre empreendedorismo, carreira, rotina da empresa
            e, claro, o que você precisa para ser Best.
          </p>
          <div class="md:justify-center md:flex sm:flex sm:justify-center">
            <a
              :href="links.social.linkedin.withUTM"
              aria-label="Receba conteúdo exclusivo no LinkedIn"
              class="font-bold bg-primary btnShine xl:py-2 md:text-xs lg:py-2 flex justify-center mt-5 lg:mt-0 rounded-xl p-1 lg:p-1 w-full self-center shadow-lg lg:text-sm lg:w-full md:w-full sm:w-10/12 sm:text-sm lg:normal-case md:normal-case xl:text-sm">
              Quero ser best
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { bestNews, bextImages } from '@/configurations/images';
  import { links } from '@/configurations/information';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'BestNews',
    data() {
      return {
        links,
        bestNews,
        bextImages,
      };
    },
  });
</script>

<style>
  @media (min-width: 1880px) {
    .imgResize {
      width: 30rem;
      left: 6%;
      top: 25%;
    }
    .divResize {
      width: 32%;
    }

    .gap-11rem {
      gap: 11rem;
      padding-right: 6rem;
    }
  }
  .cardShine {
    box-shadow: none;
  }
  .cardShine:hover {
    box-shadow:
      0 0 15px #0524dd,
      0 0 15px #0524dd;
    background-color: #0524dd;
  }

  .btnShine {
    box-shadow: none;
  }

  .btnShine:hover {
    box-shadow:
      0 0 15px #ff671f,
      0 0 15px #ff671f;
  }
</style>
