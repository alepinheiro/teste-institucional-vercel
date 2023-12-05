<template>
  <button class="warrenButton" @click="$emit('click')">
    <span class="text-white">
      {{ text }}
    </span>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CustomButton',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  emits: ['click'],
  data() {
    return {}
  },
})
</script>
<style scoped lang="scss">
.warrenButton {
  @apply px-10 py-5 rounded-lg font-bold transition-all bg-warren-darkCharcoal;

  &:hover {
    @apply opacity-90;
  }

  &:active {
    @apply opacity-80;
  }
}
</style>
