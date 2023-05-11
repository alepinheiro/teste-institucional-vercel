<template>

<div>
  <HeadVideo :hide-menu="false"/>
  <div class="gradientPrimaryToSecondary">
        <Section2 />
        <Section3 />
        <Section4 />
  </div>
  <Rodape />
</div>

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import HeadVideo from '@/components/vehicle/BestCarLP/headVideo.vue';
import Section2 from '@/components/vehicle/BestCarLP/section2.vue';
import Section3 from '@/components/vehicle/BestCarLP/section3.vue';
import Section4 from '@/components/vehicle/BestCarLP/section4.vue';
import Rodape from '@/components/base/bannerBottomPage.vue';

export default defineComponent({
    name:'BestCarLP',
    components: {
      Section2,
      Section3,
      Section4,
      HeadVideo,
      Rodape
    }
})
</script>

<style>

.splide__arrow svg{
  fill: #1c79fa;
}

</style>