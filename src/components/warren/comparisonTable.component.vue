<template>
  <section class="w-full py-10 bg-white">
    <div
      class="mx-auto w-full flex flex-col items-center rounded-xl px-5 py-10 md:border lg:border xl:border md:border-warren-solitude lg:border-warren-solitude xl:border-warren-solitude md:max-w-3xl lg:max-w-5xl xl:max-w-6xl xl:w-10/12"
    >
      <h2 class="text-3xl text-center text-warren-mortar md:text-5xl lg:text-5xl xl:text-5xl">
        Por que escolher a <b class="md:block lg:block xl:block">Warren + SejaBest</b>
      </h2>
      <div class="flex flex-col w-full pt-10 text-textPrimary">
        <div class="flex flex-row w-full items-center">
          <div class="w-3/5"></div>
          <div class="w-1/5 text-center">
            <LogoWarrenSVG class="h-auto w-full pr-2 text-warren-gold max-h-10" />
          </div>
          <div class="w-1/5 text-center text-xs md:text-base lg:text-base xl:text-base">
            Bancos <br />
            Tradicionais
          </div>
        </div>
        <div
          v-for="{ id, text, ourProduct, otherProducts } in lines"
          :key="id"
          class="flex flex-row w-full py-4 items-center border-b border-warren-solitude last-of-type:border-0"
        >
          <div class="w-3/5">{{ text }}</div>
          <div class="w-1/5 text-center">
            <CheckSVG
              v-if="ourProduct"
              class="w-fit mx-auto text-warren-gold"
            />
            <XMarkSVG v-else class="w-6 h-6 mx-auto" />
          </div>
          <div class="w-1/5 text-center">
            <CheckSVG
              v-if="otherProducts"
              class="w-fit mx-auto text-warren-terracota"
            />
            <XMarkSVG v-else class="w-4 h-4 mx-auto text-warren-gainsboro" />
          </div>
        </div>
      </div>
      <CustomButton :text="'Quero simular meu crédito'" class="mt-8" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import LogoWarrenSVG from '@/components/warren/icons/logoWarrenSVG.component.vue'
import CheckSVG from '@/components/warren/icons/checkSVG.component.vue'
import XMarkSVG from '@/components/warren/icons/xMark.component.vue'
import CustomButton from '@/components/warren/customButton.component.vue'

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
