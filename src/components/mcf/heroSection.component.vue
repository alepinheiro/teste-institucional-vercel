<template>
  <section>
    <div
      class="flex flex-col h-screen md:h-[80vh] min-lg:h-[90vh] min-lg:relative overflow-hidden"
    >
      <div
        class="bg-mcf-freeSpeechAquamarine h-4/5 xl:h-full px-5 text-white flex"
      >
        <div
          class="flex flex-col items-center justify-center min-md:items-start gap-5 xl:gap-16 md:max-w-2xl lg:max-w-5xl xl:max-w-6xl m-auto w-full"
        >
          <Logo class="fill-white" />
          <div
            class="text-xl min-md:text-4xl font-bold text-center min-md:text-left md:w-3/4 min-lg:w-1/2"
          >
            Fazer crédito toma tempo, mas não precisa ser o seu
          </div>
          <img src="/images/warren/sejaBestLogosWhite.svg" alt="" srcset="" />
          <a
            :href="`${information.appSimulator}${$root.utms}`"
            target="_blank"
            class="bg-mcf-burntOrange font-bold py-5 px-10 rounded-lg text-center"
          >
            Quero simular meu crédito
          </a>
        </div>
      </div>
      <div
        class="h-1/5 min-lg:h-0 flex relative min-lg:static justify-center min-md:justify-end"
      >
        <div
          class="absolute w-72 md:w-1/2 lg:w-1/2 xl:w-3/5 bottom-0 -top-32 md:-top-64 lg:top-14 lg:-right-20 xl:top-10 xl:left-[45%] xl:-right-24"
        >
          <img
            src="/images/warren/proDisplay@4x.png"
            alt=""
            class="h-full w-fit xl:w-4/5 object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Logo from '@/components/mcf/icons/logoMcfSVG.component.vue'
import information from '@/configurations/information'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeroSection',
  components: {
    Logo,
  },
  data() {
    return {
      information,
    }
  },
})
</script>
