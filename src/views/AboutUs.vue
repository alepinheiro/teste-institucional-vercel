<template>
  <main class="">
    <div class="h-[200vh] relative z-0 flex">
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
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'
import HeroSection from '@/components/aboutUs/heroSection.component.vue'

export default defineComponent({
  name: 'AboutUs',
  components: { HeroSection },
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
