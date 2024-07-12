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
    <IndexHeroSection class="min-h-screen" />

    <BusinessPartners
      v-if="DOMLoaded"
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
    <SloganSection v-if="DOMLoaded" class="bg-white" />
    <Rebranding v-if="DOMLoaded" />
    <Mission
      v-if="DOMLoaded"
      title="Por que existimos?"
      class="py-10 px-5 bg-white" />
    <ComparisonTable
      v-if="DOMLoaded"
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
      v-if="DOMLoaded"
      class="border-b-4 border-primary md:border-0 lg:border-0 xl:border-0 z-0 bg-white" />
    <TheFooter v-if="DOMLoaded" class="block z-10" />
  </div>
</template>
<script lang="ts">
  import TopBar from '@/components/structure/topBar/index.component.vue';

  import { defineAsyncComponent, defineComponent } from 'vue';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
  export default defineComponent({
    name: 'HomePage',
    components: {
      TopBar,
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
        DOMLoaded: false,
      };
    },
    mounted() {
      this.$root.utms = useObjectToQueryString(this.$route.query);
      setTimeout(() => {
        this.DOMLoaded = true;
      }, 1000 * 1);
    },
  });
</script>
