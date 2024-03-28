<template>
  <div>
    <HeadVideo :showMenu="showMenu" />
    <div class="gradientPrimaryToSecondary">
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
    <Rodape />
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeadVideo from '@/components/vehicle/BestCarLP/headVideo.vue'
import Section2 from '@/components/vehicle/BestCarLP/section2.vue'
import Section3 from '@/components/vehicle/BestCarLP/section3.vue'
import Section4 from '@/components/vehicle/BestCarLP/section4.vue'
import Rodape from '@/components/base/bannerBottomPage.vue'

export default defineComponent({
  name: 'BestCarLP',
  components: {
    HeadVideo,
    Section2,
    Section3,
    Section4,
    Rodape,
  },
  props: {
    showMenu: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
})
</script>
