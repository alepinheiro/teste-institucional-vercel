<template>
  <section class="px-5 py-18 bg-white">
    <div class="flex flex-col overflow-hidden rounded-t-2xl">
      <div class="flex flex-col bg-[#F7F3F2] gap-2 text-center pt-8 pb-4 px-2">
        <h2 class="text-3xl text-[#333131]">
          Uma plataforma <b>multibancos</b>
        </h2>
        <p class="text-[#757680]">
          <b>São mais de 20 bancos parceiros</b> oferecendo os melhores produtos
          de crédito com as melhores taxas e os prazos mais flexíveis.
        </p>
      </div>

      <div class="bg-[#FAF8F8]"></div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BusinessPartners',
  data() {
    const partners = [
      {
        id: 'paulista',
        image: 'bancoPaulista.png',
      },
      {
        id: 'bv',
        image: 'bancoBv.png',
      },
      {
        id: 'BRB',
        image: 'bancoBRB.png',
      },
      {
        id: 'bari',
        image: 'bancoBari.png',
      },
      {
        id: 'rodobens',
        image: 'bancoRodobens.png',
      },
      {
        id: 'inter',
        image: 'bancoInter.png',
      },
      {
        id: 'cashMe',
        image: 'bancoCashMe.png',
      },
      {
        id: 'santander',
        image: 'bancoSantander.png',
      },
    ]
    return {
        partners
    }
  },
})
</script>
