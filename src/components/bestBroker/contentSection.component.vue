<template>
  <section class="w-full">
    <div
      class="flex flex-col gap-8 contentBg text-center py-10 md:max-w-2xl max-w-5xl mx-auto px-5"
    >
      <h2 class="text-3xl py-10">
        <span class="text-[#D0FE42] font-bold"> Mais de 10 horas </span>
        de conteúdos com dicas, exemplos, casos e tudo o que você quer e precisa
        saber
      </h2>
      <ul
        class="flex flex-col lg:flex-row xl:flex-row lg:items-stretch lg:flex-wrap xl:flex-wrap items-center gap-5"
      >
        <li
          v-for="{ id, title, text } of contentCards"
          :key="id"
          class="flex flex-col gap-4 border-2 border-[#D0FE42] p-5 rounded-lg lg:w-1/3 xl:w-1/3 xl:flex-grow lg:flex-grow"
        >
          <div class="flex flex-row items-center gap-2 text-xl">
            <span class="text-[#D0FE42] text-3xl">
              {{ id }}
            </span>
            <h3 class="flex-grow" v-html="title"></h3>
          </div>
          <div>
            {{ text }}
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ContentSection',
  data() {
    return {
        contentCards: [
        {
          id: 1,
          title: 'Por que você deve aprender sobre <b>Crédito Imobiliário?</b>',
          text: 'Fique situado sobre o estado atual do mercado de crédito imobiliário e como você, corretor, está deixando de ganhar dinheiro com as ferramentas financeiras.',
        },
        {
          id: 2,
          title: 'O <b>mercado financeiro</b> e suas divisões',
          text: 'Entenda como funciona o mercado financeiro hoje no brasil. Quais órgãos e instituições existem assim como suas funções e atribuições.',
        },
        {
          id: 3,
          title:
            'O que você precisa saber sobre o <b>Financiamento Imobiliário</b>',
          text: 'O guia completo para o Financiamento Imobiliário. Confira os tipos de financiamentos, métodos de entrada, regras gerais, cenários específicos e casos reais para você entender tudo sobre a modalidade.',
        },
        {
          id: 4,
          title: 'O que você precisa saber sobre o <b>Home Equity</b>',
          text: 'Home Equity de A-Z. Aprenda o passo-a-passo completo para o Empréstimo de Garantia de Imóvel: a modalidade que vêm transformando o jeito de fazer dinheiro do corretor moderno.',
        },
        {
          id: 5,
          title: '<b>FinanBest:</b> o Cliente Ideal',
          text: 'Aprenda a guiar seu cliente para o seu primeiro financiamento Imobiliário. O guia completo para contornar objeções, dicas de venda e o que você precisa saber sobre o cliente perfeito.',
        },
        {
          id: 6,
          title: '<b>CashBest:</b> o Cliente Ideal',
          text: 'O guia definitivo sobre identificação e aproveitamento de oportunidades. Descubra o que busca o cliente de Home Equity e confira dicas exclusivas sobre como identificar o cenário perfeito.',
        },
        {
          id: 7,
          title: '<b>Complementos</b> das Operações',
          text: 'Entenda como funcionam os juros, tabelas de amortização, indexadores, impostos. Além disso, veja como funcionam os cartórios e como é o processo de registro de todas as operações.',
        },
        {
          id: 8,
          title: 'O guia de vendas para o <b>Corretor 360°</b>',
          text: 'Uma preparação completa para se tornar um profissional do futuro. Entenda como as ferramentas financeiras podem transformar sua carreira e como se preparar para oportunidades.',
        },
        {
          id: 9,
          title: 'Fintequize a sua marca - <b>A SejaBest</b>',
          text: 'Veja o CEO Gaspar Motta e o case de sucesso da SejaBest. Entenda como a fintech de crédito se tornou referência no mercado financeiro e como você pode transformar a sua marca também.',
        },
      ],
    }
  },
})
</script>
