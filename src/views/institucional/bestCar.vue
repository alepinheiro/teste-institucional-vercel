<template>
  <div>
    <HeadVideo :hideMenu="false" />
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
import { useObjectToQueryString } from '@/composables/useObjectToQueryString'

export default defineComponent({
  name: 'BestCarLP',
  components: {
    Section2,
    Section3,
    Section4,
    HeadVideo,
    Rodape,
  },
  mounted() {
    console.log(this.$route.query)
    this.$root.utms = useObjectToQueryString(this.$route.query)
  },
})
</script>

<style>
.splide__arrow svg {
  fill: #1c79fa;
}
</style>
