<template>
  <main class="relative overflow-hidden w-full z-0 bg-white">
    <ResponsiveImage
      imagePath="/images/Home/backgroundLines.jpg"
      :imgAttrs="{
        role: 'presentation',
        loading: 'lazy',
        class: 'hidden',
      }"
      class="absolute top-96 -right-96 -z-10 hidden md:block -scale-x-100" />

    <TopBar
      color="primary"
      :customMobileMenuColor="menuColor"
      class="text-textPrimary z-20" />

    <HeroSection :showMenu="showMenu" class="pb-14 min-md:pb-0 relative z-0" />

    <div class="bg-gradient-to-b to-white from-[#F1F1F1]">
      <BusinessPartners
        id="businessPartners"
        type="HomeEquity"
        title="Maximizamos suas chances de aprovação"
        innerText="<b> A Bext oferece acesso a produtos de 20+ instituições financeiras</b> para garantir as melhores taxas e altas chances de aprovação. Conte com nosso time de especialistas para orientação em todo o processo."
        class="py-10 md:py-24 lg:py-12 xl:py-24 px-5" />
      <ComparisonTable
        :props="{
          component: {
            backgroundColor: '',
            showBackGroundImage: false,
          },
          table: {
            backgroundColor: '#FFF',
            titleColor: 'TEXTPRIMARY',
          },
        }"
        class="pb-20" />
    </div>

    <AboutUs
      :cards="{ bgColor: 'PRIMARY' }"
      :container="{ bgColor: 'BGDARKCOLOR' }" />
    <Solutions />
    <Steps />
    <TheProduct class="bg-white" />

    <Subscribe
      :component="{ bgColor: 'SECONDARY' }"
      :form="{ showRealtyValue: true }"
      image="gaspar" />
    <BestPlay class="bg-bgDarkColor" />
    <TheFooter />
  </main>
</template>
<script lang="ts" setup>
  const AboutUs = defineAsyncComponent(
    () => import('@/components/base/aboutUs.component.vue'),
  );
  const BestPlay = defineAsyncComponent(
    () => import('@/components/base/sections/bestPlay/index.component.vue'),
  );
  const BusinessPartners = defineAsyncComponent(
    () => import('@/components/homePage/businessPartners.component.vue'),
  );
  const ComparisonTable = defineAsyncComponent(
    () => import('@/components/base/comparisonTable.component.vue'),
  );
  const Solutions = defineAsyncComponent(
    () => import('@/components/cashBext/solutionsSection.component.vue'),
  );
  const Steps = defineAsyncComponent(
    () => import('@/components/cashBext/stepsSection.component.vue'),
  );
  const Subscribe = defineAsyncComponent(
    () => import('@/components/base/subscribeSection.component.vue'),
  );
  const TheFooter = defineAsyncComponent(
    () => import('@/components/structure/theFooter.component.vue'),
  );
  const TheProduct = defineAsyncComponent(
    () => import('@/components/cashBext/theProduct.component.vue'),
  );

  // import BestPlay from '@/components/base/sections/bestPlay/index.component.vue';
  // import BusinessPartners from '@/components/homePage/businessPartners.component.vue';
  // import ComparisonTable from '@/components/base/comparisonTable.component.vue';
  import HeroSection from '@/components/cashBext/heroSection.component.vue';
  // import Solutions from '@/components/cashBext/solutionsSection.component.vue';
  // import Steps from '@/components/cashBext/stepsSection.component.vue';
  // import Subscribe from '@/components/base/subscribeSection.component.vue';
  // import TheFooter from '@/components/structure/theFooter.component.vue';
  // import TheProduct from '@/components/cashBext/theProduct.component.vue';
  import TopBar from '@/components/structure/topBar/index.component.vue';
  import {
    ref,
    onBeforeMount,
    onBeforeUnmount,
    onMounted,
    defineAsyncComponent,
  } from 'vue';
  import { getCurrentInstance } from 'vue';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
  import { useRoute } from 'vue-router';

  defineProps<{
    showMenu: boolean;
  }>();

  const app = getCurrentInstance();
  const route = useRoute();
  const utm = 'utm_source=organico&utm_medium=credito-com-garantia-de-imovel';
  const menuColor = ref(window.innerWidth > 667 ? 'black' : 'white');

  const setMenuColorOnResize = () => {
    if (window.innerWidth > 667) {
      menuColor.value = 'black';
    }
    if (window.innerWidth <= 667) {
      menuColor.value = 'white';
    }
  };

  onMounted(() => {
    if (app) {
      app.root.data.utms = useObjectToQueryString(route.query);
    }
  });

  onBeforeMount(() => {
    window.addEventListener('resize', setMenuColorOnResize);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('resize', setMenuColorOnResize);
  });
</script>
