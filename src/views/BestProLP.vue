<template>
  <main class="text-white">
    <FooterSection />
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import FooterSection from '@/components/bestPro/footerSection.component.vue'
export default defineComponent({
  name: 'BestProLP',
  components: { FooterSection },
  data() {
    return {}
  }
})
</script>
<style lang="scss"></style>
