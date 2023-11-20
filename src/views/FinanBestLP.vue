<template>
  <main>
    <HeroSection />
    <BusinessPartners />
    <ComparisonTable />
    <VideoSection />
    <StepsSection />
    <AboutUs />
    <SubscribeSection />
    <TheFooter />
  </main>
</template>
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import HeroSection from '@/components/finanBestLp/heroSection.component.vue'
import BusinessPartners from '@/components/finanBestLp/businessPartners.component.vue'
import ComparisonTable from '@/components/finanBestLp/comparisonTable.component.vue'
import VideoSection from '@/components/finanBestLp/videoSection.component.vue'
import StepsSection from '@/components/finanBestLp/stepsSection.component.vue'
import AboutUs from '@/components/finanBestLp/aboutUs.component.vue'
import SubscribeSection from '@/components/finanBestLp/subscribeSection.component.vue'
import TheFooter from '@/components/structure/theFooter.component.vue'

useHead({
  title: 'FinanBest: Financie seu imóvel com a assessoria SejaBest',
  meta: [
    {
      name: 'description',
      content: 'Financie seu imóvel com as melhores condições do mercado. Sem filas, sem gerentes, sem complexidade e com um time de especialistas totalmente pronto pra lhe ajudar.'
    }
  ],
})
</script>
