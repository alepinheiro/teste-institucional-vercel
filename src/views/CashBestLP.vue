<template>
  <main class="relative overflow-hidden w-full z-0 bg-white">
    <img
      src="/images/Home/backgroundLines.png"
      class="absolute -top-40 -left-96 -z-10 hidden min-md:block"
      alt=""
    />
    <img
      src="/images/Home/backgroundLines.png"
      class="absolute top-96 -right-96 -z-10 hidden md:block -scale-x-100"
      alt=""
    />

    <TopBar
      color="primary"
      :customMobileMenuColor="menuColor"
      class="text-primary xl:text-textPrimary"
    />

    <HeroSection :show-menu="showMenu" class="pb-14 min-md:pb-0" />

    <div class="bg-gradient-to-b to-white from-[#F1F1F1]">
      <BusinessPartners
        title="Maximizamos suas chances de aprovação"
        inner-text="<b> A SejaBest oferece acesso a produtos de 20+ instituições financeiras</b> para garantir as melhores taxas e altas chances de aprovação. Conte com nosso time de especialistas para orientação em todo o processo."
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
    </div>

    <AboutUs
      :cards="{ bgColor: 'SECONDARY' }"
      :container="{ bgColor: 'BGDARKCOLOR' }"
    />
    <Solutions />
    <Steps />
    <TheProduct class="bg-white" />

    <Subscribe
      :component="{ bgColor: 'SECONDARY' }"
      :form="{ showRealtyValue: true }"
      image="gabrielle"
    />
    <BestPlay class="bg-secondary" />
    <TheFooter />
  </main>
</template>
<script lang="ts" setup>
import AboutUs from '@/components/base/aboutUs.component.vue'
import BestPlay from '@/components/base/sections/bestPlay.component.vue'
import BusinessPartners from '@/components/homePage/businessPartners.component.vue'
import ComparisonTable from '@/components/base/comparisonTable.component.vue'
import HeroSection from '@/components/cashBest/heroSection.component.vue'
import Solutions from '@/components/cashBest/solutionsSection.component.vue'
import Steps from '@/components/cashBest/stepsSection.component.vue'
import Subscribe from '@/components/base/subscribeSection.component.vue'
import TheFooter from '@/components/structure/theFooter.component.vue'
import TheProduct from '@/components/cashBest/theProduct.component.vue'
import TopBar from '@/components/structure/topBar/index.component.vue'
import { ref, onBeforeMount, onBeforeUnmount } from 'vue'

defineProps<{
  showMenu: boolean
}>()

const menuColor = ref(window.innerWidth > 667 ? 'black' : 'white')

const setMenuColorOnResize = () => {
  if (window.innerWidth > 667) {
    menuColor.value = 'black'
  }
  if (window.innerWidth <= 667) {
    menuColor.value = 'white'
  }
}

onBeforeMount(() => {
  window.addEventListener('resize', setMenuColorOnResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', setMenuColorOnResize)
})
</script>
