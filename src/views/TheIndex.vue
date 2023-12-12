<template>
  <main class="bg-[#EFEFEF]">
    <HeroSection />
    <Products />
    <BusinessPartners />
    <SloganSection />
    <AboutUs />
    <Mission />
    <ComparisonTable
      :props="{
        component: {
          backgroundColor: '#EFEFEF',
          showBackGroundImage: false,
        },
        table: {
          backgroundColor: '#EFEFEF',
          titleColor: 'TEXTPRIMARY',
          title: 'Por que escolher a <b>SejaBest?</b>',
        },
      }"
      class="py-0"
    />
    <BestPlay />
  </main>
  <TheFooter />
</template>
<script lang="ts">
import AboutUs from '@/components/homePage/aboutUs.component.vue'
import BestPlay from '@/components/homePage/bestPlay.component.vue'
import BusinessPartners from '@/components/homePage/businessPartners.component.vue'
import ComparisonTable from '@/components/base/comparisonTable.component.vue'
import HeroSection from '@/components/homePage/heroSection.component.vue'
import Mission from '@/components/homePage/missionSection.component.vue'
import Products from '@/components/homePage/productsSection.component.vue'
import SloganSection from '@/components/homePage/sloganSection.component.vue'
import TheFooter from '@/components/structure/theFooter.component.vue'
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  name: 'TheIndex',
  components: {
    HeroSection,
    Products,
    BusinessPartners,
    SloganSection,
    AboutUs,
    Mission,
    ComparisonTable,
    BestPlay,
    TheFooter,
  },
  data() {
    return {}
  },
  created() {
    useHead({
      title:
        'SejaBest - Financie seu imóvel com as melhores condições do mercado',
      meta: [
        {
          name: 'description',
          content:
            'A melhor fintech de Crédito do Brasil. Sem filas, Sem gerentes, Sem complexidade.',
        },
      ],
    })
  },
})
</script>
