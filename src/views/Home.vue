<template>
<div>
  <div class="bgBannerPrimary">
    <div class="maxWidth  h-screen" >
      <topbarComponent position="relative" />
      <div class="flex flex-wrap mt-24">
        <div class="text-white">
          <div class="text-3xl font-semibold ">Empréstimo com as menores taxas do mercado</div>
        </div>
        <div></div>
      </div>
      
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
