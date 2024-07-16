<template>
  <section class="relative z-0 bg-mcf-sherpaBlue">
    <div
      class="absolute bg-[url('/images/mcf/contactBackground.png')] top-0 inset-x-0 lg:inset-x-auto xl:inset-x-auto lg:bottom-0 xl:bottom-0 h-[42%] md:h-[44%] lg:h-auto xl:h-auto lg:left-[41%] xl:left-[41%] lg:right-0 xl:right-0 bg-cover bg-center -z-10"></div>
    <div
      class="flex flex-col lg:flex-row-reverse xl:flex-row-reverse md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:mx-auto lg:mx-auto xl:mx-auto">
      <div
        class="mx-auto flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 justify-center lg:justify-end xl:justify-end lg:pr-5 xl:pr-5 items-center py-24 md:py-32 text-white w-4/6">
        <img
          class="h-10 w-auto"
          :src="bextImages.whiteLogo.src"
          :alt="bextImages.whiteLogo.alt"
          loading="lazy" />
        <p class="text-3xl font-bold">+</p>
        <img
          class="h-16 w-auto"
          :src="mcfPage.logo.src"
          :alt="mcfPage.logo.alt"
          loading="lazy" />
      </div>
      <div
        class="flex flex-col gap-5 justify-center items-center min-lg:items-start py-12 md:py-18 px-5 text-center min-lg:text-start text-white lg:w-2/6 xl:w-2/6">
        <span
          class="hidden xl:block w-28 bg-mcf-freeSpeechAquamarine h-2 rounded-full"></span>
        <h2 class="text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold">
          Uma parceria de sucesso
        </h2>
        <p>
          Uma grande parceria que reforça a oferta de serviços financeiros da
          Minha Casa Financiada, proporcionando aos clientes soluções
          abrangentes para suas necessidades imobiliárias.
          <b>
            Juntas, essas empresas líderes estão transformando a experiência
            financeira no setor imobiliário.
          </b>
        </p>
        <a
          :href="`${links.mcf.simulator}${$root.utms}`"
          target="_blank"
          class="bg-mcf-burntOrange font-bold py-5 px-10 rounded-lg text-center text-white"
          @click="$emit('click')">
          Quero simular meu crédito
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { links } from '@/configurations/information';
  import { bextImages, mcfPage } from '@/configurations/images';
  /**
   * # Visão Geral
   * O componente `ContactSection` é um componente Vue.js
   * projetado para exibir uma seção de contato em um
   * contexto de parceria entre empresas. Ele destaca uma
   * parceria de sucesso entre duas empresas, oferecendo
   * serviços financeiros abrangentes para necessidades imobiliárias.
   * O componente apresenta uma mensagem de texto atraente e
   * um botão para direcionar os usuários para simular seu crédito.
   *
   * # Props
   * Este componente não aceita nenhuma propriedade.
   */
  export default defineComponent({
    name: 'ContactSection',
    emits: ['click'],
    data() {
      return {
        links,
        mcfPage,
        bextImages,
      };
    },
  });
</script>
