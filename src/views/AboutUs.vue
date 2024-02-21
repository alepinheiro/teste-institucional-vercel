<template>
  <main class="bg-[#EFEFEF]">
    <TopBar
      customMobileMenuColor="white"
      color="primary"
      class="text-white"
    />
    <HeroSection :background-videos="{
        desktop: 'eYtBl05z-YM',
        mobile: 'Tp-ZcMvXBiE',
      }" :show-menu="showMenu" class="sm:h-[70vh] h-screen" />
    <OurMotivation
      class="pt-20 pb-10 flex flex-col gap-8 lg:gap-12 "
    />
    <MissionSection class="py-10 px-5 border-y-1 border-primary" />
    <AboutNumbers class="py-12 md:py-16 xl:py-28" />
    <Team class="py-10" />
    <BestExperience class="py-10 xl:pb-28" />
    <Testimonials class="py-10" />
    <Editorial class="max-w-7xl mx-auto hidden xl:block" />
    <BestPlay class="bg-[#181818]" />
    <TheFooter />
  </main>
</template>

<script lang="ts">
import AboutNumbers from '@/components/aboutUs/aboutNumbers.component.vue'
import BestExperience from '@/components/aboutUs/bestExperience.component.vue'
import BestPlay from '@/components/base/sections/bestPlay.component.vue'
import Editorial from '@/components/aboutUs/bestEditorial.component.vue'
import HeroSection from '@/components/aboutUs/heroSection.component.vue'
import MissionSection from '@/components/aboutUs/missionSection.component.vue'
import OurMotivation from '@/components/aboutUs/ourMission.component.vue'
import Team from '@/components/aboutUs/ourTeam.component.vue'
import Testimonials from '@/components/aboutUs/testimonialsSection.component.vue'
import TheFooter from '@/components/structure/theFooter.component.vue'
import TopBar from '@/components/structure/topBar/index.component.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutUs',
  props: {
    showMenu: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  components: {
    HeroSection,
    OurMotivation,
    MissionSection,
    AboutNumbers,
    Team,
    BestExperience,
    Testimonials,
    BestPlay,
    TheFooter,
    Editorial,
    TopBar,
  },
  data() {
    return {
    }
  },
})
</script>
