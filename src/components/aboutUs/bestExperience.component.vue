<template>
  <section class="flex flex-col gap-8">
    <Overlay
      v-if="showVideo"
      video-id="MVo7IfT01PU"
      @closeOverlay="showVideo = false"
    />
    <h2 class="text-xl md:text-4xl lg:text-4xl text-primary font-bold px-5 text-center">
      Entregando uma experiência Best
    </h2>

    <div class="md:flex lg:flex md:flex-row lg:flex-row md:gap-2 lg:gap-2 md:items-center lg:items-center md:max-w-[663px] lg:max-w-5xl md:mx-auto lg:mx-auto">
      <div class="bestExperiencePrev pb-10">
        <i class="fa-solid fa-chevron-left"></i>
      </div>

      <component
        :is="'swiper-container'"
        ref="bestExperienceSwiper"
        v-bind="sliderOptions"
        :class="{ 'relative -z-50': showVideo }"
        class="w-full md:max-w-xl lg:max-w-xl"
      >
        <component
          :is="'swiper-slide'"
          v-for="{ title, description, image } of cards"
          :key="title"
          class="flex flex-col md:flex-row lg:flex-row rounded-xl w-full border border-[#D9D9D9] mb-12 h-auto"
        >
          <div
            class="relative w-full h-48 md:h-68 overflow-hidden rounded-t-xl md:rounded-l-xl lg:rounded-l-xl md:rounded-r-none lg:rounded-r-none -z-10"
          >
            <img
              :src="image"
              alt=""
              class="object-cover w-full h-full"
              loading="lazy"
            />
            <!-- <PlayButton
              class="absolute inset-0 z-10"
              @click="showVideo = true"
            /> -->
          </div>
          <div
            class="flex flex-col gap-4 p-4 md:p-10 md:my-auto text-textPrimary cursor-default"
          >
            <h3 class="text-xl font-bold">
              {{ title }}
            </h3>
            <p>
              {{ description }}
            </p>
          </div>
        </component>
      </component>
      <div class="bestExperienceNext pb-10">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Overlay from '@/components/base/overlays/youtubeVideo.component.vue'
// import PlayButton from '@/components/base/buttons/playVideo.component.vue'
import { SwiperOptions } from 'swiper/types'
import { ref } from 'vue'

const sliderOptions: SwiperOptions = {
  spaceBetween: 20,
  slidesPerView: 1.2,
  centeredSlides: false,
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
      slidesPerView: 1,
      navigation: {
        nextEl: '.bestExperienceNext',
        prevEl: '.bestExperiencePrev',
      },
    },
    1277: {
      slidesPerView: 1,
      navigation: {
        nextEl: '.bestExperienceNext',
        prevEl: '.bestExperiencePrev',
      },
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
