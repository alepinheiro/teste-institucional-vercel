<template>
  <section class="flex flex-col py-10">
    <h2
      class="text-white text-4xl font-bold text-center sm:text-xl md:text-base"
    >
      Conquiste a sua <br class="lg:hidden xl:hidden md:hidden" />
      <span class="bg-primary p-1"> independência imobiliária </span>
      <br class="lg:hidden xl:hidden md:hidden" />
      assim como eles:
    </h2>
    <div class="w-full bg-white h-48">
      <swiper-container
        :slides-per-view="3"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :space-between="spaceBetween"
        :centered-slides="true"
        :pagination="{
          hideOnClick: true,
        }"
        :breakpoints="{
          768: {
            slidesPerView: 3,
          },
        }"
        @progress="onProgress"
        @slide-change="onSlideChange"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
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
  setup() {
    const spaceBetween = 10
    const onProgress = (e) => {
      const [swiper, progress] = e.detail
      console.log(progress)
    }

    const onSlideChange = (e) => {
      console.log('slide changed')
    }

    return {
      spaceBetween,
      onProgress,
      onSlideChange,
    }
  },
  data() {
    return {}
  },
  methods: {
    onSwiper(event) {
      console.log(event)
    },
    onSlideChange(event) {
      console.log(event)
    },
  },
})
</script>
