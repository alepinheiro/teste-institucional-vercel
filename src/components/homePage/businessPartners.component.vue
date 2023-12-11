<template>
  <section
    class="flex flex-col gap-10 md:gap-32 lg:gap-32 xl:gap-32 py-10 md:py-24 lg:py-24 xl:py-24 px-5 md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto"
  >
    <div class="flex flex-col text-center gap-2 lg:gap-5 xl:gap-5 xl:w-8/12 xl:mx-auto">
      <h2 class="text-primary text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold">
        A melhor plataforma multibancos.
      </h2>
      <p class="text-textPrimary md:text-xl lg:text-xl xl:text-xl">
        <strong>
          Com a SejaBest, você tem acesso a produtos de mais de 20 instituições
          financeiras,
        </strong>
        o que pode lhe garantir as melhores taxas e as maiores chances de
        aprovação, além de um time de especialistas preparado para te atender e
        te guiar durante todo o processo.
      </p>
    </div>
    <div class="flex lg:flex-row gap-5 items-center">
      <img src="/images/Home/simulatorOnPhoneMockup.png" alt="" class="w-5/12">
      <ul class="flex flex-col gap-4 lg:w-7/12 xl:w-7/12">
        <div
          v-for="row of partners"
          :key="row.toString()"
          class="flex flex-row items-center gap-2 md:w-fit lg:w-fit md:mx-auto lg:mx-auto xl:mx-auto"
        >
          <li
            v-for="({ alt, image }, i) of row"
            :key="alt ?? '' + i"
            :class="[
              alt
                ? 'w-auto bg-[#DADADA]'
                : 'first-of-type:bg-gradient-to-l last-of-type:bg-gradient-to-r from-[#DADADA] to-transparent w-24',
            ]"
            class="text-ellipsis rounded px-2 md:py-3 lg:py-3 xl:py-3"
          >
            <img
              v-if="image"
              :src="`/images/Home/icons/${image}.svg`"
              class="h-8 md:py-1 md:px-2 lg:px-2 xl:px-2"
              :alt="alt ?? ''"
              loading="lazy"
            />
            <div v-else class="block w-8 h-8"></div>
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
