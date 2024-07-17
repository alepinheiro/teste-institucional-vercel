<template>
  <div class="relative z-0 overflow-hidden">
    <ResponsiveImage
      imagePath="/images/Home/backgroundLines.jpg"
      class="absolute -left-40 inset-y-0 -z-10 hidden min-lg:block opacity-30"
      :imgAttrs="{
        loading: 'lazy',
        role: 'presentation',
        class: ' max-w-sm h-1/3',
      }" />
    <ResponsiveImage
      imagePath="/images/Home/backgroundLines.jpg"
      class="absolute top-96 -right-96 -z-10 min-lg:hidden block -scale-x-100"
      :imgAttrs="{
        loading: 'lazy',
        role: 'presentation',
      }" />
    <TopBar color="primary" class="text-textPrimary" />
    <HeroSection class="min-h-screen" />

    <BusinessPartners
      title="A melhor plataforma multibancos."
      type="HomeEquity"
      innerText="<strong>
          Com a Bext, você tem acesso a produtos de mais de 20 instituições
          financeiras,
        </strong>
        o que pode lhe garantir as melhores taxas e as maiores chances de
        aprovação, além de um time de especialistas preparado para te atender e
        te guiar durante todo o processo."
      class="py-10 md:py-24 lg:py-12 xl:py-12 px-5 bg-white" />
    <SloganSection class="bg-white" />
    <Rebranding />
    <Mission title="Por que existimos?" class="py-10 px-5 bg-white" />
    <ComparisonTable
      :props="{
        component: {
          backgroundColor: '#FFF',
          showBackGroundImage: false,
        },
        table: {
          backgroundColor: '#FFF',
          titleColor: 'TEXTPRIMARY',
          title: 'Por que escolher a <b>Bext?</b>',
        },
      }"
      class="py-0 md:py-14 lg:py-14 xl:py-14" />
    <BestPlay
      class="border-b-4 border-primary md:border-0 lg:border-0 xl:border-0 z-0 bg-white" />
    <TheFooter class="block z-10" />
  </div>
</template>

<script lang="ts">
  import TopBar from '@/components/structure/topBar/index.component.vue';
  import HeroSection from '@/components/homePage/heroSection.component.vue';
  import { defineAsyncComponent, defineComponent } from 'vue';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
  export default defineComponent({
    name: 'HomePage',
    components: {
      TopBar,
      HeroSection,
      Mission: defineAsyncComponent(
        () => import('@/components/aboutUs/missionSection.component.vue'),
      ),
      BestPlay: defineAsyncComponent(
        () => import('@/components/base/sections/bestPlay/index.component.vue'),
      ),
      TheFooter: defineAsyncComponent(
        () => import('@/components/structure/theFooter.component.vue'),
      ),
      Rebranding: defineAsyncComponent(
        () =>
          import('@/components/base/sections/rebranding/index.componente.vue'),
      ),
      BusinessPartners: defineAsyncComponent(
        () => import('@/components/homePage/businessPartners.component.vue'),
      ),
      ComparisonTable: defineAsyncComponent(
        () => import('@/components/base/comparisonTable.component.vue'),
      ),
      SloganSection: defineAsyncComponent(
        () => import('@/components/homePage/sloganSection.component.vue'),
      ),
    },
    data() {
      return {
        utm: 'utm_source=organico&utm_medium=home',
      };
    },
    mounted() {
      this.$root.utms = useObjectToQueryString(this.$route.query);
    },
  });
</script>
