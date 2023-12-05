<template>
  <main class="flex flex-col font-Mulish bg-warren-hintOfRed">
    <Hero />
    <Products />
    <BusinessPartners />
    <ComparisonTable />
    <CreditSteps />
    <Contact />
    <TheFooter />
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/warren/heroSection.component.vue'
import Products from '@/components/warren/productsSection.component.vue'
import BusinessPartners from '@/components/warren/businessPartners.component.vue'
import ComparisonTable from '@/components/warren/comparisonTable.component.vue'
import CreditSteps from '@/components/warren/creditSteps.component.vue'
import Contact from '@/components/warren/contactSection.component.vue'
import TheFooter from '@/components/warren/theFooter.component.vue'

export default defineComponent({
  name: 'WarrenLandingPage',
  components: {
    Hero,
    Products,
    BusinessPartners,
    ComparisonTable,
    CreditSteps,
    Contact,
    TheFooter,
  },
  data() {
    return {}
  },
})
</script>
