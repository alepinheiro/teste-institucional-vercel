<template>
  <div class="relative w-16 mx-auto my-10 transition-all z-50">

    <PlayVideo class="absolute h-16 top-0 -z-10 inset-x-0 " @click="handleOverlay" />

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PlayVideo from '@/components/base/buttons/playVideo.component.vue'
import Overlay from '@/components/base/overlays/youtubeVideo.component.vue'

export default defineComponent({
  name: 'VideoButton',
  components: { PlayVideo },
  props: {
    videoId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showVideo: false,
    }
  },
  methods: {
    handleOverlay() {
      this.showVideo = !this.showVideo
    },
  },
})
</script>
<style lang="scss">
.overlay {
  &::after {
    @apply absolute inset-0 bg-black/60 z-10 blur-lg;
    content: ' ';
  }
}

.bh-videoPlayer {
  @apply aspect-video;

  @screen sm {
    width: 80vw;
  }

  @screen md {
    width: 75vw;
  }

  width: 50vw;
  height: auto;
}
</style>
