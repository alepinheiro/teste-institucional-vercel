<template>
  <section class="px-5 py-18 bg-white">
    <div class="flex flex-col overflow-hidden rounded-2xl">
      <div
        class="flex flex-col bg-warren-whisper gap-2 text-center pt-8 pb-4 px-2"
      >
        <h2 class="text-3xl text-warren-darkCharcoal">
          Uma plataforma <b>multibancos</b>
        </h2>
        <p class="text-warren-stormGray">
          <b>São mais de 20 bancos parceiros</b> oferecendo os melhores produtos
          de crédito com as melhores taxas e os prazos mais flexíveis.
        </p>
      </div>

      <ul
        class="bg-warren-hintOfRed flex flex-row flex-wrap gap-x-2 gap-y-5 items-center px-4 py-8"
      >
        <li
          v-for="{ id, image } of partners"
          :key="id"
          class="mx-auto opacity-80"
        >
          <img
            :src="`/images/finanBest/banks/${image}`"
            alt=""
            srcset=""
            class="h-6"
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
        image: 'bancoPaulista.png',
      },
      {
        id: 'bv',
        image: 'bancoBV.png',
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
      {
        id: 'libra',
        image: 'bancoLibra.png',
      },
      {
        id: 'itau',
        image: 'bancoItau.png',
      },
      {
        id: 'daycoval',
        image: 'bancoDaycoval.png',
      },
      {
        id: 'TCash',
        image: 'bancoTCash.png',
      },
      {
        id: 'creditas',
        image: 'bancoCreditas.png',
      },
      {
        id: 'pontte',
        image: 'bancoPontte.png',
      },
      {
        id: 'c6ank',
        image: 'bancoC6.png',
      },
    ]
    return {
      partners,
    }
  },
})
</script>
