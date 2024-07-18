<template>
  <section class="w-full py-18">
    <div class="flex flex-col gap-12">
      <h2
        class="text-3xl sm:text-center py-5 max-w-2xl mx-auto text-center px-5">
        Faça como eles e descubra como o
        <b
          >conhecimento da
          <span class="text-[#D0FE42]">Bext</span>
        </b>

        pode transformar a sua carreira.
      </h2>
      <div class="flex flex-col gap-5">
        <div class="w-full">
          <Swiper
            v-bind="{
              loop: true,
              height: 200,
              slidesPerView: 4,
              spaceBetween: 30,
              pagination: false,
              centeredSlides: true,
              modules: [Autoplay],
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
            }"
            class="h-full w-full">
            <SwiperSlide
              v-for="index of [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]"
              :key="index"
              class="h-full mt-auto w-full">
              <ResponsiveImage
                :imagePath="`/images/testimonials/${index}.png`"
                :imgAttrs="{
                  class: 'object-contain',
                }"
                class="w-full h-full" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="w-full">
          <Swiper
            v-bind="{
              loop: true,
              height: 200,
              slidesPerView: 3,
              spaceBetween: 30,
              pagination: false,
              centeredSlides: true,
              modules: [Autoplay],
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
            }">
            <SwiperSlide
              v-for="index in [4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3]"
              :key="index"
              class="h-auto mb-auto">
              <ResponsiveImage
                :imagePath="`/images/testimonials/${index}.png`"
                :imgAttrs="{
                  class: 'object-contain',
                }"
                class="w-full h-full" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay } from 'swiper/modules';

  export default defineComponent({
    name: 'TestimonialsSection',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        Autoplay,
      };
    },
    data() {
      return [];
    },
  });
</script>
<style lang="scss" scoped>
  .swiper-slide:not(.swiper-slide-active) {
    @apply opacity-50 transition-opacity ease-in-out;
  }
</style>
