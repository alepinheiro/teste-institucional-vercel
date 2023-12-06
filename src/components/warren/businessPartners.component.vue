<template>
  <section class="px-5 py-18 bg-white">
    <div
      class="flex flex-col lg:flex-row overflow-hidden rounded-2xl bg-warren-hintOfRed w-full max-w-3xl lg:max-w-5xl mx-auto"
    >
      <div class="bg-warren-whisper pt-8 p-6 md:px-0 md:py-20 lg:w-1/2">
        <div class="flex flex-col gap-2 text-center lg:text-start md:w-4/6 mx-auto lg:justify-center lg:h-full">
          <h2 class="text-3xl md:text-5xl lg:text-5xl text-warren-darkCharcoal">
            Uma plataforma <b>multibancos</b>
          </h2>
          <p class="text-warren-stormGray">
            <b>São mais de 20 bancos parceiros</b> oferecendo os melhores
            produtos de crédito com as melhores taxas e os prazos mais
            flexíveis.
          </p>
        </div>
      </div>

      <ul
        class="flex flex-row flex-wrap gap-x-4 gap-y-8 items-center px-4 py-8 w-3/4 md:w-4/6 mx-auto lg:w-1/2"
      >
        <li v-for="{ id, image } of partners" :key="id" class="mx-auto">
          <img
            :src="`/images/warren/partners/${image}@2x.png`"
            alt=""
            :srcset="
              `/images/warren/partners/${image}@1x.png 1x, ` +
              `/images/warren/partners/${image}@2x.png 2x, ` +
              `/images/warren/partners/${image}@4x.png 4x, `
            "
            sizes="(max-width: 600px) 200px, 400px"
            class="h-8 object-contain w-auto"
          />
        </li>
      </ul>
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
        image: 'bancoPaulista',
      },
      {
        id: 'bv',
        image: 'bancoBV',
      },
      {
        id: 'BRB',
        image: 'bancoBRB',
      },
      {
        id: 'bari',
        image: 'bancoBari',
      },
      {
        id: 'rodobens',
        image: 'bancoRodobens',
      },
      {
        id: 'inter',
        image: 'bancoInter',
      },
      {
        id: 'cashMe',
        image: 'bancoCashMe',
      },
      {
        id: 'santander',
        image: 'bancoSantander',
      },
      {
        id: 'libra',
        image: 'bancoLibra',
      },
      {
        id: 'itau',
        image: 'bancoItau',
      },
      {
        id: 'daycoval',
        image: 'bancoDaycoval',
      },
      {
        id: 'TCash',
        image: 'bancoTCash',
      },
      {
        id: 'creditas',
        image: 'bancoCreditas',
      },
      {
        id: 'pontte',
        image: 'bancoPontte',
      },
      {
        id: 'c6ank',
        image: 'bancoC6',
      },
    ]
    return {
      partners,
    }
  },
})
</script>
