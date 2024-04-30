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
      class="text-primary xl:text-textPrimary z-20"
    />

    <HeroSection :showMenu="showMenu" class="pb-14 min-md:pb-0 relative z-0" />

    <div class="bg-gradient-to-b to-white from-[#F1F1F1]">
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
import BestPlay from '@/components/base/sections/bestPlay/index.component.vue'
import BusinessPartners from '@/components/homePage/businessPartners.component.vue'
import ComparisonTable from '@/components/base/comparisonTable.component.vue'
import HeroSection from '@/components/cashBestLpEmprestimo/heroSection.component.vue'
import Solutions from '@/components/cashBestLpEmprestimo/solutionsSection.component.vue'
import Steps from '@/components/cashBestLpEmprestimo/stepsSection.component.vue'
import Subscribe from '@/components/base/subscribeSection.component.vue'
import TheFooter from '@/components/structure/theFooter.component.vue'
import TheProduct from '@/components/cashBestLpEmprestimo/theProduct.component.vue'
import TopBar from '@/components/structure/topBar/index.component.vue'
import {
  ref,
  onBeforeMount,
  onBeforeUnmount,
  getCurrentInstance,
  onMounted,
} from 'vue'
import { useRoute } from 'vue-router'
import { useObjectToQueryString } from '@/composables/useObjectToQueryString'

defineProps<{
  showMenu: boolean
}>()

const app = getCurrentInstance()
const route = useRoute()

const menuColor = ref(window.innerWidth > 667 ? 'black' : 'white')

const setMenuColorOnResize = () => {
  if (window.innerWidth > 667) {
    menuColor.value = 'black'
  }
  if (window.innerWidth <= 667) {
    menuColor.value = 'white'
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
