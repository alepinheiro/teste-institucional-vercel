<template>
  <section class="flex flex-col gap-8 lg:gap-15">
    <Overlay
      v-if="showVideo"
      video-id="MVo7IfT01PU"
      @closeOverlay="showVideo = false"
    />
    <h2
      class="text-xl md:text-4xl lg:text-4xl xl:text-4xl text-primary font-bold px-5 text-center"
    >
      Entregando uma experiência Best
    </h2>

    <div class="hidden xl:flex xl:max-w-7xl xl:mx-auto">
        <ul class="flex flex-row flex-wrap gap-5">
          <li
            v-for="{ title, description, image } of cards"
            :key="title"
            class="flex flex-row rounded-xl border border-[#D9D9D9] h-68 w-1/3 flex-grow"
          >
            <div
              class="md:h-68 overflow-hidden rounded-l-xl rounded-r-none w-1/3"
            >
              <img
                :src="image"
                alt=""
                class="object-cover w-full h-full"
                loading="eager"
              />
              <!-- <PlayButton
              class="absolute inset-0 z-10"
              @click="showVideo = true"
            /> -->
            </div>
            <div
              class="flex flex-col gap-4 w-2/3 p-10 my-auto text-textPrimary cursor-default"
            >
              <h3 class="text-xl xl:text-2xl font-bold">
                {{ title }}
              </h3>
              <p>
                {{ description }}
              </p>
            </div>
          </li>
        </ul>
      </div>

    <div
      class="md:flex lg:flex md:flex-row lg:flex-row md:gap-2 lg:gap-2 md:items-center lg:items-center md:max-w-[663px] lg:max-w-5xl md:mx-auto lg:mx-auto xl:hidden"
    >
      <div class="bestExperiencePrev hidden md:block lg:block xl:block text-textSecondary hover:text-primary h-8 w-8">
        <i class="fa-solid fa-chevron-left w-full h-full"></i>
      </div>

      <component
        :is="'swiper-container'"
        ref="bestExperienceSwiper"
        v-bind="sliderOptions"
        :class="{ 'relative -z-50': showVideo }"
        class="w-full md:max-w-xl lg:max-w-xl "
      >
        <component
          :is="'swiper-slide'"
          v-for="{ title, description, image } of cards"
          :key="title"
          class="flex flex-col md:flex-row lg:flex-row rounded-xl w-full border border-[#D9D9D9] mb-12 h-auto"
        >
          <div
            class="relative w-full h-80 md:h-68 overflow-hidden rounded-t-xl md:rounded-l-xl lg:rounded-l-xl md:rounded-r-none lg:rounded-r-none -z-10"
          >
            <img
              :src="image"
              alt=""
              class="object-cover object-left-center w-full h-full"
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

      <div class="bestExperienceNext hidden md:block lg:block xl:block text-textSecondary hover:text-primary h-8 w-8">
        <i class="fa-solid fa-chevron-right w-full h-full"></i>
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
    image: '/images/aboutUs/bestExperience/allan.webp',
  },
  {
    title: 'Um time de especialistas',
    description:
      'Um time de especialistas altamente qualificado e certificado em relação a operação e produto. ',
    image: '/images/aboutUs/bestExperience/bruna.webp',
  },
  {
    title: 'Plataforma multibancos e multiprodutos',
    description:
      'Aqui, você simula apenas uma vez, e tem acesso a mais de 5 produtos, em mais de 20 instituições. ',
    image: '/images/aboutUs/bestExperience/gaspar.webp',
  },
  {
    title: 'Foco no cliente',
    description:
      'Por ter o foco exclusivamente em você, conseguimos entregar as melhores taxas do mercado dentro dos melhores produtos. ',
    image: '/images/aboutUs/bestExperience/gabrielle.webp',
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
