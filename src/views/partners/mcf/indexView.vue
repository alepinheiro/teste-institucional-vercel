<template>
  <main class="flex flex-col items-stretch justify-between">
    <HeroSection />
    <Products class="py-10" />
    <section >Partners</section>
    <section >ComparisonTable</section>
    <section >Steps</section>
    <section >Contact</section>
    <section >Footer</section>
  </main>
</template>
<script lang="ts">
import HeroSection from '@/components/mcf/heroSection.component.vue';
import Products from '@/components/mcf/productsSection.component.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexView',
  components: {
    HeroSection,
    Products,
  },
  data() {
    return {}
  },
})
</script>
