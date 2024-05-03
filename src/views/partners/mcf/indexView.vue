<template>
  <main class="flex flex-col items-stretch justify-between">
    <HeroSection class="bg-zinc-100" @click="onClick('HeroSection')" />
    <Products class="py-10 bg-zinc-100" @click="onClick('Carrousel')" />
    <BusinessPartners class="py-10 px-5"  />
    <ComparisonTable class="py-10" @click="onClick('Table')" />
    <CreditSteps class="bg-zinc-200 py-20 px-5"/>
    <ContactSection @click="onClick('Partnership')" />
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
import { useObjectToQueryString } from '@/composables/useObjectToQueryString';

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
    return {
      pixelId: '386064430923138',
    }
  },
  mounted(){
    this.$root.utms = useObjectToQueryString(this.$route.query)
    window.fbq('init', this.pixelId)
    window.fbq('trackSingle', this.pixelId, 'PageView')
    this.loadGoogleTagManager()
  },
  methods: {
    onClick(sectionName: string){
      window.fbq('trackSingle', this.pixelId, 'ViewContent', {
        content_ids: [sectionName]
      })
    },
    loadGoogleTagManager() {
      let script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-318006787';
      
      document.head.appendChild(script);
      
      window.dataLayer = window.dataLayer || [];
      function gtag(p0?: string, p1?: Date| string){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-318006787');
    }
  }
})
</script>
