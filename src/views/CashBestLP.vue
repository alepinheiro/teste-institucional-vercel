<template>
  <main>
    <HeroSection />
    <BusinessPartners
      :props="{
        backgroundColor: '#F1F1F1',
        title: 'Maximizamos suas chances de aprovação',
        description:
          'Com a SejaBest, você tem acesso a produtos de mais de 20 instituições financeiras, o que pode lhe garantir as <b>melhores taxas</b> e as <b> maiores chances de aprovação</b>, além de um <b> time de especialistas </b>preparado para te atender e te guiar <b>durante todo o processo.</b>',
      }"
    />
    <ComparisonTable
      :props="{
        component: {
          backgroundColor: '#F1F1F1',
          showBackGroundImage: false,
        },
        table: {
          backgroundColor: '#FFF',
          titleColor: 'PRIMARY',
        },
      }"
    />
    <AboutUs
      :cards="{ bgColor: 'SECONDARY' }"
      :container="{ bgColor: 'BGDARKCOLOR' }"
    />
    <Solutions />
    <Steps />
    <TheProduct />

    <Subscribe
      :component="{ bgColor: 'SECONDARY' }"
      :form="{ showRealtyValue: true }"
    />
    <TheFooter />
  </main>
</template>
<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import HeroSection from '@/components/cashBest/heroSection.component.vue'
import BusinessPartners from '@/components/base/businessPartners.component.vue'
import ComparisonTable from '@/components/base/comparisonTable.component.vue'
import AboutUs from '@/components/base/aboutUs.component.vue'
import Solutions from '@/components/cashBest/solutionsSection.component.vue'
import Steps from '@/components/cashBest/stepsSection.component.vue'
import TheProduct from '@/components/cashBest/theProduct.component.vue'
import Subscribe from '@/components/base/subscribeSection.component.vue'
import TheFooter from '@/components/structure/theFooter.component.vue'
useHead({
  title: 'CashBest: o Crédito com Garantia de Imóvel da SejaBest',
  meta: [
    {
      name: 'description',
      content:
        'Financie seu imóvel com as melhores condições do mercado. Sem filas, sem gerentes, sem complexidade e com um time de especialistas totalmente pronto pra lhe ajudar.',
    },
  ],
})
</script>
