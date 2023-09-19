<template>
  <section class="w-full xl:max-w-7xl h-screen sm:h-full md:h-full lg:h-full flex items-center mr-auto ml-auto sm:p-4 md:p-4 lg:p-4">
    <div>
    <picture class="sm:block">
      <img 
        src="/images/bestHub/productsDesktop.png" alt="Oferecendo os produtos que o seu cliente procura."
        class="mx-auto sm:mx-0 pt-10 w-8/12 sm:w-full mr-auto ml-auto" />
    </picture>
    <div class="pb-4 w-full">
      <h2 class="text-5xl sm:text-3xl text-center">
        Oferecendo <br class="md:hidden lg:hidden xl:hidden" />
        os <span class="text-[#D0FE42]"> produtos </span> que o
        seu cliente <span class="text-[#D0FE42]">procura</span>
      </h2>
    </div>
    <div class="w-full flex flex-wrap justify-center">
      <div
        v-for="{ icon, id, text } of products" :key="id" 
        class="p-2 w-1/4 sm:w-full md:w-1/2 ">
        <div
          class="flex items-center justify-center gap-4   rounded-2xl  h-[6rem]
          border-[#D9D9D9] hover:border-[#D0FE42] border">
          <img :src="`/images/bestHub/icons/${icon}.svg`" :alt="text" />
          <span class="text-sm  font-bold w-1/2 text-left">{{ text }}</span>
        </div>
      </div>
    </div>
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
        {
          id:5,
          icon:'building',
          text: 'Produtos de Crédito para Construção',
        },
        {
          id:6,
          icon:'money-bill-wave',
          text: 'Consórcio (em breve)',
        }
      ],
    }
  },
})
</script>
