<template>
  <section class="px-5 py-18 bg-white">
    <div
      class="flex flex-col lg:flex-row xl:flex-row overflow-hidden rounded-2xl bg-warren-hintOfRed w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto xl:w-10/12"
    >
      <div
        class="bg-warren-whisper pt-8 p-6 md:px-0 md:py-20 lg:w-1/2 xl:w-1/2"
      >
        <div
          class="flex flex-col gap-2 md:gap-10 xl:gap-10 text-center lg:text-start xl:text-start md:w-4/6 mx-auto lg:justify-center xl:justify-center lg:h-full xl:h-full lg:px-9 xl:px-20"
        >
          <h2
            class="text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-warren-darkCharcoal"
          >
            Uma plataforma <b>multibancos</b>
          </h2>
          <p class="text-warren-stormGray">
            <b>São mais de 20 bancos parceiros</b> oferecendo os melhores
            produtos de crédito com as melhores taxas e os prazos mais
            flexíveis.
          </p>
        </div>
      </div>

      <!-- SM + XL -->
      <ul class="flex flex-col gap-6 xl:gap-8 md:hidden lg:hidden xl:w-1/2 p-6 xl:py-21 xl:px-14">
        <div
          v-for="(row, index) of smLayout"
          :key="index"
          class="flex flex-row gap-4 w-full justify-between items-center"
        >
          <li v-for="{ alt, id, image } of row" :key="id">
            <img
              :src="`/images/warren/partners/${image}@2x.png`"
              :srcset="
                `/images/warren/partners/${image}@1x.png 1x, ` +
                `/images/warren/partners/${image}@2x.png 2x, ` +
                `/images/warren/partners/${image}@4x.png 4x, `
              "
              sizes="(max-width: 600px) 200px, 400px"
              :alt="alt"
              class="h-6 md:h-8 lg:h-8 xl:h-8 object-contain w-auto"
            />
          </li>
        </div>
      </ul>

       <!-- MD + LG -->
      <ul class="flex-col gap-6 hidden md:flex lg:flex py-10 lg:px-12 lg:py-18">
        <div
          v-for="(row, index) of mdLayout"
          :key="index"
          class="flex flex-row gap-8 justify-between w-4/6 lg:w-full mx-auto items-center"
        >
          <li v-for="{ alt, id, image } of row" :key="id">
            <img
              :src="`/images/warren/partners/${image}@2x.png`"
              :srcset="
                `/images/warren/partners/${image}@1x.png 1x, ` +
                `/images/warren/partners/${image}@2x.png 2x, ` +
                `/images/warren/partners/${image}@4x.png 4x, `
              "
              sizes="(max-width: 600px) 200px, 400px"
              :alt="alt"
              class="h-10 lg:h-9 object-contain w-auto"
            />
          </li>
        </div>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BusinessPartners',
  data() {
    const bancoPaulista = {
      id: 'paulista',
      image: 'bancoPaulista',
      alt: 'Logo banco Paulista',
    }
    const bancoBv = {
      id: 'bv',
      image: 'bancoBV',
      alt: 'Logo BV Financeira',
    }

    const bancoBRB = {
      id: 'BRB',
      image: 'bancoBRB',
      alt: 'Logo banco BRB',
    }

    const bancoBari = {
      id: 'bari',
      image: 'bancoBari',
      alt: 'Logo banco Bari',
    }

    const bancoRodobens = {
      id: 'rodobens',
      image: 'bancoRodobens',
      alt: 'Logo Rodobens',
    }

    const bancoInter = {
      id: 'inter',
      image: 'bancoInter',
      alt: 'Logo banco Inter',
    }

    const bancoCashMe = {
      id: 'cashMe',
      image: 'bancoCashMe',
      alt: 'Logo banco CashMe',
    }

    const bancoSantander = {
      id: 'santander',
      image: 'bancoSantander',
      alt: 'Logo banco Santander',
    }

    const bancoLibra = {
      id: 'libra',
      image: 'bancoLibra',
      alt: 'Logo banco Libra',
    }

    const bancoItau = {
      id: 'itau',
      image: 'bancoItau',
      alt: 'Logo banco Itaú',
    }

    const bancoDaycoval = {
      id: 'daycoval',
      image: 'bancoDaycoval',
      alt: 'Logo banco Daycoval',
    }

    const bancoTCash = {
      id: 'TCash',
      image: 'bancoTCash',
      alt: 'Logo banco T-Cash',
    }

    const bancoCreditas = {
      id: 'creditas',
      image: 'bancoCreditas',
      alt: 'Logo banco Creditas',
    }

    const bancoPontte = {
      id: 'pontte',
      image: 'bancoPontte',
      alt: 'Logo banco Pontte',
    }

    const bankC6 = {
      id: 'c6ank',
      image: 'bancoC6',
      alt: 'Logo banco C6 Bank',
    }

    const smLayout = {
      firstRow: [bancoPaulista, bancoBv, bancoBRB],
      secondRow: [bancoBari, bancoRodobens, bancoInter],
      thirdRow: [bancoCashMe, bancoSantander, bancoLibra],
      fourthRow: [bancoItau, bancoDaycoval, bancoTCash],
      fifthRow: [bancoCreditas, bancoPontte, bankC6],
    }

    const mdLayout = {
      firstRow: [bancoPaulista, bancoBv, bancoBRB],
      secondRow: [bancoBari, bancoRodobens],
      thirdRow: [bancoDaycoval, bancoSantander],
      fourthRow: [bancoCashMe, bancoCreditas],
      fifthRow: [bancoItau, bancoTCash, bancoPontte],
      sixthRow: [bancoInter, bankC6, bancoLibra],
    }

    const partners = [
      bancoPaulista,
      bancoBv,
      bancoBRB,
      bancoBari,
      bancoRodobens,
      bancoInter,
      bancoCashMe,
      bancoSantander,
      bancoLibra,
      bancoItau,
      bancoDaycoval,
      bancoTCash,
      bancoCreditas,
      bancoPontte,
      bankC6,
    ]
    return {
      partners,
      smLayout,
      mdLayout,
    }
  },
})
</script>
