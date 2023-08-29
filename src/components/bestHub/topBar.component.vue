<template>
  <section class="bg-black fixed top-0 w-full">
    <div
      class="max-w-7xl lg:max-w-5xl mx-auto w-full relative h-20 sm:flex md:flex sm:flex-row md:flex-row sm:justify-between md:justify-between sm:px-5 md:px-5"
    >
      <div class="h-full flex items-center">

        <a :href="$options.information.appBestHub" target="_blank" class="w-fit mx-auto">
          <img
            src="/images/bestHub/logoBestHub.svg"
            class="h-10 w-full"
            alt="BestHub"
          />
        </a>
      </div>
      <div class="absolute sm:static md:static top-0 right-0 h-full">
        <div class="h-full flex flex-row items-center gap-4">
          <a
          :href="$options.information.appBestHub" target="_blank"
            class="text-white/60 underline-offset-4 underline hover:text-white transition-all"
          >
            Entrar
          </a>
          <a
          :href="$options.information.appBestHubPreRegister" target="_blank"
            class="text-black px-6 py-2 rounded-xl font-hover transition-all bg-[#D0FE42] sm:hidden font-sans hover:-translate-y-1"
          >
            Quero ser Pro
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TopBar',
  data() {
    return {}
  },
})
</script>
