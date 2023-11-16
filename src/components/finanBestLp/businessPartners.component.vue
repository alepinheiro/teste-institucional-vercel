<template>
  <section class="w-full flex py-10">
    <div
      class="flex flex-col gap-6 max-w-7xl mx-auto font-Public-Sans text-center"
    >
      <h2 class="text-3xl font-bold text-primary">
        Na SejaBest, suas chances de aprovação são maiores
      </h2>
      <p class="text-xl text-textPrimary">
        Com a SejaBest, você tem acesso a produtos de mais de 20 instituições
        financeiras, o que pode lhe garantir as melhores taxas e as maiores
        chances de aprovação, além de um time de especialistas preparado para te
        atender e te guiar durante todo o processo.
      </p>
      <div class="flex flex-row">
        <img
          src="/images/finanBest/businessPartnersXL161123.png"
          alt=""
          srcset=""
        />
        <div class="flex-wrap flex flex-row gap-5 justify-center">
          <div v-for="{ id, alt, source } of banks" :key="id" class="bg-black/5 py-3 px-4 rounded-md h-fit">
            <img :src="source" :alt="alt" class="h-8" />
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
