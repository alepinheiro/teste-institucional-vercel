<template>
  <section
    class="relative z-0 min-h-screen h-[90vh] flex flex-col items-stretch overflow-hidden"
  >
    <div
      class="h-4/5 flex flex-grow bg-[url(/images/warren/desktop/amanhecer.png)] bg-cover px-5"
    >
      <div
        class="md:max-w-2xl lg:max-w-5xl xl:max-w-6xl m-auto w-full xl:flex xl:flex-row gap-5"
      >
        <div
          class="xl:h-134 flex flex-col gap-5 md:gap-8 lg:gap-8 xl:gap-8  items-center md:items-start lg:items-start xl:items-start xl:justify-between md:w-5/6 lg:w-4/6 xl:w-1/2 xl:flex-1"
        >
          <LogoWarrenSVG class="flex h-auto w-44 text-white" />
          <h1
            class="text-2xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-center md:text-start lg:text-start xl:text-start text-white"
          >
            Fazer crédito toma tempo, mas não precisa ser o seu
          </h1>
          <img src="/images/warren/sejaBestLogosWhite.svg" alt="" srcset="" />
          <CustomButton
            :text="'Quero simular meu crédito'"
            @click="onButtonClick"
          />
        </div>
        <div class="hidden xl:block xl:flex-1 relative h-auto">
          <img
            src="/images/warren/proDisplay@2x.png"
            class="absolute left-[20%] -top-[0%] scale-[130%]"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="h-1/5 flex w-full xl:h-0 xl:hidden">
      <img
        src="/images/warren/proDisplay@2x.png"
        srcset="
          /images/warren/proDisplay@1x.png 1x,
          /images/warren/proDisplay@2x.png 2x,
          /images/warren/proDisplay@4x.png 4x
        "
        class="h-80 md:h-96 md:scale-110 mx-auto inset-x-0 absolute md:left-auto lg:left-[63%] bottom-0 lg:h-5/6 xl:top-1/4 xl:left-auto xl:right-12 xl:h-2/3 scale-95"
        alt=""
      />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CustomButton from '@/components/warren/customButton.component.vue'
import LogoWarrenSVG from '@/components/warren/icons/logoWarrenSVG.component.vue'

export default defineComponent({
  name: 'HeroSection',
  components: {
    CustomButton,
    LogoWarrenSVG,
  },
  data() {
    return {}
  },
  methods: {
    onButtonClick() {
      console.log('Hero Button clicked')
    },
  },
})
</script>
