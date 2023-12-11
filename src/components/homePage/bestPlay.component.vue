<template>
  <section
    class="flex flex-col pt-10 md:pt-0 lg:pt-0 md:mt-10 md:bg-[#181818] lg:bg-[#181818] xl:bg-[#181818] relative"
  >
    <div class="px-5 md:hidden lg:hidden xl:hidden">
      <img
        src="/images/Home/bestPlayMockupMobile.png"
        alt="Conheça o maior canal de crédito do Brasil"
        loading="lazy"
        class="mx-auto"
      />
    </div>
    <div class="md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto z-0">
      <div
        class="bg-[#181818] flex flex-col lg:flex-row xl:flex-row lg:justify-between xl:justify-between gap-5 items-center px-5 py-10 text-white md:w-4/6 "
      >
        <div class="flex flex-col gap-5 lg:w-5/12 xl:w-5/12">
          <BestPlayLogo class="w-3/4 mx-auto md:hidden lg:hidden xl:hidden" />
          <h2 class="text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-center md:text-left lg:text-left xl:text-left">
            Conheça o maior canal de crédito do Brasil
          </h2>
          <p class="leading-9 xl:text-xl">
            BestPlay é o canal de comunicação da SejaBest no YouTube. Com mais
            de 500 vídeos, nosso canal reúne uma comunidade de mais de 50 mil
            pessoas. Abordamos temas como crédito, financiamento,
            empreendedorismo e mercado financeiro, com o único propósito de
            levar você à sua melhor versão.
          </p>
        </div>

        <div class="flex flex-row lg:flex-col-reverse xl:flex-col-reverse lg:gap-11 xl:gap-11 lg:items-end xl:items-end justify-between w-full lg:w-4/12 xl:w-1/4">
          <a
            href="https://www.youtube.com/@SejaBest"
            class="bg-complementaryColor2 w-fit rounded px-6 py-4"
          >
            Inscreva-se agora
          </a>
          <BestPlayLogo class="hidden md:block lg:block xl:block lg:w-full" />
        </div>
        <div class="hidden md:flex lg:flex xl:flex md:absolute lg:absolute xl:absolute right-0 lg:right-[30%] xl:right-[27%] bottom-0 h-[110%] lg:h-[105%] z-0">
          <img
            src="/images/Home/bestPlayMockupDesktop.png"
            alt="Conheça o maior canal de crédito do Brasil"
            loading="lazy"
            class="mx-auto xl:hidden"
          />
          <img
            src="/images/Home/bestPlayMockupXL.png"
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
