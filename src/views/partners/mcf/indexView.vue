<template>
  <main class="flex flex-col items-stretch justify-between">
    <HeroSection class="bg-zinc-100" />
    <Products class="py-10 bg-zinc-100" />
    <BusinessPartners class="py-10 px-5" />
    <ComparisonTable class="py-10" />
    <CreditSteps class="bg-zinc-200 py-20 px-5"/>
    <ContactSection />
    <FooterSection />
  </main>
</template>
<script lang="ts">
import BusinessPartners from '@/components/mcf/businessPartners.component.vue'
import ComparisonTable from '@/components/mcf/comparisonTable.component.vue'
import ContactSection from '@/components/mcf/contactSection.component.vue'
import CreditSteps from '@/components/mcf/creditSteps.component.vue'
import HeroSection from '@/components/mcf/heroSection.component.vue';
import Products from '@/components/mcf/productsSection.component.vue';
import FooterSection from '@/components/mcf/footerSection.component.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexView',
  components: {
    BusinessPartners,
    ComparisonTable,
    ContactSection,
    CreditSteps,
    FooterSection,
    HeroSection,
    Products,
  },
  data() {
    return {}
  },
})
</script>
