<template>
  <section class="w-full">
    <div
      class="mx-auto w-full flex flex-col gap-5 items-center rounded-xl px-5 py-10 md:pt-20 lg:pt-20 min-md:border min-md:border-zinc-200 md:max-w-[707px] lg:max-w-5xl xl:max-w-6xl xl:w-10/12"
    >
      <h2 class="text-3xl text-center text-mcf-nightRider min-md:text-5xl">
        Por que escolher a
        <b class="min-md:block"> Minha Casa Financiada + SejaBest </b>
      </h2>
      <div
        class="flex flex-col w-full pt-10 md:pt-20 lg:pt-14 text-textPrimary"
      >
        <div class="flex flex-row w-full items-center">
          <div class="w-3/5"></div>
          <div class="w-1/5 text-center">
            <Logo
              class="h-auto w-full pr-2 text-mcf-freeSpeechAquamarine max-h-10"
            />
          </div>
          <div class="w-1/5 text-center text-xs min-md:text-base">
            Bancos <br />
            Tradicionais
          </div>
        </div>
        <div
          v-for="{ id, text, ourProduct, otherProducts } in lines"
          :key="id"
          class="flex flex-row w-full py-4 items-center border-b border-zinc-200 last-of-type:border-0"
        >
          <div class="w-3/5">{{ text }}</div>
          <div class="w-1/5 text-center">
            <CheckSVG
              v-if="ourProduct"
              class="w-fit mx-auto text-mcf-freeSpeechAquamarine"
            />
            <XMarkSVG v-else class="w-6 h-6 mx-auto" />
          </div>
          <div class="w-1/5 text-center">
            <CheckSVG
              v-if="otherProducts"
              class="w-fit mx-auto text-mcf-nightRider"
            />
            <XMarkSVG v-else class="w-4 h-4 mx-auto text-zinc-400" />
          </div>
        </div>
      </div>
      <a
        :href="`${information.simulatorMCF}${$root.utms}`"
        target="_blank"
        class="bg-mcf-burntOrange font-bold py-5 px-10 rounded-lg text-center text-white"
        @click="$emit('click')"
      >
        Quero simular meu crédito
      </a>
    </div>
  </section>
</template>
<script lang="ts">
import Logo from '@/components/mcf/icons/logoMcfSVG.component.vue'
import CheckSVG from '@/components/warren/icons/checkSVG.component.vue'
import XMarkSVG from '@/components/warren/icons/xMark.component.vue'
import information from '@/configurations/information'
import { defineComponent } from 'vue'
/**
 * # Visão Geral
 * O componente `ComparisonTable` é um componente Vue.js
 * projetado para exibir uma tabela comparativa destacando
 * as vantagens do produto "Minha Casa Financiada + SejaBest"
 * em comparação com outros produtos no mercado.
 *
 * # Props
 * Este componente não aceita nenhuma propriedade.
 */
export default defineComponent({
  name: 'ComparisonTable',
  components: {
    Logo,
    CheckSVG,
    XMarkSVG,
  },
  emits: ['click'],
  data() {
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
    return {
      lines,
      information,
    }
  },
  methods: {
    onButtonClick() {
      window.open(`${information.simulatorWarren}${this.$root.utms}`, '_blank')
    },
  },
})
</script>
