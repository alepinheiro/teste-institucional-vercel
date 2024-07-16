<template>
  <main class="bg-[#EFEFEF] relative z-0">
    <TopBar
      color="primary"
      class="text-textPrimary"
      customMobileMenuColor="black" />
    <HeroSection
      :backgroundVideos="{
        mobile: 'Tp-ZcMvXBiE',
        desktop: 'eYtBl05z-YM',
      }"
      :showMenu="showMenu"
      class="h-screen sm:h-full" />
    <div class="relative z-10 overflow-hidden">
      <div class="absolute inset-0 z-0 hidden min-md:flex">
        <img
          loading="lazy"
          role="presentation"
          class="w-full object-cover mt-auto"
          src="/images/aboutUs/backgroundLines.png" />
      </div>
      <OurMotivation
        id="ourMotivation"
        class="pt-0 pb-10 flex flex-col gap-8 lg:gap-12 lg:mt-36 xl:mt-36 md:mt-48" />
    </div>
    <MissionSection
      class="py-10 px-5 border-y-8 border-primary"
      description="Nós nascemos com o propósito de transformar o acesso ao crédito para quem busca sua melhor versão e fazemos isto através de três pilares:" />
    <Rebranding />
    <Team class="py-10" />
    <BextExperience class="py-10 xl:pb-28" />
    <Testimonials class="py-10" />
    <Editorial class="max-w-7xl mx-auto hidden xl:block" />
    <BestPlay />
    <TheFooter />
  </main>
</template>

<script lang="ts">
  import HeroSection from '@/components/aboutUs/heroSection.component.vue';
  import TopBar from '@/components/structure/topBar/index.component.vue';
  import { defineAsyncComponent, defineComponent } from 'vue';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';

  export default defineComponent({
    name: 'AboutUs',
    components: {
      TopBar,
      HeroSection,
      Team: defineAsyncComponent(
        () => import('@/components/aboutUs/ourTeam.component.vue'),
      ),
      OurMotivation: defineAsyncComponent(
        () => import('@/components/aboutUs/ourMission.component.vue'),
      ),
      TheFooter: defineAsyncComponent(
        () => import('@/components/structure/theFooter.component.vue'),
      ),
      Editorial: defineAsyncComponent(
        () => import('@/components/aboutUs/bestEditorial.component.vue'),
      ),
      MissionSection: defineAsyncComponent(
        () => import('@/components/aboutUs/missionSection.component.vue'),
      ),
      BextExperience: defineAsyncComponent(
        () => import('@/components/aboutUs/bextExperience.component.vue'),
      ),
      Rebranding: defineAsyncComponent(
        () =>
          import('@/components/base/sections/rebranding/index.componente.vue'),
      ),
      Testimonials: defineAsyncComponent(
        () => import('@/components/aboutUs/testimonialsSection.component.vue'),
      ),
      BestPlay: defineAsyncComponent(
        () => import('@/components/base/sections/bestPlay/index.component.vue'),
      ),
    },
    props: {
      showMenu: {
        type: Boolean,
        required: false,
        default: true,
      },
    },
    data() {
      return {
        utm: 'utm_source=organico&utm_medium=sobre',
      };
    },
    mounted() {
      this.$root.utms = useObjectToQueryString(this.$route.query);
    },
  });
</script>
