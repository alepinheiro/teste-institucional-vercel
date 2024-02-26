<template>
  <main class="relative">
    <div
      class="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-white min-lg:block hidden"
    ></div>
    <TopBar
      :customMobileMenuColor="menuColor"
      color="primary"
      class="text-primary"
    />
    <HeroSection />
    <BusinessPartners
      type="Financing"
      id="businessPartners"
      title="Na SejaBest, suas chances de aprovação são maiores"
      inner-text="<b> A SejaBest oferece acesso a produtos de 20+ instituições financeiras</b> para garantir as melhores taxas e altas chances de aprovação."
      class="py-10 md:py-24 lg:py-12 xl:py-12 px-5"
    />
    <ComparisonTable
      :props="{
        component: {
          backgroundColor: '#FFF',
          showBackGroundImage: true,
        },
        table: {
          backgroundColor: '#EFEFEF',
          titleColor: 'TEXTPRIMARY',
        },
      }"
      class="py-10"
    />
    <VideoSection :youtube-video-id="'Mlg8eDX61uE'" class="lg:pt-20 xl:pt-20" />
    <StepsSection />

    <AboutUs
      :cards="{ bgColor: 'PRIMARY' }"
      :container="{ bgColor: 'SECONDARY' }"
    />
    <Subscribe
      :component="{ bgColor: 'BGDARKCOLOR' }"
      :form="{ showRealtyValue: false }"
      image="gaspar"
    />
    <BestPlay class="bg-bgDarkColor" />
    <TheFooter />
  </main>
</template>

<script setup lang="ts">
import AboutUs from '@/components/base/aboutUs.component.vue'
import BestPlay from '@/components/base/sections/bestPlay/index.component.vue'
import BusinessPartners from '@/components/homePage/businessPartners.component.vue'
import ComparisonTable from '@/components/base/comparisonTable.component.vue'
import HeroSection from '@/components/finanBestLp/heroSection.component.vue'
import StepsSection from '@/components/finanBestLp/stepsSection.component.vue'
import Subscribe from '@/components/base/subscribeSection.component.vue'
import TheFooter from '@/components/structure/theFooter.component.vue'
import TopBar from '@/components/structure/topBar/index.component.vue'
import VideoSection from '@/components/finanBestLp/videoSection.component.vue'
import { ref, onBeforeMount, onBeforeUnmount } from 'vue'

defineProps<{
  showMenu: boolean
}>()

const menuColor = ref(
  window.innerWidth > 667 ? 'black' : 'var(--textPrimaryColor)',
)
const setMenuColorOnResize = () => {
  if (window.innerWidth > 667) {
    menuColor.value = 'black'
  }
  if (window.innerWidth <= 667) {
    menuColor.value = 'var(--textPrimaryColor)'
  }
}

onBeforeMount(() => {
  window.addEventListener('resize', setMenuColorOnResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', setMenuColorOnResize)
})
</script>
