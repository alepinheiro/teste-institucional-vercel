<template>
  <section class="w-full">
    <div

      class="flex flex-col gap-18 contentBg text-center py-18 md:max-w-2xl max-w-5xl mx-auto px-5"
    >
      <h2 class="text-3xl py-10">
        <span class="text-[#D0FE42] font-bold"> Mais de 10 horas </span>
        de conteúdos com dicas, exemplos, casos e tudo o que você quer e precisa
        saber
      </h2>
      <ul
        class="flex flex-col lg:flex-row xl:flex-row lg:items-stretch xl:items-stretch xl:justify-center lg:justify-center lg:flex-wrap xl:flex-wrap items-center gap-5"
      >

        <li
          v-for="{ id, title, text } of contentCards"
          :key="id"
          class="flex flex-col gap-4 py-10 px-7 rounded-lg lg:w-1/3 xl:w-1/3 xl:flex-grow lg:flex-grow relative flex-grow xl:last-of-type:flex-grow-0 xl:last-of-type:w-1/2 lg:last-of-type:flex-grow-0 lg:last-of-type:w-1/2 "
        >
          <div id="contentBorder"></div>
          <div class="flex flex-row items-center gap-2 text-xl">
            <span class="text-[#D0FE42] text-3xl">
              {{ id }}
            </span>
            <!-- eslint-disable-next-line vue/no-v-html -->
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
          title: 'O que você precisa saber sobre o <b>Crédito com Garantia de Imóvel </b>',
          text: 'Crédito com Garantia de Imóvel de A-Z. Aprenda o passo-a-passo completo para o Empréstimo de Garantia de Imóvel: a modalidade que vêm transformando o jeito de fazer dinheiro do corretor moderno.',
        },
        {
          id: 5,
          title: '<b>FinanBest:</b> o Cliente Ideal',
          text: 'Aprenda a guiar seu cliente para o seu primeiro financiamento Imobiliário. O guia completo para contornar objeções, dicas de venda e o que você precisa saber sobre o cliente perfeito.',
        },
        {
          id: 6,
          title: '<b>CashBest:</b> o Cliente Ideal',
          text: 'O guia definitivo sobre identificação e aproveitamento de oportunidades. Descubra o que busca o cliente de Crédito com Garantia de Imóvel e confira dicas exclusivas sobre como identificar o cenário perfeito.',
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
          title: 'Fintequize a sua marca - <b>A Bext</b>',
          text: 'Veja o CEO Gaspar Motta e o case de sucesso da Bext. Entenda como a fintech de crédito se tornou referência no mercado financeiro e como você pode transformar a sua marca também.',
        },
      ],
    }
  },
})
</script>
<style lang="scss" scoped>
#contentBorder {
  @apply absolute inset-0 z-0 ;
  background-color: #D0FE42;
  background: linear-gradient(
    127deg,
    #D0FE42 0%,
    #D0FE4200 50%,
    #D0FE42 100%,
    );

  clip-path: polygon(
    0px 13px,
    0px 13px,
    0.1701481px 10.89133047px,
    0.6627488px 8.89099136px,
    1.4510367px 7.02574789px,
    2.5082464px 5.32236528px,
    3.8076125px 3.80760875px,
    5.3223696px 2.50824352px,
    7.0257523px 1.45103481px,
    8.8909952px 0.66274784px,
    10.8913329px 0.17014783px,
    13px 2.1522183928354e-31px,
    calc(100% - 13.372px) 0px,
    calc(100% - 13.372px) 0px,
    calc(100% - 11.26326px) 0.1701481px,
    calc(100% - 9.2628799999999px) 0.6627488px,
    calc(100% - 7.39762px) 1.4510367px,
    calc(100% - 5.6942399999999px) 2.5082464px,
    calc(100% - 4.1795px) 3.8076125px,
    calc(100% - 2.8801599999999px) 5.3223696px,
    calc(100% - 1.82298px) 7.0257523px,
    calc(100% - 1.03472px) 8.8909952px,
    calc(100% - 0.5421399999999px) 10.8913329px,
    calc(100% - 0.37200000000007px) 13px,
    calc(100% - 0.37199999999996px) calc(100% - 13.142px),
    calc(100% - 0.37199999999996px) calc(100% - 13.142px),
    calc(100% - 0.5421399999999px) calc(100% - 11.03326px),
    calc(100% - 1.0347199999999px) calc(100% - 9.0328799999999px),
    calc(100% - 1.82298px) calc(100% - 7.16762px),
    calc(100% - 2.8801599999999px) calc(100% - 5.46424px),
    calc(100% - 4.1795px) calc(100% - 3.9495px),
    calc(100% - 5.6942399999999px) calc(100% - 2.65016px),
    calc(100% - 7.39762px) calc(100% - 1.59298px),
    calc(100% - 9.26288px) calc(100% - 0.80471999999997px),
    calc(100% - 11.26326px) calc(100% - 0.31214px),
    calc(100% - 13.372px) calc(100% - 0.14200000000002px),
    13px calc(100% - 0.142px),
    13px calc(100% - 0.142px),
    10.89132561px calc(100% - 0.31213999999994px),
    8.89098368px calc(100% - 0.80471999999995px),
    7.02573907px calc(100% - 1.59298px),
    5.32235664px calc(100% - 2.65016px),
    3.80760125px calc(100% - 3.9495px),
    2.50823776px calc(100% - 5.46424px),
    1.45103103px calc(100% - 7.16762px),
    0.66274592px calc(100% - 9.03288px),
    0.17014729px calc(100% - 11.03326px),
    2.1522109972644e-31px calc(100% - 13.142px),
    0px 13px,
    13px 2px,
    13px 2px,
    11.21574341px 2.14397122px,
    9.52315008px 2.56078656px,
    7.94486767px 3.22779854px,
    6.50354384px 4.12235968px,
    5.22182625px 5.2218225px,
    4.12236256px 6.50353952px,
    3.22780043px 7.94486326px,
    2.56078752px 9.52314624px,
    2.14397149px 11.21574098px,
    2px 13px,
    2px calc(100% - 13.142px),
    2px calc(100% - 13.142px),
    2.14397095px calc(100% - 11.357775px),
    2.5607856px calc(100% - 9.6651999999999px),
    3.22779665px calc(100% - 8.086925px),
    4.1223568px calc(100% - 6.6456px),
    5.22181875px calc(100% - 5.363875px),
    6.5035352px calc(100% - 4.2644px),
    7.94485885px calc(100% - 3.369825px),
    9.5231424px calc(100% - 2.7028px),
    11.21573855px calc(100% - 2.285975px),
    13px calc(100% - 2.142px),
    calc(100% - 13.372px) calc(100% - 2.142px),
    calc(100% - 13.372px) calc(100% - 2.142px),
    calc(100% - 11.587775px) calc(100% - 2.2859749999999px),
    calc(100% - 9.8951999999999px) calc(100% - 2.7027999999999px),
    calc(100% - 8.316925px) calc(100% - 3.369825px),
    calc(100% - 6.8756px) calc(100% - 4.2644px),
    calc(100% - 5.593875px) calc(100% - 5.363875px),
    calc(100% - 4.4943999999999px) calc(100% - 6.6456px),
    calc(100% - 3.599825px) calc(100% - 8.086925px),
    calc(100% - 2.9328px) calc(100% - 9.6652px),
    calc(100% - 2.515975px) calc(100% - 11.357775px),
    calc(100% - 2.3720000000001px) calc(100% - 13.142px),
    calc(100% - 2.372px) 13px,
    calc(100% - 2.372px) 13px,
    calc(100% - 2.5159749999998px) 11.21574341px,
    calc(100% - 2.9327999999999px) 9.52315008px,
    calc(100% - 3.599825px) 7.94486767px,
    calc(100% - 4.4943999999999px) 6.50354384px,
    calc(100% - 5.593875px) 5.22182625px,
    calc(100% - 6.8756px) 4.12236256px,
    calc(100% - 8.316925px) 3.22780043px,
    calc(100% - 9.8951999999999px) 2.56078752px,
    calc(100% - 11.587775px) 2.14397149px,
    calc(100% - 13.372px) 2px,
    13px 2px
  );
}
</style>
