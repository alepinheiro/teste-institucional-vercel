<template>
  <iframe :class="style" :src="url+'?controls=0'" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen>
  </iframe>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'videoBase',
  props: {
    url: String,
    style: String,
  },
  data() {
    return {
    }
  },
})
</script>
