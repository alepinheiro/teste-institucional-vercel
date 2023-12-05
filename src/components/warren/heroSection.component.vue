<template>
  <section
    class="px-5 flex flex-col gap-6 items-center pt-18 pb-40 mb-36 relative z-0"
  >
    <img
      src="/images/warren/mobile/amanhecer.png"
      class="absolute -z-10 top-0 w-full h-full object-fill"
      alt="background"
    />
    <LogoWarrenSVG class="flex mx-auto h-auto w-44 text-white" />
    <h1 class="text-2xl font-bold text-center text-white">
      Fazer crédito toma tempo, mas não precisa ser o seu
    </h1>
    <img src="/images/warren/sejaBestLogosWhite.svg" alt="" srcset="" />
    <CustomButton :text="'Quero simular meu crédito'" @click="onButtonClick" />
    <img
      src="/images/warren/proDisplay@1x.png"
      srcset="
        /images/warren/proDisplay@1x.png 1x,
        /images/warren/proDisplay@2x.png 2x,
        /images/warren/proDisplay@4x.png 4x,
      "
      sizes="(max-width: 600px) 200px, 400px"
      class="absolute -bottom-1/4 z-10 h-64"
      alt=""
    />
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
