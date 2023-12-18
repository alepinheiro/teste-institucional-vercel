<template>
  <main class="bg-[#EFEFEF] overflow-hidden">
    <HeroSection class="bg-bgDarkColor pb-12 h-[70vh]" />
    <Products class="bg-bgDarkColor md:py-10" />
    <BusinessPartners
      title="A melhor plataforma multibancos."
      inner-text="<strong>
          Com a SejaBest, você tem acesso a produtos de mais de 20 instituições
          financeiras,
        </strong>
        o que pode lhe garantir as melhores taxas e as maiores chances de
        aprovação, além de um time de especialistas preparado para te atender e
        te guiar durante todo o processo."
      class="py-10 md:py-24 lg:py-12 xl:py-12 px-5"
    />
    <SloganSection />
    <AboutUs
      class="md:px-5 lg:px-5 bg-[#DEDEDE] md:bg-[#EFEFEF] lg:bg-[#EFEFEF] xl:bg-[#EFEFEF] md:mt-10 lg:mt-12 xl:mt-12 border-t-2 border-primary md:border-none lg:border-none xl:border-none"
    />
    <Mission class="py-10 px-5" />
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
      class="py-0 md:py-14 lg:py-14 xl:py-14"
    />
    <BestPlay
      class="bg-[#181818]"
    />
  </main>
  <TheFooter />
</template>
<script lang="ts">
import AboutUs from '@/components/homePage/aboutUs.component.vue'
import BestPlay from '@/components/homePage/bestPlay.component.vue'
import BusinessPartners from '@/components/homePage/businessPartners.component.vue'
import ComparisonTable from '@/components/base/comparisonTable.component.vue'
import HeroSection from '@/components/homePage/heroSection.component.vue'
import Mission from '@/components/aboutUs/missionSection.component.vue'
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
