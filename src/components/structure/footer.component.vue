<template>
<div class="w-full bg-complementaryColor3">
  <div class="w-full flex justify-center">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'footer',
  data() {
    return {
      isVisible:false,
    }
  },
})
</script>
