<template>
  <section class="flex flex-col gap-8">
    <Overlay
      v-if="showVideo"
      video-id="MVo7IfT01PU"
      @closeOverlay="showVideo = false"
    />
    <h2 class="text-xl text-primary font-bold px-5 text-center">
      Entregando uma experiência Best
    </h2>

    <component
      :is="'swiper-container'"
      v-bind="sliderOptions"
      :class="{ 'relative -z-50': showVideo }"
      class="w-full"
    >
      <component
        :is="'swiper-slide'"
        v-for="{ title, description, image } of cards"
        :key="title"
        class="flex flex-col rounded-xl overflow-hidden w-full border border-[#D9D9D9] mb-12 h-auto"
      >
        <div class="relative w-full h-48 overflow-hidden">
          <img :src="image" alt="" class="object-cover" loading="lazy" />
          <PlayButton class="absolute inset-0 z-10" @click="showVideo = true" />
        </div>
        <div class="flex flex-col gap-4 p-4 text-textPrimary">
          <h3 class="text-xl font-bold">
            {{ title }}
          </h3>
          <p>
            {{ description }}
          </p>
        </div>
      </component>
    </component>
  </section>
</template>

<script lang="ts" setup>
import { SwiperOptions } from 'swiper/types'
import PlayButton from '@/components/base/buttons/playVideo.component.vue'
import Overlay from '@/components/base/overlays/youtubeVideo.component.vue'
import { ref } from 'vue'

const sliderOptions: SwiperOptions = {
  spaceBetween: 20,
  slidesPerView: 1.2,
  centeredSlides: true,
  autoHeight: false,
  pagination: true,
  loop: true,
  autoplay: {
    delay: 8000,
  },
  breakpoints: {
    767: {
      slidesPerView: 2.5,
    },
    1021: {
      slidesPerView: 3.5,
    },
    1277: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    1919: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
}

const showVideo = ref<boolean>(false)

const cards = [
  {
    title: 'Assessoria personalizada',
    description:
      'Um assessor(a) pronto para entender todas as suas necessidades e adaptar-se a elas. ',
    image: 'http://unsplash.it/1000/1000?random=0&blur&gravity=center',
  },
  {
    title: 'Um time de especialistas',
    description:
      'Um time de especialistas altamente qualificado e certificado em relação a operação e produto. ',
    image: 'http://unsplash.it/1000/1000?random=1&blur&gravity=center',
  },
  {
    title: 'Plataforma multibancos e multiprodutos',
    description:
      'Aqui, você simula apenas uma vez, e tem acesso a mais de 5 produtos, em mais de 20 instituições. ',
    image: 'http://unsplash.it/1000/1000?random=2&blur&gravity=center',
  },
  {
    title: 'Foco no cliente',
    description:
      'Por ter o foco exclusivamente em você, conseguimos entregar as melhores taxas do mercado dentro dos melhores produtos. ',
    image: 'http://unsplash.it/1000/1000?random=3&blur&gravity=center',
  },
]
</script>
<style lang="scss" scoped>
::part(bullet) {
  background: #d9d9d9;
  opacity: 100;
}
::part(bullet-active) {
  @apply scale-150 transition-all bg-primary;
}
</style>