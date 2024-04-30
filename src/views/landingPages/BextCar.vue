<template>
  <div>
    <HeadVideo :showMenu="showMenu" />
    <div class="bg-[#343644]">
      <Section2 />
    </div>
     
    
      <BusinessPartners
        id="businessPartners"
        type="HomeEquity"
        title="Maximizamos suas chances de aprovação"
        innerText="<b> A Bext oferece acesso a produtos de 20+ instituições financeiras</b> para garantir as melhores taxas e altas chances de aprovação. Conte com nosso time de especialistas para orientação em todo o processo."
        class="py-10 md:py-24 lg:py-12 xl:py-12 px-5"
      />
      <ComparisonTable
        :props="{
          component: {
            backgroundColor: '',
            showBackGroundImage: false,
          },
          table: {
            backgroundColor: '#FFF',
            titleColor: 'PRIMARY',
          },
        }"
        class="pb-20"
      />
      <Section3 class="bg-[#343644]" />
    <BestPlay class="bg-[#343644]" />
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeadVideo from '@/components/vehicle/BextCarLP/headVideo.vue'
import Section2 from '@/components/vehicle/BextCarLP/section2.vue'
import Section3 from '@/components/vehicle/BextCarLP/section3.vue'
import Section4 from '@/components/vehicle/BextCarLP/section4.vue'
import BestPlay from '@/components/base/sections/bestPlay/index.component.vue'
import BusinessPartners from '@/components/homePage/businessPartners.component.vue'
import ComparisonTable from '@/components/base/comparisonTable.component.vue'
import { useObjectToQueryString } from '@/composables/useObjectToQueryString'

export default defineComponent({
  name: 'BextCarLP',
  props: {
    showMenu: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  components: {
    Section2,
    Section3,
    Section4,
    HeadVideo,
    BusinessPartners,
    ComparisonTable,
    BestPlay 
  },
  mounted() {
    this.$root.utms = useObjectToQueryString(this.$route.query)
  },
})
</script>

<style>
.splide__arrow svg {
  fill: #1c79fa;
}
</style>
