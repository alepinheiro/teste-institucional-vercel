<template>
  <div>
    <HeadVideo :showMenu="showMenu" />
    <div class="gradientPrimaryToSecondary">
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
    <BestPlay class="bg-secondary" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeadVideo from '@/components/vehicle/BextCarLP/headVideo.vue'
import Section2 from '@/components/vehicle/BextCarLP/section2.vue'
import Section3 from '@/components/vehicle/BextCarLP/section3.vue'
import Section4 from '@/components/vehicle/BextCarLP/section4.vue'
import BestPlay from '@/components/base/sections/bestPlay/index.component.vue'
export default defineComponent({
  name: 'BextCarLP',
  components: {
    HeadVideo,
    Section2,
    Section3,
    Section4,
    BestPlay 
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
