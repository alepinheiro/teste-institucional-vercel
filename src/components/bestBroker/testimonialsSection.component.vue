<template>
  <section class="w-full">
    <div class="pt-10">
      <h2
        class="text-3xl sm:text-center py-5 max-w-5xl mx-auto text-center px-5"
      >
        Faça como eles e descubra como o
        <b
          >conhecimento da
          <span class="text-[#D0FE42]">SejaBest</span>
        </b>

        pode transformar a sua carreira.
      </h2>
      <div class="w-full py-5">
        <swiper-container
          :slides-per-view="4"
          :autoplay="{
            delay: 4700,
            disableOnInteraction: false,
          }"
          :space-between="30"
          :initial-slide="1"
          :centered-slides="true"
          :loop="true"
          :breakpoints="{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }"
        >
          <swiper-slide
            v-for="index of [1, 2, 3]"
            :key="index"
            class="h-auto mt-auto"
          >
            <img
              :src="`/images/getOutRent/testimonials/${index}.png`"
              alt=""
              srcset=""
            />
          </swiper-slide>
        </swiper-container>
        <div class="w-full py-5">
          <swiper-container
            :slides-per-view="3"
            :autoplay="{
              delay: 6200,
              disableOnInteraction: false,
            }"
            :space-between="30"
            :initial-slide="1"
            :centered-slides="true"
            :loop="true"
            :breakpoints="{
              320: {
                slidesPerView: 1.1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
            }"
          >
            <swiper-slide
              v-for="index in [4, 5, 6]"
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
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { register } from 'swiper/element/bundle'
register()
export default defineComponent({
  name: 'TestimonialsSection',
  data() {
    return {}
  },
})
</script>
