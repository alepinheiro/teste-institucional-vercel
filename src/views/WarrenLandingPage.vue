<template>
  <main class="flex flex-col font-Mulish bg-warren-hintOfRed">
    <Hero class="overflow-hidden" />
    <Products class="pb-10 bg-warren-hintOfRed" />
    <BusinessPartners class="px-5 pt-18 bg-white" />
    <ComparisonTable class="pt-10 md:py-20 pb-0 bg-white" />
    <CreditSteps class="bg-warren-whisper py-11 md:pt-18 md:pb-26 px-5" />
    <Contact class="bg-warren-terracota" />
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
