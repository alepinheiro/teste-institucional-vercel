<template>
  <main class="flex flex-col font-Mulish bg-[#FAF8F8]">
    <Hero />
    <Products />
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/warren/heroSection.component.vue'
import Products from '@/components/warren/productsSection.component.vue'
export default defineComponent({
  name: 'WarrenLandingPage',
  components: { Hero, Products },
  data() {
    return {}
  },
})
</script>