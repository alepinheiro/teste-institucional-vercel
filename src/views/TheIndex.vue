<template>
  <main>
    <HeroSection />
    <Products />
    <BusinessPartners />
    <SloganSection />
    <AboutUs />
    <Mission />
    <ComparisonTable
      :props="{
        component: {
          backgroundColor: '#FFF',
          showBackGroundImage: false,
        },
        table: {
          backgroundColor: '#FFF',
          titleColor: 'TEXTPRIMARY',
          title: 'Por que escolher a <b>SejaBest?</b>'
        },
      }"
    />
    <BestPlay />
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HeroSection from '@/components/homePage/heroSection.component.vue'
import Products from '@/components/homePage/productsSection.component.vue'
import BusinessPartners from '@/components/homePage/businessPartners.component.vue'
import SloganSection from '@/components/homePage/sloganSection.component.vue'
import AboutUs from '@/components/homePage/aboutUs.component.vue'
import Mission from '@/components/homePage/missionSection.component.vue'
import ComparisonTable from '@/components/base/comparisonTable.component.vue'
import BestPlay from '@/components/homePage/bestPlay.component.vue'

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
  },
  data() {
    return {}
  },
})
</script>
