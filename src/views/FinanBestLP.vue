<template>
  <main>
    <HeroSection />
    <BusinessPartners
      :props="{
        backgroundColor: '#FFF',
        title: 'Na SejaBest, suas chances de aprovação são maiores',
        description:
          'Com a SejaBest, você tem acesso a produtos de mais de 20 instituições financeiras, o que pode lhe garantir as <b>melhores taxas</b> e as <b> maiores chances de aprovação</b>, além de um <b> time de especialistas </b>preparado para te atender e te guiar <b>durante todo o processo.</b>',
      }"
    />
    <ComparisonTable
      :props="{
        component: {
          backgroundColor: '#FFF',
          showBackGroundImage: true,
        },
        table: {
          backgroundColor: '#EFEFEF',
          titleColor: 'TEXTPRIMARY',
          padding: '2.5rem'
        },
      }"
      class="py-10"
    />
    <VideoSection :youtube-video-id="'Mlg8eDX61uE'" />
    <StepsSection />


    <AboutUs
      :cards="{ bgColor: 'PRIMARY' }"
      :container="{ bgColor: 'SECONDARY' }"
    />
    <Subscribe
      :component="{ bgColor: 'BGDARKCOLOR' }"
      :form="{ showRealtyValue: false }"
    />
    <TheFooter />
  </main>
</template>
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import HeroSection from '@/components/finanBestLp/heroSection.component.vue'
import BusinessPartners from '@/components/base/businessPartners.component.vue'
import ComparisonTable from '@/components/base/comparisonTable.component.vue'
import VideoSection from '@/components/finanBestLp/videoSection.component.vue'
import StepsSection from '@/components/finanBestLp/stepsSection.component.vue'
import AboutUs from '@/components/base/aboutUs.component.vue'
import Subscribe from '@/components/base/subscribeSection.component.vue'
import TheFooter from '@/components/structure/theFooter.component.vue'

useHead({
  title: 'FinanBest: Financie seu imóvel com a assessoria SejaBest',
  meta: [
    {
      name: 'description',
      content:
        'Financie seu imóvel com as melhores condições do mercado. Sem filas, sem gerentes, sem complexidade e com um time de especialistas totalmente pronto pra lhe ajudar.',
    },
  ],
})
</script>
