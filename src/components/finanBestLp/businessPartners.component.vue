<template>
  <section class="w-full flex py-20">
    <div
      class="flex flex-col gap-6 max-w-7xl md:max-w-2xl mx-auto font-Public-Sans text-center px-5"
    >
      <h2 class="text-3xl sm:text-xl font-bold text-primary">
        Na SejaBest, suas chances de aprovação são maiores
      </h2>
      <div class="hidden sm:block">
        <img
          src="/images/finanBest/businessPartnersXL161123.png"
          alt=""
          srcset=""
          class="object-contain"
        />
      </div>
      <p class="text-xl sm:text-sm text-textPrimary md:text-justify">
        Com a SejaBest, você tem acesso a produtos de mais de 20 instituições
        financeiras, o que pode lhe garantir as <b>melhores taxas</b> e as
        <b> maiores chances de aprovação</b>, além de um
        <b> time de especialistas </b>preparado para te atender e te guiar
        <b>durante todo o processo.</b>
      </p>

      <div
        class="flex flex-row md:flex-col sm:flex-col md:items-center md:gap-4 items-end xl:py-20"
      >
        <div class="flex-1 sm:hidden">
          <img
            src="/images/finanBest/businessPartnersXL161123.png"
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
    source: '/images/finanBest/banks/bancoPaulista.png',
  },
  {
    id: 2,
    alt: 'Banco Pontte',
    source: '/images/finanBest/banks/bancoPontte.png',
  },
  {
    id: 3,
    alt: 'Banco Libra',
    source: '/images/finanBest/banks/bancoLibra.png',
  },
  {
    id: 4,
    alt: 'Banco Bari',
    source: '/images/finanBest/banks/bancoBari.png',
  },
  {
    id: 5,
    alt: 'Banco Rodobens',
    source: '/images/finanBest/banks/bancoRodobens.png',
  },
  {
    id: 6,
    alt: 'Banco Daycoval',
    source: '/images/finanBest/banks/bancoDaycoval.png',
  },
  {
    id: 7,
    alt: 'Banco Santander',
    source: '/images/finanBest/banks/bancoSantander.png',
  },
  {
    id: 8,
    alt: 'Banco Piratini',
    source: '/images/finanBest/banks/bancoPiratini.png',
  },
  {
    id: 9,
    alt: 'Banco Creditas',
    source: '/images/finanBest/banks/bancoCreditas.png',
  },
  {
    id: 10,
    alt: 'Banco CashMe',
    source: '/images/finanBest/banks/bancoCashMe.png',
  },
  {
    id: 11,
    alt: 'Banco Inter',
    source: '/images/finanBest/banks/bancoInter.png',
  },
  {
    id: 12,
    alt: 'Banco BRB',
    source: '/images/finanBest/banks/bancoBRB.png',
  },
  {
    id: 13,
    alt: 'Banco Itaú',
    source: '/images/finanBest/banks/bancoItau.png',
  },
  {
    id: 14,
    alt: 'Banco T-cash',
    source: '/images/finanBest/banks/bancoTCash.png',
  },
  {
    id: 15,
    alt: 'Banco BV',
    source: '/images/finanBest/banks/bancoBV.png',
  },
  {
    id: 16,
    alt: 'Banco C6',
    source: '/images/finanBest/banks/bancoC6.png',
  },
]
</script>
