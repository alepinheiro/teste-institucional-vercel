<template>
  <main class="flex flex-col font-Mulish">
    <HeroSection />
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HeroSection from '@/components/warren/heroSection.component.vue'
export default defineComponent({
  name: 'WarrenLandingPage',
  components: { HeroSection },
  data() {
    return {}
  },
})
</script>
