<template>
  <section class="flex flex-col py-10 h-auto w-full mx-auto">
    <h2
      class="text-white text-4xl font-bold text-center sm:text-xl md:text-base max-w-7xl mx-auto pb-5"
    >
      Conquiste a sua <br class="lg:hidden xl:hidden md:hidden" />
      <span class="bg-primary p-1"> independência imobiliária</span>
      <br class="lg:hidden xl:hidden md:hidden" />
      assim como eles:
    </h2>
    <div class="w-full py-5">
      <swiper-container
        :slides-per-view="4"
        :autoplay="{
          delay: 4700,
          disableOnInteraction: false,
        }"
        :space-between="spaceBetween"
        :initial-slide="2"
        :centered-slides="true"
        :loop="true"
        :breakpoints="breakpoints"
      >
        <swiper-slide
          v-for="index in [1, 2, 3, 4, 5, 6]"
          :key="index"
          class="h-auto mt-auto"
          loading="lazy"
        >
          <img
            loading="lazy"
            :src="`/images/getOutRent/testimonials/${index}.png`"
            alt=""
            srcset=""
          />
        </swiper-slide>
      </swiper-container>
    </div>
    <div class="w-full py-5">
      <swiper-container
        :slides-per-view="4"
        :autoplay="{
          delay: 6200,
          disableOnInteraction: false,
        }"
        :space-between="spaceBetween"
        :initial-slide="3"
        :centered-slides="true"
        :loop="true"
        :breakpoints="breakpoints"
      >
        <swiper-slide
          v-for="index in [4, 5, 6, 1, 2, 3]"
          :key="index"
          class="h-auto mb-auto"
        >
          <img
            :src="`/images/getOutRent/testimonials/${index}.png`"
            alt=""
            srcset=""
          />
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { register } from 'swiper/element/bundle'
register()

export default defineComponent({
  name: 'BannerCommentsCarousel',
  data() {
    const spaceBetween = 30
    return {
      spaceBetween,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween,
        },
      },
    }
  },
})
</script>

<style lang="scss" scoped>
swiper-slide:not(.swiper-slide-active) {
  @apply opacity-50 transition-opacity;
}
</style>
