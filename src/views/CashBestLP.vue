<template>
  <main class="relative w-full z-0">
    <TopBar
      color="primary"
      :customMobileMenuColor="menuColor"
      class="text-primary xl:text-textPrimary "
    />
    <HeroSection
      :show-menu="showMenu"
      class="pt-48 pb-6"
    />
    <BusinessPartners
      title="Maximizamos suas chances de aprovação"
      inner-text="Com a SejaBest, você tem acesso a produtos de mais de 20 instituições financeiras, o que pode lhe garantir as <b>melhores taxas</b> e as <b> maiores chances de aprovação</b>, além de um <b> time de especialistas </b>preparado para te atender e te guiar <b>durante todo o processo.</b>"
      class="py-10 md:py-24 lg:py-12 xl:py-12 px-5 bg-[#F1F1F1]"
    />
    <ComparisonTable
      :props="{
        component: {
          backgroundColor: '#F1F1F1',
          showBackGroundImage: false,
        },
        table: {
          backgroundColor: '#FFF',
          titleColor: 'PRIMARY',
        },
      }"
      class="pb-20"
    />
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
import { useHead } from '@vueuse/head'

defineProps<{
  showMenu: boolean
}>()

useHead({
  title: 'CashBest: o Crédito com Garantia de Imóvel da SejaBest',
  meta: [
    {
      name: 'description',
      content:
        'Financie seu imóvel com as melhores condições do mercado. Sem filas, sem gerentes, sem complexidade e com um time de especialistas totalmente pronto pra lhe ajudar.',
    },
  ],
})

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
