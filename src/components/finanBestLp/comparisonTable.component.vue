<template>
  <section class="w-full py-10 relative">
    <div class="absolute z-0 inset-0 flex">
      <img src="/images/finanBest/bgComparisonTable.png" alt="" class=" self-end">
    </div>
    <div class="max-w-7xl flex mx-auto font-Public-Sans z-10 relative px-5">
      <div
        class="mx-auto w-8/12 sm:w-full flex flex-col bg-[#EFEFEF] items-center rounded-xl px-5 py-10"
      >
        <h2 class="text-5xl sm:text-xl sm:text-center sm:text-primary md:text-3xl text-textPrimary sm:w-8/12 sm:mx-auto">
          Por que financiar com a <b> SejaBest?</b>
        </h2>
        <div class="flex flex-col w-full px-10 sm:px-0 pt-10 text-textPrimary">
          <div class="flex flex-row w-full items-center">
            <div class="w-1/2"></div>
            <div class="w-1/4 text-center">
              <img src="/images/logoBest/logoGray.svg" alt="Logomarca SejaBest" class="h-10 mx-auto">
            </div>
            <div class="w-1/4 text-center sm:text-xs">Bancos <br> Tradicionais</div>
          </div>
          <div
            v-for="{ id, text, ourProduct, otherProducts } in lines"
            :key="id"
            class="flex flex-row w-full py-4 items-center border-b border-zinc-300 last-of-type:border-0"
          >
            <div class="w-1/2">{{ text }}</div>
            <div class="w-1/4 text-center">
              <i v-if="ourProduct" class="fa-solid fa-check text-primary w-6 h-6"></i>
              <i v-else class="fa-solid fa-xmark w-6 h-6"></i>
            </div>
            <div class="w-1/4 text-center">
              <i v-if="otherProducts" class="fa-solid fa-check text-red-500 w-6 h-6"></i>
              <i v-else class="fa-solid fa-xmark w-6 h-6"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const lines = [
  {
    id: 1,
    text: 'As menores taxas do mercado',
    ourProduct: true,
    otherProducts: true,
  },
  {
    id: 2,
    text: 'Múltiplas opções de banco',
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 3,
    text: 'Plataforma multiprodutos',
    ourProduct: true,
    otherProducts: true,
  },
  {
    id: 4,
    text: 'Transparência',
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 5,
    text: 'Processo agilizado',
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 6,
    text: 'Atendimento 7 dias por semana',
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 7,
    text: 'Assessoria personalizada',
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 8,
    text: 'Totalmente Digital',
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 9,
    text: 'Sem burocracias',
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 10,
    text: 'Sem filas',
    ourProduct: true,
    otherProducts: false,
  },
  {
    id: 11,
    text: 'Foco no cliente',
    ourProduct: true,
    otherProducts: false,
  },
]
</script>
