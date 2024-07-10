<template>
  <div class="relative z-0 overflow-hidden bg-[#efefef]">
    <img
      src="/images/Home/backgroundLines.jpg"
      class="absolute -top-40 -left-96 -z-10 hidden min-md:block"
      alt="" />
    <img
      src="/images/Home/backgroundLines.jpg"
      class="absolute top-96 -right-96 -z-10 hidden md:block -scale-x-100"
      alt="" />
    <TopBar color="primary" class="text-textPrimary" />
    <IndexHeroSection />

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

  const Rebranding = defineAsyncComponent(
    () => import('@/components/base/sections/rebranding/index.componente.vue'),
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
  const Mission = defineAsyncComponent(
    () => import('@/components/aboutUs/missionSection.component.vue'),
  );
  const SloganSection = defineAsyncComponent(
    () => import('@/components/homePage/sloganSection.component.vue'),
  );
  const TheFooter = defineAsyncComponent(
    () => import('@/components/structure/theFooter.component.vue'),
  );

  import { defineAsyncComponent, defineComponent } from 'vue';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
  export default defineComponent({
    name: 'HomePage',
    components: {
      TopBar,
      Mission,
      BestPlay,
      TheFooter,
      Rebranding,
      BusinessPartners,
      ComparisonTable,
      SloganSection,
      // AboutUs,
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
