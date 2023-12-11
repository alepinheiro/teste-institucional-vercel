<template>
  <section
    class="flex flex-col pt-10 md:pt-0 md:mt-10 md:bg-[#181818] relative"
  >
    <div class="px-5 md:hidden">
      <img
        src="/images/Home/bestPlayMockupMobile.png"
        alt="Conheça o maior canal de crédito do Brasil"
        loading="lazy"
        class="mx-auto"
      />
    </div>
    <div class="md:max-w-2xl mx-auto z-0">
      <div
        class="bg-[#181818] flex flex-col gap-5 items-center px-5 py-10 text-white text-center md:text-left md:w-4/6"
      >
        <BestPlayLogo class="md:hidden" />
        <h2 class="text-2xl md:text-3xl font-bold">
          Conheça o maior canal de crédito do Brasil
        </h2>
        <p class="text-justify md:leading-9">
          BestPlay é o canal de comunicação da SejaBest no YouTube. Com mais de
          500 vídeos, nosso canal reúne uma comunidade de mais de 50 mil
          pessoas. Abordamos temas como crédito, financiamento, empreendedorismo
          e mercado financeiro, com o único propósito de levar você à sua melhor
          versão.
        </p>
        <div class="flex flex-row justify-between w-full">
          <a
            href="https://www.youtube.com/@SejaBest"
            class="bg-complementaryColor2 w-fit rounded px-6 py-4"
          >
            Inscreva-se agora
          </a>
          <BestPlayLogo class="hidden md:block" />
        </div>
        <div class="hidden md:flex md:absolute right-0 bottom-0 h-[110%] z-0">
          <img
            src="/images/Home/bestPlayMockupDesktop.png"
            alt="Conheça o maior canal de crédito do Brasil"
            loading="lazy"
            class="mx-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BestPlayLogo from '@/components/imagesSVG/logos/bestPlay.component.vue'

export default defineComponent({
  name: 'BestPlay',
  components: { BestPlayLogo },
  data() {
    return {}
  },
})
</script>
