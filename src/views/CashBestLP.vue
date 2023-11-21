<template>
  <main>
    <HeroSection />
    <BusinessPartners
      :title="'Maximizamos suas chances de aprovação'"
      :description="'Com a SejaBest, você tem acesso a produtos de mais de 20 instituições financeiras, o que pode lhe garantir as <b>melhores taxas</b> e as <b>maiores chances</b> de aprovação.'"
    />
    <ComparisonTable />
    <AboutUs
      :cards="{ bgColor: 'SECONDARY' }"
      :container="{ bgColor: 'BGDARKCOLOR' }"
    />
    <TheFooter />
  </main>
</template>
<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import HeroSection from '@/components/cashBest/heroSection.component.vue'
import BusinessPartners from '@/components/base/businessPartners.component.vue'
import ComparisonTable from '@/components/finanBestLp/comparisonTable.component.vue'
import AboutUs from '@/components/finanBestLp/aboutUs.component.vue'
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
