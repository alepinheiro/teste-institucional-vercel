<template>
  <div>
    <!-- // eslint-disable-next-line vue/attribute-hyphenation -->
    <headVideo :hide-menu="true"/>
    <div class="gradientPrimaryToSecondary">
          <section2 />
          <section3 />
          <section4 />
    </div>
    <rodape />
  </div>
  <FooterComponent  />
  </template>

<script>

import { defineComponent } from 'vue';
import headVideo from '@/components/vehicle/BestCarLP/headVideo.vue';
import section2 from '@/components/vehicle/BestCarLP/section2.vue';
import section3 from '@/components/vehicle/BestCarLP/section3.vue';
import section4 from '@/components/vehicle/BestCarLP/section4.vue';
import rodape from '@/components/base/bannerBottomPage.vue';

export default defineComponent({
  name: 'BestCarLP',
  components: {
    headVideo,
    section2,
    section3,
    section4,
    rodape
  }
})
</script>
<style></style>