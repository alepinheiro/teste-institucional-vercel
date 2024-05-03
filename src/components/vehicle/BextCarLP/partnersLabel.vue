<template>
  <section class="maxWidth mr-auto ml-auto">

    <div class="w-full text-center">
      <h1 class="text-4xl pt-28 sm:pt-8 md:pt-8 sm:text-2xl text-white font-semibold">
        A melhor plataforma multibancos
      </h1>
      <p class="text-primary text-xl ">
        Conheça os parceiros que estão decolando com a <span class="font-semibold">Bext</span>.
      </p>
    </div>

    <div class="w-full pt-16 sm:pt-8 md:pt-8 flex flex-wrap justify-center">
      <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center">
        <img
          :src="$options.imageConfig.logoPartners.white.cashMe"
          alt="Logo Cashme"
          title="Cashme"
          class="w-44 sm:w-36 md:w-36 h-auto " />
      </div>

      <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center">
        <img
          :src="$options.imageConfig.logoPartners.white.inter"
          alt="Logo Inter"
          title="Inter"
          class="w-44 sm:w-32 md:w-36 h-auto " />
      </div>

      <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center">
        <img
          :src="$options.imageConfig.logoPartners.white.rodobens"
          alt="Logo Rodobens"
          title="Rodobens"
          class="w-44 sm:w-36 md:w-36 h-auto " />
      </div>

      <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center">
        <img
          :src="$options.imageConfig.logoPartners.white.piratini"
          alt="Logo Piratini"
          title="Piratini"
          class="w-44 sm:w-36 md:w-36 h-auto " />
      </div>

      <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center">
        <img
          :src="$options.imageConfig.logoPartners.white.santander"
          alt="Logo Santander"
          title="Santander"
          class="w-44 sm:w-36 md:w-36 h-auto " />
      </div>

      <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center">
        <img
          :src="$options.imageConfig.logoPartners.white.daycoval"
          alt="Logo Daycoval"
          title="Daycoval"
          class="w-44 sm:w-36 md:w-36 h-auto " />
      </div>

      <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center">
        <img
          :src="$options.imageConfig.logoPartners.white.pontte"
          alt="Logo Pontte"
          title="Pontte"
          class="w-44 sm:w-36 md:w-36 h-auto " />
      </div>

      <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center">
        <img
          :src="$options.imageConfig.logoPartners.white.creditas"
          alt="Logo Creditas"
          title="Creditas"
          class="w-44 sm:w-36 md:w-36 h-auto " />
      </div>

      <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center">
        <img
          :src="$options.imageConfig.logoPartners.white.itau"
          alt="Logo Itaú"
          title="Itaú"
          class="w-44 sm:w-32 md:w-36 h-auto " />
      </div>

      <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center">
        <img
          :src="$options.imageConfig.logoPartners.white.libra"
          alt="Logo Libra"
          title="Libra"
          class="w-44 sm:w-32 md:w-36 h-auto " />
      </div>

      <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center">
        <img
          :src="$options.imageConfig.logoPartners.white.wimo"
          alt="Logo Wimo"
          title="Wimo"
          class="w-44 sm:w-32 md:w-36 h-auto " />
      </div>

      <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center">
        <img
          :src="$options.imageConfig.logoPartners.white.bari"
          alt="Logo Bari"
          title="Bari"
          class="w-44 sm:w-32 md:w-36 h-auto " />
      </div>

    </div>
  </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PartnersLabel'
})

</script>

<style></style>