<template>
  <div>
    <headVideo :is-lp="true"/>
    <div class="gradientPrimaryToSecondary">
          <section2 />
          <section3 />
          <section4 />
    </div>
    <rodape />
  </div>
  </template>
  
<script>

import { defineComponent } from 'vue';
import section2 from '@/components/vehicle/BestCarLP/section2.vue';
import section3 from '@/components/vehicle/BestCarLP/section3.vue';
import section4 from '@/components/vehicle/BestCarLP/section4.vue';
import headVideo from '@/components/vehicle/BestCarLP/headVideo.vue';
import rodape from '@/components/base/bannerBottomPage.vue';

export default defineComponent({
  name: 'BestCarLP',
  components: {
    section2,
    section3,
    section4,
    headVideo,
    rodape
  }
})
</script>
<style></style>