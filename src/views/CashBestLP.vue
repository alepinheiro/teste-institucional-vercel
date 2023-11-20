<template>
  <main>
    <HeroSection />
  </main>
</template>
<script lang="ts" setup>
import HeroSection from '@/components/cashBest/heroSection.component.vue'
import { useHead } from '@vueuse/head'

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
