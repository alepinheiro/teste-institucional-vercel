<template>
  <main class="flex flex-col font-Mulish bg-warren-hintOfRed">
    <Hero class="overflow-hidden w-full" />
    <Products class="pb-10 lg:pb-28 bg-warren-hintOfRed" />
    <BusinessPartners class="px-5 md:px-0 lg:px-0 xl:px-0 pt-18 lg:pt-26 xl:pt-26 bg-white" />
    <ComparisonTable class="bg-white pt-10 md:py-20 lg:pt-24 xl:pt-24 pb-0 lg:pb-9 xl:pb-20" />
    <CreditSteps
      class="bg-warren-whisper py-11 md:pt-18 md:pb-26 lg:pt-14 xl:pt-28 lg:pb-28 xl:pb-28 px-5 md:px-0 lg:px-0 xl:px-0"
    />
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
