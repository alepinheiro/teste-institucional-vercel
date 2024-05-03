<template>
  <section
  :style="{
      'background-color': props.backgroundColor,
    }"
  class="w-full flex py-10 pb-20">
    <div
      class="flex flex-col gap-6 max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto font-Public-Sans text-center px-5"
    >
      <h2 class="text-4xl sm:text-2xl font-bold text-primary">
        {{ props.title }}
      </h2>
      <div class="hidden sm:block">
        <img
          src="/images/finanBext/businessPartnersXL161123.png"
          alt=""
          srcset=""
          class="object-contain"
        />
      </div>
      <p
        class="text-base text-textPrimary md:text-justify"
        v-html="props.description"
      ></p>

      <div
        class="flex flex-row md:flex-col sm:flex-col items-center md:gap-4 xl:py-20"
      >
        <div class="flex-1 lg:w-7/12 lg:flex-initial sm:hidden">
          <img
            src="/images/finanBext/businessPartnersXL161123.png"
            alt=""
            srcset=""
            class="object-contain"
          />
        </div>
        <div
          class="flex-wrap flex flex-row gap-5 lg:gap-2 justify-center flex-1"
        >
          <div
            v-for="{ id, alt, source } of banks"
            :key="id"
            class="bg-black/5 py-3 px-4 rounded-md"
          >
            <img :src="source" :alt="alt" class="h-8 lg:h-6 md:h-6 sm:h-6" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const banks = [
  {
    id: 1,
    alt: 'Banco Paulista',
    source: '/images/finanBext/banks/bancoPaulista.png',
  },
  {
    id: 2,
    alt: 'Banco Pontte',
    source: '/images/finanBext/banks/bancoPontte.png',
  },
  {
    id: 3,
    alt: 'Banco Libra',
    source: '/images/finanBext/banks/bancoLibra.png',
  },
  {
    id: 4,
    alt: 'Banco Bari',
    source: '/images/finanBext/banks/bancoBari.png',
  },
  {
    id: 5,
    alt: 'Banco Rodobens',
    source: '/images/finanBext/banks/bancoRodobens.svg',
  },
  {
    id: 6,
    alt: 'Banco Daycoval',
    source: '/images/finanBext/banks/bancoDaycoval.svg',
  },
  {
    id: 7,
    alt: 'Banco Santander',
    source: '/images/finanBext/banks/bancoSantander.svg',
  },
  {
    id: 8,
    alt: 'Banco Piratini',
    source: '/images/finanBext/banks/bancoPiratini.png',
  },
  {
    id: 9,
    alt: 'Banco Creditas',
    source: '/images/finanBext/banks/bancoCreditas.png',
  },
  {
    id: 10,
    alt: 'Banco CashMe',
    source: '/images/finanBext/banks/bancoCashMe.svg',
  },
  {
    id: 11,
    alt: 'Banco Inter',
    source: '/images/finanBext/banks/bancoInter.svg',
  },
  {
    id: 12,
    alt: 'Banco BRB',
    source: '/images/finanBext/banks/bancoBRB.png',
  },
  {
    id: 13,
    alt: 'Banco Itaú',
    source: '/images/finanBext/banks/bancoItau.png',
  },
  {
    id: 14,
    alt: 'Banco T-cash',
    source: '/images/finanBext/banks/bancoTCash.png',
  },
  {
    id: 15,
    alt: 'Banco BV',
    source: '/images/finanBext/banks/bancoBV.png',
  },
  {
    id: 16,
    alt: 'Banco C6',
    source: '/images/finanBext/banks/bancoC6.png',
  },
]

defineProps<{
  props: {
    backgroundColor: string
    title: string
    description: string
  }
}>()
</script>
