<template>
  <section class="flex flex-col gap-10 py-10 px-5">
    <div class="flex flex-col text-center gap-2">
      <h2 class="text-primary text-2xl font-bold">
        A melhor plataforma multibancos.
      </h2>
      <p class="text-textPrimary">
        Com a SejaBest, você tem acesso a produtos de mais de 20 instituições
        financeiras, o que pode lhe garantir as melhores taxas e as maiores
        chances de aprovação, além de um time de especialistas preparado para te
        atender e te guiar durante todo o processo.
      </p>
    </div>
    <ul class="flex flex-col gap-4">
      <div
        v-for="row of partners"
        :key="row.toString()"
        class="flex flex-row items-center gap-2"
      >
        <li
          v-for="({ alt, image }, i) of row"
          :key="alt ?? '' + i"
          :class="[alt ? 'w-auto bg-[#CACACA]' : 'first-of-type:bg-gradient-to-l last-of-type:bg-gradient-to-r from-[#CACACA] to-transparent w-24']"
          class="text-ellipsis rounded px-2 "
        >
          <img :src="`/images/Home/icons/${image}.svg`" class="h-8" :alt="alt ?? ''" loading="lazy">
        </li>
      </div>
    </ul>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BusinessPartners',
  data() {
    const firstRow = [
      {
        image: null,
        alt: null,
      },
      {
        image: 'bancoPaulista',
        alt: 'Banco Paulista',
      },
      {
        image: 'bancoBV',
        alt: 'Banco BV',
      },
      {
        image: 'bancoBRB',
        alt: 'Banco BRB',
      },
    ]

    const secondRow = [
      {
        image: 'bancoBari',
        alt: 'Banco Bari',
      },
      {
        image: 'bancoRodobens',
        alt: 'Banco Rodobens',
      },
      {
        image: 'bancoInter',
        alt: 'Banco Inter',
      },
      {
        image: null,
        alt: null,
      },
    ]

    const thirdRow = [
      {
        image: null,
        alt: null,
      },
      {
        image: 'bancoCashMe',
        alt: 'Banco CashMe',
      },
      {
        image: 'bancoSantander',
        alt: 'Banco Santander',
      },
      {
        image: 'bancoLibra',
        alt: 'Banco Libra',
      },
    ]

    const fourthRow = [
      {
        image: 'bancoItau',
        alt: 'Banco Itaú',
      },
      {
        image: 'bancoDaycoval',
        alt: 'Banco Daycoval',
      },
      {
        image: 'bancoTCash',
        alt: 'Banco TCash',
      },
      {
        image: null,
        alt: null,
      },
    ]

    const fifthRow = [
      {
        image: null,
        alt: null,
      },
      {
        image: 'bancoCreditas',
        alt: 'Banco Creditas',
      },
      {
        image: 'bancoPontte',
        alt: 'Banco Pontte',
      },
      {
        image: 'bancoC6',
        alt: 'Banco C6',
      },
    ]

    return {
      partners: [firstRow, secondRow, thirdRow, fourthRow, fifthRow],
    }
  },
})
</script>
