<template>
  <section class="w-full py-18">
    <div class="flex flex-col gap-12">
      <h2
        class="text-3xl sm:text-center py-5 max-w-2xl mx-auto text-center px-5 text-white"
      >
        Conquiste a sua
        <b class="bg-[#0524DD]"> independência imobiliária </b>

        assim como eles:
      </h2>
      <div class="flex flex-col gap-5">
        <div class="w-full">
          <swiper-container :="swiperParamsTop" class="h-full w-full">
            <swiper-slide
              v-for="index of [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]"
              :key="index"
              class="h-full mt-auto w-full"
            >
              <img
                :src="`/images/testimonials/${index}.png`"
                class="object-contain w-full h-full"
                alt=""
                srcset=""
              />
            </swiper-slide>
          </swiper-container>
        </div>
        <div class="w-full">
          <swiper-container :="swiperParamsBottom">
            <swiper-slide
              v-for="index in [4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3]"
              :key="index"
              class="h-auto mb-auto"
            >
              <img
                :src="`/images/testimonials/${index}.png`"
                class="object-contain w-full h-full"
                alt=""
                srcset=""
              />
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { SwiperOptions } from 'swiper/types'

export default defineComponent({
  name: 'TestimonialsSection',
  setup() {
    const swiperParamsTop: SwiperOptions = {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: false,
      loop: true,
      centeredSlides: true,
      height: 200,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.3,
        },
        1024: {
          slidesPerView: 2.1,
        },
        1279: {
          slidesPerView: 3.3,
        },
      },
    }

    const swiperParamsBottom: SwiperOptions = {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: false,
      loop: true,
      centeredSlides: true,
      height: 200,
      autoplay: {
        delay: 5300,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
        },
        1024: {
          slidesPerView: 2.3,
        },
        1279: {
          slidesPerView: 3.7,
        },
      },
    }

    return {
      swiperParamsBottom,
      swiperParamsTop,
    }
  },
  data() {
    return []
  },
})
</script>
<style lang="scss" scoped>
swiper-slide:not(.swiper-slide-active) {
  @apply opacity-50 transition-opacity;
}
</style>
