<template>
  <main class="bg-[#EFEFEF]">
    <TopBar
      customMobileMenuColor="black"
      color="primary"
      class="text-textPrimary" />
    <HeroSection
      :backgroundVideos="{
        desktop: 'eYtBl05z-YM',
        mobile: 'Tp-ZcMvXBiE',
      }"
      :showMenu="showMenu"
      class="h-screen" />
    <div class="relative z-0 overflow-hidden">
      <div class="absolute inset-0 -z-10 hidden min-md:flex">
        <img
          src="/images/aboutUs/backgroundLines.png"
          class="w-full object-cover mt-auto" />
      </div>
    </div>
    <OurMotivation
      id="ourMotivation"
      class="pt-20 pb-10 flex flex-col gap-8 lg:gap-12" />
    <MissionSection
      class="py-10 px-5 border-y-8 border-primary"
      description="Nós nascemos com o propósito de transformar o acesso ao crédito para quem busca sua melhor versão e fazemos isto através de três pilares:" />
    <NewBrand />
    <Team class="py-10" />
    <BextExperience class="py-10 xl:pb-28" />
    <Testimonials class="py-10" />
    <Editorial class="max-w-7xl mx-auto hidden xl:block" />
    <BestPlay />
    <TheFooter />
  </main>
</template>

<script lang="ts">
  import BextExperience from '@/components/aboutUs/bextExperience.component.vue';
  import BestPlay from '@/components/base/sections/bestPlay/index.component.vue';
  import Editorial from '@/components/aboutUs/bestEditorial.component.vue';
  import HeroSection from '@/components/aboutUs/heroSection.component.vue';
  import MissionSection from '@/components/aboutUs/missionSection.component.vue';
  import NewBrand from '@/components/aboutUs/newBrand.section.vue';
  import OurMotivation from '@/components/aboutUs/ourMission.component.vue';
  import Team from '@/components/aboutUs/ourTeam.component.vue';
  import Testimonials from '@/components/aboutUs/testimonialsSection.component.vue';
  import TheFooter from '@/components/structure/theFooter.component.vue';
  import TopBar from '@/components/structure/topBar/index.component.vue';
  import { defineComponent } from 'vue';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';

  export default defineComponent({
    name: 'AboutUs',
    components: {
      BextExperience,
      BestPlay,
      Editorial,
      HeroSection,
      MissionSection,
      NewBrand,
      OurMotivation,
      Team,
      Testimonials,
      TheFooter,
      TopBar,
    },
    props: {
      showMenu: {
        type: Boolean,
        required: false,
        default: true,
      },
    },
    data() {
      return {};
    },
    mounted() {
      this.$root.utms = useObjectToQueryString(this.$route.query);
    },
  });
</script>
