<template>
  <section>
    <div class="w-full bg-bgLightColor py-20 xl:py-36 ">
      <div class="maxWidth  flex flex-wrap ">
        <div class="w-5/12 sm:w-full md:w-full sm:text-center md:text-center pb-5">
          <h3 class="font-bold text-2xl ">Uma nova marca. Pela mesma causa, com a mesma cultura e somando muito
            mais possibilidades.</h3>
          <p class="pt-5 pb-8">
            Seguimos com a cultura e propósito da SejaBest, mas inserimos o X como fator potencial: Mais tecnologia,
            mais negócios, mais possibilidades.
          </p>
          <a :href="$options.information.linkRebranding
            " class="sm:hidden md:hidden bg-primary  px-5 py-3 rounded-xl text-white font-bold sm:mt-2" target="_blank">
            <span class="text-xl">
              Conheça a Bext
            </span>
          </a>
        </div>
        <div class="w-7/12 sm:w-full md:w-full px-8">
            <video
              autoplay
              loop
              muted
              playsinline
              :src="$options.imageConfig.brand.loadingBrandChangeLight.image"
              class="h-auto w-full  mx-auto xl:w-10/12"></video>
        </div>
        <div class="pt-12 mx-auto">
          <a :href="$options.information.linkRebranding
            " class="lg:hidden xl:hidden bg-primary px-5 py-3 rounded-xl text-white font-bold sm:mt-2" target="_blank">
            <span class="text-xl">
              Conheça a Bext
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Rebranding',
  data() {
    return {

    }
  },
})
</script>