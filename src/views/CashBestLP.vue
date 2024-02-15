<template>
  <main class="relative w-full z-0 bg-[#F1F1F1]">
    <img
      src="/images/Home/backgroundLines.png"
      class="absolute -top-40 -left-96 -z-10 hidden min-md:block"
      alt=""
    />
    <img
      src="/images/Home/backgroundLines.png"
      class="absolute top-96 -right-96 -z-10 hidden min-md:block -scale-x-100"
      alt=""
    />
    <TopBar
      color="primary"
      :customMobileMenuColor="menuColor"
      class="text-primary xl:text-textPrimary"
    />

    <HeroSection :show-menu="showMenu" class="min-lg:pt-28 pb-14" />

    <div class="bg-gradient-to-b to-white from-[#F1F1F1]">
      <BusinessPartners
        title="Maximizamos suas chances de aprovação"
        inner-text="Com a SejaBest, você tem acesso a produtos de mais de 20 instituições financeiras, o que pode lhe garantir as <b>melhores taxas</b> e as <b> maiores chances de aprovação</b>, além de um <b> time de especialistas </b>preparado para te atender e te guiar <b>durante todo o processo.</b>"
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
    <TheProduct />

    <Subscribe
      :component="{ bgColor: 'SECONDARY' }"
      :form="{ showRealtyValue: true }"
    />
    <TheFooter />
  </main>
</template>
<script lang="ts" setup>
import AboutUs from '@/components/base/aboutUs.component.vue'
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
