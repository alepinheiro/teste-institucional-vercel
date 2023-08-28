<template>
  <section class="w-full">
    <picture class="sm:block">
      <source
        srcset="/images/bestHub/productsDesktop.png"
        media="(min-width: 768px)"
      />
      <source
        srcset="/images/bestHub/productsMobile.png"
        media="(max-width: 767px)"
      />
      <img
        src="/images/bestHub/productsMobile.png"
        alt="Oferecendo os produtos que o seu cliente procura."
        class="mx-auto sm:mx-0 pt-10"
      />
    </picture>
    <div
      class="flex flex-col sm:px-5 sm:-mt-10 sm:text-right text-center gap-8 max-w-7xl mx-auto"
    >
      <h2>
        Oferecendo <br class="md:hidden lg:hidden xl:hidden" />
        os <span class="text-[#D0FE42]"> produtos </span> que o
        <br class="md:hidden lg:hidden xl:hidden" />
        seu cliente <span class="text-[#D0FE42]">procura</span>
      </h2>

      <ul class="flex sm:flex-col flex-row gap-4 md:px-5 lg:px-5">
        <li
          v-for="{ icon, id, text } of products"
          :key="id"
          class="flex flex-row items-center justify-center gap-4 border border-[#D9D9D9] hover:border-[#D0FE42] rounded-2xl py-5 min-h-[6rem] flex-1 transition-all"
        >
          <img :src="`/images/bestHub/icons/${icon}.svg`" :alt="text" />
          <span class="text-lg font-bold w-1/2 text-left">{{ text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ProductsSection',
  data() {
    return {
      products: [
        {
          id: 1,
          icon: 'houseSolid',
          text: 'Financiamento Imobiliário',
        },
        {
          id: 2,
          icon: 'carSolid',
          text: 'Financiamento Veicular',
        },
        {
          id: 3,
          icon: 'houseCheck',
          text: 'Empréstimo com Garantia de Imóvel',
        },
        {
          id: 4,
          icon: 'carSideSolid',
          text: 'Empréstimo com Garantia de Veículo',
        },
      ],
    }
  },
})
</script>
