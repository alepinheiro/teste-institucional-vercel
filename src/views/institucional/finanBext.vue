<template>
  <main class="relative">
    <div
      class="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-white min-lg:block hidden"
    ></div>
    <TopBar
      :customMobileMenuColor="menuColor"
      color="primary"
      class="text-textPrimary"
    />
    <HeroSection class="sm:mb-12" />
    <BusinessPartners
      id="businessPartners"
      type="Financing"
      title="Na Bext, suas chances de aprovação são maiores"
      innerText="<b> A Bext oferece acesso a produtos de 20+ instituições financeiras</b> para garantir as melhores taxas e altas chances de aprovação."
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
    <VideoSection :youtubeVideoId="'Mlg8eDX61uE'" class="" />
    <StepsSection class="-mt-12 lg:-mt-24 lg:pb-24 xl:pb-36 sm:pt-12 md:pt-12" />

    <AboutUs
      :cards="{ bgColor: 'PRIMARY' }"
      :container="{ bgColor: 'BGDARKCOLOR' }"
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
import HeroSection from '@/components/finanBextLp/heroSection.component.vue'
import StepsSection from '@/components/finanBextLp/stepsSection.component.vue'
import Subscribe from '@/components/base/subscribeSection.component.vue'
import TheFooter from '@/components/structure/theFooter.component.vue'
import TopBar from '@/components/structure/topBar/index.component.vue'
import VideoSection from '@/components/finanBextLp/videoSection.component.vue'
import {
  ref,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  getCurrentInstance,
} from 'vue'
import { useObjectToQueryString } from '@/composables/useObjectToQueryString'
import { useRoute } from 'vue-router'

defineProps<{
  showMenu: boolean
}>()

const app = getCurrentInstance()
const route = useRoute()

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

onMounted(() => {
  if (app) {
    app.root.data.utms = useObjectToQueryString(route.query)
  }
})
onBeforeMount(() => {
  window.addEventListener('resize', setMenuColorOnResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', setMenuColorOnResize)
})
</script>
