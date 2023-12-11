<template>
  <section class="flex flex-col pt-10">
    <div class="px-5">
      <img
        src="/images/Home/bestPlayMockup.png"
        alt="Conheça o maior canal de crédito do Brasil"
        loading="lazy"
        class="mx-auto"
      />
    </div>
    <div
      class="bg-[#181818] flex flex-col gap-5 items-center px-5 py-10 text-white text-center"
    >
      <BestPlayLogo />
      <h2 class="text-2xl font-bold">
        Conheça o maior canal de crédito do Brasil
      </h2>
      <p class="text-justify">
        BestPlay é o canal de comunicação da SejaBest no YouTube. Com mais de
        500 vídeos, nosso canal reúne uma comunidade de mais de 50 mil pessoas.
        Abordamos temas como crédito, financiamento, empreendedorismo e mercado
        financeiro, com o único propósito de levar você à sua melhor versão.
      </p>
      <a href="https://www.youtube.com/@SejaBest" class="bg-complementaryColor2 w-fit rounded px-6 py-4"
        >Inscreva-se agora</a
      >
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
