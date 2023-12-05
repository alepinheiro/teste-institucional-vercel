<template>
  <section class="w-full py-10 bg-white">
    <div
        class="mx-auto w-8/12 sm:w-full flex flex-col items-center rounded-xl px-5 py-10"
      >
        <h2 class="text-3xl text-center text-warren-mortar">
          Por que escolher a
          <b> Warren + SejaBest </b>
        </h2>
        <div class="flex flex-col w-full px-10 sm:px-0 pt-10 text-textPrimary">
          <div class="flex flex-row w-full items-center">
            <div class="w-3/5"></div>
            <div class="w-1/5 text-center">
              <LogoWarrenSVG class="h-auto w-full pr-2 text-warren-gold" />
            </div>
            <div class="w-1/5 text-center sm:text-xs">
              Bancos <br />
              Tradicionais
            </div>
          </div>
          <div
            v-for="{ id, text, ourProduct, otherProducts } in lines"
            :key="id"
            class="flex flex-row w-full py-4 items-center border-b border-warren-solitude last-of-type:border-0"
          >
            <div class="w-3/5 text-xs">{{ text }}</div>
            <div class="w-1/5 text-center">
              <CheckSVG v-if="ourProduct" class="w-fit mx-auto text-warren-gold" />
              <XMarkSVG v-else class=" w-6 h-6 mx-auto"/>
            </div>
            <div class="w-1/5 text-center">
              <CheckSVG v-if="otherProducts" class="w-fit mx-auto text-warren-terracota" />
              <XMarkSVG v-else class=" w-4 h-4 mx-auto text-warren-gainsboro"/>
            </div>
          </div>
        </div>
        <CustomButton :text="'Entre em contato'" class="mt-8" />
      </div>
  </section>
</template>
<script lang="ts" setup>
import LogoWarrenSVG from '@/components/warren/icons/logoWarrenSVG.component.vue';
import CheckSVG from '@/components/warren/icons/checkSVG.component.vue';
import XMarkSVG from '@/components/warren/icons/xMark.component.vue';
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
