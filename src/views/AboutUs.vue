<template>
  <main class="bg-[#EFEFEF]">
    <div class="relative z-0 flex flex-col">
      <div
        class="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-b from-[#070E37] to-[#10069F] via-[70%] via-[#0C0A70] -z-10 overflow-hidden"
      >
        <img
          src="/images/aboutUs/backgroundLines.svg"
          alt=""
          class="absolute left-[85%] opacity-30"
        />
        <img
          src="/images/aboutUs/backgroundLines.svg"
          alt=""
          class="absolute right-[85%] bottom-48 opacity-30 -scale-x-100"
        />
      </div>
      <HeroSection class="min-h-screen" />
      <OurMotivation
        class="border-b-8 border-primary shadow-[#0C0A7030] shadow-xl"
      />
    </div>
    <MissionSection
      class="py-10 px-5 border-b-8 border-primary shadow-[#0C0A7030] shadow-xl"
    />
    <AboutNumbers class="" />
    <Team class="" />
    <BestExperience class="py-10" />
    <Testimonials class="py-10" />
    <BestPlay />
    <TheFooter />
  </main>
</template>

<script lang="ts">
import AboutNumbers from '@/components/aboutUs/aboutNumbers.component.vue'
import BestExperience from '@/components/aboutUs/bestExperience.component.vue'
import HeroSection from '@/components/aboutUs/heroSection.component.vue'
import MissionSection from '@/components/homePage/missionSection.component.vue'
import OurMotivation from '@/components/aboutUs/ourMission.component.vue'
import Team from '@/components/aboutUs/ourTeam.component.vue'
import Testimonials from '@/components/aboutUs/testimonialsSection.component.vue'
import BestPlay from '@/components/homePage/bestPlay.component.vue'
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'
import TheFooter from '@/components/structure/theFooter.component.vue'

export default defineComponent({
  name: 'AboutUs',
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
  },
  data() {
    return {}
  },
  created() {
    useHead({
      title:
        'SejaBest - Financie seu imóvel com as melhores condições do mercado',
      meta: [
        {
          name: 'description',
          content:
            'A melhor fintech de Crédito do Brasil. Sem filas, Sem gerentes, Sem complexidade.',
        },
      ],
    })
  },
})
</script>
