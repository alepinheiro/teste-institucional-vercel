<template>
  <section class="overflow-hidden text-center relative h-48 flex">
    <span
      id="slogan"
      ref="slogan"
      class="text-[80px] md:text-[140px] lg:text-[140px] xl:text-[140px] whitespace-nowrap text-textPrimary absolute inset-0 h-fit my-auto px-5 "
    >
      Sem
      <b> filas. </b>
      Sem
      <b> gerentes. </b>
      Sem
      <b> complexidade. </b>
      Sem
      <b> filas. </b>
      Sem
      <b> gerentes. </b>
      Sem
      <b> complexidade. </b>
    </span>
  </section>
</template>
<script lang="ts" setup>
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

gsap.registerPlugin(ScrollTrigger)
const slogan = ref<HTMLDivElement | null>(null)

const animateSlogan = (element: HTMLDivElement | null) => {
  if (!element) return
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
    },
    x: -element.offsetWidth,
    repeat: -1,
    duration: 5,
    ease: 'none',
  })
}

onMounted(() => {
  animateSlogan(slogan.value)
})
</script>
