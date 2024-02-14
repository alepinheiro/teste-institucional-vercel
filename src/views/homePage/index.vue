<template>
  <div class="relative z-0 bg-[#EFEFEF]">
    <img
      src="/images/Home/backgroundLines.png"
      class="absolute -left-40 -top-40 md:-left-[40%] lg:-left-[40%] -z-10 hidden md:block lg:block xl:block"
      alt=""
    />
    <TopBar color="primary" class="text-primary" />
    <HeroSection class="pt-20 min-md:pt-24" />
    <Products class="pt-10 lg:pt-20" />
    <BusinessPartners
      title="A melhor plataforma multibancos."
      inner-text="<strong>
          Com a SejaBest, você tem acesso a produtos de mais de 20 instituições
          financeiras,
        </strong>
        o que pode lhe garantir as melhores taxas e as maiores chances de
        aprovação, além de um time de especialistas preparado para te atender e
        te guiar durante todo o processo."
      class="py-10 md:py-24 lg:py-12 xl:py-12 px-5 max-h-screen"
    />
    <SloganSection />
    <AboutUs
      class="md:px-5 lg:px-5 md:mt-10 lg:mt-12 xl:mt-12 border-t-2 border-primary md:border-none lg:border-none xl:border-none"
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
      class="bg-[#181818] bg-gradient-to-br to-black from-transparent border-b-4 border-primary md:border-0 lg:border-0 xl:border-0 z-0"
    />
    <TheFooter class="block z-10" />
  </div>
</template>
<script lang="ts">
import TopBar from '@/components/structure/topBar/index.component.vue'
import HeroSection from '@/components/homePage/heroSection.component.vue'
import Products from '@/components/homePage/productsSection.component.vue'
import AboutUs from '@/components/homePage/aboutUs.component.vue'
import BestPlay from '@/components/homePage/bestPlay.component.vue'
import BusinessPartners from '@/components/homePage/businessPartners.component.vue'
import ComparisonTable from '@/components/base/comparisonTable.component.vue'
import Mission from '@/components/aboutUs/missionSection.component.vue'
import SloganSection from '@/components/homePage/sloganSection.component.vue'
import TheFooter from '@/components/structure/theFooter.component.vue'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomePage',
  components: {
    TopBar,
    HeroSection,
    Products,
    AboutUs,
    BestPlay,
    BusinessPartners,
    ComparisonTable,
    Mission,
    SloganSection,
    TheFooter,
  },
  data() {
    return {}
  },
})
</script>
