<template>
<div>
  <div class="bgBannerPrimary">
    <div class="maxWidth  h-screen" >
      <topbarComponent position="relative" />
    </div>
  
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import topbarComponent from '@/components/structure/topbar.component.vue';
export default defineComponent({
  name: 'Home',
  components:{
    topbarComponent 
  },
  data() {
    return {
      isVisible:false,
    }
  },
})
</script>
