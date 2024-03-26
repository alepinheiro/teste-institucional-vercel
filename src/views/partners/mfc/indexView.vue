<template>
  <main class="flex flex-col items-stretch justify-between">
    <HeroSection />
    <section >Products</section>
    <section >Partners</section>
    <section >ComparisonTable</section>
    <section >Steps</section>
    <section >Contact</section>
    <section >Footer</section>
  </main>
</template>
<script lang="ts">
import HeroSection from '@/components/mfc/heroSection.component.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexView',
  components: {
    HeroSection,
  },
  data() {
    return {}
  },
})
</script>
