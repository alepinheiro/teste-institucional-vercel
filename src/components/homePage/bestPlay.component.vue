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
    <div class="md:max-w-2xl lg:max-w-5xl mx-auto z-0">
      <div
        class="bg-[#181818] flex flex-col lg:flex-row lg:justify-between gap-5 items-center px-5 py-10 text-white text-center md:text-left lg:text-left xl:text-left md:w-4/6 "
      >
        <div class="flex flex-col gap-5 lg:w-5/12">
          <BestPlayLogo class="md:hidden lg:hidden xl:hidden" />
          <h2 class="text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold">
            Conheça o maior canal de crédito do Brasil
          </h2>
          <p class="text-justify md:leading-9 lg:leading-9 xl:leading-9">
            BestPlay é o canal de comunicação da SejaBest no YouTube. Com mais
            de 500 vídeos, nosso canal reúne uma comunidade de mais de 50 mil
            pessoas. Abordamos temas como crédito, financiamento,
            empreendedorismo e mercado financeiro, com o único propósito de
            levar você à sua melhor versão.
          </p>
        </div>

        <div class="flex flex-row lg:flex-col-reverse lg:gap-11 lg:items-end justify-between w-full lg:w-4/12">
          <a
            href="https://www.youtube.com/@SejaBest"
            class="bg-complementaryColor2 w-fit rounded px-6 py-4"
          >
            Inscreva-se agora
          </a>
          <BestPlayLogo class="hidden md:block lg:block lg:w-full" />
        </div>
        <div class="hidden md:flex lg:flex md:absolute lg:absolute right-0 lg:right-[30%] bottom-0 h-[110%] lg:h-[105%] z-0">
          <img
            src="/images/Home/bestPlayMockupDesktop.png"
            alt="Conheça o maior canal de crédito do Brasil"
            loading="lazy"
            class="mx-auto "
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
