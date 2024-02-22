<template>
  <section>
    <Desktop :title="title" class="min-md:flex flex-col relative z-0 h-screen bg-[#181818] bg-gradient-to-br to-black from-transparent overflow-hidden hidden" />
    <Mobile :title="title" class="flex flex-col relative z-0 h-screen min-md:hidden" />
  </section>
</template>

<script lang="ts" setup>
import Desktop from '@/components/base/sections/bestPlay/desktop.component.vue'
import Mobile from '@/components/base/sections/bestPlay/mobile.component.vue'

const title = "Conheça o melhor canal de crédito do Brasil"

</script>
