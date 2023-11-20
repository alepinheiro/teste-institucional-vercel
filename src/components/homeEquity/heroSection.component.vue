<template>
  <section class="bg-bgDarkColor w-full flex pt-10 relative min-h-screen sm:pt-0">
    <div class="absolute inset-x-0 h-fit top-0 flex justify-center z-20">
      <Topbar class="w-full max-w-7xl lg:max-w-5xl px-5 mb-auto pt-4" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import Topbar from '@/components/structure/topbar.component.vue'
import { defineComponent } from 'vue';
</script>

<script lang="ts">
export default defineComponent({
    metaInfo() {

    },
})
</script>
