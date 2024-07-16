<template>
  <div class="bg-[#0D0D0D] overflow-x-hidden z-0 relative w-full">
    <section class="absolute w-full top-0 z-0 h-screen">
      <img
        src="/images/bestBroker/successHeroImageMD.png"
        alt=""
        srcset=""
        class="hidden w-fit md:block object-cover ml-auto h-full" />
      <img
        src="/images/bestBroker/successHeroImageLG.png"
        alt=""
        srcset=""
        class="hidden w-fit lg:block object-cover ml-auto h-full" />
      <img
        src="/images/bestBroker/successHeroImageXL.png"
        alt=""
        srcset=""
        class="hidden w-fit xl:block object-cover ml-auto h-full" />
    </section>
    <section class="w-full font-Sizmo-Pro z-10 h-screen sm:h-fit">
      <div
        class="flex flex-col items-center gap-5 md:gap-0 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto h-full">
        <img
          src="/images/bestBroker/successHeroImageSM.png"
          alt=""
          srcset=""
          class="sm:block hidden" />
        <div
          class="flex flex-col items-center gap-8 sm:pb-18 px-5 md:items-start lg:items-start xl:items-start z-10 my-auto">
          <img
            src="/images/bestBroker/logoBestBrokerWhite.png"
            class="sm:mx-auto ml-0 w-fit py-5"
            alt="" />
          <h1
            class="text-4xl sm:text-center text-white md:w-5/6 lg:w-4/6 lg:text-left xl:w-1/2">
            Parabéns por adquirir o melhor curso do mercado de
            <b class="text-[#D0FE42]"> Crédito Imobiliário </b>
          </h1>
          <p
            class="text-xl text-left text-white leading-loose sm:text-center md:w-5/6 lg:w-4/6 xl:w-1/2">
            Agora você está a caminho de se tornar um Corretor 360°.
            <b>
              O que acha de se manter informado sobre o mercado financeiro e
              imobiliário?
            </b>
            Entre em nosso canal no <b>Telegram</b> e descubra o
            <b>BestNews:</b>
            <span class="underline">
              uma comunidade ativa com tudo o que você precisa na palma da sua
              mão. Clique agora no botão abaixo.
            </span>
          </p>
          <a
            :href="links.social.telegram + $root.utms"
            target="_blank"
            class="px-10 py-6 bg-[#D0FE42] rounded-2xl hover:shadow-[#D0FE4260] hover:scale-105 hover:shadow-xl transition-all">
            <div class="flex flex-row items-center justify-center gap-4">
              <span class="flex-grow w-8 h-8">
                <i class="fa-brands fa-telegram w-8 h-8"></i>
              </span>
              <span
                class="font-bold text-2xl sm:text-xl flex-grow w-full h-fit sm:text-center">
                Quero conteúdos gratuitos
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
    <FooterSection class="border-t border-[#D0FE42] bg-black z-10" />
  </div>
</template>

<script lang="ts">
  import FooterSection from '@/components/bestBroker/footerSection.component.vue';
  import { defineComponent } from 'vue';
  import { links } from '@/configurations/information';

  export default defineComponent({
    name: 'XoAluguelAdquirido',
    components: { FooterSection },
    props: {
      showMenu: {
        type: Boolean,
        required: false,
        default: true,
      },
    },
    data() {
      return {
        links,
      };
    },
    mounted() {
      // eslint-disable-next-line no-undef
      // gtag('event', 'ComprafinalizadaBestBroker') //--> undefined
      window.fbq('trackCustom', 'ComprafinalizadaBestBroker');
    },
  });
</script>
