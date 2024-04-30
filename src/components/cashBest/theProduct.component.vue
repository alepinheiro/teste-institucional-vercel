<template>
  <section class="py-20">
    <div
      class="flex flex-row md:flex-col sm:flex-col items-center xl:max-w-7xl lg:max-w-5xl md:max-w-2xl md:gap-6 mx-auto px-5"
    >
      <div class="flex flex-col gap-6 sm:gap-8 flex-1">
        <h2 class="text-4xl sm:text-2xl text-primary font-bold">
          O crédito mais barato do mercado.
        </h2>
        <p
          class="text-textPrimary w-5/6 md:w-full md:text-justify sm:w-full text-base sm:text-justify"
        >
          Ao utilizar seu imóvel como garantia, você desfruta das taxas mais
          baixas, garantindo um
          <b> crédito competitivo e acessível. </b>
        </p>
        <hr class="hidden sm:block border-zinc-400" />
        <a
          :href="`https://simulador.seja.best/${useObjectToQueryString(route.query)}`"
          target="_blank"
          class="font-bold text-white bg-primary rounded px-4 py-2 w-fit sm:hidden hover:-translate-y-1 hover:shadow-md hover:shadow-black/50 transition-all active:scale-90"
          >Simule on-line de graça
        </a>
      </div>
      <div class="w-full flex-1 flex flex-col gap-2">
        <div class="flex md:mx-auto mt-20 min-md:pt-0 h-128 w-full ">
          <div class="flex flex-row justify-around w-full h-full items-end relative">
            <span class="absolute left-0 -top-10 min-md:-top-5 w-1/3 text-primary">
              Veja e compare as <b>taxas médias</b> do mercado:
            </span>
            <div
              v-for="{ id, tax, title } of products"
              :key="id"
              class="h-full flex flex-col items-center justify-end relative mb-16 min-md:mb-10 group"
            >
              <div class="flex flex-col">
                <span
                  class="text-xl text-textPrimary font-bold group-hover:scale-125 transition-transform"
                >
                  {{ tax.toLocaleString('pt-BR') }}%
                </span>
                <span class="text-primary">ao mês</span>
              </div>
              <div
                :style="{ height: tax * 10 + '%' }"
                :class="[id === 1 ? 'bg-primary' : 'bg-[#D9D9D9]']"
                class="w-full rounded-t-lg flex-shrink-0 hover:bg-secondary transition-all ease-out duration-700"
              ></div>
              <div class="absolute -mb-14 h-10 text-center">
                <span
                  class="text-sm min-md:whitespace-nowrap group-hover:font-bold transition"
                >
                  {{ title }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <span class="text-xs text-right w-full">
          *As taxas médias do mercado são referência Banco Central do Brasil de
          Julho/22.
        </span>
      </div>
      <a
        :href="`https://simulador.seja.best/${useObjectToQueryString(route.query)}`"
        target="_blank"
        class="font-bold text-white bg-primary rounded px-4 py-2 w-fit hidden sm:block sm:mt-8 hover:-translate-y-1 hover:shadow-md hover:shadow-black/50 transition-all active:scale-90"
      >
        Simule on-line de graça
      </a>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { useObjectToQueryString } from '@/composables/useObjectToQueryString'
import { useRoute } from 'vue-router'

const route = useRoute()

const products = [
  {
    id: 1,
    tax: 1.09,
    title: 'CashBest',
  },
  {
    id: 2,
    tax: 2.85,
    title: 'Crédito Consignado',
  },
  {
    id: 3,
    tax: 6.35,
    title: 'Empréstimo pessoal',
  },
  {
    id: 4,
    tax: 8.26,
    title: 'Cheque especial',
  },
]
</script>
