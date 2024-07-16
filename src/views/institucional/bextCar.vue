<template>
  <div>
    <HeadVideo :showMenu="showMenu" />
    <div class="bg-bgDarkColor">
      <Section2 />
    </div>

    <BusinessPartners
      id="businessPartners"
      type="HomeEquity"
      title="Maximizamos suas chances de aprovação"
      innerText="<b> A Bext oferece acesso a produtos de 20+ instituições financeiras</b> para garantir as melhores taxas e altas chances de aprovação. Conte com nosso time de especialistas para orientação em todo o processo."
      class="py-10 md:py-24 lg:py-12 xl:py-12 px-5" />
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
      class="pb-20" />
    <Section3 class="bg-bgDarkColor" />
    <BestPlay class="bg-bgDarkColor" />
  </div>
  <TheFooter />
</template>

<script lang="ts">
  // import BestPlay from '@/components/base/sections/bestPlay/index.component.vue';
  // import BusinessPartners from '@/components/homePage/businessPartners.component.vue';
  // import ComparisonTable from '@/components/base/comparisonTable.component.vue';
  import HeadVideo from '@/components/vehicle/BextCarLP/headVideo.vue';
  // import Section2 from '@/components/vehicle/BextCarLP/section2.vue';
  // import Section3 from '@/components/vehicle/BextCarLP/section3.vue';
  // import TheFooter from '@/components/structure/theFooter.component.vue';
  import { defineAsyncComponent, defineComponent } from 'vue';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';

  export default defineComponent({
    name: 'BextCar',
    components: {
      HeadVideo,
      Section2: defineAsyncComponent(
        () => import('@/components/vehicle/BextCarLP/section2.vue'),
      ),
      Section3: defineAsyncComponent(
        () => import('@/components/vehicle/BextCarLP/section3.vue'),
      ),
      BestPlay: defineAsyncComponent(
        () => import('@/components/base/sections/bestPlay/index.component.vue'),
      ),
      TheFooter: defineAsyncComponent(
        () => import('@/components/structure/theFooter.component.vue'),
      ),
      ComparisonTable: defineAsyncComponent(
        () => import('@/components/base/comparisonTable.component.vue'),
      ),
      BusinessPartners: defineAsyncComponent(
        () => import('@/components/homePage/businessPartners.component.vue'),
      ),
    },
    props: {
      showMenu: {
        type: Boolean,
        required: false,
        default: true,
      },
    },
    mounted() {
      this.$root.utms = useObjectToQueryString(this.$route.query);
    },
  });
</script>

<style>
  .splide__arrow svg {
    fill: #1c79fa;
  }
</style>
